---
title: "📓 1.1.4.1 Cascading"
day: thursday
---

In this lesson, we'll dive a bit deeper into the **cascading** aspect of cascading style sheets (CSS). **Cascading** simply means that many rules can "cascade" down and apply to HTML elements. For instance, in past lessons, we defined a style for `<ul>`. This style was applied to the text that was inside of `<li>` tags. In other words, the style cascaded down from the parent element to the child element. This concept is also known as **inheritance** and it's a big part of computer programming. Since the `<li>` tags are nested within the `<ul>` tags, the `<li>` tags inherit the styles given to the `<ul>`s.

We can use inheritance to change the font for the entire web page like this:

```css
body {
  font-family: sans-serif;
}
```

Since everything else in the web page is nested within the `<body>` tag, all of the text for the page will be Sans Serif now.

You can also directly specify how certain child elements are styled. For example, let's say you have this HTML:

<div class="filename">digital-vs-analog.html</div>

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <link href="css/styles.css" rel="stylesheet" type="text/css">
  <title>Digital vs Analog</title>
</head>
<body>
  <h1>Digital vs Analog: The Showdown</h1>

  <p>Welcome to the ultimate face-off between digital and analog. May the best one win!</p>

  <div class="digital">
    <p>Here's the good stuff about digital. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    <p>Find out more about digital <a href="http://www.example.com/digital.html">here</a>.</p>
  </div>

  <div class="analog">
    <p>Here's the good stuff about analog. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <p>Find out more about analog <a href="http://www.example.com/analog.html">here</a>.</p>
  </div>

  <p>Now: YOU pick the winner!</p>
</body>
</html>
```

Here's how we can style the paragraphs for the digital and analog sections differently:

<div class="filename">styles.css</div>

```css
.digital p {
  background-color: red;
}

.analog p {
  background-color: yellow;
}
```

This will give a red background to paragraphs that are nested within a tag that has the `digital` class, and a yellow background to paragraphs that are nested within a tag that has the `analog` class.

Here's an example of nesting even farther down:

<div class="filename">styles.css</div>

```css
.digital p a {
  font-weight: bold;
}

.analog p a {
  font-style: italic;
}
```

You can nest as far down as you'd like.

Now, what if you have a couple rules like this:

<div class="filename">styles.css</div>

```css
.digital p a {
  font-weight: bold;
}

a {
  font-weight: normal;
}
```

In this case, the most specific wins: in this case, a link in a paragraph in an element with the `digital` class will be bold, not normal, because the `.digital p a` selector is more specific than the `a` selector. This is called **specificity**, and it's both very powerful and, when things get complicated, a pain in the butt.

Here's one more example of specificity:

<div class="filename">styles.css</div>

```css
h2 {
  font-size: 32px;
}

.countries h2 {
  font-style: italic;
}
```

Let's apply those rules to the following HTML:

<div class="filename">greenland-iceland.html</div>

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <link href="css/styles.css" rel="stylesheet" type="text/css" media="all">
  <title>How to tell apart Greenland and Iceland</title>
</head>
<body>
  <h1>How to tell apart Greenland and Iceland</h1>
  <h2>It's not easy, but I'll teach you how</h2>

  <p>If you're like me, you can never keep those two islands straight. But here's a foolproof trick so that you never embarrass yourself by mixing them up again.</p>

  <div class="countries">
    <h2>Greenland</h2>
    <p>Here's the thing about Greenland. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    <h2>Iceland</h2>
    <p>Here's the thing about Iceland. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>

  <p>You'll never be confused again!</p>
</body>
</html>
```

The `<h2>`s inside of the *countries* `<div>` will be italicized, but the `<h2>` outside will not.

There's one final, important principle to understanding cascading: if two rules have the same specificity, the last one wins — in other words, the one that's the farthest down in the CSS file takes precedence.

Occasionally, you'll run into HTML that looks like this:

<div class="filename">inline-style.html</div>

```html
<img style="float: left" src="cute-kitten.jpg">
```

Here, the style is embedded in the HTML. This is called an **inline style**, and it is very, very bad! You lose all of the power of CSS when you do this, as you now can't re-use your styles and centralize them in one place. Fortunately, this is becoming rare, but you still may run into it every once in a while. You just need to know that, if you see an inline style, it takes precedence over what's defined in your CSS.

There are some additional rules about which style takes precedence in more complicated situations, but that's beyond the scope of what I'm teaching here.
