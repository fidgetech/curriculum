---
title: '✏️ 2.2.2.1 Test It Out, Sudoku Checker, Project Euler'
id: 2-2-2-1-test-it-out-sudoku-checker-project-euler
hide_table_of_contents: true
day: tuesday
---

**Goal**: Use test-driven development to write your business logic. Practice using Jest to run your unit tests. Aim for 100% coverage of your code. Continue using webpack.

## Warm Up
---

* Describe the Red-Green-Refactor workflow. How can this workflow help us write good code?
* What is Jest? Why is unit testing important?
* How can Jest's `beforeEach()` and `afterEach()` functions improve our tests?

## Code
---

Pick one of the following projects to complete. Once you finish it, move onto another project. 

### Test It Out

Choose an application you built in Intro (such as Roman Numeral, Pig Dice, or Triangle Tracker) and refactor the application to include the following:

* Use of npm to manage packages, webpack to bundle code, and ESLint to lint code. If you are installing and configuring these dependencies from scratch, make sure to create your `.gitignore` first!
* Complete unit tests for all business logic using TDD and Jest. Aim for 100% test coverage.
* Complete separation of logic (UI logic in one file, business logic in another). You may even need to refactor some of your logic to make it more testable! If you aren't able to test UI logic, consider ways that logic could be refactored and moved into your business logic file.

Practice with Jest and testing is your top priority!

### Challenging: Sudoku Checker

[Sudoku](https://simple.wikipedia.org/wiki/Sudoku) is a game where players must fill in a 9 x 9 board with the numbers 1 through 9. The Sudoku board looks like this:

![sudoku-board-example](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/javascript-new/sudoku-board-example.png)

Create an application that checks if a completed Sudoku puzzle is “legal.” In other words, it should ensure the following rules are met:

* Each row contains all numbers from 1 to 9 with no repeats.
* Each column contains all numbers from 1 to 9 with no repeats.
* **Further Exploration:** Each of the nine 3 x 3 grids contain all numbers from 1 to 9 with no repeats.

Your application should include the following:

* Use of npm to manage packages, webpack to bundle code, and ESLint to lint code. If you are installing and configuring these dependencies from scratch, make sure to create your `.gitignore` first!
* Complete unit tests for all business logic using TDD and Jest. Aim for 100% test coverage.
* Complete separation of logic (UI logic in one file, business logic in another).

You should focus on creating the business logic using TDD and Jest **before** implementing any user interface logic. 

### Testing and Solving Project Euler Problems

[Project Euler](https://projecteuler.net/archives) is an archive of math problems that can be solved using programming languages such as JavaScript. The difficulty of these problems ranges from fairly simple to extremely challenging. Try solving a few Project Euler problems, taking care to fully test your code. You do **not** need to implement user interface logic to solve these problems; instead, focus on business logic and unit testing. Once your business logic is complete, you may work on your user interface logic.

Your application should include the following:

* Use of npm to manage packages, webpack to bundle code, and ESLint to lint code. If you are installing and configuring these dependencies from scratch, make sure to create your `.gitignore` first!
* Complete unit tests for all business logic using TDD and Jest. Aim for 100% test coverage.
* Complete separation of logic (UI logic in one file, business logic in another). 

## Peer Code Review
<hr />

* Tests were committed before code.
* Business logic has 100% line coverage with Jest.
* Dependencies are managed with npm.
* webpack is used to lint, bundle, and process code.
