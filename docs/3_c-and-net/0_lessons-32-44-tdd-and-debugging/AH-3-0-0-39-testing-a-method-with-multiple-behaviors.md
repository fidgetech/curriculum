---
title: "📓 3.0.0.39 Testing A Method with Multiple Behaviors"
day: weekend
id: 3-0-0-39-testing-a-method-with-multiple-behaviors
hide_table_of_contents: true
---

At this point we have seven passing tests and a fully tested `Triangle` constructor, field, property, and auto-implemented property. What's the next behavior we want to implement for our `Triangle` class? I'd say we're ready to work on the `Triangle.CheckType()` instance method that will determine what type of triangle we have. 

What do we know about the functionality we want for this method?

* It should return one of four values: 
  * `"not a triangle"` when the three sides can't make an actual triangle. For example the sides 1, 4, and 5000 cannot make an actual triangle.
  * `"scalene triangle"` when no sides are the same length.
  * `"isosceles triangle"` when two sides have the same length.
  * `"equilateral triangle"` when all three sides have the same length.
* The return type is a `string`.

What's the simplest starting point? It's up to you to decide! However, it's important to recognize that each of the possible return values represents a distinct behavior within the `Triangle.CheckType()` instance method; that means we need to tackle each behavior separately, with a separate test. 

So we'll write four tests, each of which covers a different outcome of the `CheckType()` method. This actually reveals a simple **testing guideline** to follow: for each method, there should be a separate test for each possible outcome. This may be self-explanatory, but we'll explain more: whenever a method has multiple possible return values, it means it implements branching; each branch in that method is a distinct **path** that our program can take; the best way to test these distinct paths is to write separate tests for them. This is considered best practice because each test targets distinct application behavior, instead of a distinct application method. 

In this lesson, we'll move down the list, implementing the test and code for `"not a triangle"`, then `"scalene triangle"`, then `"isosceles triangle"`, and finally `"equilateral triangle"`. We'll continue to use the RGR workflow as we go.

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

## Testing the `"not a triangle"` Path in the `CheckType()` Method
---

### 1.  Identify the simplest possible behavior the program must exhibit.

The first behavior we want to handle is when a triangle is `"not a triangle"`.

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

    ... // 7 tests omitted for brevity

    [TestMethod]
    public void CheckType_DeterminesWhenNotATriangle_String()
    {
      // Arrange
      Triangle notATriangle = new Triangle(3, 4, 88);
      // Act
      string triType = notATriangle.CheckType();
      // Assert
      Assert.AreEqual("not a triangle", triType);
    }
  }
}
```

### 3.  Before coding, confirm the test fails.

When we run `dotnet test` in the `ShapeTracker.Tests` directory, we'll get a compiler error letting us know that the `Triangle.CheckType()` instance method does not exist: 

<pre>
<code style={{color:"red"}}>
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs(94,36): error CS1061: 'Triangle' does not contain a definition for 'CheckType' and no accessible extension method 'CheckType' accepting a first argument of type 'Triangle' could be found (are you missing a using directive or an assembly reference?) [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ShapeTracker.Tests.csproj]
</code>
</pre>

This compiler error confirms that we do not have any false positives.

### 4.  Implement the behavior with the least amount of code possible.

Here's the least amount of code to get our test passing:

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models
{
  public class Triangle
  {
    ... // other code omitted for brevity

    public string CheckType()
    {
      return "not a triangle";
    }
  }
}
```

While the above is technically the very least amount of code to get our test to pass, we may feel more comfortable adding the actual branching logic that tests whether a triangle is not a triangle, since, at some point we will need that logic to accurately determine if a triangle is not a triangle: 

```csharp
if ((_side1 > (Side2 + _side3)) || (Side2 > (_side1 + _side3)) || (_side3 > (_side1 + Side2)))
{
  return "not a triangle";
} 
else 
{
  return "";
}
```

Both approaches are acceptable.

### 5.  Run the automated test to confirm it passes. If it doesn't, revisit step 4.

We'll run our tests again, and confirm that our tests are passing:

<pre>
<code style={{color:"green"}}>
Passed!  - Failed:     0, Passed:     8, Skipped:     0, Total:     8, Duration: 91 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

### Steps 6 and 7 

We can confirm that all previous tests still pass and there are no opportunities for refactoring yet. 

### Steps 8 and 9

We'll commit our passing code and move onto the next simplest behavior.

## Testing the `"scalene triangle"` Path in the `CheckType()` Method
---

### 1.  Identify the simplest possible behavior the program must exhibit.

The second behavior we want to handle is when a triangle is `"scalene triangle"`, which is when no side is the same length.

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

    ... // 8 tests omitted for brevity

    [TestMethod]
    public void CheckType_DeterminesWhenScalene_String()
    {
      // Arrange
      Triangle scaleneTri = new Triangle(3, 4, 5);
      // Act
      string triType = scaleneTri.CheckType();
      // Assert
      Assert.AreEqual("scalene triangle", triType);
    }
  }
}
```

### 3.  Before coding, confirm the test fails.

When we run `dotnet test` in the `ShapeTracker.Tests` directory, we'll finally get our first failed test!

<pre>
<code style={{color:"red"}}>
  Failed CheckType_DeterminesWhenScalene_String [59 ms]
  Error Message:
   Assert.AreEqual failed. Expected:&lt;scalene&gt;. Actual:&lt;not a triangle&gt;.
  Stack Trace:
     at ShapeTracker.Tests.TriangleTests.CheckType_DeterminesWhenScalene_String() in C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs:line 107


Failed!  - Failed:     1, Passed:     8, Skipped:     0, Total:     9, Duration: 117 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

MSTest gives us helpful output about what went wrong:

* We can read the name of the test method that failed, `CheckType_DeterminesWhenScalene_String`
* We can see the values for what we expect, `Expected:<scalene>`, versus what we actually got, `Actual:<not a triangle>`.
* We can see a stack trace that takes us to the failed `Assert.AreEqual()` method on line 107 of `TriangleTests.cs`.

This failed test is confirming there are no false positives. How? Because we haven't implemented any code for our test to pass, and we wrote our test so that it should pass. 

### 4.  Implement the behavior with the least amount of code possible.

To implement the behavior with the least amount of code possible, we'll finally need branching, as well as to decide which outcome should come first in our branching, `"not a triangle"` or `"scalene triangle"`. Here's the updated `Triangle.CheckType()` method:

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models
{
  public class Triangle
  {
    ... // other code omitted for brevity

    public string CheckType()
    {
      if ((Side1 != Side2) && ((Side1 != _side3)) && ((Side2 != _side3))) 
      {
        return "scalene triangle";
      } 
      else 
      {
        return "not a triangle";
      }
    }
  }
}
```

Within our `if` branch, we've decided to check whether a triangle is scalene first, by verifying that none of the sides have the same value.

With our `else` branch, we handle all other cases, which so far is when a triangle is not a triangle. 

### 5.  Run the automated test to confirm it passes. If it doesn't, revisit step 4.

Let's confirm that our new code passes our new test!

<pre>
<code style={{color:"red"}}>
  Failed CheckType_DeterminesWhenNotATriangle_String [36 ms]
  Error Message:
   Assert.AreEqual failed. Expected:&lt;not a triangle&gt;. Actual:&lt;scalene&gt;.
  Stack Trace:
     at ShapeTracker.Tests.TriangleTests.CheckType_DeterminesWhenNotATriangle_String() in C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs:line 96


Failed!  - Failed:     1, Passed:     8, Skipped:     0, Total:     9, Duration: 130 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

Hmm... we're getting an error, but it is different than last time: it says our test method `CheckType_DeterminesWhenNotATriangle_String()` has failed, with an expected output of `"not a triangle"`, but an actual output of `"scalene triangle"`. This means the new code we implemented worked for the new test, but broke a previous test! 

This is a good reminder to carefully review the error messages we get to really figure out what's wrong. 

### (Again) 4.  Implement the behavior with the least amount of code possible.

Let's fix this. The issue in our code is that our `notATriangle` variable in our test method `CheckType_DeterminesWhenNotATriangle_String()` (in `TriangleTests.cs`) that has the values of 3, 4, and 88 match with the requirements we set for scalene triangles, which is for none of the sides to have the same value. 

So what's our solution? We need the logic for the `"not a triangle"` path to come first, before the logic for the `"scalene triangle"` path. 

Here's our updated `CheckType()` method:

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models
{
  public class Triangle
  {
    ... // other code omitted for brevity

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
    }
  }
}
```

### 5.  Run the automated test to confirm it passes. If it doesn't, revisit step 4.

Let's run our tests again. When we do, we'll get a compiler error, one that we haven't seen before:

<pre>
<code style={{color:"red"}}>
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker\Models\Triangle.cs(31,19): error CS0161: 'Triangle.CheckType()': not all code paths return a value [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker\ShapeTracker.csproj]
</code>
</pre>

The current issue is letting us know that our code is not returning a `string` in all paths of the `Triangle.CheckType()` method. We do return a `string` in the `if` statement and the `else if` statement, but what happens if our triangle's sides do not match with the `if ` or `else if` statement? Nothing happens, which violates C#'s strict rules, in this case, that our `CheckType()` method needs to return a `string`. 

We can resolve this compiler error in a few ways. We could turn our `else if` into an `else` statement that returns `"scalene triangle"`:

```csharp
    public string CheckType()
    {
      if ((Side1 > (Side2 + _side3)) || (Side2 > (Side1 + _side3)) || (_side3 > (Side1 + Side2))) 
      {
        return "not a triangle";
      } 
      else 
      {
        return "scalene triangle";
      }
    }
```

Doing this makes the most sense in terms of coding incrementally. The downside, however, is that we would lose the work we've already done. 

Another option is to keep the code we wrote as-is, and add an new `else` statement that returns an empty string. 

```csharp
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
      else
      {
        return "";
      }
    }
```

Either approach is fine. This time, we'll opt for this second approach. Update the `Triangle.CheckType()` accordingly.


### 5.  Run the automated test to confirm it passes. If it doesn't, revisit step 4.

We'll run our tests again, and confirm that our tests are passing:

<pre>
<code style={{color:"green"}}>
Passed!  - Failed:     0, Passed:     9, Skipped:     0, Total:     8, Duration: 91 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

### Steps 6 and 7 

We can also confirm that all previous tests still pass and there are no opportunities for refactoring yet.

### Steps 8 and 9

We'll commit our passing code and move onto the next simplest behavior.

## Testing the `"isosceles triangle"` Path in the `CheckType()` Method
---

### 1.  Identify the simplest possible behavior the program must exhibit.

The next behavior we want to handle is when a triangle is `"isosceles triangle"`, which is when only two of the sides have the same length, but not the other.

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

    ... // 9 tests omitted for brevity

    [TestMethod]
    public void CheckType_DeterminesWhenIsosceles_String()
    {
      // Arrange
      Triangle isoscelesTri = new Triangle(5, 4, 4);
      // Act
      string triType = isoscelesTri.CheckType();
      // Assert
      Assert.AreEqual("isosceles triangle", triType);
    }
  }
}
```

### 3.  Before coding, confirm the test fails.

When we run `dotnet test` in the `ShapeTracker.Tests` directory, we'll see we have a failed test, which confirms that we do not have any false positives.

<pre>
<code style={{color:"red"}}>
  Failed CheckType_DeterminesWhenIsosceles_String [55 ms]
  Error Message:
   Assert.AreEqual failed. Expected:&lt;isosceles&gt;. Actual:&lt;&gt;.
  Stack Trace:
     at ShapeTracker.Tests.TriangleTests.CheckType_DeterminesWhenIsosceles_String() in C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs:line 118


Failed!  - Failed:     1, Passed:     9, Skipped:     0, Total:    10, Duration: 197 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

### 4.  Implement the behavior with the least amount of code possible.

Implementing the behavior in code to get our test passing will be simple this time:

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models
{
  public class Triangle
  {
    ... // other code omitted for brevity

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
      else 
      {
        return "isosceles triangle";
      }
    }
  }
}
```

We've simply updated our `else` statement to return `"isosceles triangle"`. When we implement the last behavior (`"equilateral triangle"`), we'll have to update this logic again. 

### 5.  Run the automated test to confirm it passes. If it doesn't, revisit step 4.

We'll run our tests again, and confirm that our tests are passing:

<pre>
<code style={{color:"green"}}>
Passed!  - Failed:     0, Passed:     10, Skipped:     0, Total:     8, Duration: 91 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

### Steps 6 and 7 

We can also confirm that all previous tests still pass and there are no opportunities for refactoring yet.

### Steps 8 and 9

We'll commit our passing code and move onto the next simplest behavior.

## Testing the `"equilateral triangle"` Path in the `CheckType()` Method
---

### 1.  Identify the simplest possible behavior the program must exhibit.

The next behavior we want to handle is when a triangle is `"equilateral triangle"`, which is when all three of the sides have the same length, but not the other.

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

    ... // 10 tests omitted for brevity

    [TestMethod]
    public void CheckType_DeterminesWhenEquilateral_String()
    {
      // Arrange
      Triangle equiTri = new Triangle(4, 4, 4);
      // Act
      string triType = equiTri.CheckType();
      // Assert
      Assert.AreEqual("equilateral triangle", triType);
    }
  }
}
```

### 3.  Before coding, confirm the test fails.

When we run `dotnet test` in the `ShapeTracker.Tests` directory, we'll see we have a failed test, which confirms that we do not have any false positives.

<pre>
<code style={{color:"red"}}>
  Failed CheckType_DeterminesWhenEquilateral_String [41 ms]
  Error Message:
   Assert.AreEqual failed. Expected:&lt;equilateral&gt;. Actual:&lt;isosceles&gt;.
  Stack Trace:
     at ShapeTracker.Tests.TriangleTests.CheckType_DeterminesWhenEquilateral_String() in C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs:line 129


Failed!  - Failed:     1, Passed:    10, Skipped:     0, Total:    11, Duration: 147 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

### 4.  Implement the behavior with the least amount of code possible.

We'll need to update our branching to accommodate a new path for `"equilateral triangle"`. Here's how we'll update our code in `Triangle.cs`:

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models
{
  public class Triangle
  {
    ... // other code omitted for brevity

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
  }
}
```

It's easier to test for an equilateral triangle than an isosceles triangle, so we've left our `else` statement to return `"isosceles triangle"`, and we've created a new `else if` statement to check for equilateral triangles.

### 5.  Run the automated test to confirm it passes. If it doesn't, revisit step 4.

Let's see if the code we added passes our test! 

<pre>
<code style={{color:"green"}}>
Passed!  - Failed:     0, Passed:     11, Skipped:     0, Total:     8, Duration: 91 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

And it does! Sweet.

### Steps 6 and 7 

We can also confirm that all previous tests still pass and there are no opportunities for refactoring yet.

### Steps 8 and 9

We'll commit our passing code and move onto the next simplest behavior. Up next, we'll write tests for static members and learn how to use the `CollectionAssert.AreEqual()` assertion method from MSTest.
