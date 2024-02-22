---
title: '✏️ 1.2.2.13 Practice: Event Handling with Event Handler Properties'
day: tuesday
id: 1-2-2-13-practice-event-handling-with-event-handler-properties
hide_table_of_contents: true
---

**Goal:** Practice using event handler properties by updating a project from the last course section to handle events.

## Warm Up
---

* What is a function expression and how is it different from a function declaration?
* Name two event handler properties that you remember from the previous lessons.
* How are event handler properties categorized?
* Can different browser structures (`window`, `document` or DOM elements) respond to the same event?
* What does the `window.onload` event handler do?

## Code
---

Read through the following two prompts and pick one project to complete. Both prompts will require a little bit of research and if you are having issues with that, ask for help from your teacher or peer. Reference the previous lessons as necessary and challenge yourself by trying to type out the code from memory. 

Each prompt below includes a bonus prompt. **Before you start on the bonus prompts, take stock of the readings and other classwork that is assigned for the same class session. If you have more readings to do for the session, do not do the bonus prompt.**

### Accessibility Modes on Project of Choice

For this prompt, you'll extend the functionality of a project you completed in the last course section to add buttons that change the color of the webpage and increase the font size. There's also a bonus prompt. This is what you'll do:

* Clone down a project of your choice from the last course section. This project should only have HTML and CSS in it.
* Create a JS file and link to it in your HTML.
* Create two buttons elements that give the user the choice for a light mode or a dark mode on the webpage. We haven't explicitly covered how to implement an HTML button elements, so you'll need to research it. Try using [this resource from W3Schools](https://www.w3schools.com/tags/tag_button.asp) or [this one from MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).
* The next step is to write your JS: make sure to include the `window.onload` event handler. Within that event handler, create event handlers for each button that handles changing the text and background color within the document. The easiest way to do this is to target the document's `body` tag, but you can do it however you like.
* Next, create two buttons that give the user the choice between the default font size and an increased font size. You should roughly follow the same steps as above, though you should only have **one** `window.onload` event handler.
* **Bonus prompt:** add `onmouseover` and `onmouseout` event handlers to every element in the DOM so that when the pointer is over the element, its background color is set to yellow, and when the mouse is not over the element, the background color returns to the default.

### Challenging: Kaleidoscope

For this prompt, you will update a project from the previous course section to react to events. This prompt is called "kaleidoscope", because much like a [kaleidoscope](https://en.wikipedia.org/wiki/Kaleidoscope), we'll have our webpage change the background color of the entire page to a randomly generated color every time our mouse pointer moves. This is what you'll do:

* Clone down a project of your choice from the last course section. This project should only have HTML and CSS in it.
* Create a JS file and link to it in your HTML.
* Create a random number generator function. 
  * Hint: you'll need to read about the [Math.random() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random), or research how to do this online.
* Next, create an event handler for a mouseover event on the body of the HTML. This event handler should update the body's background color with the randomly generated numbers from the random number generator function. 
* **Bonus prompts:** 
  * Create the same mouseover event handler for the text on the page that you did for the background color.
  * Create a click event for the document body that calls the `window.scrollBy()` or `window.scrollTo()` methods and moves the Y axis (vertical) of the page to a random location.
