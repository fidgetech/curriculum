---
title: "📓 3.2.3.5 Objects Within Objects Interface Part 2"
id: 3235-objects-within-objects-interface-part-2
hide_table_of_contents: true
day: wednesday
---

`Item`s in our To Do List are now associated with `Category`s. Our application will prompt users to first create categories and then create `Item`s that belong to them. As such, there will **no longer be any `Item`s not associated with a parent `Category`.** This has several ramifications for how we'll organize our front end.

* Users will no longer be able to see `Item`s without first clicking on a `Category`. `Item`s will only be listed on the `Category` detail page, which is the `Show()` route on `CategoriesController`.

* In order to create a new `Item`, users first have to select the `Category` to which an `Item` will belong.

## RESTful Routing with Objects Within Objects
---

This new setup also affects our RESTful routing. Just to review:

> RESTful routing...maps HTTP methods (GET, POST, PATCH, DELETE) and CRUD actions (Create, Read, Update, Destroy) together in a conventional pattern...routes completing common actions (like creating, updating, or deleting objects) have names and paths that accurately reflect _what_ they're doing, with _which_ CRUD and HTTP verbs, upon what _type_ of object.

Because RESTful routing demands we communicate this information in the names of our routes and their paths, our own routes and paths must now communicate that `Item`s are nested within `Category`s.  

### General RESTful Routing with Objects Within Objects

RESTful routing conventions for applications that use objects within objects look like this:

<img src="https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/objects-within-objects-screenshot-1.png" width="100%" />

However, **not all applications use all routes depicted here**. Following RESTful routing doesn't require we use all routes. It just requires that the routes we _do_ need in our applications follow these conventions.

### To Do List RESTful Routing with Objects Within Objects

For our To Do List, we'll use these routes. Notice how they differ from our current setup:

<img src="https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/objects-within-objects-screenshot-2.png" width="100%" />

URL paths for all `Item` routes now include a fragment detailing their parent `Category` _before_ the fragment containing `Item` information.

For example, the path to display an `Item` detail page used to be `/items/{id}`. It is now `/categories/{categoryId}/items/{itemId}`. This is to denote that `Item`s now belong to a specific `Category`. It also denotes _which_ `Category` they belong to by including the `Category`'s ID right in the URL path.

## RESTful Routing & Objects Within Objects Refactor
---

Let's tweak our application to follow objects within objects RESTful standards.

### Item Index Route

As discussed, users will no longer see `Item`s without first clicking on a parent `Category`. `Item`s will only be listed on the `Category` detail page (its `Show()` route). That means we no longer need an `Index()` route on `ItemsController`. Go ahead and **remove the `Index()` action from `ItemsController.cs` and delete its corresponding view at `Views/Items/Index.cshtml` now.**

### Item DeleteAll Route

Our `Item.ClearAll()` method won't clear all items as expected anymore. That's because we're not just saving each item to the static list `Item._instances`, we're also saving each `Item` object to the `Category.Items` property which is a list of all `Item` objects belonging to each `Catgeory`.

There's nothing wrong with our `Item.ClearAll()` method, and we still use it in our tests so we won't update that method. Instead, if we want to add functionality to clear the items from a `Category`, we'll need to create a new `Category` method that handles clearing out the `Category.Items` property. We'll leave that for further exploration. 

For now, simply delete the `DeleteAll()` action in the `ItemsController.cs` along with the `Views/Items/DeleteAll.cshtml` view, as it is no longer functional.

### Item Show Route (Detail Page)

To view an `Item`'s details, we first need to route ourselves to the `Category`'s details: the user will click on a `Category` in `Views/Categories/Index.cshtml` which will route to the category's details page at `Views/Categories/Show.cshtml`. 

The category details page lists all `Item`s that belong to that `Category`:

<div class="filename">ToDoList/Views/Categories/Show.cshtml</div>

```html
...

@foreach (Item item in @Model["items"])
{
  <li><a href='/categories/@Model["category"].Id/items/@item.Id'>@item.Description</a></li>
}

...
```

When the user clicks an `Item` from this list, they'll navigate to the `Item`'s detail (show) page. Notice the path in this link is `/categories/@Model["category"].Id/items/@item.Id`, which follows RESTful standards depicted in the tables above.

Let's update the existing `Show()` route on the `ItemsController` to handle this updated path:

<div class="filename">ToDoList/Controllers/ItemsController.cs</div>

```csharp
...

  [HttpGet("/categories/{categoryId}/items/{itemId}")]
  public ActionResult Show(int categoryId, int itemId)
  {
    Item item = Item.Find(itemId);
    Category category = Category.Find(categoryId);
    Dictionary<string, object> model = new Dictionary<string, object>();
    model.Add("item", item);
    model.Add("category", category);
    return View(model);
  }

...
```

* The path now includes `Category` information, which ensures our routes are now RESTfully named.

* Because the path includes both `Item` and `Category` IDs, we can locate the correct parent and child objects and pass them to our view in a `Dictionary`.

Let's also update this route's view to account for these changes:

<div class="filename">ToDoList/Views/Items/Show.cshtml</div>

```html
...

<h1>To Do List Item Details: </h1>

<h2>@Model["item"].Description</h2>
<h3>Category: @Model["category"].Name</h3>

<a href='/categories/@Model["category"].Id/items/new'>Add another item</a>
<a href='/categories'>View all categories</a>

...
```

Because our model data resides in a `Dictionary` named `model`, we use square bracket notation to access the two objects. We also add a line detailing which `Category` this `Item` belongs to.

If we attempt to view this new page in the browser, we'll get an error. That's because we need to add `Item`s to a `Category` before we can click one and view its details. However, the _Add a new item_ link on our category detail page is not working. This is because the link looks like this:

<div class="filename">ToDoList/Views/Categories/Show.cshtml</div>

```html
...

<p><a href='/categories/@Model["category"].Id/items/new'>Add a new item</a></p>

...
```

It links to the path `/categories/{categoryId}/items/new`. If we check our table above, we know this follows RESTful conventions. We just haven't updated our `ItemsController`'s `New()` route to use this path. Let's do this next.

### New Item Route

We'll update the `New()` route on our `ItemsController` to look like this:

<div class="filename">ToDoList/Controllers/ItemsController.cs</div>

```csharp
...

  [HttpGet("/categories/{categoryId}/items/new")]
  public ActionResult New(int categoryId)
  {
     Category category = Category.Find(categoryId);
     return View(category);
  }

...
```

The path now includes the ID of the `Category` we're adding a new `Item` to. Because it's in curly braces, we can grab this in our route's parameter to locate the `Category` object and pass it into the corresponding view.

Let's update this route's corresponding view so it displays the `Category` we're adding an `Item` to:

<div class="filename">ToDoList/Views/Items/New.cshtml</div>

```html
...

<h1>Add a new item to @Model.Name</h1>

<form action="/categories/@Model.Id/items" method="post">
  <input id="categoryId" name="categoryId" type="hidden" value="@Model.Id">
  <label for="itemDescription">Item Description</label>
  <input id="itemDescription" name="itemDescription" type="text">
  <button type='submit'>Add Item</button>
</form>

...
```

* We list the `Category` we're adding an `Item` to above the form.

* We've updated the form's `action` attribute to `/categories/@Model.Id/items` so it follows RESTful standards. This means we'll have to update the `Create()` route that processes this form's submissions, which we'll do soon.

* We've added a new input to our form, too: `<input id='categoryId' name='categoryId' type='hidden' value='@Model.Id'>`. This will pass the `Category` ID alongside the user's form input to the `Create()` route that processes this form's submission. However, since its input `type` is  `hidden`, it won't display anything to the user.

Why do we need to include the `Category`'s ID like this? This is because we now save all new `Item`s into a corresponding `Category`. When we create a new `Item` with this form, we'll need to know which `Category` it belongs to. Let's update the `Create()` route that processes this form's submissions next.

### Item `Create()` Route

Because new `Item`s all belong to `Category`s, the act of creating a new `Item` now alters our `Category` objects. As such, it's more accurate to say it's related to our `Category` model now.

To follow best practices, we'll move the `ItemsController`'s `Create()` route to the `CategoriesController`. This is standard practice in applications that use objects within objects like ours. We'll also update this route to accommodate our new objects within objects relationship:

<div class="filename">ToDoList/Controllers/CategoriesController.cs</div>

```csharp
...
    [HttpPost("/categories/{categoryId}/items")]
    public ActionResult Create(int categoryId, string itemDescription)
    {
      Dictionary<string, object> model = new Dictionary<string, object>();
      Category foundCategory = Category.Find(categoryId);
      Item newItem = new Item(itemDescription);
      foundCategory.AddItem(newItem);
      List<Item> categoryItems = foundCategory.Items;
      model.Add("items", categoryItems);
      model.Add("category", foundCategory);
      return View("Show", model);
    }
...
```

* We update this method's path to follow RESTful convention.

* The method now takes two arguments: the `categoryId` we passed into a hidden form field and an `itemDescription` that contains the user's form input.

* We create a new empty `Dictionary` named `model`.

* Using the `categoryId` provided as an argument, we locate the `Category` object our new `Item` should belong to and call it `foundCategory`.

* We then create a new `Item` object with the user's form input.

* We add the `newItem` to the `foundCategory` with our existing `AddItem()` method.

* We retrieve all other `Item`s that correspond to this category and add it to our `model`. We do this because the view we'll render at the end of this route requires this information.

* We also add the `foundCategory` to our `model`.

* Finally, we pass in our `model` data to `View()`, instructing it to render the `Category` detail page, which is the `Show.cshtml` view.

Even though `CategoriesController` already has a `Create()` route, they won't get mixed up because they have distinctly different paths. If this is confusing, it's fine to add a comment until it becomes second nature:

<div class="filename">ToDoList/Controllers/CategoriesController.cs</div>

```csharp
...

// This one creates new Items within a given Category, not new Categories:

[HttpPost("/categories/{categoryId}/items")]
public ActionResult Create(int categoryId, string itemDescription)
{
  Dictionary<string, object> model = new Dictionary<string, object>();
  Category foundCategory = Category.Find(categoryId);
  Item newItem = new Item(itemDescription);
  foundCategory.AddItem(newItem);
  List<Item> categoryItems = foundCategory.Items;
  model.Add("items", categoryItems);
  model.Add("category", foundCategory);
  return View("Show", model);
}

...
```

### Homepage

Finally, instead of linking to `Item` options from the homepage, let's link to `Category` options like this:

<div class="filename">ToDoList/Views/Home/Index.cshtml</div>

```html
...

<h1>Welcome to the To Do List!</h1>
<h3><a href='/categories'>View categories</a></h3>
<h3><a href='/categories/new'>Add a new category</a></h3>

...
```

After following all steps in this lesson, our `CategoriesController` will now look like this:

<div class="filename">ToDoList/Controllers/CategoriesController.cs</div>

```csharp
using System.Collections.Generic;
using System;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;

namespace ToDoList.Controllers
{
  public class CategoriesController : Controller
  {

    [HttpGet("/categories")]
    public ActionResult Index()
    {
      List<Category> allCategories = Category.GetAll();
      return View(allCategories);
    }

    [HttpGet("/categories/new")]
    public ActionResult New()
    {
      return View();
    }

    [HttpPost("/categories")]
    public ActionResult Create(string categoryName)
    {
      Category newCategory = new Category(categoryName);
      return RedirectToAction("Index");
    }

    [HttpGet("/categories/{id}")]
    public ActionResult Show(int id)
    {
      Dictionary<string, object> model = new Dictionary<string, object>();
      Category selectedCategory = Category.Find(id);
      List<Item> categoryItems = selectedCategory.Items;
      model.Add("category", selectedCategory);
      model.Add("items", categoryItems);
      return View(model);
    }

    // This one creates new Items within a given Category, not new Categories:
    [HttpPost("/categories/{categoryId}/items")]
    public ActionResult Create(int categoryId, string itemDescription)
    {
      Dictionary<string, object> model = new Dictionary<string, object>();
      Category foundCategory = Category.Find(categoryId);
      Item newItem = new Item(itemDescription);
      foundCategory.AddItem(newItem);
      List<Item> categoryItems = foundCategory.Items;
      model.Add("items", categoryItems);
      model.Add("category", foundCategory);
      return View("Show", model);
    }

  }
}
```


Our `ItemsController` looks like this:

<div class="filename">ToDoList/Controllers/ItemsController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;
using System.Collections.Generic;

namespace ToDoList.Controllers
{
  public class ItemsController : Controller
  {

    [HttpGet("/categories/{categoryId}/items/new")]
    public ActionResult New(int categoryId)
    {
       Category category = Category.Find(categoryId);
       return View(category);
    }

    [HttpGet("/categories/{categoryId}/items/{itemId}")]
    public ActionResult Show(int categoryId, int itemId)
    {
      Item item = Item.Find(itemId);
      Category category = Category.Find(categoryId);
      Dictionary<string, object> model = new Dictionary<string, object>();
      model.Add("item", item);
      model.Add("category", category);
      return View(model);
    }
  }
}
```

Again, notice how this follows the RESTful conventions depicted in the tables above.

We should now be able to build and run our application and navigate through it in the browser. Our front end can successfully manage our new objects within objects setup.

## Visual Reference
---

If you're having a hard time conceptualizing how to plan your routes, controllers, and views, consider creating a diagram like the one below. Route names here don't follow RESTful convention exactly, but this is just a demonstration:

<img src="https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/ToDoListActions%20.png" style={{width: "75%"}} />

Note: Open the image in a separate tab to see it at full size.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for To Do List: 8\_saving\_OWO\_and\_interface\_update](https://github.com/epicodus-lessons/section-2-to-do-list-csharp-net6/tree/8_saving_OWO_and_interface_update)**
