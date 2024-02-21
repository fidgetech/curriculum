---
title: ✏️ 3.2.1.2 ASP.NET Core MVC Practice
id: 3212-aspnet-core-mvc-practice
hide_table_of_contents: true
day: monday
---

**Goal:** Become familiar with setting up an ASP.NET Core MVC application and solve simple problems that use forms and dynamic views.

## Warm Up
---

* Discuss the basic parts of a project in MVC.
  * What are Views?
  * What does the Controller do?
  * How does the model fit in?
* What is Razor markup syntax?
* How do we enable Developer Exception Pages?
* What are the steps for setting up an ASP.NET Core MVC project?
* How can we gather form data in an MVC route? What needs to be in place to make this possible?

## Code
---

### Friend Letter

Work through the weekend homework to create the Friend Letter application. Make sure to carefully follow how data moves throughout the MVC framework as you do this. Once the base application in the lessons is complete, modify the letter to include variables for different vacation locations and different items to be brought back as souvenirs.

### Mad Libs

Create a digital Mad Libs game using ASP.NET Core MVC. Users should be presented with a form with fields for various parts of speech (nouns, adjectives, adverbs, exclamations, and so on). After filling out and submitting that form, they should navigate to a page containing a story that has used their provided words in its text.

* Begin small, gathering and using only a few key words.

* After completing a short Mad Libs with user-provided words, expand it further. Add new variables to the form and story.

* Additionally, try to format the story output in a visually-appealing way.

* **Further Exploration**: Consider allowing users to select from multiple Mad Libs themes, stories, or templates before being presented a form. Each different story should require a unique combination of words, and therefore have its own unique form. **Hint:** You can link to a different route by adding the route's path to a standard `<a>` tag. For instance, a `Puppy()` route with the route decorator `[Route("/puppy-story")]` could be accessed from another page with the link `<a href="/puppy-story">Click here for puppies!</a>`.

### Past Projects

Choose a few of the console-only projects from the last course section and turn them into applications with fully-functional web interfaces using ASP.NET Core MVC.

## Instructor Code Review
---

* Can we use the Mad Libs website correctly? Does the code make sense?
* For applications that are alterations of last section's assignments: do the tests still pass?
