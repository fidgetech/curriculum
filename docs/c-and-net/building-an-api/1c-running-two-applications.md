---
title: "\U0001F4D3 3.6.1.3 Configuring Application URLs to Run Two ASP.NET Core Applications"
id: 3613-configuring-application-urls-to-run-two-aspnet-core-applications
slug: 3613-configuring-application-urls-to-run-two-aspnet-core-applications
hide_table_of_contents: true
sidebar_position: 15
day: monday
type: lesson
url: https://github.com/fidgetech/c-and-net/blob/main/1c_running_two_applications.md
---

Over the next few days, we'll build an application that will make calls to the API we built in the first part of this section. In order to do this, we'll need to have two applications running simultaneously. However, if we try running two applications on the same port, we'll get the following error:

```
Unhandled Exception: System.IO.IOException: Failed to bind to address https://127.0.0.1:5001: address already in use. ---> Microsoft.AspNetCore.Connections.AddressInUseException: Address already in use ---> System.Net.Sockets.SocketException: Address already in use
```

Fortunately, this is easy to fix. We just need to specify a different port number for one of the applications we are running.

There are many ways to do this. We'll list two simple configurations here.

## Changing Port Numbers in `Properties/launchSettings.json`
---

In our ASP.NET Core projects, we can add a file called `Properties/launchSettings.json` with a number of configurations on how we want to run our projects: in what environment? What port number? Should a browser window be launched? Projects that are scaffolded with the `dotnet new` command come with these files. Here's a code snippet from a `Properties/launchSettings.json` file:

<div class="filename">Properties/launchSettings.json</div>

```json
  "project_name_here": {
      "commandName": "Project",
      "launchBrowser": true,
      "applicationUrl": "https://localhost:5001;http://localhost:5000",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
```

Well, for our application to listen on a different port, we can simply update the `"applicationUrl"` to specify different ports such as `"https://localhost:5003;http://localhost:5004"`. 

## Configuring `WebHost.UseUrls()`
---

Alternatively, we can update our `Program.cs` file to specify a port number via [`builder.WebHost.UseUrls()`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.hosting.hostingabstractionswebhostbuilderextensions.useurls?view=aspnetcore-6.0):

<div class="filename">Program.cs</div>

```csharp
...

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.WebHost.UseUrls("http://*:8080");    

...
```

## Choose Your Preferred Port Numbers
---

You can pick whatever port numbers that you prefer. You may run into conflicts if you pick a port number that's already in use, like our MySQL server running on port 3306. If we try to use port 3306 and run our API, we'll get an error message similar to the following one:

```
Unable to bind to http://localhost:3306 on the IPv6 loopback interface: 'An attempt was made to access a socket in a way forbidden by its access permissions.'.
```

### The Ports We'll Use in the Cretaceous Park Example Projects

In the Cretaceous Park API example project, we'll assume the ports are `https://localhost:5001` and `http://localhost:5000`. As noted in an earlier lesson, we'll use HTTP in development, so we'll make all requests to `http://localhost:5000`.

For the Cretaceous Park Client (that we'll create in upcoming lessons), we'll assume the ports are `https://localhost:7277` and `http://localhost:5187`.