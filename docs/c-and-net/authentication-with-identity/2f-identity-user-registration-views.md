---
title: "\U0001F4D3 3.5.0.7 Authentication with Identity: User Registration ViewModel, Validation, and Views"
id: 3507-authentication-with-identity-user-registration-viewmodel-validation-and-views
slug: 3507-authentication-with-identity-user-registration-viewmodel-validation-and-views
hide_table_of_contents: true
sidebar_position: 7
day: weekend
type: lesson
url: https://github.com/fidgetech/c-and-net/blob/main/2f_identity_user_registration_views.md
---

In the last lesson, we added a controller for registering new users. In this lesson, we'll create the corresponding views as well as our first `ViewModel`. In the process, we'll learn about a few new validation attributes (also called "data annotations") and Identity's default password requirements and how to override them.

By the end of the lesson, we'll be able to create new users in the database via a registration form.

## ViewModels
---

Sometimes we want to gather or present data in our views that doesn't exactly correspond to our Models. When this happens, we can use a **ViewModel** instead of a Model. Just like a Model, with ViewModels we specify what data and data types we want in our view. 

Technically, whatever model we pass to the view becomes the view's model. However, we can make a further distinction among our model types: we can create Models that shape our business logic, like `Item`, which also shape our database entities, and we can create ViewModels that are only used to represent data in our views. 

We're going to create a ViewModel for our registration page, because we want to gather data that doesn't exactly correspond to our `ApplicationUser` class. To register users, we want to gather a user's email address and password, and we also want the user to verify they've entered their password correctly, so we want them to enter in their password a 2nd time. While the email address and password are data relevant to the `ApplicationUser` class, the second password confirmation is not. That's data that we just want to use during registration, but we don't need to permanently store that data in the new  `ApplicationUser` we create. Because of this, using a ViewModel is a great choice to represent our registration data.

Let's take a look at our new registration ViewModel so that we can make this discussion more concrete. In the process, we'll also learn about new validation attributes we can use. 

### Adding a ViewModel

We can save ViewModels to their own directory or within our existing `Models/` directory. Both approaches are completely valid, and we'll opt for the former choice. Create a `ViewModels/` subdirectory within the `ToDoList/` project directory now.

It's standard naming convention to end each ViewModel's file and class name with `ViewModel`. By that convention, we'll call our ViewModel for user registration `RegisterViewModel`. Go ahead and create a new file called `RegisterViewModel.cs` within the `ViewModels/` subdirectory. 

Then, add the following code to the new `RegisterViewModel.cs` file:

<div class="filename">ViewModels/RegisterViewModel.cs</div>

```csharp
using System.ComponentModel.DataAnnotations;

namespace ToDoList.ViewModels
{
  public class RegisterViewModel
  {
    [Required]
    [EmailAddress]
    [Display(Name = "Email Address")]
    public string Email { get; set; }

    [Required]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    [Required]
    [DataType(DataType.Password)]
    [Display(Name = "Confirm password")]
    [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
    public string ConfirmPassword { get; set; }
  }
}
```

As we can see, this ViewModel looks similar to a typical Model: it's really just a grouping of properties and data annotations. Some of these data annotations may be unfamiliar, so we'll go over them now.

* [The `[DataType(DataType.Password)]` annotation](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations.datatypeattribute?view=net-6.0) lets us specify what how data should look or be formatted, more than a conventional C# type like `string` indicates on its own.
* [The `[Display]` annotation](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations.displayattribute?view=net-6.0) lets us specify a different way for our property to be displayed. Looking at  `[Display(Name = "Confirm password")]` as an example, we're specifying that if we use the property's name in our UI that it should be displayed as "Confirm Password" instead of "ConfirmPassword". 
* [The `[EmailAddress]` annotation](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations.emailaddressattribute?view=net-6.0) handles validating any input associated with this property to ensure it meets the expected email address format.
* [With the `[Compare]` annotation](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations.compareattribute?view=net-6.0), we can tell our program to compare two properties and return an error if they don't match.

Now to summarize our previous conversation, registration is a good use case for a ViewModel because we don't want to save `ConfirmPassword` to the `ApplicationUser` that we create when we register a new user. Additionally, we can add validation attributes to our ViewModel that will validate the data in the registration view, but won't interfere or change the data saved in our business model `ApplicationUser` or how it is saved to our database. This is a good separation between UI and business logic.

Let's create the view for user registration next.

## Registration View
---

Now let's take care of the `Register` view, which will include a form asking the user to enter an email address, password, and a confirmation password. Add a new directory in `Views` called `Account` and add a `Register.cshtml` file to the new directory with the following code:

<div class="filename">Views/Account/Register.cshtml</div>

```html
@{
  Layout = "_Layout";
}

@using ToDoList.ViewModels

@model RegisterViewModel

<h2>Register a new user</h2>
<hr />

@if(!ViewData.ModelState.IsValid) 
{
  @Html.ValidationSummary("Please fix the following error(s) and then resubmit the form:") 
}

@using (Html.BeginForm("Register", "Account", FormMethod.Post))
{
  @Html.LabelFor(user => user.Email)
  @Html.TextBoxFor(user=> user.Email)

  @Html.LabelFor(user=> user.Password)
  @Html.EditorFor(user=> user.Password)

  @Html.LabelFor(user=> user.ConfirmPassword)
  @Html.EditorFor(user=> user.ConfirmPassword)

  <input type="submit" value="Register" />
}

<p>@Html.ActionLink("Back to accounts page", "Index")</p>
```

Most of this code should be familiar from previous forms, with a few new elements.

We use the HTML helper method `EditorFor` for our `Password` and `ConfirmPassword` fields. The `EditorFor` helper method will change the input's `type` attribute based on our `[DataType(DataType.Password)]` validation attribute; in this case, it will create the input with `type="password"`, which will turn any input into black dots. Note that we can't use the `TextBoxFor` HTML helper in this case, because `type` is always set to `"text"`.

We're also using a new HTML helper method to display error messages if our validation determines that our model is invalid: `ValidationSummary()`. This method generates a bullet point list of all of the current errors. We can optionally pass an argument to the `ValidationSummary()` method to give an introduction to our list. Because we've passed "Please fix the following error(s) and then resubmit the form:", the result will look like this:

![Error messages visible in the registration page due to invalid model.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/aspnet_identity_form_validation.png)

Using `ValidationSummary()` is particularly helpful for us, because it handles displaying all of the Identity errors that we (possibly) generate when we try to create a new user. This means that we don't have to worry about itemizing each of error with the `ValidationMessage()` or `ValidationMessageFor()` methods, which only handles displaying one single error message each. 

The last thing to notice here is that we wrap our `ValidationSummary()` in an if statement. Let's look at the code once more:

```csharp
@if(!ViewData.ModelState.IsValid) 
{
  @Html.ValidationSummary("Please fix the following error(s) and then resubmit the form:") 
}
```

The if statement checks if our model's state is invalid, and if so, then displays the summary of errors. If we don't include the if statement, then we would see "Please fix the following error(s) and then resubmit the form:" on our screen regardless of whether or not there are any errors. This would be confusing to users. We could instead choose to not include an introductory sentence for the list simply by invoking `@Html.ValidationSummary()` with no arguments. This choice is up to you.

You may be wondering, what's `ViewData`? Well, **ViewData** is a Dictionary that holds the data that's passed to the view, including `ModelState` as well as anything that we add to our ViewBag in our controllers. If you want more information, [the MS Docs have great examples for ViewData and ViewBag](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/overview?view=aspnetcore-6.0#weakly-typed-data-viewdata-viewdata-attribute-and-viewbag) that clearly illustrate their differences.

## Account Index View and Navigation
---

Next, let's add a view for our `Index()` route:

<div class="filename">Views/Account/Index.cshtml</div>

```html
@{
  Layout = "_Layout";
}

<h2>Authentication with Identity</h2>
<hr />
<p>@Html.ActionLink("Register", "Register")</p>
<p>@Html.ActionLink("Home", "Index", "Home")</p>
```

Let's also add a link to the account index in our homepage:

<div class="filename">Views/Home/Index.cshtml</div>

```html
...
<p>@Html.ActionLink("Create or manage an account", "Index", "Account")</p>
```

## Default Identity Password Requirements and Overriding Them
---

Identity's default requirements for a password is at least six characters, a capital letter, a lowercase letter, a number, and a special character. We can override these requirements, leave them as is, or increase them. We'll start by adding a validation attribute for this, and then later we'll learn how to change these default settings.

Since password requirements check for many different things, the best way to verify all of them is with a regular expression (also called "regex"). We don't need to be an expert with regular expressions to research how to use them. In fact the regular expression we'll use was taken from [this stack overflow discussion](https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a). However, there are many regex generator sites out there, and with practice you can quickly teach yourself and remember the basics.

Let's add our new validation attribute to the `Password` property:

<div class="filename">ViewModels/RegisterViewModel.cs</div>

```csharp
...

[Required]
[DataType(DataType.Password)]
[RegularExpression("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$", ErrorMessage = "Your password must contain at least six characters, a capital letter, a lowercase letter, a number, and a special character.")]
public string Password { get; set; }

...
```

Here we're using the `[RegularExpression]` validation attribute, which includes the regex and an error message to display if the requirements are not met. 

If you want a breakdown of the regex, visit the stack overflow article that is linked above. Note that backslashes `\` in C# strings are considered characters that are meant to indicate an escape out of the string. This means that if we want to include a backslash in a string we must include two `\\`, one as the escape character and one as the actual backslash. To learn more about this, check out [this article from Microsoft](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-messages/cs1009).

### Overriding Default Requirements

Depending on the type of application, we may want different password requirements. While we're still developing an application, we may actually want looser requirements to quickly create and login dummy accounts for experimentation. After all, it's a hassle to type out a long password every time when we are in development mode.

We can override Identity's default settings by configuring our Identity service in `Program.cs`. Here are the default requirements:

<div class="filename">Program.cs</div>

```csharp
...

builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
          .AddEntityFrameworkStores<ToDoListContext>()
          .AddDefaultTokenProviders();

builder.Services.Configure<IdentityOptions>(options =>
{
  // Default Password settings.
  options.Password.RequireDigit = true;
  options.Password.RequireLowercase = true;
  options.Password.RequireNonAlphanumeric = true;
  options.Password.RequireUppercase = true;
  options.Password.RequiredLength = 6;
  options.Password.RequiredUniqueChars = 1;
});

WebApplication app = builder.Build();

...
```

And here's how we can change them:

```csharp
builder.Services.Configure<IdentityOptions>(options =>
{
  options.Password.RequireDigit = false;
  options.Password.RequireLowercase = false;
  options.Password.RequireNonAlphanumeric = false;
  options.Password.RequireUppercase = false;
  options.Password.RequiredLength = 0;
  options.Password.RequiredUniqueChars = 0;
});
```

The configuration above allows us to input a password of a single character to create a new user. Even though the `RequiredLength` property is 0, we can't actually put in an empty password because we have a validation attribute in place that states that some input for the `RegisterViewModel.Password` property is required. 

Keep in mind that the above settings should never be used in a production environment — only during development to make our lives a bit easier.

Finally, **note that when we change our password requirements in `Program.cs`, we need to make a corresponding update to our `[RegularExpression]` validation attribute for the `RegisterViewModel.Password` property.** 

## Testing the Functionality
---

We now have everything we need to create user accounts. Run the app and click on the link in the homepage to register an account. Try entering bad inputs to test out the model validation. Then try putting in accurate information to register a new user. If everything is successful, we'll be directed back to _Index_. 

If you want to see specifically what an Identity error message looks like, do the following: create a user, and then try to create another user with the exact same email. You should get an error message that says something like "Username 'test@test.com' is already taken". That's Identity's very own error handling. 

We can also confirm that we've successfully created a new user by checking the data in our MySQL database. To do this, navigate to the database in MySQL Workbench and right-click on _AspNetUsers_. Click on _Select Rows — Limit 1000_. Our database should now include a new user.

In the next lesson, we'll integrate logic to allow users to sign in with their newly-created accounts.

### Review of Conventions for ViewModels

The class and file name for a ViewModel contains the suffix `ViewModel`, as in `RegisterViewModel`. 

We can save our ViewModels to our `Models/` directory, or create a separate subdirectory called `ViewModels/`. Both approaches are acceptable.

We use a ViewModel when we want to define a model that's used just in the view.