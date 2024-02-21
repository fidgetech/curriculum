---
title: "📓 3.3.1.7 Create with EF Core"
id: 3317-create-with-ef-core
hide_table_of_contents: true
day: monday
---

 In this lesson, we'll add more CRUD functionality to our To Do List using our new EF Core-powered ORM capabilities. Specifically, we'll focus on the create action here.

## Create
---

Creating a new item is a two-step process:

1. We need a form to supply information about the new item.
2. We also need functionality to submit that form and save the information it contains to our database.

This means we'll also need two `Create` actions:

1. A `GET` action to display our form to users.  
2. A `POST` action to manage form submission.

### Controller

Let's add these actions to our `ItemsController` now:

<div class="filename">ItemsController.cs</div>

```csharp
...
public ActionResult Create()
{
    return View();
}

[HttpPost]
public ActionResult Create(Item item)
{
    _db.Items.Add(item);
    _db.SaveChanges();
    return RedirectToAction("Index");
}
...
```

1. The `Create()` `GET` route is used exactly the same way as `New()` was before we started using Entity. You may notice that this strays from our RESTful routing practices — previously, we learned that `New()` should be used for this `GET` request. **We are now straying from our RESTful routing practices in order to make use of new tools that streamline our forms: HTML helper methods.** We will go into depth about HTML helper methods in the next lesson.

2. The second action is our `POST` request. This route will take an `item` as an argument, add it to the `Items` `DbSet`, and then save the changes to our database object. Afterwards, it will redirect users to the `Index` view.

[`Add()` is a `DbSet` method](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbset-1.add?view=efcore-6.0) we run on our `DBSet` property of our `ToDoListContext`, while [`SaveChanges()` is a `DbContext` method](https://learn.microsoft.com/en-us/dotnet/api/system.data.entity.dbcontext.savechanges?view=entity-framework-6.2.0) that we run on the `ToDoListContext` itself (which extends the `DbContext` class).

Together, they update the `DBSet` and then sync those changes to the database which the `ToDoListContext` represents. Once again, EF Core takes care of the work for us.

In the next lesson, we'll learn about HTML helper methods, which will make it much easier to create forms and simplify our HTML.
