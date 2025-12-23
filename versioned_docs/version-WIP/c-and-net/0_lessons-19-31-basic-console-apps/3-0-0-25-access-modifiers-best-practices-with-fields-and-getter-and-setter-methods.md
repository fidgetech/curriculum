---
title: "📓 5.0.0.25 Access Modifiers, Best Practices with Fields, and Getter and Setter Methods"
day: weekend
id: 5-0-0-25-access-modifiers-best-practices-with-fields-and-getter-and-setter-methods
hide_table_of_contents: true
---

At this point we've completed the business logic functionality that we need to create a Shape Tracker app that functions the same as our JS version. However, there's a bit more C# basics that we need to learn and apply to our `Triangle` model before moving onto our user interface logic. 

In this lesson, we're going to learn about best practices with **fields** and the access level we set for them. As we'll soon learn, it is NOT considered best practice to give fields a `public` level of access. We'll learn why, and how we'll need to create  **"getter" and "setter" methods** for our fields.

Before we jump in, we're going to learn a bit more about other access level modifiers and how to use them. 

## Access Level Modifiers
---

Access level modifiers, also called **access modifiers**, are applied to classes and any class member, and they control how the class or class member can be accessed within or outside of an assembly.

There's some new terminology here:

* A **class member** is any field, method, or constructor declared within a class.
* An **assembly** is one or more executable output files created after we compile our code with the command `dotnet build`. Assembly files end in `.dll` or `.exe` (depending on your operating system), and we can find these files in our project's `bin` folder. The projects we create will have a varying number of files in each assembly, and we don't need to worry about keeping track of them.

In other words, access level modifiers control the **visibility** of a class or class member: the degree to which a class or class member can be seen. For example, if a field is private, it can only be seen within the class. If a field is public, it can be seen anywhere in the application. 

We're familiar with the access modifier `public`, but there are many others, all of which control how a class or class member is accessed. To get to know these other access modifiers, let's borrow a helpful table from [the Microsoft (MS) Docs](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers):

![Table of access modifiers and how they restrict (or not) access to the class or class member.](/images/c-sharp/prework/access-modifier-table.png)

Horizontally across the top of the table, the access modifiers are listed as each column's name:

* `public`
* `protected internal`
* `protected`
* `internal`
* `private protected`
* `private`

The left-most column lists **the caller's location**, which means from where we are trying to access the class or class member. 

For example, if our `Triangle()` constructor is set to `private`, we won't be able to call on it in `Program.cs` to create new `Triangle` objects. The caller location in this example is `Program.cs`, and because the `Triangle()` constructor is `private`, that means the constructor can only be accessed from within its own class. 

The other unfamiliar term that we should learn about is a **derived class**, which is a class that inherits from another class. We'll learn how to create a derived class when we learn about inheritance a bit later on, so don't worry about this concept for now.

**While there are quite a few access modifiers, we'll stick to using just three:**

* `internal` is the **default access modifier** when none is specified. Right now in our Shape Tracker app we don't have an access modifier declared for our `Program` class or its `Main()` method. That means `Program` and `Main()` automatically are given an `internal` access level, which means they can only be used within the Shape Tracker assembly.
* `public` is the access modifier that allows us to access the class or class member from anywhere: in our assembly or from another assembly. Later on, we'll create another assembly when we create new folder and files for testing our business logic. Since we'll need to access the `Triangle` class from our testing assembly, we need `Triangle` to have the `public` access modifier. Typically, we won't be keeping track of our assemblies much at all. The important thing to understand is that **`public` gives the greatest level of access and that we'll make our business logic classes `public` in order to test them**. (We'll revisit this topic later when we start testing.)
* `private` is the access modifier that only allows access to the class or class member from within the class itself.

## Best Practices with Fields
---

**The best practice for class fields is to set them to private.** Why? When we make a field public it means any method anywhere could change the field of an object, and this leads to code that isn't very secure or scalable.

When we declare fields `private` instead of `public`, this means only code within the class can directly access these fields. Any code outside the class will not have this access. This is far more secure and considered best practice. 

However, when we make our fields private, it prevents us from being able to directly set or retrieve fields from outside of the class with object notation like this: 

```csharp
testTriangle.Side1;
```

This is a bit awkward... the best practice dictates that the field should be private to the class, and yet we need to access the field from outside of the class! More than awkward, this seems unmanageable!

Well there are special methods we can create to access or alter object fields _without_ breaking these rules. These methods are called **getters and setters**. We'll discuss these in a moment. First, let's update our `Triangle` class to follow best practices and see how this breaks our code.

Here's how we'll update the `Triangle` class:

<div class="filename">Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models 
{
  public class Triangle 
  {
    private int _side1;  // updated
    private int _side2;  // updated
    private int _side3;  // updated

    public Triangle(int length1, int length2, int length3) 
    {
      _side1 = length1;  // updated
      _side2 = length2;  // updated
      _side3 = length3;  // updated
    }

    public string CheckType() 
    {
      // Updated fields within the CheckType() method:
      if ((_side1 > (_side2 + _side3)) || (_side2 > (_side1 + _side3)) || (_side3 > (_side1 + _side2)))
      {
        return "not a triangle";
      } 
      else if ((_side1 != _side2) && ((_side1 != _side3)) && ((_side2 != _side3))) 
      {
        return "scalene triangle";
      }  
      else if ((_side1 == _side2) && (_side1 == _side3)) 
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

We've updated all of our fields to have the `private` access modifier. 

We've also updated our private fields to follow **a new convention**: private and internal fields follow lower camel case and are preceded by an `_` underscore. For example, the public field `Side1` is now the private field `_side1`.  This naming convention exists in order to easily distinguish public and private/internal fields.

Now let's run our project and see what happens. Run `dotnet run` in the `ShapeTracker` project directory.

As predicted, we'll get a wall of compiler errors:

<pre>
<code style="color:red">
/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/Program.cs(11,67): error CS0122: 'Triangle.Side1' is inaccessible due to its protection level [/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/ShapeTracker.csproj]
/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/Program.cs(12,67): error CS0122: 'Triangle.Side2' is inaccessible due to its protection level [/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/ShapeTracker.csproj]
/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/Program.cs(13,69): error CS0122: 'Triangle.Side3' is inaccessible due to its protection level [/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/ShapeTracker.csproj]

The build failed. Fix the build errors and run again.
</code>
</pre>

We're getting one error message for each of our private fields. The error message in each is the same: when we try to access the field in `Program.cs` we cannot, due to the field's protection level.

Now, let's work on our solution: adding "getter" and "setter" methods.

## Creating Getter and Setter Methods
---

Both getters and setters are public methods that allow us to get and set information from outside of the private field's class. As their names imply, **getters** are methods that "get" information and **setters** are methods that "set" information. Let's see what this looks like. 

### Getter Methods

Let's add a getter method for each of our fields. We can put these anywhere in our class, and we'll put them just about the triangle's `CheckType()` method:

<div class="filename">Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models 
{
  public class Triangle 
  {
    private int _side1;
    private int _side2;
    private int _side3;

    public Triangle(int length1, int length2, int length3) 
    {
      _side1 = length1;
      _side2 = length2;
      _side3 = length3;
    }

    public int GetSide1()
    {
      return _side1;
    }

    public int GetSide2()
    {
      return _side2;
    }

    public int GetSide3()
    {
      return _side3;
    }

    public string CheckType() 
    {
      ... // omitted for brevity
    }
  }
}
```

We've added three public getter methods, one for each of our private fields: `GetSide1()`, `GetSide2()`, and `GetSide3`. These methods are the same as any other, except that they follow a specific **naming convention**: `Get` + `NameOfField` in Pascal case. 

As we can see, these getter methods only handle returning the field. However, we could update these methods to do more actions than just return the field. In this way, we have control over how the data for each field is returned. 

Finally, note that we don't have to create a getter method for every private field. If we don't need to access the field publicly, then we really don't need to create a getter method for it. Getter methods should be created on an as-needed basis.

Now that we have our getter methods, we need to update our UI logic in `Program.cs` to use them. Here's how we'll update the `Main()` method:

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
      Console.WriteLine($"Side one of the triangle: {testTriangle.GetSide1()}");
      Console.WriteLine($"Side two of the triangle: {testTriangle.GetSide2()}");
      Console.WriteLine($"Side three of the triangle: {testTriangle.GetSide3()}");
      Console.WriteLine("Want to know what type of triangle you have?");
      Console.WriteLine("Calculating...");
      Console.WriteLine($"Your triangle is: {testTriangle.CheckType()}.");
    }
  }
}
```

Instead of access our triangle's sides like so:

```
testTriangle.Side1
testTriangle.Side2
testTriangle.Side3
```

We now call our getter methods:

```
testTriangle.GetSide1()
testTriangle.GetSide2()
testTriangle.GetSide3()
```

### Setter Methods

Our simple triangle functionality doesn't really need the ability to change the value of a side, but we'll add it in to practice with setter methods. 

We'll add new setter methods just below our getter methods. Here's the updated `Triangle.cs`:

<div class="filename">Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models 
{
  public class Triangle 
  {
    private int _side1;
    private int _side2;
    private int _side3;

    public Triangle(int length1, int length2, int length3) 
    {
      _side1 = length1;
      _side2 = length2;
      _side3 = length3;
    }

    ... // getter methods omitted for brevity

    public void SetSide1(int newSide)
    {
      _side1 = newSide;
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
  }
}
```

In each of our setter methods:

* We return nothing, so we list our return type as `void`.
* We follow a specific **naming convention**: `Set` + `NameOfField` in Pascal case.
* We include a parameter for the new value that we want to assign to the field.
* We perform the assignment within the body of the method.

Take note again that we could update these methods to do more actions than just assign the value of the parameter to the field. For example, we could check if the parameter value meets certain requirements before assigning it as the value of our field. In this way, we have control over how the data for each field is set. 

Finally, remember that we don't have to create a setter method if we don't need it. In other words, only create a setter method if you need to set the value of the private field outside of the class it belongs to.

Now let's try using our new setter method in our UI logic in `Program.cs`:

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
      Console.WriteLine($"Side one of the triangle: {testTriangle.GetSide1()}");
      Console.WriteLine($"Side two of the triangle: {testTriangle.GetSide2()}");
      Console.WriteLine($"Side three of the triangle: {testTriangle.GetSide3()}");
      Console.WriteLine("Want to know what type of triangle you have?");
      Console.WriteLine("Calculating...");
      Console.WriteLine($"Your triangle is: {testTriangle.CheckType()}.");
      Console.WriteLine("Updating...");
      testTriangle.SetSide1(44);
      testTriangle.SetSide2(44);
      testTriangle.SetSide3(70);
      Console.WriteLine($"Actually, I've just changed the values of your triangle's sides to {testTriangle.GetSide1()}, {testTriangle.GetSide2()}, and {testTriangle.GetSide3()}.");
      Console.WriteLine($"Now your triangle is: {testTriangle.CheckType()}.");
    }
  }
}
```

The terminal output from running the above code should look like this:

```
Side one of the triangle: 3
Side two of the triangle: 4
Side three of the triangle: 5
Want to know what type of triangle you have?
Calculating...
Your triangle is: scalene triangle.
Updating...
Actually, I've just changed the values of your triangle's sides to 44, 44, and 70.
Now your triangle is: isosceles triangle.
```

## Summary
---

It is considered best practice to make class fields private so that we can secure our code by controlling where it can be accessed. 

When class fields are set to private, we need to create public getter and setter methods as needed to enable access to the fields outside of the class. As their names imply, getters are methods that "get" information and setters are methods that "set" information.

Conventions:

* The variable names for private (and internal) fields are written in lower camel case and prefixed with an `_` underscore. For example: `_myPrivateField`.
* Getter methods follow the naming convention: `Get` + `NameOfField` in Pascal case. 
* Setter methods follow the naming convention: `Set` + `NameOfField` in Pascal case. 

**From this point forward, all class fields should be `private` and getter and setter methods should be defined as needed.**

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for Shape Tracker: `3_encapsulating_fields`](https://github.com/epicodus-lessons/prework-shape-tracker-csharp-net6/tree/3_encapsulating_fields)**
