---
title: "\U0001F4D3 1.0.0.18 Interacting with the Command Line"
id: 10018-interacting-with-the-command-line
slug: 10018-interacting-with-the-command-line
hide_table_of_contents: true
sidebar_position: 5
day: weekend
type: lesson
url: https://github.com/fidgetech/pre-work/blob/main/0c_interacting_with_the_command_line.md
---

In the last lesson, we learned how to access the command line. In this lesson, we'll explore some of the most common commands we can use with Bash. We'll use many of these daily at Epicodus and also out in the industry.

## [Basics of the Command Line](#basics-of-the-command-line)

---

To execute a command we just click within the terminal window and begin typing. Text is inserted where our cursor is located, directly after the prompt. After typing a command we press _Enter_ to execute it.

In this lesson, we'll learn how to use the command line to do the following: 

* Printing the working directory
* Create new files and directories
* Navigate between directories
* Looking at the contents of a directory
* Moving files
* Removing files

Before we get started, we need to navigate to the desktop. If you are using a Mac, type the following in the terminal and then press _Enter_. **Remember —  you _shouldn't_ type in the `$` — that's a symbol for the prompt itself, not the command you should type in!**

```
$ cd ~/Desktop
```

The command above moves us from the home directory to the desktop. We'll discuss this further shortly!

If you are a Windows user, right click on the desktop and click "Git Bash here", which will open a Git Bash screen on the Desktop. You are already in the desktop directory.

### [Retrieving Current Location with `$ pwd`](#retrieving-current-location-with-pwd)

We can verify that we are on the desktop with the `$ pwd` command, which prints your current location to the screen. `pwd` stands for _print working directory_. A **directory** is the more formal term for what we normally call a folder. A directory can hold other files and directories.

We can use the command line to look around our computer just like we would with the Mac Finder or Windows Explore programs. The only difference is that we are using a text-based interface instead of a graphical user interface (GUI).

Type in `$ pwd` to check your current directory. On Epicodus computers,  we'll see the following (as long as we followed the above directions to navigate to the desktop). `pwd` returns a file **path** like this:

```
/Users/Guest/Desktop
```

A path is exactly what it sounds like — the path a user would take to get from the root directory of a machine to the directory that we are currently in. Note that the root directory is different from the home directory. The home directory has a lot of stuff — including our personal files — while the root directory contains _everything_ on our machine — including our home directory. 

In the example above, the `Desktop` directory is inside the `Guest` directory, which in turn is inside the `Users` directory, which is in our root directory.

If you are using your personal computer, your results will vary. However, one thing should remain the same — we are all in the `Desktop` directory at the moment, so the directory listed on the right side of the path should be `Desktop` — the same for everyone.

When we open the Terminal application on a Mac or open Git Bash via Windows Explorer, we begin in the home directory by default. However, on our personal machines, the path from the home directory to the desktop can vary depending on the operating systems we use. That's why we ensured that we all started in the `Desktop` directory.

If you are using the command line and you're unsure exactly where you are, just run the `$ pwd` command.

### [Creating New Directories](#creating-new-directories)

Before we learn to navigate through different directories, we're going to create several new directories. We can do so with the `$ mkdir` command, which is short for _make directory_.

Type the following into the command line (and then press _Enter_):

```
$ mkdir coding-practice
```

This will create a directory called `coding-practice` on your desktop. As we can see, the `$ mkdir` command can't be run on its own — it needs to know the name of the directory that should be created. To do this, we put a space after `$ mkdir` and then write the name of the directory we want to create. We also put a hyphen between "coding" and "practice" — otherwise, the `$ mkdir` command will create _two_ directories, one named `coding` and one named `practice`. That's not what we want here! It is common convention for developers to use hyphens or underscores for file names that have more than one word.

It may not seem very intuitive to create a directory this way at first, but most developers prefer this approach to the more cumbersome point and click interface of the GUI. For instance, if we wanted to create five new directories, we could do something like the following. (Don't actually run this command — it's just an example.)

```
$ mkdir coding1 coding2 coding3 coding4 coding5
```

That's much quicker than using the GUI to create five directories separately.

The `$ mkdir` command will always create a directory in our current working directory. We know our current working directory is `Desktop` because of the `pwd` command. In fact, this is true of all Bash commands — they will be executed from the current working directory.

It often matters where a command is executed so pay close attention to your current directory. For instance, it's a common beginner mistake to accidentally create a new directory in the home directory, only to wonder why it's not showing up on the desktop.

Let's create one more directory for practice:

```
$ mkdir my-first-website
```

At this point, we should have at least two directories on our desktop. On your personal machine, you may have more... maybe even too many if your desktop tends to get overwhelmed with stuff!

### [Listing All Content with `$ ls`](#listing-all-content-with-ls)

The `$ ls` command stands for _list_.  Executing this command prompts the terminal to list out the directories ("directories" is just a technical term for folders) and files in our current location. Let's run the command now. There should be somewhere between two and too many directories, depending on the state of your personal machine. Let's imagine, though, that we have an absolutely pristine desktop (because we are so organized and ready to start coding). Running this command will look something like this:

```bash
epicodus-5:~ Guest$ ls
coding-practice			my-first-website
```

We see a list of the directories we just created. We can also list out the directories inside of one of these directories by including its name after the `$ ls` command. Here's an example:

```
$ ls coding-practice
```

Note that no files or directories will show up, but that's expected — we haven't added anything to `coding-practice` yet.

We'll learn how to make files soon, but first let's see how we can navigate between directories.

### [Moving Between Directories with `$ cd`](#moving-between-directories-with-cd)

`$ cd` stands for _change directory_. As the name implies, this command allows us to navigate to a different directory from the one we're currently located in. Just as with `$ mkdir`, we can't run the `$ cd` command on its own. In this case, the command line needs to know which directory it should move to.

Let's look at several ways to execute the `$ cd` command:

####  `$ cd directory-name`

We can include the name of a directory we'd like to navigate to after the `cd` command. For instance, if we want to move into the `coding-practice` directory, we'd run the following command:

```
$ cd coding-practice
```

After we run `$ cd`, no text is printed to the screen. **This is normal.** However, the prompt preceding the command line will change to reflect our new location. Instead of seeing something like `$ desktop`, we'll see `$ coding-practice`. We can verify our current directory with the `$ pwd` command.

Remember the command that Mac users executed at the beginning of this lesson to get to the desktop?

```
$ cd ~/Desktop
```

In the example above, we used `$ cd` to move to the directory on the right side of the path (`Desktop`). The `~` (tilde symbol) represents the home directory on a Mac (as well as Linux operating systems). We can always return to the home directory on a Mac or Linux operating system by typing `$ cd ~`. We can then specify additional directories in the path to navigate elsewhere from the home directory. (Windows doesn't use the tilde symbol to represent the home directory, so Windows users won't be able to use this shortcut — unless you are using Git Bash, which does use the tilde symbol.)

In other words, as long as we know the correct path, we can get anywhere on our computer with one `$ cd` command. For instance, to get to the `coding-practice` directory from anywhere on a Mac machine, we'd just add `coding-practice` to the command above: 

```
$ cd ~/Desktop/coding-practice
```

While Windows users don't have the `~` shortcut, the same general idea applies. As long as we input the correct path, we can use a single `$ cd` command to move through any number of directories.

`$ cd` is one of the most useful commands that you'll learn — and we will be using it all the time at Epicodus.

#### `$ cd ..`

Including two dots, like this `..`, navigates to the directory one level above the current directory. If we are in the `coding-practice` directory, `$ cd ..` will take us up one level to the `desktop` directory. We could keep executing `$ cd ..` until we reach our root directory — then we can't go any further.

If we wanted to go up two levels, we could do something like this:

```
$ cd ../..
```

As you might guess, we'd just add `/..` to the command to go up yet another level.

### [Creating Files](#creating-files)

We've learned how to create directories already. Now it's time to learn how to create files. We can do so with the `$ touch` command. Let's add a new file to the `my-first-website` directory. Use the `$ cd` command to get to that directory. If you are currently in the `coding-practice` directory, we could get there by doing the following:

```
$ cd ../my-first-website
```

In the example above, we specify a **relative path**. This is different from an **absolute path**, where we'd start from the root directory. With a relative path, we just need to tell our machine how to get from our current directory, not all the way from the root directory.

Now let's create a new file:

```
$ touch index.html
```

Just like with `$ mkdir`, we need to specify a name. In this case, it will be the name of the file we are creating. Don't forget to add extensions if needed. In the case above, we are creating an HTML file so we need the `.html` extension. We will create many HTML files starting from our very first week of class. (`index.html` is a very common naming convention for an HTML file.)

If you run `$ ls`, you'll see our new file has been created:

```bash
$ ls
index.html
```
### [Moving Files](#moving-files)

The `$ mv` command stands for _move_. It can both move _and_ rename files. If we want to rename our `index.html` file in `my-first-website`, we'd do the following:

```bash
$ mv index.html my-first-webpage.html
```

As you can see, the `$ mv` command requires two pieces of information. The first is the name of the file we'd like to rename or move. The second is the _new_ name or location we'd like to provide the file. In the example above, we are renaming a file called `index.html` to `my-first-webpage.html`.

We can confirm the file has been successfully renamed by using `$ ls` to list all files in the current location:

```bash
$ ls
my-first-webpage.html
```

However, what if we want to move this file from the `my-first-website` directory to the `coding-practice` directory? Here's what we need to do:

```bash
$ mv my-first-webpage.html ../coding-practice/my-first-webpage.html
```

Here, we use the `$ mv` command to move a file instead of renaming it. First, we provide the name of the file we'd like to move (`my-first-webpage.html`). We don't need to specify a path because we are already in the directory where `my-first-webpage.html` lives. Next, we provide the relative path to where we want the file to go. This tells our computer exactly where the file should go and what it should be named.

Note that we have to navigate _up_ a directory with `..` in the command above. The `..` isn't just used with `$ cd`. It's used with paths in general. There are many, many commands where we'll need to provide our machine with a path so it knows exactly what to do. Next, we specify our file should go into the `coding-practice` directory. Finally, we specify that the file should still be named `my-first-webpage.html`. If we wanted to, we could've also renamed the file in the process by doing something like this:

```bash
$ mv my-first-webpage.html ../coding-practice/index.html
```

This would've moved `my-first-webpage.html` _and_ renamed the file back to `index.html`.

If we run `$ ls` again, we can see that `my-first-webpage.html` is no longer listed:

```bash
my-first-website $ ls    
```

Let's navigate back into the `coding-practice` directory:

```bash
$ cd ../coding-practice
```

Now if we run `$ ls` again, we'll see our moved file:

```bash
epicodus-5:first-webpage Guest$ ls
my-first-webpage.html
```

### [Deleting Files with `$ rm file-name`](#deleting-files-with-rm-file-name)

The `$ rm` command stands for _remove_ and it allows us to delete a specified file entirely. **Warning:** You must proceed with caution when you run `$ rm`! This command does _not_ move files to the trash, so there's no opportunity for second thoughts. Once you remove a file, it's gone and can't be retrieved.

Our `my-first-webpage.html` file is ready to be deleted — after all, it doesn't contain all of our favorite recipes or anything else. So let's zap it!

```bash
coding-practice $ rm my-first-webpage.html
```

We combine the `$ rm` command with the name of the file we'd like to delete.

### [Deleting Directories](#deleting-directories)

Did deleting a file feel a little risky? If so, take a deep breath... we can also use the `$ rm` command to delete _entire_ directories. **Warning:** As you may guess, this is potentially _much_ riskier than just deleting a single file. For instance, if you were to specify that your root or home directory be deleted, it would destroy everything — and likely render your machine completely unusable.

Note that you cannot be located _within_ a directory you are attempting to delete. That would be like wrapping yourself inside a present. If we want to delete the `coding-practice` directory, we first need to navigate up and out of the directory. Assuming we are still in `coding-practice`, start by typing:

```
$ cd ..
```

Now we can run `$ ls` and confirm that the `coding-practice` is still there. Let's zap this one, too!

```bash
epicodus-5:intro-to-programming Guest$ rm -r coding-practice
```

Note that we need to include the `-r` flag. This says that directories should be recursively deleted. If we didn't add the `-r` flag (and just used `$ rm`), we'd get the following error:

```
rm: coding-practice: is a directory
```

That means we've forgotten the `-r` flag.

Sometimes, Bash will complain about deleting a directory. You can override Bash and delete the directory with the `-f` flag, which means _force_. In other words, we'd use `$ rm -rf`. As you may guess, forcing something to be deleted can be risky. Bash may have good reasons for complaining!

If we run `$ ls` again, we'll see that the `coding-practice` directory is gone.

It should go without saying again, but will be said again anyway: _always_ be careful deleting files and especially directories! They can't be recovered. They go into the great big emptied trash bin in the sky where things can't ever be recovered. Okay, it's not in the sky, nor is it an emptied trash bin, but you get the drift. Those files and directories are gone forever.

In this lesson, we've covered some basic but very powerful commands that we can run in the command line. You will be using many of these commands every day while you are a student at Epicodus — and hopefully in a long, fruitful career after you're done as a student. 

Make sure to check out the cheat sheet tab of this lesson for terminology from this lesson and command line reference of most frequently used commands!
