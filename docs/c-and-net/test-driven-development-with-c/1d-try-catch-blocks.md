---
title: "📓 3.1.1.4- Try/Catch Blocks"
id: 3-1-1-4--trycatch-blocks
hide_table_of_contents: true
day: monday
---

When our application throws an error, the program is **throwing an exception**. Almost every time the compiler throws an error, it uses the term "exception." An **exception** occurs when we execute or interact with a program that results in the program crashing.

**Exception handling** refers to the act of coding a program to handle exceptions in a manner that doesn't lead to the application crashing. When an exception is thrown, we can program our application to "catch" and handle the exception appropriately. We can do this with a **try/catch block**. As we'll see C# try/catch blocks offer the same functionality as try/catch blocks in JavaScript.

## Try/Catch Blocks
---

When an exception is thrown, the CLR (Common Language Runtime) automatically looks for a **catch** statement to handle the exception. If no catch statement is found, the exception is considered **unhandled** and the execution of the program halts. In other words, our program crashes.

We can manually add code to tell our application how to handle exceptions in try/catch blocks. The **try** part is where we put the code that _may_ cause an exception. If everything is fine and no exception is thrown, the application simply moves on. If an exception _is_ thrown, the program will automatically run the code in the **catch** part to handle that exception.

`catch` blocks can take an `Exception` object as a parameter, which can help handle exceptions even more effectively. [The `Exception` class](https://learn.microsoft.com/en-us/dotnet/api/system.exception?view=net-6.0) has a number of useful properties:

* `Message`: a short description of the exception;
* `Source`: the application name;
* `StackTrace`: the path to what caused the exception;
* `TargetSite`: the name of the method where the exception occurred.

Also note that the `Exception` class lives in the `System` namespace, so we'll need to include the using directive `using System;` wherever we use the `Exception` class.

### Example

Let's work through an example of how we could use a try/catch block. Note that the following example is adapted from the [Exception Handling Tutorial on dotnetperls](http://www.dotnetperls.com/exception).

<div class="filename">DivideByZero.cs</div>

```csharp
using System;

class Program
{
  static void Main()
  {
    try
    {
      int value = 1 / int.Parse("0");
    }
    catch (Exception ex)
    {
      Console.WriteLine("Message = {0}", ex.Message);
      Console.WriteLine("Source = {0}", ex.Source);
      Console.WriteLine("StackTrace = {0}", ex.StackTrace);
      Console.WriteLine("TargetSite = {0}", ex.TargetSite);
    }
  }
}
```

* This program is going to _try_ to return the `value` of an integer that's divided by zero. Everything compiles as expected but when we actually try to run the program and divide by zero, an exception is thrown because it isn't possible to divide by zero.

* Normally this exception would halt the program entirely. However, because the code throwing an exception resides in the `try` of our try/catch block, C# will automatically run the code within the `catch` portion in an attempt to gracefully handle the exception.

* The code in `catch` logs details about the exception to the console instead of halting the program entirely. 

Compiling and running this program would result in the following output in the console:

```bash
Message = Attempted to divide by zero.
Source = DivideByZero
StackTrace =    at Program.Main()
TargetSite = Void Main()
```

So even though our code has an exception in it, we've successfully handled it in our try/catch block!

### A Note on Composite Formatting

Notice how we pass in two arguments to each `Console.WriteLine()` method call, like this:

```csharp
Console.WriteLine("StackTrace = {0}", ex.StackTrace);
```

The second argument `ex.StackTrace` supplies the value for `{0}` within the first argument's string. This is called a **composite format string**, in which we include **format items** in a string whose values get evaluated and set by an additional argument. Let's see another example:

```csharp
string name = "Stacey";
string age = "12";
Console.WriteLine("Name = {0}, Age = {1}", name, age);
```

Try out the above code in the `dotnet-script` REPL if you like! 

In the above code we have a string with format items: `"Name = {0}, Age = {1}"`. The format items are `{0}` and `{1}` and will be replaced by the next two arguments that are passed into the `Console.WriteLine()` method, `name` and `age`.

To learn other ways to use composite format strings, visit [the MS docs](https://learn.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting)!

### Another Try/Catch Example

We now have a sense of how try/catch blocks work, so let's see how we can use try/catch within the Shape Tracker console app. 

Right now, we can get an unhandled exception if a user does NOT put in numbers when our program requests three sides. Check it out:

```
*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
Welcome to the Shape Tracker app!
We'll calculate what type of triangle you have based off of the lengths of the triangle's 3 sides.
Please enter a number:
a
Enter another number:
f
Enter a third number:
g
Unhandled exception. System.FormatException: Input string was not in a correct format.
   at System.Number.ThrowOverflowOrFormatException(ParsingStatus status, TypeCode type)    
   at System.Int32.Parse(String s)
   at ShapeTracker.Program.Main() in C:\Users\brook\Desktop\csharp-sect-1\shp\8\private-ver2-shapetracker\ShapeTracker\Program.cs:line 19
```

The above unhandled exception is generated when we try to parse the `string` user input into `int` with the `int.Parse()` static method. This makes sense — we can't parse `"a"` or `"g"` into a number!!

So let's see how a try/catch block can add the right error handling in this situation:

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
using System;
using ShapeTracker.Models;

namespace ShapeTracker
{
  class Program
  {
    static void Main()
    {
      Console.WriteLine("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*");
      Console.WriteLine("Welcome to the Shape Tracker app!");
      Console.WriteLine("We'll calculate what type of triangle you have based off of the lengths of the triangle's 3 sides.");
      Console.WriteLine("Please enter a number:");
      string stringNumber1 = Console.ReadLine();  
      Console.WriteLine("Enter another number:");
      string stringNumber2 = Console.ReadLine();  
      Console.WriteLine("Enter a third number:");
      string stringNumber3 = Console.ReadLine();  
      try
      {
        int length1 = int.Parse(stringNumber1);  
        int length2 = int.Parse(stringNumber2);  
        int length3 = int.Parse(stringNumber3);
        Triangle tri = new Triangle(length1, length2, length3);
        ConfirmOrEditTriangle(tri);  
      }
      catch
      {
        Console.WriteLine("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        Console.WriteLine("ERROR: Please only enter in numbers! Special symbols and alphabetic characters will not be accepted.");
        Console.WriteLine("Please try again...");
        Main();
      }
    }

    ... // other code omitted for brevity!
  }
}
```

We've added the code that could throw an unhandled exception within a `try` block. 

If our code works as expected, like when a user only enters strings with a number like `"3"` or `"5000"`, those strings will be parsed correctly and our application's logic will continue creating a new `Triangle` instance and calling the `ConfirmOrEditTriangle()` method.

If our code fails, like when a user enters anything other than a string with a number in it, like `"s"`, then the `catch` block will be run. Within our catch block, we let the user know what went wrong and we call `Main()` again to start the program over. 

Notice that we don't use the `Exception` class within the catch block. Well, you don't have to! You should always do what makes sense for your app, and sometimes we can write more human-understandable error messages than the compiler generates. 

If we did want to incorporate the runtime error message, we could do something like this:

<div class="filename">ShapeTracker/Models/Triangle.cs</div>

```csharp
using System;
using ShapeTracker.Models;

namespace ShapeTracker
{
  class Program
  {
    static void Main()
    {
      Console.WriteLine("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*");
      Console.WriteLine("Welcome to the Shape Tracker app!");
      Console.WriteLine("We'll calculate what type of triangle you have based off of the lengths of the triangle's 3 sides.");
      Console.WriteLine("Please enter a number:");
      string stringNumber1 = Console.ReadLine();  
      Console.WriteLine("Enter another number:");
      string stringNumber2 = Console.ReadLine();  
      Console.WriteLine("Enter a third number:");
      string stringNumber3 = Console.ReadLine();  
      try
      {
        int length1 = int.Parse(stringNumber1);  
        int length2 = int.Parse(stringNumber2);  
        int length3 = int.Parse(stringNumber3);
        Triangle tri = new Triangle(length1, length2, length3);
        ConfirmOrEditTriangle(tri);  
      }
      catch (Exception ex)
      {
        Console.WriteLine("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        Console.WriteLine("ERROR: {0}", ex.Message);
        Console.WriteLine("Please only enter in numbers! Special symbols and alphabetic characters will not be accepted.");
        Console.WriteLine("Please try again...");
        Main();
      }
    }

    ... // other code omitted for brevity!
  }
}
```

