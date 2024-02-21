---
title: "📓 2.2.1.3 Red Green Refactor Workflow"
id: 2-2-1-3-red-green-refactor-workflow
hide_table_of_contents: true
day: monday
---

Before we start writing automated tests, let's cover the **Red, Green, Refactor** workflow. We've actually been applying some of the principles of this workflow already. However, we need automated testing in place to really apply it. 

## The Red-Green-Refactor WorkFlow
--- 

Let's take a look at how it works. We've already been applying most of these steps. However, the steps in **bold** are new.

1.  Identify the simplest possible functionality our program must exhibit.
2.  Write a coded test.
3.  **<font color="red">Before coding, make sure the test fails.</font>** 
4.  Implement the functionality with the least amount of code possible. 
5.  <font color="green">Run the automated test to confirm it passes. (If it doesn't pass, revisit step 4.)</font>
6.  **<font color="green">Make sure all previous tests still pass.</font>**
7.  <font color="blue">Check if code can be refactored. If so, refactor and repeat step 6.</font>
8. Commit your code! You should always commit after each passing test.
9.  Repeat this entire process with the next simplest piece of functionality.

There are two new steps in the list above. In step 3, we need to confirm that the test fails before we write the code to get it passing. We haven't covered this yet. It's a little more involved than it sounds — there are "good" fails and "bad" fails. We'll cover both soon.

We covered step 6 briefly in Introduction to Programming. However, running all previous tests manually is time-consuming so it wasn't part of our workflow. With automated testing, we'll be able to run all of our tests with a single terminal command. If _any_ of our tests don't work (whether it's our most recent test or an older one), we need to isolate the issue and fix it before moving on.

It should be clear why this is called the Red, Green, Refactor workflow:

* **<font color="red">Red</font>** means we need to write a test that fails at first. This needs to be a "good" fail before we move on. We'll learn more about "good" fails soon.
* "**<font color="green">Green</font>**" means that all of our tests need to be passing before we move on.
* "**<font color="blue">Refactor</font>**" means that we should always look for opportunities to refactor after each passing test.

In the next lesson, we'll learn how to set up Jest. Then we'll be ready to apply the Red, Green, Refactor workflow and start writing tests.
