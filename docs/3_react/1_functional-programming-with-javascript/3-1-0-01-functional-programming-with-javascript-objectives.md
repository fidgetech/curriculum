---
title: "📓 3.1.0.1 Functional Programming with JavaScript Objectives"
day: weekend
id: 3-1-0-1-functional-programming-with-javascript-objectives
hide_table_of_contents: true
pagination_prev: null
---

Up to this point, we have focused on object-oriented programming. However, there are other paradigms beyond object-oriented programming. One of the most useful and popular paradigms is **functional programming**. In this section, we will focus on learning how to program using a functional approach.

Having at least a basic understanding of functional programming is essential to progressing as a developer. Moreover, functional programming patterns are foundational to React.

Good news: you've already been doing some functional programming! Every time you've used `map()` or `filter()`, you were using FP techniques. This section will help you understand these patterns more deeply and use them intentionally.

In this course section, we'll cover the following:

| Concept | What It Means | Why It Matters |
|---------|---------------|----------------|
| **Pure functions** | Functions that always return the same output for the same input | Easier to test and debug |
| **Immutability** | Never modifying existing data | Prevent unexpected bugs |
| **Array methods** | `map()`, `filter()`, `reduce()` | Clean, readable data transformations |
| **Closures** | Functions that "remember" variables from their outer scope | Foundation for many patterns |
| **Function factories** | Functions that create other functions | Reusable, configurable code |
| **Composition** | Building complex functionality from simple pieces | Flexible alternative to inheritance |
| **Recursion** | Functions that call themselves | Elegant solutions to certain problems |

Some of these concepts can feel abstract at first. That's normal. You don't need to master everything immediately - focus on building familiarity and getting practice.

## How This Differs from OOP

| Object-Oriented | Functional |
|-----------------|------------|
| Focuses on *what things are* (a User, a Game) | Focuses on *what things do* (transform data, calculate values) |
| Organizes code into classes with methods | Organizes code into small, reusable functions |
| Often mutates object state | Avoids mutation; creates new values |
| Uses inheritance to share behavior | Uses composition to combine behaviors |

Professional developers use both paradigms. The goal isn't to abandon OOP - it's to add functional techniques to your toolkit and know when each approach fits best.

## Testing

You're expected to write tests for all your functions throughout this section. See [A Note on Testing](3-1-0-13-a-note-on-testing) for details on what to expect and setup references if you need them.

## Independent Project Objectives
---

For the independent project at the end of this section, you will build a small JavaScript program, run with Node, that manages a collection of data of your choosing, written in a functional style. Your project will be assessed on the following objectives:

* Data-transformation functions are pure - they don't mutate their inputs or rely on outside mutable state
* Data is updated using non-mutating patterns instead of methods like `push()`, `splice()`, or direct property reassignment
* `map()`, `filter()`, and/or `reduce()` are used effectively in place of `for` loops, where appropriate
* Project is in a polished, portfolio-quality state
* The prompt's required functionality and baseline project requirements are met