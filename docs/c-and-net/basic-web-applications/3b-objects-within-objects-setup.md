---
title: "\U0001F4D3 3.2.3.2 Objects Within Objects Setup"
id: 3232-objects-within-objects-setup
slug: 3232-objects-within-objects-setup
hide_table_of_contents: true
sidebar_position: 34
day: wednesday
type: lesson
url: https://github.com/fidgetech/c-and-net/blob/main/3b_objects_within_objects_setup.md
---

When we think about our own individual To Do Lists, there are usually different types of tasks on that list. For instance, there are to dos that we need to complete for Epicodus, like our C# homework. There are chores at home such as washing dishes or mowing the lawn. There are likely other miscellaneous tasks, too, such as writing someone a birthday card.

Let's update our To Do List application to allow users to organize their tasks by type. Over the next several lessons, we'll create a `Category` class. Each `Category` object will represent and store different categories of To Do List `Item`s such as "Work", "Home", and "School." This setup is commonly referred to as **objects within objects**.

## Creating a Parent Class
---

Let's start by creating a `Category` class in a new `ToDoList/Models/Category.cs` file. It will also need a corresponding test file at `ToDoList.Tests/ModelTests/CategoryTests.cs`. The updated project structure looks like this:

<pre>
ToDoList.Solution
├── ToDoList
│   ├── Controllers
│   │   ├── HomeController.cs
│   │   └── ItemsController.cs
│   ├── Models
│   │   ├── Category.cs
│   │   └── Item.cs
│   ├── Program.cs
│   ├── Properties
│   │   └── launchSettings.json
│   ├── ToDoList.csproj
│   └── Views
│       ├── Home
│       │   └── Index.cshtml
│       └── Items
│           ├── DeleteAll.cshtml
│           ├── Index.cshtml
│           ├── New.cshtml
│           └── Show.cshtml
└── ToDoList.Tests
    ├── ModelTests
    │   ├── CategoryTests.cs
    │   └── ItemTests.cs
    └── ToDoList.Tests.csproj
</pre>


In our new file, we'll do the following: declare a namespace and class, import the `System.Collections.Generic` library to use `List`s, and declare properties.

<div class="filename">ToDoList/Models/Category.cs</div>

```csharp
using System.Collections.Generic;

namespace ToDoList.Models
{
  public class Category
  {
    private static List<Category> _instances = new List<Category> {};
    public string Name { get; set; }
    public int Id { get; }
    public List<Item> Items { get; set; }
  }
}
```

* `_instances` will contain a static `List` of all `Category` objects, similar to the `_instances` property we're currently using in the `Item` class.

* `Name` will contain a name for the `Category` of items.

* `Id` will contain a unique ID number that will be assigned in the constructor, similar to the `Id` we implemented in the `Item` class.

* `Items` will contain a `List` of all `Item` objects that belong to that `Category`. For instance, if we had a `Category` with a `Name` of "chores," this list would contain a series of `Item` objects with `Description`s like "mop the floor", "scrub the shower", or "do the dishes."

* Note that we're using an auto-implemented property with `Items` and declaring the data type as a `List` of `Item`s.

It's time to add a constructor. We'll start with a test first. Let's configure our new test file with standard boilerplate code:

<div class="filename">ToDoList.Tests/ModelTests/CategoryTests.cs</div>

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ToDoList.Models;
using System.Collections.Generic;
using System;

namespace ToDoList.Tests
{
  [TestClass]
  public class CategoryTests
  {

  }
}
```

Next, we'll add a test to confirm our constructor can successfully create `Category` objects:

<div class="filename">ToDoList.Tests/ModelTests/CategoryTests.cs</div>

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ToDoList.Models;
using System.Collections.Generic;
using System;

namespace ToDoList.Tests
{
  [TestClass]
  public class CategoryTests
  {

    [TestMethod]
    public void CategoryConstructor_CreatesInstanceOfCategory_Category()
    {
      Category newCategory = new Category("test category");
      Assert.AreEqual(typeof(Category), newCategory.GetType());
    }

  }
}
```

Let's continue with our logic and add the constructor so that we run this test and see it pass:

<div class="filename">ToDoList/Models/Category.cs</div>

```csharp
using System.Collections.Generic;

namespace ToDoList.Models
{
  public class Category
  {
    private static List<Category> _instances = new List<Category> {};
    public string Name { get; set; }
    public int Id { get; }
    public List<Item> Items { get; set; }

    public Category(string categoryName)
    {
      Name = categoryName;
      _instances.Add(this);
      Id = _instances.Count;
      Items = new List<Item>{};
    }
  }
}
```

* The constructor only accepts an argument for `categoryName`, which is assigned to the `Name` property. All other properties are assigned automatically in the body of the constructor.

* We add each `Category` to the static `_instances` list in the constructor when it's created.

* We assign an `Id` number equal to the number of `Category`s in `_instances`.

* We create a new empty `List` to eventually contain `Item` objects that belong to this `Category`.

Next we'll add several methods and their corresponding tests. All of this should be review, so we'll go quickly.

First, let's test that a `Category` can successfully retrieve its name. We'll add a test and watch it pass thanks to our constructor code:

<div class="filename">ToDoList.Tests/ModelTests/CategoryTests.cs</div>

```csharp
...

  [TestMethod]
  public void GetName_ReturnsName_String()
  {
    //Arrange
    string name = "Test Category";
    Category newCategory = new Category(name);

    //Act
    string result = newCategory.Name;

    //Assert
    Assert.AreEqual(name, result);
  }

...
```

Next, we'll test that we can retrieve `Category` IDs:

<div class="filename">ToDoList.Tests/ModelTests/CategoryTests.cs</div>

```csharp
...

  [TestMethod]
  public void GetId_ReturnsCategoryId_Int()
  {
    //Arrange
    string name = "Test Category";
    Category newCategory = new Category(name);

    //Act
    int result = newCategory.Id;

    //Assert
    Assert.AreEqual(1, result);
  }

...
```

However, if we run our tests, they don't pass. We get a failure message:

<pre>
<code style="color:red">
Error Message:
 Assert.AreEqual failed. Expected:&lt;1&gt;. Actual:&lt;3&gt;.
Stack Trace:
   at ToDoList.Tests.CategoryTests.GetId_ReturnsCategoryId_Int() in ToDoList.Solution/ToDoList.Tests/ModelTests/CategoryTests.cs:line 44
</code>
</pre>

It says we expected to receive `1` but got an ID of `3` instead. This is because we assign each `Category` `Id` by running `Id = _instances.Count;` in the constructor. The third test is receiving a `Category` with an `Id` of `3` because sample `Category`s created in previous tests remain in the static `_instances` list.

We can fix this by disposing of all `Category`s between tests with a teardown method similar to the one we implemented in our `Triangle` tests in the last course section. We'll update the top of our `CategoryTests` class like this:

<div class="filename">ToDoList.Tests/ModelTests/CategoryTests.cs</div>

```csharp
...

namespace ToDoList.Tests
{
  [TestClass]
  public class CategoryTests : IDisposable
  {

    public void Dispose()
    {
      Category.ClearAll();
    }

    ...
  ...
...
```

Next, we'll define this `ClearAll()` method:

<div class="filename">ToDoList/Models/Category.cs</div>

```csharp
...

  public static void ClearAll()
  {
    _instances.Clear();
  }

...
```

After these changes, all tests should pass.

Moving on, we know we'll also need functionality to retrieve all `Category` objects to display in our app. Let's add that next. We'll start with a test:

<div class="filename">ToDoList.Tests/ModelTests/CategoryTests.cs</div>

```csharp
...

  [TestMethod]
  public void GetAll_ReturnsAllCategoryObjects_CategoryList()
  {
    //Arrange
    string name01 = "Work";
    string name02 = "School";
    Category newCategory1 = new Category(name01);
    Category newCategory2 = new Category(name02);
    List<Category> newList = new List<Category> { newCategory1, newCategory2 };

    //Act
    List<Category> result = Category.GetAll();

    //Assert
    CollectionAssert.AreEqual(newList, result);
  }

...
```

Verify that it fails (it should throw a compiler error, since the method is not defined yet) and then add the static method to make it pass:

<div class="filename">ToDoList/Models/Category.cs</div>

```csharp
...

    public static List<Category> GetAll()
    {
      return _instances;
    }

...
```

We also know we'll want a `Find()` method to locate and display specific `Category` objects. First, a test:

<div class="filename">ToDoList.Tests/ModelTests/CategoryTests.cs</div>

```csharp
...

  [TestMethod]
  public void Find_ReturnsCorrectCategory_Category()
  {
    //Arrange
    string name01 = "Work";
    string name02 = "School";
    Category newCategory1 = new Category(name01);
    Category newCategory2 = new Category(name02);

    //Act
    Category result = Category.Find(2);

    //Assert
    Assert.AreEqual(newCategory2, result);
  }

...
```

Here's the logic to pass this test:

<div class="filename">ToDoList/Models/Category.cs</div>

```csharp
...

    public static Category Find(int searchId)
    {
      return _instances[searchId-1];
    }

...
```

Notice this method is quite similar to our `Item` class `Find()` method. It accepts an ID as an argument and then locates the `Category` in the static `_instances` array that matches.

After following along with all steps in this lesson, all of our tests will pass and the new `Category` class will look like this:

<div class="filename">ToDoList/Models/Category.cs</div>

```csharp
using System.Collections.Generic;

namespace ToDoList.Models
{
  public class Category
  {
    private static List<Category> _instances = new List<Category> {};
    public string Name { get; set; }
    public int Id { get; }
    public List<Item> Items { get; set; }

    public Category(string categoryName)
    {
      Name = categoryName;
      _instances.Add(this);
      Id = _instances.Count;
      Items = new List<Item>{};
    }

    public static void ClearAll()
    {
      _instances.Clear();
    }

    public static List<Category> GetAll()
    {
      return _instances;
    }

    public static Category Find(int searchId)
    {
      return _instances[searchId-1];
    }
  }
}
```

The corresponding test file looks like this:

<div class="filename">ToDoList.Tests/ModelTests/CategoryTests.cs</div>

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ToDoList.Models;
using System.Collections.Generic;
using System;

namespace ToDoList.Tests
{
  [TestClass]
  public class CategoryTests : IDisposable
  {

    public void Dispose()
    {
      Category.ClearAll();
    }

    [TestMethod]
    public void CategoryConstructor_CreatesInstanceOfCategory_Category()
    {
      Category newCategory = new Category("test category");
      Assert.AreEqual(typeof(Category), newCategory.GetType());
    }

    [TestMethod]
    public void GetName_ReturnsName_String()
    {
      //Arrange
      string name = "Test Category";
      Category newCategory = new Category(name);

      //Act
      string result = newCategory.Name;

      //Assert
      Assert.AreEqual(name, result);
    }

    [TestMethod]
    public void GetId_ReturnsCategoryId_Int()
    {
      //Arrange
      string name = "Test Category";
      Category newCategory = new Category(name);

      //Act
      int result = newCategory.Id;

      //Assert
      Assert.AreEqual(1, result);
    }

    [TestMethod]
    public void GetAll_ReturnsAllCategoryObjects_CategoryList()
    {
      //Arrange
      string name01 = "Work";
      string name02 = "School";
      Category newCategory1 = new Category(name01);
      Category newCategory2 = new Category(name02);
      List<Category> newList = new List<Category> { newCategory1, newCategory2 };

      //Act
      List<Category> result = Category.GetAll();

      //Assert
      CollectionAssert.AreEqual(newList, result);
    }

    [TestMethod]
    public void Find_ReturnsCorrectCategory_Category()
    {
      //Arrange
      string name01 = "Work";
      string name02 = "School";
      Category newCategory1 = new Category(name01);
      Category newCategory2 = new Category(name02);

      //Act
      Category result = Category.Find(2);

      //Assert
      Assert.AreEqual(newCategory2, result);
    }
  }
}
```

We've set up our new `Category` class with basic functionality that's thoroughly tested. In the next lesson, we'll build it out further so we can save `Item` objects within `Category` objects.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for To Do List: 7\_objects\_within\_objects\_setup](https://github.com/epicodus-lessons/section-2-to-do-list-csharp-net6/tree/7_objects_within_objects_setup)**
