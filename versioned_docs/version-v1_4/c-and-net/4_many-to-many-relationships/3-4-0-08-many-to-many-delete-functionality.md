---
title: "📓 5.4.0.8 Many-to-Many Delete Functionality"
day: weekend
id: 5-4-0-8-many-to-many-delete-functionality
hide_table_of_contents: true
---

In this lesson we'll complete our refactor to include a many-to-many functionality between tags and items by adding delete functionality. We'll add delete functionality for `Tag`s and delete functionality for `ItemTag`s.

## DELETE: Adding Delete Functionality to `Tag`s
---

We'll start by creating `Delete()` GET and POST actions in our `TagsController`. Here's the new code that we'll add:

<div class="filename">Controllers/TagsController.cs</div>

```csharp
...
    public ActionResult Delete(int id)
    {
      Tag thisTag = _db.Tags.FirstOrDefault(tags => tags.TagId == id);
      return View(thisTag);
    }

    [HttpPost, ActionName("Delete")]
    public ActionResult DeleteConfirmed(int id)
    {
      Tag thisTag = _db.Tags.FirstOrDefault(tags => tags.TagId == id);
      _db.Tags.Remove(thisTag);
      _db.SaveChanges();
      return RedirectToAction("Index");
    }
...
```

Note that when we delete a `Tag`, all join entities that reference that tag's `TagId` will also automatically be deleted. This is configured through **foreign key constraints**, which configures how objects in relationships should be deleted or updated when one object in the relationship is deleted or updated. For example, in our one-to-many relationship between categories and items, an item always belongs to a single category, and a category can have many items. If a user deletes a category that has five items in it, we can configure through foreign key constraints how those five items should be treated: should they remain in the database? Should they all be deleted?

The default behavior in our application for one-to-many and many-to-many relationships is that when one object is deleted, related objects should also be deleted:

* In the one-to-many relationship between categories and items, when a category is deleted all associated items will also be deleted. That's because each `Item` object has a `CategoryId` property that becomes a foreign key in our database tables and links each `Item` to a specific `Category`.
* In the many-to-many relationship between items and tags, when an item is deleted all join entities in the `itemtags` table that reference that item will also be deleted. That's because `ItemId` is a foreign key in the `itemtags` table, connecting each `ItemTag` object to a specific `Item` object. Similarly, when a tag is deleted all join entities in the `itemtags` table that reference that tag will also be deleted. That's because `TagId` is a foreign key in the `itemtags` table, connecting each `ItemTag` object to a specific `Tag` object.

The automatic deletion of associated objects through foreign keys has a specific name: **cascade delete**. This is the default behavior for the foreign keys we create because they are all non-nullable, which means they can't have a `null` value. This means that when a `Tag` entry in the `tags` database table is removed, then all of the entries in all other tables (right now just the `itemtags` table) that use that `Tag` as a foreign key (via `TagId`) will also be removed, because the foreign key cannot be `null`.

We could configure our foreign keys constraints to not delete associated objects, but we don't have a reason to change this behavior right now. Also, the specifics of how to do that is out of the scope of this lesson. To learn more about configuring cascade delete with EF Core, start by reading [the article on creating and configuring relationships with EF Core](https://learn.microsoft.com/en-us/ef/core/modeling/relationships?tabs=fluent-api%2Cfluent-api-simple-key%2Csimple-key). Some of the article's content will be a review, but other content will be new. Then, read about [foreign key constraints on the MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html).

Next, let's create our view that confirms that we are sure that we want to delete the tag. Within the `Views/Tags/` subdirectory, create a new file called `Delete.cshtml`, and add the following contents:

<div class="filename">Views/Tags/Delete.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@model ToDoList.Models.Tag

<h2>Are you sure you want to delete this?</h2>

@Html.DisplayNameFor(model => model.Title): @Html.DisplayFor(model => model.Title)
@using (Html.BeginForm())
{
    <input type="submit" value="Delete" />
}
@Html.ActionLink("Back to List", "Index")
```

As always, let's finish up by adding a link to our new `Delete` route to our tag's `Details.cshtml`:

<div class="filename">Views/Tags/Details.cshtml</div>

```html
...
<p>@Html.ActionLink("Delete Tag", "Delete", new { id = Model.TagId })</p>
```

## DELETE: Adding Delete Functionality to `ItemTag`s
---

Next, we'll add the ability to delete join relationships. This time we won't create a new view for this, but instead add a delete button directly below each join entity in the details view in both `Views/Items/Details.cshtml` and `Views/Tags/Details.cshtml`.

First, let's check out the new button we'll be adding to the `Views/Tags/Details.cshtml`:

```csharp
@using (Html.BeginForm("DeleteJoin", "Tags"))
{
  @Html.Hidden("joinId", @join.ItemTagId)
  <input type="submit" value="Delete"/>
}
```

Notably, the button is wrapped in a form that contains a hidden `joinId` value for the join entity. That's because in order to change something in our database, we need to make a request via a form. When the user submits this form, it will go to a `DeleteJoin` action in the `TagsController.cs` which will handle deleting the join entity in our `itemtags` database table using the `joinId` variable.

Also notice that we pass in two arguments to our `BeginForm()` method. The first argument is the route method that we'd like to invoke and the second argument is the controller (note that .NET appends "Controller" to whatever string you pass in). Previously we did not include these arguments to `BeginForm()`. That's because we relied on the default routing that the `BeginForm()` HTML helper provides, which is to route to the controller action that matches the current URL. In the case of `Tags/Details`, that would be the `Details()` action in the `TagsController`. However, we want to route to the `DeleteJoin()` action, which is why we specify this explicitly in `@using (Html.BeginForm("DeleteJoin", "Tags"))`.

Next, let's see how we'll place this form within `View/Tags/Details.cshtml`. Here's what our code should look like now: 

<div class="filename">Views/Tags/Details.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@using ToDoList.Models
@model ToDoList.Models.Tag

<h2>Tag Details</h2>
<hr />
<h3>@Html.DisplayNameFor(model => model.Title): @Html.DisplayFor(model => model.Title)</h3>

@if(@Model.JoinEntities.Count == 0)
{
  <p>This tag does not belong to any items</p>
}
else
{
  <h4>Items the tag belongs to:</h4>
  <ul>
  @foreach(ItemTag join in Model.JoinEntities)
  {
    <li>@join.Item.Description</li>
    @using (Html.BeginForm("DeleteJoin", "Tags"))
    {
      @Html.Hidden("joinId", @join.ItemTagId)
      <input type="submit" value="Delete"/>
    }
  }
  </ul>
}

<p>@Html.ActionLink("Back to list", "Index")</p>
<p>@Html.ActionLink("Add an Item", "AddItem", new { id = Model.TagId })</p>
<p>@Html.ActionLink("Edit Tag", "Edit", new { id = Model.TagId })</p>
<p>@Html.ActionLink("Delete Tag", "Delete", new { id = Model.TagId })</p>
```

Notice that we've added the new form/button below each join entity. That means there will be a separate button created for each join entity listed on the tag's details page, each with a unique `joinId` value.

Next, let's create the `DeleteJoin()` action in the `TagsController.cs`. Here's the new code we'll add:

<div class="filename">Controllers/TagsController.cs</div>

```csharp
...

    [HttpPost]
    public ActionResult DeleteJoin(int joinId)
    {
      ItemTag joinEntry = _db.ItemTags.FirstOrDefault(entry => entry.ItemTagId == joinId);
      _db.ItemTags.Remove(joinEntry);
      _db.SaveChanges();
      return RedirectToAction("Index");
    }

...
```

The code to remove a database entry should look familiar, with the only difference being that we're going into the `ItemTags` database table. Note that the `DeleteJoin()` action will find the entry in the join table by using the join entry's `ItemTagId`. The `ItemTagId` is being passed in through the variable `joinId` in our action's parameter and came from the `BeginForm()` HTML helper method in our details view.

Note that we've called our action `DeleteJoin()` because it handles deleting an `ItemTag` join relationship. However we could name this route something more specific if we prefer, like `DeleteItemTagJoin`, or if we happen to have multiple many-to-many relationships.

### `joinId` and Route Configuration in `Program.cs` 

We use the name `joinId` in the `DeleteJoin()` route instead of `id` because .NET automatically utilizes the value in the URL query if we name the variable `id`. For example, if we named the parameter `id` instead of `joinId` and the details URL was something like `/Items/Details/6`, then the value of `id` would be 6, which is the `ItemId` and not the `ItemTagId` that we wanted from our `Hidden()` method.

The reason .NET uses this convention is due to our configuration in the `Program.cs` file. Take a look at the following code in the `Program.cs` file:

<div class="filename">ToDoList/Program.cs</div>

```csharp
...
      app.MapControllerRoute(
          name: "default",
          pattern: "{controller=Home}/{action=Index}/{id?}"
        );
...
```

The template option tells .NET how to treat routes. This configuration, known as **conventional routing**, matches a path like `/Items/Details/6` to its specific controller action by looking for the `Details` action route in the `Items` controller. Then it binds the value of 6 to the `id` variable. We won't change routes in this class, but be aware that .NET routing conventions can be configured. If you're interested in learning more, check out the [documentation on the subject.](https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/routing?view=aspnetcore-6.0)

### Updating the `ItemsController` and `Details.cshtml` View to Delete Join Entities

Next, we'll add the same delete button and controller action to our items. The process will be the exact same as with tags, except different naming to reflect that we're in the items controller and views.

Let's start with the controller action this time. Within `ItemsController.cs`, add the following new route:

<div class="filename">Controllers/ItemsController.cs</div>

```csharp
...

    [HttpPost]
    public ActionResult DeleteJoin(int joinId)
    {
      ItemTag joinEntry = _db.ItemTags.FirstOrDefault(entry => entry.ItemTagId == joinId);
      _db.ItemTags.Remove(joinEntry);
      _db.SaveChanges();
      return RedirectToAction("Index");
    }

...
```

Next, let's update the `Views/Items/Details.cshtml` to include a new form and button for each join entity listed for the item:

<div class="filename">Views/Items/Details.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@using ToDoList.Models
@model ToDoList.Models.Item

<h2>Item Details</h2>
<hr />
<h3>@Html.DisplayNameFor(model => model.Description): @Html.DisplayFor(model => model.Description)</h3>  
<h3>@Html.DisplayNameFor(model => model.Category): @Html.DisplayFor(model => model.Category.Name)</h3>

@if(@Model.JoinEntities.Count == 0)
{
  <p>This item does not have any tags yet!</p>
}
else
{
  <h4>This item has the following tags:</h4>
  <ul>
    @foreach(ItemTag join in Model.JoinEntities)
    {
      <li>Tag: @join.Tag.Title</li>
      @using (Html.BeginForm("DeleteJoin", "Items"))
      {
        @Html.Hidden("joinId", @join.ItemTagId)
        <input type="submit" value="Delete"/>
      }
    }
  </ul>
}

<p>@Html.ActionLink("Back to list", "Index")</p>
<p>@Html.ActionLink("Edit Item or Category", "Edit", new { id = Model.ItemId })</p>
<p>@Html.ActionLink("Add a Tag", "AddTag", new { id = Model.ItemId })</p>
<p>@Html.ActionLink("Delete Item", "Delete", new { id = Model.ItemId })</p>
```

And with that, we've completed CRUD for tags and CRD for our `ItemTag` many-to-many join entity. Start your To Do List's server and check out the completed functionality in the browser!

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i>  GitHub Repo for To Do List with EF Core Migrations and a Many-to-Many Relationship: 4\_m2m\_update\_and\_delete](https://github.com/epicodus-lessons/section-4-to-do-list-with-many-to-many-csharp-net6/tree/4_m2m_update_and_delete)**
