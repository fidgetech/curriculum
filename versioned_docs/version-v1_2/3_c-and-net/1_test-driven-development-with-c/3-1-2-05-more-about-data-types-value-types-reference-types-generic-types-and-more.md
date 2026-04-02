---
title: "📓 3.1.2.5 More About Data Types: Value Types, Reference Types, Generic Types, and More"
day: tuesday
id: 3-1-2-5-more-about-data-types-value-types-reference-types-generic-types-and-more
hide_table_of_contents: true
---

So far, we've learned about the following C# types:

* `string`
* `int`
* `long`
* `float`
* `double`
* `bool`
* `array`
* `List<T>`
* `Dictionary<TKey,TValue>`

However, there's quite a few more types out there than what we've covered. Some of these other types don't exist in JavaScript, like the `struct` and `enum` types. There's also special ways that C# distinguishes its types: **value types**, **reference types**, and **generics**. In this lesson, we'll get into all of this new information.

Take note, however, that we won't go into depth into all of the new types we learn about. The goal is exposure: to understand that there's more out there to eventually get to know. What we don't want is to get overwhelmed. So, exploring these types in more depth will be further exploration that you can get into on your own time. 

## Value Types and Reference Types
---

C# divides its types into two main categories: value types and reference types. The difference between the two has to do with how each is saved in memory, and how that affects the behavior of the type. Let's look at examples and definitions to understand these two categories. 

### Value Types

A **value type** is a type that stores its actual value. Consider the following example in the `dotnet-script` REPL:

```csharp
> int a = 1;
> int b = a;
> a = 2;
> a
2
> b
1
```

The variables `a` and `b` each store an `int`, a **value type**. As a value type, each variable stores the actual value. That means each variable is independent of the other: when we update the value of `a` to `2`, only the `a` variable is changed to `2`, and `b` continues to have the same value of `1`.

Okay... So? Big deal. Why should this matter? Let's look at reference types next to see the contrast in behavior.

### Reference Types

A **reference type** is a type that stores a reference to a value, which is stored elsewhere in memory. Consider the following example in the `dotnet-script` REPL:

```csharp
> List<int> c = new List<int> { 1, 2 };
> List<int> d = c;
> c.Add(3);
> c
List<int>(3) { 1, 2, 3 }
> d
List<int>(3) { 1, 2, 3 }
```

The variables `c` and `d` each store a `List<T>`, a **reference type**. As a reference type, each variable stores a reference to another location in memory, and the other location in memory contains the actual value. This means that when we set `List<int> d = c;`, we're assigning `d` a reference, not a value. That's also why when we update `c` to add a new integer to its list, `d` is also updated. In other words, `c` and `d` contain references to the same list in memory and they are not holding separate values.

### Summary

To summarize, value types store a value directly, while reference types store a reference to a value saved elsewhere. A big implication that this has is carefully considering what happens when we copy reference types versus value types. As we've seen a reference type doesn't copy an independent and new value; instead, just the reference. To copy a reference type, you'll need to learn how to do a deep clone. There are a lot of solutions for this online, and [this Stack Overflow article is a good place to start](https://stackoverflow.com/questions/78536/deep-cloning-objects).

Let's revisit all of the types we've learned about so far, and learn which category they belong to.

**Value Types:**

* `int`
* `long`
* `float`
* `double`
* `bool`

**Reference Types:**

* `string`
* `array`
* `List<T>`
* `Dictionary<TKey,TValue>`
* `class`
* `interface`

Take note that `string` is a bit more special: while it is in fact a reference type, it sometimes acts like a value type. That means we can copy a `string` like we can any value type.

Want to learn more? Check out the following MS documentation:

* [Value Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types)
* [Reference Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types)

## Generics
---

The next concept within C# types that we'll cover is generics. We can create **generic** classes and methods which are types that include typed parameters. We're actually already familiar with two generic classes:

* `List<T>`
* `Dictionary<TKey,TValue>`

The syntax `<T>` and `<TKey, TValue>` are the typed parameters. When we use these generic classes, we need to specify the parameter types, like this:

```csharp
List<int> myNumberList = new List<int> { 3, 4, 5, 6 };
Dictionary<int, string> employees = new Dictionary<int, string> { {1, "Alejandra"}, {2, "Marcus"} };
```

Generics exist in order to increase reusability, type safety, and efficiency. [By **type safety**](https://en.wikipedia.org/wiki/Type_safety), we mean how much a programming language like C# reduces the chance of type errors. When we include typed parameters with generics, we're declaring exactly what type a `Dictionary<TKey,TValue>` or `List<T>` should contain and helping avoid any type errors that could be generated from not doing so. In contrast, non-generic collections could hold any data type, which is more prone to generating type errors. 

So, anytime you see angle brackets and a parameter name (like `<T>`) next to a class name (like `List<T>`), you are using a generic class.

While we can create custom generic types, we'll stick to using built-in generics in this course. And of the generics we'll use, most will be from the `System.Collections.Generic` namespace. To learn more about generics, visit the MS Docs:

* [Generics](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics)

## Other Data Types in C#
---

Let's now look into additional C# data types that we aren't yet familiar with. We're not going to go into depth into any single type, but instead get an overview of them, with the goal of exposure. There will be links provided to learn more about each type.

### Value Types

Other common **value types** include:

* **`struct`**. A `struct` is like a class that has **value semantics**, that is, it acts like a value type instead of a reference type like classes are. [The MS Docs on `struct`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct) explain "Typically, you use structure types to design small data-centric types that provide little or no behavior."
* **`tuple`**. A `tuple` is concise syntax that groups multiple data elements into one structure. Check out the examples and use cases on [the MS Docs](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples).
* **`enum`**. An `enum` is a named set of constants. Just like in JavaScript, [a **constant**](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/constants) is an immutable value. To learn more about `enum`, visit the [MS Docs](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum).
* **`decimal`**. A `decimal` holds even larger decimal values than a `double` does. Note that `float` is the only other floating point numeric type.
* There are _many_ additional integral numeric types than what we've covered; to see a full list, [check out the MS Docs](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types). 

### Reference Types

Other common **reference types** include:

* **`object`**. The `object` type is an alias for [the `System.Object` type](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-6.0), from which all other objects inherit basic functionality, like the `GetType()` method! We declare any variable with the type `object`. To learn more, [visit the MS Docs.](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-object-type)
* **`record`**. A `record` is a reference type similar to a class that's meant to hold data, but not functionality (so no methods). To learn more about `record`, [visit the MS docs.](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record)
* **`delegate`**. A `delegate` is used to encapsulate a method so that it can be passed as a parameter. As such, it is often used to create callback methods. To learn more, visit [this article](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-delegate-type) as well as [this article](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/) on the MS Docs. 
* **`dynamic`**. We can use the type `dynamic` when we want an object's type to be determined at run time, instead of compile time. Learn more about `dynamic` on [the MS Docs.](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-dynamic-type)

