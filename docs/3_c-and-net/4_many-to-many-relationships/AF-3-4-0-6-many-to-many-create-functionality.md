---
title: "📓 3.4.0.6 Many-to-Many Create Functionality"
day: weekend
id: 3-4-0-6-many-to-many-create-functionality
hide_table_of_contents: true
---

In the last lesson, we added read functionality for our new `Tag` class. In this lesson, we'll add create functionality in order to make new tags. We'll also add routes and views to make it possible to create a many-to-many association between tags and items from both the `TagsController` and `ItemsController`.

## CREATE: Adding `Create()` Actions to the `TagsController` and Corresponding View
---

We'll start by adding the ability to create tags. Let's start by adding the `Create()` GET and POST actions to the `TagsController`.

Here's the code that we'll add:

<div class="filename">Controllers/TagsController.cs</div>

```csharp
...

    public ActionResult Create()
    {
      return View();
    }

    [HttpPost]
    public ActionResult Create(Tag tag)
    {
      _db.Tags.Add(tag);
      _db.SaveChanges();
      return RedirectToAction("Index");
    }

...
```

The above code should look familiar from the `Create()` actions we've added to the `ItemsController` and `CategoriesController`. 

Next, let's add a view for our `Create()` action. Create a new file called `Create.cshtml` in the `Views/Tags/` subdirectory and add the following code:

<div class="filename">Views/Tags/Create.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@model ToDoList.Models.Tag

<h4>Add a new tag</h4>

@using (Html.BeginForm())
{
    @Html.LabelFor(model => model.Title)
    @Html.TextBoxFor(model => model.Title)

    <input type="submit" value="Add new tag" class="btn btn-primary" />
}
<p>@Html.ActionLink("Show all tags", "Index")</p>
```

Note that we are not adding the ability to create a many-to-many association between items and tags to the tag's create page. These two creation actions should be separate. In other words, we should be able to create a tag without needing to also create a many-to-many association with an item.

Let's finish up by adding a link to our new `Create` route to our tag's `Index.cshtml`:

<div class="filename">Views/Tags/Index.cshtml</div>

```csharp
...
<p>@Html.ActionLink("Add new tag", "Create")</p>
```

## CREATE: Adding `AddItem()` Actions to the `TagsController` and Corresponding View
---

Next, let's add the ability to create many-to-many associations between tags and items. To do this, we'll add new `AddItem()` GET and POST actions and a corresponding view. 

Let's start by adding the `TagsController` actions. Here's the code we'll add:

<div class="filename">Controllers/TagsController.cs</div>

```csharp
...

    public ActionResult AddItem(int id)
    {
      Tag thisTag = _db.Tags.FirstOrDefault(tags => tags.TagId == id);
      ViewBag.ItemId = new SelectList(_db.Items, "ItemId", "Description");
      return View(thisTag);
    }

    [HttpPost]
    public ActionResult AddItem(Tag tag, int itemId)
    {
      #nullable enable
      ItemTag? joinEntity = _db.ItemTags.FirstOrDefault(join => (join.ItemId == itemId && join.TagId == tag.TagId));
      #nullable disable
      if (joinEntity == null && itemId != 0)
      {
        _db.ItemTags.Add(new ItemTag() { ItemId = itemId, TagId = tag.TagId });
        _db.SaveChanges();
      }
      return RedirectToAction("Details", new { id = tag.TagId });
    }

...
```

The code in the `AddItem()` GET action should be familiar: we get the tag that we want to associate with an item along with a list of all items and pass each into the view.

The `AddItem()` POST action contains some new code to ensure that we don't create a join relationship in two scenarios: when there's no item in the select list with which to create a join relationship, and when a join relationship between a tag and item already exists. If either of these scenarios are true, that means we don't want to create a new join relationship and we simply route back to the details page.

For the first scenario, to prevent the creation of a join relationship when there's no item in the select list, all we need to do is double check the value of `itemId`: if it's equal to `0`, there's no item in the select list with which to create a join relationship. We do this in the if statement with the condition `itemId != 0`.

For the second scenario, to prevent creating duplicate join relationships we need to go through a process of checking whether the join relationship already exists. This is where the new code comes in:

```csharp
      #nullable enable
      ItemTag? joinEntity = _db.ItemTags.FirstOrDefault(join => (join.ItemId == itemId && join.TagId == tag.TagId));
      #nullable disable
```

* We create a database query with the `FirstOrDefault()` method that returns the first `ItemTag` object that contains a matching `ItemId` and `TagId`; if a matching `ItemTag` object can't be found, the default is returned, which is `null`. 
* Since our `joinEntity` variable will be either an `ItemTag` object or `null`, we need to make it a nullable type. We can turn a type into a **nullable type** by adding a question mark `?` at the end of the type, like `ItemTag?`.
* To use nullable reference types in particular, we must also have a nullable annotation context enabled so that our C# compiler can process the nullable reference types. We can enable a nullable annotation context for our entire app via our `.csproj` file, or for a file or a few lines of code with nullable directives: `#nullable enable` and `#nullable disable`. We're opting for the latter in our code because it will require less refactoring across our whole app.
* To complete the checking process for duplicate join relationships, we simply need to check if `joinEntity == null` in our conditional. If the result of our search for duplicates is `null`, it means that we can move forward with creating the new join relationship in our database.

To review more information about nullable types, start with the LearnHowToProgram.com lesson on [Nullable Types](https://old.learnhowtoprogram.com/c-and-net/test-driven-development-with-c/nullable-types). 

Note that we can also check if a join relationship has already been saved to the database using the `Enumerable.Contains()` method and a custom equality comparer. To learn how to do this, visit [this section of the `Enumerable.Contains()` docs](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.contains?view=net-6.0#system-linq-enumerable-contains-1(system-collections-generic-ienumerable((-0))-0-system-collections-generic-iequalitycomparer((-0)))).

Next, let's add our `AddItem.cshtml` view. Go ahead and create this file now within the `Views/Tags` subdirectory and add the following code:

<div class="filename">Views/Tags/AddItem.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@model ToDoList.Models.Tag

<h2>Add an item</h2>

<h4>Add an item to this tag: @Html.DisplayFor(model => model.Title)</h4>

@using (Html.BeginForm())
{
    @Html.HiddenFor(model => model.TagId)

    @Html.Label("Select item")
    @Html.DropDownList("ItemId")

    <input type="submit" value="Save" />
}

<p>@Html.ActionLink("Back to list", "Index")</p>
```

The above code should look familiar from the form we created to add new items with a one-to-many association with a category. In this case, we're providing a select list of items that a user can select from to associate an item with a tag in a many-to-many relationship.

Finally, let's finish up by adding a link to our new `AddItem` route to our tag's `Details.cshtml`:

<div class="filename">Views/Tags/Details.cshtml</div>

```csharp
...
<p>@Html.ActionLink("Add an Item", "AddItem", new { id = Model.TagId })</p>
```

And with that, we can now create join relationships from the `TagsController`. Up next, we'll add the same functionality to the `ItemsController`.

## CREATE: Adding `AddTag()` Actions to the `ItemsController` and Corresponding View
---

The process of adding the ability to create join relationships via our `Items` controller and views will be  the same as doing this via the `Tags` controller and views, except different variable names and types. Because of this, we won't re-explain each update we make.

We'll start out by adding `AddTag()` GET and POST actions to our `ItemsController.cs`:

<div class="filename">Controllers/ItemsController.cs</div>

```csharp
...

    public ActionResult AddTag(int id)
    {
      Item thisItem = _db.Items.FirstOrDefault(items => items.ItemId == id);
      ViewBag.TagId = new SelectList(_db.Tags, "TagId", "Title");
      return View(thisItem);
    }

    [HttpPost]
    public ActionResult AddTag(Item item, int tagId)
    {
      #nullable enable
      ItemTag? joinEntity = _db.ItemTags.FirstOrDefault(join => (join.TagId == tagId && join.ItemId == item.ItemId));
      #nullable disable
      if (joinEntity == null && tagId != 0)
      {
        _db.ItemTags.Add(new ItemTag() { TagId = tagId, ItemId = item.ItemId });
        _db.SaveChanges();
      }
      return RedirectToAction("Details", new { id = item.ItemId });
    }  

...
```

Next, we'll add the `AddTag.cshtml` view. Go ahead and create this file now within the `Views/Items` subdirectory and add the following code:

<div class="filename">Views/Items/AddTag.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@model ToDoList.Models.Item

<h2>Add a tag</h2>

<h4>Add a tag to this item: @Html.DisplayFor(model => model.Description)</h4>

@using (Html.BeginForm())
{
    @Html.HiddenFor(model => model.ItemId)

    @Html.Label("Select tag")
    @Html.DropDownList("TagId")

    <input type="submit" value="Save" />
}

<p>@Html.ActionLink("Back to list", "Index")</p>
```

Once again, let's finish up by adding a link to our new `AddTag` route to our item's `Details.cshtml`:

<div class="filename">Views/Items/Details.cshtml</div>

```csharp
...
<p>@Html.ActionLink("Add a Tag", "AddTag", new { id = Model.ItemId })</p>
```

Now if we run our project, we'll be able to create and view tag objects as well as join relationships between tags and items.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i>  GitHub Repo for To Do List with EF Core Migrations and a Many-to-Many Relationship: 3\_m2m\_read\_and\_create](https://github.com/epicodus-lessons/section-4-to-do-list-with-many-to-many-csharp-net6/tree/3_m2m_read_and_create)**
