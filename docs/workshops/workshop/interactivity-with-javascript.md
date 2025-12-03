---
title: "📓 Interactivity with JavaScript"
day: weekend
id: interactivity-with-javascript
hide_table_of_contents: true
---

While an `alert()` can be helpful for beginning programmers, we generally don't want to use them in our applications. Ideally, we want as much of our functionality to happen on the page as possible. In this lesson, we'll create a form where users can type in a goal. When the goal is submitted, it will then be added to our list of goals.

In order to do this, we're going to use JavaScript.

### Adding a Form to HTML

Next, let's create a form that will allow us to add new items to our list of programming goals. We'll put this form in our `index.html` file just above the `<ul>` that contains our list of goals.

```html
...
  <div class="form-group">
    <label>New Goal</label>
    <input type="text" id="new-goal">
    <button class="btn btn-info" type="button" id="goal-button">Add goal</button>
  </div>
...
```

Notice how these HTML elements are indented to keep them organized? Good coding includes using good organization and conventions to help make these items easier to read. We won't cover indentation further here, but it's covered in the first few weeks of Introduction to Programming.

Our new form contains a label, a text input field for the user, and a button to click when the form has been filled out. Note the `id` given to the text input. That's about to become important.

We can enter a new goal into our form, but when we click the button, nothing happens. We'll need to use JavaScript to make the button interactive.

### TL;DR: We Need to Use JavaScript to Make the Script Wait for Our HTML to Load

Before we go any further, let's discuss what actually happens when we load HTML on a webpage. What we see in the browser isn't actually HTML. It's what's called the DOM, which stands for Document Object Model. Our HTML is just a blueprint. It tells the browser what to do and then the browser creates a DOM based on that blueprint.

Why is this important? Well, the DOM needs to be built before we run our JavaScript code. Otherwise our JavaScript code won't run. If HTML is the blueprint, then the DOM is a virtual house built with that blueprint. We need the house to be finished before we can actually start doing stuff in it.

For that reason, our code is going to be wrapped in a JavaScript function that is very common in scripts that are used for websites:

```js
document.addEventListener("DOMContentLoaded", function() {
  // Our code will go here.
});
```

Let's explain this in further detail:

- We use `document.addEventListener('DOMContentLoaded', ...)` to wait until the DOM has fully loaded before running our code. This prevents our JavaScript from trying to access elements that don’t exist yet.
- The `function()` keyword comes from JavaScript. We are putting all of the code that should run inside this function. The browser will then call that function after the document is ready.
- Everything inside the `{}` is in the scope of that function. That’s where you’ll put the logic you want to run after the page loads.

As a quick reference, a JavaScript function has this syntax:

```js
function () {
  // All code goes here.
};
```

### Using JavaScript to Change the DOM

Now that we have a JavaScript function that will make sure our script waits for the DOM to load before running, we can put some code in it.

We can target specific elements in our site by using the same classes and ids we've already added to our code for CSS rules. Let's change our script to the following:

```js
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("goal-list").innerHTML += "I want to learn to code!";
});
```

Now let's break down our new line of code further:

```js
document.getElementById("goal-list").innerHTML += "I want to learn to code!";
```

- JavaScript will find the corresponding element with an ID of `goal-list`.
- We use JavaScript's `innerHTML` property to change the content of the element. This property allows us to get or set the HTML content inside an element.
- Finally, we append the string `"I want to learn to code!"` to the existing content of the element.

Let's take a look at what happens when we add this code to our jsPad application:

<img src="/images/Workshop/jspad/innerHTML.png" alt="The JS code is on the left. It shows our new JavaScript code. The site preview on the right shows the appended code." width="600" />

We now have a new item at the bottom of our list of goals. This item isn't included in our HTML. Instead, we used JavaScript to append it to the list.

**Note:** If your site isn't updating, click on the refresh icon just above the preview of the website we're building.

One little thing: wouldn't it be nice if our new item was also an `<li>` like the other items on the list? Well, we can do that with a small update to our code:

```js
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("goal-list").innerHTML += "<li>I want to learn to code!</li>";
});
```

We just need to add `<li>` tags to make it a list item.

However, we haven't actually added any interactivity yet. This is pretty much the same thing as just adding an element directly to the HTML. We need the form itself to trigger the `append()` function.

### Adding a `click()` Function

Let's attach a `click()` function to our form button. A `click()` function does exactly what it sounds like: when a thing on our site is clicked, all the code inside the `click()` function will run.

We can use JavaScript to attach a `click()` function to our button. Then, when someone clicks the button, we can run some code to append things to our list.

Let's update our script file to look like this:

```js
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("goal-button").addEventListener("click", function() {
    document.getElementById("goal-list").innerHTML += "<li>I want to learn to code!</li>";
  });
});
```

Here, we've added a new JavaScript function.

- We target the element with an ID of `goal-button`. That's the button on our page.
- We attach a `click()` function to `goal-button`. Note that the `click()` function isn't called right away. If the HTML is like a blueprint used to build a virtual house called the DOM, then JavaScript is the electrician that comes in after the house is built to install a light switch. Once again, that's why it's important for our script to wait for the DOM to be built - otherwise, JavaScript can't come in and add the `click()` function.
- We've moved the code that appends the new item to the list to inside of the `click()` function. That way, the code will only run when the button is clicked.

Let's see how this looks in jsPad:

<img src="/images/Workshop/jspad/innerHTML-click.png" alt='The site preview shows "I want to learn to code!" being appended many times.' width="600" />

The image shows how our page will look if we keep clicking the button. Our site has a little interactivity now! We can click the button to add "I want to learn to code!" to the screen. However, it's not quite the interactivity we'd like.

Fortunately, JavaScript provides a way to get the value of a form field. We can use the `value` property of the input element to get what the user has typed in. Let's update our code to use this property:

```js
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("goal-button").addEventListener("click", function() {
    document.getElementById("goal-list").innerHTML += "<li>" + document.getElementById("new-goal").value + "</li>";
  });
});
```

We've made a few changes to our line of code that appends the new item to the list:

```js
document.getElementById("goal-list").innerHTML += "<li>" + document.getElementById("new-goal").value + "</li>";
```

- We use JavaScript to call `document.getElementById("new-goal").value`. This finds the value in the form field with an ID of `new-goal`.
- We use concatenation to combine opening and closing list item tags to the value that JavaScript has found for us. This ensures that anything we append to our list is also a list item.

Now we can actually add items to our list. Every time we click the button, our function is activated and the value of the form field is appended.

<img src="/images/Workshop/jspad/innerHTML-value.png" alt='The site preview shows that the value inputted in the form is appended to the site.' width="600" />

There's one more thing we can do to clean this up a bit. It would be nice if the form field was cleared after submission for users. Fortunately, this is easy. We can also use the `value` property to clear the field. We just need to add one more line to our script:

```js
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("goal-button").addEventListener("click", function() {
    document.getElementById("goal-list").innerHTML += "<li>" + document.getElementById("new-goal").value + "</li>";
    document.getElementById("new-goal").value = "";
  });
});
```

The line `document.getElementById("new-goal").value = "";` simply empties the form field so the user may enter another goal into the form. Try it out on jsPad!

Additionally, if we wanted our text styling to match what we have for `.list-item` in style.css we can update your JavaScript created list to look like this:

```js
document.getElementById("goal-list").innerHTML += "<li class='list-item'>" + document.getElementById("new-goal").value + "</li>";
```

### JavaScript is Tough

Great work so far! We've built an interactive site that uses HTML, CSS and JavaScript. We could easily spend months focusing on each of these topics because there is so much to learn. We'd also like to note that JavaScript is very challenging at first. Don't worry if you don't fully understand everything we just completed. That's entirely normal. Our full-time Introduction to Programming students spend many weeks learning and practicing these concepts. If you're interested in developing your JavaScript skills further, we'll provide a list of resources in the last lesson of this workshop.
