---
title: "📓 5.2.0.16 Debugging Views and Configuring a Development Environment with launchSettings.json"
day: weekend
id: 5-2-0-16-debugging-views-and-configuring-a-development-environment-with-launchsettings-json
hide_table_of_contents: true
---

Sometimes we have written a good program that compiles nicely. We build the project, run the server, and navigate to our app. At some point while navigating through our pages, we get an error and a page isn't returned. This generally results in a 500 server error message in the browser. (We'll cover server messages later.) Unfortunately, this vague message isn't helpful for debugging our code.

Well, we can configure our ASP.NET Core app to run a service called [Developer Exception Page](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/error-handling?view=aspnetcore-6.0#developer-exception-page) that provides a more detailed error message when a webpage fails to load due to a server error. To get a sense of what these exception pages look like, check out the image below which shows an error in the Friend Letter project. On the left is the generic message from the browser, and on the right is the developer exception page that highlights the exact line of code that's throwing an error. 

![A generic error message is pictured on the left and an error message via Developer Exception Pages is pictured on the right.](/images/c-sharp/Week+two/error-messages-aspnetcore.png)

As the image shows, having access to the detailed error messages in Developer Exception Pages is clearly an important tool for debugging. 

Note that there are a few ways to enable Developer Exception Pages. We'll cover three in this lesson to get a sense of how ASP.NET Core apps can be configured. In the process, we'll learn how ASP.NET Core apps come with built-in configurations for different environments, like "development" or "production". However, we'll stick with one tool in the end, which is using a `launchSettings.json` to run our apps in development mode, which automatically enables Developer Exception Pages. 

## Manually Configure `Program.cs`
---

We can configure our ASP.NET Core app to use Developer Exception Pages by updating `Program.cs` with a new line of code: `app.UseDeveloperExceptionPage();`. To see exactly where to place this line of code, we'll use the `Program.cs` from the Friend Letter application as an example:

<div class="filename">FriendLetter/Program.cs</div>

```cs
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace FriendLetter
{
  class Program
  {
    static void Main(string[] args)
    {
      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

      builder.Services.AddControllersWithViews();

      WebApplication app = builder.Build();

      // new code!
      app.UseDeveloperExceptionPage();

      app.UseRouting();

      app.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}"
      );

      app.Run();
    }
  }
}
```

Notice that we place `app.UseDeveloperExceptionPage();` right below the line of code that creates our `WebApplication` host `app`. You can do the same in any ASP.NET Core application.

The issue with this method is that we're enabling Developer Exception Pages all of the time, whether we're still developing our app or ready to deploy it in production. Well, we don't want Developer Exception Pages in production, because they take a fair amount of resources to run and can slow down our app. This means we only want to enable Developer Exception Pages during development, when we're actually writing and debugging code.

Because code is optimized in different ways for production versus development, ASP.NET Core provides many tools to manage how our app should run in these two environments (and a third called "staging" that we won't get into).

As part of the version 6 release, all ASP.NET Core applications now come with a default configuration for Developer Exception Pages to automatically be enabled in development mode. That means all we need to do is learn how to start our projects in development mode. Let's do that next.

## Run App in Development Mode
---

Without configuration, when we run our applications with `dotnet run` or `dotnet watch run`, they automatically are run in "production" mode, which includes the code, resources, and optimizations for our web apps to be hosted online and available for public use.

To run our application in development mode, we simply need to add a flag to our `dotnet run` command:

```
dotnet run --environment Development
```

When we do this, we'll see our environment confirmed in the terminal output. Notice `"Hosting environment: Development"` in the output below.

```
$ dotnet run --environment Development
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[63]
      User profile is available. Using 'C:\Users\staff\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5000
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: https://localhost:5001
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Development
info: Microsoft.Hosting.Lifetime[0]
      Content root path: C:\Users\staff\Desktop\net6\csharp-friend-letter-dotnet-5\FriendLetter\
```

### Configure a `launchSettings.json` File

However, there's an even better option for us than adding the command line flag `--environment Development` to run our apps in development mode: we can create a file called `launchSettings.json` that contains information about what environment we want our project to be run. Let's start by creating this file and adding in the configurations. 

Within the project's production directory, add the following:

* A new directory called `Properties`
* Within `Properties` add a new file called `launchSettings.json`

### `launchSettings.json` and Starting a Server in Development Mode with a Watcher

<div class="filename">ProjectName.Solution/ProjectName/Properties/launchSettings.json</div>

```json
{
  "profiles": {
    "development": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": true,
      "applicationUrl": "https://localhost:5001;http://localhost:5000",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
    "production": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": true,
      "applicationUrl": "https://localhost:5001;http://localhost:5000",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Production"
      }
    }
  }
}
```

Within `launchSettings.json` we've created two launch `"profiles"`, that is, two different configurations with which we can launch our web app host. 

The first profile is called `"development"` and the other is called `"production"`. We can name our profiles whatever we like. 

Note that the first profile listed within the `"profiles"` key becomes the default profile that is used when we run `dotnet watch run`. Since the `"development"` profile comes first, our site will be launched in development mode when we run our project with `dotnet watch run`. 

To run the `"production"` profile (or any other that is not the default), we'll need to specify it:

```
dotnet watch run --launch-profile "production"
```

Notice that the configurations for both profiles are the same, except for the value of the environment variable: one is set to `"Development"` and the other is set to `"Production"`. When we run our app in development or production mode, we're primarily making use of the default configurations that ASP.NET Core sets for these two modes; like enabling Developer Exception Pages when our app is run in development mode. 

Let's learn what each configuration does:

* `"commandName": "Project"` configures our project to use the Kestrel server. We could instead use a different server, but we do not have a reason to do that.
* `"dotnetRunMessages": true` configures our host to deliver us informative messages in the console about our project when it is run.
* `"launchBrowser": true` will not only run the web app host, but open our browser to the default application URL. The default for this setting is false, so if we want to have this feature turned on, we must do so via a `launchSettings.json` profile.
* `"applicationUrl": "https://localhost:5001;http://localhost:5000"` sets our application's port. We can change `5001` and `5000` to something else, though we may get conflicts. For example, if we change our port to `3306`, the same port number that our MySQL server runs on, we'll get an error when we run our app: `Unhandled exception. System.IO.IOException: Failed to bind to address https://localhost:3306.`
* `"environmentVariables"` sets the environment variables for our project. We only set one variable, which is a value for `"ASPNETCORE_ENVIRONMENT"` to set which mode or "environment" we want our app to be run in. In our case, `"ASPNETCORE_ENVIRONMENT"` is set to either `"Production"` or `"Development"`.

**Going forward, we'll use a `Properties/launchSettings.json` file in all of our ASP.NET Core projects. Because of this, take note of a few important usage notes:**

* The contents of the `launchSettings.json` file will be the same in all of our ASP.NET Core projects in LearnHowToProgram.com.
* You are welcome to configure the settings in `launchSettings.json` as you see fit, or just use the default configurations provided above. 
* According to the MS Docs `launchSettings.json` is only used on the local development machine and should not be deployed. In other words, it's for development only.

## Summary
---

ASP.NET Core provides many tools to manage how our apps should run in different environments, like production and development. When we run our application in development mode, Developer Exception Pages are enabled by default such that we do not need to include `app.UseDeveloperExceptionPage();` within `Program.cs`.

Intentionally running your app in development or production mode is standard practice, and better than enabling Developer Exception Pages as a default within `Program.cs`. So, we recommend running your application in development mode by creating a `launchSettings.json` with a `"development"` profile. We recommend using the `launchSetting.json` file provided in this lesson, and we'll use it in all example ASP.NET Core projects. With a `launchSettings.json` in place, we can run our application in development mode by running `dotnet watch run`.

To optionally learn more about about environments and configuring them through `launchSettings.json`, visit the [MS Docs on Using Multiple Environments in ASP.NET Core.](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-6.0)
