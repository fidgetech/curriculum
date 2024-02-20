---
title: "\U0001F4D3 3.4.1.2 Model Validation with Validation Attributes"
id: 3412-model-validation-with-validation-attributes
slug: 3412-model-validation-with-validation-attributes
hide_table_of_contents: true
sidebar_position: 10
day: monday
type: lesson
url: >-
  https://github.com/fidgetech/c-and-net/blob/main/1b_using_validation_attributes_to_validate_model.md
---

In the last course section, we created instructions and used simple condition to avoid creating a database error if a user tries to create an `Item` without there being a `Category` to associate it with. In the `Items/Create.cshtml` view we added this message:

<div class="filename">Views/Item/Create.cshtml</div>

```html
...

<h4>Add a new item</h4>

<p><strong>NOTE:</strong> You need to have at least one category before you can add an item!</p>
<p>Go to @Html.ActionLink("this page", "Create", "Categories") to create a category.</p>

...
```

Then, in the `Create()` POST action in the `ItemsController`, we verified whether there was a `Category` object selected by checking if the `categoryId` parameter has a value of `0`. If so, we simply directed to the `Items/Create.cshtml` page. Otherwise, we went ahead and saved the new `Item` to our database.

<div class="filename">Controllers/ItemsController.cs</div>

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

In this lesson, we're going to try out a new tool to handle this same issue: model validation with validation attributes. With **model validation** we configure .NET to validate user input based on rules that we set in our models; we set these rules using **validation attributes**. As we'll learn a bit later on, "validation attributes" are also commonly called "data annotations". Let's get into this refactor and then revisit these concepts. 

## Adding Validation Attributes to `Item.cs`
---

First, we'll start by adding a `[Range]` validation attribute to the `CategoryId` property of our `Item` model:

<div class="filename">Models/Item.cs</div>

```csharp
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ToDoList.Models
{
  public class Item
  {
    public int ItemId { get; set; }
    public string Description { get; set; }
    [Range(1, int.MaxValue)]
    public int CategoryId { get; set; }
    public Category Category { get; set; }
    public List<ItemTag> JoinEntities { get;}
  }
}
```

A **validation attribute** lets us specify the rules to use when validating a model's property. The validation attribute that we added is `[Range(1, int.MaxValue)]`. In order to attach a validation attribute to a property, we need to list it directly above the property, which in our case is `CategoryId`. 

In order to use validation attributes at all, we need to include the using directive `using System.ComponentModel.DataAnnotations;` at the top of the file, which allows us to use the tools within the `System.ComponentModel.DataAnnotations` namespace. Note that the terms **data annotations** and **validation attributes** are used interchangeably.

With `[Range(1, int.MaxValue)]`, we are specifying the rule that the value of `CategoryId` must be a number between  `1` to the `int.MaxValue`, which is the maximum possible integer value in C#. What this validation rule does for us is ensure that the `CategoryId` value is never `0`. If it is `0`, then we can deliver an error message to the user. 

Let's update our `[Range()]` validation attribute to include an **error message**. To do this, we'll add another argument to `[Range()]`. Update the `Item` class as follows:

<div class="filename">Models/Item.cs</div>

```csharp
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ToDoList.Models
{
  public class Item
  {
    public int ItemId { get; set; }
    public string Description { get; set; }
    [Range(1, int.MaxValue, ErrorMessage = "You must add your item to a category. Have you created a category yet?")]
    public int CategoryId { get; set; }
    public Category Category { get; set; }
    public List<ItemTag> JoinEntities { get;}
  }
}
```

Notice that we've added a third argument: `ErrorMessage = "You must add your item to a category. Have you created a category yet?"`. The `ErrorMessage` property can be applied to any validation attribute. 

The error message `"You must add your item to a category. Have you created a category yet?"` will be delivered to the user if they try to create an item without specifying a category (which happens when the `CategoryId` has a value of `0`). However, we have a few more steps to complete before this will actually work! We need to update our `Item/Create.cshtml` view to display the error message, and we need to update our item's `Create()` POST controller action to check if our model's state is valid. 

### Updating `Item/Create.cshtml` 

We'll first update our `Item/Create.cshtml` view. We'll first remove our hard coded message:

<div class="filename">Views/Item/Create.cshtml</div>

```html
...
<p><strong>NOTE:</strong> You need to have at least one category before you can add an item!</p>
<p>Go to @Html.ActionLink("this page", "Create", "Categories") to create a category.</p>
...
```

And then we'll add a new line of code in its place (right below `<h4>Add a new item</h4>`):

<div class="filename">Views/Item/Create.cshtml</div>

```csharp
...
<p>@Html.ValidationMessageFor(model => model.CategoryId, "", new { @class = "text-danger", @style = "font-weight: 600;" })</p>
...
```

We're making use of a new strongly typed HTML helper called `ValidationMessageFor()` that returns the HTML markup for a validation-error message for the specified model property, in this case `CategoryId`. The `ValidationMessageFor()` method takes two arguments, plus a third optional argument:

* The first argument specifies the model property `CategoryId` that this validation message is for.
* The second argument is an empty string acting as a placeholder for the `ErrorMessage` we set in the `[Range()]` validation attribute. If the model is valid, `ValidationMessageFor()` will display nothing on the page (per the empty string). If the model is not valid, then `ValidationMessageFor()` will display our error message replacing the empty string placeholders with `"You must add your item to a category. Have you created a category yet?"`.
* The third argument is optional and it contains an object with options that we want to specify for our HTML element. In this case, we're adding a new class set to Bootstrap's `"text-danger"` which will make our text red, and a new inline style that will make our text bold.

The last step we have to complete is to actually direct our controller to check the state of our model.

### Checking the Model State

In our controllers, we can check the validity of our model's state by accessing the built-in `ModelState.IsValid` property. `ModelState.IsValid` is a bool, so we can check if the model state is `true`/valid or `false`/invalid. Let's see how this works by updating our `ItemsController`.

Replace the item's `Create()` POST action with the following code:

<div class="filename">Controllers/ItemsController.cs</div>

```csharp
...

    [HttpPost]
    public ActionResult Create(Item item)
    {
      if (!ModelState.IsValid)
      {
          ViewBag.CategoryId = new SelectList(_db.Categories, "CategoryId", "Name");
          return View(item);
      }
      else
      {
        _db.Items.Add(item);
        _db.SaveChanges();
        return RedirectToAction("Index");
      }
    }

...
```

When we check `if (!ModelState.IsValid)`, we're checking if `ModelState.IsValid == false`, which means that the model's state is not valid. 

Take note that **model validation happens automatically**, but we still need to determine what to do when the model's state is valid or invalid. In our case, if our `item` is not valid, then we create a new select list of category objects and `return View(item);`. This will display `Items/Create.cshtml` once again, both with a select list of category objects and the invalid `item` object from which the `ValidateMessageFor` accesses the validation error message that we set on the `Item.CategoryId` property.

And with that, we have model validation set up for our `Item.CategoryId` property. Run your To Do List app now and try adding an item without a category to see the error message displayed.

### Adding a Second Validation

Each property of a model can have one or more validation attributes. Let's get more practice by adding the `[Required]` validation attribute to our `Item.Description` property. When we require a property, it means that a form input for that property can't be empty. Doing this for our items will ensure that no description input is left empty when a user creates a new item.

First, we'll update the model:

<div class="filename">Models/Item.cs</div>

```csharp
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ToDoList.Models
{
    public class Item
    {
        public int ItemId { get; set; }
        [Required(ErrorMessage = "The item's description can't be empty!")]
        public string Description { get; set; }
        [Range(1, int.MaxValue, ErrorMessage = "You must add your item to a category. Have you created a category yet?")]
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public List<ItemTag> JoinEntities { get;}
    }
}
```

Note that we could simply list `[Required]` without specifying an `ErrorMessage`. 

Next, let's update our view to display the error message if our item's `Description` is empty. Right below our `ValidationMessageFor()` for `Item.CategoryId`, we'll add a new `ValidationMessageFor()` for `Item.Description`:

<div class="filename">Views/Item/Create.cshtml</div>

```csharp
...
<p>@Html.ValidationMessageFor(model => model.CategoryId, "", new { @class = "text-danger", @style = "font-weight: 600;" })</p>
<p>@Html.ValidationMessageFor(model => model.Description, "", new { @class = "text-danger", @style = "font-weight: 600;" })</p>
...
```

At this point we can run our application and see that we'll get an error message if we leave the description input blank when we create new items. Note that we don't need to make any updates to the item's `Create()` POST action, because if the model state is invalid we return the entire invalid `item` object from which the `CategoryId` and `Description` properties can be accessed. 

### More to Explore

There are many more built-in validation attributes to explore, as well as the possibility of creating custom validation attributes. There's also more to learn about model state, including how to manually re-run model validation. To optionally learn more, visit the MS Docs article on [Model validation in ASP.NET Core MVC and Razor Pages](https://learn.microsoft.com/en-us/aspnet/core/mvc/models/validation?view=aspnetcore-6.0). For a complete list of available data annotations, visit the [System.ComponentModel.DataAnnotations namespace](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations?view=net-6.0)

Up next, we're going to learn about how we can use data annotations to configure our entity (like `Item`) properties (like `Item.Description`).