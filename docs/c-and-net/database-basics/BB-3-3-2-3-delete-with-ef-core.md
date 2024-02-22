---
title: "📓 3.3.2.3 Delete with EF Core"
day: tuesday
---

Now let's make sure our application can also destroy an `Item`. We'll add a _Delete_ link on the item's detail page. Clicking this link will take the user to a page that confirms they'd like to delete this particular item.

## Updating the Controller
---

Once again, let's start with the necessary controller actions:

<div class="filename">ItemsController.cs</div>

```csharp
...
public ActionResult Delete(int id)
{
    Item thisItem = _db.Items.FirstOrDefault(item => item.ItemId == id);
    return View(thisItem);
}

[HttpPost, ActionName("Delete")]
public ActionResult DeleteConfirmed(int id)
{
    Item thisItem = _db.Items.FirstOrDefault(item => item.ItemId == id);
    _db.Items.Remove(thisItem);
    _db.SaveChanges();
    return RedirectToAction("Index");
}
...
```

Here, our `POST` action is named `DeleteConfirmed` instead of `Delete`. This is because both the `GET` and `POST` action methods for `Delete` take `id` as a parameter. However, C# will not allow us to have two methods with the same signature. Remember that the **signature** is the method name and parameters. The `POST` attribute is not considered part of the method signature so the C# compiler will think the actions above are the same method if we name them both `Delete`.

To avoid errors, we call one of our methods `Delete` and the other `DeleteConfirmed`. Note that our annotation includes `[ActionName("Delete")]`. This is so we can still utilize the proper `Delete` action even though we've named our method `DeleteConfirmed`.

Other than that, the code is very similar to what we've seen so far. The `Delete()` action looks just like our `GET` actions `Create()` and `Edit()`: we simply need to get the correct item and return it to the view.

The `DeleteConfirmed()` method is also very similar to the code we've used in other actions. The only difference is that we utilize [the built-in `Remove()` method](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbset-1.remove?view=efcore-6.0) on `_db.Items`.

## Updating the View
---

Now let's create the corresponding view:

<div class="filename">Views/Items/Delete.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@model ToDoList.Models.Item

<h2>Are you sure you want to delete this?</h2>

@Html.DisplayNameFor(model => model.Description): @Html.DisplayFor(model => model.Description)
@using (Html.BeginForm())
{
    <input type="submit" value="Delete" />
}
@Html.ActionLink("Back to List", "Index")
```

By default, the HTML helper method `BeginForm()` creates a `POST` request to an action method whose name matches the `.cshtml` file it's contained in. That means the `BeginForm()` helper seen in our `Delete.cshtml` file above will automatically create a `POST` request to our `Delete` action. This is why our annotation includes `ActionName("Delete")`.

Let's also add a delete link to `details.cshtml`:

```html
<p>@Html.ActionLink("Delete Item", "Delete", new { id = Model.ItemId })</p>
```

### Repository Reference

Follow the link below to view how a sample version of the To Do List app should look like at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for To Do List with EF Core: 3\_update\_and\_delete](https://github.com/epicodus-lessons/section-3-to-do-list-with-ef-core-csharp-net6/tree/3_update_and_delete)**
