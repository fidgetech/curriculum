---
title: "📓 3.5.0.1 Authentication with Identity Objectives"
id: 3-5-0-1-authentication-with-identity-objectives
hide_table_of_contents: true
day: weekend
paginationPrev: null
---

In this course section, we'll learn how to use authentication and authorization in our projects. We will use Identity to handle **authentication**: to register, log in, and log out users. In the process, we'll learn how to do the following:

* Write asynchronous C# code using `Task<TResult>` and `async/await`
* Create a ViewModel, a model that only meant to be used in our views
* And we'll continue to use validation attributes to validate user input into our registration and login forms. 

We'll also learn how to use ASP.NET Core tools to implement basic **authorization**, which will allow our applications to determine what users should be allowed to do.

Finally, we'll take some time to learn how to make API calls using RestSharp and Newtonsoft.Json, partially in preparation for the next section when you will have the opportunity to build your own API.

## Independent Project Objectives
---

At the end of this section, you will complete an independent project. Take note, you will not be required to make an API call or parse its response for this project. Your code will be reviewed for the following objectives:

* Does one of your classes have all CRUD methods implemented in your app? That includes: Create, Read (all and singular) Update and Delete (all and singular).
* Are you able to view both sides of the many-many relationship? For a particular instance of a class, are you able to view all of the instances of the **other** class that are related to it? And vice versa?
* Are users able to register, log in and log out with Identity?
* Is Create, Update and Delete functionality limited to authenticated users?
* Build files and sensitive information are included in `.gitignore` file and are not in Git history, and includes instructions on how to create the `appsettings.json` and set up the project.
* Project is in a polished, portfolio-quality state.
* The prompt's required functionality and baseline project requirements are in place.

### Previous Objectives

For reference, here are the previous objectives that continue to apply:

* Do the database table and column names follow both the specific requirements for this project and general .NET naming conventions?
* Are the instructions for re-creating your database thorough and clear?
* Build files and sensitive information is included in `.gitignore` file and is not to be tracked by Git, and includes instructions on how to create the `appsettings.json` and set up the project.
* Did you follow naming conventions?
* Does your code have proper indentation and spacing?
* Did you include a README with a description of the program, setup instructions for the database, a copyright, a license, and your name?
* Is the project tracked in Git, and did you regularly make commits with clear messages that finish the phrase "This commit will…"?
