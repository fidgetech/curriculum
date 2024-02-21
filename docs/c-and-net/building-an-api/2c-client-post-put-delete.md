---
title: "📓 3.6.2.6 MVC Client: POST, PUT, and DELETE"
id: 3626-mvc-client-post-put-and-delete
hide_table_of_contents: true
day: tuesday
---

Over the last two lessons, we've written methods to GET data from our API. Now we're ready to add methods to POST, PUT, and DELETE data. 

## POST
---

We'll start by adding functionality to CREATE animals. Here's the new `Post()` method that we'll add to `Models/ApiHelper.cs`:

<div class="filename">Models/ApiHelper.cs</div>

```csharp
...
namespace CretaceousClient.Models
{
  public class ApiHelper
  {
    ...

    public static async void Post(string newAnimal)
    {
      RestClient client = new RestClient("http://localhost:5000/");
      RestRequest request = new RestRequest($"api/animals", Method.Post);
      request.AddHeader("Content-Type", "application/json");
      request.AddJsonBody(newAnimal);
      await client.PostAsync(request);
    }
  }
}
```

First, notice that `newAnimal` is a string. We will convert our objects into JSON before passing them to our `ApiHelper` class.

The arguments passed into the `RestRequest()` method specify the route and method that should be passed into the API controller. 

When making a POST request to our API (or any request that will be modifying our database), we need to add a header and a body. This way, our API can recognize the data types it receives and pass in the right argument for the controller route parameter(s). 

We're also using the `PostAsync()` method, which will throw on a server error, just like the `GetAsync()` method we used in the last two lessons. To learn about the details of how error handling with RestSharp works, [visit the docs](https://restsharp.dev/error-handling.html). 

The corresponding method in your `Animal` model should look like this:

<div class="filename">Models/Animal.cs</div>

```csharp
...
namespace CretaceousClient.Models
{
  public class Animal
  {
    ...

    public static void Post(Animal animal)
    {
      string jsonAnimal = JsonConvert.SerializeObject(animal);
      ApiHelper.Post(jsonAnimal);
    }
  }
}
```

We only need to convert the `Animal` object into JSON and then call our helper method.

Let's see how we'll call on `Animal.Post()` from our `AnimalsController` next.

### Adding Controller Actions and Views

Here are the two new controller actions that we'll add to `AnimalsController`:

<div class="filename">Controller/AnimalsController.cs</div>

```csharp
...
  public ActionResult Create()
  {
    return View();
  }

  [HttpPost]
  public ActionResult Create(Animal animal)
  {
    Animal.Post(animal);
    return RedirectToAction("Index");
  }
...
```

Next, we'll start by adding a link to a create page from `Animals/Index.cshtml`. We'll update our view to include a new section called "Actions" where users can click a link to create new animals. 

Here how we'll update this view:

<div class="filename">Views/Animals/Index.cshtml</div>

```html
@{
    ViewData["Title"] = "Animals";
}

<h1>All Cretaceous Animals</h1>

<h3>Actions:</h3>

<p>@Html.ActionLink("Add a new animal to the park", "Create")</p>

<h3>Animals:</h3>
<ol>
@foreach (Animal animal in Model)
{
  <li><strong>@animal.Name</strong> the @animal.Species | <a href="/Animals/Details/@(animal.AnimalId)">View Details</a></li>
}
</ol>
```

Next, let's make the `Animals/Create.cshtml` view. This view will look similar to all of the CREATE forms we've put together in the past. 

<div class="filename">Views/Animals/Create.cshtml</div>

```html
@{
  ViewData["Title"] = "Create Animal";
}

@model CretaceousClient.Models.Animal

<h4>Add a new animal to Cretaceous Park</h4>

@using (Html.BeginForm())
{
  @Html.LabelFor(model => model.Name)
  @Html.TextBoxFor(model => model.Name)
  <br />
  @Html.LabelFor(model => model.Species)
  @Html.TextBoxFor(model => model.Species)
  <br />
  @Html.LabelFor(model => model.Age)
  @Html.TextBoxFor(model => model.Age)
  <br />
  <br />
  <input type="submit" value="Add new animal" class="btn btn-primary"/>
}

<br />
<p>@Html.ActionLink("Back to all animals", "Index")</p>
```

## PUT
---

Next, we'll add functionality to UPDATE animals. Here's the new `Put()` method that we'll add to `Models/ApiHelper.cs`:

<div class="filename">Models/ApiHelper.cs</div>

```csharp
...
namespace CretaceousClient.Models
{
  public class ApiHelper
  {
    ...

    public static async void Put(int id, string newAnimal)
    {
      RestClient client = new RestClient("http://localhost:5000/");
      RestRequest request = new RestRequest($"api/animals/{id}", Method.Put);
      request.AddHeader("Content-Type", "application/json");
      request.AddJsonBody(newAnimal);
      await client.PutAsync(request);
    }
  }
}
```

Our PUT functionality is very similar to our POST functionality. The key difference is that we need to include an `id` for our PUT functionality. Unlike with a POST request, where we are simply adding a record to the database, we are actually modifying an existing record — and we need that record's `id` to correctly modify it.

Here's the `Animal.Put()` method: 

<div class="filename">Models/Animal.cs</div>

```csharp
...
namespace CretaceousClient.Models
{
  public class Animal
  {
    ...

    public static void Put(Animal animal)
    {
      string jsonAnimal = JsonConvert.SerializeObject(animal);
      ApiHelper.Put(animal.AnimalId, jsonAnimal);
    }
  }
}
```

The only difference between POST and PUT in our model is the `ApiHelper` method we call, and the inclusion of the animal's `AnimalId` property.

Let's see how we'll call on `Animal.Put()` from our `AnimalsController` next.

### Adding Controller Actions and Views

Here are the two new controller actions that we'll add to `AnimalsController`:

<div class="filename">Controller/AnimalsController.cs</div>

```csharp
...
  public ActionResult Edit(int id)
  {
    Animal animal = Animal.GetDetails(id);
    return View(animal);
  }

  [HttpPost]
  public ActionResult Edit(Animal animal)
  {
    Animal.Put(animal);
    return RedirectToAction("Details", new { id = animal.AnimalId});
  }
...
```

Next, we'll start by adding a link to the edit page from `Animals/Details.cshtml`. We'll simply add a new `Html.ActionLink()` above the existing one that routes us back to the `Animals/Index.cshtml`.

Here how we'll update this view:

<div class="filename">Views/Animals/Details.cshtml</div>

```html
@{
  ViewData["Title"] = $"Details for {@Model.Name}";
}

<h1>All About @Model.Name</h1>

<p>Species: @Model.Species</p>
<p>Age: @Model.Age</p>

<p>@Html.ActionLink("Edit details", "Edit", new { id = @Model.AnimalId })</p>
<p>@Html.ActionLink("Return to all animals", "Index")</p>
```

Next, we'll create the actual `Animals/Edit.cshtml` view. Here our form will closely match the edit forms we've created in the past:

<div class="filename">Views/Animals/Edit.cshtml</div>

```html
@{
  ViewData["Title"] = $"Edit {Model.Name}";
}

@model CretaceousClient.Models.Animal

<h4>Edit @Model.Name</h4>

@using (Html.BeginForm())
{
  @Html.HiddenFor(model => model.AnimalId)
  @Html.LabelFor(model => model.Name)
  @Html.TextBoxFor(model => model.Name, new { @Value = Model.Name})
  <br />
  @Html.LabelFor(model => model.Species)
  @Html.TextBoxFor(model => model.Species, new { @Value = Model.Species})
  <br />
  @Html.LabelFor(model => model.Age)
  @Html.TextBoxFor(model => model.Age, new { Value = Model.Age})
  <br />
  <br />
  <input type="submit" value="Edit animal" class="btn btn-primary"/>
}

<br />
<p>@Html.ActionLink("Back to details", "Details", new {id = @Model.AnimalId})</p>
```

## DELETE
---

The last functionality we need to add is the ability to DELETE animals. Here's the new `Delete()` method that we'll add to `Models/ApiHelper.cs`:

<div class="filename">Models/ApiHelper.cs</div>

```csharp
...
namespace CretaceousClient.Models
{
  public class ApiHelper
  {
    ...

    public static async void Delete(int id)
    {
      RestClient client = new RestClient("http://localhost:5000/");
      RestRequest request = new RestRequest($"api/animals/{id}", Method.Delete);
      request.AddHeader("Content-Type", "application/json");
      await client.DeleteAsync(request);
    }
  }
}
```

Our DELETE method won't require a body — only the id of the `Animal` we're going to delete.

Next, we'll add a corresponding `Animal.Delete()` method. This will be the simplest we've written so far:

<div class="filename">Models/Animal.cs</div>

```csharp
...
namespace CretaceousClient.Models
{
  public class Animal
  {
    ...

    public static void Delete(int id)
    {
      ApiHelper.Delete(id);
    }
  }
}
```

Let's see how we'll call on `Animal.Delete()` from our `AnimalsController` next.

### Adding Controller Actions and Views

Here are the two new controller actions that we'll add to `AnimalsController`:

<div class="filename">Controller/AnimalsController.cs</div>

```csharp
...
  public ActionResult Delete(int id)
  {
    Animal animal = Animal.GetDetails(id);
    return View(animal);
  }

  [HttpPost, ActionName("Delete")]
  public ActionResult DeleteConfirmed(int id)
  {
    Animal.Delete(id);
    return RedirectToAction("Index");
  }
...
```

Remember that we name the second action POST `DeleteConfirmed()` because if we named it POST `Delete()`, we'd have a conflict caused by two methods having the same signature: name and parameters. That's why it's called `DeleteConfirmed()`. We add the attribute `ActionName("Delete")` so that our `DeleteConfirmed()` POST action can still be found by the name `Delete()`. This ensures that our form made with HTML helper methods in `Animals/Delete.cshtml` works as expected. 

Next, we'll add a link to the new `Animals/Delete.cshtml` view in our `Animals/Details.cshtml` view. We'll add one new `Html.ActionLink()`:

<div class="filename">Views/Animals/Details.cshtml</div>

```html
@{
  ViewData["Title"] = $"Details for {@Model.Name}";
}

<h1>All About @Model.Name</h1>

<p>Species: @Model.Species</p>
<p>Age: @Model.Age</p>

<p>@Html.ActionLink("Edit details", "Edit", new { id = @Model.AnimalId })</p>
<p>@Html.ActionLink("Delete animal", "Delete", new { id = @Model.AnimalId })</p>
<p>@Html.ActionLink("Return to all animals", "Index")</p>
```

Next, we'll add the `Animals/Delete.cshtml` view:

<div class="filename">Views/Animals/Delete.cshtml</div>

```html
@{
  ViewData["Title"] = $"Delete {Model.Name}";
}

@model CretaceousClient.Models.Animal

<h4>Are you sure you want to delete @Model.Name?</h4>

@using (Html.BeginForm())
{
  <input type="submit" value="Delete" class="btn btn-primary"/>
}

@Html.ActionLink("Back to details", "Details", new { id = @Model.AnimalId})
```

We're done! Now our MVC application has full CRUD capability! 

To test out the functionality of our Cretaceous Park MVC client, make sure of the following:

* Both the MVC and API projects should be running.
* Make sure the MVC and API projects are running on different port numbers.
* Make sure that the request URLs in the MVC `ApiHelper` class are pointing to the right port number for the API.
* Using HTTPS should be fine once development is finished. If you need to continue development or use Postman to test out your API, make sure to use HTTP to avoid issues related to security certificates.

You can follow the above steps for the basic troubleshooting of issues with getting the API and MVC client communicating as expected.  

## Next Steps
---

We've just scratched the surface of what we should do to make a robust frontend. What's left? We could...

* Create search or filter functionality in our MVC so that we can make use of the support for query strings that we added to our API's `Get()` route. To learn how to add parameters to an MVC, check out [this RestSharp documentation on query strings](https://restsharp.dev/usage.html#query-string).
* Add model validation in our MVC so that our forms catch errors before sending anything to our database.
* Add model validation in our API so that our API can deliver quality error messages to any client. Note that even though we covered how to do this, model validation was not actually implemented in the Cretaceous Park API example project.
* Add error handling in our MVC for API calls that do not return as expected (200, 201, 204 HTTP status codes).
* Learn how to optimize our API calls and de/serialization by learning how to use other [RestSharp](https://restsharp.dev/) methods.
* Update our MVC frontend to work with any further exploration implemented in the API: pagination, authentication, versioning, or CORS.
* Explore the boilerplate MVC template and update its content or styles to make the Cretaceous Park Client look as professional as possible.

Happy coding!

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for Cretaceous Park MVC Client](https://github.com/epicodus-lessons/section-6-cretaceous-park-client-csharp-net6/)**
