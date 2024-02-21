---
title: "📓 3.3.2.5 Using ViewBag"
id: 3-3-2-5-using-viewbag
hide_table_of_contents: true
day: tuesday
---

Before updating the rest of our application so that our users can actually associate a `Category` with an `Item`, let's learn about a place to store data called a **ViewBag**.

## ViewBag Syntax
---

We already know how to send a model to our views, but sometimes we need additional data that isn't a part of our model. We can store that data in a ViewBag.

A ViewBag is a way to send temporary data from a controller to a view. Every MVC Razor view has a ViewBag. We can declare a property of the ViewBag in a route and it will be available to us in the view. Here's an example:

```csharp
public ActionResult Index()
{
  ViewBag.MyFavoriteColor = "green";
  return View();
}
```

This will assign the string `"green"` to the `MyFavoriteColor` property of the `ViewBag`. We don't have to instantiate the ViewBag or create a new class. It's simply made available to the view.

To reference the ViewBag data in the view, we can use this expression:

```csharp
<p>I like the color @ViewBag.MyFavoriteColor.</p>
```

The user would see the following:

```
I like the color green.
```

## Using ViewBag to Add Custom Titles to Webpages
---

We can use ViewBag to add custom titles to our webpages. We'll learn how to do this now, but you don't have to include this functionality in your projects or on any independent project. 

Check out this code from the `Index()` route of the `ItemsController`:

<div class="filename">Controllers/ItemsController.cs</div>

```cs
public ActionResult Index()
{
  List<Item> model = _db.Items.Include(item => item.Category).ToList(); 
  ViewBag.PageTitle = "View All Items";
  return View(model);
}
```

We've added a new line: `ViewBag.PageTitle = "View All Items";`. By creating a property of the ViewBag called `PageTitle`, we can then access it in our `_Layout.cshtml` file to set the value of the HTML element `<title>`. See the updated `_Layout.cshtml` below:

<div class="filename">Views/Shared/_Layout.cshtml</div>

```html
<!DOCTYPE html>
<html>
  <head>
    ...
    <title>@ViewBag.PageTitle</title>
    ...
  </head>
  ...  
</html>
```

Now when I navigate to the Item's `Index` view, the title of the webpage will be "View All Items". 

**Take note**, if you do this for one page, you should do it for all pages. If there is no `PageTitle` property or value, the title will default to the current URL. For example, if we're on the `Index` View of the `HomeController`, the title would state `localhost:5001`. 
