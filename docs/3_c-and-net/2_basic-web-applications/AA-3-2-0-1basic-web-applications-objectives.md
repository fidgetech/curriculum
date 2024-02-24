---
title: "📓 3.2.0.1Basic Web Applications Objectives"
day: weekend
id: 3-2-0-1basic-web-applications-objectives
hide_table_of_contents: true
paginationPrev: null
---

All C# apps we've created thus far have run in the command line. We've made cool stuff, sure, but without a front-end user interface our user interaction remains fairly limited.

But we're about to change that! In this section, we'll begin creating C# web applications that run in the browser, like a 'real' website, instead of just the command line. We'll use a special web application framework called **ASP.NET Core MVC** to do this.

Note that **ASP.NET Core** is an open-source framework within the .NET 6 framework. **ASP.NET Core** itself contains multiple frameworks to create cross-platform web applications. These include:

* ASP.NET Core MVC
* ASP.NET Core Razor Pages
* ASP.NET Core Blazor
* ASP.NET Core Web APIs
* And more!

As noted above, we'll be working with ASP.NET Core MVC. **MVC** stands for **Model-View-Controller**, which is a coding pattern that separates code into 3 sections: 

* The model — what defines our objects
* The view — what users see on the website
* The controller — the mechanism that routes website traffic

We will start by delving into routing and app creation with ASP.NET Core MVC's routing system. Then we will build our own custom C# classes and methods. Your work this section will cover the following tools and concepts:

* Server-Side MVCs
* HTTP methods
* RESTful routing
* Objects within objects
* Razor markup and syntax
* Saving data with C#

By the end of the section, you should be able to create an ASP.NET Core MVC web application with good test coverage of model logic. 

When searching on the internet or conversing with other developers, always be careful to specify that you are using ASP.NET Core version 6. Note that the version of ASP.NET Core will always match the version of .NET that we use.

## Independent Project Objectives
---

At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:

* A splash page is used.
* Project has `Vendor` and `Order` classes.
* Project uses two or more controllers.
* Models are thoroughly tested.
* GET and POST requests/responses are used successfully.
* MVC routes follow RESTful conventions.
* Project is in a polished, portfolio-quality state.
* The prompt’s required functionality and baseline project requirements are met.
