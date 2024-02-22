---
title: "📓 3.0.0.37 Testing An Auto-Implemented Property"
day: weekend
id: 3-0-0-37-testing-an-auto-implemented-property
hide_table_of_contents: true
---

In this lesson, we'll work on implementing the next simplest behavior for our `Triangle` logic, which is giving triangles a second side:

* We'll use the RGR workflow to test and create an auto-implemented property called `Side2`.
* We'll treat the get and set actions of the auto-implemented property as two distinct behaviors, so we'll run through the steps of the RGR workflow twice: first we'll implement the `Side2` get action, then afterwards we'll implement the `Side2` set action.
* When we write our tests, we'll use the organizational trick called "Arrange, Act, Assert" that we learned about in the last lesson.

Let's get into it! 

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

## Testing the Auto-Implemented Public Property `Side2`
---

### 1.  Identify the simplest possible behavior the program must exhibit.

The next simplest behavior we'll tackle is creating a get action for the second side of a triangle. In terms of code, for our second side we'll create a public auto-implemented property called `Side2`. 

### 2.  Write a coded test for this behavior.

Here's what the test will look like for our `Side2` get action:

<div class="filename">ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs</div>

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ShapeTracker.Models;

namespace ShapeTracker.Tests
{
  [TestClass]
  public class TriangleTests
  {

    ... // 3 tests omitted for brevity

    [TestMethod]
    public void GetSide2_ReturnsSide2_Int()
    {
      // Arrange
      int length2 = 3;
      Triangle newTriangle = new Triangle(2, length2);
      // Act
      int result = newTriangle.Side2;
      // Assert
      Assert.AreEqual(length2, result);
    }

  }
}
```

### 3. Before coding, confirm the test fails.

If we run `$ dotnet test` in the `ShapeTracker.Tests` directory, we'll get a compiler error which confirms that our test fails and there are no false positives in our code:

<pre>
<code style="color:red">
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(35,32): error CS1061: 'Triangle' does not contain a definition for 'Side2' and no accessible extension method 'Side2' accepting a first argument of type 'Triangle' could be found (are you missing a using directive or an assembly reference?) [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
</code>
</pre>

### 4. Implement the behavior with the least amount of code possible.

Let's add just enough code to get beyond the compiler error. Let's update our code in the following ways:

* Create a public auto-implemented property called `Side1` with a get action defined.
* Add `length2` as a parameter to our constructor and have it assigned as the value of our `Side2` property.

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
    public int Side2 { get; }

    public Triangle(int length1, int length2)
    {
      _side1 = length1;
      Side2 = length2;
    }
  }
}
```

### 5. Run the automated test to confirm it passes. If it doesn't, revisit step 4.

We're now ready to see if the code we implemented passes our new test. 

When we run `dotnet run` again, we get more compiler errors:

<pre>
<code style="color:red">
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(12,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length2' of 'Triangle.Triangle(int, int)' [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(21,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length2' of 'Triangle.Triangle(int, int)' [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(32,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length2' of 'Triangle.Triangle(int, int)' [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
</code>
</pre>

Three errors! Why so many? Just like in the last lesson, these compiler errors are letting us know that we are not calling our `Triangle()` constructor appropriately after we've updated it to have a second parameter. We're getting three errors for each of the three times we invoke the `Triangle()` constructor in our test file `TriangleTests.cs` without the (now) required second parameter. We need to revisit step 4 and implement more code to get our test to pass. 

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
      Triangle newTriangle = new Triangle(2, 3); // Updated!
      Assert.AreEqual(typeof(Triangle), newTriangle.GetType());
    }

    [TestMethod]
    public void GetSide1_ReturnsSide1_Int()
    {
      // Arrange
      int length1 = 3;
      Triangle newTriangle = new Triangle(length1, 2); // Updated!
      // Act
      int result = newTriangle.Side1;
      // Assert
      Assert.AreEqual(length1, result);
    }

    [TestMethod]
    public void SetSide1_SetsValueOfSide1_Void()
    {
      // Arrange
      Triangle newTriangle = new Triangle(3,3); // Updated!
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
      Triangle newTriangle = new Triangle(2, length2); // Updated!
      // Act
      int result = newTriangle.Side2;
      // Assert
      Assert.AreEqual(length2, result);
    }
  }
}
```

### 5. Confirm the Test Passes, and 6. Confirm all previous tests still pass. If they don't, revisit step 4.

We can run `dotnet test` again and confirm all our tests are passing now.

<pre>
<code style="color:green">
Passed!  - Failed:     0, Passed:     4, Skipped:     0, Total:     2, Duration: 67 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

### 7.  Check if code can be refactored. If so, refactor and repeat step 6.

Our code cannot be refactored at this time, since it is still very basic.

### 8.  Commit your passing code.

Time to commit our passing code. The commit message this time will be "add Side2 get functionality + passing test".

We're now ready for step 9: Repeat this process with the next simplest behavior.

### 1.  Identify the simplest possible behavior the program must exhibit.

The next simplest behavior we want to test for is adding a `set` action to our public `Side2` auto-implemented property.

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

    ... // previous 4 tests omitted for brevity.

    [TestMethod]
    public void SetSide2_SetsValueOfSide2_Void()
    {
      // Arrange
      Triangle newTriangle = new Triangle(3,4);
      int newLength2 = 6;
      // Act
      newTriangle.Side2 = newLength2;
      // Assert
      Assert.AreEqual(newLength2, newTriangle.Side2);
    }

  }
}
```

### 3.  Before coding, confirm the test fails.

Let's confirm that our test fails by running `dotnet test` within the `ShapeTracker.Tests` directory:

<pre>
<code style="color:red">
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(35,7): error CS0200: Property or indexer 'Triangle.Side2' cannot be assigned to -- it is read only [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
</code>
</pre>

We get a compiler error, which counts as a test failure. The error clearly lets us know that we cannot assign a value to the `Side2` property.

### 4.  Implement the behavior with the least amount of code possible.

We'll add a `set` action to our public `Side2` auto-implemented property:

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
    public int Side2 { get; set; } // Updated code!

    public Triangle(int length1, int length2)
    {
      _side1 = length1;
      Side2 = length2;
    }
  }
}
```

### Steps 5. and 6. Confirm the new test and all previous tests are still passing.

With the previous update, we can confirm that all of our tests are now passing: 

<pre>
<code style="color:green">
Passed!  - Failed:     0, Passed:     5, Skipped:     0, Total:     2, Duration: 67 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

### 7.  Check if code can be refactored. If so, refactor and repeat step 6.

We're still in the early stages of development, so we won't see an opportunity for refactoring for a while.

### 8.  Commit your passing code.

Commit your passing code. We'll use the commit message "add passing test, code for Triangle.Side2 SET".

### 9.  Repeat this process with the next simplest behavior.

We've completed our get and set behavior for the `Side2` auto-implemented property and updated the constructor. In the next lesson, we'll move on to the next simplest behavior, the triangle's third side.
