---
title: "📓 5.3.3.2 ACID Databases"
day: wednesday
id: 5-3-3-2-acid-databases
hide_table_of_contents: true
---

One of the biggest advantages of SQL database is that they are incredibly stable. In computer science, the acronym **ACID** is used to describe the ways in which a SQL database is reliable. In this lesson, we'll cover **ACID** and why it is important. The content in this lesson isn't required for Friday's independent project. However, it is a key part of understanding how SQL databases work and how they are different from NoSQL databases. We will be using a NoSQL database in the React course.

An SQL database must have all of the following:

**Atomicity**: Just as an atom is undividable, the same must be true about a SQL database transaction. In other words, a transaction must either completely succeed or completely fail. For instance, if we were to make a query to return all of the Albums from our database, we would expect all results to be returned, not just most of them. If our database cannot return every result, then the query should fail. After all, our database wouldn't be very reliable if it only gave us some of the information we needed.

**Consistency**: An SQL database must be consistent. This simply means that a database must always be in a valid state. In order to enforce this, any data we add to our database must be valid according to the constraints imposed by our database. An SQL database will enforce consistency by rejecting invalid transactions.

**Isolation**: In a large database, there can be many transactions happening all at once or at different times. The principle of isolation states that regardless of how these transactions occur, the database will ultimately be in the same state after the transactions are complete. This may sound complicated, but it just means that SQL databases have to handle concurrency. We also have to handle **concurrency** as programmers, such as when we're working with API calls in JavaScript.

At the strictest level of isolation, this means there can only be one copy of a database on one server. Otherwise, we could have a database distributed across multiple servers and each part of the database could be in a different state. Here's an example. Imagine two users on opposite ends of the world using an application with only one database server. User one makes an update to an Album (now it's sold out!) while user two wants to view that Album and see if it's available. These transactions will occur in the order they reach the database and the data will remain reliable.

Now imagine that the application has two database servers. Only one of the servers can be updated at a time. If the second user's query hits the second database, they may be accessing data that is different from the data on the first server. This is called a **dirty read** and it violates the principle of isolation.

Isolation is extremely important for the reliability of a database. However, with larger databases isolation leads to a decline in performance. For that reason, it's common for this principle to be relaxed to improve performance.

Ultimately, there are many levels of isolation leading to various tradeoffs in reliability and performance.

**Durability**: Once a database transaction is complete, it remains complete. Data cannot be erased or changed without further transactions. This just means that SQL databases must retain their data even in the case of potential issues such as outages or power failures. For this reason, data is generally recorded in non-volatile memory, which does not need constant power like volatile memory does.

In general, SQL databases are at their strongest when we can use relationships and a clear schema to represent our data. If we can't clearly define a schema and we don't need relationships in our application, NoSQL databases can be a better solution.
