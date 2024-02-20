---
title: "\U0001F4D3 3.0.0.28 Creating a User Interface for a Console App"
id: 30028-creating-a-user-interface-for-a-console-app
slug: 30028-creating-a-user-interface-for-a-console-app
hide_table_of_contents: true
sidebar_position: 10
day: weekend
type: lesson
url: https://github.com/fidgetech/c-and-net/blob/main/0j_console_app_user_interface.md
---

All of the user interface logic we've written in `Program.cs` so far has been to practice the business logic we created in `Triangle.cs`, and not to create an interactive console application that a user can run and interact with through text commands. Well, we're now at a point where we've fully developed our business logic and it is time to fully develop our UI logic. 

In the process of creating our UI logic, we'll learn how to break up our UI logic into reusable methods and how to create a flow in our program through branching. We'll also apply a lot of C# basics we practiced with in the previous pre-work section. The concepts and tools we learn in this lesson can be applied to any project you create.

## Plan for the Shape Tracker UI
---

The UI we create for our Shape Tracker app depends on what functionality we have in our business logic models. The Shape Tracker app is meant to provide helpful functions to users to calculate interesting properties of shapes, like calculating the type of triangle or the area of a rectangle. 

Right now, we have one `Triangle` class with a handful of functionality:

* Creating triangles based on three values for sides.
* Editing the sides of each triangle.
* Seeing all triangles ever created.
* Clearing all triangles ever created. 

This list gives us a clear idea of the UI that we need to create for our users to be able to use all triangle functionality. 

Other than triangle functionality, we'll want our users to be greeted when they start the program, and to be able to exit the program. That adds two more items to our list of UI to create. Here's our final to-do list:

* Greet users at program start.
* Create triangles based on three values for sides.
* Edit the sides of each triangle.
* See all triangles ever created.
* Clear all triangles ever created. 
* End the program.

Here's one word of caution before we get started. **You don't have to follow the process outlined in this lesson when you create your own UIs.** Creating a UI can be more subjective and there's many ways that we can set up application flow. Experimenting is good. Also, it's a helpful practice to put yourself in the shoes of the user — what would they want or expect? Otherwise, having a game plan is always helpful to guide your work. 

## Creating the Shape Tracker UI
---

First things first, let's clear the code that's already in our UI. We'll remove the `using System.Collections.Generic;` directive, and keep the others as-is. `Program.cs` should now look like this:

<div class="filename">Program.cs</div>

```csharp
using System;
using ShapeTracker.Models;

namespace ShapeTracker
{
  class Program
  {
    static void Main()
    {
      
    }
  }
}
```

### A Greeting

Next, let's create a greeting:

<div class="filename">Program.cs</div>

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
    }
  }
}
```

So far so good!

### Creating Triangles

Next, let's add the ability for users to create a triangle:

<div class="filename">Program.cs</div>

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
      int length1 = int.Parse(stringNumber1);  
      int length2 = int.Parse(stringNumber2);  
      int length3 = int.Parse(stringNumber3);  
      Triangle tri = new Triangle(length1, length2, length3);
    }
  }
}
```

Notice that we have a series of `Console.WriteLine()` statements to instructor our user on what information we want and to prompt them to enter the information into the terminal. For example, `Console.WriteLine("Please enter a number:");`.

Also notice that every time we ask the user to input information into the terminal we use `Console.ReadLine()` to gather that information. For example, `string stringNumber1 = Console.ReadLine();`.

We make a point to **avoid a common data type error** by parsing the user input into integers. That's what we're doing with code like `int length1 = int.Parse(stringNumber1);`. The `Console.ReadLine()` method always returns a string, so if we want to work with any other data type like an integer or bool, we need to intentionally parse the string into the data type that we want.

If we do NOT parse the string into an int in the above code, we'll get a compiler error:

<pre>
<code style="color:red">
/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/Program.cs(23,35): error CS1503: Argument 1: cannot convert from 'string' to 'int' [/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/ShapeTracker.csproj]
</code>
</pre>

Finally, in the last line of new code in the `Main()` method, we actually create a new triangle object with the user's inputted numbers. 

If we run our program now, we'll be prompted for three numbers, and then the program will automatically end. That's typical behavior for console apps — if there's nothing else to run, the program will simply end.

### Creating a New UI Method for Edit Functionality

At this point, we've done two things: greeted our user and created a triangle based off of their input. The next thing we'll tackle is letting users edit the triangle they just created. But should we keep expanding our `Main()` method with more code? No, it's time to add a new UI method.

Any new method we create in our `Program` class (that contains our UI logic) should be static. We don't want to have to create an instance of the `Program` class in order to call the method. 

Let's start by creating the basics of our method and calling it. Here's how we'll update `Program.cs`:

<div class="filename">Program.cs</div>

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
      int length1 = int.Parse(stringNumber1);  
      int length2 = int.Parse(stringNumber2);  
      int length3 = int.Parse(stringNumber3);  
      Triangle tri = new Triangle(length1, length2, length3);
      // new method call below!
      ConfirmOrEditTriangle(tri);
    }

    static void ConfirmOrEditTriangle(Triangle tri)
    {
      // code to confirm or edit our triangle will go here.
    }
  }
}
```

We've added a new method called `ConfirmOrEditTriangle()`. Notice that this method is `static` and `void`, as it won't return anything (we'll see why soon). This method also has one parameter called `tri`, so we need to pass in a triangle object when we call this method. 

We're already calling our new method in the above code. Look for the new line at the bottom of the `Main()` method: 

```csharp
ConfirmOrEditTriangle(tri);
```

We're passing in the triangle object `tri` that we just created in `Main()` to the new method `ConfirmOrEditTriangle()`. This allows us to use and manipulate the same data, even though our logic is separated into multiple methods. 

**Take note that it's required for UI methods to be static**, but the return type and whether or not we have parameters should be whatever makes sense for our application's needs. Our UI methods need to be static so that we don't have to create an instance of the `Program` class before calling any of them. Instead, as a static method, we can call on the method directly, anywhere within our class. 

Note that we can omit the class name when calling a static member within the class it belongs to. For example, calling `ConfirmOrEditTriangle(tri)` (without the class name) is the same as calling `Program.ConfirmOrEditTriangle(tri)` (with the class name). 

### Building Out Edit Functionality

Let's continue building out our edit functionality. In the `ConfirmOrEditTriangle()` method, we're going to do a couple of things:

* Display the values for each triangle's side and ask the user if they inputted the correct values, and gather their response.
* We'll evaluate the user's response:
  * If the triangle's sides are correct, we'll move on to checking the type of the triangle.
  * If the triangle's sides are incorrect, we'll gather new values for the triangle's side, and then start the confirmation process all over.

Let's start just with prompting the user to confirm their triangle's sides:

<div class="filename">Program.cs</div>

```csharp
using System;
using ShapeTracker.Models;

namespace ShapeTracker
{
  class Program
  {
    static void Main()
    {
      ... // omitted code
      ConfirmOrEditTriangle(tri);
    }

    static void ConfirmOrEditTriangle(Triangle tri)
    {
      Console.WriteLine("Please confirm that you entered in your triangle correctly:");
      Console.WriteLine($"Side 1 has a length of {tri.GetSide1()}.");
      Console.WriteLine($"Side 2 has a length of {tri.GetSide2()}.");
      Console.WriteLine($"Side 3 has a length of {tri.GetSide3()}.");
      Console.WriteLine("Is that correct? Enter 'yes' to proceed, or 'no' to re-enter the triangle's sides");
      string userInput = Console.ReadLine();  
    }
  }
}
```

Notice that we ask the user to input specifically "yes" or "no" into the terminal. We could have put anything in here (like "1" or "2", or "y" or "n"), but when we ask the user to enter in one of a selection of choices, we can then use those selections to create branching logic. 

In this case, if `userInput` is equal to `"yes"`, then we'll move on to checking the triangle's type. If `userInput` is equal to `"no"`, then we'll edit the triangle again.

Let's add the branching:

<div class="filename">Program.cs</div>

```csharp
using System;
using ShapeTracker.Models;

namespace ShapeTracker
{
  class Program
  {
    static void Main()
    {
      ... // omitted code
      ConfirmOrEditTriangle(tri);
    }

    static void ConfirmOrEditTriangle(Triangle tri)
    {
      Console.WriteLine("Please confirm that you entered in your triangle correctly:");
      Console.WriteLine($"Side 1 has a length of {tri.GetSide1()}.");
      Console.WriteLine($"Side 2 has a length of {tri.GetSide2()}.");
      Console.WriteLine($"Side 3 has a length of {tri.GetSide3()}.");
      Console.WriteLine("Is that correct? Enter 'yes' to proceed, or 'no' to re-enter the triangle's sides");
      string userInput = Console.ReadLine();  
      if (userInput == "yes")
      {
        // We have not created the CheckTriangleType() UI method yet.
        CheckTriangleType(tri);
      }
      else
      {
        Console.WriteLine("Let's fix your triangle. Please enter the 3 sides again!");
        Console.WriteLine("Please enter a number:");
        string stringNumber1 = Console.ReadLine();  
        Console.WriteLine("Enter another number:");
        string stringNumber2 = Console.ReadLine();  
        Console.WriteLine("Enter a third number:");
        string stringNumber3 = Console.ReadLine();  
        tri.SetSide1(int.Parse(stringNumber1));  
        tri.SetSide2(int.Parse(stringNumber2));  
        tri.SetSide3(int.Parse(stringNumber3)); 
        ConfirmOrEditTriangle(tri);
      }
    }
  }
}
```

In the `if` statement, we check if `userInput == "yes"`, and if so, then we call `CheckTriangleType(tri)` to check the type of the triangle (ie: isosceles). 

Note that we haven't created the `CheckTriangleType()` method yet! While we could add the code here to check the type of the triangle, we wouldn't be practicing good **separation of concerns**. Since edit functionality is different from triangle type checking functionality, it's best to separate them into different methods. For now we'll leave `CheckTriangleType(tri)` as a placeholder method call for a new UI method that we'll create momentarily. 

If the `if` statement evaluates to false, that means the user input "no", and the `else` statement is run. Notice that the user could input literally anything other than `"yes"` and the `else` statement will run. You can use this to your advantage... or it could lead to unexpected bugs, so be careful!

One important piece to notice in the `else` statement is the looping we set up: at the very end of the `else` statement, after we gather new triangle values, we call `ConfirmOrEditTriangle()` again. With this code in place, it means that we'll be prompted again and again to confirm that our triangle's sides are correct until they actually are! In other words, the only way to leave the `ConfirmOrEditTriangle()` method is to verify that the triangle is correct by entering "yes".

In any case, keep in mind that you can create a loop by calling on the same method you are declaring within its own definition (eg: calling `ConfirmOrEditTriangle()` within the `ConfirmOrEditTriangle()` definition). 

Next, let's create the `CheckTriangleType()` method.

### Checking the Type of the Triangle

Let's create the `CheckTriangleType()` method next. Note that we're already calling this method from within the `ConfirmOrEditTriangle()` method and passing in our triangle instance `tri`.

Here's how we'll update `Program.cs`:

<div class="filename">Program.cs</div>

```csharp
using System;
using ShapeTracker.Models;

namespace ShapeTracker
{
  class Program
  {
    static void Main()
    {
      ... // omitted code
      ConfirmOrEditTriangle(tri);
    }

    static void ConfirmOrEditTriangle(Triangle tri)
    {
      ... // omitted code
      
      if (userInput == "yes")
      {
        CheckTriangleType(tri);
      }
      else
      {
        ... // omitted code
        ConfirmOrEditTriangle(tri);
      }
    }  

    static void CheckTriangleType(Triangle tri)
    {
      string result = tri.CheckType();
      Console.WriteLine("-----------------------------------------");
      Console.WriteLine("Your result is: " + result + ".");
      Console.WriteLine("-----------------------------------------");
    }
  }
}
```

Like other UI methods, the `CheckTriangleType()` method is static so that we can call it on the class and not an instance. This is important for the method to work as expected. 

Otherwise the `CheckTriangleType()` returns nothing and accepts a triangle object as an argument. This is just like the `ConfirmOrEditTriangle()` method.

What do we do in the method body? We call on the `Triangle.CheckType()` instance method to determine the type of triangle. We store the return value in a variable and then print it to the terminal. The dashes `------` that we print to the terminal simply create a visual separation to highlight the result. You can use whatever sort of text to create visual separations.

### Looping to the Beginning and Saying Goodbye

So, what's next? We still need to add functionality to display all triangles as well as clear all triangles. It would also be nice to give our users the ability to continually create and check the type of new triangles until they decide they are done. 

So how do we do this? Well, right now our application's flow ends in the `CheckTriangleType()` UI method, so if we're going to add in any additional functionality, we need to start there. We can prompt the user to consider what they want to do next, and give them a selection. Right now, let's offer to the user to create a new triangle or to exit the program. 

Here's how we'll update the `CheckTriangleType()` method:

Here's how we'll update `Program.cs`:

<div class="filename">Program.cs</div>

```csharp
using System;
using ShapeTracker.Models;

namespace ShapeTracker
{
  class Program
  {
    static void Main()
    {
      ... // omitted code
    }

    static void ConfirmOrEditTriangle(Triangle tri)
    {
      ... // omitted code
    }  

    static void CheckTriangleType(Triangle tri)
    {
      string result = tri.CheckType();
      Console.WriteLine("-----------------------------------------");
      Console.WriteLine("Your result is: " + result + ".");
      Console.WriteLine("-----------------------------------------");
      Console.WriteLine("What's next?");
      Console.WriteLine("Would you like to check a new triangle (new)?");
      Console.WriteLine("Please enter 'new' to check the type of a new triangle. To exit, enter any key.");
      string userResponse = Console.ReadLine(); 
      if (userResponse == "new" || userResponse == "New")
      {
        Main();
      }
      else
      {
        Console.WriteLine("Goodbye!");
      }
    }
  }
}
```

Much of the code is self-explanatory. Let's work through the new code:

* In the `if` statement, we're using the logical OR `||` to expand the possible allowed answers, which helps to manage errors in user input. In this case even though we're asking for the user to input "new", they might accidentally input "New" with a capitalized first letter. 
* While .NET uses the `Main()` method internally as the entry point to our application, we can also call this method wherever in our UI logic to loop back to the start of our program. That's what we do in the first `if` statement.

## What Else?
---

And with that we've put together a solid console app for our Shape Tracker project! We already noted earlier that our app still doesn't have UI for some of our `Triangle` business logic: printing all triangles or giving the user the option to clear all triangles — that will be your task in the first classwork of this course.

Other than completing the UI, there are other improvement opportunities that we can consider: 

* **Refactoring.** When we refactor our code, we're rewriting it to improve its maintainability, reusability or scalability. An easy way to identify opportunities for refactoring is to look for repeated code that can be put into a method. For example, in the `Main()` and `ConfirmOrEditTriangle()` methods, we repeat code to gather user input for the triangle's sides which we could potentially turn into a method that we can reuse where needed.
* **Error handling.** We can improve our application's error handling for user input. We could add validation for users entering numbers for the sides and not something else. We could also add error handling for when a user does not enter in one of our requested selections (like "yes" or "no").
* **Improve navigation.** We can improve our program's navigation by adding more options to end the program or navigate back to the start of the program. As the complexity of your application grows, there will be more choices as far as how you can set up navigation in your app.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for Shape Tracker: `5_console_user_interface`](https://github.com/epicodus-lessons/prework-shape-tracker-csharp-net6/tree/5_console_user_interface)**