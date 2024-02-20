---
title: "\U0001F4D3 3.0.0.10 Booleans, Branching, and Operators"
id: 30010-booleans-branching-and-operators
slug: 30010-booleans-branching-and-operators
hide_table_of_contents: true
sidebar_position: 5
day: weekend
type: lesson
url: 'https://github.com/fidgetech/c-and-net/blob/main/0e_branching_and_booleans.md'
---

As we learned in Intro, we can use **branching** to execute different code depending on specific conditions. In this lesson, we'll learn how to create booleans in C#. Then, we'll learn how to use both if/else and switch statements. We'll end this lesson by reviewing the operators we can use within conditionals and other resources for continued learning and exploration.

## Booleans
---

As we covered in Intro, **booleans** can hold one of two values: `true` or `false`. We can use the C# **equality operator** `==` to see if one thing is equal to another. If it is true, C# returns a boolean with a `true` value. If it isn't, C# will return a `false` value.

In Intro, we used JavaScript's **strict equality** operator `===` to determine whether two things are _completely identical_, including their types. In C#, **we only use two equals signs `==` to evaluate equality.**

### Comparison Operators and Booleans

Let's open the C# REPL (with the `$ dotnet-script` command) and observe several operators that return booleans.

We can compare two strings like this:

```csharp
> "1" == "1"
true
```

The same is true for `int` data types:

```csharp
> 1 == 1
true
```

If we compare things that _aren't_ the same, C# will return `false`:

```csharp
>  "1" == "2"
false
```

### `bool` Variables

In C#, we can declare boolean variables with the `bool` data type:

```csharp
> bool mathIsWrong = 1 > 2;
> mathIsWrong
false
> bool mathIsRight = 1 < 2;
> mathIsRight
true
```

## Branching
---

Next, we'll learn how to write an **if/else** statement in C#. First, take note that if/else statements are impossible to run in the `dotnet-script` REPL without changing the standard indentation and spacing; so, we'll review the following examples of branching without running them in the REPL. Later in the pre-work we'll take the time to run and test branching that we add to a console application 

Writing an if/else statement is the same in C# and in JavaScript, except for the indentation. Let's write an if/else statement determine whether someone is old enough to see an R-rated film in theaters:

```csharp
int intUserAge = 16;
if (intUserAge >= 17) 
{
  return "You can see the movie!";
} 
else 
{
  return "I'm sorry, you are too young to see the movie.";
}
```

Our branching statement evaluates an age saved in `intUserAge` and then returns a string with a message depending on whether or not they are 17 year old.

As we can see, the main difference between C# and JavaScript is the spacing and indentation, where the curly brackets are always on a new line, as are the `if` and `else` statements themselves.

Just like in JavaScript, we can also include an `else if` statement, as many as we need. Let's update our code to include a special message to 16 year olds letting them know they are almost the right age to be let into a movie that is rated R. 

```csharp
int intUserAge = 16;
if (intUserAge >= 17) 
{
  return "You can see the movie!";
} 
else if (intUserAge == 16)
{
  return "You're almost there! One more year and you'll be 17.";
}
else
{
  return "I'm sorry, you are too young to see the movie.";
}
```

## Switch Statements
---

Just like JavaScript, in C# we can use [switch statements](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/selection-statements#the-switch-statement) as an alternative to branching with `if/else`.

Here's an example of the same branching as above in a switch statement. You can copy/paste the following code directly in the `dotnet-script` REPL to try it out.

```csharp
int intUserAge = 16;
switch (intUserAge)
{
  case >= 17:
    return "You can see the movie!";
  case 16:
    return "You're almost there! One more year and you'll be 17.";
  default:
    return "I'm sorry, you are too young to see the movie.";
} 
```

There's a few things to remember about switch cases:

* The switch statement moves through each case to see if it matches the specified  expression, in our case the value of `intUserAge`.
* If there's a match between the case and the expression, then the code within that case will run. In our example `case 16` matches the value of `intUserAge`, so the REPL will return `"You're almost there! One more year and you'll be 17."`. Notice that we don't need to include `==` to indicate that we want `intUserAge` to be equal to `16`.
* The `default` case is run if there are no matches with the specified expression, in our case the value of `intUserAge`. Our default case will run if `intUserAge` is any number below 16.
* Even if we match with a case before our default case, all of the cases thereafter will be run unless we include a `return` or `break` statement in the matching case; because of this, it's a best practice to always include a `return` or [`break;` statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/jump-statements#the-break-statement) in each case. 

## Other Operators
---

It's worth noting that all of the operators we used in JavaScript, we can also use in C#. Let's review the most commonly used operators now:

### Equality

| Operator | Definition  | Example                                    |
|----------|-------------|--------------------------------------------|
| `==`     | equal to    | `1 == 1` is true. `1 == 2` is false.       |
| `!=`     | not equal to| `1 != 2` is true. `1 != 1` is false.       |

### Relational

| Operator | Definition              | Example                                                   |
|----------|-------------------------|-----------------------------------------------------------|
| `>`      | greater than            | `2 > 1` is true.  `1 > 2` is false.                       |
| `>=`     | greater than or equal to| `2 >= 2` and `2 >= 1` are both true. `2 >= 3` is false.   |
| `<`      | less than               | `1 < 2` is true.  `2 < 1` is false.                       |
| `<=`     | less than or equal to   | `1 <= 1` and `1 <= 2` are both true.  `2 <= 1` is false.  |


### Logical

| Operator | Definition | Example |
|----------|------------|---------|
| <code>&#124;&#124;</code>     | The conditional logical "or" operator returns true if either statements is true; the second statement won't be evaluated if the first is true.| The code <code>num &lt; 4 &#124;&#124; num &gt; 6</code> will evaluate as true if `num` is less than 4 OR if `num` is greater than 6.|
| `&&`     | The conditional logical "and" operator returns true if both statements are true.| The code `num < 4 && num > 1` will evaluate as true if `num` is BOTH less than 4 AND greater than 1; `num` would have to be `2` or `3`.|
| `!`      | The logical negation operator returns false if the result is true.| The code `num != 2` will evaluate as true so long as `num` is not `2`.|

## More Resources
---

C# actually has a lot of operators that JavaScript does not. For example, there's also the logical OR `|` and logical ORX `^` operators that can be used outside of conditional statements. To learn more, start by perusing [the Microsoft (MS) Docs on operators and expressions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/).