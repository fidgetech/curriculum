---
title: "📓 3.6.0.10 Scaffolding API Controllers"
id: 36010-scaffolding-api-controllers
hide_table_of_contents: true
day: weekend
---

In this lesson, we'll learn how to use the `aspnet-codegenerator` tool to scaffold files within our application. While `dotnet new` scaffolds entire projects based on templates, the `aspnet-codegenerator` tool can create files like controllers. This can save us a lot of work!

**In this section's code review, you should not be using a scaffolding tool to create the boilerplate code for your routes.** We want to see an understanding of this material and an ability to create it on your own, without the use of this tool.However, past this code review and in personal projects, feel free to use `aspnet-codegenerator` to spin up a project files quickly!

## Scaffolding our Controller
---

You've now added full CRUD to your API! Although we want you to be comfortable writing controller routes, in the future, you might find it easier to use a scaffolding tool to create the boilerplate code for your routes. We'll scaffold files using the `aspnet-codegenerator` tool. 

First note that you should scaffold a controller after you have created your model and database context, but before you have created your controller. So for our Cretaceous Park API, **you should not run the following commands, because the AnimalsController already exists.** However, if you want to test it out, you could delete your AnimalsController, and run the command to scaffold it again. Otherwise, use the following commands in future projects.

First, we'll need to install some packages to our project, required for scaffolding. Run the following command in your project directory. For the Cretaceous Park API, this is the `CretaceousApi/` directory.

```bash
$ dotnet add package Microsoft.EntityFrameworkCore.SqlServer -v 6.0.0
$ dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design -v 6.0.0
```

Then, we'll install the tool `aspnet-codegenerator` to create a controller based on a given model and database context. **Note that we'll only ever need to install this tool once:**

```bash
$ dotnet tool install -g dotnet-aspnet-codegenerator --version 6
``` 

Note that we specify `--version 6` so that we install the version compatible with .NET 6.

Finally, we can scaffold! Run the following command in your project directory. For the Cretaceous Park API, this is the `CretaceousApi/` directory.

```
$ dotnet aspnet-codegenerator controller -name AnimalsController -async -api -m Animal -dc CretaceousApiContext -outDir Controllers
```

This command invokes `aspnet-codegenerator` to do the following:

* `controller`: create a controller
* `-name AnimalsController`: use the name `AnimalsController`
* `-async`: use asynchronous actions
* `-api`: create the controller for an API
* `-m Animal`: use the `Animal` model for the controller actions
* `-dc CretaceousApiContext`: create a database context of type `CretaceousApiContext`
* `-outDir Controllers`: add the new controller file to the `Controllers/` directory

To learn more about how to use `aspnet-codegenerator`, visit the [official documentation](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/tools/dotnet-aspnet-codegenerator?view=aspnetcore-6.0).
