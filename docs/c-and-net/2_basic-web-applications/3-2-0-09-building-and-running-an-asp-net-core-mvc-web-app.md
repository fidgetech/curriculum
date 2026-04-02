---
title: "📓 5.2.0.9 Building and Running an ASP.NET Core MVC Web App"
day: weekend
id: 5-2-0-9-building-and-running-an-asp-net-core-mvc-web-app
hide_table_of_contents: true
---

This lesson will cover building, compiling, and launching ASP.NET Core MVC projects so we can run our "Friend Letter" application in the browser.

## Building and Running ASP.NET Core MVC Applications
---

Our ASP.NET Core MVC projects are a combination of pre-existing code and custom code we write ourselves. This is the point of a framework:  it provides pre-made reusable functionality for commonly-used tasks like rendering webpages in a browser that developers can utilize to more quickly scaffold projects.

So far, we've only added framework code. Next, we'll use part of the .NET framework called **MSBuild** to compile and build our own custom code, as well as the framework's code.

### MSBuild

MSBuild is also known as **Microsoft Build Engine** or **Microsoft Build Tools**. It turns code in a project directory into a cohesive application by toggling settings, customizing how packages are introduced into the rest of the codebase, and more. We call this process "building" the project.

If the code or project is the combination of raw ingredients, MSBuild is the oven where our ingredients become a fully-fledged meal. There's no need to worry about the technical specifics of MSBuild quite yet, but if you're curious, check out the [_MSBuild_ section of the Microsoft documentation](https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=vs-2017).

### Building

Let's use MSBuild to build our project. We'll start by running `dotnet restore` in our _FriendLetter.Solution/FriendLetter_ directory to invoke NuGet to install project dependencies.

To run MSBuild, we'll run this command from the same directory:

```bash
$ dotnet build
```

### Running

Now let's try running our project in the browser. We'll run the following command in our _FriendLetter.Solution/FriendLetter_ directory:

```bash
$ dotnet run
```

After running this command, we'll see a response like this:

```bash
$ dotnet run
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[63]
      User profile is available. Using 'C:\Users\staff\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5000
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: https://localhost:5001
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Production
info: Microsoft.Hosting.Lifetime[0]
      Content root path: C:\Users\staff\Desktop\net6\csharp-friend-letter-dotnet-5\FriendLetter\
```

Note the line `Now listening on: http://localhost:5000`. Let's type _localhost:5000_ into our browser's URL bar. Well, we just get an error message. That's because we don't actually have any webpages built yet!

And while it may not seem like much, but we've still successfully configured, built, and launched our first ASP.NET Core MVC application.

## Using a Watcher
---

When we make changes to a .NET application, these changes won't immediately be apparent in the browser. In order to show our updated application in the browser, we need to cycle the server.

There are two ways to do this. This is the more painful way:

* Make sure updated code is saved in your code editor.
* Navigate to the server window in the terminal and type in _Ctrl + C_. This quits the server.
* Run `dotnet run` and navigate back to _localhost:5000_.

While this process works, it becomes very tedious to restart the server every time we make a change to our code.

Instead, it makes more sense to use a file watcher. A **file watcher** watches for changes and then automatically updates the server for us. There's no need to restart the server at all. To use a watcher we use the following command when we want to run the application:

```bash
$ dotnet watch run
``` 

Now every time we make a change, our server will automatically update. 

Note, however, a few cases in which you'll need to restart the server manually:

* When add or delete files or change the directory structure in any way.
* When you change the contents of the `.csproj` or `Program.cs` files.

To learn more about watchers and the types of files we can watch, check out the [documentation](https://docs.microsoft.com/en-us/aspnet/core/tutorials/dotnet-watch?view=aspnetcore-6.0).
