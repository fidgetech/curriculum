---
title: "📓 3.4.1.3 React Router"
day: monday
id: 3-4-1-3-react-router
hide_table_of_contents: true
---

In this lesson, we'll incorporate the React Router library and create a "separate" sign-in page that uses client-side routing. In the next lesson, we'll actually incorporate Firebase authentication.

[React Router](https://reactrouter.com/) is an external library that makes routing much easier in React applications. It provides a number of tools that will make it easy for us to add client-side routing. In this lesson, we'll learn about the following:

* A router component called `<BrowserRouter>`. We'll add this to our root component (`<App>`). It will give us access to other pieces of React Router functionality.
* A component called `<Routes>`. Whenever we want to delineate between multiple routes, we will wrap a `<Routes>` component around them.
* A `<Route>` component that defines the component the application should route to as well as the path that the route corresponds to.
* Finally, a `<Link>` component will provide actual links to client-side routes in our application.

We will just cover this part of React Router's functionality in this lesson, but we recommend checking out the excellent [React Router documentation](https://reactrouter.com/home) as well.

We'll start by adding a `SignIn` component with placeholder text:

```tsx title="src/components/SignIn.tsx"
function SignIn() {
  return (
    <h1>Sign In</h1>
  );
}

export default SignIn;
```

Eventually, this component will use Firebase authentication. For now, though, we are just focused on setting up a router that will route between our application and the `SignIn` component.

Notice that there's no props type here. `SignIn` doesn't accept any props, so there's nothing to describe yet. We'll keep it that way: the component will get its data from Firebase directly rather than from a parent.

## Adding a Router
---

Next, we need to make some changes to our `App` component. Because it's the root level component, it's the best place to put our router so that the rest of our application has access to its functionality. Also, we'll want to route between the `SignIn` component and the `TicketControl` component anyway, so most of our router functionality will be in `App`, which is just above `TicketControl` in our component tree.

First, we'll install React Router:

```bash
npm install react-router-dom@6
```

:::note
We don't need to install a separate `@types/` package here. React Router ships its own TypeScript definitions, so everything we import from it is already typed. This is worth checking whenever you add a library to a TypeScript project: many modern libraries include their types, and the ones that don't usually have a community-maintained `@types/` package on npm.
:::

In addition to importing our placeholder `SignIn` component, we also add the following import:

```tsx title="src/components/App.tsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
```

Notice the `as` syntax in `BrowserRouter as Router`. This just makes the naming a little shorter: we can call the component `<Router>` instead of `<BrowserRouter>`. We don't import the `<Link>` component here because we won't actually have links in this component.

Here's our updated `App` component:

```tsx title="src/components/App.tsx"
import Header from "./Header";
import TicketControl from "./TicketControl";
// highlight-start
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// highlight-end

function App() {
  return (
    {/* highlight-next-line */}
    <Router>
      <Header />
      {/* highlight-start */}
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<TicketControl />} />
      </Routes>
      {/* highlight-end */}
    {/* highlight-next-line */}
    </Router>
  );
}

export default App;
```

Next, we wrap all the content in our return statement inside a `<Router>` component. Now all of `App`'s children will have this functionality as well. Note that because `<Router>` is now the single root element of what we return, we no longer need the fragment (`<>` and `</>`) that used to wrap `App`'s JSX.

Our `Header` component should show regardless of which route we're on, so it comes next, outside of the `<Routes>` component where our application's routing will be determined.

Think of the `<Routes>` component as being like a conditional: it will render only one of the routes contained inside it. (It's also possible that a route won't be rendered at all if no URL matches it.) If we don't include the `<Routes>` component, multiple routes could be rendered. Sometimes we might actually want that, but in the case of our application, we only want the sign in page _or_ the queue to be rendered.

Next, we need to determine our actual routes using `<Route>` components. Let's look more closely at the code contained in our `<Route>` components:

```tsx title="src/components/App.tsx"
<Route path="/sign-in" element={<SignIn />} />
<Route path="/" element={<TicketControl />} />
```

We always need to specify the route's `path`; otherwise, how will we ever be able to route to it via a URL? The `path` should _always_ begin with a `/` (just like an actual path in a URL). Otherwise, there will be errors. The name of the path doesn't need to match the name of the component, though for clarity and naming purposes, it often will.

For each `<Route>` component that we create, we need to pass in an `element` prop that's set to the component that we want rendered for the corresponding path. This completes the functionality of the `<Route>` component: when the `<Route>`'s path matches the URL, its `element` will be rendered.

:::tip[What TypeScript does and doesn't check here]
The `element` prop is typed as a React element, so passing something that isn't a component (`element={SignIn}` without the angle brackets, for instance) is an error your editor will catch right away.

The `path` prop, on the other hand, is just a `string`. TypeScript has no way of knowing that `/sign-in` is a route your application actually defines, so a typo in a `path` or in a `<Link>`'s `to` is not a compile error. It's a runtime problem you'll see in the browser instead, which is worth remembering the first time a link seems to do nothing.
:::

We can now run our application and navigate to our sign in route manually by typing in `localhost:5173/sign-in`.

However, we don't want our users to have to type in the path manually each time they want to go to the sign in page. The next step is to add links in our header that will allow users to navigate between different routes.

## Adding Links to Routes
---

Many applications have a navbar at the top of the page with links to various parts of the site. This navbar will show regardless of which page we're on. We already have a `Header` component that renders at the top of our site regardless of the page's content. At this point, it displays our heading and the image we added earlier. Let's update this component to be more useful:

```tsx title="src/components/Header.tsx"
import ticketsImage from "./../assets/tickets.png";
// highlight-next-line
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Help Queue</h1>
      <img src={ticketsImage} alt="A stack of tickets"/>
      {/* highlight-start */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
      </ul>
      {/* highlight-end */}
    </header>
  );
}

export default Header;
```

Notice that we've dropped the inline `headerStyles` object from `Header`. Its dark background made the browser's default link text hard to read, and restyling links is a CSS problem rather than a React Router one, so it's outside the scope of this lesson. Feel free to restyle your header on your own once you're done here.

First, we need to `import { Link } from "react-router-dom";`. This feature provides a `<Link>` component which we can use to create links to routes in our sites. React Router will automatically render these as `href`s on the page.

The syntax looks like this:

```tsx
<Link to="/sign-in">Sign In</Link>
```

In the example above, the `to` property **must** match the route we specified in the `<Route>` component for our `SignIn` component:

```tsx
<Route path="/sign-in" element={<SignIn />} />
```

Fortunately, if there's a typo, it's quick to troubleshoot. If a route isn't rendering as expected in the browser, start by double-checking the browser's URL.

At this point, we can run our application and then click on the links in the header to toggle between the Help Queue and the sign in page.

We're now ready to add authentication to our application!

For more information on using React Router, check out the [React Router documentation](https://reactrouter.com/home).
