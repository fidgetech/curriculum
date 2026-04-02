---
title: "📓 3.0.0.44 Improving Development by Using a Watcher"
day: weekend
id: 3-0-0-44-improving-development-by-using-a-watcher
hide_table_of_contents: true
pagination_next: null
---

Right now our applications run until they end, but we can change that with the help of a watcher, which will run our app continuously and (in most cases) reload when our source code changes.

## The `dotnet` Watcher
---

Let's modify our `dotnet run` command to save us some more time. .NET 6 provides a tool called a **watcher**. A watcher will monitor our files for us. Let's run the watcher now.

```bash
$ dotnet watch run
```

This command tells .NET to watch our application and then execute the `run` command any time a change is made to our source code.

Here's the output in the terminal when we run our `watch` command:

```bash
dotnet watch 🔥 Hot reload enabled. For a list of supported edits, see https://aka.ms/dotnet/hot-reload. 
  💡 Press "Ctrl + R" to restart.
dotnet watch 🔧 Building...
  Determining projects to restore...
  All projects are up-to-date for restore.
  ShapeTracker -> C:\Users\staff\Desktop\ShapeTracker.Soltuion\ShapeTracker\bin\Debug\net6.0\ShapeTracker.dll
dotnet watch 🚀 Started
```

With console apps, usually the `watch : Started` message will quickly be replaced by the console UI. If you make a small change to the code, .NET will automatically run our program again. Try it out!

### Errors

If you have an error in your project, the output will look something like this:

```bash
dotnet watch 🔥 Hot reload enabled. For a list of supported edits, see https://aka.ms/dotnet/hot-reload. 
  💡 Press "Ctrl + R" to restart.
dotnet watch 🔧 Building...
  Determining projects to restore...
  All projects are up-to-date for restore.
C:\Users\staff\Desktop\ShapeTracker.Soltuion\ShapeTracker\Models\Triangle.cs(57,14): error CS0103: The name '_instance' does not e
xist in the current context [C:\Users\staff\Desktop\ShapeTracker.Soltuion\ShapeTracker\ShapeTracker.csproj]
dotnet watch ⏳ Waiting for a file to change before restarting dotnet...
```

If you have such an error, you can simply fix it, save the file(s), and .NET will reload your program. Looking at the above terminal output, the error message is "The name '_instance' does not exist in the current context" and the location of the error is line 57 of `Triangle.cs`. We can fix this error message by updating `_instance` to `_instances`.

### Using the Watcher with `dotnet build`

We can also use the watcher to run other `dotnet` commands, like `build`.

```bash
$ dotnet watch build
```

Which outputs the following error message if we haven't fixed the variable `_instance` yet. 

```bash
dotnet watch 🚀 Started
MSBuild version 17.3.2+561848881 for .NET
  Determining projects to restore...
  All projects are up-to-date for restore.
C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker\Models\Triangle.cs(57,14): error CS0103: The name '_instance' does not e
xist in the current context [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker\ShapeTracker.csproj]

Build FAILED.

C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker\Models\Triangle.cs(57,14): error CS0103: The name '_instance' does not e 
xist in the current context [C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker\ShapeTracker.csproj]
    0 Warning(s)
    1 Error(s)

Time Elapsed 00:00:01.83
dotnet watch ❌ Exited with error code 1
dotnet watch ⏳ Waiting for a file to change before restarting dotnet...
```

Or this output when there are no errors:

```bash
$ dotnet watch build
dotnet watch 🚀 Started
MSBuild version 17.3.2+561848881 for .NET
  Determining projects to restore...
  All projects are up-to-date for restore.
  ShapeTracker -> C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker\bin\Debug\net6.0\ShapeTracker.dll

Build succeeded.
    0 Warning(s)
    0 Error(s)

Time Elapsed 00:00:01.77
dotnet watch ⌚ Exited
dotnet watch ⏳ Waiting for a file to change before restarting dotnet...
```

This is great, because we can make changes to our code, then refer to the terminal to see the build output. Let's leave `dotnet watch build` running and make a change to our code.
