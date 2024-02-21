---
title: "📓 1.1.3.3 Divs and Spans"
id: 1-1-3-3-divs-and-spans
hide_table_of_contents: true
day: wednesday
---

Classes are great for selectively applying styles to certain parts of your web pages. But sometimes you'll have entire sections of your pages that you want to style a certain way, and adding a style to every tag gets annoying. Here's a new page I made about fish. Notice how several elements in a row all have the same class:

<div class="filename">fish.html</div>

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <link href="css/styles.css" rel="stylesheet" type="text/css" media="all">
  <title>Everything about fish</title>
</head>
<body>
  <h1>Everything about fish</h1>

  <p>Here is everything you need to know about fish. First, the important stuff:</p>

  <h2 class="important">Types of fish</h2>

  <p class="important">There are many types of fish. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

  <p class="important">Here are some types of fish:</p>

  <ul class="important">
    <li>Goldfish</li>
    <li>Catfish</li>
    <li>And lots, lots more!</li>
  </uL>

  <h2 class="important">Other important stuff</h2>

  <p class="important">Here is some other really important stuff about fish. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

  <p>Now, for some less important stuff about fish.</p>

  <h2 class="unimportant">Fish like to play golf</h2>

  <p class="unimportant">Little-known fact: fish like to play golf. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

  <h2 class="unimportant">Fish are not mammals</h2>

  <p class="unimportant">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
</body>
</html>
```

Let's learn a new tag that will simplify all of this: the `<div>` tag.

<div class="filename">fish.html</div>

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <link href="css/styles.css" rel="stylesheet" type="text/css">
  <title>Everything about fish</title>
</head>
<body>
  <h1>Everything about fish</h1>

  <p>Here is everything you need to know about fish. First, the important stuff:</p>

  <div class="important">
    <h2>Types of fish</h2>

    <p>There are many types of fish. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    <p>Here are some types of fish:</p>

    <ul>
      <li>Goldfish</li>
      <li>Catfish</li>
      <li>And lots, lots more!</li>
    </uL>

    <h2>Other important stuff</h2>

    <p>Here is some other really important stuff about fish. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  </div>

  <p>Now, for some less important stuff about fish.</p>

  <div class="unimportant">
    <h2>Fish like to play golf</h2>

    <p>Little-known fact: fish like to play golf. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

    <h2>Fish are not mammals</h2>

    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  </div>
</body>
</html>
```

Then, we can style entire areas of the page using selectors for `.important` and `.unimportant`, for example:

<div class="filename">styles.css</div>

```css
.important {
  color: red;
}

.unimportant {
  color: blue;
}
```

The `<div>` tag does nothing on its own: it's just a place to add a class that is then applied to everything that is nested within it. It's *very* common to apply styles by using `<div>` tags to separate the content of your pages. Typically, in your CSS, you won't even explicitly label a selector as being for a `<div>`; in other words, you'd write `.important`, rather than `div.important`.

Remember my little lecture about how good code is code that is easy to change? We just made our code easier to change: if we want to change the class name, we only have to change one `<div>` instead of all of the elements that are now nested inside of it. Nice!

For inline elements, there's a similar tag called `<span>`:

<div class="filename">fish.html</div>

```html
<p>There are many types of <span class="highlight">fish</span>. For example, there are <span class="fish-type">red</span> fish, <span class="fish-type">green</span> fish, <span class="fish-type">one</span> fish, and <span class="fish-type">two</span> fish. There are also <span class="highlight">more types of fish than you could possibly imagine</span>.</p>
```

And we can style these inline elements with `.highlight` and `.fish-type`.

At first, it might be a little confusing to know when to use a `div` versus a `span`. Let's look at a quick example. The following code uses both a `div` and a `span`:

```html

<div class="important">
  All of the code within the div class "important" will be <span class="highlight">red</span>. Note how the span here is inline because it targets only one word? We can use spans to target text that is less than one line (inline) while we'd use divs to target text that is more than one line (multiline).
</div>
```

As noted in the code, we'd use a div for text that covers multiple lines of text while we'd use a span for text that covers less than a line of code.

We won't be using spans very often but it's still important to know about them. On the other hand, we'll be using divs all the time.
