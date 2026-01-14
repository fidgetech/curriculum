---
title: "📓 3.1.0.6 Spread Operator"
day: monday
id: 3-1-0-6-spread-operator
hide_table_of_contents: true
---

One of the most popular features of ES6+ is the **spread operator**. Spread syntax looks like this: `...`

There are multiple uses for the spread operator, but we are going to focus on two use cases:

 * Making copies of objects and arrays
 * Merging multiple objects or arrays together

At the end of the lesson, we'll also briefly cover the JavaScript method `Object.assign()`. This method operates in a similar fashion to the spread operator. We'll also cover a few other uses of the spread operator as well.

### Copying Arrays

Let's start by looking at how we can use the spread operator to copy an array. Try this out in the REPL:

```js
const array1 = [1, 2, 3];
const array2 = [...array1];
```

In the example above, we create a new array `array2` that is a copy of `array1`. If we check the value of `array2`, we will see that it is `[1, 2, 3]`. If we were to modify `array2`, `array1` would remain unchanged. This is because `array2` is a completely new array in memory.

```js
const numbers = [1, 2, 3];

// Add to end (instead of push)
const appended = [...numbers, 4];  // [1, 2, 3, 4]

// Add to beginning (instead of unshift)
const prepended = [0, ...numbers];  // [0, 1, 2, 3]

// Remove item at index 1
const withoutSecond = [...numbers.slice(0, 1), ...numbers.slice(2)];  // [1, 3]

// Filter out what you don't want (simpler than the previous example, with the same result)
const filtered = numbers.filter(n => n !== 2);  // [1, 3]

// Combining arrays
const moreNumbers = [4, 5, 6];
const combined = [...numbers, ...moreNumbers];  // [1, 2, 3, 4, 5, 6]

```

### Copying Objects

Now let's take a look at how we can use the spread operator to copy an object. Try this out in the REPL:

```js
const myCat = {
  name: "Murphy",
  age: 1
}

const anotherCat = {...myCat};
```

If we look at the value of `anotherCat`, we will see that it has the same properties as `myCat`.

Let's say we want to make a copy of `myCat` and also update the `age` property in the new object. We can do this:

```js
const myCat = {
  name: "Murphy",
  age: 1
}

const myCatGotOlder = {...myCat, age: 2}
```

In the example above, we create a new object using the spread operator and then specify which properties should be different. If we try the example in the REPL, the value of `myCatGotOlder` is `{ name: 'Murphy', age: 2 }`.

We can also add new properties to the copy of the object as well — they don't have to be properties that existed on the object being copied. Here's an example:

```js
const myCat = {
  name: "Murphy",
  age: 1
}

const myCatGotOlder2 = {...myCat, age: 2, color: "gray and white"}
```

The value of `myCatGotOlder2` will be `{ name: 'Murphy', age: 2, color: 'gray and white' }`.

### Merging Objects

We can also use the spread operator to merge multiple different objects. Let's take a look at an example:

```js
const flagColor1 = {
  color1: "green"
}

const flagColor2 = {
  color2: "gold"
}

const flagColor3 = {
  color3: "black"
}

const jamaicanFlag = {...flagColor1, ...flagColor2, ...flagColor3};
```

Now if we check the value of `jamaicanFlag`, we'll see that it is `{color1: "green", color2: "gold", color3: "black"}`. All three objects have been merged into one! Be careful, however. If several objects have the same property, then the last object that has that property will override the previous value. For instance, let's say that all three of the objects above just had a `color1` property:

```js
const flagColor1 = {
  color1: "green"
}

const flagColor2 = {
  color1: "gold"
}

const flagColor3 = {
  color1: "black"
}

const jamaicanFlag = {...flagColor1, ...flagColor2, ...flagColor3};
```

Now if we type in `jamaicanFlag`, it will return `{color1: "black"}`.

### Object.assign()

The spread operator works very similarly to the JavaScript method `Object.assign()`, which is also used to copy and merge objects. You should be familiar with this method as well.

For instance, if we wanted to create a `jamaicanFlag` object using the variables above, we'd do the following:

```javascript
const jamaicanFlag = Object.assign({}, flagColor1, flagColor2, flagColor3);
```

`Object.assign()` can take multiple arguments. The first argument is the object that should be copied or merged. By passing in an empty object `{}` as the first argument, which we do in the example above, we ensure that the original objects are not mutated. Each additional argument is an object that should be merged into the original.

### Issues with Copying JavaScript Objects

We want to copy objects in functional programming so our code remains immutable. Each time we modify a variable, we are introducing mutability into our application. Copying objects into other constants ensures that each variable is immutable.

There's an important limitation to be aware of: the spread operator creates a **shallow clone** of arrays and objects. For simple arrays or objects with only primitive values (numbers, strings, booleans), this works perfectly fine - you get a completely new array or object in memory. However, for **nested arrays or objects**, the spread operator only copies the top level. Any nested arrays or objects are still references to the original. A **deep clone** creates entirely new copies of all nested arrays/objects. For simple arrays or objects with only primitive values, the spread operator works perfectly fine. But for complex nested arrays/objects, you'd need to use another method, which we'll explore in a later lesson.

```js
const original = [{ name: "Grover" }];
const copy = [...original];
copy[0].name = "Elmo";
console.log(original[0].name);  // "Elmo" — original was also affected!
```

### Other Uses for the Spread Operator

While we will be focused on the use cases above during this course section, the spread operator is useful in other ways as well. For example, we can use it to pass arguments into functions as separate arguments. The example below will pass all arguments from the array into the function — **as separate arguments, not as an array**.

```js
const numbers = [1,2,3];
Math.max(...numbers); // 3
```

### Conclusion

In this lesson, we covered copying and merging objects with both the spread operator and `Object.assign()`. These JavaScript techniques are very important and are also commonly used in React.

The spread operator also has other uses as well. Check out Mozilla's [spread syntax documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) for more.
