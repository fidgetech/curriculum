---
title: "📓 1.1.3.5 Using Floats"
day: wednesday
id: 1-1-3-5-using-floats
hide_table_of_contents: true
---

So far, everything we've done has been laid out very simply, from top to bottom for block elements, and left to right for inline ones. But often we'll want to have text wrap around an image, or have a sidebar on one side, or create a page with multiple columns. We can design all of these layouts using **floats**.

## In this lesson
---

- How `float: left` and `float: right` make text wrap around images
- Using floats to create sidebars and multi-column layouts
- When floats are a useful layout tool (and when they cause headaches)

> **AI Support:** Confused about why floats change your layout? After reading this lesson, you can ask AI for a plain-language explanation or analogy. Do **not** ask AI to write pages or complete exercises for you.
>
> **Example prompts:**
> - Weak: "Fix my float layout."
> - Strong: "My sidebar isn't sitting where I expected after adding `float: right`. Can you explain 2–3 things I should check in DevTools—without writing the CSS fix for me?"
>
> Before asking, check: [Do I have the license for this?](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech#activity-2-do-you-have-the-license-for-this) See [Using AI Responsibly at Fidgetech](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech) and [How to Ask for Help](../../pre-work/getting-started-at-fidgetech/1-0-0-07-how-to-ask-for-help).

Here's an example of how to have text wrap around an image. First, the HTML for a new page about walruses:

<div class="filename">walrus.html</div>

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <link href="css/styles.css" rel="stylesheet" type="text/css">
  <title>The Walrus: a strange and noble creature</title>
</head>
<body>
  <img src="img/walrus.jpg" alt="A walrus basking on a rock.">
  <p>The walrus is truly a majestic animal. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
</body>
</html>
```

And then the CSS rule:

<div class="filename">styles.css</div>

```css
img {
  float: left;
}
```

Check it out: the image "floats" to the left, and the text wraps around it. If your web browser isn't wide enough that the text extends below the bottom of the image, resize the window so that you can see how the text flows at the bottom of the page.

You can also make the image float to the right as well. And if you'd like only certain images to float, you can just add a class to those images and only float images with that class.

Now let's use floats to create a sidebar:

<div class="filename">walrus.html</div>

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <link href="css/styles.css" rel="stylesheet" type="text/css">
  <title>The Walrus: a strange and noble creature</title>
</head>
<body>
  <h1>All about walruses</h1>
  <div class="sidebar">
    <h2>IRL</h2>
    <p>Want to see walruses in real life? Here are some places to check out:</p>
    <ul>
      <li>The beach</li>
      <li>The ocean</li>
      <li>The bay</li>
      <li>Rocks</li>
    </ul>
  </div>

  <div class="main">
    <p>The walrus is truly a majestic animal. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  </div>
</body>
</html>
```

And the CSS:

<div class="filename">styles.css</div>

```css
.sidebar {
  width: 30%;
  float: right;
  background-color: yellow;
}
```

Are you starting to see how this works? Let's do one more thing with floats and create a column layout:

<div class="filename">columns.html</div>

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <link href="css/styles.css" rel="stylesheet" type="text/css" media="all">
  <title>Columns</title>
</head>
<body>
  <h1>Check out these columns</h1>
  <div class="column">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  </div>

  <div class="column">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  </div>

  <div class="column">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  </div>
</body>
</html>
```

CSS:

<div class="filename">styles.css</div>

```css
.column {
  width: 300px;
  float: left;
}
```

And now we have columns.

> **Try asking AI:** "Can you explain what `float: left` does to an element and the content around it—in plain language, without writing CSS for me?"
>
> After reading AI's response, explain the concept back in your own words before moving on.

Floats are incredibly powerful and an important way to lay out your web pages.

## Checkpoint
---

Before moving on, you should be able to:

- [ ] Use `float: left` or `float: right` to wrap text around an image
- [ ] Create a sidebar layout using floats
- [ ] Create a multi-column layout using floats

If you're unsure, re-read the section above or ask AI: "My sidebar isn't sitting where I expected after adding `float: right`. Can you explain 2–3 things I should check—without writing the CSS fix for me?"
