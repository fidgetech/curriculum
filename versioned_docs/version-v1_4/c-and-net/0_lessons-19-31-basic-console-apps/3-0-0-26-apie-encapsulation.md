---
title: "📓 5.0.0.26 APIE: Encapsulation"
day: weekend
id: 5-0-0-26-apie-encapsulation
hide_table_of_contents: true
---

You might still be wondering why we need to use private fields. Why use getters and setters at all, especially since we had access to get and set fields when they were public?

The short answer is that making fields private to a class uses **encapsulation**, one of the four basic principles of Object-Oriented Programming (OOP). 

What is encapsulation? We use **encapsulation** when we hide the internal state and functionality of an object and only allow access through a public set of methods. Well, that's exactly what we're doing with `private` fields — we are encapsulating them within the class and managing all data manipulation inside of the class. Like a pill capsule closes over medicine, a class closes over its members, functionality, and the data contained within it. 

In this lesson, we'll better understand encapsulation and get introduced to the other three principles of object-oriented programming. We'll also take a moment to acknowledge that a best practice isn't a silver bullet — that is, exactly how you write your code depends on the application you are building.

## An Example of Encapsulation
---

Imagine a `User` class with a private `_password` field. As developers, we wouldn't want to expose that field, making it public. Instead, we would want to provide a public `CheckPassword()` method that returns a `bool` that tells us if an entered password is correct. 

Outside the class, I can only determine if a provided password is correct by using the `CheckPassword()` method. This means the sensitive information stored in the `_password` field is never exposed.

This is what getters and setters allow us to do: control _how_ information is managed. A setter could perform a validation action before modifying a value, for example. 

We can also debug more easily when we have methods that perform data manipulation. If there's an error, the bug will be traced to that method.

This is why the best practice of setting fields to `private` is a best practice. It encapsulates private data and functionality within a class and only exposes what's needed outside of the class.

## Benefits of Encapsulation
---

Encapsulating class members is considered the best, most professional practice for several reasons:

* It allows a class to have total control over its own fields, which is more secure.

* It prevents other classes from accessing and altering fields, which can lead to difficult bugs.

* Managing all aspects of a class within the class itself leads to more organized code. Organized code allows other developers to comprehend, collaborate, and implement your logic much more easily.

* While we may not see this benefit until our applications become larger, encapsulation leads to more maintainable code. 

Imagine we eventually need to change the variable name of an object's public field. If outside classes were directly accessing a field (eg: `testTriangle.Side1;`, instead of `testTriangle.GetSide1();`), we would need to update all the code in outside classes that reference this field. This might not seem like a big deal, but imagine a C# application with tens or _hundreds_ of classes. We would have to comb through each one and change all references to this field. However, if the field were `private` and outside classes accessed it through its getter method, only the object's getter method and class would need to be altered. We could update this class _independently_ without affecting other classes that rely on it.

## When Should I Use Encapsulation? Almost always...
---

Just because encapsulation is a best practice, that doesn't always mean it's always the right choice. Sometimes using a public field is entirely appropriate. To get a sense of the use cases for getters and setters, we recommend that you pause now and read as much of [this stack overflow post](https://stackoverflow.com/questions/1568091/why-use-getters-and-setters-accessors) as you have the time for. The stack overflow article will list many reasons why using encapsulating fields is a best practice. The article also lists a few reasons why they are not always a good choice.

**Because we're just getting started with encapsulation, we're still going to follow best practice by making all fields private and exposing them through getter and setter methods.** 

## APIE: Abstraction, Polymorphism, Inheritance, Encapsulation
---

The acronym APIE stands for the four principles of object-oriented programming:

* Abstraction
* Polymorphism
* Inheritance
* Encapsulation

We'll get to know each of these principles as we go along in the curriculum. If you are ready to read more now, we recommend checking out [this article on the MS Docs](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/oop).
