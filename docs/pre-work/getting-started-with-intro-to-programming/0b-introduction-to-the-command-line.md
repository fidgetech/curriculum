---
title: "\U0001F4D3 1.0.0.17 Introduction to the Command Line"
id: 10017-introduction-to-the-command-line
slug: 10017-introduction-to-the-command-line
hide_table_of_contents: true
sidebar_position: 4
day: weekend
type: lesson
url: >-
  https://github.com/fidgetech/pre-work/blob/main/0b_introduction_to_the_command_line.md
---

One of the first tools any new web developer must become comfortable with is something called the **command line**. No matter which language you program in, you'll use it constantly.

This lesson will walk through what the command line is, what it looks like, and how to access it. In the lesson following this one we'll learn how to interact with the command line by executing commands. Let's get started!

## [Graphical User Interface](#graphical-user-interface)

---

We often access computer programs through their **Graphical User Interface** (or **GUI**, for short). This is simply the visual component of a computer program.

For instance, word processing software (Microsoft Word, Google Docs, etc.) generally offers a GUI with whitespace to type in, a cursor to indicate where we're typing, and a variety of buttons, menus, and options to format our text. This is a GUI. It's the visual portion of a program we see and interact with.

An email inbox that displays each email's subject line, allows us to open an email to see its contents by clicking on it, and offers buttons to reply and format text is another example of a GUI, or graphical user interface.

## [The Terminal](#the-terminal)

---

However, when we are developing code we often use our computer's terminal interface. The **terminal** is an area of the computer that allows us to do things with text-based commands, like create or delete a new file, instead of by clicking options in a graphical user interface. These text-based commands are typed into something called a **command line**.  

You have probably navigated through the folders and files on a computer using a GUI like _Finder_ on a Mac, or _File Explorer_ on Windows. In the next lesson we'll learn how to create, update, delete and navigate to folders and files using the text-based terminal instead. We'll also see how the terminal provides access to extra commands _not_ available through a GUI.

Essentially, all you need to know right now is that a graphical user interface (GUI) allows users to interact with a computer through menus, buttons, and other visual options on the screen. The terminal, on the other hand, allows us to interact with a computer by typing text commands directly into the command line, which is housed in an area of the computer called the terminal.

### [Shells](#shells)

The terminal runs a shell. A **shell** is a command line interpreter, a program that interprets text commands to access the computer, like creating or deleting a file. Shells have a specific set of commands specific to them that we can learn to use. Sometimes, shells have their own computer programming language, too. Shells are one way for developers to customize their experience in the command line interface (CLI). The terms _terminal_ and _shell_ are often used interchangeably. However, the terminal is a wrapper program that runs a shell, a separate program, which both work together to allow us to enter text-based commands to access our computer.

At Epicodus, we'll be using shells based on [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html). **We're sharing this information for context only,** because we will be configuring our shells to run certain software. You don't need to worry about memorizing this information, or perfectly understanding it to continue forward.  

Next, let's walk through how to access your own terminal and the command line it contains, so you can see how it works and what it looks like first hand.

### [Mac — Accessing the Terminal](#mac-accessing-the-terminal)

On a Mac, the terminal can be accessed by opening an application conveniently named **Terminal**. This application is located in the _Utilities_ folder within your _Applications_ folder. 

You may also locate the Terminal program by clicking the magnifying glass icon at the upper right corner of the screen and typing _Terminal_.

Open your own Terminal using either of these two methods now. 

**Depending on what year your Mac was made, it will run either a _Bash_ or _Zsh_ shell.** Zsh is very similar to Bash — the main difference is that it has _extended_ functionality beyond Bash. Both shells work great for our purposes, so use whatever shell your Mac computer is shipped with. You can tell which shell you have by looking for "zsh" or "bash" in the title of the terminal window. Alternatively, once you've completed this lesson and the next one, and you've learned how to enter commands into the terminal, you can enter this command to confirm which shell you are using:

```bash
$ echo $SHELL
```

It will return the file path to the location of the shell program you are using. For example, `/bin/zsh`.

### [Windows — Accessing the Terminal](#windows-accessing-the-terminal)

Windows comes with a terminal program called Command Prompt. You can access it by typing `Cmd` in the search bar in the bottom left corner. It can be useful for navigating through files trees, running executables, and so on. Unfortunately, Command Prompt doesn't have all of the capabilities we require. 

Windows also comes with PowerShell, a more powerful version of Command Prompt. PowerShell can run many of the commands that we need, but not all of them.

While there are many options out there, the shell that we recommend that best fits our needs is **[Git Bash](https://gitforwindows.org/)**. 

#### [Installing Git Bash](#installing-gitbash)

**If you have not already installed Visual Studio Code by following the instructions in the previous lesson, do so now!** We need to install VS Code first so that we can configure Git Bash to use it during installation. 

Navigate to the [Git Bash homepage](https://gitforwindows.org/) and click on the _Download_ button. This may start an automatic download or take you to a page with the latest version of Git Bash with download options. If you have to select between a 32-bit or 64-bit installation, you can determine whether you have 32-bit or 64-bit Windows by following these [instructions](https://support.microsoft.com/en-us/help/13443/windows-which-version-am-i-running). Then, download the corresponding `exe` file from the Git for Windows site. (If you have a package manager already installed, you can also choose to download the `tar.bz2` version.) 

Next, follow these installation instructions.

* Click on the downloaded file and then follow the instructions in the Setup menu. 
* For "Select Destination Location", accept the defaults and click _Next_.
* The next page should be "Select Components". If not, click _Next_ until you reach "Select Components". Select these options:
  * If you wish to add Git Bash to the desktop, click _Additional icons_, which should automatically click _On the Desktop_. (Click _On the Desktop_ if necessary.)
  * Select _Windows Explorer Integration_ with the option _Git Bash Here_. This will allow you to right click on a file and have an option to open Git Bash at that file's location.
* You will be clicking _Next_ for most of the prompts. However, there are a few important prompts that we want to change. Pay attention to these:
  * When prompted to determine a default editor in "Choosing the default editor used by Git", the default is Vim, which is hard for beginners to use. Update this to _Use Visual Studio Code as Git's default editor_.
  * When prompted about "Adjusting the name of the initial branch in new repositories", the default is _Let Git Decide_. Instead, select the option to override to use a "main" branch. This will initialize all new projects with a branch called "main", which you will learn more about soon.
  * When prompted about "Configuring the line endings conversion", make sure the option to _Checkout as Windows-style, commit Unix-style endings_. This will enable us to better work on and share projects between Windows, Mac, and Linux computers.
  * When prompted to "Choose a credential helper", it's important that _Git Credential Manager_ is enabled. The default installation should have _Git Credential Manager_ selected but make sure to verify. This will allow you to save your secure Git credentials on your machine when we start using Git.
* Finally, click through _Next_ until you reach the _Install_ button and install the package. 

When you are finished installing, open Git Bash!

**Take note:** you can change all of the installation options that you've just selected (in following our instructions) by re-running the Git Bash installer. As you learn more about coding and working with different languages, software and other tooling, you may find that you want to reconfigure your Git Bash for an improved experience.

### [The Prompt](#the-prompt)

When you first open the terminal, you should see a short snippet of text followed by a grey or blinking rectangle. This rectangle is your cursor. Where the cursor is located is the command line. The command line is where we will type and execute our text commands.

The snippet of text left of the cursor is the command line **prompt**. It contains brief contextual information, such as the user account you're logged into the computer with, and your current location.

For instance, the prompts on Epicodus computers look something like this:

```bash
epicodus-5:~ Guest$
```

In the example above:

* `epicodus-5` is the nickname of the computer we're using.

* `~` denotes that our current location is the home directory. (In programming, the `~` symbol usually refers to 'home'.)

* `Guest` informs us we're logged into an account named `Guest`.

* This is all followed by a dollar sign `$`. This symbol denotes the end of the prompt and the beginning of the command line.  

Not all prompts look the exact same — including prompts on Windows. Depending on the names of your machine and the name of your user account, your own command line prompt will differ. So don't worry if yours appears different from examples here. That's completely normal.

For example, if our computer's name was _"school-machine"_, and our account on that computer was named _"Jenny"_, we'd see something like this instead:

```bash
school-machine:~ Jenny$
```

Both Bash (on Macs) and Git Bash (on Windows) shells use the `$` symbol for the prompt. 

### [Command Notation](#command-notation)

In our curriculum and elsewhere, you'll often see Bash commands preceded by a `$`. This means the command is meant to be executed in the command line. The dollar sign is the common notation to communicate this because most terminals display a dollar sign `$` at the end of their prompt.

**When you see the `$` symbol preceding a command in one of our lessons, know that you are not required to _literally type_ a dollar sign into the command line. You will only type the command listed _after_ the dollar sign. The dollar sign simply denotes that the command is meant to be executed in the command line.**

Great! Now that we understand the basics of the terminal and command line, let's practice. In the next lesson, we'll learn about the most frequently-used commands, how and when to execute them, and what they allow us to do.