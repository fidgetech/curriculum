---
title: "📓 5.6.0.01 Building an API Objectives"
day: weekend
id: 5-6-0-01-building-an-api-objectives
hide_table_of_contents: true
pagination_prev: null
---

In this course section, we'll create our own ASP.NET Core Web API using RESTful principles. We'll use the `dotnet new` tool to quickly scaffold an API-only application. Our API will serve data about animals from the Cretaceous period, so we'll call our API the Cretaceous Park API.

Later in the course section, we'll use the `dotnet new` tool to scaffold an ASP.NET Core MVC frontend that we'll build out to make API calls to our Cretaceous Park API. 

Here are the topics we'll explore:

* How to use the `dotnet new` scaffolding tool
* Understanding new features that come default with the templates that `dotnet new` uses to scaffold projects
* Understanding the differences between an ASP.NET Core Web API and an ASP.NET Core MVC Web App
* Building an API that includes full CRUD functionality
* Using query strings to create search and filter functionality in our API
* Returning API responses with the correct HTTP status code
* How to seed database data
* How to scaffold API controllers and add model validation to an API
* How to use Swagger UI documentation that comes with the ASP.NET Core Web API template
* How to make API calls via Postman
* Documenting your API endpoints
* Making API calls from an ASP.NET Core MVC application 

You're also tasked with doing further exploration:

* Authenticating API users with JSON Web Tokens
* Versioning your API
* Paging your API responses
* Enabling CORS in your API

With this being the last section of new material for the C# and .NET course, one of our main goals for this section is to foster growth in your ability to independently learn and troubleshoot. This means the further exploration will be exactly that: *exploration*. Once you begin active development in the industry, there will not always be step-by-step guides for exact implementation of concepts that fit neatly into your projects. It is critical that you have the opportunity to get experience in diving into documentation, modifying code snippets you find online to fit your needs, looking up error messages you receive, and solving problems with patience and trial-and-error. 

In this section, we will reaffirm a point from the student handbook: 

> _Our best advice is to not think of Epicodus as a place to learn Ruby, React, C#, JavaScript, or some other language or tool. Instead, think of it as a place to learn how to learn._ 

Although teachers _may_ be willing to talk broadly about these further exploration concepts with you, do not expect any teacher guidance on these principles. It may be frustrating in the moment to feel like you are on your own in finding these answers, but it's the best preparation we can give you for the world waiting for you after Epicodus. This course section is an opportunity to differentiate yourself through your unique implementations of these concepts. 

This sentiment will be repeated in the actual lesson introducing these further explorations. Remember to be patient with yourself, be confident in yourself, and be proud of yourself when you figure out how to use these tools!

## Independent Project Objectives
---

At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:

* Application includes CRUD functionality and successfully returns responses to API calls.
* README thoroughly describes all endpoints along with parameters that can be used.
* Application includes a best effort at implementing at least one of the further exploration objectives: authentication, versioning, pagination, or CORS.
* README includes specific documentation on further exploration: what it is and how to use it.
* Build files and sensitive information are included in `.gitignore` file and is not to be tracked by Git, and includes instructions on how to create the `appsettings.json` and set up the project.
* Project is in a polished, portfolio-quality state.
* The prompt's required functionality and baseline project requirements are met.
