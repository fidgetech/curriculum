---
title: "📓 3.0.0.09 Variables"
id: 30009-variables
hide_table_of_contents: true
day: weekend
---

Declaring variables in C# looks slightly different from declaring variables in Javascript. We already got a sense of how variables are declared in the previous two lessons from a few code examples, but we're going to take the time to walk through this process in more detail now.

## Variables in C#
---

### Defining a C# Variable

To create a C# variable, we need three things:

1.  A **descriptive name** so it's easy to tell what the variable represents. Our variables should always have descriptive names, regardless of the language we use.

2.  A **data type** such as `string` or `int` to declare what type of data the variable holds. We didn't need to do this in JavaScript because it is weakly typed. However, because C# is strongly typed, we always need to declare the data type of a variable.

3.  An **initial value** should be set with the **assignment operator** (the `=` symbol).

4. The whole statement should end with a semicolon `;`. 

### String Variables

Here's an example of a string stored inside of a variable:

```csharp
> string phrase = "Hello World";
```

In the example above:

* `string` is the data type our variable will be;

* `phrase` is our descriptive name;

* `"Hello World"` is the initial value;

* The entire statement ends with a `;` semicolon.

After creating this variable, we can retrieve its value by calling `phrase`:

```csharp
> phrase
"Hello World"
```

We can also perform actions upon this variable. We could use the concatenation operator on `phrase` to add another string to it:

```csharp
> phrase + "!!!!"
"Hello World!!!!"
```

### Strongly-Typed Languages

Remember, we must always define what _type_ of data a variable will hold. We say `string phrase = "Hello World";` **_not_** `phrase = "Hello World";`

Similarly, we could define a variable containing an **integer** like this:

```csharp
> int number = 1;
> number
1
```

Again, **C# variables must declare the type of data they contain**. This is because C# is a **strongly typed language**, meaning it rigidly insists on consistent and explicit data types.

As we learned in a previous lesson, `int` is a data type for whole numbers. Because variables behave exactly like the values they store, we can use any number of arithmetic operators with variables containing integers:

```csharp
> number + number
2

> int bigNumber = 100;
> bigNumber
100;

> number + bigNumber
101
```

If we do not include the data type, or do not treat the variable as the data type it is, we'll get error messages letting us know what we did wrong.

### Naming Conventions

Before we wrap up, let's address naming conventions. C# variable names should always be written in **lower camel case** just like JavaScript. The first letter of the first word is lowercase, there are no spaces between words, and the first letter of any subsequent words are capitalized. It looks like this: 

* `myVariable`
* `myMultipleWordVariableName`
* `myEvenLongerMultiWordVariableName`

### `var`

The variable initializer (or "declaration statement") `var` exists in the C# language, and we use it in just the same way we would in JavaScript:

```csharp
> var myName = "remy";
> myName
"remy"
```

We can use `var` in place of any more specific data type. In the above example, we could have specifically declared our `myName` variable as a `string`. As we can see, we can instead use `var` in place of `string`, and C# will do the work to figure out that `myName` is in fact a `string`.

When we use the declaration statement `var`, we're using **implicit typing**, where C# determines the type. When we use the exact type, in our example `string`, we're using **explicit typing**, where we're telling C# exactly what type we're using. Take note that in both cases, C# remains a strictly-typed language and declaring a type is required when we initialize new variables. Only in the case of using `var`, do we let C# do the work of figuring out the exact type.

You'll see `var` used in online examples a fair amount, but you won't find it often in the LearnHowToProgram.com curriculum. In fact, **we strongly recommend that you do not use `var` in any of your projects.** That's quite simply because it's crucial for us to learn about C# types as beginners in a strongly-typed language! When we use `var`, we don't need to know a variable's type, and when we don't have to pay attention to the types we are using in our projects, we won't learn about them, plain and simple. 
