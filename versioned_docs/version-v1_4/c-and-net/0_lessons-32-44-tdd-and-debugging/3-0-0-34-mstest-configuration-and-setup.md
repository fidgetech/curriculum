---
title: "📓 5.0.0.34 MSTest Configuration and Setup"
day: weekend
id: 5-0-0-34-mstest-configuration-and-setup
hide_table_of_contents: true
---

Now that we have a refresher on Test-Driven Development (TDD), the Red, Green, Refactor (RGR) workflow, and testing best practices, we're ready to start using MSTest to write automated unit tests. For practice, we're going to revisit the Shape Tracker app and rebuild our `Triangle` class from nothing using TDD. In this lesson, we'll start by setting up the files, folders, and configurations for MSTest.

You are welcome to code along with this pre-work, or just read through it. If you decide to code along with this pre-work walkthrough, you can use the Shape Tracker project you completed in the previous pre-work section, or clone down [the completed Shape Tracker console app from branch `6_class_properties`](https://github.com/epicodus-lessons/prework-shape-tracker-csharp-net6). 

GitHub repository references for building the Shape Tracker `Triangle` business logic with TDD will be provided periodically.

## Setting Up a Project to Use MSTest
---

Let's walk through how to set up MSTest in our own C# projects.

### Directory Structure Setup

Within the parent directory `ShapeTracker.Solution`, create a new subdirectory called `ShapeTracker.Tests`.

The directory structure will look like this:

```
ShapeTracker.Solution/
  ├── ShapeTracker/
  ├── ShapeTracker.Tests/
  ├── README.md
  └── .gitignore
```

* `ShapeTracker.Solution` is the parent directory where all our code lives:
  * `ShapeTracker` will hold our application logic. This is sometimes referred to as the **production** project because it contains the code that will actually run when we launch the program.
  * `ShapeTracker.Tests` will hold all of our automated tests. We should always append a `.Tests` suffix to this directory.

### The Project File (`.csproj`) for Tests

Next, we'll create the project file for `ShapeTracker.Tests`. The project file will contain package references for MSTest, standard configurations, as well as a reference to our production project. 

Create a new file called `ShapeTracker.Tests.csproj` within the `ShapeTracker.Tests` directory, so that the file and folder structure looks like this:

```
ShapeTracker.Solution/
  ├── ShapeTracker/
  ├── ShapeTracker.Tests/
  │     └── ShapeTracker.Tests.csproj
  ├── README.md
  └── .gitignore
```

Next, and add the following code to the new `ShapeTracker.Tests.csproj` file:

<div class="filename">ShapeTracker.Solution/ShapeTracker.Tests/ShapeTracker.Tests.csproj</div>

```csharp
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="17.3.2" />
    <PackageReference Include="MSTest.TestAdapter" Version="2.2.10" />
    <PackageReference Include="MSTest.TestFramework" Version="2.2.10" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="..\ShapeTracker\ShapeTracker.csproj" />  
  </ItemGroup>

</Project>
```

Take note of the following:

* We use the same `Sdk` as in our production project: `"Microsoft.NET.Sdk"`.
* We list the target framework configuration (`net6.0`), but not the output type (`<OutputType>Exe</OutputType>`). That's because our test directory doesn't have a user interface (UI) and we won't be running this project with `dotnet run`. We only include an output type when we have a UI to run. 
* In the `<ItemGroup>` area, we import three packages, each in special `<PackageReference>` tags:
  * `Microsoft.NET.Test.Sdk` imports functionality to set up and build our testing environment;
  * `MSTest.TestAdapter` will run our tests for us;
  * `MSTest.TestFramework` allows us to create test classes and methods and to use other built-in code to construct tests.
* In the second `<ItemGroup>` element, our test project references our main production project. This allows our tests to locate and use the namespaces of our production project without interfering with it.

**You can use all of the above code as boilerplate in the testing directory's project file for all future projects, except for the project reference value, which you will need to update.**

### Two Separate Projects = Two Assemblies

It's important to understand that our production project `ShapeTracker` and test project `ShapeTracker.Tests` are actually two separate projects that live within the same parent directory. We know that these two projects are separate because they each have their own project `.csproj` file. 

In more technical terms, we would describe these projects as two separate assemblies. An **assembly** is a collection of types and resources that form a program, which is saved to a `.exe` or `.dll` file within our `bin` folder. We know `ShapeTracker` and `ShapeTracker.Tests` are two assemblies because they have separate project files, and they also have their own `obj` and `bin` folders (which we'll see soon). 

Because we're working with code between two assemblies, we need to pay a bit more attention to the **access modifiers** (like `public` and `private`) we use in our production `ShapeTracker` project. If we want to access code in our production assembly `ShapeTracker` from our test assembly `ShapeTracker.Tests`, we need to make sure that code has a `public` access modifier. This is why our `Triangle` business logic class is `public` — so that we can access that code from our test assembly in `ShapeTracker.Tests`.  

### Acquiring and Installing Packages

Now that our `.csproj` file is complete, we need to add these tools to our project. Navigate into the `ShapeTracker.Tests` folder in the command line and run the following:

```bash
$ dotnet restore
```

This command tells **NuGet**, a free open source package manager that comes with .NET, to retrieve and install the packages we listed in `ShapeTracker.Tests.csproj` in our application. This command automatically creates new `obj` directories in both our `ShapeTracker` and `ShapeTracker.Tests` project, each containing multiple files.

The `obj` directory in `ShapeTracker.Tests` might look something like this:

```
ShapeTracker.Solution
  ├── ShapeTracker/
  ├── ShapeTracker.Tests/
  │     ├── ShapeTracker.Tests.csproj
  │     └── obj/
  │           ├── ShapeTracker.Tests.csproj.nuget.cache
  │           ├── ShapeTracker.Tests.csproj.nuget.g.props
  │           ├── ShapeTracker.Tests.csproj.nuget.g.targets
  │           └── project.assets.json
  ├── README.md
  └── .gitignore
```

These files contain detailed references and configuration instructions that our program will reference later on. Depending on your machine, you may have differently named files in this folder. They contain special internal code and we won't need to interact with these files for the most part. For now, simply leave them alone. If these files are accidentally deleted or modified, they can be restored with `$ dotnet restore` command.

### Note on `restore` Commands

Keep in mind that **anytime we update a `.csproj` file, we need to run `dotnet restore` to download and install updated packages**.

It's also **essential to ensure that we run console commands within the correct project.** In this case, we need to be running the command in our `ShapeTracker.Tests` folder. If our terminal is located in the root directory of the project, we can run commands that specify an individual project like this:

```bash
$ dotnet restore ShapeTracker.Tests
```

### Test Folder and File(s)

Next, we'll create the folder and file that will hold the tests for our `Triangle` class. Within the `ShapeTracker.Tests` directory, create a subdirectory called `ModelTests`. Within `ModelTests` add a new file called `TriangleTests.cs`. The new file/folder structure should look like this:

```
ShapeTracker.Solution
  ├── ShapeTracker/
  ├── ShapeTracker.Tests/
  |     ├── ModelTests/
  |     |     └── TriangleTests.cs
  │     └── ShapeTracker.Tests.csproj
  ├── README.md
  └── .gitignore
```

The `ModelTests` subdirectory will hold one or more files for tests related to our Shape Tracker models. We only have one model, `Triangle`, so we only have one test file: `TriangleTests.cs`. 

If we later decided to expand our Shape Tracker app and add more models, they would each have a test file within the `ModelTests` subdirectory. For example, if we created `Ellipse` and `Rectangle` models, we'd create two more test files, `EllipseTests.cs` and `RectangleTests.cs`. We won't add those files now, but for reference, here's what that would look like: 

```
ShapeTracker.Solution
  ├── ShapeTracker/
  ├── ShapeTracker.Tests/
  |     ├── ModelTests/
  |     |     ├── EllipseTests.cs
  |     |     ├── RectangleTests.cs
  |     |     └── TriangleTests.cs
  │     └── ShapeTracker.Tests.csproj
  ├── README.md
  └── .gitignore
```

### Boilerplate for our Test File

Let's set up just the basics for our `TriangleTests.cs` test file. The code we'll add now is boilerplate that can be added to all test files, save for a change in class and namespace names. 

<div class="filename">ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs</div>

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ShapeTracker.Models;

namespace ShapeTracker.Tests
{
  [TestClass]
  public class TriangleTests
  {
    // Tests will go here!
  }
}
```

*  `using Microsoft.VisualStudio.TestTools.UnitTesting` imports the MSTest framework that we installed with the `$ dotnet restore` command.

* `using ShapeTracker.Models;` imports the `ShapeTracker.Models` namespace from the `ShapeTracker` project for use in our tests.

* `[TestClass]` tells MSTest that the following class contains tests to be run.

### Running Our Tests

At this point, we can now try running tests. And yes, even though we don't have any tests yet, we can still learn something from the process: 

* The command to run tests.
* How MSTest generates a `bin` folder with its own executable files in order to run the tests. 
* The MSTest terminal output when there are no tests.

Let's try it out. In the command line, navigate to the `ShapeTracker.Tests` directory and enter the following command:

```
$ dotnet test
```

If we carefully read the terminal output, we'll see that this command runs `dotnet restore`. That means we don't have to run `dotnet restore` separately from `dotnet test` if we don't need to. 

We'll also see that a `bin` folder is generated when we run `dotnet test`. This new `bin` folder contains executable files that MSTest uses to run tests and create output in our terminal. This is in contrast to the `bin` folder within our `ShapeTracker` directory which contains executable files that will run our Shape Tracker user interface. Remember, `ShapeTracker` and `ShapeTracker.Tests` are two separate projects/assemblies.

Finally, we'll see this message from MSTest letting us know there are no tests to run!

```
Test run for C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\bin\Debug\net6.0\ShapeTracker.Tests.dll (.NETCoreApp,Version=v6.0)
Microsoft (R) Test Execution Command Line Tool Version 17.3.1 (x64)
Copyright (c) Microsoft Corporation.  All rights reserved.

Starting test execution, please wait...
A total of 1 test files matched the specified pattern.
No test is available in C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\bin\Debug\net6.0\ShapeTracker.Tests.dll. Make sure that test discoverer & executors are registered and platform & framework version settings are appropriate and try again.
```

Well that makes sense... We have a test file and class, but no tests within. Let's change that! In the next lesson, we'll write and run our first test.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to the default branch in the repository. Also note the following:

* UI Logic in `Program.cs` has been commented out. 
* The logic within the `Triangle` class has been removed. (Remember — we're starting from scratch!)

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for TDD with Shape Tracker: `1_mstest_setup`](https://github.com/epicodus-lessons/prework-TDD-with-shape-tracker-csharp-net6)**
