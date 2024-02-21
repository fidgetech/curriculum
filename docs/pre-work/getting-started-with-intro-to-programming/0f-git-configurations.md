---
title: "📓 1.0.0.21 Git Configurations"
id: 10021-git-configurations
hide_table_of_contents: true
day: weekend
---

After installing Git, we recommend a few Git configurations that will make using Git on your own device similar to the experience you will have at Epicodus.

## [Make VS Code the Default Editor](#make-vs-code-the-default-editor)

---

**Mac users:** To make Git use the VS Code text editor to interact with you instead of **vim** (or whatever your system's default terminal editor may be) run the following command:

```
$ git config --global core.editor "code --wait"
```

**Windows users:** You should've already set up VS Code to be the default editor when you installed Git Bash.

## [Make Main Branch the Default Branch](#make-main-branch-the-default-branch)

---

**Note:** You probably won't need to do this because GitHub now uses `main` instead of `master`. However, we provide these instructions here if your repositories are still defaulting to `master`.

In the past, the name of the default branch in GitHub was `master`.  _Master_ can mean many things — for instance, mastering a new skill is good! Or creating a master list for all the errands you need to run means you are staying organized.

However, in the past the term _master_ in the tech industry has often been paired with the term _slave_, particularly when referring to when a device or process controls another device or process. This use of the term _master_ in this context has a very negative connotation. For this reason, GitHub made a formal change so that the default is named `main`, not `master`. If you started your GitHub account recently (such as with the beginning of this course), `main` should be the name of your default branch. However, if it isn't, you can change it with the following command.

```
$ git config --global init.defaultBranch main
```

Note that some of the example repositories you will be working with at Epicodus still have a `master` branch. This is because these repositories will all need to be rebuilt from scratch using a `main` branch so the commit history doesn't include a `master` branch. This is a lot of work! It will be a while before all the sample repositories we use will be updated. If you are working from an Epicodus repository that has a `master` branch, you can change the default branch to `main` with the following command:

```
$ git branch -m master main
```

Then, when you push the code to your own repository, you'll be able to do something like `$ git push origin main`.

## [Configure Color Output](#configure-color-output)

---

Setting this **global** configuration will color code Git information in the terminal for easier reading:

```shell
$ git config --global color.ui true
```

## [Configure Global Author Settings](#configure-global-author-settings)

---

We can set up a global configuration for our git user name and email. You should only do this on your personal machine.

```shell
$ git config --global user.name "Padma Patil"
$ git config --global user.email "padma@email.com"
```

This sets the name and email for every save that is made in any directory anywhere on the device. If you are setting this on your personal device, you will only have to set this once for it to be set on every project.

## [Configure Local Author Settings](#configure-local-author-settings)

---

Note that you can override the global setting for a single repository by removing the global flag:

```shell
$ git user.name "Jasmine Hart"
$ git user.email "jasmine@email.com"
```

If Padma's credentials were set up globally and Jasmine's were set up in an individual `hello-world` project, when commits are added to the `hello-world` project, Jasmine's configuration would be used. Padma's would still be used for all projects _not_ in the `hello-world` directory.

## [Ignore files](#ignore-files)

---

Once a Git repository is created in your project directory, Git will track _every_ file and folder there, even the ones you may not want included in your project! For example, operating systems often add files without input from you.  For example, Macs create hidden files in most directories called `.DS_Store`. Windows directories often contain files called `Thumbs.db`.

To ignore these files in all of your Git repositories, you can create an "ignore file" in your home directory with the `global` tag to indicate this is for _every_ Git repository that is created anywhere on the device.  

Here are the steps:

**1.**  Navigate to your home directory:

```shell
$ cd ~
```

**2.**  Create an empty, new file in your home directory called `.gitignore_global`:

```shell
$ touch .gitignore_global
```

**3.**  Open your new file in VS Code (or you can use an editor in the terminal like Nano or Vim, if you prefer):

```shell
$ code .gitignore_global
```

**4.**  Within the file you've just opened in VS Code, or a Terminal text editor (like Nano or Vim), add rules for the files and file types you want ignored by creating a list. Each kind of file should reside on a new line. (See example below)

At this point, you may not know what files you'd want to ignore globally. That's fine.  To get started, copy and paste the list below into your `.gitignore_global` file (from GitHub's [list](https://gist.github.com/octocat/9257657)). This will ensure that pesky files generated by your operating system will not fill up your project folders:

```shell
# OS generated files #
######################
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
.vscode
ehthumbs.db
Thumbs.db
```

As you gain experience with the kinds of files you don't want cluttering your Git repository, you can return to your `.gitignore` file and add others.

**5.**  Tell Git to use this file as a rule for all of the coding projects you set up on this computer:

```shell
$ git config --global core.excludesfile ~/.gitignore_global
```

One last thing: note that all file names that begin with a `.` are hidden, so files like `.gitignore` and `.gitignore_global` won't be visible either in the GUI (graphical user interface) or with the `ls` command. Instead, you'll need to use the **all** flag like this `ls -a` in order to see these hidden files.
