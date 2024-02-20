---
title: "\U0001F4D3 1.1.4.3 Classes and Ids"
id: 1143-classes-and-ids
slug: 1143-classes-and-ids
hide_table_of_contents: true
sidebar_position: 41
day: thursday
type: lesson
url: https://github.com/fidgetech/introduction-to-programming/blob/main/3k_class_vs_id.md
---

Before we go on let's briefly note the difference between assigning a **`class`** to an HTML tag and assigning an **`id`** to an HTML tag. For the remainder of this section you can ignore id's and continue using classes, but a brief explanation is in order as you are likely to find references to id's when reading resources online.

Both classes and ids can be targeted by CSS rules (classes with a `.` and id's with a `#` symbol). For example, both paragraph tags below are styled the same, though one is referenced by class and the other by id.

<div class="filename">index.html</div>

```html
<html lang="en-US">
<head>
  <link href="styles.css" rel="stylesheet" type="text/css" media="all">
  <title>Some Exciting Red Text</title>
</head>
<body>
  <p class="intro">This text will appear red.</p>
  <p id="line2">This text will also be red. </p>
</body>
</html>
```

<div class="filename">styles.css</div>

```css
.intro {
  color: red;
}

#line2 {
  color: red;
}
```

The important difference is that **ids are unique**, while **classes are not unique**. We can use the same class on multiple elements, while id's must be unique to a single element on the page. Id's may appear to work even when duplicated on the same page, but duplicate id's will lead to inconsistent behavior and difficult-to-find bugs.

If in doubt, use a class.
