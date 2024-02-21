---
title: ✏️ 3.3.3.1 Best Restaurants in Town
id: 3331-best-restaurants-in-town
hide_table_of_contents: true
day: wednesday
---

**Goal**: Build out an application using a one-to-many relationship with Entity. The application should include two models, both with full CRUD functionality.

## Warm Up
---

* Give an example of a one-to-many relationship. How can you determine this is the correct relationship?
* How do we associate database entries?
* What is a navigation property?
* What is ViewBag and how is it useful?

## Code
---

### To Do List

Follow along with the homework lessons to build out a fully-functional To Do List with a one-to-many relationship between `Category`s and `Item`s.

### Relations Practice

Next let's go through some exercises to help you get comfortable with database design and schemas:

* Create tables with sample data for a system that tracks non-profits and their board members. A non-profit has many board members, so this is a one-to-many relationship. Sketch it out on a whiteboard or using a spreadsheet.

* Suppose you wanted to make a list of restaurants in your neighborhood and group them together by the kind of food they serve. Create sample `restaurants` and `types_of_food` tables. Start with a one-to-many relationship (assume a restaurant only serves one type of food). You can feel free to think about how you could make this a many-to-many relationship, but don't worry if you don't know how! We'll learn all about those in the next course section.

* Make a schema for your database tables of restaurants and the type of food they serve.

### Best Restaurants

Create a website where users can add their favorite restaurants based on the type of cuisine they offer.

* Add a `Cuisine` class. Build out all CRUD functionality (Create, Read, Update, Delete) for this class. Remember that "Read" means to view a particular cuisine and to list out all of the cuisines.

* Add a `Restaurant` class. Build out all CRUD functionality for this class.

* Add properties other than `name` to your `Restaurant` class so that you can display descriptive information about the restaurants.

* Make the connection between a cuisine and a restaurant in the database. A cuisine can have many restaurants, but a restaurant can only be attached to one cuisine.

* Allow a user to search for all of a cuisine's restaurants.

### Further Exploration

If you have time, go ahead and tackle the next few features.

* Now your application allows for users to review restaurants. Build out a `Review` class and make the relationship in the database so that a restaurant has many reviews. Pretend that the users who are reviewing the website are different from the user who added the restaurant.

* Display all of the reviews at the bottom of the restaurant's page.

## Peer/Instructor Code Review
---

* Do the database table and column names follow proper naming conventions?
* Is there a one-to-many relationship set up correctly in Entity?
* Is ViewBag used correctly?
* Does the application work as expected?
