---
title: "\U0001F4D3 3.0.0.13 Using Static Methods to Write and Read from the Console"
id: 30013-using-static-methods-to-write-and-read-from-the-console
slug: 30013-using-static-methods-to-write-and-read-from-the-console
hide_table_of_contents: true
sidebar_position: 8
day: weekend
type: lesson
url: https://github.com/fidgetech/c-and-net/blob/main/0h_reading_from_and_writing_to_the_console.md
---

In this lesson, we'll learn how to use two methods that will allow us to write something to the terminal, as well as how to read something that we write into the terminal:

* `Console.WriteLine()`
* `Console.ReadLine()`

We'll primarily use these methods later on when we create an application that runs in our terminals! We call these **console applications**. However, we can use these methods for debugging similar to how we used JavaScript's `console.log()` method.

So why learn about these now? It will give us the opportunity to learn about **static methods** that are called on a class, and not an instance of a class. Other than that, these two methods are used a lot in online code examples, so it's important to get to know them.

## C# Consoles and the `Console` Class
---

At its most basic, a **console** is another word for a terminal, an application that we can use to interact with our operating system through text-based commands (like the applications GitBash or Terminal). 

A **C# console** is a program that runs C# code in our terminal. Like other consoles, C# consoles are text-based, displaying text and accepting text commands. Given that definition, the `dotnet-script` REPL we've been using to write C# is a console. The JavaScript console in the browser's Dev Tools may also come to mind — that is also a console, only for JavaScript.

Well, [the `Console` class](https://learn.microsoft.com/en-us/dotnet/api/system.console?view=net-6.0) contains methods and properties that allow us to read information from or write information to a console. As noted earlier, we'll primarily use two static methods from the `Console` class to write and read information to/from the console!

## `Console.Writeline()`
---

The static method `Console.WriteLine()` takes a string argument for text that you want printed in the C# console. Here's how we can use it:

```csharp
> Console.WriteLine("Hello!")
Hello!
```

When we use this method, `Hello!` is printed to the console without quotes, and not simply regurgitated as happens with strings. For example, if we input a string `"Hello!"` into the REPL, we'll get `"Hello!"` back:

```csharp
> "Hello!"
"Hello!"
```

The difference is subtle and not too meaningful right now. Later when we create C# console applications, we'll use `Console.WriteLine()` all the time to print text to the console.

## `Console.ReadLine()`
---

The static method `Console.ReadLine()` does not take any argument, but instead expects user input after it is invoked. Let's see how it works:

```csharp
> string userInput = Console.ReadLine();
we'll type something in and hit enter.
> userInput
"we'll type something in and hit enter."
```

When we call `Console.ReadLine()`, it returns the user input as a string, so we need to be sure to initialize a variable to hold the user input. That's what we do in the first line of code in the above example.

After invoking `Console.ReadLine()`, our console is going to expect that we type something into it and hit enter. We've typed `we'll type something in and hit enter.`. After we hit the "enter" key on our keyboard, we'll see the prompt `>` reappear. 

The last thing we can see in the code example above is that we check the value of the `userInput` variable. As expected, it is set to a string with the text that we entered into the console. Pretty neat! Later when we create C# console applications, we'll use the `Console.ReadLine()` method to gather user input.  

## Static Methods
---

Let's review what a static method is. 

Static methods are methods that are called on the class and not an instance of a class. To properly call a method on a class, we need to reference the class name in Pascal case (also called upper camel case). We see this in our previous examples where we reference the class name `Console` in Pascal case. 

Everything else about calling the method remains the same: we include a period after the class name, followed by the name of the method, followed by parens to invoke the method.

Built-in C# classes may have some, none, or be made up entirely of static methods. To learn whether a method is static, we can experiment in the REPL, or review the documentation for that method to determine if it is static. We'll revisit how to use documentation later on, after we're more familiar with C# and have created at least one console application. 