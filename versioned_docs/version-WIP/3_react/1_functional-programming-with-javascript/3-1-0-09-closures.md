---
title: "📓 3.1.0.9 Closures"
day: weekend
id: 3-1-0-9-closures
hide_table_of_contents: true
---

In this lesson, we'll cover another concept central to functional programming: **closures**.

Closures are a challenging concept at first. However, understanding what they are and how they work is essential to your development as a coder. It is also a concept that is frequently asked about in job interviews. Check out Eric Elliott's [post](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36) for more information.

## Closures
---

A closure occurs when an inner function remembers and can access variables from its outer function, even after the outer function has finished executing.

Here's an example. We'll create a `welcome()` function with a custom salutation and name. Try putting this example in the console.

```javascript
function welcome(salutation) {
  return function(yourName) {
    return `${salutation}! Nice to meet you, ${yourName}!`
  }
}
```

The `welcome()` function is the outer function. It takes an argument (a specific salutation) and then returns an anonymous inner function. The inner function also takes an argument: `yourName`.

When the anonymous inner function is called, it will return a string that includes both the `salutation` and `yourName`. In other words, the inner function has access both to the variable declared inside it (`yourName`) and the one declared in the outer function (`salutation`).

We've now created a closure, but how do we use it? We need to assign it to a variable so it can be used elsewhere:

```javascript
const heyThere = welcome("Hey there");
```

So what exactly is happening here? We're calling `welcome("Hey there");` and _returning_ the inner function, which is stored inside the variable `heyThere`. We can see this by checking the value of `heyThere` in the console:

```javascript
function(yourName) {
  return `${salutation}! Nice to meet you, ${yourName}!`
}
```

The return value of the outer function is the inner function. In other words, the `heyThere` variable now holds the inner function that was returned. To actually call the inner function, we need to add `()`. So let's call the `heyThere` function in the console and see what happens:


```javascript
> heyThere()
"Hey there! Nice to meet you, undefined!"
```

Let's set aside the `undefined` for a moment. The key takeaway here is that the inner function still has access to `salutation`, which was declared in the outer function. The variable `yourName` is still `undefined` because the inner function takes `yourName` as an argument, so we need to pass it in.

We can pass in a value for `yourName` by passing in an argument to the `heyThere` function, like this:

```js
> heyThere("Joe")
"Hey there! Nice to meet you, Joe!"
```

This may not seem very useful, but our original function is very flexible. We can use it with other greetings:

```javascript
> const spanishGreeting = welcome("Buenos días!");
> spanishGreeting("Joe");
"Buenos días! Nice to meet you, Joe!"
```

This reusability is a large part of what makes closures so powerful. We will explore this further when we discuss function factories in the next lesson.

As we can see in the examples above, our inner function has access to variables in both the inner and outer function. Even after the outer function has been called, the inner function continues to have this access. This is where the term closure comes from: the ability of the function to _close over_ the variables, keeping them in the function's scope. In many languages (C being an example), variables are destroyed as soon as the outer function is completed. As a result, these languages can't use this powerful functionality.

Let's look at one more example of a closure. This time, we will create a function that we can reuse to multiply a number by different values.

```js
function multiplier(numberToMultiplyBy) {
  return function(numberToMultiply) {
    return numberToMultiplyBy * numberToMultiply;
  }
}
```

Now we can do the following:

```js
const doubler = multiplier(2);
const tripler = multiplier(3);
```

Once again, let's go into how this works. With `doubler`, we pass in `multiplier(2)`. The `doubler` variable now stores a function that looks like this:

```js
function(numberToMultiply) {
  return 2 * numberToMultiply;
}
```

You can check this out for yourself in the console. This works because the inner function retains the value of the argument passed into the outer function — which in turn is stored in the `doubler` variable. This inner function will be invoked when we call `doubler()`.

`tripler` works in exactly the same way. The difference is that we are passing in a different argument to the outer function, which is being stored in the inner function.

So `tripler` stores the following information: 

```js
function(numberToMultiply) {
  return 3 * numberToMultiply;
}
```

:::tip[Arrow Functions and Closures]
All these examples use the function keyword for clarity, but closures work identically with arrow functions (=>) which you'll see in modern JavaScript code.

Here's the multiplier example rewritten with arrow functions:

```js
// Same closure, arrow function style
const multiplier = (numberToMultiplyBy) => {
  return (numberToMultiply) => numberToMultiplyBy * numberToMultiply;
};
```
:::

Closures can be a very confusing concept at first. However, we've actually used closures before. Consider this example:

```js
function howManyEvenNumbers(userInputArray) {
  let instances = 0;
  userInputArray.forEach(function(element) {
    if (element % 2 === 0) { 
      instances++; // we have access to `instances` thanks to closures
    }
  });
  return instances;
}

howManyEvenNumbers([2,3,4,5,6,7]);
// returns 3
```

The callback passed to `Array.prototype.forEach()` is an example of a closure. The inner, anonymous callback function has access to the variables declared in the outer function, `howManyEvenNumbers()`.

If you do get asked about closures in an interview, remember to mention that callbacks are an example of an inner function having access to an outer function's scope.

:::warning[Important]
Not all callbacks are examples of closures. A function only has access to variables from scopes where it was defined, not where it's called. If you define a function outside and pass it in as a callback, it won't magically gain access to the inner scope.

```js
function myLogger() { 
  console.log(myNum); // myLogger was defined out here, where myNum doesn't exist
}

function myCounter(functionParam) {
   const myNum = 1;
   functionParam(); // Error! myLogger can't see this myNum
}

myCounter(myLogger);
```
:::

Ultimately, closures are a powerful technique in both functional programming and programming in general. In the next lesson, we will see how we can combine closures with currying to create reusable, modular code and **function factories**, which are essentially functions we can use to churn out many other helpful functions.

Closures are also commonly used for enclosing private data, a use case we won't be exploring in depth. To learn more, see the [Mozilla documentation on closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).

By the way, if you still don't understand closures after reading this lesson, don't worry. We will get more practice working with them over upcoming lessons. This is also one of those concepts that usually doesn't click at first — there's a reason that this is one of the things that separates junior and midlevel developers!
