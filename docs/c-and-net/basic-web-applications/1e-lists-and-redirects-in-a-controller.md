---
title: "\U0001F4D3 3.2.1.6 Lists and Redirects in a Controller"
id: 3216-lists-and-redirects-in-a-controller
slug: 3216-lists-and-redirects-in-a-controller
hide_table_of_contents: true
sidebar_position: 24
day: monday
type: lesson
url: >-
  https://github.com/fidgetech/c-and-net/blob/main/1e_lists_and_redirects_in_a_controller.md
---

We can display a single item in our To Do List but that's not very helpful in itself. After all, this is a _list_ of things to do, not a single item.

In this lesson, we'll update our controller to return a list of to dos. In the process, we'll also cover using redirects to DRY up our code. In the next lesson, we'll update our `index.cshtml` view to display our list.

Let's change our controller code to pass in multiple `Item`s to the view, not just a single `Item`. Note that this will not compile until we update our views, in the next lesson:

<div class="filename">HomeController.cs</div>

```csharp
...
using System.Collections.Generic;

namespace ToDoList.Controllers
{
  public class HomeController : Controller
  {

    [HttpGet("/")]
    public ActionResult Index()
    {

      List<Item> allItems = Item.GetAll();
      return View(allItems);
    }

    ...

    [HttpPost("/items")]
    public ActionResult Create(string description)
    {
      Item myItem = new Item(description);
      return RedirectToAction("Index");
    }
  }
}
```

First, we need to update our `Index()` route method so that the route has access to all `Item`s. We'll use the static `GetAll()` method to store a `List` of `Item`s in the variable `allItems`. We then pass `allItems` to the view.

Note that we also need to add `using System.Collections.Generic;` to our file now that we've added a `List` to our controller.

We also make an update to our `Create()` route method as well. As we discussed in the last lesson, this route only needs to create a new `Item`. It doesn't care about updating a view. While we could add `List<Item> allItems = Item.GetAll();` to our `Create()` method, it wouldn't be very DRY.

Instead, we can use a method called `RedirectToAction()` to redirect to another route. `RedirectToAction()` takes a route method as an argument. `RedirectToAction("Index");` tells the server to invoke the `Index()` route after the `Create()` route has been invoked. This means we don't have to repeat the code in `Index()`. We can just tell `Create()` to redirect to `Index()` instead.

In the next lesson, we'll update our view to display a `List` of `Item`s with loops and conditionals.