---
title: "📓 3.1.0.3 Pure Functions"
id: 3-1-0-3-pure-functions
hide_table_of_contents: true
---

When we program in a functional style, we aim to write **pure functions**. Pure functions are the building blocks of functional programming. Let's understand what makes a function "pure" and why this matters.

## What Is a Pure Function?

A pure function has three characteristics:

### 1. Same Input → Same Output

Given a specific input, a pure function always returns the same output.

```js
// ✅ Pure: always returns the same result for the same input
function addOne(num) {
  return num + 1;
}

addOne(7);  // Always returns 8
addOne(7);  // Still returns 8
addOne(7);  // Always 8, no matter how many times we call it
```

In contrast, the following function is **not** pure because it can return different results for the same input:

```js
// ❌ Not pure: same input can produce different outputs
function guessMyNumber(num) {
  const myNumber = Math.floor(Math.random() * 10) + 1;
  if (num === myNumber) {
    return "You guessed right!";
  } else {
    return "That wasn't it.";
  }
}

guessMyNumber(7);  // Sometimes "You guessed right!", sometimes "That wasn't it."
```

### 2. No Side Effects

A pure function doesn't change anything outside of itself. It only computes and returns a value.

```js
// ❌ Not pure: modifies the DOM (a side effect)
function addWord(word) {
  document.getElementById("typing-box").append(word);
}

// ❌ Not pure: modifies an external variable (a side effect)
let total = 0;
function addToTotal(value) {
  total += value;  // Changes something outside the function
}

// ✅ Pure: only computes and returns a value
function add(a, b) {
  return a + b;
}
```

### 3. No External Dependencies

A pure function doesn't rely on variables or state outside of itself (except for its parameters).

```js
// ❌ Not pure: depends on external variable `taxRate`
let taxRate = 0.08;
function calculateTax(price) {
  return price * taxRate;  // Result depends on external state
}

// ✅ Pure: all dependencies are passed as parameters
function calculateTax(price, taxRate) {
  return price * taxRate;  // Everything the function needs is passed in
}
```

## A Quick Test for Purity

Ask yourself these questions:

1. If I call this function twice with the same arguments, will I always get the same result?
2. Does this function modify anything outside of itself (variables, objects, the DOM, a database)?
3. Does this function depend on anything that might change (external variables, current time, random numbers)?

If you answered "yes" to question 1 and "no" to questions 2 and 3, you have a pure function!

## An Example: Tallying a Score

Let's use pig dice as an example. Let's assume we have the following function inside a `Player` class:

```js
class Player {
  constructor() {
    this.totalScore = 0;
  }

  tallyScore(roundScore) {
    this.totalScore = this.totalScore + roundScore;
    return this.totalScore;
  }
}
```

This `tallyScore()` method is **not** pure because:
- It modifies `this.totalScore` (side effect)
- It returns different values for the same input depending on what `totalScore` was before

```js
const player = new Player();
player.tallyScore(7);  // Returns 7
player.tallyScore(7);  // Returns 14 (same input, different output!)
```

Here's a pure alternative:

```js
// ✅ Pure function version
function tallyScore(currentTotal, roundScore) {
  return currentTotal + roundScore;
}

tallyScore(0, 7);   // Returns 7
tallyScore(0, 7);   // Returns 7 (same input, same output)
tallyScore(26, 7);  // Returns 33
```

The pure version requires us to pass in the current total, but now the function is predictable and easy to test.

## Why Pure Functions Matter

### Easier to Test

Pure functions are trivial to test. One input, one output, no setup required:

```js
test('addOne adds 1 to a number', () => {
  expect(addOne(5)).toBe(6);
  expect(addOne(0)).toBe(1);
  expect(addOne(-3)).toBe(-2);
});
```

Compare this to testing a method that depends on object state—you'd need to set up the object first, track its state, and ensure tests don't interfere with each other.

### Easier to Understand

When you see a pure function, you know everything about it from its signature. You don't need to understand the rest of the codebase to know what it does.

```js
// I know exactly what this does without looking at anything else
function calculateDiscount(price, discountPercent) {
  return price - (price * discountPercent / 100);
}
```

### Fewer Bugs

Pure functions can't accidentally break other parts of your code because they don't touch anything outside themselves. This isolation makes bugs easier to track down.

## Reality Check: Not Everything Can Be Pure

Some things inherently require side effects:
- Updating the DOM
- Making API calls
- Reading user input
- Writing to a database

The goal isn't to eliminate all side effects—it's to **isolate** them. Keep your core logic in pure functions, and push side effects to the edges of your application.

```js
// Pure: calculates what to display
function formatUserGreeting(user) {
  return `Hello, ${user.name}! You have ${user.messages} new messages.`;
}

// Impure (but necessary): actually displays it
function displayGreeting(user) {
  const greeting = formatUserGreeting(user);  // Pure logic
  document.getElementById('greeting').textContent = greeting;  // Side effect
}
```

This separation makes the important logic (`formatUserGreeting`) easy to test, while the side effect (`displayGreeting`) is minimal and obvious.
