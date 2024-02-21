---
title: "📓 3.6.0.12 Documenting Your API"
id: 3-6-0-12-documenting-your-api
hide_table_of_contents: true
day: weekend
---

In this lesson we'll learn the details that you should include in a README to document your API. 

We'll also revisit the topic of including public access to Swagger documentation and learn how to hide API routes from Swagger. In the end, we want other developers to run our projects and explore the source code, so we won't have a big reason to prevent access to Swagger documentation. 

## How to Document API Endpoints
---

When we consider how we want to document our API's endpoints, we need to make sure that we consider what all is in our API. For example, in our API:

* We have multiple endpoints, all of which we want to include in our documentation.
* Some endpoints include optional query strings that we'll want to document.
* Some endpoints require a body to be included along with the request.

With that we have a solid list of information we need to include in our README. And other than including the right information, we'll also want to include examples! Let's get into each topic and what sufficient documentation looks like.

### Endpoints

To document out projects endpoints, a code block or markdown table will work well to list the endpoints and the [HTTP request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) for the endpoint. Here's what this should look like for our AnimalsController:

```
GET http://localhost:5000/api/animals/
GET http://localhost:5000/api/animals/{id}
POST http://localhost:5000/api/animals/
PUT http://localhost:5000/api/animals/{id}
DELETE http://localhost:5000/api/animals/{id}
```

It's helpful to specify that `{id}` in the URL is a variable and it should be replaced with the id number of the animal the user wants to GET, PUT, or DELETE.

### Optional Query String Parameters for GET Request

To explain the optional query strings we can include in GET requests to `http://localhost:5000/api/animals/`, we can use a markdown table, including the parameter name, the data type, whether it's required, and a short description:

| Parameter   | Type        |  Required    | Description |
| ----------- | ----------- | -----------  | ----------- |
| species     | String      | not required | Returns animals with a matching species value |
| name        | String      | not required | Returns animals with a matching name value |
| minimumAge  | Number      | not required | Returns animals that have an age value that is greater than or equal to the specified minimumAge value |

It's helpful to explain that these query strings provide a way to filter the animals.

Next, make sure to include example queries. The following query will return all animals with a species value of "Dinosaur":

```
GET http://localhost:5000/api/animals?species=dinosaur
```

The following query will return all animals with the name "Matilda":

```
GET http://localhost:5000/api/animals?name=matilda
```

The following query will return all animals with an age of 10 or older:

```
GET http://localhost:5000/api/animals?minimumAge=10
```

It's possible to include multiple query strings by separating them with an `&`:

```
GET http://localhost:5000/api/animals?species=dinosaur&minimumAge=10
```

### Additional Requirements for POST Request

Make sure to explain that a body is required for POST request. For example, we could explain:

When making a POST request to `http://localhost:5000/api/animals/`, you need to include a **body**. Here's an example body in JSON:

```json
{
  "species": "Tyrannosaurus Rex",
  "name": "Elizabeth",
  "age": 8
}
```

### Additional Requirements for PUT Request

We need to explain the body required for PUT requests, too. For example, we could explain:

When making a PUT request to `http://localhost:5000/api/animals/{id}`, you need to include a **body** that includes the animal's `animalId` property. Here's an example body in JSON:

```json
{
  "animalId": 1,
  "species": "Tyrannosaurus Rex",
  "name": "Lizzy",
  "age": 9
}
```

And here's the PUT request we would send the previous body to:

```
http://localhost:5000/api/animals/1
```

Notice that the value of `animalId` needs to match the id number in the URL. In this example, they are both 1.

### Documentation on Further Exploration Objectives

Remember that the inclusion of a further exploration objective like authentication, pagination, versioning, or CORS all of these will affect the documentation we include on our APIs endpoints. Make sure that your documentation includes the necessary information so that a user can know what the further exploration objective is, what it does, and how to interact with it.

### Reminder: Make your READMEs Engaging by Using a Variety of Markdown

This is a reminder that we can make our READMEs more engaging by using a variety of markdown features. For example, GitHub has its very [own flavor of markdown](https://github.github.com/gfm/) that has different features from other markdown "flavors". 

Also note that you can include emojis, images, and gifs, as well as formatting to align content in a variety of ways.

When our README is engaging and informative, then we're sure to have more people visiting our project to run it and check out the source code. We're also giving ourselves credit for the skills and knowledge that our project demonstrates.

## Should Swagger Documentation Be Made Public?
---

In the template used by `dotnet new` to scaffold an ASP.NET Core Web API, Swagger UI is only set to be accessible during development. As we've seen, we can use Swagger UI to send actual requests to our API. If we make that publicly available, a malicious user could access key information about our API or change our API in ways that we don't want. What's more, Swagger UI can slow up the normal functioning of our API.

So, Swagger is usually used for developers in development, and public-facing documentation is created elsewhere. 

That said, Swagger can be used for public documentation. However, this should only be done with careful consideration of what endpoints we want visible. We can change which controllers or actions are visible through using the [`ApiExplorerSeetingsAttribute`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.apiexplorersettingsattribute?view=aspnetcore-6.0). This is what it looks like:

```csharp
[ApiExplorerSettings(IgnoreApi = true)]
```

The `IgnoreApi = true` argument tells our app not to expose the controller or action to the API explorer, which helps Swagger UI get information about our API's routes.

We can add it to a controller like this:

```csharp
...

  [ApiExplorerSettings(IgnoreApi = true)]
  [Route("api/[controller]")]
  [ApiController]
  public class AnimalsController : ControllerBase
  {
    ...
  }

...
```

Or we can add it to a controller action like this:

```csharp
...
    [ApiExplorerSettings(IgnoreApi = true)]
    [HttpPost]
    public async Task<ActionResult<Animal>> Post([FromBody] Animal animal)
    {
      _db.Animals.Add(animal);
      await _db.SaveChangesAsync();
      return CreatedAtAction(nameof(GetAnimal), new { id = animal.AnimalId }, animal);
    }
...
```

However, really securing our APIs also involves topics that are further exploration in this course section: 

* Implementing authentication and authorization in our API. 
* Making our GitHub repo with the API's source code private.
* Hosting both the database and our API.

For the projects we build in this course section, we want other developers to access the source code and try running our projects. Also, none of the data in our application really needs protection since the project and database we create will be run locally on each developer's machine. 

In short, we're still learning about ASP.NET Core Web APIs, and we want to share the projects we create with the world. So, there's no need to hide access to Swagger in your projects, unless you really want to!
