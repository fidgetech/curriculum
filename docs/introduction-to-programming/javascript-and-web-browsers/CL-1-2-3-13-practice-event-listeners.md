---
title: '✏️ 1.2.3.13 Practice: Event Listeners'
id: 1-2-3-13-practice-event-listeners
hide_table_of_contents: true
day: wednesday
---

**Goal:**  In the three lessons on event handling with event listeners, we learned about:

* Using the `addEventListener()` method to register event listeners.
* Using the `removeEventListener()` to remove event listeners, and the use cases for this method.
* The benefits of using event listeners over event handler properties.
* How to use function declarations with event listeners, and how they improve code reusability.
* Callback functions.

Practice using the event listeners by completing the exercise below.

## Warm Up
<hr />

* Describe the differences between event listeners and event handler properties. 
* Why is using event listeners the preferred way to handle events? 
* What is the benefit of using a function declaration or a function expression that is stored in a variable in our event handlers?
* Why is code organization important? What should we consider when we're thinking about different ways to organize our code.
* What is a callback function? 
* Will we successfully remove the event listener in the following code? Why or why not?

```js
function processFormValues() {
  // code
}

let form = document.querySelector("form"); 

form.addEventListener("submit", function() {
  processFormValues();
});

form.removeEventListener("submit", function() {
  processFormValues();
});  
```

## Code
<hr />

This classwork is meant to be short and targeted on practicing event listener syntax. There will be more practice opportunities to use event listeners in upcoming classwork.

### (Previous) Project of Choice

Pick a previous project that implements two or three event handler properties and refactor each one to use an event listener and a function declaration instead. After verifying that all of the event listeners are set up properly, refactor your code to remove each event listener after it has run once. 

Every person in your coding pair/group should refactor one event handler property to use an event listener, so pick a project that has enough event handlers for every person in your group, or create a new event listener if there aren't enough for everyone to reactor one.
