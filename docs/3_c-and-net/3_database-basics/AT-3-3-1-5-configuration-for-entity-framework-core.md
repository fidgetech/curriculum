---
title: "📓 3.3.1.5 Configuration for Entity Framework Core"
day: monday
id: 3-3-1-5-configuration-for-entity-framework-core
hide_table_of_contents: true
---

In this lesson, we'll explain how to configure a project to use Entity Framework Core with a MySQL database. The instructions in this lesson can be used for any app you build to use EF Core with a MySQL database. 

For this walkthrough, we'll use our To Do List app as an example, and we'll start where we left off with our To Do List app: using `MySqlConnector` to communicate with a MySQL database. That means this walkthrough will include instructions on how to remove `MySqlConnector` and how to update the custom methods we created over the weekend homework to communicate with our MySQL database. As always, you are welcome to code a long with these lessons, or just read through them. We'll provide links to an example repo as needed and at the very end of the walkthrough.

## Project Setup
---

### Adding and Removing Dependencies

Out with the old and in with the new! We'll start by adding the additional dependencies that we will need for this EF Core project. Go to the root directory of the production project (`ToDoList`) via the terminal and add the following dependencies.

```bash
$ dotnet add package Microsoft.EntityFrameworkCore -v 6.0.0
$ dotnet add package Pomelo.EntityFrameworkCore.MySql -v 6.0.0
```

Notice one of these does not start with _Microsoft_. That's because `Pomelo.EntityFrameworkCore.MySql` is actually a third-party package that can be downloaded from the same source as official Microsoft packages. Check out [Entity Framework Core Official GitHub Repo](https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql) to learn more.

Let's also remove the `MySqlConnector` package that we added over the weekend.

```bash
$ dotnet remove package MySqlConnector
```

Notice how MySqlConnector is now gone from our .csproj file. The `dotnet remove package [PACKAGE NAME]` command allows us to conveniently and cleanly remove packages that we do not need from our project.

### Database Connection String

Next, we need to add a database connection string to our app. 

When we used the MySqlConnector package to communicate with the database, we put our database connection string in `appsettings.json` and loaded it during the creation of our web app host in `Program.cs`. We used `appsettings.json` to protect the sensitive data within our database connection string by adding it to our `.gitignore` so that it is never tracked in our Git history. We also included instructions on how to recreate an `appsettings.json` in our project READMEs.

Well, we'll use `appsettings.json` in just the same way to load and protect our database connection string with EF Core. So if you are following along and updating your To Do List app, there are no major changes that we need to make with our processes around using `appsettings.json`. 

All other projects you create will need the following:

* `appsettings.json` listed in the `.gitignore` and committed to Git history.

<div class="filename">.gitignore</div>

```
obj
bin
appsettings.json
```

* Setup instructions in the project's `README.md` that explain how to recreate the `appsettings.json`, including the location of file (within the project's production directory) and the contents of the file.

* And an `appsetting.json` with the following contents, replacing the following values with your own:
  * `[YOUR-USER-HERE]` with your username 
  * `[YOUR-PASSWORD-HERE]` with your password
  * `[YOUR-DB-NAME]` with the name of your database

<div class="filename">ProjectName.Solution/ProjectName/appsettings.json</div>

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Port=3306;database=[YOUR-DB-NAME];uid=[YOUR-USER-HERE];pwd=[YOUR-PASSWORD-HERE];"
  }
}
```

### Update the Database Name and Create a New Database

We recommend creating a new database for this walkthrough of using EF Core to communicate with a MySQL database. Doing so will preserve the database we set up with version of the To Do List that uses MySqlConnector. To Do this, follow these steps:

1. Update the `database` key in the database connection string in `appsettings.json` to `to_do_list_with_ef_core`.
2. Copying the `to_do_list_with_mysqlconnector` database by exporting it, and then importing it with the new name of `to_do_list_with_ef_core`. For exact instructions on importing and exporting databases, visit [this lesson from the weekend homework](/c-and-net/database-basics/3-3-0-08-creating-a-test-database-exporting-and-importing-databases-with-mysql-workbench).

### Remove `DatabaseConfig.cs`

We'll configure our project to use EF Core in `Program.cs`. In the process, we'll set up our MySQL database to run as a service in `Program.cs`. Because of this, we no longer need the `ToDoList/Models/DatabaseConfig.cs` file that contains the `DBConfiguration` class. Start by removing this file from your To Do List project. 

Remove the following:

<div class="filename">ToDoList/Models/DatabaseConfig.cs</div>

```csharp
namespace ToDoList.Models
{
  public static class DBConfiguration
  {
    public static string ConnectionString { get; set; }
  }
}
```

### Creating the Database Context and Entities

Next, we need to create a model of our database and tables within our project for Entity Framework Core to use to map our C# classes and objects to MySQL database tables and entries, and vice versa. EF Core uses specific terminology for these models:

* An **entity** represents a single database table (with columns and types) as a C# model in our app. The entities in our To Do List app are described in `Item.cs` and `Category.cs`. 
* The **database context** represents the entire database (with all the tables) as a model in our app. The model is always called `ProjectNameContext` and it extends the functionality of EF Core's `DbContext` class. The `DbContext` class represents a session with our MySQL database that can be used to query and save instances of our entities (`Item`s and `Category`s). **Every time we want to reference a database in an app, we will do so using an instance of the `DbContext` class.**

We don't have to change anything with `Item.cs` or `Category.cs` to turn those models into EF Core entities. We list the entities in our application by defining them in the database context. So, let's create that next.

Within `ToDoList/Models` create a new file called `ToDoListContext.cs` and add the following code to it:

<div class="filename">ToDoList/Models/ToDoListContext.cs</div>

```csharp
using Microsoft.EntityFrameworkCore;

namespace ToDoList.Models
{
  public class ToDoListContext : DbContext
  {
    public DbSet<Item> Items { get; set; }

    public ToDoListContext(DbContextOptions options) : base(options) { }
  }
}
```

Let's walk through what's happening here:

* Our `ToDoListContext` class inherits (or "extends") from EF Core's `DbContext` class. This ensures it includes all default built-in `DbContext` functionality.  

* The `ToDoListContext` class contains a property of type `DbSet<Item>` named `Items` that represents the `items` table in our database. With this `Items` property, we've declared an **entity** called `Items` in our To Do List database context. 
  * Note that in order for `DbSet<T>` to create an entity for a specific C# object in our app, we always need to be sure to include the class name (`Item`) within the angle brackets (`<>`) after `DbSet`.

* We also include a constructor that inherits the behavior of its parent class constructor. As `ToDoListContext` is an extension of the `DbContext` class, we're invoking the constructor behavior from that class; `base` represents the parent `DbContext` class. 

* In the `ToDoListContext` constructor, we list a parameter of the type `DbContextOptions` called `options`. The argument for this parameter will be passed through **dependency injection** from `Program.cs` when our app is built and run. Note that we haven't yet set up anything in `Program.cs` — neither our database as a service or our database context options. We'll do that next!

### Configuring `Program.cs` to Run our Database as a Service

Next, we'll update `Program.cs` to do two things:

1. Configure our `WebApplicationBuilder` to set up a service for our database.
3. Configure our MySQL database to use the database connection string in `appsettings.json`.

Let's look at the new code in `Program.cs`. We'll show the entire file. 

<div class="filename">ToDoList/Program.cs</div>

```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ToDoList.Models;

namespace ToDoList
{
  class Program
  {
    static void Main(string[] args)
    {
      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

      builder.Services.AddControllersWithViews();

      builder.Services.AddDbContext<ToDoListContext>(
                        dbContextOptions => dbContextOptions
                          .UseMySql(
                            builder.Configuration["ConnectionStrings:DefaultConnection"], ServerVersion.AutoDetect(builder.Configuration["ConnectionStrings:DefaultConnection"]
                          )
                        )
                      );

      WebApplication app = builder.Build();

      // app.UseDeveloperExceptionPage();
      app.UseHttpsRedirection();
      app.UseStaticFiles();

      app.UseRouting();

      app.MapControllerRoute(
          name: "default",
          pattern: "{controller=Home}/{action=Index}/{id?}");

      app.Run();
    }
  }
}
```

Let's explain the updates:

* First note that we have a new `using` directive: `using Microsoft.EntityFrameworkCore;` This `using` directive imports the `UseMySql()` method from the `Microsoft.EntityFrameworkCore` namespace. We also maintain the `using ToDoList.Models`, because we use the model `ToDoListContext` within `Program.cs`.

* With `builder.Services.AddDbContext<ToDoListContext>(...)` we add EF Core as a service to our To Do List app. We specify `ToDoListContext` as the type of EF Core database context that we want to set up. Remember that `ToDoListContext` is a representation of our MySQL database.

* As the argument to the `AddDbContext<T>()` method, we configure our To Do List database context options: 
  * We state that we want to use a MySQL database with the `UseMySql()` method.
  * We pass in two arguments to the `UseMySql()` method: 
    * The database connection string in `appsettings.json`, which we get from accessing `builder.Configuration`. Remember that `appsettings.json` is implicitly loaded when we begin the process of building our web app host by running `WebApplication.CreateBuilder(args);`.
    * The version of the MySQL server, which we set to autodetect.
  * Note that the syntax `=>` in `dbContextOptions => dbContextOptions` creates a  **lambda expression**. In short, a lambda expression is just a way to write an anonymous function in a condensed fashion. Lambda expressions are used in a variety of languages and are similar to arrow functions in JavaScript. For more information about lambdas, check out the [Microsoft documentation](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/lambda-expressions).

With EF Core now configured to run as a service, EF Core will automatically handle opening and closing a database connection each time we query our database. Pretty neat! 

Note that while we name our EF Core database context `ToDolistContext`, the name of the actual database is still set in `appsettings.json`.

And finally, if you'd like to read more about how to configure EF Core as a service, visit the documentation [Configuring DbContext with Dependency Injection](https://docs.microsoft.com/en-us/ef/core/miscellaneous/configuring-dbcontext#configuring-dbcontextoptions) and scroll down to the "Using DbContext with dependency injection" section. 

## Updating to EF Core Naming Conventions
---

For EF Core to map our C# models to a MySQL database, we need to follow specific naming conventions, two to be precise:

1. By default EF Core maps entity properties (the properties of our C# models) to database columns that have the same name. This mapping is case sensitive. Because of this, the column names in our database tables must match the property names and case of the properties of our models.

2. It's also important to note that Entity Framework Core recognizes an entity's primary key through naming convention as well: for a property to be recognized as a primary key, we need to name the property `Id` or `[ClassName]Id`. We're going to go with the second way, naming our primary keys as `[ClassName]Id`.

To meet these naming convention, we need to go into our `to_do_list_with_ef_core` database and update the column names in the following way:

* Using MySQL Workbench, find the `items` table in the _Navigator_, right click and select _Alter Table..._.
  * Change the name of the `id` column to `ItemId`.
  * Change the name of the `description` column to `Description`.
  * Click _Apply_.

Next, go open `Item.cs` in the `ToDoList` project, and update your `Item` model's `Id` property to be `ItemId`. The `Item` model should now look like this:

<div class="filename">Models/Item.cs</div>

```csharp
namespace ToDoList.Models
{
  public class Item
  {
    public int ItemId { get; set; }
    public string Description { get; set; }

    ... // Item constructor and methods omitted
  }
}
```

Note that we will follow these naming conventions when setting up databases and entities from now on.

### Repository Reference

Follow the link below to view how a sample version of the To Do List app should look like at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i> Example GitHub Repo for To Do List with EF Core: 1\_ef\_core\_setup](https://github.com/epicodus-lessons/section-3-to-do-list-with-ef-core-csharp-net6/tree/1_ef_core_setup)**
