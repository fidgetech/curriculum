---
title: "📓 3.0.0.38 Testing A Private Field through its Getter and Setter Methods"
id: 30038-testing-a-private-field-through-its-getter-and-setter-methods
hide_table_of_contents: true
day: weekend
---

In this lesson, we'll work on implementing the next simplest behavior for our `Triangle` logic, which is giving triangles a third side:

* We'll use the RGR workflow to test and create a private field called `_side3`, which we'll access through the getter method `GetSide3()` and the setter method `SetSide3()`.
* We'll treat the get and set actions of the private field as two distinct behaviors, so we'll run through the steps of the RGR workflow twice: first we'll implement the getter method, then afterwards we'll implement the setter method.
* When we write our tests, we'll use the organizational trick called "Arrange, Act, Assert" that we learned about in a previous lesson.

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

## Testing the Private Field `_side3` through its Getter Method `GetSide3()`
---

### 1.  Identify the simplest possible behavior the program must exhibit.

The next simplest behavior we'll tackle is creating a get action for the third side of a triangle. In terms of code, for our third side we'll create a private field called `_side3`, and we'll need to create a getter method called `GetSide3()` in order to access it.

### 2.  Write a coded test for this behavior.

Here's what the test will look like for our `_side3` get action. Notice that we are invoking the `GetSide3()` getter method:

<div class="filename">ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs</div>

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ShapeTracker.Models;

namespace ShapeTracker.Tests
{
  [TestClass]
  public class TriangleTests
  {

    ... // 5 tests omitted for brevity

    [TestMethod]
    public void GetSide3_ReturnsSide3_Int()
    {
      // Arrange
      int length3 = 55;
      Triangle newTriangle = new Triangle(2, 3, length3);
      // Act
      int result = newTriangle.GetSide3();
      // Assert
      Assert.AreEqual(length3, result);
    }

  }
}
```

### 3. Before coding, confirm the test fails.

If we run `$ dotnet test` in the `ShapeTracker.Tests` directory, we'll get two compiler errors which confirm that our test fails and there are no false positives in our code:

<pre>
<code style="color:red">
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(69,34): error CS1729: 'Triangle' does not contain a constructor that takes 3 arguments [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(71,32): error CS1061: 'Triangle' does not contain a definition for 'GetSide3' and no accessible extension method 'GetSide3' accepting a first argument of type 'Triangle' could be found (are you missing a using directive or an assembly reference?) [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
</code>
</pre>

The first compiler error lets us know that our constructor can't take three arguments, even though we are using three arguments for our constructor in our new test.

The second compiler error lets us know that the `GetSide3()` instance method that we're invoking in our new test doesn't exist within the `Triangle` class. It asks us if we have forgotten to include a using directive, which implies that we have a `GetSide3()` method defined in another namespace; but that's not our issue.

### 4. Implement the behavior with the least amount of code possible.

Let's add just enough code to get beyond the compiler errors. We'll update our code in the following ways:

* Create a private field called `_side3`.
* Add `length3` as a parameter to our constructor and have it assigned as the value of our `_side3` field.
* Create a public getter method called `GetSide3()` that returns the `_side3` field.

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
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

    public Triangle(int length1, int length2, int length3)
    {
      _side1 = length1;
      Side2 = length2;
      _side3 = length3;
    }

    public int GetSide3()
    {
      return _side3;
    }
  }
}
```

### 5. Run the automated test to confirm it passes. If it doesn't, revisit step 4.

We're now ready to see if the code we implemented passes our new test.

When we run `dotnet test` again, we get many compiler errors:

<pre>
<code style="color:red">
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(12,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length3' of 'Triangle.Triangle(int, int, int)' [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(21,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length3' of 'Triangle.Triangle(int, int, int)' [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(32,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length3' of 'Triangle.Triangle(int, int, int)' [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(45,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length3' of 'Triangle.Triangle(int, int, int)' [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(56,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length3' of 'Triangle.Triangle(int, int, int)' [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
</code>
</pre>

This is probably the most compiler errors we've gotten so far! Just like we saw before, these compiler errors are letting us know that we are not calling our `Triangle()` constructor appropriately after we've updated it to have a third parameter. We're getting five errors for each of the five times we invoke the `Triangle()` constructor in our test file `TriangleTests.cs` without the (now) required third parameter. We need to revisit step 4 and implement more code to get our test to pass. 

Before we move on, remember this — if we resolve a compiler error only to get many, many more compiler errors, that does not automatically mean we're on the wrong track; it just means we've moved on to the next issue in our code.

### (Again) 4. Implement the behavior with the least amount of code possible.

Here's how we'll fix the tests in `TriangleTests.cs`:

<div class="filename">ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs</div>

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ShapeTracker.Models;

namespace ShapeTracker.Tests
{
  [TestClass]
  public class TriangleTests
  {
    [TestMethod]
    public void TriangleConstructor_CreatesInstanceOfTriangle_Triangle()
    {
      Triangle newTriangle = new Triangle(2, 3, 8); // Updated!!
      Assert.AreEqual(typeof(Triangle), newTriangle.GetType());
    }

    [TestMethod]
    public void GetSide1_ReturnsSide1_Int()
    {
      // Arrange
      int length1 = 3;
      Triangle newTriangle = new Triangle(length1, 2, 8); // Updated!!
      // Act
      int result = newTriangle.Side1;
      // Assert
      Assert.AreEqual(length1, result);
    }

    [TestMethod]
    public void SetSide1_SetsValueOfSide1_Void()
    {
      // Arrange
      Triangle newTriangle = new Triangle(3, 3, 8); // Updated!!
      int newLength1 = 44;
      // Act
      newTriangle.Side1 = newLength1;
      // Assert
      Assert.AreEqual(newLength1, newTriangle.Side1);
    }

    [TestMethod]
    public void GetSide2_ReturnsSide2_Int()
    {
      // Arrange
      int length2 = 3;
      Triangle newTriangle = new Triangle(2, length2, 8); // Updated!!
      // Act
      int result = newTriangle.Side2;
      // Assert
      Assert.AreEqual(length2, result);
    }

    [TestMethod]
    public void SetSide2_SetsValueOfSide2_Void()
    {
      // Arrange
      Triangle newTriangle = new Triangle(3,4, 8); // Updated!!
      int newLength2 = 6;
      // Act
      newTriangle.Side2 = newLength2;
      // Assert
      Assert.AreEqual(newLength2, newTriangle.Side2);
    }

    [TestMethod]
    public void GetSide3_ReturnsSide3_Int()
    {
      // Arrange
      int length3 = 55;
      Triangle newTriangle = new Triangle(2, 3, length3);
      // Act
      int result = newTriangle.GetSide3();
      // Assert
      Assert.AreEqual(length3, result);
    }
  }
}
```

### 5. Confirm the Test Passes, and 6. Confirm all previous tests still pass. If they don't, revisit step 4.

We can run `dotnet test` again and confirm all our tests are passing now.

<pre>
<code style="color:green">
Passed!  - Failed:     0, Passed:     6, Skipped:     0, Total:     2, Duration: 67 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

Sweet! We now have 6 passing tests. 

### 7.  Check if code can be refactored. If so, refactor and repeat step 6.

Our code cannot be refactored at this time, since it is still very basic.

### 8.  Commit your passing code.

It's time to commit our passing code. The commit message this time will be "add _side3 get functionality + passing test".

We're now ready for step 9: Repeat this process with the next simplest behavior.

## Testing the Private Field `_side3` through its Setter Method `SetSide3()`
---

### 1.  Identify the simplest possible behavior the program must exhibit.

The next simplest behavior we want to test for is the ability to give the `_side3` field a new value. To do this, we'll need to test and create a setter method called `SetSide3()`.

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

    ... // previous 6 tests omitted for brevity.

    [TestMethod]
    public void SetSide3_SetsValueOfSide3_Void()
    {
      // Arrange
      Triangle newTriangle = new Triangle(3, 4, 8);
      int newLength3 = 6;
      // Act
      newTriangle.SetSide3(newLength3);
      // Assert
      Assert.AreEqual(newLength3, newTriangle.GetSide3());
    }

  }
}
```

### 3.  Before coding, confirm the test fails.

Let's confirm that our test fails by running `dotnet test` within the `ShapeTracker.Tests` directory:

<pre>
<code style="color:red">
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(83,19): error CS1061: 'Triangle' does 
not contain a definition for 'SetSide3' and no accessible extension method 'SetSide3' accepting a first argument of type 'Triangle' could be found (are you missing a using directive or an assembly reference?) [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
</code>
</pre>

We get a compiler error, which counts as a test failure. This compiler error lets us know that the `SetSide3()` instance method that we're invoking in our new test doesn't exist within the `Triangle` class. It asks us if we have forgotten to include a using directive, which implies that we have a `SetSide3()` method defined in another namespace; but that's not our issue.

### 4.  Implement the behavior with the least amount of code possible.

Let's create the missing `SetSide3()` setter method within the `Triangle` class:

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
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

    public Triangle(int length1, int length2, int length3)
    {
      _side1 = length1;
      Side2 = length2;
      _side3 = length3;
    }

    public int GetSide3()
    {
      return _side3;
    }

    public void SetSide3(int newValue)
    {
      _side3 = newValue;
    }
  }
}
```

### Steps 5. and 6. Confirm the new test and all previous tests are still passing.

With the previous update, we can confirm that all of our tests are now passing: 

<pre>
<code style="color:green">
Passed!  - Failed:     0, Passed:     7, Skipped:     0, Total:     2, Duration: 67 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

### 7.  Check if code can be refactored. If so, refactor and repeat step 6.

We're still in the early stages of development, so we won't see an opportunity for refactoring for a while.

### 8.  Commit your passing code.

Commit your passing code. We'll use the commit message "add _side3 set functionality + passing test".

### 9.  Repeat this process with the next simplest behavior.

We're done with our constructor, field, property, and auto-implemented property. In the next lesson, we'll move on to working on the `Triangle.CheckType()` instance method.
