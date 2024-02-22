---
title: '✏️ 3.1.2.1 Anagram, Coin Combos, Palindromes, Allergies, Numbers to Words'
day: tuesday
---

**Goal:** Continue practicing with C# basics and Test-Driven Development.

## Warm Up
---

* Why is the 'red-green-refactor' method so important to test-driven development?
* Discuss the benefits of TDD with your partner.
* Why do we _want_ our tests to fail before they pass?
* What is type-casting and why is it useful?
* What is an overloaded constructor? 
* What is the difference between static and instance methods?
* What is namespacing and why should we use it?

## Code
---

**Complete as many projects as you have the time for.** It's okay if you only work on one. We suggest reading through all of the following prompts to determine what would be the best practice for you today.

Before you get started, **take a moment to identify what C# you have not practiced with, and see if you can incorporate practice with that tool or concept in your project.** For example, if you've used a foreach loop, but not a for loop, make sure to practice using a for loop.

Finally, anytime you are working with a C# data type, look up its documentation online and see if there are any helpful built-in methods that you can use in your code.

### Anagram

An anagram is a word that you can rearrange the letters and it becomes a new word. For example, "bread" is an anagram of "beard". Create a console app, where a user can input a single word and a list of other words that may be anagrams. After submitting the form, the user should be told which of the list of words were anagrams. Start by writing specs before writing any code.

The [Array.Sort() method](https://msdn.microsoft.com/en-us/library/system.array.sort(v=vs.110).aspx) may come in handy, so try it out in the REPL to see exactly what it does.

Next, modify the method to handle partial matches — in other words, 'hat' should match 'path'.

Here are the requirements for this application:

* Use TDD and the RGR workflow to develop your business logic. 
* Create your business logic before you create your UI logic. 

### Coin Combinations

Have you noticed those coin slides used by modern cash registers that automatically give the correct amount of change? Build a console app that lets users enter an amount of cents and shows the smallest number of quarters, dimes, nickels, and pennies needed to make that change. Again, make sure you write clear specs and good tests before building out the console portion.

For bonus points, show more than one coin combination. Start with tests for small combinations and work up from there.

Here are the requirements for this application:

* Use TDD and the RGR workflow to develop your business logic. 
* Create your business logic before you create your UI logic. 

### Palindromes

A palindrome is any word, phrase, number, or other sequence of characters that reads the same both backward or forward.

Create a console application that includes a method to identify whether a word is a palindrome. It should return `true` if the user-provided word is a palindrome and `false` if it is not. As your complete this prompt, make sure to meet the following requirements:

* Use TDD and the RGR workflow to develop your business logic. 
* Create your business logic before you create your UI logic. 

Here are several recommended approaches:

* **Simpler**: There is a method [Array.Reverse()](https://msdn.microsoft.com/en-us/library/d3877932(v=vs.110).aspx). Check it out in the REPL to see what it does.

* **More Challenging**: Create the method without using the `Array.Reverse()` method. If the simpler way of doing this isn't a challenge, we recommend trying this out!

* **Bonus Points**: Make a method that checks a string of words and also an integer. For example: "Hello olleH" is a palindrome by our definition. An integer palindrome would be: 101.

### Allergies

Here's something a bit trickier and please only attempt this if you have completed the first two projects and had them both checked by an instructor. An allergy score is a single number that tells what someone is allergic to. The scores for each allergen are:

```
allergen     score
eggs         1
peanuts      2
shellfish    4
strawberries 8
tomatoes     16
chocolate    32
pollen       64
cats         128
```

So if someone is allergic to eggs and strawberries, they get a score of 9.

Build a website that uses a method that is called on someone's score — i.e. the score is the object, and returns an array listing what they're allergic to.  For example, running `allergies(3)` should print a list of the person's allergies (eggs and peanuts) to the screen. As your complete this prompt, make sure to meet the following requirements:

* Use TDD and the RGR workflow to develop your business logic. 
* Create your business logic before you create your UI logic. 

### Numbers to Words

Create a console app that translates numbers in numeric form into written words. For example, it would translate 384 into "three hundred eighty four". Use multiple dictionaries to solve this.

Start small, and then get your code working for numbers up to 1 trillion.

As your complete this prompt, make sure to meet the following requirements:

* Use TDD and the RGR workflow to develop your business logic. 
* Create your business logic before you create your UI logic. 

## Instructor Code Review
---

* Did you write your business logic before your user interface logic?
* Did you use Test-Driven Development to create your business logic? 
* Are tests following best practices? 
  * Everything in the business logic has a test for it.
  * Each test tests for just one behavior.
  * If a method has multiple paths, there's a test for each path.
* Are all tests passing?
* Does your project have a `README.md`?
* Does your project have a `.gitignore`?
