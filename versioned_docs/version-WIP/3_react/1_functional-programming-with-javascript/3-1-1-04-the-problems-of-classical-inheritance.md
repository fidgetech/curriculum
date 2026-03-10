---
title: "📓 3.1.1.4 The Problems of Classical Inheritance"
day: monday
id: 3-1-1-4-the-problems-of-classical-inheritance
hide_table_of_contents: true
---

In Intermediate JavaScript, we learned about the concept of **inheritance**. A quick refresher: inheritance is when a child object gains the functionality of a parent object. In the case of classical inheritance, that functionality is passed down through classes. For instance, objects from a `Cat` class could inherit from a `Mammal` class and so on. In the case of JavaScript, that functionality is passed down via prototypal inheritance, though we have the syntactic sugar of classes with ES6+.

Inheritance works well when you have clear, stable hierarchies. For example, if you're building a game and create a `Character` class with health and movement, then create `Player` and `Enemy` classes that inherit from it - that makes perfect sense. Both need those basic features.

However, there are some tradeoffs to consider as your code grows.

One challenge is that inheritance is "all-or-nothing." When a child class inherits from a parent, it gets *all* the parent's functionality. This works great when that's exactly what you need, but can cause issues when it's not. As our codebases get more complex, we could end up in a situation where we're stuck giving objects all kinds of functionality that they don't need — and some of that unneeded functionality could lead to bugs as well as code that's hard to understand. Joe Armstrong, the creator of the functional language Erlang, has the perfect quote for this issue: "You wanted a banana but what you got was a gorilla holding the banana and the entire jungle."

Imagine you're building an application that characterizes the behavior of various mammals. For that reason, you decide to start with a `Mammal` class and to add various methods that should presumably apply to all mammals. As your application begins to grow, however, not all the methods apply to all of the mammals inheriting from the `Mammal` class. After all, there's a lot of variance in the animal kingdom — and by the time you need to add a `Platypus` class, the entire application is in desperate need of a refactor. If only the `Reptile` and `Bird` classes allow for egg-laying methods, how would that method be incorporated into `Platypus`? Not only is a `Platypus` neither type of animal, but it's already inheriting from another class, anyway.

The core issue is that deep inheritance hierarchies create **tight coupling** between classes. Tightly coupled code means changes in one place often ripple through your entire codebase. If you modify a parent class, all children are affected - sometimes in unexpected ways.

In contrast, **loosely coupled** code is more flexible. Pieces can work independently, making changes safer and code easier to understand. Simple functions are a great example - a function like `calculateTotal(items)` just takes some items and returns a total. It doesn't care about the rest of your app.

This doesn't mean inheritance is bad - it's a useful tool with specific strengths. But it's important to understand its tradeoffs and recognize when other patterns (which we'll explore soon) might be more appropriate. The key is choosing the right approach for your specific situation.