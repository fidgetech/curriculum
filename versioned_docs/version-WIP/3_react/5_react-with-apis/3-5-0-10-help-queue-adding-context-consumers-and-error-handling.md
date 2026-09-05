---
title: "📓 3.5.0.10 Help Queue: Adding Context Consumers and Error Handling"
day: weekend
id: 3-5-0-10-help-queue-adding-context-consumers-and-error-handling
hide_table_of_contents: true
---

In this lesson, we'll complete the functionality of a light and dark theme in the Help Queue. In the process, we'll learn how a component consumes context data with the `useContext()` hook.

We'll also revisit the default value we gave our context object, and turn it into genuinely useful error handling with a small custom hook.

## Adding Context Consumers
---

We need the following components to consume our theme context so we can set the background and text color of their buttons and inputs to match the current theme:

* `ToggleTheme`: one `<button>` element.
* `TicketControl`: one `<button>` element.
* `TicketDetail`: two `<button>` elements.
* `ReusableForm`: one `<button>` element, two `<input>` elements, and one `<textarea>` input.

All four are function components, so all four consume context the same way: with the `useContext()` hook.

### The `useContext()` Hook

Here's the whole API:

```ts
const value = useContext(SomeContext);
```

We pass `useContext()` the context object itself, and it returns the current value from the nearest provider above this component in the tree. That's it. Calling `useContext()` also subscribes the component to that provider, so the component re-renders whenever the provider's value changes.

Because we typed our context as `createContext<Theme>(themes.light)`, TypeScript knows that `useContext(ThemeContext)` returns a `Theme`. We get autocomplete on `theme.buttonBackground` and an error if we reach for a property that doesn't exist, without writing a single annotation in the consuming component.

`useContext()` is a hook, which means [the rules of hooks](https://react.dev/reference/rules/rules-of-hooks) apply: call it at the top level of a function component, never inside a conditional or a loop.

:::note
If you read older React code or older tutorials, you'll see two other ways of consuming context: wrapping a component in `<SomeContext.Consumer>` and passing it a function as its child (the "render prop" pattern), and setting a `contextType` property on a class component so it can read `this.context`. Both still work, and it's worth recognizing them when you come across them, but neither is how context is written today. We'll use `useContext()` everywhere.
:::

### Consuming the Theme in `ToggleTheme`

Let's start with `ToggleTheme`. It already receives the `toggleTheme` callback as a prop from `App`. Now it will read the current theme from context so it can style its own button:

```tsx title="src/components/ToggleTheme.tsx"
// highlight-start
import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';
// highlight-end

type ToggleThemeProps = {
  toggleTheme: () => void;
};

function ToggleTheme({ toggleTheme }: ToggleThemeProps) {
  // highlight-start
  const theme = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme.buttonBackground,
    color: theme.textColor
  };
  // highlight-end

  return (
    <>
      {/* highlight-next-line */}
      <button style={styles} onClick={toggleTheme}>
        {/* highlight-next-line */}
        {theme.name === 'light' ? "Switch to dark theme" : "Switch to light theme"}
      </button>
      <hr />
    </>
  );
}

export default ToggleTheme;
```

We've made a few additions:

* We import `useContext` from `'react'` and `ThemeContext` from `theme-context.ts`.
* We call `useContext(ThemeContext)` and save the result in `theme`.
* We create a style object from the theme properties that are relevant to a button, and save it in the variable `styles`.
* We add a `style={styles}` attribute to the `<button>` element to apply the theme colors.
* We make the button text conditional, so it tells the user which theme they're switching to.

Notice that the theme did not arrive as a prop. `ToggleTheme` declares only `toggleTheme` in `ToggleThemeProps`, and `App` passes only `toggleTheme`. The theme comes straight from the provider, no matter how many components sit in between. That's the whole point of context.

Also notice what makes the conditional button text readable: `theme.name === 'light'`. Because `name` is typed as `'light' | 'dark'`, TypeScript will flag a comparison against any other string, so we can't quietly write `theme.name === 'Light'` and wonder why the label never changes.

Now if you run the project, the toggle button's own colors change along with the selected theme.

### Consuming the Theme in `TicketControl`

`TicketControl` has one button, the one whose text switches between "Add Ticket" and "Return to Ticket List". Its state and handler functions don't change at all here. We're only adding two things: a call to `useContext()`, and a `style` attribute on the button.

```tsx title="src/components/TicketControl.tsx"
// highlight-next-line
import { useContext, useEffect, useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import EditTicketForm from './EditTicketForm';
import TicketDetail from './TicketDetail';
import { type TicketData, type NewTicketData } from '../types';
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc, query, orderBy } from 'firebase/firestore';
import { db, auth } from '../firebase';
// highlight-next-line
import { ThemeContext } from '../context/theme-context';

function TicketControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTicketList, setMainTicketList] = useState<TicketData[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<TicketData | null>(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [, setNow] = useState(new Date());

  // highlight-next-line
  const theme = useContext(ThemeContext);

  // highlight-start
  const buttonStyles = {
    backgroundColor: theme.buttonBackground,
    color: theme.textColor
  };
  // highlight-end

  // ...our effects and all of our handler functions stay exactly as they were

  if (auth.currentUser === null) {
    return (
      <h1>You must be signed in to access the queue.</h1>
    );
  } else {

    let currentlyVisibleState;
    let buttonText;

    if (error) {
      // ...existing code
    } else if (editing && selectedTicket !== null) {
      // ...existing code
    } else if (selectedTicket !== null) {
      // ...existing code
    } else if (formVisibleOnPage) {
      // ...existing code
    } else {
      // ...existing code
    }

    return (
      <>
        {currentlyVisibleState}
        {/* highlight-next-line */}
        {error ? null : <button style={buttonStyles} onClick={handleClick}>{buttonText}</button>}
      </>
    );
  }
}

export default TicketControl;
```

Pay close attention to _where_ the `useContext()` call sits: above the `auth.currentUser === null` check, alongside our `useState()` calls. That placement isn't a style preference, it's a requirement. The rules of hooks say every hook has to be called on every render, and that check contains an early `return`. If we called `useContext()` after it, the hook would be skipped whenever no user is signed in. Any time you add a hook to a component that returns early, the hook goes above the early return.

This component is worth pausing on more generally. `TicketControl` is one of the most complex components in the app: it holds the queue's state, sets up a Firestore listener and an interval, defines the handlers for adding, editing, and deleting tickets, gates everything behind an authorization check, and runs a conditional that decides which view to render. Reading a shared value from context added exactly two short blocks of code to it, and none of the existing logic had to move.

### Consuming the Theme in `TicketDetail`

`TicketDetail` has two buttons, so it gets the same treatment. Here's the updated component:

```tsx title="src/components/TicketDetail.tsx"
// highlight-next-line
import { useContext } from 'react';
// highlight-next-line
import { ThemeContext } from '../context/theme-context';
import { type TicketData } from '../types';

type TicketDetailProps = {
  ticket: TicketData;
  onClickingDelete: (id: string) => void;
  onClickingEdit: () => void;
};

function TicketDetail({ ticket, onClickingDelete, onClickingEdit }: TicketDetailProps) {
  // highlight-next-line
  const theme = useContext(ThemeContext);

  // highlight-start
  const styles = {
    backgroundColor: theme.buttonBackground,
    color: theme.textColor
  };
  // highlight-end

  return (
    <>
      <h1>Ticket Detail</h1>
      <h3>{ticket.section} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      {/* We apply our styles to each button. */}
      {/* highlight-start */}
      <button style={styles} onClick={onClickingEdit}>Update Ticket</button>
      <button style={styles} onClick={() => onClickingDelete(ticket.id)}>Close Ticket</button>
      {/* highlight-end */}
      <hr />
    </>
  );
}

export default TicketDetail;
```

The `TicketDetailProps` type is untouched. The theme isn't a prop, so it doesn't belong there.

### Consuming the Theme in `ReusableForm`

`ReusableForm` has both a button and inputs, so we'll build two style objects: one for the button and one for the three inputs.

```tsx title="src/components/ReusableForm.tsx"
// highlight-start
import { useContext, type SubmitEvent } from 'react';
import { ThemeContext } from '../context/theme-context';
// highlight-end

type ReusableFormProps = {
  formSubmissionHandler: (event: SubmitEvent<HTMLFormElement>) => void;
  buttonText: string;
  defaultNames?: string;
  defaultSection?: string;
  defaultIssue?: string;
};

function ReusableForm({ formSubmissionHandler, buttonText, defaultNames, defaultSection, defaultIssue }: ReusableFormProps) {
  // highlight-next-line
  const theme = useContext(ThemeContext);

  // highlight-start
  const buttonStyles = {
    backgroundColor: theme.buttonBackground,
    color: theme.textColor
  };
  // highlight-end

  // highlight-start
  const inputStyles = {
    backgroundColor: theme.inputBackground,
    color: theme.textColor
  };
  // highlight-end

  return (
    <form onSubmit={formSubmissionHandler}>
      <input
        defaultValue={defaultNames}
        // highlight-next-line
        style={inputStyles}
        type='text'
        name='names'
        placeholder='Pair Names' />
      <input
        defaultValue={defaultSection}
        // highlight-next-line
        style={inputStyles}
        type='text'
        name='section'
        placeholder='Section' />
      <textarea
        defaultValue={defaultIssue}
        // highlight-next-line
        style={inputStyles}
        name='issue'
        placeholder='Describe your issue.' />
      {/* highlight-next-line */}
      <button style={buttonStyles} type='submit'>{buttonText}</button>
    </form>
  );
}

export default ReusableForm;
```

At this point the functionality for toggling between a light and a dark theme is complete. Go ahead and run your application and test it out.

:::tip
Our style objects work without any annotation, because TypeScript checks the object we hand to a `style` attribute against React's `CSSProperties` type. If you'd like to be explicit, you can import that type and annotate the variable:

```tsx
import { type CSSProperties } from 'react';

const buttonStyles: CSSProperties = {
  backgroundColor: theme.buttonBackground,
  color: theme.textColor
};
```

The benefit of annotating is that a typo like `backgroundColour` gets flagged where the object is created, instead of where it's used.
:::

## Leveraging the Default Context Value for Error Handling
---

We need to remember that a component can't read context data unless a provider sits above it in the component tree. So what happens if we put a consuming component somewhere the provider doesn't reach? Let's find out by shrinking the provider so that it no longer wraps our `<Routes>`, and therefore no longer reaches `TicketControl`:

```tsx title="src/components/App.tsx"
// ... inside App

  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <Header />
        <ToggleTheme toggleTheme={toggleTheme} />
      </ThemeContext.Provider>
      {/* Our routes now sit outside of <ThemeContext.Provider> */}
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<TicketControl />} />
      </Routes>
    </Router>
  );
```

Run the app, sign in so the queue is visible, and toggle the theme. Watch what happens: the toggle button changes color, and the button in `TicketControl` stubbornly stays light. No errors, no warnings, nothing in the console.

That's because of the default value we passed to `createContext()`:

```ts
export const ThemeContext = createContext<Theme>(themes.light);
```

When a component calls `useContext(ThemeContext)` and there's no provider above it, it gets that default value instead. Our code doesn't break, it just silently does the wrong thing forever, and we're left to figure out why one button won't change color.

There's really only one fix for a consuming component placed outside its provider: move one of them so they're connected again. In this case, that means putting `<Routes>` back inside `<ThemeContext.Provider>`. But we can also change our code so that this mistake announces itself loudly the next time someone makes it.

### Removing the Default Value

The better setup is to have no usable default value at all, and to treat its absence as a signal that a component has ended up outside the provider. Let's update `theme-context.ts`:

```ts title="src/context/theme-context.ts"
import { createContext } from 'react';

export type Theme = {
  // ...
};

export const themes: { light: Theme; dark: Theme } = {
  // ...
};

// highlight-next-line
export const ThemeContext = createContext<Theme | undefined>(undefined);
```

Now something interesting happens. Save the file, and TypeScript reports an error in all four of our consuming components:

```
'theme' is possibly 'undefined'.
```

This is a good error! `useContext(ThemeContext)` now returns `Theme | undefined`, and TypeScript refuses to let us read `theme.buttonBackground` off a value that might be `undefined`. In plain JavaScript, this same mistake would have waited until runtime to show up as `Cannot read properties of undefined (reading 'buttonBackground')`. Here, the compiler catches it before we ever load the page.

We could satisfy TypeScript by writing a check in each of the four components:

```tsx
const theme = useContext(ThemeContext);

if (!theme) {
  throw new Error("ThemeContext must be used within a ThemeContext.Provider!");
}
```

That works. After the `throw`, TypeScript knows `theme` can't be `undefined`, so the rest of the component compiles happily. But writing the same four lines in four different files isn't DRY, and it'll be five files the next time a component needs the theme.

### Writing a `useTheme()` Custom Hook

Instead, let's write the check once in a custom hook. Add this to the bottom of `theme-context.ts`:

```ts title="src/context/theme-context.ts"
// We add useContext to our React import.
// highlight-next-line
import { createContext, useContext } from 'react';

// ...Theme, themes, and ThemeContext as above

// highlight-start
export function useTheme() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("useTheme() must be used within a ThemeContext.Provider!");
  }

  return theme;
}
// highlight-end
```

Remember from the rules of hooks that a custom hook is just a function whose name starts with `use` and that calls other hooks. `useTheme()` does two things: it calls `useContext()` for us, and it guarantees we get back a real theme rather than `undefined`.

Notice we didn't write a return type annotation. We don't need one. TypeScript follows the logic: if `theme` were `undefined`, the `throw` would have already ended the function, so anything reaching the `return` has to be a `Theme`. The hook's inferred return type is `Theme`, and every component that calls it gets a value it can use without any further checking.

Now we can swap `useContext(ThemeContext)` for `useTheme()` in each of our four components. In `ToggleTheme`, for example:

```tsx title="src/components/ToggleTheme.tsx"
// We import our custom hook instead of useContext and ThemeContext.
// highlight-next-line
import { useTheme } from '../context/theme-context';

type ToggleThemeProps = {
  toggleTheme: () => void;
};

function ToggleTheme({ toggleTheme }: ToggleThemeProps) {
  // highlight-next-line
  const theme = useTheme();

  const styles = {
    backgroundColor: theme.buttonBackground,
    color: theme.textColor
  };

  return (
    <>
      <button style={styles} onClick={toggleTheme}>
        {theme.name === 'light' ? "Switch to dark theme" : "Switch to light theme"}
      </button>
      <hr />
    </>
  );
}

export default ToggleTheme;
```

Make the same change in `TicketControl`, `TicketDetail`, and `ReusableForm`: replace the `useContext` and `ThemeContext` imports with an import of `useTheme`, and replace `useContext(ThemeContext)` with `useTheme()`. The rest of each component stays as it is.

Now if a consuming component ends up outside the range of the provider, we get a loud failure with a clear message:

```
Uncaught Error: useTheme() must be used within a ThemeContext.Provider!
```

The big takeaway is that we turned an `undefined` default context value to our advantage twice over: TypeScript flags the problem at compile time, and the custom hook gives us an unmistakable message at runtime. That may not seem like a big deal in the Help Queue, where we know every component by heart. It matters a great deal in a large React application with many reusable components and many contributors.

Don't forget to restore `App` so that `<ThemeContext.Provider>` wraps the whole `<Router>` again before you move on.

## Summary
---

In this lesson we finished the light and dark theme in the Help Queue. Along the way:

* We consumed a context value in four function components with the `useContext()` hook, and saw that none of them needed a new prop to do it.
* We saw why a convenient default context value can hide a bug, and why `undefined` is usually the better default.
* We wrote a `useTheme()` custom hook that both narrows the context type and throws a descriptive error, so the check lives in one place.

In the next lesson, we'll take time to review context best practices, alternatives, and further exploration.

<!-- TODO: Update this link to point to a hooks-based TypeScript example repo:

---
**[<i class="glyphicon glyphicon-folder-open"></i>  Example GitHub Repo for Help Queue with Light/Dark Theme using Context](https://github.com/epicodus-lessons/react-help-queue-with-context)**

-->
