---
title: "📓 Writing HTML"
day: weekend
---

In this lesson, we'll learn how to write HTML in Glitch.

## Writing HTML
---

**HTML** is the basic building block of the internet. HTML is used to display the basic content of every website you've ever visited.

Read the following code and type it into the _index.html_ file. The code that was there previously should be removed.

<div class="filename">index.html</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Epicodus Workshop Project</title>
  </head>
  <body>
    <h1>My Programming Goals</h1>
  </body>
</html>
```

We are using several different element types here. Each element has two **tags**: an opening tag and a closing tag. Here is an example: `<html>` and `</html>`. Tags are always enclosed in `<` and `>`. `<html>` is an opening tag. `</html>` is a closing tag. Closing tags always include a `/` after the `<`.

Here are the tags we are using in the code above:

- `<html>` tells the browser that everything within it is HTML.
- `<head>` includes important information about the webpage that will not be displayed. For now we are just including a `<title>`. We will cover other elements that go in `<head>` soon.
- `<body>` contains information that will be displayed to the user. Most of the code we add will go in the body.
- `<h1>` is a header tag. There are headers 1-6 and they correspond to different text sizes. You can try changing `<h1>` to `<h2>` and so on and see how the preview in the left-hand pane of Glitch changes.

If you make any errors in your HTML, Glitch will add a red dot to the left of the line where the error is. You can hover the cursor over the red dot to see what the error is. If you accidentally type `<body>` like `<<body>`, you'll get the following error: "Special characters can't be escaped."

![Here's an example of an error showing in Glitch.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/ucode-glitch-photos/brooke-ucode-glitch-update-5.20.21/glitch-images-MAY-2022/linter-error.jpg)

Even if an error message doesn't make sense yet, it can still provide useful information. The error message above doesn't help us much - it's happening because the **linter** reading our software is confused. A linter looks for errors in our code and points them out to us. In this case, the linter is still being helpful: it tells us exactly where the error is so we can fix it. We just need to remove the extra `<`.

### Expanding HTML

Let's add more elements to our HTML. Follow along and match your HTML to the following code snippet. We will focus on the code inside the `<body>` element. Each html document should only have **one** set of `body` tags - they should "wrap around" the rest of the html code that isn't inside the `head`.

<div class="filename">index.html</div>

```html
...
  <body>
    <h1>My Programming Goals</h1>
    <p>Every journey is easier if you <strong>know where you're going.</strong> <em>-unknown</em></p>
  </body>
...
```

- The `<p>` element is a paragraph. This is the basic text element used in HTML. It's used to display most basic text. Note how the `<strong>` and `<em>` tags inside the paragraph element have changed the styling in the right-hand pane of Glitch. `strong` tags add **bold** while `em` tags add _italics_.

Now let's use a new element to display an image on our page.

<div class="filename">index.html</div>

```html
...
  <body>
    <h1>My Programming Goals</h1>
    <p>Every journey is easier if you <strong>know where you're going.</strong> <em>-unknown</em></p>

    <img src="https://tinyurl.com/lfkubwe" />

  </body>
...
```

Here we've added an element called an `<img>`. We can use this image to link to an image. Note that there is no closing tag `</img>` present. Instead the `/` is located at the end of the element itself. This is called a self-closing element.

This element has additional information included as well. It has an **attribute** called `src`. This attribute defines the source of the image. In this case we're using a URL to show an image from the internet. You can replace this URL with another image by copying and pasting an image link inside the double quotation marks. You must always add quotation marks to an attribute. Any information about the attribute is included inside the quotation marks like the code example above.

### An HTML list

Let's create a list of goals below the image we're displaying. Add the following code below the `<img>` element:

<div class="filename">index.html</div>

```html
...
<h3>My Goals:</h3>
<p>
  I want to become a professional web developer. Here are the things I'll need to learn first.
</p>
<ul>
  <li>Learn HTML</li>
  <li>Learn CSS</li>
</ul>
...
```

- `<ul>` is an element that indicates we wish to display an un-ordered list. By default this means we'll display bullet points.
- `<li>` is a list item. When displayed within a list, they will be grouped together.

### Hyperlinks

Now let's add a link:

<div class="filename">index.html</div>

```html
...
<h3>My favorite website</h3>
<h4><a href="http://www.google.com">Google</a></h4>
...
```

Here we've used another set of header elements and a new element called an **anchor**. The anchor is defined with the `<a>` element. The anchor has an **attribute** just like an image. The `href` attribute is the hypertext reference. If a user clicks on the link, the `href` states the site where the user will end up.

If you try to open the link in the Glitch panel, it will throw an error. To actually visit the link, you need to do it in a new tab. You can right click your mouse and click "Open link in new tab".

Our basic site now has basic elements including a header, paragraph element, an image, a list, and a hyperlink. In the next lesson, we'll add styling with CSS.
