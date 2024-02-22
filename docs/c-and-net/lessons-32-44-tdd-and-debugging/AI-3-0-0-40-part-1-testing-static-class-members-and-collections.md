---
title: "📓 3.0.0.40 Part 1: Testing Static Class Members and Collections"
day: weekend
---

When we first created our C# Shape Tracker, we made sure to include a private **static** field called `_instances` that is a list that stores all `Triangle` instances ever made. We also made a getter method and setter method that would allow us to access and manage `_instances`: `GetAll()` and `ClearAll()`. In this lesson, we're going to test and create this same logic. In the process, we'll learn how to make assertions for collections using the static `CollectionAssert.AreEqual()` method from MSTest.

However, we'll quickly hit a roadblock that we'll need to resolve before we can complete our Shape Tracker logic! 

## Reference for the "Red, Green, Refactor" (RGR) Workflow
---

For reference, here's the "Red, Green, Refactor" (RGR) workflow we follow with TDD:

1.  Identify the simplest possible behavior the program must exhibit.
2.  Write a coded test for this behavior.
3.  <font color="red">Before coding, confirm the test fails.</font>
4.  Implement the behavior with the least amount of code possible.
5.  <font color="green">Run the automated test to confirm it passes. If it doesn't, revisit step 4.</font>
6.  <font color="green">Confirm all previous tests still pass. If it doesn't, revisit step 4.</font>
7.  <font color="blue">Check if code can be refactored. If so, refactor and repeat step 6.</font>
8.  Commit your passing code.
9.  Repeat this process with the next simplest behavior.

## Testing the Private Static Field `_instances` through its Getter Method `GetAll()`
---

### 1.  Identify the simplest possible behavior the program must exhibit.

We'll start by creating our private static `_instances` field along with its getter method, `GetAll()`. 

### 2.  Write a coded test for this behavior.

Here's what the test will look like for the private static `_instances` field and `GetAll()` getter method. We'll explain the new code below the code snippet.

<div class="filename">ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs</div>

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ShapeTracker.Models;
using System.Collections.Generic; // new using directive!

namespace ShapeTracker.Tests
{
  [TestClass]
  public class TriangleTests
  {

    ... // other tests omitted for brevity

    [TestMethod]
    public void GetAll_ReturnsAllTriangleInstances_List()
    {
      // Arrange
      Triangle tri1 = new Triangle(2, 2, 9);
      Triangle tri2 = new Triangle(21, 3, 9);
      Triangle tri3 = new Triangle(1, 3, 9);
      List<Triangle> expected = new List<Triangle> { tri1, tri2, tri3 };
      // Act
      List<Triangle> actualResult = Triangle.GetAll();
      // Assert
      CollectionAssert.AreEqual(expected, actualResult);
    }

  }
}
```

Notice a couple new things:

* First, we include a new using directive, because we're now working with the `List<T>` type, which lives within the `System.Collections.Generic` namespace.
* Second, we're using the static `CollectionAssert.AreEqual()` method. This method works just in the same way as the `Assert.AreEqual()` method in that it compares an expected value with the actual value, only it's meant to compare collections — arrays, lists, or dictionaries. 

We're ready to move onto the next step.

### 3. Before coding, confirm the test fails.

If we run `$ dotnet test` in the `ShapeTracker.Tests` directory, we'll get a compiler error that confirms that our test fails and there are no false positives in our code:

<pre>
<code style="color:red">
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(142,46): error CS0117: 'Triangle' does not contain a definition for 'GetAll' [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
</code>
</pre>

### 4. Implement the behavior with the least amount of code possible.

To resolve the compiler error and pass out test, we'll need to do a few things:

* Create a private static field called `_instances` set to a new, empty list of triangles.
* Add `_instances.Add(this)` to our constructor to add each triangle object created to the list.
* Create a public getter method called `GetAll()` that returns the `_instances` field.

Here's our updated `Triangle.cs` logic:

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
using System.Collections.Generic;

namespace ShapeTracker.Models
{
  public class Triangle
  {
    private int _side1;
    public int Side1
    {
      get { return _side1; }
      set { _side1 = value; }
    }
    public int Side2 { get; set; }
    private int _side3;
    private static List<Triangle> _instances = new List<Triangle> {};

    public Triangle(int length1, int length2, int length3)
    {
      _side1 = length1;
      Side2 = length2;
      _side3 = length3;
      _instances.Add(this);
    }

    public int GetSide3()
    {
      return _side3;
    }

    public void SetSide3(int newValue)
    {
      _side3 = newValue;
    }

    public string CheckType()
    {
      if ((Side1 > (Side2 + _side3)) || (Side2 > (Side1 + _side3)) || (_side3 > (Side1 + Side2)))
      {
        return "not a triangle";
      } 
      else if ((Side1 != Side2) && ((Side1 != _side3)) && ((Side2 != _side3))) 
      {
        return "scalene triangle";
      }  
      else if ((Side1 == Side2) && (Side1 == _side3)) 
      {
        return "equilateral triangle";
      } 
      else 
      {
        return "isosceles triangle";
      }
    }

    public static List<Triangle> GetAll()
    {
      return _instances;
    }

  }
}
```

### 5. Run the automated test to confirm it passes. If it doesn't, revisit step 4.

We're now ready to see if the code we implemented passes our new test.

When we run `dotnet test` again, we our test fails:

<pre>
<code style="color:red">
  Failed GetAll_ReturnsAllTriangleInstances_List [87 ms]
  Error Message:
   CollectionAssert.AreEqual failed. (Different number of elements.)
  Stack Trace:
     at ShapeTracker.Tests.TriangleTests.GetAll_ReturnsAllTriangleInstances_List() in C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs:line 144


Failed!  - Failed:     1, Passed:    11, Skipped:     0, Total:    12, Duration: 304 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

The failure message says `Different number of elements`, but it doesn't give additional information. 

Any ideas about what may be happening here?

Well, the issue is not obvious... In fact, our code and test are written perfectly, and the issue is in our tests: because the tests will run in order, by the time it gets to our final `GetAll` test, we've already many, many `Triangle` objects to our static list — 11 to be precise! 

Remember that each time a new `Triangle` object is created by the constructor, the entire `Triangle` class has a new object added to its static `List` of `Triangle` objects. We can't reset the static list unless we manually clear the list (like with a static `ClearAll()` method)! So, when our `GetAll` test runs, it compares the `expected` list of 3 triangles with a list of 14 `Triangle` objects (11 from the previous tests and 3 from the `GetAll` test). 

Well, we can solve this issue with a **teardown** method that will clear out `_instances` between each test. Let's learn how to do that in the next lesson! 
