---
title: "📓 1.1.1.9 HTML Block Elements Part 2"
id: 1119-html-block-elements-part-2
hide_table_of_contents: true
day: monday
---

Now let's create a second web page using HTML block elements in our `my-first-webpage` project.  We'll have two web pages in our directory.  The new page will list a few of our favorite things.

When we want to add a file to a project directory, we need to make sure we are in the correct directory.  For this new page, we'll use `$ pwd` to ensure that we are in `my-first-webpage`.  If not, we'll navigate to the correct folder and then add a new html file called `favorite-things.html`.  Once added, we'll open our project in our text editor so that we can add the content for our new page.

```shell
$ pwd
/Users/staff/Desktop/my-first-webpage
$ touch favorite-things.html
$ code .
```

Type the following HTML into `favorite-things.html`.  Resist the urge to cut and paste.  An often overlooked part of learning to code is developing the muscle memory of typing code which is different than typing regular text.  We need to learn the rhythm of indenting, spacing and moving around your code and that only evolves with the repetition of hands on keys.

As you type this file content, think through how each tag will impact the way the text will display in the browser.

<div class='filename'>favorite-things.html</div>

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
  <p>Here are some of my favorite people!</p>
  <ul>
    <li>My brother Christopher</li>
    <li>My mom and dad:
      <ul>
        <li>Steve</li>
        <li>Carol</li>
      </ul>
    </li>
    <li>My friend Jessica</li>
    <li>My friend Candy</li>
  </ul>

  <h3>Flavors of ice cream</h3>
  <p>These are my three favorites, in order:</p>
  <ol>
    <li>Pistachio</li>
    <li>Malted milk chocolate</li>
    <li>Black licorice (really!)</li>
  </ol>

  <p>Thanks for reading about me!</p>
</body>
</html>
```

Let's take a look!

After finish this and seeing it display as we expect it to, we'll make sure to commit our changes with Git and push the updated project to GitHub:

* `$ git add favorite-things.html`
*  `$ git commit -m "add web page with info on favorite things"`
* `$ git push [remote nickname] main` (replacing nickname with the same nickname you used when you added the remote link in the previous lesson)
* check on GitHub that your `my-first-webpage` repository now contains both `my-first-webpage.html` and `favorite-things.html`.
