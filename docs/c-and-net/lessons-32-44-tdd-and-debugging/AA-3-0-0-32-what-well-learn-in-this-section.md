---
title: "📓 3.0.0.32 What We'll Learn in this Section"
day: weekend
---

In this C# and .NET pre-work section, we'll learn about testing and debugging tools, and in this lesson, we'll get a sense of what exactly we'll be doing in this section.

## Automated Unit Testing
---

In this section, we'll review the Test-Driven Development (TDD) principles and practices that we learned in Intermediate JavaScript. Then, we'll write automated unit tests for our C# and .NET Shape Tracker app. Notably, most of this curriculum will be a _review_ and not brand new information — that's because the core concepts of TDD, the Red-Green-Refactor (RGR) workflow, and general testing best practices are the same across languages and testing frameworks.

Let's review terminology:

* **Test-Driven Development (TDD):** In TDD, the process of writing code is intertwined with writing tests for that code. When we use TDD, we break our code down into the smallest pieces of functionality we can. Next, we write a test for a piece of functionality before we add that functionality to our code. Finally, we add the code to make that test pass.
* **Red-Green-Refactor (RGR) Workflow:** The RGR workflow helps us follow best practices for testing. When we use the RGR workflow, we complete three phases for each test we write:
  1. (Red phase.) After writing a test, we first confirm the test we've written is failing first to ensure there are no false positives (a test that is passing when it should not be). The test should be failing because there should be no code in place to make the test pass.
  2. (Green phase.) After confirming that the test is failing, we write just enough code to make the test pass and run our automated testing software to ensure that the test is passing.
  3. (Refactor phase.) After completing the red and green phases, we can optionally refactor our code. After refactoring our code, we need to run our automated tests to make sure that all are still passing.
* **Automated versus Manual Testing:** When we write **automated** tests, we are writing coded tests that are run by software (like Jest or MSTest). When we perform **manual testing**, we are clicking around our application (or something similar) to confirm that our code is running as expected. 
* **Unit Tests:** A unit test focuses on testing a single component of our source code, like a class field or method.
* **Integration Tests:** An integration test focuses on testing how multiple source code components work as a group, typically a combination of business logic and user interface logic. For example, an integration test might check that a user can properly fill out a form, submit it, and be re-routed to a "success page".
* **MSTest:** The testing framework we'll use to write unit tests for our C#/.NET code. Within each unit test, we can list an expected result and then our test will let us know whether that expected result is achieved or not. Just like with Jest and JavaScript, MSTest is just [one of many .NET testing frameworks we can use.](https://learn.microsoft.com/en-us/dotnet/core/testing/) Visit [the MSTest GitHub repo](https://github.com/microsoft/testfx) to access additional documentation.

### The Benefits of TDD

It's important to review why we bother writing tests at all. Frankly, even if you don't write tests, your code will still be tested. Can you guess who will do this? The customer, of course! That's **not** something we want, and precisely why we write tests: to ensure that the code we write functions as expected. 

But writing tests is just one very obvious aspect of Test-Driven Development. Let's take a moment to review all of the advantages of TDD:

**TDD helps us create a plan.** By taking time to think through a program, identify behaviors, and tackle the simplest first, we're creating a game plan. We are laying out each step we need to take in detail, which leads to the next benefit.

**It's easier to tackle complex problems.** Even the most experienced coders can struggle with approaching complex issues. By identifying and testing the smallest possible behavior at a time, we can take baby steps towards solving bigger problems.

**It prevents errors and makes bugs easier to locate.** When we implement and test a single behavior at a time, we're preventing errors. Testing each behavior before moving on allows us to spot bugs as soon as they're introduced. Without TDD, we might not spot some of these bugs until they break our application. To make matters worse, if we add more code after introducing a bug, other parts of our application will likely be reliant on our buggy code. To resolve this issue, we'd need to locate the bug, resolve it, and potentially alter all the code that depends on the buggy code. That's a lot of work.

**It allows us to create projects faster.** Starting a complex project can be daunting. Even if we aren't sure how to code the more difficult features of our application, we can hit the ground running by implementing smaller, identifiable functionality. As we work, the bigger picture will come into focus.

**New features are built upon reliable code.** By testing functionality as it's implemented and ensuring previous tests still pass when new functionality is introduced, new features are always built on a foundation of reliable, tested code.

**It keeps code DRY.** By implementing the least amount of code to pass each test, we keep our code DRY. By approaching each piece of our project's functionality individually, we are likely to write more modular code. Modular code is easier to maintain, update, and debug.

**It's employable.** Testing is an important part of the tech industry and many tech careers rely on it — ranging from developers and QA testers to devops specialists and site reliability engineers.

### Plan for Learning

To learn how to use MSTest, we'll revisit our Shape Tracker app and write automated unit tests for all of the `Triangle` class business logic. We'll start by removing the class entirely so that we can practice true TDD where we write the test before writing the corresponding source code. In the end, we'll learn how to test the following:

* A class constructor.
* A private field via getter and setter methods.
* A private field via a public property.
* An auto-implemented public property (which implicitly creates a private field).
* Static class members.
* Collections (like lists and dictionaries).

We'll also learn how to use the following MSTest tools:

* How to use "arrange, act, assert" to organize tests.
* The test methods for collections (like lists) versus non-collections.
* How to implement a teardown method that is run between each test.

## Debugging
---

We'll end this pre-work section by reviewing debugging and development tools that we can use in C# .NET console apps. When we begin to learn how to create web applications, we'll revisit debugging and learn about other tools at our disposal. 
