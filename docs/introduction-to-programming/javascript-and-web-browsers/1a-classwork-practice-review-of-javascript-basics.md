---
title: '✏️ 1.2.1.1 Practice: Review of JavaScript Basics'
id: 1211-practice-review-of-javascript-basics
slug: 1211-practice-review-of-javascript-basics
hide_table_of_contents: true
sidebar_position: 23
day: monday
type: exercise
url: https://github.com/fidgetech/introduction-to-programming/blob/main/1a_classwork_practice_review_of_javascript_basics.md
---

**Goal:** Discuss and apply these JavaScript concepts with your pair:

* Operators
* Using MDN documentation
* String methods
* JavaScript conventions
* Data type detection and conversion

**Reminder:** Use the browser DevTools console to try out your JS code! If you need a review, read the instructions on how to use and pair program with the DevTools console [in this lesson]( https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-2-javascript-and-web-browsers/1-2-0-5-using-the-devtools-console-for-practice-and-pair-programming).

## Code
---

Work through each section of this practice lesson, switching who's driving and who's observing between each prompt.

### Operators

Use MDN documentation to learn about the remainder operator `%`, also known as "modulo": 

* Find the reference page for the remainder operator using Google or MDN's search.
* Read the description and examples. 
* Use the built-in console to try out the remainder operator.

Make sure everyone understands what the remainder operator does, then work through these questions:

* What is the `%` operator? How is the action it performs different from simply dividing?
* Name 3 different types of operators and give an example of each. 
* What does `console.log()` do?
* What is an operand? (Hint: this is not JavaScript-specific terminology.)

Find the remainder of the following expressions by diving the two operands:

* 1008 by 7
* 23423 by 75
* 90 by 3
* 9,870,834,205,987 by 324

### String Methods

Find the reference page on MDN for the `String.prototype.trim()` method. Read through the description and examples. Use the built-in console to try out this string method. 

Find the reference page on MDN for the `String.prototype.replace()` method. Read through the description and examples. Note — ignore the references to regex; we'll learn about regex in coming weeks. Use the built-in console to try out this string method.

### JavaScript Conventions

Answer these questions:

* How are we supposed to name our variables in JavaScript?
* What is the difference between a JavaScript expression and a JavaScript statement? 
* When should we include semicolons at the end of our lines of code?
* When should we use `let` and when should we use `const` to declare a variable?

### Data Type Detection and Conversion

* What are the two main categories of data types?
* What is `undefined`?
* What data type is `NaN`? What about `Infinity`? (Hint: if you are stuck, try detecting the data type.)

Work through these prompts:

* Set a variable called `favNum` equal to your favorite number and check the data type.
* Then, create a new variable called `stringNum` converting the previous variable to a string. Check the data type again.
* Next, create a third variable called `parsedBackToNum`, converting this string variable back to a number. Check the data type one more time.
* Compare the first and third variables (`favNum` and `parsedBackToNum`) using `===` to confirm that they are equal.
* Compare the first and second variables (`favNum` and `stringNum`) or second and third variables (`stringNum` and `parsedBackToNum`) to confirm that they are NOT equal.
