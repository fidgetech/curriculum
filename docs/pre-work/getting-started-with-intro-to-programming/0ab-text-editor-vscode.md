---
title: "📓 1.0.0.16 Text Editor: Visual Studio Code"
id: 10016-text-editor-visual-studio-code
hide_table_of_contents: true
day: weekend
---

We will write and save our code in a **text editor**. As the name implies, it's a piece of software meant to edit text.

Word processing programs like Microsoft Word and Google Docs may be the first thing that comes to mind when you think of "text editors." However, these programs are not ideal for writing code because they add styles and formatting that get in the way of code. We want plain, raw text without any extras like fonts, paragraph indentation, and so on.

If you have a Mac, your device comes with a text editor called **TextEdit**, which can be found in your Applications list. If you have a PC, the default text editor is **Notepad**, which can be found through the Start menu. The Mac Terminal application also includes a console-based text editor called Nano. These text editors allow us to write code with plain, raw text.

## [Visual Studio Code](#visual-studio-code)

---

At Epicodus, we use a free text editor called **Visual Studio Code**. Visual Studio Code, also known as VS Code, was designed with web developers and computer programmers in mind. It includes many useful features that help write and navigate code more efficiently.

### [Installation](#installation)

To install Visual Studio Code on your device, download the appropriate installer for your operating system at the [Visual Studio Code website](https://code.visualstudio.com/).

#### Additional Mac Instructions

If you are on a Mac, make sure that after you download VS Code that you drag the application "Visual Studio Code.app" to the Applications folder. Doing so makes it available in the macOS Launchpad and you can more easily configure your terminal to use the `code` keyword to open projects in VS Code from the command line (there is more on this topic below). 

Extended Mac installation and set up instructions can be found [on the VS Code documentation for Mac](https://code.visualstudio.com/docs/setup/mac).

#### Additional Windows Instructions

If you are using a PC with Windows, you will work through a series of prompts from the installer:

* You will be prompted to accept a license agreement. Agree and click "Next." 
* You will be prompted to select a destination location and start menu folder. Just accept the defaults and click "Next" for both. 
* You will then be given the option to "Select Additional Tasks". **Make sure "Add to PATH" is clicked.** You may also want to click "Create a desktop icon" or one (or both) "Open with Code" options as well. These will all make it more convenient to access VS Code. When you are finished, click "Install." 
* After VS Code has installed, click the "Launch" button to automatically open VS Code.

Extended Windows installation and set up instructions can be found [on the VS Code documentation for Windows](https://code.visualstudio.com/docs/setup/windows).

### [Overview of VS Code](#overview-of-vs-code)

Let's take a quick tour of Visual Studio Code.  When we open the editor, VS Code will open a "Welcome" page that offers options such as "New file," "Open folder..." and so on. We will usually be creating new files and opening folders through the command line.

For now, click on "New file." This will open a blank screen where we can type. If we add content to the file, we see the `x` at the top becomes a white circle(in dark mode, otherwise it will be a black circle). Go to the "File" menu and click "Save As." This tells us there is content that hasn't yet been saved.  We'll save this file as `my-first-webpage.html` using the `.html` extension to indicate that this will be a document written in HTML. The white circle returns to a grey `x` and we know that our file's content has been saved.

Visual Studio Code offers developers the ability to customize the editor's settings and shortcuts.  We can access the Settings view on a Mac by holding down the Command key (`cmd`), pressing the comma key (`,`), then releasing both. On a Windows machine we can hold down the control key (`ctrl`), press down the Windows key, then release both. For the keyboards at Epicodus, you will likely have to press `Alt` and `,`.

Sometimes you'll see instructions that include multiple keys separated by a plus sign like this: `cmd` + `,`. When you see this it means you should hold down the first key, press the key(s) that come next, then release them all at the same time, like we did above.

One setting that we want to make sure we have in place is the tab length. Writing good code means making a habit of using consistent indentation. Scroll down to "Editor: Tab Size" in the settings and confirm that the indentation is set for 2 spaces. This way, we can use the tab key for indentation instead of hitting the space bar twice.

### [Configuring the `code` Command](#configuring-the-code-command)

We'll also want to configure our machine so that we can run the `code` command in the terminal's command line. This allows us to open up all the files in a project with the command `code .` (The `.` means "all" — so this command is instructing VS Code to open a project's files.)

To set this up on a Mac machine, we need to do the following:

* Open VS Code.
* Click on View > Command Palette.
* Type in "shell command."
* Click on "**Shell Command**: Install 'code' command in PATH".

![The following image shows the command that needs ](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/prework/vs-code-shell-command.png)

This will automatically install the `code` command so we can use it in the terminal. Note that in the image above it says "recently used" — this will only show up on your machine if you installed the `code` command recently.

If you are a Windows user, this is already taken care of because we made sure "Add to PATH" was clicked when we installed VS Code.

There are many things you can do to customize VS Code on your own machine, including adding keyboard shortcuts, themes, and packages that add other functionality to the editor. We won't cover that in this lesson — however, we encourage you to explore this further on your own throughout the course.

### [Visual Studio Code Extensions](#visual-studio-code-extensions)

You should also install the following extensions:

*  [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
*  [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
*  [Live Share Audio](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-audio)

These extensions allow us to collaborate remotely, all students learn remote collaboration tools. We go into detail about how to use these extensions in the lesson [Installing and Using Live Share]( https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-working-remotely/1-0-0-28-installing-and-using-vs-code-live-share).

### [Additional Resources](#additional-resources)

For more details about using Visual Studio Code, take a look at the  [Visual Studio documentation](https://code.visualstudio.com/docs).
