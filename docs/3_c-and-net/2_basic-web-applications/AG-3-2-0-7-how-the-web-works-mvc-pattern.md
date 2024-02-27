---
title: "📓 3.2.0.7 How the Web Works: MVC Pattern"
day: weekend
id: 3-2-0-7-how-the-web-works-mvc-pattern
hide_table_of_contents: true
---

In the [_Introduction to ASP.NET Core MVC_](https://old.learnhowtoprogram.com/c-and-net/basic-web-applications/introduction-to-asp-net-core) lesson, we stated that there were two _very_ important things to know about the ASP.NET Core MVC framework we're using this section:

> 1. It's a **server-side** framework.
> 2. It follows the **MVC** (Model-View-Controller) pattern.

We thoroughly discussed what it means to be **server-side** in the previous lesson. Now let's break down the term **MVC** before we  create our first C# web application together.

## MVC
---

The **MVC** in _ASP.NET MVC_ stands for **Model-View-Controller**. This refers to the three primary elements the framework uses to save, retrieve, manipulate, and display information to users. It's a really common architecture pattern used in frameworks from all languages. As its name suggests, the pattern is composed of three parts:

1. A **model**

2. A **view**

3. A **controller**

### 1. Models

A **model** represents data. After all, most applications require some sort of data!

For instance, pretend we wanted to create a web version of our Shape Tracker application from last section using ASP.NET Core MVC. It would contain the same general functionality, but with a nifty web interface. As we know, this application saves data about a triangle's three sides and determines the type of triangle that the user has. In our application, these triangles are called `Triangle` objects and a `Triangle` class is used to construct them. 

Well, in ASP.NET Core MVC, this `Triangle` class _is_ actually our model! Why? Because it represents, creates, and shapes the data our application works with.

### 2. Views

A **view** is the part a user sees, or _views_. It represents the user interface of the application. The portion visible in the browser. The view typically observes the model and automatically updates it when necessary.

For example, our web-enabled version of the To Do List will dynamically display a user's list of `Item`s in the browser. It will contain both hard-coded HTML and dynamic areas that display different information depending on the current list of `Item`s in our model.

Views are a bit like the `.html` files we've used to create web interfaces in the past but with some extra functionality that allows them to update automatically when our model changes. So we give these files the `.cshtml` extension instead, which allows us to write C# logic for this alongside our HTML. We'll see exactly what this looks like in an upcoming lesson.

### 3. Controllers

A **controller** acts as the bridge between models and views. When the user navigates to a new page, the controller grabs information from the model and tells ASP.NET to add it to the proper view. It is responsible for deciding which view to display with which model.

Note that many other MVCs are phasing out controllers in favor of **components**, so be aware that you might see that term if you research MVC architecture.

## MVC Structure

ASP.NET Core MVC makes this very clear by requiring developers to follow a particular convention:

* Models are placed in a `Models` folder.

* Controllers are placed in a `Controllers` folder.

* And, you guessed it, views are placed in a `Views` folder.

We'll walk through creating this project structure together in the next lesson.

## Request/Response Cycle
---

Check out this diagram illustrating how the request/response cycle works in an MVC architecture:

![MVC request response cycle](/images/c%23/mvc-request-response-dotnet.png)

For now, we will use local storage for our apps so you don't need to understand how the model communicates with a database just yet. Instead, just know that the controller calls on the model to retrieve the data needed for the view.

## Other MVC Frameworks
---

Also, remember that many other frameworks use this MVC structure. That means that the basics you learn this section can apply to _tons_ of other languages and frameworks you may use in the future. Here are just a few (both server-side _and_ client-side):

#### C# 

* [ASP.NET](https://learn.microsoft.com/en-us/dotnet/framework/develop-web-apps-with-aspnet) (used with the .NET Framework)
* [ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-6.0) (used with .NET Core and .NET versions 5.0 and up)

#### Ruby

* [Ruby on Rails](http://guides.rubyonrails.org/getting_started.html)

#### Python

* [Django](https://www.djangoproject.com/)

#### JavaScript

* [Angular](https://angular.io/)
* [EmberJS](http://emberjs.com/)
* [Knockout](http://knockoutjs.com/)
* [Backbone](http://backbonejs.org/)

#### Java

* [Spring MVC](https://docs.spring.io/spring/docs/current/spring-framework-reference/html/mvc.html)

#### PHP

* [Laravel](https://laravel.com/)
* [Lithium](http://li3.me/)
