---
title: "📓 5.0.0.41 Part 2: Adding a Teardown Method and Completing the Tests for Static Class Members"
day: weekend
id: 5-0-0-41-part-2-adding-a-teardown-method-and-completing-the-tests-for-static-class-members
hide_table_of_contents: true
---

In this lesson we'll move past the roadblock we hit when testing the `GetAll()` getter method for the private static `_instances` field. As we'll see, the solution is quite simple! 

## Adding a Teardown Method
---

When we add a **teardown** method, we're adding a special method that will run between tests to perform cleanup. In this case, we'll use a teardown method to reset the `_instances` data between each test, ensuring any individual test's results aren't affected by earlier tests.

To set up a teardown method, we'll need to add the `IDisposable` keyword to our `TriangleTests` class declaration and include a new using directive for the `System` namespace, the namespace that `IDisposable` lives in. 

Here's the first update to `TriangleTests.cs`:

<div class="filename">ShapeTracker.Tests/ModelTests/TriangleTests.cs</div>


```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ShapeTracker.Models;
using System.Collections.Generic; 
using System; // new using directive!

namespace ShapeTracker.Tests
{
  [TestClass]
  public class TriangleTests : IDisposable
  {

    ... // tests omitted for brevity

  }
}
```

`IDisposable` is what is referred to as an interface. We'll cover interfaces later in this section, but for now, just be aware that the `:` syntax above **extends** functionality from `IDisposable` to our `TriangleTests` class.

Now that we've extended the `IDisposable` interface, we'll be able to create a special method called `Dispose()` that resets data between tests. Let's add this method now:

<div class="filename">ShapeTracker.Tests/ModelTests/TriangleTests.cs</div>

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ShapeTracker.Models;
using System.Collections.Generic; 
using System; 

namespace ShapeTracker.Tests
{
  [TestClass]
  public class TriangleTests : IDisposable
  {
    public void Dispose()
    {
      Triangle.ClearAll();
    }

    ... // tests omitted for brevity

  }
}
```

`Dispose()` is a special method. Any code we add to `Dispose` automatically runs after every test. In our case, we'll call the `ClearAll()` method on the `Triangle` class. However, `ClearAll()` _isn't_ a built-in method. We'll have to define this one ourselves. We were going to do this as part of our Test-Driven Development, but we'll have to skip ahead and do it now.

We'll add the new `ClearAll()` method at the end of the `Triangle` class:

<div class="filename">ShapeTracker.Solution/ShapeTracker/Models/Item.cs</div>

```csharp
using System.Collections.Generic;

namespace ShapeTracker.Models
{
  public class Triangle
  {
    ... // other code omitted for brevity

    public static void ClearAll()
    {
      _instances.Clear();
    }

  }
}
```

Our `ClearAll()` method is static because it affects all `Triangle`s in the class, not just one. We use the built-in `List<T>.Clear()` method to empty `_instances`.

### 5.  Run the automated test to confirm it passes. If it doesn't, revisit step 4.

We can now check our tests to see if the code we implemented in the last lesson for the `GetAll` test works as expected. 

Within the `ShapeTracker.Tests` directory, run `dotnet test`. 

<pre>
<code style="color:green">
Passed!  - Failed:     0, Passed:    12, Skipped:     0, Total:    12, Duration: 138 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

Woo-hoo! All our tests are passing now, which means both the `Dispose()` test method and `Triangle.GetAll()` method are both working correctly. Great! 

To wrap up the RGR workflow for the `GetAll()` method, let's complete the last four steps.

### Steps 6 and 7 

We can also confirm that all previous tests still pass and there are no opportunities for refactoring yet.

### Steps 8 and 9

We'll commit our passing code and move onto the next simplest behavior. 

So what's next? Even though we've already written the code for the `Triangle.ClearAll()` method, and successfully put it to use in the `Dispose()` method, we need to write a test for it.

## Testing the Private Static Field `_instances` through its Setter Method `ClearAll()`
---

### 1.  Identify the simplest possible behavior the program must exhibit.

To test the ability to change the value of `_instances`, we'll need to write a setter method. In this case, we already know the name of our setter method: `ClearAll()`.

### 2.  Write a coded test for this behavior.

Here's our new test:

<div class="filename">ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs</div>

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ShapeTracker.Models;

namespace ShapeTracker.Tests
{
  [TestClass]
  public class TriangleTests
  {

    ... // other tests omitted for brevity

    [TestMethod]
    public void ClearAll_DeletesAllTriangleInList_Void()
    {
      // Arrange
      Triangle tri1 = new Triangle(2, 2, 9);
      Triangle tri2 = new Triangle(21, 3, 9);
      Triangle tri3 = new Triangle(1, 3, 9);
      List<Triangle> expected = new List<Triangle> { };
      // Act
      Triangle.ClearAll();
      // Assert
      CollectionAssert.AreEqual(expected, Triangle.GetAll());
    }
  }
}
```

### Steps 3 and 4.  Before coding, confirm the test fails.

We can't complete steps 3 and 4 of the RGR workflow:

3. Before coding, confirm the test fails.
4. Implement the behavior with the least amount of code possible.

That's because we already have the code for `ClearAll()` in place within the `Triangle` class. This situation is unique, so it's okay that we can't complete these steps following the RGR workflow.

### 5.  Run the automated test to confirm it passes. If it doesn't, revisit step 4.

Let's run `dotnet test` within the `ShapeTracker.Tests` directory, and see if our tests are passing:

<pre>
<code style="color:green">
Passed!  - Failed:     0, Passed:     13, Skipped:     0, Total:     8, Duration: 91 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

Sweet!

### Steps 6 and 7 

We can also confirm that all previous tests still pass and there are no opportunities for refactoring yet.

### Steps 8 and 9

We'll commit our passing code and move onto the next simplest behavior — only, that's it! There's nothing more for us to do because we've covered all of the `Triangle` class logic that we need at this time.

## Final Thoughts
---

Going forward, remember that whenever we use static data, we need to create a `Dispose()` method to clean up between each test, and that we'll need to have our test classes extend from the `IDisposable` interface.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository. Also note the following:

* This branch contains completed business logic and tests for the `Triangle` class.
* UI Logic in `Program.cs` has been commented back in. 

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for TDD with Shape Tracker: `2_complete_testing`](https://github.com/epicodus-lessons/prework-TDD-with-shape-tracker-csharp-net6/tree/2_complete_testing)**
