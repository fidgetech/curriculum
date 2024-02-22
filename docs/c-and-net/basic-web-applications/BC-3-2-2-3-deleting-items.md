---
title: "📓 3.2.2.3 Deleting Items"
day: tuesday
---

In the last lesson we discussed CRUD actions and their corresponding HTTP request methods. So far, our To Do List can create `Item`s with a POST request via our form and read `Item`s with a GET request so users can see the full To Do List.

Let's add functionality to delete `Item`s. Then we'll walk through updating `Item`s in later lessons.

## Clearing `Item` Lists
---

We'll begin by adding functionality to delete all `Item`s, as this broader action should be simpler to begin with.

### HTML Form

First, we need a button users can click to invoke this action. We'll add one to the bottom of our `Items/Index.cshtml` view:

<div class="filename">ToDoList/Views/Items/Index.cshtml</div>

```html
...

<form action="/items/delete" method="post">
  <button type="submit" name="button">Clear All Items</button>
</form>
```

The entire updated file looks like this:

<div class="filename">ToDoList/Views/Items/Index.cshtml</div>

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

    <h1>To Do List</h1>
    @if (Model.Count == 0)
    {
      <p>There are no items in the list.</p>
    }
    <ul>
      @foreach (Item item in Model)
      {
        <li>@item.Description</li>
      }
    </ul>

    <a href="/items/new">Add a new item.</a>

    <form action="/items/delete" method="post">
      <button type="submit" name="button">Clear All Items</button>
    </form>
  </body>
</html>
```

Notice this button resides in `<form>` tags. It's not a standalone `<button>` element. Only forms can submit and use the POST method required to update the server. Deleting something is still considered a server update because data is changing. A few more things to notice:

* The `action` attribute is `"/items/delete"`. The route that will run when the button is clicked must have this same path.

* The `method` attribute is `post`. This will create a POST request to update the server. The corresponding route path must be defined with `HttpPost()`.

* We also add `type="submit"` to the button. This is always required to successfully send a POST request from a form, even if that form is just a button.

### Corresponding POST Route

Let’s create the route that will handle this form's submission. We'll add the following to `ItemsController.cs` below our `Create()` route:

<div class="filename">ToDoList/Controllers/ItemsController.cs</div>

```csharp
...

    [HttpPost("/items/delete")]
    public ActionResult DeleteAll()
    {
      Item.ClearAll();
      return View();
    }

...
```

* Notice the `"/items/delete"` path matches the `action` attribute of the form exactly.

* We also use `HttpPost()` to denote this route will handle POST requests, since our form's `method` is set to `"post"`.

* Because the route's path and HTTP method match the form's path and `action` attribute, this route will be invoked when our form is submitted.

* Once invoked by a POST request to `"/items/delete"` (which will happen when our new form is submitted), the route calls the static `ClearAll()` method, which we already defined in our `Item.cs` model.

The entire updated controller file looks like this:

<div class="filename">ToDoList/Controllers/ItemsController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;
using System.Collections.Generic;

namespace ToDoList.Controllers
{
  public class ItemsController : Controller
  {
    [HttpGet("/items")]
    public ActionResult Index()
    {
      List<Item> allItems = Item.GetAll();
      return View(allItems);
    }

    [HttpGet("/items/new")]
    public ActionResult CreateForm()
    {
      return View();
    }

    [HttpPost("/items")]
    public ActionResult Create(string description)
    {
      Item myItem = new Item(description);
      return RedirectToAction("Index");
    }

    [HttpPost("/items/delete")]
    public ActionResult DeleteAll()
    {
      Item.ClearAll();
      return View();
    }
  }
}
```

### Success Page

Because our new `DeleteAll()` route returns `View()`, it will automatically look for a view file matching the route name. The route is named `DeleteAll()` and exists on the `ItemsController`, so we'll need a `DeleteAll.cshtml` file in `Views/Items`. Let's create this now:

<div class="filename">ToDoList/Views/Items/DeleteAll.cshtml</div>

```html
<h1>Your list has been cleared!</h1>
<p><a href="/items">Back to list.</a></p>
```

This will display a success message confirming `Item`s were deleted and include a link back to the `/items` page. If we wanted, we could also choose to use a redirect to go back to the index or home page as well.
