---
title: '✏️ 1.3.1.1 Practice: Adding and Removing HTML Elements'
day: monday
---

**Goal:** In the lessons on adding and removing HTML elements, we learned how to use 6 methods:

* `document.createElement()` to create new HTML elements.
* `Element.append()` to add text to an HTML element, or to add an element inside and at the end of another element.
* `Element.prepend()` to add an HTML element to the beginning and inside of an element.
* `Element.after()` to add an element after an HTML element.
* `Element.before()` to add an element before an HTML element.
* `Element.remove()` to remove the HTML element that the method is called on.

Familiarize yourself with these methods by completing the exercise below.

## Warm Up
---

* If we want to populate an ordered list element in the DOM, which methods could we use? 
* If we wanted to add three paragraph elements with the same text to the DOM (meaning they are identical-looking elements), do we need to create three separate paragraph elements, or can we reuse the same elements three times? 

## Code
---

### Website Recreation

Recreate the following HTML using only JavaScript and the new `document` and `Element` methods we learned about in the "Adding and Removing HTML elements" lesson. (Keep reading for further instructions.)

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <title>Webpage Recreation Practice</title>
  <script src="js/scripts.js"></script>
</head>
<body>
  <h1>Webpage Recreation Practice</h1>
  <p>The HTML of this webpage was created with JavaScript.</p>
  <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900" alt="This is an image of a Multicolored Tanager bird from birdsoftheworld.org" style="width:50%">
  <h1>Facts about the Multicolored Tanager</h1>
  <ul>
    <li>It is endemic to the mountains of Colombia.</li>
    <li>It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.</li>
  </ul>
  <h2>Source</h2>
  <a href="https://en.wikipedia.org/wiki/Multicoloured_tanager">Wikipedia</a>
</body>
</html>
```

Start by creating a project with the following file and folder structure. You can name your project whatever you prefer.

```
website-recreation-practice
|_ js
  |_ scripts.js
|_ index.html
|_ README.md
```

Here's what you should have in `index.html` to start:

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <title>Webpage Recreation Practice</title>
  <script src="js/scripts.js"></script>
</head>
<body>
  <h1>Favorite Things!</h1>
</body>
</html>
```

When you are ready to begin writing JavaScript, start by setting up a `window.onload` event handler in `scripts.js`. Remember: all code that accesses or manipulates the DOM needs to be called inside of the `window` "load" event handler. Why? That's because we need **wait** to run our DOM manipulating code until **after** our webpage has loaded all of its HTML (and other resources). 

Next, start by removing the H1 tag "Favorite Things!" from the DOM — that's not what this website is about. 

Then, in any order that you prefer, recreate the webpage's HTML in `scripts.js` so that it contains all of the HTML listed in the first example. Use the DevTools console to try out code, and reference the "Adding and Removing HTML Elements" lesson as needed.
