---
title: "\U0001F4D3 3.1.2.2 APIE: Inheritance, Abstract Classes, and Virtual Class Members"
id: 3122-apie-inheritance-abstract-classes-and-virtual-class-members
slug: 3122-apie-inheritance-abstract-classes-and-virtual-class-members
hide_table_of_contents: true
sidebar_position: 10
day: tuesday
type: lesson
url: >-
  https://github.com/fidgetech/c-and-net/blob/main/2b_oop_inheritance_and_abstract_classes.md
---

In this lesson, we're going to revisit the four principles of Object-Oriented Programming (OOP), often referred to as APIE: 

* **A**bstraction
* **P**olymorphism
* **I**nheritance
* **E**ncapsulation

So far, we're familiar with abstraction and encapsulation. In this lesson, we'll learn about **inheritance** through which one class shares functionality with another class. In the process, we'll learn about tools we can use to determine how two objects should share functionality between each other:

* We'll create and use an **abstract class**.
* We'll learn how to apply new C# modifiers called `abstract`, `virtual`, and `override`. 
* We'll learn about new terminology like **base class** and **derived class**.

We're already familiar with the concept of inheritance from JavaScript, which is helpful! However, take note that [JavaScript uses prototype-based inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), while OOP languages like C#, C++, and Java use class-based inheritance.

## Inheritance
---

**Inheritance** is simply the process of passing on functionality from a parent class to a child class. C# has **single inheritance**, which means that a class can only inherit from a single other class. In turn, that class can inherit from yet another class. A subclass, or child class, ultimately inherits the functionality of each of those parent classes. For example, we could have a chain of inheritance that look like this:

`Animal -> Mammal -> Feline -> Cat`

`Cat` can only inherit from one class — `Feline` — but it will ultimately inherit all the functionality of each of the classes above, including `Mammal` and `Animal`, because they have been passed down to `Feline`.

We've used the terms **parent class**, **child class**, and **inherits**, but there is additional terminology to learn that's commonly used when describing inheritance. If we look at the inheritance between the classes `Mammal` and `Feline`:

* `Feline` **inherits** from the `Mammal` class. We also can say that `Feline` **extends** the functionality in the `Mammal` class. 
* `Mammal` is the **parent** or **base** class.
* `Feline` is the **child** or **derived** class that is inheriting functionality from the `Mammal` class.

As another example, we can use this same language to describe the inheritance between `Feline` and `Cat`:

* `Cat` **inherits** from the `Feline` class. We also can say that `Cat` **extends** the functionality in the `Feline` class. 
* `Feline` is the **parent** or **base** class.
* `Cat` is the **child** or **derived** class that is inheriting functionality from the `Feline` class.

However, we couldn't say that `Animal` is the base class for the derived class `Feline`. That's because classes can only inherit from one other class: in our example chain of inheritance, `Cat` inherits from `Feline`, `Feline` inherits from `Mammal`, and `Mammal` inherits from `Animal`.

### Implementing Inheritance

To implement inheritance, we simply need to define a base class and a derived class, and within the derived class, use the correct syntax to extend the derived class with the functionality of the base class:

```csharp
public class DerivedClassToBeExtended : BaseClass
```

Let's make this concrete with an example. Here's our base class:

```csharp
namespace AnimalGeneaology.Models
{
  public class Feline
  {
    // Auto-Implemented Properties
    public bool DoesPurr { get; set; }
    public bool DoesRoar { get; set; }
  }
}
```

And here's a derived class that extends the functionality of the `Feline` class:

```csharp
namespace AnimalGeneaology.Models
{
  public class Cat : Feline
  {
    public string Breed { get; set; } = "";

    public Cat(string breed)
    {
      DoesPurr = true;
      DoesRoar = false;
      Breed = breed;
    }
  }
}
```

Or, in other words, the `Cat` class inherits functionality from the `Feline` class. That's why we can access the `DoesPurr` and `DoesRoar` auto-implemented properties within the `Cat()` constructor function, even though they are not explicitly defined within the `Cat` class. Instead, these auto-implemented properties are defined in the `Feline` class, which the `Cat` class inherits from.

Finally, take note that there's no limit to how many classes can derive from a base class. For example, we could have a whole slew of classes that inherit from `Feline`:

* `public class Cougar : Feline`
* `public class Tiger : Feline`
* `public class Lynx : Feline`
* etc.

However, each of the derived classes (`Cougar`, `Tiger`, and `Lynx`) can only inherit from one base class (`Feline`).

### Another Example of Inheritance

Let's look at just one more example of inheritance, this time with built-in C# classes. Do you remember the `GetType()` method that we used to check the namespace and class name of different C# objects? For example, when we check the type of a string in the `dotnet-script` REPL, we'll get `[System.String]` returned to us:

```csharp
> string myFavFlower = "rose";
> myFavFlower.GetType()
[System.String]
```

We can call `GetType()` on any object out there. Even the `Cat` and `Feline` classes we created in the last example.

Well, all objects have access to [the `GetType()` method](https://learn.microsoft.com/en-us/dotnet/api/system.object.gettype?view=net-6.0) thanks to inheritance. The `GetType()` method is actually defined in the `System.Object` class (the `Object` class that lives in the `System` namespace), and in C#, all objects inherit from [the `Object` class](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-6.0) and automatically have access to its methods. Even our custom classes implicitly inherit from `System.Object`. 

This is a great example of how inheritance can be used to share functionality across classes. In this case, the `System.Object` class contains basic functionality that all objects should have, like type checking, which is why all C# objects inherit from it.

## Abstract Classes
---

One way to build inheritance into an application is through an abstract class. An **abstract class** is simply a class that is never instantiated. 

Let's reconsider our earlier example of the `Feline` class, from which many child classes — `Cat`, `Tiger`, etc. — are derived from. The `Feline` class exists in order to define elements that are universal to all felines, and all of the derived classes contain more specific data about specific types of felines, like house cats. So the question is, will we ever need to create an instance of the `Feline` class? I don't think so! We want to make `Cat` and `Cougar` objects, but not `Feline` objects. Because of this, it would be better to make the `Feline` class abstract that can never be instantiated.

In summary, an abstract class exists simply for the purpose of organizing universal elements and functionality and passing that on to other classes. Again, there is no limit to the number of classes that can inherit from a class. `Cat` can only have one parent class but `Feline` can have many child classes.

### Implementing an Abstract Class

It's easy to create an abstract class. Let's update our `Feline` class to be abstract:

```csharp
namespace AnimalGeneaology.Models
{
  public abstract class Feline
  {
    // Auto-Implemented Properties
    public bool DoesPurr { get; set; }
    public bool DoesRoar { get; set; }
  }
}
```

All we need is [the `abstract` modifier](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/abstract). Once we do this, we can no longer instantiate a `Feline` object. If we tried to do something like this:

```csharp
Feline fel = new Feline();
```

We would receive the following error:

<code style={{color:"red"}}>
error CS0144: Cannot create an instance of the abstract type or interface 'Feline'
</code>

### Abstract Members of an Abstract Class

We can also declare members of an abstract class as `abstract`. That includes properties and methods, but not fields. For example, let's declare an abstract instance method called `Vocalize()` within the `Feline` class:

```csharp
namespace AnimalGeneaology.Models
{
  public abstract class Feline
  {
    public bool DoesPurr { get; set; }
    public bool DoesRoar { get; set; }

    // An abstract method
    public abstract string Vocalize(); 
  }
}
```

Note that we declare the method is `abstract`. When a class member is declared as abstract, it cannot include any code. Instead, when we include **abstract members** within an abstract class, we're defining functionality that child classes should have (like `Vocalize()`), but not the exact implementation of this functionality, as in, whether `Vocalize()` will return `"meow"`, `"roar"`, or `"growl"`.

**When an abstract base class has abstract members, derived classes _must_ override the abstract member using the `override` modifier.** For instance, we'd need to include a `Vocalize()` method in the `Cat` class that overrides the `Vocalize()` method in the parent `Feline` class:

```csharp
namespace AnimalGeneaology.Models
{
  public class Cat : Feline
  {
    public string Breed { get; set; } = "";

    public Cat(string breed)
    {
      DoesPurr = true;
      DoesRoar = false;
      Breed = breed;
    }

    public override string Vocalize()
    {
      return "meow!";
    }
  }
}
```

Want to try this out? Here's what we can do with our `Cat` class within the `Main()` method:

<div class="filename">Program.cs</div>

```csharp
using System;
using AnimalGeneaology.Models;

namespace AnimalGeneaology
{
  class Program
  {
    static void Main()
    {
      Cat myCat = new Cat("tabby");
      Console.WriteLine(myCat.GetType());
      Console.WriteLine(myCat.Vocalize());
    }
  }
}
```

The above code will return:

```
AnimalGeneaology.Models.Cat
meow!
```

### Non-Abstract Members within an Abstract Class

We can also write regular, non-abstract methods in an abstract class. These methods should include code within the method body. For instance, We could include `Walk()` and `Hunt()` methods that looks like this:

```csharp
namespace AnimalGeneaology.Models
{
  public abstract class Feline
  {
    public bool DoesPurr { get; set; }
    public bool DoesRoar { get; set; }

    // An abstract method
    public abstract string Vocalize(); 

    // Non-abstract methods:
    public string Hunt()
    {
      return "The feline hunts.";
    }

    public string Walk()
    {
      return "The feline walks.";
    }
  }
}
```

Because this method isn't abstract, we can optionally add code to it.

We can then update `Program.cs` to call on these methods:

<div class="filename">Program.cs</div>

```csharp
using System;
using AnimalGeneaology.Models;

namespace AnimalGeneaology
{
  class Program
  {
    static void Main()
    {
      Cat myCat = new Cat("tabby");
      Console.WriteLine(myCat.GetType());
      Console.WriteLine(myCat.Vocalize());
      Console.WriteLine(myCat.Hunt());
      Console.WriteLine(myCat.Walk());
    }
  }
}
```

And we'll get this returned to us:

```
AnimalGeneaology.Models.Cat
meow!
The feline walks.
The feline hunts.
```

## Another Tool for Inheritance: Virtual Members
---

We can use `virtual` class members as another tool to control how functionality is shared between two classes. When we declare a class member as `virtual` in a base class, it allows all derived classes to optionally override it and create a new definition for that member. Unlike the `abstract` modifier, we can only apply `virtual` to class members and not to classes themselves. Similar to the `abstract` modifier, we can make properties and methods virtual, but not fields.

Let's look at an example. We'll update the `Feline.Walk()` method to be virtual:

```csharp
namespace AnimalGeneaology.Models
{
  public abstract class Feline
  {
    public bool DoesPurr { get; set; }
    public bool DoesRoar { get; set; }

    // An abstract method
    public abstract string Vocalize(); 

    public string Hunt()
    {
      return "The feline hunts.";
    }

    // This is now a virtual method!
    public virtual string Walk()
    {
      return "The feline walks.";
    }
  }
}
```

Now, we can optionally override the `Feline.Walk()` method by creating a new `Cat.Walk()` method with a new definition. Let's see how that works:

```csharp
namespace AnimalGeneaology.Models
{
  public class Cat : Feline
  {
    public string Breed { get; set; } = "";

    public Cat(string breed)
    {
      DoesPurr = true;
      DoesRoar = false;
      Breed = breed;
    }

    public override string Vocalize()
    {
      return "meow!";
    }

    public override string Walk()
    {
      return "The cat walks.";
    }
  }
}
```

To override a base class (`Feline`) method within a derived class (`Cat`), we need to use the same method signature (`public string Walk()`) and specifically include the `override` modifier. 

Without making any changes to the code in `Program.cs`, if we re-run the program, we'll get this returned to us in the terminal:

```
AnimalGeneaology.Models.Cat
meow!
The cat walks.
The feline hunts.
```

As we can see, the method in the child class replaces the method in the parent class: we get "The cat walks." instead of "The feline walks."

## When To Use Inheritance
---

**You are not required to use inheritance or an abstract class for this section's independent project.** However, you are encouraged to experiment with them and add them to projects if possible.

Even though inheritance seems to only be about sharing functionality between a parent class and one or more child classes, inheritance is also about creating abstractions. In our `Feline`/`Cat` example, `Feline` is an abstraction that represents universal elements and functionality that all felines have in common, while `Cat` is the more specific implementation of `Feline`. 

However, creating this sort of abstraction won't make sense for every application. For example, if we're creating an app for a company that takes care of pets while their owners are away, it definitely makes sense to have a `Cat` class, but we're not going to have other felines like tigers and cougars, since people don't (usually) have tigers and cougars as pets. In this context, it doesn't make sense to create an abstract `Feline` class that we'll then have our `Cat` class be derived from. 

On the other hand, if we're creating an application for a zoo or a zoologist, we'll be dealing with a lot of different types of felines, and creating an abstract `Feline` class would be beneficial: it would group universal elements and functionality into one class that other classes can inherit from. In other words, the abstract parent class is focused on defining the general elements of all derived classes, whereas each derived class can focus on the specific implementation. 

### When To Use `abstract`

When a class or class member is marked as `abstract`, it means the exact implementation (functionality) still needs to be defined.

* When you make a class `abstract`, it can no longer be instantiated; instead, we can use it as a base class and have derived classes inherit from it.
* Abstract classes can optionally contain `abstract` members (properties and methods, but not fields). Only abstract classes can contain abstract members.
* When you make a class member `abstract`, you are declaring the name and type of the class member, but not the exact implementation of it.
* Derived classes **must** override all `abstract` class members using the `override` modifier. This is when the exact implementation of an inherited `abstract` class member is being defined. 

### When To Use `virtual`

When a class member is marked as `virtual`, it means it can optionally be overwritten within a derived class. 

* Both regular and `abstract` classes can contain `virtual` members (properties and methods, but not fields).
* When a class member is marked as `virtual`, you should define all of it. This ends up being the basic implementation that all derived classes will use (unless they override it). This is unlike with `abstract` members, where only the name and type is declared.
* When you overwrite the `virtual` member in a derived class, you must use the `override` modifier. 

Up next, we'll learn about interfaces, another tool that allows us to implement inheritance and helps us achieve abstraction in our C# code.
