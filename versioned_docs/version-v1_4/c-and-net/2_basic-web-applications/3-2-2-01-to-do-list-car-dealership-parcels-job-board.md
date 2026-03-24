---
title: '✏️ 5.2.2.1 To Do List, Car Dealership, Parcels, Job Board'
day: tuesday
id: 5-2-2-1-to-do-list-car-dealership-parcels-job-board
hide_table_of_contents: true
---

**Goal:** Continue familiarizing yourselves with the ASP.NET Core MVC framework, paying special attention to the difference between GET and POST requests and creating multi-controller applications.

## Warm Up
---

* Why is it a good idea to use multiple controllers?
* Where does a controller automatically look for its corresponding views?
* What's the difference between a GET and POST request?
* Describe an example of a GET request.
* Describe an example of a POST request.

## Code
---

### To Do List Continued

Work through the homework lessons and complete the To Do List application.

### Car Dealership

Create a car dealership application that allows users to add new cars through a nicely-formatted web interface.

* Make sure the `Car` class is well-tested. Try including both public properties and a private field.

* Think carefully about how to use a static property to track all cars that have been created. (In the To Do List example, we added `Item`s to a list using the keyword `this`. For this exercise, we are dealing with `Car`s instead. How should we declare `_instances` in this case? What kind of data type should we use?

### Parcels

Following the guidelines below, create a website for a fictional shipping company that helps users calculate shipping estimates:

* Create a `Parcel` class and test it thoroughly. It should contain a constructor, and getters and setters for each property. You should be able to create a new parcel and specify the dimensions and weight in the arguments.

* Create a website where the user can submit a form with the dimensions and weight of a `Parcel`, and you can use the data in the form to instantiate a `Parcel` object and display its dimensions and weight.

* When you call a method called `Volume()` on a `Parcel` instance, it should return the product of the sides.

* When you call a `CostToShip()` method on your parcel, return a cost based on a formula you make up.

* Display the cost to ship and the volume of a `Parcel` with its dimensions in your site.

* Bonus: Add validation and make sure the `Parcel` object is not created if any of the form fields are blank. Display an error message instead. Also make sure your user can only enter numbers into the form.

### Job Board

Create a job posting board where a user can create instances of a `JobOpening` class representing local positions.

* It should include properties for a title, description, and contact info for the person posting the job.  

* It should allow users to create new `JobOpening`s by submitting a form.

* The application should also list all openings for users to view.

* Users should also be able to click on a specific `JobOpening` from the list to view details.

If you're feeling fancy, make the contact info into an object with its own class declaration. **Hint:** A `Contact` object would include properties like a `name`, `email` and `phoneNumber`, and you would want to store it inside the `JobOpening` object.

For every model you create, make sure each is thoroughly tested.

## Instructor Code Review
---

* Is Razor markup syntax used correctly?
* Are routes and route decorators clearly named? Is the code in each route easy to read and understand?
* Is code separated into different controllers if necessary?
* How well does the site work?
* Are clear and complete instructions for setting up the project included in the README?
