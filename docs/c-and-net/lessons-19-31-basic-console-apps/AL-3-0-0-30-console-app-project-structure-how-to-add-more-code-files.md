---
title: "📓 3.0.0.30 Console App Project Structure: How to Add More Code Files"
id: 3-0-0-30-console-app-project-structure-how-to-add-more-code-files
hide_table_of_contents: true
day: weekend
---

In this lesson, we'll go over how to add more code files to our Shape Tracker project, and what namespaces we might add them to. We'll also learn that classes in the same namespace are in the same **scope** and therefore have access to each other without the need of a using directive.

## Adding More Business Logic Files 
---

Let's say we want to expand our Shape Tracker project to add a class for `Ellipse` (which includes circles) and `Rectangle` (which includes squares). We might add functionality that will allow users to calculate the area of an ellipse or rectangle, but we're not concerned about those details right now. The big question is where should we add those classes? A straightforward rule to follow is to create separate files for each new class, such that our project structure looks like this:

```
ShapeTracker.Solution/
  ├── ShapeTracker/
  │     ├── Models/
  |     |     ├── Ellipse.cs
  |     |     ├── Rectangle.cs
  │     │     └── Triangle.cs
  │     ├── ShapeTracker.csproj
  │     └── Program.cs
  ├── .gitignore
  └── README.md
```

Since each of these classes are a part of our Shape Tracker models, we should also add each new class to the `ShapeTracker.Models` namespace:

<div class="filename">Models/Ellipse.cs</div>

```csharp
namespace ShapeTracker.Models
{
  public class Ellipse
  {
    // Ellipse code here.
  }
}
```

<div class="filename">Models/Rectangle.cs</div>

```csharp
namespace ShapeTracker.Models
{
  public class Rectangle
  {
    // Rectangle code here.
  }
}
```

As we can see in the above example, we can reuse existing namespaces in new files to add new classes to that namespace. All classes declared in the same namespace will 'know' about each other and be in the same **scope**. For example, this means we don't have to include a using directive for `ShapeTracker.Models` in order to use `Triangle` logic within our `Rectangle` class (even though there's not a good reason to do this anyways). Similarly, we don't need to include a brand new using directive in `Program.cs` to start using the `Ellipse` or `Rectangle` classes. 

Another organization we could follow is adding all of our Shape Tracker models to one file. In this case, we could create a `Shapes.cs` and add the `Triangle`, `Rectangle`, and `Ellipse` classes within it. The project structure would look like this:

```
ShapeTracker.Solution/
  ├── ShapeTracker/
  │     ├── Models/
  │     │     └── Shapes.cs
  │     ├── ShapeTracker.csproj
  │     └── Program.cs
  ├── .gitignore
  └── README.md
```

Take note that the **naming convention** for files that contain multiple classes is to give the file a plural name, like `Shapes.cs`, and not `Shape.cs`.

And `Shapes.cs` would look like this (with some code omitted for brevity):

<div class="filename">Models/Shapes.cs</div>

```csharp
namespace ShapeTracker.Models
{
  public class Rectangle
  {
    // Rectangle code here.
  }

  public class Ellipse
  {
    // Ellipse code here.
  }

  public class Triangle
  {
    // Triangle code here.
  }
}
```

In the example projects in the C# .NET course, we'll usually have one class per file. That's because it's more descriptive — as in, `Ellipse` class logic is found in `Ellipse.cs` — and individual files have less code in them. Because of these reasons, for the Shape Tracker app, I think it makes more sense to put each shape class within individual files. While there's no hard and fast rule for how you organize classes into files, you always want to make sure the choice you are making leads to source code that is descriptive and easy to navigate. 

## Adding More UI Logic Files 
---

For the console app projects we create in this course section, we'll likely be fine to put all UI logic in the `Program` class (separated into multiple methods) within `Program.cs`. However, if you end up creating a more complex UI logic in your console app, you may want to separate your UI into helper classes within multiple files to better keep your logic organized. A structure like that may look like this:

```
ShapeTracker.Solution/
  ├── ShapeTracker/
  │     ├── Models/
  |     |     ├── Ellipse.cs
  |     |     ├── Rectangle.cs
  │     │     └── Triangle.cs
  |     ├── UserInterfaceModels/
  |     |     └── Banners.cs
  │     ├── ShapeTracker.csproj
  │     └── Program.cs
  ├── .gitignore
  └── README.md
```

We've created a new folder called `UserInterfaceModels/` within the `ShapeTracker/` directory. 

Notice that `Program.cs` is not inside the new `UserInterfaceModels/` directory — that's because it's best practice to leave `Program.cs` in the root of the production/project directory since it is the entry point to our application.

Within `UserInterfaceModels/` we have a made-up file called `Banner.cs` that will contain multiple classes within it, each of which has a static property that stores different banners:

<div class="filename">UserInterfaceModels/Banners.cs</div>

```csharp
namespace ShapeTracker.UserInterfaceModels
{
  class WelcomeBanner
  {
    public static string Welcome { get; } = @"
  #####                                #######                                           
 #     # #    #   ##   #####  ######      #    #####    ##    ####  #    # ###### #####  
 #       #    #  #  #  #    # #           #    #    #  #  #  #    # #   #  #      #    # 
  #####  ###### #    # #    # #####       #    #    # #    # #      ####   #####  #    # 
       # #    # ###### #####  #           #    #####  ###### #      #  #   #      #####  
 #     # #    # #    # #      #           #    #   #  #    # #    # #   #  #      #   #  
  #####  #    # #    # #      ######      #    #    # #    #  ####  #    # ###### #    # 
                                                                                         ";
  }

  class GoodbyeBanner
  {
    // GoodbyeBanner code here.
  }

  class SubMenuBanner
  {
    // SubMenuBanner code here.
  }
}
```

First note that we're using a new namespace: `ShapeTracker.UserInterfaceModels`. That means if we want to use any class within the `Banners.cs` file in `Program.cs`, we'll need to add a new using directive: `using ShapeTracker.UserInterfaceModels;`.

Why not add the classes within `Banner.cs` to the namespace `ShapeTracker`, which contains the `Program` class and our project's entry point? Well, it would actually be fine to use the `ShapeTracker` namespace in `Banner.cs`. 

In this example of growing our application's source code, we've opted to use three namespaces because it creates a clearer separation of source code:

* `ShapeTracker.Models` for our business logic (everything in the `Models/` directory).
* `ShapeTracker` for our program's entry point in `Program.cs`.
* `ShapeTracker.UserInterfaceModels` for our additional UI logic models (everything in the `UserInterfaceModels/` directory).

However, you might prefer to keep the namespaces simple, and just go for two: one for the UI logic and the other for business logic. This organizational decision is yours. The baseline requirement is that you organize your code into namespaces so that your code is scalable.

Finally, note that we are not including the `public` access modifier on the `WelcomeBanner`, `GoodbyeBanner`, and `SubMenuBanner` classes. That means each of these classes will default to the access modifier of `internal`, which means that these classes are available publicly within this assembly, but not outside of the assembly. Why does this matter? The short answer is that we won't be testing our user interface logic, so this code only needs to be accessible within the `ShapeTracker` folder. The long answer is that `ShapeTracker` is one assembly, and when we write tests, we'll be creating a separate assembly; so any Shape Tracker code that we want accessible to our testing folder will need to have the `public` access modifier. We'll revisit this topic when we start writing tests.

### Verbatim String Literals

Before we move on, check out the above code snippet for `Banner.cs` again. Take note of the `@` symbol in front of the string that contains the `Welcome` banner. 

The `@` symbol defines a **verbatim string literal**, which prints the string as-is, without changing formatting or evaluating any escape sequences. An example **escape sequence** is when we include `\n` within a string to momentarily escape the string, create a new line, and then go back to evaluating the string. Here's an example using the `dotnet-script` REPL:

```csharp
> Console.WriteLine("Hello\nWorld");
Hello
World
> Console.WriteLine(@"Hello\nWorld");
Hello\nWorld
```

### Ascii Banners

Ascii text banners are a very cool way to decorate your console apps and create distinct sections within your UI. There's a lot of ascii text generators out there. [Here's one](https://manytools.org/hacker-tools/ascii-banner/) you can use in the projects you create.

## Summary
---

Organizing code in C# is much the same as it is in JavaScript: we want to separate code by concern and use descriptive names. The big difference between the two languages is that C# has namespaces that we can use to further group code, beyond classes, files, and directories. 

For namespaces, keep in mind two things:

* We can reuse the same namespace across multiple files.
* When classes are in the same namespace, they are in the same scope and automatically have access to each other.
