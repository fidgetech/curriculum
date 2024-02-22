---
title: "📓 3.0.0.23 Class Fields and Constructors"
day: weekend
---

We know a lot about classes and namespaces at this point, but our Shape Tracker application doesn't do much at all. Let's update our `Triangle` class to have **fields** and a **constructor**. 

## Adding Fields
---

In JavaScript we often added properties to the objects we created. Well in C#, we add **fields**. In very simple terms, a C# field is exactly what a JavaScript property is. In more technical terms, a C# field is a variable of any type that is declared directly in a class.

Let's see what these look like.

<div class="filename">Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models 
{
  public class Triangle 
  {
    public int Side1;
    public int Side2 = 4;
    public int Side3;
  }
}
```

We've created three fields: `Side1`, `Side2`, and `Side3`. These are meant to hold the three integer values that we'll use to determine the type of a triangle.

As we can see, `Side1`, `Side2`, and `Side3` look like variables declared within a C# class. Well that's what a **field** is in C#. 

We can also describe these fields as **members** of the `Triangle` class, since they belong to the `Triangle` class.

Notice that `Side2` looks different from the other fields. That's because we've assigned `Side2` an **initial value** of `4`. We can give initial values to any class field we create.

Also notice the keyword `public`. This is one of many **access level modifiers**. As modifiers, keywords like `public` specify the level of protection this data has in our application. As `public`, our three fields can be accessed from anywhere in our application.

As far as naming conventions, **`public` fields should be in Pascal case**, or "UpperCamelCase". We are using `Side1`, but we could also use `SideOne`.

Let's look at that next — how to access these fields.

## Accessing Fields
---

Let's update our code in `Program.cs` to access one of these fields to get a sense of how that works. Update your code as follows:

<div class="filename">Program.cs</div>

```csharp
using System;
using ShapeTracker.Models;

namespace ShapeTracker
{
  public class Program
  {
    static void Main()
    {
      Triangle testTriangle = new Triangle();
      Console.WriteLine(testTriangle.GetType());
      // new code below
      testTriangle.Side1 = 65;
      testTriangle.Side3 = 88;
      Console.WriteLine($"Side one of the triangle: {testTriangle.Side1}");
      Console.WriteLine($"Side two of the triangle: {testTriangle.Side2}");
      Console.WriteLine($"Side three of the triangle: {testTriangle.Side3}");
    }
  }
}
```

The first two lines of the `Main()` method are the same. Below that is new code. 

Similar to JavaScript, we use **dot notation** to access fields, like `testTriangle.Side1`. Note that we cannot use brackets `[]` to access fields like we were able to with JavaScript properties. In C# brackets are used to apply indexing, like accessing an array element by its index location.

Take note that all of the fields we created are **instance fields**, which means that we access them on an instance of the `Triangle` class, specifically `testTriangle`, and not the class itself. 

Within the new `Console.WriteLine()` statements, notice that we're using string interpolation to combine strings with variables.

We can now run our program with `dotnet run` in the `ShapeTracker` project directory and we'll get the following output:

```
ShapeTracker.Models.Triangle
Side one of the triangle: 65
Side two of the triangle: 4
Side three of the triangle: 88
```

We now have a `Triangle` with three sides.

## Adding a Constructor
---

Let's improve our lives as developers and add a custom constructor that sets the values of the three sides when the triangle is created. 

A **constructor** is a method that is called when a new instance of a class is created. Any information regarding the initial setup of a new object can be included in a constructor.  

Here's how we'll update `Triangle.cs`:

<div class="filename">Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models 
{
  public class Triangle 
  {
    public int Side1;
    public int Side2; // no longer setting a default value
    public int Side3;

    public Triangle(int length1, int length2, int length3) 
    {
      Side1 = length1;
      Side2 = length2;
      Side3 = length3;
    }
  }
}
```

To create a class constructor, we simply need to define a method of the same name as the class.

The access modifier `public` means this method is available anywhere in our application.

Our constructor can take none or multiple parameters. Each of these parameters (`length1`, `length2`, and `length3`) correspond to the fields a `Triangle` object should have (`Side1`, `Side2`, `Side3`). We can see within the curly braces of the constructor method that we assign each parameter as the value of a field. 

Between the two curly braces `{ }` is the body of our constructor method — any code that we want the constructor to execute. Here, we're setting the values of our three fields, but we could perform other actions as well. 

Note that **the class's fields are in Pascal case while the constructor's parameters are lowerCamelCase.** That's because the parameters are variables.

## Using the Constructor
---

Constructors create new instances of a class when the `new` keyword is used. `new` denotes that we're creating a new instance of this class:

```csharp
Triangle coolTriangle = new Triangle(100, 010, 001);
```

When we call our constructor, we need to pass in an argument for each parameter, or else we'll get a compiler error. For example, if we put no arguments into our `Triangle()` constructor call, we'll get this error:

<pre>
<code style="color:red">
/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/Program.cs(10,35): error CS7036: There is no argument given that corresponds to the required formal parameter 'length1' of 'Triangle.Triangle(int, int, int)' [/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/ShapeTracker.csproj]

The build failed. Fix the build errors and run again.
</code>
</pre>

Let's update the user interface code in `Program.cs` to use the constructor we created:

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
    }
  }
}
```

Now when we run our console app, we'll get this output:

```
Side one of the triangle: 3
Side two of the triangle: 4
Side three of the triangle: 5
```

Up next, we'll add a method that determines what type of triangle we have: isosceles, equilateral, scalene, or not a triangle.
