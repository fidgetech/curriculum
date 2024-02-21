---
title: "📓 3.4.0.4 Many-to-Many Relationships: Join Entities"
id: 3404-many-to-many-relationships-join-entities
hide_table_of_contents: true
day: weekend
---

In this lesson, we'll see how we can establish a many-to-many relationship in our database and how we can use C# objects to model this relationship. Instead of changing our one-to-many relationship between `Category` and `Item`, we'll add a new model called `Tag` and implement a many-to-many relationship between `Item` and `Tag`.

With this new many-to-many relationship, we'll be able to add tags to each item in our To Do List. A tag could be anything that we want to use to further describe the items we add to our To Do List: 'urgent', '?' (to indicate that follow up is necessary), 'low priority', 'due tomorrow', etc. As a many-to-many relationship, one item can have many tags, and each tag can be added to many items. 

## Updating To Do List Models for Many-to-Many
---

In the last lesson, we configured our project to use EF Core migrations:

* We updated the name of our database to `to_do_list_with_many_to_many` in `appsettings.json`.
* We installed `dotnet-ef` globally.
* We installed `Microsoft.EntityFrameworkCore.Design` within our To Do List app. 
* We created our first migration with `dotnet ef database add Initial`.
* We created our `to_do_list_with_many_to_many` database by running `dotnet ef database update`.

Next, we'll focus on creating and updating the models in the `ToDoList/Models` directory. 

### Creating the `Tag` Model

The first thing we'll do is create a new `Tag` class within a new `Tag.cs` file:

<div class="filename">Models/Tag.cs</div>

```csharp
namespace ToDoList.Models
{
  public class Tag
    {
        public int TagId { get; set; }
        public string Title { get; set; }
    }
}
```

Then, we'll update our `ToDoListContext.cs` to include a new `DbSet` to represent the `Tag` table in our database:

<div class="filename">Models/ToDoListContext.cs</div>

```csharp
using Microsoft.EntityFrameworkCore;

namespace ToDoList.Models
{
  public class ToDoListContext : DbContext
  {
    public DbSet<Category> Categories { get; set; }
    public DbSet<Item> Items { get; set; }
    public DbSet<Tag> Tags { get; set; }

    public ToDoListContext(DbContextOptions options) : base(options) { }
  }
}
```

Now EF Core will recognize the `Tag` class as the `Tag` entity. At this point we can create a new migration and update our database:

```
$ dotnet ef migrations add AddTagEntity
```

```
$ dotnet ef database update
```

### Creating the JOIN Entity

Next, we'll create a many-to-many relationship between `Tag` and `Item`. To do this, we need to create a model that will hold information about the relationship between a `Tag` and an `Item`. We'll call the class `ItemTag`, which is an alphabetical combination of the two classes. 

<div class="filename">Models/ItemTag.cs</div>

```csharp
namespace ToDoList.Models
{
  public class ItemTag
    {       
        public int ItemTagId { get; set; }
        public int ItemId { get; set; }
        public Item Item { get; set; }
        public int TagId { get; set; }
        public Tag Tag { get; set; }
    }
}
```

We have three different `Id` properties: one for `ItemTag`, one for `Item`, and one for `Tag`. In addition to that, we also have both `Item` and `Tag` included as navigation properties. Remember that a **navigation property** is simply a property on one entity that includes a reference to a related entity, and it is what EF Core uses to define relationships between classes. In this case, there will be one `Item` and one `Tag` in each many-to-many relationship we create. 

Because `Item` and `Tag` each contain a reference to just one entity, we can give it a more specific name: **reference navigation property**. We'll add more navigation properties to `Tag.cs` and `Item.cs` later to complete the many-to-many relationship.

Finally, keep in mind that navigation properties are not saved to the database; instead, they are used in our project by EF Core to fetch the data of related objects (like a `Tag`) when we fetch an object (like an `Item`). 

Next, let's update `ToDoListContext.cs` again to list a new `DbSet` for `ItemTag`. 

<div class="filename">Models/ToDoListContext.cs</div>

```csharp
using Microsoft.EntityFrameworkCore;

namespace ToDoList.Models
{
  public class ToDoListContext : DbContext
  {
    public DbSet<Category> Categories { get; set; }
    public DbSet<Item> Items { get; set; }
    public DbSet<Tag> Tags { get; set; }
    public DbSet<ItemTag> ItemTags { get; set; }

    public ToDoListContext(DbContextOptions options) : base(options) { }
  }
}
```

Once we make the above change, EF Core will recognize `ItemTag` as an entity and create a table for it in our database (after we make a new migration, of course). Because `ItemTag` is joining two separate models into one, we call this a **join entity**. Similarly, once we update our database to include an `ItemTag` table, we call this table a **join table**. This is because its only function is to join together two separate models to track a many-to-many relationship between the two. We must include a join entity for every many-to-many relationship that we want to create between two models.

### Adding Navigation Properties for the Many-To-Many Relationship

Next, it's time to create navigation properties for each side of our many-to-many relationship: `Item` and `Tag`. Since we're dealing with a many-to-many relationship, we're going to add a new collection navigation property to each model. 

Let's look at the update `Item.cs` first:

<div class="filename">Models/Item.cs</div>

```csharp
using System.Collections.Generic;

namespace ToDoList.Models
{
  public class Item
  {
    public int ItemId { get; set; }
    public string Description { get; set; }
    public int CategoryId { get; set; }
    public Category Category { get; set; }
    public List<ItemTag> JoinEntities { get;}
  }
}
```

We've added a single new property: `public List<ItemTag> JoinEntities { get;}`. This property is a navigation property. We've called our navigation property `JoinEntities`, because it contains a collection of `ItemTag` objects, which is our join entity (which itself represents the join table in our database for `Item` and `Tag`). Because `JoinEntities` is a collection of many related entities, we can give it a more specific name: **collection navigation property**. 

We'll add the exact same property to `Tag.cs`:

<div class="filename">Models/Tag.cs</div>

```csharp
using System.Collections.Generic;

namespace ToDoList.Models
{
  public class Tag
  {
    public int TagId { get; set; }
    public string Title { get; set; }
    public List<ItemTag> JoinEntities { get;}
  }
}
```

At this point we should track our recent changes by creating a new migration and updating our database:

```
$ dotnet ef migrations add AddItemTagJoinEntity
```

```
$ dotnet ef database update
```

If we take a look in MySQL Workbench, our `to_do_list_with_many_to_many` database now has four tables: 

* `categories`
* `items`
* `tags`
* `itemtags`

In the `itemtags` table, there are three columns: `ItemTagId`, `ItemId` and `TagId`. This is exactly what we want.

And with that, we've completed the first step of establishing a many-to-many relationship between `Tag` and `Item`. Up next, we'll begin updating our controllers and views.

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i>  GitHub Repo for To Do List with EF Core Migrations and a Many-to-Many Relationship: 2\_many\_to\_many\_setup](https://github.com/epicodus-lessons/section-4-to-do-list-with-many-to-many-csharp-net6/tree/2_many_to_many_setup)**
