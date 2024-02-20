---
title: "\U0001F4D3 Manipulating Bits"
id: manipulating-bits
slug: manipulating-bits
hide_table_of_contents: true
sidebar_position: 26
day: wednesday
type: lesson
url: 'https://github.com/fidgetech/capstone/blob/main/3_manipulating_bits.md'
---

In the last lesson, we learned about bits — the smallest units of binary code that our machines use to operate. In this lesson, we'll learn how to work with bits, including comparing and manipulating them.

Why learn about bit manipulation? While working with binary code might be necessary on the lowest level of the machine, why would we use bits in higher-level languages? Well, it turns out that bits are very useful for a number of different things:

* **Hashing algorithms**: These algorithms are used to convert a hash into an array and back. They are an essential part of hash tables, which we will cover in a future lesson, and hashing algorithms often use bitwise manipulation.
* **Encryption**: Encryption processes use hashing algorithms as well. We can use bitwise manipulation to improve our encryption and make it exceptionally difficult to crack passwords.
* **Compression**: Bitwise manipulation is often used for compression algorithms. An example is the widely used [zlib](https://www.euccas.me/zlib/) library, which is implemented with Node, Ruby, C#, and many other languages.
* **Storing boolean values**: We can store multiple boolean values with a minimum amount of data. This is useful for determining read/write permissions and also has other potential applications which we will cover later.

Now that we can see some of the potential use cases for bit manipulation, let's take a look at the bitwise operators we can use in JavaScript. Note that almost all of these bitwise operators are exactly the same in Ruby and C# as well.

### & Bitwise Operator

The AND bitwise operator (`&`) is used to check if _both_ binary values are true. Remember that 1 corresponds to true, and 0 corresponds to false.

The following corresponds to 1 because both values are 1.

```
  1
& 1
  1
```

In other words, `1 & 1` returns `1`.

By the way, don't try any of this in the console just yet as there's a big gotcha that we'll cover in just a moment.

Meanwhile, all of the following will return 0:

```
  1     0     0
& 0   & 0   & 1
  0     0     0
```

This is because _both_ values need to be 1 for it to return 1.

We can apply this concept for longer binary numbers. Each column will be checked to see if it should return 0 or 1.

```
  100110
& 110011
  100010
```

In the first column, when we compare the numbers in the first two rows, they are both 1. So the result is a 1. For the next column, we have a 0 and 1, so the result is a 0. We check the value of each column to get a final result of `100110`.

Now for the console gotcha. What happens if we try this in the console?

```js
// Won't work correctly.

> 100110 & 110011
99594
```

This isn't right. What's happening here? Well, JavaScript sees `100110` and `110011` as decimal numbers, not binary numbers. It's _translating_ them into binary numbers. To let JavaScript know that we are using binary numbers, not decimals, we need to prefix each number with `0b` like this:

```js
// Still won't work correctly.
> 0b100110 & 0b110011
34
```

Now it's returning a different outcome — but it's _still_ the wrong result. This is because JavaScript also translates the _result_ into decimals as well. So in addition to translating the binary numbers into decimals if we don't use `0b`, JavaScript will also return the result as a decimal number. Fortunately, we can use `Number.prototype.toString(2)` (which we learned about in the last lesson) to translate it right back into its binary equivalent. This is how we need to get the result we want in binary:

```js
// This works!
> (0b100110 & 0b110011).toString(2)
"100010"
```

### | Bitwise Operator

The OR bitwise operator (`|`) will return a 1 if _any_ of the values in a column are 1. It will return a 0 if _all_ the values in a column are 0.

```
  1000101
| 0111011
  1111111
```

In the example above, at least one of the columns always has a 1 value so the result of each column is 1.

### ^ Bitwise Operator

The XOR operator (`^`), short for the exclusive or operator, checks to see if the bits at the same position of multiple binary numbers are the same or different. If they are different, it returns 1. If they are the same, it returns 0.

```
  01001100
^ 10101010
  11100110
```

### ~ Bitwise Operator

The NOT operator (`~`) switches every bit in a binary number to its opposite. For example, the following:

```
~101010
```

Will become:

```
-010101
```

All of the zeroes become ones and all of the ones become zeroes. In addition to that, the number also becomes negative!

How does a computer know if a binary number should be negative or not? Well, there's an additional bit that is reserved for if a number is positive or negative. If that reserved bit is a 1, then the number is negative. However, when we use binary numbers, we will use a negative sign for negative binary numbers because it is challenging to depict a reserved 0 or 1 that shows whether the number is positive or negative. Because we aren't transistors, there is no need for us to use a special bit.

### Bitwise Shift Operators

There are also three bitwise shift operators which will shift bits to the left or right.

### Left Shift (`<<`)

The `<<` (left shift) operator shifts bits to the left, filling in the empty space on the right-hand side with zeroes.

For instance, if we do a left shift of 2 spaces of the following binary number:

```
10100<<2
```

We get the following result:

```
1010000
```

We've just shifted everything over to the left by adding two zeroes at the end.

### Sign-Propagating Right Shift (`>>`)

We can also shift values to the right. This won't add zeroes, though — instead, it will drop the specified number of bits from the end of the binary number. The _sign-propagating_ part sounds fancy but it just means that the shift won't change the sign of the binary number (whether it's positive or negative).

Here's an example. The following:

```
101001011>>3
```

Will become:

```
101001
```

The last three digits on the right are removed.

### Zero-Fill Right Shift (`>>>`)

All of the previous operators we've covered are also in Ruby and C#. This one, however, is not, most likely because it doesn't have many use cases.

Like the last shift, the zero-fill right shift shifts bits a specified number. The difference is that the sign is shifted to zero as well — which means the number will always be positive after a zero-fill right shift. If the number is already positive, a zero-fill right shift and a sign-propagating right shift operate in exactly the same way.

In this lesson, we've covered all the important bitwise operators that JavaScript makes available. We also learned about the prefix `0b` which we need to use to specify that a number should be evaluated as binary, not decimal. In addition to that, we need to use the method `Number.prototype.toString(2)` to ensure that JavaScript evaluates our results as binary, not decimal numbers.

In the next lesson, we'll have an opportunity to practice solving some problems using bitwise manipulation!