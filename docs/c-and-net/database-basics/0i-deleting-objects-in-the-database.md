---
title: "\U0001F4D3 3.3.0.10 Deleting Objects in the Database"
id: 33010-deleting-objects-in-the-database
slug: 33010-deleting-objects-in-the-database
hide_table_of_contents: true
sidebar_position: 10
day: weekend
type: lesson
url: https://github.com/fidgetech/c-and-net/blob/main/0i_deleting_objects_in_the_database.md
---

In the last lesson, we updated our teardown method for `Item` tests so that it utilizes our test database. However, our `ClearAll()` method doesn't have logic to clear `Item`s from the database yet. In this lesson, we'll discuss how to write a method that deletes all table entries in a database. Once this is done, our teardown test method will be functional, allowing us to develop further database-driven functionality with the "Red, Green, Refactor" TDD workflow.

## Deleting All Objects from the Database
---

Let's update our existing `ClearAll()` method to interact with our database. If you've followed lessons exactly, `ClearAll()` should currently be empty. Let's add code to create and open a new database connection.

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
...

   public static void ClearAll()
   {
     MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);
     conn.Open();
   }

...
```

We call `new MySqlConnection(DBConfiguration.ConnectionString);` to create our `conn` object and then call `Open()` on it to open the connection. Remember that `DBConfiguration.ConnectionString` is originally defined in `DatabaseConfig.cs`.

Next, we'll create a new `MySqlCommand` object. It will include a SQL command to delete all rows from our `items` database table:

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
...

  public static void ClearAll()
  {
      MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);
      conn.Open();

      MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;
      cmd.CommandText = "DELETE FROM items;";
  }

...
```

We define the `CommandText` property of `cmd` as the SQL statement `"DELETE FROM items;"`, which will clear the entire `items` table in our database.

In `GetAll()` we used a reader object to launch our SQL query and return data. However, we don't need to read anything when we delete something. In fact, we don't need anything returned to us at all. We just want the specified information removed from the database.

We'll execute this command using a new method from the MySqlConnector library:

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
...

   public static void ClearAll()
   {
     MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);
     conn.Open();

     MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;
     cmd.CommandText = "DELETE FROM items;";
     cmd.ExecuteNonQuery();
  }

...
```

SQL statements that modify data instead of querying and returning data are executed with the `ExecuteNonQuery()` method, as seen here. Ultimately, there are two ways we interact with databases: we can either modify or retrieve data.

Modifying data can include adding, deleting, or updating entries. On the other hand, retrieving data includes locating and returning entries. When we save data, we're not searching for specific data. Instead, we're modifying the database by adding a new entry.

When we execute commands that modify the database, we use the `ExecuteNonQuery()` method.  Commands that retrieve data use different methods like `ExecuteReader()`, which we used in our `GetAll()` method.

Now we just need to close our database connection when we're done:

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
...

   public static void ClearAll()
   {
     MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);
     conn.Open();

     MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;
     cmd.CommandText = "DELETE FROM items;";
     cmd.ExecuteNonQuery();

     conn.Close();
     if (conn != null)
     {
      conn.Dispose();
     }
  }

...
```

Here we simply call `Close()` to close the connection. Our conditional confirms it's been successfully closed and destroys it if it's not.

Now that we've created a `ClearAll()` method to empty our test database between tests, we're ready to write tests for our database-backed methods.