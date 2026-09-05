---
title: "📓 3.5.0.9 Help Queue: Creating a Context and Provider"
day: weekend
id: 3-5-0-9-help-queue-creating-a-context-and-provider
hide_table_of_contents: true
---

With our Help Queue project set up and our updates planned, we're ready to implement context. In this lesson, we'll do four things:

* Create a context for our light and dark theme.
* Learn about context providers and consumers.
* Create a context provider.
* Implement a state management tool to change the value of the context.

## Implementing Context
---

Let's create a context for our theme. Start by creating a new folder called `context` within the `src` folder, and within that a file called `theme-context.ts`.

Notice the extension: `.ts`, not `.tsx`. This file holds a type, a plain object, and a context object, but no JSX, so it doesn't need the `x`.

Within `theme-context.ts`, we'll add the style object that we created in the last lesson along with some new code:

```ts title="src/context/theme-context.ts"
import { createContext } from 'react';

export type Theme = {
  name: 'light' | 'dark';
  backgroundColor: string;
  textColor: string;
  buttonBackground: string;
  inputBackground: string;
};

export const themes: { light: Theme; dark: Theme } = {
  light: {
    name: 'light',
    backgroundColor: "AntiqueWhite",
    textColor: "DarkSlateGrey",
    buttonBackground: "Lavender",
    inputBackground: "Gainsboro"
  },
  dark: {
    name: 'dark',
    backgroundColor: "DarkSlateGrey",
    textColor: "AntiqueWhite",
    buttonBackground: "#232b3c",
    inputBackground: "#45516d"
  }
};

export const ThemeContext = createContext<Theme>(themes.light);
```

Let's walk through the three things we've exported.

First, we've defined a `Theme` type that describes the shape of a single theme: a name and four colors. The `name` property has the type `'light' | 'dark'`, a union of two string literals, so `name` can only ever be one of those two exact values. If we typo `name: 'dakr'`, TypeScript tells us right away.

Second, we've declared our style object and saved it to the `themes` variable, annotated as `{ light: Theme; dark: Theme }`. That annotation is what makes the whole object trustworthy: both themes now have to include every property in `Theme`, spelled exactly the same way. Forget `inputBackground` in the dark theme and we find out immediately, rather than when a form input renders with the wrong background.

Third, we create a new context with React's `createContext()` function:

```ts
export const ThemeContext = createContext<Theme>(themes.light);
```

The convention is to name context objects in Upper Camel Case, calling it whatever is representative of the data that the context will hold. We've called our context `ThemeContext`, because it holds theme data.

We pass a type argument to `createContext()` to say what kind of value this context carries: a `Theme`. That's how every component that reads this context will know it's getting an object with a `textColor`, a `buttonBackground`, and so on.

We also pass `themes.light` as an argument. That's the context's **default value**, which is the value a component reads if it goes looking for the context and there's no provider above it in the tree. We'll come back to this default value in the next lesson, because the convenient choice we've just made turns out to have a real downside.

It's also common convention to include the data relevant to the context within the same file, which is why we're including the `themes` object in `theme-context.ts`. However, it would be fine to keep this information in the component that manages the theme state.

And with that we've created our context! But it's not that useful yet: we haven't put it to use anywhere in our app. Next, let's learn about how a context shares its value.

### Context Providers and Consumers

Context shares data through a **provider** and one or more **consumers**.

The `ThemeContext` object we just created has a `Provider` property on it, and `ThemeContext.Provider` is a component:

* A provider component provides data to a section of the component tree, or to the whole thing.
* Any component inside that provider can consume the data, meaning read the value the provider is holding.

A provider wraps around the components that it shares data with. Using the Help Queue as an example, if we want to share `ThemeContext` data with our whole app, we'd put the provider at the top of the tree, in `App`:

```
App
└── ThemeContext.Provider
    └── Router
        ├── Header
        ├── ToggleTheme           consumes ThemeContext
        └── Routes
            ├── SignIn
            └── TicketControl     consumes ThemeContext
                ├── TicketList
                │   └── Ticket
                ├── NewTicketForm
                │   └── ReusableForm  consumes ThemeContext
                ├── TicketDetail      consumes ThemeContext
                └── EditTicketForm
                    └── ReusableForm  consumes ThemeContext
```

As the diagram shows, we can have as many consuming components as we need. However, we'll use just one provider, placed at the lowest common ancestor of all the components that need the data.

Remember that data flows down in React, and that's true for context too. A component can only consume a context if a provider for that context sits above it in the tree. In the diagram above, we purposefully place the provider inside `App`, above the router, so that all of `App`'s children and grandchildren can reach the theme data.

Notice that `Router` and `Routes` sit between the provider and `TicketControl`, and that they don't have to know anything about the theme. `TicketControl` is rendered by a `<Route>`, but as far as context is concerned, it's simply somewhere beneath the provider, and that's all that matters.

Ultimately, it's important to understand that providers and consumers enact a subscription-based relationship: consuming components are subscribed to the provider above them, and any time the provider's value changes, every component consuming that value re-renders. In the diagram above, that means anytime the value in `App` changes, these four components re-render: `ToggleTheme`, `TicketControl`, `TicketDetail`, and `ReusableForm`. Pretty neat!

Next, let's implement a provider.

### Adding a Provider Component

Since we've determined that `App` is the lowest common ancestor of all the components that need the `ThemeContext` data, let's add a provider there. First, we'll import `ThemeContext` and our `themes` object from `theme-context.ts`:

```tsx title="src/components/App.tsx"
import { ThemeContext, themes } from "../context/theme-context";
```

Next, let's wrap our component tree with the `ThemeContext.Provider` component. In the following code, notice that `<ThemeContext.Provider>` becomes the new outermost element, wrapping the `<Router>` that used to be the root of what `App` returns:

```tsx title="src/components/App.tsx"
import Header from "./Header";
import TicketControl from "./TicketControl";
import SignIn from "./SignIn";
import ToggleTheme from "./ToggleTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// highlight-next-line
import { ThemeContext, themes } from "../context/theme-context";

function App() {
  return (
    // highlight-next-line
    <ThemeContext.Provider value={themes.light}>
      <Router>
        <Header />
        <ToggleTheme />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<TicketControl />} />
        </Routes>
      </Router>
    {/* highlight-next-line */}
    </ThemeContext.Provider>
  );
}

export default App;
```

Notice how little we had to touch. Our routing is exactly as we left it in React with NoSQL: same `<Router>`, same `<Routes>`, same two `<Route>` components. All we did was add one wrapper around all of it.

Notice also that we've added a prop called `value` to our `<ThemeContext.Provider>` component. This is how we designate a value for our provider. The prop must always be called `value`.

Because we typed the context as `createContext<Theme>(...)`, TypeScript also checks what we hand to that `value` prop. Pass it a string, or an object that's missing `buttonBackground`, and the error shows up on this line rather than deep inside whichever component tried to use the missing property.

We've set the value of the `value` prop to `themes.light`. That will be our starting theme. However, this theme is static! If we want the value of our theme to change, we'll need to implement a state management tool. Let's do that next.

### Adding State

We'll use the `useState()` hook to manage our state. Let's start with an import and declare a new state variable:

```tsx title="src/components/App.tsx"
// highlight-next-line
import { useState } from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import SignIn from "./SignIn";
import ToggleTheme from "./ToggleTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext, themes } from "../context/theme-context";

function App() {
  // highlight-next-line
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={themes.light}>
      <Router>
        <Header />
        <ToggleTheme />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<TicketControl />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
```

Our state variable is called `theme` and it starts out as the light theme from our `themes` object. This is the first state `App` has ever held: until now it has only rendered other components.

Notice that we don't need a type argument on `useState()` here. `themes.light` is already a `Theme`, so TypeScript infers that `theme` is a `Theme` and that `setTheme` only accepts a `Theme`. This is the same inference we relied on in React Fundamentals when we wrote `useState(false)` and got a `boolean` for free.

The next update we need to make is to set the `value` prop of our `<ThemeContext.Provider>` to the value of our state variable `theme`:

```tsx title="src/components/App.tsx"
// ... inside App

  return (
    // highlight-next-line
    <ThemeContext.Provider value={theme}>
      <Router>
        <Header />
        <ToggleTheme />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<TicketControl />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
```

Now the value of our provider is directly tied to our state variable. That means we can call `setTheme()` to change the current theme for the provider and everything consuming it. Next, let's wire up our button in the `ToggleTheme` component to do just that.

### Wiring Up the `ToggleTheme` Button

The first thing we'll need to do is pass a callback function down to the `ToggleTheme` component so that it can invoke a change in state in `App`. Remember that callback functions enable us to pass data up from a child component to a parent component, while maintaining React's unidirectional data flow.

We'll create a `toggleTheme()` function in `App` that calls the `setTheme()` state updater function:

```tsx title="src/components/App.tsx"
// ... inside App

  const [theme, setTheme] = useState(themes.light);

  function toggleTheme() {
    setTheme(currentTheme =>
      currentTheme.name === 'light' ? themes.dark : themes.light
    );
  }
```

Notice that we pass a function to the `setTheme()` call:

```ts
currentTheme => currentTheme.name === 'light' ? themes.dark : themes.light
```

We're passing a function to `setTheme()` in order to work from the current value of the `theme` state variable, which is the same pattern we used with `useState()` back in the React Fundamentals section. The ternary checks the current theme's `name`: if we're on the light theme, we switch to the dark one, and otherwise we switch to the light one.

Here's that same arrow function written out the long way, without the shortcuts of omitting the parentheses around a single parameter and relying on an implicit return:

```ts
(currentTheme) => {
  if (currentTheme.name === 'light') {
    return themes.dark;
  } else {
    return themes.light;
  }
}
```

This is one place where that `name` property earns its keep. Without it, we'd be comparing color strings to figure out which theme we're on, which works but reads poorly and breaks the moment we change a color.

Next, we'll need to pass the `toggleTheme()` function to the `ToggleTheme` component:

```tsx title="src/components/App.tsx"
import { useState } from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import SignIn from "./SignIn";
import ToggleTheme from "./ToggleTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext, themes } from "../context/theme-context";

function App() {
  const [theme, setTheme] = useState(themes.light);

  function toggleTheme() {
    setTheme(currentTheme =>
      currentTheme.name === 'light' ? themes.dark : themes.light
    );
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <Header />
        {/* highlight-next-line */}
        <ToggleTheme toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<TicketControl />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
```

Next let's update the `ToggleTheme` component to accept that prop and use it:

```tsx title="src/components/ToggleTheme.tsx"
// highlight-start
type ToggleThemeProps = {
  toggleTheme: () => void;
};

function ToggleTheme({ toggleTheme }: ToggleThemeProps) {
  // highlight-end
  return (
    <>
      {/* highlight-start */}
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      {/* highlight-end */}
      <hr />
    </>
  );
}

export default ToggleTheme;
```

This is the same props pattern we've used throughout the Help Queue: a `ToggleThemeProps` type describing what the component expects, destructured right in the function signature. Our one prop, `toggleTheme`, is a function that takes no arguments and returns nothing, so its type is `() => void`.

At this point if we run our project, we'll be able to click our toggle theme button and change the value of the `theme` state variable. But we won't be able to tell that anything is working. That's because we're not actually using the `theme` state anywhere! Let's fix that by adding some styles so that we can see the new toggle theme functionality in action.

### Setting the Background and Text Color

The first styling we'll add is updating the `<body>` tag's background color and text color to match the current theme. Setting styles on `document.body` reaches outside of React to touch the DOM directly, which makes it a side effect, so it belongs in a `useEffect()` hook.

Here's what we'll add to `App`:

```tsx title="src/components/App.tsx"
// highlight-next-line
import { useEffect, useState } from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import SignIn from "./SignIn";
import ToggleTheme from "./ToggleTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext, themes } from "../context/theme-context";

function App() {
  const [theme, setTheme] = useState(themes.light);

  // highlight-start
  useEffect(() => {
    document.body.style.backgroundColor = theme.backgroundColor;
    document.body.style.color = theme.textColor;
  }, [theme]);
  // highlight-end

  function toggleTheme() {
    setTheme(currentTheme =>
      currentTheme.name === 'light' ? themes.dark : themes.light
    );
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <Header />
        <ToggleTheme toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<TicketControl />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
```

Let's break down the new code. We've used [dot notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) to access the nested properties of the `document` object:

* The `document` object represents the Document Object Model (DOM) for our Help Queue app. The DOM is [a Web API](https://developer.mozilla.org/en-US/docs/Web/API).
* The `document.body` property represents the `<body>` tags in the DOM.
* The `document.body.style` property represents the `<body>` tags' `style` attribute, which sets inline HTML styles.
* The `style.backgroundColor` and `style.color` properties represent the CSS properties `background-color` and `color` respectively. We can set the value of these properties to change the background and text colors for the body tags.

So this TypeScript:

```ts
document.body.style.backgroundColor = theme.backgroundColor;
document.body.style.color = theme.textColor;
```

Is the same as this CSS:

```css
body {
  background-color: blue;
  color: white;
}
```

However, the TypeScript version is dynamic. Instead of hardcoding values like in the CSS above, we set the background color and text color from the current theme.

Notice the dependency array on our effect: `[theme]`. That tells React to run this effect after the first render and again any time `theme` changes, which is exactly when the body colors need to be updated. If we left the array off entirely, the effect would run after every single render, and if we passed an empty array, the body would keep the colors it got on the first render and never update.

Go ahead and test this out now: run your project and press the "Toggle Theme" button. You'll see the background and text color change from a light theme to a dark theme. At this point we still need to update the background colors of our button and input elements to complete the functionality. We'll do that in the next lesson when we learn how components read a context value with the `useContext()` hook.
