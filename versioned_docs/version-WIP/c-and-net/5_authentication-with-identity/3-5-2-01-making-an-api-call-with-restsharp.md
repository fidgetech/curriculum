---
title: "📓 5.5.2.1 Making an API Call with RestSharp"
day: tuesday
id: 5-5-2-1-making-an-api-call-with-restsharp
hide_table_of_contents: true
---

In this lesson, we'll learn how to make an API call with a console application and a popular REST API client library called [RestSharp](https://restsharp.dev/). We will start with a console application in order to focus on learning the basic process of making an API call and parsing the response. Then we'll practice making API calls from an ASP.NET Core MVC app.  

In the following lessons we'll also learn how to deserialize the JSON that's returned from (most) API calls. Throughout the lessons, we'll learn how to protect our API keys. 

## Project Setup
---

We'll use the New York Times' Top Stories API for this example project. In order to use the Top Stories API, you'll need to create a free [New York Times developer account](https://developer.nytimes.com/). Follow the [Get Started](https://developer.nytimes.com/get-started) steps to create an application and get your own API key. We recommend doing this first as API keys can sometimes take a little while to become activated.

### Creating Basic Project Files and Folders

For this example project you may build your own console app from scratch or use the `dotnet new` project scaffolding tool. A tool that scaffolds a project for us builds the folders and files with some boilerplate code, and it's a handy way to get started quickly on a new project. We'll use this tool again in future projects, so you will have a chance to practice with it at some point. More information on using the scaffolding tool is below. 

If you opt to build your own console app from scratch, build out this project structure to start and make sure to add the appropriate code to the `ConsoleApiCall.csproj` file:

```
ConsoleApiCall
├── Models/
├── Program.cs
└── ConsoleApiCall.csproj
```

**Don't initialize or save your changes to Git until you've completed the setup steps for protecting your API key.** 

### A Few Notes on Using the `dotnet new` Scaffolding Tool

To use the `dotnet new` project scaffolding tool, open the command line, navigate to your desktop or another destination folder, and enter in the following command: 

```bash
$ dotnet new console -o ConsoleApiCall -f net6.0
```

Note that the `-o` flag allows us to specify the "output directory", the directory where all of the scaffolded files will be added. The `-f` flag allows us to specify the framework version we want our project to use.

It's also important to note that the `dotnet new` scaffolding tool generates its console apps with a few newer features enabled:

* Implicit `using`s are enabled, which allows us to avoid having to explicitly list using directives.
* Nullable types are enabled, which allows us to use nullable types anywhere in our program. If we don't enable nullable types globally through the `.csproj` file, then we have to explicitly create nullable contexts with `#nullable enable` in the specific locations where we want to use nullable types.
* Top level statements are enabled, which makes it so that we don't need to explicitly include the entry point's `Main()` method. Note that only one class in our project can have this method, and usually it is `Program`. 

The first two features correspond to settings that we can enable for our entire app in our project's `.csproj`. The third feature is always enabled, and optional:

<div class="filename">ConsoleApiCall.csproj</div>

```csharp
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net6.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>

</Project>
```

**We're going to opt out of these features for now.** This is in order to...

1. Understand which using directives we need to use certain tools.
2. Remind ourselves about C# console app's entry point.
3. Avoid managing nullable variables throughout our app. When nullable types are enabled, we need to explicitly list which types could be `null` in our apps, which is a lot more than you might think. For example, [the `System.Console.ReadLine()` method](https://learn.microsoft.com/en-us/dotnet/api/system.console.readline?view=net-6.0) returns the user input, or `null` if there's nothing returned. If nullable types are enabled across our app, we would need to make sure that we're explicitly marking the variable that holds the user input as nullable: `string? userResponse = System.Console.ReadLine();`. When nullable types are not enabled we don't have to do this additional work. Since we haven't spent a lot of time working with nullable types, it's easier right now to simply enable them as needed in our app, instead of as a setting for our whole app. To review more information about nullable types, start with the LearnHowToProgram.com lesson on [Nullable Types](../../c-and-net/test-driven-development-with-c/3-1-2-6-nullable-types). 

Make sure to remove or comment out these configurations in your `ConsoleApiCall.csproj`:

<div class="filename">ConsoleApiCall.csproj</div>

```csharp
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net6.0</TargetFramework>
    <!-- <ImplicitUsings>enable</ImplicitUsings> -->
    <!-- <Nullable>enable</Nullable> -->
  </PropertyGroup>

</Project>
```

Note that you are welcome to choose your own path with these configurations, but the instructions in these lessons will not include how using these features may affect the warning or errors you get in your app. 

### Add RestSharp

Next, Let's add the RestSharp package to our project:

```bash
$ dotnet add package RestSharp --version 108.0.3
```

### Create an Environment Variable for the API Key

The last step for setup is to protect our API key in an environment variable. There are many ways we can do this, and we'll take a simple approach in this lesson.

First, we'll create a `.gitignore` with the file and folders listed within that we do not want tracked in our Git history:

<div class="filename">.gitignore</div>

```
EnvironmentVariables.cs
obj
bin
```

Next, we'll commit the change we made to our `.gitignore` to our Git history.

Next, let's create the file that we've ignored. It's in this file that we'll put our API key.

<div class="filename">EnvironmentVariables.cs</div>

```csharp
namespace ConsoleApiCall.Keys
{
  public static class EnvironmentVariables
  {
    public static string ApiKey = "[YOUR-API-KEY-HERE]";
  }
}
```

Replace `"[YOUR-API-KEY-HERE]"` with your own API key. 

Wherever we need to use our API key in our application we can do so by adding a using directive for `ConsoleApiCall.Keys` and calling `EnvironmentVariables.ApiKey`. We'll do just that later in this lesson.

Keep in mind that this is very basic protection for our API key. We could still accidentally commit our API key to our Git history and publish it to the web.  To learn about other ways we can manage secrets, visit the [MS Docs on application secrets](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-6.0).

## Adding Code To Make An API Call
---

Open the `ConsoleApiCall/` project directory in VS Code and we'll get started. The `dotnet new` command has already added a basic `Program.cs` file for us: 

```csharp
// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
```

Take note that the code in `Program.cs` is making use of top-level statements and implicit using directives, which allows us to omit the `Main()` method and not explicitly include the `using System;` namespace directive to use the `Console.WriteLine()` method.

Let's update `Program.cs` to include basic code to make an API call. We'll also explicitly list all of our using directives and our `Program.Main()` method, the entry point to our C# console applications.

Here's how we'll update `Program.cs`:

<div class="filename">Program.cs</div>

```csharp
using System;
using System.Threading.Tasks;
using RestSharp;
using ConsoleApiCall.Keys;

namespace ApiTest
{
  class Program 
  {
    static void Main()
    {
      Task<string> apiCallTask = ApiHelper.ApiCall(EnvironmentVariables.ApiKey);
      string result = apiCallTask.Result;
      Console.WriteLine(result);
    }
  }

  class ApiHelper
  {
    public static async Task<string> ApiCall(string apiKey)
    {
      RestClient client = new RestClient("https://api.nytimes.com/svc/topstories/v2");
      RestRequest request = new RestRequest($"home.json?api-key={apiKey}", Method.Get);
      RestResponse response = await client.ExecuteAsync(request);
      return response.Content;
    }
  }
}
```

Let's take time to understand this new code, and then try running it afterwards. 

We'll first take a look at the `ApiCall` static method that we've created:

* We create a class called `ApiHelper` that contains a static method `ApiCall` which takes an `apiKey` parameter.

* We want our API calls to run asynchronously so that the application is responsive and free to run other tasks while the HTTP request/response loop executes. In order to achieve this, we add the `async` keyword to our method declaration.

* Whenever a method is declared as `async`, we need to return a `Task` type. We specify the return type of our Task object (a `string`) in the angle brackets, but a generic `Task` can also be returned.

* Note that we use the base URL _https://api.nytimes.com/svc/topstories/v2_ from the Top Stories API. We instantiate a RestSharp `RestClient` object and store the connection in a variable called `client`.

* Next, we create a `RestRequest` object. This is our actual request. We include the path to the endpoint we are looking for (`home.json`) along with our API key.  We also specify that we will be using a GET Http method.

* Note that we utilize C#'s string interpolation to place the `apiKey` variable into the `RestRequest` by placing a `$` before a string and then placing any interpolated values in curly braces.

* Then we use the `await` keyword to specify that we need to receive a result before we attempt to define `response`. We call the `RestClient`'s `ExecuteAsync` method and pass in our request object.

* Finally, we return the `Content` property of the `RestResponse response` variable, which is a string representation of the response content.

Now, let's take a a look at the `Program.Main()` method:

* In the `Main()` method, we create a variable to store the returned `Task<string>` from our `async` function and then call the `ApiHelper` class' `ApiCall` method. It's here that we pass in our New York Times API key via our environment variable  `EnvironmentVariables.ApiKey`.

* Then, we create a variable to store the `Result` of the `Task`, which in our case is a string representation of the API call's response content.

* Lastly, we write the result to the console.

## Run the Program
---

Next, run the program with `dotnet run`. We'll get a long, very dense response that has all the data for the New York Times' top stories.

To make better sense of this data, we can paste the response into a JSON formatter like this [one](http://jsonviewer.stack.hu/). Copy the data into the formatter and then click the "Format" button. Of course, Postman can help us read this data, too.

However, this isn't an ideal way to deal with API responses. In the next lesson, we'll learn how to parse and deserialize JSON data in our C# applications.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for Sample New York Times API Call: `1_api_call_in_console_app`](https://github.com/epicodus-lessons/c-sharp-newyorktimes-api-call/tree/1_api_call_in_console_app)**
