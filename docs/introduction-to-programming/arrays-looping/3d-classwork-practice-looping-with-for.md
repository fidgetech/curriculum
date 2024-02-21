---
title: '✏️ 1.3.3.5 Practice: Looping with for'
id: 1-3-3-5-practice-looping-with-for
hide_table_of_contents: true
day: wednesday
---

**Goal**:  In the last lesson, we learned:

* The three parameters of a `for` loop
* How to use a `for` loop both with and without arrays

Practice utilizing for loops in a variety of ways by completing one of the exercises detailed below.

## Warm Up
---

* What is the difference between `for` and `Array.prototype.forEach()` loops? Why should you generally favor `Array.prototype.forEach()`?
* How does a for loop know when to stop looping?
* What is the last parameter in a `for` loop and what is it for?

## Code
---

Complete one of the exercises below.

### Count Up By

Create a program that takes two numbers — one to count to and another to determine what multiple to use to get there.

Here is some sample input:
<br />
Count to:  30 <br />
Count by:  5 <br />
Output: 5, 10, 15, 20, 25, 30 <br />

Count to:  50 <br />
Count by: 7 <br />
Output:  7, 14, 21, 28, 35, 42, 49

Don't forget to consider how to handle any input that might be submitted:

* Empty values (user just presses enter)
* Non-numeric values (It may be helpful to read up about the numerical value, [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN))
* Negative numbers
* Count by number is larger than the count to numbers

### Turn forEach() into For

Go back through the [looping practice]( https://old.learnhowtoprogram.com/introduction-to-programming/arrays-and-looping/practice-looping) problems, and redo one of them with a `for` loop instead of a `forEach()` loop.

### Word Puzzle

Create a website that uses a method to replace vowels in a string with the dash symbol "-" to create a word puzzle to solve. Hide the original string when you show the resulting word puzzle, so that another person can try and guess it.

**Example:**

_String Input:_  "Believe you can and you're halfway there. Theodore Roosevelt"

_Puzzle Output:_  "B-l--v- y-- c-n -nd y--'r- h-lfw-y th-r-. Th--d-r- R--s-v-lt"

Do this **without** regular expressions. (If you don't know what a regular expression is yet, don't worry — we will be covering them in a future lesson.)

## Peer Code Review
<hr />

* Is the business logic and user interface logic distinctly separate?
* Are variable names descriptive and in lower camelCase?
* Does the code have proper indentation and spacing throughout?
* Are for loops being used correctly?
* Are `forEach()`loops being used correctly?
