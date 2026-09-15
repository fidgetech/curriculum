---
title: "✏️ 3.2.5.1 TypeScript Independent Project"
day: friday
id: 3-2-5-1-typescript-independent-project
hide_table_of_contents: true
pagination_next: null
---

## Independent Projects Overview

---

Before you begin your project, make sure to take a moment to review the [Independent Projects and Code Reviews](../../pre-work/getting-started-at-fidgetech/1-0-0-09-independent-projects-and-code-reviews) lesson.


## TypeScript Independent Project Objectives

---

For this independent project, build a standalone TypeScript application of your own choosing. Your project does not need to have a graphical interface - functions that operate on typed data and log output to the console are fine. The goal is to demonstrate that you can write idiomatic TypeScript: types that accurately model your data, functions with clear signatures, and no TypeScript errors.

This project also becomes the foundation for the applications you'll build in React Fundamentals and React with NoSQL: React Fundamentals adds a user interface on top of the types and functions you write here, and React with NoSQL adds persistence. Keep that in mind as you design your data, but don't overthink it - a solid, working TypeScript project that meets the objectives below is what matters right now.

**Recommended: build a tracker for a collection of something.** Pick something you'd actually want to keep track of and model it with fields that fit - things like category, quantity, or value are common, but the right fields depend on your theme. A collection gives you plenty to work with: functions to filter by category, sort by some value, and total or count items across the collection all make good use of typed data. Some ideas:

- Board games, plants, comics, or another set of collectibles
- A recipe collection, with fields like ingredients, cook time, and cuisine
- A music collection, tracking albums or artists
- A contact list
- A game score tracker
- A catalog of your favorite films, games, albums, or books (something different from the Book Tracker)

**Or propose your own theme.** If you have a different idea, check with your instructor before you start - since this project carries forward into later sections, your instructor can confirm your theme will work well once a user interface and a database are added. Whichever theme you choose, avoid reusing a domain we've already built together in lessons.

Whichever theme you choose, remember that continuing this same project in later sections is the recommended path, not a requirement - if you'd rather start fresh with a new theme once you reach React Fundamentals or React with NoSQL, that's completely fine too.

The topic doesn't matter. The TypeScript does.

Consider including at least one function that summarizes your data in some way, like totaling a value or counting items that match a condition. It's not required, but it's a good habit for working with collections of typed data, and you may find it useful again in later sections.

## Project Requirements

---

Your application will be reviewed for the following objectives:

* **No TypeScript errors** - the project compiles cleanly with `npx tsc` and no `any` types are used
* **At least one custom type** - defined using `type` or `interface`
* **At least three typed functions** - each function has explicit type annotations on its parameters and return type
* Project is in a polished, portfolio-quality state.
* The prompt's required functionality and baseline project requirements are met.

### What is a polished, portfolio-quality state?
When a project is both polished and in a portfolio-quality state, this means:

* You've reviewed your project and your README prior to submitting it to make sure there are no errors or missing information and you are consistent in your indentation, spacing, and code structure.
* You are following the best practices and coding conventions we teach.

### What are the baseline project requirements?
All independent coding projects at Fidgetech have these baseline requirements:

* A complete and informative README
* The project's commit history demonstrates steady, incremental progress rather than a single large commit
* Completion of the project based on the prompt _and_ objectives. The prompt contains details on the project's theme and features that are not always detailed in the objective. Carefully read through the prompt before submitting to make sure that you are not missing anything.

## Submission

---

Submit your code for review to the **TypeScript** code review on [Fidgetech Code Central](https://central.fidgetechcode.org/).

Visit [Independent Projects and Code Reviews](../../pre-work/getting-started-at-fidgetech/1-0-0-09-independent-projects-and-code-reviews) for details on how to submit, how feedback works, and course completion requirements.
