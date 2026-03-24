---
title: "📓 5.2.0.12 Creating and Using Views"
day: weekend
id: 5-2-0-12-creating-and-using-views
hide_table_of_contents: true
---

We've set up a few routes that return strings. However, that's not very helpful for building a functional site. Let's add HTML to our site by using **views** — the "V" in MVC.

## View File Structure
---

In MVC applications, views are `.cshtml` files instead of `.html` files. `.cshtml` files support both plain old HTML and inline C# logic. Views always reside in a `Views` subdirectory of the production project. If you haven't already, go ahead and add a `Views` subdirectory in `FriendLetter` now.

The `Views` directory is further divided into subdirectories, one for each controller. We only have a `HomeController` so we'll create a `Home` subdirectory in `Views`. In `Views/Home` we'll create our first view file:  `Letter.cshtml`. This name matches our `Letter()` route exactly.

The resulting structure for our `Views` should look like this:

<pre>
FriendLetter.Solution
└── FriendLetter
    └── Views
        └── Home
            └── Letter.cshtml
</pre>

## Writing a View
---

Let's add HTML to our view:

<div class="filename">FriendLetter/Views/Home/Letter.cshtml</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello Friend!</title>
    <link 
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
      crossorigin="anonymous">
    <meta charset='utf-8'>
  </head>
  <body>
    <h1>Hello From Afar</h1>
    <p>Dear Friend,</p>
    <p>How are you? I hope that you are having a nice weekend. I'm vacationing in Iceland while I learn programming! </p>
    <p>Friend, you would not believe how cold it is here. I should have gone to Hawaii instead.</p>
    <p>But I like programming a lot, so I've got that going for me. </p>
    <p>Looking forward to seeing you soon. I'll bring you back a souvenir. </p>
    <p>Cheers,</p>
    <p>Travel Enthusiast Jane</p>
  </body>
</html>
```

Now we need to update our controller code for the `Letter()` route to render the `Letter.cshtml` view.

<div class="filename">FriendLetter/Controllers/HomeController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;

namespace FriendLetter.Controllers
{
  public class HomeController : Controller
  {

    [Route("/hello")]
    public string Hello() { return "Hello friend!"; }

    [Route("/goodbye")]
    public string Goodbye() { return "Goodbye friend."; }

    [Route("/")]
    // Notice the changes below!
    public ActionResult Letter() { return View(); }

  }
}
```

We just made several changes to our `Letter()` route:

* The return type of our `Letter()` method is now an `ActionResult`, not a `string`. This is a built-in MVC class that handles rendering views.

* Our method returns another method called `View()`. This is a built-in method from the `Microsoft.AspNetCore.Mvc` namespace. When our route is invoked, it will return a view. 

## Invoking Views  
---

If we save, build and run our application, we'll see our HTML-formatted letter appear at _localhost:5000_. But how does `Letter()` know _which_ view in the `Views` directory to render?

### Naming Convention Functionality

The `View()` method has built-in functionality to locate views by name. Here's how it works:

* Because views should **always** reside in a `Views` directory, `View()` first locates the `Views` directory in the production project.

* Then the method looks for a subdirectory with a name that matches the controller name. Our `Letter()` route is in a `HomeController` so it looks for the subdirectory `Home`.

* Once in the `Home` directory, the method looks for a file that corresponds with the route itself. In this case, it's looking for `Letter()`. Our `Letter.cshtml` file name matches the name of this route so the `View()` method returns the HTML in this file.

Following correct naming convention is essential here. If any of our directories or files are incorrectly named, the `View()` method won't be able to render the right HTML.

Before we move on, let's discuss an important clarification in these naming conventions: **the `View()` method only cares about the name of the method that invokes it.** In the example above, the method `Letter()` invokes `View()`, so `View()` looks for `Letter.cshtml`.

In other words, **`View()` does not care about the route decorator.** The route decorator is simply a convenience so users can more easily access a route. This means that `.cshtml` files should never be named based on route decorators. If they are, `View()` won't be able to find them.

In the next lesson, we'll create our first model. Then, we'll use a markup syntax called Razor to dynamically render information from our model.
