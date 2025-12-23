---
title: "📓 3.3.1.6 Read with EF Core"
day: monday
id: 3-3-1-6-read-with-ef-core
hide_table_of_contents: true
---

In this lesson, we'll begin refactoring our existing To Do List models and controllers, learning how to retrieve and display information from a database using EF Core in the process. We'll also start using the Microsoft **LINQ** library, which gives us access to a simple syntax for querying lists or databases.

## READ
---

### Updating the Item Model

With EF Core, we no longer need to write verbose custom methods to query a database, like `Find()` and `Save()`. Instead, we use simple built-in methods, which we'll call from the controller. That means our first step is to delete all of the custom methods in our `Item` class. When we've done that, our `Item` class should look like this:

<div class="filename">Models/Item.cs</div>

```csharp
namespace ToDoList.Models
{
  public class Item
  {
    public int ItemId { get; set; }
    public string Description { get; set; }
  }
}
```

### Updating the Controllers

Next, we need to update our controllers to manage our To Do List entries. Let's comment out all of the content of our `CategoriesController.cs` and begin refactoring `ItemsController`.

Let's replace all of the content of `ItemsController.cs` with the following:

<div class="filename">Controllers/ItemsController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;
using System.Collections.Generic;
using System.Linq;

namespace ToDoList.Controllers
{
  public class ItemsController : Controller
  {
    private readonly ToDoListContext _db;

    public ItemsController(ToDoListContext db)
    {
      _db = db;
    }

    public ActionResult Index()
    {
      List<Item> model = _db.Items.ToList();
      return View(model);
    }
  }
}
```

We've added some new code here, including a property, a constructor, and an `Index` route.

* We add a new `using` directive for `System.Linq`. This will allow us to use **LINQ**'s `ToList()` method, which we'll cover in a moment.

* The line `private readonly ToDoListContext _db;` declares a `private` and `readonly` field of type `ToDoListContext`. This property will hold our database connection as a `ToDoListContext` type.

* In the constructor, we set the value of our new `_db` property to our `ToDoListContext db`. The `ToDoListContext db` parameter is passed an argument through dependency injection when our web application host is built. The argument that gets passed into the `ItemsController` constructor is the exact `ToDoListContext` that we set up as a service in `Program.cs`:

<div class="filename">Program.cs</div>

```csharp
... // omitted code

builder.Services.AddDbContext<ToDoListContext>(
                  dbContextOptions => dbContextOptions
                    .UseMySql(
                      builder.Configuration["ConnectionStrings:DefaultConnection"], ServerVersion.AutoDetect(builder.Configuration["ConnectionStrings:DefaultConnection"]
                    )
                  )
                );

... // more code omitted
```

* Finally, instead of using a verbose `GetAll()` method with raw SQL, we can instead access all our `Item`s in `List` form by doing the following: `_db.Items.ToList()`. That's exactly what we do in our `Index()` action method. 

Next, let's understand exactly what we're doing with  `_db.Items.ToList()`, which uses a `LINQ` method to query our database.

### Language-Integrated Queries (LINQ)

**LINQ** is short for **Language-Integrated Query**. It's a form of standard data interpretation. We'll use LINQ to grab values from our dataset and display them in our views.

In the above example, our dataset is `_db.Items`. However, we can't actually use a dataset as our model for our view. To get around this, we run the LINQ method `ToList()` on our data set. This generates a list with elements of the `Item` data type. In other words, LINQ translates the dataset into C# types: a `List` of `Item`s that we can use in the view.

Let's walk through how this works by breaking down the line `_db.Items.ToList()` further:

* `db` is an instance of our `ToDoListContext` class. It's holding a reference to our database.

* Once there, it looks for an object named `Items`. This is the `DbSet` we declared in `ToDoListContext.cs`.

* LINQ turns this `DbSet` into a list using the `ToList()` method, which comes from the `System.Linq` namespace.

* The whole expression `_db.Items.ToList()` is what creates the model we'll use for the `Index` view.

There's a lot to learn about LINQ and how EF Core uses it to query our database. To learn more, visit [this article on querying with EF Core](https://learn.microsoft.com/en-us/ef/core/querying/).

To learn about other method we can use to query our database, visit the [MS Docs on the `System.Linq.Enumerable` class methods](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable?view=net-6.0#methods). We'll learn about other LINQ methods as we continue to refactor our To Do List app to use EF Core.

### Updating Views

Since we will be restructuring our models to account for our database, let's go ahead and remove all of the views in the `Views/Items` directory and remove the **entire** `Views/Categories` directory.

Let's create an `Index.cshtml` view in our now empty `Views/Items` directory to see if our database query is properly working:

<div class="filename">Views/Items/Index.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@using ToDoList.Models;

<h1>Items</h1>

@if (@Model.Count == 0)
{
  <h3>No items have been added yet!</h3>
} 

@foreach (Item item in Model)
{
  <li>@item.Description</li>
}
```

We can now start the server. Ignore the links in the homepage and instead navigate to _localhost:5000/Items_ by explicitly typing in the URL in the address bar. Since our database is newly created, we shouldn't have any items in it, and we should see the "No items have been added yet!" notice. We'll introduce functionality to add entries to our database in the next lesson.
