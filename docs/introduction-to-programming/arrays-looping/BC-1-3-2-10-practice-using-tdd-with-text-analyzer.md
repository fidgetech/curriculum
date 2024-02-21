---
title: '✏️ 1.3.2.10 Practice: Using TDD with Text Analyzer'
id: 1-3-2-10-practice-using-tdd-with-text-analyzer
hide_table_of_contents: true
day: tuesday
---

**Goal:** Continue to build out the `text-analyzer` application, making sure to practice TDD, good separation of logic, and DRY code. Keep in mind that separating logic and DRYing up code takes a _lot_ of practice, especially at first. Sometimes it's a struggle just to get your code working, let alone keeping it DRY. However, if you apply TDD and separate your logic, you will find the problem solving process easier and you'll also have an easier time fixing bugs.

## Warm Up
<hr />

* What is separation of logic? Why is it important?
* What does DRY mean? What are some reasons to DRY our code?
* What information does the `index` parameter for the callback function we pass into `Array.prototype.forEach()` contain?

## Code
---

At this point, you should have followed along with the lessons to complete the Text Analyzer's UI logic. Now it's time to add some more code! Pick either of the prompts below to complete.

### Extending Text Analyzer Business Logic

Write a function that returns how many times each word is used in a passage of text. Then, try organizing the output of words from most used to least used. Use Test-Driven Development to create this new functionality. For instance, this string: `"Hi there hey yo hi hi yay yo whoa there whoa yay"` would return:

```
Most common words:
hi: 3
there: 2
hey: 1
yo: 2
yay: 2
whoa: 2
```

If the most common words were ordered from most used to least, the output should look something like this:

```
Most common words:
hi: 3
there: 2
yo: 2
yay: 2
whoa: 2
hey: 1
```

### Extending Text Analyzer User Interface Logic

Write a UI function that only bolds the part of the word that matches. For instance, if you are looking for words that match "pen", the `boldPassage()` method should do this: hap**pen**, not this: **happen**. Use Test-Driven Development to create this new functionality. 
