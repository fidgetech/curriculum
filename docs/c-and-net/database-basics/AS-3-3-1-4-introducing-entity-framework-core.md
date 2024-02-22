---
title: "📓 3.3.1.4 Introducing Entity Framework Core"
day: monday
id: 3-3-1-4-introducing-entity-framework-core
hide_table_of_contents: true
---

So far, we've managed all SQL statements ourselves. We've written code both to issue SQL commands to the database and to process query results with classes like `MySqlCommand`, `MySqlParameter`, and `MySqlDataReader` from the `MySqlConnector` library.

Now we're going to begin exploring more advanced options. We'll use an **object relational mapping** (or **ORM**) framework to help simplify and manage our database interactions. In this lesson, we'll briefly discuss what an ORM does and why it's beneficial. Then we'll introduce the specific ORM our ASP.NET Core 6.0 applications will use: **Entity Framework Core**.

In following lessons, we'll walk through how to configure and use EF Core in our To Do List app. You are welcome to code along with the lessons, or simply read through them. Throughout the walkthrough we'll share links to an example To Do List project that uses EF Core to communicate with a MySQL database.

## Object Relational Mapping (ORM)
---

**Object-Relational Mapping (ORM)** allows us to query and manipulate database data in an object-oriented fashion. Essentially, ORMs turn database info into objects of the language we're working in. This way we can focus on writing in C# instead of needing to deal with raw SQL.

Object Relational Mapping is a language-agnostic concept. Different languages have different ORM libraries. For instance, Ruby uses a tool called Active Record, Python's commonly-used Django framework includes ORM, and Java has multiple open-source options available.

## Entity Framework Core
---

**Entity Framework Core** (also called **EF Core**) is a powerful library that simplifies the process of mapping C# objects to database records. We can use EF Core to vastly simplify our database CRUD functionality.

While we'll use EF Core to communicate with a MySQL database, EF Core works with many types of databases. To see a complete list, visit [the MS Docs on EF Core Database Providers](https://learn.microsoft.com/en-us/ef/core/providers/?tabs=dotnet-core-cli).

### Versions and Types

Entity Framework comes in two forms: Entity Framework and Entity Framework Core. 

* Entity Framework (EF) was built to work with the .NET Framework and is not compatible with applications built using .NET. Notably, EF only works on Windows computers, just like the .NET Framework.

* Entity Framework Core (EF Core) was built to work with .NET, the software development kit (SDK) that we use in LearnHowToProgram.com coursework. Just like .NET, EF Core is open-source and cross-platform. EF Core has fewer features than Entity Framework, however it is lightweight and recommended for applications that don't require highly complex data manipulation. 

Because we use .NET 6.0, so we must also use Entity Framework Core version 6.0.

## Next Steps
---

In the next few lessons we'll walk through configuring Entity Framework Core to work with our own applications. Then we'll use EF Core to help us write CRUD functionality that allows us to interact with our database without manually-constructed MySQL commands.
