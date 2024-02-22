---
title: "📓 3.3.1.8 HTML Helper Methods, Lambda Expressions, and String Interpolation"
day: monday
id: 3-3-1-8-html-helper-methods-lambda-expressions-and-string-interpolation
hide_table_of_contents: true
---

In the last lesson, we added code to our `ItemsController` to create `Item`s. In this lesson, we'll add the necessary views to allow users to create `Item`s through a form. In the process, we'll cover several HTML **helper methods**. A helper method is exactly what it sounds like — a method that helps make our lives as developers a little easier. In this case, our helper methods will specifically make it easier to render HTML in a `.cshtml` file.

## HTML Helper Methods: Links
---

First, let's update the contents of our `Views/Home/Index.cshtml`. Let's remove the links to the categories and add a link to see our items instead. In the past, we created a standard HTML link like this:

```html
<a href="/items">See all items</a>
```

Let's use an HTML helper method to render our link instead. Edit `Index.cshtml` to look like this:

<div class="filename">Views/Home/Index.cshtml</div>

```html
@{
  Layout = "_Layout";
}

<h1>Welcome to the To Do List!</h1>
<p>@Html.ActionLink("See all items", "Index", "Items")</p> 
```

 The `ActionLink()` method is called on `@Html`. It takes two required parameters as well as an optional third parameter.

 * The first parameter `"See all items"` is the display text for the link. In other words, a user will see a link that says "See all items".

 * The second parameter `"Index"` is the target action in the controller. 
 
 * The third parameter `Items` is optional, and it specifies the controller that we want to route to. More specifically, our third parameter is the name of the controller without `Controller` appended to it. Since we've included this third parameter, this `ActionLink` will take us to the `Index()` route method in the `ItemsController`. 
 
**Take note.** If we don't include the optional third parameter, like this:

```
<p>@Html.ActionLink("See all items", "Index")</p> 
```

The `ActionLink` method will default to the controller that corresponds to the view that the `ActionLink` method executes from. Since we're in a View belonging to `Home`, we would be routed to the `HomeController`'s `Index()` route method (also known as an action).

Let's run the server to confirm that our new link works.

### Updating the Items Views

Before we create our form, let's use a shiny new HTML helper method to add a link to our `Views/Items/Index.cshtml` view that will link to the form page.

<div class="filename">Views/Items/Index.cshtml</div>

```html
...
<p>@Html.ActionLink("Add new item", "Create")</p>
```

This time around, we omit the third parameter as we are going to a route in the Items controller.

## Strongly Typed HTML Helper Methods with Forms
---

We now have a link to a view for our `Create()` method but we haven't created a view yet. In past projects, we used standard HTML to create forms. Let's use some new HTML helper syntax to make this easier:

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
  <input type="submit" value="Add new item" />
}
<p>@Html.ActionLink("Show all items", "Index")</p>
```

Our form makes use of several HTML helper methods, including another `ActionLink()` to link to our `Index()` route method. Let's take a closer look at the new helper methods included above.

### Model Directives

We'll start with the first line, which is called a **model directive**:

```cs
@model ToDoList.Models.Item
```

A model directive tells our view what type of data will be passed into the view from the controller route. In this case, we're telling the view that it will receive a model that is an `Item`. These directives provide a simple way for our application to reference strongly-typed models (like `Item` and `Category`) and is required when we use strongly typed HTML helpers, which we'll cover more shortly.

Note that we must be very specific in defining the type, including both the namespace and the class in that order: `ToDoList.Models.Item`. This forces the compiler to look in the right place for the type. Now we can use the model we specify in our view.

Finally, note that we can only include one `@model` directive in each view, just like we can only pass in one model to each `View()` method in our controllers.

We will be using model directives regularly in our views when we use strongly typed HTML helpers, not just with forms, and we'll cover a few more examples soon.

### HTML Helper Methods for Forms

Next, let's take a closer look at our new form:

<div class="filename">Views/Items/Create.cshtml</div>

```html
...

@using (Html.BeginForm())
{
  @Html.LabelFor(model => model.Description)
  @Html.TextBoxFor(model => model.Description)
  <input type="submit" value="Add new item" />
}

...
```

Instead of adding a form using plain HTML, we use the helper method `Html.BeginForm()`. First, notice that the `Html.BeginForm()` method is called within a `using` statement: `@using (Html.BeginForm())`. What this `using` statement does is add a closing HTML `</form>` tag to the form. 

Next, it's important to note that `BeginForm()` sends an HTTP `POST` request by default to the current URL. In other words, this form will send a `POST` request to the `Create()` route. In HTML, the opening form tag would look like this:

```html
<form action="/Items/Create" method="post">
```

If we were to load this page in the browser, we can inspect the form and see the above `form action` in the DOM's elements. **This is the reason we no longer use RESTful routing.** The default HTML helper method for a form will create a post request to the route matching the filename it was called in. Since we used the helper method in `/Items/Create.cshtml`, it will make a post request to `/Items/Create`.

In this way, we will be updating our routes to match what is in the [Microsoft documentation for proper routing in ASP.NET Core projects](https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/routing?view=aspnetcore-6.0), such as using `Details` instead of `Show` and using `Create` instead of `New`. You can look in [the documentation for HTML helper methods](https://docs.microsoft.com/en-us/dotnet/api/system.web.mvc.html) to see how to add additional arguments, to modify the action, method, and arguments of forms, inputs, and links created with HTML helper methods, but for the sake of simplicity we will continue forward using this format.

### Strongly Typed HTML Helpers

In the form itself, we use two new HTML helper methods: `LabelFor()` and `TextBoxFor()`. Here's another look at our form:

<div class="filename">Views/Items/Create.cshtml</div>


```html
...

@using (Html.BeginForm())
{
  @Html.LabelFor(model => model.Description)
  @Html.TextBoxFor(model => model.Description)
  <input type="submit" value="Add new item" />
}

...
```

* `LabelFor()` generates a label for a form field.
* `TextBoxFor()` generates a text box form field. 

Both `LabelFor()` and `TextBoxFor()` are **strongly typed HTML helpers** that take use a project's class to define what should be displayed. When an HTML helper method contains "For" in its name, that means it is a strongly typed HTML helper. Just the same, when an HTML helper method does not contain "For" in its name, then it is a **standard HTML helper**.

Notice that both strongly typed HTML helpers have the same argument:

```cs
model => model.Description
```

This is called a C# **lambda expression**. In short, a lambda expression is just a way to write an anonymous function in a condensed fashion. Lambda expressions are used in a variety of languages and are similar to arrow functions in JavaScript. There are a handful of ways we can structure and use lambda expressions and we recommend checking out the [Microsoft documentation on lambda expressions](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/lambda-expressions) to learn more. 

We use lambda expressions in HTML helper methods in order to specify what part of our model we want to use or associate with different elements on the page:

* With `@Html.LabelFor(model => model.Description)` we specify that we want to use the property name "description" for the form label.
* With `@Html.TextBoxFor(model => model.Description)` we specify that we want to use the value put into the text box as the value for the `Item`'s description property. 

### The Benefits of Strongly Typed HTML Helpers

You may be wondering, why bother using strongly typed HTML helper methods? Well, they provide error checking at compile time. For example if we changed the `Item` class `Description` property to be `Title` instead and ran our project after that change, our compiler would let us know that these `LabelFor()` and `TextBoxFor()` HTML helpers need to be updated to reference the updated `Title` property. This would not happen with the standard versions of these HTML helpers, which only use strings as arguments and cannot be checked for errors at compile time. For reference, **here is what our form would look like only using standard HTML helpers:**

<div class="filename">Views/Items/Create.cshtml</div>


```html
...

@using (Html.BeginForm())
{
  @Html.Label("Description")
  @Html.TextBox("Description")
  <input type="submit" value="Add new item" />
}

...
```

The above code snippet is for demonstration only — don't add it to your code.

In the end, it's fine to use a mix of strongly typed and standard HTML helpers. If you use a strongly typed HTML helper, make sure to include an `@model` directive for every the class that you are using with the strongly typed HTML helper.

### HTML Helpers for Other Form Elements

We can also use HTML helper methods to generate many other form elements as well. To learn more, check out the [`IHtmlHelper Interface` documentation](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.rendering.ihtmlhelper?view=aspnetcore-6.0). The number of methods listed can be overwhelming but we recommend taking a look at the options.

## Adding HTML Helper Methods to the Index View
---

Now that we've added a form, we can run our application and create new `Item`s. Let's return to `Views/Items/Index.cshtml` to make a few more updates and get more practice with HTML helper methods. Here's how we'll update our view:

<div class="filename">Views/Items/Index.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@using ToDoList.Models;

<h1>Items</h1>

<ul>
  @foreach(Item item in Model)
  {
    <li>@Html.ActionLink($"{item.Description}", "Details", new { id = item.ItemId })</li>
  }
</ul>

<p>@Html.ActionLink("Add new item", "Create")</p>
```

* We start with a using directive for `@using ToDoList.Models;` so that we don't have to explicitly list that namespace when we reference the `Item` class in our loop.

* We also have a `@foreach` loop that includes an HTML helper method to link to a specific item's detail:

```html
<li>@Html.ActionLink($"{item.Description}", "Details", new { id = item.ItemId })</li>
```

This `ActionLink()` method incorporates a technique called **string interpolation**. This is similar to using a template literal in JavaScript. When we use string interpolation, C# will evaluate an expression inside a string.

### Practice with String Interpolation

We can test this in the `dotnet-script` REPL. Enter `$ dotnet-script` into the command line to access the REPL, and then try this out:

```bash
> string name = "Bob";
> string newGreeting = $"How are you, {name}?";
> newGreeting
"How are you, Bob?"
```

In the example above, we pass the value of `name` into a string using string interpolation: `$"How are you, {name}"`. Because we are using string interpolation, the expression is evaluated and passed into the string.

### Default Routing for `ActionLink()` and Adding an Optional Argument

Let's take another look at the `ActionLink()` method we use in `Items/Index.cshtml`:

```html
<li>@Html.ActionLink($"{item.Description}", "Details", new { id = item.ItemId })</li>
```

Our `ActionLink()` method will route to a `Details` action in the `ItemsController` that we haven't created yet (we will in the next lesson). Notice that we don't need to include the argument `"Items"` in the `ActionLink()` in order to route to the `Details` view within the `ItemsController` from the `Items/Index.cshtml` view. That's because if no controller is specified, an `ActionLink()` will route by default to the controller that matches the view it is in; since we're in the `Items` views, we'll route by default to the  matching action (`Details()`) within the `ItemsController`.

Notice as well, that we're passing a different kind of variable as an optional extra argument to `ActionLink()`: `new { id = item.ItemId }`. Well, the `ActionLink` method can take an object containing data that will be passed as arguments to the controller action it routes to. 

The code `new { id = item.ItemId }` creates an anonymous object with the property `id`; this is how .NET knows which `id` to use in the `Details()` action. However, for .NET to route us to the details page for a specific `Item`, **the property names of the object we pass in _must_ match parameter names used by the target method**. In this case, the property of the anonymous object `id` must match the parameter name in our `Details()` route, like this: `Details(int id)`. We'll make this change in the next lesson.

If we run the server, we'll see that all of the items on our list are now clickable. However, we don't have a corresponding route in our controller yet. In the next lesson, we'll create this route along with a view.

In this lesson, we covered a number of different HTML helper methods, including model directives, link helper methods and form helper methods. While the new syntax may feel a little strange at first, these helper methods can make our lives much easier as developers.
