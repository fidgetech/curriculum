---
title: "\U0001F4D3 3.2.0.15 Using Forms with MVC"
id: 32015-using-forms-with-mvc
slug: 32015-using-forms-with-mvc
hide_table_of_contents: true
sidebar_position: 15
day: weekend
type: lesson
url: 'https://github.com/fidgetech/c-and-net/blob/main/0o_using_forms_with_mvc.md'
---

In this lesson, we'll learn how to add forms to our virtual postcard application so anyone can create a custom postcard for their friends.

## Integrating Forms
---

### Adding a New Route

First, we'll add a new `Form()` route to contain our form:

<div class="filename">FriendLetter/Controllers/HomeController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using FriendLetter.Models;

namespace FriendLetter.Controllers
{
  public class HomeController : Controller
  {

    ...

    [Route("/form")]
    public ActionResult Form() { return View(); }

  }
}
```

When we navigate to _localhost:5000/form_, the code in this route will execute.

### Creating a Form View

In our `Views/Home` directory, we'll create a file called `Form.cshtml` and add the following:

<div class="filename">FriendLetter/Views/Home/Form.cshtml</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Create a Custom Postcard!</title>
    <link 
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
      crossorigin="anonymous">
    <meta charset='utf-8'>
  </head>
  <body>
    <h1>Fill in your name and your friend's name to create your custom postcard!</h1>
    <form action="/postcard" method="post">
     <label for="sender">Sender's Name</label>
     <input id="sender" name="sender" type="text">
     <label for="recipient">Recipient's Name</label>
     <input id="recipient" name="recipient" type="text">
     <button type="submit">Go!</button>
    </form>
  </body>
</html>
```

This form looks fairly similar to ones we've worked with in the past but there are some key differences.

* Notice the `<form>` tag includes `action="/postcard"`. This tells ASP.NET Core MVC _where_ to submit the data provided through this form. **This attribute must be set to the path of another route in our controller.** That means if we use a route decorator, it will be set to the path we've specified in the decorator. We'll create a `"/postcard"` route soon.

* We create a `<label>` and `<input>` for each piece of info the form collects. `<input>`s must have 3 attributes: `name`, `id`, and `type`:

  * The `id` can be anything as long as it's unique on this page. Generally, the value will be the same for both `name` and `id`.

  * The `<input>` tag has many different possible values for the `type` attribute. Examples include dates, colors, and numbers. This one is set to `"text"`.

* The `<label>` tag provides the text to display next to the input box. It takes one attribute called `for`, which should match the `id` attribute of the corresponding `<input>` tag. For example, the `<input>` tag with attribute `id="recipient"` should have a `<label>` tag with the attribute `for="recipient"`.

* The `<button>` tag creates the button that submits the form. **It has one attribute called `type`. This attribute must be set to `"submit"`.** Otherwise, the form won't work correctly.

Note that we haven't created the route that the new form will send it's data to. Let's do that next.

## Dynamically Rendering Form Data
---

Now that we have a form to submit data, we need to add a route that gathers the data, and a new view that displays the data. 

### Route

Let's first add the code to retrieve the user's form input. We'll call this new route `Postcard()`. We need to make sure that the `Postcard()` route has a `/postcard` route decorator to handle this, because **the route's path must match the form's `action` attribute**. When they match, ASP.NET Core will automatically execute the code in this route when the form is submitted.

Our new route will look like this:

<div class="filename">FriendLetter/Controllers/HomeController.cs</div>

```csharp
...

[Route("/postcard")]
public ActionResult Postcard(string recipient, string sender)
{
  LetterVariable myLetterVariable = new LetterVariable();
  myLetterVariable.Recipient = recipient;
  myLetterVariable.Sender = sender;
  return View(myLetterVariable);
}

...
```

Here we create a new `Postcard()` route. This time, the route's method takes arguments: a `string` for both `recipient` and `sender`.

* Because we told our `<form>` in `Form.cshtml` to have an `action="/postcard"`, the route matching the `/postcard` path is automatically invoked. That's our `Postcard()` route.

* Our form has two `<input>`s, one with a `name="sender"` attribute and another with a `name="recipient"` attribute. These are the parameters we pass into the route method.  **Note: the name of the parameters must match the value of the `name` attribute on the form inputs. This must be an exact match or it will not work.**

* This route can automatically access those values via the parameters we pass into the `Postcard()` route method.

Next, let's create the view that will display the form data in a postcard.

### View

Since the route name is `Postcard()`, we need to create a view called `Postcard.cshtml`. The new view will look like our previous friend letter in `Letter.cshtml`, but this one will insert custom names gathered from our form. 

We'll add the following code to the `Postcard.cshtml`:

<div class="filename">FriendLetter/Views/Home/Postcard.cshtml</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>A Postcard For You!</title>
    <link 
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
      crossorigin="anonymous">
    <meta charset='utf-8'>
  </head>
  <body>
    <h1>Hello From Afar</h1>
    <p>Dear @Model.Recipient,</p>
    <p>How are you? I hope that you are having a nice weekend. I'm vacationing in the Iceland while I learn programming!</p>
    <p>@Model.Recipient, you would not believe how cold it is here. I should have gone to Hawaii instead.</p>
    <p>But I like programming a lot, so I've got that going for me.</p>
    <p>Looking forward to seeing you soon. I'll bring you back a souvenir.</p>
    <p>Cheers,</p>
    <p>Travel Enthusiast @Model.Sender</p>
  </body>
</html>
```

If we launch the application and visit _localhost:5000/form_, we'll see our form! If we fill it out and submit it, we'll automatically be taken to our letter at _localhost:5000/postcard_ with custom sender and recipient names from our form.

That's the end of this walkthrough on creating a basic web application with ASP.NET Core MVC. Click the link below to check out the finished example project for the "Friend Letter" project.

---

**[<i class="glyphicon glyphicon-folder-open"></i>  Example GitHub Repo for Friend Letter](https://github.com/epicodus-lessons/section-2-friend-letter-csharp-net6)**
