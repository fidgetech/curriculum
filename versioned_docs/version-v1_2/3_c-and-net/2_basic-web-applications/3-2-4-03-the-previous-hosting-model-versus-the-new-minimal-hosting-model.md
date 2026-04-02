---
title: "📓 3.2.4.3 The Previous Hosting Model versus the New Minimal Hosting Model"
day: thursday
id: 3-2-4-3-the-previous-hosting-model-versus-the-new-minimal-hosting-model
hide_table_of_contents: true
---

With the release of .NET 6, a new [Minimal Hosting Model](https://learn.microsoft.com/en-us/aspnet/core/migration/50-to-60?view=aspnetcore-6.0&tabs=visual-studio-code#nhm) was introduced to create, configure, and run a host for our ASP.NET Core web apps. A **hosting model** is the way we create the host for our web apps, and a **host** includes all of the application's resources and configurations needed to run as a web app in a browser. We create our web app host in `Program.cs`, and whether or not you knew it, we've been using the Minimal Hosting Model this whole time. 

While Microsoft recommends that ASP.NET Core developers use the Minimal Hosting Model, it's not required, and there are many resources and websites that continue to use the previous hosting model (used with .NET 5 and earlier versions). In fact, when new technology comes out, adoption is usually very slow because it is costly and time-intensive for companies to upgrade. All of this is to say that you will likely work with the previous hosting model if you pursue a career in development with C# and ASP.NET Core. 

For all of these reasons, it's important for us to become familiar with how web hosts were built prior to the Minimal Hosting Model, and that's exactly what we'll do in this lesson!

## Two Files to Build a Host: `Program.cs` and `Startup.cs`
---

There's a lot of highly technical details about the differences between the previous hosting model and the Minimal Hosting model, which we won't get into. We'll just focus on the core concepts. And since we're already familiar with the Minimal Hosting Model, we'll just focus on what the previous hosting model looks like. 

A core concept to cover is that building and configuring a host happens across two files in the previous hosting model: `Startup.cs` and `Program.cs`. `Program.cs` handles building the host, while `Startup.cs` handles configuring the host. 

First, let's take a look at what `Program.cs` looks like with the previous hosting model. We'll use the ToDoList's `Program.cs` as an example.

<div class="filename">ToDoList/Program.cs</div>

```cs
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace ToDoList
{
  public class Program
  {
    public static void Main(string[] args)
    {
      var host = new WebHostBuilder()
        .UseKestrel()
        .UseContentRoot(Directory.GetCurrentDirectory())
        .UseIISIntegration()
        .UseStartup<Startup>()
        .Build();

      host.Run();
    }
  }
}
```

In the above code, we build a web host: 

* We define that we want to use the Kestrel and IIS web servers.
* We locate the root of the directory.
* We specify that we want to further configure our application with a `Startup.cs` file.

The above code is considered boilerplate that doesn't get changed, and if so, rarely. Because of this, in the new Minimal Hosting Model, the ASP.NET Core team decided to do almost all of the above steps implicitly with one line:

```cs
//  This is from the Minimal Hosting Model
WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
```

The process of creating a `builder` with `WebApplication.CreateBuilder(args);` sets up the Kestrel and IIS web servers, locates the root of the directory, and sets up some additional basic default configurations that we won't get into. 

The only thing `WebApplication.CreateBuilder(args);` does not do is to configure our application's services and request handling. That's something that developers should always define for their application. In the previous hosting model, `Startup.cs` is used to further configure the host and services, so let's look at `Startup.cs` next. Some of the code will be familiar!

<div class="filename">ToDoList/Startup.cs</div>

```cs
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ToDoList
{
  public class Startup
  {
    public Startup(IWebHostEnvironment env)
    {
      var builder = new ConfigurationBuilder()
          .SetBasePath(env.ContentRootPath)
          .AddEnvironmentVariables();
      Configuration = builder.Build();
    }

    public IConfigurationRoot Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
      services.AddControllersWithViews();
    }

    public void Configure(IApplicationBuilder app)
    {
      app.UseDeveloperExceptionPage();
      app.UseHttpsRedirection();
      app.UseRouting();

      app.UseEndpoints(routes =>
      {
        routes.MapControllerRoute("default", "{controller=Home}/{action=Index}/{id?}");
      });

      app.UseStaticFiles();
      
      app.Run(async (context) =>
      {
        await context.Response.WriteAsync("Hello World!");
      });
    }
  }
}
```

In `Startup.cs`, we do a few things:

* We define a constructor and a property `Configuration`. The constructor creates a configuration object for our web app host, which handles loading environment variables and the likes. For example, we might load a `.json` file that contains a username and password to access a database.
* We create a `ConfigureServices` method that allows us to add services to the web app host. In the Minimal Hosting Model, if we want to add services, we would access the `WebApplicationBuilder` object's `Services` property, like `builder.Services.AddControllersWithViews();`.
* We create a `Configure` method that allows us to configure how requests (from the user to view a webpage) are handled. We do the same thing in the Minimal Hosting Model, except we call these methods on the `WebApplication` host that we call `app`.

**Don't worry about remembering the details of the above information.** If you ever find yourself working on a project that uses a `Startup.cs` and `Program.cs` file, there's a host of online information (including this lesson) that will get you oriented as far as how these files work in tandem and how your web app host is getting built and configured.

The main **learning goal** for this lesson is for you to understand that `Startup.cs` is a web app host configuration file that some projects still use along with `Program.cs`, and that there's a new hosting model called the "Minimal Hosting Model" that only uses one configuration file, `Program.cs`. We use the Minimal Hosting Model in the LearnHowToProgram.com curriculum.

To read more about the Minimal Hosting Model, visit [the Microsoft Documentation on the Minimal Hosting Model](https://learn.microsoft.com/en-us/aspnet/core/migration/50-to-60?view=aspnetcore-6.0&tabs=visual-studio-code#new-hosting-model)

## Why Make the Change?
---

So, why bother removing `Startup.cs` in the new Minimal Hosting Model? The developer team for ASP.NET Core decided to move to the new Minimal Hosting Model to abstract boilerplate code and make the process of setting up a web host more intuitive to new developers. A core part of achieving that goal was to streamline setup into one file. 

However, there's plenty of developers who do not like the new Minimal Hosting Model and don't think it is intuitive. It's unclear if Microsoft will make the Minimal Hosting Model required to use in future versions of ASP.NET Core, but it is possible. For now, everyone gets to decide whether or not to use the new Minimal Hosting Model, including you! That said, in the coursework in LearnHowToProgram.com, we'll continue to use the Minimal Hosting Model.
