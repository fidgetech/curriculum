---
title: "📓 3.0.0.16 Dictionaries"
id: 3-0-0-16-dictionaries
hide_table_of_contents: true
day: weekend
---

The lists and arrays we just explored are called **numerically indexed arrays** because we can access their elements by referencing their index. For example, we can call `myArray[1]`.

We can use lists and arrays to make things like shopping lists or a guest list of people to invite to a party, but what if we don't just want a list of strings? What if we wanted to associate pieces of data with other pieces of data? For instance, we might want a list of names associated with phone numbers or a list of words with associated definitions.

For these types of situations, we'll use a data type called a **dictionary**.

## Dictionaries
---

**Dictionaries** are a bit like phone books. Just as a phonebook stores pairs of names and phone numbers, a dictionary holds **key-value pairs**. With a phone book, we look up a number (value) by its key (a person's name).

Type this into the REPL:

```csharp
> Dictionary<string, string> myDictionary = new Dictionary<string, string>() { {"A", "apple"}, {"B", "bear"} };
```

We create a dictionary similar to the way we create a list, but after the parentheses we use curly brackets to associate letters with their matched words. Notice how we nest individual pairs of data within curly brackets to connect pieces of data. These are then nested within the curly brackets that define the contents of the entire dictionary.

We can then access this dictionary and its individual contents like this:

```csharp
> myDictionary
{ {"A", "apple"}, {"B", "bear"} }
> myDictionary["A"]
"apple"
> myDictionary["B"]
"bear"
```

### Creating Dictionaries

The basic format for creating a dictionary looks like this:

```csharp
Dictionary<string, string> myDictionary = new Dictionary<string, string>() {};
```

Here are all the steps to creating our dictionary:

1. **Declare a `Dictionary`**. We start with the keyword `Dictionary` to inform C# we're creating a `Dictionary` object. `Dictionary` should be capitalized, not lowercased like `string` or `int`.

2. **Determine what the `Dictionary` will contain**. We then declare the type of data the dictionary will contain in angle brackets: `Dictionary<string, string>`. Because `Dictionary`s contain key-value pairs, we declare _two_ data types here. The first is the data type keys will be. The second is the data type for values.

3. **Give it a variable name**. We'll save our `Dictionary` in a variable so we can store it and access it later. In the example above, we gave our `Dictionary` the variable name `myDictionary`.

4. **Create a new `Dictionary` instance with its constructor**. Similar to `List`s from the last lesson, we use its constructor with the `new` keyword: `new Dictionary<string, string>()`.

5. **Add data**. The curly brackets `{}` at the end are required. They contain the information we'd like to put in our `Dictionary`. This information is formatted in key-value pairs that are _also_ in curly brackets. If we're creating an empty dictionary, we leave these empty.

### Retrieving Content from a `Dictionary`

Let's look at another example. Let's say we're ordering cupcakes for a party. We'll use a dictionary to track how many of each flavor we need to order:

```csharp
>  Dictionary<string, int> cupcakeOrder = new Dictionary<string, int>() { {"vanilla", 12}, {"chocolate", 24}, {"raspberry", 6}, {"caramel apple", 36} };
```

In this case, our value is an `int` instead of a `string`. Each number is stored with its associated flavor of cupcake. When we get to the bakery, we can easily check how many of each type we need:

```csharp
> cupcakeOrder["vanilla"] // How many vanilla cupcakes do we want?
12
> cupcakeOrder["chocolate"] // How many chocolate cupcakes?
24
> cupcakeOrder["raspberry"]
6
> cupcakeOrder["caramel apple"]
36
```

### Adding Content to a Dictionary

Let's go back to our first dictionary and add more words to it. First we'll recreate this dictionary in the REPL:

```csharp
> Dictionary<string, string> myDictionary = new Dictionary<string, string>() { {"A", "apple"}, {"B", "bear"} };
```

Then we'll add another entry. We can use the square bracket notation for this, too:

```csharp
> myDictionary["C"] = "cat";
```

We can see `myDictionary` contains a new entry:

```csharp
> myDictionary
{{ "A", "apple" }, { "B", "bear" }, { "C", "cat" }}
```

### The `Dictionary<TKey,TValue>` Class

We can learn more about lists by reviewing the information in [the `Dictionary<TKey,TValue>` class](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2?view=net-6.0). There are many helpful instance methods we can use to manage our dictionaries:

* `Add()`
* `Remove()` 
* `Clear()`
* `ContainsKey()`
