---
title: "📓 3.2.1.3 To Do List MVC Setup"
id: 3213-to-do-list-mvc-setup
hide_table_of_contents: true
day: monday
---

Now that we've had basic practice with the Model-View-Controller aspect of MVC web apps, let's create a more complex ASP.NET Core MVC application. We'll then continue building upon this codebase throughout the remainder of the C# and .NET course.

## Starter Project for To Do List
---

We'll call our new project the "To Do List". It will be an application that tracks our to-dos. We'll start simple and just have one `Item` model that is meant to represent a single task on our To Do List. Later on we'll add a `Category` model that will represent different to-do lists within our application, like one for "School" or one for "Home Chores". 

Since our goal is to practice with the ASP.NET Core MVC framework, we've put together a basic starter project for the "To Do List" app that contains the following:

* An `Item` class within the `ToDoList.Models` namespace.
* Full testing for the `Item` class. The tests will all be similar to those we wrote for the `Triangle` class in the Shape Tracker app.

To begin this walkthrough, clone down the following code from the default branch `1_mvc_setup`. Then, take a moment to explore the files and folders and run the tests to make sure they are all passing.

**[<i class="glyphicon glyphicon-folder-open"></i>  Starter GitHub Repo for the "To Do List" Application](https://github.com/epicodus-lessons/section-2-to-do-list-csharp-net6/tree/1_mvc_setup)**

## Implementing an MVC Web Interface
---

We'll update this project to work with ASP.NET Core MVC. First we'll add the necessary components to our project structure.

* In the `ToDoList` production project, create the following file:
  * `Program.cs`
* Still within the `ToDoList` directory, create the following subdirectories:
  * `Controllers`
  * `Views`
* In `ToDoList/Controllers` create a `HomeController.cs` file.
* In `ToDoList/Views` create a `Home` subdirectory.
  * In this home subdirectory, create a single `Index.cshtml` file.
* Finally, in the uppermost parent directory, `ToDoList.Solution`, create a `.gitignore` file.

The resulting structure should look like this:

<pre>
ToDoList.Solution
├── .gitignore
├── ToDoList
│   ├── Controllers
│   │   └── HomeController.cs
│   ├── Models
│   │   └── Item.cs
│   ├── Program.cs
│   ├── Properties
│   │   └── launchSettings.json
│   ├── ToDoList.csproj
│   └── Views
│       └── Home
│           └── Index.cshtml
└── ToDoList.Tests
    ├── ModelTests
    │   └── ItemTests.cs
    └── ToDoList.Tests.csproj
</pre>

### Add ASP.NET Core MVC

We'll also add the MVC framework package by updating the production project's `.csproj` file to include `.Web` in the Project SDK:

<div class="filename">ToDoList/ToDoList.csproj</div>

```csharp
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
  </PropertyGroup>
</Project>
```

Navigate to the `ToDoList` production project in the terminal and run `$ dotnet restore`.

### `Program.cs`

We'll populate `ToDoList/Program.cs` with the same general configuration code we've used so far:

<div class="filename">ToDoList/Program.cs</div>

```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace ToDoList
{
  class Program
  {
    static void Main(string[] args)
    {
      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

      builder.Services.AddControllersWithViews();

      WebApplication app = builder.Build();

      app.UseHttpsRedirection();

      app.UseRouting();

      app.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}"
      );

      app.Run();
    }
  }
}
```

### `Properties/launchSettings.json`

We'll populate `ToDoList/Properties/launchSettings.json` with the same general configuration we'll use in all of our projects.

<div class="filename">ProjectName.Solution/ProjectName/Properties/launchSettings.json</div>

```json
{
  "profiles": {
    "development": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": true,
      "applicationUrl": "https://localhost:5001;http://localhost:5000",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
    "production": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": true,
      "applicationUrl": "https://localhost:5001;http://localhost:5000",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Production"
      }
    }
  }
}
```

### `.gitignore`

Double check that there's a `.gitignore` file with the following folders listed within:

<div class="filename">.gitignore</div>

```
obj
bin
```

Let's also ensure any `obj` or `bin` directories already committed are no longer tracked by Git with the following commands in the top level of our project:

```bash
$ git rm --cached obj -r
```

```bash
$ git rm --cached bin -r
```

If you receive a `did not match any files` response, it means you're already ignoring these directories so there was nothing to remove from Git. This is normal.

### Controller

In the `ToDoList/Controllers/HomeController.cs` we'll add the standard import statements, namespace, and class:

<div class="filename">ToDoList/Controllers/HomeController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;

namespace ToDoList.Controllers
{
  public class HomeController : Controller
  {


  }
}
```

In addition to the `Microsoft.AspNetCore.Mvc` namespace, we're also `using` our `ToDoList.Models` namespace. This grants access to our `Item` class in the controller.

Now we can add our first route:

<div class="filename">ToDoList/Controllers/HomeController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;

namespace ToDoList.Controllers
{
  public class HomeController : Controller
  {

    [Route("/")]
    public ActionResult Index()
    {
      Item starterItem = new Item("Add first item to To Do List");
      return View(starterItem);
    }

  }
}
```

* We create an `Index()` route method with a route decorator specifying a URL path of `/`, which means this is the root route for `localhost:5000`.

* When the route is invoked, we create a placeholder `Item` to populate our To Do List. We can access `Item`s because we are `using ToDoList.Models;` at the top of this file.

* We pass `starterItem` into the `View()` method. Let's create a corresponding view now.

### Views

Add the following to `Index.cshtml`:

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
    <h1>To Do List</h1>
    <ul>
      <li>@Model.Description</li>
    </ul>
  </body>
</html>
```

We use `@Model.Description` to display the property of the `starterItem` object we passed into `View()` in the controller.

## Launching the Project
---

Let's check out the project in the browser. Enter the following command in the `ToDoList` directory (the production directory) to build and run the project:

```bash
$ dotnet watch run
```

Remember: because we're using a `launchSettings.json` with a development profile configured as the default profile, the above command will start our project in development mode, which enables Developer Exception Pages.

If we visit `https://localhost:5001`, our To Do List homepage loads correctly. If you get an error, you may not have your developer security certificate set up for HTTPS.
