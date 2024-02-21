---
title: "📓 3.6.2.4 MVC Client: GetAll()"
id: 3-6-2-4-mvc-client-getall
hide_table_of_contents: true
day: tuesday
---

Over the weekend, you learned how to create an API. In the last course section you learned how to make a simple API call from a client (a console app and an MVC app). Over the next several lessons, we're going to put these concepts together and build an MVC client with full CRUD functionality that will interact with our API.

## Cretaceous Park Client Project Structure
---

First, let's discuss the structure of this project. We _could_ put the API and the client (the application consuming the API data) in the same repository. However, the point of creating an APIs is that it is modular and can be accessed from _any_ frontend client that can make API calls — a JavaScript web app, a Ruby and Rails web app, a React Native phone app, or something else entirely! With that in mind, it makes more sense to keep our backend API and frontend MVC projects in separate repositories, running on different ports.

The process of building out our client will be very similar to previous lessons where we learned how to use RestSharp and Newtonsoft.Json, so these steps will not be laid out in as much detail as the initial lessons where we built an MVC application that made calls to the New York Times API. The few important differences will be highlighted.

We'll also scaffold an ASP.NET Core MVC app with the `dotnet new` templating tool. Instead of deleting the boilerplate models and controllers like we did in our API, we'll leave them intact. Because of this, our application will be an odd mix of boilerplate and Cretaceous Park. However, it will give us the opportunity to explore the `dotnet new` MVC template a bit more than we have in the past.

### Project Setup

Outside of `CretaceousApi.Solution`, create a new directory called `CretaceousClient.Solution`, containing a `.gitignore` file and a README. Your `.gitignore` should contain `obj`, `bin`, `appsettings.json`, and `appsettings.*.json` if you will be adding sensitive data to it.

Next, initialize Git and commit your `.gitignore` to your Git history. 

Next, run the following command within the `CretaceousClient.Solution/` directory:

```
$ dotnet new mvc -o CretaceousClient --framework net6.0
``` 

Next, add the `RestSharp` and `NewtonSoft.Json` packages as shown in [Making an API Call with RestSharp](https://old.learnhowtoprogram.com/c-and-net/authentication-with-identity/making-an-api-call-with-restsharp) and [Deserializing API Responses with Newtonsoft.Json](https://old.learnhowtoprogram.com/c-and-net/authentication-with-identity/deserializing-api-responses-with-newtonsoft-json):

```
$ dotnet add package RestSharp --version 108.0.3
$ dotnet add package Newtonsoft.Json --version 13.0.2
```

The next thing we'll want to do is disable a nullable context for the entire project. Comment out the line `<Nullable>enable</Nullable>` within `CreatceousClient.csproj`.

<div class="filename">CretaceousClient.csproj</div>

```csharp
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <!-- <Nullable>enable</Nullable> -->
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

</Project>
```

We'll leave implicit using directives enabled in our `.csproj` file, however you are welcome to comment it out if you prefer.

Because we're disabling a project-wide nullable context, we'll also have to update the boilerplate `Models/ErrorViewModel.cs` to create a nullable context, because it uses a nullable type. Add the following to the top of the file:

<div class="filename">Models/ErrorViewModel.cs</div>

```csharp
#nullable enable
...
```

Just as we can see in `ErrorViewModel.cs`, we can still use nullable types in any file throughout our project, we just need to create [a nullable context](https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references#nullable-contexts) using a directive like `#nullable enable`. To review more information about nullable types, start with the LearnHowToProgram.com lesson on [Nullable Types](https://old.learnhowtoprogram.com/fidgetech-3-c-and-net/3-1-test-driven-development-with-c/3-1-2-6-nullable-types).

## Create the `Animal` and `ApiHelper` Models
---

Next, we'll create an `Animal` class in the `Models` folder, utilizing the properties we defined in `CretaceousApi` along with a `GetAnimals()` method. This requires very little new code and is very similar to code we built in the lessons on building an MVC app that queries the New York Times API.

<div class="filename">Models/Animal.cs</div>

```csharp
using System.Collections.Generic;
using System;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace CretaceousClient.Models
{
  public class Animal
  {
    public int AnimalId { get; set; }
    public string Name { get; set; }
    public string Species { get; set; }
    public int Age { get; set; }

    public static List<Animal> GetAnimals()
    {
      var apiCallTask = ApiHelper.GetAll();
      var result = apiCallTask.Result;

      JArray jsonResponse = JsonConvert.DeserializeObject<JArray>(result);
      List<Animal> animalList = JsonConvert.DeserializeObject<List<Animal>>(jsonResponse.ToString());

      return animalList;
    }
  }
}
```

Let's take a closer look at the `Animal.GetAnimals()` method. This method handles calling a method that queries our API for all `Animal` objects and deserializing the API's response.

Within this method we call on the `ApiHelper.GetAll()` method; we have yet to create that class and method. However, one thing to note now is that we'll need a different `Animal` class and `ApiHelper` class method for each type of API call (GET, POST, PUT, DELETE) we want to make, because each returns a different format of data. 

Notice that we don't pass an API key as an argument to `ApiHelper.GetAll();`. Your personal API will not require a key unless you add Token-Based Authentication through your further exploration.

Next, take note that the `jsonResponse` variable is of the type `JArray` as opposed to `JObject`. Since we're getting a _collection_ of results, we need to expect an array of objects. Remember that these types are from the `Newtonsoft.Json` library.

Next, let's actually create the `ApiHelper` class. This class will contain the definition for our `ApiHelper.GetAll()` method which actually handles making a call to our Cretaceous Park API.

<div class="filename">Models/ApiHelper.cs</div>

```csharp
using System.Threading.Tasks;
using RestSharp;

namespace CretaceousClient.Models
{
  public class ApiHelper
  {
    public static async Task<string> GetAll()
    {
      RestClient client = new RestClient("http://localhost:5000/");
      RestRequest request = new RestRequest($"api/animals", Method.Get);
      RestResponse response = await client.GetAsync(request);
      return response.Content;
    }
  }
}
```

Your API call should include the port that `CretaceousApi` is set to listen to. For the purposes of this project, we assume it listens on port `5000` using HTTP, as it does in the example repo. If you choose to deploy an API at some point, you'll need to update the URL to include the domain of the deployed site instead of `localhost`. The endpoint itself for this particular call will be `api/animals`. Also note that when you are done developing, you should revert back to using HTTPS with your API, and make a corresponding update to the domain in your MVC client requests.

Notice that we're not using the `ExecuteAsync()` RestSharp method as we did in the New York Times API call example project. Now we're using `GetAsync()`. There's actually [a variety of methods](https://restsharp.dev/usage.html#making-a-call) we can use to make an API call with RestSharp. The advantage of using `GetAsync()` is that it will throw an error if the server returns an error to us. This is vital if we want to create a robust frontend application. We'll use similar methods for other requests:

* `PostAsync()`
* `PutAsync()`
* `DeleteAsync()`

Take note that we won't be including additional error handling or model validation as we put together a basic MVC frontend to communicate with our Cretaceous Park API. If you want to learn more about error handling with RestSharp, [visit the docs](https://restsharp.dev/error-handling.html).

## Adding a Controller and View
---

In order to view our list of animals in our MVC client, we still need to do the following:

* Create a controller route
* Create the corresponding views

Let's start by creating the `AnimalsController.cs`:

<div class="filename">Controllers/AnimalsController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using CretaceousClient.Models;

namespace CretaceousClient.Controllers;

public class AnimalsController : Controller
{
  public IActionResult Index()
  {
    List<Animal> animals = Animal.GetAnimals();
    return View(animals);
  }
}
```

Notice that we're using a [file-scoped namespace](https://devblogs.microsoft.com/dotnet/welcome-to-csharp-10/#file-scoped-namespaces) for the `CretaceousClient.Controllers` namespace.

Next, we'll create the view:

<div class="filename">Views/Animals/Index.cshtml</div>

```html
@{
    ViewData["Title"] = "Animals";
}

<h1>All Cretaceous Animals:</h1>

<ol>
@foreach (Animal animal in Model)
{
  <li><strong>@animal.Name</strong> the @animal.Species | <a href="/Animals/Details/@(animal.AnimalId)">View Details</a></li>
}
</ol>
```

We've set a value for `ViewData["Title"]` so that we set the title of our `index.cshtml` webpage. The other boilerplate views specify the title for each webpage, so we will do the same in our views. If we don't, there will be no title. To learn more about `ViewData` and `ViewBag` to set a webpage title, [visit the docs](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/overview?view=aspnetcore-6.0#using-viewdata-and-viewbag-simultaneously).

Otherwise, notice that there's no layout specified. That's because the `dotnet new` MVC template includes a `_ViewStart.cshtml` file that specifies what all views should start with: the layout file!

<div class="filename">Views/_ViewStart.cshtml</div>

```
@{
    Layout = "_Layout";
}
```

More specifically, the code in `_ViewStart.cshtml` is run before the code in any view is run. To learn more, [check out the MS Docs](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/layout?view=aspnetcore-6.0#running-code-before-each-view).

Next, let's add a link to `Animals/Index.cshtml` to our project's navbar. Add the following navbar item to the `<nav>` element in `_Layout.cshtml`:

```html
<li class="nav-item">
    <a class="nav-link text-dark" asp-area="" asp-controller="Animals" asp-action="Index">See Animals</a>
</li>
```

And here's what the `<nav>` element should now look like:

<div class="filename">Views/Shared/_Layout.cshtml</div>

```html
...

<nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
    <div class="container-fluid">
        <a class="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">CretaceousClient</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
            <ul class="navbar-nav flex-grow-1">
                <li class="nav-item">
                    <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Index">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" asp-area="" asp-controller="Animals" asp-action="Index">See Animals</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

...
```

Curious where the navbar and styling comes from? Well **Bootstrap**, of course! 

Also note that the boilerplate `.cshtml` files makes use of [tag helpers](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/intro?view=aspnetcore-6.0) like `asp-area` and `asp-controller`, which we haven't worked with a lot. To learn more about tag helpers, [visit the MS docs](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/intro?view=aspnetcore-6.0).

Finally, let's update the welcome message in `Home/Index.cshtml` so it is about our Cretaceous Park website:

<div class="filename">Views/Home/Index.cshtml</div>

```html
@{
    ViewData["Title"] = "Home Page";
}

<div class="text-center">
  <h1 class="display-4">Welcome to the Cretaceous Park!</h1>
  <p>Get to know a few of <a href="/animals">our animals</a> from the Cretaceous period!</p>
</div>
```

And that's it! If you want to test out this functionality so far, make sure that you have both the API and client servers running.

In the next lesson in this series, we'll discuss making an API call for a single animal's details.
