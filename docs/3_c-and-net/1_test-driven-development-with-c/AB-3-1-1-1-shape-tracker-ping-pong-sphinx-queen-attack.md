---
title: '✏️ 3.1.1.1 Shape Tracker, Ping Pong, Sphinx, Queen Attack'
day: monday
id: 3-1-1-1-shape-tracker-ping-pong-sphinx-queen-attack
hide_table_of_contents: true
---

**Goal:** Use branching, looping, and other foundational C# concepts to build working console applications with C#. Don't worry about trying to complete all the exercises. Focus on getting more comfortable with C# and understanding key concepts.

## Warm Up
---

* What is a strongly typed language?
* What is a compiler?
* What data types are included with C#? How are they different from JavaScript?
* What is the difference between a property and a field?
* What is an access modifier? What is the best practice with the access modifier we give to fields?
* What is an auto-implemented property?
* What is the entry point to console applications?
* What role does a project file (`.csproj` file) play in console apps?
* In terms of project structure, where is code for our console's user interface placed? 
* In terms of project structure, where is business logic placed?  

## Code
---

**Complete the Shape Tracker project prompt listed below, then move on to any other project prompt.** Complete as many additional projects as you have the time for. It's okay if you only work on the Shape Tracker project prompt.

### Shape Tracker

Extend the functionality of the Shape Tracker app to practice with Test-Driven Development and console apps.

#### Setup

You are welcome to use your own version of the Shape Tracker app, if you coded along with the weekend homework, or you can clone down the version of Shape Tracker with (almost) completed business logic, tests, and user interface logic for the `Triangle` class. Make sure to access the branch called `2_complete_testing`:

```
$ git clone https://github.com/epicodus-lessons/prework-TDD-with-shape-tracker-csharp-net6
$ git fetch --all
$ git checkout 2_complete_testing
```

#### Prompts

1. We have fully tested and complete business logic for the `Triangle` class, but our user interface in `Program.cs` doesn't give users the option to see all triangles using the static `Triangle.GetAll()` method, or clear all triangles using the static `Triangle.ClearAll()` method. It's your job to fix this issue and add in user interface for the `Triangle.GetAll()` and `Triangle.ClearAll()` methods. Take your time to discuss the best way to provide users access to this functionality and create a game plan for the changes you'll need to make to achieve this functionality. Since we don't have testing for the UI, you'll need to manually test your changes to ensure they are working as expected. 

2. Create a new model! Create a `Rectangle` class that contains fields (or properties) for two sides and a method to calculate the area of those two sides. Here are a few notes:
  * Use TDD and the RGR workflow to develop your business logic.
  * Create your business logic before you make any changes to the UI logic. 
  * The `Rectangle` class should be in its own file within the models folder. If you are unsure what the namespace should be, or what setup should look like for the new `Rectangle.cs` file, revisit the pre-work lesson [Console App Project Structure: How to Add More Code Files](/c-and-net/lessons-19-31-basic-console-apps/3-0-0-30-console-app-project-structure-how-to-add-more-code-files).
  * Similarly, there should be a separate test file for the `RectangleTests` class. If you are unsure what setup should look like for the new `RectangleTests.cs` file, revisit the pre-work lesson [Console App Project Structure: How to Add More Code Files](/c-and-net/lessons-32-44-tdd-and-debugging/3-0-0-34-mstest-configuration-and-setup).
  * Make sure you understand the best practice of making fields private and the difference between a field, property, and auto-implemented property. If you are uncertain about any of these concepts, make sure to practice with them as you create the `Rectangle` class. Revisit the relevant pre-work lessons as necessary.
  * The area of a rectangle is calculated by multiplying the two sides of a rectangle.

3. Optionally, create another model: the `Ellipse` class. We want our `Ellipse` class to save two values for radius and calculate the area of the `Ellipse`. You'll follow the same process as when you created the `Rectangle` class. Here are a few important notes:
  * Use TDD and the RGR workflow to develop your business logic.
  * Create your business logic before you make any changes to the UI logic. 
  * Make sure you are following the naming conventions for the file, class, and namespace names. 
  * To calculate the area of an ellipse, we use the formula `πab`, where we multiply pi `π` by the first radius `a`, by the second radius `b`. You should use the [`Math.Pi` field](https://learn.microsoft.com/en-us/dotnet/api/system.math.pi?view=net-6.0) to complete this calculation.

### Ping-Pong

Ping-pong is a classic programming exercise that utilizes branching and looping. Here's how it works:

* A user enters a number and the application returns all numbers from 1 to the user input with the following changes:
  * All numbers divisible by 3 are replaced by _"ping"_.
  * All numbers divisible by 5 are replaced by _"pong"_
  * All numbers divisible by both 3 and 5 are replaced by _"ping-pong"_.

If the user enters `15`, the program will return:

```
1
2
"ping"
4
"pong"
"ping"
7
8
"ping"
"pong"
11
"ping"
13
14
"ping-pong"
```

Your goal is to write a console ping-pong application with a few requirements:

* Use TDD and the RGR workflow to develop your business logic. 
* Create your business logic before you create your UI logic. 

### Riddles of the Sphinx

Create a console application where the Sphinx asks a riddle and the user must answer the riddle correctly. If the riddle is answered correctly, the Sphinx asks a second riddle and so on.

* Start with one riddle. If the user answers correctly, the Sphinx is defeated. If the user is incorrect, the Sphinx eats the user.
* Once the application is working with a single riddle, add a few more.
* Try writing a method to randomize which riddle the Sphinx asks.

Here are the requirements for this application:

* Use TDD and the RGR workflow to develop your business logic. 
* Create your business logic before you create your UI logic. 

### Queen Attack

In chess, a queen can move horizontally, vertically, and diagonally, making it the most powerful piece on the board. If another piece is within its line of sight along these three lines, the queen may attack it.

Create a console application where the user can enter X and Y coordinates for both a queen and another chess piece. The program should return whether the queen is capable of 'attacking' the other chess piece.

Here are the requirements for this application:

* Use TDD and the RGR workflow to develop your business logic. 
* Create your business logic before you create your UI logic. 

#### Hints

* When the user submits coordinates, the program should create an instance of a `Queen` class, with properties for its X and Y coordinates.
* The `Queen` class should have a method that takes X and a Y coordinate as arguments, and returns `true` if the queen can attack the given space, and `false` if it cannot.
* A message should be displayed to inform the user of the results.

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
