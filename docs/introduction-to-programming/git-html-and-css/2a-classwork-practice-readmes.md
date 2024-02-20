---
title: '✏️ 1.1.2.15 Practice: READMEs'
id: 11215-practice-readmes
slug: 11215-practice-readmes
hide_table_of_contents: true
sidebar_position: 27
day: tuesday
type: exercise
url: >-
  https://github.com/fidgetech/introduction-to-programming/blob/main/2a_classwork_practice_readmes.md
---

**Goal**: Now that you know how to clone repositories and how to write `README.md` files, let's practice by adding `README.md` files written in Markdown to the repositories you've created so far.

## Warm Up
---

* Why are READMEs important?
* What sections should be included in one? Why?
* How do we format READMEs?

## Code
---
### Add READMEs to Your Projects

Let's add READMEs to projects that are currently in GitHub. This will give us additional practice with cloning existing repositories. 
If you are working on your personal computer and the project also exists on your desktop, first make sure the project is in GitHub (that means making sure that _all_ files are saved and the latest code has been committed and pushed). Then remove the directory from your desktop. (If you're worried about losing content, you can also rename the directory). Next, clone the project down from GitHub. It’s important that we clone our existing repositories rather than just downloading the files. By using `git clone` we maintain the link to the git repository and can continue to make commits to the same project.

Let's start with this:

* Go to GitHub and select the repository `my-first-webpage` from your account to clone and add a README to.
* Open Terminal and go to the Desktop folder. (Again, it is important not to clone one project into another project’s folder.)
* Use `git clone` to clone the `my-first-webpage` repository from your GitHub.
* Type `ls` in the Terminal and you should see your project folder appear.
* Go into that project folder in the Terminal.
* Type `git log` to confirm that you are in the project folder and can see all of your git commits from your previous work on this project. (If this list of commits is long, you may have to press `q` to get back to the command line prompt.)
* Type `git remote -v` and you should see a remote link nicknamed `origin` to your remote repository URL. (Whenever we clone a project from GitHub the repository we cloned from is automatically included as a remote named origin).
* Create an empty `README.md` file by typing `touch README.md`.
* Open the project folder in Visual Studio Code by typing `code .`
* You should see your `my-first-webpage.html` file with all of your work, as well as the new, empty `README.md` file.
* Go ahead and write a `README.md` for your my-first-webpage project using the Markdown language, as discussed in the README lesson.

After you finish updating your my-first-webpage project, you will commit the new `README.md` file and push the updated project back up to their GitHub using the following instructions:

* `$ git add .` (the "**`.`**" allows you to add all files without needing to add each individually by name)
* `$ git commit -m "Add README"`
* `$ git status` to ensure that everything has been committed
* `$ git push origin main` to push your updated project back up to GitHub
* Check on GitHub to make sure that your README shows up correctly on the main project page.
