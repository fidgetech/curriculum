---
title: "\U0001F4D3 3.2.3.3 Saving Objects Within Other Objects"
id: 3233-saving-objects-within-other-objects
slug: 3233-saving-objects-within-other-objects
hide_table_of_contents: true
sidebar_position: 35
day: wednesday
type: lesson
url: >-
  https://github.com/fidgetech/c-and-net/blob/main/3c_saving_objects_within_other_objects.md
---

In the last lesson, we set up our new `Category` class with basic functionality like getters, a constructor, unique IDs, and a static list to contain all `Category`s. Now we can focus on tying together our `Category` and `Item` classes. That way, a `Category` object with a `Name` like "School" can hold many different To Do List `Item`s with `Description`s like "Finish section 2 code review," "Email teacher about planned absence," and so on.

## Saving Objects Within Objects
---

When we created our `Category` class, we included an `Items` property. It's a `List` that is empty at first:

<div class="filename">ToDoList/Models/Category.cs</div>

```csharp
...

  public class Category
  {
    ...
    public List<Item> Items { get; set; }

    public Category(string categoryName)
    {
      ...
      Items = new List<Item>{};
    }

...
```

This is where `Item`s related to the parent `Category` will be stored. Let's add this functionality now. What's the next simplest behavior we can implement? First, let's make sure we can add an `Item` object into the `Items` property of a `Category` object. Here's the test:

<div class="filename">ToDoList.Tests/ModelTests/CategoryTests.cs</div>

```csharp
...

  [TestMethod]
  public void AddItem_AssociatesItemWithCategory_ItemList()
  {
    //Arrange
    string description = "Walk the dog.";
    Item newItem = new Item(description);
    List<Item> newList = new List<Item> { newItem };
    string name = "Work";
    Category newCategory = new Category(name);
    newCategory.AddItem(newItem);

    //Act
    List<Item> result = newCategory.Items;

    //Assert
    CollectionAssert.AreEqual(newList, result);
  }

...
```

* We create a new `Item` and add it to a `List`.

* Then we create a new `Category` and call the soon-to-be-created `AddItem` method upon it, passing in our sample `Item`.

* Next, we call `newCategory.Items`, to retrieve the `Item`s saved in our `Category`.

* Finally, we assert that `newCategory.Items` should return a `List` containing our single `Item`.

Now let's create the `AddItem()` method necessary to run and pass this test:

<div class="filename">ToDoList/Models/Category.cs</div>

```csharp
...

  public void AddItem(Item item)
  {
    Items.Add(item);
  }

...
```

`AddItem()` will accept an `Item` object and then use the built-in `List` `Add()` method to save that item into the `Items` property of a specific `Category`.

If we run our tests again, they should all pass. We're successfully saving objects of one type within objects of another type. In the next lesson, we'll integrate this new functionality into the MVC front end user interface of our application.