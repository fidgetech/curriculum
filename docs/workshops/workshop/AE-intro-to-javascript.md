---
title: "📓 Intro to JavaScript"
day: weekend
---

We've added new HTML content to our site and styled it with CSS. Next, we'll explore the basics of a programming language called **JavaScript**, which will allow us to add interactivity into our site. JavaScript is more complex than the topics we've covered so far so we'll spend two lessons discussing it.

We'll explore and experiment with basic JavaScript in this lesson. In the next lesson, we'll add an interactive form to our site using a  library called **jQuery**.

## Introduction to JavaScript
---

So far, our site is static and has no interaction. There's no way to make our page *do* anything.

Let's change that with JavaScript. JavaScript is a full-fledged programming language that takes years to master. At Epicodus, we concentrate on learning the fundamentals of the language, which is enough to get our students their first programming jobs. However, we don't need to know all the fundamentals just yet. This workshop will give you a taste of what JavaScript is like.

We are going to use a site called [Codepen](https://codepen.io/pen/) to explore JavaScript a bit more. Open a new window and [go to this page](https://codepen.io/pen/). Don't close your Glitch window, though. We will return to the site we are building in the next lesson.

Here's what the Codepen panel looks like. As you can see, we can add HTML, CSS and JavaScript here, too. Codepen is a popular site for sharing snippets of code. You are welcome to create an account but it's not required for experimenting with Codepen. Today we will just focus on the panel on the right, which is for JavaScript code.

![An image of panels in Codepen. JS is on the right.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/ucode-glitch-photos/codepen-1.png)

Go ahead and enter the following code into the JavaScript panel:

```js
alert("Hello World!");
```

![An image showing an alert in Codepen. The alert code is showing on the right.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/ucode-glitch-photos/codepen-2.png)

Our page just said hi. The box that popped up is called an **alert**.

`alert()` is a JavaScript function. Simply put, a **function** is a piece of code that carries out an operation. We can use all kinds of pre-existing functions and we can even define our own functions.

Note the parentheses in our function. In programming, we call those **parens**. They're a good clue that the piece of code we're looking at is a function. The parens have a special use, which is to collect data that the function itself will then use. The information passed into parens is called an **argument**. In the case of our function here, we're giving it the argument `"Hello World!"`.

Our phrase is contained within quotes. This is because in JavaScript, words aren't simply words. The word `"alert"` and the function `alert()` use the same set of letters so we need a way to differentiate them. For a function, we use parens. For a piece of text, we use quotes. A piece of text contained within quotes is called a **string**. When we write code, everything that needs to be treated as a piece of text must be formatted as a string.

String is a **data type**. There are many other data types. One example is numbers, which are called **integers** in JavaScript. Note that there is a difference between the number `2` and the string `"2"`. The first is an integer while the second is a string. Let's see how this works.

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

* In the first case, JavaScript took our two **integers** and added them.
* Next, JavaScript tried to multiply 4 times the **string** `"2"`. That would be like saying "What is the product of 4 times trout". It's a word. We can't do math with a word. So JavaScript changed the `"2"` from a **string** to an **integer** and gave us the result. It *inferred* the data type.
* Finally, JavaScript took the **integer** `8` and tried to add the **string** `"2"`. No problem. But instead of doing a mathematical operation, it attaches the string and the integer together. This is an operation in programming called **concatenation**. It's literally sticking two things together to make them one thing. This happened because the symbol we use in JavaScript to tell it to concatenate is the symbol `+`. If we were to add `5` and `"trout"` together, we would get `"5trout"`.

Try experimenting with different combinations of strings and integers. Guess what will happen before you refresh your page.

There are many different data types in JavaScript and in computer programming in general. We can only scratch the surface in this workshop but we cover them in much more depth in our full curriculum. We can even define our own data types and set up rules for how they behave. If you'd like to learn more about JavaScript, there are many great resources online. Check out our lessons at [learnhowtoprogram.com](https://full-time.learnhowtoprogram.com/introduction-to-programming).

In our next lesson, we'll learn how to use JavaScript to do something useful on our Glitch site.
