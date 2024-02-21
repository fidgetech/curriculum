---
title: "📓 3.2.1.4 To Do List with MVC Forms"
id: 3-2-1-4-to-do-list-with-mvc-forms
hide_table_of_contents: true
day: monday
---

In the last lesson, we successfully set up an ASP.NET Core MVC framework into a new To Do List application, and we added a basic home page. In this lesson, we'll update our application so users can create their own custom items through a form. In the next lesson, we'll explore what's happening in the HTTP request-response cycle when we use forms in our MVC applications.

## Creating New `Item`s
---

First, we'll offer users an option to create new list `Item`s. We'll add a link to the bottom of our existing `Index.cshtml` homepage:

<div class="filename">ToDoList/Views/Home/Index.cshtml</div>

```html
...
<a href="/items/new">Add a new item.</a>
```

This link will navigate to a `/items/new` route where users can create new `Item`s using a form.

### New Item Form

Next, we'll create a view for our form. Create a `CreateForm.cshtml` file in the existing `Views/Home` directory.

<div class="filename">Views/Home/CreateForm.cshtml</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My To-Do List!</title>
    <link 
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
      crossorigin="anonymous">
  </head>
  <body>
    <form action="/items" method="post">
      <label for="description">Add a new item</label>
      <input id="description" name="description" type="text">
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
```

A few important things to note:

* The `<form>` tag includes an `action='/items'` attribute. This means our form will route to `'/items'` in our controller.

* The form also includes a `method="post"` attribute. **When a form is being used to create a new object, it must have a post method**. This creates a special type of HTTP request called a **POST request**. We'll discuss this more in the next lesson.

* We also have a field of type `text` so users can add a new `Item`. Remember that **`name` is required** and should accurately describe the input we're retrieving from users. Here we set it to `description`.

* Remember that the `<button>` element's `type` attribute must be set to `'submit'`. If it isn't, the form won't trigger the correct route in the controller.

### New Item Route

Next, let's create the corresponding route to render our new form:

<div class="filename">ToDoList/Controllers/HomeController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;

namespace ToDoList.Controllers
{
  public class HomeController : Controller
  {

    [Route("/")]
    public ActionResult Index()
    {
      Item starterItem = new Item("Add first item to To Do List");
      return View(starterItem);
    }

    [Route("/items/new")]
    public ActionResult CreateForm()
    {
      return View();
    }

  }
}
```

* We create a new route at the path `/items/new`. Users clicking on the link from `Index.cshtml` will invoke this route.

* The route simply returns `View()`. Because our form resides in a file called `CreateForm.cshtml`, the `CreateForm()` route method will automatically render this view.

### Create New `Item` Route

Now we must tell our controller what to do when the user submits our form. Let's create a new `Create()`route method and use a route decorator to set its path to `/items`:

<div class="filename">ToDoList/Controllers/HomeController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;

namespace ToDoList.Controllers
{
  public class HomeController : Controller
  {

    [Route("/")]
    public ActionResult Index()
    {
      Item starterItem = new Item("Add first item to To Do List");
      return View(starterItem);
    }

    [Route("/items/new")]
    public ActionResult CreateForm()
    {
      return View();
    }

    [Route("/items")]
    public ActionResult Create(string description)
    {
      Item myItem = new Item(description);
      return View("Index", myItem);
    }

  }
}
```

The route decorator `"/items"` matches our form's action. When a form is submitted, this route will be invoked. The route method takes a single `string` parameter named `description`. This matches the `name` attribute of our form's single field.

Next, we create a new `Item` with the `description` from the form. And finally, we specify that the `View()` method should take two arguments. This is a bit different from how we've used the `View()` method before. The `View()` method is using overloaded constructors under the hood, which means we can pass in varying numbers of arguments depending on the needs of our application.

* The first argument specifies the view that should be returned. This is new functionality we haven't covered before. In this case, we tell the `View()` method to return the `"Index"` view. We have to do this because we are no longer routing to a view with the same exact name as our route method.

* The second argument specifies what the `Model` property on the view should be.

We don't need to add a `Create.cshtml` view to correspond with our `Create()` route because we are reusing `Index.cshtml`. This helps keep our code DRY and allows us to be very specific when we build our routes. This route is only concerned with creating new items. There's no need to have another route as well.

If we build and run our application, we can now add a custom `Item` to our To Do List.
