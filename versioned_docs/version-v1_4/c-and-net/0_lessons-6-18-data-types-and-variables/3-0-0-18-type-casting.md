---
title: "📓 5.0.0.18 Type Casting"
day: weekend
id: 5-0-0-18-type-casting
hide_table_of_contents: true
pagination_next: null
---

**Type casting** is the process of transferring a piece of data between types. We'll look at an example in the `dotnet-script` REPL using standard data types. 

## Type Casting
---

Let's try to multiply a decimal-holding number, which is called a `double`, and store it in an `integer`.

```csharp
> double myNumber = 12.5;
> int multipliedNumber = myNumber * 2;
```

We'll quickly get an error:

<code style={{color:"red"}}>
(1,24): error CS0266: Cannot implicitly convert type 'double' to 'int'. An explicit conversion exists (are you missing a cast?)
</code>

When we multiply `12.5 * 2` we get `25`, which should be a valid integer. Well, even though the result of the operation is a whole number, and we're storing that whole number in a variable declared as an `int`, C# throws an error because `double` is not an `int`. Moreover, C# does not make any implicit conversions between `double` and `int`. This is our strongly-typed paradigm at work.

### Explicit Casting

The error hints at a solution: `An explicit conversion exists (are you missing a cast?)` What is an explicit conversion? Let's look at how we can use one to compile this code. We've already entered in `double myNumber = 12.5;` to the REPL, so now we'll just fix the arithmetic by adding a data type conversion:

```csharp
> int multipliedNumber = (int)myNumber * 2;
> multipliedNumber
24
```

The syntax `(int)myNumber` is an example of a **cast**. Casting, just like in the movies, is the act of turning one thing into another. Just as Audrey Hepburn was cast as Holly Golightly in the movie "Breakfast at Tiffany's", we can cast `double` as an `int`.

This type of cast is called an **explicit cast**. We're openly telling the compiler to convert `myNumber` into an integer before proceeding.  Since `myNumber` and `2` are both valid integers, their evaluation can be stored in the `multipliedNumber` variable.

### Casting Does Not Always Go As Expected

But there's still something wrong! We got `24` instead of `25`, the actual result of `12.5 * 2`. So why doesn't C# return `25`?

Casting can be an imperfect process. When data types are different, casting can sometimes result in a loss in accuracy. In this case, the expression `(int)myNumber` converts `12.5` into an integer _before_ performing the multiplication operation. To convert a `double` into an `int`, our cast drops the decimal and turns `myNumber` into `12`. As we know, `12 * 2` equals `24`.

This is called **lossy conversion**, as there is a loss of data or accuracy that occurs during the conversion.

We can mitigate this loss by waiting until the operation completes before performing the conversion:

```csharp
> double myNumber2 = 12.5;
> int multipliedNumber2 = (int)(myNumber2 * 2); //CHANGE IS HERE
> multipliedNumber2
25
```

We perform our mathematical operation _before_ making the explicit conversion, which leads to the correct result, `25`.

### Implicit casting

There is another cast going on here that we might not spot right away. In our expression `myNumber * 2`, the `2` is declared without a type. It's just a numeric value.

So what type is `2` exactly if we haven't declared it?

Let's change our example slightly:

```csharp
> int myNumber3 = 12;
> double multipliedNumber3 = myNumber3 * 2;
> multipliedNumber3
24
```

When we run this code, we get the correct value `24`. How does a multiplied `int` become a `double` when a multiplied `double` cannot become an `int`?

When we convert `12.5` to an `int`, we lose information. It would make sense to think of a double as a data type that contains _more_ information than an `int`. This makes a `double` a **larger** data type than an `int`. When we convert from an `int` to a `double`, we don't lose any information because we're moving from a **smaller** data type to a larger one. This is called **implicit casting**. No special syntax is required and C# will do this automatically.

So what is `2` in the code above then?

It starts as an `int`. However, because it's a smaller data type than a `double`, C# implicitly casts it to a `double` so it can be evaluated.

### Other Implicit Casting

There are other types of implicit conversions that C# performs. For example, if we have an integer and use string interpolation to have the integer evaluated within a string, C# will automatically convert the integer into a string. Here's two examples:

```csharp
> $"Hello number {1}"
"Hello number 1"
> int num = 2;
> $"Hello number {num}"
"Hello number 2"
```

If you want to learn more, or are ever unsure of whether C# is converting data types implicitly, review all of the cases in which [C# performs implicit conversions on the Microsoft (MS) Docs](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/conversions#102-implicit-conversions).

## Guidelines and Resources
---

Here are some guidelines for explicit and implicit casting. In general, we shouldn't be using type casting frequently; regular use of type casting is a sign that the code is inefficient.

C# will perform **implicit casting** when:

* Data types are compatible, such as when we are working with two `int`s;
* When data of a smaller type is assigned to a bigger data type, such as when an `int` is cast as a `double`.

We should use **explicit casting** when:

* We are working with incompatible data types where automatic conversion cannot be done. We explicitly state the data type to which the value should be converted. However, be careful: explicit casting can potentially result in loss of accuracy.

**Would you like to see more examples?** The Microsoft (MS) Docs has a great article on [casting and type conversion](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/casting-and-type-conversions).
