---
title: "📓 1.1.4.3 Classes and Ids"
day: thursday
id: 1-1-4-3-classes-and-ids
hide_table_of_contents: true
---

Before we go on let's briefly note the difference between assigning a **`class`** to an HTML tag and assigning an **`id`** to an HTML tag. For the remainder of this section you can ignore id's and continue using classes, but a brief explanation is in order as you are likely to find references to id's when reading resources online.

## In this lesson
---

- The difference between a CSS **class** (`.`) and an **id** (`#`)
- Why classes can be reused but ids must be unique on a page
- When to reach for a class instead of an id

> **AI Support:** Confused about classes vs ids? You can ask AI for a plain-language explanation or analogy. Use AI to **clarify CSS selector types**—not to write your HTML or CSS for you.
>
> **Example prompts:**
> - Weak: "What's the difference between class and id?"
> - Strong: "Can you explain why Bootstrap uses classes like `container` on many elements, but ids should only appear once on a page—without writing code for me?"
>
> Before asking, check: [Do I have the license for this?](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech#activity-2-do-you-have-the-license-for-this) See [Using AI Responsibly at Fidgetech](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech) and [How to Ask for Help](../../pre-work/getting-started-at-fidgetech/1-0-0-07-how-to-ask-for-help).

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

> **Try asking AI:** "When would I use a class instead of an id on an HTML element?"
>
> After reading AI's response, explain the concept back in your own words before moving on.

## Checkpoint
---

Before moving on, you should be able to:

- [ ] Target a class with `.` and an id with `#` in CSS
- [ ] Explain why ids must be unique on a page
- [ ] Choose a class over an id when either would work

If you're unsure, re-read the section above or ask AI: "Can you explain the difference between a CSS class and an id with a simple example—without writing my stylesheet for me?"
