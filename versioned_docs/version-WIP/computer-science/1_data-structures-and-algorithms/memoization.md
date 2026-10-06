---
title: "\U0001F4D3 Memoization"
id: memoization
slug: memoization
hide_table_of_contents: true
sidebar_position: 45
day: thursday
type: lesson
url: 'https://github.com/epicodus-curriculum/capstone/blob/main/memoization.md'
---

In this lesson, we'll cover an important dynamic programming technique known as **memoization**. Dynamic programming is the process of writing and executing code at runtime. Meanwhile, memoization is the process of caching the return values of time-consuming function calls, which then allows us to then just quickly grab the return value of the function from the cache instead of calling the function again. This can save a lot of time in a recursive function and is a powerful optimization technique.

Let's look at how memoization works. Imagine that you are in an unusual mathematic situation. Someone comes up to you and asks what `349 * 719` is equal to. That's strange enough, right? But you oblige and work out the answer using pencil and paper. The answer is `250931`.

A few minutes later, the situation gets even more unusual. Another person comes by and asks the same question — but you've forgotten the answer so you have to write it out again. That takes time since you've already recycled the piece of paper that had your previous solution.

After this happens several more times, you realize that it would be much more efficient to just memorize the answer instead of solving it every time someone asks about the product of `349 * 719`.

While this kind of scenario would be very strange if it happened to humans, it happens all the time with computers. A function might ask, over and over again, for the answer to the exact same problem. If the function keeps asking for the answer to `2*2`, that's no big deal. The answer to that can be computed so quickly that there's no need to memoize. However, if the function keeps asking for the answer to an extremely time-consuming problem, it would be better to save that answer — just as we'd do the same if people kept asking us over and over for the solution to the same complex problem.

So how do we memoize a function? Well, we can store an expensive function call in a data structure like a Map. For instance, we know it takes a really long time to compute the `answerToEverything()`. So once our supercomputers figure out the answer, we could do the following:

```js
function answerToEverything() {
  let computation = 0;
  // Lots of computations!
  return computation;
};
let map = new Map();
map.set(answerToEverything, 42);
```

In order to retrieve the answer, we just need to do the following:

```js
> map.get(answerToEverything);
42
```

We can also use memos to store the results of function calls with different arguments — and we'll get into that more in a moment.

As we can see, we can store the results of a function call in a Map. But that's just one part of how memoization works. We don't just compute the value of a function call and then store it permanently.

Instead, memoization is only useful when there are _repeated_ function calls. After all, on that weird day when everyone wanted to know the answer to `349 * 719`, we had to solve the problem first. And then, after people stopped asking us about `349 * 719`, we forgot all about it. Which meant that when people started asking us the same question a year later, we had to solve the problem all over and then memorize it again.

It's the same for a memoized function. A function call determines the answer and _then_ the call is memoized so that if the same function call with the same arguments happens again, there's no need for additional computation — the answer is already stored.

For this reason, memoization tends to be most useful for pure recursive functions. Functions need to be pure because memoization can't account for side effects. After all, how can you save side effects from somewhere else in an application in a memo's key-value pair? And it should be clear why memoization works so well for recursive functions. When the recursive function calls itself, it can just check the memo to see if it's already computed the return of that function instead of doing the computations all over again.

Let's build out a `sillyCounterAdder()` function to demonstrate how this works. This is going to be a very silly example with clunky code but it will demonstrate how memoization works. Then, after we understand the basics, we can learn how to use memoization more elegantly.

The function below includes no memoization.

```js
function sillyCounterAdder() {
  let totalCalls = 0;
  const hardComputation = function(counter) {
    totalCalls++;
    console.log(`totalCalls: ${totalCalls}`); 
    return (counter * counter + counter)/ counter;
  }
  let counter1 = 1;
  let counter2 = 100;
  let finalAnswer = 0;
  while (counter1 <= 100) {
    finalAnswer = finalAnswer + hardComputation(counter1);
    counter1++;
  }
  while (counter2 > 0) {
    finalAnswer = finalAnswer + hardComputation(counter2);
    counter2--;
  }
  return finalAnswer;
}
```

This function holds another function called `hardComputation` which is written as a function literal. The code here really isn't a very hard computation at all — at least not for our machines — but it's fine for our example. Just imagine that it's a much more complex computation that takes lots of time. We've also added a counter for `totalCalls` that will be incremented each time it's called. We'll also log the total number of calls to the console so we can see exactly how many times we actually call the `hardComputation` function.

Next, we have two while loops summing a `finalAnswer`. The first while loop goes from one to 100, calling `hardComputation()` based on the counter's value. The second does the same all over again, but this time counting down from 100 to one instead.

If we run this function in the console, we'll see that `hardComputation()` is called 200 times. However, we can see that the function gets called with the exact same argument twice. For instance, `hardComputation(50)` is called twice, once in the first while loop as the counter is incrementing and then again in the second while loop when the second counter is decrementing. Because `hardComputation()` actually isn't that complex, the duplicate calls are trivial. But imagine that the computation was so hard that it would take a computer a full second to compute each time. In that case, the `sillyAdderCounter()` function will take 200 seconds to run. Instead, we can use memoization to remove the duplicate calls and make our function much more efficient.

Let's see how. The code is going to get even more clunky — but again, that's to illustrate how memoization works.

```js
function sillyCounterAdder() {
  // Add memo object.
  let memo = new Map();
  let totalCalls = 0;
  const hardComputation = function(counter) {
    totalCalls++;
    console.log(`totalCalls: ${totalCalls}`); 
    return (counter * counter + counter)/ counter;
  }
  let counter1 = 1;
  let counter2 = 100;
  let finalAnswer = 0;
  while (counter1 <= 100) {
    // Check to see if value is in memo.
    if (memo.has(counter1)) {
      // If it's in memo, grab the value from the memo instead of calling the function.
      finalAnswer = finalAnswer + memo.get(counter1);
      console.log("Value retrieved from memo in first while loop!");
    } else {
      // If it's not in memo, compute the function call and also add it to the memo.
      const computation = hardComputation(counter1);
      memo.set(counter1, computation);
      finalAnswer = finalAnswer + computation;
      console.log("Memoized in first while loop!");
    }
    counter1++;
  }
  while (counter2 > 1) {
    // Check to see if value is in memo.
    if (memo.has(counter2)) {
      // If it's in memo, grab the value from the memo instead of calling the function.
      finalAnswer = finalAnswer + memo.get(counter2);
      console.log("Value retrieved from memo in second while loop!");
    } else {
      // If it's not in memo, compute the function call and also add it to the memo.
      const computation = hardComputation(counter2);
      memo.set(counter2, computation);
      finalAnswer = finalAnswer + computation;
      console.log("Memoized in second while loop!");
    }
    counter2--;
  }
  return finalAnswer;
}
```

Let's take a closer look at how memoization is working in this code.

First we create a new `memo` object:

```js
let memo = new Map();
```

Next, in both while loops, we check to see if the memo has a key for the specific argument we're passing into `hardComputation()`. Let's take a look at what's happening in the first while loop.

```js
if (memo.has(counter1)) {
  finalAnswer = finalAnswer + memo.get(counter1);
  console.log("Value retrieved from memo in first while loop!");
} else {
  const computation = hardComputation(counter1);
  memo.set(counter1, computation);
  finalAnswer = finalAnswer + computation;
  console.log("Memoized in first while loop!");
}
```

First, the conditional checks if the memo has a key for the value of `counter1`. If it does, we can just grab the value associated with that key from the memo.

Otherwise, we need to call that function, set the key-value pair for that argument and its return in the memo, and then add it to the `finalAnswer`.

The exact same thing happens in the second while loop as well. The code isn't DRY but the purpose here is to see when the function call is memoized and when we can skip the function call and just get the result from the memo instead.

Before running this function in the console, try to figure out the answer to the following questions. Don't worry, there are no trick questions here. The answers are straightforward.

* How many times will `"value retrieved from memo in first while loop!"` be logged to the console?
* How many times will `"memoized in first while loop!"` be logged to the console?
* How many times will `"value retrieved from memo in second while loop!"` be logged to the console?
* How many times will `"memoized in second while loop!"` be logged to the console?
* How many total calls will be made to `hardComputation()`?

Go ahead and try the `sillyCounterAdder()` function in the console and see if your answers are correct.

You'll see that the first while loop never retrieves values from the memo. Instead, every value gets memoized. The `hardComputation()` function needs to be called for every argument from one to 100 — and each of these values will be memoized in a key-value pair where the key corresponds to the argument and the value corresponds to the result of the function. So the answer to the first question is 0 while the answer to the second question is 100.

Then, in the second while loop, we need to grab all the values of `hardComputation()` from 100 all the way down to one. Well, all of these values were memoized in the first while loop. That means the value will be retrieved from the memo 100 times while memoization will happen zero times in the second while loop.

The total number of calls to `hardComputation()` will be 100 instead of 200 — so we've cut our calls in half. If each of these calls took one second, we are cutting down the total time it takes to run the `sillyCounterAdder()` from nearly three and a half minutes to under two minutes.

Obviously, this is a very contrived example — but the purpose of the code above is to show how memoization works. If the value of a time-consuming function call doesn't exist in the memo, it is memoized. If the value does exist, it's grabbed from the memo, which is much faster than calling the time-consuming function all over again. Memoization is such a powerful technique that it can be one of the biggest time-savers in a recursive function. Imagine, for instance, a recursive function that has to call itself with a specific argument thousands of times. If that value already exists in a map, you are reducing all those function calls down to a single function call — plus however many times you need to look up a key-value pair in the map, which is an extremely fast process.

The example above works perfectly fine when it comes to explaining how memoization works. However, it's not reusable at all. Wouldn't it be so much nicer if we could just write a `memoize()` function that we could apply to any recursive function?

Well, we can use some of the functional programming techniques we've learned in the past to do exactly that. Specifically, we'll need to use a closure and take advantage of the fact that JavaScript functions are first-class citizens that can be passed around as arguments. Let's write a `memoize()` function that works for functions that take a single argument.

```js
function memoize(func) {
  let memo = new Map();
  return function(argument) {
    if (memo.has(argument)) {
      return memo.get(argument);
    } else {
      const value = func(argument);
      memo.set(argument, value);
      return value;
    }
  }
}
```

Now let's take a closer look at what's happening here. Our `memoize()` function takes a function (`func`) as an argument. When it's called, it will create a new map for that specific function called `memo`. So we can do the following inside our `sillyCounterAdder()` function:

```js
let memo = memoize(hardComputation);
```

This will create a closure. Whenever we call `memo(argument)`, this function will be called:

```js

function(argument) {
  if (memo.has(argument)) {
    return memo.get(argument);
  } else {
    const value = func(argument);
    memo.set(argument, value);
    return value;
  }
}
```

So when we create a closure with `let memo = memoize(hardComputation)`, the value of `func` will always be `hardComputation` for this particular closure. 

So let's say that we want to memoize or grab the value of `hardComputation(1)`. Well, we call `memo(1)`.

If the memo contains the key of 1 (`memo.has(argument)`), it will return the value associated with that key (`memo.get(argument)`).

However, if it doesn't, our `memo()` function will call the function with that specific argument and store that in `const value`). It will memoize that key-value pair (`memo.set(argument, value)`) and then it will return the `value`.

Either way, this function returns the correct value. If the key exists, it just grabs the value from the map we've created. Super fast. If it doesn't, it calls the function, memoizes it, and returns the value — so it will be super fast the next time we call the function with the same argument.

Let's refactor our `sillyCounterAdder()` function to use our new `memoize()` function:

```js
function sillyCounterAdder() {
  let totalCalls = 0;
  const hardComputation = function(counter) {
    totalCalls++;
    console.log(`totalCalls: ${totalCalls}`); 
    return (counter * counter + counter)/ counter;
  }
  // Here's where we create our closure.
  let memo = memoize(hardComputation);
  let counter1 = 1;
  let counter2 = 100;
  let finalAnswer = 0;
  while (counter1 <= 100) {
    finalAnswer = finalAnswer + memo(counter1);
    counter1++;
  }
  while (counter2 > 1) {
    finalAnswer = finalAnswer + memo(counter2);
    counter2--;
  }
  return finalAnswer;
}
```

Here's what's changed in the code.

First, we create a closure with the following line:

```js
let memo = memoize(hardComputation);
```

We've already explained how this works so let's skip ahead to where it's used:

```js
finalAnswer = finalAnswer + memo(counter1);
```

There's no longer any need for conditionals. Our new `memo()` function (created from our `memoize()` function) simply has to take the current argument and either memoize the function result and return it or, if the key-value pair already exists in the memo, just grab it and return that value without making the function call.

`sillyCounterAdder()` is still quite silly but the `memoize()` function is an excellent, concise solution for adding memoization to _any_ function we like (provided it has one argument). If you try out the code above, you'll see that just 100 function calls are made instead of 200. We've effectively used memoization to reduce the number of function calls by half.

The next step is for you to do some practice on your own.

* First, update the `memoize()` function so it can take any number of arguments.
* Next, write a recursive function called `fibonacci()` that determines a value at a specific position in the [Fibonacci sequence](https://www.mathsisfun.com/numbers/fibonacci-sequence.html). The Fibonacci sequence is a very popular programming problem to use with memoization. Your first solution shouldn't use memoization yet, though.
* Finally, use the `memoize()` function to make your `fibonacci()` function more efficient.
* Have you solved any other problems recursively that could use memoization? Look back at some of these solutions and determine whether they can benefit from memoization. If so, try to incorporate memoization into your solution. If not, write up your reasons why not — or share them with a pair.