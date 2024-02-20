---
title: "\U0001F4D3 3.0.0.33 Review: the Red, Green, Refactor Workflow and Testing Best Practices"
id: 30033-review-the-red-green-refactor-workflow-and-testing-best-practices
slug: 30033-review-the-red-green-refactor-workflow-and-testing-best-practices
hide_table_of_contents: true
sidebar_position: 2
day: weekend
type: lesson
url: 'https://github.com/fidgetech/c-and-net/blob/main/0b_red_green_refactor.md'
---

In this lesson, we're going to take a more in-depth look at Test-Driven Development (TDD), the Red-Green-Refactor (RGR) workflow, and testing best practices.

## Test-Driven Development Workflow
---

Here's the set of steps we should follow when implementing Test-Driven Development: 

1.  Identify the simplest possible behavior the program must exhibit.
2.  Write a coded test for this behavior.
3.  <font color="red">Confirm the test fails, before coding any business logic.</font>
4.  Implement the behavior in your business logic with the least amount of code possible.
5.  <font color="green">Run the automated test to confirm it passes. (If it doesn't, revisit step 4.)</font>
6.  <font color="green">Confirm all previous tests still pass.</font>
7.  <font color="blue">Check if code can be refactored. If so, refactor and repeat step 6.</font>
8.  Commit your passing code.
9.  Repeat this process with the next simplest behavior.

## Red, Green, Refactor
---

We can easily remember the TDD process with a simple mnemonic: **"Red, Green, Refactor"**, or the RGR workflow. Let's walk through each step in greater detail:

### 1. Identify the Simplest Possible Behavior

We first identify the simplest behavior the program must exhibit. We always start simple and move to more complex tasks in order to break large problems down into manageable and achievable steps.

Ideally, this behavior you identify should remain true for the life of the program; if not, you'll simply have to refactor later on. 

Keep in mind that there's often **multiple simplest behaviors** and **many places to start**. It's okay if the simplest possible behavior that you identify is not the same as the one that your pair has identified. For example, in an application that translates English to Pig Latin, we might have this be our first simplest behavior:

* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  * Example input: `3`
  * Example output: `3`

Or, we might have this be our first simplest behavior:

* The program adds 'ay' to the end of a single-letter word beginning with a vowel.
  * Example input: `"I"`
  * Example output: `"Iay"`

### 2. Write a Coded Test

After identifying the simplest behavior, we write a coded test for the behavior. 

Since we write the test before the corresponding business logic, we'll be defining the names and functionality of our class, fields/properties, methods, etc. in the test first. Effectively, this means that we use the business logic before the business logic has been defined. Sometimes this feels backwards to students. However, with some practice this will become second nature. Remember that this is the cornerstone of TDD: it's _test-driven_, not _code-driven_. 

### 3. <font color="red">Make Sure the Test Fails</font>

Before we add code to create the behavior we must confirm this test fails. This is the <font color="red">red</font> part of "Red, Green, Refactor", because failing tests usually display <font color="red">red text</font>.

**It's important to always write each test so that it passes.** This means you should never write your test so that it fails, and then update it later to pass; the tests we write are the gold standard for our business logic; any code we change in our tests should be due to a refactor, and not to fail/pass the tests.

If we are using code that doesn't exist yet, we'll get an error message from the compiler before we can even run our test to get a failing response. Well, when we're first running our test to confirm it fails, **compiler errors count as a failed test.** This is very different from JavaScript, but necessary for code that's compiled ahead of time.

Sometimes tests will incorrectly pass, usually due to being written incorrectly. If a test passes _before_ we add the behavior it is testing, something is wrong. This is an indication that we should take a closer look at the test itself before adding logic.

### 4. Implement the Behavior with the _Least_ Amount of Code Possible

After confirming our new test fails, we add just enough logic in our source code to make it pass. Only adding the bare minimum keeps code DRY (Don't Repeat Yourself), and keeps us organized by ensuring we're focusing on one behavior at a time.

### 5. <font color="green"> Run the Test to Confirm it Passes</font>

We then run the test(s) again to confirm they pass. This is the <font color="Green">green</font> part of "Red, Green, Refactor, because passing tests usually display <font color="green">green text</font>.

If the tests don't pass, we read failure messages carefully. They should describe why the test failed. Repeat steps 4 and make changes accordingly. Run test(s) again after making any changes. Do not move on to subsequent behaviors until the current test passes.

Finally, when your tests are passing — commit your code!

### 6. <font color="green"> Make Sure Previous Tests Still Pass</font>

Any time we have more than one test, we must confirm that adding the new tests hasn't broken previous tests. This is also the <font color="Green">green</font> part of "Red, Green, Refactor".

If any tests fail, carefully read the error messages and revisit the logic. If you followed TDD closely, you'll know _with certainty_ that the most-recently implemented code caused this error. Address the bug, run tests again, and continue to read any error messages. Repeat this process until all tests pass.

Again, whenever you have passing tests, make a commit. 

### 7. **<font color="blue">Check if Code Can Be Refactored.</font>**

At any point we can pause to refactor our code, if possible. This is the <font color="blue">refactor</font> part of "Red, Green, Refactor". If we're able to refactor **repeat step 6** to confirm tests still pass.

### 8.  Commit your code! 

You should always commit after each passing test. Think of it as being like a save point where all is well and everything is working correctly — you can always return to this save point later if your code goes south. Also, in the real world, we'll always want to commit after each passing test anyway to document our work. Just to clarify, you should commit not only the updated source code but also the updated tests.

### 9. Repeat

We continue repeating this process for every incremental behavior until the application is complete. After addressing the simplest possible behavior, move to the _next simplest_, then the _next_, until all behaviors the program requires are present.

## Best Practices
---

**Compiler errors count as a failed test.** In our C# apps that are compiled Ahead-Of-Time, we'll get compiler errors anytime the compiler can't complete its work of creating an executable file for our program. Though compiler errors won't catch all errors within the apps we write, they will catch a lot of issues: typos, types or variables that don't exist in the current context, and more. Because we write our tests before corresponding business logic is created, we can use compiler errors as failed tests that demonstrate that there are no false positives.

**Read the error messages.** Any error that's generated in the process of testing (from the compiler or MSTest itself) should be carefully read. These error messages can help you distinguish between an issue with compiling or an issue with how you wrote your business logic.

**Good unit tests should cover not just expected inputs but also edge cases.** An **edge case** can occur when an extreme or unusual parameter is passed into a method. For example, a method that calculates a person's overall health partly based on their age may not correctly account for a person that is 117 years old.

**Write tests for distinct behaviors.** Often a function just needs one test, because it does one thing. However, if our function does multiple things, we should consider having a test for each behavior. This improves how easy to understand our code and tests are. It's OK to have multiple expectations for a single test. However, if a test has many expectations it can be a red flag that the test may cover multiple distinct behaviors and may need to be broken into multiple tests to improve comprehension.

**Write tests for every path in a method.** A **path** in computer programming is a possible route that our program can take, usually due to branching: if X condition exists, then do this; else, do that. If a method has branching in it, it means it has multiple paths/outcomes, and we need to write a test for each possible path/outcome.

**Keep the code in your test to a minimum.** In your tests, you should only write code that's required to run the piece of business logic that you are testing for. This usually involves invoking the business logic function you are testing and not much more. Adding more code than that can create problems by introducing bugs that are unrelated to our business logic. We want to isolate problems in our code, not create more problems by adding unnecessary code in our tests.

**Always commit your code after each passing test.** This is part of having a strong commit history. Also, if you break your code and can't get it working again, you can always return to a commit where all tests are passing.

Writing automated tests for all business logic using the RGR workflow will be required in every application moving forward. Bookmark this lesson and refer back to it as you code. You're not expected to memorize each step immediately. But follow this workflow closely as you code upcoming projects. Pretty soon, it'll become second nature!