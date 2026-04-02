---
title: "📓 5.2.2.5 Introduction to RESTful Routing"
day: tuesday
id: 5-2-2-5-introduction-to-restful-routing
hide_table_of_contents: true
---

Before we add new routes to our app, we're going to discuss an industry best practice for organizing routes called **REST**.

## What is REST?
---

**REST** stands for **Representational State Transfer**. To follow it in our routes, we use a convention called **RESTful Routing**. RESTful routing is a set of standards used in many different languages to create efficient, reusable routes. It aims to map HTTP methods (GET, POST, PATCH, DELETE) and CRUD actions (Create, Read, Update, Destroy) together in a conventional pattern. This makes it easier for other developers to understand and navigate an application and results in clean, consistent URL paths for users.

Essentially, RESTful routing is a naming pattern. It asserts that routes completing certain common actions (like creating, updating, or deleting objects) have names and paths that accurately reflect _what_ they're doing, with _which_ CRUD and HTTP verbs, on what _type_ of object.

### REST Conventions

What does this look like? Here's a table outlining standard RESTful routing conventions:

<img src="/images/c-sharp/intro-to-restful-routing-rest-routes.png" width="100%" />

* Everything that reads _object_ refers to the model used in the application and its routes. For instance, our To Do List works with `Item` objects. We would use the term _items_ wherever we see _object_ in the table above. A blog application might work with `Post` objects. It would use the term _posts_ wherever we see _object_ in the table above.

* **Route Name** refers to the name of the route method in the controller.

* **URL Path** refers to the path listed above the route in a route decorator. This will also be the URL a user sees when navigating to this area of the site.

* **HTTP Method** refers to the HTTP method that route will respond to, or be invoked for.   

* **Purpose** details what each route is responsible for.

* `:id` is a placeholder for where a specific object's unique ID will be placed. An example would be the `_id`s our `Item`s now include. Don't worry about routes with `:id` yet. We'll discuss them more soon.

### REST Conventions in To Do List

Here's how these same standards would look applied to our To Do List. _Routes we haven't created yet are in italics_:

<img src="/images/c-sharp/intro-to-restful-routing-rest-routes-2.png" width="100%" />

Our existing `Index()` and `Create()` routes already follow RESTful convention. For example, here's the `Index()` route from `ItemsController`:

```csharp
[HttpGet("/items")]
public ActionResult Index()
{
  List<Item> allItems = Item.GetAll();
  return View(allItems);
}
```

And here's how each element of this route matches RESTful conventions outlined in the table above:

* **Route Name**: The route name is `Index()`, per RESTful requirements.

* **URL Path**: We specify the path `"/items"` in our route decorator.

* **HTTP Method**: The route decorator denotes that this route will respond to GET requests by using the `HttpGet()` method.

* **Purpose**: This route is meant to display a list of all `Item`s.

Our `Create()` route also matches RESTful convention. Our  `CreateForm()` lesson is close. However, we'll change its name from `CreateForm()` to `New()` in the next lesson.

Also, notice the table depicts that `Update` and `Destroy` routes will use POST requests in MVC due to the fact that **HTML5 forms cannot execute DELETE or PATCH requests, only POST.**

### What To Do When a Route Does Not Fit RESTful Conventions

Sometimes applications include routes that don't fit RESTful conventions. For instance, our To Do List has a route to delete all `Item`s. Websites can also have _Contact Us_ or _About Us_ pages that don't use objects. That's normal. We simply try to name all routes clearly and consistently while following REST conventions for routes that apply.

## Conclusion
---

Now that our applications are complex enough to include many interconnected pages, we'll begin using RESTful routing patterns in all future MVC projects. In fact, following RESTful routing conventions will be **required** for the remainder of the course.

Also, keep in mind that RESTful routing gets more complicated when we begin passing data between routes. Don't worry about this yet. We'll discuss more complex implementations when we begin passing data between our own routes and views. For now, just focus on learning the information presented here.
