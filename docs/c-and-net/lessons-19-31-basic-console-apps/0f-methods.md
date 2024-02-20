---
title: "\U0001F4D3 3.0.0.24 Class Methods"
id: 30024-class-methods
slug: 30024-class-methods
hide_table_of_contents: true
sidebar_position: 6
day: weekend
type: lesson
url: 'https://github.com/fidgetech/c-and-net/blob/main/0f_methods.md'
---

In this lesson, we'll add a method that determines what type of triangle we have: isosceles, equilateral, scalene, or not a triangle. The logic in this method will be an exact copy from the Shape Tracker logic we created in JavaScript, only it will be written in C# with C# indentation and spacing. If you want to check out the JS before proceeding, [visit this link here](https://github.com/epicodus-lessons/section-5-shape-tracker/blob/3_multiple_business_logic_files/src/js/triangle.js).

## Class Methods
---

Any C# class method needs a name and a return type. Parameters and access level modifiers are optional. (We'll learn about access level modifiers in the next lesson.)

Let's add a first draft of a new `CheckType` method to `Triangle.cs` now:

<div class="filename">Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models 
{
  public class Triangle 
  {
    public int Side1;
    public int Side2;
    public int Side3;

    public Triangle(int length1, int length2, int length3) 
    {
      Side1 = length1;
      Side2 = length2;
      Side3 = length3;
    }

    public string CheckType() 
    {
      return "I can't answer that yet";
    }
  }
}
```

Here are the parts to our method:

* `public` is the access level modifier which determines where in the application our method can be accessed.
* `string` is the return type of our method. Specifying the type of the return value is a requirement of C# as a strictly-typed language. If there is no return value for a method we list `void`, which means "nothing".
* `CheckType` is the name of our method. Methods are always named in Pascal case. 
* Any parameters go between the parens `()` following the method name.
* Between the two curly braces `{ }` is the body of our method — any code that we want the method to run.  

## Calling a Class Method
---

Let's see how we can call the `CheckType()` method. Here's how we'll update our UI logic in `Program.cs`:

<div class="filename">Program.cs</div>

```csharp
using System;
using ShapeTracker.Models;

namespace ShapeTracker
{
  class Program
  {
    static void Main()
    {
      Triangle testTriangle = new Triangle(3,4,5);
      Console.WriteLine($"Side one of the triangle: {testTriangle.Side1}");
      Console.WriteLine($"Side two of the triangle: {testTriangle.Side2}");
      Console.WriteLine($"Side three of the triangle: {testTriangle.Side3}");
      Console.WriteLine("Want to know what type of triangle you have?");
      Console.WriteLine("Calculating...");
      Console.WriteLine($"Your triangle is: {testTriangle.CheckType()}.");
    }
  }
}
```

The `CheckType()` method is an **instance method** so we need to call it on an instance of the `Triangle` class, which is exactly what the variable `testTriangle` is. 

If we run our code, we'll see new terminal output:

```
Side one of the triangle: 3
Side two of the triangle: 4
Side three of the triangle: 5
Want to know what type of triangle you have?
Calculating...
Your triangle is: I can't answer that yet.
```

## Updating `CheckType()` Logic
---

Now, let's update the logic within `CheckType()` to actually return the different values: isosceles, scalene, equilateral, or not a triangle.

<div class="filename">Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models 
{
  public class Triangle 
  {
    public int Side1;
    public int Side2;
    public int Side3;

    public Triangle(int length1, int length2, int length3) 
    {
      Side1 = length1;
      Side2 = length2;
      Side3 = length3;
    }

    public string CheckType() 
    {
      if ((Side1 > (Side2 + Side3)) || (Side2 > (Side1 + Side3)) || (Side3 > (Side1 + Side2)))
      {
        return "not a triangle";
      } 
      else if ((Side1 != Side2) && ((Side1 != Side3)) && ((Side2 != Side3))) 
      {
        return "scalene triangle";
      }  
      else if ((Side1 == Side2) && (Side1 == Side3)) 
      {
        return "equilateral triangle";
      } 
      else 
      {
        return "isosceles triangle";
      }
    }
  }
}
```

Again, the triangle-calculating logic is the same as in our JavaScript Shape Tracker, so we won't go over it in detail now. The main difference in the logic is the indentation with each curly bracket and `if`/`else if`/`else` statement on new lines.

It's time to test out our console app. Try inputting different values to the constructor to test out all of the possible results from the `CheckType()` method.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for Shape Tracker: `2_basic_triangle_class`](https://github.com/epicodus-lessons/prework-shape-tracker-csharp-net6/tree/2_basic_triangle_class)**