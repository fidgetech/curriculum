---
title: '✏️ 1.2.3.4 Practice: Forms'
day: wednesday
id: 1-2-3-4-practice-forms
hide_table_of_contents: true
---

**Goal**: Practice creating HTML forms and debugging:

* Use the HTML structure of a form.
* Implement the `onsubmit` event handler property.
* Gather the input values from the form.
* Use `console.log()` in your code.

## Warm Up
---

* Why do you need `event.preventDefault()` when working with a submission event for a form?
* What is the `event` object and what sort of information or tools does it offer to developers?
* What property do we access to get the value of an HTML `<input>`?
* Review the 3 different ways to organize the scripts file from the lesson called "Forms, Hiding and Showing Elements, and the Event Object". Which organization do you prefer and why?

## Code
---

**First, take the time to follow along with the lesson to make a Mad Libs website of your own.** 

Then, meet the goal by completing one of the projects below. 

If you have additional time in your class, complete both of the projects listed below.

### Shouting Machine

Create a page that asks the user to type something into a field, and when they submit the form, have the page say it back to them in all uppercase. Use `console.log` once — either to try it out or to debug an issue.

For an extra challenge include this functionality as well: an increasing font size with every form submission. This is tricky! Think about where you could save a variable for font size in your code that won't get erased after each form submission. Also, you'll need to consider that you'll be working with strings and numbers:

* a number for the font size so that you can increase the number on each form submission.
* a string for the actual value that you set for the inline style for text size.

### Form Letter

Make a form letter where the user inputs their name, and they get back a letter addressed to them. Feel free to use lorem ipsum for the text of the letter. Use Bootstrap and your knowledge of CSS to make the letter _look_ like a letter or virtual postcard. Use `console.log()` once — either to try it out or to debug an issue.

Optionally include this functionality as well:

* A way to reset the form and letter by clearing those values/results.
* A way for the user to create their own letter in response, addressed to you.
