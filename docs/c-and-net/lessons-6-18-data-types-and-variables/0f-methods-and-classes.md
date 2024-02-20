---
title: "\U0001F4D3 3.0.0.11 Classes and Instance Methods"
id: 30011-classes-and-instance-methods
slug: 30011-classes-and-instance-methods
hide_table_of_contents: true
sidebar_position: 6
day: weekend
type: lesson
url: 'https://github.com/fidgetech/c-and-net/blob/main/0f_methods_and_classes.md'
---

We wrote many JavaScript methods and functions in Introduction to Programming. The process is fairly similar in C# as well, but in this case we will always call them **methods**. That's because in C# every method — custom or built-in — belongs to some object. In other words, there are no standalone functions.

In this lesson, we'll practice calling **built-in** C# methods, that is, methods that already exist within the C# language that we just need to learn the right syntax in order to use. This is in contrast to **custom** methods, which we create. We'll learn how to create custom methods in a later lesson. 

This lesson will be focused on learning how to use **instance methods**, which are methods that are called on an object. This is in contrast to **static methods**, which are methods that are called on the class itself. We'll learn how to use static methods in an upcoming lesson.

## Classes
---

First, let's review the difference between an instance of a class, and the class itself.

Just like in JavaScript, a **class** contains related code for a type of object. Well, nearly all values in C# are a type of object. That means the C# programming language is composed of syntax (like operators) as well as many built-in classes.

The string and integer literals we've created are also objects:

```csharp
> "I am a string, but still an object :)"
"I am a string, but still an object :)"
> 34
34
```

When we create a string in the `dotnet-script` REPL, we're invoking the built-in C# [`String`](https://learn.microsoft.com/en-us/dotnet/api/system.string?view=net-6.0) class to create a new object based off it. The `String` class describes all of properties and methods that every C# string should have. 

More specifically, when we create a string like we did in the above code snippet, we're creating an **instance** of the `String` class that has the same properties and methods described in the `String` class. An instance is an object, whereas the class is the blueprint with which to make objects.

Later on, we'll learn how to create our own custom classes. For now, we'll continue working with built-in C# classes.

## Useful Built-In C# Instance Methods
---

An **instance method** is a method that's called on an object, not the class. Let's work through some examples of instance methods that we can call on strings. Try these out in the `dotnet-script` REPL:

```csharp
> string phrase = "Programming is AWESOME";
> phrase
"Programming is AWESOME"
> phrase.ToUpper()
"PROGRAMMING IS AWESOME"
> phrase.ToLower()
"programming is awesome"
```

First understand that `phrase` is an object instance of the `String` class. When we call a method on `phrase`, we're calling an instance method on it.

The pattern for calling a C# method is similar to JavaScript:

1. We append a `.`, or dot, to the end of our variable (or data we'd like to manipulate, if it's not stored in a variable).

2. We list the method name after the dot. In the first example above, we used the built-in method `ToUpper`. In the second, we used `ToLower`.

3. Just like with JavaScript, we append a set of parentheses `()` to the end of the method name. Often called **parens** for short, these are where any arguments go. Sometimes methods have arguments, and sometimes they don't. The examples above don't contain arguments.

4. The method then _does something_ with or to the data it's called on. In this example, `ToUpper()` makes our string all uppercase whereas `ToLower()` makes it all lowercase.

For clarity sake, keep in mind that you can call methods directly on the data. Take this for example:

```csharp
> "Programming is AWESOME".ToUpper()
"PROGRAMMING IS AWESOME"
```

### Method Naming Convention

Notice that unlike JavaScript, **methods in C# begin with a capital letter**. The beginning of any other words in the method name are also capitalized such as `LikeThis()` or `EvenLikeThisExampleHere()`. This is called **Pascal case** or **upper camel case** and is a standard and required convention in C#.

### String Methods with Arguments

Let's look at a few more methods. This time we'll use some that take arguments:

```csharp
> string phraseOne = "hello world";
> string phraseTwo = "hello";
> phraseOne.Contains(phraseTwo)
true
```

To review, **arguments** are pieces of data passed into a method. In the example above, `Contains()` is a string method. We pass it the variable `phraseTwo` as an argument. It then determines if `phraseTwo` is included in `phraseOne`, the variable that we call the method on. In this case, _“hello world”_ contains the phrase, or **substring**, _"hello"_, so it returns `true`.

Similarly, we could use `Replace()` to swap out part of a string:

```csharp
> string phraseOne = "hello world";
> string phraseTwo = "hello";
> string phraseThree = phraseOne.Replace("hello", "goodbye");
> phraseThree
"goodbye world"
```

`Replace()` takes two arguments. Both are strings. The method finds all substrings that match the first argument `"hello"` and then replaces these substrings with the second argument `"goodbye"`, turning the string _"hello world"_ into _"goodbye world"_.

### Strong Typing in Arguments

Because **C# is a strongly-typed language**, when we pass an argument to a method, it _must_ be the correct type. For example, the `Replace()` method **only** accepts string arguments. If we try to pass it an integer (or `int`) instead, we get an error:

```csharp
> string phraseOne = "hello world";
> int phraseTwo = 4;
> phraseOne.Contains(phraseTwo)
(1,20): error CS1503: Argument 1: cannot convert from 'int' to 'string'
```

`1` is an integer of the `int` data type, not a `string`. Errors like this one are very common. Whenever we see a message stating something like _Cannot convert (some data type) to (some other data type)_, it means we've provided an incorrect data type in our code. The second data type mentioned in the message (`string` in the example above) is the data type C# _expected_; the first (`int`) is the incorrect type we provided instead.

If we ever need to find out what arguments may be provided to string methods, we can look at the [C# String Documentation](https://msdn.microsoft.com/en-us/library/System.String_methods(v=vs.110).aspx).

### Integer Methods

Integers also have built-in methods but there are not very many beyond the mathematical operators covered in the _Integers, Decimals, and Arithmetic_ lesson. Here's one that converts an integer to a string:

```csharp
> int number = 56;
> number
56
> number.ToString()
"56"
```

We've turned an `int` into a `string` type instead. Now it can be used in methods that work with strings.

Next, we'll take a moment to learn about how .NET organizes its built-in classes into namespaces, and how we can check the type of an object we're working with to learn its class name and how to research more about it.