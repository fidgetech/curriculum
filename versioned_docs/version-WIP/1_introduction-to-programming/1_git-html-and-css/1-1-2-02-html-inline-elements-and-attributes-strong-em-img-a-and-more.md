---
title: "📓 1.1.2.2 HTML Inline Elements and Attributes: <strong>, <em>, <img>, <a>, and More"
day: tuesday
id: 1-1-2-2-html-inline-elements-and-attributes-strong-em-img-a-and-more
hide_table_of_contents: true
---

All of the tags we learned about in the previous lessons are block elements, meaning that each element is displayed on a new line. In this lesson, we are going to look at elements that do not appear on their own line but share a line with other elements.  These are called **inline elements**. 

We'll also learn about HTML **attributes** that we add to HTML elements to provide more information about them. Sometimes attributes are required for an HTML element to work properly, and other times they are optional.

## In this lesson
---

- The difference between block and inline elements
- How to use `<strong>`, `<em>`, `<a>`, and `<img>` tags
- What HTML attributes are and how `href` and `src` work
- How to link between pages in the same project using relative paths

> **AI Support:** Stuck on link, image, or attribute syntax? After reading this lesson, you can ask AI to explain how an attribute works in plain language. Do **not** ask AI to write HTML pages or complete exercises for you.
>
> **Example prompts:**
> - Weak: "Fix my HTML link."
> - Strong: "What's the difference between the `href` attribute on an `<a>` tag and the `src` attribute on an `<img>` tag? Can you explain with a simple analogy—without writing HTML for me?"
>
> Before asking AI, check: [Do I have the license for this?](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech#activity-2-do-you-have-the-license-for-this) See [Using AI Responsibly at Fidgetech](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech) and [How to Ask for Help](../../pre-work/getting-started-at-fidgetech/1-0-0-07-how-to-ask-for-help).

## HTML Inline Elements and Attributes

---

### `<strong>` and `<em>` Tags

We're going to modify our first webpage to include an **inline element**:

<div class="filename">my-first-webpage.html</div>

```html
<p>This is my <strong>first web page</strong>!</p>
```

The `<strong>` tag indicates that something is important. By default, it will make the text inside it bold (although we'll learn how to customize this soon). If we want to *emphasize* something, we'll use the `<em>` tag, which will italicize it:

<div class="filename">my-first-webpage.html</div>

```html
<h2>Written with the guidance of <em>Fidgetech</em></h2>
```

### `<a>` Tags

Now, let's learn about perhaps the most important HTML tag of them all:

<div class="filename">my-first-webpage.html</div>

```html
<p>Check out <a href="https://fidgetechcode.org/">Fidgetech</a>. It's a great school for learning web programming!</p>
```

The `<a>` is an **anchor tag** and it creates a link. The `href` (for *hypertext reference*) is an **attribute** for the anchor tag that provides the web address the link will go to. In the example above, we've linked to a website outside of our project.

### HTML Attributes 

All HTML tags can have one or more attributes. An **attribute** provides additional information about an HTML element. Sometimes attributes are required for an HTML element to work properly, and other times they are optional.

Let's review the anchor tag example we just learned about. In this anchor:

```html
<a href="https://fidgetechcode.org/">Fidgetech</a>
```

* `<a>` is opening tag for the anchor tag (the HTML element).
* `</a>` is closing tag for the anchor tag (the HTML element).
* `Fidgetech` is the content of the anchor tag (the link's text, displayed to the user).
* `href` is the attribute.
* `https://fidgetechcode.org/` is the value of the `href` attribute. The value of an HTML attribute is surrounded in quotes.

**Take note:** attributes are always added to the opening tag, and never to the closing tag

### Using an Anchor to Link to Other HTML Files Within the Same Project 

Our `my-first-webpage` project contains two HTML documents. Here's how we can link from one to another:

<div class="filename">my-first-webpage.html</div>

```html
<p>Here is a link to my <a href="favorite-things.html">favorite things</a>.</p>
```

Instead of supplying a full path, we've provided a **relative path**. If a link doesn't start with `http://` (or `https://`, or a few other specific protocols you may come across), your web browser will look in the same folder for the file you're linking to.

This brings up a pitfall you should be careful to avoid: if you write a link like `<a href="fidgetechcode.org">link</a>`, it will look for a file called `fidgetechcode.org` in the current directory. So if you're linking to another website, don't forget to put `http://` in front!

> **Try asking AI:** "What's the difference between a relative path like `favorite-things.html` and an absolute URL like `https://fidgetechcode.org/`? Can you explain when to use each—without writing links for me?"
>
> After reading AI's response, explain the concept back in your own words before moving on.

### `<img>` Tags

Finally, let's make our webpage a bit prettier and include an image. Save an image in the same folder as your HTML files and then include it like this:

<div class="filename">my-first-webpage.html</div>

```html
<img src="kitten.jpeg" alt="A photo of a cute kitten.">
```

The `<img>` tag is different from the other tags we've used in that it is **self-closing**: you don't need a closing tag. 

The `src` attribute tells our webpage to look for a file named `kitten.jpeg` in our current directory as the source of the image element.

Also notice the `alt` attribute. If the browser can't render the image, it will display the value of the `alt` attribute, which in this case is "A photo of a cute kitten". This attribute is optional, but it's a really good idea to include it, so that blind people using software that reads web pages to them can know what the image is.

Typically, webpages will store their images in a separate folder from their HTML. Let's create a folder called `img` and put the image file in there. Pick any image from the internet to practice this, saving the image to your project's `img` folder. Now, we need to update our code to tell the browser where to find the image:

<div class="filename">my-first-webpage.html</div>

```html
<img src="img/kitten.jpeg" alt="A photo of a cute kitten.">
```

The `src` attribute with the value `img/kitten.jpeg` tells the browser to look in the `img` folder in the current directory and then look for the `kitten.jpeg` file.

### Update `favorite-things.html`

Let's update the page of favorite things to include some of the concepts we just learned about:

<div class="filename">favorite-things.html</div>

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <title>Michael's favorite things</title>
</head>
<body>
  <h1>My favorite things</h1>
  <h2>These are a few of my favorite things.</h2>

  <h3>People</h3>
  <p>Here are some of my favorite <em>people</em>!</p>
  <ul>
    <li>
      <a href="http://www.example.com/christopher.html">
        My brother <strong>Christopher</strong>
        <img src="img/christopher.jpeg" alt="A photo of Christopher.">
      </a>
    </li>
    <li>
      My mom and dad:
      <ul>
        <li>
          <a href="http://www.example.com/steve.html">
            <strong>Steve</strong>
            <img src="img/steve.jpeg" alt="A photo of Steve.">
          </a>
        </li>
        <li>
          <a href="http://www.example.com/carol.html">
            <strong>Carol</strong>
            <img src="img/carol.jpeg" alt="A photo of Carol.">
          </a>
        </li>
      </ul>
    </li>
    <li>
      <a href="http://www.example.com/jessica.html">
        My friend <strong>Jessica</strong>
        <img src="img/jessica.jpeg" alt="A photo of Jessica.">
      </a>
    </li>
    <li>
      <a href="http://www.example.com/candy.html">
        My friend <strong>Candy</strong>
        <img src="img/candy.jpeg" alt="A photo of Candy.">
      </a>
    </li>
  </ul>

  <p>Thanks for reading about me!</p>
</body>
</html>
```

Make sure to commit and push to your remote GitHub repository after updating. Check that your GitHub repository shows the changes.

## Checkpoint
---

Before moving on, you should be able to:

- [ ] Explain the difference between block and inline elements
- [ ] Use `<a>` tags with `href` to link to external sites and local HTML files
- [ ] Use `<img>` tags with `src` and `alt` attributes
- [ ] Describe what an HTML attribute is and where it belongs in a tag

If you're unsure, re-read the section above or ask AI: "What's the difference between the `href` attribute on an `<a>` tag and the `src` attribute on an `<img>` tag? Can you explain with a simple analogy—without writing HTML for me?"
