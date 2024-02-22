---
title: "📓 1.1.4.9 Customizing Styles with Bootstrap"
day: thursday
---

We will often be using Bootstrap to style your pages. The Bootstrap website documents in detail how to use all of the styles it provides. Just take the time to read through the documentation and refer back to it when needed.

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
