---
title: "📓 3.6.0.02 Scaffolding a .NET Application with dotnet new"
id: 36002-scaffolding-a-net-application-with-dotnet-new
hide_table_of_contents: true
day: weekend
---

In this lesson, we'll learn more about the **.NET 6.0 CLI** and build an ASP.NET Core API project with the **dotnet new** command. Later, we'll build an ASP.NET Core MVC project using the `dotnet new` command.

## The CLI
---

A CLI is a command line interface, which means we can use it to execute commands in the terminal. We've already been doing this with commands like `dotnet build` and `dotnet run`. However, we can also use the .NET Core CLI to quickly scaffold code for our projects with the `dotnet new` command. You may have already tried this out for the API console and MVC projects we built in the last course section.

We can see what `dotnet new` can offer with the following command: `dotnet new --list`.

```
Template Name       Short Name           Language    Tags
------------------  -------------------  ----------  --------------------------
Template Name                                 Short Name           Language    Tags
--------------------------------------------  -------------------  ----------  --------------------------
ASP.NET Core Empty                            web                  [C#],F#     Web/Empty
ASP.NET Core gRPC Service                     grpc                 [C#]        Web/gRPC
ASP.NET Core Web API                          webapi               [C#],F#     Web/WebAPI
ASP.NET Core Web App                          webapp,razor         [C#]        Web/MVC/Razor Pages
ASP.NET Core Web App (Model-View-Controller)  mvc                  [C#],F#     Web/MVC
ASP.NET Core with Angular                     angular              [C#]        Web/MVC/SPA
ASP.NET Core with React.js                    react                [C#]        Web/MVC/SPA
Blazor Server App                             blazorserver         [C#]        Web/Blazor
Blazor WebAssembly App                        blazorwasm           [C#]        Web/Blazor/WebAssembly/PWA
Class Library                                 classlib             [C#],F#,VB  Common/Library
Console App                                   console              [C#],F#,VB  Common/Console
dotnet gitignore file                         gitignore                        Config
Dotnet local tool manifest file               tool-manifest                    Config
EditorConfig file                             editorconfig                     Config
global.json file                              globaljson                       Config
MSTest Test Project                           mstest               [C#],F#,VB  Test/MSTest
MVC ViewImports                               viewimports          [C#]        Web/ASP.NET
MVC ViewStart                                 viewstart            [C#]        Web/ASP.NET
NuGet Config                                  nugetconfig                      Config
NUnit 3 Test Item                             nunit-test           [C#],F#,VB  Test/NUnit
NUnit 3 Test Project                          nunit                [C#],F#,VB  Test/NUnit
Protocol Buffer File                          proto                            Web/gRPC
Razor Class Library                           razorclasslib        [C#]        Web/Razor/Library
Razor Component                               razorcomponent       [C#]        Web/ASP.NET
Razor Page                                    page                 [C#]        Web/ASP.NET
Solution File                                 sln,solution                     Solution
Web Config                                    webconfig                        Config
Windows Forms App                             winforms             [C#],VB     Common/WinForms
Windows Forms Class Library                   winformslib          [C#],VB     Common/WinForms
Windows Forms Control Library                 winformscontrollib   [C#],VB     Common/WinForms
Worker Service                                worker               [C#],F#     Common/Worker/Web
WPF Application                               wpf                  [C#],VB     Common/WPF
WPF Class Library                             wpflib               [C#],VB     Common/WPF
WPF Custom Control Library                    wpfcustomcontrollib  [C#],VB     Common/WPF
WPF User Control Library                      wpfusercontrollib    [C#],VB     Common/WPF
xUnit Test Project                            xunit                [C#],F#,VB  Test/xUnit
```

All of these templates can be used to build fully scaffolded .NET applications. Here are some examples of using `dotnet new`:

* `dotnet new mvc --auth Individual -o TestMvcApp --framework net6.0` will create a files for an ASP.NET Core MVC project with authentication using Identity, all compatible with .NET version 6, and put them in a folder called `TestMvcApp/`. 
  * Note that the templates for authentication with Identity come with different configurations than the projects we built in the last section. For example, Identity is configured to use a SQLite database. To learn how to work with the template for authentication with Identity and all of the default configurations, [work through this guide](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-6.0&tabs=netcore-cli).
* `dotnet new console -o AddressBook --framework net6.0` will create files for a .NET 6 console app in a folder called `AddressBook/`. 

These commands are great in that they handle a lot of the boilerplate code and necessary packages while still allowing for configuration.

We can optionally learn more about different options (also called "flags") that we can include in our `dotnet new` command to configure the projects we scaffold. When we run the following command, we'll learn about different ways we can use the `dotnet new` command:

```
dotnet new --help
```

When we run the following command, we'll learn about different flags we can include to configure an ASP.NET Core MVC app: 

```
dotnet new mvc --help
```

The same information we get in the command line can also be found in [the online docs for `dotnet new`](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-new).

### The `dotnet new` Templates Use New C# Features 

It's important for us to be aware that the .NET 6 templates make use of newer features that we haven't spent a lot of time working with so far:

* [Implicit using directives](https://devblogs.microsoft.com/dotnet/welcome-to-csharp-10/#global-and-implicit-usings) adds common using directives globally to our project for the type of project we are building. This lets us omit listing certain namespaces, as they are implicitly added to our project.
* [Top level statements](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/top-level-statements) let us avoid including the boilerplate for our project's entry point: a static `Main()` method within a static `Program` class. (Note: the class name can be something other than `Program`.) Instead, we can begin writing code directly at the top level of the entry point file, `Program.cs`. (Note: here, too, the file could be named something other than `Program.cs`.)
* [File-scoped namespaces](https://devblogs.microsoft.com/dotnet/welcome-to-csharp-10/#file-scoped-namespaces) allow us to avoid additional nesting and indentation by listing the namespace for a file as a statement at the top of the file. This only works when there's a single namespace for a single file.
* Nullable types are enabled project-wide via the `.csproj` file and the `<Nullable>Enable</Nullable>` setting. The advantage of enabling nullable types is that we can get warning messages that help us avoid [`System.NullReferenceError`](https://learn.microsoft.com/en-us/dotnet/api/system.nullreferenceexception?view=net-6.0), when a type in our project is `null` and we are attempting to access a member (property) of that type. To learn how to work with nullable types, visit the following documentation and LearnHowToProgram.com lesson:
  * Start with the LearnHowToProgram.com lesson on [Nullable Types](https://old.learnhowtoprogram.com/c-and-net/test-driven-development-with-c/nullable-types). 
  * [`System.NullReferenceError`](https://learn.microsoft.com/en-us/dotnet/api/system.nullreferenceexception?view=net-6.0)
  * [Nullable Value Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-value-types)
  * [Nullable Reference Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-reference-types)
  * [How to migrate an application to use nullable types.](https://learn.microsoft.com/en-us/dotnet/csharp/nullable-migration-strategies)

You can opt out of all of the above features, if you want. To opt out of implicit using directives and a globally enabled nullable context, you must update your `.csproj` file.

In the next lesson, we'll use the `dotnet new` command to create an API project. Then we'll modify that project to host an API of our own.
