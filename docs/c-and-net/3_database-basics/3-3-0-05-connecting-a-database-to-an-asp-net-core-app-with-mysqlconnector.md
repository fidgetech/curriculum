---
title: "📓 5.3.0.05 Connecting a Database to an ASP.NET Core App with MySqlConnector"
day: weekend
id: 5-3-0-05-connecting-a-database-to-an-asp-net-core-app-with-mysqlconnector
hide_table_of_contents: true
---

In the last lesson, we created a database for our To Do List using MySQL Workbench. In this lesson, we'll connect the database to our application using a tool called **MySqlConnector**. Once connected, we'll be able to interact with our database and its tables as C# objects in our application.

First, let's think about how we'll refactor our To Do List app to use a database.

## To Do List Database Refactor Plan
---

The rest of the weekend homework will focus on building methods to access and update our database from scratch. This process is labor-intensive and involves a lot of tedious boilerplate code. Later in this section, we'll learn to use a framework called Entity Framework Core that manages our database connection and provides easy-to-use methods to access and update our database. The goal of building database methods from scratch now is to to get an understanding of what is really going on under the hood before we start using Entity Framework Core.

You are welcome to code along with these lessons, or simply to read through them. At the end of this walkthrough, we'll provide an example repo with the finished project. If you'd like to get a sense of **the finished project** in advance, go ahead and take a look at the following repo:

---

**[<i class="glyphicon glyphicon-folder-open"></i>  Example GitHub Repo for To Do List with MySqlConnector](https://github.com/epicodus-lessons/section-3-to-do-list-with-mysqlconnector-csharp-net6)**

## Project Structure & Configuration

Let's start refactoring our To Do List app to use a MySQL database. After following along with the last section's lessons, our To Do List's file and folder structure should look like this:

<pre>
ToDoList.Solution
├── ToDoList
│   ├── Controllers
│   │   ├── CategoriesController.cs
│   │   ├── HomeController.cs
│   │   └── ItemsController.cs
│   ├── Models
│   │   ├── Category.cs
│   │   └── Item.cs
│   ├── Program.cs
│   ├── Properties
│   │   └── launchSettings.json
│   ├── ToDoList.csproj
│   └── Views
│       ├── Categories
│       │   ├── Index.cshtml
│       │   ├── New.cshtml
│       │   └── Show.cshtml
│       ├── Home
│       │   └── Index.cshtml
│       └── Items
│           ├── New.cshtml
│           └── Show.cshtml
└── ToDoList.Tests
    ├── ModelTests
    │   ├── CategoryTests.cs
    │   └── ItemTests.cs
    └── ToDoList.Tests.csproj
</pre>

Your project directory may be slightly different if you added a `Shared` directory with a `_Layout.cshtml` file or if you included static assets in a `wwwroot` directory (with related subdirectories).

## MySqlConnector Installation & Configuration
---

We'll begin by walking through how to set up a MySQL database connection in a project using MySqlConnector. Let's update our `.csproj` file to include MySqlConnector.

### Installing the MySqlConnector Package

We can use the following command in the production directory of our project (`ToDoList.Solution/ToDoList`) to add this package:

```bash
$ dotnet add package MySqlConnector -v 2.2.0
```

This command should also automatically restore the packages in our application, but if you encounter any errors, run the following command to manually restore packages:

```bash
$ dotnet restore
```

### Creating a Database Connection String

When we connect to our database, we must manually open a connection by creating a new instance of the `MySqlConnection` class from the MySqlConnector package. We'll learn exactly how to do this in upcoming lessons. What's important to know right now is that the `MySqlConnection` constructor expects a database **connection string** that contains the access details of our database: its name, the database user and password, and the database server and port. For our To Do List app, this is what our connection string will look like:

```json
"server=localhost;port=3306;uid=root;pwd=epicodus;database=to_do_list_with_mysqlconnector;"
```

The connection string includes five distinct parts:

* **`server`** identifies our database's server. We list `localhost` because our application is running on a server local to our machine, not online.

* **`uid`** identifies our database's user. In the LearnHowToProgram.com example lessons, we'll always assume the user is 'root'. 

* **`pwd`** provides the password for the given user. You should input your own password that you set up as the value to this field. In the LearnHowToProgram.com example lessons, we'll always assume the password is 'epicodus'. 

* **`port`** identifies the port MySQL is running on. The default port number for a MySQL server is 3306.

* **`database`** is the database name. In our case, this is the `to_do_list_with_mysqlconnector` database we created a few lessons ago.

### Protecting the Database Connection String with `appsettings.json`

Notably, the connection string contains sensitive data (password and username) that we don't want exposed on the internet. So what can we do to hide this information, but still use it in our project? ASP.NET Core provides built-in support for managing application configurations through a file called `appsettings.json`. As the name suggests this file is written in JSON and it contains application settings, like database connection strings. 

In order to protect the data in `appsettings.json`, we must add it to our `.gitignore` so that it never gets saved to our remote repository. Let's do that first, before we create `appsettings.json`.

<div class="filename">.gitignore</div>

```
obj
bin
appsettings.json
```

Make sure to commit the changes you made to your `.gitignore` before moving on. 

Next, let's create `appsettings.json`. Within the production directory of our project (`ToDoList.Solution/ToDoList`), create `appsettings.json` and add the following code to it:

<div class="filename">ToDoList.Solution/ToDoList/appsettings.json</div>

```json
{
    "ConnectionStrings": {
        "DefaultConnection": "Server=localhost;Port=3306;database=to_do_list_with_mysqlconnector;uid=[YOUR-USERNAME-HERE];pwd=[YOUR-PASSWORD-HERE];"
    }
}
```

**Make sure to update the connection string with the values that you set for your username and password.** As noted earlier, we'll always assume the user is 'root' and the password is `epicodus`. 

Also note that since our `appsettings.json` has been put in our `.gitignore`, users will not have access to it when cloning our project. **This means that you will need to add specific instructions in your README that tells the user where to create the file, and what code to include in it.**  We recommend using the above formatting and directing users to replace `[YOUR-USERNAME-HERE]` and `[YOUR-PASSWORD-HERE]` with the user's own user and password values. 

### Accessing `appsettings.json` through `builder.Configuration` in `Program.cs`

ASP.NET Core automatically loads `appsettings.json` as our application host's official configuration file. This happens implicitly when we create our `WebApplicationBuilder` in `Program.cs`. Remember the following line of code?

<div class="filename">ToDoList.Solution/ToDoList/Program.cs</div>

```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using ToDoList.Models;

namespace ToDoList
{
  class Program
  {
    static void Main(string[] args)
    {
      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

      ...
    }
  }
}
```

Well, when we create the `builder` instance, our configurations in `appsettings.json` automatically get loaded and added to our web app host as a property of the `builder` instance: `builder.Configuration`. Here's how we'll access our database connection string in `Program.cs`:

```cs
builder.Configuration["ConnectionStrings:DefaultConnection"];
```

The big implication here is that we can't access the `appsettings.json` data from just anywhere in our app. If we want to access data in `appsettings.json`, we need to do it through `builder.Configuration` in `Program.cs` when we create our web app host. So, our next two steps are to create a class with a property that holds the database connection string that we can use throughout our application, and then update `Program.cs` to set the value of that property. 

### Making the Connection String Available throughout the App

Let's first create a class to store the database connection string. Create a new file called `DatabaseConfig.cs` and add it to the `ToDoList/Models` directory:

<div class="filename">ToDoList.Solution/ToDoList/Models/DatabaseConfig.cs</div>

```csharp
namespace ToDoList.Models
{
  public static class DBConfiguration
  {
    public static string ConnectionString { get; set; }
  }
}
```

Note that we can name the file name, class name, and property whatever we like so long as we follow the general convention of descriptive naming.

Also notice that the class and property are both `static`, meaning that the class can't have an instance, and the property also cannot be called on an instance. When we want to get or set `ConnectionString`, we'll do so by accessing `DBConfiguration.ConnectionString`.

Next let's update `Program.cs` to set the value of the `ConnectionString` property to the database connection string within `appsettings.json`. We'll do this by adding one new line of code to `Program.cs`:

<div class="filename">ToDoList.Solution/ToDoList/Program.cs</div>

```csharp
using Microsoft.AspNetCore.Builder;
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

      // new line!
      DBConfiguration.ConnectionString = builder.Configuration["ConnectionStrings:DefaultConnection"];

      WebApplication app = builder.Build();

      ...

      app.Run();
    }
  }
}
```

We can now use our database connection string via `DBConfiguration.ConnectionString` anywhere in our application. What's more, we've protected our database connection string by adding it to `appsettings.json` which we've told Git to ignore. We haven't yet learned how to open a database connection with the connection string, but that's exactly what we'll do in the next lesson. 

Going forward, don't forget to include setup instructions in your README for an `appsettings.json` with a database connection string.
