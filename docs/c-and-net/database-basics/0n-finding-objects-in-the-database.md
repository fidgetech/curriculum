---
title: "\U0001F4D3 3.3.0.14 Finding Objects in the Database"
id: 33014-finding-objects-in-the-database
slug: 33014-finding-objects-in-the-database
hide_table_of_contents: true
sidebar_position: 14
day: weekend
type: lesson
url: https://github.com/fidgetech/c-and-net/blob/main/0n_finding_objects_in_the_database.md
---

Now that we can successfully save `Item`s to the database, we're ready to update our `Find()` method to so that we can retrieve specific `Item`s by their ID.

## Writing a Test for `Find()`
---

Our current `Find()` method just returns a placeholder item so we won't have compiler errors. We also have a commented-out test for our `Find()` method as well. We only have to make a few small changes to our test to get it working again. Specifically, our test needs to `Save()` `Item`s now. Here's our updated test:

<div class="filename">ToDoList.Tests/ModelTests/ItemTests.cs</div>

```csharp
    [TestMethod]
    public void Find_ReturnsCorrectItemFromDatabase_Item()
    {
      //Arrange
      Item newItem = new Item("Mow the lawn");
      newItem.Save();
      Item newItem2 = new Item("Wash dishes");
      newItem2.Save();

      //Act
      Item foundItem = Item.Find(newItem.Id);
      //Assert
      Assert.AreEqual(newItem, foundItem);
    }
```

We simply `Save()` two items and then `Find()` one of them by its `Id`. The test will fail because our `Find()` method currently returns a placeholder item.

## Writing a `Find()` Method
---

Let's add code to `Find()` to make this test pass. Just as we've done with our `GetAll()` and `Save()` methods, we'll start with the whole method. We've added comments to the method to emphasize that its parts are very similar to the database-backed methods we've created already.

```csharp
public static Item Find(int id)
{
  // We open a connection.
  MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);
  conn.Open();

  // We create MySqlCommand object and add a query to its CommandText property. 
  // We always need to do this to make a SQL query.
  MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;
  cmd.CommandText = "SELECT * FROM items WHERE id = @ThisId;";

  // We have to use parameter placeholders @ThisId and a `MySqlParameter` object to 
  // prevent SQL injection attacks. 
  // This is only necessary when we are passing parameters into a query. 
  // We also did this with our Save() method.
  MySqlParameter param = new MySqlParameter();
  param.ParameterName = "@ThisId";
  param.Value = id;
  cmd.Parameters.Add(param);

  // We use the ExecuteReader() method because our query will be returning results and 
  // we need this method to read these results. 
  // This is in contrast to the ExecuteNonQuery() method, which 
  // we use for SQL commands that don't return results like our Save() method.
  MySqlDataReader rdr = cmd.ExecuteReader() as MySqlDataReader;
  int itemId = 0;
  string itemDescription = "";
  while (rdr.Read())
  {
    itemId = rdr.GetInt32(0);
    itemDescription = rdr.GetString(1);
  }
  Item foundItem = new Item(itemDescription, itemId);

  // We close the connection.
  conn.Close();
  if (conn != null)
  {
    conn.Dispose();
  }
  return foundItem;
}
```

* Our method takes a parameter `id` of type `int`. This is the ID of the record we want to retrieve from the database. Note that it's a static method called on the class itself.

* We open a connection and create a `MySqlCommand` object. We've covered this with our other database methods.

* We set the `commandText` equal to the query `"SELECT * FROM items WHERE id = @ThisId;"`. Just as we did with our `Save()` method, we use a parameter placeholder `@ThisId`. Then we instantiate a new `MySqlParameter` object, assign `@ThisId` as it's `ParameterName` and `id` as it's `Value`.

* Note that we do the following: `int itemId = 0; string itemDescription = "";`

This is because our `Find()` method may not return a result. For instance, if we were to try `Item.find(23453)`, our application would break if we didn't include the above default values.

* We convert the found record into a C# object and then close the connection.

We've gone through this method fairly quickly because most of its parts are already familiar from our `GetAll()` and `Save()` methods.

At this point we can uncomment all of our `Item` tests and they should pass, and our application will now work again in the browser. We can now have all the code we need for the CR part of CRUD functionality. We can create new `Item`s, view a list of `Item`s, or use our `Find()` method to help us view a single `Item`'s detail. 

We'll save update and delete functionality for working with Entity Framework Core, but you are welcome to explore and try adding this functionality into your own applications before then.

### Repository Reference

Follow the link below to view the completed To Do List project that uses MySqlConnector and custom database methods to communicate with a MySQL database.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for To Do List with MySqlConnector](https://github.com/epicodus-lessons/section-3-to-do-list-with-mysqlconnector-csharp-net6)**