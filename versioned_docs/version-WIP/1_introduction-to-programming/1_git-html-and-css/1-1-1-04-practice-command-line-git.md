---
title: '✏️ 1.1.1.4 Practice: Command Line Git'
day: monday
id: 1-1-1-4-practice-command-line-git
hide_table_of_contents: true
---

**Goal:**  Here at Fidgetech, we use the command line, Git and Github on a daily basis. The goal for this exercise is to practice the workflow you'll use daily.

## Warm Up
---

_Ask yourself the following questions before moving on:_

* What are the steps to make a Git commit?
* What is the significance of the word 'main' in the command `$ git push al main`?
* What is the difference between the local `.git` repository, and the repository created on Github?
* How are the local `.git` repository, and the repository created on Github 'connected'?

> **AI Support:** Stuck on a command line error like `command not found` or `no such file or directory`? After trying the steps below, you can ask AI to explain what a command does or interpret an error in plain language. You **can** ask AI to clarify terminal errors and Git workflow steps. Do **not** ask AI to complete this exercise or write your HTML for you.
>
> **Example prompts:**
> - Weak: "Why isn't this working?"
> - Strong: "I ran `cd Desktop` and got 'no such file or directory.' What are 2–3 things I should check about my current directory?"
>
> Before asking, check: [Do I have the license for this?](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech#activity-2-do-you-have-the-license-for-this) See [Using AI Responsibly at Fidgetech](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech) and [How to Ask for Help](../../pre-work/getting-started-at-fidgetech/1-0-0-07-how-to-ask-for-help).

> **Try asking AI:** "I'm building a new project from scratch. Can you list the Git steps in order—from `mkdir` to `git push`—without writing the commands for me?"
>
> After reading AI's response, walk through the steps out loud before you start coding.

## Code
---

### Goodbye World

Begin practicing the command line, Git commands and GitHub set up by building a "Goodbye World" web page that you push to a repository on GitHub.  The steps you need to complete are below.  You will need to use the previous lessons as reference for the correct syntax and commands to complete them.

1.  Create a new project directory in the Desktop directory called `goodbye`.
2.  Initialize a Git repository to start tracking your changes.
3.  Create an HTML file called `goodbye.html`.
4.  Open your project directory in your text editor.
5.  Add this HTML code to your `goodbye.html` file:

<div class="filename">goodbye.html</div>

```html
<h1>Goodbye</h1>
<h2>A program to bid our friends farewell all over the world.</h2>

<ul>
  <li>English: Goodbye, friends!</li>
  <li>Spanish:  Adios, amigos!</li>
</ul>
```

6.  Save the file and look at it in your browser.
7.  Check the status of the changes that Git is watching.
8.  Add the HTML file for tracking.
9.  Commit your changes.
10.  Add a few more lines of goodbyes to your HTML file (copy an existing line and write over the text leaving the `<li>` and `</li>` at the beginning and end of the lines).
11.  Save the file and commit your changes.
12.  Create a GitHub repository.
13.  Push your changes to GitHub.

## Checkpoint
---

Before moving on, you should be able to:

- [ ] Create a new project from scratch using the terminal, Git, and your text editor
- [ ] Make at least two commits with clear messages and push to GitHub
- [ ] Complete the full workflow without copying commands blindly

If you're unsure, re-read the previous lessons or ask AI: "I'm building a new project from scratch. Can you list the Git steps in order—from `mkdir` to `git push`—without writing the commands for me?"
