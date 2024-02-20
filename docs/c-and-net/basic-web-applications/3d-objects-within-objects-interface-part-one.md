---
title: "\U0001F4D3 3.2.3.4 Objects Within Objects Interface Part 1"
id: 3234-objects-within-objects-interface-part-1
slug: 3234-objects-within-objects-interface-part-1
hide_table_of_contents: true
sidebar_position: 36
day: wednesday
type: lesson
url: https://github.com/fidgetech/c-and-net/blob/main/3d_objects_within_objects_interface_part_one.md
---

In the last two lessons, we updated our back end logic to support `Category` objects. All To Do List `Item`s will now belong to a parent `Category`, allowing our users to better organize their tasks. As we've discussed, this setup is referred to as **objects within objects**.

With our back end logic now in place, we can begin to integrate new `Category` functionality into our MVC user interface. The next two lessons will walk through updating our MVC application to work with our new `Category`s.

## Integrating `Category`s into the MVC Front End
---

First, we need a page to display all `Category`s. We'll add a `CategoriesController` to manage areas of our app that work with `Category` objects. We'll start by creating a `CategoriesController.cs` file in the `ToDoList/Controllers` directory. Within it, we'll add standard controller setup:

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

  }
}
```

### Index Route

Next, let's define our `Category`-related routes. Just like `Item` routes, these will adhere to RESTful conventions.

First, we'll create an `Index()` route to display all `Category`s:

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

  }
}
```

Next, we'll add the corresponding view in a new `Views` subdirectory at `ToDoList/Views/Categories`. We'll call the file `Index.cshtml`:

<div class="filename">ToDoList/Views/Categories/Index.cshtml</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My To-Do List!</title>
    <link 
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
      crossorigin="anonymous">
  </head>
  <body>
    @using ToDoList.Models;

    <h1>Categories</h1>

    @if (@Model.Count == 0)
    {
      <h3>No categories have been added yet!</h3>
    } 

    @foreach (Category category in Model)
    {
      <h3><a href='/categories/@category.Id'>@category.Name</a></h3>
    }

    <p><a href='/'>Back home</a></p>
  </body>
</html>
```

* If no `Category`s exist in the model data, we display a message.

* If `Category`s do exist, we loop through them and display their names.

* The `<h3>` displaying their name is also a link to the path `'/categories/@category.Id'`. This will navigate to a detail page for specific `Category`s. We'll create this soon.

### New Route

Let's also ensure users can create new `Category`s with a form. We'll add a `New()` route:

<div class="filename">ToDoList/Controllers/CategoriesController.cs</div>

```csharp
...

  [HttpGet("/categories/new")]
  public ActionResult New()
  {
    return View();
  }

...
```

Here's the corresponding view. Notice this all follows RESTful convention:

<div class="filename">ToDoList/Views/Categories/New.cshtml</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My To-Do List!</title>
    <link 
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
      crossorigin="anonymous">
  </head>
  <body>
    <h1>Add a category</h1>
    <p>Add a category here:</p>

    <form action="/categories" method="post">
      <label for="categoryName">Category name</label>
      <input id="categoryName" name="categoryName" type="text">
      <button type="submit">Add</button>
    </form>

    <p><a href="/">Back home</a></p>
    <p><a href="/categories">Back to categories.</a></p>
  </body>
</html>
```

* The form's `method` is `"post"`. That means submitting this form will create and send an HTTP POST request.

* The `action` attribute is `"/categories"`. That means the path included with our POST request will be `"/categories"`.

### Create Route

To process submissions from this form, we'll need a route that handles POST requests with `"/categories"` paths. We'll call it `Create()` in order to follow RESTful conventions.

<div class="filename">ToDoList/Controllers/CategoriesController.cs</div>

```csharp
...

  [HttpPost("/categories")]
  public ActionResult Create(string categoryName)
  {
    Category newCategory = new Category(categoryName);
    return RedirectToAction("Index");
  }

...
```

* We specify this route handles POST requests with a `"/categories"` path by using the `[HttpPost("/categories")]` route decorator. This both matches our form and RESTful routing conventions.

* The route accepts a `categoryName` argument. This refers to the contents of the `categoryName` form field in the `New.cshtml` view.

* Within the route, we create a new `Category` with this name and then call the `RedirectToAction` method with "Index" passed in as the argument to send the user back to the Index route.

### Show Route

In the `Category` index view, we added links to each `Category` name:

<div class="filename">ToDoList/Views/Categories/Index.cshtml</div>

```html
...

@foreach (Category category in Model)
{
  <h3><a href='/categories/@category.Id'>@category.Name</a></h3>
}

...
```

This is so a user can click an individual `Category` from the list of all categories and navigate to a detail page displaying its information, including a list of the `Item`s associated with it. Let's create this detail page.

Following RESTful routing convention, the route will be named `Show()`:

<div class="filename">ToDoList/Controllers/CategoriesController.cs</div>

```csharp
...

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

...
```

We're doing something new here. Because this page will display both a `Category` _and_ all `Item` objects saved within that `Category`, we must pass two types of objects to the view. However, `View()` can only accept one model argument. To work around this, we do the following:

* Create a new `Dictionary` called `model` because a `Dictionary` can hold multiple key-value pairs.

* Add both the `Category` and its associated `Item`s to this `Dictionary`. These will be stored with the keys `"category"` and `"items"`.

* The `Dictionary`, which is named `model`, will be passed into `View()`.

Let's make this route's view next:

<div class="filename">ToDoList/Views/Categories/Show.cshtml</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My To-Do List!</title>
    <link 
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
      crossorigin="anonymous">
  </head>
  <body>
    @using ToDoList.Models;

    <h3>Here are all the items in this category:</h3>

    <ol>
    @foreach (Item item in @Model["items"])
    {
      <li><a href='/categories/@Model["category"].Id/items/@item.Id'>@item.Description</a></li>
    }
    </ol>

    <p><a href='/categories/@Model["category"].Id/items/new'>Add a new item</a></p>
    <p><a href='/categories'>Return to category list</a></p>
    <p><a href='/'>Return to Main Page</a></p>
  </body>
</html>
```

* We loop through all `Items` in the model. We passed the view a `Dictionary` containing key-value pairs, so we access `Item`s with `@Model["items"]` square bracket notation.

* For each `Item`, we display its description in a `<li>`.

* We've also made each `<li>` a link to the path `'/categories/@Model["category"].Id/items/@item.Id'`. This will be the item's detail view. We already have an `Item` detail page associated with the `Show()` route on the `ItemsController`, but it's not at this super long path! Don't worry, this is intentional. We'll discuss what's up in the next lesson.

At this point, we can build and run our application and see our new pages in the browser. We can even create new `Category` objects with our form. However, some functionality like the _Add a new item_ link on the Category detail page does not yet work yet. We'll complete this in the next lesson and also discuss how objects within other objects affect RESTful convention.