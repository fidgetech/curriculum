---
title: "\U0001F4D3 3.3.0.07 Testing Database Backed Applications"
id: 33007-testing-database-backed-applications
slug: 33007-testing-database-backed-applications
hide_table_of_contents: true
sidebar_position: 7
day: weekend
type: lesson
url: >-
  https://github.com/fidgetech/c-and-net/blob/main/0h_testing_database_backed_applications.md
---

In the last lesson, we created a `GetAll()` method that queries our database. However, we haven't tested that method yet. Over the next few lessons, we'll learn how to test a database-backed application, covering important considerations and how to export and import databases with MySQL Workbench to create a test database. Then, we'll create our tests for the `Item` class.

## Testing Considerations for Database-Backed Applications
---

We'll need to use teardown methods to reset data between each test so sample objects created in one test don't stick around and inadvertently affect the results of other tests. We've used teardown methods in past sections, including using `IDisposable`'s build-in `Dispose()` method.

When using a database, our teardown methods will work differently. We don't want to delete our entire database every time we run tests. At the same time, we don't want leftover data causing testing issues, either. This can cause tests to fail in unexpected ways.

In order to solve this issue, we'll have two databases, one for testing and one for development:

* Our **test database** will hold sample objects for use in tests. That way we can safely delete its contents between tests without losing important data.

* Our **development database** will store our application's data. This will not be used for testing, so it won't be emptied when tests run.

In a real-world application, we'd likely also have a **production database** as well.

With these considerations in mind, in the next lesson we'll learn how to import and export databases, as well as how to create a test database.