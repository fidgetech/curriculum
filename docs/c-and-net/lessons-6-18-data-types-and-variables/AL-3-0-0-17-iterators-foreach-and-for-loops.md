---
title: "📓 3.0.0.17 Iterators: Foreach and For Loops"
day: weekend
---

In Intro, we typically used two types of JavaScript loops: `for` and `forEach()`. `forEach()` loops iterate through each item in an array whereas `for` loops are more manual where we have to define how and when the loop starts and stops.

C# also features both `for` and `foreach` loops, although the syntax _does_ differ. This lesson will walk through both types of iterators.

## Foreach Loops
---

Foreach loops cycle through an array and pinpoint each item. In JavaScript, we used foreach loops like this:

```javascript
const theEntireArray = ["zero index", "first index", "second index"];
theEntireArray.forEach(function(individualEntry){
  console.log(individualEntry);
});
```

However, doing the same thing in C# looks markedly different. We'll start with arrays, and then look at lists and dictionaries. 

### Arrays

First, defining a similar array in the REPL looks like this:

```csharp
> string[] theEntireArray = {"zero index", "first index", "second index"};
```

To loop through this array and print each entry to the console, we'd use the following code. Go ahead and copy/paste it into the REPL.

```csharp
foreach (string individualEntry in theEntireArray)
{
  Console.WriteLine(individualEntry);
}
```

The line `foreach (string individualEntry in theEntireArray)` can be read as "for each element in `theEntireArray`, name it `individualEntry`, then run the line of code between the curly braces." In this case, we're printing each item in `theEntireArray` to the console.

Note that we also need to include the data type for the new variable we're creating in the loop: `string individualEntry`.

When we run this loop in the REPL, it prints each individual string entry in the array:

```csharp
zero index
first index
second index
```

### Lists

Looping through a list with foreach is almost the exact same as with an array. The only difference is that we're using a List. Copy/paste the following code into the `dotnet-script` REPL:

```csharp
List<string> groceryList = new List<string> { "spaghetti", "tomatoes", "basil", "meatballs" };
foreach (string item in groceryList)
{
  Console.WriteLine(item);
}
```

We should see this printed in the console:

```
spaghetti
tomatoes
basil
meatballs
```

### Dictionaries

We can also loop through a dictionary with foreach, though we need to incorporate a new class called `KeyValuePair<TKey,TValue>` to represent each key-value pair within the dictionary.

Copy/paste the following code into the `dotnet-script` REPL:

```csharp
Dictionary<string, int> cupcakeOrder = new Dictionary<string, int>() { {"vanilla", 12}, {"chocolate", 24}, {"raspberry", 6}, {"caramel apple", 36} };
foreach (KeyValuePair<string, int> cupcake in cupcakeOrder)
{
  Console.WriteLine($"{cupcake.Key}: {cupcake.Value}");
}
```

We should see this printed in the console:

```
vanilla: 12
chocolate: 24
raspberry: 6
caramel apple: 36
```

Similar to dictionaries, `KeyValuePair<TKey,TValue>` requires that we specify a data type for the key and the value. 

Within the loop, notice that we access the key and value of each `KeyValuePair<TKey,TValue>` through two properties: `Key` and `Value`. Also notice that we're using string interpolation to put our variables directly into a string: `$"{cupcake.Key}: {cupcake.Value}"`.

Visit the docs to learn more about [the `KeyValuePair<TKey,TValue>` class](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.keyvaluepair-2?view=net-6.0).


## Using For Loops
---

For each loops are great when we want to do something to each element of a collection. But sometimes we only want to do something until a condition is met. For that, we can use a `for` loop.

Let's refactor each of our previous examples to use a for loop.

### Arrays

```csharp
string[] theEntireArray = {"zero index", "first index", "second index"};
for (int index = 0; index < theEntireArray.Length; index++)
{
  Console.WriteLine($"{index}: {theEntireArray[index]}");
}
```

Here's how the `for` loop works:

* The `for` statement here takes three parameters: **initialization**, **condition**, and **final expression**. Each is separated by a semicolon `;`.

* The **initialization** parameter (`int index = 0`) creates an `int` called `index` that starts at zero. This states that the first time the loop runs is actually the 0th time. Initializing `for` loops at 0 is a common practice, but they can theoretically be initialized at any number.

* The **condition** parameter (`index < theEntireArray.Length`) tells the loop when it should stop running. To determine this we're making use of our array's `Length` property, which returns the number of elements in the array. For the condition parameter, we've instructed our loop to halt when `index` is no longer less than `theEntireArray.Length`. Keep in mind that `theEntireArray.Length` evaluates to `3`, but the last _index_ of `theEntireArray` is `2`, because indexes begin at `0`.

* The **final expression** parameter (`index++ `) manipulates the variable that keeps track of where we are in the loop. Here we use the increment operator `++` to add `1` to `index` each time we go through the loop.

* Within the loop, we include the line `Console.WriteLine($"{index}: {theEntireArray[index]}");`. On each loop through, we print the current `index` as well as the element in `theEntireArray` at the current `index`.

We should see the following output in the REPL:

```
0: zero index
1: first index
2: second index
```

### Lists

Looping through a list with a for loop is almost the exact same as with an array. The two differences are that we're using a list (instead of an array) and lists have a `Count` property that returns the number of elements within it (as opposed to a `Length` property). Copy/paste the following code into the `dotnet-script` REPL:

```csharp
List<string> groceryList = new List<string> { "spaghetti", "tomatoes", "basil", "meatballs" };
for (int index = 0; index < groceryList.Count; index++)
{
  Console.WriteLine($"{index}: {groceryList[index]}");
}
```

We should see this printed in our console:

```
0: spaghetti
1: tomatoes
2: basil
3: meatballs
```

### Dictionaries

If we want to loop through a dictionary with a for loop, we'll need to use the dictionary instance method `ElementAt()` to locate the key-value pair by an index value. Let's take a look at the code first. Copy/paste the following code into the `dotnet-script` REPL to see how it works:

```csharp
Dictionary<string, int> cupcakeOrder = new Dictionary<string, int>() { {"vanilla", 12}, {"chocolate", 24}, {"raspberry", 6}, {"caramel apple", 36} };
for (int index = 0; index < cupcakeOrder.Count; index++)
{
  KeyValuePair<string, int> cupcake = cupcakeOrder.ElementAt(index);
  Console.WriteLine($"{index}: {cupcake.Value} {cupcake.Key} cupcakes");
}
```

In each iteration of the loop, we use the `index` variable in order to locate a key-value pair within the dictionary using the `ElementAt()` instance method. The key-value pair is then saved to the `cupcake` variable as an instance of the `KeyValuePair<TKey,TValue>` class. 

Then, we access the `Value` and `Key` properties (of the `KeyValuePair<TKey,TValue>` class) to display each cupcake's flavor and the amount that we want to order. We should see this printed in the console:

```
0: 12 vanilla cupcakes
1: 24 chocolate cupcakes
2: 6 raspberry cupcakes
3: 36 caramel apple cupcakes
```

And with that, we've covered the basics of looping with for and foreach loops for arrays, lists, and dictionaries.
