---
title: "📓 5.4.2.1 Creating a Splash Page with Data from Multiple Database Tables"
day: tuesday
id: 5-4-2-1-creating-a-splash-page-with-data-from-multiple-database-tables
hide_table_of_contents: true
---

In this lesson we're going to learn how to create a splash page that lists all of the objects saved in multiple database tables. A **splash page** is the first page that a user sees when they visit your site. They might contain promotions, offers, a beautiful image, or just be the homepage of your site. 

In our To Do List app, our splash page won't be that special — it'll just be our homepage as it is with two new lists, one of all categories and the other of all items. Making this update will give us the opportunity to review concepts we've already covered and to practice displaying data from multiple database tables on one page.

Let's get into it!

## Updating the `HomeController`
---

We'll start with updating the `HomeController` to connect to our database context. 

Here's the first update we'll make:

<div class="filename">Controllers/HomeController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;

namespace ToDoList.Controllers
{
    public class HomeController : Controller
    {
      private readonly ToDoListContext _db;

      public HomeController(ToDoListContext db)
      {
        _db = db;
      }

      ...

    }
}
```

We've added a new `HomeController` class variable called `_db` to hold our `ToDoListContext` object, which is our connection to our MySQL database. Since the `ToDoListContext` class is located within our `ToDoList.Models` namespace, we also add a new using directive at the top of the file: `using ToDoList.Models;`.

Then we create a constructor for the `HomeController` class with a `db` parameter. The argument for the `db` parameter will be passed to the `HomeController` constructor via dependency injection when we run our app. This happens implicitly, which can feel like magic and make it harder to understand. The value of the argument for the `db` parameter will be the `ToDoListContext` database service that we set up in `Program.cs`.

Keep in mind that you are not expected to develop a deep understanding of dependency injection during the program. To optionally learn more about dependency injection, visit the MS Documentation article titled [Dependency injection in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0).

Next, we'll update the `Index()` action to gather all category and item objects from the database, and pass them into the view. 

<div class="filename">Controllers/HomeController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;
using System.Collections.Generic;
using System.Linq;

namespace ToDoList.Controllers
{
  public class HomeController : Controller
  {
    private readonly ToDoListContext _db;

    public HomeController(ToDoListContext db)
    {
      _db = db;
    }

    [HttpGet("/")]
    public ActionResult Index()
    {
      Category[] cats = _db.Categories.ToArray();
      Item[] items = _db.Items.ToArray();
      Dictionary<string,object[]> model = new Dictionary<string, object[]>();
      model.Add("categories", cats);
      model.Add("items", items);
      return View(model);
    }
  }
}
```

First take note that we add two new using directives at the top of our file: one for `System.Collections.Generic;` to use the `Dictionary<T,T>` class, and the other for `System.Linq;` to use the `ToArray()` method.

Within the `Index()` action we first access the categories table and turn it into an array of `Category` objects. Then we access the items table and turn it into an array of `Item` objects. We create an empty dictionary called `model` and add each array to the dictionary. Finally, we pass the dictionary `model` into the view with `return View(model);`.

Note that we could choose to create an entirely different data structure to pass the categories and items into the view. For example, we could use lists and `ViewBag` like so:

```csharp
      [HttpGet("/")]
      public ActionResult Index()
      {
        List<Category> cats = _db.Categories.ToList();
        List<Item> items = _db.Items.ToList();
        ViewBag.categories = cats;
        ViewBag.items = items;
        return View();
      }
```

But we'll stick with our first method of using arrays and dictionaries!

Next, let's update the `Home/Index.cshtml` view to display both categories and items. 

## Updating the `Home/Index.cshtml` View
---

Here's the updated code for the `Home/Index.cshtml` view:

<div class="filename">Views/Home/Index.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@using ToDoList.Models;

<h1>Welcome to the To Do List!</h1>

<hr />

<h4>Categories</h4>
@if (Model["categories"].Length == 0)
{
  <p>No categories have been added yet!</p>
} 
<ul>
  @foreach (Category cat in Model["categories"])
  {
    <li>@Html.ActionLink(@cat.Name, "Details", "Categories", new { id = @cat.CategoryId})</li>
  }
</ul>

<h4>Items</h4>
@if (Model["items"].Length == 0)
{
  <p>No items have been added yet!</p>
} 
<ul>
  @foreach (Item item in Model["items"])
  {
    <li>@Html.ActionLink(@item.Description, "Details", "Items", new { id = @item.ItemId})</li>
  }
</ul>

<hr />

<p>@Html.ActionLink("Manage items", "Index", "Items")</p> 
<p>@Html.ActionLink("Manage categories", "Index", "Categories")</p>
<p>@Html.ActionLink("Manage tags", "Index", "Tags")</p>
```

Let's work through the changes:

* We include `@using ToDoList.Models;` so we can reference the `Item` and `Category` types in our foreach loops.
* For both items and categories, we include a conditional that checks if there are any of those objects, and if not, informs the user of this. This is nothing new to us! Notice that arrays don't have a `Count` property, but instead a `Length` property that contains the number of elements within the array.  
* For both items and categories, we loop through each array and make an unordered list of the objects. Each object is a direct link to the details page for that object. 
* We've wrapped the list of categories and items with `<hr />` tags to create a basic visual distinction on the page.
* Finally, the last update we make is updating the links at the bottom of the view to display `"Manage..."` instead of `"View all..."`. This change isn't strictly necessary, but I think it's a more descriptive name. As always, it's up to you to decide what makes the most sense.

And with that, we're done with this mini update to our homepage! Run your app and check out the new homepage. 

What do you think of the update we made? Do you like it or do you think it's unnecessary? Perhaps it's too boring for a splash page? There's no one right answer, however, we always encourage you to put yourself in the shoes of your user, and to make layout and navigation decisions that improve the user's experience. 

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i>  GitHub Repo for To Do List with EF Core Migrations and a Many-to-Many Relationship: 6\_data\_from\_multiple\_db\_tables](https://github.com/epicodus-lessons/section-4-to-do-list-with-many-to-many-csharp-net6/tree/6_data_from_multiple_db_tables)**
