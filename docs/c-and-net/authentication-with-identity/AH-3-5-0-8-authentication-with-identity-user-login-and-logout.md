---
title: "📓 3.5.0.8 Authentication with Identity: User Login and Logout"
day: weekend
---

Now that users can successfully register for new accounts, let's add the logic necessary for them to sign in and out of their accounts.

## Logging In
---

First, let's walk through the process of logging a user in.

### ViewModel

Our login page will contain a form asking for the user's email and password. We'll create the necessary `ViewModel` in the `ViewModels` folder to manage this:

<div class="filename">ViewModels/LoginViewModel.cs</div>

```csharp
using System.ComponentModel.DataAnnotations;

namespace ToDoList.ViewModels
{
  public class LoginViewModel
  {
    [Required]
    [EmailAddress]
    [Display(Name = "Email Address")]
    public string Email { get; set; }
    
    [Required]
    [DataType(DataType.Password)]
    public string Password { get; set; }
  }
}
```

Again, notice we follow naming conventions by including the `ViewModel` prefix at the end of our View Model's filename.

### View

Next, we'll create the `View` containing our login form:

<div class="filename">Views/Account/Login.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@using ToDoList.ViewModels

@model LoginViewModel

<h2>Log in with your account</h2>
<hr />

@if(!ViewData.ModelState.IsValid) 
{
  @Html.ValidationSummary("Please fix the following error(s) and then resubmit the form:") 
}

@using (Html.BeginForm())
{
  @Html.LabelFor(m => m.Email)
  @Html.TextBoxFor(m => m.Email)

  @Html.LabelFor(m => m.Password)
  @Html.EditorFor(m => m.Password)

  <input type="submit" value="Log in" />
}

<p>@Html.ActionLink("Register for an account", "Register")</p>
<p>@Html.ActionLink("Back to accounts page", "Index")</p>
```

### Controller Actions

Now we can add the necessary actions to the controller. We'll include a `GET` to retrieve and display the Login `View` in addition to a `POST` to go through the process of actually logging a user in once they submit the login form.

Let's take a look at the full code and then we'll explain it in detail.

<div class="filename">AccountController.cs</div>

```csharp
...
    public ActionResult Login()
    {
      return View();
    }

    [HttpPost]
    public async Task<ActionResult> Login(LoginViewModel model)
    {
      if (!ModelState.IsValid)
      {
        return View(model);
      }
      else
      {
        Microsoft.AspNetCore.Identity.SignInResult result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, isPersistent: true, lockoutOnFailure: false);
        if (result.Succeeded)
        {
          return RedirectToAction("Index");
        }
        else
        {
          ModelState.AddModelError("", "There is something wrong with your email or username. Please try again.");
          return View(model);
        }
      }
    }
...
```

We'll focus on the `Login()` POST method which once again uses an asynchronous method. Note that there are several similarities with our `Register()` POST method:

* Both methods are `async` and return a `Task<ActionResult>`.
* Both take a `ViewModel` as an argument.
* Both methods check if the model is valid, and if not return to the view to inform the user of their errors.
* Both use an Identity method ending with `Async`. All async Identity methods have `Async` appended to them.
* Both methods have a `result` that must `await` the completion of an Identity method.

Now let's take a closer look at the following line:

```csharp
Microsoft.AspNetCore.Identity.SignInResult result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, isPersistent: true, lockoutOnFailure: false);
```

Remember that we've injected a `SignInManager` service, which is being referenced in the `signInManager` variable. The `SignInManager` class includes the `PasswordSignInAsync()` method, which has a self-explanatory name: it's an async method that allows users to sign in with a password.

`PasswordSignInAsync()` takes four parameters: `userName`, `password`, `isPersistent`, and `lockoutOnFailure`. For now we're only handling username and password, so we set explicit boolean values for `isPersistent` and `lockoutOnFailure`.

However, just like in our `Register()` action, we want to ensure our application doesn't freeze or break if Identity can't successfully authenticate an account. That's why we add an `if` statement based on whether the `result` has succeeded or not. The `Microsoft.AspNetCore.Identity.SignInResult` object has a `Succeeded` boolean property to help with this. If our sign in action has succeeded, then we'll be redirected to our accounts index page. 

If our sign in action has failed, well, there's no `SignInResult.Errors` property to use to create error messages for our user. There are individual properties with information about different signin states, which you can review in [the [`SignInResult`] docs](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.signinresult.failed?view=aspnetcore-6.0). 

So what should we do? This is really a trick question: we don't actually want to give specific error messages to the user about why a sign in attempt has failed. That's because specific error messages could be delivered to malicious users that improve their ability to break into an account. For example, it's better to state "there was an issue with your username or password" than to state the more specific "that password does not match our records". So this is exactly what we do in case of a signin failure. Let's look at the code once more:

```csharp
Microsoft.AspNetCore.Identity.SignInResult result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, isPersistent: true, lockoutOnFailure: false);
if (result.Succeeded)
{
  return RedirectToAction("Index");
}
else
{
  ModelState.AddModelError("", "There is something wrong with your email or username. Please try again.");
  return View(model);
}
```

We still create a new `ModelState` error, but our error message is very generic.

### Displaying Login Confirmation

Since the action will redirect to _Index_ if the user successfully logs in, let's add some code to `Index.cshtml` to display different information based on whether or not the user is logged in:

<div class="filename">Views/Account/Index.cshtml</div>

```html
@{
  Layout = "_Layout";
}

<h2>Authentication with Identity</h2>
<hr />
@if (User.Identity.IsAuthenticated)
{
  <p>Hello @User.Identity.Name!</p>
}
else
{
  <p>@Html.ActionLink("Register", "Register")</p>
  <p>@Html.ActionLink("Log in", "Login")</p>
}
<p>@Html.ActionLink("Home", "Index", "Home")</p>
```

We added an `if/else` statement to display a greeting to the user if they are logged in. If they aren't, we display links to register or log in. Our if statement relies on accessing the `User` variable, which is a property called [RazorPageBase.User](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.razor.razorpagebase.user?view=aspnetcore-6.0), but is of the type [System.Security.Claims.ClaimsPrincipal](https://learn.microsoft.com/en-us/dotnet/api/system.security.claims.claimsprincipal?view=net-6.0). 

We can access two properties through the `User.Identity` property: 

* [`User.Indentity.Name`](https://learn.microsoft.com/en-us/dotnet/api/system.security.principal.iidentity.isauthenticated?view=net-6.0) gives us the currently logged in user's name (for us, their email) or null if there is none.
* [`User.Indentity.IsAuthenticated`](https://learn.microsoft.com/en-us/dotnet/api/system.security.principal.iidentity.name?view=net-6.0) gives us `true` if there's an authenticated user (meaning, a user who is logged in), or `false` if there is no currently logged in user.

Note that we can access both of the above properties anywhere in our views, as needed. `User.Indentity.IsAuthenticated` is particularly useful for creating conditionals that display information only to authenticated users.

## Logging Out
---

Next, let's give the user the ability to log out. Instead of creating a separate GET and POST controller action and view, we'll create just a POST controller action and add a form directly to our account's index page.

### Controller Action

Add a `LogOff()` action to the controller.

<div class="filename">AccountController.cs</div>

```csharp
...
[HttpPost]
public async Task<ActionResult> LogOff()
{
  await _signInManager.SignOutAsync();
  return RedirectToAction("Index");
}
...
```

This method is straightforward. `SignInManager` has the asynchronous method `SignOutAsync()` that signs the user out. Everything else in this method should look familiar at this point.

Note that we don't need to add any error handling or model validation here, since a user should only be able to log out if they're already logged in.

### View

We're going to add a form to invoke the `LogOff()` POST action directly to our `Account/Index.cshtml` view. Here's what our view should now look like:

<div class="filename">Views/Account/Index.cshtml</div>

```html
@{
  Layout = "_Layout";
}

<h2>Authentication with Identity</h2>
<hr />
@if (User.Identity.IsAuthenticated)
{
  <p>Hello @User.Identity.Name!</p>
  @using (Html.BeginForm("LogOff", "Account"))
  {
    <input type="submit" class="btn btn-primary" value="Log out" />
  }
}
else
{
  <p>@Html.ActionLink("Register", "Register")</p>
  <p>@Html.ActionLink("Log in", "Login")</p>
}
<p>@Html.ActionLink("Home", "Index", "Home")</p>
```

We now have complete functionality for users to sign up, sign in, and sign out. Woo-hoo!

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for To Do List with Authentication and Authorization: `2_authentication`](https://github.com/epicodus-lessons/section-5-to-do-list-with-auth-csharp-net6/tree/2_authentication)**
