---
title: "\U0001F4D3 3.0.0.20 Hello World! Compiling and Executing C# Programs"
id: 30020-hello-world!-compiling-and-executing-c-programs
slug: 30020-hello-world!-compiling-and-executing-c-programs
hide_table_of_contents: true
sidebar_position: 2
day: weekend
type: lesson
url: https://github.com/fidgetech/c-and-net/blob/main/0b_compiling_and_executing_programs.md
---

In this lesson we'll discuss how to configure, write, and run basic C# programs by creating a very basic "Hello World" console application. Then, in the next lesson we'll start on our Shape Tracker project.

## Compiling
---

C# is an **AOT (Ahead Of Time) compiled language**, unlike JavaScript, which is a **JIT (Just In Time) language**. We'll be discussing this more soon.

A **compiler** is a program or service that converts written code to machine code. AOT compilers convert code **before** it needs to be run and then stores that converted code in machine-readable files.

Our REPL compiled our C# code for us after we enter it into the console. Soon, we'll learn commands to input into our terminal that will direct our code to be compiled and run. 

## "Hello World" Application Setup
---

Every C#/.NET program includes a minimum of 2 files:

* A project file
* A code file

These two files work together to tell the compiler how to compile our code, and once compiled, what exactly to execute.

For our simple "Hello World" project, we'll do the following:

* Create a new `HelloWorld` directory.
* Add a `Hello.csproj` file to the directory.
* Add a `Program.cs` file to the directory. 
* Add a `.gitignore` file to the directory.
* Add a `README.md` file to the directory.

The resulting project structure should look like this:

```
HelloWorld/
  ├── Hello.csproj
  ├── Program.cs
  ├── .gitignore
  └── README.md
```

### The Project File

The project file includes basic information about our project: project-wide configurations and dependencies. In .NET 6, all project files end with the `.csproj` extension, and because of that we often refer to our project file as the "csproj".

<div class="filename">Hello.csproj</div>

```csharp
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
      <OutputType>Exe</OutputType>
      <TargetFramework>net6.0</TargetFramework>
  </PropertyGroup>

</Project>
```

This is a **boilerplate** project file. Boilerplate code is code that follows a template and can be reused elsewhere, which means we could reuse this exact code for all other console application as well.

* `<OutputType>`Exe`</OutputType>` tells the compiler we're building an executable file. An **executable file** is one that can be run. Since we're creating console applications, our executable files will be run in our terminals.
* `<TargetFramework>`net6.0`</TargetFramework>` instructs the compiler to use the .NET 6 framework to build this file. If we ever upgrade the version of our .NET SDK in the future, we'd need to change this line to point to the new version of .NET.

### The Code File

The code file includes our actual C# code that will run in the console. Any file that contains C# code always ends in `.cs`. 

We're not limited to just one code file — we can have as many as we want! In this simple example, we're just using one code file. 

<div class="filename">Program.cs</div>

```csharp
class Program
{
  static void Main()
  {
    // C# Program code goes here.
  }
}
```

In `Program.cs`, we have a class called `Program` with a method called `Main()` inside of it.

Program code resides within the brackets under the `Main()` method within the `Program` class. The `Main()` method is automatically run when we launch any C# program. Methods that automatically run when a program is launched are called **entry points**. So, the `Main()` method is the entry point to our console application.

While we're not limited to just one code file, **it is required to have one entry point called `Main()` in our project's code**. Since we have one code file, `Program.cs`, we're putting our entry point `Main()` inside of it.

Notice the keywords `static` and `void` attached to the entry point method: `static void Main()`. We'll learn more about these keywords in upcoming lessons, but we'll go over them briefly now:

* `static` indicates that `Main()` is a static method, a method that's called on the class and not an instance of the class.
* `void` indicates that the `Main()` method has no return value. That is, we're not using the `return` statement to return a value from the method. 

The entry point `Main()` method is always a `static` method that returns `void` (nothing). Because of that, this code is considered **boilerplate** code; we'll use it again and again in the applications we create.

### Adding a Using Directive and Source Code

Let's add some source code to our project. We'll insert a using directive as well as a `Console.WriteLine()` within the `Main()` method.

<div class="filename">Program.cs</div>

```csharp
using System; // new code

class Program
{
  static void Main()
  {
    Console.WriteLine("Hello World!"); // new code
  }
}
```

We've added a `Console.WriteLine()` method call that will print `Hello World!` to the console.

The first line `using System;` is called a **using directive**. Because C# is compiled, we need to tell it what code it needs in order to function. In this case, we need to specify that the file `Program.cs` is using the `System` namespace, because we're using the `Console.WriteLine()` method, and the `Console` class is located within the `System` namespace. In other words, we can't access the `Console` class, unless we import the namespace that it belongs in. 

Cooking is a useful analogy here. When we cook, we don't get out _every_ ingredient in the kitchen. It's more efficient to only collect the ingredients we're going to use. Remember, C# is concerned with speed. Directives are like an ingredient list and allow us to retrieve and organize only the ingredients we need. It keeps our compiled programs smaller and faster.

## Compiling our Program
---

Now we can launch our program with the following steps:

* Navigate to the `HelloWorld` directory in the command line.

* Run the following command to instruct C# to **compile** our code:

```bash
$ dotnet build
```

When we compile our project, C# will generate two new directories, `obj` and `bin`. The `obj` directory contains the resources our code needs and the `bin` directory contains our compiled output code. 

### Adding `obj` and `bin` to `.gitignore`

The `obj` and `bin` directories are auto-generated for every C# project, so we should not save them as part of our source code that gets pushed to our remote GitHub repos. Instead, we'll add them to our `.gitignore`:

<div class="filename">.gitignore</div>

```
obj
bin
```

We'll do this for every project we create.

## Compiler Errors
---

We'll encounter compiler errors often as we write C# code. A **compiler error** is generated during compilation, when we use the command `dotnet build` to compile our source code. Compiler errors tell us that code can't be located, because there's a typo in our code, we're calling a method incorrectly, or maybe we're missing a using directive. Developers need to resolve compiler errors before they can run their project. 

For example, if we try to use `Console.WriteLine()` in `Program.cs` and we **don't* include the necessary using directive `using System;`, we'll get a compiler error message similar to this one:

<pre>
<code style="color:red">
C:\Users\staff\Desktop\HelloWorld\Program.cs(5,5): error CS0103: The name 'Console' does not exist in the current context [C:\Users\staff\Desktop\HelloWorld\Hel
lo.csproj]
</code>
</pre>

This error is telling us the compiler can't locate the class `Console`, and so it can't make sense of the line `Console.WriteLine("Hello World!");`. To resolve this compiler error, we just need to declare the using directive `using System;` at the top of the `Program.cs` file.

## Running our Program
---

We're ready to run our program. Run the following command in our project directory `HelloWorld/` to execute our project's compiled code:

```bash
$ dotnet run
```

We'll then see `Hello World` in our terminal! 

![The terminal output from running our program: `Hello World`.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/hello-world-console-app.png)

That means we just wrote our first C# program! 

Woo-hoo!

### A Shortcut 

When we run the command `dotnet run`, this command compiles and executes our program. That means we don't need to explicitly compile our program with `dotnet build` before we run `dotnet run`. 

We usually want to run `dotnet build` to compile the program and NOT run it in order to resolve compilation errors. We'll see more examples of compilation errors in upcoming lessons. 

## Exiting the Program
---

If there's no code left to run, the program will end and exit automatically. In fact, this is what's happening in our simple Hello World console app. However, we can also exit the program by entering `ctrl` + `c` at any time.