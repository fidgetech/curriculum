---
title: "📓 Inclusive Terminology: Using a Main Branch"
day: weekend
id: inclusive-terminology-using-a-main-branch
hide_table_of_contents: true
---

This lesson is part of our regular Diversity, Equity, and Inclusion curriculum.

Many groups of people have been excluded from the tech industry, including women and people of color, and members of underrepresented groups that do work in the industry on average have lower pay, are less likely to be in management, and are more likely to change careers out of tech. Meanwhile, more diverse companies are more profitable and better serve their clients, because they have more diverse perspectives. One place you can see the lack of diverse perspectives in tech is in the terminology that's used, terminology that can be exclusionary and hurtful. 

An example of this terminology is the use of _master_ and _slave_ to describe a process or thing that controls another process or thing. If you are interested in seeing some examples where this terminology is used, see the [Wikipedia entry on this topic](https://en.wikipedia.org/wiki/Master/slave_(technology)).
 
This terminology has been a matter of discussion in the tech industry for many years. In 2018, the Python language stopped using the terminology. In the summer of 2020, the National Institute of Standards and Technology, [announced that they would stop using terms with racist associations](https://www.politico.com/news/2020/06/25/agency-ends-use-technology-terms-racist-associations-339880).
 
GitHub has also followed suit, and in the summer of 2020, announced that it was changing the name of the default branch for GitHub repositories from `master` to `main`. In git, the term _master branch_ refers to the default branch where production-ready code should go. While there is no corresponding use of the term _slave_ in git, _master_ is still a loaded term. The _master branch_ still refers to a branch that "controls" other branches (after all, git is a form of version control).
 
While it may seem relatively straightforward to change the name of the default branch in GitHub — after all, it's just a single word that needs to be changed — from a coding and documentation perspective, it can take a while to implement these changes while making sure nothing big breaks in the process. That is the case for Epicodus, too. While changing _master_ to _main_ in the curriculum itself is easy, it also means updating images, lesson repositories and links, which is an ongoing process.
 
In fact, the process isn't fully automatic in git, either. If we create a new repository in the GitHub UI (in the browser) and then make a commit in the UI, we'll see that it's automatically saved on a `main` branch — not `master`!
 
However, if we make a commit in the command line, we'll see that our code is still automatically saved on the `master` branch.
 
Fortunately, we can easily update the name of the default branch with a single command. In fact, whenever we create a new repository in the GitHub UI, it helpfully provides these instructions for us.

![GitHub UI instructions for changing name of default branch.](/images/DEI-Images/github-ui-git-instructions.png)

The key takeaway here is that we need a single line of code to update the default branch:

```
git branch -M main
```

The `-M` flag tells GitHub that we want to change the default branch name to `main`. We should run this command after our first commit. If we try to run the command before our first commit, we'll get the following error:

```
error: refname refs/heads/master not found
fatal: Branch rename failed
```

We can also update the default so that future projects use `main` instead of `master`:

```
$ git config --global init.defaultBranch main
```

For this change to kick in, it is necessary to restart the terminal. Note that you should be on the latest version of git. You can check the version with the command `git --version`. The version should be 2.28.

At this point, we recommend that all students uses `main` as the name of the default branch in GitHub. We strongly support this change — and it's now the default in GitHub anyway.

That being said, you will likely still see many references to master branches online and in the industry. There are a number of reasons for this:
 
* **It takes time to make changes.** That includes changes to documentation, the code base, and even automated processes that might be reliant on the default branch being a certain name. In the [README on renaming](https://github.com/github/renaming), GitHub states the following: "For existing repositories, renaming the default branch today causes a set of challenges." These challenges include the following (as stated in the docs):
 
 * Open pull requests need to be retargeted to the new branch
 * Draft releases need to be retargeted to the new branch
 * Branch protection policies need to be transferred to the new branch
 
Hopefully by the end of 2020 these changes will be easier to make. And as far as the change taking time for companies, that includes Epicodus. Sample lesson repositories use the naming convention from before this change. So do some images. While all new repositories will use a main branch instead of master, making changes to existing code takes time.
 
* **Some companies may not be aware of the updates.** There's a _lot_ changing in the tech industry — and it's hard to keep track of everything. Some companies may not know about the change yet.
 
* **Some companies may be concerned about breaking changes.** Imagine that you have a very big legacy codebase that your company has been working on for the last ten years. There's some shiny new code in there but there's also some crusty old code that would be very painful to update and change. Companies resist making painful changes. For some companies, making this change might seem unnecessarily painful and risky — why risk some major breaking changes to code that the company relies on? Fortunately, GitHub is working towards making the change as seamless as possible so companies can update legacy code to use a different default branch name.
 
* **Some companies don't care or don't want to change the way they do things.** Old habits die hard. Some won't see the importance of making this change. They might be resistant to making this change. If you end up working for a company that takes this perspective, we recommend finding ways to constructively encourage the company to make the change.
 
If you'd like to learn more about the process of renaming repos so they use _main_ as a default, see the [GitHub documentation on renaming](https://github.com/github/renaming).

### [Ready to Write Your Reflection?](#ready-to-write-your-reflection)

There is a reflective assignment for this lesson. If you are ready to write your reflection, head on over to Epicenter to find the prompt. If you are logged in to Epicenter, you can access the prompt by navigating to this link:

**<span class="glyphicon glyphicon-link"></span> [Reflection Prompt: Inclusive Terminology and Using a Main Branch](https://epicenter.epicodus.com/journals?title=Inclusive+Terminology:+Using+a+Main+Branch)** 

Otherwise, you can find detailed instructions on accessing the reflection prompts in the [DEI Reflective Assignments](/pre-work/getting-started-at-epicodus/dei-reflective-assignments#finding-the-reflection-prompts) lesson.

### [Do you have feedback?](#do-you-have-feedback)

We want to hear about your experience of the DEI curriculum. We outline all of the ways you can give feedback in [the student handbook](/student-handbook#giving-feedback).
