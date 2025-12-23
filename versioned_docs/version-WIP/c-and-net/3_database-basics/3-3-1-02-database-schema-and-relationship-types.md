---
title: "📓 5.3.1.2 Database Schema and Relationship Types"
day: monday
id: 5-3-1-2-database-schema-and-relationship-types
hide_table_of_contents: true
---

Every database has a **schema**. A database schema is the structure that represents the way the database is built.  The database schema defines how data is stored in the database tables and how the relations among tables are associated.

In this lesson, we'll create visual representations of database schema and talk about the most common SQL database relationships:

* one-to-many
* many-to-many
* one-to-one

## One-to-Many Relationships
---

Here's a visual representation of our record store's database schema so far:

![record store schema](/images/RUBY/Week+3+-+Databases+with+SQL/one-to-many.png)

This representation includes both of our tables, the properties of each table, and the relationship between the two tables.

At this point, our application is fairly simple. There's a table for `albums` and a table for `songs`. Each song belongs to an album, which we represent with a line between the `id` property in the `albums` table and the `album_id` property in the `songs` table.

As we discussed in previous lessons, the relationship between these two tables is **one-to-many**. An album can have many songs but a song can only have one album. In this kind of relationship, it's fairly common for the "many" to be **dependent** on the one. If this is the case, songs should only exist if they belong to an album. However, one-to-many relationships can also exist without the "many" being dependent. An example might be cargo that belongs to a ship. The cargo can only belong to one ship, but there may be times when the cargo hasn't been loaded and doesn't belong to a ship yet.

## Many-to-Many Relationships
---

Many-to-many relationships are more complicated because they involve a join table. Let's look at an example: a many-to-many relationship between `Album`s and `Artist`s.

It's evident that an `Artist` should be able to have many `Album`s. However, a one-to-many isn't the best option here because an `Album` could also have many `Artist`s. An example would be an album that's a compilation or a collaboration between multiple artists.

Let's take a look at a visual representation of the many-to-many relationship we'll build:

![record store schema with many-to-many relationship](/images/RUBY/Week+3+-+Databases+with+SQL/many-to-many.png)

In this case, we have a join table called `albums_artists` that stores the relationships between the `artists` table and the `albums` table.

Sometimes a join table can be more complex. Some join tables also have other fields. An example might be a `checkout` join table between `Patron`s and `Book`s at a library. The `due_date` of a book would most likely go on the `checkout` join table.

Join tables can have their own descriptive names such as in the `checkout` example above. However, it's also common to have the name be a combination of the two tables that are being joined. If this is the case, the names should be in alphabetic order. In other words, we'd always call the join table for `Artist`s and `Album`s `albums_artists`, not `artists-albums`. We need to use an underscore to delimit table names, not a character like a dash, which SQL will not accept.

## One-to-One Relationships
---

One-to-one relationships are less common but are still very important. It's not required to use one-to-one relationships in this course but you may wish to experiment with them or have a project that would work best with this relationship.

Two tables have a **one-to-one relationship** when a row on one table is related to _only one_ row on the other table. A common example is a relationship between `customers` and `accounts`:

![Customers-accounts schema](/images/database-schema/customers-accounts-schema.png)

According to this schema, a customer can only have one account and an account can belong to only one customer.  The relationship between the customers table and the accounts table represents a one-to-one relationship.

## Visually Representing Database Schema
---

We will practice designing database schema using this free [SQL Designer Tool](http://ondras.zarovi.cz/sql/demo/). From now on, include a visual representation of your database schema that shows all tables, properties, and relationships between tables. In the next lesson, we'll go over the basics of using this tool.
