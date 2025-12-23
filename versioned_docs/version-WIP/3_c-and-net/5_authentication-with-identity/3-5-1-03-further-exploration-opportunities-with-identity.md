---
title: "📓 3.5.1.3 Further Exploration Opportunities with Identity"
day: monday
id: 3-5-1-3-further-exploration-opportunities-with-identity
hide_table_of_contents: true
---

In this lesson we'll highlight some further exploration opportunities with ASP.NET Core authentication and authorization. There's actually quite a lot of authentication and authorization options to explore in the ASP.NET Core docs. That makes sense! Microsoft wants its ASP.NET Core applications and APIs to be able to work with all of the modern tools for securing websites. 

For example, the docs cover popular configurations like signing in with a Google, Twitter, or Facebook account, and how to add multi-factor authentication to your projects. Those are advanced topics that we won't be highlighting in the lists below. To get a sense of everything that ASP.NET Core has to offer for security, [start perusing the "Security and Identity" docs](https://learn.microsoft.com/en-us/aspnet/core/security/?view=aspnetcore-6.0).

You are not expected to incorporate any further exploration for this section's independent project. However, if you are looking for a challenge, try incorporating them into your multi-day project.

## Further Exploration Opportunities
---

There's a few important things to note about the guides on the MS Docs. 

The first is that a lot of examples use an ASP.NET Core Razor Page application. A Razor Page app is an alternative to building an MVC app. While a lot of code is similar, there's plenty that is dissimilar. To learn more about Razor Pages, [check out this documentation](https://learn.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-6.0&tabs=visual-studio-code-code). 

The second is that a lot of guides also have you scaffold projects using the `dotnet new` project scaffolding tool. We'll practice with this tool when we learn how to make an API call in C# and when we build our own ASP.NET Core API in the next course section. Take note of the following:

* `dotnet new webapp` scaffolds a Razor Page web application. 
* `dotnet new mvc` scaffolds an MVC web application. 

You can interchange `webapp` with `mvc` when a guide directs you to scaffold an app. However, doing so may make following along with the guide a bit challenging, and it could possibly make some of the code not work as expected.

With those warnings, let's get into the further exploration opportunities.

### Creating a User Profile 

This first further exploration opportunity is all about adding new properties to the `ApplicationUser` class to create a more robust and interesting user profile. What exactly you have users enter will certainly depend on what your website offers. For example, it's probably not necessary to gather a user's date of birth for a site that sells products. However, on a social media site, users may want to add that information to their profiles. 

We already covered how to add properties to the `ApplicationUser` class in the lesson [identity Setup and Configuration](../../c-and-net/authentication-with-identity/3-5-0-4-identity-setup-and-configuration). If you want more information, check out this resources:

* [An overview of adding custom user data.](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/customize-identity-model?view=aspnetcore-6.0#custom-user-data)
* The [`IdentityUser`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityuser?view=aspnetcore-6.0) class that our `ApplicationUser` extends functionality from.
* [Guide on adding user data.](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/add-user-data?view=aspnetcore-6.0&tabs=visual-studio-code)

### Roles

Now that our application has users, we might want to consider adding different roles. For example, a site can have some users that can view pages, registered users who can leave comments, moderators who can ban certain users for leaving too many spam comments, administrators, and so on.

We can add roles using Identity's tools for authentication. When we start deciding what a user can do based on their role, this is a part of authorization.

We've done some basic authorization with the `[Authorize]` attribute on a controller. However, this authorization is fairly limited. If a user is logged in, they will be able to access that controller. There are many use cases where we'll want more fine-grained control over authorization in our applications.

If you are interested in implementing roles, check out [this tutorial from Yogi Hosting](https://www.yogihosting.com/aspnet-core-identity-roles/). The article covers how to create and manage roles, as well as how to authorize using roles. For more information on authorization with roles, check out the ASP.NET Core docs on [role-based authorization](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/roles?view=aspnetcore-6.0). Note that the tutorial uses [tag helpers](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/intro?view=aspnetcore-6.0), which are tools we can use in our views that enable us to use our models to define HTML elements. They are different from HTML helper methods.

Yogi Hosting is an outside resource, but it is linked to directly from within the ASP.NET Core docs. You can find the original link called "How to work with Roles in ASP.NET Core Identity" in the "Next Steps" section of [this entry in the ASP.NET Core documentation](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-6.0&tabs=visual-studio).

### Account Confirmation and Password Recovery

Configuring an MVC app to have account confirmation and password recovery will be more challenging, but there's a great guide on how to do this on [the MS docs](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/accconfirm?view=aspnetcore-6.0&tabs=visual-studio-code). Note that the guide uses a Razor Page application instead of an MVC. You may be able to translate the code described in the guide to an MVC app, and if not, you can explore how this works with a Razor Page app instead.

### Configuring Identity

There are many ways to configure how identity should work from `Program.cs`. For example, we can set an account lockout time from `Program.cs`. To learn about this and other ways we can configure Identity, visit this article on [Identity Configuration](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity-configuration?view=aspnetcore-6.0).

### Securing Secrets

If you have the time, it's worth looking into other ways to secure development secrets. The MS Docs has [a helpful article on this topic](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-6.0&tabs=windows) that provides multiple options for managing secrets.

### Explore Identity UI

Identity has its own UI that can be used instead of a custom UI like we built. To learn more about Identity UI, it's recommended to read first read through the docs on the ASP.NET Core [scaffolding tool `aspnet-codegenerator`](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/tools/dotnet-aspnet-codegenerator?view=aspnetcore-6.0) to get a sense of how it works and how to troubleshoot issues.

Then, it will be helpful to work through the introductory guide in the [Introduction to Identity](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-6.0&tabs=netcore-cli) article that uses the scaffolder tool. Then check out the article [Scaffold Identity in ASP.NET Core projects](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/scaffold-identity?view=aspnetcore-6.0&tabs=netcore-cli) to learn more about using Identity UI.
