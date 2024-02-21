---
title: "📓 1.0.0.19 Practice: Command Line"
id: 10019-practice-command-line
hide_table_of_contents: true
day: weekend
---

## [Warm Up](#warm-up)
---

_Ask yourself the following questions before moving on:_

* What is the difference between a graphical user interface and a command line interface?
* What makes a home directory a _home_ directory instead of just a directory or subdirectory?

## [Code](#code)
---

### [Command Line Practice](#command-line-practice)

Now that you have some of the basics of the command line down, let's practice using those new skills to navigate in the terminal. Complete the following quick exercises in your computer's Terminal shell:

1.  Open a terminal shell. This will be your home directory. You should have a `$` at the end of the prompt. In our lessons we begin the code meant for the command line with a `$`. You will only type what follows the `$`, not the `$` itself. You are now ready to use the command line!

2.  Run the command `$ pwd`. The computer will print the pathname to the directory that you are currently located in. For example, you might see `/Users/Guest`.

3.  Now let's figure out what directories reside in our home directory by running the command `$ ls` to list all of the directories and files in our current location.

4.  Move into the `Desktop` directory by running the command `$ cd Desktop`. Now run `$ ls` again to see all the files and folders located on your desktop.

5.  Now that we have entered a few commands, use the _up_ and _down_ arrow keys to navigate to previous commands you've entered.

6.  Let's make a new folder on the desktop. Run `$ pwd` to make sure you are in the `Desktop` directory. If not, navigate to the `Desktop` directory by running `$ cd Desktop`.

7.  Then run `$ mkdir test`. This will make a new directory on your desktop called `test`. Take a look and make sure it is there! You can make multiple directories at the same time by putting a _space_ between the directories names. For example, `$ mkdir test test2`. We've already run `$ mkdir test` so go ahead and just run `$ mkdir test2`.

8.  Move into the `test` directory through the command line. Do you remember how? It's the `$ cd` command plus the name of the directory we'd like to move into (`$ cd test`).

9.  Run `$ touch file1 file2` to create two new files within the `test` directory called `file1` and `file 2`. The `$ touch` command creates a new, empty file.  If you're using Windows PowerShell, you can use the command `> New-Item` or the alias `> ni` instead of `$ touch`. (By default Windows will only let you create one new file at a time.)

10.  Type `ls` to make sure the files are there. Just like making directories, you can make multiple files at the same time.

11.  Run `$ touch test2/file1 test2/file2` to make files in the `test2` directory. Oops! That didn't work! Why? Well the terminal can only access the directory above the current working directory and any files/directories in the current working directory. Since `test2` is a directory in the `Desktop` directory, we cannot access it from the `test` directory. To do that we need to run the command `$ touch ../test2/file1 ../test2/file2`. This path tells the terminal to go up to the `Desktop` - using the `..` command, then back down to the `test2` folder. Notice we just made two files in a directory that we were not currently in! This works because we supplied the directories we wanted those files to be created in.

12.  Let's navigate back to the `Desktop`. `Desktop` is the parent of our current working directory, so we can use the command `$ cd ..`. If we wanted to go back to our home directory we can always use the command `$ cd ~`.

13.  Let's remove the `test` directory. Run `$ rm test`.

14.  You should get the error `rm: test: is a directory`. Whenever we want to delete a directory, we need to add the `-r` flag. In this case, we'll run the command `$ rm -r test`. This will use the **recursive** option to instruct the computer to delete everything in the `test` folder,  including the folder itself. In some cases, we need to use `$ rm -rf test`. This adds the **force** flag to make sure the directory is removed. However, you must be very, very careful. This is potentially one of the most dangerous commands you can run. If you accidentally delete a directory you want to keep (or a directory with files the system needs, there is no way to retrieve those files.

15.  Now let's exit the terminal by typing `$ exit`.

### [Even More Practice](#even-more-practice)

Next up try to practice the same workflow, but with fewer step-by-step instructions.

* Specifically, make a folder on your Desktop containing 3 subfolders with names of your choice.
* Each subfolder should have 3 individual files within it (again, your choice of name).

Get comfortable doing this step by step, but then try to do it in as few commands as possible.

Then go through and practice deleting files and folders. Make sure you're comfortable navigating around and creating and deleting both files and directories before moving on.
