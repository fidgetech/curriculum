---
title: "📓 3.2.0.8 Constructing and Configuring an ASP.NET Core MVC Web App"
day: weekend
id: 3-2-0-8-constructing-and-configuring-an-asp-net-core-mvc-web-app
hide_table_of_contents: true
---

Now that we have a basic understanding of server-side frameworks and MVC, let's build our first ASP.NET Core MVC web application together.

Over the next few lessons, we'll create a website called "Friend Letter" that displays a custom electronic postcard to our friends while we're on vacation. This lesson will focus on constructing and configuring the project directory. Upcoming lessons will explore individual elements of an ASP.NET Core MVC web application including views, controllers, and models.

You are welcome to code along with the following lessons or just read through them. We will provide a finished example project repo to use as a reference at the end of the walkthrough. Optionally, check out the finished repo now (linked below) to get a sense of the project we will create in this walkthrough. Just like with console apps, you can install packages, build, and run the project by running `dotnet run` in the same directory as the `.csproj` file.

---

**[<i class="glyphicon glyphicon-folder-open"></i>  Example GitHub Repo for Friend Letter](https://github.com/epicodus-lessons/section-2-friend-letter-csharp-net6)**

## Project Setup for Friend Letter
---

Let's create a new project directory. This will have some similarities to the projects we created in the last section but with some new elements.

* Create a parent directory named `FriendLetter.Solution`.
* Within it, add one subdirectory called `FriendLetter`. (We won't add testing in this first application, so we can focus solely on new MVC concepts).
* Create two files in the `FriendLetter.Solution/FriendLetter` subdirectory:
  * `FriendLetter.csproj`
  * `Program.cs`
* Create three subdirectories within the `FriendLetter.Solution/FriendLetter/` subdirectory:
  * `Models/`
  * `Views/`
  * `Controllers/`
* In the parent `FriendLetter.Solution` directory we'll also create a `.gitignore` file.

The resulting structure should look like this:

<pre>
FriendLetter.Solution/
├── .gitignore
└── FriendLetter/
    ├── Controllers/
    ├── Models/
    ├── Views/
    ├── FriendLetter.csproj
    └── Program.cs
</pre>

**Note that we'll use the above basic folder and file structure in all of our ASP.NET Core MVC applications.** In this lesson, we'll cover the configurations for the `.gitignore`, `Friendletter.csproj`, and `Program.cs` files. In upcoming lessons, we'll learn more about what goes in the models, views, and controllers folders.

### Maintaining Organized Projects with `.gitignore`

Within the `.gitignore` file, we want to list the `obj` and `bin` folders, just like in the code snippet below. Doing so will tell Git to ignore any folders named "obj" or "bin" within the entire project.

<div class="filename">FriendLetter.Solution/.gitignore</div>

```
obj
bin
```

Why ignore these two folders? Keep in mind that these two folders are auto-generated:

* `dotnet restore` installs the packages listed in our `.csproj` file, creating the `obj` folder and its contents.
* `dotnet build` creates the `bin` folder and its contents, which includes the compiled code and resources that are ready to be executed with `dotnet run`.

Because we can install and build everything in our project with just a few commands, it's best practice to exclude the `obj` and `bin` directories from our GitHub repositories. This ensures our repositories primarily contain code we've written, which helps keep our repos organized and easy to navigate.

When we or other developers want to retrieve and run the project from GitHub, we can simply clone the repo and run `dotnet restore` and `dotnet build` in the production project's directory to recreate all necessary directories and files. Note that `dotnet build` implicitly runs `dotnet restore`, and `dotnet run` implicitly runs `dotnet build`, so ultimately we just need to run `dotnet run` to run the project.

### Managing ASP.NET Core MVC Packages in a `.csproj`

Next, we'll need to add a  `.csproj` file that includes packages for our new framework. This file is required in every ASP.NET Core MVC project. We'll add the following code:

<div class="filename">FriendLetter/FriendLetter.csproj</div>

```csharp
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
  </PropertyGroup>

</Project>
```

Keep in mind that "csproj" is short for "C# project". It is in this file that we list project-wide configurations and all of the files and resources we want included in a project. For example, we're listing the software development kit (SDK) we're using, `"Microsoft.NET.sdk.WEB"`, along with the target framework `net6.0`. 

Note that there's only one difference between the `.csproj` that we'll use for ASP.NET Core MVC applications and the one we use for console apps. Previously, we used the general .NET SDK as denoted by `<Project Sdk="Microsoft.NET.Sdk">`. Now, we're building web apps with ASP.NET Core MVC so we're using the ASP.NET Core SDK as denoted by `<Project Sdk="Microsoft.NET.Sdk.Web">`.

### Building and Hosting the Project with `Program.cs`

Next, we'll add code to `Program.cs` that handles configuring, building, and serving our web application. This file is required in every ASP.NET Core MVC project. We'll first look at all of the new code, and then review what each line of code does, line by line. 

Note that there's no need to memorize the following code, as most of it is boilerplate that we won't update often. 

Here's the code we'll add to `Program.cs`:

<div class="filename">FriendLetter/Program.cs</div>

```cs
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace FriendLetter
{
  class Program
  {
    static void Main(string[] args)
    {
      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

      builder.Services.AddControllersWithViews();

      WebApplication app = builder.Build();

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

Let's start with the familiar. Just as before, `Program.cs` contains the entry point to our application: a `Program` class with a `Main()` method. The rest, however, is new!

First note the two new `using` directives:

```cs
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
```

Remember that `using` directives let us import a namespace into a file so that we can use the types that belong to that namespace. The `Microsoft.AspNetCore.Builder` namespace lets us access tools to create and configure a web application host. The `Microsoft.Extensions.DependencyInjection` namespace allows us to access tools to create services within our web app that get added to our web application via dependency injection. 

Note that it's not important to develop an understanding of exactly what these namespaces allow us to access. We also won't get too far into the specifics of how dependency injection (DI) works in bootstrapping an ASP.NET Core app (though we will cover DI more soon). What's important to note here is that the object types and methods listed within the `Main()` method come from these two namespaces.

Next, let's look at the first line of code within `Main()`:

<div class="filename">FriendLetter/Program.cs</div>

```cs
WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
```

With the above code, we begin the process of creating a web application host. A **host** includes all of the application's resources and configurations needed to run as a web app in a browser. The first step in creating a host is to create a `builder` object so that we can configure exactly how we want our web application host to be built.

The builder for the web app host comes configured with some defaults:

* Uses a web server called [Kestrel](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel?view=aspnetcore-6.0).
* Loads configurations from the command line, `appsettings.json`, and other sources. We'll use `appsettings.json` in the next course section to connect a MySQL database to our project. Typically these configurations (both defaults and custom configurations) contain sensitive information like keys or passwords, or specifications about what environment the project should start in (as in, "production" or "development").
* Sends logging output to the terminal console and debug providers.

Next, let's see how we configure the host!

<div class="filename">FriendLetter/Program.cs</div>

```cs
WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();
```

We customize our host `builder` by enabling the Model-View-Controller (MVC) framework as a service. The services get added to the `builder.Services` property by invoking the `AddControllersWithViews()` method.

Something to note here is that services get added to our web application host through dependency injection. A **dependency** is simply a class that is used within another class. Or in other words, one class is dependent on the existence of another. Well, there are problems with setting up dependencies. ASP.NET Core recognizes these problems and provides a solution to them called **dependency injection** where the framework handles creating new dependencies and injecting them where they are needed throughout the web app.

While we can create custom dependencies and configure our host to inject those throughout our app, we'll primarily be using built-in services (that code in our app depends on) that ASP.NET Core handles injecting as needed. This means that the mechanism and workings of dependency injection will mostly be implicit and we won't get into the weed of understanding it. Microsoft has [excellent documentation on the topic](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0) if you wish to explore further.

In future course sections, we'll further customize the `builder` for our web app host. After we've finished configuring the builder, it's time to create the actual host. This is exactly what we do in the next line of code:

<div class="filename">FriendLetter/Program.cs</div>

```cs
WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

WebApplication app = builder.Build();
```

`builder.Build()` creates and returns our web app host, which we save in the variable `app`. As we can see, `app` is of the type `WebApplication`. 

So if we have our host, what's next? Well, it's time to configure it further, but this time using middleware to adjust how we handle requests made to our web app. When a user wants to view a page in our website, the user needs to make a **request** to the website host by entering a URL (like _localhost:5000_) or clicking a link. With ASP.NET Core applications, we configure our host to handle requests in specific ways with middleware. Let's first take a look at the remaining code in `Program.cs`, and then get into the details of what it all does and the technical terminology.

<div class="filename">FriendLetter/Program.cs</div>

```cs
WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

WebApplication app = builder.Build();

app.UseRouting();

app.MapControllerRoute(
  name: "default",
  pattern: "{controller=Home}/{action=Index}/{id?}"
);

app.Run();
```

With the first two method calls on `app`, we configure how we want our host to handle requests:

* `app.UseRouting();` specifies that we want our host to match the website URL to routes that we create within our app. For example, if the URL is _localhost:5000/Home/Index, our host will know to match _Home/Index_ to a route that we coded in our project. This will make more sense once we start defining routes in controller files.
* `app.MapControllerRoute(...);` establishes a convention for our routes to follow. This convention is the default pattern that our routes will follow. In this case, we are saying that we want our URLs to first list the name of the controller, then the name of the action, and then the id of the current object, if any. Just like before, this will make more sense once we start defining routes in controller files.

Finally, the last method called on `app` runs the host: `app.Run();`. It's at this point that our web app is launched and we can navigate to our localhost in the browser!

As noted previously, the methods called on `app` are called **middleware**, which means they receive and handle requests from a user to access a page within our website. Each middleware gets called in order and they can perform certain actions on the request. The biggest implication for us as ASP.NET Core developers is making sure that we place the middleware in the correct order. But don't worry about memorizing anything — there are [cheat sheets and guides online](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0#middleware-order) that tell you exactly what order to put the middleware in. Anytime we add middleware during the program, we'll tell you exactly where to place it.

We don't need to worry about perfectly understanding how middleware function within ASP.NET Core apps, as that is a more advanced concept. However, if you want to dive in and learn more, the Microsoft docs has [a very informative page on ASP.NET Core Middleware](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0), including graphics!

## Summary
---

Let's review the key takeaways from this lesson. To set up and configure an ASP.NET Core MVC web app, you'll need the following files and folders:

<pre>
ProjectName.Solution/
├── .gitignore
└── ProjectName/
    ├── Controllers/
    ├── Models/
    ├── Views/
    ├── ProjectName.csproj
    └── Program.cs
</pre>

Between our console apps and our new web apps built with ASP.NET Core Model-View-Controller (MVC), the biggest differences are the new folders called `Controllers` and `Views`, as well as the contents of `Program.cs`. We'll cover what goes in the `Controllers` and `Views` folders in upcoming lessons. As for `Program.cs`, keep in mind that the code therein does a few key things:

1. Create and configure a web host builder. Configuring the builder includes adding services, among other things. A web app "host" includes all of the configurations and resources necessary to run our app in the browser.
2. Create the web host by building our builder. We do this with the line `WebApplication app = builder.Build();`.
3. Further configure how our web host handles user requests. This includes setting up middleware that determines how to match a request to the routes we define in our code.
4. Run the web app host with `app.Run();`. It's at this point that we can navigate to localhost in the browser and view our website.

The last thing to note is reminder: don't worry about understanding how dependency injection and middleware work! Those are advanced concepts that you can learn about over time.

In the next lesson, we'll learn how to build and launch a basic ASP.NET Core MVC app. In later lessons, we'll revisit `Program.cs` and configure our web host further.
