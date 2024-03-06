---
title: "📓 3.6.0.03 Exploring the dotnet new Web API Template"
day: weekend
id: 3-6-0-03-exploring-the-dotnet-new-web-api-template
hide_table_of_contents: true
---

In this lesson, we'll start building a Cretaceous Park API. This API will share data about a wildlife park consisting of creatures from [the cretaceous period](https://en.wikipedia.org/wiki/Cretaceous) that other developers can query.

We'll use the `dotnet new` command to scaffold an ASP.NET Core web API and we'll learn about the boilerplate that comes with the web API template. We'll cover the following topics:

* How web APIs receive and respond to requests, and how they differ from MVC web apps.
* Initializing Git and `.gitignore`, because it doesn't come with the scaffolded project.
* The `appsettings.{Environment}.json` file.
* Configuring logging and allowed hosts in `appsettings.json`.
* How to build and configure the host for a Web API.
* Using HTTP in development for web APIs.
* Optionally updating our project's ports in `launchSettings.json`.
* Running the boilerplate app and using Swagger UI to explore endpoints.

In the process, we'll make some changes to begin shaping the template into our own Cretaceous Park API. 

## Scaffolding a Web API
---

First, create a new directory called `CretaceousApi.Solution`. Then, within that directory, run the following command:

```bash
$ dotnet new webapi -o CretaceousApi --framework net6.0
```

Let's take a look at the files that the CLI creates for us.

```
bin
Controllers
obj
Properties
appsettings.Development.json
appsettings.json
CretaceousPark.csproj
Program.cs
WeatherForecast.cs
```

The CLI generates many files, including `Program.cs` and a `.csproj` file. It also generates several boilerplate files, such as a controller with some starter code as well. As we'll see later, the boilerplate code returns weather data. We will replace this with our own code soon. 

Notice how our folder contains a `Controllers/` directory (with a `WeatherForecastController.cs`) and a model called `WeatherForecast.cs`, but there are **no views**. Well, that's what an API is: it's a set of models and controllers that handle responding to HTTP requests from a client (like a web browser or Postman). The controllers receive requests from a client, handle retrieving data from a database, map the database data to the models in the API, and then return that data to the client. 

[The MS Docs on ASP.NET Core web APIs](https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-6.0&tabs=visual-studio) have a helpful graphic that shows how an API handles the HTTP requests, and delivers HTTP responses.

![Graphic of request-response loop between client and API.](/images/c%23/aspnet-web-api-request-response-model.png)

If the requested resource is found, our API will return a response of 200 OK with the data (or 201 Created, without data). If the requested resource is not found, our API will return a 404 Not Found. If the client is not authorized to access a resource on our API, the API will return a 401 Unauthorized. 

That's the basics of the ASP.NET Core web APIs we will create in this course section. Let's continue familiarizing ourselves with the web API template.

### Initializing Git and a `.gitignore`

Even though the CLI generates our boilerplate, it does not add git tracking to our project. Make sure to initialize git and add a `.gitignore` file when you create a new API project, and make sure `appsettings.json`, `obj`, and `bin` are listed in your `.gitignore`, as per usual. 

When creating your README, don't forget to instruct users on how to create and populate the `appsettings.json` file!

### Disabling A Nullable Context for the Entire Project

The next thing we'll want to do is disable a nullable context for the entire project. Comment out the line `<Nullable>enable</Nullable>` within `CreatceousApi.csproj`.

<div class="filename">CretaceousApi.csproj</div>

```csharp
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <!-- <Nullable>enable</Nullable> -->
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Swashbuckle.AspNetCore" Version="6.2.3" />
  </ItemGroup>

</Project>
```

With this change, we can still use nullable types in any file throughout our project, we just need to create [a nullable context](https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references#nullable-contexts) using a directive like `#nullable enable`. To review more information about nullable types, start with the LearnHowToProgram.com lesson on [Nullable Types](../../c-and-net/test-driven-development-with-c/3-1-2-6-nullable-types). 

If you are wondering, we'll leave implicit using directives enabled in our `.csproj` file. However, you are welcome to comment it out if you prefer.

### Getting to Know `appsettings.{Environment}.json`

Did you notice that there's an `appsetting.json` and an `appsettings.Development.json` in our scaffolded project? Both of these files serve the same purpose of adding configurations to our projects. However, the configurations in `appsettings.Development.json` are used only if we are running our project in a development environment. Similarly, if we had an `appsettings.Production.json`, the configurations within it would be used when we are running our project in a production environment.

According to the docs, `appsettings.json` is loaded first, and then the `appsettings.{Environment}.json` files are loaded second. Configurations from all files are used. However:

* In development, any matching configurations (or "keys") in `appsettings.Development.json` overwrites those in `appsettings.json`. 
* In production, any matching configurations (or "keys") in `appsettings.Production.json` overwrites those in `appsettings.json`. 

So if both `appsettings.json` and `appsettings.Development.json` had a key for `"ConnectionStrings"`, the value in `appsettings.Development.json` would be used when we start our project in development mode. 

If a `"ConnectionStrings"` key is defined in `appsettings.json`, but not in `appsettings.Development.json`, and we started our application in a development environment, the `"ConnectionStrings"` within `appsettings.json` will be used.

So what does this mean for us? **You can use either `appsettings.json` or `appsettings.Development.json` to save your database connection string and any API keys.** Keep in mind that we should not use `appsettings.json` to save and manage application secrets in a production environment, but instead a service like [Azure Key Vault](https://learn.microsoft.com/en-us/aspnet/core/security/key-vault-configuration?view=aspnetcore-6.0). There are also better alternatives to using `appsettings.json` for managing secrets during development, which you can [read more about on the MS docs](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-6.0&tabs=windows).

In our example projects, we'll continue to use `appsettings.json` to save our database connection string.

### Filtering Hosts and Configuring Logging in `appsettings.json`

Let's get to know the new `"Logging"` and `"AllowedHosts"` keys in the boilerplate for `appsettings.json` and `appsettings.Development.json`.

The `"AllowedHosts"` key lets us specify the host names that can access our API. When we set the value `"*"`, it means that any host can make an API call to our API. If we set a value of `"example.com;localhost"`, it means that requests to our API can only be made from example.com or localhost. [Read more about this here.](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel/host-filtering?view=aspnetcore-6.0)

With `"Logging"`, we are configuring how logging happens in our application. By "logging", we mean how we log information about any requests, events, or bugs in our application. Default logging is implicitly configured when we create our `WebApplicationBuilder` after calling `WebApplication.CreateBuilder(args)` in `Program.cs`. This is just like how `appsettings.json` is implicitly loaded as a configuration file. When we specify a `"Logging"` key in `appsettings.json`, we can further configure how we want logging to happen in our applications. 

With the `"LogLevel"` key, we get to decide what we want logged: warnings, errors, everything that happens in our app, or just the general idea of what's happening in our app? Visit [this section of the MS Docs](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/logging/?view=aspnetcore-6.0#log-level) to learn about every log level. We have two log levels specified: 

* `"Default": "Information"` means that the default configuration for all logging providers in our application should be at the `"information"` log level, which is supposed to track the general flow of the app.
* `"Microsoft.AspNetCore": "Warning"` means that any warnings that happen within the `Microsoft.AspNetCore` category should be logged. The `Microsoft.AspNetCore` category includes `Microsoft.AspNetCore.Builder`. Think of "category" like a namespace.

While the defaults are okay for both the `"Logging"` and `"AllowedHosts"` keys in `appsettings.json`, **we'll update `appsettings.Development.json` to [log information that's relevant to both ASP.NET Core and EF Core](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/logging/?view=aspnetcore-6.0#aspnet-core-and-ef-core-categories)**:

<div class="filename">appsettings.Development.json</div>

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Trace",
      "Microsoft.AspNetCore": "Information",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  }
}
```

With the above change, we've configured our logging to trace any activity within the `Microsoft` category, which includes ASP.NET Core and EF Core namespaces. The log level `"Trace"` will log the most detailed messages, and is great for development! However, this level of logging would slow up production applications, so we are not including it in our `appsettings.json`. 

Notice that we're setting `"Microsoft.AspNetCore": "Information"`. Shouldn't this be covered in our `"Microsoft"` category? Yes, but only if we haven't included a more specific category than `"Microsoft"`, and we've done just that when we list `"Microsoft.AspNetCore": "Warning"` in our `appsettings.json` — this is a more specific category. That means the logging level set for `"Microsoft.AspNetCore"` will take precedence over the logging level for `"Microsoft"`. If we want `"Microsoft.AspNetCore"` to be set to anything other than `"Warning"` in development, we need to specify a new value for `"Microsoft.AspNetCore"` in `appsettings.Development.json`, and that's exactly what we've done. To learn more about logging, [visit the MD Docs on Logging](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/logging/?view=aspnetcore-6.0). 

### Building a Host for Web APIs in `Program.cs`

Next, let's check out the changes in `Program.cs`. Take note that the `Program.cs` template uses implicit using directives and top level statements, and we'll make use of both of these features.s

<div class="filename">Program.cs</div>

```csharp
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
```

Now let's review the key differences from the `Program.cs` for an ASP.NET Core MVC.

#### Services via Dependency Injection

Since we're building a web API that means there are no views, so we only add controllers as a service with the line `builder.Services.AddControllers();`; this is unlike in MVC apps where we add both controllers and views with `builder.Services.AddControllersWithViews();`.

With the next few lines of code and the `Swashbuckle.AspNetCore` package listed in `CretaceousApi.csproj`, we're configuring our API to use [Swashbuckle](https://learn.microsoft.com/en-us/aspnet/core/tutorials/getting-started-with-swashbuckle?view=aspnetcore-6.0&tabs=visual-studio-code), an implementation of [Swagger documentation](https://swagger.io/tools/swaggerhub/):

```csharp
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
```

Swagger is a service that automatically documents the available endpoints in our application. Later in this lesson, we'll learn how to access the Swagger documentation. To read about Swashbuckle/Swagger/Open API on the ASP.NET Core docs, [visit the overview page](https://learn.microsoft.com/en-us/aspnet/core/tutorials/web-api-help-pages-using-swagger?view=aspnetcore-6.0).

The `builder.Services.AddEndpointsApiExplorer();` code enables Swagger documentation to do its job; it exposes our API's endpoints for documentation and other things. Later, we'll learn how to use tools via ApiExplorer that will let us control what endpoints are visible to Swagger documentation. 

Our application's endpoints are defined by our models and controllers, and we can configure them in `Program.cs`. An **endpoint** is a URL that is responsible for handling a specific HTTP request. Here are a few endpoints from our To Do List application:

* A GET request made to the `/items/create` endpoint invokes the GET `Create()` action in our `ItemsController.cs`.
* A POST request made to the `/items/create` endpoint invokes the POST `Create()` action in our `ItemsController.cs`.
* When we include the full URL in our endpoint, like `https://localhost:5001/items/create`, we're simply including the domain in the endpoint.

Naturally, we'll have quite a few endpoints, especially if we implement full CRUD. This is where Swagger comes in as an easy-to-use service that documents our API's endpoints. We'll learn how to use it momentarily. First, we're going to complete our review of `Program.cs`. 

#### Configuring the HTTP Pipeline with Middleware

Then, there's an if statement:

```csharp
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}
```

This if statement checks if our application is being run in a development environment, and if so configures our HTTP pipeline to actually use Swagger and Swagger UI. 

Swagger UI is the very cool user interface for our documentation that we can always find at `http://localhost:<port>/swagger/v1/swagger.json`. We'll check out Swagger UI in a little bit; there's more information to cover before we do that.

We only have Swagger configured to run during development, because it's recommend to only be used in development. While Swagger UI can be used to document API endpoints publicly, this needs to be done with care and intention in order to not expose sensitive data. As we'll see, we can use Swagger UI to send actual requests to our API. If we make that publicly available, a malicious user could access key information about our API or change our API in ways that we don't want.

So, Swagger is usually used for developers in development, and public-facing documentation is created elsewhere. That said, we can configure what endpoints are visible and accessible through Swagger, and use Swagger documentation effectively as public-facing documentation. However, using Swagger documentation could potentially slow up our applications performance. Considerations like these need to be made before using Swagger documentation in production. We'll revisit this topic when we learn how to document our API's endpoints, and soon we'll see exactly what Swagger documentation looks like!

Next, we configure the `app.MapControllers();` middleware:

```csharp
app.MapControllers();
```

With `app.MapControllers();`, we're configuring our app to rely on attributes that we add to our API controllers and actions to properly route HTTP requests. This is in contrast to what we used with our MVC apps, in which we set up a default routing pattern:

```csharp
app.MapControllerRoute(
  name: "default",
  pattern: "{controller=Home}/{action=Index}/{id?}"
);
```

And with that, we've covered the differences between the web application host we build in `Program.cs` for MVC apps versus APIs.

### Updating `Program.cs` to Not Redirect to HTTPS in Development

We're going to update `Program.cs` to not redirect to HTTPS when we run our apps during development. While we've already set up a developer security certificate, [Postman](https://www.postman.com/) can still run into problems with HTTPS and ASP.NET Core apps. To avoid the trouble with Postman, we'll stick to using HTTP during development. 

Update your `Program.cs` as follows:

<div class="filename">Program.cs</div>

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Updated code below!
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
else 
{
  app.UseHttpsRedirection();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
```

We've added an else statement that handles adding HTTPS redirection if we are not in development. This ensures that HTTPS redirection is only used during production, and we can use HTTP in development.

Next, we'll update our `Properties/launchSettings.json` and then run our boilerplate web API and check out Swagger documentation!

### Updating `launchSettings.json`

The configurations in `launchSettings.json` will look similar to what we've seen in the past. One thing to note is that our `"applicationUrl"` won't point to `https://localhost:5001;http://localhost:5000` like we so often reference in the curriculum. It's up to you to choose the port numbers that you prefer, but we'll continue to use the ports `https://localhost:5001`/`http://localhost:5000` in the LearnHowToProgram.com curriculum.

If you want to update the application URL for CretaceousApi to use ports 5001 and 5000, make the update to the `"applicationUrl"` key, within`"CretaceousApi"` object:

<div class="filename">Properties/launchSettings.json</div>

```json
  "CretaceousApi": {
    "commandName": "Project",
    "dotnetRunMessages": true,
    "launchBrowser": true,
    "launchUrl": "swagger",
    "applicationUrl": "https://localhost:5001;http://localhost:5000",
    "environmentVariables": {
      "ASPNETCORE_ENVIRONMENT": "Development"
    }
  }
```

## Running the Boilerplate App
---

Let's start our server with `dotnet run`. 

Now let's open Postman and send a GET request to `http://localhost:5000`. Remember that we're not using HTTPS for development, so all of our requests need to be made to HTTP at port 5000. 

When we make a GET request to `http://localhost:5000`, we'll get a "404 Not Found" status in Postman along with an empty response. If we look at the terminal that is running the API, we should see something like this:

```bash
info: Microsoft.AspNetCore.Hosting.Diagnostics[1]
      Request starting HTTP/1.1 GET http://localhost:5000/ - -
info: Microsoft.AspNetCore.Hosting.Diagnostics[2]
      Request finished HTTP/1.1 GET http://localhost:5000/ - - - 404 0 - 81.1602ms
```

Note that the above information in the terminal comes directly from the logging configurations we made to `appsettings.Development.json`: since we have the logging level set for `"Microsoft.AspNetCore": "Information"`, we're getting this informational message from `Microsoft.AspNetCore.Hosting.Diagnostics`.

This message confirms that our API has been queried but has returned a 404 error. This is different than what will happen if we send a bogus request to a server that doesn't exist. If we try sending a GET request to `http://localhost:5555`, we'll get the following message:

![Postman says it can't get a response from the server](/images/c%23/Week+6+API/couldnt_get_response.png)

When we send a GET request to `http://localhost:5000`, we are communicating with our local running application. However, the application is telling Postman that it couldn't find any resources at `http://localhost:5000`.

### Accessing Swagger UI

Let's see what routes are available. That means it's time to view the Swagger documentation of our project's routes. You can view it in the browser, by going to either of these URLs:

* `http://localhost:5000/swagger`
* `http://localhost:5000/swagger/v1/swagger.json`

Alternatively, when we run our project with a watcher with `dotnet watch run`, Swagger UI in the browser will automatically open thanks to the `"launchUrl": "swagger"` launch setting in `Properties/launchSettings.json`.

When we access Swagger UI, we'll see the name of our app, `CretaceousApi`, we'll see the name of our controller `WeatherForecast`, and one `GET` route at `/WeatherForecast`. That means there's one endpoint that we can access by making a GET request to `http://localhost:5000/WeatherForecast`. We can make the request via Postman, or via the Swagger UI. If we click on the endpoint `GET` `/WeatherForecast` within the Swagger UI, we can see expanded details about this endpoint and make a request to this endpoint.

![The expanded GET /WeatherForecast endpoint within the Swagger UI.](/images/c%23/aspnet-swagger-ui.png)

To make a request to `GET` `/WeatherForecast`, click the `Try it out` button, and then the `Execute` button. We'll see more information pop up: the [cURL](https://en.wikipedia.org/wiki/CURL) command for that endpoint (which would make the same request from the command line), the request URL, the API's response, and an HTTP status code for the response, among other info. As we can see, Swagger UI makes it very easy to test out our API.

### The Boilerplate Controller

Now let's take a look at the controller file that the CLI generated for us:

<div class="filename">Controllers/WeatherForecastController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;

namespace CretaceousPark.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
  private static readonly string[] Summaries = new[]
  {
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
  };

  private readonly ILogger<WeatherForecastController> _logger;

  public WeatherForecastController(ILogger<WeatherForecastController> logger)
  {
    _logger = logger;
  }

  [HttpGet(Name = "GetWeatherForecast")]
  public IEnumerable<WeatherForecast> Get()
  {
    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
    {
      Date = DateTime.Now.AddDays(index),
      TemperatureC = Random.Shared.Next(-20, 55),
      Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    })
    .ToArray();
  }
}

```

First notice the attributes added to the controller class:

```csharp
[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
  ...
}
```

The `[ApiController]` attribute does a few things, all which you can read about [on the docs](https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-6.0#apicontroller-attribute). For us, this attribute has two main purposes: 

* It requires specifying API routes with attributes. We specify routes with the `[Route]` attribute and other attributes that we add to our controller actions.
* It performs automatic model validation such that we don't have to check `ModelState` in an if statement in our controller actions. We'll see how we can add validations to our models in a later lesson.

With the `[Route("[controller]")]` attribute, we're specifying that we want our route's to match the name of the controller class minus the `Controller` suffix. That means that any actions within our `WeatherForecastController` will have a base request URL of `http://localhost:5000/weatherforecast`.

Next, notice that our `WeatherForecastController` extends from the `ControllerBase` class, and not from the `Controller` class like in our MVC applications. Well, the `Controller` class supports views, while [the `ControllerBase` class](https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-6.0#controllerbase-class) does not. That's why we extend from the `ControllerBase` class.

Now let's check out the controller actions. 

```csharp
  [HttpGet(Name = "GetWeatherForecast")]
  public IEnumerable<WeatherForecast> Get()
  {
    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
    {
      Date = DateTime.Now.AddDays(index),
      TemperatureC = Random.Shared.Next(-20, 55),
      Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    })
    .ToArray();
  }
```

The template for ASP.NET Core web APIs comes with one GET action in the boilerplate controller. This corresponds exactly to the endpoint `http://localhost:5000/WeatherForecast` in the browser. This endpoint is set by the `[Route("[controller]")]` attribute, as well as the `[HttpGet(Name = "GetWeatherForecast")]` attribute. There's a few things to note about the `[HttpGet]` attribute:

* It's one of many [HTTP verb templates](https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/routing?view=aspnetcore-6.0#http-verb-templates), each of which supports a different HTTP method (like Patch, Put, Post, etc).
* When we include `[HttpGet]` on a controller action, it specifies that the route will only match with a HTTP GET request to the `/WeatherForecast` endpoint.
* We can optionally specify a route `Name` like we see in the full attribute `[HttpGet(Name = "GetWeatherForecast")]`. The name of the route is used to generating links for the route, which we will not do in our APIs. To learn more about this, [visit the docs](https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/routing?view=aspnetcore-6.0#route-name).

Pause now to access `http://localhost:5000/WeatherForecast` in your browser. When you do, you'll see a similar JSON array of objects as we saw returned in the Swagger UI. We'll get the same response from the `/WeatherForecast` endpoint whether we are using the browser, Swagger UI, or Postman.

### How APIs Work

So what exactly is going on here? How is this different from creating an MVC web application? Let's review how Web APIs work.

The MVC applications we've been creating the last few sections have been serving HTML, which we access through the browser. Instead of serving HTML, our API serves JSON data. APIs use other formats such as XML as well, but JSON is the most common. 

With Web APIs, instead of navigating to a site via a browser, we use a client such as Postman or another application making an API call to query one of our API's endpoints for data. Developers are then free to use that data in the application as they wish. This makes it much easier for developers to use different types of technology for the client and the API and still communicate freely between two applications. For instance, it doesn't matter if the API application uses C# and .NET and the application making the query uses Ruby and Rails. They can communicate using a standard format (JSON) and there will be no issues related to language incompatibilities.

Now that we've covered the basics of what the CLI offers, we're ready to start adding our own controllers, models, and database. By the end of this walkthrough, our Cretaceous Park API will have full CRUD functionality!
