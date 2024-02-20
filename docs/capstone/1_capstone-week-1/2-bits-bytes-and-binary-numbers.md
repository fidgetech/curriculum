---
title: "\U0001F4D3 Bits, Bytes, and Binary Numbers"
id: bits-bytes-and-binary-numbers
slug: bits-bytes-and-binary-numbers
hide_table_of_contents: true
sidebar_position: 25
day: wednesday
type: lesson
url: >-
  https://github.com/fidgetech/capstone/blob/main/2_bits_bytes_and_binary_numbers.md
---

Computers use the binary number system, but what exactly does that mean? At this point, we should all recognize a number that's using the binary number system — it's just a series of zeroes and ones. For example, an uppercase `A` translates to `01000001` in binary code.

Humans generally use the decimal number system, though. The decimal number system is base 10. We have ten total digits: 0 through 9. When we are counting up, we hit the end of these digits when we reach 9. To get to the next number, we add an extra digit to the beginning and start over. That gives us the number 10. The same pattern happens when we switch from 99 to 100, 999 to 1000, and so on.

The binary number system is base 2, which means it only uses two digits: 0 and 1. When we get to the number 1, we have to add a new digit and start over.

Let's take a look:

```
<!-- We start at 0. -->

0
1

<!-- We've reached the point where we need to roll over and add a digit. -->

10
11

<!-- Time to roll over again and add a digit. -->

100
101
110
111

<!-- As we can see, we are gradually increasing the amount of numbers we can count up to before rolling over. -->

1000
1001
1010
1011
1100
1101
1111

<!-- These are the first fifteen numbers in the binary system. See if you can do the next five. -->
```

Why does a computer use binary language? Well, at the very deepest level, a computer's processing power consists of billions of transistors that have only two states: on and off. The 1 represents the on state while the 0 represents the off state. Humans most likely use a decimal system because we (usually) have ten fingers to count on. If we all had 8 fingers, we'd likely use the octal system, and if we had 12, we'd probably use the duodecimal system. Some cultures (such as the Mayans) even had a base 20 system (counting on both fingers and toes). If we want to extend the metaphor, we can think of a transistor as having two fingers — it can only count to two. Fortunately, a computer can look at lots of transistors all at once in order to count.

Each 0 or 1 in a sequence of binary code is a **bit**. A bit by itself isn't very helpful. In general, for each bit we add to a sequence, we have double the number of total possible permutations:

* **1 bit**: 2 permutations
* **2 bit**: 4 permutations
* **3 bit**: 8 permutations
* **4 bit**: 16 permutations
* **5 bit**: 32 permutations
* **6 bit**: 64 permutations
* **7 bit**: 128 permutations
* **8 bit**: 256 permutations

A group of eight bits put together is known as a **byte**. A byte consists of 256 different combinations if you include the number 00000000 — all the binary numbers between 00000000 and 11111111.

A single byte is an excellent option for storing characters. It's no coincidence that there are 255 characters represented in the extended set of ASCII character codes. Also, if you've ever played an old Nintendo video game, the max value of a stat or thing you can hold is often 255. For example, in the original Legend of Zelda on the Nintendo Entertainment System, you can only have up to 255 rupees, the currency of the game. It's not because 255 is a nice-sounding number — it's because that is the total number of permutations of rupees that can be stored in a single byte (ranging from 0 to 255) — and back then, game systems did not have the processing power that they do now.

Of course, processing power is much more advanced now. We now tend to measure things in terms of megabytes (say, a music file) and gigabytes (the storage space in our hard drive). Sometimes we might even talk in terms of terabytes. Here's how they all correspond to each other:

* **Byte**: 8 bits
* **Kilobyte**: 1024 bits (approximately 1000 bytes)
* **Megabyte**: 1024 kilobytes (approximately one million bytes)
* **Gigabyte**: 1024 megabytes (approximately one billion bytes)
* **Terabyte**: 1024 gigabytes (approximately one trillion bytes)

Now that we know the basics of bits and bytes and have also covered the basics of the binary number system, let's look at some methods we can use with binary numbers. This will allow us to explore use cases for bitwise manipulation in the next lesson.

### Converting Decimal to Binary with `Number.prototype.toString(2)`

We can also convert any number into its binary equivalent with the `Number.prototype.toString()` method. This method turns a number to its string equivalent — but we can also specify an optional base as an argument. Because the binary number system is base 2, we can convert a decimal number to binary like this:

```js
> (34).toString(2);
"100010"
```

Note that we have to put parentheses around the number or the parser will get confused and throw the following error: `Uncaught SyntaxError: Invalid or unexpected token`.

In the next lesson, we'll learn more about bit manipulation, including JavaScript operators for manipulating bits. In the process, we'll learn about some use cases for bit manipulation in the real world.