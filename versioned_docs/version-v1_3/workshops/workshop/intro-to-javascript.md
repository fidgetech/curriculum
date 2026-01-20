---
title: "📓 Intro to JavaScript"
day: weekend
id: intro-to-javascript
hide_table_of_contents: true
---

We've added new HTML content to our site and styled it with CSS. Next, we'll explore the basics of a programming language called **JavaScript**, which will allow us to add interactivity into our site. JavaScript is more complex than the topics we've covered so far so we'll spend two lessons discussing it.

We'll explore and experiment with basic JavaScript in this lesson. In the next lesson, we'll add an interactive form to our site.

## Introduction to JavaScript
---

So far, our site is static and has no interaction. There's no way to make our page *do* anything.

Let's change that with JavaScript. JavaScript is a full-fledged programming language that takes years to master. At Fidgetech, we concentrate on learning the fundamentals of the language, which is enough to get our students their first programming jobs. However, we don't need to know all the fundamentals just yet. This workshop will give you a taste of what JavaScript is like.

Click on the `JS` tab in the code editor. This is where we'll write our JavaScript code.

Go ahead and enter the following code into the JavaScript panel:

```js
alert("Hello World!");
```

![The JS tab in jsPad](/images/Workshop/jspad/jspad-js.png)

In order to make our JavaScript code run, we need to click the _Run_ button (refresh icon) in the <strong>top right corner of the Output panel</strong> (see image below). This will refresh our page and run our JavaScript code. <strong style={{ color: 'red' }}>Important: Don't refresh your browser tab, as that could result in losing your work.</strong> Instead, click the refresh icon in the top right corner of the Output panel or use the keyboard shortcut `Cmd + Enter` or `Ctrl + Enter`.

![The run button in jsPad's Output panel](/images/Workshop/jspad/jspad-output-run.png)

Our page just said hi. The box that popped up is called an **alert**.

If you didn't see the alert, wait a moment and try again. You can also try switching to the `Console` tab in the Output panel and then back to the `Output` tab.

`alert()` is a JavaScript function. Simply put, a **function** is a piece of code that carries out an operation. We can use all kinds of pre-existing functions and we can even define our own functions.

Note the parentheses in our function. In programming, we call those **parens**. They're a good clue that the piece of code we're looking at is a function. The parens have a special use, which is to collect data that the function itself will then use. The information passed into parens is called an **argument**. In the case of our function here, we're giving it the argument `"Hello World!"`.

Our phrase is contained within quotes. This is because in JavaScript, words aren't simply words. The word `"alert"` and the function `alert()` use the same set of letters so we need a way to differentiate them. For a function, we use parens. For a piece of text, we use quotes. A piece of text contained within quotes is called a **string**. When we write code, everything that needs to be treated as a piece of text must be formatted as a string.

String is a **data type**. There are many other data types. One example is numbers. Note that there is a difference between the number `2` and the string `"2"`. The first is a number while the second is a string. Let's see how this works.

Clear the contents of the right-hand panel in Codepen and add the following code:

```js
alert(2 + 2);
alert(4 * "2");
alert(8 + "2");
```

We will get the following alerts:

* 4
* 8
* 82

The first two make some sense. However, the third doesn't actually add the two numbers together.

* In the first case, JavaScript took our two **numbers** and added them.
* Next, JavaScript tried to multiply 4 times the **string** `"2"`. That would be like saying "What is the product of 4 times trout". It's a word. We can't do math with a word. So JavaScript changed the `"2"` from a **string** to a **number** and gave us the result. It *inferred* the data type.
* Finally, JavaScript took the **number** `8` and tried to add the **string** `"2"`. No problem. But instead of doing a mathematical operation, it attaches the string and the number together. This is an operation in programming called **concatenation**. It's literally sticking two things together to make them one thing. This happened because the symbol we use in JavaScript to tell it to concatenate is the symbol `+`. If we were to add `5` and `"trout"` together, we would get `"5trout"`.

Try experimenting with different combinations of strings and numbers. Guess what will happen before you hit the run button.

There are many different data types in JavaScript and in computer programming in general. We can only scratch the surface in this workshop but we cover them in much more depth in our full curriculum. We can even define our own data types and set up rules for how they behave. If you'd like to learn more about JavaScript, there are many great resources online.

In our next lesson, we'll learn how to use JavaScript to do something useful on our jsPad site.
