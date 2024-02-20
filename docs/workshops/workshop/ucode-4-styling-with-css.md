---
title: "\U0001F4D3 Styling CSS"
id: styling-css
slug: styling-css
hide_table_of_contents: true
sidebar_position: 4
day: weekend
type: lesson
url: 'https://github.com/fidgetech/workshops/blob/main/ucode_4_styling_with_css.md'
---

Now that we've added HTML content to our webpage, we can style and format our HTML using **CSS**.

## Using CSS
---

**CSS** stands for **Cascading Style Sheet**. Just as HTML defines *what* appears on our page, CSS defines how it *looks*.

Glitch has already provided a file called `style.css` for us. In fact, the initial code that Glitch provided had some styling. So why doesn't our HTML use any of the styling that Glitch already has in `style.css`?

Our `index.html` file doesn't have any styling from `style.css` because the two files aren't linked yet. We need to add a link in `index.html` that tells the file where to find `style.css`. Remember how we said that `head` has other important uses besides the `title` tag? This is where the link to the CSS file should go.

Let's add a link now. The code snippet below just shows the `head` section of our code:

<div class="filename">index.html</div>

```html
...
<head>
  <title>Epicodus Workshop Project</title>
  <link rel="stylesheet" href="style.css">
</head>
...
```

As soon as we add this code to `index.html`, we should see an update of our page in Glitch's right-hand pane. Our `index.html` file is now linked to `style.css`, which means that any CSS rules we've included in `style.css` will now be applied to our page.

Let's start by clearing all the code that Glitch provides in `style.css`. We are going to create our own CSS rules now. Here's our first rule:

<div class="filename">style.css</div>

```css
h1 {
  color: blue;
}
```

This style can be broken down into a few sections.

* `h1` tells our CSS that this style should be applied to any element of this type. It will be universal for all `<h1>` elements on our page.
* `{...}` are called **curly-braces** by most programmers. Some call them *handlebars* or *wave-braces* or other things, but they define the beginning and end of a style rule. Every rule within these symbols will be applied to the `<h1>` elements.
* `color` is a **property**. It is the element we want to style in our HTML.
* ` blue` is a **value**. It's the actual value that the property should have. We could change this to another color as well.

We can combine multiple rules in each style. Let's add another property to this rule.

<div class="filename">style.css</div>

```css
h1 {
  color: blue;
  background-color: gray;
}
```

This rule will change the background color of all `<h1>` elements on our page. If we take a look at our site in Glitch, we'll see that our new rule has only modified the `h1` tag.

It may not be the prettiest style, but we certainly have changed it. In fact, that gray looks a little too dark. Let's upgrade the style.

<div class="filename">style.css</div>

```css
h1 {
  color: blue;
  background-color: lightgray;
}
```

You can look up a list of all the colors CSS has defined or use a **hex-color**. Let's use a hex-color to change the text to a lighter blue. While we're at it, we'll put that background color behind the entire body of the page.

<div class="filename">style.css</div>

```css
h1 {
  color: #5179ba;
}

body {
  background-color: lightgray;
}
```

Feel free to style elements on your page using the attributes and properties above. You can modify any element on that page including other header tags, paragraph tags, `img` tags and so on.

### Using a class or id

So far we've been styling everything based on its element type. However, this isn't such a great idea in web development. What if we want to have one `h1` look a certain way while another `h1` should look completely different? In order to do this, we need to target only a single element or groups of elements.

We can use two powerful HTML tools to do this: the **class** and the **id**.

* An **id** is a single identifying attribute given to an HTML element.
* A **class** is an attribute given to multiple HTML elements.

Let's modify our list of goals in our HTML to see how this works. We'll add a few more items as well as add a few classes and ids.

<div class="filename">index.html</div>

```html
...
<ul id="goal-list">
  <li class="list-item">Learn HTML</li>
  <li class="list-item" id="css-item">Learn CSS</li>
  <li class="list-item">Learn JavaScript</li>
  <li class="list-item">Learn Git</li>
</ul>
...
```

Let's also add an `id` to our image.

```html
...
<img id="picture" src="https://tinyurl.com/lfkubwe" />
...
```

Next, let's add new CSS rules that we can apply to these ids and classes.

In order to apply rules to ids and classes in our CSS, we must do the following:

* We use a `#` to indicate that we are referring to an *id*.
* We use a `.` to indicate that we're targeting a *class*.

<div class="filename">css/style.css</div>

```css
.list-item {
  font-family: monospace;
}

#css-item {
  color: #5179ba;
}

#goal-list {
  border-style: solid;
  border-color: #5179ba;
  width: 30%;
}
```

`.list-item` refers to a class because it has a `.`. `#css-item` and `#goal-list` refer to ids because they use a `#`. It is a common error to get these mixed up when applying CSS rules. If a CSS rule isn't working correctly, this is the first thing to check.

Finally, let's give our image some style rules. We've already added the id `picture`. Now we can target the image with a CSS rule that applies to `#picture`.

<div class="filename">style.css</div>

```css
#picture {
  width: 60%;
  float: right;
  border: solid;
  border-color: grey beige white grey;
}
```

## Using Bootstrap
---

We can make our CSS styling much easier by using an existing CSS library. There are many different CSS libraries out there but we'll focus on using a library called **Bootstrap**, which was built by Twitter. Let's add it to our project and make a few minor changes to our CSS.

In our HTML, just above where we linked our `style.css` file, let's add a new line of code. It should look like this.

<div class="filename">index.html</div>

```html
...
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous" />
<link rel="stylesheet" href="style.css">
<title>Epicodus Workshop Project</title>
...
```

This is a CSS file that contains thousands of styles and rules. Instead of linking to a file in our project (as we do with `style.css`), we are creating a `<script>` tag that points to as a CDN, or content delivery network. This Bootstrap CSS file defines special classes we can use on our html.

Bootstrap automatically applies some styles to elements like `body`, so we'll see changes in Glitch's right-hand pane as soon as we link to the Bootstrap stylesheet.

One problem that jumps out is that the text is very tight on the left of the screen. Let's use a Bootstrap class to fix that.

We'll also use a new HTML element called a `<div>`. A `<div>` makes divisions on the page and is used to group parts of our page together. Let's put all the code within the `<body>` within a `<div>`. We'll also give it a Bootstrap class called `container`.

<div class="filename">index.html</div>

```html
...
<body>
  <div class="container">
    ...
  </div>
</body>
...
```

This will make some styling changes to our page, including fixing some of our spacing issues.

If you want to see what the page looked like before and after we added this styling, you can comment out the styling links in the HTML head. When we comment code, it remains on the page but the code isn't rendered. If you highlight a line of code in Glitch and press `Alt + /` on your keyboard, that line of code will be grayed out in Glitch. To un-comment the code, simply repeat the process. This is a good way to see how a page looks with and without a CSS property.

Now that we've learned the basics of CSS, we're ready to add some interactivity to our site with JavaScript.
