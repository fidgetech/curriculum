---
title: "📓 3.1.1.6- APIE: Abstraction"
day: monday
---

C# is an Object-Oriented Programming (OOP) language. We can understand OOP by getting to know its four fundamental principles, often referred to as APIE: 

* **A**bstraction
* **P**olymorphism
* **I**nheritance
* **E**ncapsulation

The acronym APIE doesn't list the principles in order of importance, only in an order that is helpful for remembering "a pie", the four principles of OOP.

## Abstraction
---

So far, we've familiarized ourselves with **encapsulation**, which is the practice of hiding internal class state and functionality, and only exposing it through a set of public methods. When we encapsulate our code, we're intentionally giving the class sole control over how the class's data should be accessed or managed. Doing this improves our code's security and organization, which makes it more maintainable in the long run.

We're now ready to tackle the next concept in APIE: abstraction. **Abstraction** is the process of taking a concept and modeling it as a class. For example, if we created an app for the Zoo to keep track of its animals and zoo keepers, we'd make an `Animal` class as an abstraction of animals, and similarly, we'd make a `Keeper` class as an abstraction of zoo keepers.

## Abstraction and Encapsulation are Intertwined 
---

There's a bit more to abstraction than that. We often use **encapsulation** in order to achieve abstraction, because **abstraction** is also about hiding the details and implementation of code in a class, so that it's easier to use. Let's look at an example.

When we drive a car, we only need to know a few things about the car. These things can be boiled down to a set of methods such as `Start()`, `Steer()`, `Stop()`, and `Go()`. We don't need to know how these methods work behind the scenes in order to use them. For example, many things happen in a car's engine when we `Start()` the car, but they are quite complex and we'd rather concern ourselves with other matters. 

In other words, we could say the underlying complexity of the car's engine has been **abstracted** away to just a handful of methods which are easy to understand. 

 In computer programming, we encapsulate the complexity of our code in methods. Take the following `Car` class for example:

```csharp
public class Car
{
  // Auto-Implemented Properties
  public string Model { get; set; }
  public int Price { get; set; }
  public int Miles { get; set; }

  public Car (string model, int price, int miles)
  {
    Model = model;
    Price = price;
    Miles = miles;
  }

  public void Start()
  {
    // A lot of complex stuff is happening in here but 
    // we don't need to understand it or even know about it in order to .Start() a car. 
    // In fact, this method might need to call a dozen other methods, but 
    // we wouldn't want the user to have to call them all manually!
  }  
}
```

The complex code of the `Start()` method is encapsulated within it. We don't need to understand the details of how the `Start()` method works, we just need to understand how to use it:

```csharp
Car yugo = new Car("1980 Yugo Koral", 700, 56000)
yugo.Start()
```

In the above code snippet, we call on the `Start()` method. Notice that we don't see any information about how the `Start()` method is achieved. Nor do we need to know anything about a `Car`'s private methods and fields in order for `Start()` to work.

We are already using abstraction regularly every time we create new classes and write well-encapsulated code within our classes that can be used outside a class through a selection of public methods. In fact, we can think of abstraction as being an important payoff of encapsulation.

## What's Next?
---

Soon, we'll get to know the remaining two OOP principles: inheritance and polymorphism. If you are ready to read more now, we recommend checking out [this article on the MS Docs](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/oop).
