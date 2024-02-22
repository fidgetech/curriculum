---
title: '✏️ 1.3.1.2 Practice: JavaScript Arrays'
day: monday
---

**Goal:** In the lessons on arrays, we learned:

* Arrays can contain numbers, strings, variables, expressions and other arrays.
* Arrays have methods like `Array.prototype.pop()`, `Array.prototype.push()`, `Array.prototype.shift()`, and `Array.prototype.unshift()`.
* We can access (or edit) an element from an array using bracket notation.

Familiarize yourself with arrays by completing the exercises below. First, we'll practice creating and manipulating arrays in the JavaScript console, then we'll move on to implementing them into a small project using the HTML and JavaScript concepts we learned in the last section.

## Warm Up
<hr />

* What is a pointer? When might we see one when working with JavaScript arrays?
* How can we use square bracket notation to isolate a single element in an array? What does this notation look like?
* What is the difference between `Array.prototype.pop()` and `Array.prototype.push()`?
* What types of objects can be placed into a JavaScript array?

## Code
<hr />

### Array Practice in the DevTools Console

Play around with arrays of your own by completing each of the following in the DevTools console:

* Make an array of your siblings' names or your favorite movie characters' names.
* Make an array of your parents' names.
* Combine these two arrays using `Array.prototype.concat()`.
* Add your pets' names using `Array.prototype.push()`.
* Reverse the order of the array. To do this, research array methods on MDN that perform reversing functionality
* Access one of your parents' names using the square bracket notation.
* Update the name of one of your parents using the index and square bracket notation.
* Check out methods from the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) (stick to using instance methods). Each person in your pair or group should pick one new array method to try.

### Favorite Things Webpage

When you're comfortable using arrays in the console, move on to implementing them into a full project:

* Build a page with a form containing input fields where users may enter several of their favorite things.
* Then, write code that gathers each of these form input values and places them into one array.
* After this is done, use your site to practice targeting and moving elements between arrays:
  * Use square bracket notation to access the second, first, and third elements of the original array of favorite things.
  * Then, use `Array.prototype.push()` to add only these elements (2nd, 1st, and 3rd) to a brand new array.
  * Finally, display this new array in your page's HTML as list items in a `<ul>` tag. Use the `document.createElement()` and `Element.append()` or `Element.prepend()` methods to create and add elements to your webpage. 
