---
title: "\U0001F4D3 3.3.1.10 Further Exploration with Testing"
id: 33110-further-exploration-with-testing
slug: 33110-further-exploration-with-testing
hide_table_of_contents: true
sidebar_position: 25
day: monday
type: lesson
url: >-
  https://github.com/fidgetech/c-and-net/blob/main/1h_further_exploration_with_testing.md
---

We've been refactoring our controllers to utilize the Entity Framework Core functionality but we haven't updated any tests. Entity Framework Core and LINQ allow us to drastically reduce the code in our models and controllers because they do so much work behind the scenes. As long as we follow proper naming conventions, we don't need to add custom code for our models to properly interact with our database. These frameworks are already heavily tested, so it would be redundant for us to test our constructors, getters, and setters.

Similarly, since we use LINQ's database interaction to replace our CRUD methods, we no longer need to test for those, either. In essence, these additions remove the need to test the default functionality of our models entirely. For that reason, we won't be adding more unit tests for these technologies.

If we add custom methods to our models, we should add unit tests for them. However, this is outside the scope of this curriculum. You can find examples of how to unit test with EF Core using the InMemory provider in [Microsoft's thorough documentation on the topic](https://docs.microsoft.com/en-us/ef/core/miscellaneous/testing/in-memory).

To add full coverage, you might also consider looking into integration tests in ASP.NET Core, but we leave these topics as further exploration for you. You can find a walkthrough of how to add integration tests to an MVC app in [Microsoft's documentation](https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-6.0). Although Microsoft's documentation is comprehensive and user-friendly, it does not always line up directly with the technologies we use in our projects, so implementing these testing concepts may take time and patience.

While you are encouraged to look at these resources, testing will not be expected for your remaining C# code reviews.
