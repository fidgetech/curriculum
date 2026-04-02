---
title: "📓 3.1.0.10 Closures"
day: weekend
id: 3-1-0-10-closures
hide_table_of_contents: true
---

Earlier, we saw that functions can return other functions. **Closures** are what make that useful.

A closure occurs when an inner function remembers variables from its outer function, even after the outer function has finished running.

## A First Example

```js
function welcome(salutation) {
  return function(name) {
    return `${salutation}! Nice to meet you, ${name}!`;
  };
}
```

`welcome()` takes a salutation and returns a new function. That inner function takes a name. Let's use it:

```js
const heyThere = welcome("Hey there");
const goodMorning = welcome("Good morning");
```

`heyThere` and `goodMorning` are now functions. Each one has "closed over" the `salutation` value from the outer call — it's been captured and stored inside the function.

```js
heyThere("Ada");       // "Hey there! Nice to meet you, Ada!"
heyThere("Grace");     // "Hey there! Nice to meet you, Grace!"
goodMorning("Alan");   // "Good morning! Nice to meet you, Alan!"
```

Even though `welcome()` has finished running, the inner function still has access to `salutation`. That's a closure.

## What "Closing Over" Means

When an inner function is created inside an outer function, it carries a reference to the outer function's variables — like a backpack it takes with it. Even after the outer function completes, those variables don't disappear. They're kept alive because the inner function still needs them.

This is where the term comes from: the inner function *closes over* the variables in its surrounding scope.

## A More Practical Example

```js
function multiplier(factor) {
  return function(number) {
    return factor * number;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

double(5);   // 10
triple(5);   // 15
double(12);  // 24
```

`double` and `triple` are independent functions, each with their own captured `factor` value. Calling `multiplier()` again doesn't affect existing closures.

:::tip[Arrow Function Style]
These examples use the `function` keyword for clarity, but closures work identically with arrow functions:

```js
const multiplier = (factor) => (number) => factor * number;

const double = multiplier(2);
double(5);  // 10
```

You'll see this compact style often in real codebases.
:::

## You've Already Used Closures

The callback you pass to `map()` is a closure. Here's an example:

```js
function addPrefix(words) {
  const prefix = "pre";

  return words.map(function(word) {
    return `${prefix}${word}`;
  });
}

addPrefix(["view", "cook", "heat"]);
// ["preview", "precook", "preheat"]
```

The anonymous callback passed to `map()` has access to `prefix`, which was declared in the outer function `addPrefix()`. That's a closure — and you've been writing them without knowing it.

If closures come up in a job interview, it's worth mentioning that callbacks are a common example.

## What Closures Enable

Closures let functions carry state with them — specific values captured at the time of creation. This makes them highly reusable and configurable without relying on global variables or object state.

In the next lesson, we'll build directly on this: **function factories** use closures to generate specialized, pre-configured functions on demand.
