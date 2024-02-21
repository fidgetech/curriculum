---
title: "📓 3.4.0.3 Code First Development and Migrations"
id: 3403-code-first-development-and-migrations
hide_table_of_contents: true
day: weekend
---

So far, we've manually created and updated our database using MySQL Workbench. However, this approach isn't very effective for a large production application where many developers are collaborating together. Let's say we have many different teams that are working on different features in an application and we're working on a team that makes changes to the database. How can we convey the changes to other teams working on the application? We'd need to give everyone exact instructions on the changes we made, which could get tedious fast, especially if we're making a lot of changes.

It's very common for a database to change over time. In fact, in large projects, there may be hundreds or even thousands of changes to a database over the course of a project. It would be very tedious to make all those changes in MySQL Workbench or another database tool.

Fortunately, EF Core provides a solution for this. We can use [**migrations**](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli) to create a new database or update an existing database based on our code. Migrations are a common feature of many frameworks, including Rails, which uses Active Record. So in this lesson, we're going to learn about database migrations, how to create them, and install the tools necessary for the job. The instructions in this lesson can be applied to any other project you create.

## To Do List Refactor Plan
---

In this lesson, we'll begin to refactor our To Do List app to use EF Core migrations. We'll build off of the To Do List app that we completed by the end of the last course section. You are welcome to continue building off your own project on a new branch or save your changes to a new repo. Or, you are welcome to use the main branch of the following repo as a **starter project**:

---

**[<i class="glyphicon glyphicon-folder-open"></i>  Starter GitHub Repo for To Do List with EF Core Migrations and a Many-to-Many Relationship](https://github.com/epicodus-lessons/section-4-to-do-list-with-many-to-many-csharp-net6/tree/1_starter_project)**

Before proceeding, make sure to update the name of your database in `appsettings.json` to reflect the new project we are building. In the lessons, we'll use the name `to_do_list_with_many_to_many`, but you can pick whatever you prefer:

<div class="filename">ToDoList/appsettings.json</div>

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Port=3306;database=to_do_list_with_many_to_many;uid=root;pwd=epicodus;"
  }
}
```

## Database Migrations
---

A **migration** is simply a file that describes an update to the database. When we use EF Core to develop and manage our database from our project's codebase, we define how our database should be structured using our project's models and the `DbContext` class. Part of this involves telling EF Core to create a migration. When a migration is created, EF Core reviews our project's models and creates a file that describes how our database should be structured based on our models. Each migration is a snapshot of how our database should be structured, and every time we make changes to our entities (our project's models like `Item` and `Category`), we need to make a new migration so that EF Core knows how to update our database.

A large project could have thousands of migrations. In order to recreate the database schema, a developer simply needs to run a command and all the migrations will run sequentially, updating the database to its current state. This can make our programs more flexible and significantly speed up the time it takes to make changes to our database.

### Installing Tools

For Entity Framework Core, we use a tool called `dotnet-ef` to create migrations and update our database. We'll install this tool globally so that it is always available in all of our projects. Run the following command in your terminal now:

```bash
$ dotnet tool install --global dotnet-ef --version 6.0.0
```

Optionally, you can read more about the `dotnet ef` tool [on the docs](https://docs.microsoft.com/en-us/ef/core/cli/dotnet).

In order to use `dotnet-ef`, we also need to install the `Microsoft.EntityFrameworkCore.Design` package in our ASP.NET Core projects. Within the production directory of our To Do List app, run the following command: 

```bash
$ dotnet add package Microsoft.EntityFrameworkCore.Design -v 6.0.0
```

The `Microsoft.EntityFrameworkCore.Design` package adds tooling to our project so that EF Core can find our  DbContext (for example, `ToDoListContext.cs`) during **design time**. According to the [official documentation](https://learn.microsoft.com/en-us/ef/core/cli/dbcontext-creation?tabs=dotnet-core-cli):

> Some of the EF Core Tools commands (for example, the Migrations commands) require a derived DbContext instance to be created at design time in order to gather details about the application's entity types and how they map to a database schema.

We're familiar with the term **run time**, when we run our application with `dotnet watch run`; but what exactly is **design time**? It's the time when we are actually writing and designing our code. As noted in the quote above, we need to add tools for EF Core to access our DbContext at design time so that our migrations (the model of our database) can be created and applied (when we update the database with `dotnet ef database update`).

Note that installing the `Microsoft.EntityFrameworkCore.Design` package is all we need to do in order to give EF Core access to our DbContext at design time. However, we can create a `DesignTimeDbContextFactory` class in our application with which we can configure additional design time services to run. We won't be doing this in our applications. To optionally learn more, visit the following Microsoft (MS) documentation:

* [Design-time DbContext Creation](https://learn.microsoft.com/en-us/ef/core/cli/dbcontext-creation?tabs=dotnet-core-cli)
* [Design-time Services](https://learn.microsoft.com/en-us/ef/core/cli/services)

Next, let's look at how to create a database migration. We're not going to do this now, but instead in the next lesson, once all of the necessary setup is in place in our To Do List application. 

### Creating a Migration

Next, let's learn the command we need to run in order to create a migration. The following command should be run in the project's production directory. For our To Do List app, this is the `ToDoList` project directory. Go ahead and run this command now:

```bash
$ dotnet ef migrations add Initial
```

When we run the above command, a new migration will be created with the name `Initial` in a new folder called `Migrations`. If this is the first migration in a project, EF Core will automatically generate a `Migrations` folder in the root directory. Note that we can name our migration anything we want, but it's common for the first migration to contain the word `Initial` or something like it. Also note that migration names should be in upper camel case. 

When naming subsequent migrations, start with a verb to describe the change that the migration will make to the database. The migration name can be used like a commit message in a version control system, like `AddItemsPriority` if we wanted to add a priority property to our items table. So, the entire command would look like this: 

```bash
$ dotnet ef migrations add AddItemsPriority
```

When we create our migration, EF Core will automatically generate code for how the database should look based on the code that is in our models. Using migrations is often called using **code first migrations** because we will use our entity framework models in our project's code as the source of truth for our database. 

The alternative to migrations is using the database as the source of truth and scaffolding our code based on the database; this is called [**reverse engineering**](https://learn.microsoft.com/en-us/ef/core/managing-schemas/scaffolding/?tabs=dotnet-core-cli) and we won't be using this method in the course.

### The `Migrations` Directory

For each migration, EF Core will create three files in the `Migrations` directory:

```
[Timestamp]_Initial.cs
[Timestamp]_Initial.Designer.cs
MyContextModelSnapshot.cs
```

Note that `[Timestamp]` will vary based on when the migration was created and `Initial` will be different based on the name of the migration.

The second file is metadata that EF Core needs while the third file is a snapshot of the database for Entity. We won't touch these two files. 

The first file, though, can be edited. Here's an example of the `[Timestamp]_Initial.cs` migration file that we can edit (_this is an example only_):

```csharp
using Microsoft.EntityFrameworkCore.Migrations;

namespace ToDoList.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            ...
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            ...
        }
    }
}
```

The migration contains two methods: `Up` and `Down`. In an ideal world, EF Core will create a perfect scaffold of the migration for us based on our models. However, this isn't always the case. We can add further modifications to the `Up` method. The `Down` method provides instructions for reversing the migration if we decide to revert to the previous migration.

We will generally rely on EF Core to take care of migration scaffolding for us, but it's important to be aware that these migrations can be fine-tuned further by modifying the migration file.

### Updating the Database with the Migration

Once we have verified that the migration looks correct and made any necessary changes, we'll run the following command to update our database

```bash
$ dotnet ef database update
```

Just like with `dotnet ef migrations add [MigrationName]`, we need to run the above command in the production directory of our project. Do so now in the `ToDoList` production directory. 

Running `dotnet ef database update` will automatically update our database to reflect the changes listed in our migrations. There is no longer any need for us to directly modify the database in MySQL Workbench! Go ahead and check MySQL Workbench now and look for the newly created `to_do_list_with_many_to_many` database.

Remember that migrations provide a record of how our database changes. If we make unwanted changes to our database, we should always use a **new** migration (or several migrations) to reverse the changes. This helps ensure that our data is safe and that the log of our migrations match the code in our migration files. It also makes it easy to make changes to a database in a large project where many developers are collaborating. We can push our migrations to GitHub and then another developer can pull our updates and run the migrations with a single command.

There is one exception to the rule above: let's say that we made a mistake with our most recent migration and we haven't pushed the changes to GitHub. In this case, we can use the following command to revert the migration:

```bash
$ dotnet ef migrations remove
```

Note that if you've already updated your database with the migration that you want to remove, you'll need to run `dotnet ef database update` after you remove the last migration with `dotnet ef migrations remove`.

For more information on migrations in EF Core, see [the official documentation](https://docs.microsoft.com/en-us/ef/core/managing-schemas/migrations/).

Up next, we'll learn how to create a many-to-many association.
