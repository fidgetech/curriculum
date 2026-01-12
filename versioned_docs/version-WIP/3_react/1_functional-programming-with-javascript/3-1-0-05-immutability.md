---
title: "📓 3.1.0.5 Immutability"
day: weekend
id: 3-1-0-5-immutability
hide_table_of_contents: true
---

**Immutability** is an essential part of functional programming. If something is immutable, it cannot change. Conversely, if something is mutable, it can be changed. 

In functional programming, instead of changing existing data, we create new data with our desired changes. This makes code more predictable and prevents bugs.

## Immutability with Variables

Let's start with a simple example. Here's the mutable approach:
```js
let x = 1;
x = x + 2;  // Changing x
```

Here's the immutable approach:
```js
const x = 1;
const newX = x + 2;  // Creating a new value
```

Why does this matter? In a large codebase, if you see `let x`, you know `x` might change somewhere else in the code. This makes the code harder to reason about - you can't be sure what `x` is at any given moment. With `const x`, you know the value will never change. It's predictable.

**From now on, prefer `const` over `let` whenever possible.** This is the first step toward writing immutable code.

## The Problem with Arrays

This is where immutability gets trickier. Arrays are **reference types**, which means even with `const`, you can still modify their contents:
```js
const numbers = [1, 2, 3];
numbers.push(4);  // This works! The array mutates
console.log(numbers);  // [1, 2, 3, 4]
```

Wait, didn't we use `const`? Yes, but `const` only prevents reassignment (you can't do `numbers = [5, 6, 7]`). The array itself can still be modified.

**These array methods mutate the original array:**
```js
const numbers = [1, 2, 3];
numbers.push(4);        // Adds to the array
numbers.pop();          // Removes from the array
numbers[0] = 99;        // Changes an element
numbers.splice(1, 1);   // Removes elements
```

After any of these operations, `numbers` has changed. This is mutation, and it's what we want to avoid in functional programming.

## The Problem with Objects

Objects have the same issue:
```js
const person = { name: 'Ada', age: 28 };
person.age = 29;  // This works! The object mutates
console.log(person);  // { name: 'Ada', age: 29 }
```

The object changed even though we used `const`. Again, `const` prevents reassignment but doesn't prevent mutation of the object's properties.

## Why This Matters

Consider this code:
```js
const scores = [100, 95, 88];

function addBonus(scoreArray) {
  scoreArray.push(10);  // Adds bonus to the array
  return scoreArray;
}

const newScores = addBonus(scores);
console.log(scores);     // [100, 95, 88, 10] - Wait, what?
console.log(newScores);  // [100, 95, 88, 10]
```

We called a function to get "new scores," but it also changed our original `scores` array! This is a bug waiting to happen. If other parts of our code rely on `scores` being unchanged, they'll break.

Immutability prevents these kinds of bugs by ensuring data never changes unexpectedly.

## The Solution

So how do we work with arrays and objects without mutating them? We need techniques to create new arrays and objects with our desired changes, leaving the originals untouched.

In the next lesson, we'll learn about the **spread operator**, which is JavaScript's primary tool for working with arrays and objects immutably. You'll see how to:
- Add items to arrays without `push()`
- Remove items without `splice()`
- Update object properties without mutation
- Copy arrays and objects safely

Let's explore that next.
