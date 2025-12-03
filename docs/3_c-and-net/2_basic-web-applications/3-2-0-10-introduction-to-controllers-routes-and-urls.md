---
title: "📓 3.2.0.10 Introduction to Controllers, Routes and URLs"
day: weekend
id: 3-2-0-10-introduction-to-controllers-routes-and-urls
hide_table_of_contents: true
---

Now that we can successfully run a project, we're ready to start building our application out further. We'll start by adding a new **controller** file. This file's job is to receive the requests a user will send the server and return the correct corresponding information to display in the browser.

## Writing a Controller
---

If you followed along with the previous lessons, you already have a subdirectory called `Controllers` within the production directory `FriendLetter`. If not, add one now. Having a `Controllers` subdirectory is standard convention within Model-View-Controller (MVC) frameworks. We'll add a file called `HomeController.cs` to within the `Controllers` subdirectory.

The resulting structure for our `Controllers` directory and `HomeController` file should look like this:

<pre>
FriendLetter.Solution
└── FriendLetter
    └── Controllers
        └── HomeController.cs
</pre>

Let's add code to our new controller file:

<div class="filename">FriendLetter/Controllers/HomeController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;

namespace FriendLetter.Controllers
{
  public class HomeController : Controller
  {

  }
}
```

We add a `using` statement that imports functionality from the ASP.NET Core MVC package listed in our `.csproj` file. This line imports the `Microsoft.AspNetCore.Mvc` namespace into our controller, so we have access to ASP.NET Core's built in `Controller` class. We'll see _why_ we need access in just a moment.

Then we add a `FriendLetter.Controllers` namespace with a class called `HomeController` inside of it. 

Notice this syntax:

```cs
class HomeController : Controller
```

By adding `: Controller` to our `HomeController` class, we tell our program that `HomeController` should **inherit** or **extend** functionality from ASP.NET Core's built-in `Controller` class that we import with our `using` statement.

## Routes
---

Let's add a route to our new `HomeController` class.

<div class="filename">FriendLetter/Controllers/HomeController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;

namespace FriendLetter.Controllers
{
  public class HomeController : Controller
  {

    public string Hello() { return "Hello friend!"; }

  }
}
```

The `Hello()` method represents a **route** in our application. As we discussed in the [Uniform Resource Locators (URLS)](../../c-and-net/basic-web-applications/3-2-0-3-how-the-web-works-uniform-resource-locator) lesson:

> The **path** consists of one or more segments separated by slashes. It provides a name for identifying the specific resource requested.

For instance, we can see all courses on LearnHowToProgram.com by visiting this URL:

```
https://old.learnhowtoprogram.com/courses
```

In this example, `/courses` is the **path**. 

How does this relate to our `Hello()` method? Because the `Hello()` method is a **route**, it will create a special path, or **pattern**, in our application. If we were to host this application at _old.learnhowtoprogram.com_, we'd have the following route because of the `Hello()` method in our `Home` controller:

```
old.learnhowtoprogram.com/home/hello
```

The **path** is the portion appended to the end of the homepage URL:

<pre>
/home/hello
</pre>

* The first part of the path `/home` corresponds to the name of our controller `HomeController`.

* The second part `/hello` corresponds to the name of our route method `Hello()`.

* If we were to host our application at _old.learnhowtoprogram.com_, the `Hello()` method in `HomeController` will run when a user navigates to _old.learnhowtoprogram.com/home/hello_.

* If we revisit our `/home/hello` route, we see it returns the string `"Hello friend!"`. This is called the **action**, because it defines what the site will do when a client requests this particular **path**.

## Invoking Routes
---

We can launch our application by running `dotnet run` in the production directory of our project: `FriendLetter.Solution/FriendLetter`. If the project doesn't have `obj` and `bin` subdirectories, these will be created in the process of running the app with `dotnet run`, since that command restores and builds the project before running it.

Now we can navigate to the following URL in the browser:

```
http://localhost:5000/home/hello
```

The message `"Hello friend!"` will appear. Let's discuss exactly what's happening here.

* When a **client** like a web browser makes a **request** to our server, it must include the URL it's requesting. In the example above, the URL contains a `/home/hello` **path**.

* Our server looks at the `HomeController` because it matches the first `/home` portion of the URL path.

* In order to find the more specific `/home/hello` data, our server looks for a `Hello()` method in the `HomeController`.

* The server provides our client with a **response**. In this case, our `Hello()` method returns the string `"Hello friend!"`.

* Our client receives the response and renders the resources in the browser. We see `"Hello friend!"` appear on the page.

## More Routes
---

Let’s add another route to a page that says `"Goodbye friend!"`. Open `HomeController.cs` and add the following:

<div class="filename">FriendLetter/Controllers/HomeController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;

namespace FriendLetter.Controllers
{
  public class HomeController : Controller
  {

    public string Hello() { return "Hello friend!"; }

    public string Goodbye() { return "Goodbye friend."; }

  }
}
```

Now we can navigate to:

```
localhost:5000/home/goodbye
```

This time we should see `"Goodbye friend."`

In the next lesson, we'll discuss how to further customize the URL paths that match up with specific routes.
