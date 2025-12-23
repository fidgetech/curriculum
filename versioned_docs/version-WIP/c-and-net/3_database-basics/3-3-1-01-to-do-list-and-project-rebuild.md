---
title: ✏️ 3.3.1.1 To Do List and Project Rebuild
day: monday
id: 5-3-1-1-to-do-list-and-project-rebuild
hide_table_of_contents: true
---

**Goal**: Practice writing SQL statements and adding CR functionality to applications. Take the time to understand how a database query works in a .NET application.

## Warm Up
---

* What's the difference between a database row and a database column?
* What's a primary key? What's it used for?
* What's the difference between MySQL and MySQL Workbench?
* When would we use `MySqlCommand`'s `ExecuteReader()` method and when would we use `ExecuteNonQuery()`?
* What are parameter placeholders and why do we need to include them in our queries?
* Why should we close a database connection after we've made a query?

## Code
---

### SQL Practice

Let's practice using SQL statements. Make sure that both you and your pair get a chance to practice all of these statements. Reference the weekend homework as necessary:

* Create MySQL tables to hold the following data: contacts, phone numbers, and email addresses.
* Add several columns to these tables such as whether it's a home, work or mobile number, first and last name, and so on.
* Drop one of the columns.
* Insert information of a few contacts into your tables.
* Try several `SELECT` queries on the tables you've created.
* Run some selects with different operators (such as `WHERE` and `LIKE`) on your tables.
* Update some of the data in your tables.
* Delete some records.
* Drop the tables you made.
* Use at least three queries of your choice _not_ already used in the exercises above on your data.

### To Do List

Follow along with the To Do List lessons from this weekend to build a fully-functioning To Do List with create and read functionality.

### Project Rebuild

Choose a project from the last course section and refactor it to use databases.

## Peer/Instructor Code Review
---

* Does the application successfully retrieve and display data from the database?
* Do MVC routes follow RESTful convention?
* Have all of the standards from previous sections been met?
* Does the project demonstrate an understanding of this section's concepts thus far?
* Does the application work as expected?
