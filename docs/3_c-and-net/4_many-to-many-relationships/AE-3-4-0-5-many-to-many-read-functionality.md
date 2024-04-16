---
title: "📓 3.4.0.5 Many-to-Many Read Functionality"
day: weekend
id: 3-4-0-5-many-to-many-read-functionality
hide_table_of_contents: true
---

In the last lesson, we set up a many-to-many structure in our classes, created a join class, and configured and migrated our code into our database. Now we're ready to create controllers that will handle our new application structure. In this lesson, we'll focus on adding read functionality to the `ItemsController`, including the following:

* Creating the `TagsController` with READ functionality for all tags (the `Index()` action) and an individual tag (the `Details()` action).
* Adding a new navigation link on the homepage to access tags.
* Creating the views for index and details.
* Adding READ for join entities (viewing the tags that belong to each item and vice versa) in the following views:
  * A category's detail page.
  * An item's detail page.
  * A tag's detail page.

## READ: Creating the `TagsController` and `Index()` Action and View
---

Within the `ToDoList` production directory, create a new file called `TagsController.cs` within the `Controllers` directory and add the following code:

<div class="filename">Controllers/TagsController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace ToDoList.Controllers
{
  public class TagsController : Controller
  {
    private readonly ToDoListContext _db;

    public TagsController(ToDoListContext db)
    {
      _db = db;
    }

    public ActionResult Index()
    {
      return View(_db.Tags.ToList());
    }
  }
}
```

The `Index()` route should look familiar to those we've created in the `CategoriesController.cs` and `ItemsController.cs` with one shortcut: instead of saving the list of tags to a variable and passing that into the `View()` method, we pass in the method call `_db.Tags.ToList()` directly as the argument to `View()`.

Next, let's create the corresponding `Index.cshtml`. Within the `Views` directory, create another subdirectory called `Tags` and a file within called `Index.cshtml` with the following code:

<div class="filename">Views/Tags/Index.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@using ToDoList.Models;

<h1>Tags</h1>

@if (@Model.Count == 0)
{
  <h3>No tags have been added yet!</h3>
} 

@foreach (Tag tag in Model)
{
  <li>@Html.ActionLink($"{tag.Title}", "Details", new { id = tag.TagId })</li>
}

<p>@Html.ActionLink("Add new tag", "Create")</p>

<p>@Html.ActionLink("Home", "Index", "Home")</p>
```

### Adding Navigation for Tag Views from the Homepage

Next, let's add a link to our tags from the homepage of our To Do List app. Open up `ToDoList/Views/Home/Index.cshtml` and add the following action link:

<div class="filename">Views/Home/Index.cshtml</div>

```html
...

<p>@Html.ActionLink("See all tags", "Index", "Tags")</p>
```

## READ: Creating the Tags `Details()` Action and View
---

Next, let's add the ability to see the details of a single tag. In the view, we'll list the title of the tag as well as every item that is currently associated with that tag. That means we're going to have to deliver the tag object to the `Details.cshtml` view, as well as the join entities the tag is associated with.

First, let's add the `Details()` action to the `TagsController.cs`:

<div class="filename">Controllers/TagsController.cs</div>

```csharp
... 

    public ActionResult Details(int id)
    {
      Tag thisTag = _db.Tags
          .Include(tag => tag.JoinEntities)
          .ThenInclude(join => join.Item)
          .FirstOrDefault(tag => tag.TagId == id);
      return View(thisTag);
    }

...
```

Notice the new method we are using: `ThenInclude()`. Let's go over what's happening here.

Our `_db.Tags` expression gives us a list of `Tag` objects from the database. However, if we completed the query now (using the `FirstOrDefault()` method), we'd simply have an `Tag` without its related `Category`s.

We need to `.Include(tag => tag.JoinEntities)` to load the `JoinEntities` property of each `Tag`. However, the `JoinEntities` property on an `Tag` is just a collection of join entities (`List<ItemTag>`), which are tracked by ids: `ItemTagId`, `TagId`, and `ItemId`. These are **not** the actual item objects related to a `Tag`.

We need the actual `Item` objects themselves, so we use `ThenInclude()` method to load the `Item` object associated with each `ItemTag`. Remember that an `ItemTag` is simply a reference to a relationship. Each `ItemTag` includes the id of a `Tag` as well as the id of an `Item`. With `.ThenInclude(join => join.Item)`, we actually fetch the associated `Item` object for each `ItemTag` join entity.

Next, let's create the `Tags/Details.cshtml` view. Again, we'll make sure to display the `Tag` details as well as all of the `Item` objects associated with each Tag.

<div class="filename">Views/Tags/Details.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@using ToDoList.Models
@model ToDoList.Models.Tag

<h2>Tag Details</h2>
<hr />
<h3>@Html.DisplayNameFor(model => model.Title): @Html.DisplayFor(model => model.Title)</h3>

@if(@Model.JoinEntities.Count == 0)
{
  <p>This tag does not belong to any items.</p>
}
else
{
  <h4>Items the tag belongs to:</h4>
  <ul>
  @foreach(ItemTag join in Model.JoinEntities)
  {
    <li>@join.Item.Description</li>
  }
  </ul>
}

<p>@Html.ActionLink("Back to list", "Index")</p>
```

Most of this code should look familiar, so we'll point out a few important pieces:

* We have an `@using` directive for `ToDoList.Models` so that we can reference the `ItemTag` class in our `foreach` loop.
* We also have an `@model` directive for `ToDoList.Models.Tag` so that we can use the strongly typed HTML helper methods `Html.DisplayNameFor()` and `@Html.DisplayFor`. 
* Notice that we access `@Model.JoinEntities.Count` in our conditional: with this line of code, we are checking if the `List<ItemTag>` that we save to the `Tag.JoinEntities` property is empty, and if so, we deliver a message to the user stating that there are no items associated with the tag we're looking at.
* If the `List<ItemTag>` is not empty, then we loop through the `Tag.JoinEntities` property and display each item's description: `<li>@join.Item.Description</li>`. A few notes:
  * The variable `join` represents a single `ItemTag` join entity.
  * To get the Item's description, we need to go through the `ItemTag.Item` property, which contains all of the `Item` object's data.

## READ for Join Entities in the Item Details View
---

Next, we'll update the `Details.cshtml` views for both `Categories` and `Items` to display tags. 

We'll start with updating `Views/Items/Details.cshtml`. Right now this view shows the description of the item along with the category it belongs to. After the update we make, the view will also include a list of tags that are associated with the item.

Here's the updated code:

<div class="filename">Views/Items/Details.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@using ToDoList.Models
@model ToDoList.Models.Item

<h2>Item Details</h2>
<hr />
<h3>@Html.DisplayNameFor(model => model.Description): @Html.DisplayFor(model => model.Description)</h3>  
<h3>@Html.DisplayNameFor(model => model.Category): @Html.DisplayFor(model => model.Category.Name)</h3>

@if(@Model.JoinEntities.Count == 0)
{
  <p>This item does not have any tags yet!</p>
}
else
{
  <h4>This item has the following tags:</h4>
  <ul>
    @foreach(ItemTag join in Model.JoinEntities)
    {
      <li>Tag: @join.Tag.Title</li>
    }
  </ul>
}

<p>@Html.ActionLink("Back to list", "Index")</p>
<p>@Html.ActionLink("Edit Item or Category", "Edit", new { id = Model.ItemId })</p>
<p>@Html.ActionLink("Delete Item", "Delete", new { id = Model.ItemId })</p>
```

The above addition looks very similar to how we display a list of items that belong to a tag. The main difference is in the naming. In summary, if the `Item.JoinEntities.Count` is equal to zero, then there are no tags that are associated with the item, so we deliver a message to the user about this. Otherwise, we loop through the `Item.JoinEntities` property, and for each join entity we access the `Tag` property to display the tag's title.

With our view ready to display join entities, we now need to update the `Details()` action in the `ItemsController.cs` to fetch the join entities and tags from the database when we get the data for the item. Here's the update we'll make:

<div class="filename">Controllers/ItemsController.cs</div>

```csharp
... 

    public ActionResult Details(int id)
    {
      Item thisItem = _db.Items
          .Include(item => item.Category)
          .Include(item => item.JoinEntities)
          .ThenInclude(join => join.Tag)
          .FirstOrDefault(item => item.ItemId == id);
      return View(thisItem);
    }

...
```

What we've done is add a new `Include()` method to fetch the join entities, and a `ThenInclude()` method to fetch the actual tag object for each join entity. 

Notice how we list an `Include()` method for each navigation property in the `Item` class: `Item.Category` and `Item.JoinEntities`. We can do this for as many navigation properties as we have and need to fetch. 

As always, we end our database query with `FirstOrDefault()` if we want to fetch one object, or `ToList()` if we want to fetch a list of objects. There are many other methods we can use like `OrderBy()` or `ToDictionary()`. If you have not already done so, check out the [MS Docs on the `System.Linq.Enumerable` class methods](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable?view=net-6.0#methods) to learn about other methods we can use to query our database. 

## READ for Join Entities in the Category Details View
---

Next, we'll update our category details view to display not just the items that belong to each category, but also the tags that belong to each item. This is what the finished product will look like:

![To Do List app's category details page that lists items and tags that belong to each item.](/images/c-sharp/c-sharp-category-details-many-to-many.png)

To make the above possible, we'll need a loop within a loop and some additional code to format our tags to display inline. Here's the updated code:

<div class="filename">Views/Category/Details.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@model ToDoList.Models.Category;
@using ToDoList.Models;
@using System.Collections.Generic;

<h2>Category Details</h2>
<hr />
<h3>@Html.DisplayNameFor(model => model.Name): @Html.DisplayFor(model => model.Name)</h3>

@if(@Model.Items.Count == 0)
{
  <p>This category does not contain any items</p>
}
else
{
  <h4>Items the category contains:</h4>
  <ul>
  @foreach(Item item in Model.Items)
  {
    string tags = "";
    @if(item.JoinEntities.Count == 0)
    {
      tags = "This item does not have any tags.";
    }
    else
    {
      List<string> tagList = new List<string>();
      @foreach(ItemTag join in item.JoinEntities)
      {
        tagList.Add(join.Tag.Title);
      }
      tags = String.Join(", ", tagList);
    }
    <li>@item.Description | Tags: @tags</li>
  }
  </ul>
}

<p>@Html.ActionLink("Back to categories", "Index")</p>
<p>@Html.ActionLink("Edit Category", "Edit", new { id = Model.CategoryId })</p>
<p>@Html.ActionLink("Delete Category", "Delete", new { id = Model.CategoryId })</p>
<p>@Html.ActionLink("Add new item", "Create", "Items")</p>
```

We'll focus on understanding the new code:

First notice that we've added a new `@using` directive for the `System.Collections.Generic;` namespace that allows use to use the `List<T>` type.

Next, notice how we've refactored the first (outer) `foreach` loop:

  * We've added branching logic to check whether there are any tags (join entities) associated with the item. If so, then we loop through the `Item.JoinEntities` property, and if not, then we display a message `"This item does not have any tags."`.
  * In order to display the list of tags inline next to an item, we make use of a variable called `tags`, and the `String.Join()` method:
    * We use the variable `tags` to hold the display value for tags. It will be either a message saying there are no tags, or all of the tags associated with the item, separated by a comma.
    * When the `tags` variable is set to the item's tags separated by a comma, we create this string by doing the following:
      * Creating an empty `List<string>` called `tagList`. 
      * Looping through the join entities and adding each join entity's tag's title to the `tagList`.
      * Using `String.Join()` to join each list item in `tagList` into a string, separating each item with a comma and space.

Phew! That is a lot of new logic. Note that you can format your code however you like and you don't need to create complicated formatting in your own projects. You also don't _need_ to display each item's tags on a category's detail page. However, you should consider what is best for a user's experience as far as navigating a site and accessing information. As always, have fun and try exploring something new. 

With our category `Details` view ready to display each item's join entities, we now need to revisit our `Details()` action in the `CategoriesController.cs` to fetch not only a list of items, but each's item's tags. 

Here's the update we'll make:

<div class="filename">Controllers/CategoriesController.cs</div>

```csharp
... 

    public ActionResult Details(int id)
    {
      Category thisCategory = _db.Categories
                                .Include(cat => cat.Items)
                                .ThenInclude(item => item.JoinEntities)
                                .ThenInclude(join => join.Tag)
                                .FirstOrDefault(category => category.CategoryId == id);
      return View(thisCategory);
    }

...
```

`Category` has only one navigation property, `Category.Items`; this is why there is only one `Include()` method call. If we want to access each item's tag(s), we need to use a series of `ThenInclude()` method calls to get the `Item.JoinEntities` data for each item, and then the `JoinEntity.Tag` tag data for each join entity.

We should now be able to run our application and navigate from the homepage to the tags index view. However, in order to view our new tag's details page (and the updates to our category and item details page), we'll have to first add some tags. Let's do that next.
