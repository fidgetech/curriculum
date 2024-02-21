---
title: ✏️ 3.4.3.1 Refactoring with Many-To-Many
id: 3-4-3-1-refactoring-with-many-to-many
hide_table_of_contents: true
day: wednesday
---

**Goal**: Continue your practice with many-to-many relationships by refactoring an old project. 

## Warm Up
---

* What navigation properties do we need to include on a join entity and any corresponding entities?
* What is model validation?
* What is a validation attribute and how do we use it in our C# models?

## Code
---

Choose between the two prompts below and work on solidifying your skills with many-to-many relationships in a multi-day project. This is an opportunity to build out a polished site, and explore implementation of EF Core functionality that is not covered by the curriculum.

### Project Refactor

Revisit an old project with a one-to-many relationship and refactor it to have a many-to-many relationship. Consider the impact this may have on routing, and how your models and controllers will need to change to handle this new functionality. 

Make sure to include model validation for all CREATE and UPDATE actions, and a splash page that lists data from two or more database tables.

### Design Your Own

Build a new project that includes a many-to-many relationship with full CRUD. Make sure to write user stories to guide your development before beginning to code.

Make sure to include model validation for all CREATE and UPDATE actions, and a splash page that lists data from two or more database tables.

## Peer Code Review
---

* Do database tables and columns follow proper naming conventions?
* Does one of your classes have all CRUD methods implemented in your app? That includes: Create, Read (all and singular) Update and Delete (all and singular).
* Are you able to view both sides of the many-many relationship? For a particular instance of a class, are you able to view all of the instances of the **other** class that are related to it? And vice versa?
* Is the many-to-many relationship set up correctly in the database?
* Are validation attributes used to validate models before they are saved to the database?
* Is there a splash page that lists data from two or more database tables?
