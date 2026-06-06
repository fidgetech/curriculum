---
title: "📓 1.1.2.12 GitHub Pages"
day: tuesday
id: 1-1-2-12-github-pages
hide_table_of_contents: true
---

It's more fun to make web pages when we can show them off to our friends. There are a lot of ways to put our pages online. One of the easiest is to utilize GitHub Pages to automatically deploy our projects online for free.

First, make sure to have a GitHub account set up. The awesome thing about GitHub pages is that you get one main site per account and as many project pages as you would like. That means that when you are ready to create a portfolio of all of your coding work, you can have a main page all about you and a page for each of your coding projects that you do here at Fidgetech or at home!

## In this lesson
---

- How to rename your main HTML file to `index.html` for GitHub Pages
- How to create and push a `gh-pages` branch
- How to access your published site at `username.github.io/repository-name`
- How to update a site after the initial publish

> **AI Support:** Confused by GitHub Pages setup or branch commands? After trying the steps in this lesson, you can ask AI to explain a term or error in plain language. Do **not** ask AI to complete the GitHub Pages setup for you.
>
> **Example prompts:**
> - Weak: "Set up GitHub Pages for me."
> - Strong: "GitHub Pages requires a branch called `gh-pages`. Can you explain what that branch is for and why we push it separately from `main`—without running commands for me?"
>
> Before asking AI, check: [Do I have the license for this?](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech#activity-2-do-you-have-the-license-for-this) See [Using AI Responsibly at Fidgetech](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech) and [How to Ask for Help](../../pre-work/getting-started-at-fidgetech/1-0-0-07-how-to-ask-for-help).

## Project Structure

---

A quick note about structuring projects before we begin. When we start a new project, it is a good idea to create a folder to hold the HTML file and the `css` and `img` folders. So far, we have been using a descriptive name for our HTML file, such as `favorite-things.html` or `my-first-webpage.html`. Often, though, you'll want to give the descriptive name for your folder, and name the web page's main HTML file `index.html`. As we start to add pages to our web site, the `index.html` file will serve as the home page of our site.

For this lesson, we will be putting our `favorite-things.html` file on GitHub Pages. Let’s go in the Terminal to our `my-first-webpage` project folder. <span style={{color: "red"}}>**Since we want `favorite-things.html` to be the home page of our site, we need to rename it `index.html`. GitHub Pages won't recognize it as the main page if we don't.**</span>

```
$ mv favorite-things.html index.html
```

The `mv` command in the Terminal moves the content of the `favorite-things.html` file into a new file called `index.html`.

Now that we've made this change, let's commit this new change and push it to GitHub.

```bash
$ git status
$ git add .
$ git commit -m "Change name of favorite-things.html file to index.html."
$ git push origin main
```

## Adding a Branch for `gh-pages`

---

In order for GitHub Pages to work, we need to create a branch called `gh-pages`.

First we will create the new branch and switch into it by running the commands:

```
$ git branch gh-pages
$ git checkout gh-pages
```

## Pushing Branches to Github

---

Now that we are in the `gh-pages` branch, let's push this new branch to GitHub:

```
$ git push origin gh-pages
```

## Accessing our Web Page

---

Now our project should be available for viewing at _my-github-username.github.io/repository-name_. So, for instance, if our GitHub username was _sample-fidgetech-student_, and our repository was named `my-first-webpage` we would navigate to _sample-fidgetech-student.github.io/my-first-webpage_. Check out the URL that corresponds with your GitHub username and repository name (**Note:** Repository names are case-sensitive, use the same capitalization pattern as you did when naming the repo!)

You can also set up the GitHub Pages webpage for your project in the browser by going to your project's repository, clicking the branch drop down on the left, typing `gh-pages` and selecting `Create branch: gh-pages`. Done!

## Updating GitHub Pages

---

Note that if you make further changes to your project, you should do so on your `main` branch rather than on your `gh-pages` branch. To get back to your main branch, `git checkout main`.  We'll learn in the future about merging branches, but for now the easiest way to update your `gh-pages` branch is to delete it on GitHub and then recreate it based on the updated main branch.

You can also check out GitHub's [documentation](https://pages.github.com/) on deploying to GitHub pages. You'll see it's very simple.

Alternatively, there is an option to deploy to GitHub Pages through a repository's [settings](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). We recommend sticking with the approach covered in this lesson, which also gives you additional practice working with the terminal and pushing and committing code.

> **Try asking AI:** "Why does GitHub Pages need my main HTML file to be named `index.html`? Can you explain what happens if I leave it as `favorite-things.html`—without renaming it for me?"
>
> After reading AI's response, explain the concept back in your own words before moving on.

## Checkpoint
---

Before moving on, you should be able to:

- [ ] Explain why the main HTML file must be named `index.html`
- [ ] Create a `gh-pages` branch and push it to GitHub
- [ ] Find your published site at `username.github.io/repository-name`
- [ ] Describe how to update a GitHub Pages site after making changes on `main`

If you're unsure, re-read the section above or ask AI: "GitHub Pages requires a branch called `gh-pages`. Can you explain what that branch is for and why we push it separately from `main`—without running commands for me?"
