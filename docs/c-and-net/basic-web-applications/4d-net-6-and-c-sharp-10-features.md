---
title: "\U0001F4D3 3.2.4.2 Optional Features of C# Versions 9 and 10"
id: 3242-optional-features-of-c-versions-9-and-10
slug: 3242-optional-features-of-c-versions-9-and-10
hide_table_of_contents: true
sidebar_position: 41
day: thursday
type: lesson
url: https://github.com/fidgetech/c-and-net/blob/main/4d_net_6_and_c_sharp_10_features.md
---

With every new version of C# and .NET, new features are released. That's to be expected! What you may not expect is that we don't cover or use the majority of these features in the LearnHowToProgram.com curriculum. That leaves learning about new features for further exploration for your shared or independent projects. 

In this lesson, we're going to cover three more noticeable syntax updates with recent versions of C# that allow us to write less code. We'll also share resources that you can use to peruse more tools. 

Note that .NET releases a new version every year, and a new long-term support version every two years, so expect new tools to become available regularly. To learn more about the Microsoft product support and lifecycle for .NET, visit [this documentation](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core). 

## File Scoped Namespaces
---

Starting in C# version 10, we can write namespaces as a statement instead of nesting a code (classes) within a namespace. For example, this means that we can rewrite our `Program.cs` to include `namespace ToDoList;`, as a statement:

```cs
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace ToDoList;

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
```

Note that if a file has multiple classes in it, the namespace statement will apply to all classes. This means that we cannot use namespace statements when a single file has multiple namespaces in it. 

To learn more visit the [Microsoft (MS) Documentation on namespaces in C#](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/namespace).

## Implicit Using Directives
---

Also starting in C# version 10, we can now configure our app to implicitly include using directives. Remember using directives import specific resources or libraries into a file so we can use its types. Using `Program.cs` as an example that means we can omit these using directives:

```cs
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
```

From the `Program.cs` file:

```cs
namespace ToDoList;

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
```

Pretty neat! There's one more step, though: we need to configure our application to use implicit using directives. To do this open up your project's `.csproj` and add `<ImplicitUsings>enable</ImplicitUsings>` to our `<PropertyGroup>` tags. Let's use our `ToDoList.csproj` as an example:

```cs
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

</Project>
```

We won't enable implicit using directives on any example project in LearnHowToProgram.com, because it's good practice to understand how C# and .NET loads resources and organizes types. However, you are welcome to enable implicit using directives in your own projects.

Note that it's also possible to list global using directives that are applied to an entire project. To learn more about implicit and global using directives, visit the [MS documentation on implicit using directives](https://learn.microsoft.com/en-us/dotnet/core/project-sdk/overview#implicit-using-directives) (which also includes global using directives). 

## Top Level Statements, Or Omitting the `Main()` Method
---

Top Level Statements was introduced with C# version 9, and it makes it so developers can omit declaring the namespace, class, and method for the main program. The main program is always defined by a `Main()` method, and typically resides in `Program.cs`. Omitting the explicit declaration of the namespace, class, and `Main()` method means that we can write statements at the top level of our application. 

As an example, let's continue to use `Program.cs` in our ASP.NET Core MVC app "To Do List", and see how it changes with top level statements:

```cs
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
```

Note that in the above example, we're also using implicit using directives. 

As we can see, all of our statements that build, configure, and run our web app host are at the top level of `Program.cs`. Now our code is much more streamlined, and we're avoiding having to write the boilerplate code that we're familiar with (IE: the `Main()` method and its class). 

Note that we do not have to name our the entry point file of our program `Program.cs`. However, for top level statements to work, we can only use it in one file. This includes console applications as well as ASP.NET Core applications.

Finally, note that top level statements don't require additional configuration to use as long as you are working with .NET versions 5 and C# versions 9 and up. That said, you should be using currently supported versions, and .NET 5 is no longer supported.

To learn more about top level statements visit [the MS Documentation on top level statements](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/top-level-statements).

## What Else?
---

Note that we won't be implementing any of the aforementioned features from C# versions 9 and 10. However, we highly encourage you to explore them as well as other new features. To learn more about features released with C# version 10 (which was released with .NET 6), check out this blog ["Welcome to C# 10"](https://devblogs.microsoft.com/dotnet/welcome-to-csharp-10/). To review an exhaustive resource on new features and breaking changes for multiple versions of C#, visit the [MS Documentation called "what's New in C#"](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/). 

Happy exploring!