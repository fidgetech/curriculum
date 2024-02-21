---
title: "📓 3.0.0.31 Configuration Reference and Review of C# Conventions"
id: 30031-configuration-reference-and-review-of-c-conventions
hide_table_of_contents: true
day: weekend
paginationNext: null
---

In this lesson, we're going to review the C# style conventions that we've learned about so far. This lesson also includes a configuration and project structure reference that you can use in all of your future console app projects.

## Style Conventions
---

In order to become good programmers, we need to use a consistent coding style. When our code is consistent, we can focus on what the code does instead of how it's written. Errors are more apparent when debugging and it's easier to collaborate with other developers.

Here are some general C# coding guidelines to follow from the .NET docs:

* [C# Naming Conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/identifier-names)
* [C# Coding Conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)

### Indentation and Spacing

* Each brace should begin on a new line. This is called [Allman Style](https://en.wikipedia.org/wiki/Indent_style#Allman_style). A single line statement block can go without braces but the block must be properly indented on its own line and must not be nested in other statement blocks that use braces.
* Avoid more than one empty line at any time. For example, do not have two blank lines between members of a type.
* Avoid free spaces. For example, avoid `if (someVar == 0) . . .`, where the dots mark the extra free spaces.
* Be consistent in your use of indentation. At Epicodus, we use two spaces of indentation while the .NET documentation recommends four spaces of indentation. There are advantages to both approaches. One advantage of two spaces is that a line of code is less likely to run past the width of a text editor. An advantage of four spaces is that some developers believe it's easier to read. Ultimately, it's a matter of preference — and being consistent with the standards of your workplace. At Epicodus, use two spaces unless you and your pair agree to use four. (You may use either two or four on independent projects.)

### Capitalization and Naming

* Use PascalCase for:
  * public field names
  * public property names
  * class names
  * method names
  * namespaces
  * file names
  * directory names
* Use lowerCamelCase for all method parameters and local variables.
* Prepend an underscore `_` and use lowerCamelCase for all private field names.
* Namespace names should be separated by a period, as in `ShapeTracker.Models` or `ShapeTracker.UserInterfaceModels`.

### Other Conventions

* Always specify the visibility, even if it is the default. For example, we should say `private string Description`, not `string Description`.
* Always declare the variable type, including if that type is a class. For example, we should use the code `Item newItem = new Item(...)`, since the type of `newItem` is `Item`. We should not use the code `var newItem = new Item(...)` since the type of `newItem` is `Item`. In general, `var` is too vague and shouldn't be used.
* Namespace imports should be specified at the top of the file, outside of namespace declarations, and should be sorted alphabetically.
* Semicolons are required after all statements.

## Configuration and File Structure Reference
---

C# console apps should follow certain naming conventions and file structure:

* There should be a parent directory named `ProjectName.Solution`. Our solution directory will contain our project's production directory, as well as a testing directory that we'll add in the next pre-work section. 
  * While we don't have to use `ProjectName.Solution`, it's still common to have a parent directory named at least `ProjectName`.
* Within the parent directory we should include a `README.md` and `.gitignore`. The `.gitignore` should include `obj` and `bin`, which are auto-generated files from the compilation process.
* Within the parent directory, we'll add a subdirectory for the production code:
  * `ProjectName`
* Within the `ProjectName` subdirectory, we'll add the following files and folders:
  * Create a `ProjectName.csproj` file, which will contain our project's configurations and required resources.
  * Create a `Program.cs` file, which will contain our project's user interface logic as well as the entry point to our application.
  * Create a `Models` subdirectory, which will contain any business logic files.
* When you are ready to create business logic files, they should be added to the `Models` subdirectory, and named in one of two ways:
  * After the class it contains, as in `Triangle.cs` contains a `Triangle` class.
  * A plural name that generally represents the multiple classes that the file contains, as in `Helpers.cs` or `Banners.cs`.
  * Include a `public` access modifier so the business logic file can be accessible to tests, which will live in a separate assembly. (We'll learn about testing in the next pre-work section.)

**This is standard naming convention and should be followed in all projects.**  

After following these steps, the directory should look like this:

```
ProjectName.Solution/
  ├── ProjectName/
  │     ├── Models/
  │     │     └── ClassName.cs
  │     ├── ProjectName.csproj
  │     └── Program.cs
  ├── .gitignore
  └── README.md
```

### Reminder: Commit Your `.gitignore` First!

This is a friendly reminder to make sure that you set up and commit your `.gitignore` first after you initialize Git in your projects. Doing so ensures that you are ignoring the files you don't want saved to your remote GitHub repo first.

Your `.gitignore` should look like this:

<div class="filename">ProjectName.Solution/.gitignore</div>

```
obj
bin
```

### `.csproj` Files

Our `.csproj` file is the "project file" and it lists project-wide configurations as well as all outside packages or dependencies our project requires. In this course section, our `.csproj` files will contain the following boilerplate code:

<div class="filename">ProjectName.Solution/ProjectName/ProjectName.csproj</div>

```csharp
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <OutputType>Exe</OutputType>
  </PropertyGroup>

</Project>
```

### Build Folders

The `obj` and `bin` folders are generated automatically when you run the command `dotnet build`. The `bin` directory contains our compiled output code. The `obj` directory contains the resources our code needs. 

These folders are always located in the same folder as your project (`.csproj`) file. 

```
ProjectName.Solution/
  ├── ProjectName/
  │     ├── bin/
  │     ├── Models/
  │     │     └── ClassName.cs
  │     ├── obj/
  │     ├── ProjectName.csproj
  │     └── Program.cs
  ├── .gitignore
  └── README.md
```

We won't spend much time learning about these folders or look at their contents. Since these folders are auto-generated, we won't include them in project file/folder structure examples. 

### Code Files: User Interface Logic in `Program.cs`

`Program.cs` contains our user interface logic as well as the entry point to our application, the `static void Main()` method. Here's the boilerplate for `Program.cs`:

<div class="filename">ProjectName.Solution/ProjectName/Program.cs</div>

```csharp
namespace ProjectName
{
  class Program
  {
    static void Main()
    {
      // UI code goes here.
    }
  }
}
```

**The standard namespace name for our program's entry point is `ProjectName`.** However, we can give it a more specific namespace like `ProjectName.UserInterface` or something else.

Note that `Program.cs` does not need to be called `Program.cs`, nor does the class name need to be `Program`, however this is a very standard practice.

### Code Files: Business Logic in the `Models` subdirectory

The `Models` directory should contain all of our business logic files. We'll follow the practice of having one business logic class per file, but it's totally okay to include multiple classes within a single file. 

The naming convention for business logic files and classes is for the name of the class to match the name of the file, as in `Triangle.cs` contains the `Triangle` class. We also need to include the `public` access modifier for all classes that we want accessible to tests we write (which we'll learn about in the next pre-work section.)

<div class="filename">ProjectName.Solution/ProjectName/Models/ClassName.cs</div>

```csharp
namespace ProjectName.Models
{
  public class ClassName
  {
    // Business Logic goes here.
  }
}
```

**The standard namespace name for all of our business logic files is `ProjectName.Models`.**

### Organizing More Code Files

If we want to organize more code files (UI and business logic), this is a good way to go:

* All business logic files go in the `Models/` directory.
* Create a new subdirectory within the `ProjectName` directory called `UserInterfaceModels` (or something similar) and add all additional user interface files within that subdirectory. 
* It's convention for `Program.cs`, the entry point to our application, to remain in the root of the production directory `ProjectName`.

Here's what the resulting file structure should look like this:

```
ProjectName.Solution/
  ├── ProjectName/
  │     ├── Models/
  |     |     ├── ClassName.cs
  |     |     ├── ClassName.cs
  │     │     └── ClassName.cs
  |     ├── UserInterfaceModels/
  |     |     └── ClassName.cs
  │     ├── ProjectName.csproj
  │     └── Program.cs
  ├── .gitignore
  └── README.md
```
