---
title: "\U0001F4D3 3.0.0.27 Static Class Members"
id: 30027-static-class-members
slug: 30027-static-class-members
hide_table_of_contents: true
sidebar_position: 9
day: weekend
type: lesson
url: 'https://github.com/fidgetech/c-and-net/blob/main/0i_static_class_members.md'
---

We've learned how to create and call **instance** class members, which are called on an object of a specific type. We also learned how to call built-in **static** methods, which are called on the class, like `Console.WriteLine()`. In this lesson, we'll complete our practice with static and instance class members by adding a static field and method to our `Triangle` class. Since we'll continue to make our fields private and expose public methods to access the fields, this will be another example of encapsulation.

When we create a static field or method, it should contain data or perform functionality that's relevant to the entire class. Alternatively we might design a class that only has static members, because there's no need to ever create an instance of the class; a good example of this is [the `Math` class](https://learn.microsoft.com/en-us/dotnet/api/system.math?view=net-6.0).

We do want to create instances of the `Triangle` class, so we'll want to create a field or method that's relevant to the entire class. Given these goals, let's create a new field called `_instances` that will hold a list of all `Triangle` objects ever created, and two methods that will allow us to access and clear the list.

Let's get into it!

## Static Field
---

To create a static field, we simply need to use the `static` keyword. Here's how we'll create our new `_instances` field:

<div class="filename">Models/Triangle.cs</div>

```csharp
using System.Collections.Generic; // new using directive

namespace ShapeTracker.Models 
{
  public class Triangle 
  {
    private int _side1;
    private int _side2;
    private int _side3;
    private static List<Triangle> _instances = new List<Triangle> {};

    ... // other code omitted for brevity
  }
}
```

First notice that we've added a new using directive for the namespace `System.Collections.Generic`. The class `List<T>` lives inside the `System.Collections.Generic` namespace, so we need to make sure to import the namespace into our file before we can use `List<T>`. 

Next, notice our new field `_instances`. We declare `_instances` as `private` and `static` and we give it a type of `List<Triangle>` (a list of triangle objects). 

We then use the assignment operator `=` to give `_instances` an initial value of an empty list of triangle objects. 

Next, let's update our constructor to add new triangle objects directly to our static list.

## Updating the Constructor
---

We can use the keyword `this` within our constructor to reference the object instance that's being created. Let's see how this works:

<div class="filename">Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models 
{
  public class Triangle 
  {
    private int _side1;
    private int _side2;
    private int _side3;
    private static List<Triangle> _instances = new List<Triangle> {};

    public Triangle(int length1, int length2, int length3) 
    {
      _side1 = length1;
      _side2 = length2;
      _side3 = length3;
      _instance.Add(this);  // new code
    }

    ... // other code omitted for brevity
  }
}
```

First of all, we call [the built in `List<T>.Add()` method](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1.add?view=net-6.0) to add a new element to our list. The argument we pass into the `Add()` method is `this`, the special keyword that represents the object instance that's being created. To learn more about `this` and other ways we can use it, [visit the MS docs](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/this).

## Static Method
---

At this point we have the code in place to populate our list, but we still do not have any tools to access or manage the list outside of our class. So let's do just that. We'll create two public and static methods, one that acts as a getter, and the other that acts as a setter. 

### `Triangle.GetAll()`

We'll name our static getter method `Triangle.GetAll()` and it will return `_instances`, our list of triangle objects. Here's the new method that we'll add at the end of our file:

<div class="filename">Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models 
{
  public class Triangle 
  {
    private int _side1;
    private int _side2;
    private int _side3;
    private static List<Triangle> _instances = new List<Triangle> {};

    public Triangle(int length1, int length2, int length3) 
    {
      _side1 = length1;
      _side2 = length2;
      _side3 = length3;
      _instance.Add(this);  // new code
    }

    ... // other code omitted for brevity

    public static List<Triangle> GetAll()
    {
      return _instances;
    }
  }
}
```

This looks like other getter methods we've created, with two differences:

* We've included the `static` keyword to make this a static method called on the class.
* We're not following the getter naming convention of `Get` + `NameOfField` in Pascal case. Instead of `GetInstances`, we're using the shortened name `GetAll`. Variations like this are fine so long as your code is easy to understand.

### `Triangle.ClearAll()`

Next, let's create a static setter method called `Triangle.ClearAll()`. As the name implies, this method will clear all triangle objects from our list.

Here's the new method that we'll add below the `GetAll()` method:

<div class="filename">Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models 
{
  public class Triangle 
  {
    private int _side1;
    private int _side2;
    private int _side3;
    private static List<Triangle> _instances = new List<Triangle> {};

    public Triangle(int length1, int length2, int length3) 
    {
      _side1 = length1;
      _side2 = length2;
      _side3 = length3;
      _instance.Add(this);  // new code
    }

    ... // other code omitted for brevity

    public static List<Triangle> GetAll()
    {
      return _instances;
    }

    public static void ClearAll()
    {
      _instances.Clear();
    }
  }
}
```

Since we don't return anything we specify `void` in the `ClearAll()` method signature.

Within the method body, we call on [the built in `List<T>.Clear()` method](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1.clear?view=net-6.0).

## Using Static Methods
---

Now we're ready to put our new methods into practice. In `Program.cs`, let's update the UI logic within the `Main()` method to show the contents of `_instances` after we create two  triangle objects.

<div class="filename">Program.cs</div>

```csharp
using System;
using ShapeTracker.Models;
using System.Collections.Generic;  // new using directive!

namespace ShapeTracker
{
  class Program
  {
    static void Main()
    {
      List<Triangle> allTriangles = Triangle.GetAll();
      Triangle testTriangle = new Triangle(3,4,5);
      Triangle secondTriangle = new Triangle(32,74,75);
      if (allTriangles.Count == 0)
      {
        Console.WriteLine("There are no triangles!");
      }
      else
      {
        Console.WriteLine("----------------------------------");
        foreach (Triangle tri in allTriangles)
        {
          Console.WriteLine($"Side one of the triangle: {tri.GetSide1()}");
          Console.WriteLine($"Side two of the triangle: {tri.GetSide2()}");
          Console.WriteLine($"Side three of the triangle: {tri.GetSide3()}");
          Console.WriteLine("----------------------------------");
        }
      }
    }
  }
}
```

Our user interface logic is a bit more complicated than before, because we're now using branching and a foreach loop. Let's discuss the changes.

Towards the top of the file:

* Since our new UI logic uses the `List<T>` type, the very first update we make is adding a new using directive for the namespace `System.Collections.Generic;`.

Within the `Main()` method:

* First we call the static `Triangle.GetAll()` method to get our static list of triangle objects. There won't be any triangles in it at this point, but that doesn't matter because the value of the `allTriangles` variable will update as we create new triangles. 
* Next, we create two new triangle instances.
* Then, we run our code through a conditional: 
  * In the `if` statement, we check if our list of triangles is empty, and if so, we show a message saying "There are no triangles!".
  * In the `else` statement, we handle all other cases, that is, when there are triangles in our list. If there are triangles, then we loop through the list and print information about each triangle. 

The output of the new UI logic will look like this:

```
You have triangles!
----------------------------------
Side one of the triangle: 3
Side two of the triangle: 4
Side three of the triangle: 5
----------------------------------
Side one of the triangle: 32
Side two of the triangle: 74
Side three of the triangle: 75
----------------------------------
```

We can update our UI logic to clear the triangles before our `if` statement using the `Triangle.ClearAll()` method:

<div class="filename">Program.cs</div>

```csharp
using System;
using ShapeTracker.Models;
using System.Collections.Generic;

namespace ShapeTracker
{
  class Program
  {
    static void Main()
    {
      List<Triangle> allTriangles = Triangle.GetAll();
      Triangle testTriangle = new Triangle(3,4,5);
      Triangle secondTriangle = new Triangle(32,74,75);
      // new code below!!
      Triangle.ClearAll();
      // new code above!!   
      if (allTriangles.Count == 0)
      {
        Console.WriteLine("There are no triangles!");
      }
      else
      {
        Console.WriteLine("----------------------------------");
        foreach (Triangle tri in allTriangles)
        {
          Console.WriteLine($"Side one of the triangle: {tri.GetSide1()}");
          Console.WriteLine($"Side two of the triangle: {tri.GetSide2()}");
          Console.WriteLine($"Side three of the triangle: {tri.GetSide3()}");
          Console.WriteLine("----------------------------------");
        }
      }
    }
  }
}
```

If we do that the terminal output will let us know:

```
There are no triangles!
```

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for Shape Tracker: `4_static_class_members`](https://github.com/epicodus-lessons/prework-shape-tracker-csharp-net6/tree/4_static_class_members)**