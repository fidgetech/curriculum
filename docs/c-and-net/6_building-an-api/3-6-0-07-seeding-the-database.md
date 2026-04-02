---
title: "📓 5.6.0.07 Seeding the Database"
day: weekend
id: 5-6-0-07-seeding-the-database
hide_table_of_contents: true
---

In the last lesson, we added update and delete functionality to our Cretaceous Park API. In this lesson, we'll learn how to seed the database with data upon initialization.

### Seeding Data

In order for us to more quickly and efficiently test our API without having to manually add data in MySQLWorkbench or via POST requests, we will automate the process of **seeding** the database. Seeding a database is simply populating a database with data. The data can range from important and necessary authorization user roles to just dummy data.

In the case of the Cretaceous Park API, we'll seed the database with a handful of `Animal` entries so that we can test our code to make sure we can properly filter `Animal`s by search parameters.

In order to add the data, let's override the `OnModelCreating` method that belongs to Entity Framework's `DbContext` class by adding the following to our `CretaceousApiContext` class:

<div class="filename">Models/CretaceousApiContext.cs</div>

```csharp
...
protected override void OnModelCreating(ModelBuilder builder)
{
  builder.Entity<Animal>()
    .HasData(
      new Animal { AnimalId = 1, Name = "Matilda", Species = "Woolly Mammoth", Age = 7, Gender = "Female" },
      new Animal { AnimalId = 2, Name = "Rexie", Species = "Dinosaur", Age = 10, Gender = "Female" },
      new Animal { AnimalId = 3, Name = "Matilda", Species = "Dinosaur", Age = 2, Gender = "Female" },
      new Animal { AnimalId = 4, Name = "Pip", Species = "Shark", Age = 4, Gender = "Male" },
      new Animal { AnimalId = 5, Name = "Bartholomew", Species = "Dinosaur", Age = 22, Gender = "Male" }
  );
}
...
```
* We declare the method as `protected override` since we only want this method to be accessible to the class itself and we want to override the default method. Since the method doesn't return anything, we also specify `void` as the return value. 

* The method accepts an argument of type `ModelBuilder` that we will call `builder`.

* We then call the `builder`'s `Entity<Type>()` method which returns an `EntityTypeBuilder` object that allows us to configure the type we specify in the method call.

* We can then call the `HasData()` method of the returned `EntityTypeBuilder` and pass the method any manner of entries we'd like to use to seed the database. We'll add five initial `Animal` entries to our database.

We can now create a new migration and update the database:

```bash
$ dotnet ef migrations add SeedData
$ dotnet ef database update
```

We should be able to see our 5 new `Animal` entries in the database. If you'd like to read more about Data Seeding, take a peek at the [official documentation](https://docs.microsoft.com/en-us/ef/core/modeling/data-seeding).
