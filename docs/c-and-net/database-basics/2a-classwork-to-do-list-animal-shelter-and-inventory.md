---
title: '✏️ 3.3.2.1 To Do List, Animal Shelter, and Inventory'
id: 3-3-2-1-to-do-list-animal-shelter-and-inventory
hide_table_of_contents: true
day: tuesday
---

**Goal**: Practice using a database while becoming more familiar with Entity. Focus on adding create and read functionality to your applications. If you have extra time, consider looking at tonight's lessons for adding update and delete functionality. We recommend using [WWW SQL Designer](http://ondras.zarovi.cz/sql/demo/) to plan out tables and columns.

## Warm Up
---

* What is Entity Framework Core?
* What is a database context?
* What is an entity?
* What is LINQ and how is it helpful?
* What is an HTML helper method? Name a few examples and how they can be used in a view.

## Code
---

### To Do List

Follow along with the lessons from the homework to integrate EF Core into a To Do List application.

### Animal Shelter

Make a program for an animal shelter to track the animals in their facility based on animal type (such as cat or dog). Build out features that let a shelter worker:

* Add types of animals to the system. `type` should be a column on the `animals` table. A type could be a cat, dog, bunny or any other animal.
* Add an animal to the system. An animal should have a name, date of admittance, and breed. When it gets added to the system, it should be added as a particular type.
* List animals by breed or type alphabetically.
* List animals starting with the ones who have been in the shelter the longest.

### Inventory

Make a website where users can inventory their collections. This collection could be anything from records to rocks to board games, depending on your interest. The application should have full create and read functionality.

#### Further Exploration

If you complete the projects above with time to spare, tackle these additional features:

* Create a `Search()` method in either the Inventory or Animal Shelter application. It should take the name of the animal or item as an argument and return any animals or items that match.
* Let users choose what properties to search by. For instance, this could be type or age of animal in the animal shelter application or date acquired or keyword in the inventory application.
* Continue on to tonight's homework and add update and delete functionality to your application.

## Peer/Instructor Code Review
---

* Application correctly integrates EF Core and LINQ.
* Logic is easy to understand.
* Database table and column names follow proper naming conventions.
* Application works as expected.
