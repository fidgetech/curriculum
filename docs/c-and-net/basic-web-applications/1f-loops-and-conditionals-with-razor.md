---
title: "\U0001F4D3 3.2.1.7 Loops and Conditionals with Razor"
id: 3217-loops-and-conditionals-with-razor
slug: 3217-loops-and-conditionals-with-razor
hide_table_of_contents: true
sidebar_position: 25
day: monday
type: lesson
url: >-
  https://github.com/fidgetech/c-and-net/blob/main/1f_loops_and_conditionals_with_razor.md
---

In the last lesson, we updated our controller code to return a `List` of `Item`s. In this lesson, we're ready to update our view to properly display that `List`. In the process, we'll cover adding loops and conditionals to a view.

## Adding a `foreach` Loop
---

Let's start by updating our `Index.cshtml` so it can loop through `Item`s. We'll use Razor markup syntax to write a standard C# `foreach` loop within the HTML.

<div class="filename">Views/Home/Index.cshtml</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My To-Do List!</title>
    <link 
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
      crossorigin="anonymous">
  </head>
  <body>
    @using ToDoList.Models;

    <h1>To Do List</h1>
    <ul>
      @foreach (Item item in Model)
      {
        <li>@item.Description</li>
      }

    </ul>
    <a href="/items/new">Add a new item.</a>
  </body>
</html>
```

We start with **a `using` directive**: `@using ToDoList.Models;`. We can include using directives in views as long as they are prefaced with the usual `@` to transition from HTML to C#. We will go over why we are using this in a moment.

Next, we put a `foreach` loop inside an unordered list. We specify that we will loop through each `item` of type `Item` in `Model`. Within the `@foreach` statement, we wrap each `item`s `Description` in an `li` tag.

Note that we need the `using` directive so we can declare that `item` is of type `Item` without having to list the namespace explicitly when we reference the `Item` class in the `foreach` statement:

```csharp
...
  @foreach (Item item in Model)
...
```

If we did not include the `@using ToDoList.Models;` directive, we would have to list out the namespace for the `Item` class explicitly, like this:

```csharp
...
  @foreach (ToDoList.Models.Item item in Model)
...
```

In the end, this `foreach` loop looks exactly like any other C# loop other than the fact that we use `@` to intersperse C# with HTML elements.

## Adding a Conditional
---

Let's add a conditional to handle delivering a message to the user when there are no items in the list yet.

<div class="filename">Views/Home/Index.cshtml</div>

```html
...
<h1>To Do List</h1>

@if (Model.Count == 0)
{
  <p>There are no items in the list.</p>
}
<ul>
  @foreach (Item item in Model)
  {
    <li>@item.Description</li>
  }
</ul>
...
```

If `Model.Count == 0`, our conditional lets the user know the list has no items. Otherwise, it will loop through the list.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for To Do List: 3\_list\_redirects\_loops\_and\_conditionals](https://github.com/epicodus-lessons/section-2-to-do-list-csharp-net6/tree/3_list_redirects_loops_and_conditionals)**

