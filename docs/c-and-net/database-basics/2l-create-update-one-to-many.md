---
title: "📓 3.3.2.6 Create and Update with a One-To-Many Relationship"
id: 3326-create-and-update-with-a-one-to-many-relationship
hide_table_of_contents: true
day: tuesday
---

Now it's time to update the rest of our application so that our users can actually associate a `Category` with an `Item`. We'll also make two other valuable updates: we'll list the `Category` that an `Item` belongs to on its details page, and we'll make an update to our CREATE action to prevent unhandled database errors.

## Using ViewBag for `Category` Data in the `ItemsController`
---

Let's now use ViewBag to get `Category` data into our `Item` Views. We will be updating our example To Do List project with the following changes. In this example, we'll access ViewBag data from an HTML helper, and the syntax in the View will look different than what we've seen so far.

We will need `Category` data in two of our `Item` routes, so let's update those two methods in `ItemsController` so that they use ViewBag. Here are the two methods we need to update:

<div class="filename">Controllers/ItemsController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc.Rendering;

...

public ActionResult Create()
{
  ViewBag.CategoryId = new SelectList(_db.Categories, "CategoryId", "Name");
  return View();
}

...

public ActionResult Edit(int id)
{
  Item thisItem = _db.Items.FirstOrDefault(item => item.ItemId == id);
  ViewBag.CategoryId = new SelectList(_db.Categories, "CategoryId", "Name");
  return View(thisItem);
}

...
```

First we add the necessary using directive so that we have access to `SelectList`. Now note that both methods have the following lines added to them:

```csharp
ViewBag.CategoryId = new SelectList(_db.Categories, "CategoryId", "Name");
```

When we create and edit our items, we want them to belong to categories that already exist. We do this by creating a `ViewBag.CategoryId` property  in the `Create` and `Edit` GET actions, and assigning it as a new `SelectList` object.

A `SelectList` will provide a list of the data needed to create an html `<select>` list of all the categories from our database. The displayed text of each `<option>` will be the `Category`'s `Name` property, and the value of the `<option>` will be the `Category`'s `CategoryId`.  That way, a user can select an `Category` from the dropdown to associate with the `Item` we are creating or editing.

The `SelectList` takes multiple arguments:

* The first argument represents the data that will populate our SelectList's `<option>` elements: a list of categories from our database.
* The second argument is the value of the every `<option>` element: the `Category`'s `CategoryId`.
* The third argument is the displayed text of every `<option>` element: the name of the `Category`. 

### Updating `Item` Create and Edit Views

Next, let's update the corresponding views:

<div class="filename">Views/Items/Create.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@model ToDoList.Models.Item

<h4>Add a new item</h4>

@using (Html.BeginForm())
{
  @Html.LabelFor(model => model.Description)
  @Html.TextBoxFor(model => model.Description)

  @Html.LabelFor(model => model.Category)
  @Html.DropDownList("CategoryId")

  <input type="submit" value="Add new item" class="btn btn-primary" />
}
<p>@Html.ActionLink("Show all items", "Index")</p>
```

<div class="filename">Views/Items/Edit.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@model ToDoList.Models.Item

<h2>Edit</h2>

<h4>Edit this item: @Html.DisplayFor(model => model.Description)</h4>

@using (Html.BeginForm())
{
  @Html.HiddenFor(model => model.ItemId)

  @Html.LabelFor(model => model.Description)
  @Html.EditorFor(model => model.Description)

  @Html.LabelFor(model => model.Category)
  @Html.DropDownList("CategoryId")

  <input type="submit" value="Save" />
}

<p>@Html.ActionLink("Back to list", "Index")</p>
```

Note that we've added the following two lines to both views:

```cs
@Html.LabelFor(model => model.Category)
@Html.DropDownList("CategoryId")
```

We use an HTML helper method called `DropDownList()`, we give `DropDownList()` the string name of a ViewBag property of the type `SelectList`. Since we saved our SelectList as `ViewBag.CategoryId`, we give `DropDownList()` the string `"CategoryId"`. This helper method will create an html dropdown select list out of the `SelectList` object.

**Note** — `CategoryId` may seem like a bad name for a `SelectList` object, but the reason we chose that name is because that will be the `name` attribute on the `<select>` tag created. You can check this in your browser DevTools Inspector and see `<select id="CategoryId" name="CategoryId">`. We could use a different name like `ViewBag.CategoryList` and you'd get `<select id="CategoryList" name="CategoryList">`. The problem with that is when we submit our form it will use the `name` attribute to know what property of the `Item` object to assign a value, so it will try to create an Item with a `CategoryList` property, which will not work.

### Listing the `Category` on the `Item` Details Page

Next, let's list the name of the `Category` on the details page for an `Item`. First, we'll update the `Details` action in the `ItemsController` to grab include the `Category` when it gets the `Item` from the database:

<div class="filename">Controllers/ItemsController.cs</div>

```csharp
...

    public ActionResult Details(int id)
    {
      Item thisItem = _db.Items
                          .Include(item => item.Category)
                          .FirstOrDefault(item => item.ItemId == id);
      return View(thisItem);
    }

...
```

Then, we'll update the corresponding view to display the `Category` name:

<div class="filename">Views/Items/Details.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@model ToDoList.Models.Item

<h2>Item Details</h2>
<hr />
<h3>@Html.DisplayNameFor(model => model.Description): @Html.DisplayFor(model => model.Description)<h3>
<h3>@Html.DisplayNameFor(model => model.Category): @Html.DisplayFor(model => model.Category.Name)<h3>

<p>@Html.ActionLink("Edit Item", "Edit", new { id = Model.ItemId })</p>
<p>@Html.ActionLink("Delete Item", "Delete", new { id = Model.ItemId })</p>
<p>@Html.ActionLink("Back to list", "Index")</p>
```

### Preventing Database Errors 

Users will see an unhandled error in the browser when they try to create an `Item` without there being a `Category` they can associate the `Item` with. That's because our database expects each `Item` to have a valid `CategoryId`, and without it, our application breaks. That means we need to update our application to prevent this from happening. There's quite a few ways we can do this, and we'll implement a basic solution for this issue now. In the next course section, we'll learn how to solve this issue with a different tool.

Our basic solution is to add an instruction for the user to read to let them know they need to add a Category before they create an Item. Then, in the controller, we'll check to see if a `Category` has been added, and if not, redirect back to the `Create` page. 

Let's start with the instruction to the user. In `Views/Items/Create.cshtml`, add the following code right before the `<h4>` tag and above the form:

<div class="filename">Views/Items/Create.cshtml</div>

```html
...

<p><strong>NOTE:</strong> You need to have at least one category before you can add an item!</p>
<p>Go to @Html.ActionLink("this page", "Create", "Categories") to create a category.</p>

...
```

Next, let's update the `Create` POST action within the `ItemsController.cs` to check whether a Category has been selected for the `Item`. 

Here's the updated `Create` POST action:

<div class="filename">Views/ItemsController.cs</div>

```csharp
...

    [HttpPost]
    public ActionResult Create(Item item)
    {
      if (item.CategoryId == 0)
      {
        return RedirectToAction("Create");
      }
      _db.Items.Add(item);
      _db.SaveChanges();
      return RedirectToAction("Index");
    }

...
```

We've added a new `if` statement that checks the value of `CategoryId`. By default, the `CategoryId` will be `0` if no Category is selected in the form. So, we can check if `CategoryId` is set to `0`, and if so, redirect to the `Create` GET action and view. 

Again, this is just solution to our issue here. In the next section, we'll learn about validating models through **validation attributes** that we can add to our model's properties. We'll get into that soon!

At this point, we've successfully set up a one-to-many relationship. We've also added very basic protection to our application to not create an item unless there's a category that it can be associated with. We can run our application and make an association between an `Item` and a `Category` via a dropdown.

For further information on using Entity, check out [Microsoft's documentation on Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/modeling/relationships).

### Repository Reference

Follow the link below to view the **finished project** for the walkthrough of creating a To Do List app that uses EF Core to communicate with a MySQL database. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for To Do List with EF Core: 4\_one\_to\_many\_relationship](https://github.com/epicodus-lessons/section-3-to-do-list-with-ef-core-csharp-net6/tree/4_one_to_many_relationship)**
