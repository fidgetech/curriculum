---
title: "📓 3.0.0.29 Simplifying Business Logic with Properties"
day: weekend
---

We're going to learn about an important concept in this lesson: C# properties. Yes, _properties!_ These do in fact exist in C#, but they are nothing like JavaScript properties. 

## C# Properties: A Shortcut to Writing Getter and Setter Methods
---

In C#, a property is a mechanism that we can add to our classes to read, write, and compute the value of class fields. By "mechanism" we really mean that properties are a special type of public method that allows us to access class fields; however, properties do NOT look like typical methods and instead have special syntax.

If properties are special methods that allow us to access our class's fields, why do we need them? We already have our getter and setter methods that do just that! The short answer is that properties are a syntactic shortcut to creating public getter and setter methods.

Let's refactor our Shape Tracker `Triangle` logic to use a property. To do this we're going to do three things:

* Remove the getter and setter methods for our private `_side1` field. We'll only change one field to use a property and leave the rest as they are.
* Add in a property that corresponds to the `_side1` field.
* Update our UI logic in `Program.cs` to use the property.

Let's start by removing the getters and setters for `_side1`. This is what our updated `Triangle.cs` should look like (with some code omitted for brevity):

<div class="filename">Models/Triangle.cs</div>

```csharp
using System.Collections.Generic;

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
      ... // omitted for brevity
    }

    public int GetSide2()
    {
      return _side2;
    }

    public int GetSide3()
    {
      return _side3;
    }

    public void SetSide2(int newSide)
    {
      _side2 = newSide;
    }

    public void SetSide3(int newSide)
    {
      _side3 = newSide;
    }

    public string CheckType() 
    {
      ... // omitted for brevity
    }

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

Next, we'll add a property for the `_side1` field:

<div class="filename">Models/Triangle.cs</div>

```csharp
using System.Collections.Generic;

namespace ShapeTracker.Models 
{
  public class Triangle 
  {
    private int _side1;
    // new code below!
    public int Side1
    {
      get { return _side1; }
      set { _side1 = value; }
    }
    // new code above!
    private int _side2;
    private int _side3;
    private static List<Triangle> _instances = new List<Triangle> {};

    public Triangle(int length1, int length2, int length3) 
    {
      ... // omitted for brevity
    }

    ... // omitted for brevity
  }
}
```

Our property is called `Side1`, using Pascal case. Our property's type and name matches the type and name of its corresponding field. These values don't have to match, though it is most typical that they do. 

Our property is listed as `public` so that we can access it outside of the class.

Unlike typical methods, properties don't have parens. They do however have curly brackets within which we define how our property should access its corresponding field (what we might call the method body). We use special keywords `get` and `set` to define getter and setter actions:

* Within `get` we simply return the private field `_side1`. 
* Within `set` we assigned the private field `_side1` to a new value, represented by another special keyword `value`.

To better understand how the `Side1` property provides getter and setter action, let's see an example of how we would use `Side1` to access the private field `_side1`:

```csharp
Triangle myTri = new Triangle(4,55,6);
myTri.Side1;
// returns 4
myTri.Side1 = 12;
myTri.Side1;
// returns 12
```

As we can see, the syntax to access or update the value of a public property looks the exact same as when we access or update a public field. While they look the same, it's in fact very different. The big difference in this case is that we're using a public property that allows us to access a private field, which means we're adhering to the best practice of encapsulation. Remember — we use **encapsulation** when we hide the internal state and functionality of an object (like making fields private) and only allow access through a public set of methods (like getter and setter methods).

The last task we need to do to complete our refactor to using a property is updating `Program.cs`:

* All instances of `tri.SetSide1(stringNumber1)` need to be updated to `tri.Side1 = stringNumber1`.
* All instances of `tri.GetSide1()` need to be updated to `tri.Side1`.

Here is what our updated `Program.cs` should look like (with some code omitted for brevity):

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
      ... // code omitted for brevity
    }

    static void ConfirmOrEditTriangle(Triangle tri)
    {
      Console.WriteLine("Please confirm that you entered in your triangle correctly:");
      // updated code below!!
      Console.WriteLine($"Side 1 has a length of {tri.Side1}."); 
      Console.WriteLine($"Side 2 has a length of {tri.GetSide2()}.");
      Console.WriteLine($"Side 3 has a length of {tri.GetSide3()}.");
      Console.WriteLine("Is that correct? Enter 'yes' to proceed, or 'no' to re-enter the triangle's sides");
      string userInput = Console.ReadLine();  
      if (userInput == "yes")
      {
        CheckTriangleType(tri);
      }
      else
      {
        Console.WriteLine("Let's fix your triangle. Please enter the 3 sides again!");
        Console.WriteLine("Please enter a number:");
        string stringNumber1 = Console.ReadLine();  
        Console.WriteLine("Enter another number:");
        string stringNumber2 = Console.ReadLine();  
        Console.WriteLine("Enter a third number:");
        string stringNumber3 = Console.ReadLine(); 
        // updated code below!! 
        tri.Side1 = int.Parse(stringNumber1); 
        tri.SetSide2(int.Parse(stringNumber2));  
        tri.SetSide3(int.Parse(stringNumber3)); 
        ConfirmOrEditTriangle(tri);
      }
    }

    static void CheckTriangleType(Triangle tri)
    {
      ... // code omitted for brevity
    }
  }
}
```

Note that we only had two locations to update within the `ConfirmOrEditTriangle()` method.

### A Few More Examples

Let's check out a few more examples of properties in order to get a good sense of how we can use them. Take a look at the following code, which uses a made up class not from the Shape Tracker project:

```csharp
class Cat
{
  private string _name;
  public string FullName
  {
    get { return _name; }
  }

  private int _age;
  public int Age
  {
    get 
    { 
      return _age; 
    }
    set 
    {
      if (value > 0)
      {
        _age = value; 
      }
    }
  }
}
```

The `Cat` class has two fields, `_name` and `_age`, which store a cat's name and age. We've set up a property for each field that shows us a few variations on how we can create properties:

* First, notice that we can name the property something other than the field, just like how the private field `_name` has a corresponding property called `FullName` (instead of `Name`, which would match the field).
* We can also choose to not create a `get` or `set` action. For example, the `_name` field only has a `get` action declared within the `FullName` property, so we won't be able to edit it.
* We can optionally create multi-line statements for our `get` and `set` actions. As we see within the `Age` property, the `set` action first checks if `value` is greater than `0`, and only in that case sets the value of the corresponding `_age` field. (The only thing missing in the `set` action is error handling when `value` is less than 1.)

## Auto-Implemented Properties: An Even Shorter Shortcut
---

We can implement all of the functionality of a private field and a public property in shorter syntax by using **auto-implemented properties**. An auto-implemented property does multiple things in one line of code:

* It creates a private field. (Yes, that's right!) 
* It creates a public property.
* It creates `get` and `set` actions to access the private field.

To understand how auto-implemented properties work, let's update our Shape Tracker's `Triangle` logic to use one. We'll update our private `_side2` field to use an auto-implemented property instead. To do this we're going to do a few things:

* Remove the getter and setter methods for our private `_side2` field.
* Remove the `_side2` field itself. 
* Add in an auto-implemented property called `Side2` that handles creating an implicit `_side2` field, as well as the usual `get` and `set` actions.
* Update the constructor and `CheckType()` method to reference the new `Side2` property.
* Update the UI logic in `Program.cs` to reference the new `Side2` property.

Let's start by removing the getter and setter methods for the `_side2` field and the `_side2` field itself. This is what our updated `Triangle.cs` should look like (with some code omitted for brevity):

<div class="filename">Models/Triangle.cs</div>

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
    private int _side3;
    private static List<Triangle> _instances = new List<Triangle> {};

    public Triangle(int length1, int length2, int length3) 
    {
      _side1 = length1;
      _side2 = length2;
      _side3 = length3;
      _instances.Add(this);
    }

    public int GetSide3()
    {
      return _side3;
    }

    public void SetSide3(int newSide)
    {
      _side3 = newSide;
    }

    public string CheckType() 
    {
      ... // omitted for brevity
    }

    ... // GetAll() and ClearAll() methods omitted for brevity

  }
}
```

Alright, we've removed the getter and setter for `_side2` as well as the field itself. 

Next, let's add in the new `Side2` auto-implemented property and update our constructor and `CheckType()` method to reference the new `Side2` property. Our new `Side2` auto-implemented property will look like this:

```csharp
public int Side2 { get; set; }
```

And here's how we'll update `Triangle.cs`, with some code omitted for brevity:

<div class="filename">Models/Triangle.cs</div>

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
    // new code below!
    public int Side2 { get; set; }
    // new code above!
    private int _side3;
    private static List<Triangle> _instances = new List<Triangle> {};

    public Triangle(int length1, int length2, int length3) 
    {
      _side1 = length1;
      Side2 = length2; // updated code!
      _side3 = length3;
      _instances.Add(this);
    }

    public int GetSide3()
    {
      return _side3;
    }

    public void SetSide3(int newSide)
    {
      _side3 = newSide;
    }

    // updated code in CheckType()
    public string CheckType() 
    {
      if ((_side1 > (Side2 + _side3)) || (Side2 > (_side1 + _side3)) || (_side3 > (_side1 + Side2)))
      {
        return "not a triangle";
      } 
      else if ((_side1 != Side2) && ((_side1 != _side3)) && ((Side2 != _side3))) 
      {
        return "scalene triangle";
      }  
      else if ((_side1 == Side2) && (_side1 == _side3)) 
      {
        return "equilateral triangle";
      } 
      else 
      {
        return "isosceles triangle";
      }
    }

    ... // GetAll() and ClearAll() methods omitted for brevity

  }
}
```

It may be a bit confusing or unexpected from the syntax, but the auto-implemented property `public int Side2 { get; set; }` does in fact create a private `_side2` field, only we can't see it because it's **implicit**. This means we are still following the best practices of encapsulation even with the extra short syntax of the auto-implemented property.

You may notice one drawback from using auto-implemented properties: we can only use them when we only want to implement standard `get` and `set` actions: 

* When `get` only returns the corresponding private field, without any manipulations. 
* When `set` only sets a new value for the corresponding private field, without performing any validations.

We do have the flexibility to not include a `get` or `set` action. For example, we could update `Side2` to allow it to be accessed, but not updated:

```csharp
public int Side2 { get; }
```

We can also optionally set an initial value for auto-implemented properties. That would look like this:

```csharp
public int Side2 { get; } = 12;
```

or like this, with a static list:

```csharp
public static List<Triangle> Instances { get; set; } = new List<Triangle> {};
```

The last step we need to complete in this refactor is to update the UI logic in `Program.cs` to reference the `Side2` auto-implemented property: 

* `tri.SetSide2(stringNumber2)` needs to be updated to `tri.Side2 = stringNumber2`.
* `tri.GetSide2()` needs to be updated to `tri.Side2`.

Here is what our updated `Program.cs` should look like (with some code omitted for brevity):

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
      ... // code omitted for brevity
    }

    static void ConfirmOrEditTriangle(Triangle tri)
    {
      Console.WriteLine("Please confirm that you entered in your triangle correctly:");
      Console.WriteLine($"Side 1 has a length of {tri.Side1}."); 
      // updated code below!!
      Console.WriteLine($"Side 2 has a length of {tri.Side2}.");
      Console.WriteLine($"Side 3 has a length of {tri.GetSide3()}.");
      Console.WriteLine("Is that correct? Enter 'yes' to proceed, or 'no' to re-enter the triangle's sides");
      string userInput = Console.ReadLine();  
      if (userInput == "yes")
      {
        CheckTriangleType(tri);
      }
      else
      {
        Console.WriteLine("Let's fix your triangle. Please enter the 3 sides again!");
        Console.WriteLine("Please enter a number:");
        string stringNumber1 = Console.ReadLine();  
        Console.WriteLine("Enter another number:");
        string stringNumber2 = Console.ReadLine();  
        Console.WriteLine("Enter a third number:");
        string stringNumber3 = Console.ReadLine(); 
        tri.Side1 = int.Parse(stringNumber1); 
        // updated code below!! 
        tri.Side2 = int.Parse(stringNumber2);  
        tri.SetSide3(int.Parse(stringNumber3)); 
        ConfirmOrEditTriangle(tri);
      }
    }

    static void CheckTriangleType(Triangle tri)
    {
      ... // code omitted for brevity
    }
  }
}
```

## Next Steps
---

In this course section, you should make a point to practice with all of the tools we learned thus far:

* Creating private fields with getter and setter methods.
* Creating private fields with public properties.
* Creating public auto-implemented properties. 

As the program continues, we'll primarily stick to using auto-implemented properties since they simplify our code, follow best practices, and we often will be needing standard `get` and `set` actions.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for Shape Tracker: `6_class_properties`](https://github.com/epicodus-lessons/prework-shape-tracker-csharp-net6/tree/6_class_properties)**
