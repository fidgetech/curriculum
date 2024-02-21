---
title: "📓 3.2.3.6 Using Static Content"
id: 3236-using-static-content
hide_table_of_contents: true
day: wednesday
---

Up to this point, our applications have been pretty plain. In this lesson, we'll cover how to add CSS, images, and JavaScript scripts to our ASP.NET Core MVC web apps.

## Structure
---

When MVC apps run on a server, they use a `wwwroot` folder as their web root. That means only files in this special folder can be accessed with requests. If we want to include images, CSS, and other content to spruce our pages up, they must also reside in this folder. Otherwise, the GET requests our application uses won't be able to access them.

If we want to add a stylesheet to our project, we need to create a `wwwroot` directory at the top-level of our `ToDoList` production project, like this:

<pre>
ToDoList.Solution
├── ToDoList
│   ├── Controllers
│   ├── Models
│   ├── Program.cs
│   ├── ToDoList.csproj
│   ├── Views
│   └── wwwroot
└── ToDoList.Tests
    ├── ModelTests
    └── ToDoList.Tests.csproj
</pre>

In that directory, we add a `CSS` subdirectory with a `styles.css` file inside it. This folder will store any non-C# related files required to run your application, such as images, videos, music, stylesheets, scripts, etc.

<pre>
ToDoList.Solution
├── ToDoList
│   ├── Controllers
│   ├── Models
│   ├── Program.cs
│   ├── ToDoList.csproj
│   ├── Views
│   └── wwwroot
│       └── css
│           └── styles.css
└── ToDoList.Tests
    ├── ModelTests
    └── ToDoList.Tests.csproj
</pre>

Then we link this stylesheet with a standard `<link>` element on any views that we want to style. To reference the root folder in our `<link>`, we use the syntax `~/`.

For example, our `styles.css` inside of the `ToDoList/wwwroot/CSS` folder depicted above could be linked in a view like this:

```html
<link rel="stylesheet" type="text/css" href="~/css/styles.css" />
```

## Adding Static Content
---

In order to see this in action, let's go over one more example of creating static pages in an MVC app. We're going to make a few new folders so we can display images on our website. In the `wwwroot` folder, create an `img` folder. All images will be stored here.

Choose a photo from [unsplash.com](https://unsplash.com/) or elsewhere. Be sure to keep track of photo file names.

Now let’s create a new route in `HomeController.cs`.

<div class="filename">ToDoList/Controllers/HomeController.cs</div>

```csharp
...

  [Route("/favorite_photos")]
  public ActionResult FavoritePhotos()
  {
    return View();
  }

...
```

Add a view named `FavoritePhotos`.

<div class="filename">ToDoList/Views/Home/FavoritePhotos.cshtml</div>

```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>My To-Do List!</title>
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
        crossorigin="anonymous">
    </head>
    <body>
      <h1>Favorite Traveling Photos</h1>
      <ul>
        <li><img src='~/img/photo1.jpg'/></li>
        <li><img src='~/img/photo2.jpg'/></li>
        <li><img src='~/img/photo3.jpg'/></li>
      </ul>
    </body>
  </html>
```


Unfortunately, if we navigate to _http://localhost:5000/favorite\_photos_, the images aren't showing. This is because our application isn't configured to use static files like images or CSS stylesheets.

## Configurations for Using Static Content
---

Let's update our web app host configuration to serve static files. To do this, we'll need to add a new line of code `app.UseStaticFiles();` to `Program.cs`. 

Here's the updated `Program.cs` of the To Do List project.

<div class="filename" >Program.cs</div>

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
      app.UseStaticFiles();
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

Note that the order of code matters here. `app.UseStaticFiles();` needs to be before `app.Run();` or the files will not load.

Now we can run `$ dotnet watch run` to see images on our page.

This image route is not strictly relevant to our To Do List, so it will be removed for the purpose of the example repo. However, as long as `Program.cs` contains `app.UseStaticFiles();`, you will be able to add and customize many different types of static content into your projects.

To learn more about serving static files and additional configurations, visit the [Microsoft Docs on Static Files](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/static-files?view=aspnetcore-6.0)
