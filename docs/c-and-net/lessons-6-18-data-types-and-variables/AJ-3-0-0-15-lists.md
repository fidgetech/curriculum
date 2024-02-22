---
title: "📓 3.0.0.15 Lists"
day: weekend
---

If we want to create a collection where we can add or remove items, we need to use a list. For example, we might want to create a `groceryList` which could have any number of items in it. A  **list** is a collection, usually of a single data type (like `string` or `int`). Unlike an array, a list _can_ dynamically change in length.

## Lists
---

### Creating Lists

Let’s open up the REPL and create a new list:

```csharp
> List<string> groceryList = new List<string> {};
```

There's several steps to creating a C# list. From left to right:

1. **Declare a `List`**. We use the keyword `List` to create a `List` object. Notice this is capitalized, unlike data types like `string` or `int`.

2. **Declare the data type the List will contain.** It's best practice to declare the data type in angle brackets after `List` as we do with `List<string>` in the example above.

3. **Give it a variable name**. In the example above, we gave our `List` the name `groceryList`.

4. **Create a new instance of `List` using its constructor**. Finally, we create our `List` using its constructor with the `new` keyword: `new List<string>`. The example above states `groceryList` will be a new `List` containing `string`s.

5. **Add data**. Note that we use empty curly brackets at the end of the constructor to initialize an empty list without any data. If we try to run this without those curly brackets, we'll see: `error CS1526: A new expression requires an argument list or (), [], or {} after type`. 

Note that there are several ways to initialize lists, and you might see them used interchangeably. We could use curly brackets with starting values inside like this:

```csharp
List<string> groceryList2 = new List<string> {"eggs", "milk"};
```

Or, you might see parens used `()` instead of curly brackets `{}` to initialize an empty list:

```csharp
List<string> groceryList3 = new List<string> ();
```

And there's still a few other ways to initialize a list. [Dot Net Perls has helpful documentation](https://www.dotnetperls.com/initialize-list) on this topic with some more examples.

### Adding Content to `List`s

Once we've created a `List`, we can call the `Add()` method to add items to the `List`:

```csharp
> List<string> groceryList = new List<string> {};
> groceryList
List<string>(0) { }
> groceryList.Add("spaghetti");
> groceryList.Add("tomatoes");
> groceryList.Add("basil");
> groceryList.Add("meatballs");
> groceryList
List<string>(4) { "spaghetti", "tomatoes", "basil", "meatballs" }
```

* In the code above, we create a new `List` of `string`s.

* Then we call `Add()` four times to add four separate strings: `"spaghetti"`, `"tomatoes"`, `"basil"`, and `"meatballs"`.

* We call `groceryList` to see its included items before and after we're done adding items.

### Accessing Content in `List`s

Items in a `List` have a unique index just like with arrays. We can access an item at a specific index using square brackets:

```csharp
> groceryList[1]
"tomatoes"
> groceryList[3]
"meatballs"
```

We can also redefine/overwrite items at specific indexes using similar notation:

```csharp
> groceryList[1] = "CANDY!";
> groceryList
{ "spaghetti", "CANDY!", "basil", "meatballs" }
```

### Removing Content from `List`s

If we check our pantry and realize we already have basil, we can remove it from our grocery list. To remove an item from a `List`, we'll use the built-in `Remove()` method:

```csharp
> groceryList.Remove("basil");
> groceryList
{ "spaghetti", "CANDY!", "meatballs" }
```

When we call `Remove()` on an item in a `List`, C# will return `true` if the item is found and removed. If the argument is not present in a `List`, C# will return `false`.

### The `List<T>` Class

We can learn more about lists by reviewing the information in [the `List<T>` class](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=net-6.0). There are many helpful methods and properties! For example, check out this instance method called `Insert()` that lets us insert a new element at a specified index:

```csharp
> List<string> groceryList2 = new List<string> { "spaghetti", "tomatoes", "basil", "meatballs" };
> groceryList2.Insert(0, "flowers")
1
```
