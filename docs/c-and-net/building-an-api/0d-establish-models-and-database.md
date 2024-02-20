---
title: "\U0001F4D3 3.6.0.04 Adding a Model and Database"
id: 36004-adding-a-model-and-database
slug: 36004-adding-a-model-and-database
hide_table_of_contents: true
sidebar_position: 4
day: weekend
type: lesson
url: >-
  https://github.com/fidgetech/c-and-net/blob/main/0d_establish_models_and_database.md
---

Let's start work on our Cretaceous Park API. While the CLI scaffolded the basics for us, we'll still need to set up and configure our own database, controller, and models.

The first thing we'll do is delete the `WeatherForecastController.cs` and `WeatherForecast.cs` model. We'll be replacing the boilerplate controller and model with our own. If you want to use those files as reference, you can always save them, or regenerate them in a new scaffolded web API project.

## Database Setup Review
---

We'll add the necessary packages to our project for Entity Framework Core and migrations. Run the following commands in the `CretaceousApi/` project directory:

```bash
$ dotnet add package Microsoft.EntityFrameworkCore -v 6.0.0
$ dotnet add package Pomelo.EntityFrameworkCore.MySql -v 6.0.0
$ dotnet add package Microsoft.EntityFrameworkCore.Design -v 6.0.0
```

## Adding Database and Entity Models
---

Now, let's create our models. First, create a `Models/` directory. Then create a new file called `Models/Animal.cs` and add the following code:

<div class="filename">Models/Animal.cs</div>

```csharp
namespace CretaceousApi.Models
{
  public class Animal
  {
    public int AnimalId { get; set; }
    public string Name { get; set; }
    public string Species { get; set; }
    public int Age { get; set; }
  }
}
```

Our `Animal` class will represent the creatures of the Cretaceous period. You are welcome to add other `Animal` class properties, if you like!

Next, let's create a `DbContext` class in a file called `CretaceousApiContext.cs`:

<div class="filename">Models/CretaceousApiContext.cs</div>

```csharp
using Microsoft.EntityFrameworkCore;

namespace CretaceousApi.Models
{
  public class CretaceousApiContext : DbContext
  {
    public DbSet<Animal> Animals { get; set; }

    public CretaceousApiContext(DbContextOptions<CretaceousApiContext> options) : base(options)
    {
    }
  }
}
```

## Updating `Program.cs` to Use MySQL and the `CretaceousApiContext`
---

Next, we'll have to update `Program.cs` to add MySQL as our database service. 

<div class="filename">CretaceousApi/Program.cs</div>

```csharp
using CretaceousApi.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<CretaceousApiContext>(
                  dbContextOptions => dbContextOptions
                    .UseMySql(
                      builder.Configuration["ConnectionStrings:DefaultConnection"], 
                      ServerVersion.AutoDetect(builder.Configuration["ConnectionStrings:DefaultConnection"]
                    )
                  )
                );

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

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

We add our `CretaceousApiContext` and MySQL database as a service in our application.

Next, we need to update `appsettings.json` with our database connection string:

<div class="filename">CretaceousApi/appsettings.json</div>

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Port=3306;database=cretaceous_api;uid=[YOUR-USERNAME-HERE];pwd=[YOUR-PASSWORD-HERE];"
  }
}
```

In the connection string, make sure to update the values of `uid` and `pwd` with your own username and password.

### Create the Initial Migration

Now we're ready to create our initial migration and update the database.

```bash
$ dotnet ef migrations add Initial
$ dotnet ef database update
```

In the next lesson, we'll learn how to seed our database, and then we'll start writing custom API endpoints.
