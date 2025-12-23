---
title: "📓 5.1.1.3- Overloading Constructors and Methods"
day: monday
id: 5-1-1-3--overloading-constructors-and-methods
hide_table_of_contents: true
---

Let's learn a technique that will allow us to make our class constructors and methods more flexible: **overloads**. As we usually do, let's start with an example. 

## Overloaded Constructors
---

Let's modify our Shape Tracker's `Triangle` class to include a new auto-implemented `Guess` property, so that users can submit a guess about what type of triangle they have, before they are told (by our `Triangle.CheckType()` instance method):

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
using System.Collections.Generic;

namespace ShapeTracker.Models
{
  public class Triangle
  {
    private int _side1;
    public int Side1
    {
      get { return _side1; }
      set { _side1 = value; }
    }
    public int Side2 { get; set; }
    private int _side3;
    private static List<Triangle> _instances = new List<Triangle> {};
    // New auto-implemented property below!
    public string Guess { get; set; }

    public Triangle(int length1, int length2, int length3)
    {
      _side1 = length1;
      Side2 = length2;
      _side3 = length3;
      _instances.Add(this);
    }

    ... // other methods omitted for brevity
  }
}
```

Now we need to update each use of the `Triangle()` constructor (in our tests and source code) to include an argument for the user's guess:

```csharp
Triangle newTriangle = new Triangle(3, 4, 5, "isosceles");
```

Aside from the headache of having to update our code, what if we wanted making a guess to be optional? Well, we can use an **overloaded constructor** that gives us the flexibility to pass in different configurations of arguments. With an overloaded constructor, we could pass in values just for the triangle's sides, or values for the triangle's sides _and_ a guess. 

Here's how we would create an overloaded constructor for our `Triangle` class:

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
using System.Collections.Generic;

namespace ShapeTracker.Models
{
  public class Triangle
  {
    private int _side1;
    public int Side1
    {
      get { return _side1; }
      set { _side1 = value; }
    }
    public int Side2 { get; set; }
    private int _side3;
    private static List<Triangle> _instances = new List<Triangle> {};
    public string Guess { get; set; }

    public Triangle(int length1, int length2, int length3)
    {
      _side1 = length1;
      Side2 = length2;
      _side3 = length3;
      _instances.Add(this);
    }

    // New overloaded constructor below!!!
    public Triangle(int length1, int length2, int length3, string userGuess)
    {
      _side1 = length1;
      Side2 = length2;
      _side3 = length3;
      Guess = userGuess;
      _instances.Add(this);
    }

    ... // other methods omitted for brevity
  }
}
```

We've added a second constructor in the code above. The first constructor includes parameters for the three sides of a triangle, and the second constructor includes parameters for the three sides and a user's guess. 

Now we can instantiate new `Triangle` objects in two ways:

```csharp
Triangle newTriangle = new Triangle(15, 44, 9);
Triangle newTriangle = new Triangle(3, 4, 5, "isosceles");
```
### Syntax to DRY Up Our Overloaded Constructor

However, our constructors aren't very DRY. Multiple lines of code are repeated. We can refactor our code with special syntax and the `this` keyword:

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
    ... // code omitted for brevity

    public Triangle(int length1, int length2, int length3)
    {
      _side1 = length1;
      Side2 = length2;
      _side3 = length3;
      _instances.Add(this);
    }

    public Triangle(int length1, int length2, int length3, string userGuess) : this(length1, length2, length3)
    {
      Guess = userGuess;
    }

    ... // code omitted for brevity
```

Our first constructor looks the same while the second has new syntax. We add `: this(length1, length2, length3)`. `: this()` allows the second constructor to utilize everything that's in the first constructor, which means we don't need to repeat any code that's already in the first constructor. We have to pass in `length1, length2, length3` because we are utilizing the first constructor and it expects the three `length1, length2, length3` parameters. Then our second, overloaded constructor will take care of the rest.

## Overloaded Methods
---

We can also overload methods just like we can with constructors. Here's a simple example of creating an overload for a static `Add()` method in a made up `Calc` class:

```csharp
public class Calc
{
  public static int Add(int a, int b)
  {
    return a + b;
  }
  public static int Add(int a, int b, int c)
  {
    return a + b + c;
  }
}
```

With the first definition of the `Add()` method, we only calculate the total of adding two numbers. In the second overloaded method, we calculate the total of adding three numbers.

Just like with constructors, we can use overloaded methods to greatly increase the flexibility of our code!

## When to Use Overloads
---

When we define two or more constructors or methods in a class, those constructors/methods that differ from the first constructor are called **overloads**. Let's look at three use cases for overloads using examples for constructors in the Shape Tracker console app:

**Order of parameters:** If we want to pass in a `userGuess` first and then `length1`, etc. afterwards, we could add an overloaded constructor that accounts for arguments being passed into the constructor in a different order.

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
    ... // code omitted for brevity
    public string Guess { get; set; }

    public Triangle(int length1, int length2, int length3)
    {
      _side1 = length1;
      Side2 = length2;
      _side3 = length3;
      _instances.Add(this);
    }

    public Triangle(string userGuess, int length1, int length2, int length3) : this(length1, length2, length3)
    {
      Guess = userGuess;
    }

    ... // code omitted for brevity
```

**Data type of parameters:** If we want to allow users to enter an open-ended guess, like entering the string `"isosceles"`, or make a selection from a predefined list, like choosing the char `'a'` or `'b'`, we can add overloaded constructors to account for different type of data. Note that you will need separate properties/fields for each type of data you want to store.

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
    ... // code omitted for brevity
    public string OpenGuess { get; set; }
    public char MultipleChoiceGuess { get; set; }

    public Triangle(int length1, int length2, int length3)
    {
      _side1 = length1;
      Side2 = length2;
      _side3 = length3;
      _instances.Add(this);
    }

    public Triangle(int length1, int length2, int length3, string userGuess) : this(length1, length2, length3)
    {
      OpenGuess = userGuess;
    }
    
    public Triangle(int length1, int length2, int length3, char userGuess) : this(length1, length2, length3)
    {
      MultipleChoiceGuess = userGuess;
    }

    ... // code omitted for brevity
```

**Flexibility of parameters:** We can choose to have a different number of parameters (as seen in the example we use above) or even no parameters at all. To include no parameters, add an empty constructor like this: 

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
    ... // code omitted for brevity

    public Triangle(int length1, int length2, int length3)
    {
      _side1 = length1;
      Side2 = length2;
      _side3 = length3;
      _instances.Add(this);
    }

    public Triangle() { }

    ... // code omitted for brevity
```

As we can see, overloaded constructors give us additional flexibility in our code. C# is strict about the number of parameters that can be passed into any method, including a constructor. However, in the real world, data can be messy and overloaded constructors can help us write resilient, reusable applications.

## Look for Overloads in Documentation
---

Built-in C# and .NET classes and methods often use overloads. For example, if we look at the MS documentation for the static method [`Console.WriteLine()`](https://learn.microsoft.com/en-us/dotnet/api/system.console.writeline?view=net-6.0), we'll see that there are 18 overloaded constructors listed, which effectively means there are 18 different ways we can use this method!

As the image below shows, we can quickly get a sense of all overloads for `Console.WriteLine()` by looking at the "In this article" right-hand menu, or we can start scrolling on the main page to look through the "Overloads" section.

![Documentation for `Console.WriteLine()` that shows multiple overloads for the method.](/images/c-sharp/Section_One/overloaded-methods-on-MS-docs.png)
