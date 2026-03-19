---
title: "📓 3.1.0.8 First Class Citizens"
day: weekend
id: 3-1-0-8-first-class-citizens
hide_table_of_contents: true
---

In JavaScript, functions are **first-class citizens**. This means functions can be used anywhere a value can be used — stored in variables, passed as arguments, and returned from other functions.

This is what makes functional programming possible in JavaScript. Let's look at each of these three capabilities.

## 1. Passing Functions as Arguments

We can pass a function into another function as an argument. You've already done this — it's called a **callback**.

```js
function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function calculate(operation, num1, num2) {
  return operation(num1, num2);
}

calculate(add, 5, 3);       // 8
calculate(multiply, 5, 3);  // 15
```

`calculate()` doesn't know or care what `operation` does — it just calls it with the numbers. This separation of concerns makes code flexible and reusable. One function handles the math, another handles the orchestration.

This is exactly how `map()`, `filter()`, and `reduce()` work — they accept a function as an argument and call it for each element. You'll see this connection in the next lesson.

## 2. Storing Functions in Variables

Functions can be assigned to variables just like any other value:

```js
const double = function(num) {
  return num * 2;
};

double(5);   // 10
double(12);  // 24
```

This is called a **function expression**. The function itself has no name — it's anonymous — but we can refer to it through the variable.

You've seen a shorter version of this with arrow functions:

```js
const double = (num) => num * 2;
```

Same idea: a function stored in a variable. Storing functions in variables lets you pass them around, put them in arrays, or swap them out easily.

## 3. Returning Functions from Functions

Functions can also return other functions:

```js
function makeGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = makeGreeter("Hello");
const sayHi = makeGreeter("Hi");

sayHello("Ada");   // "Hello, Ada!"
sayHi("Grace");    // "Hi, Grace!"
```

`makeGreeter()` is called once with a greeting, and returns a new function that remembers that greeting. Each call to `makeGreeter()` produces a different, specialized function.

This is possible because of **closures** — the inner function retains access to `greeting` even after `makeGreeter()` has finished running. We'll cover exactly how this works in the closures lesson.

## Why This Matters

These three capabilities — passing, storing, and returning functions — are the foundation of functional programming patterns. Without them, concepts like `map()`, function factories, and composition wouldn't be possible.

In the next lesson, we'll see first-class functions in action with `map()`, `filter()`, and `reduce()`.
