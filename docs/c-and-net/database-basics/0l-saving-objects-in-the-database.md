---
title: "📓 3.3.0.13 Saving Objects in the Database"
id: 33013-saving-objects-in-the-database
hide_table_of_contents: true
day: weekend
---

In the last lesson, we wrote and tested a method to override `Equals()`. Now we're ready to write a method for saving `Item`s to the database. 

## Saving Objects in the Database
---

### Testing the Save() Method

Let's start by adding an empty `Save()` method to our `Item` class. It will return type `void` because adding a database entry doesn't need to return a value.

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
...

  public void Save()
  {
  }

...
```

Now let's write a test:

<div class="filename">ToDoList.Tests/ModelTests/ItemTests.cs</div>

```csharp
...

  [TestMethod]
  public void Save_SavesToDatabase_ItemList()
  {
    //Arrange
    Item testItem = new Item("Mow the lawn");

    //Act
    testItem.Save();
    List<Item> result = Item.GetAll();
    List<Item> testList = new List<Item>{testItem};

    //Assert
    CollectionAssert.AreEqual(testList, result);
  }

```

Our test is straightforward. We should be able to instantiate a new `Item` and save it to the database. Then we should be able to use our `GetAll()` method to verify that it's been saved. Note that we are asserting that our `testList` and our `result` are the same. We are able to do this because we overrode the `Equals()` method.

Run this test and verify that it fails.

### Creating New Database Entries

Now let's add code to `Save()` to interact with our database.

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
public void Save()
{
  MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);
  conn.Open();
  
  MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;

  // Begin new code

  cmd.CommandText = "INSERT INTO items (description) VALUES (@ItemDescription);";
  MySqlParameter param = new MySqlParameter();
  param.ParameterName = "@ItemDescription";
  param.Value = this.Description;
  cmd.Parameters.Add(param);    
  cmd.ExecuteNonQuery();
  // Id = cmd.LastInsertedId;

  // End new code

  conn.Close();
  if (conn != null)
  {
    conn.Dispose();
  }
}

```

The beginning and end of this method should look familiar. We start by opening a connection and instantiating a `MySqlCommand`. We end by closing our connection.

Let's take a closer look at the code in the new code section above. This starts with `// Begin new code` and ends with `// End new code`.

#### Parameter Placeholders

```csharp
cmd.CommandText = "INSERT INTO items (description) VALUES (@ItemDescription);";
```

We pass in an `INSERT` SQL command into `cmd.CommandText`. There's a new wrinkle here: we pass in a **parameter placeholder** called `@ItemDescription` into the SQL statement. We want to use parameter placeholders whenever we are passing along data that a user enters. Information stored to a parameter is treated as field data and not part of the SQL statement, which helps to protect our application from a malicious attack called [SQL injection](http://en.wikipedia.org/wiki/SQL_injection), which is illustrated in [this comic](https://xkcd.com/327/).

The placeholder `@ItemDescription` will be replaced with actual data from the user when the `MySqlCommand` executes. Parameter placeholders need the `@` symbol prefixing the name. You can read more about how parameters work in MySQL [here](https://dev.mysql.com/doc/connector-net/en/connector-net-tutorials-parameters.html).

#### Passing a `MySqlParameter` Object Into a `SqlCommand`

```csharp
MySqlParameter param = new MySqlParameter();
param.ParameterName = "@ItemDescription";
param.Value = this.Description;
cmd.Parameters.Add(param);
```

* We create a `MySqlParameter` object for each parameter required in our `MySqlCommand`. The `ParameterName` must match the parameter in the command string. The `Value` is what will replace the parameter in the command string when it is executed.

* We define the `ParameterName` property of `param` as `@ItemDescription`, matching the parameter used in our SQL command `"INSERT INTO items (description) VALUES (@ItemDescription);"` exactly.

* We define the `Value` property of `param` as `this.Description`. This refers to the auto-implemented `Description` property of the `Item` we're saving.

* We pass the `param` into the `MySqlCommand`'s `Parameters` property using `Add()`. If we had more parameters to add, we would need to `Add()` each one.

This may seem confusing, but what we're essentially doing here is using an object to say the `@ItemDescription` in our `cmd.CommandText` equals `this.Description`. There are simpler ways to do this, but for now we're doing it the long way as a demonstration. These four lines could all be replaced by this one line: 

```csharp
cmd.Parameters.AddWithValue("@ItemDescription", this.Description);
```

#### Executing a Non-Query Command

```csharp
cmd.ExecuteNonQuery();
```

Finally, we call `ExecuteNonQuery()` on our `cmd` object to execute the SQL command.

We only need the code up to this line in order to successfully save a new row in the database. In fact, we can run our tests and they will all pass. However, there's one more important thing we need to do so our `Save()` method is fully integrated into our application.

### Returning an `id` from the Database

The following line is currently commented out in our method:

```csharp
Id = cmd.LastInsertedId;
```

Our method will correctly save `Item`s without the line above. When an `Item` is saved, our database will automatically assign an `id` to it. However, there's a big problem. Our application doesn't know about this `id` value unless we add the line of code above. The line is very simple: it states that we need to set the `Item`'s `Id` property equal to the value of the `id` of the new row in our database. Fortunately, our `MySqlCommand` object has a `LastInsertedId` property which we can assign to the `Item`'s `Id` property. This ensures that the ID property for an item is the same both in our application and our database.

If we uncomment the line of code above and run our tests again, the compiler will throw an error:

```bash
Property or indexer 'Item.Id' cannot be assigned to -- it is read only
```

Fortunately, this is a very clear error. Our `Id` property is currently only read-only. We need to add a setter to our auto-implemented property `Id`:

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
public int Id { get; set; }
```

We'll get a new error when we run our tests:

```bash
Cannot implicitly convert type 'long' to 'int'. An explicit conversion exists (are you missing a cast?)
```

This error occurs because the `MySqlCommand` property called `LastInsertedId` returns a value of the type `long`. A `long` element is a piece of 64-bit data while an `int` is 32-bit.

To fix this issue, we'll use an **explicit cast**, also known as an **explicit conversion**, to turn this `long` back into an `int`. Remember that explicitly casting or converting data will force this `long` into a new data type. We should only ever do this when we're sure we won't lose data in the process.

For the applications we make, the length of the id will not exceed the limits of a 32-bit `int`. Instead of refactoring our `Item` class to use `long` data types for our `Id` properties, we'll use explicit conversion to turn them into `int`s.

We just need to tweak this line of code in our method:

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
Id = (int) cmd.LastInsertedId;
```

We add `(int)`, which explicitly converts the `LastInsertedId` property into an `int`. Now our `Save()` method correctly saves an `Item` to the database and sets the `Item`'s `Id` property to the database-assigned id value.

### Overriding `Equals()` Method Update

Our tests will pass as expected but our method for overriding equality is no longer accurate. We should always ensure that all properties are equal when comparing two objects. In this case, that means we should also make sure that the objects we are comparing have the same `Id` property. Let's update the method now:

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
...

  public override bool Equals(System.Object otherItem)
  {
    if (!(otherItem is Item))
    {
      return false;
    }
    else
    {
      Item newItem = (Item) otherItem;
      bool idEquality = (this.Id == newItem.Id);
      bool descriptionEquality = (this.Description == newItem.Description);
      return (idEquality && descriptionEquality);
    }
  }

...
```

Whenever we add a new property to our application, we should make sure that we update our `Equals()` method accordingly.

### Updating Tests

We can also uncomment one of our previously commented-out tests and make a small update to get it to pass:

<div class="filename">ToDoList.Tests/ModelTests/ItemTests.cs</div>

```csharp

  [TestMethod]
  public void GetAll_ReturnsItems_ItemList()
  {
    //Arrange
    string description01 = "Walk the dog";
    string description02 = "Wash the dishes";
    Item newItem1 = new Item(description01);
    newItem1.Save(); // New code
    Item newItem2 = new Item(description02);
    newItem2.Save(); // New code
    List<Item> newList = new List<Item> { newItem1, newItem2 };

    //Act
    List<Item> result = Item.GetAll();

    //Assert
    CollectionAssert.AreEqual(newList, result);
  }

...
```

We just need to call `Save()` after creating each new `Item`.

### Updating Controller Logic

Next, let's make sure to call our new `Save()` method after we create new instances of `Item` objects in the `CategoriesController`:

<div class="filename">ToDoList/Controllers/CategoriesController.cs</div>

```csharp
...

[HttpPost("/categories/{categoryId}/items")]
public ActionResult Create(int categoryId, string itemDescription)
{
  Dictionary<string, object> model = new Dictionary<string, object>();
  Category foundCategory = Category.Find(categoryId);
  Item newItem = new Item(itemDescription);
  newItem.Save();    // New code
  foundCategory.AddItem(newItem);
  List<Item> categoryItems = foundCategory.Items;
  model.Add("items", categoryItems);
  model.Add("category", foundCategory);
  return View("Show", model);
}

...
```

In this lesson, we've added a `Save()` method that allows us to add `Item`s to the database. Our method returns a database-assigned id so that we can ensure that `Item`s in our application always correctly match the corresponding rows in the database. We had to use an explicit cast for this to work correctly. Finally, we updated our `Equals()` method and made some small changes to our application so it can fully utilize our new `Save()` method.
