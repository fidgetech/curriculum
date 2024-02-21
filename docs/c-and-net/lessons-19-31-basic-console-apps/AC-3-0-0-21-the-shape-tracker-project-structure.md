---
title: "📓 3.0.0.21 The Shape Tracker Project Structure"
id: 3-0-0-21-the-shape-tracker-project-structure
hide_table_of_contents: true
day: weekend
---

Now that we know the basics of compiling and executing C# programs, we're ready to start building the C# Shape Tracker console app. In this lesson, we'll start creating our project's structure and discuss how we'll organize our code into namespaces and classes. 

You are welcome to code along with this pre-work, or just read through it. GitHub repository references for the Shape Tracker console app will be provided periodically throughout this walkthrough.

## Shape Tracker Project Structure
---

We're going to walk through the setup process step by step and explain all of the decisions we're making along the way. As we'll see, much of the setup we did for the "Hello World" application will be the same in our new Shape Tracker console app, with some notable differences. **You can follow the setup process outlined in this lesson for all of the projects you create in this course section.** There will also be a project structure configuration reference at the very end of this pre-work section. 

By the end of the lesson, we'll have the following file/folder structure:

```
ShapeTracker.Solution/
  ├── ShapeTracker/
  │     ├── Models/
  │     │     └── Triangle.cs
  │     ├── ShapeTracker.csproj
  │     └── Program.cs
  ├── .gitignore
  └── README.md
```

**Notice that we use Pascal case, or "UpperCamelCase", for all .NET files and folders**  (excluding `README.md` and `.gitignore`).

### The "Parent" or "Root" Directory

We'll start by creating the **parent directory** called `ShapeTraker.Solution`. We can also call this the **root directory**, because it is the directory that will contain all of our project's subfiles and subfolders. This will include source code for the console app, as well as another folder that we'll add later that will contain all of the unit tests we write for our source code.

In the example projects at Epicodus, you'll see that we regularly include the word 'solution' in the name of our parent directory. When we Include 'solution' this indicates that this directory is a complete solution to the given project prompt. In this case `ShapeTracker.Solution` contains all of the code relevant to the Shape Tracker project. Note that **it is not required to follow the naming convention of including "solution" in the parent directory's name.**

### `.gitignore` and Initializing Git

Within the parent directory `ShapeTracker.Solution`, add a `.gitignore` file. Within our `.gitignore` we'll add our `obj` and `bin` folders because both of these are auto-generated in the process of compiling our console app:

* The `obj` directory contains the resources our code needs.
* The `bin` directory contains our compiled output code.

<div class="filename">.gitignore</div>

```
obj
bin
```

Next, we'll want to initialize Git in our parent directory with the command `git init`. The very first thing we'll want to do is track our `.gitignore` file so that Git knows to ignore the `obj` and `bin` directories. 

Our file/folder structure should now look like this:

```
ShapeTracker.Solution/
  └── .gitignore
```

### The "Project" or "Production" Directory

Next, we'll create a subdirectory within `ShapeTracker.Solution` called `ShapeTracker`. The `ShapeTracker` folder will contain the source code for our project, and because of that, this directory is commonly called the **project directory** or **production directory**. 

Our file/folder structure should now look like this:

```
ShapeTracker.Solution/
  ├── ShapeTracker/
  └── .gitignore
```

### The Project File

Within the project directory `ShapeTracker`, create the project file called `ShapeTracker.csproj`. Note that we also call our project file a "csproj" file. 

In every project we create in this course section, the project file for our production source code will contain the same boilerplate code:

<div class="filename">ShapeTracker.csproj</div>

```csharp
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
      <OutputType>Exe</OutputType>
      <TargetFramework>net6.0</TargetFramework>
  </PropertyGroup>

</Project>
```

Keep in mind a few things:

* It is customary for the name of the project file to match the name of the project directory. In our case we have `ShapeTracker.csproj` within the `ShapeTraker` directory.
* `<OutputType>Exe</OutputType>` directs the C# compiler to create an executable file that we can run using the command `dotnet run`. 
* `<TargetFramework>net6.0</TargetFramework>` specifies the version of the .NET framework we are using.

OOur file/folder structure should now look like this:

```
ShapeTracker.Solution/
  ├── ShapeTracker/
  │     └── ShapeTracker.csproj
  └── .gitignore
```

### Multiple Code Files

In the last lesson we learned that we need at least one C# code file with a single `Main()` method (the entry point of our application) that contains C# code for our program to run. Well in this lesson, we're going to add multiple code files that will separate our business logic and user interface logic. 

#### User Interface Logic in `Program.cs`

Within the `ShapeTracker` production directory create a file named `Program.cs`, which will contain our user interface logic as well as the entry point to our console app, the `Main()` method. 

<div class="filename">Program.cs</div>

```csharp
class Program
{
  static void Main()
  {
    // We'll add user interface code here.
  }
}
```

Let's review conventions and requirements:

* We're required to have a single `static void Main()` method (within a class) to be the entry point to our application. Any code we add within the `Main()` method will be run when we run our console app. 
* It's convention to name the file and class that contains our app's entry point `Program`. You do not have to do this, however. In all example projects in LearnHowToProgram.com, we will use the name `Program`. 

#### Business Logic Files in the `Models` Directory

Within `ShapeTracker` create a subdirectory called `Models`, which will contain all of our business logic files. Next, add one code file called `Triangle.cs` within the `Models` subdirectory. We'll add some basic code now to create a `Triangle` class, which we'll explore more soon!

<div class="filename">Models/Triangle.cs</div>

```csharp
public class Triangle
{
  // Code for Triangle business logic will go here.
}
```

Let's review conventions:

* It's convention to separate business logic into multiple files.
* It's convention to store business logic files in a directory called `Models`.

At this point, our file/folder structure should now look like this:

```
ShapeTracker.Solution/
  ├── ShapeTracker/
  │     ├── Models/
  │     │     └── Triangle.cs
  │     ├── ShapeTracker.csproj
  │     └── Program.cs
  └── .gitignore
```

### `README.md` Documentation

Within the parent directory `ShapeTracker.Solution/`, we'll add a `README.md` as usual. We won't go over everything that should go in your README, since that is the same as always. We will take a quick look at what our setup instructions might look like for a C# console app:

```markdown
### Setup Instructions

1. Clone this repo.
2. Open your terminal (e.g., Terminal or GitBash) and navigate to this project's production directory called "ShapeTracker".
3. In the command line, run the command "dotnet run" to compile and execute the console application. Since this is a console application, you'll interact with it through text commands in your terminal.
4. Optionally, you can run "dotnet build" to compile this console app without running it.
```

While you are welcome to use the above text for your setup instructions, you certainly don't have to!

At this point we should have our basic folder and file structure set up for our Shape Tracker app:

```
ShapeTracker.Solution/
  ├── ShapeTracker/
  │     ├── Models/
  │     │     └── Triangle.cs
  │     ├── ShapeTracker.csproj
  │     └── Program.cs
  ├── .gitignore
  └── README.md
```

In the next lesson, we'll learn more about classes, namespaces, and access level modifiers.
