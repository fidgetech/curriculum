---
title: '✏️ 1.2.2.5 Practice: Accessing the DOM'
id: 1-2-2-5-practice-accessing-the-dom
hide_table_of_contents: true
day: tuesday
---

**Goal:** Practice accessing the DOM by using the `document` methods we learned about in the previous lesson.

## Warm Up
---

* What is an event in computer programming?
* What is the DOM and how do we access it in our code?
* Why does variable scope matter?
* What happens when you don't use `let` or `const` (or `var`) to declare a variable?  Why is that bad?
* Discuss the knowledge test from the "Variable Scope" lesson with your pair. Does anyone have any confusion? Run through the results you expect for each of the alerts in each of the following code snippets, and test your theories by putting the code into your DevTools console.

### Code Snippet #1

```javascript
let bunnyName = "Flopsy";

function hippityHoppity() {
  window.alert(bunnyName);
  bunnyName = "Cottontail";
}

hippityHoppity();
window.alert(bunnyName);
```

### Code Snippet #2

```javascript
let bunnyName = "Flopsy";

function hippityHoppity() {
  let bunnyName = "Mopsy";
  window.alert(bunnyName);
  bunnyName ="Cottontail";
}

hippityHoppity();
window.alert(bunnyName);
```

## Code
---

### Cookie Recipe

Clone down the Cookie Recipe HTML and open it in your web browser. Then, use the DevTools console to practice accessing different DOM elements by working through each prompt below. Reference the previous lesson "Accessing the DOM" as needed. You should be able to complete all of the following prompts with just the information in the lesson. 

* Display the entire DOM in your console.
* Access the paragraph element with `window.document.querySelector()`.
* Access the `<em>` element within the paragraph element (using the correct CSS selector) with `window.document.querySelector()`.
* Display the HTML `<body>` element and all of its contents by accessing the correct `window.document` property.
* Access the H1 tag by the value of its `id` attribute with `window.document.getElementById()`.
* Access the `<ul>` element by targeting it with its class name (using the correct CSS selector) with `window.document.querySelector()`.
