---
title: "📓 3.0.0.03 Installing dotnet-script"
day: weekend
id: 3-0-0-03-installing-dotnet-script
hide_table_of_contents: true
---

Now that .NET 6 and C# are installed on our machines, we'll install **dotnet-script**.

## dotnet-script

---

As mentioned in [Welcome to C#]/c-and-net/lessons-1-5-getting-started-with-c/3-0-0-01-welcome-to-c), C# is a compiled language. In order to experiment with C#, we'll need a tool called a **REPL**, which stands for **read-evaluate-print-loop**. This allows us to run code a line at a time. This way we can practice, test, experiment, and have fun with C#.

We'll install and use a REPL called `dotnet-script`. 

### Installation

We can install `dotnet-script` with the following terminal command:

```bash
$ dotnet tool install -g dotnet-script
```

Note that .NET 6 needs to be installed for this command to work. If you just installed .NET 6, restart the terminal. Otherwise, you will not be able to run `dotnet` commands.

### Configuration

**NOTE: This information is only relevant to MacOS users or if using gitbash and wanting to configure it to use dotnet**

Next, configure your bash or zsh environment variables to find the location of `dotnet-script`. In the command line enter the following:

For bash users:

```bash
$ echo 'export PATH=$PATH:~/.dotnet/tools' >> ~/.bash_profile
```

For zsh users:

```bash
$ echo 'export PATH=$PATH:~/.dotnet/tools' >> ~/.zshrc
```

### Start the REPL

Now you can run the REPL! Enter `$ dotnet-script` in the command line and a prompt will open:

```csharp
>
```

To try the REPL feature, enter:

```csharp
> string hello = "hello world";
```

and then call the variable:

```csharp
> hello
"hello world"
```

To exit the REPL press `Ctrl + C `.
