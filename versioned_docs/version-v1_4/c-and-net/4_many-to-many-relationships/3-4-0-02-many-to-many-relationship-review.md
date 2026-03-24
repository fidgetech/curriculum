---
title: "📓 5.4.0.2 Many-to-Many Relationship Review"
day: weekend
id: 5-4-0-2-many-to-many-relationship-review
hide_table_of_contents: true
---

Before we begin implementing many-to-many relationships, let's review what they look like and how they work.

## Many-to-Many Relationships
---

Imagine we have the following database table containing our friends' contact information:

friends
-------

 id | name    | phone
----|---------|-----------
 1  | Pedro   | 9165551212
 2  | Jessica | 3235551212
 3  | Jake    | 4155551212

What if we also want to track what cities our friends have visited? We can add a second `cities` table that contains a `friend_id` foreign key, like this:

cities
------

 id | city     | state | friend_id
----|----------|-------|-----------
  1 | Chicago  | IL    | 1
  2 | New York | NY    | 1
  3 | Oakland  | CA    | 2
  4 | Portland | OR    | 3

Each city contains a `friend_id` that corresponds to the friend who has visited that city. So far so good.

However, what if Jessica, Jake, _and_ Pedro have all been to Chicago? To record this, our `cities` table would look like this:

friends
-------

 id | name    | phone
 ---|---------|-----------
 1  | Pedro   | 9165551212
 2  | Jessica | 3235551212
 3  | Jake    | 4155551212


cities
------

 id | city     | state | friend_id
 ---|----------|-------|----------
  1 | Chicago  | IL    | 1
  2 | New York | NY    | 1
  3 | Oakland  | CA    | 2
  4 | Portland | OR    | 3
  5 | Chicago  | IL    | 2
  6 | Chicago  | IL    | 3

Here we've created three entries for Chicago. Each one has a different `friend_id` corresponding with one of the friends in our `friends` table.

However, this is very inefficient. We are now storing information about Chicago in three different places. If we later want to update Chicago's entry, we'd have to update it in multiple locations. Our data could very quickly become inconsistent if we don't update it in every place.

If we try to solve the problem by including a `city_id` column in the `friends` table instead, we'll end up with the same problem. Instead of having duplicate cities, we'll have duplicate friends.

We can't accurately reflect this information with the tools we used to associate a one-to-many relationship. Instead, we need to create a **many-to-many relationship** because each friend is capable of visiting many different cities and each city can also have many different visits from friends.

### Join Tables

The right way to handle a many-to-many relationship is by using a third table called **join table**.

friends
-------

 id | name    | phone
 ---|---------|-----------
 1  | Pedro   | 9165551212
 2  | Jessica | 3235551212
 3  | Jake    | 4155551212


cities
------

 id | city     | state
 ---|----------|------
 1  | Chicago  | IL
 2  | New York | NY
 3  | Oakland  | CA
 4  | Portland | OR


cities_friends
--------------

 id | city_id | friend_id
 ---|---------|----------
 1  | 1       | 1
 2  | 1       | 2
 3  | 2       | 3
 4  | 2       | 1

* We have a `friends` table with information about each of our three friends.

* We also have a `cities` table with information about the four cities we're tracking.

* We have a third **join table** called `cities_friends`. For each instance of a friend interacting with a city, we record an entry in this table. Each entry contains the ID of a city and the ID of the friend that made a visit to that city. Notice that each of these two IDs match their corresponding entries in the `friends` and `cities` table.

Join tables are generally named by combining names of the two tables they're "joining." In this case, we have `cities` and `friends` separated by an underscore. But if the type of interaction the join table is recording has a more descriptive name, we can use that instead. For instance, we could call the join table above `visits`.

Let's consider one more example. Let's say we're making an application for a school. Each course the school offers has many different students in it. A student is also capable of taking many different courses. Recording this information in a many-to-many database relationship might look like this:

courses
-------

 id | course
 ---|------------------------
  1 | Epicodus
  2 | How to cook vegan
  3 | Intro to rocket science

students
--------

 id | student
 ---|--------
  1 | libby  
  2 | tiny   
  3 | bub    
  4 | lizzy  
  5 | hank   

enrollments
-----------

 id | student_id | course_id
 ---|------------|----------
  1 | 1          | 1
  2 | 2          | 1
  3 | 3          | 2
  4 | 4          | 1
  5 | 5          | 3
  6 | 2          | 3
  7 | 4          | 3

* We have a `courses` table recording each course the school offers.

* We also have a `students` table with all enrolled students.

* Our join table is called `enrollments`. For each instance of a relationship between a student and course, it contains an entry linking that student's ID and the course ID.

### Schema Diagrams

To familiarize you with how a database works, we've been showing you tables with example data. However, when you want to describe all the tables and relations in a database, also called the database **schema**, it's not convenient to include sample data because it takes up too much space. Instead, tables are depicted only with the table name and column names, like this:

friends
-------

name<br />
phone<br/>
birthday

As we can see, we're now listing the column names vertically under the table name, instead of horizontally. Also, there's no data listed.

Database column names are also called database **fields**. In this example, there are three fields for the friends table: name, phone, and birthday.

When designing database schemas, it's often helpful to draw out the relationships among tables like this:

![A simple database schema diagram.](/images/schema_simple.png)

It's especially helpful if you're trying to figure out a more complex schema:

![drawing of complex schema](/images/schema_complex.png)

You can make schema diagrams like this with this online [SQL Designer](http://ondras.zarovi.cz/sql/demo/). The SQL Designer has a lot of options, but ignore most of them. Just add tables and add fields to tables, and don't worry about data types or other options. To connect tables for your one-to-many and many-to-many relationships, click on the ID of the table, click _connection foreign key_ (on the right), and then click the corresponding field that references that ID.
