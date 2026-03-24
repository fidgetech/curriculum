---
title: '✏️ 1.2.1.7 Practice: Accessing Window Properties'
day: monday
id: 1-2-1-7-practice-accessing-window-properties
hide_table_of_contents: true
---

**Goal:** In the "Accessing Window Properties" lesson, we learned:

* The `window` object has properties with different values: primitives, objects, or methods. We can explore these in the DevTools console and we can use JavaScript to manipulate that data.
* We use dot notation to access `window` properties, like `window.innerHeight` or `window.open()`. 
* When a `window` property itself is an object with properties, we can chain dot notation to access the nested object's property. A good example of this is `window.location.href`, where we're accessing the `window` object's property called `location`, and then we're accessing the `location` object's property called `href`.

Begin familiarizing yourself with the `window` object by completing the following exercises in the DevTools console. 

## Warm Up
---

* What does the `window` object represent? What sort of information can we get from it?
* What is a property?
* What is dot notation and how do we use it?
* What are Web APIs? What is an API?

## Code
---

### Accessing `window` Properties

Access the `window` object to find the following information:

* Find the value of the `innerHeight` of the window.
* Find the `href` of the webpage you are currently on.
* Access the `window.screen` property in your console, and expand the object so that you can see the properties. Then, access the `height` property of the `screen` object. Turn the `height` property into a string.

Access the `window` object to call the following methods:

* Find the value of the `innerWidth` of the window.
* Search for the `window.scrollTo()` method on MDN. Read the description and the examples, and try using it in the DevTools console.
* Call on the method in `window.location` that reloads the page you are on. If you can't remember the name of the method, review the lesson "Accessing Window Properties" or try researching on MDN.
