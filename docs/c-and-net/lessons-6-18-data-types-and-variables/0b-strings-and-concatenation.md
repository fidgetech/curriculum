---
title: "\U0001F4D3 3.0.0.07 Strings, String Concatenation and Interpolation, and Chars"
id: 30007-strings-string-concatenation-and-interpolation-and-chars
slug: 30007-strings-string-concatenation-and-interpolation-and-chars
hide_table_of_contents: true
sidebar_position: 2
day: weekend
type: lesson
url: https://github.com/fidgetech/c-and-net/blob/main/0b_strings_and_concatenation.md
---

Most of the information we worked with in Introduction to Programming, such as strings, integers, variables, methods, and objects function similarly in C#. There are a few differences but you'll catch on quickly! 

In this lesson we'll learn about one of the most common data types, the **string**. We'll then learn about string concatenation and interpolation. We'll wrap up by learning about the **char** data type.

## Strings
---

C# strings are very similar to JavaScript strings. They're simply a sequence of characters between two quotation marks. **Note that strings require quotation marks `"` specifically — apostrophes (`'`) are used to define a single character for a data type called "char".** We'll learn about chars later in this lesson.

We can open our REPL with the `$ dotnet-script` command in the Terminal (for Mac) or GitBash (for Windows) to try them out.

Once in the REPL we'll type a basic string and hit _Enter_:

```csharp
> "Hello World"
```

Here is the output:

```csharp
"Hello World"
```

Now let's try it with a semicolon.

```csharp
> "Hello World";
```

Adding a semicolon produces an error:

<code style={{color:"red"}}>
(1,1): error CS0201: Only assignment, call, increment, decrement, await, and new object expressions can be used as a statement
</code>

Remember that C# is a strongly typed language. According to this error, we've already broken one of C#'s strict rules about typing. In this case, the semicolon indicates that C# is expecting a command. In other words, you need to _do_ something with this string. Let's take the error's advice and make an assignment, which means we'll assign our string to a variable:

```csharp
> string greeting = "Hello";
```

We're no longer using JavaScript's `let` or `const`. Instead, we're being more specific and declaring that `greeting` is a `string`. We'll need to do this for all variables that we create — that is, declare its specific data type. 

Next, let's call the variable in the REPL:

```csharp
> greeting
"Hello"
```

Without the semicolon, our REPL can still return the value of the variable. A quick word of warning: don't get used to solving problems in C# by dropping semicolons. This convention helps us evaluate code in the REPL, nothing more.

### String Concatenation

We can also **concatenate** strings together with the `+` operator. As you'll recall, concatenation is the act of making a new string out of multiple smaller strings:

```csharp
> "Hello" + " " + "World"
"Hello World"
```

Notice the return value is different from what we originally typed. This is the **evaluation** part of the REPL (Read, Evaluate, Print, Loop) acronym; C# has evaluated the code and returned a result.

Here's another example:

```csharp
> "Programming" + " " + "is" + " " "awesome!"

(1,34): error CS1002: ; expected
```

Oops, we got an error this time! The error says a semicolon was expected. Something is wrong with our syntax and the REPL doesn't understand the command.

The issue isn't a missing semicolon, however! This error points us to a missing `+` between the space after `"is"` and the string `"awesome"`. Let's fix this:

```csharp
> "Programming" + " " + "is" + " " + "awesome!"
"Programming is awesome!"
```

### String Interpolation

String interpolation in C# is the same as template literals in JavaScript, where we can include a variable within a string that we create. Here's an example of what this looks like:

```csharp
> string greeting1 = "Hello";
> $"{greeting1} World!"
"Hello World!"
```

Here's a few rules for using string interpolation:

* We indicate that we are going to use string interpolation by including the `$` sign before the opening quotes of the string, with no space in between.
* We surround the variable we want evaluated and added to our string in curly brackets: `{ }`.

For contrast, here's this same code in JavaScript using a template literal:

```javascript
> const greeting1 = "Hello";
> `${greeting1} World!`;
"Hello World!"
```

## Chars
---

A **char** is the C# data type that represents a single symbol or alphanumeric character, in upper or lower case. Here's how we can create chars in the REPL:

```csharp
> 'H'
'H'
> '9'
'9'
> '/'
'/'
```

Notice that we declare a char with apostrophes and not quotation marks — quotation marks `" "` are reserved for creating strings, while apostrophes `' '` are reserved for creating chars.

And here's how we can store a char in a variable by declaring it of the type `char`; this is also called **assignment**:

```csharp
> char myGrade = 'B';
> myGrade
'B'
```

**Note that we cannot perform concatenation or interpolation with chars!** 

There we go! Play around with strings and chars a bit more in the REPL before advancing to the next lesson.
