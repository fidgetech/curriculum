---
title: "📓 3.0.0.14 Arrays"
id: 3-0-0-14-arrays
hide_table_of_contents: true
day: weekend
---

As we learned in Intro, collections like arrays are an important part of programming. We can group things together, loop through them, and manipulate large amounts of data with arrays.

C# arrays work _very_ differently than the JavaScript arrays we've used. Let's explore how they're different.

## Array versus List
---

JavaScript arrays are flexible. They can contain a variety of different things and their size automatically fluctuates when items are added or removed.

On the other hand, C# includes both **arrays** and **lists**. They're each collections of multiple items, but are _very_ different:

* A **list** is similar to arrays in JavaScript. However, they generally only hold one type of data (like `string` or `int`). They fluctuate in size as items are added or removed.

* An **array** is stricter and has a set length. After an array is created, we cannot add or remove objects to make it larger or smaller. All items stored in an array _must_ be the same data type (such as `string` or `int`).

This lesson will focus solely on C# arrays. We'll explore lists more closely in the next lesson.

## Arrays
---

We can create an array containing strings in our REPL like this:

```csharp
> string[] fruits = { "apples", "bananas", "oranges", "grapes" };

> fruits
{"apples", "bananas", "oranges", "grapes"}
```

We can create an array of integers like this:

```csharp
> int[] primeNumbers = { 2, 3, 5, 7, 11 };
> primeNumbers
{2, 3, 5, 7, 11}
```

There are several steps to creating a C# array:

1. **Determine what type of data the array contains**. Data in C# arrays _must_ be the same type. To define an array, we must first determine what data type it will hold. In the examples above, we state `string` when creating an array of fruits and `int` when creating an array of numbers.

2. **Append square brackets `[]` to the data type**. These allow us to declare that the object we're about to create will be an array. In the example above, `int[]` means an array of integers. `string[]` represents an array of strings. There should be no spaces between the data type and square brackets.

1. **Include a variable name.**  After declaring the array and type of data it holds, include a name. In the examples above, we used `string[] fruits` and `int[] primeNumbers`.

2. **Assign data to the array.**  We use the assignment operator `=` to assign the array variable a list of information. Note this is inside `{}`, or **curly brackets**, _not_ the square brackets we used for JavaScript arrays. Remember that the length of the array _**may not change**_ after you assign it.

### Accessing Array Data

We can access an array by calling the array's variable name. For instance, in the example below, calling `fruits` returns the full array:

```csharp
> string[] fruits = { "apples", "bananas", "oranges", "grapes" };
> fruits
{"apples", "bananas", "oranges", "grapes"}
```

To access a specific entry in the array, we append square brackets `[]` to the array's variable name. Inside the brackets we provide the **index** of the item we want:

```csharp
> fruits[1]
"bananas"
> fruits[3]
"grapes"
> string favoriteFruit = fruits[0];
> favoriteFruit
"apples"
```

Remember that items in a list or array should always start at 0. The first item in an array is actually at index 0, the second is at index 1, and the one hundredth is at index 99.

### Altering Array Data

We cannot change an array's length but we _can_ change values inside it. For instance, we know the item in the 2nd index of our array is `"oranges"`:

```csharp
> fruits[2]
"oranges"
```

Let's say we want to be more specific and change this value to `"blood oranges"`. We can redefine the item at that index like this:

```csharp
> fruits[2] = "blood oranges";
> fruits
{"apples", "bananas", "blood oranges", "grapes"}
```

We already know we can call `fruits[2]` to access the second index of our `fruits` array. This time we just include the `=` operator to assign a new value.

This can be done for any index of the array:

```csharp
> fruits[3] = "concord grapes";
> fruits
{"apples", "bananas", "blood oranges", "concord grapes"}
```

### The `Array` Class

We can learn more about arrays by reviewing the information in [the `Array` class](https://learn.microsoft.com/en-us/dotnet/api/system.array?view=net-6.0). There are many helpful methods and properties! For example, check out this static method called `IndexOf()` that returns the index of an element based on its value:

```csharp
> string[] fruits2 = { "apples", "bananas", "oranges", "grapes" };
> Array.IndexOf(fruits2, "bananas")
1
```

In the next lesson, we'll learn more about C# lists.
