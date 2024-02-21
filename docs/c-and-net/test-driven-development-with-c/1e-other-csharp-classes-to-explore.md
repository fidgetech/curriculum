---
title: "📓 3.1.1.5- More Built-In C# Classes and Tips for Using the MS Docs"
id: 3115--more-built-in-c-classes-and-tips-for-using-the-ms-docs
hide_table_of_contents: true
day: monday
---

So far we've learned about a handful of common C# types, as well as the classes that underpin them. We've also learned how to call on instance and static methods and properties. In this lesson, we'll highlight a few additional built-in classes, methods, and fields/properties that have helpful functionality that you may want to implement in the projects you create in this course section. Let's get into it!

## More Built-In C# Tools to Explore
---

While we recommend using the Microsoft (MS) docs to learn how to use new classes, you may not understand everything within them, and that's completely normal. For example, some of the code examples may use tools that you are unfamiliar with. Because of this, we also recommend searching for guides or tutorials outside of the MS docs to supplement your learning.

Otherwise, note that all of the following classes are located within the root `System` namespace. If you want to use these classes in your project, you need to be sure to include a using directive for the `System` namespace:

```csharp
using System;
```

### `Console` and `ConsoleColor`

[The `Console` class](https://learn.microsoft.com/en-us/dotnet/api/system.console?view=net-6.0) has other cool tools that we can use to manage the console. For example, we can clear the console with `Console.Clear()`. We can make a beep noise happen with `Console.Beep()`. 

We can also use properties from [the `ConsoleColor` class](https://learn.microsoft.com/en-us/dotnet/api/system.consolecolor?view=net-6.0) to set our Console's foreground and background colors:

```csharp
> Console.BackgroundColor = ConsoleColor.White
> Console.ForegroundColor = ConsoleColor.Black
```

### `DateTime` and `DateOnly`

These two classes let us create objects to represent date and time, or just a date, and have many methods and properties that help us manage date and time in our apps. Check out these classes on the MS docs:

* [`DateTime`](https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-6.0)
* [`DateOnly`](https://learn.microsoft.com/en-us/dotnet/api/system.dateonly?view=net-6.0)


### `TimeOnly` and `TimeZoneInfo`

These two classes let us create objects that represent time and time zones. We may not have a lot of use cases for these classes in our projects in class, but it's helpful to know these exist and that they could make our lives a lot easier if and when we're working with time data. Check out these classes on the MS docs:

* [`DateTime`](https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-6.0)
* [`DateOnly`](https://learn.microsoft.com/en-us/dotnet/api/system.dateonly?view=net-6.0)

### `Math` and `MathF`

The `Math` class is for math operations that return the `double` type, a large decimal, and the `MathF` class is for math operations that return the `float` type, a smaller decimal. If you need mathematics in your app, start by reviewing the helpful methods and properties in these classes!

### `Random`

[The `Random` class](https://learn.microsoft.com/en-us/dotnet/api/system.random?view=net-6.0) has methods that generate random numbers for us in a variety of number types (like `int` or `double`).  

## Decorating Console Apps!
---

There's quite a few guides out there on ways to make our console apps look cool. "Cool" meaning animations, big ASCII titles, colors, and slowing terminal output. 

For example, take a look at this article from Michal Bialecki on [How to Make your Console App Look Cool](https://www.michalbialecki.com/en/2018/05/25/how-to-make-you-console-app-look-cool/). Note that some of the classes used in the article live in other namespaces than `System`. If you ever get an error message like this:

```
The type or namespace name 'Thread' could not be found (are you missing a using directive or an assembly reference?)
```

It means the class name `Thread` is missing a using directive. We'd solve this by adding `using System.Threading;` at the top of our file. We'll get this message for any class that's missing a using directive.

Happy coding!
