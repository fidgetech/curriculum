---
title: "📓 1.0.0.20 Git and GitHub"
day: weekend
id: 1-0-0-20-git-and-github
hide_table_of_contents: true
---

When we get started writing a new program, the last thing we want to happen is to lose any of our hard work. To prevent this from happening, we will save versions of our code on our computer AND also save a version of our code on a location on the web.

Later when we work in teams, there will be more versions of our code as each team member copies the main version to work on, share, review and merge into our final program (and NOT overwrite each other's work!). At Epicodus, we will learn to manage these different versions of our code using two tools: **Git** and **GitHub**.

## [Git](#git)

---

Git is a **version control system** that we install on the computers where we write code. Git allows us take a snapshot of our program, called a **commit**, at important points along the way as we work.  

You can think of a commit like a save point on a document that you are writing.  Although unlike a save, once a commit is made, it is permanently stored in the history of the project. A newer commit does not overwrite the previous commit. If we ever want to go back to the place in time where the commit was made, where all the files looked exactly as they did when we committed, we will be able to do so.  

Additionally, commits are made with brief messages that describe the changes/additions being saved. For instance, if we were creating a basic website, and added a contact page with our email and phone number, when we saved those changes by committing we would include a message like _"Add contact page with email and phone number."_  Commit messages are written in present tense (i.e.: _"Add contact page..."_ not _"Added contact page..."_).

## [GitHub](#github)

---

When we are ready to save the code from our computers to a location on the web, we will use [GitHub](https://github.com).  GitHub allows us to create **repositories** to store the code and code history for each of our projects. A repository is what we call the container that holds all of the files from our project with all of the commits that have been made to it. GitHub is designed to work seamlessly with Git.

Each project that we create will be saved to a repository on GitHub. By the end of your time here, you will have a portfolio of your work represented by all of your GitHub repositories. LinkedIn will be your employment resume and GitHub will serve as your coding resume.

Do note that all repositories on GitHub are public by default, although it's possible to create private repos as well. Private repos are _not_ required for this course. It's standard practice for most developers to simply leave everything public, even if projects are still a work in progress.

We'll walk through exactly how to use both Git and GitHub in an upcoming lesson. For now, simply remember that Git is the tool we'll use to save all changes and additions to our code on the computer we're working on. GitHub is the online location we can upload our Git-managed code to for safekeeping.

## [Installing Git on Macs](#installing-git-on-macs)

---

**The Epicodus Macs already have Git installed.**  To install Git on your personal Mac, follow these steps:

### [Installing Homebrew: A Package Manager](#installing-homebrew-a-package-manager)
First, go to the terminal and copy and paste this code at the prompt:

```shell
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

This installs the package manager, [Homebrew](http://brew.sh/), on your device. It may take a moment for Homebrew to download and install. This is perfectly normal. Depending on your machine's configuration, you _may_ also be prompted to enter the password for your user account.

Next, we'll need to configure our shell to correctly work with Homebrew. Enter the following command in the command line prompt so that Homebrew packages are run before the system versions of the same packages (which may be dated or not what we want). Take note: only run the command that corresponds to the shell that you are using. 

If you are using Bash:

```shell
$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile
```

If you are using Zsh:

```shell
$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.zshrc
```

### [Additional Context: Shell Configuration Files](#additional-context-shell-configuration-files)

`.bash_profile` and `.zshrc` are the files that hold the configurations for our terminal's shell. When we start up our terminal applications (Git Bash or Terminal), the shell configurations in those files are applied to the session. We'll be adding to these files throughout the program. This information is for context only, so if you don't understand completely right now, that's completely fine. 

You can find these files in `~`, your computer's home. In your terminal, enter these commands:

```bash
$ cd ~
```

```bash
$ ls -a
```

The command `ls -a` will print all files in a directory, including files that are hidden. Files prefixed with a period `.` are hidden files. You should see your shell configuration file listed. 

Optionally, you can open these files in VS Code to look at the contents by running this command:

```bash
$ code ~/.bash_profile
```

or

```bash
$ code ~/.zshrc
```

If you get an error about the keyword `code` not being recognized, this means that you need to configure your shell to recognize that keyword. Review the setup and instructions for VS Code [in this lesson]( https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-intro-to-programming/1-0-0-16-text-editor-visual-studio-code#configuring-the-code-command). If you are still having issues, ask an instructor for help. It's not necessary to be able to view and open your shell configuration files right now.

### [Installing Git](#installing-git)

Last, install Git with this command:

```shell
$ brew install git
```

Done!

## [Installing Git on Windows](#installing-git-on-windows)

---

After installing Git Bash on your Windows machine, as instructed in the [Introduction to the Command Line]( https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-intro-to-programming/1-0-0-17-introduction-to-the-command-line) lesson, Git should be ready to use within your Git Bash program.  

## [Creating a GitHub Account](#creating-a-github-account)

---

If you have not already created a personal GitHub account to store your code, head over to the [GitHub website](https://github.com/) and sign up for a free account now.  

![GitHub account signup](/images/github-account/github-account-signup.png)

When creating an account, consider choosing a username that you will feel comfortable sharing in a professional setting.  Also, keep in mind that all of the work that you will be adding to your GitHub account is viewable to the public.  Make a commitment to always present the best version of your code. Again, your GitHub profile will serve as your resume and portfolio of coding abilities.

Make sure you use a unique password — not one that you've used for any other accounts. You should never reuse a password — if it's stolen, your other accounts can be accessed. We also suggest you turn on two-factor authentication (2FA) for GitHub so that you need to enter a code from your phone as well as your password. This way, if your password is stolen, hackers still can't access your account without your phone. Finally, we will be using PATs (personal access tokens) to access GitHub repositories from the command line. You will be logging into GitHub from the command line with your user name and a PAT, not your password.
