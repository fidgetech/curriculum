---
title: "📓 3.3.2.2 Update with EF Core"
day: tuesday
id: 3-3-2-2-update-with-ef-core
hide_table_of_contents: true
---

Now that we've had some time to practice adding create and read functionality with Entity, we're ready to add update and delete functionality as well. In this lesson, we'll add update functionality. In the next lesson, we'll add the ability to delete items as well.

## Adding Update Functionality
---

We'll start by updating our controller:

<div class="filename">ItemsController.cs</div>

```csharp
...

public ActionResult Edit(int id)
{
    Item thisItem = _db.Items.FirstOrDefault(item => item.ItemId == id);
    return View(thisItem);
}

[HttpPost]
public ActionResult Edit(Item item)
{
    _db.Items.Update(item);
    _db.SaveChanges();
    return RedirectToAction("Index");
}

...
```

* First, we have both `GET` and `POST` `Edit` actions. The `GET` action will route to a page with a form for updating an item. The `POST` action will actually update the item. Don't forget that we need to include an `[HttpPost]` annotation above the `POST` action.

* Like our `Details` method, the `GET` request uses a specific entry as the model for the page. In fact, the code in this action looks exactly the same as the code in the `Details` action. That's because it's doing the same thing: finding a specific item and then passing it to the view.

### Updating the View

Now we're ready to add a view with a form:

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

    <input type="submit" value="Save" />
}
<p>@Html.ActionLink("Back to list", "Index")</p>

```

This view is very similar to the `Create.cshtml` view we constructed together in the last lesson. However, there is a key new addition:

```
@Html.HiddenFor(model => model.ItemId)
```

This is because we need to pass the specific item's `ItemId` on to the controller. If we don't, our controller won't know which item to update.

Finally, let's add an edit link to `Details.cshtml`. That way, a user can go to a specific item's page and then click on a link to edit that item.

<div class="filename">Views/Items/Details.cshtml</div>

```html
<p>@Html.ActionLink("Edit Item", "Edit", new { id = Model.ItemId })</p>
```

In this case, we need to specify that we are looking for the `ItemId` of the `Model` that is passed into this view.
