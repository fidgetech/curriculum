---
title: "📓 5.3.4.3 Pull Requests and Submitting Great Work"
day: thursday
id: 5-3-4-3-pull-requests-and-submitting-great-work
hide_table_of_contents: true
---

## Coding in the Real World
---

Differently than at Epicodus, developers generally don’t work in pairs (although some companies, such as [Pivotal](https://pivotal.io), have developers pair program the majority of the time, just like you do in the classroom) or alone — they work in small, highly specialized teams dedicated to working on one issue or project. As you learned in the video on Software Development Teams, there are a number of different roles to play. But how does code actually get created in teams? While workflows always differ, it’s important for you to know in a general sense how software development works in a dev team.

### Working with Senior Devs

Many dev teams follow the junior/senior dev split. In some cases, you may also have mid-level developers, and senior developers may also be called leads, but the idea is there same: You have less experienced developers who are the designated juniors, and you have more seasoned developers who have likely been working with the code for a long time, and have more years of experience than Juniors do. If you are working on an open source project in your spare time, you may be working with a group of people who are designated Maintainers of the code, who basically fulfill the same job as a senior dev. 

### Working on Existing Code

Also differently than at Epicodus, you will almost always be working on an existing codebase, as opposed to a new project you begin from scratch. Your projects may contain legacy code, which is code that may not be compatible with newer updates, utilize outdated libraries or technologies, or methods that have been deprecated (earmarked for removal in the future) or a mix and match approach. It’s not always possible to revamp a large project completely, especially in an agile environment.

This means that you’ll need to learn how to jump into existing code quickly, while making sure that any changes you make don’t break anythingthat is already finished and deployed -- imagine merging the cool-yet-niche feature you have been working on to the main branch only to get a frantic message on Slack that something important, something big, something money-earning is now intensely broken. That’s a bad day at the office!

For this very reason, **code Reviews** on **pull requests** exist. Code reviews at Epicodus are modelled after reviews in the work place. So let's learn a little more about their place in your future job!

## Pull Requests and Code Reviews
---

An existing code project will likely have several different branches — a main branch, a development branch, and feature branches. Say you’re tasked with integrating a calendar into an existing web application, and to do so you need to change a model property to include a start time for an `Event` model. If you are thinking that you or your team would create a feature branch for the calendar, you would be correct. But once you have completed your work on the calendar, what happens next?

In order to catch conflicts with the existing codebase, you would submit a pull request. A pull request is, as the name indicates, a request to “pull” the code written by you into the existing code.  When you submit a pull request, a senior dev, lead dev or maintainer will review the code you have submitted and review it closely, offering comments on your code where she recommends a different approach, indicating conflicts and pointing out strong sections. If your code passes muster and the code is accepted, your pull request will be merged into the existing codebase. If more revision is needed, your lead will likely reject your pull request, and she may ask you to review code according to her feedback. If the feature you are trying to implement touches on many areas of code, your pull request may be assigned to more than one senior dev, so that more errors are likely to be spotted during this QA (Quality Assurance) process. Pull requests can be intimidating, but they don’t have to be. Here are some tips you should use when approaching group work and individual projects to practice for your first pull requests.

### Overarching principle:

Your primary goal is to _minimize the amount of time your senior has to spend reviewing your work_. Let's say that one more time. This does **not** mean to not do your work, add features, and build out functionality! It **does** mean spend time making your work shorter, clearer, and more efficient. Maximize the amount of work that does not need to be done. An experienced developer can tell the amount of _you_ have accomplished, and how polished your application is in very little time. A teacher at Epicodus can tell a fantastic project from a very mediocre one very quickly. Your code needs to be error free, complete, and easy to evaluate. It should be as perfect as you can get it by the time you turn it in.

_Why do we care?_

The less time your senior needs to spend on fixing your code, the more _**valuable**_ you are as an employee.  The more time your senior has to spend pointing out bad code, bugs, flaws, projects that don't build, commits that mix up broken and working code, typos, missing tests, tests that don't pass, forgotten API keys, obvious copy/pasting etc, make you **less** valuable as an employee because you need **more** supervision. Supervision takes time. Time costs money. This is especially important if you or your senior may be blocked from completing additional work while your pull request is pending. Stand out through your consistency, simplicity, and brilliance.

* **One feature per pull request** (One feature per commit). Avoid rolling fixes on disparate issues into one commit (and therefore one pull request). It is faster and easier for your senior to review your code if they know that any code you submit is just dedicated to fixing one issue or implementing one feature. Do not roll miscellaneous refactoring or working on different things into one commit. Imagine a commit that contained both working and broken code! A nightmare to unravel — you will likely tasked with redoing it. Redoing means that you are costing your employer money. Make separate commits instead.
* **Write clear code documentation.** Make clear git commit messages and clear comments for confusing code segments. Do not bury your code in a wall of comments though. Comments should stand out.
* **Carefully review your code for issues of scalability** What happens if I try to add a new property to the data model? Or add a second type of event that needs a different kind of calendar? Should I already be thinking of an end date? These are the things your senior will notice. Make sure you _indicate that you have been thinking about these issues_.

* **Review your code** for typos, inconsistencies in naming, spacing, indentation, and formatting.

If your pull request is rejected:

* **Don’t get angry**, focus on your self-perceived inadequacies, or quit your job. It’s not personal, it’s about maintaining the integrity of the final project to prevent resource-sapping issues further down the line.

* **Read the feedback carefully**, at least twice, before you implement recommended changes. Understand what you are being asked before doing.

* **Ask for additional explanations** from your senior if her explanations are not 100% clear.

* **Try and improve the quality of your code from week to week.** Do not compare yourself to others in your team, but instead focus on understanding on what you need to learn to improve and move forward from your current level. Ask for guidance from your team in order to pinpoint specific areas you’d like to improve. 

We strongly recommend you give **[this enlightning blog post](https://medium.com/turbine-labs/theres-no-hell-in-team-4f5d6f3ff511)** by a local Portland Developer Relations Manager Brook Shelley a read through. It covers many topics, not just pull requests, and is a quick , insightful, and entertaining read!

_**During your time at Epicodus**_: Try and implement the guidelines for effective pull requests described above into your individual work and group projects as much as possible. Focus on making your projects quick and efficient to grade.

_**During your internship or job**_: Ask if there are any specific things you should know about your workflow or submitting pull requests before you submit your first PR.
