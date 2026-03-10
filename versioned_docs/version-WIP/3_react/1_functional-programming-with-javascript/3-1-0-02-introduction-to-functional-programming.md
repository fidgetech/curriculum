---
title: "📓 3.1.0.2 Introduction to Functional Programming"
id: 3-1-0-2-introduction-to-functional-programming
hide_table_of_contents: true
---

With object-oriented programming, we built objects that store information and have methods attached to them. Object-oriented programming relies on techniques like **inheritance** and **encapsulation**. Functional programming is a different paradigm with different goals.

## A Concrete Example

Let's see what this looks like in practice. Say you have an array of user objects and want to get all their names:

```js
const users = [
  { name: 'Ada', age: 28 },
  { name: 'Grace', age: 32 },
  { name: 'Alan', age: 41 }
];

// Imperative approach (telling the computer HOW to do it)
let names = [];
for (let i = 0; i < users.length; i++) {
  names.push(users[i].name);
}

// Functional approach (telling the computer WHAT we want)
const functionalNames = users.map(user => user.name);
```

The functional approach is more concise, clearer in intent, and harder to make mistakes with. Let's explore the principles that make this possible.

## Key Principles of Functional Programming

### 1. Focus on Functions, Not Objects

Object-oriented programming focuses on objects themselves (what they *are*): a Dog, a User, a GameBoard. Functional programming focuses on functions (what they *do*): transform data, calculate values, validate input.

### 2. Prefer Stateless Functions

In functional programming, the goal is to write **stateless** functions—functions that don't rely on or modify data outside themselves. Instead of storing information in objects or global variables, we pass data between functions.

```js
// Stateful approach - function relies on external data
let total = 0;
function addToTotal(value) {
  total += value;  // Modifies external state
  return total;
}

// Stateless approach - everything is passed in and returned
function add(currentTotal, value) {
  return currentTotal + value;  // No external dependencies
}
```

### 3. Avoid Mutating Data

In OOP, we often modify objects and reassign variables:

```js
let score = 0;
score += 10;  // Mutating the score variable
```

In FP, we prefer creating new values rather than modifying existing ones:

```js
const score = 0;
const newScore = score + 10;  // Creating a new value
```

This makes code more predictable and easier to debug. We'll explore this concept of **immutability** in depth in an upcoming lesson.

### 4. Build with Composition

While OOP uses inheritance (a Cat inherits from Mammal), functional programming uses **composition**—combining small, simple functions to create more complex functionality. We'll learn more about composition in a future lesson.

## FP vs OOP: It's Not Either/Or

Professional developers use both paradigms in real applications:

- **OOP** organizes code around objects and what they *are* (a User, a Game, a ShoppingCart)
- **FP** organizes code around functions and what they *do* (validate input, calculate totals, transform data)

For example:
- You might use a class to represent a bank account, but use pure functions to calculate interest or validate transactions
- You might use OOP to structure a game's entities, but use FP to process user input, update scores, or handle game logic

The key is choosing the right tool for the job. Both paradigms have their advantages, and a good developer knows when to use each approach.

## When Is Functional Programming Especially Useful?

FP techniques shine in certain situations:

| Situation | Why FP Helps |
|-----------|--------------|
| Data transformation pipelines | Chain `map`, `filter`, `reduce` for clear data flow |
| React components | React is built around FP concepts like immutability |
| Testing | Pure functions are trivial to test |
| Concurrent/async code | No shared mutable state means fewer race conditions |
| Complex state management | Immutable updates make state changes trackable |

You'll encounter all of these situations as you continue learning, which is why understanding FP fundamentals now will pay off later.
