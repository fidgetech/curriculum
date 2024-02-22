---
title: "📓 3.1.2.4 APIE: Polymorphism"
day: tuesday
id: 3-1-2-4-apie-polymorphism
hide_table_of_contents: true
---

We have one last principle of Object-Oriented Programming (OOP) to learn about: polymorphism! As a reminder, polymorphism is one of four principles of OOP that we can remember by the easy acronym **APIE**: 

* **A**bstraction
* **P**olymorphism
* **I**nheritance
* **E**ncapsulation

The word "polymorphism" comes from Greek and it means "many forms". In terms of programming, **polymorphism** happens when an object or method has multiple forms, but is identified by the same name.

## Polymorphism
---

Let's start with an example. What follows is a `Triangle` class adapted from our Shape Tracker app. This `Triangle` class has an overloaded constructor so that we can create a `Triangle` object with a single value, or we can create a `Triangle` object with three values, one for each side:

```csharp
public class Triangle
{
  // Auto-Implemented Properties
  public int Side1 { get; set; }
  public int Side2 { get; set; }
  private int Side3 { get; set; }

  public Triangle(int length)
  {
    Side1 = length;
    Side2 = length;
    Side3 = length;
  }

  public Triangle(int length1, int length2, int length3)
  {
    Side1 = length1;
    Side2 = length2;
    Side3 = length3;
  }
}
```

When we use an overloaded constructor, we're using polymorphism: we have two different `Triangle()` methods, with just one name, but with two different behaviors. 

More specifically, this is called **compile-time polymorphism**, because the compiler will sort out which `Triangle()` method to use. So, when we call the following `Triangle()` method:

```csharp
class Program
{
  static void Main()
  {
    Triangle tri = new Triangle(3);
  }
}
```

The compiler will first search for the `Triangle` class constructor methods, and then determine which is the correct version to use; if the compiler can't find one, it will throw an error. 

And that's as simple as it gets: polymorphism happens when an object or method has multiple forms and behaviors.

There's also **run-time polymorphism** in which the exact object type or method to run is determined when our program is running. Let's look at an example.

This next example will build on the previous example and involve inheritance:

```csharp
public class Shape
{
  public virtual int CalculateArea()
  {
    return 0;
  }
}

public class Triangle : Shape
{
  // Auto-Implemented Properties
  public int Side1 { get; set; }
  public int Side2 { get; set; }
  private int Side3 { get; set; }

  public Triangle(int length)
  {
    Side1 = length;
    Side2 = length;
    Side3 = length;
  }

  public Triangle(int length1, int length2, int length3)
  {
    Side1 = length1;
    Side2 = length2;
    Side3 = length3;
  }

  public override int CalculateArea()
  {
    return Side1 * Side2 * Side3;
  }
}
```

Now we've created a new `Shape` class that extends the `Triangle` class, giving it access to the `virtual CalculateArea()` method. 

Within the `Triangle` class, we've overridden the same `CalculateArea()` method. Based on what we learned in the previous lesson about the `override` modifier, we know it allows us to declare a new value for an inherited `virtual` method, and this is exactly what we're doing.

Now, when we invoke `shp.CalculateArea();` in the following code, do you think it will return `8` or `0`? Take a moment to review the code and make a guess. Notice that we create a new `Triangle` object, then a new `Shape` object that is assigned `tri`, the original `Triangle` object, as a value.

```csharp
class Program
{
  static void Main()
  {
    Triangle tri = new Triangle(2);
    Shape shp = tri;
    int area = shp.CalculateArea();
    // Will 'area' be equal to 8 or 0?
    System.Console.WriteLine(area);
  }
}
```

Determining whether `shp.CalculateArea()` should invoke the `Triangle.CalculateArea()` method and return `8`, or the `Shape.CalculateArea()` method and return `0`, is an example of polymorphism. Specifically, this is an example of run-time polymorphism, where exactly which method should be called is determined while our program is running. 

When we run the above code, we'll get `8` returned to us. That's because while our program is running it determined that the `Triangle.CalculateArea()` method has overridden the `Shape.CalculateArea()` method and because of this, the `Triangle.CalculateArea()` method takes precedence. 

If we did not want the original `Shape.CalculateArea()` method to be overridden, we can update our `Triangle.CalculateArea()` method declaration to use the `new` modifier to indicate that it is a new method that is separate from the inherited `Shape.CalculateArea()` method:

```csharp
public class Triangle : Shape
{
  ... // other logic

  public new int CalculateArea()
  {
    return Side1 * Side2 * Side3;
  }
}
```

Now if we re-run our program code, as-is, without making any addditional changes:

```csharp
class Program
{
  static void Main()
  {
    Triangle tri = new Triangle(2);
    Shape shp = tri;
    int area = shp.CalculateArea();
    System.Console.WriteLine(area);
  }
}
```

We'll get `0` returned to us, because at run time our program has determined that the `shp.CalculateArea()` is in fact invoking the base class `Shape.CalculateArea()`. This is happening because the `Triangle.CalculateArea()` method is declared as `new` and no longer overrides the base class `Shape.CalculateArea()` method.

Is this a little confusing? Well, that's not unexpected with polymorphism since it is all about dealing with an object or method that has multiple forms, but is identified by the same name. Fortunately, it's unlikely that you'll encounter code like we saw in the last example of run time polymorphism, as it is a contrived example. As long as you structure inheritance intentionally in your apps and write tests for your code, any errors that arise from polymorphism will get identified quickly, and you'll be able to resolve those errors just as quickly. 

Remember that **you are not required to use polymorphism for this section's independent project.** As always, we encourage you to experiment with it and try it in your code if possible.
