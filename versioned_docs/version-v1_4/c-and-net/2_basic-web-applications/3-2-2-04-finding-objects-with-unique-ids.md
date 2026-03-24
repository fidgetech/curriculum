---
title: "📓 5.2.2.4 Finding Objects with Unique IDs"
day: tuesday
id: 5-2-2-4-finding-objects-with-unique-ids
hide_table_of_contents: true
---

We'll eventually want users to click an individual `Item` in our To Do List to view its details on a special detail page. To do this, our application needs to differentiate between `Item`s. Otherwise, the server won't know _which_ `Item`'s details to display. That means we need to add a unique ID to our `Item` model. Then we can use routing to differentiate between `Item`s like this: `items/1` and `items/2`.

## Assigning Unique IDs
---

### Testing

Because this requires updating our `Item.cs` model logic, we'll need to add a test.

First, however, let's run our previous tests by navigating to the test directory and running `dotnet test`.

All 5 should pass, but if there are errors, try running `dotnet restore` in the test directory.

Let's add our new test:

<div class="filename">ToDoList.Tests/ModelTests/ItemTests.cs</div>

```csharp
...

  [TestMethod]
  public void GetId_ItemsInstantiateWithAnIdAndGetterReturns_Int()
  {
    //Arrange
    string description = "Walk the dog.";
    Item newItem = new Item(description);

    //Act
    int result = newItem.Id;

    //Assert
    Assert.AreEqual(1, result);
  }

...
```

Our new test:

* Arranges the necessary materials by creating a sample `Item`;

* Calls a new `Id` property from the `Item`;

* Asserts that `Id` returns the `int` `1`.

### Implementing Unique IDs

Because our new test references an `Id` property that doesn't exist yet, we won't be able to run our tests. In order to get around this and see our test fail, however, let's temporarily change the 'Act' portion of our test to this:

```csharp
int result = 0;
```

Now we should be able to see our test fail properly.

Let's change the value of the `result` variable in the test back to `newItem.Id`. 

```csharp
int result = newItem.Id;
```

Let's also add our logic to make this test pass. We'll begin by updating our `Item` class to contain a new `Id` property:

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
...
public class Item
{
  public string Description { get; set; }
  public int Id { get; }
  private static List<Item> _instances = new List<Item> {};

...
```

Then we'll set this property in the constructor:

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
...

    public Item(string description)
    {
      Description = description;
      _instances.Add(this);
      Id = _instances.Count;
    }

    ...
  ...
...
```

This assigns an `Item`'s `Id` to the current number of `Item`s in the static `_instances` list. After the first `Item` is added, `_instances.Count` will be `1`. After the second `Item`, it'll be `2`, and so on. Using `_instances.Count` to assign `Id`  ensures each is always unique. Note that we do this _after_ adding `Item`s to the `_instances` list in order to get an updated `Count` for `Id`.

One more thing: Remember that when we are working inside an object, we can use the keyword `this` to reference that object. In the code above, we use `this` to reference the `Item` being actively constructed by the constructor.

We don't add a set method, because this property will be set in the constructor automatically. In fact, we specifically _don't_ ever want to manually edit it. That would increase the risk of IDs not being unique.

This is called creating a **readonly** property. In other words, it's a property that can be read but not overwritten.

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
...

    public int Id { get; }

...
```

If we run our tests again, they'll all pass.

## Finding Items By ID
---

Next, we'll need to locate specific `Item`s based on their new unique `Id`s. This will help our server populate our eventual `Item` detail pages with the correct object's information.

### Testing

Let's write a test for this functionality:

<div class="filename">ToDoList.Tests/ModelTests/ItemTests.cs</div>

```csharp
...

  [TestMethod]
  public void Find_ReturnsCorrectItem_Item()
  {
    //Arrange
    string description01 = "Walk the dog";
    string description02 = "Wash the dishes";
    Item newItem1 = new Item(description01);
    Item newItem2 = new Item(description02);

    //Act
    Item result = Item.Find(2);

    //Assert
    Assert.AreEqual(newItem2, result);
  }

...
```

* This test arranges multiple sample `Item` objects.

* It then calls a static `Find()` method, passing in the int `2` as an argument because this is the anticipated `Id` property of the second `Item`.

* We then assert that `Find()` will return `newItem2` when provided the argument `2`.

### Properly Failing the Test

Similar to when we added our last test, we won't be able to compile and run our test suite because we are referencing a method that doesn't yet exist. In order to properly fail this test, we'll have to set the value of `result` to a different `Item`. Normally, we could just set the value of `result` to `0`, but this time, because `result` is of type `Item`, we'll set it to a new `Item` we know will give us a proper failure.

Let's do that now:

```csharp
...
  //Act
  Item result = new Item("Incorrect test item");
...
```

If we run `dotnet test` we can now see that our test is failing as expected. Let's now reset the value of `result`.

```csharp
...
  //Act
  Item result = Item.Find(2);
...
```

### Implementing `Find()`

Let's add logic for our new static `Find()` method:

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
...

    public static Item Find(int searchId)
    {
      return _instances[searchId-1];
    }

...
```

We create a `static` method to locate an `Item` using its `Id`. It's static because it must sift through _all_ `Item`s to find the one we're seeking. And because it's static, we must call it on the entire `Item` class, as seen in the test above.  

Also, notice we subtract `1` from the provided `searchId` because indexes in the `_instances` array begin at `0`, whereas our `Id` properties will begin at `1`.

The entire updated `Item.cs` model file looks like this:

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
using System.Collections.Generic;

namespace ToDoList.Models
{
    public class Item
    {
        public string Description { get; set; }
        public int Id { get; }
        private static List<Item> _instances = new List<Item> { };

        public Item(string description)
        {
            Description = description;
            _instances.Add(this);
            Id = _instances.Count;
        }

        public static List<Item> GetAll()
        {
            return _instances;
        }

        public static void ClearAll()
        {
            _instances.Clear();
        }

        public static Item Find(int searchId)
        {
            return _instances[searchId - 1];
        }
    }
}
```

Try running tests and verify that they pass. We can now automatically assign each `Item` a guaranteed unique `Id` that can be used to locate specific objects. In the next few lessons, we'll add functionality for `Item` detail pages to our app.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for To Do List: 5\_deleting\_and\_finding\_objects](https://github.com/epicodus-lessons/section-2-to-do-list-csharp-net6/tree/5_deleting_and_finding_objects)**
