---
title: "📓 3.2.0.18 Configuration Quick Reference"
id: 3-2-0-18-configuration-quick-reference
hide_table_of_contents: true
day: weekend
---

Use this lesson as a quick reference for setting up project files, folders, and configuring a host for an ASP.NET Core MVC web application.

### Sample File/Folder Structure

```
ProjectName.Solution/
├── .gitignore
├── ProjectName/
│   ├── Controllers
│   │   └── NameController.cs
│   ├── Models
│   │   └── ClassName.cs
│   ├── Program.cs
│   ├── Properties
│   │   └── launchSettings.json
│   ├── ProjectName.csproj
│   └── Views
│       └── ControllerName
│           └── RouteMethodName.cshtml
└── ProjectName.Tests/
    ├── ModelTests
    │   └── ClassNameTests.cs
    └── ProjectName.Tests.csproj
```

### Sample `ProjectName.csproj` File

<div class="filename">ProjectName.Solution/ProjectName/ProjectName.csproj</div>

```csharp
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
  </PropertyGroup>

</Project>
```

The `.gitignore` in our .NET projects should include the following:

<div class="filename">ProjectName.Solution/.gitignore</div>

```txt
obj
bin
```

### Sample `Program.cs` File

<div class="filename">ProjectName.Solution/ProjectName/Program.cs</div>

```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace ProjectName
{
  class Program
  {
    static void Main(string[] args)
    {
      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

      builder.Services.AddControllersWithViews();

      WebApplication app = builder.Build();

      // app.UseDeveloperExceptionPage();
      app.UseHttpsRedirection();

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

With the above `Properties/launchSettings.json` file in place, we can run the following:

```
$ dotnet watch run
```

And our project will automatically be run with the configurations that we've set in the first profile `"development"`, which will run our project in development mode. Note that the default launch profile that is used when we run `dotnet watch run` is always the first profile listed in the `launchSettings.json` file.

If we want to run our project in production mode with a watcher, we can use a command line flag to specify that we want to run the `"production"` profile.

```
$ dotnet watch run --launch-profile "production"
```
