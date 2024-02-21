---
title: "📓 3.5.0.4 Identity Setup and Configuration"
id: 3-5-0-4-identity-setup-and-configuration
hide_table_of_contents: true
day: weekend
---

In this lesson, we'll add Identity to our To Do List application. This will involve creating a new class to manage user accounts with Identity, updating our `Program.cs` to include Identity in our project, and configuring Identity to work with Entity Framework Core. You can follow this same process to add Identity to any of your projects.

## Identity Setup and Configuration
---

Start by opening up your To Do List app. We'll continue where we left off from section 4. That corresponds to the code in the branch [`6_data_from_multiple_db_tables`](https://github.com/epicodus-lessons/section-4-to-do-list-with-many-to-many-csharp-net6/tree/6_data_from_multiple_db_tables) in the section 4 example repo for the To Do List app.

Since we're embarking on a new version of our project, we recommend creating and using a new branch as well as updating `appsettings.json` to use a new database name. For example, `to_do_list_with_auth` — that's what we'll use in our example projects. When you update to a new database name, don't forget to create the database with the command `dotnet ef database update`.

<div class="filename">ToDoList/appsettings.json</div>

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Port=3306;database=to_do_list_with_auth;uid=root;pwd=epicodus;"
  }
}
```

### Creating a User class by Extending an Identity Class

Let's start by creating a class to represent user accounts. Fortunately, Identity comes with a class to represent users called `IdentityUser`. As we can see in [the documentation on the `IdentityUser` class](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityuser?view=aspnetcore-6.0), this class contains a number of properties such as `Email`, `UserName`, and many others, like the number of recorded failed login attempts.

We'll implement the functionality in the `IdentityUser` class by creating our own custom class that extends from `IdentityUser`.

Add a file named `ApplicationUser.cs` to `Models`. It should contain the following code:

<div class="filename">Models/ApplicationUser.cs</div>

```csharp
using Microsoft.AspNetCore.Identity;

namespace ToDoList.Models
{
    public class ApplicationUser : IdentityUser
    {

    }
}
```

We extend Identity's `IdentityUser` class into our own custom `ApplicationUser` class using the `:` operator in the class declaration. This ensures our `ApplicationUser` class inherits all necessary functionality from Identity's `IdentityUser` class.

Note — we don't have to create our own custom `ApplicationUser` class! We could have simply used Identity's `IdentityUser` class and not gone through the trouble of creating a new model. However, when we create our own custom class (that inherits from `IdentityUser`), we can add new properties to it. For example, what if we want to allow users to have a profile picture? Or list their personal website? Or save their birthday? We could add properties for each of those. Here's an example:

```csharp
using Microsoft.AspNetCore.Identity;
using System;

namespace ToDoList.Models
{
    public class ApplicationUser : IdentityUser
    {
      public string Website { get; set; }
      public string Image { get; set; }
      public DateOnly Birthday { get; set; }
    }
}
```

And with the above example configuration, our `ApplicationUser` class will have `Website`, `Image`, and `Birthday` properties along with all of the properties listed in [the `IdentityUser` class](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityuser?view=aspnetcore-6.0).

We won't be adding properties to our custom `ApplicationUser` class in our To Do List application, but you definitely should explore doing so in your own projects.

### Configuring Identity to Work with Entity Framework Core

Identity is built to use Entity Framework Core and store user information in a database. It comes with the class `IdentityDbContext`, which extends EF Core's `DbContext` class to work with user authentication.

First, we'll need to include the package that connects the two:

```bash
$ dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore -v 6.0.0
```

We'll now see `Microsoft.AspNetCore.Identity.EntityFrameworkCore` added to our package list in `ToDoList.csproj`.

We'll update `ToDoListContext.cs` so that it extends from `IdentityDbContext` instead of `DbContext`.

<div class="filename">Models/ToDoListContext.cs</div>

```csharp
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ToDoList.Models
{
    public class ToDoListContext : IdentityDbContext<ApplicationUser>
    {
      // Don't change code in here.
    }
}
```

* We'll have to add a new using directive: `using Microsoft.AspNetCore.Identity.EntityFrameworkCore;`

* Once again, we extend a class with the `:` operator. We're instructing our `ToDoListContext` class to inherit all functionality from Identity's built-in `IdentityDbContext` class. This replaces the `DbContext` class that ToDoListContext was previously extending from.

* Notice that we're declaring `ApplicationUser` as the _type_ of `IdentityDbContext` we're inheriting in the class declaration. This tells Identity which class in the application will contain the user account information it will be responsible for authenticating.

### Configuring `Program.cs`

Finally, let's update our `Program.cs` file and configure the application to use Identity with Entity Framework and MVC.

<div class="filename">Program.cs</div>

```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ToDoList.Models;
using Microsoft.AspNetCore.Identity;

namespace ToDoList
{
  class Program
  {
    static void Main(string[] args)
    {

      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

      builder.Services.AddControllersWithViews();

      builder.Services.AddDbContext<ToDoListContext>(
                        dbContextOptions => dbContextOptions
                          .UseMySql(
                            builder.Configuration["ConnectionStrings:DefaultConnection"], ServerVersion.AutoDetect(builder.Configuration["ConnectionStrings:DefaultConnection"]
                          )
                        )
                      );
      
      // New code below!!
      builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ToDoListContext>()
                .AddDefaultTokenProviders();

      WebApplication app = builder.Build();

      // app.UseDeveloperExceptionPage();
      app.UseHttpsRedirection();
      app.UseStaticFiles();

      app.UseRouting();

      // New code below!
      app.UseAuthentication(); 
      app.UseAuthorization();

      app.MapControllerRoute(
          name: "default",
          pattern: "{controller=Home}/{action=Index}/{id?}"
        );

      app.Run();
    }
  }
}
```

* We add the `using` directive `using Microsoft.AspNetCore.Identity;` so our `Program` class has access to Identity.

* We set up Identity as a service with the line `builder.Services.AddIdentity<ApplicationUser, IdentityRole>()`. Notice that we specify `<ApplicationUser, IdentityRole>` — these are the two models that we're using to designate the user and the role. Just like `IdentityUser`, [`IdentityRole` is a built-in class to Identity](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityrole?view=aspnetcore-6.0), and it allows us to use the default configurations for roles. We won't be configuring roles beyond the defaults, so we use the built-in `IdentityRole` class here.

* We chain two more method calls to the Identity service that we set up: [`.AddEntityFrameworkStores<ToDoListContext>()`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.dependencyinjection.identityentityframeworkbuilderextensions.addentityframeworkstores?view=aspnetcore-6.0) and [`.AddDefaultTokenProviders();`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identitybuilderextensions.adddefaulttokenproviders?view=aspnetcore-6.0). The first method ensures that the Identity user data is saved via EF Core to our database (as represented by the `ToDoListContext` class). The second method sets up Identity's providers for tokens, which are created during password reset or two factor authentication, for example. Note that we won't go over how to implement either of those two things in the coursework, and you are encouraged to look into them on your own.

* Finally, we configure our web application `app` to `.UseAuthentication()` and `.UseAuthorization()`. Remember two things here: 
  * Whenever we call a method on our `WebApplication app`, we are configuring how our application handles HTTP requests (the "pipeline"). We configure the request pipeline by setting up middleware. **Middleware** is software that we add to our request pipeline that determines how the request should be processed. Each middleware decides whether to do some work, or to pass the request onto the next middleware. To optionally review more about this topic, visit the [MS Docs](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0).
  * The order in which we set up the middleware matters! If these methods are called in the wrong order, you may run into unhandled exceptions or issues logging in with Identity. Fortunately, [the Microsoft Docs has a list](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0&source=docs#middleware-order) of how middleware should be ordered.

### Create a Migration and Update the Database

Now that the project is configured to use Identity, it's time to create a new migration and update our database. Run these two commands within the `ToDoList/` project folder:

```bash
$ dotnet ef migrations add AddIdentity
$ dotnet ef database update
```

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for To Do List with Authentication and Authorization: `1_identity_setup`](https://github.com/epicodus-lessons/section-5-to-do-list-with-auth-csharp-net6/tree/1_identity_setup)**



