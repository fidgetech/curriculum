---
title: "📓 3.6.0.09 Adding API Model Validation"
day: weekend
id: 3-6-0-09-adding-api-model-validation
hide_table_of_contents: true
---

In this lesson, we'll learn how to add validation to our models. Some of this information will be a review, since we're already familiar with adding validation attributes to our models in MVC apps, and this process is no different with APIs. However, we'll review some new information on how model validation is actually performed in API controllers.

We won't update the Cretaceous Park API to include model validation. Instead this will be further exploration for you to do in your projects in class.

## Adding Model Validation
---

We can easily add a few basic validations to either an MVC web application or an API. The .NET MVC framework provides several built-in data annotations that we can add to a model. Specifically, we can add one of the following validations to a model:

* `[Required]`: Makes a field required.
* `[StringLength]`: Determines a maximum length for a string.
* `[Range]`: Determines a maximum and minimum for a numeric field.

Here's how we might incorporate them into our `Animal` class:

```csharp
using System.ComponentModel.DataAnnotations;

namespace CretaceousPark.Models
{
  public class Animal
  {
    public int AnimalId { get; set; }
    [Required]
    [StringLength(20)]
    public string Name { get; set; }
    [Required]
    public string Species { get; set; }
    [Required]
    [Range(0, 200, ErrorMessage = "Age must be between 0 and 200.")]
    public int Age { get; set; }
  }
}
```

* We add [`using System.ComponentModel.DataAnnotations;`](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations?view=net-6.0) in order to access data annotations like validation attributes.

* We add the `[Required]` annotation for any fields that should be required in our application.

* We specify that a `Name` can't be longer than twenty characters with `[StringLength(20)]`.

* We provide a `Range` between 0 and 200 for `Age`. Note that we can also add a custom error message with `ErrorMessage`. 

### Error Messages

If we don't provide a custom message, our API will provide its own error message. For instance, if we make a POST call where the `Name` property is more than twenty characters, we'll get the following response:

```json
{
    "errors": {
        "Name": [
            "The field Name must be a string with a maximum length of 20."
        ]
    },
    "title": "One or more validation errors occurred.",
    "status": 400,
    "traceId": "0HLOLVJT60FKC:00000001"
}
```

### Updating Controllers to Handle Model Validation

With API controllers that are marked with the `[ApiController]` attribute, we **do not** need to update our controllers to check `ModelState` like we did in our MVC apps, something like this:

```csharp
      if (!ModelState.IsValid)
      {
        return View();
      }
      else
      {
        ...
      }
```

This is because all controllers that have the `[ApiController]` attribute perform automatic model validation checking, and automatically handle returning a 400 Bad Request status code along with an error message as the API's response.

[To learn more about this, visit the official documentation.](https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-6.0#automatic-http-400-responses)

### EF Core Code-First Data Annotations

Finally, keep in mind that some data annotations in the `System.ComponentModel.DataAnnotations` namespace overlap with [data annotations that we can use on our EF Core models in code-first development](https://learn.microsoft.com/en-us/ef/ef6/modeling/code-first/data-annotations). A good example is the `[required]` attribute, which will make a model property required in our .NET app (MVC or API), as well as, update our database field to be non-nullable (required).

So as a precaution after you add validation attributes to your model properties, you should create a new migration and see if any changes are made to the database entities, and if so, determine whether or not you want those changes applied to your database. (Remember that you can always reverse the last migration with `dotnet ef migrations remove`.) 

Typically the requirements that we add to our project models, we'll also want applied to our database. However, if you don't want the changes applied to your database, use a ViewModel to separate the database entity model from the ViewModel that you use to handle incoming requests and validate them. 

Use a ViewModel for an API? Yes, and no. The concept is similar to a ViewModel — we're creating a model to use for something other than describing our database entity models. But for APIs, this would be for validating a request instead of being used to shape and validate data used in a view. Because of this, it's best to use a different name than ViewModel; perhaps we could call it a RequestModel instead. To learn more about this topic, check out this interesting discussion in [this Stack Exchange thread](https://softwareengineering.stackexchange.com/questions/399508/is-creating-viewmodels-in-web-api-a-bad-practice).

### More Resources and External Validation Libraries

While these basic validations are helpful, there are many other validations we might want to use that .NET doesn't provide. In that situation, we can consider custom validations or use an external library.

For more information on both custom validations and validations in general, check out the [official documentation](https://docs.microsoft.com/en-us/aspnet/core/mvc/models/validation?view=aspnetcore-6.0).

If you are interested in exploring an external library, check out [FluentValidation](https://fluentvalidation.net/aspnet).
