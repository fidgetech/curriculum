---
title: "\U0001F4D3 3.0.0.01 Welcome to C#"
id: 30001-welcome-to-c
slug: 30001-welcome-to-c
hide_table_of_contents: true
sidebar_position: 1
day: weekend
type: lesson
url: 'https://github.com/fidgetech/c-and-net/blob/main/0a_welcome_to_c.md'
paginationPrev: null
---

Welcome to the world of C# web development. C# is a **strongly-typed**, **compiled** language developed by Microsoft. In this lesson, we'll take a quick look at the language and its history.

## What is C#?

---

C# (pronounced _see sharp_) was developed by Microsoft in the late 1990's. It's part of a family of languages that evolved from the C/C++ languages, originating back in the 1960's.

Unlike JavaScript, C# is both **compiled** and **strongly-typed**. 

In a **compiled** language, the code you write is not the same as the code that your machine runs. Instead, the **human-readable code** you write is transformed, or compiled, into code that computers can read much more efficiently, which makes your code faster.

C# is also a **strongly-typed** language. This means every piece of data and every variable must be of a particular type. Not only that, we must explicitly list the type next to every variable we create. For example, here's a string saved to a variable in JavaScript:

```js
const myStr = "hello world";
```

And here's how we would create the same string in C#:

```cs
string myStr = "hello world";
```

Notice that we list the data type `string` before the name of the variable; this is what strong typing looks like, and we'll learn more about this as we continue through this course. 

There are many types of data in C# and there are rules about the ways the programmer can use these types of data. C# also gives you clear error messages when you don't follow the rules. We'll cover this in more detail in future lessons. Overall, strongly-typed programming languages are more secure, stable, and less error-prone.

The C# language also has a framework specially designed to work with it called **.NET** (pronounced _dot net_). .NET can be used to quickly create software, web apps, and web APIs. We'll learn how to use .NET later in this course.

## History

---

C# was originally called "Cool", which stands for _C-like Object-Oriented Language_. Microsoft ultimately decided to go with the more professional-sounding "C#" before it was announced as part of Microsoft's .NET initiative in 2000.

Since then, it's become one of the most popular programming languages in the world. In the 2018 iteration of Stack Overflow's popular [Developer Survey](https://insights.stackoverflow.com/survey/2018), 35.3% of surveyed developers reported using C# regularly. 60.4% reported "loving" the language, beating out other well-known technologies like PHP, Java, and HTML by large margins. We think you'll love it too!


## .NET Framework
---

Microsoft created the **.NET Framework** around the same time C# was developed. A **framework** like .NET provides built-in code and functionality, which makes writing code easier and more efficient. .NET even includes a special environment for running C# applications.

With cross-platform development so common, Microsoft moved to combine these tools (the original .NET Framework and .NET Core) in to one cross-platform framework called ".NET". This started with .NET 5 in 2020, and now Microsoft releases a new version of the modern .NET framework every year.

Note that .NET (versions 5 and up) hasn't entirely replaced the original .NET framework, but it does replace .NET Core, and it is considered the new and modern standard.

## Who Uses C# and .NET?
---

Due to its longstanding reliability, C# can be found in almost every industry. Many private and public companies use C# for internal software, including financial services companies, medical facilities and educational institutions. It's also commonly used to create applications that run on Windows such as the Windows Installer, Skype, Silverlight (Netflix's video streaming player), and more. It's also a popular choice in video-game development and is used in Unity, Unreal Engine, Anvil, and other platforms.

## Pre-Work

---

The next few lessons walk through installing necessary technologies for this course on your machine. (All necessary technologies are already installed on Epicodus computers.)

The remainder of the pre-work homework will review general programming concepts we learned in Intro and Intermediate JS, such as variables, loops, objects, and branching. We'll discuss how to implement these same concepts in C#. Then, we'll learn how to create "console apps", applications that run in the command line.
