---
title: "📓 3.6.2.5 MVC Client: GetDetails()"
id: 3-6-2-5-mvc-client-getdetails
hide_table_of_contents: true
day: tuesday
---

In the last lesson, we created a `GetAll()` method that returns a list of all animals from our API. Now we're ready to add methods to our `Animal` and `ApiHelper` classes for retrieving a single animal's details. The methods we'll add will look quite similar to the ones we already have.

## GET for an Animal's Details
---

Here's the new `GetDetails()` method that we'll add to our `Animal` class

<div class="filename">Models/Animal.cs</div>

```csharp
...
namespace CretaceousClient.Models
{
  public class Animal
  {
    ...

    public static Animal GetDetails(int id)
    {
      var apiCallTask = ApiHelper.Get(id);
      var result = apiCallTask.Result;

      JObject jsonResponse = JsonConvert.DeserializeObject<JObject>(result);
      Animal animal = JsonConvert.DeserializeObject<Animal>(jsonResponse.ToString());

      return animal;
    }
  }
}
```

Why can't we just use one method for both the get all and get details functionality? Couldn't we just add an `id` to the URL string? The redundant code that we are creating doesn't look very DRY. 

Well, even though the core functionality of our methods is the same, they return different types of data and must be separated.

Here, we can see three key differences between our `GetDetails()` and `GetAnimals()` methods:

1. We need to call on the `ApiHelper.Get()` method, instead of the `ApiHelper.GetAll()` method.

2. The `GetDetails()` method returns a singular animal.

3. The `GetDetails()` method takes in the `id` of the animal.

4. The API call within `GetDetails()` results in a JSON _object_ as opposed to a JSON _array_.

Because of all of these reasons, we still need to create a new method for getting a single animal's details even though the code looks nearly identical to getting all animals from the database.

Now let's add the `ApiHelper.Get()` method:

<div class="filename">Models/ApiHelper.cs</div>

```csharp
...
namespace CretaceousClient.Models
{
  public class ApiHelper
  {
    ...

    public static async Task<string> Get(int id)
    {
      RestClient client = new RestClient("http://localhost:5000/");
      RestRequest request = new RestRequest($"api/animals/{id}", Method.Get);
      RestResponse response = await client.GetAsync(request);
      return response.Content;
    }
  }
}
```

This should still look familiar as it reflects the code we use to make API calls to the New York Times quite closely. 

As we discussed in the previous lesson, one key difference is using the `GetAsync()` method, which will throw on a server error. To learn about the details of how error handling with RestSharp works, [visit the docs](https://restsharp.dev/error-handling.html). 

## Adding Controller Action and View
---

Next, we'll add a controller action for `Details()`:

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

  public IActionResult Details(int id)
  {
    Animal animal = Animal.GetDetails(id);
    return View(animal);
  }
}
```

Finally, we'll add a view:

<div class="filename">Views/Animals/Details.cshtml</div>

```html
@{
  ViewData["Title"] = $"Details for {Model.Name}";
}

<h1>All About @Model.Name</h1>

<p>Species: @Model.Species</p>
<p>Age: @Model.Age</p>

@Html.ActionLink("Return to all animals", "Index")
```

In the next lesson in this series, we'll cover new ground and make requests that _send_ data rather than _receive_ it.
