---
title: "📓 3.5.0.5 The Identity Model"
day: weekend
id: 3-5-0-5-the-identity-model
hide_table_of_contents: true
---

We've just updated our To Do List database to store Identity data. Let's pause for a second to check out the changes in MySQL Workbench. Or, check out the contents of the most recent migration file, which should be called something similar to `20230102230735_AddIdentity.cs` and be located in the `ToDoList/Migrations/` directory. We'll see many new tables created for Identity-related data! What we're seeing here is Identity's model.

![To Do List database schema with new Identity entities.](/images/c%23/to-do-list-with-auth-database-schema.png)

## The Identity Model
---

Each table focuses on different data that Identity uses to track its users, roles, claims, logins, and tokens:

* `aspnetusers` corresponds to [the `IdentityUser` class](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityuser?view=aspnetcore-6.0)
* `aspnetroles` corresponds to [the `IdentityRole` class](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityrole?view=aspnetcore-6.0)
* `aspnetroleclaims` corresponds to [the `IdentityRoleClaims<TKey>` class](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityroleclaim-1?view=aspnetcore-6.0)
* `aspnetuserclaims` corresponds to [the `IdentityUserClaim<TKey>` class](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityuserclaim-1?view=aspnetcore-6.0)
* `aspnetuserlogins` corresponds to [the `IdentityUserLogin<TKey>` class](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityuserlogin-1?view=aspnetcore-6.0)
* `aspnetuserroles` corresponds to [the `IdentityUserRole<TKey>` class](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityuserrole-1?view=aspnetcore-6.0)
* `aspnetusertokens` corresponds to [the `IdentityUserToken<TKey>` class](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityusertoken-1?view=aspnetcore-6.0)

We only have an `ApplicationUser : IdentityUser` model explicitly in our To Do list app. We also haven't updated our `ToDoListContext` with the above entities either! So how do these entities get added to our database? It happens implicitly so long as we've configured Identity to work with EF Core and our To Do List database context! (Of course, we still need to create a migration and update the database.) 

In fact, we only created the `ApplicationUser` model in our application so that we have the option to customize it with custom user data.

Because all of the Identity entities are added to our database implicitly, the docs make sure to clearly explain the Identity model and the purpose of each. First, check our the following table [from the MS docs](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/customize-identity-model?view=aspnetcore-6.0) that explains each entity type:

![Table listing the Identity model and entities.](/images/c%23/aspnet-identity-model.png)

While the table does a good job listing what each entity represents, some of these could use more explanation. 

Let's start with **user**. A user is someone who uses our website. They've created an account and their user information is saved and managed with Identity. We'll ask our users to provide their email and password to create a unique user account. Then when users log in, they will provide their email and password, and Identity will use that information in order to verify the user's identity. 

A **role** is a category, like "manager" or "admin", that we can give to certain users. We can then set up different permissions (using authorization) for each role, which will determine what that role can do in our website. The **user role** model is meant to associate users with roles.

A **claim** is a name-value pair that represents who a user is. Claims can be created from any user or identity data, and this data can be issued from ASP.NET Core identity or another trusted identity provider. There's a model for both **user claim** and **role claim**, which means we can create claims based on user data or role data. We won't be creating claims, but letting Identity generate claims instead.

A **user login** is the model that tracks users with logins using third-party providers, like Google or Facebook.

A **user token** is the model that associates a token with a user for token-based authentication. 

We won't be creating or managing roles, claims, logins, or tokens in the simple implementation of authentication that we'll add to our To Do List app. We'll stick to creating users, and using email and password credentials to authenticate. **This means that we'll only end up using the `aspnetusers` table in our database,** which corresponds to the `ApplicationUser` class in our To Do List models.

There are further exploration opportunities to implement other authentication schemes that do end up using the other tables in our database. An authentication **scheme** is a method of authentication. For example, Identity, [cookies](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.authentication.cookies?view=aspnetcore-6.0), and [JWT Bearer](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.authentication.jwtbearer?view=aspnetcore-6.0) are all different authentication schemes we can use in ASP.NET Core apps. To learn more about further exploration opportunities, visit the lesson [Further Exploration with Identity](/c-and-net/authentication-with-identity/3-5-1-3-further-exploration-opportunities-with-identity).

### Entity Relationships 

It's also helpful to take a look at the relationships between each Identity entity. [The MS docs](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/customize-identity-model?view=aspnetcore-6.0) has a handy list that clearly explains the relationships in the Identity model:

![List describing the relationship between each Identity entity.](/images/c%23/aspnet-identity-relationships.png)

Again, we'll only be using the `Users` model — the `ApplicationUser` model in our To Do List app.

### The `System.Security.Claims` Namespace

Identity is responsible for providing a [`ClaimsPrinciple`](https://learn.microsoft.com/en-us/dotnet/api/system.security.claims.claimsprincipal?view=net-6.0) when a user logs in to our To Do List website. The `ClaimsPrinciple` contains information about the user's **claim**, their identity as verified by ASP.NET Core Identity. 

The `ClaimsPrinciple` is just one class of many within the `System.Security.Claims` namespace. This namespace has other classes that describe claims in general. As we'll see when we update our views and controllers, we'll access certain class properties and methods from the `System.Security.Claims` namespace (among others) in order to determine a few things:

* Is there an authenticated user? 
* What's the name (email) of the authenticated user? 
* How do I get the entire `ApplicationUser` object for the logged in user? We will need the `ApplicationUser` object when we want to associate To Do List models (like `Item` or `Category`) with a specific user. 

### Takeaways

The namespaces and classes that support authentication in ASP.NET Core applications can be overwhelming to navigate and understand. That's because there are many different authentication schemes that we can implement in our ASP.NET Core applications. It's not so important to understand the classes or namespaces, but instead the tools and concepts that impact our To Do List application:

* We'll be using the `aspnetusers` table in our To Do List database to save user data, like their email and password. The `aspnetusers` table corresponds to the `ApplicationUser` model in our project.
* Identity will handle authenticating users based on their email and password. In the process, Identity will generate a `ClaimsPrinciple` for the user, which contains a claim about the user's identity as verified by ASP.NET Core Identity.
* We can access the `ClaimsPrinciple` that Identity generates to get information about the logged in user in order to conditionally display information in our website, or associate our To Do List models (like `Item` or `Category`) with specific users. 
* We won't be creating or managing roles, (third-party) logins, tokens, or claims in our To Do List application. Those entity types have to do with other authentication schemes, and you can learn how to implement them if you do further exploration outside of the LearnHowToProgram.com curriculum. 
