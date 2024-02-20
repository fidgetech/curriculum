---
title: "\U0001F4D3 3.3.0.06 Retrieving Objects From the Database"
id: 33006-retrieving-objects-from-the-database
slug: 33006-retrieving-objects-from-the-database
hide_table_of_contents: true
sidebar_position: 6
day: weekend
type: lesson
url: https://github.com/fidgetech/c-and-net/blob/main/0g_retrieving_objects_from_the_database.md
---

Now that we've set up MySqlConnector and configured our application to use and protect a database connection string, we're ready to begin opening a database connection and interacting with our database in our application.

In this lesson, we'll use MySQL and C# to turn information from a database into C# objects our application can work with. Specifically, we'll rewrite our `GetAll()` method to return all the rows from our `items` table.

Because our database will persist `Item`s, we no longer need to store `Item`s in the static list `_instances`. We'll start by removing all references to `_instances` from our code.

First, we'll remove them from our class declaration and constructor:

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
...
namespace ToDoList.Models
{
  public class Item
  {
    public string Description { get; set; }
    public int Id { get; }

    public Item(string description)
    {
        Description = description;
    }

    ...
  }
  ...
}
```

Next, we'll remove `_instances` from the `Find()` and `ClearAll()` methods. Because we'll get a compiler error if `Find()` doesn't return an `Item`, we'll update the method to return a placeholder item for now. We'll refactor the `Find()` method to return an actual `Item` from the database in a future lesson.

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
...

  public static Item Find(int searchId)
  {
    // Temporarily returning placeholder item to get beyond compiler errors until we refactor to work with database.
    Item placeholderItem = new Item("placeholder item");
    return placeholderItem;
  }

...
```

Our `ClearAll()` method is `void` and doesn't return anything so it can just be empty for now:

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
public static void ClearAll()
{
}
```

Now we're ready to rewrite our existing `GetAll()` method.

## Returning All Records From the Database
---

Our new `GetAll()` method will present a lot of new concepts and boilerplate code, so it may feel overwhelming at first. We'll start by displaying the method in its entirety. Then we'll walk through the method line by line. 

Later in this section when we begin to use Entity Framework Core, our lengthy boilerplate code (as seen below) will be abstracted into method calls to built-in .NET classes. So, the goal of writing this boilerplate code now is to demonstrate what is actually happening when a .NET application interacts with a database. While we will be writing our methods this way for the first class session, **this will not be expected for this section's independent project**.

Here's our new `GetAll()` method:

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
...
using MySqlConnector;
...

    public static List<Item> GetAll()
    {
      List<Item> allItems = new List<Item> { };

      MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);
      conn.Open();

      MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;
      cmd.CommandText = "SELECT * FROM items;";

      MySqlDataReader rdr = cmd.ExecuteReader() as MySqlDataReader;
      while (rdr.Read())
      {
          int itemId = rdr.GetInt32(0);
          string itemDescription = rdr.GetString(1);
          Item newItem = new Item(itemDescription, itemId);
          allItems.Add(newItem);
      }
      conn.Close();
      if (conn != null)
      {
          conn.Dispose();
      }
      return allItems;
    }
...
```

That's a lot of new code! The first and last line should be familiar. We instantiate a new empty `List` and return that `List` after it's been populated. Before we cover the rest of the code line-by-line, here's a quick overview of what this method does:

* Open a database connection;
* Construct a SQL query;
* Return the query results from the database;
* Close the connection.

Before we continue, note that we also need to add `using MySqlConnector;` to the top of our file.

### Opening a Database Connection

Each time we make a query, we need to open a new database connection:

```csharp
MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);
conn.Open();
```

This part is relatively simple. We invoke the `MySqlConnection()` method to instantiate and return a connection to our database, which we call `conn`. Then we `Open()` the connection. Later, we'll `Close()` our connection. 

Note that our application will throw an exception if we try to make a SQL query without first opening a database connection.

### Construct a SQL Query

Once our connection is open, we can construct our SQL query:

```csharp
MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;
cmd.CommandText = "SELECT * FROM items;";
```

When we make a SQL query in our application, it's not just a string of text. The query needs to be stored in a special object called a `MySqlCommand`.

In order to do this, we call the `createCommand()` method on our `conn` object. We include the expression `as MySqlCommand` at the end of this line. Using `as` creates an expression that **casts** `cmd` into a `MySqlCommand` object.

This casting is important because there are many different types of SQL databases and many different types of objects that can interact with them. Because our connection is a `MySqlConnection` type object, we cast it to send a corresponding `MySqlCommand` to the database.

Next, we'll add the actual text of our SQL command:

```csharp
cmd.CommandText = "SELECT * FROM items;";
```

Remember that `cmd` is a `MySqlCommand` object. A `MySQLCommand` object has a number of different properties we can set. We won't cover most of them, but the `CommandText` property is essential because it's where we'll store our actual SQL query.

We set this property value to `"SELECT * FROM items;"`.

### Returning Results from the Database

Next, we need to create a **Data Reader Object**. It will be responsible for reading the data returned by our database in response to the `"SELECT * FROM items;"` command:

```csharp
MySqlDataReader rdr = cmd.ExecuteReader() as MySqlDataReader;
```

We'll cast its type for use with MySQL just like we did with `conn`. We call this Data Reader `rdr` and use the `as` keyword to cast it into a `MySqlDataReader` object.

The `rdr` object represents the actual reading of the database. However, we will need to call other methods on the `rdr` object in order to display the results of the query in our application:

```csharp
while(rdr.Read())
{
  // Code temporarily omitted.
}
```

A `MySqlDataReader` object has a built-in `Read()` method that reads results from the database one at a time and then advances to the next record. This method returns a boolean. If the method advances to the next object in the database, it returns `true`. If it reaches the end of the records that our query has returned, it returns `false` and our `while` loop ends.

In the `while` loop, we'll take each individual record from our database and translate that record into an `Item` object our application understands:

```csharp
while(rdr.Read())
{
  int itemId = rdr.GetInt32(0);
  string itemDescription = rdr.GetString(1);
  Item newItem = new Item(itemDescription, itemId);
  allItems.Add(newItem);
}
```

Our `MySQLDataReader` `rdr` object has many [methods](https://mysqlconnector.net/api/mysqlconnector/mysqldatareadertype/) available to it. Many of these methods are specifically for extracting data from a record. `GetInt32()` returns a 32 bit integer. `GetString()` is self-explanatory.

We also pass in a number value as an argument to both methods. This is because rows from the database are returned by the `rdr.Read()` method as indexed arrays. Let's use the following table as an example to demonstrate:

<pre>
 id | description
 ---+---------
 1  | Mow the lawn
 2  | Walk the dog
 3  | Make dinner
</pre>

When the reader object returns the first entry in this example database, it'll look like this:

```cs
{ 1, "Mow the lawn" };
```

The second object will look like this:

```cs
{ 2, "Walk the dog" };
```

The `id` column is at index `0` while the `description` column is at index `1`. If we had a third column, it'd be at index `2`.

In our `while` loop above, we define our `itemId` as `rdr.GetInt32(0);` because this will return the integer at the 0th index of the array returned by the reader. Similarly, we define `itemDescription` as `rdr.GetString(1)` because our item description will be at the 1st index of the array returned by the reader.

Once we've collected the data, we can use it to instantiate new `Item` objects and add them to our `allItems` list. Now each row in our database is an `Item` stored in a `List` that our application understands.

### Closing the Connection

Communicating with a database is a resource-intensive process. For this reason, it's important to close our database connection when we're done. This allows the database to reallocate resources to respond to requests from other users. We can use a built-in `Close()` method to do this.

```csharp
conn.Close();

if (conn != null)
{
  conn.Dispose();
}
```

The `Close()` method is self-explanatory. We also include a conditional because on rare occasions, our database connection will fail to close properly. It's considered best practice to confirm it's fully closed. That's why we put the `Dispose()` method inside a conditional. This method will only run if `conn` is not `null`.

## Overloading the `Item` Constructor
---

Now that we've added a `GetAll()` method, we'll need to make one more change to our code so our application can properly interact with our new method. Our `GetAll()` method includes the following line:

```csharp
Item newItem = new Item(itemDescription, itemId);
```

Currently, our constructor only accepts `description` as an argument. Whenever we create a new object in our application, it should only have a `description`. However, when we _retrieve_ a record from the database, we want its `id`, too. We can add an overloaded constructor so our application can instantiate an `Item` either way:

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
public Item(string description, int id)
{
    Description = description;
    Id = id;
}
```

## Summary
---

We've covered a lot of ground here. In the process of rewriting our `GetAll()` method, we needed to open a database connection, create a special object to hold our SQL query, and then create another special object to actually read through the results. Finally, we had to translate our database rows into C# objects and close the connection. It's a lot of work for a simple query. Entity Framework Core will make our lives much easier later this section, but for now, it's important to solidify our understanding of how our application actually queries a database.

At this point, our To Do List app has the code necessary to query and return database-backed information. However, we have some more work to do before our database functionality is fully implemented. In the next lesson, we'll add functionality for testing our new database-backed methods.
