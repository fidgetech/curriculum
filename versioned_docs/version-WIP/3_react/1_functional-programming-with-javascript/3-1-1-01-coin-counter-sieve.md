---
title: '✏️ 3.1.1.1 Coin Counter, Sieve'
day: monday
id: 3-1-1-1-coin-counter-sieve
hide_table_of_contents: true
---

**Goal:** Get comfortable with the basics of functional programming. Practice writing pure functions, closures, function factories, and recursive functions.

## Warm Up
---

* What is a pure function? What are some of the benefits of pure functions?
* What is immutability? Why is it important in functional programming?
* What is a closure?
* Why would we want to build a function factory?

## Code
---

### Coin Counter

#### Part 1: Refactor to Functional

Before writing anything new, refactor the starter code below into a pure function.

- Your function should take a number of cents and return a new object with the coin breakdown.
- It should not use a class, store any state on `this`, or modify anything outside of itself.
- Same input should always produce the same output.

```js
class CoinCounter {
  constructor() {
    this.total = 0;
    this.quarters = 0;
    this.dimes = 0;
    this.nickels = 0;
    this.pennies = 0;
  }

  count(cents) {
    this.total = cents;
    this.quarters = Math.floor(cents / 25);
    cents = cents % 25;
    this.dimes = Math.floor(cents / 10);
    cents = cents % 10;
    this.nickels = Math.floor(cents / 5);
    this.pennies = cents % 5;
  }
}

const counter = new CoinCounter();
counter.count(99);
console.log(counter.quarters); // 3
```

#### Testing

Here are some sample Jest tests to get you started:

```js
describe('coinCounter', () => {
  test('returns correct number of quarters', () => {
    expect(coinCounter(100).quarters).toBe(4);
  });

  test('returns correct change for $4.99', () => {
    const result = coinCounter(499);
    expect(result.quarters).toBe(19);
    expect(result.pennies).toBe(4);
  });

  test('returns an object with all four coin types', () => {
    const result = coinCounter(99);
    expect(result).toHaveProperty('quarters');
    expect(result).toHaveProperty('dimes');
    expect(result).toHaveProperty('nickels');
    expect(result).toHaveProperty('pennies');
  });
});
```

Your tests don't need to match this structure exactly — the goal is to verify your functions behave correctly and return the expected output.

Be sure to write tests for Parts 2 and 3 as well.

#### Part 2

Rewrite your coin counter function so that it uses recursion to solve the problem instead of the step-by-step math approach above.

#### Part 3

Create a coin counter using a closure, with separate functions for each coin type (quarters, dimes, nickels, pennies). You can use recursion if you like.

---

### Roman Numerals

You've already had a chance to create an application to convert numbers into Roman numerals. This time, solve the problem recursively!

Roman numerals are based on seven symbols:

```
Symbol  Value
I       1
V       5
X       10
L       50
C       100
D       500
M       1,000
```

The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.

The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC.

You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC.  You cannot count higher than 3,999 in Roman numerals.

---

### Prime Sifting

The goal in solving this problem is to use recursion!

Given a number, write a method that returns all of the prime numbers less than that number.

This is a tricky problem and you should use the Sieve of Eratosthenes to solve it. Here's how the Sieve of Eratosthenes works to find a number up to a given `number`:

* Create a list of numbers from 2 through n: 2, 3, 4, ..., `number`.
* Initially, let `prime` equal 2, the first prime number.
* Starting from `prime`, remove all multiples of `prime` from the list.
* Increment `prime` by 1.
* When you reach `number`, all the remaining numbers in the list are primes.

You also might find [this video](https://www.youtube.com/watch?v=V08g_lkKj6Q) helpful in explaining the Sieve.

## Instructor/Peer Code Review
---

* Code uses functional programming and does not mutate state.
* Code is well tested.
* Code demonstrates an understanding of closures, recursion, and other functional concepts.
* Application works as expected.
