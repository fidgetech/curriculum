---
title: "📓 3.3.0.12 Overriding Equals and GetHashCode"
id: 33012-overriding-equals-and-gethashcode
hide_table_of_contents: true
day: weekend
---

Before we add functionality to our To Do List app that will save new `Item`s to our database, we need to consider a specific problem that comes up when comparing two objects.

We'll start with a new test that demonstrates the problem.

<div class="filename">ToDoList.Tests/ModelTests/ItemTests.cs</div>

```csharp
[TestMethod]
public void Equals_ReturnsTrueIfDescriptionsAreTheSame_Item()
{
  // Arrange, Act
  Item firstItem = new Item("Mow the lawn");
  Item secondItem = new Item("Mow the lawn");

  // Assert
  Assert.AreEqual(firstItem, secondItem);
}
```

In the eyes of a user, `firstItem` and `secondItem` are exactly the same. Both are `Item`s for mowing the lawn. However, if we run our tests, we'll get the following error:

<pre>
<code style="color:red">
Error Message:
 Assert.AreEqual failed. Expected:&lt;ToDoList.Models.Item&gt;. Actual:&lt;ToDoList.Models.Item&gt;.
</code>
</pre>

From the perspective of our application, `firstItem` and `secondItem` are two different objects that happen to have the same `Description` property. This is because objects created from C# classes are saved as references to actual data stored in memory. This means that when we create `firstItem`, this variable stores a reference to data saved in memory, but not the actual data. The same is true for `secondItem` as well. So when we compare `firstItem` with `secondItem`, we are actually comparing their two references, which are _not_ the same. 

All this talk about "references" and "actual data" actually has formal terminology in C#: data types are considered a **reference type** or a **value type**, and each category describes how the data is saved in memory. Let's learn more about these two categories.

When we create classes or interfaces, we create a reference type. When a variable stores a **reference type**, it means that it only stores a reference to the object in memory, and not the actual object data. Let's look at an example:

```cs
[TestMethod]
public void ReferenceTypes_ReturnsTrueBecauseBothItemsAreSameReference_bool()
{
  // Arrange, Act
  Item firstItem = new Item("Mow the lawn");
  Item copyOfFirstItem = firstItem;
  copyOfFirstItem.Description = "Learn about C#";

  // Assert
  Assert.AreEqual(firstItem.Description, copyOfFirstItem.Description);
}
```

With this test, we demonstrate how two `Item` objects both point to the same reference in memory. If we run this test in our To Do List app, the test will pass.

When we create a new `Item` called `copyOfFristItem` set to the `firstItem`, we might expect that we're creating a brand new and separate object (a new reference in memory), but in fact we're just setting a new variable to the same object reference that `firstItem` points to. We verify this when we change the value of the `copyOfFirstItem.Description` and compare it to `firstItem.Description`: the values are the same! 

Note that delegates and records are also reference types in C#, though we haven't worked with those data types before. To learn more about reference types, visit the [MS Docs on Reference Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types).

On the other hand, when a variable stores a **value type**, it means that it stores the actual data, not a reference to it. This means that when we compare value types, they are considered the same if they store the same data. This is unlike with reference types like we saw with the first test comparing two `Item` objects with the same data. Let's look at a test that demonstrates this:

```csharp
[TestMethod]
public void ValueTypes_ReturnsTrueBecauseValuesAreTheSame_Bool()
{
  // Arrange, Act
  int test1 = 1;
  int test2 = 1;

  // Assert
  Assert.AreEqual(test1, test2);
}
```

The above test will pass, because as value types, `test1` and `test2` store the actual data (not a reference to data stored elsewhere) and C# can compare the values and determine they are the same. This is unlike the very first test we wrote that fails to to declare equality between two `Item`s that contain the exact same data. Examples of value types include `bool`, `char`, and `int`. To learn more about value types, visit the [MS Docs on value types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types).

Note that strings are a reference type, and _not_ a value type. However, strings are given extra functionality so that they can be compared just like value types. To learn more, visit [the MS Docs on `string`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-string-type).

## Overriding Built-In Methods
---

From the perspective of our tests, we want two `Item` objects to be seen as the same. Our test should be able to instantiate an `Item` and then expect that an `Item` returned from our database is equal to the first `Item` if they have the same properties. However, when a record is retrieved from the database, C# has to convert it into a _new_ object. That means it will always be a different object from the first `Item`.

So, we need to update our application so our tests know when we want two different objects to be considered the same.

### Overriding `Equals()`

We can fix this issue by overriding a built-in method that belongs to all objects created via the `class` declaration. Note that best practice dictates that this method be below the properties and constructors but above the other methods in our file:

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
        bool descriptionEquality = (this.Description == newItem.Description);
        return descriptionEquality;
      }
    }

...
```

Let's go over this method line by line.

* The method `Equals()` is built into C#. It's included in a set of default behaviors all objects have. If we want to override it, we do so with the `override` keyword, which we use here.

* Because `Equals()` accepts _any_ type of object, we must declare its argument as the generic `System.Object` type. That's why our parameter specifies that `otherItem` is a `System.Object`, not an `Item`.

* Next, we have a conditional that checks if the argument passed into the parameter `otherItem` is in fact an `Item` object. If it isn't, our method will return `false`. At the very least, we know that we want both objects to be of the same type.

* Next, we use **type casting** to ensure that `otherItem` is in fact an `Item`. With type casting, we turn `System.Object otherItem` into `Item otherItem`. 
  * This may seem like a redundant piece of code but our method will break without it. If we omit the type casting `(Item)` in the previous line, we'll get the following error when we try to run our tests: `'object' does not contain a definition for 'Description' and no accessible extension method 'Description' accepting a first argument of type 'object' could be found`.
  * To learn about type casting, [check out this lesson](https://old.learnhowtoprogram.com/fidgetech-3-c-and-net/3-0-lessons-6-18-data-types-and-variables/3-0-0-18-type-casting).

* We can now compare the `Description` of `this` (the `Item` our method will be called on) to the `Description` of the `newItem`. If they have the same value for `Description`, our application should consider both `Item`s to be exactly the same. 

We're done with overriding `Equals()` for the moment. In the next lesson, we'll update this method to include a comparison of the `Item`'s `Id` property.

### Overriding `GetHashCode()`

Our new test will now pass. However, there is now a new warning: `'Item' overrides Object.Equals(object o) but does not override Object.GetHashCode()`. This warning is letting us know that we also need to override the `GetHashCode()` method if we want the `Equals()` method to also evaluate dictionary or hash table entries as the same. 

Dictionaries and [hash tables](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-6.0) are hash-based collections, which give each entry a **hash code**, which is a unique identifier. The point of each entry having a unique hash code is to make searching and finding an entry fast and efficient. Also, when we're comparing two objects and they both have the same hash code, they are considered to be the same object.

We can get the hash code of an entry using the `GetHashCode()` method, which uses a hashing function to get the hash code (an integer). A **hashing function** takes an input, changes it, and returns a unique output. For the same input, the hash function always returns the same output. Why? Well, every time we search for an entry in a dictionary or hash table, we want to always get the same element returned to us.

When we override the `GetHashCode()` method, we're telling the C# compiler how the hash code should be determined for the object that it is called on. There are many ways we can do this, and we'll pick the simplest route. Add the following code to `ToDoList/Item.cs`, below the `Equals()` method.

<div class="filename">ToDoList/Models/Item.cs</div>

```csharp
...
    public override bool Equals(System.Object otherItem)
    {
      ...
    }

    public override int GetHashCode()
    {
        return Id.GetHashCode();
    }
...
```

With the above code, we're telling the compiler to generate a hash code for an `Item` based on the value of the `Item`'s `Id` property. Since the `Id` property is always unique and never will change, this is a good value to use to generate a hash code. Note that we could use any object or `Item` property here. The thing we need to be careful about is choosing a value like `Description` that may not be unique across objects, which could generate "collisions" where multiple entries have the same hash code.

With the above code in place, we'll resolve the terminal warning. However, it's important to note that we won't be using the overridden `GetHashCode()` method. That's because we will not use custom objects (like `Item`) as the key of a dictionary entry, which is when the overridden `GetHashCode()` method is required.

Now that we have our two new methods in place, we're ready to write and test a method for saving `Item`s to the database. To learn more about the topics covered in this lesson, visit the following MS Documentation:

* To read more about best practices with overriding `Equals()`, check out this [Microsoft documentation](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/how-to-define-value-equality-for-a-type).
* To learn more about overriding `GetHashCode()`, including more examples and remarks on use cases, visit the [MS Documentation on `GetHashCode()`](https://learn.microsoft.com/en-us/dotnet/api/system.object.gethashcode?view=net-6.0#remarks).
