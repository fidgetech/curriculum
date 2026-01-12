---
title: "📓 3.1.0.10 Function Factories"
day: weekend
id: 3-1-0-10-function-factories
hide_table_of_contents: true
---

In the previous lesson, we learned about closures. Now we'll explore one of the most practical uses of closures: **creating reusable helper functions**.

## Function Factories
---

A **function factory** is a function that creates and returns other functions. This pattern lets you pre-configure functions with specific settings, making your code more reusable and maintainable.

Let's start with a practical example. Imagine you're building an app that needs to format messages in different ways:

```js
function createMessageFormatter(prefix) {
  return function(message) {
    return `${prefix}: ${message}`;
  };
}
```

Now we can create specialized formatters:

```js
const errorMessage = createMessageFormatter("ERROR");
const warningMessage = createMessageFormatter("WARNING");
const infoMessage = createMessageFormatter("INFO");

errorMessage("File not found");     // "ERROR: File not found"
warningMessage("Low disk space");   // "WARNING: Low disk space"
infoMessage("Process complete");    // "INFO: Process complete"
```

This is the power of function factories: we wrote one generic function and used it to create multiple specialized functions. Each specialized function "remembers" its prefix thanks to closures.

## Another Example: Discount Calculator
---

Here's a common use case - creating specialized calculators:

```js
function createDiscountCalculator(discountPercent) {
  return function(price) {
    const discount = price * (discountPercent / 100);
    return price - discount;
  };
}

const studentDiscount = createDiscountCalculator(15);
const seniorDiscount = createDiscountCalculator(20);
const employeeDiscount = createDiscountCalculator(30);

studentDiscount(100);   // 85
seniorDiscount(100);    // 80
employeeDiscount(100);  // 70
```

This pattern keeps your code DRY (Don't Repeat Yourself) and makes it easy to add new discount types without duplicating logic.

## When to Use Function Factories
---

Function factories are helpful when:

- You have a function that needs the same configuration values repeatedly
- You want to create multiple specialized versions of a generic function
- You need to encapsulate configuration or settings

:::tip[Functional Programming Terms]
The pattern of creating specialized functions from generic ones has formal names in functional programming: **partial application** (fixing some arguments) and **currying** (breaking functions into single-argument functions). You don't need to memorize these terms, but if you see them in interviews or documentation, they refer to these concepts we've been practicing.
:::

Remember: function factories are just a practical application of closures. The inner function remembers the outer function's variables, letting you create customized, reusable functions.

This is another complex concept that often takes some time to absorb. Don't worry — you will get more practice and we will cover more use cases in upcoming lessons.