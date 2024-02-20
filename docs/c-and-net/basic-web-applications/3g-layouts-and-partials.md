---
title: "\U0001F4D3 3.2.3.7 Layouts and Partials"
id: 3237-layouts-and-partials
slug: 3237-layouts-and-partials
hide_table_of_contents: true
sidebar_position: 39
day: wednesday
type: lesson
url: 'https://github.com/fidgetech/c-and-net/blob/main/3g_layouts_and_partials.md'
---

In this lesson, we'll learn a few ways to DRY up the project structure of our front-end files.

## Layout Files
---

So far, our view files have contained a full HTML template, including both a `<head>` and a `<body>`. However, we usually only need to change the body of the page. We can turn this code into a **layout view**, which allows us to reuse the same code and content on multiple pages.

In addition to saving us some typing, layout views also give us a way to give our site a uniform look and feel.

Now let's create a layout file for our To-Do List, containing an HTML skeleton and some CSS to use throughout our application.

Inside the `Views` folder, create another folder named `Shared`. This name is a convention that states these views will be "shared" with the project's components. Inside that folder, create a file named `_Layout.cshtml`. The leading underscore is another naming convention that indicates the file is not intended to be used directly. Now let's add some code.

<div class="filename">Views/Shared/_Layout.cshtml</div>

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
    <link rel="stylesheet" href="~/css/styles.css">
  </head>
  <body>
    @RenderBody()
  </body>
</html>
```

This is a standard HTML skeleton using Bootstrap and custom CSS. There's one new addition: the code `@RenderBody()` is where we'll load our views.

Now let's add a view that uses this layout.

<div class="filename">Views/Home/Index.cshtml</div>

```html
@{
  Layout = "_Layout";
}

...
```

The code at the top of the page is called a **Razor code block** and it's another way to indicate Razor code. In this case, we're letting the page know that we want to use `_Layout.cshtml` as the layout file.

Now when we load the page, we'll see that Bootstrap, our custom CSS, and our custom page title have all been applied.

## Partials
---

Let's look at one more feature of the Razor view engine before we move on: **partial views**. If we have a section of a page that we'd like to reuse, we can write it once in a partial view. Then we can insert that partial view where it's needed.

To illustrate, let's create a footer view that we can use.

<div class="filename">Views/Shared/Footer.cshtml</div>

```html
<div id="footer">Bottom div content</div>
```

Let's also add some CSS that will fix the footer to the bottom of the page:

<div class="filename">wwwroot/css/styles.css</div>

```css
div#footer {
	position:fixed;
	bottom:0px;
	left:0px;
	width:100%;
	color:#CCC;
	background:#333;
	padding:8px;
}
```

Finally, we add the following code where we want the partial to load. In this case, we want it to load underneath the page content, so we will put it in our layout file:

<div class="filename">Views/Shared/_Layout.cshtml</div>

```html
<!DOCTYPE html>
<html>
  ...
  <body>
    @RenderBody()
    @await Html.PartialAsync("Footer")
  </body>
</html>
```

Now when we load up the page, there will be a footer on the bottom of the page. All we did was add this code to a view file:

```csharp
@await Html.PartialAsync("Footer")
```

The name of the view file will be the argument of the `Partial` method. If we have a header partial in `Header.cshtml`, we'd use `@await Html.PartialAsync("Header")` to display it.

Just to clarify, we can use the code `@await Html.PartialAsync("viewname")` in _any_ view, not just layout files. We can use this to construct our web pages in sections and stitch them together as needed. This makes our view code much more DRY.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for To Do List: 9\_static\_content\_layouts\_and\_partials](https://github.com/epicodus-lessons/section-2-to-do-list-csharp-net6/tree/9_static_content_layouts_and_partials)**
