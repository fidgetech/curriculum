---
title: "📓 3.3.0.09 Using the Test Database"
day: weekend
---

In this lesson, we'll connect our test project to the test database and update our teardown method to empty it. 

## Using the Test Database
---

First, let's run `dotnet restore` in our `ToDoList.Tests` directory to update the Tests project with the MySqlConnector package that we added to the production project.

Next, let's update `appsettings.json` in our production directory to include a new database connection string, this time for our test database. As usual, make sure to update the `pwd` and `uid` keys with your own values. In the lessons in LearnHowToProgram.com, we always assume the `uid` is `root` and the `pwd` is `epicodus`.

<div class="filename">ToDoList/appsettings.json</div>

```json
{
  "ConnectionStrings": {
      "DefaultConnection": "Server=localhost;Port=3306;database=to_do_list_with_mysqlconnector;uid=[YOUR-USERNAME-HERE];pwd=[YOUR-PASSWORD-HERE];",
      "TestConnection": "Server=localhost;Port=3306;database=to_do_list_with_mysqlconnector_test;uid=[YOUR-USERNAME-HERE];pwd=[YOUR-PASSWORD-HERE];"
  }
}
```

Next, we'll refactor our existing `ItemTests.cs` file. Take a look at the new code, and then we'll discuss it below.

<div class="filename">ToDoList.Tests/ModelTests/ItemTests.cs</div>

```csharp
using Microsoft.Extensions.Configuration;
...

namespace ToDoList.Tests
{

  [TestClass]
  public class ItemTests : IDisposable
  {
    // we've added a new property
    public IConfiguration Configuration { get; set; }

    public void Dispose()
    {
      Item.ClearAll();
    }

    // we've added a constructor
    public ItemTests()
    {
      IConfigurationBuilder builder = new ConfigurationBuilder()
          .AddJsonFile("appsettings.json");
      Configuration = builder.Build();
      DBConfiguration.ConnectionString = Configuration["ConnectionStrings:TestConnection"];
    }

    // existing tests here
    ...

  }
}
```

* First, we include a new `using` directive to import `Microsoft.Extensions.Configuration` namespace. From this namespace, we'll use the `ConfigurationBuilder();` method to load `appsettings.json` with our app's configurations. 

* Then we create a property that we'll use to same our app's configurations.

* Finally, we set up a constructor for the `ItemTests` class that does the work of setting up the database connection:
 
  * We create a `Configuration` object that includes all of the data in our `appsettings.json`. 
  * We set `DBConfiguration.ConnectionString` to the `"TestConnection"` database connection string, which we access through the `Configuration` object. This overrides the `DBConfiguration.ConnectionString` we set in `DatabaseConfig.cs`, ensuring that our tests are connected to our test database, not our development database.

Take note of one detail: we're loading our app's configurations with different tools than we use in `Program.cs`. In `Program.cs`, `appsettings.json` is implicitly loaded when we create a `WebApplicationBuilder` with the `WebApplication.CreateBuilder(args);` method. This does not happen with the `ConfigurationBuilder()` method that we use in `ItemTests.cs`. Instead, we need to load application configurations manually, which is why we call `.AddJsonFile("appsettings.json");`. 

The scope of these two methods is also different: `ConfigurationBuilder()` focuses on creating a configuration object, which is one aspect of creating a web application host, whereas `WebApplication.CreateBuilder();` creates a basic web application host. It's not important to remember these details, just to note that we're using two different processes of loading `appsettings.json` in our project.

Finally, note that our `ClearAll()` method isn't programmed to interact with the database yet, but we'll tackle that in the next lesson.
