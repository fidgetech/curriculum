---
title: "📓 3.2.0.5 Introduction to ASP.NET Core"
id: 3205-introduction-to-aspnet-core
hide_table_of_contents: true
day: weekend
---

All of the C# apps we've created have run in the command line. Now it's time to start building C# web applications that run in the browser. We'll use a special web application framework called **ASP.NET Core MVC** to do this.

In the next few lessons, we'll learn more about the **ASP.NET Core MVC** framework including its history, how it works, and how it follows a pattern called **server-side MVC**. Then we'll create a _"Hello World"_ web application.

## .NET Frameworks
---

Since 2000, .NET evolved to include three different implementations:

* .NET Framework
* .NET Core
* Xamarin with Mono

These implementations are called **frameworks**. While only one actually has _"framework"_ in its name, all three are indeed frameworks. The .NET Framework was the original implementation of .NET and was released in 2002. Mono was released in 2004 and .NET Core was released in 2016. Mono includes web and mobile development tools, whereas .NET Core focuses on web development.

Notably, Mono and .NET Core are both **cross-platform implementations** of the .NET Framework. This means they can run on multiple different operating systems, such as Mac OSX and Windows. Applications developed with the .NET Framework can only run on Windows. 

In 2020, Microsoft released .NET 5.0 as the new modern and standard framework. With the release of .NET 5, Microsoft sought to unify many disparate tools under one new name, ".NET", and ensure that all of these tools are cross-platform and open source. This unification project is ongoing today, and new features and tooling is continually being added to .NET. As of late 2022, .NET 7 is soon to be released and .NET 6 is the version that will be supported long-term by Microsoft. 

Note the naming for ".NET": there's no "framework" and no "core". So, what does this mean? Well, .NET versions 5 and up are based off of .NET Core, as well as tooling from Xamarin with Mono, because cross-platform development is standard in modern development. Quite simply, the folks at Microsoft decided to go with just ".NET" as the unified name for all of these tools.

As noted above, the project of developing .NET (versions 5 and up) as the new standard is ongoing. For example, the release of .NET 5 did not replace the ".NET Framework" (for Windows development only), which still exists and it is different than ".NET":

* The .NET Framework is for software development on Windows only. As of late 2022 it's on version 4.8.
* .NET (starting with .NET 5) is cross-platform and open-source and is the new standard for .NET. 

Down the line, the .NET Framework may be retired, but it may not be. So, we need to keep these naming differences in mind. 

Here's another naming convention to keep note of: even though the "Core" was dropped from ".NET", many of the tools we will use keep the word "Core". This is in order to avoid being confused with similarly-named packages. For example, we're using a specific implementation of .NET called **ASP.NET CORE** that lets us build web applications and APIs. Within ASP.NET Core there are many additional frameworks:

* ASP.NET Core MVC
* ASP.NET Core Razor Pages
* ASP.NET Core Blazor
* ASP.NET Core Web APIs
* And more!

We'll be building web apps with **ASP.NET Core MVC**, which is a **server-side** framework that follows the **MVC** (Model-View-Controller) pattern. In the next two lessons, we'll discuss server-side frameworks and MVCs. Then we'll create our first ASP.NET Core MVC web application together.

## Resources for ASP.NET Core
---

.NET is often called a "software development platform" because it is made up of so many frameworks, languages, libraries, and tools. Moreover, we can build a LOT of different software with .NET. Because of this, it's easy to get confused with what's what. To alleviate confusion, we're going to list the names and versions of the tools we are going to use and link to resources. Fortunately, Microsoft has extensive documentation as well as a separate learning center, which helps newcomers get a hang of everything .NET!

These are the tools we use in this course:

* [.NET 6](https://learn.microsoft.com/en-us/dotnet/?view=aspnetcore-6.0) as a software development platform.
* [ASP.NET Core MVC 6](https://learn.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-6.0) as a framework to build web apps.
* [C# 10](https://learn.microsoft.com/en-us/dotnet/csharp/) as a programming language.

To get another introduction to .NET and everything we can do with this software development platform, check out this video:

* ["What is .NET"](https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet)

To review what ASP.NET Core is and the tools it has for web development, check out the following documentation pages:

* [Overview of tools within ASP.NET Core 6](https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-6.0)
* [Introduction to ASP.NET Core 6](https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-6.0)
