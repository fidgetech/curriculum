---
title: "📓 3.5.0.9 Adding Authorization and Associating Users with Items"
id: 3509-adding-authorization-and-associating-users-with-items
hide_table_of_contents: true
day: weekend
---

We now have a working user login and registration system, but it doesn't actually have any kind of impact on our application. Our users can do all CRUD regardless of whether they are signed in or not. We'll make our authentication more impactful by limiting what a user can do with authorization.

## Authorization
---

**Authorization** is the process of managing what a user is allowed to do. We'll update our To Do List application so that only logged in users will be able to see their own list of items. This is similar to many real-world applications such as email or blog sites where a signed-in user has access to their own content. As we'll see, adding authorization is very simple, but associating items with a user takes more refactoring.

Note that we will not modify categories or tags in this lesson and that by the end of this lesson, authorization will only be applied to creating and viewing a user's items. However, we encourage you to practice more with authorization by adding it to categories and tags on your own.

### How We'll Implement Authorization

To implement authorization, we'll be using tools from [the `Microsoft.AspNetCore.Authorization` namespace](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.authorization?view=aspnetcore-6.0). These authorization tools work in conjunction with Identity, which provides authentication.

We'll specifically implement [simple authorization](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/simple?view=aspnetcore-6.0), though the MS Docs have guidance on other ways to authorize users. [Check out the docs on authorization](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/introduction?view=aspnetcore-6.0) for more information!

### Adding Authorization

To add authorization to the `ItemsController`, we'll use the `[Authorize]` attribute along with a `using` statement:

```csharp
...
using Microsoft.AspNetCore.Authorization;

namespace ToDoList.Controllers
{
  [Authorize] // New line
  public class ItemsController : Controller
  {
    ...
  }
}
```

We add a using directive for the `Microsoft.AspNetCore.Authorization` namespace so that we can use the `[Authorize]` attribute.

Notice that we include an `[Authorize]` attribute on `ItemsController`:

```csharp
...
[Authorize]
public class ItemsController : Controller
...
```

This allows access to the `ItemsController` only if a user is logged in. We'll add this attribute to a controller whenever we want to limit its access to signed-in users only.

And with this simple addition, we've added authorization to our application!

### Other Authorization

**Adding `[Authorize]` to a controller is just one application of authorization.** We can also add the `[Authorize]` attribute to individual controller actions. 

When we add `[Authorize]` to the `ItemsController`, the entirety of the controller is shielded from unauthorized users. We can negate this by including an `[AllowAnonymous]` attribute above any specific methods that we want unauthorized users to have access to. For example, we could put `[AllowAnonymous]` above the `Index` route, if we want users to be able to see a list of items, but require authorization before they view details. 

Alternatively, we could avoid putting the `[Authorize]` attribute on the entire class, and instead only place it on specific methods we want guarded. For example, if we wanted unauthorized users to view many routes in a controller, but protect your `Create`, `Update`, and `Delete` routes, you could simply `[Authorize]` those specific methods.

For the purposes of learning basic authorization tools, we'll continue with the `[Authorize]` route on the entire controller, as shown. As noted earlier, we're implementing [simple authorization](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/simple?view=aspnetcore-6.0). To learn about other ways to add authorization to our ASP.NET Core, visit the [docs on authorization](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/introduction?view=aspnetcore-6.0).

## Associating Users with Items
---

With authorization now added to our `ItemsController`, you need to be signed in to visit any route for items. However once we are signed in, we can see any user's items. To make our authorization more meaningful, we'll update our To Do List app so that each item that is created is associated with the logged in user, and the only items visible to a user is their own.

### Updating the `Item` Model

To achieve our goal, the first thing we'll do is create an association between Identity's `ApplicationUser` and our `Item` class. This will enable us to associate items with a specific user, and fetch and display only the items that belong to that user.

Let's add a new `User` property to our `Item.cs` model, which should then look like this:

<div class="filename">Models/Item.cs</div>

```csharp
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ToDoList.Models
{
  public class Item
  {
    public int ItemId { get; set; }
    [Required(ErrorMessage = "The item's description can't be empty!")]
    public string Description { get; set; }
    [Range(1, int.MaxValue, ErrorMessage = "You must add your item to a category. Have you created a category yet?")]
    public int CategoryId { get; set; }
    public Category Category { get; set; }
    public List<ItemTag> JoinEntities { get;}
    public ApplicationUser User { get; set; }  // New line!
  }
}
```

Since we've updated our entity model, we need to create a new migration and update the database. In our `ToDolist/` directory, let's run the following command:

```bash
$ dotnet ef migrations add AddUserToItem
```

This command will add a new migration and its corresponding designer file to our `Migrations/` directory while updating the model snapshot for our `ToDoListContext`. 

Now, let's update the database:

```bash
$ dotnet ef database update
```

### Updating the `ItemsController`

Next, let's update our `ItemsController`. We'll start by adding the following `using` statements:

```csharp
...
//new code
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using System.Security.Claims;
...
```

* We'll need `Microsoft.AspNetCore.Identity` so our controller can use the `UserManager` and other tools from Identity to get users from the database.
* `System.Threading.Tasks` is necessary to call async methods. The async methods we'll use are from the `UserManager` class.
* `System.Security.Claims` is necessary for using **claim based authorization**. A **claim** is a form of user identification. It states who a user is, not what the user can actually do. While the user identification itself doesn't authorize a user to do anything, it is necessary for us to be able to identify a user (through a claim) in order to get only the items that are associated with that user.

Next, we'll add Identity's `UserManager` class to our controller so that we can access tools to get us data about the signed-in user. We'll add a new property and update our constructor like so:

<div class="filename">Controllers/ItemsController.cs</div>

```csharp
...
namespace ToDoList.Controllers
{
  [Authorize]
  public class ItemsController : Controller
  {
    private readonly ToDoListContext _db;
    private readonly UserManager<ApplicationUser> _userManager; // New line

    // Updated constructor
    public ItemsController(UserManager<ApplicationUser> userManager, ToDoListContext db)
    {
      _userManager = userManager;
      _db = db;
    }
...
```

Let's break this code down into smaller pieces.

First, let's take a look at our `readonly` property and our constructor:

<div class="filename">Controllers/ItemsController.cs</div>

```csharp
...
private readonly UserManager<ApplicationUser> _userManager;

public ItemsController(UserManager<ApplicationUser> userManager, ToDoListContext database)
{
  _userManager = userManager;
  _db = database;
}
...
```

This code should look more familiar because our `AccountController` has the exact same code. We need an instance of `UserManager` in order to access the tools that get us data about the signed-in user. We also include a constructor to instantiate private `readonly` instances of the database and the `UserManager`.

### Updating the `Index()` Action

Let's update our `Index()` method to determine who the currently signed-in user is, and to grab only their items from the database. Here's what our `Index()` action should now look like:

<div class="filename">Controllers/ItemsController.cs</div>

```csharp
...
    public async Task<ActionResult> Index()
    {
      string userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
      ApplicationUser currentUser = await _userManager.FindByIdAsync(userId);
      List<Item> userItems = _db.Items
                          .Where(entry => entry.User.Id == currentUser.Id)
                          .Include(item => item.Category)
                          .ToList();
      return View(userItems);
    }
...
```

There's a lot to unpack here.

* We start by using the `async` modifier because this action will run asynchronously. Because the action is asynchronous, it also returns a `Task` containing an action result.

* Then we locate the unique identifier for the currently-logged-in user and assign it the variable name `userId`. Let's go over the new logic in the following line of code:

```csharp
string userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
```

* [`User`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase.user?view=aspnetcore-6.0) is a property of our `ItemsController` (which extends from `Controller`), just like `ModelState` is, and we can call on this property anywhere within our controller. `User` contains information about the currently signed-in user.
* [`FindFirst()`](https://learn.microsoft.com/en-us/dotnet/api/system.security.claims.claimsprincipal.findfirst?view=net-6.0) is a method that locates the first user record that meets the provided criteria.
* This method takes `ClaimTypes.NameIdentifier` as an argument. This is why we need a `using` directive for `System.Security.Claims`. We specify `ClaimTypes.NameIdentifier` to locate the unique ID associated with the currently signed in user account. `NameIdentifier` is a property that refers to an Entity's unique ID. See [the ClaimTypes documentation](https://docs.microsoft.com/en-us/dotnet/api/system.security.claims.claimtypes?view=net-6.0) for more information on this class.
* Finally, we include the `?` operator after the line `this.User.FindFirst(ClaimTypes.NameIdentifier)`. This is called an **existential operator**. It states that we should only call the property to the right of the `?` if the method to the left of the `?` doesn't return `null`. 
  * Essentially, the code states that if `this.User.FindFirst(ClaimTypes.NameIdentifier)` returns `null`, don't call the property to the right of the existential operator. However, if it doesn't return `null`, it retrieves `Value` property.
  * In other words, if we successfully locate the `NameIdentifier` of the current user, we'll call `Value` to retrieve the actual unique identifier value.

Once we have the `userId` value, we're ready to call our async method:

```csharp
ApplicationUser currentUser = await _userManager.FindByIdAsync(userId);
```

* First we call Identity's `UserManager` service that we've injected into this controller.
* We call the `FindByIdAsync()` method, which, as its name suggests, is a built-in Identity method used to find a user's account by their unique ID.
* We provide the `userId` we just located as an argument to `FindByIdAsync()`.
* Thanks to the handy `Async` suffix in this method's name, we know it runs asynchronously. We include the `await` keyword so the code will wait for Identity to locate the correct user before moving on.

Finally, we create a variable to store a collection containing only the `Item`s that are associated with the currently-logged-in user's unique `Id` property:

```csharp
...
List<Item> userItems = _db.Items
                    .Where(entry => entry.User.Id == currentUser.Id)
                    .Include(item => item.Category)
                    .ToList();
return View(userItems);
...
```

We use [the `Where()` method](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.where?view=net-6.0), which is a LINQ method we can use to filter a collection in a way that echoes the logic of the [SQL `WHERE` clause](https://www.w3schools.com/mysql/mysql_where.asp). We can use `Where()` to make many different kinds of queries, as the method accepts an expression to filter our results.

In this case, we're simply asking EF Core to find items in the database where the user id associated with the item is the same id as the id that belongs to the `currentUser`. This ensures the signed-in user only sees their own items in the view.

### Updating `Create()` POST Action

Let's now edit our `Create()` POST action. Make sure you update the **post** method and not the **get** method.

<div class="filename">Controllers/ItemsController.cs</div>

```csharp
    [HttpPost]
    public async Task<ActionResult> Create(Item item, int CategoryId)
    {
      if (!ModelState.IsValid)
      {
        ViewBag.CategoryId = new SelectList(_db.Categories, "CategoryId", "Name");
        return View(item);
      }
      else
      {
        string userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        ApplicationUser currentUser = await _userManager.FindByIdAsync(userId);
        item.User = currentUser;
        _db.Items.Add(item);
        _db.SaveChanges();
        return RedirectToAction("Index");
      }
    }
```

Everything with the model validation is the same. We've only updated the `else` branch of the `Create()` POST method. 

The first two lines within the `else` branch are exactly the same as the first two lines of our `Index()` action: we start by finding the value of the current user. 

Once we have the `currentUser` object, we associate it with the `Item`'s `User` property. This makes the association so that an `Item` belongs to a `User`. 

Finally, we add the item to the database and save it, just as we did before.

### Updating the `Item` Views for Authorization

Well... we actually don't have to update our views at all. All of the associating between items and the logged in user happens in the `ItemsController`.

We can, however, make a small update to our `Items/Index.cshtml`. Let's address the signed in user by name. To do this, we'll update our introductory header like so:

```csharp
<h1>Items for @User.Identity.Name</h1>
```

And here's how the entire file will look:

<div class="filename">Views/Items/Index.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@using ToDoList.Models;

<h1>Items for @User.Identity.Name</h1>

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
<p>@Html.ActionLink("Home", "Index", "Home")</p>
```

Because we've added the `[Authorize]` attribute to our `ItemsController`, we know that only logged in users will be able to view this page, so we can safely update our header to directly address the user's `Name`.

So what happens if an unauthorized user (who is not signed in) tries to access our item's `Index.cshtml`? Identity will automatically redirect them to the login page, just like in the following image:

![Identity redirects unauthorized users to the `Account/Login.cshtml` view.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/aspnet_authorization_redirect.png)

### Adjusting Our Splash Page

We're almost done with our refactor. The one thing we have not addressed is what to do about our splash page. Right now it lists all items saved in the items database (along with all categories). Now that only logged in users can view their own items, we need to update the `HomeController` to get the logged in user's items, and our view to display a message asking visitors to log in if they want to see their own items.

Let's start with the `HomeController` first. Here's the updated controller:

<div class="filename">Controllers/HomeController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using System.Security.Claims;

namespace ToDoList.Controllers
{
    public class HomeController : Controller
    {
      private readonly ToDoListContext _db;
      private readonly UserManager<ApplicationUser> _userManager;

      public HomeController(UserManager<ApplicationUser> userManager, ToDoListContext db)
      {
        _userManager = userManager;
        _db = db;
      }

      [HttpGet("/")]
      public async Task<ActionResult> Index()
      {
        Category[] cats = _db.Categories.ToArray();
        Dictionary<string,object[]> model = new Dictionary<string, object[]>();
        model.Add("categories", cats);
        string userId = this.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        ApplicationUser currentUser = await _userManager.FindByIdAsync(userId);
        if (currentUser != null)
        {
          Item[] items = _db.Items
                      .Where(entry => entry.User.Id == currentUser.Id)
                      .ToArray();
          model.Add("items", items);
        }
        return View(model);
      }
    }
}
```

First notice that we add new using directives to access the tools we need to get the current user:

* `using Microsoft.AspNetCore.Identity;`
* `using System.Threading.Tasks;`
* `using System.Security.Claims;`

Next, notice that we add Identity's `UserManager` to our controller as a property (`_userManager`) and by updating our controller's constructor to access the `UserManager` service through dependency injection. 

```csharp
    public class HomeController : Controller
    {
      ...
      private readonly UserManager<ApplicationUser> _userManager;

      public HomeController(UserManager<ApplicationUser> userManager, ToDoListContext db)
      {
        _userManager = userManager;
        _db = db;
      }
      ...
    }
...
```

Next, notice the changes in the `Index()` action. Here is the `Index()` action one more time:

```csharp
      [HttpGet("/")]
      public async Task<ActionResult> Index()
      {
        // Category logic
        Category[] cats = _db.Categories.ToArray();
        Dictionary<string,object[]> model = new Dictionary<string, object[]>();
        model.Add("categories", cats);
        // Item logic
        string userId = this.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        ApplicationUser currentUser = await _userManager.FindByIdAsync(userId);
        if (currentUser != null)
        {
          Item[] items = _db.Items
                      .Where(entry => entry.User.Id == currentUser.Id)
                      .ToArray();
          model.Add("items", items);
        }
        return View(model);
      }
```

With this update, we've reorganized the existing code, along with adding new code. Now instead of turning the entire items database into an array, we only do so if there's a currently logged in user. Note that this is just one way of many for setting up this logic. You are welcome to reimagine this logic or the data types used as you see fit. Now let's break down this code a bit more.

First, we deal with displaying our categories. Here, we also create the dictionary `model` that will hold our category and item data.

Then, we go through the process of getting the `currentUser` object. This is the same code that we used earlier in our `ItemsController`. 

Next, we create a branch that checks if the `currentUser` is not `null`:

* If `currentUser` is `null`, that means there's no signed in user and we simply return the view with no items.
* If `currentUser` has a value (is not `null`), we go through the process of fetching the items belonging to that user and adding them to our view's `model`.

Now let's see how we'll update the view to work with the new model we've created in our controller action. Take note that our `Home/Index.cshtml` view will only have an `items` key in our dictionary `model` if there's a logged in user. That means we need to make sure that our view ensures there's an authenticated user before displaying items. 

Here's the updated code for the entire `Home/Index.cshtml`:

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

@if (User.Identity.IsAuthenticated)
{
  <h4>Items for @User.Identity.Name</h4>
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
}
else
{
  <h4>Items</h4>
  <p>Please @Html.ActionLink("log in", "LogIn", "Account") to view or manage your items.</p>
}

<hr />

<p>@Html.ActionLink("Manage items", "Index", "Items")</p> 
<p>@Html.ActionLink("Manage categories", "Index", "Categories")</p>
<p>@Html.ActionLink("Manage tags", "Index", "Tags")</p>
<p>@Html.ActionLink("Create or manage an account", "Index", "Account")</p>
```

Here's the code that specifically deals with displaying items:

```csharp
@if (User.Identity.IsAuthenticated)
{
  <h4>Items for @User.Identity.Name</h4>
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
}
else
{
  <h4>Items</h4>
  <p>Please @Html.ActionLink("log in", "LogIn", "Account") to view or manage your items.</p>
}
```

In this update, we check `User.Identity.IsAuthenticated` to determine whether there's a user that's signed in. If so, then we display the items as well as the user's name. And if not, then we display a message asking the visitor to sign in to view or manage their items.

## Next Steps
---

Now we're ready to go! Start your application and click around. Try accessing the items pages when you are not signed in to see how Identity redirects you to the log in view. Then try accessing the items pages when you are logged in. Next, try logging into different accounts to see that the items in each list are different.  

Keep in mind that we've only added simple authorization to our To Do List app. While we can associate items with a specific user, and only display a logged in user's items, as long as you are logged in you can still hack your way to accessing other items in the database by directly entering a URL like `https://localhost:5001/Items/Details/1`. That means we have more work to do as far as boosting the security of our details, edit, and delete routes. Using the tools in this lesson, can you think of a way to do this? This task is for your further exploration.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for To Do List with Authentication and Authorization: `3_authorization`](https://github.com/epicodus-lessons/section-5-to-do-list-with-auth-csharp-net6/tree/3_authorization)**
