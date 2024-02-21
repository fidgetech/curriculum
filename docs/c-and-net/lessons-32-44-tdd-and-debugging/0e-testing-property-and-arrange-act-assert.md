---
title: "📓 3.0.0.36 Testing A Private Field through its Public Property and Organizing Tests with Arrange, Act, Assert"
id: 30036-testing-a-private-field-through-its-public-property-and-organizing-tests-with-arrange-act-assert
hide_table_of_contents: true
day: weekend
---

In this lesson, we'll begin working on the next simplest behavior our `Triangle` logic should have: three sides. Since the `Triangle` logic we create now will mirror exactly the `Triangle` logic we created at the end of the last pre-work section, we'll test for the following:

* Testing the private field `_side1` through its public property `Side1`.
* Testing the auto-implemented public property `Side2`.
* Testing the private field `_side3` through its getter and setter methods.

We'll tackle each of the above behaviors in multiple lessons. This lesson will focus on two main topics:

* Using the RGR workflow to test and create the private field `_side1` through its public property `Side1`.
* Using an organizational trick within our tests called "Arrange, Act, Assert". 

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

## Testing the Private Field `_side1` through its Public Property `Side1`
---

### 1.  Identify the simplest possible behavior the program must exhibit.

The next behavior we want to implement in our `Triangle` class is for triangle objects to save three values to represent the three sides of a triangle. This behavior can actually be broken into three: we can consider implementing one side as one behavior. 

However, each side of the triangle can further be broken down into two behaviors: implementing a get action and a set action. We distinguish between the set and get behavior because they are different, and including a set behavior is not required.

So the next simplest behavior we'll tackle is creating a get action for the first side of a triangle. In terms of code, we'll create a private field called `_side1`, which we'll access through the `get` action of a public property called `Side1`. 

### 2.  Write a coded test for this behavior.

Here's the test we'll write, which we'll add just below the test for the constructor:

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
      Triangle newTriangle = new Triangle();
      Assert.AreEqual(typeof(Triangle), newTriangle.GetType());
    }

    [TestMethod]
    public void GetSide1_ReturnsSide1_Int()
    {
      int length1 = 3;
      Triangle newTriangle = new Triangle(length1);
      int result = newTriangle.Side1;
      Assert.AreEqual(length1, result);
    }

  }
}
```

We've created a new test method called `GetSide1_ReturnsSide1_Int`. Getting the value of a property on an `Triangle` may seem trivial. However, in order to get this test to pass, we'll need to create the public  property, the private field, and also update our constructor. It makes sense to test our property and getter method so we know it's working properly, especially if we utilize custom `get` logic.

Within the test method we do the following:

1. Create a new `int` called `length1`.

2. Create a new `Triangle` object, passing in the `length1` value.

3. Record the result of retrieving the `Side1` property of `newTriangle`.

4. Confirm the description retrieved from the `Triangle` object matches the `length1` string provided to the constructor.

### Arrange, Act, Assert

This test is more complex than our previous tests. Thankfully, there's an easy organizational trick that helps demystify this process and keep our tests clean. It's called **"Arrange, Act, Assert"**. With this organizational method, we break our tests down into three stages:

1. **Arrange**: We gather, declare and create all necessary components for the test. In the test above, we create `length1` and `newTriangle`.

2. **Act**: We invoke the functionality we're testing, often by calling a method or retrieving a property. In the test above, we call `newTriangle.Side1;`.

3. **Assert**: We confirm the functionality works as anticipated by comparing its actual output with the anticipated output. This is when we call `Assert.AreEqual()`.

Let's take one more look at our test. This time, we add comments to show how we use "Arrange, Act, Assert."

<div class="filename">ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs</div>

```csharp
...

    [TestMethod]
    public void GetSide1_ReturnsSide1_Int()
    {
      // Arrange
      int length1 = 3;
      Triangle newTriangle = new Triangle(length1);
      // Act
      int result = newTriangle.Side1;
      // Assert
      Assert.AreEqual(length1, result);
    }

...
```

We recommend following this same organizational process in your own tests throughout the course.

### 3. Before coding, confirm the test fails.

If we run `$ dotnet test` in the `ShapeTracker.Tests` directory, we'll see errors:

<pre>
<code style="color:red">
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(21,34): error CS1729: 'Triangle' does not contain a constructor that takes 1 arguments [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(23,32): error CS1061: 'Triangle' does not contain a definition for 'Side1' and no accessible extension method 'Side1' accepting a first argument of type 'Triangle' could be found (are you missing a using directive or an assembly reference?) [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
</code>
</pre>

This isn't actually a test failure message — it's a **compiler error** because the `Triangle` class doesn't have a constructor with a `Side1` property. As a result, our test won't even run. However, for C# this compiler error is enough of a confirmation that our test does not have any false positives, so we can move onto the next step within the RGR workflow.

### 4. Implement the behavior with the least amount of code possible.

Let's add just enough code to get beyond the compiler error. Let's update our code in the following ways:

* Create a private field called `_side1`.
* Create a public property called `Side1` with a get action defined.
* Add `length1` as a parameter to our constructor and have it assigned as the value of our `Side1` property.

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
    }

    public Triangle(int length1)
    {
      _side1 = length1;
    }
  }
}
```

### 5. Run the automated test to confirm it passes. If it doesn't, revisit step 4.

We're now ready to see if the code we implemented passes our new test. 

When we run `dotnet test` again, we get another compiler error:

<pre>
<code style="color:red">
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(12,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length1' of 'Triangle.Triangle(int)' [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
</code>
</pre>

If we read the compiler error, we can see there's an issue on line 12 of `TriangleTests.cs`. Line 12 is when we call the `Triangle` constructor in our first test: `Triangle newTriangle = new Triangle();`. Our `Triangle` constructor now expects an argument that corresponds to the `length1` parameter. We need to revisit step 4 and implement more code to get our test to pass. 

### (Again) 4. Implement the behavior with the least amount of code possible.

Here's how we'll update the first test in `TriangleTests.cs`:

<div class="filename">ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs</div>

```csharp
...

    [TestMethod]
    public void TriangleConstructor_CreatesInstanceOfTriangle_Triangle()
    {
      Triangle newTriangle = new Triangle(2); // Updated!
      Assert.AreEqual(typeof(Triangle), newTriangle.GetType());
    }

...
```

### 5. Confirm the Test Passes, and 6. Confirm all previous tests still pass. If they don't, revisit step 4.

We can run `dotnet test` again and confirm all our tests are passing now.

<pre>
<code style="color:green">
Passed!  - Failed:     0, Passed:     2, Skipped:     0, Total:     2, Duration: 67 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

When we're following "Red, Green, Refactor" we should be identifying behaviors that **remain true for the life of the program**. Ideally, we should rarely have to go back and edit previous tests. In fact, editing tests to make them pass can be dangerous. We don't want to risk creating falsely-passing tests. However, as applications grow in size, it's occasionally required to edit previous tests. In particular a class's constructor is likely to change a lot until the class logic is done. 

### 7.  Check if code can be refactored. If so, refactor and repeat step 6.

Our code cannot be refactored at this time, since it is still very basic.

### 8.  Commit your passing code.

Time to commit our passing code. The commit message this time will be "add Side1 get functionality + passing test".

Remember that you can change the wording of your last commit with the command `git commit --amend`.

We're now ready for step 9: Repeat this process with the next simplest behavior.

### 1.  Identify the simplest possible behavior the program must exhibit.

We want to be able to get and set the value of our `_side1` private field, so the next simplest behavior we want to test for is adding a `set` action to our public `Side1` property.

### 2.  Write a coded test for this behavior.

Here's our new test. Note that we don't have to include the comments `// Arrange`, `// Act`, `// Assert`:

<div class="filename">ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs</div>

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ShapeTracker.Models;

namespace ShapeTracker.Tests
{
  [TestClass]
  public class TriangleTests
  {

    ... // previous 2 tests omitted for brevity.

    [TestMethod]
    public void SetSide1_SetsValueOfSide1_Void()
    {
      // Arrange
      Triangle newTriangle = new Triangle(3);
      int newLength1 = 44;
      // Act
      newTriangle.Side1 = newLength1;
      // Assert
      Assert.AreEqual(newLength1, newTriangle.Side1);
    }

  }
}
```

### 3.  Before coding, confirm the test fails.

Let's confirm that our test fails by running `dotnet test` within the `ShapeTracker.Tests` directory:

<pre>
<code style="color:red">
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(35,7): error CS0200: Property or indexer 'Triangle.Side1' cannot be assigned to -- it is read only [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
</code>
</pre>

We get a compiler error, which counts as a test failure. The error clearly lets us know that we cannot assign a value to the `Side1` property.

### 4.  Implement the behavior with the least amount of code possible.

We'll add a `set` action to our public `Side1` property, which will handle assigning the private field `_side1` a value.

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

    public Triangle(int length1)
    {
      _side1 = length1;
    }
  }
}
```

### Steps 5. and 6. Confirm the new test and all previous tests are still passing.

With the previous update, we can confirm that all of our tests are now passing: 

<pre>
<code style="color:green">
Passed!  - Failed:     0, Passed:     3, Skipped:     0, Total:     2, Duration: 67 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

### 7.  Check if code can be refactored. If so, refactor and repeat step 6.

We're still in the early stages of development, so we won't see an opportunity for refactoring for a while.

### 8.  Commit your passing code.

Commit your passing code. We'll use the commit message "add passing test, code for Triangle.Side1 SET".

### 9.  Repeat this process with the next simplest behavior.

We've completed our get and set behavior for the `Side1` property and private `_side1` field. We've also updated the constructor accordingly. In the next lesson, we'll move on to the next simplest behavior.
