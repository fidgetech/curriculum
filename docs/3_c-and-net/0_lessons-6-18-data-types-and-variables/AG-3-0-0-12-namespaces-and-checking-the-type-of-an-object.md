---
title: "📓 3.0.0.12 Namespaces and Checking the Type of an Object"
day: weekend
id: 3-0-0-12-namespaces-and-checking-the-type-of-an-object
hide_table_of_contents: true
---

In this lesson, we'll learn how .NET organizes its classes into namespaces. We'll also learn how to check the exact type (or class) of a data type you are working with. This information will better prepare us to access and use the docs, so that we can learn about _more_ built-in methods that we can use in our projects! 

## Namespaces
---

Classes and namespaces in C# are used to organize related code. We should already know what a class is, but let's refresh our memories. A **class** is used as a blueprint or template for creating objects. Each class describes the functionality that objects of that type have.

So what is a namespace? A **namespace** is a grouping of related classes. In .NET there are a LOT of built-in classes. In order to keep these classes organized, .NET uses many namespaces to group classes based on their importance and function.

For example, .NET has a single **root namespace** called `System` and it contains all of the fundamental classes that all projects need, like the `String` class to create C# strings. 

All other namespaces are nested inside the `System` namespace, and these each contain a set of classes that serve a more specialized purpose. For example, the `System.Threading` namespace contains classes that we can use to write asynchronous code. Then, the `System.Threading.Tasks` namespace contains classes that simplify the work of writing asynchronous code. The `System.Threading.Tasks` namespace is nested within the `System.Threading` namespace, which itself is nested within the `System` namespace.

In this way, a namespace is kind of like a JavaScript library, in that it is a unit of related functionality that we can import into our applications when we need to use the functionality within it. 

Later on, we'll create our own custom namespaces to group related custom classes in the projects we create. For now it's enough to get a general sense of how .NET groups functionality into classes, and related classes into namespaces. 

Next, let's learn how to check the type of an object and how to use that information to learn about more built-in C# classes.

## Checking the Type or Class of an Object
---

We can check the type of any object by calling the `GetType()` method on it. When we talk about an object's **type**, we're referring to its **class** name. Let's work through some examples!

First, we'll check the type of a string:

```csharp
> "hello".GetType()
[System.String]
```

The return value is `[System.String]` and it lets us know two things: `String` is the name of the class, and it lives in the `System` namespace. 

We can also call `GetType()` on variables. Let's check the type of an integer. 

```csharp
> int testNumber = 33;
> testNumber.GetType()
[System.Int32]
```

Here, we can see that the `int` type is described in the `Int32` class, which lives in the `System` namespace. 

If you are wondering, `32` in `Int32` means that this integer data type can hold 32 bits of information. If we check the `long` type, we'll see that it is described in the `Int64` class, which can hold 64 bits of information. [A **bit**](https://en.wikipedia.org/wiki/Bit) is the smallest unit of information that a computer can store. Note that this information is supplementary and you will never be tested on it!

Next, let's check the type of a `double` and a `float`.

```csharp
> 3.14.GetType()
[System.Double]
> 3.14F.GetType()
[System.Single]
```

For the double `3.14`, we can see that it is described in the `Double` class, which lives in the `System` namespace. 

For the float `3.14F`, we can see that it is described in the `Single` class, which also lives in the `System` namespace. 

### `GetTypeCode()`

Most built-in classes also have access to a method called `GetTypeCode()` which will return only the name of the class. 

```csharp
> "hello".GetTypeCode()
String
```

It's totally your decision whether it's best to use `GetType` or `GetTypeCode()` in your coding projects.

### Finding More Information about Built-in Classes

We can do a browser search of an object's type/class to access documentation to learn more about that type/class. 

For example, we can learn more about string methods by looking up "system.string C#", just like in the image below.

![A view of the Google search engine results for "system.string C#".](/images/c%23/browser-search-csharp-system-string.png)

The first answer that pops up is the .NET reference for the `System.String` class: [https://learn.microsoft.com/en-us/dotnet/api/system.string?view=net-6.0](https://learn.microsoft.com/en-us/dotnet/api/system.string?view=net-6.0). Be careful, though! You may be taken to the most recent version of .NET rather than the one you are using, so **double check that you are looking at documentation for .NET 6.**

Within the reference page for the `String` class, we'll find a lot of information about other string methods and properties. Since you are just starting out with C#, it's completely normal that not everything will make sense. 

As a starting point, we recommend checking out the docs on a data type you are working with in any of the projects you create in this first course section to see if there's a handy property or method that could streamline your code.
