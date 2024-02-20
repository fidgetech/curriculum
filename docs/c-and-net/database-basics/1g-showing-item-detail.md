---
title: "\U0001F4D3 3.3.1.9 Showing Item Details with EF Core"
id: 3319-showing-item-details-with-ef-core
slug: 3319-showing-item-details-with-ef-core
hide_table_of_contents: true
sidebar_position: 24
day: monday
type: lesson
url: 'https://github.com/fidgetech/c-and-net/blob/main/1g_showing_item_detail.md'
---

Our To Do List application currently has an option for users to click on an item's details. However, we haven't added that route or its corresponding view yet. Let's do that now.

## Showing an `Item` Details
---

We'll start with the controller action, which will include some new code.

<div class="filename">Controllers/ItemsController.cs</div>

```csharp
public ActionResult Details(int id)
{
    Item thisItem = _db.Items.FirstOrDefault(item => item.ItemId == id);
    return View(thisItem);
}
```

* First, the `Details` method takes the `id` of the entry we want to view as its sole parameter. Remember that this needs to match the property from the anonymous object we created using the `ActionLink()` method with the code `new { id = item.ItemId }`. Check the previous lesson for details.

* We pass in this `id` as an argument to the LINQ method `FirstOrDefault()`.

* This method once again uses a lambda. We can ultimately read this method as:
  * Start by looking at `_db.Items` (our `items` table).
  * Then find any items where the `ItemId` of an item is equal to the `id` we've passed into this method.

Note that we could do the following and it would still work fine:

```csharp
Item thisItem = _db.Items.FirstOrDefault(thing => thing.ItemId == id);
```

However, it makes sense for the name to clearly represent the dataset we are pulling from.

While the lambda syntax may still feel confusing, once again we don't need to have an in-depth understanding of lambdas in order to start using LINQ.

Now let's create the corresponding view.

<div class="filename">Views/Items/Details.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@model ToDoList.Models.Item

<h2>Item Details</h2>
<hr />
<h3>@Html.DisplayNameFor(model => model.Description): @Html.DisplayFor(model => model.Description)</h3>
<p>@Html.ActionLink("Back to list", "Index")</p>
```

* We start with a model directive so the view can reference the model.

* We use two new HTML helper methods: `DisplayNameFor()` and `DisplayFor()`. The former displays the property name while the latter displays the value of that property. For an item with a description of "Wash rhino," this will be rendered as `Description: "Wash rhino"` in our HTML.

* Finally, we use another `ActionLink()` to render a link that will return the user to the index route.

### Repository Reference

Follow the link below to view how a sample version of the To Do List app should look like at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for To Do List with EF Core: 2\_create\_read\_and\_details\_with\_html\_helpers](https://github.com/epicodus-lessons/section-3-to-do-list-with-ef-core-csharp-net6/tree/2_create_read_and_details_with_html_helpers)**