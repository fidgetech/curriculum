---
title: '✏️ 1.3.1.7 Practice: forEach loops'
day: monday
id: 1-3-1-7-practice-foreach-loops
hide_table_of_contents: true
---

**Goal**:  Practice using `Array.prototype.forEach()` to solve the problems below.

**Remember, understanding is the goal here. You're absolutely not expected to complete everything listed on this page. In fact, often we intentionally include _more_ content than can reasonably be completed in a single day. This allows students an opportunity to later review concepts without having to repeat exercises they've previously done. Focus on understanding the concepts, not on speed.**

## Code
---

Work through as many of the following exercises that you have time for during class.

### Groceries

* Create a form that allows a user to input items they need at the store. Use whatever input type that you prefer.
* When the user submits the form, hide the form and display the list of items in alphabetical order, all uppercased.

Hints: To do this, build an array of the inputted items. (Make sure you don't include any blank fields.) Sort the array in alphabetical order. Make a new array with each entry uppercased (don't just uppercase them when you display them). Then, display the sorted list of things as list items inside a `<ul>`. Explore [the MDN documentation on arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to research what method might be used to sort arrays.

### Word Play

* Create a form where users may enter a sentence.
* Turn that sentence into an array using the [`String.prototype.split()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split).
* Then, loop through this array to build a _new_ array out of every word in the sentence that is 3 or more characters in length.
* Finally, reverse the order of the new array, [`Array.prototype.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) it back together into a string, and display it to the user.

### Build a Deck

* Use a `Array.prototype.forEach()` loop within another `Array.prototype.forEach()` loop to build an array representing a deck of cards. A deck consists of 52 cards — 13 ranks in each of 4 suits.
* Then display a list of every card in the deck. (Hint: Each element of the array should read something like "ace of spades" or "4 of hearts".)

The start of your output should look something like this:

![This image shows a bullet point list of cards names. This is what the output of this webpage should look like.](/images/INTRO/week3-branching-looping-arrays/deck.png)

### Word Order

Create a website that lets users input a block of text. The application will then return a list of all the unique words and how many times they appeared.

For example, if the user inputs "hello world world", the page should show:

```
- hello 1
- world 2
```

#### Additional Challenges

If you finish, and feel comfortable with `Array.prototype.forEach()` loops, try to complete the above exercise but instead order the list by the number of appearances — greatest to least. This is challenging — but a great way to exercise your problem-solving skills.

Another challenge: for words that appear the same amount of times, order by which word appeared first.

## Peer Code Review
---

* Is the JavaScript business logic separate from the user interface logic?
* Are variable names descriptive and easy to understand?
* Is code properly indented throughout?
* Are loops being used correctly?
