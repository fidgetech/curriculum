---
title: "📓 3.6.0.05 API: Create and Read"
day: weekend
id: 3-6-0-05-api-create-and-read
hide_table_of_contents: true
---

Now that we have seeded animal data, we'll create our first custom API endpoints for CREATE and READ functionality. We'll add:

* A GET endpoint at `http://localhost:5000/api/animals` that will return all animal objects.
* A GET endpoint at `http://localhost:5000/api/animals/{id}` that will return one animal object based on its `AnimalId` property.
* A POST endpoint at `http://localhost:5000/api/animals` that will add a new animal to our database and requires a request body with an object literal of an animal.

In the process, we'll learn about general conventions when creating an API controller and important features of controller actions for controllers marked with the `[ApiController]`.

## READ for Animals
---

We'll start by creating an `AnimalsController.cs` with two new methods. One will return all the animals in our application while the other will return just one animal based on its `AnimalId` property.

<div class="filename">Controllers/AnimalsController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CretaceousApi.Models;

namespace CretaceousApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AnimalsController : ControllerBase
  {
    private readonly CretaceousApiContext _db;

    public AnimalsController(CretaceousApiContext db)
    {
      _db = db;
    }

    // GET api/animals
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Animal>>> Get()
    {
      return await _db.Animals.ToListAsync();
    }

    // GET: api/Animals/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Animal>> GetAnimal(int id)
    {
      Animal animal = await _db.Animals.FindAsync(id);

      if (animal == null)
      {
        return NotFound();
      }

      return animal;
    }
  }
}
```

The controller code looks very similar to code we might use when building a web application, with a few key differences. Let's work through all of them now!

### Implicit Using Directives

First take note that we're using the `System.Collections.Generic` and `System.Threading.Tasks` namespaces, but we don't need to explicitly list them in our `AnimalsController` because we've enabled implicit using directives in our project file (`.csproj` file).

### Attribute Routing

Then, notice the attribute that we add to the top of the controller class:

```csharp
[Route("api/[controller]")]
```

With the above `[Route]` attribute, we're specifying that the base request URL for the `AnimalsController` is `/api/animals`. So for example, when we make a GET request to `http://localhost:5000/api/animals`, we'll access the `Get()` action in our `AnimalsController`, which will then handle returning all of the animals in our database.

### We Never Return Views

Another key difference is that we aren't returning a view. Our `Get()` action returns an `ActionResult` of type `<IEnumerable<Animal>>`, and our `GetAnimal()` action returns an `ActionResult` of type `<Animal>`. In our web applications, we didn't need to specify a type for our `ActionResult` because we were always returning a view. 

### We Return HTTP Status Codes

Our GET endpoints not only return animals or an animal, they also return **HTTP status codes**; when a successful GET request is returned from an API, there will also be a 200 OK HTTP status code returned. When we return a collection of animals or an animal object, the 200 OK status code is automatically added. 

When we want to generate another type of HTTP status code, we'll have to make use of [`ControllerBase` class methods](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase?view=aspnetcore-6.0#methods). We can see an example of this in the `GetAnimal()` action: if no animal matching the specified id is returned, then we return `NotFound()`, which will send a 404 Not Found HTTP status code as our API's response.

Take a moment to familiarize yourself with the [`ControllerBase` class methods](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase?view=aspnetcore-6.0#methods). We won't use all of them in this Cretaceous Park API walkthrough, though you may find some of them useful in other APIs that you build.

### .NET Automatically Converts C# into JSON

You might be wondering... if our `Get()` and `GetAnimal()` endpoints returns C# objects, how do those get turned into JSON? Well, the answer is that .NET automatically converts C# into JSON for us.

### It's a Best Practice to Use Async Controller Actions

You may also have noticed that all of our controller action methods are asynchronous. It's a best practice to make our controller action methods asynchronous so that they can scale to handle more requests. This doesn't make any individual request get processed faster; instead it frees up our application to handle all requests asynchronously, which means that our application can handle more requests. To learn more about this topic, check out [this article on asynchronous code from the MSDN magazine](https://learn.microsoft.com/en-us/archive/msdn-magazine/2014/october/async-programming-introduction-to-async-await-on-asp-net). It's an older article, but the concepts are still relevant today.

### We'll Use More HTTP Verb Templates, and These Contribute to Routing

Another key difference is with the [HTTP verb templates](https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/routing?view=aspnetcore-6.0#http-verb-templates) that we use, like `[HttpGet]` and `[HttpPost]`. While these aren't new, we'll now use more of them because we won't be making requests directly from an HTML5 form, which only supports GET and POST actions.

Also, these HTTP verb templates are meant to specify what [HTTP action method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) is needed to make the request. This means that not only do we need the right request URL, like `http://localhost:5000/api/animals/`, we also need the right HTTP action method. For `Get()` and `GetAnimal()`, they both require a GET Http action.

Notice the `GetAnimal()` action's attribute: `[HttpGet("{id}")]`. As we can see, the `HttpGet()` method accepts an argument; when we include `"{id}"` as the argument, this configures the endpoint to expect another value added to the end of it: `/api/animals/{id}`, where `{id}` is a variable for a value. With the `GetAnimal()` action parameter `int id`, we further specify that the value of `{id}` should be an integer. This means we can now make a GET request with an animal's id in order to only get data for the animal that matches the specified id, just like this:

```
http://localhost:5000/api/animals/1
```

Note that the variable name `id` in `[HttpGet("{id}")]` and in `GetAnimal(int id)` needs to match exactly. The value for the parameter `id` comes directly from the request URL. If we do the above GET request, it will return the animal object that has an `AnimalId` of 1. 

### Test the Endpoints

At this point, we've covered all of the salient differences between an API controller and one for an MVC application. Go ahead and test out both of the routes in Postman or Swagger UI and confirm that they are functioning as expected.

```
GET http://localhost:5000/api/animals
GET http://localhost:5000/api/animals/2
```

## CREATE for Animals
---

Next, we'll add the ability to add animals to our database. Here's the new controller action method that we'll add to the `AnimalsController`:

<div class="filename">Controllers/AnimalsController.cs</div>

```csharp
...
    // POST api/animals
    [HttpPost]
    public async Task<ActionResult<Animal>> Post(Animal animal)
    {
      _db.Animals.Add(animal);
      await _db.SaveChangesAsync();
      return CreatedAtAction(nameof(GetAnimal), new { id = animal.AnimalId }, animal);
    }
...
```

Most of the features of our new `Post()` method we covered when we explained our `Get()` and `GetAnimal()` action methods:

* This is an asynchronous method so that our API is free to handle other requests while certain async code is being processed. 
* We don't return a view.
* We specify the HTTP action method with the Http verb template `[HttpPost]`.

Other code is new. First notice that the `Post()` method takes an `Animal` parameter, which we call `animal`. This `animal` object comes from the **body** of the request. Since we've specified that our `AnimalsController` is an `[ApiController]`, our controller knows to infer that the value for the `animal` parameter should come from the request body, and how to bind that data to an `Animal` object. This is all thanks to built-in functionality for controllers marked with the `[ApiController]` attribute.

We could optionally explicitly state how controller action parameters should be bound. For example, we could use the `[FromBody]` attribute to specify that the value of `animal` is found in the request body:

```csharp
    [HttpPost]
    public async Task<ActionResult<Animal>> Post([FromBody] Animal animal)
    {
      ...
    }
```

However doing so is optional with controllers marked with the `[ApiController]` attribute. To learn more about model binding, visit [the MS docs on "Binding Source Parameter Inference"](https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-6.0#binding-source-parameter-inference) .

The next thing we should cover is the new method `CreatedAtAction()` that our `Post()` action uses to return a response:

```csharp
return CreatedAtAction(nameof(GetAnimal), new { id = animal.AnimalId }, animal);
```

`CreatedAtAction()` is another [`ControllerBase` class method](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase?view=aspnetcore-6.0#methods) that specifically handles returning an HTTP status code of 201 Created. More than just that, this method lets us specify the [Location](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location) of the newly created object. What this means is that our `Post()` controller action will return the newly created `Animal` object to the user along with a "201 Created" status code, rather than the default 200 OK with no animal object. 

The `CreatedAtAction()` method takes 3 arguments to specify the location of the new object:
  * The name of the controller action, in this case the `GetAnimal()` controller action specified via `nameof(GetAnimal)`.
  * The route values required for the controller action in a new anonymous object, in this case an `id` parameter for the `GetAnimal()` controller action.
  * The resource that was created in this action.

### Creating an `Animal`

Let's use our new `Post()` action to add an animal to our database. We'll send a POST request to `http://localhost:5000/api/animals` with a **body**. We can create an animal object by passing an **object literal** in the body of our API call:

```json
{
  "species": "Tyrannosaurus Rex",
  "name": "Elizabeth",
  "age": 8
}
```

**Note that we should never include an `animalId` property, as that value should always be set by our database.**

Here's how adding a body to a POST request to `http://localhost:5000/api/animals` looks using Postman:

[Adding a body to a POST request to `http://localhost:5000/api/animals` using Postman.](/images/c-sharp/aspnet-web-api-postman-post-request-with-body.png)

When we make the POST request, we'll get a `201 Created` status, which means the call was successful.

Then, if we make a GET request to `http://localhost:5000/api/animals`, we'll see our new `Animal` will be returned in the response. 

Up next, we'll add update and delete functionality, completing full CRUD for our API.
