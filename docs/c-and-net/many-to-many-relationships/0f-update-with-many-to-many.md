---
title: "\U0001F4D3 3.4.0.7 Many-to-Many Update Functionality"
id: 3407-many-to-many-update-functionality
slug: 3407-many-to-many-update-functionality
hide_table_of_contents: true
sidebar_position: 7
day: weekend
type: lesson
url: >-
  https://github.com/fidgetech/c-and-net/blob/main/0f_update_with_many_to_many.md
---

We've added create and read functionality for our `Tag` entity and `ItemTag` join entity. Now we're ready to move onto adding update and delete functionality. 

We won't add full CRUD for the `ItemTag` join entity, just CRD functionality. Instead of allowing users to update join relationships, we'll simply have them create or delete relationships. 

The `Tag` entity on the other hand will have full CRUD functionality. So in this lesson we'll update our `TagsController` and views to have update functionality.

## UPDATE: Adding Update Functionality to `Tag`s
---

Let's start by creating `Edit()` GET and POST actions in the `TagsController.cs`.

Here's the new code we'll add:

<div class="filename">Controllers/TagsController.cs</div>

```csharp
...

    public ActionResult Edit(int id)
    {
      Tag thisTag = _db.Tags.FirstOrDefault(tags => tags.TagId == id);
      return View(thisTag);
    }

    [HttpPost]
    public ActionResult Edit(Tag tag)
    {
      _db.Tags.Update(tag);
      _db.SaveChanges();
      return RedirectToAction("Index");
    }

...
```

The above code is the exact same as the code for update functionality in the `CategoriesController`: we pass the specific tag that we want to update to the view in the `Edit()` GET action, and then we update our database with the new `tag` in the `Edit()` POST action. When we're done, we redirect to the `Index()` action.

Next, let's create a view for our edit functionality. Within the `Views/Tags/` subdirectory, create a new file called `Edit.cshtml` and add the following code:

<div class="filename">Views/Tags/Edit.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@model ToDoList.Models.Tag

<h2>Edit</h2>

<h4>Edit this tag: @Html.DisplayFor(model => model.Title)</h4>

@using (Html.BeginForm())
{
    @Html.HiddenFor(model => model.TagId)

    @Html.LabelFor(model => model.Title)
    @Html.EditorFor(model => model.Title)

    <input type="submit" value="Save" />
}

<p>@Html.ActionLink("Back to list", "Index")</p>
```

Finally, let's finish up by adding a link to our new `Edit` route to our tag's `Details.cshtml`:

<div class="filename">Views/Tags/Details.cshtml</div>

```csharp
...
<p>@Html.ActionLink("Edit Tag", "Edit", new { id = Model.TagId })</p>
```

Now, if we run our application we should be able to edit tags. Up next, we'll add delete functionality for `Tag`s and `ItemTag` join entities.