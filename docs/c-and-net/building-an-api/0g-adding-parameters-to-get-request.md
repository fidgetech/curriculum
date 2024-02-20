---
title: "\U0001F4D3 3.6.0.08 Adding Parameters to a Get Request to Support Query Strings"
id: 36008-adding-parameters-to-a-get-request-to-support-query-strings
slug: 36008-adding-parameters-to-a-get-request-to-support-query-strings
hide_table_of_contents: true
sidebar_position: 8
day: weekend
type: lesson
url: >-
  https://github.com/fidgetech/c-and-net/blob/main/0g_adding_parameters_to_get_request.md
---

In the last lesson, we completed CRUD functionality in our Cretaceous Park API. In this lesson, we'll learn how to add search parameters to our `Get()` controller action so that we can request and retrieve filtered data.

## Query Strings
---

Right now, when a GET request is sent to `http://localhost:5000/api/animals`, all animals in the database are returned in JSON format. Our `Get` method currently looks like this:

```csharp
// GET: api/Animals
[HttpGet]
public async Task<ActionResult<IEnumerable<Animal>>> Get()
{
  return await _db.Animals.ToListAsync();
}
```

What if we wanted the animals endpoint of our API to have the ability to return results that are filtered by certain search criteria? For example, say a user wanted to get all animals that are dinosaurs? The API GET request in those cases would look something like this:

```
http://localhost:5000/api/animals?species=dinosaur
```

We've seen this syntax for API calls before. As a reminder, the `?` here represents the beginning of a **query string**. What follows are key value pairs that represent the search parameter (like `species`) and its value (like `dinosaur`). 

## Handling Search Parameters
---

Let's change the logic in our `Get()` action to handle query strings so that we can return a filtered set of results based on species. 

Here's how we'll update our `Get()` method in our controller:

<div class="filename">Controllers/AnimalsController.cs</div>

```csharp
...
    // GET: api/Animals
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Animal>>> Get(string species)
    {
      IQueryable<Animal> query = _db.Animals.AsQueryable();

      if (species != null)
      {
        query = query.Where(entry => entry.Species == species);
      }

      return await query.ToListAsync();
    }
...
```

Let's work through all of the changes:

* We've added a parameter to the method of type `string` that we've called `species`. The naming here is important as .NET will automatically bind parameter values based on the query string. A call to `http://localhost:5000/api/animals?species=dinosaur` will now trigger our `Get()` method and automatically bind the value "dinosaur" to the variable `species`. The framework does this by utilizing [parameter source binding](https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-6.0#binding-source-parameter-inference), where it infers the source of the parameter's value. To be more explicit, we could optionally include the attribute `[FromQuery]` to specify that the `species` parameter comes from the query string in the request URL:

```csharp
public async Task<ActionResult<IEnumerable<Animal>>> Get([FromQuery] string species)
```

* In the body of the method we create a variable called `query` and then collect the list of all animals from our database and return it as [a `IQueryable` LINQ object](https://learn.microsoft.com/en-us/dotnet/api/system.linq.iqueryable-1?view=net-6.0). When we use an `IQueryable` object, we can use LINQ methods to build on to a database query before actually executing it. In this case, we're going to determine which query strings in our request, if any, we need to include in our database query.

* The next thing we do is check to see if there is a value for the `species` parameter, and if there is, we build on to our database query by calling the `Where()` method.

* The `Where` method accepts [a lambda expression](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions) that will check whether each animal entry passes the condition and filters out those that do not meet the condition. In our case, we pass in `entry => entry.Species == species` to specify that we only want a database entry if its species property value matches the query parameter value from our route.

* Finally, we call `ToListAsync()` on the final query to turn our new results into a list.

### Test it Out!

Let's test out our new species search functionality in Postman. Notice the query string `?species=dinosaur` in the request URL (highlighted by the red box). We can also see the query string listed as a key-value pair within the "Params" tab.

![Result of API call with search parameter in Postman](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/Week+6+API/0g_adding_parameters_to_get_request.png)

## Handling Multiple Parameters
---

We can now retrieve entries from the database that match a given species, but what if we wanted to drill down further and find dinosaurs by their name? In order to do this, we can build on the query we created and add new parameters, like so:

```csharp
...
    // GET api/animals
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Animal>>> Get(string species, string name)
    {
      IQueryable<Animal> query = _db.Animals.AsQueryable();

      if (species != null)
      {
        query = query.Where(entry => entry.Species == species);
      }

      if (name != null)
      {
        query = query.Where(entry => entry.Name == name);
      }

      return await query.ToListAsync();
    }
...
```

Now we are able to search for a dinosaur named Matilda and our API will successfully return that specific entry:

Requesting `http://localhost:5000/api/animals?species=dinosaur&name=matilda` will yield:

```json
[
  {
    "animalId": 3,
    "name": "Matilda",
    "species": "Dinosaur",
    "age": 2
  }
]
```

Notice that we chain new parameters to our query by using the `&` symbol between each key-value pair.

We've successfully filtered the results with multiple parameters, but we can add as many parameters as we want with this pattern. Furthermore, this method allows for any combination of parameters to be used in the request.

### Non-string Parameters

We don't always have to filter content based on whether it matches the value in the search parameter directly. For example, if we wanted to get all dinosaurs that were older than 5 years old, it would be necessary for us to update this API endpoint to allow a request with a parameter that specifies a minimum age.

Because [parameter source binding inference](https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-6.0#binding-source-parameter-inference) in our web API works for any primitive, we can then add another parameter of `int` type called `minimumAge` and handle the logic in a similar fashion:

```csharp
...
    // GET api/animals
    [HttpGet]
    public async Task<List<Animal>> Get(string species, string name, int minimumAge)
    {
      IQueryable<Animal> query = _db.Animals.AsQueryable();

      if (species != null)
      {
        query = query.Where(entry => entry.Species == species);
      }

      if (name != null)
      {
        query = query.Where(entry => entry.Name == name);
      }

      if (minimumAge > 0)
      {
        query = query.Where(entry => entry.Age >= minimumAge);
      }

      return await query.ToListAsync();
    }
...
```

**The default value for an integer parameter will be `0` when no value for the `minimumAge` parameter is received.** Because of this we check `minimumAge > 0` in our if statement to check whether there's been a value submitted for the `minimumAge` parameter. 

Here's another example. If we simply wanted to create a query so that users can query animals by their age, an integer, we would check to see if a value for our age parameter has been added by checking if `age != 0`:

```csharp
if (age != 0)
{
  query = query.Where(entry => entry.Age == age);
}
```

### Test it Out!

Now if we request `http://localhost:5000/api/animals?minimumAge=5` in postman we should get:

```json
[
  {
    "animalId": 1,
    "name": "Matilda",
    "species": "Woolly Mammoth",
    "age": 7
  },
  {
    "animalId": 2,
    "name": "Rexie",
    "species": "Dinosaur",
    "age": 10
  },
  {
    "animalId": 5,
    "name": "Bartholomew",
    "species": "Dinosaur",
    "age": 22
  }
]
```

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for Cretaceous Park API: `3_query_strings`](https://github.com/epicodus-lessons/section-6-cretaceous-park-api-csharp-net6/tree/3_query_strings)**
