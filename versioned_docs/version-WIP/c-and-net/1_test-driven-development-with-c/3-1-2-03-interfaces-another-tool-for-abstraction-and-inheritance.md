---
title: "📓 5.1.2.3 Interfaces: Another Tool for Abstraction and Inheritance"
day: tuesday
id: 5-1-2-3-interfaces-another-tool-for-abstraction-and-inheritance
hide_table_of_contents: true
---

In this lesson, we'll cover another important tool in C# and other strongly-typed languages: **interfaces**. We can think of an interface as a blueprint of things that must be included within any class that utilizes the interface. The interface doesn't actually care how these things are implemented — it only cares that they're included in the class.

## Interfaces
---

This is a tricky concept so we'll start with an example. 

Let's say we have an `IMotor` interface that includes an `OnSwitch()` method:

```csharp
interface IMotor
{
  string OnSwitch();
}
```

We could have a set of classes that inherit the `IMotor` interface such as `Radio`, `Television`, and `CoffeeMachine`. Now that they inherit from `IMotor`, each of these classes must have an `OnSwitch()` method. However, something different will happen in the `OnSwitch()` method of each of these classes: an instance of `Radio` will make music, an instance of `Television` will turn on the screen, and an instance of `CoffeeMachine` will start heating water. The `IMotor` interface doesn't care about any of that stuff as long as the `OnSwitch` method is included in the class.

Now let's look at a more concrete example. We've already been working with MSTest's `IDisposable` interface. We can add the `IDisposable` interface to a test class like this:

```csharp
public class TriangleTests : IDisposable
```

This is the syntax for extending a class with an interface:

```csharp
public class ClassToBeExtended : InterfaceToInclude
```

After the class, we use a `:` followed by the name of the interface that will extend the class.

Once `IDisposable` is added, we have access to a new method called `Dispose()`. This is because the `IDisposable` interface **extends** the functionality of the `TriangleTests` class by adding the `Dispose()` method to it. In other words, it gives our `TriangleTests` class more functionality.

However, the `Dispose()` method doesn't actually do much when we add it to our code. The method runs after each test, but we have to tell it what code to execute. For instance, we could add a `Triangle.ClearAll()` method to reset the value of our static variables. However, we could add any code we want to here. This is similar to the `OnSwitch()` method our `IMotor` interface provides.

What happens if we extend our `TriangleTests` class with `IDisposable` but don't actually add a `Dispose()` method? We'll get an error when we run our tests:

<code style={{color:"red"}}>
'TriangleTests' does not implement interface member 'IDisposable.Dispose()'
</code>

Once we extend our class with the `IDisposable` interface, we _must_ add a `Dispose()` method.

### Implementing an Interface and Naming Conventions

We can implement our own interfaces like this:

```csharp
interface IMotor
{
  string OnSwitch();
}
```

By convention, interface names begin with a capital `I`. 

Notice that we only define the name and return value of the `OnSwitch()` method, but nothing else. That's exactly what interfaces are meant to do: define the required functionality (to turn on), but not the exact implementation of the functionality (what's required to turn on the machine, or what happens as a result).

Finally, remember that interfaces can only include methods or properties, but not fields or [constants](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/constants). In this way, interfaces are always focused on describing behavior, but again, not the exact implementation of the behavior.

We use a `:` to extend a class with the `IMotor` interface:

```csharp
public class CoffeeMachine : IMotor
{
  public string OnSwitch()
  {
    return "Bubble bubble hiss.";
  }
}
```

As we can see in the code snippet above, when the `CoffeeMachine` class implements the `OnSwitch()` method it provides all of the implementation details: an access modifier and a body for the method.

Remember that any class that inherits from/extends the interface must implement all of the methods (or properties) inside of the interface. Because of this, interfaces are often described as contracts that the derived class must fulfill. 

### Inheriting from Multiple Interfaces and a Single Class

A class can inherit from multiple interfaces and a single class. Here's the syntax:

```csharp
public class Radio : BaseClass, IMotor, IPlayMusic
```

Notice that the base class `BaseClass` is listed first, before the two interfaces.

## Difference Between Abstract Classes and Interfaces
---

It may seem like abstract classes and interfaces are very similar. For example, neither abstract classes nor interfaces can be instantiated. Instead, other classes must extend or inherit their behavior. However, there are a number of key differences between the two. Here are a few:

* A child class can only inherit from one parent class, whether or not it's a regular class or abstract class. However, a class can inherit multiple interfaces.
* Abstract classes can have any other class member including fields, while interfaces can only have properties and methods.
* It's optional to override abstract members of abstract classes, and to make use of the members of an abstract class. With interfaces, we must implement all methods or properties defined in the interface. 

However, the biggest difference between abstract classes and interfaces are in how they are used. An abstract class provides **core** functionality to its child classes, just like the `Feline` class contains universal core elements about all felines.

On the other hand, an interface provides **peripheral** functionality to the classes it extends. We can also think of interfaces as providing feature-focused functionality. As we saw with the `IMotor` interface, it is focused on the functionality of turning a machine on (or off), which is just one feature of many that any machine should have. 

This difference between **core** and **peripheral** functionality is in part philosophical and up for debate. For example, we wouldn't want instances of a `Robot` class to inherit `Walk()` functionality from an abstract `Animal` class because robots aren't animals. However, a `Robot` could inherit `Walk()` functionality from an `IMobility` interface. In this case, our application would be structured so that any kind of object with mobility includes a `Walk()` method whether they are `Animal` or `Robot` objects. We could easily argue that `Walk()` should belong within either an abstract parent class or an interface. In fact, which option we choose will largely depend on the needs of our application.

There are other differences between abstract classes and interfaces, but they are beyond the scope of this lesson. To learn more about interfaces, [visit the MS Docs on Interfaces.](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/interfaces) To learn more about abstract classes, check the MS Docs on [Abstract and Sealed Classes and Class Members.](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/abstract-and-sealed-classes-and-class-members)

## When to Use an Interface
---

Whether you choose to use an abstract class or an interface, both of these are making use of the OOP principles of abstraction and inheritance. Implementing inheritance is no big deal — it's a mechanism in OOP. However, abstraction is both more conceptual and all about design decisions. We should always carefully consider if an abstraction would improve our code or not. Here's a few use cases for interfaces:

* We should consider using an interface when there's functionality we want to define that many unrelated classes may need to use. Here, the interface would define the behavior, and any class that extends the interface would define the specific implementation of the behavior.
* We should consider using an interface when we want to separate class requirements from the exact implementation of those requirements. The interface would describe the requirements, and any class that extends the interface would need to include those requirements, but in varying ways. When we do this, we can more easily substitute one class with another class when they both extend the same interface.

**You are not required to use an interface for this section's independent project.** However, you are encouraged to experiment with them and add them to projects if possible.
