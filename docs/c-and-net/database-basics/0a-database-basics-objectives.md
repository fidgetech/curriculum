---
title: "📓 3.3.0.01 Database Basics Objectives"
id: 3-3-0-01-database-basics-objectives
hide_table_of_contents: true
day: weekend
paginationPrev: null
---

Up until this point, data for our programs has been stored in our computers' **RAM**, also known as **random-access memory**. This is a fast, temporary place to store information but it's not suitable for long-term storage.

Anything we want to save after halting our applications must be written to permanent storage on a hard disk. Starting in this section, we will begin using databases that will permanently store our data.

During the first part of the section, we'll learn how relational databases work and experiment with the **SQL** language to read, write, and query databases. We'll cover how to configure our own databases using tools including MySQL Workbench and MySQL Community Server. We'll build our database methods from scratch so we can see how an ORM (Object-Relational Mapping) tool works under the hood.

During the second part of the section, we'll use an ORM library called Entity Framework Core to make working with a database much easier. This will take care of the boilerplate code for us so we can focus on coding our applications.

## Independent Project Objectives
---

At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:

* Do the database table and column names follow proper naming conventions? 
* Do the project folder and exported database follow the specific naming requirements for this project?
* Are the instructions for re-creating your database thorough and clear?
* Is there a one-to-many relationship set up correctly in the database?
* Is CREATE functionality included for one class and is CREATE and VIEW functionality included for the other class?
* Is EF Core used for communication with the database?
* Build files and sensitive information are included in `.gitignore` file and is not to be tracked by Git, and includes instructions on how to create the `appsettings.json` and set up the project.
* Project is in a polished, portfolio-quality state.
* The prompt's required functionality and baseline project requirements are in place.

### Previous Objectives

Additionally, the following objectives from previous sections will continue to apply:

* Project uses two or more controllers.
* GET and POST requests/responses are used successfully.
* MVC routes follow RESTful conventions.
* Logic is easy to understand.
* Code and Git documentation follows best practices (descriptive variables names, proper indentation and spacing, separation between front and back-end logic, detailed commit messages in the correct tense, and a well-formatted README).
