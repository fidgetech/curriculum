---
title: "📓 3.1.0.3 Testing Functional Code"
day: weekend
id: 3-1-0-3-testing-functional-code
hide_table_of_contents: true
---

## Why Functional Code is Easy to Test

Good news: functional code is actually *easier* to test than object-oriented code. Here's why:

**Pure functions are predictable:**
```js
// This function always returns the same output for the same input
const double = (num) => num * 2;

// Testing it is straightforward
test('doubles a number', () => {
  expect(double(5)).toBe(10);
  expect(double(0)).toBe(0);
  expect(double(-3)).toBe(-6);
});
```

No setup, no teardown, no mocking - just input and output.

**No side effects means isolated tests:**
```js
// OOP approach - harder to test
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

// FP approach - easier to test
const increment = (count) => count + 1;

test('increments a number', () => {
  expect(increment(5)).toBe(6);  // That's it!
});
```

## Testing Setup for This Section

You'll use the same Jest setup you learned in Intermediate JavaScript. If you need a refresher:

- [Jest setup guide](../../intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-1-4-setting-up-jest)
- [Shape Tracker example project](https://github.com/epicodus-lessons/section-5-shape-tracker)

## What to Test

For each function:
1. Test the expected output for typical inputs
2. Test edge cases (empty arrays, zero, negative numbers)
3. Test that the original data isn't mutated (for array/object operations)

Example:
```js
const filterAdults = (users) => users.filter(user => user.age >= 18);

test('filters users 18 and older', () => {
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 16 }
  ];
  expect(filterAdults(users)).toEqual([{ name: 'Alice', age: 25 }]);
});

test('does not mutate original array', () => {
  const users = [{ name: 'Alice', age: 25 }];
  filterAdults(users);
  expect(users).toEqual([{ name: 'Alice', age: 25 }]);
});
```

You're expected to write tests for all functions in your projects, just like in previous sections.
