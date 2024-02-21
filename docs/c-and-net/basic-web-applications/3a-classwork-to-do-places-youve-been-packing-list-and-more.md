---
title: '✏️ 3.2.3.1 To Do List, Places You''ve Been, Packer Tracker, Tamagotchi'
id: 3-2-3-1-to-do-list-places-youve-been-packer-tracker-tamagotchi
hide_table_of_contents: true
day: wednesday
---

**Goal:** Practice making ASP.NET Core MVC apps that use RESTfully named routes and include CRUD functionality. Each class in each project _must_ include a constructor, getters and setters, private properties, and methods for `GetAll()` and `ClearAll()`.

## Warm Up
---

* What does a `Find()` method do and why is it beneficial?
* What is RESTful routing? What are its benefits?
* How does ASP.NET Core MVC create unique URLs for each individual detail page using only one route?
* What happens in each of the following lines of sample code?
  * `Task foundTask = Task.Find(3);`
  * `View(foundTask);`
  * `<a href='/kittens/@kitten.Id'>@kitten.Name</a>`

## Code
---

### To Do List Continued

Start off by working through the homework to expand upon your To Do List by integrating the new concepts discussed. Make sure you have a clear understanding of RESTful routing and how data is passed between multiple views and routes using dynamic routing.

### Places You've Been

Make a website where you can enter places you've been to create an online travel diary.

* A place should be represented by a `Place` class. Begin by giving it the property `cityName`.

* After testing all model logic and developing controllers and views this application, expand your `Place` model to include relevant properties like picture(s), how long you stayed, whom you travelled with, a journal entry, and so on. Integrate these into your controllers and views.

* At the very least, this app should include RESTful Index, New, Create, and Show routes for the `Place` class.  

### Packer Tracker

Make a program for users to catalog things they need for upcoming camping, backpacking, bike touring, road trips, or other types of travel.

* Before beginning, determine what your data model will look like. Depending on the theme of your site, you may want properties to hold any combination of name, price, purchased or not purchased, weight, manufacturer, packed or not yet packed, and so on.

* Ensure all model logic is tested following Test-Driven Development best practices.

* At the very least, this app should include RESTful Index, New, Create, and Show routes.  

* Carefully follow RESTful routing conventions as you build your routes, paying close attention to how dynamic routing passes identifiers through different routes and views.

* **Challenge:** Can you generate a list of things that are _not_ yet packed so they can be checked off? Use forms for this.

### Challenging: Tamagotchi

In the 90's [Tamagotchis](http://en.wikipedia.org/wiki/Tamagotchi) were popular. They were electronic pets that you could carry around and press buttons to feed it, play with it, and put it to sleep. If you didn't give it enough food, attention, or rest, it would die.

* Make a web app where you can create a Tamagotchi object by giving it a name and submitting a form.

* It should have properties for the amount of food, attention, and rest it currently has.

* There should be a main page displaying the names of all your Tamagotchi objects with the values of their properties.

* Create buttons to call methods to:

  * Feed it, play with it, and put it to sleep. These methods should modify the properties of a single Tamagotchi object — such as a `food` property.

  * Make time pass. Every time you press it, the food, happiness and sleep properties of _all_ Tamagotchis should decrease. If any of these properties get to 0, the Tamagotchi object should report that it's dead.

* At the very least, this app should include RESTful Index, New, Create, and Show routes.  

## Instructor Code Review
---

* Are RESTful routes clearly defined? Are there ways to improve the routing?
* Are all methods (`GetAll()`, `ClearAll()`, `Find()` etc.) written and working?
* How are the objects being stored? Are they being correctly called when needed?
