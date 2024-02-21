---
title: '✏️ 3.1.3.1 Weekday Finder, Scrabble Scorer, Rock Paper Scissors, Find and Replace, Prime Sifting'
id: 3131-weekday-finder-scrabble-scorer-rock-paper-scissors-find-and-replace-prime-sifting
hide_table_of_contents: true
day: wednesday
---

**Goal:** Continue building out applications using MSTest and the "Red, Green, Refactor" workflow.

## Warm Up
---

* What is abstraction and how can we use this principle to improve our code?
* When is the appropriate time to use a try/catch block? What benefit do they offer?
* What does it mean when we state that a program "threw an exception"? What occurs when this happens?
* In terms of Test-Driven Development, what does "arrange, act, assert" mean? What does it look like to follow this process?
* Compare the tests you wrote for your last project with your partner, and give each other feedback; do tests begin with the simplest possible behaviors and move up in complexity? Does it look like each of you followed the "red-green-refactor" process? If not, how can you write better tests today?

## Code
---

**Complete as many projects as you have the time for.** It's okay if you only work on one. We suggest reading through all of the following prompts to determine what would be the best practice for you today.

Before you get started, **take a moment to identify what C# you have not practiced with, and see if you can incorporate practice with that tool or concept in your project.** For example, if you've used a foreach loop, but not a for loop, make sure to practice using a for loop.

Finally, anytime you are working with a C# data type, look up its documentation online and see if there are any helpful built-in methods that you can use in your code.

### Weekday Finder

Make an console app that allows users to input a day of the year (like 7/11/2014) and then write a method to find out what day of the week it was, i.e. Monday, Tuesday, etc. As you complete this prompt, make sure to meet the following requirements:

* Use TDD and the RGR workflow to develop your business logic. 
* Create your business logic before you create your UI logic. 

### Scrabble Scorer

Make a console application that takes a word and returns the Scrabble score for that word. As you complete this prompt, make sure to meet the following requirements:

* Use TDD and the RGR workflow to develop your business logic. 
* Create your business logic before you create your UI logic. 

Here are the values of letters in Scrabble:

```
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

### Rock, Paper, Scissors

Recreate the game Rock, Paper, Scissors. For anyone who has never played it, here are the rules:

* It is played by 2 people. Each person chooses "Rock", "Paper", or "Scissors" by forming a shape with their hand.
* They choose at the same time, so that each person doesn't know what the other person has picked.
* If one person chooses "Rock" and the other person picks "Scissors" then "Rock" wins. It's a game of combinations:

```
Rock v. Scissors = Rock wins
Rock v. Paper = Paper wins
Paper v. Scissors = Scissors wins
```

* If both people choose the same thing, then it is a draw and nobody wins.

Write a method that can handle the different combinations of plays and make sure to write specs for all possible combination of plays. Your method should take 2 inputs — one for each player's choice. It should return "Player 1" if the first input wins, "Player 2" if the second input wins, and "Draw" if nobody wins.

As you complete this prompt, make sure to meet the following requirements:

* Use TDD and the RGR workflow to develop your business logic. 
* Create your business logic before you create your UI logic. 

Here's optional further exploration to explore: 

* Find a way to get the computer to randomly select a 'play' and make your console app into a one player game. We don't yet know how to test something that's random, so it's okay to skip writing a spec for that part. 
* Or, expand the rules of your game to include 3 players. Make sure to write specs for that before coding. You must understand your goal clearly before you can figure out how to get there.

### Find and Replace

Create a console app where a user enters a string, chooses a word in that string and provides a replacement for that word.  Your method in action could look something like `FindAndReplace("Hello world", "world", "universe")`. The result of which would be "Hello universe".

**Do first**: Write the method so that it replaces whole words only, as in the "hello world" example above.

**Do second**: Add to your method, so that your method takes into account partial matches.  For example `FindAndReplace("I am walking my cat to the cathedral", "cat", "dog")` would return the silly phrase "I am walking my dog to the doghedral."

As you complete this prompt, make sure to meet the following requirements:

* Use TDD and the RGR workflow to develop your business logic. 
* Create your business logic before you create your UI logic. 
* Make sure to account for odd user inputs like all capitalization, partial capitalization, etc. 

### Prime Sifting

Given a number, write a method that returns all of the prime numbers less than that number. As you complete this prompt, make sure to meet the following requirements:

* Use TDD and the RGR workflow to develop your business logic. 
* Create your business logic before you create your UI logic. 

This is a tricky problem and you should use the Sieve of Eratosthenes to solve it. Here's how the Sieve of Eratosthenes works to find a number up to a given `number`:

* Create a list of numbers from 2 through n: 2, 3, 4, ..., `number`.
* Initially, let `prime` equal 2, the first prime number.
* Starting from `prime`, remove all multiples of `prime` from the list.
* Increment `prime` by 1.
* When you reach `number`, all the remaining numbers in the list are primes.

You also might find [this video](https://www.youtube.com/watch?v=V08g_lkKj6Q) helpful in explaining the Sieve.

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
