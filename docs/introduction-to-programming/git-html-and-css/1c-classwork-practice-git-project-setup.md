---
title: '✏️ 1.1.1.1 Practice: Git Project Setup'
id: 1111-practice-git-project-setup
slug: 1111-practice-git-project-setup
hide_table_of_contents: true
sidebar_position: 2
day: monday
type: exercise
url: >-
  https://github.com/fidgetech/introduction-to-programming/blob/main/1c_classwork_practice_git_project_setup.md
---

**Goal**: In this lesson, we'll create a one-page website that says "hello" to the world. In the process, we'll learn about Git, a tool for tracking changes to our code. The steps we follow in this lesson will reflect the daily workflow we'll use when coding all of our projects throughout our time at Epicodus. You can also use the cheat sheet as a reference for starting your projects during this section — but using Git for your projects will soon become second nature.

## Configuring Your Git Name and Email

---

In order to save code using the Git version control system, Git needs to have our name and email. On our personal machines, we can do this just once with a **global** configuration in the terminal:

```shell
$ git config --global user.name "Padma Patil"
$ git config --global user.email padma@email.com
```

A global configuration sets a configuration _everywhere_ on a machine — not just in one directory or file, as we'll often do for individual projects. When we create a configuration in just one place on a machine, it's called a **local** configuration.

## Starting a New Project

---

Whenever we start a new project, we create a new project directory.

At Epicodus, we generally create new projects on the `Desktop` directory. However, you may want to create a new directory on your personal machine for storing projects as well.

If we open the terminal and enter `ls`, we'll see a list of the files and directories that in our home directory. Chances are, you won't want to store your newly-created projects in the home directory.

## Creating a Project Directory

---

Instead, we'll want to navigate to the Desktop directory for easy access. Let's change directories from our home directory into our Desktop using the `cd` command:

```shell
$ cd Desktop
```

You can create a new project here, or, if you prefer, create a new directory where your projects will be stored and then `$ cd` into that directory.

Next, we'll create a project directory called `hello-world`:

```shell
$ mkdir hello-world
```

Remember, `mkdir` is short for _make directory_.

We can run the `ls` command to see that `hello-world` has been added to the list of directories on our Desktop (or wherever you've chosen to create your new directory).

Next, we'll move into the `hello-world` directory:

```shell
$ cd hello-world
```

To confirm that we're in the correct directory, we can check our location with a `pwd`:

```shell
$ pwd
```

## Initializing Git

---

Before we start writing any code, we'll create a Git directory within our project directory that will track everything we add, modify and delete within this directory.

We do this by **initializing** a new Git repository:

```shell
$ git init
Initialized empty Git repository in /Users/staff/Desktop/hello-world/.git/
```

If we run `ls`, though, we won't see the new directory. Why not? 

Well, if you take a look at the terminal's response to our `$ git init` command, you'll see that the following file was initialized:

```
Initialized empty Git repository in /Users/staff/Desktop/hello-world/.git/
```

Note that the exact **path**, the list of all the directories we'd need to navigate through to get to `hello-world`, will be different on your personal machine.

Next, note the name of the file that was created inside `hello-world`:

```
.git
```

Whenever a file has a period in front of the name, it will be **hidden**. That means they won't appear when we run the `ls` command. They also won't show up if we navigate to the directory using the point-and-click interface in the GUI (graphical user interface) of our computer.

If we want to see hidden files in the terminal, we need to add a modifier to our `ls` command:

```shell
$ ls -a
.git
```

The `-a` stands for _all_, so `$ ls -a` means list _all_ files, even hidden ones. Modifiers added to terminal commands are also known as **flags**. There are many flags we can use to modify terminal commands.

The above command works in gitbash on a Windows machine, but if you are using a different command line, then you may need to use the following:

```shell
> ls -force
```

We'll see that the `.git` directory has been created in our `hello-world` directory. Let's `cd` into this directory and take a quick peek at its contents.

```shell
$ cd .git
$ ls
HEAD		description	info		refs
config		hooks		objects
```

These are all the files Git uses to track our project and we don't need to worry about _any_ of them. In fact, we should never modify the `.git` folder because Git will take care of all tracking automatically. In general, it's common for files and directories that shouldn't be modified to be hidden — that ensures we don't accidentally modify them.

As we add, update and delete files, Git will be in the background, automatically making notes of every change in our project directory.

Let's return to the top level of our project directory by changing directories and moving up one level:

```shell
$ cd ..
```

Now, we are ready to add a new file to our project.  This will be the HTML page that will say "Hello" to the world.