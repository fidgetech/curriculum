---
title: "📓 5.5.0.6 Authentication with Identity: User Registration Controller"
day: weekend
id: 5-5-0-6-authentication-with-identity-user-registration-controller
hide_table_of_contents: true
---

Now that we've added Identity to our application, let's add functionality that allows users to **register** for accounts. Later, we'll add functionality that allows users to sign in and out.

## Accounts Controller
---

We'll start by adding an `AccountController`. There will be a lot of new code here and we'll go over each addition carefully.

<div class="filename">Controllers/AccountController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using ToDoList.Models;
using System.Threading.Tasks;
using ToDoList.ViewModels;

namespace ToDoList.Controllers
{
  public class AccountController : Controller
  {
    private readonly ToDoListContext _db;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly SignInManager<ApplicationUser> _signInManager;

    public AccountController (UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, ToDoListContext db)
    {
      _userManager = userManager;
      _signInManager = signInManager;
      _db = db;
    }

    public ActionResult Index()
    {
      return View();
    }

    public IActionResult Register()
    {
      return View();
    }

    [HttpPost]
    public async Task<ActionResult> Register (RegisterViewModel model)
    {
      if (!ModelState.IsValid)
      {
        return View(model);
      }
      else
      {
        ApplicationUser user = new ApplicationUser { UserName = model.Email };
        IdentityResult result = await _userManager.CreateAsync(user, model.Password);
        if (result.Succeeded)
        {
          return RedirectToAction("Index");
        }
        else
        {
          foreach (IdentityError error in result.Errors)
          {
            ModelState.AddModelError("", error.Description);
          }
          return View(model);
        }
      }
    }
  }
}
```

* In addition to adding a `using` directive for `Microsoft.AspNetCore.Identity`, we also add one for `System.Threading.Tasks`. This will allow us to use asynchronous Tasks so we can use `async` and `await` to register new users.

* We also include a `using` directive for `ToDoList.ViewModels`. The `ViewModels` namespace will include view models that we haven't created yet, like the `RegisterViewModel`. Note that we haven't covered this yet, and we will in the very next lesson.

* We have private, readonly fields for `_userManager` and  `_signInManager`. The value for each of these will be set to Identity's [`UserManager<TUser>`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.usermanager-1?view=aspnetcore-6.0) and [`SignInManager<TUser>`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.signinmanager-1?view=aspnetcore-6.0) classes respectively. Both of these classes contains methods that we'll use to create users and sign them in. For registration, we'll use methods from the `UserManager<TUser>` class. For signing in and out, we'll use methods from the `SignInManager<TUser>` class.
    
* Note that the values for the `_userManager` and  `_signInManager` fields are set in the `AccountController` class constructor using **dependency injection** to access the services we set up in `Program.cs`. Let's review dependency injection now. 

### Dependency Injection

**Dependency injection** is the act of providing a helpful tool (known as a **service**) to part of an application that needs it _before_ it actually needs it. This ensures that the application doesn't need to worry about locating, loading, finding, or creating that service on its own. 

ASP.NET Core uses dependency injection to make available all services set up in `Program.cs` to controllers and views. We've already used ASP.NET Core's system of dependency injection to set up our access to our database via the `_db` field. 

Right now, we're accessing Identity's `UserManager` and `SignInManager` services, which have been injected into the `AccountController` constructor so that our controller will have access to these services as needed.

This follows what is known as the ["explicit dependencies principle,"](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles#explicit-dependencies) which states that methods and classes should explicitly require any dependencies. This makes the code much easier to read and understand and also ensures that our code will function correctly.

Dependency injection can be a tricky concept to grasp simply because it happens implicitly. It's functionality that's built into the ASP.NET Core framework, which makes it become a bit like [black box](https://en.wikipedia.org/wiki/Black_box) magic. Well, know that when you are just starting out as a developer it's not important to have a deep understanding of dependency injection. If you'd like to learn more about how ASP.NET Core uses dependency injection, we recommend beginning with the [ASP.NET Core documentation on Dependency Injection](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0).

### Routing

Now let's take a look at the routes we've added to `AccountController`. 

Our `Index()` and `Register()` GET routes are straightforward — we just route to the view. In the next lesson, we'll get to creating those views, but as a preview the `Index` view will show a main page of options for accounts (like registration, signing in and out), and the `Register` view will show a form that allows a user to input their personal details to create a new user account.

The `Register()` POST route has a lot of new code, so let's take another look at it before working through the details of what's going on:

<div class="filename">Controllers/AccountController.cs</div>

```csharp
  [HttpPost]
  public async Task<ActionResult> Register (RegisterViewModel model)
  {
    if (!ModelState.IsValid)
    {
      return View(model);
    }
    else
    {
      ApplicationUser user = new ApplicationUser { UserName = model.Email };
      IdentityResult result = await _userManager.CreateAsync(user, model.Password);
      if (result.Succeeded)
      {
        return RedirectToAction("Index");
      }
      else
      {
        foreach (IdentityError error in result.Errors)
        {
          ModelState.AddModelError("", error.Description);
        }
        return View(model);
      }
    }
  }
```

#### Method Signature

This method is an `async Task` because creating user accounts will be an asynchronous action. Our `Register()` action doesn't return an `ActionResult`. Instead, it returns a `Task` containing an `ActionResult`. Remember, the built-in `Task<TResult>` class represents asynchronous actions that haven't been completed yet.

The `Register()` action also takes a `model` of type `RegisterViewModel` as an argument. We will create a `RegisterViewModel` in the next lesson that will represent the user's data when registering for a new account. The data we'll collect will be a user's email and password. We haven't covered the concept of "view models" before and we will in the next lesson. For now, do not worry about it.

#### Method Body

Within the body of the `Register()` POST action method, we first check if our model is valid: if it is (meaning that the registration form has been filled out correctly), then we continue with the registration process, and if not, we return to the registration view. Whenever we see `ModelState.IsValid`, it means that we're using validation attributes in our register's model. We haven't created our register's model yet, but we will in the next lesson.  

The code for registration contains the bulk of the new code. The first thing we do if our model state is valid is create a new `ApplicationUser` with the `Email` from the form submission as its `UserName`:

```csharp
ApplicationUser user = new ApplicationUser { UserName = model.Email };
```

Then, we invoke an async method:

```csharp
IdentityResult result = await _userManager.CreateAsync(user, model.Password);
```

Remember that `_userManager` represents Identity's `UserManager<TUser>` class, which was injected as a service into the `AccountController`. The `UserManager<TUser>` class has a method called `CreateAsync()`. As explained in [the documentation](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.usermanager-1.createasync?view=aspnetcore-6.0), this method will create a user with the provided password.

Our async method will return a new `IdentityResult` object which we call `result`. [The `IdentityResult` class](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityresult?view=aspnetcore-6.0) simply represents the result of an Identity-driven action, like whether it's successful or not.

We use `await` because `CreateAsync()` is an asynchronous action, which means our application needs to wait until `CreateAsync()` successfully returns an `IdentityResult` before we actually define `result`, and before we can move on to process other code.

Note that `CreateAsync()` takes two arguments:

* An `ApplicationUser` with user information;
* A password that will be encrypted when the user is added to the database.

The next thing we do is check whether or not our user creation succeeded. Here's the code for that one more time:

```csharp
IdentityResult result = await _userManager.CreateAsync(user, model.Password);
if (result.Succeeded)
{
  return RedirectToAction("Index");
}
else
{
  foreach (IdentityError error in result.Errors)
  {
    ModelState.AddModelError("", error.Description);
  }
  return View(model);
}
```

The `IdentityResult` object contains a `Succeeded` property that contains a bool. After creating the new user, we check the `result.Succeeded` property in an if statement to determine what to do next: if `CreateAsync()` is successful, the controller redirects to `Index`; if the user creation fails, then the `Register` view is returned with an error message about why the user could not be created.

The `IdentityResult` object contains an `Errors` property that is of the type `IEnnumerable<IdentityError>`. That means it's an iterable collection of `IdentityError` objects. Each error `IdentityError` object itself has a `Description` property that contains a string description of the Identity error that occurred. We use this description to create a new model error to add to our model's state with the following line:

```csharp
ModelState.AddModelError("", error.Description);
```

It may seem surprising to create model errors in the controller, but this is a great way to use ASP.NET Core's built-in tools around model validation to deliver Identity-related errors. 

The `AddModelError()` method takes two arguments: the first is a key for the error so that we can access it in our view, and the second argument is the description of the error that will be displayed. We've listed an empty string `""` for our error keys. Why so? We don't need unique keys for these errors because we'll be displaying all of them at once in a list using the `HTML.ValidationSummary()` method. We'll get into exactly what that looks like in the next lesson. 

After we create a model error for each Identity error and attach it to our `model`'s state, our job is simply to return our model to the view:

```csharp
return View(model);
```

This code will re-display the `Register()` GET action with our same `model` that has the error messages associated with it. If we did not pass in our `model` variable to the view, the `Register()` GET action would display again, but it would have no conception of any errors — it would be a brand new model, just like hitting the refresh button.

## Summary
---

In this lesson, we've added an `AccountController` that includes Identity via dependency injection. We use `async` and `await` to use Identity's built-in `CreateAsync()` method, and model validation to ensure that a new user is registered correctly.

In the next lesson, we'll create the necessary views for users to register an account along with a "ViewModel" that will allow our form to play nicely with Identity.
