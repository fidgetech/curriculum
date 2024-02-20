---
title: "\U0001F4D3 3.6.0.11 Further Exploration with API's"
id: 36011-further-exploration-with-api's
slug: 36011-further-exploration-with-api's
hide_table_of_contents: true
sidebar_position: 11
day: weekend
type: lesson
url: https://github.com/fidgetech/c-and-net/blob/main/1b_further_exploration_with_apis.md
---

It’s time to do a deep dive on your own. In the classwork for this course section, you'll be tasked with trying to incorporate one or more of the following features into your API:

* Token-Based Authentication
* API Versioning
* Pagination
* Enable CORS

**For your independent project this course section, you'll also be tasked with incorporating one or more of the preceding further exploration topics into the API you create.** The goal of this further exploration objective is for you to practice the skills that developers use everyday when they are tasked with implementing a new feature that may not have step-by-step guides for the exact implementation they need.

In this lesson, we'll learn a bit about each further exploration topic as well as basic expectations you should have for this practice. 

### Further Exploration Instructions

Before getting started, review each of the further exploration objectives below and do some preliminary research. You should be familiar with each of these concepts even if you don’t add them to your API.

With this being the last section of new material for the C# and .NET course, one of our main goals for this section is to foster growth in your ability to independently troubleshoot. This means the further exploration will be exactly that: *exploration*. Once you begin active development in the industry, there will not always be step-by-step guides for exact implementation of concepts that fit neatly into your projects. It is critical that you have the opportunity to get experience in diving into documentation, modifying code snippets you find online to fit your needs, looking up error messages you receive, and solving problems with patience and trial-and-error. 

In this section, we will reaffirm a point from the student handbook: 

> _Our best advice is to not think of Epicodus as a place to learn Ruby, React, C#, JavaScript, or some other language or tool. Instead, think of it as a place to learn how to learn._ 

Although teachers _may_ be willing to talk broadly about these further exploration concepts with you, do not expect any teacher guidance on these principles. It may be frustrating in the moment to feel like you are on your own in finding these answers, but it's the best preparation we can give you for the world waiting for you after Epicodus. This course section is an opportunity to differentiate yourself through your unique implementations of these concepts.

There are tutorials available online for each of these objectives, but you’ll likely need to do some customization to get the code working for your own APIs. We'll provide some starting resources, but you will have to do additional research. Collaborate with your classmates and share information. Be prepared for code examples that don’t seem to work or don’t fit your exact needs. Most of all, be patient with yourself. This is a key part of being a developer — piecing together available resources into a solution that works for you. Each of these objectives are essential parts of a good API, so take your pick and learn as much as you can!

### Token-Based Authentication and Authorization

A good API usually has an authentication scheme. Otherwise users can access all the endpoints in your API. Malicious or misinformed users could make `POST` or `PUT` requests that seriously harm your database and the overall functionality of your application.

The standard for authentication is to use JSON Web Tokens (also known as JWT) for authentication. These are simply encrypted JSON tokens storing a user's credentials. There are quite a few tutorials available for integrating JWT authentication into a .NET 6 API. Try adding authentication into your own application.

Here are a few resources to get you started:

* [ASP.NET Core JWT Authentication and Authorization of Web API](https://www.yogihosting.com/jwt-api-aspnet-core/) From Yogi Hosting.
* Learn general information about JWTs on [jwt.io](https://jwt.io/introduction).
* [Learn how to secure an ASP.NET Core Web API with bearer tokens.](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/secure-net-microservices-web-applications/#authenticate-with-bearer-tokens)

### API Versioning

Good code lasts forever. Actually, that's not true at all. Code is always changing, getting updated and breaking. The same is true with APIs.

This can lead to big problems. Let's say your API is used by thousands of enterprise-level customers. If you incorporate breaking changes (or even minimal changes) to your API, which is inevitable, your customers might experience errors and downtime. Even a small change to an API endpoint could have major repercussions for another application that relies on that endpoint.

This is why a good API uses versioning. Generally, an API starts with Version 1.0. That way, when we make breaking changes at some point in the future, we can push these changes to Version 2.0. We can then leave Version 1.0 available for enterprises that don't have time to update to Version 2.0 just yet, or might need to make updates to their own code to deal with the changes first. If we're making smaller changes to an API, we might not upgrade to 2.0 — instead, 1.1 would suffice.

Here are some resources to get you started:

* Check out this [tutorial](https://blog.christian-schou.dk/how-to-use-api-versioning-in-net-core-web-api/) from Christan Schou for adding versioning to your API.
* Check out [this video from Microsoft](https://learn.microsoft.com/en-us/shows/visual-studio-toolbox/versioning-aspnet-core-services) that discusses how to add and manage versions to ASP.NET Core apps.

### Paginating an API

Let’s say our API has thousands of records. It would no longer be reasonable for a GET request to return all of the records in our database. Instead, we should paginate the results to only return a selection of results, instead of all of the records.

A user should be able to access the API endpoint with a query parameter that specifies the page that should be returned. For example, the query string _/records?page=2_ might return page 2 of the results.

Here are some resources to get you started:

* [Adding sort, filter, and paging](https://learn.microsoft.com/en-us/aspnet/core/data/ef-mvc/sort-filter-page?view=aspnetcore-6.0) from the ASP.NET Core docs. Note that this guide shows you how to sort and filter along with adding pagination (also called "paging").
* Check out the following Code Maze [tutorial](https://code-maze.com/paging-aspnet-core-webapi/) on implementing pagination.

### Enable CORS

Generally, we do not want to enable Cross-Origin Resource Sharing in an API. This is because it reduces the security of our application. However, there are certain use cases where having a CORS-compliant API can be useful. For instance, if we want users to be able to make an API call from a client-side JavaScript application, we'd enable CORS.

Try enabling CORS in your application by following [this tutorial](https://learn.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-6.0) from the official Microsoft documentation.
