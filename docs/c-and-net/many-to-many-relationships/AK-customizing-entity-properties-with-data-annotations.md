---
title: "📓 Customizing Entity Properties with Data Annotations"
day: monday
---

At the end of the lesson on model validation with validation attributes, we added two validation attributes to our `Item` model: we made the `Item.Description` property `[Required]`, and we set a `[Range]` between 1 and the integer's max value for the `Item.CategoryId` property. 

Well, in the process of adding the `[Required]` validation attribute to the `Item.Description` property, we were also specifying how `Item.Description` as an **entity property** should be configured in our database. That's right — **data annotations can be used to configure our entities in code-first development with EF Core**.   

In the case of `Item.Description` having the `[Required]` data annotation, this now updates our entity property to be non-nullable. When a database column is non-nullable, it means it can't be `null`, or have no value. This means that each entry in that table must have a value for that column, because the values for that column can't be `null`.

However, to make this change reflected in our database, we need to create a migration and then update our database. Let's walkthrough this whole process. We'll also pause to look at the migration we create to see how to can verify how data annotations change our entity properties. At the end of this lesson, we'll talk about the important takeaways.

## How Entity Properties Are Configured in our Database
---

The first thing to understand about entity properties is that EF Core handles creating all of the default configurations based on the code within our models. And usually those default configurations are sufficient! For example, the default configurations for our `Item.Description` entity property is for there to be a column called `Description` of type `longtext` that is `nullable` added to our `Items` table.

There are also specific default configurations for primary keys (like `Item.ItemId`) and foreign keys (like `Item.CategoryId`). Again, these defaults are more than sufficient — they are set up in order for our code-first migrations to set up conventional tables and columns as well as relationships within our MySQL database.  

When we add a data annotation to the `Item.Description` property, we're creating a custom configuration for our entity property. We can do this as-needed. As we've already covered, adding `[Required]` to our `Item.Description` entity property will cause it to be non-nullable. The next steps are to create a new migration and update the database, which we'll cover more about in a moment.

<div class="filename">Models/Item.cs</div>

```csharp
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ToDoList.Models
{
    public class Item
    {
        public int ItemId { get; set; }
        [Required(ErrorMessage = "The item's description can't be empty!")]
        public string Description { get; set; }
        [Range(1, int.MaxValue, ErrorMessage = "You must add your item to a category. Have you created a category yet?")]
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public List<ItemTag> JoinEntities { get;}
    }
}
```

The `[Required]` data annotation is a part of [the `System.ComponentModel.DataAnnotations` namespace](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations?view=net-6.0). However, **not all data annotations listed within the `System.ComponentModel.DataAnnotations` namespace apply to entity properties.** For example, the `[Range]` data annotation does not do anything to entity properties.

To see a complete list of different ways we can configure entity properties, review the MS Docs on [entity properties](https://learn.microsoft.com/en-us/ef/core/modeling/entity-properties?tabs=data-annotations%2Cwithout-nrt). This documentation covers default configurations, as well as data annotations that are a part of [the `System.ComponentModel.DataAnnotations.Schema` namespace](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations.schema?view=net-6.0) that are used with EF Core entities. 

## Seeing How an Entity Property Is Customized with Data Annotations
---

We can see exactly how an entity property is customized with a data annotation by creating a new migration and reviewing the changes within. Remember that a **migration** is simply a file that describes an update to the database. Every time we change our entities in our code, we need to make a new migration that describes that change, which we can then use to update our database. 

Let's create a new migration now. In the production directory of our To Do List app, run the following command:

```
dotnet ef migrations add RequireItemDescription
```

Keep in mind that the name of our migration should be descriptive! We could have also chosen a name like `MakeItemDescriptionNonNullable`.

Next, let's take a look at the new migration we created. Open the newly created migration file and take a look at the changes described within. It should be named something similar to `Migrations/20221222195805_RequireItemDescription.cs`.

<div class="filename">Migrations/20221222195805_RequireItemDescription.cs</div>

```cs
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ToDoList.Migrations
{
    public partial class RequireItemDescription : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Items",
                keyColumn: "Description",
                keyValue: null,
                column: "Description",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Items",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Items",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");
        }
    }
}
```

First, a refresher: the `Up()` method describes how to update our database with the new change, and the `Down()` method describes how to remove that change from our database. The `Down()` method would be used if we were to update our database with `dotnet ef database update` and then later remove the last migration with the command `dotnet ef migrations remove`. As needed, we can directly update the code within these migrations files, though you likely won't have a reason to in your projects.

If we take a closer look at the `Up()` method, we can see the exact update we're making to our database: 

* With `nullable: false`, the `Description` column within the `Items` table is being updated to not allow `null` values.
* With `oldNullable: true`, we can see the previous state for the `Description` column as accepting `null` values.

The process of looking inside the migration file just verifies that the `[Required]` validation attribute for `Item.Description` not only provided model validation in our apps, but also re-configured our entity property to be non-nullable. 

To complete the process of updating our entity property, we simply need to update our database:

```
dotnet ef database update
```

## Takeaways
---

The big takeaway of this lesson is that we need to be aware of how data annotations used for model validation can also change how our entity properties are configured. When this happens, we'll want to track the new configuration with a new migration and an update to our database.

There won't be many cases in which we'll want to directly configure our entity properties, though you are welcome to experiment more on your own. Generally, we'll end up configuring our entity properties because we want to add model validation to our project's models. 

### Repository Reference

Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository.

**[<i class="glyphicon glyphicon-folder-open"></i>  GitHub Repo for To Do List with EF Core Migrations and a Many-to-Many Relationship: 5\_model\_validation](https://github.com/epicodus-lessons/section-4-to-do-list-with-many-to-many-csharp-net6/tree/5_model_validation)**
