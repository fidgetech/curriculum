---
title: '✏️ 3.4.1.1 Library Catalog, Recipe Box Week-Long Project - Part 4 (day 3)'
id: 3-4-1-1-library-catalog-recipe-box-week-long-project---part-4-day-3
hide_table_of_contents: true
day: thursday
---

**Goal**: Practice creating many-to-many relationships with your applications. Use Identity to allow users to register, log in and log out. Explore using authorization to limit what users can and can't do in an application.

## Warm Up
---

* What is the difference between EF Core and Identity?
* What is the difference between authentication and authorization?
* How do async and await work in C#?

## Code
---

Choose one of the following three projects to work on, this project is expected to take much longer than normal. Before coding, think through your design using SQL Designer to visualize the relationships between tables and models. Determine what kind of many-to-many relationships you will implement.

### Recipe Box

Build an app that allows users to keep track of recipes. Here are some user stories:

* As a user, I want to **add** a recipe with ingredients and instructions, so I remember how to prepare my favorite dishes.
* As a user, I want to **tag** my recipes with different categories, so recipes are easier to find. A recipe can have many tags and a tag can have many recipes.
* As a user, I want to be able to **update** and **delete** tags, so I can have flexibility with how I categorize recipes.
* As a user, I want to **edit** my recipes, so I can make improvements or corrections to my recipes.
* As a user, I want to be able to **delete** recipes I don't like or use, so I don't have to see them as choices.
* As a user, I want to **rate** my recipes, so I know which ones are the best.
* As a user, I want to **list my recipes by highest rated** so I can see which ones I like the best.
* As a user, I want to **see all recipes that use a certain ingredient**, so I can more easily find recipes for the ingredients I have.

Add authentication:

* As a user, I want to create an account.
* As a user, I want to be able to log in and log off.
* As a user, I want to be able to see my account details.

Add authorization:

* As a user, I should only be able to create, read, update and delete if I am logged in. 

OR

* As a user, I should only be able to create, update and delete if I am logged in. All users should be able to have read functionality.

### Library

Create an app to catalog a library's books and let patrons check them out. Below are some user stories to get you started. To differentiate between the two users (librarians and patrons) and their unique needs, create separate locations in the app for each user to go to access their functionality. There's no one way to do this, so discuss with your pair what the best structure is before you start coding. Make sure to add basic authentication.

As time allows, explore the optional further exploration topic of authorization with user roles to distinguish between librarians and patrons. Authorization with user roles is introduced in an upcoming lesson, and is not required for the independent project.

* As a librarian, I want to **create**, read, update, delete, and **list** books in the catalog, so that we can keep track of our inventory.
* As a librarian, I should only be able to create, update and delete if I am logged in. All users should be able to have read functionality. (Hint: authorize CUD routes for books.)
* As a librarian, I want to **search** for a book by author or title, so that I can find a book when there are a lot of books in the library.
* As a librarian, I want to **enter** multiple authors for a book, so that I can include accurate information in my catalog. (Hint: make an `authors` table and a `books` table with a many-to-many relationship.)
* As a patron, I want to **check a book out**, so that I can take it home with me. I should only be able to do this if I am logged in.
* As a patron, I want to know **how many copies** of a book are on the shelf, so that I can see if any are available. (Hint: make a `copies` table; a book should have many copies.)
* As a patron, I want to see a history of all the books I checked out, so that I can look up the name of that awesome sci-fi novel I read three years ago. (Hint: make a `checkouts` table that is a join table between `patrons` and `copies`.)
* As a patron, I want to know when a book I checked out is **due**, so that I know when to return it.
* As a librarian, I want to see a **list of overdue books**, so that I can call up the patron who checked them out and tell them to bring them back — OR ELSE!

### Design Your Own

If you'd prefer, choose another project that includes authentication and authorization. Get approval from an instructor before beginning. You might choose something brand new, or revisit an earlier in-class project. Make sure to include user stories to guide your development before beginning.

## Instructor/Peer Code Review
---

* Does one of your classes have all CRUD methods implemented?
* Are you able to view both sides of the many-many relationship? For a particular instance of a class, are you able to view all of the instances of the **other** class that are related to it? And vice versa?
* Is the many-to-many relationship set up correctly in the database?
* Is Identity set up so that users can register, log in and log out?
* Is authorization correctly set up? For instance, can only librarians do CRUD functionality for books? For the recipe application, can users only see their own recipes?
