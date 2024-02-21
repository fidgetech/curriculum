---
title: "📓 3.2.2.6 Applying RESTful Routing"
id: 3226-applying-restful-routing
hide_table_of_contents: true
day: tuesday
---

In the last lesson, we covered RESTful principles. In this lesson, we'll continue developing our application following RESTful routing best practices. First, we'll update our existing `CreateForm()` route to follow RESTful convention. Then we'll add a `Show()` route to display a detail page for individual `Item`s.

## `New()` Route
---

Existing `Index()` and `Create()` routes in our `ItemsController` already match RESTful convention, as we can see by comparing our controller code to the table in the previous lesson. However, `CreateForm()` does not. It currently looks like this:

<div class="filename">ToDoList/Controllers/ItemsController.cs</div>

```csharp
...

  [HttpGet("/items/new")]
  public ActionResult CreateForm()
  {
    return View();
  }

...
```

Let's also compare it to the table in the last lesson:

* **Route Name**: This method is called `CreateForm()`. In order to adhere to RESTful convention, it should be named `New()`.

* **URL Path**: The path is `"items/new"`. This already follows RESTful convention because it lists the plural model name (`Item`s), alongside `/new`, which indicates to others that this route contains the necessary materials (a form) to create a new instance of the model (`Item`).

* **HTTP Method**: `HttpGet()` is used in the route decorator, which properly signifies that this route handles GET requests.

* **Purpose**: Our route returns a view with a form to create a new instance of the `Item` model.

The only thing we need to change is the route name. We'll rename `CreateForm()` to `New()`:

<div class="filename">ToDoList/Controllers/ItemsController.cs</div>

```csharp
...

  [HttpGet("/items/new")]
  public ActionResult New()
  {
    return View();
  }

...
```

Because the `View()` method will automatically look for a `.cshtml` view with the same name, we must also rename our existing `CreateForm.cshtml` file to `New.cshtml`:

<div class="filename">ToDoList/Views/Items/New.cshtml</div>

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

## Item Detail Page
---

#### _The RESTful `Show()` Route_

Now let's add a detail page so users can click an individual `Item` in our `Items/Index.cshtml` view to navigate to a page displaying details about that `Item`.

### Navigating to the Route

First, we'll ensure users have a way to access this page. Let's update our existing `Items/Index.cshtml` view so each `Item` in our list is a link to that `Item`'s detail page:

<div class="filename">ToDoList/Views/Items/Index.cshtml</div>

```html
...

  <li><a href='/items/@item.Id'>@item.Description</a></li>

...
```

Here we're creating a link. Since this link needs to work for all `Item`s, we use the Razor statement `@item.Id` directly in the `href` property of the `<a>` tag. If an `Item` has an `Id` of `565`, the link will read `/items/565`, and so on.

The entire updated file looks like this:

<div class="filename">ToDoList/Views/Items/Index.cshtml</div>

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
    @using ToDoList.Models;

    <h1>To Do List</h1>
    @if (Model.Count == 0)
    {
      <p>There are no items in the list.</p>
    }
    <ul>
      @foreach (Item item in Model)
      {
        <li><a href='/items/@item.Id'>@item.Description</a></li>
      }
    </ul>

    <a href="/items/new">Add a new item.</a>

    <form action="/items/delete" method="post">
      <button type="submit" name="button">Clear All Items</button>
    </form>
  </body>
</html>
```

### Route Method

Now we need to create our route to handle these requests. Let's plan how we'll make our new route RESTful:

* **Route Name**: It will be called `Show()`.

* **URL Path**: The path should be `"items/{id}"`, where `{id}` is a placeholder for the specific `Item` we're currently looking at. We'll discuss this further in a moment.

* **HTTP Method**: The request to view the detail page will be a GET request, so it will  use `HttpGet()` in its route decorator.

* **Purpose**: It will be responsible for rendering a detail page for a specific `Item`.

Now that we've created a plan, we're ready to add the code for our route.

<div class="filename">ToDoList/Controllers/ItemsController.cs</div>

```csharp
...

    [HttpGet("/items/{id}")]
    public ActionResult Show(int id)
    {
      Item foundItem = Item.Find(id);
      return View(foundItem);
    }

...
```

We have some new syntax: curly braces in the URL path in our route decorator. Our route is now utilizing dynamic routing.

### Dynamic Routing

**Dynamic Routing** refers to routes and their URL paths that can dynamically _change_ depending on circumstances. A common example is an `id` like in the example above.

* The `{id}` portion of the path is a placeholder. Remember, this route will be invoked for viewing _any_ `Item`'s detail page.

* Our link in `Index.cshtml` looks like this: `<a href='/items/@item.Id'>`. For example, if we click on an `Item` with an `id` of 42, the path will be `"/items/42"`. When that occurs, `{id}` will represent `42`.

* This same `id` is passed into the `Show()` route method as a parameter. The method takes an `int` argument named `id`, which is the same `id` from the path.

* Once `Show()` has access to the `id` as a parameter, it can pass this value into `Find()` to locate the `Item` matching this `id`.

* The route can then pass this entire `Item` object into `View()`, so the corresponding view may access and render its information.

#### Note on Dynamic Route Segment Names

Note that the term `id` is nothing magical here. We could rewrite the route like this:

```csharp
 [HttpGet("/items/{aReallyExcitingOneOfAKindIdNumber}")]
 public ActionResult Show(int aReallyExcitingOneOfAKindIdNumber)
 {
   Item foundItem = Item.Find(aReallyExcitingOneOfAKindIdNumber);
   return View(foundItem);
 }
```

This would still work as long as the named segment in the URL path and parameter provided to the route match. However, `id` is standard and our variable names should always be concise and descriptive.

### Detail View

Because our new dynamic route returns `View(foundItem)`, it will look for a view file with the same name as our route method. Our `Show()` method exists on the `ItemsController`, so we'll create a `Show.cshtml` view file in the `Views/Items` directory with the following code:

<div class="filename">ToDoList/Views/Items/Show.cshtml</div>

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
    <h1>To Do List Item Details: </h1>

    <h2>@Model.Description</h2>

    <a href='/items/new'>Add another item</a>
    <a href='/items'>View all items</a>
  </body>
</html>
```

When we run our application now, we can populate it with several `Item`s and click an `Item` from the _/items_ page to navigate to a detail page with that item's specific information.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for To Do List: 6\_applying\_restful\_routing](https://github.com/epicodus-lessons/section-2-to-do-list-csharp-net6/tree/6_applying_restful_routing)**
