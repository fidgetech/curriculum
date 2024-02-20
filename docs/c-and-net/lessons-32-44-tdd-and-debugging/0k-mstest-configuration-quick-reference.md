---
title: "\U0001F4D3 3.0.0.42 MSTest Configuration Quick Reference"
id: 30042-mstest-configuration-quick-reference
slug: 30042-mstest-configuration-quick-reference
hide_table_of_contents: true
sidebar_position: 11
day: weekend
type: lesson
url: >-
  https://github.com/fidgetech/c-and-net/blob/main/0k_mstest_configuration_quick_reference.md
---

This lesson is meant to be a handy reference for creating test-driven projects. We'll review what's needed to get MSTest up and running in a C# program, including naming conventions and requirements, project structure, best practices, and writing tests.

## Project Structure
---

MSTest requires we set up our project in a specific way:

* Create a parent directory named `ProjectName.Solution`. It's also okay to use `ProjectName` or `CompanyName` instead, though we commonly use `ProjectName.Solution` in the projects we create in LearnHowToProgram.com.
* Within the parent directory, add two subdirectories:
  * `ProjectName`
  * `ProjectName.Tests`
* The `ProjectName` and `ProjectName.Tests` directories are different "versions" of our project. The first is our production project and the second is our test project.
* Each version of the project needs a `.csproj` configuration file.
  * Create a `ProjectName.csproj` file in the `ProjectName` subdirectory.
  * Create a `ProjectName.Tests.csproj` file in the `ProjectName.Tests` subdirectory.

**This is the standard naming convention and should be followed in all projects.**  

After following these steps, the directory should look like this:

```
ProjectName.Solution/
  ├── ProjectName/
  │     └── ProjectName.csproj
  └── ProjectName.Tests/
        └── ProjectName.Tests.csproj
```

### Add `.gitignore`, a `README.md`, and initialize Git

We want to add a `.gitignore` to the parent directory as one of the very first activities we do when setting up our projects. Within the `.gitignore`, you should list the `obj` and `bin` folders:

<div class="filename">ProjectName.Solution/.gitignore</div>

```
obj
bin
```

The next step is to initialize Git with `git init`, and then commit your `.gitignore`:

```
$ git add .gitignore
$ git commit -m"add .gitignore"
```

The `README.md` can realistically be added at any point, but don't forget it! 

```
ProjectName.Solution/
  ├── ProjectName/
  │     └── ProjectName.csproj
  ├── ProjectName.Tests/
  │     └── ProjectName.Tests.csproj
  ├── .gitignore
  └── README.md
```

### `.csproj` Files

Our `.csproj` files list all outside packages or dependencies a project requires. In this section, our `.csproj` files will contain the following:

<div class="filename">ProjectName.Solution/ProjectName/ProjectName.csproj</div>

```csharp
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <OutputType>Exe</OutputType> // This is only needed if your project has a user interface. Read more below.
  </PropertyGroup>

</Project>
```

<div class="filename">ProjectName.Solution/ProjectName.Tests/ProjectName.Tests.csproj</div>

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
    <ProjectReference Include="..\ProjectName\ProjectName.csproj" />  
  </ItemGroup>

</Project>
```

Keep in mind that your `.csproj` should only include an `OutputType` if you have a user interface consisting of a `Program.cs` file with a `Main()` method. When you include an `OutputType` before you have a user interface, **attempting to compile your project to test your classes will throw an error.**

Also, **don't forget to update the boilerplate value for the `<ProjectReference>`** (within the above code snippet) for the `ProjectName.Tests/ProjectName.Tests.csproj` project file.

### Installing Packages

We use the NuGet package manager to install the packages listed in our `.csproj` files. For now, only the test project's `.csproj` contains outside packages.

* Navigate to the `ProjectName.Tests` directory.
* Run the command `$ dotnet restore`.

This will create `obj` directories in both production and test projects. **Do not touch this code**.

```
ProjectName.Solution/
  ├── ProjectName/
  │     ├── ProjectName.csproj
  │     └── obj/
  │           ├── ProjectName.csproj.nuget.cache
  │           ├── ProjectName.csproj.nuget.g.props
  │           ├── ProjectName.csproj.nuget.g.targets
  │           └── project.assets.json
  ├── ProjectName.Tests/
  │     ├── ProjectName.Tests.csproj
  │     └── obj/
  │           ├── ProjectName.Tests.csproj.nuget.cache
  │           ├── ProjectName.Tests.csproj.nuget.g.props
  │           ├── ProjectName.Tests.csproj.nuget.g.targets
  │           └── project.assets.json
  ├── .gitignore
  └── README.md
```

### Application Logic

Next we create the model files (business logic) where our application source code will reside.

* In the production project (`ProjectName.Solution/ProjectName`), create a `Models` subdirectory.
* In the `Models` subdirectory, create a file to contain the class relevant to your project.

The resulting file structure should look like this:

```
ProjectName.Solution/
  ├── ProjectName/
  │     ├── ProjectName.csproj
  │     ├── Models/
  │     │     └── ClassName.cs
  │     └── obj/
  │           └── (omitted for brevity)
  ├── ProjectName.Tests/
  │     ├── ProjectName.Tests.csproj
  │     └── obj/
  │           └── (omitted for brevity)
  ├── .gitignore
  └── README.md
```

In this class file, make sure of two things:

* The namespace follows the naming convention `ProjectName.Models`. 
* The business logic class is `public`, so that our testing directory can access the code inside. 
* Often the name of the class matches the name of the file, but this does not have to be the case.

For instance:

<div class="filename">ProjectName.Solution/ProjectName/Models/ClassName.cs</div>

```csharp
namespace ProjectName.Models
{
  public class ClassName
  {
    // properties, constructors, methods, etc. go here
  }
}
```

### Testing Files

We'll save all our test files in a specific directory. Follow these steps to set up a testing file:

* In `ProjectName.Solution/ProjectName.Tests`, create a `ModelTests` directory.
* In the `ModelTests` directory, create a test file whose name matches the class name of the business logic you will be testing (what you created in the last step). 
  * For example, if we have a business logic file called  `Puppy.cs` in our `ProjectName/Models` directory that contains a `Puppy` class, the corresponding test file should be called `PuppyTests.cs`. 
  * Note that the file naming convention is to pluralize `Tests`.

```
ProjectName.Solution/
  ├── ProjectName/
  │     ├── ProjectName.csproj
  │     ├── Models/
  │     │     └── ClassName.cs
  │     └── obj/
  │           └── (omitted for brevity)
  ├── ProjectName.Tests/
  │     ├── ProjectName.Tests.csproj
  |     ├── ModeTests/
  |     │     └── ClassNameTests.cs
  │     └── obj/
  │           └── (omitted for brevity)
  ├── .gitignore
  └── README.md
```

The `ClassNameTests.cs` test file will have the following basic structure:

<div class="filename">ProjectName.Solution/ProjectName.Tests/ModelTests/ClassNameTests.cs</div>

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProjectName.Models;

namespace ProjectName.Tests
{
  [TestClass]
  public class ClassNameTests
  {
    // Test methods go here
  }
}
```

Notice the instances of `ProjectName` and `ClassName` in the boilerplate code above. Like all other instances of `ProjectName` or `ClassName` in this lesson, **these must be changed to match the name of your specific project**.

## Testing
---

### Writing Tests

Test methods follow this general structure:

```csharp
[TestMethod]
public void NameOfMethodWeAreTesting_DescriptionOfBehavior_ExpectedReturnValue()
{
  // any necessary logic to prep for test; instantiating new classes, etc.
  // we can also use the arrange, act, assert organization in any test. 
  Assert.AreEqual(ExpectedResult, CodeToTest);
}
```

We can also use the `CollectionAssert.AreEqual()` method to test and compare two collections (like arrays, lists, or dictionaries). Anytime we use a list or dictionary, we need to remember to include the using directive `using System.Collections.Generic;`.

```csharp
[TestMethod]
public void NameOfMethodWeAreTesting_DescriptionOfBehavior_ExpectedReturnValue()
{
  // any necessary logic to prep for test; instantiating new classes, etc.
  // we can also use the arrange, act, assert organization in any test. 
  CollectionAssert.AreEqual(ExpectedResult, CodeToTest);
}
```

### Optionally Creating a Teardown Method

To create a teardown method that runs between each test we need to do a few things:

* Add a new using directive for `using System;`.
* Extend the `ClassNameTests` class with the `IDisposable` interface.
* Create a `public void Dispose()` method. Within the method body, we can put whatever code we want to run in between each test. Typically, we use the `Dispose()` method to clear static fields or properties between each test. 

<div class="filename">ProjectName.Solution/ProjectName.Tests/ModelTests/ClassNameTests.cs</div>

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProjectName.Models;
using System;

namespace ProjectName.Tests
{
  [TestClass]
  public class ClassNameTests : IDisposable
  {
    public void Dispose()
    {
      // Code inside this method is run between each test.
    }

    // Test methods go here
  }
}
```

### Running Tests

We can run our tests by navigating to our test project in the terminal (`ProjectName.Solution/ProjectName.Tests`) and running the following command:

```bash
$ dotnet test
```

This will print a report in the terminal of our tests and whether they pass or fail. Any failing tests will include details about their failure.

The `dotnet test` command will also create a `bin` folder with executable files that MSTest needs to run in order to run our tests and print a report to the terminal. 

### Continued Development

Once the project is configured using the steps above, use TDD and the RGR workflow to build out your business logic.

Happy coding!