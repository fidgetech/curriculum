---
title: "📓 3.5.0.2 Async and Await"
id: 3-5-0-2-async-and-await
hide_table_of_contents: true
day: weekend
---

During Intermediate JavaScript, we learned how to write asynchronous code and manage asynchronicity while performing complex actions like API calls. In this lesson, we'll discuss how C# handles asynchronous code.

Why is this relevant now? In the next few lessons, we'll learn how to authenticate users with Identity. This will require our applications to manage asynchronous actions, so we need to learn how to recognize and write asynchronous methods.

## Synchronous Operations
---

So far the C# code we've written is **synchronous** and our code executes a single line at a time. The `Edit()` action in the `ItemsController.cs` is an example of a synchronous method:

```csharp
...
    public ActionResult Edit(int id)
    {
      Item thisItem = _db.Items.FirstOrDefault(item => item.ItemId == id);
      ViewBag.CategoryId = new SelectList(_db.Categories, "CategoryId", "Name");
      return View(thisItem);
    }
...
```

Let's walk through what occurs when this synchronous method is called:

1. When `Edit()` is called, our program looks in the database to find a specific item.

2. After locating the item, our program returns the Edit `View()`.

3. While our program is looking in the database, the browser waits. It cannot return the view until `thisItem` is found because the line of code attempting to locate `thisItem` appears _before_ we return the view.

4. When `thisItem` is located, the application can return the view to be displayed in the browser.

Because the lines of code are executed in order, this is a **synchronous** operation.

## Asynchronous Operations
---

On the other hand, an **asynchronous** (also, "async") operation allows other code to run while a method is waiting to return.
This is very similar to what we learned in JavaScript. However, the code we write to manage this process looks much different.

There are three primary parts to an async C# method:

1. The `async` keyword

2. The `await` keyword

3. A special `Task` class that represents an action or actions the program may not have completed yet because they're async.

Let's walk through an example async method:

```csharp
static async void ProcessTextFileAsync()
{
  Task<int> asyncTask = ExampleAsyncMethodThatTakesAWhile();

  Console.WriteLine("Please wait patiently while I run the ExampleAsyncMethodThatTakesAWhile().");

  int x = await asyncTask;

  Console.WriteLine("Return value of ExampleAsyncMethodThatTakesAWhile(): " + x);
}
```

1. First, the `async` keyword is included in the method's signature: `static async void ProcessTextFileAsync()`. Async methods should always have an `async` modifier in their declaration. It tells our application the method should run asynchronously.

2. Next, notice the `await` keyword in the line `int x = await asyncTask`. As its name suggests, this keyword makes the application wait until the specified async action `asyncTask` is completed. Once `asyncTask` is completed, it will define `x`. This gives us a great deal of control over our code. We can allow multiple lines of code to run asynchronously and then add multiple "waiting points" with `await`.

3. Our hypothetical async method `ExampleAsyncMethodThatTakesAWhile()` stores the return data in the variable `asyncTask`. Notice that `asyncTask` has the type of `Task<int>`. In C#, **an asynchronous method can only return `void` or a `Task` object representing the asynchronous operation itself.** A `Task` represents ongoing work. While a `Task` is `void` by default, we can specify what type the task will eventually return by using the `Task<TResult>` class. For example:
  * `Task<int>` returns an `int`;
  * `Task<string>` returns a `string`;
  * `Task<ActionResult>` returns an `ActionResult`.
  
4. In the code above we want the result to be the integer `x`. In order to turn a `Task<int>` into an `int`, we use the `await` keyword. This forces the program to wait until `task` is appropriately defined as an `int` before moving on to subsequent lines of code.

Let's consider one more pseudocode example:

```csharp
static async void DoMyHolidayErrandsForMeAsync()
{
  Task<int> determineHowManyGiftsIShouldBuy = ProcessSantasList("C:\\naughty_or_nice.txt");
  BakeSugarCookies();
  HangLights();
  int giftNumber = await determineHowManyGiftsIShouldBuy;
  for (int index = 0; index < giftNumber; index++)
  {
    BuyHolidayGifts();
    MarkOffList(index);
  }
}
```

Here, we have an `async` method called `DoMyHolidayErrandsForMeAsync()`. We could describe the method as doing the following: "I need you to do holiday errands. Start determining how many gifts we need to buy and feel free to multi-task and bake the cookies and hang lights while you're doing that, too. But **wait** to define `giftNumber` until after the `ProcessSantasList()` method fully finishes because we need its results before continuing. After we have that number, we can buy the necessary number of gifts and start marking them off our list."

### Rules and Conventions

Before we wrap up, let's review the rules and conventions for async methods in C#:

* Async methods always have an `async` modifier in their declaration, as seen above.

* It's also a best practice to include the term `Async` at the end of the method name as seen in the `ProcessTextFileAsync()` and `DoMyHolidayErrandsForMeAsync()` methods.

* Again, an asynchronous method can only return `void` or a `Task` object representing the asynchronous operation itself.

* We can specify what type the `Task` will eventually become. For example, the type `Task<int>` will resolve to an `int`, `Task<string>` returns a `string`, and `Task<ActionResult>` returns an `ActionResult`. When we do this, we're using the `Task<TResult>` class.

* The `await` keyword can **only** be used in a method that includes the `async` modifier in its signature.

* Because `await` waits for a `Task` to finish and return its specified data type, we can use it to "unwrap" a `Task`. For instance, if we `await` something declared as a `Task<int>`, we'll receive an `int` value, because that's what that `Task` returns when its async code is finished running. Similarly, if we use `await` on a `Task<string>`, we'd receive a string value.

### Namespace

The `Task` and `Task<TResult>` classes belong to the `System.Threading.Tasks` namespace. So anytime we use a `Task` in our code, we'll need to add the following using directive.

```cs
using System.Threading.Tasks;
```

The `System.Threading.Tasks` namespace contains a lot of classes to help us manage concurrent and asynchronous code. To learn more, visit the [MS Docs for the `System.Threading.Tasks` namespace](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks?view=net-6.0).

## Additional Resources
---

* To review the official guide on asynchrony with C#, visit the [MS docs on async and await](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/). 

* For some examples of async/await methods in use, check out [this article from dotnetperls](http://www.dotnetperls.com/async).

* For more information about the `Task<TResult>` class, we recommend the [MS Documentation](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1?view=net-6.0).
