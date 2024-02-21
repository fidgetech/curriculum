---
title: "📓 3.0.0.08 Integers, Decimals, and Arithmetic"
id: 30008-integers-decimals-and-arithmetic
hide_table_of_contents: true
day: weekend
---

Let’s look at the data types that represent numbers: integers, longs,  floats, and doubles. Between these four data types, C# covers whole and decimal numbers, as well as numbers with many digits and fewer digits. As we'll see, C# numbers are very similar to JavaScript numbers; the main difference is that JavaScript has fewer data types that represent numbers than in C#. 

We'll practice working with C# number types in the REPL. Start by opening your REPL with the `$ dotnet-script` command in the Terminal (for Mac) or GitBash (for Windows).

## Integers and Longs
---

Both integers and longs represent whole numbers, that is, numbers without decimals. **Integers** are meant to hold smaller numbers between -2,147,483,648 and 2,147,483,647. **Longs** are meant to hold larger numbers between -9,223,372,036,854,775,808 and 9,223,372,036,854,775,807.

We can create a new integer like this:

```csharp
> 1
1
```

Or a new long like this:

```csharp
> 9222222222222222
9222222222222222
```

Easy enough! But do notice this is _very_ different than:

```csharp
> "1"
"1"
```

The second example is a string _containing_ an integer. Strings are the **only** type of data wrapped in quotation marks. If we put quotation marks around a number, it's actually a string... and will act as such!

For instance, check out what happens when we add two numbers wrapped in quotations:

```csharp
> "1" + "1"
"11"
```

1 + 1 isn't 11! But we receive this result because the REPL is actually concatenating two _strings_ containing the character `1` together. You likely already recognize this type of error from JavaScript but it's so common it's worth mentioning again!

We can avoid this erroneous math by avoiding quotation marks and ensuring numerical values are integers like this:

```csharp
> 1 + 1
2
```

That's more like it!

### Assigning Integers to Variables

Finally, we can store integers in a variable by declaring it of the type `int`:

```csharp
> int myAge = 45;
> myAge
45
```

We can store longs in a variable by declaring it of the type `long`:

```csharp
> long superBigNumber = 9222222222222222;
> superBigNumber
9222222222222222
```

### Choosing the Right Data Type: `int` or `long`

So what happens if we store a long in an int?

```csharp
> int superBigNumber = 9222222222222222;
```

We'll actually get a helpful error message:

<code style={{color:"red"}}>
(1,22): error CS0266: Cannot implicitly convert type 'long' to 'int'. An explicit conversion exists (are you missing a cast?)
</code>

This error message lets us know that we can't store a `long` number into a variable that's declared for an `int` type. We either need to update our variable's data type to `long`, or convert one data type into another. Data type conversion is also called "type casting", and we'll learn about it a bit later on. 

So what happens if we store a small number in a long?

```csharp
> long aNumber = 2;
> aNumber
2
```

This will work as expected! In this case, the `aNumber` variable is of the type `long`, so it can hold a very large number at any point. For example, we could update the `aNumber` variable to hold a very large number:

```csharp
> aNumber = 9222222222222222;
> aNumber
9222222222222222
```

Generally we shouldn't use a `long` data type for small numbers that could be declared as `int`. That's because `long` takes up more space in memory than `int` does, and we should be mindful of conversing memory in simple cases like these. 

In the example projects for this course, we'll primarily use the `int` data type because we won't be working with long whole numbers. However, if you know that you are dealing with very large numbers in a project you create, you should be mindful to investigate whether or not it's best to use the `long` data type. 

## Floats and Doubles
---

The float and double data types represent decimal numbers like 3.14  or 9.2342342342342. **Floats** are meant to hold numbers with a smaller number of decimals, about 6 to 9 digits. **Doubles** are meant to hold numbers with a larger amount of decimals, about 15 to 17 digits. Collectively, numbers with a decimal point are referred to as **floating-point numbers** in computer programming.

We can create a new double like this:

```csharp
> 9.2342342342342
9.2342342342342
```

Or a new float like this:

```csharp
> 3.14F
3.14
```

Notice that we add the suffix `F` to our number to declare it as a float. We need to do this, otherwise the number `3.14` will be declared as a double. That's because **C# performs an implicit conversion of all floats to doubles**. If we want to make sure that this implicit conversion does not happen, we need to include the suffix `F` or `f` at the end of the number we want to declare as a `float`, as in `3.14F`. 

There's also a suffix for numbers that we want to declare as a double that we can use as needed, which is `D` or `d`. To summarize, all of the following examples creates a double:

```csharp
> 9.2342342342342
9.2342342342342
> 3.14
3.14
> 0.124123123123D
0.124123123123
```

### Assigning Floating-Point Numbers to Variables

We can store doubles in a variable by declaring our variable of the `double` data type:

```csharp
> double aLongDecimal = 9.2342342342342;
> aLongDecimal
9.2342342342342
```

We can store floats in a variable by declaring our variable of the `float` data type:

```csharp
> float pi = 3.14F;
> pi
3.14
```

Notice that we need to include an `F` suffix at the end of the decimal number that we're declaring as a float: `3.14F`. If we don't include the `F`, we'll get an error:

<code style={{color:"red"}}>
(1,12): error CS0664: Literal of type double cannot be implicitly converted to type 'float'; use an 'F' suffix to create a literal of this type
</code>

Again, this is because C# performs an implicit conversion of all floats to doubles. If we want to make sure that this implicit conversion does not happen, we need to include the suffix `F` or `f` at the end of the number we want to declare as a `float`, as in `3.14F`. 

### Choosing the Right Data Type: `float` or `double`

If we choose the wrong data type between `float` and `double`, we're at risk of losing data and we won't get an error message about it. 

Take this for example, where we store a very long decimal into a variable called `testNum` declared as the `float` type:

```csharp
> float testNum = 9.2342342342342F;
> testNum
9.234234
```

Notice that our decimal number got shortened! From `9.2342342342342` to `9.234234`. Well, this is what happens in C# if we don't pick the right data type for floating point numbers. 

Now, if we save a number with a small amount of decimals to a variable that's declared as a `double`, we'd simply be taking up more space in memory. Something like this:

```csharp
> double testNum2 = 9.1;
> testNum2
9.1
```

However, this is the right choice if we plan to later update our `testNum2` variable to a new number that has many decimals:

```csharp
> testNum2 = 16.11231231222312;
> testNum2
16.11231231222312
```

We won't work often with decimals in the example projects in this course. However, you'll likely find use cases for `float` and `double` in your own practice projects that you create. 

## Arithmetic Operators
---

The five **arithmetic operators** we used in JavaScript work the same in C#. You should recall these basic operators:

* `+` for addition, as seen in the example above.
* `-` for subtraction.
* `*` for multiplication.
* `/` for division.
* `%` for modulo, which gives us the remainder of dividing two numbers.

We can use each with integers in the REPL and receive expected results. Note that the following examples use whole numbers of the `int` type, but they will work the same with floating point numbers.

**Subtraction**:

```csharp
> 1 - 1
0
```

**Addition:**

```csharp
> 1 + 1
2
```

**Multiplication:**

```csharp
> 2 * 2
4
```

**Division:**

```csharp
> 4 / 2
2
```

**Modulo:**

```csharp
> 5 % 2
1
```

Remember that a **modulo** gives us the remainder of dividing two numbers and it has nothing to do with percentages!
