---
title: "📓 5.2.0.14 Dynamic Views with Razor Markup Syntax"
day: weekend
id: 5-2-0-14-dynamic-views-with-razor-markup-syntax
hide_table_of_contents: true
---

So far, our views have only used basic HTML. In this lesson, we'll explore how to add logic to our views using the model we created in the last lesson with the **Razor markup syntax**.

Let's personalize the greeting in our virtual postcard application so that our application renders specific names instead of just _Dear Friend_.

## Dynamic View Data with Razor
---

To do this, we'll use **Razor**, a markup syntax that allows us to add C# logic to views. It's already built into the MVC framework so we don't have to install anything special.

We can update our `Letter.cshtml` view to use Razor syntax like this:

<div class="filename">FriendLetter/Views/Home/Letter.cshtml</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello Friend!</title>
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
    <p>How are you? I hope that you are having a nice weekend. I'm vacationing in Iceland while I learn programming! </p>
    <p>@Model.Recipient, you would not believe how cold it is here. I should have gone to Hawaii instead.</p>
    <p>But I like programming a lot, so I've got that going for me. </p>
    <p>Looking forward to seeing you soon. I'll bring you back a souvenir. </p>
    <p>Cheers,</p>
    <p>Travel Enthusiast Jane</p>
  </body>
</html>
```

We've replaced two instances of the term _friend_ with the following code:

```html
@Model.Recipient
```

### Razor Syntax

Let's break down this Razor syntax further:

* The `@` character indicates the start of Razor code. Razor will evaluate anything following this symbol.

* `Model` is a property that Razor provides so we can access the model that's passed into the view. We haven't passed in a model into the view yet, but we will soon. In this case, we'll be passing in an instance of the `LetterVariable` class that we created in the last lesson. 

* Since we're passing in a `LetterVariable` object into the view as Razor's `Model` property, that means we can access the `LetterVariable`'s `Recipient` property. This will let us put a unique name in the view instead of the more generic _friend_.

### Updating a Controller to Use a Model

Next, we need to make our `FriendLetter` model available to our controller:

<div class="filename">FriendLetter/Controllers/HomeController.cs</div>

```csharp
using FriendLetter.Models;

...
```

We'll update our `Letter()` route to create a new instance of our `LetterVariable` class and provide it to the view:

<div class="filename">FriendLetter/Controllers/HomeController.cs</div>

```csharp
...
  public class HomeController : Controller
  {
    ...

    [Route("/")]
    public ActionResult Letter()
    {
      LetterVariable myLetterVariable = new LetterVariable();
      myLetterVariable.Recipient = "Lina";
      return View(myLetterVariable);
    }
  }
...
```

Our `Letter()` route creates a new instance of the type `LetterVariable` and saves it to the variable `myLetterVariable`. We then access the the `myLetterVariable.Recipient` property and give it a value. Finally, we pass the `myLetterVariable` into the view. This ensures our corresponding `Letter.cshtml` view now has access to our `LetterVariable` object.

Our application is using what's called **model binding** to pass data from one part of an application to another. Because instances of `@Model` in the view represent the argument we've passed into the `View()` method, `@Model.Recipient` is the same as calling `myLetterVariable.Recipient`.

If we restart the server and visit _http://localhost:5000_, we'll see the name `"Lina"` is now rendered in our view in two locations.

With this code in place, we can easily change the name of the `Recipient` again. We just need to update `myLetterVariable.Recipient = "Lina";` in the `HomeController`'s `Letter()` method.

### Adding a Sender

Now let's update our application to allow any `Sender` to create a letter to their friends. To accommodate this, we'll need to make the sender of the letter dynamic, just like the recipient. We can easily do this by adding another property to the `LetterVariables` model class:

<div class="filename">FriendLetter/Models/LetterVariable.cs</div>

```csharp
namespace FriendLetter.Models
{
  public class LetterVariable
  {
    public string Recipient { get; set; }
    public string Sender { get; set; }

    ...
...
```

Here we've simply added a `Sender` property to our existing class.

Now we'll make a quick update to our route method:

<div class="filename">FriendLetter/Controllers/HomeController.cs</div>

```csharp
...

    [Route("/")]
    public ActionResult Letter()
    {
      LetterVariable myLetterVariable = new LetterVariable();
      myLetterVariable.Recipient = "Lina";
      myLetterVariable.Sender = "Jasmine";
      return View(myLetterVariable);
    }

...
```

Finally, we'll add a dynamic `@Model.Sender` variable to our existing view:

<div class="filename">FriendLetter/Views/Home/Letter.cshtml</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello Friend!</title>
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
    <p>How are you? I hope that you are having a nice weekend. I'm vacationing in Iceland while I learn programming! </p>
    <p>@Model.Recipient, you would not believe how cold it is here. I should have gone to Hawaii instead.</p>
    <p>But I like programming a lot, so I've got that going for me. </p>
    <p>Looking forward to seeing you soon. I'll bring you back a souvenir. </p>
    <p>Cheers,</p>
    <p>Travel Enthusiast @Model.Sender</p>
  </body>
</html>
```

Now when we restart the server and reload the page, we'll see that both the `Recipient` and `Sender` are dynamically added to the HTML.
