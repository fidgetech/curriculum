---
title: "📓 3.1.1.7 Storing State in Closures"
day: monday
id: 3-1-1-7-storing-state-in-closures
hide_table_of_contents: true
---

In the last lesson, we saw that functional programming tries to manage state without directly mutating it. Closures give us one way to do that — they can hold onto a value between calls without exposing it to the rest of the program.

Let's see how. We'll create a function that increments a counter to demonstrate:

```js
const counterFunction = () => {
  let counter = 0;
  return () => {
    counter ++;
    return counter;
  }
}
```

In the example above, the outer function `counterFunction()` stores a variable `counter` which is set to `0`. Note that we use `let` here because we will be modifying the value of the counter.

Our `counterFunction()` returns an anonymous function that increments `counter` and returns its value. Note that `counter++` is a mutation — not strictly pure functional style. We're allowing it here because the mutation is hidden inside the closure and never exposed to the outside world. The inner function has access to `counter` due to **lexical scope**: an inner function can always access variables declared in the outer functions that surround it.

Now we can do the following:

```js
const incrementer = counterFunction();
```

If we check the value of `incrementer` in the console, we'll see that it stores our inner function:

```js
() => {
  counter ++;
  return counter;
}
```

We can't see the value of `counter` but we know that `incrementer` has access to it due to lexical scope. So what happens if we call this function multiple times?

```javascript
> incrementer()
1
> incrementer()
2
> incrementer()
3
```

Each time we call `incrementer()`, it modifies the value of `counter`. Since `incrementer()` is inside the outer function's lexical scope, it remembers the value of `counter`. However, the outer function isn't being called again so `counter` never falls out of scope (nor is it reassigned) regardless of how many times we call in the inner function.

What would happen if we created another incrementer and then called our first incrementer again?

```javascript
> const incrementerTwo = counterFunction();
> incrementerTwo()
1
> incrementerTwo()
2
> incrementer()
4
```

`incrementerTwo` creates a _new_ lexical scope that doesn't affect the value of `counter` in `incrementer`. In other words, we could store an indefinite number of counters in functions using our closure.

In the next lesson, we'll build a small application that will use a closure to store state.
