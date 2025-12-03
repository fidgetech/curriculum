---
title: "📓 3.3.2.4 Establishing a One-To-Many Relationship with Navigation Properties"
day: tuesday
id: 3-3-2-4-establishing-a-one-to-many-relationship-with-navigation-properties
hide_table_of_contents: true
---

In this lesson, we'll learn how to create database relationships using EF Core **navigation properties**. We'll add a one-to-many relationship between `Items` and `Categories` so that each `Item` belongs to a specific `Category`. 

## Adding a One-To-Many Relationship to To Do List
---

Before we get started, let's review one-to-many relationships. Let's say we have two classes, `Team` and `Player`. We can conceptualize a one-to-many relationship between `Team` and `Player` by recognizing the following:

* One `Team` has many `Player`s in it.s
* A `Player` may only belong to one `Team` at a time. 

We would integrate this one-to-many relationship into a database by making sure that each `Player` entry has a `TeamId` to denote which specific `Team` they belong to, "linking" the tables together. In this case, a `Player` entry can only have one `TeamId` value, because a `Player` can only belong to one team.

### Updating the Database

First, let's update our `to_do_list_with_ef_core` database to include a `categories` table. We'll also make updates so that we can establish a relationship between the `categories` and `items` tables.

* Create a `categories` table.
    * Add `CategoryId` as a column. It should be an `int`, `primary key`, `non null`, and `auto incrementing`.
    * Add `Name` as a column. It should be a `Varchar(255)`.
    * Don't forget to hit Apply and confirm that the changes actually happen.

* Add a `CategoryId` column of type `int` in the `items` table. Set the _Default/Expression_ to 0, to avoid `Null` errors. 
    * If you have existing data in your database, you will need to remove it or set the `CategoryId` column value to 0 for all items.

* Don't forget to hit Apply and confirm that the changes actually happen.

### Updating the ToDoListContext

First, we need to add a `Categories` DbSet to `ToDoListContext.cs`:

<div class="filename">Models/ToDoListContext.cs</div>

```csharp
using Microsoft.EntityFrameworkCore;

namespace ToDoList.Models
{
  public class ToDoListContext : DbContext
  {
    public DbSet<Category> Categories { get; set; }
    public DbSet<Item> Items { get; set; }
    
    public ToDoListContext(DbContextOptions options) : base(options) { }
  }
}
```

### Updating the `Category` Class and Creating a Navigation Property

Next, we'll completely update the old version of our `Category` class (found in `Models/Category.cs`):

<div class="filename">Models/Category.cs</div>

```csharp
using System.Collections.Generic;

namespace ToDoList.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public List<Item> Items { get; set; }
    }
}
```

Let's walk through this file together:

* The `Category` class includes a property for its ID and name.

* The `Category` class includes a public property called `Items` that will hold a `List` of all `Item`s that belong to a category.

* For EF Core, `Items` is a navigation property, specifically a "collection navigation property". 

A **navigation property** is a property on one entity (like `Category`) that includes a reference to a related entity (like `Item`). EF Core uses navigation properties to recognize when there is a relationship between two entities. 

In this case, EF Core sees that the `Items` property has the type `List<Item>` which references another entity `Item` within our project, and because of that is able to understand that there is a relationship between `Category` and `Item`. 

The `Items` property is more specifically categorized as a **collection navigation property** because it contains multiple entities. In this case, we have a collection (`List<>`) of multiple `Item` objects. 

Notably, **navigation properties are never saved in the database**. Instead, they are populated in our projects by EF Core from the data in the database. 

### Adding a Controller and Views

Next, we need to update our `CategoriesController` and replace the CRUD actions with our new Entity-backed ones. This controller will look like the `ItemsController` and views we completed in the previous lessons. Because we've already covered how to set up CRUD functionality, it's your task now to build out the controller and its corresponding views on your own. 

**We will further configure the `CategoriesController` and views later in this lesson, so pause now to create these files.**

### Adding New Links

Let's add a link in the homepage (`Home/Index.cshtml`) to go to our categories index view.

<div class="filename">Home/Index.cshtml</div>

```csharp
...
<p>@Html.ActionLink("See all categories", "Index", "Categories")</p>
```

Let's make sure to also add a link to the homepage in the `Categories/Index.cshtml` and `Items/Index.cshtml` views:

```csharp
<p>@Html.ActionLink("Home", "Index", "Home")</p>
```

Now that we've created CRUD functionality and the respective views for categories, let's go ahead and implement the `Category` to `Item` relationship into our application.

### Updating the `Item` Class to Include a Navigation Property for `Category`

Finally, we need to update the `Item` class to set up its new relationship to `Category`:

<div class="filename">Models/Item.cs</div>

```csharp
namespace ToDoList.Models
{
    ...
    {
        ...
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
```

Since each `Item` will be associated with a `Category`, the `Item` class now has a `CategoryId` property. The `CategoryId` property is the foreign key in our `items` database table that connects each `Item` with a `Category`.

We also include a new property called `Category` set to the `Category` object that the `Item` belongs to. This is the **navigation property** in our `Item` model that creates the one-to-many relationship between `Category` and `Item`.

More specifically, the `Category` property is called a **reference navigation property**, because it holds a reference to a single related entity. Now with the `Category` property in place, we can fetch the actual `Category` object when we fetch the `Item` object from the database. We'll see exactly how to do this next!

### Updating the `ItemsController` and `Index` View to Display the `Category`

Let's update our `ItemsController` so that whenever an `Item` is loaded, its corresponding `Category` is available as well. We can do so by using [Entity's built-in `Include()` method](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.entityframeworkqueryableextensions.include?view=efcore-6.0). We'll make a small update to the `Index()` action in our `ItemsController`. Note that we're including a new `using` directive for `Microsoft.EntityFrameworkCore` so that we can use the `Include()` method.

<div class="filename">Controllers/ItemsController.cs</div>

```csharp
using Microsoft.EntityFrameworkCore;

...

public ActionResult Index()
{
    List<Item> model = _db.Items
                          .Include(item => item.Category)
                          .ToList();
    return View(model);
}
...
```

With this update, we're having EF Core do the following: for each `Item` in the database, include the `Category` it belongs to, and then put all the `Item`s into list.

When we tell EF Core to `.Include(item => item.Category)`, we're telling it to go into the `categories` table and retrieve the `Category` object with all of its data and then populate the `Item.Category` property with that data. 

If we don't explicitly tell EF Core to include the navigation property `Category`, it won't. We'll still get the `Item.ItemId`, `Item.Description`, and `Item.CategoryId` properties, but the navigation property `Category` will be empty.

Next, we'll update the Item `Index` view to display the category that each item belongs to. We'll add the name of the `Category` next to each `Item` in the view.

<div class="filename">Views/Items/Index.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@using ToDoList.Models;
@model List<ToDoList.Models.Item>;

<h1>Items</h1>

@if (@Model.Count == 0)
{
  <h3>No items have been added yet!</h3>
} 
else
{
  <ul>
    @foreach (Item item in Model)
    {
      <li>@Html.ActionLink($"{item.Description}", "Details", new { id = item.ItemId }) | @item.Category.Name</li>
    }
  </ul>
}

<p>@Html.ActionLink("Add new item", "Create")</p>
```

Our index view will now be able to show both an `Item` and the name of its related `Category` after we add a bit more code in the next few lessons!

### Updating the `CategoriesController` and `Details` View to Display the `Items` that Belong to Each `Category`

Next, let's use the `Include()` method to include and display the items that belong to each `Category`. We'll display this information on the `Category` details page.

First, let's update the Details action in the `CategoriesController.cs`:

<div class="filename">Controllers/CategoriesController.cs</div>

```csharp
using Microsoft.EntityFrameworkCore;

...

    public ActionResult Details(int id)
    {
      Category thisCategory = _db.Categories
                                  .Include(category => category.Items)
                                  .FirstOrDefault(category => category.CategoryId == id);
      return View(thisCategory);
    }

...
```

Here we state that we want to include the `Items` property, which tells EF Core to fetch every `Item` object belonging to the `Category`. 

Just like before, if we don't explicitly tell EF Core to include the data for the navigation property `Items` with the code `.Include(category => category.Items)`, it won't gather that data. However, we'll still get the `Category.CategoryId` and the `Category.Name` information.

Next, let's update the `Category` details view:

<div class="filename">Views/Categories/Details.cs</div>

```csharp
@{
  Layout = "_Layout";
}

@model ToDoList.Models.Category
@using ToDoList.Models

<h2>Category Details</h2>
<hr />
<h3>@Html.DisplayNameFor(model => model.Name): @Html.DisplayFor(model => model.Name)<h3>

@if (@Model.Items.Count == 0)
{
  <h3>No items have been added to this category yet!</h3>
} 
else
{
  <h3>Items:</h3>
  <ul>
    @foreach (Item item in Model.Items)
    {
      <li>@Html.ActionLink($"{item.Description}", "Details", "Items", new { id = item.ItemId })</li>
    }
  </ul>
}

<p>@Html.ActionLink("Edit Category", "Edit", new { id = Model.CategoryId })</p>
<p>@Html.ActionLink("Delete Category", "Delete", new { id = Model.CategoryId })</p>
<p>@Html.ActionLink("Back to list", "Index")</p>
```

Much of this code should look familiar, like using an if statement and looping through a list of objects. However, there's a two new changes to note in the update we've made:

* We've included a new `@using` directive for `ToDoList.Models`. This enables us to use the `Item` model in our view alongside the `Category` model which we've specified as the main `@model` that we're using in the view.
* Our `HTML.ActionLink` contains an additional argument in order to route to the `ItemsController`: note the 3rd argument of `"Items"`. If we don't include this, our `ActionLink` will route us to the category's `Details` view.

### What's Next?

At this point, we've set up the database to track a one-to-many relationship between `Item`s and `Category`s. However, there is still one key thing missing: there's no way for users to actually make the association between an `Item` and a `Category` in our application! In other words, we've set up the READ functionality for an association in our index view but users can't actually CREATE associations yet. In the next two lessons, we'll update the rest of our methods to add this functionality and learn about a property of Views called `ViewBag`.
