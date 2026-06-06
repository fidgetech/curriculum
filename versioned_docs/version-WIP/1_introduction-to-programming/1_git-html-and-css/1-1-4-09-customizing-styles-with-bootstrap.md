---
title: "📓 1.1.4.9 Customizing Styles with Bootstrap"
day: thursday
id: 1-1-4-9-customizing-styles-with-bootstrap
hide_table_of_contents: true
---

We will often be using Bootstrap to style your pages. The Bootstrap website documents in detail how to use all of the styles it provides. Just take the time to read through the documentation and refer back to it when needed.

## In this lesson
---

- Why you should override Bootstrap with your own stylesheet—not edit Bootstrap files directly
- How stylesheet **load order** determines which CSS rules win
- How to link a custom `styles.css` after `bootstrap.css`

> **AI Support:** Styles not overriding Bootstrap the way you expect? You can ask AI to explain cascade and load order in plain language. Use AI to **understand how custom CSS interacts with Bootstrap**—not to generate full page layouts or complete exercises for you.
>
> **Example prompts:**
> - Weak: "Fix my Bootstrap styles."
> - Strong: "My custom `h1` styles aren't showing up even though I wrote them in `styles.css`. Can you explain how stylesheet order might affect this—without rewriting my CSS for me?"
>
> Before asking, check: [Do I have the license for this?](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech#activity-2-do-you-have-the-license-for-this) See [Using AI Responsibly at Fidgetech](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech) and [How to Ask for Help](../../pre-work/getting-started-at-fidgetech/1-0-0-07-how-to-ask-for-help).

Also, there are many themes available online for free. Bootstrap provides themes on their site [here](https://themes.getbootstrap.com/). There are also sites like [Start Bootstrap](https://startbootstrap.com/themes/) which provide free themes. Finally, check out the [examples](https://getbootstrap.com/docs/4.5/examples/) in the official documentation to get code for building simple, custom components — anything from a blog to a carousel.

It's common to start with a Bootstrap theme or stylesheet and then customize it further. To do this, we need to create our own stylesheet, which we can then use to override Bootstrap's styles. This is the right way to customize our styles. Don't ever go into a Bootstrap file and customize the code there. While it will technically "work" to do this, it's very bad practice to directly edit an external library.

Let's say we want to override Bootstrap styles with our own styles. Here's how we can do it. In the example below, we want the `<h1>` tags to be both bold and blue.

<div class="filename">bootstrap-playground.html</div>

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <link href="css/bootstrap.css" rel="stylesheet" type="text/css">
  <link href="css/styles.css" rel="stylesheet" type="text/css">
  <title>A bit of Bootstrap</title>
</head>
<body>
  <h1>A bit of Bootstrap</h1>
</body>
</html>
```

<div class="filename">styles.css</div>

```css
h1 {
  font-weight: bold;
  color: blue;
}
```

For this to work correctly, we must always link our custom stylesheet _below_ Bootstrap's stylesheet in the `<head>` tags of our HTML. Any time two stylesheets have rules about the same element (`<h1>` headings, in this case) the rules in the latter stylesheet will override the rules in the former.

> **Try asking AI:** "Why does linking my custom stylesheet after Bootstrap's make my overrides work?"
>
> After reading AI's response, explain the concept back in your own words before moving on.

This is because the stylesheet linked first is loaded first. Here, the first stylesheet (`bootstrap.css`) has instructions for `<h1>` elements to appear a certain way. When our second stylesheet is loaded, it also instructs the `<h1>` headings to appear a certain way. This second stylesheet's `<h1>` rule  overrides the `<h1>` styles from the first stylesheet simply because it's loaded last.

Let's temporarily switch the order of our stylesheets and see what happens.

<div class="filename">bootstrap-playground.html</div>

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <link href="css/styles.css" rel="stylesheet" type="text/css">
  <link href="css/bootstrap.css" rel="stylesheet" type="text/css">
  <title>A bit of Bootstrap</title>
</head>
<body>
  <h1>A bit of Bootstrap</h1>
</body>
</html>
```

If we refresh our page, the blue bolded text is gone. Even though our CSS rules are still present in `styles.css`, our custom styles are now loading first and Bootstrap's styles are loading second. Bootstrap styles are therefore overriding our custom styles so we don't see our bold blue text.

This is why we **always want to link our custom stylesheets after Bootstrap stylesheets.**

## Checkpoint
---

Before moving on, you should be able to:

- [ ] Link a custom stylesheet after Bootstrap in the correct order
- [ ] Explain why you should never edit Bootstrap's source files directly
- [ ] Describe what happens when stylesheet order is reversed

If you're unsure, re-read the section above or ask AI: "Can you explain why my custom CSS needs to load after Bootstrap's stylesheet—without writing my HTML for me?" 
