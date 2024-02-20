---
title: "\U0001F4D3 3.2.1.8 Multiple Controllers"
id: 3218-multiple-controllers
slug: 3218-multiple-controllers
hide_table_of_contents: true
sidebar_position: 26
day: monday
type: lesson
url: 'https://github.com/fidgetech/c-and-net/blob/main/1g_multiple_controllers.md'
---

So far we've been using a single controller to handle our routes. However, larger projects often use many controllers and it's common to create a controller for each model in our application. In this lesson, we'll walk through the correct way to implement more than one controller.

## Project Structure
---

Let's alter our To Do List to use multiple controllers. Our `HomeController` will handle a central homepage to greet users. It will be handled by a `HomeController`. Then, all logic, routes, and views meant to work with To Do List `Item`s will be handled by a new `ItemsController`.

* Create an `ItemsController.cs` file in the existing `ToDoList/Controllers` directory.
* Create a corresponding `Items` subdirectory in the `ToDoList/Views` directory.
* Move the existing `Views/Home/Index.cshtml` file into the `Views/Items` subdirectory.
* Move our existing `Views/Home/CreateForm.cshtml` file into the `Views/Items` subdirectory.
* Add a new, empty `Index.cshtml` file into the `Views/Home` directory.

The resulting project structure should look like this:

<pre>
ToDoList.Solution
├── ToDoList
│   ├── Controllers
│   │   ├── HomeController.cs
│   │   └── ItemsController.cs
│   ├── Models
│   │   └── Item.cs
│   ├── Program.cs
│   ├── ToDoList.csproj
│   └── Views
│       ├── Home
│       │   └── Index.cshtml
│       └── Items
│           ├── CreateForm.cshtml
│           └── Index.cshtml
└── ToDoList.Tests
</pre>

## `ItemsController`
---

We'll cut the contents of `HomeController.cs` and paste them into `ItemsController.cs`. This controller will be responsible for handling the routes that pertain to `Item`s. By convention, we pluralize the class name, which is why it's _`Items`_`Controller` not _`Item`_`Controller`.

Then we'll update the `class` name to state `ItemsController` instead of `HomeController`:

<div class="filename">ToDoList/Controllers/ItemsController.cs</div>

```csharp
...

namespace ToDoList.Controllers
{
    public class ItemsController : Controller
    {

      ...
   ...
...
```

Next, we'll need to alter the path of our `Index()` route:

<div class="filename">ToDoList/Controllers/ItemsController.cs</div>

```csharp
...

    [HttpGet("/items")]
    public ActionResult Index()
    {
      List<Item> allItems = Item.GetAll();
      return View(allItems);
    }

...
```

Here we simply change the path in the route's decorator to read `"/items"` instead of `"/"`.  The entire updated `ItemsController.cs` file should look like this:

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

  }
}
```

Note that we now have two routes that use the `"/items"` path. We can do this because GET and POST are two different requests. We use
`[HttpGet()]` for the GET request and `[HttpPost()]` for the POST request. This way the server can easily tell them apart even if they use the same path.


### Views for `ItemsController` Routes

Let’s revisit the views we've created for this controller. .NET will automatically look in a `Views` subdirectory that has the same name as the controller. This means our new `ItemsController`'s views will reside in the `Views/Items` directory we just created.

We've already created `Index.cshtml` and `CreateForm.cshtml` and then moved them to the new `Views/Items` subdirectory so our views require no further changes.

## `HomeController`
---

Let's build our `HomeController` now. It should look like this:

<div class="filename">ToDoList/Controllers/HomeController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;

namespace ToDoList.Controllers
{
    public class HomeController : Controller
    {

      [HttpGet("/")]
      public ActionResult Index()
      {
        return View();
      }

    }
}
```

### Views for `HomeController` Routes

Finally, we need to create a new `Index` view in the `Home` folder inside of the `Views` folder:

<div class="filename">ToDoList/Views/Home/Index.cshtml</div>

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
    <h1>Welcome to the To Do List!</h1>
    <a href='/items/new'>Add a new item</a>
    <br />
    <a href='/items'>See list of items</a>
  </body>
</html>
```

We've successfully separated our code so that it uses two controllers. One handles `Item`s while the other handles the home page.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for To Do List: 4\_multiple\_controllers](https://github.com/epicodus-lessons/section-2-to-do-list-csharp-net6/tree/4_multiple_controllers)**
