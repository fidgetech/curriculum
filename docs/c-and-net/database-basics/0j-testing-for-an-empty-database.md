---
title: "\U0001F4D3 3.3.0.11 Testing for an Empty Database"
id: 33011-testing-for-an-empty-database
slug: 33011-testing-for-an-empty-database
hide_table_of_contents: true
sidebar_position: 11
day: weekend
type: lesson
url: https://github.com/fidgetech/c-and-net/blob/main/0j_testing_for_an_empty_database.md
---

Now that we have both `ClearAll()` and `GetAll()` methods that interact with our database, let's begin writing tests for our methods. As always, we begin by testing the simplest possible behavior. In this case, we'll start with a test to make sure the database is empty.

## Refactoring to Begin Testing Database Functionality
---

Before we get started, we'll need to comment out all of our tests. Because we are in the process of changing our application's functionality, we will have to go through tests one by one to get them passing again. We won't go through the "Red, Green, Refactor" process because we've already written our method. Make sure that you don't comment out the code for `Dispose()`, the `Configuration` property, or `ItemTests()` in the process.

## Testing Database-Backed Functionality
---

Let's begin testing our new database-backed functionality. We'll write a test confirming that we begin with an empty database. As discussed at the beginning of this lesson, this is the simplest possible behavior our database will exhibit.

We already have a commented out test that confirms `GetAll()` returns an empty list. We can simply update its name and reuse the test:

<div class="filename">ToDoList.Tests/ModelTests/ItemsTest.cs</div>

```csharp
...

[TestMethod]
public void GetAll_ReturnsEmptyListFromDatabase_ItemList()
{
  //Arrange
  List<Item> newList = new List<Item> { };

  //Act
  List<Item> result = Item.GetAll();

  //Assert
  CollectionAssert.AreEqual(newList, result);
}

...
```

If we run our test, it will pass. This is because all of our code to make a database connection isn't actually adding anything to `allItems`. We could comment out every line other than the first line `List<Item> allItems = new List<Item> { };` and the last line of `return allItems;` of the `GetAll()` method and it would still pass. Either way, our method is returning an empty list. However, it's still important that we have this test in place because it's possible that other tests and methods we add will break this test. In fact, this test _will_ break if we don't make sure that we clear our database between each run, so it will provide assurance that our database is correctly clearing between tests.