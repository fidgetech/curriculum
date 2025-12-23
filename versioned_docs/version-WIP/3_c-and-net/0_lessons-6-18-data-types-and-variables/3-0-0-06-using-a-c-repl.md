---
title: "📓 3.0.0.06 Using a C# REPL"
day: weekend
id: 3-0-0-06-using-a-c-repl
hide_table_of_contents: true
pagination_prev: null
---

We're finally ready to craft our first C# code! 

This lesson will explore a tool called a **REPL** that will allow us to run C# code directly in the command line. This is similar to how we ran JavaScript code using the browser DevTools console in the Intro to Programming and Intermediate JS courses.

The rest of this pre-work section will focus on learning and practice C# basics: data types, variables, methods, classes, type checking, branching, operators, looping, and more! As we'll see, a lot of the concepts we learned in JavaScript will also exist in C#, just with slightly different syntax.

## The REPL
---

The next few lessons will use a command line tool called a **REPL**. This stands for **READ - EVALUATE - PRINT - LOOP**. It works as follows:

1. We type in a line of code and hit enter. The REPL **reads** this code.
2. The REPL then **evaluates** the code, figuring out what it does.
3. Next it **prints** the result of running this code.
4. Finally, it **loops** back to step 1 so we can enter more code.

Since we've installed `dotnet-script`, we have a C# REPL available right in the terminal!

### Accessing the REPL

We can launch the REPL by opening our Terminal application (on a Mac machine) or our GitBash application (on Windows), entering the following command, then hitting _Enter_:

```bash
$ dotnet-script
```

Regardless of operating system, we should be met with the following:

<pre>
>
</pre>

We're now in the REPL! The `>` symbol is the command prompt for `dotnet-script`, and this is where we'll enter in all of our commands.

### Command Notation

Before we run code, notice how the command prompt for `dotnet-script` starts with the `>` symbol. A **command prompt** is just that, a symbol that denotes where we can enter in commands. The `>` is different from the standard terminal command prompt, which looks like this:

```bash
Guest-User@Desktop epicodus_student $
```

Yours will differ slightly, depending on what OS you are on, what your computer's user name is:

Again, notice the REPL precedes the command prompt with `>` instead of `$` or `%`, like this:

```csharp
>
```

When our curriculum depicts commands meant to be run in the REPL, we'll precede them with `>` instead of `$` or `%`. When you see this, you are not required to type a `>`. You will only type the command listed after the `>`.

If you see a command preceded with a `$` or `%`, like you did in Intro and Intermediate JS, that means the command is meant for the standard terminal.

### Exiting the REPL

We can exit at any point by pressing `Ctrl + C`.

Now that we understand the basics of the C# REPL, let's practice. In the next few lessons, we'll cover how to use strings, variables, numbers and methods with C#.
