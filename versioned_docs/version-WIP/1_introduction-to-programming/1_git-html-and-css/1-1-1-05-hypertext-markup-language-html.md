---
title: "📓 1.1.1.5 Hypertext Markup Language (HTML)"
day: monday
id: 1-1-1-5-hypertext-markup-language-html
hide_table_of_contents: true
---

We've already had a bit of a taste of a basic HTML file with our Hello World and Goodbye web pages.  Now, we're going to focus on the basics of HyperText Markup Language or HTML that we previously just cut and paste into our pages.

## In this lesson
---

- What HTML is and why we use angle brackets to mark up text
- The basic structure of every HTML document (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`)
- How tags and elements differ, and how HTML renders in the browser

> **AI Support:** Unfamiliar with HTML element or tag names? After reading this lesson, you can ask AI for a plain-language explanation or analogy. You **can** ask AI to explain HTML vocabulary and document structure. Do **not** ask AI to write pages or complete exercises for you.
>
> **Example prompts:**
> - Weak: "Fix my HTML."
> - Strong: "What's the difference between `<head>` and `<body>`? Can you explain with a simple analogy—without writing a full page for me?"
>
> Before asking, check: [Do I have the license for this?](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech#activity-2-do-you-have-the-license-for-this) See [Using AI Responsibly at Fidgetech](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech) and [How to Ask for Help](../../pre-work/getting-started-at-fidgetech/1-0-0-07-how-to-ask-for-help).

It looked a bit like this in our text editor:

<div class="filename">example.html</div>

```html
<h1>HTML lesson</h1>
<h2>For Fidgetech</h2>

<p>The goal for this lesson is to show how simple HTML is to read and write by displaying a text written in HTML and what it looks like when it is displayed in a browser.</p>
```

And like this in our browser:

><h1>HTML lesson</h1>
><h2>For Fidgetech</h2>
>
><p>The goal for this lesson is to show how simple HTML is to read and write by displaying a text written in HTML and what it looks like when it is rendered in a browser.</p>

**HyperText**, the "HT" of HTML is a nerdy word for a link.  The "ML" of HTML stands for **markup language**.  As we can see in the example above, the text in the HTML  file is normal text that is _marked up_ with instructions written inside of these `<>`, known as **angle brackets**.  The actual language of HTML is all of those instructions that we wrap around the text to format it and as we'll see, many other instructions for things like images, links, videos and more.

Before we start writing our first HTML, let's look at the basic structure of an HTML document:

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <title>Basic template for an HTML page</title>
  <script src="js/scripts.js"></script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

</body>
</html>
```

* We'll always begin with `<!DOCTYPE html>`. This is the Document Type Declaration. This tells the browser (such as Chrome) what kind of document this is so it can easily translate it.
* Next, we'll always have `<html>`, which encloses the document's HTML. We can specify a language type as we do above to make it easier for screen readers (for the vision-impaired) to read and for browsers to translate.
* The `<head>` contains important information about the document. The title is what shows up in the tab at the top of your browser. This is also where we add tags to link stylesheets and JavaScript code. We won't link to external files just yet — but we will do so later in this section.
* Finally, the `<body>` is where our HTML code will go — such as the `<h1>` and `<h2>` headings we just discussed.

> **Try asking AI:** "Can you explain what `<!DOCTYPE html>` tells the browser, and why `<head>` and `<body>` are separate—in plain language?"
>
> After reading AI's response, explain the HTML document structure back in your own words before moving on.

Before we move on, let's also discuss briefly discuss the difference between **tags** and **elements**. We'll do so by looking at the following example:

```html
<title>Basic template for an HTML page</title>
```

An element is enclosed in tags. In this example, `<title>` is an opening tag while `</title>` is a closing tag. The element is the part inside of the tag: `Basic template for an HTML page`.

Mozilla's [Element](https://developer.mozilla.org/en-US/docs/Glossary/Element) entry summarizes what an element is very nicely.

We'll actually cover elements and tags again in just a few lessons.

This is just a basic primer, so don't worry if it's not all clear yet. We'll be working with HTML a lot over the coming sections and it will soon be second nature to work with.

Now let's start writing our first HTML!

## Checkpoint
---

Before moving on, you should be able to:

- [ ] Describe what a markup language is and what angle brackets do
- [ ] Identify `<head>` vs `<body>` in a basic HTML template
- [ ] Explain the difference between a tag and an element

If you're unsure, re-read the sections above or ask AI: "What's the difference between `<head>` and `<body>`? Can you explain with a simple analogy—without writing a full page for me?"
