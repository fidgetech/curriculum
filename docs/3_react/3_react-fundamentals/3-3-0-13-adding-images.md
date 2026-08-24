---
title: "📓 3.3.0.13 Adding Images"
day: weekend
id: 3-3-0-13-adding-images
hide_table_of_contents: true
---

In this lesson, we'll cover adding static assets such as images to a React application. You aren't required to add images for any independent projects. However, we might want to make an application look nicer with images and other graphics, especially any applications that we plan to include in our portfolio.

In general, adding images to a React application is pretty easy. However, there are a few important gotchas which we'll cover in this lesson.

Let's add an image to our Help Queue. We can pick an image of our choice or simply follow along with this lesson later when we plan to add images to an application.

We'll add a picture of tickets to our application as the image below shows:

![Header component has a tickets image.](/images/React/Week-1-React-2019/tickets.png)

It's not a stylistically impressive site, but it'll do for learning purposes.

If we're already familiar with some backend web frameworks, we might be tempted to place image files in the `public` directory. In Vite, the `public` directory works fine and isn't blocked, but for most images used inside components there's a better option. When we import an image from `src`, Vite processes and bundles that asset for us. Files placed in `public` are served as-is and skip that processing.

Processing our assets through `src` gives us a couple of important benefits. First, Vite bundles our assets and gives them content-hashed filenames. That hashing enables cache busting, so that when we deploy a new version of an image, browsers reliably load the updated file instead of a stale cached copy.

There's another big benefit to storing files such as images in the `src` directory. Let's say we use the `public` directory for an image but that image is missing. We'll just get a broken image link in our application. It's really easy to miss a broken image or another missing file because our application won't throw any errors. We likely won't notice unless we look at the application in the browser. However, when these files are stored in `src` and loaded with `import` statements, a missing file will throw a build error so we can fix it immediately.

So instead of using the `public` directory, we'll save our images in the `src/assets` directory. This is the conventional location for images and other static assets in a Vite project. We already have this directory from when we set up our project with Vite: we cleared out the template's demo images, but we kept the folder.

To follow along with this lesson, save an image of your choice to `src/assets/`. You can right-click the tickets image above and save it, use your own image, or find one online. A couple of things to keep in mind:

- **Rename the file if needed.** Browsers sometimes append extra characters to a filename when saving. Make sure the filename is what you expect - we'll use `tickets.png` in the code below, so either name your file `tickets.png` or update the import path to match whatever you named it.
- **The import path must match the filename exactly**, including capitalization.

Next, let's consider where we want to render this image. We should apply the same best practices to rendering images as we do to rendering other code. In this case, we'll make it part of our header and put it in `Header.tsx`.

Next, we need to import the file just as we'd import any other component. Here's how we can add it to `Header.tsx`:

```tsx title="src/components/Header.tsx"
import ticketsImage from "./../assets/tickets.png";

function Header() {
  const headerStyles = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '1rem'
  };

  return (
    <header style={headerStyles}>
      <h1>Help Queue</h1>
      <img src={ticketsImage} alt="A stack of tickets"/>
    </header>
  );
}

export default Header;
```

Just as with other default imports, we can call the thing we are importing whatever we want. As always, we should be very clear on the name. We've called this `ticketsImage`. We could just call it `tickets`, though that might get confusing later with all of our similarly named components.

Next, we need a standard `<img>` tag. This has all of the attributes of a typical HTML `<img>` tag, and as always, we should add an `alt` attribute to make our site more accessible to users with disabilities. The key difference is that we use curly braces to render our image inside the `src` attribute.

And that's all there is to adding an image to a site! Just make sure you follow the best practices outlined in this lesson and save your images in the `src/assets` directory. For more information on working with static assets in Vite, see [Static Asset Handling](https://vite.dev/guide/assets).
