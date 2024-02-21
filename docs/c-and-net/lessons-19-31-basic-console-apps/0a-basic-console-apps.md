---
title: "📓 3.0.0.19 Expectations and Game Plan for Building a C# Console App"
id: 30019-expectations-and-game-plan-for-building-a-c-console-app
hide_table_of_contents: true
day: weekend
paginationPrev: null
---

So far we've experimented with C# by typing basic code into the REPL. If we want to write entire programs, we'll need to save our code in files. Well, in this next section of the C# .NET pre-work, we're going to learn how to do exactly that by creating C# console applications. A **console application** is a program that is run within our terminal, or command line interface. 

For this pre-work, we're going to recreate [the Shape Tracker application](https://github.com/epicodus-lessons/section-5-shape-tracker/tree/3_multiple_business_logic_files) that we created in the Intermediate JavaScript course as a C# console application. If you don't remember, the Shape Tracker app has a Triangle class that calculates the type of triangle given three sides, as well as a Rectangle class that calculates the area of a rectangle given two sides.

As we'll see, there are a lot of concepts and best practices in common between writing clean, maintainable code in JavaScript and C#. Let's review those now.

## Commonalities Between JavaScript and C#
---

**Separation of UI and Business Logic.** We'll continue to separate code that deals with our business logic and code that handles our user interface logic.

**Separation of Concerns.** We'll continue to separate our code into multiple methods (and classes) that focus on one purpose, instead of doing multiple things.

**Test-Driven Development.** We'll continue to use Test-Driven Development (TDD) and the Red-Green-Refactor workflow to test our C# code. In this case, we'll use a testing framework called MSTest for C#. With JavaScript, we used Jest. This pre-work section will focus on creating console apps, and the next pre-work section will focus on TDD.

**We'll use a package manager and download packages from a shared registry.** We used node package manager (`npm`) in JavaScript and downloaded libraries from [the npm registry](https://www.npmjs.com/). With C#, we'll use the `dotnet` project manager and install packages from [the NuGet package registry](https://www.nuget.org/). There are some differences between the tooling, but the basic concepts are the same.

**We use a `.gitignore` to manage which files are saved to our remote repos.** We'll continue to have files that we want to ignore. These files are auto-generated project dependencies, similar to the `node_modules/` directory that contain all of our JavaScript project's dependencies that `npm` installs for us.

**We use a `README.md` to describe our applications.** This is a standby, and crucial to get other developers to run your app and give yourself credit for the work that you've done. 

We'll also notice other similarities between the two languages. For example, **classes and constructors** are much the same. 

## The Process of Building the C# Shape Tracker
---

When we're done creating our C# Shape Tracker, our project directory will look like this: 

```
ShapeTracker.Solution/
|_ Models/
|   |_ Triangle.cs
|_ Program.cs
|_ ShapeTracker.csproj
|_ README.md
|_ .gitignore
```

But how will we get there? We'll start with our business logic, and then move onto our user interface logic:

1. We'll start by creating a simple "Hello World" application that has nothing to do with our Shape Tracker app. This will give us the opportunity to understand how C# compiles and executes programs.
1. Then we'll start creating our Shape Tracker project. We'll first create the structure and learn about the namespaces in our project.
2. Then, we'll create our business logic model. We'll learn how to create custom classes, constructors, methods, properties, and more by creating a `Triangle` class. In the process, we'll learn about new C# concepts.
3. Finally, we'll build out our user interface. This will handle asking the user for three lengths and tell the user what type of triangle they have.

We'll end this pre-work section with a review of C# conventions, a more in depth look at compilation, and taking a look at debugging tools.

### Testing and Debugging in the Next Pre-Work Section

In the next pre-work section we'll learn about some debugging tools as well as how to use MSTest to write and run tests. We'll recreate our Triangle business logic following the Red-Green-Refactor workflow. This will be a combination of a refresher of Test-Driven Development concepts and learning new tools with MSTest.
