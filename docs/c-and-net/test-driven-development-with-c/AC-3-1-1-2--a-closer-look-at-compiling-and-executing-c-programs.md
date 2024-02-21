---
title: "📓 3.1.1.2- A Closer Look at Compiling and Executing C# Programs"
id: 3-1-1-2--a-closer-look-at-compiling-and-executing-c-programs
hide_table_of_contents: true
day: monday
---

Over the pre-work we learned how to create console apps and test business logic using TDD and MSTest. Let's take a closer look at the process of compiling and running code in C#.

## Compilation
---

**Compilation** is the process of assembling information from various sources into one location. In software development, this means transforming the code a developer writes into machine readable code which can be executed by a microprocessor.

All code is compiled. But this can happen in more than one way.

### JIT

When we write a line of JavaScript code and pass it into the browser, it automatically runs. There is a direct relationship between the code we write and the behaviors we observe and interact with. In fact, the file the browser references is the same file we've written.

However, a **compile** action _does_ happen with JavaScript in the browser. The code is evaluated and the actions within the code are carried out, but this happens live, as the user loads or interacts with the code. This type of compilation is called **Just In Time** compiling (**JIT** for short) because the code is compiled on-demand at the server or client level.

### AOT

With C#, our computers do not interpret the code we write. Instead, our code is a set of instructions to build a program.

With this type of compilation, our code must go through several steps to be compiled into a different format that is optimized for our machines. The code is often compiled to binary files and is saved separately from the code we write. It would be very challenging for humans to read this code.

This compilation happens long before a user ever encounters our program and is called **Ahead Of Time** compiling or **AOT** for short.

## Steps in the .NET Compilation Process
---

Several steps occur when we run [the command `dotnet build` to compile our C# code](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-build).

First, the build platform **MSBuild** is invoked. MSBuild looks through our project file and decides what resources it will need to build our program, just as a cook might decide which ingredients are needed for a recipe.

```csharp
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <OutputType>Exe</OutputType>
        <TargetFramework>net6.0</TargetFramework>
    </PropertyGroup>

</Project>
```

In the project file, we specify configurations that we want MSBuild to use in its compilation process:

* We tell MSBuild we are using `"Microsoft.NET.Sdk"`, a software development kit which contains the C# language and many libraries of information.
* We tell MSBuild that we would like an **executable**, or `Exe` output, meaning a program that can be run.
* We also specify that we will be using the `net6.0` framework, which contains a lot of built-in libraries (namespaces) that our C# code relies on (like `System`).

After MSBuild successfully gathers all of the resources our project needs, it will create a new folder called `obj`, and put all of the resources inside.

The next thing MSBuild does is compile our project's source code — the C# code that we write. The goal is to compile multiple C# files into a single executable file. However, if MSBuild encounters an error during this process (like a missing resource), it will fail, stop compiling, and deliver us a **compiler error** in the terminal. It's our job to resolve compiler errors so that MSBuild can compile our code. 

If there are no compiler errors, MSBuild will end its work by putting all of the compiled code in a `bin` folder, including an executable file that we can run (with the `dotnet run` command). The executable file will end in `.exe` or `.dll`. 

Take note that the executable file no longer contains C# — it actually contains code written in the **Common Intermediate Language (CIL)**. What's that? The CLI is a programming language that various higher-level languages (C#, Visual Basic, F#) are turned into during the compilation process. It's an **intermediary** language, because it will eventually be compiled again into machine code when we run our program. We'll go over that next! To read more about the common intermediate language, visit the [MS docs](https://learn.microsoft.com/en-us/dotnet/standard/managed-code#intermediate-language--execution).

## Running C# Code with the Common Language Runtime (CLR)
---

After our C# program is compiled, we run it with the command `dotnet run`. This command invokes the .NET **runtime** called the **Common Language Runtime (CLR)** which does a few things:

* Compiles the CIL code into machine code, which is code that only our computers can understand and process. 
* Directs our computer to run the code!
* Provides services that improve our code's performance.

The CLR exists in order to help developers write quality code that is cross-platform, meaning code that can be run on (most) operating systems (like Mac and Linux). We don't need to understand the extended details of the CLR, but if you want to learn more, start with [this article from Microsoft](https://learn.microsoft.com/en-us/dotnet/standard/clr). 

So in the end, our C# code gets compiled twice — once to the CLI, and a second time to machine code. 

## A Diagram of Compiling and Executing C# Programs
---

Here's a diagram of how C# programs are compiled and executed to help you visualize the process:

![A diagram of the process of writing, compiling, and running C# code.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/prework/C%23+compilation+and+execution+(1).png)
