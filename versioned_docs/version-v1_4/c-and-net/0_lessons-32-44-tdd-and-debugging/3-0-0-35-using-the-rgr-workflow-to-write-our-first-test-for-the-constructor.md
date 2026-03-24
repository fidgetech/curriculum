---
title: "📓 5.0.0.35 Using the RGR Workflow to Write our First Test for the Constructor"
day: weekend
id: 5-0-0-35-using-the-rgr-workflow-to-write-our-first-test-for-the-constructor
hide_table_of_contents: true
---

Let's create our first test. Remember that the purpose of test-driven development is to write a test for the smallest unit of behavior possible. The test should fail first. Then we should add the smallest amount of code possible to get the test to pass. After that, we can refactor our code as necessary. This follows the "Red, Green, Refactor" TDD workflow.

Keep in mind, though, that the process of using TDD with C# will feel very different. When there is an error in our C# code, our code will often fail to compile — an issue we won't run into with JavaScript. While in JavaScript this was not considered a good fail, in C#, compiler errors are acceptable and we can consider them to be a good fail.

**Note: If you are working along with the lessons in your own project, you will need to comment out the code inside the Main method in the `Program.cs` file. As a reference, please see the example project linked at the bottom of the previous lesson.**

## Clearing `Triangle` Logic
---

The first thing we'll want to do is remove the contents of our `Triangle` class, so that it is just a class and namespace declaration. We'll remove the using directive for `System.Collections.Generic` as well. This is what the contents `Triangle.cs` should look like:

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models
{
  public class Triangle
  {
    // Code for Triangle business logic will go here.
  }
}
```

Now we're ready to start re-creating our `Triangle` class logic using TDD. 

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

## 1. Identify the Simplest Behavior
---

What's the simplest possible behavior our program should exhibit? What should a `Triangle` class actually do and how will we create it programmatically?

Our `Triangle` class will eventually need to check the type of a triangle, given three sides. That means, we need to save the values of three sides in our `Triangle` class logic. But before we can begin saving three sides to a `Triangle` object, we need to be able to create a `Triangle` object — that's the simplest behavior our program can exhibit.

Let's start with a test.

## 2. Write a Coded Test
---

Our test will confirm `Triangle` objects of the `Triangle` type can be created successfully.

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

  }
}
```

We declare our test method with the line `public void TriangleConstructor_CreatesInstanceOfTriangle_Triangle()`. MSTest tests are actually methods! Also, they always begin with `public void`: 

* They are `public`, which allows the tools running our tests to access them. 
* We add `void` because we don't `return` anything from the tests we write. 

Finally, we include the attribute `[TestMethod]` to identify this method as a test, similar to how we list `[TestClass]` above our `TriangleTests` class in order to identify it as a class of tests.

### Test Method Naming Conventions

The naming convention used for test methods is the following:

```csharp
public void NameOfMethodWeAreTesting_DescriptionOfBehavior_ExpectedReturnValue()
```

It's a very verbose way of naming tests, however this naming convention is meant to be verbose so that we can clearly understand the goal of the test method just from the name of it. 

The name we chose for our first `Triangle` test is `TriangleConstructor_CreatesInstanceOfTriangle_Triangle()`, and that follows the naming convention:

* `TriangleConstructor` is the method we're testing.
* `CreatesInstanceOfTriangle` describes the behavior we want our method to have.
* `Triangle` is the expected return value of the method we're testing.

### Creating an Assertion

Within the body of the test method, we do a few things. First, we create an instance of our `Triangle` class with the line `Triangle newTriangle = new Triangle();`. This is the **behavior that we are testing**:

```csharp
Triangle newTriangle = new Triangle();
```

Then we write our first **assertion** using a static MSTest method from the `Assert` class, `Assert.AreEqual()`:

```csharp
Assert.AreEqual(typeof(Triangle), newTriangle.GetType());
```

The `Assert.AreEqual()` method checks whether the two arguments provided are equal:

  * The first argument is what we _expect_ the result of the test to be. `typeof()` returns the data type of a class.
  * The second is the expression to be evaluated. `GetType()` returns the data type of a specific object.
  * In our case, our assertion is checking if the type of the `Triangle` class matches the type of the `Triangle` instance. 

Let's look at another example of using `Assert.AreEqual()`:

```csharp
Assert.AreEqual(true, 1 == 1)
```

The above assertion would be a passing test because the first argument `true` is equal to the second argument `1 == 1`.

## 3. Before coding, confirm the test fails.
---

We're now ready to move onto the red phase, which is confirming that our test fails before we write any code.

Within the `ShapeTracker.Tests` directory, run the following command:

```
$ dotnet test
```

From the output, we should see a green message highlighting that our new test passed. See the terminal output below, and take note that some of the MSTest terminal output has been omitted for brevity:

<pre>
<code style="color:green">
Passed!  - Failed:     0, Passed:     1, Skipped:     0, Total:     1, Duration: 89 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

Wait... shouldn't this test fail? Does this mean we have a false positive?

In this case, there are no false positives. Our test passes because we already have an `Triangle` class declared in `ShapeTracker/Models/Triangle.cs`, and an empty class always comes with an implicit constructor that we can use until we explicitly define a constructor. In this case, it's okay that our test has passed immediately, so long as we're making sure that we know why this is happening.

There are other scenarios where our test could pass immediately without there being a false positive. For example, the next test case we write could already be covered in the code we implemented for the last test case. Our job in these situations is simply to verify there are no false positives before we move on.

Let's continue onto the next step. 

## 4. Implement the behavior with the least amount of code possible.
---

Next, let's add a simple `Triangle()` constructor:

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models
{
  public class Triangle
  {
    public Triangle()
    {
      
    }
  }
}
```

With the above change, we've added an explicit constructor that doesn't actually do anything different than the implicit constructor we had before. However, we'll be updating our constructor as we go along, so we'll want this basic structure in place. 

Let's continue onto the next step. 

## 5. Run the automated test to confirm it passes.
---

After implementing business logic code, we'll run our tests again to confirm that our test passes (or in this case _still_ passes). Within the `ShapeTracker.Tests` directory, run the following command:

```
$ dotnet test
```

From the output, we should see a green message highlighting that our test is passing. See the terminal output below, and take note that some of the MSTest terminal output has been omitted for brevity:

<pre>
<code style="color:green">
Passed!  - Failed:     0, Passed:     1, Skipped:     0, Total:     1, Duration: 187 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

### 6. Confirm Previous Tests Still Pass

We don't have any other tests yet so we can advance to the next step.

### 7. Check For Refactoring

Once our code is working and a test passes, we should look for opportunities to improve our code. If we accidentally break something while refactoring, our tests will let us know.

In our case, we only have one test and one very basic constructor, so we can't refactor it further. Even so, it's **always important to check** if refactoring is possible before moving onto the next behavior.

## 8. Commit Your Passing Code!
---

Remember that making a commit when your code is passing does two important things:

* Gives yourself credit for the work you are doing.
* Acts as a save point that we can revert our code back to if something really goes awry later.

Our commit message will be "pass triangle constructor test".

Finally, we're ready for step number 9: Repeat this process with the next simplest behavior.

Commit your code now, and then move on to the next lesson to start the RGR workflow over for the next simplest behavior.

