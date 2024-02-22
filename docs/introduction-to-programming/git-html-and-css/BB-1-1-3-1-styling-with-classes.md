---
title: "📓 1.1.3.1 Styling with Classes"
day: wednesday
---

Let's make a new page with two types of paragraphs: regular paragraphs, and a summary at the top of the page:

<div class="filename">paragraphs.html</div>

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <link href="css/styles.css" rel="stylesheet" type="text/css">
  <title>Paragraphs!</title>
</head>
<body>
  <h1>Paragraphs of text</h1>
  <h2>Plus an intro at the top!</h2>

  <p>Here is an intro. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

  <p>And here is the full version. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

  <p>Here is a bit more stuff. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>

  <p>And, this is the end. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  <p>Here is a bit about the author at the end. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
</body>
</html>
```

The dummy text I put in here is called **lorem Ipsum** text. It looks like Latin but is actually just a bunch of fake words. Lorem ipsum text is often used as a placeholder when doing design; you can search online for _lorem ipsum_ and find many websites where you can copy the text.

This page is nice, but I'd like for the top paragraph to look more like an intro. I want it to be italicized, and to be skinnier than the other paragraphs. Here's how we do that without changing the other paragraphs. First, we add a class to the `<p>` tag just for that paragraph:

<div class="filename">paragraphs.html</div>

```html
<p class="intro">Here is an intro. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
```

Then, we make a CSS rule for `<p>` tags with the `intro` class:

<div class="filename">styles.css</div>

```css
p.intro {
  width: 50%;
  font-style: italic;
}
```

And now our intro paragraph has a width of only 50% and is italicized, while the rest of the paragraphs stay the same.

Similarly, we might make a class for the final paragraph about the author:

<div class="filename">paragraphs.html</div>

```html
<p class="author">Here is a bit about the author at the end. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
```

And style it like this:

<div class="filename">styles.css</div>

```css
p.author {
  width: 75%;
  font-style: italic;
  font-weight: bold;
}
```

You can also apply a class to multiple tags. Here's another example of a web page that shows you how:

<div class="filename">fido.html</div>

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <link href="css/styles.css" rel="stylesheet" type="text/css" media="all">
  <title>How to take care of Fido</title>
</head>
<body>
  <h1>Instructions for Fido's babysitter</h1>

  <p>Thanks so much for watching Fido this weekend! Here's everything you need to know while I'm gone.</p>

  <p>Here's a bit of history about Fido. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

  <p class="important">Fido is alergic to a lot of foods. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  <p>Fido likes to play. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

  <p>Here are a list of things that you should do with Fido every day:</p>

  <ul class="important">
    <li>Walk him</li>
    <li>Feed him</li>
    <li>Pet him</li>
  </ul>

  <p>If you have any questions while I'm out of town, I <strong class="important">won't have cell service</strong>, but you can <a href="mailto:michael@epicodus.com" class="important">email me</a> if you need anything.</p>

  <p>Thanks again!</p>
</body>
</html>
```

Here we've added the `important` class to a paragraph, an unordered list, and a `<strong>` tag. Now, we can style everything with the `important` class like this:

<div class="filename">fido-styles.css</div>

```css
.important {
  color: red;
}
```

Also, check out how I linked to an email address in my HTML using the syntax `<a href="mailto:michael@epicodus.com">`.
