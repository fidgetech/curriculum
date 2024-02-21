---
title: "📓 3.6.0.06 API: Update and Delete"
id: 3-6-0-06-api-update-and-delete
hide_table_of_contents: true
day: weekend
---

In the last lesson, we added create and read functionality to our Cretaceous Park API. In this lesson, we'll add update and delete functionality as well.

## Adding Update Functionality
---

We'll start by editing an animal. In order to do so, we'll use a new HTTP verb in our route called PUT. PUT is like POST in that it makes a change to the server. However, PUT changes existing information while POST creates new information. Because of this PUT requires a body with the entire updated animal object (including the `AnimalId`). We'll make PUT requests to this endpoint:

```
PUT http://localhost:5000/api/animals/{id}
```

Here's our new `Put()` controller action:

<div class="filename">Controllers/AnimalsController.cs</div>

```csharp
...
    // PUT: api/Animals/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Animal animal)
    {
      if (id != animal.AnimalId)
      {
        return BadRequest();
      }

      _db.Animals.Update(animal);

      try
      {
        await _db.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!AnimalExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    private bool AnimalExists(int id)
    {
      return _db.Animals.Any(e => e.AnimalId == id);
    }
...
```

Once again, this looks similar to code we'd use in an MVC web application, with a few key differences:

* We use the `[HttpPut]` verb template. This specifies that the request made to the `Put()` controller action needs to specify the PUT Http action verb.

* We'll determine which animal will be updated based on the `{id}` parameter in the URL.

* First, we check if the `{id}` in the request URL matches the `animal.AnimalId` property in the `Animal` object passed into our controller action by the request body. If they do not match, it means that the request is poorly formatted, so we use [the `ControllerBase.BadRequest()` method](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase.badrequest?view=aspnetcore-6.0) to return a HTTP status code of 400 Bad Request.

* If the request is formatted correctly, then we proceed to updating the animal in our database. The code to update an animal should already be familiar. We use EF Core's built-in methods to update the animal in the database and then save the changes. 

* We then ask our database to save changes asynchronously. In the process of doing this, we handle the possible error of the animal with the provided `AnimalId` not existing. To do this we use a try/catch block along with a newly created private method called `AnimalExists()` (for use within the controller, and to DRY up our code). If an animal by the specified id in the request URL does not exist, then we'll return a 404 Not Found HTTP status code via [the `ControllerBase.NotFound()` method](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase.notfound?view=aspnetcore-6.0).

* Finally, notice that we return `NoContent();` at the end of the method. This will return a HTTP status code of 204 No Content, which means that the request has completed successfully, but there's no need to navigate away from the current page. To learn more about the 204 status code, visit [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204).

### Test It Out!

Let's test our new PUT API endpoint using Postman.

We'll make a call to the following endpoint: `http://localhost:5000/api/animals/1`. This is exactly the same as the URL for getting an individual animal's details. The difference is that we need to specify a PUT request instead of a GET request.

According to the HTTP specification, a PUT request requires the client to send the entire updated entity, not just the changes. The body of the API call will look something like this:

```json
{
  "animalId": 1,
  "species": "Woolly Mammoth",
  "name": "Matilda the Woolly Mammoth",
  "age": 8
}
```

This specifies that an animal with an `AnimalId` property of 1 (as specified in the URL of `http://localhost:5000/api/animals/1`) should be updated so that it's now Matilda the Woolly Mammoth with an age of 8. Here's how this request will look in Postman:

![Adding a body to a PUT request to `http://localhost:5000/api/animals/1` using Postman.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/aspnet-web-api-postman-put-request-with-body.png)

We'll see a 204 No Content response from the API if our request is successful. 

We can also confirm that our animal has been updated as expected by changing our PUT request into a GET request in Postman and then making another call to `http://localhost:5000/api/animals/1`. We should get our edited animal back.

### Supporting Partial Updates

As noted earlier, the PUT action requires an entire object with all of its properties in order to make an update to it in the database. Well, there's an alternative to this: to support partial updates, use PATCH instead:

* [PATCH on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH)
* [Handling PATCH requests in ASP.NET Core Web APIs](https://learn.microsoft.com/en-us/aspnet/core/web-api/jsonpatch?view=aspnetcore-6.0)

## Adding Delete Functionality
---

Now we're ready to add delete functionality. To do so, we'll use a new HTTP verb in a new controller action called `DeleteAnimal()`. We'll make DELETE requests to the following endpoint, where `{id}` is the variable for the `AnimalId` of the animal that we want to remove from out database:

```
DELETE http://localhost:5000/api/animals/{id}
```

Here's the new `DeleteAnimal()` controller action:

<div class="filename">Controllers/AnimalsController.cs</div>

```csharp
...
    // DELETE: api/Animals/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAnimal(int id)
    {
      Animal animal = await _db.Animals.FindAsync(id);
      if (animal == null)
      {
        return NotFound();
      }

      _db.Animals.Remove(animal);
      await _db.SaveChangesAsync();

      return NoContent();
    }
...
```

Note the new `[HttpDelete]` verb template. It takes an argument for `"{id}"`, which means that the request URL is supposed to be `DELETE http://localhost:5000/api/animals/{id}`. It also means that we are relying on the URL to get the animal's id, just like with our `GetAnimal` and `Put()` controller action methods.

Also just like our other controller actions, our `DeleteAnimal()` method is asynchronous and it makes use of `ControllerBase` class methods to return HTTP status codes.

Other than that, the code is largely the same as what we'd see in a MVC web application. EF Core doesn't care whether it gets information from an API or a web application when manipulating the database.

We can make our delete request by specifying the DELETE verb in Postman and making an API call to the following URL: `http://localhost:5000/api/animals/1`. This will delete Matilda the Woolly Mammoth, just like time did.

![Sending a DELETE request to `http://localhost:5000/api/animals/1` using Postman.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/aspnet-web-api-postman-delete-request.png)

We'll see a 204 No Content response from the API if our request is successful. 

### Benefits of RESTful Standards

Notice that we are able to have full CRUD functionality with only two URLs:

```
http://localhost:5000/api/animals
```

and

```
http://localhost:5000/api/animals/1
```

The benefits of RESTful standards become more readily apparent with an API. Developers don't need to search through documentation in order to surmise the correct URLs for an API. 

While a user of a web application might not notice that a URL in the browser is RESTful, a developer using an API certainly will notice whether the URL is RESTful and easy to work with. We should always keep the names of our endpoints as RESTful as possible.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for Cretaceous Park API: `2_crud_functionality`](https://github.com/epicodus-lessons/section-6-cretaceous-park-api-csharp-net6/tree/2_crud_functionality)**
