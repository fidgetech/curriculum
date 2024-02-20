---
title: "\U0001F4D3 3.5.2.3 API Calls in an ASP.NET Core MVC App"
id: 3523-api-calls-in-an-aspnet-core-mvc-app
slug: 3523-api-calls-in-an-aspnet-core-mvc-app
hide_table_of_contents: true
sidebar_position: 16
day: tuesday
type: lesson
url: 'https://github.com/fidgetech/c-and-net/blob/main/0k_apis_with_mvc.md'
---

Now that we know how to turn an API response into objects, let's look at how we can integrate this into an MVC application. We're going to create a simple MVC app that will allow users to see basic information about the top headlines on the New York Times.

## Project Setup
---

For this next example project, you may build the application from scratch or scaffold a new ASP.NET Core MVC project using the following command:

```
$ dotnet new mvc -o MvcApiCall -f net6.0
```

If you create your MVC app from scratch, follow along with the basic structure for an ASP.NET Core MVC app outlined [in this LearnHowToProgram.com lesson](https://old.learnhowtoprogram.com/fidgetech-3-c-and-net/3-2-basic-web-applications/3-2-0-18-configuration-quick-reference). The directory name for our project will be `MvcApiCall`. 

**Don't initialize or save your changes to Git until you've completed the setup steps for protecting your API key.** 

### A Few Notes on Using `dotnet new` to Scaffold an MVC App

Just like with our console app, an ASP.NET Core MVC application scaffolded with the `dotnet new` tool will make use of newer features. If you look at `Program.cs` for example, you'll find that top level statements are used. We'll make one adjustment to the configurations: comment out or remove `<Nullable>enable</Nullable>` as seen in the example below.

<div class="filename">MvcApiCall.csproj</div>

```csharp
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <!-- <Nullable>enable</Nullable> -->
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

</Project>
```

When we remove the global configuration for nullable types, we'll have to make one adjustment to the `ErrorViewModel.cs`, which uses a nullable type. Add `#nullable enable` to the top of the file, like so:

<div class="filename">Models/ErrorViewModel.cs</div>

```csharp
#nullable enable

namespace MvcApiCall.Models;

public class ErrorViewModel
{
  ...
}
```

### Installing Packages

Next, let's add the RestSharp and NewtonSoft.Json packages to our project:

```bash
$ dotnet add package RestSharp --version 108.0.3
$ dotnet add package Newtonsoft.Json --version 13.0.2
```

### Create an Environment Variable for the API Key

The process of protecting our New York Times API key will look similar to how we protect our MySQL database password in `appsettings.json`. However, we'll learn a new way of accessing our API key from our controller, later when we create our controller. During this setup portion, we'll create our `.gitignore` and our `appsettings.json` with our API key.

The first thing we'll do is add a `.gitignore` with `appsettings.json` listed inside, as well as the `obj` and `bin` folders.

<div class="filename">.gitignore</div>

```
appsettings.json
obj
bin
```

Next, we'll commit the change we made to our `.gitignore` to our Git history. If you haven't initialized Git do so now, and commit only your `.gitignore` to start. This ensures that the API key that we add to our `appsetting.json` never gets committed to our Git history.

Next, we'll create an `appsettings.json` file add our key within:

<div class="filename">appsettings.json</div>

```json
{
  "NYT": "[YOUR-KEY-HERE]"
}
```

We're calling our key `"NYT"` for New York Times. Make sure to replace `"[YOUR-API-KEY-HERE]"` with your own API key. 

Note that if you are using the `dotnet new` tool to scaffold your MVC project, you'll already have an `appsettings.json` and a `appsettings.Development.json` file. For now, we'll use just `appsettings.json`, so delete `appsettings.Developement.json`. When we learn more about the `dotnet new` scaffolding tool in the next section we'll explain the differences between these two files. If you are anxious to know more now, [visit the MS Docs on `appsettings.json`](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-6.0#appsettingsjson). As for your API key, add it to the end of the `appsettings.json` file:

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "NYT": "[YOUR-KEY-HERE]"
}
```

The keys `"Logging"` and `"AllowedHosts"` come as default configurations for `appsettings.json` when we use the `dotnet new` scaffolding tool.

## Models
---

We'll start by creating an `Article` class similar to the one in our console application. In order to actually make an API call, we'll translate part of our console program into a `GetArticles()` method inside the `Article` class.

Create a new `Article.cs` file within the `Models/` directory with the following code:

<div class="filename">Models/Article.cs</div>

```csharp
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;

namespace MvcApiCall.Models
{
  public class Article
  {
    public string Section { get; set; }
    public string Title { get; set; }
    public string Abstract { get; set; }
    public string Url { get; set; }
    public string Byline { get; set; }
    public string Item_Type { get; set; }

    public static List<Article> GetArticles(string apiKey)
    {
      Task<string> apiCallTask = ApiHelper.ApiCall(apiKey);
      string result = apiCallTask.Result;

      JObject jsonResponse = JsonConvert.DeserializeObject<JObject>(result);
      List<Article> articleList = JsonConvert.DeserializeObject<List<Article>>(jsonResponse["results"].ToString());

      return articleList;
    }
  }
}
```

Next, we'll create an `ApiHelper` class similar to the one we created in the last lessons. 

Create a new file called `ApiHelper.cs` in your `Models/` directory and add the following code to it:

<div class="filename">Models/ApiHelper.cs</div>

```csharp
using System.Threading.Tasks;
using RestSharp;

namespace MvcApiCall.Models
{
  class ApiHelper
  {
    public static async Task<string> ApiCall(string apiKey)
    {
      RestClient client = new RestClient("https://api.nytimes.com/svc/topstories/v2");
      RestRequest request = new RestRequest($"home.json?api-key={apiKey}", Method.GET);
      RestResponse response = await client.ExecuteAsync(request);
      return response.Content;
    }
  }
}
```

This code should all be familiar from the last two lessons.

## Controller
---

We'll keep the controller actions very simple. We'll just include an index route in `HomeController.cs`.

If you are working with a scaffolded MVC app (using the `dotnet new` tool), simply replace the existing `Index()` action with the `Index()` action from the example below.

<div class="filename">Controllers/HomeController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using MvcApiCall.Models;

namespace MvcApiCall.Controllers
{
  public class HomeController : Controller
  {
    public IActionResult Index()
    {
        Task<string> allArticles = Article.GetArticles("[YOUR-API-KEY-HERE]");
        return View(allArticles);
    }
  }
}
```

Note that because `GetArticles()` is a static method, it's called on the `Article` class itself.

We're not done here, yet! We need to import our API key from `appsettings.json` into our `HomeController` so we can pass it into our `Article.GetArticles("[YOUR-API-KEY-HERE]");` method call. 

### Accessing our API Key in `HomeController.cs`

As part of building our web application host in `Program.cs`, the `appsettings.json` file gets loaded automatically as a default configuration file. That's why we can access it when we want to load our MySQL database settings. Remember this code from `Program.cs`?

<div class="filename">Program.cs</div>

```csharp
...
  class Program
  {
    static void Main(string[] args)
    {

      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

      ...

      builder.Services.AddDbContext<ToDoListContext>(
                        dbContextOptions => dbContextOptions
                          .UseMySql(
                            builder.Configuration["ConnectionStrings:DefaultConnection"], ServerVersion.AutoDetect(builder.Configuration["ConnectionStrings:DefaultConnection"]
                          )
                        )
                      );
      ...
    }
  }
...
```

When we run `WebApplicationBuilder builder = WebApplication.CreateBuilder(args);`, we're creating our web application builder object. It's at this point that `appsettings.json` is implicitly loaded as a configuration file. 

Later when we access `builder.Configuration["ConnectionStrings:DefaultConnection"]`, we're accessing our web application builder's configuration file (`appsettings.json`), and getting the database connection string therein. 

Well, we can also access our app's configurations (saved in `appsettings.json`) in our controllers. To do this we simply need to load the configurations via dependency injection. This is just like what we did with our database connection and Identity's `UserManager` and `SignInManager`. Let's look at the code to do this, and then review it. 

Here's how we'll update our `HomeController.cs`:

<div class="filename">Controllers/HomeController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;
using MvcApiCall.Models;
using Microsoft.Extensions.Configuration;

namespace MvcApiCall.Controllers
{
  public class HomeController : Controller
  {
    private readonly string _apikey; // New property.

    // New Controller.
    public HomeController(IConfiguration configuration)
    {
      _apikey = configuration["NYT"];
    }

    public IActionResult Index()
    {
        Task<string> allArticles = Article.GetArticles(_apikey); // Using _apikey here!
        return View(allArticles);
    }
  }
}
```

We use dependency injection to access our app's `appsettings.json` configurations through the `IConfiguration` service. This service gets injected into our controller in the `HomeController` constructor as the `configuration` parameter. 

We don't save the entire `configuration` object. Instead, we access the `"NYT"` key to get our API key. We then save this value as a private readonly property called `_apikey`. We can now use `_apikey` as needed within our `HomeController`. 

If you are working with a scaffolded MVC app (using the `dotnet new` tool), you'll also see a `Logger` service injected into the `HomeController`. Ignore that, and update the controller with the new property and the constructor with the new parameter and statement as shown above. We won't learn about the `Logger` service, but you can optionally read more about it [on the docs](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/logging/?view=aspnetcore-6.0).

## View
---

The view for `Home/Index.cshtml` will also be simple:

<div class="filename">Views/Home/Index.cshtml</div>

```html
<h1>All Articles:</h1>

<ul>
@foreach (Article article in Model)
{
  <li>Section: @article.Section</li>
  <li>Title: @article.Title</li>
  <li>Abstract: @article.Abstract</li>
  <li>Url: @article.Url</li>
  <li>Byline: @article.Byline</li>
  <li>Item Type: @article.Item_Type</li>
  <br />
}
</ul>
```

If you are working with a scaffolded MVC app (using the `dotnet new` tool), simply add the above code below the existing code in the `Home/Index.cshtml` view.

Now we're ready to test out the results. Run your app and you'll see the same results from the New York Times API that we printed to our console. If you are using a scaffolded MVC app, you'll also see some of the boilerplate styling that comes default. 

## Summary
---

In this series of lessons, we've gotten just a bit of practice with making API calls. In the next course section we'll practice even more when we make API calls from an MVC front end to a custom API that we create. We'll also learn more about  the `dotnet new` scaffolding tool and use it to build both APIs and MVCs.

It's worth a reminder that we've added very basic protection for our API key. We could still accidentally commit our API key to our Git history and publish it to the web. To learn about other ways we can manage secrets, visit the [MS Docs on application secrets](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-6.0).

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for Sample New York Times API Call: `3_api_call_in_mvc_app`](https://github.com/epicodus-lessons/c-sharp-newyorktimes-api-call/tree/3_api_call_in_mvc_app)**