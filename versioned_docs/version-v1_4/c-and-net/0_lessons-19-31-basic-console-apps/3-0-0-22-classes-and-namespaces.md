---
title: "📓 5.0.0.22 Classes and Namespaces"
day: weekend
id: 5-0-0-22-classes-and-namespaces
hide_table_of_contents: true
---

We previously learned that .NET organizes its code into classes and namespaces:

* A **class** is a template for creating objects of a specific type. In this way, a class groups related functionality into one unit (a template or blueprint) that can be used again and again to create a specific type of object.
* A **namespace** is a grouping of related classes based on their importance or function. 

In this lesson, we'll learn how to create our own custom classes and namespaces. 

## Creating and Using the `Triangle` Class
---

We actually already created a basic `Triangle` class in the previous lesson. Let's take another look at it:

<div class="filename">Models/Triangle.cs</div>

```csharp
public class Triangle
{ 
  // Code for Triangle business logic will go here.
}
```

To create a class, we need to do the following:

* Declare a class using the `class` keyword followed by the name of the class in Pascal case, or "UpperCamelCase". Our class is called `Triangle`.
* Include the **access modifier** `public` in order to make our class accessible anywhere within our application. There are other access modifiers than `public`, and we won't always include an access modifier. We'll learn about access modifiers in depth in an upcoming lesson.
* On new lines, we include an opening `{` and closing `}` curly brace. It's within these curly braces that we will later add a constructor, methods, and more!

And that's all that we need to create and use a class, albeit not a very useful class. 

### Creating a New `Triangle` Instance

Let's try using our class in our user interface logic file, `Program.cs`. We'll simply create a new instance of the `Triangle` class and print the object to the console:

<div class="filename">Program.cs</div>

```csharp
using System;

class Program
{
  static void Main()
  {
    Triangle testTriangle = new Triangle();
    Console.WriteLine(testTriangle.GetType());
  }
}
```

We've update `Program.cs` in a few ways:

* We've added a using directive for `System` in order to access the `Console` library so we can write to the terminal.
* We've created a new instance of the Triangle class with `Triangle testTriangle = new Triangle();`. This should look similar to JavaScript classes as well as using C# lists and dictionaries:
  * We start by creating a variable: `Triangle testTriangle`.
  * We then use the assignment operator `=` to set the `testTriangle` variable to a new `Triangle` object which we create using the `new` keyword and by invoking the `Triangle()` constructor method.
* We get and print the type of the `testTriangle` variable to the terminal using `Console.WriteLine()`.  

**Notice that we do not need to create a constructor in our class in order to have access to a constructor method.** That is because a constructor method is automatically created anytime you create a new class. Later, we'll learn how to customize class constructor methods.

### Compiling and Executing the App

We can compile and execute our console app by running the following command within the `ShapeTracker/` project directory:

```
$ dotnet run
```

We should see the name of our class output in the terminal:

```
Triangle
```

That's not very exciting, but this does confirm that our `Triangle` class is working and we've successfully created an instance of it.

Remember that the `dotnet run` command both compiles and runs our project. If we only want to compile our project, we would use the command `dotnet build`.

### Compiler Errors

Keep in mind that we need to include a semicolon after every statement and "using" directive within our C# code files.

For example, if we remove the semicolon from the end of `Console.WriteLine(testTriangle)` in `Program.cs`, we'll get a loud red error in our terminal stating the following:

<pre>
<code style="color:red">
/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/Program.cs(7,36): error CS1002: ; expected [/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/ShapeTracker.csproj]

The build failed. Fix the build errors and run again.
</code>
</pre>

Try it out!

This type of error is called a **compiler error**, which is an error generated when our code is being compiled. Compiler errors break our code so they need to be fixed before we can successfully run our apps.

## Creating and Using Namespaces
---

Right now we have two classes in our application: 

* `Program`, which contains our user interface code, like the `Main()` method.
* `Triangle`, which contains business logic for `Triangle` objects.

With only two classes, it may not seem like it makes sense to group these into namespaces, but it is actually a best practice to intentionally set up namespaces from the start of every program. 

We'll use two namespaces in our Shape Tracker app, one for our business logic and another for our user interface (UI) logic. With these namespaces in place, if we add more user interface or business logic files later, we can group them into their appropriate namespace.

### Adding a Namespace for UI Logic

Let's add a namespace to `Program.cs`, the only code file we have so far for user interface logic.

<div class="filename">Program.cs</div>

```csharp
using System;

namespace ShapeTracker
{
  class Program
  {
    static void Main()
    {
      Triangle testTriangle = new Triangle();
      Console.WriteLine(testTriangle.GetType());
    }
  }
}
```

Creating a namespace is similar to creating a class:

* We use the `namespace` keyword to declare a namespace followed by the name of the namespace in Pascal case, or "UpperCamelCase". 
* On new lines, we include an opening `{` and closing `}` curly brace. It's within these curly braces that we add the class(es) that we want included in the namespace.

As far as conventions go:

* It's common to name all namespaces in a project starting with the name of the project or company.
* It's common for the **entry point** of the application to have a namespace name that is just the name of the project or company.
* When .NET compiles, it locates the entry point of our application by the method name `Main()` and the fact that it is a `static` method. So we don't have to worry about our namespace or class name affecting the compiler's ability to locate the `Main()` method.

### Adding a Namespace for Business Logic

Next, let's create a namespace for our business logic file, `Triangle.cs`:

<div class="filename">Models/Triangle.cs</div>

```csharp
namespace ShapeTracker.Models
{
  public class Triangle
  {
    
  }
}
```

We're naming this namespace `ShapeTracker.Models` because it will hold all of the classes that contain our business logic. Why not `ShapeTracker.BusinessLogic`? The name **models** is the standard name in C# to describe "business logic". 

We're seeing new conventions with the namespace name `ShapeTracker.Models`, so let's review those now:

* We can give a namespace multiple names, separated by a period `.`. In this case we're using two names, the name of our project, `ShapeTracker`, and the name of a component within our project, `Models`, to create one namespace: `ShapeTracker.Models`.
* A **component** is one aspect of our project. Our two components are user interface and business logic, two basic groupings we can organize our code with; however, we could identify components in other ways.

In summary, with the namespace `ShapeTracker.Models`, we're seeing another very common convention in namespace naming: start with the name of the project or company and then add the name of the component or feature that the namespace groups.

To read more about naming namespaces, visit the [MS docs](https://learn.microsoft.com/en-us/dotnet/standard/design-guidelines/names-of-namespaces).

### We Access Classes through their Namespace

Let's re-run our console app now that we have our two new namespaces in place. Run the following command within the `ShapeTracker/` project directory:

```
$ dotnet run
```

Uh-oh... we're getting compiler errors!

<pre>
<code style="color:red">
/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/Program.cs(10,7): error CS0246: The type or namespace name 'Triangle' could not be found (are you missing a using directive or an assembly reference?) [/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/test.csproj]
/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/Program.cs(10,35): error CS0246: The type or namespace name 'Triangle' could not be found (are you missing a using directive or an assembly reference?) [/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/test.csproj]

The build failed. Fix the build errors and run again.
</code>
</pre>

We're actually getting the same error twice: once for each time we reference the `Triangle` type in `Program.cs`:

```csharp
Triangle testTriangle = new Triangle();
```

What this error message is telling us is that the compiler cannot locate our `Triangle` class. Can you guess why this might be? 

It's because the `Triangle` class doesn't exist anymore. Instead we have a `ShapeTracker.Models.Triangle` class. As we can see, when we add a class to a namespace, the name of our class is updated to include the namespace.

Let's fix the compiler errors. Here's how we'll update `Program.cs`:

<div class="filename">Program.cs</div>

```csharp
using System;

namespace ShapeTracker
{
  class Program
  {
    static void Main()
    {
      ShapeTracker.Models.Triangle testTriangle = new ShapeTracker.Models.Triangle();
      Console.WriteLine(testTriangle.GetType());
    }
  }
}
```

Now if we run our app, our compiler errors will be resolved. We'll see that even the value of `testTriangle` has updated to show both its namespace and class name:

```
ShapeTracker.Models.Triangle
```

Typing out `ShapeTracker.Models.Triangle` every time we need to reference the `Triangle` class is going to get tedious fast, so let's update `Program.cs` with a new using directive for `ShapeTracker.Models`:

<div class="filename">Program.cs</div>

```csharp
using System;
using ShapeTracker.Models;  // new directive

namespace ShapeTracker
{
  class Program
  {
    static void Main()
    {
      Triangle testTriangle = new Triangle(); // updated code
      Console.WriteLine(testTriangle.GetType());
    }
  }
}
```

That's better. Now if we run our app, we'll still get the same value as before: `ShapeTracker.Models.Triangle`. 

## Takeaways
---

Namespaces and classes allow us to group and organize our code. 

It's important to set up namespaces from the start of your application, even if you won't have that many files and classes. This ensures that we are being intentional with our code organization and writing code that can scale easily. In the example projects we create, we will create a namespace for UI logic and another for business logic. 

Namespaces and classes are declared in a similar way, using a `namespace` or `class` keyword. Classes are always nested inside of namespaces.

Once we add a class to a namespace, we need to access that class via the namespace. This is just like we saw with the `Triangle` class after we added it to the `ShapeTracker.Models` namespace: we needed to access `ShapeTracker.Models.Triangle` instead of just `Triangle`.

Now that we have two namespaces declared in our Shape Tracker app, we can do more with them:

* We can add more classes to each namespace, either in the same file or in another file. Whether we do this depends on our project. For example, if we added a `Rectangle` class to our Shape Tracker app, then we'd create a new `Rectangle.cs` file, with a new `Rectangle` class inside of the `ShapeTracker.Models` namespace. We'll see what this looks like later on.
* We can also create namespaces within this namespace, but we won't ever get into that sort of nesting in the projects we create in the program.
* If two classes are in the same namespace, they will 'know' about each other and be in the same **scope**. 

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a the default branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for Shape Tracker: `1_basic_console_app_structure`](https://github.com/epicodus-lessons/prework-shape-tracker-csharp-net6)**
