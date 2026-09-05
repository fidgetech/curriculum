---
title: "📓 3.5.0.11 Context Best Practices, Alternatives, and Further Exploration"
day: weekend
id: 3-5-0-11-context-best-practices-alternatives-and-further-exploration
hide_table_of_contents: true
---

To wrap up the whirlwind of information about context, let's review some of the best practices for using context, the alternatives to context, and a few further exploration opportunities.

## Best Practices with Context
---

**1. You can and should have multiple contexts for different data that needs to be shared.** For example, if we wanted to share the current user and the color theme in the Help Queue, those should be two separate contexts with two separate providers. A component can call `useContext()` (or a custom hook like our `useTheme()`) as many times as it needs to, once for each context it reads.

**2. Locate your provider as close as possible to the components that consume it.** This is a general best practice that may not be possible in every case. When the consuming components are on different branches of your component tree, the lowest common ancestor is often much higher up than you'd like, and that's fine.

**3. Make sure that only the components that need the context data have it.** Don't have a component consume a context it doesn't actually need. Keep in mind that anytime the provider's value changes, every component consuming that context re-renders.

**4. Use context judiciously.** Don't reach for context by default - using it in a component makes that component harder to reuse, because it can only be rendered somewhere beneath a matching provider. Before reaching for context, ask yourself if the data you need to share is really needed on a global or wide scale, and try using props or composing your components to make passing props easier first. But once the data genuinely is global or widely shared, like the theme we just built, context is the right tool for the job, not something to avoid.

**5. Give the context an `undefined` default value and wrap `useContext()` in a custom hook.** This is what we did with `useTheme()` in the last lesson. It keeps the "is there really a provider above me?" check in one place, and it means every component that calls the hook gets a value it can use without any further narrowing.

## The Alternatives to Context
---

It's important to understand that the Help Queue doesn't need context to have a light and dark theme that we can toggle between. Why? The Help Queue is small, with only a handful of components and just four of them needing the theme data, and we're not planning on expanding its functionality.

What we could do instead is reach for the two big alternatives to context for moving data between components: props and component composition. At this point, we should be well familiar with how props work, but component composition is more nebulous. That's by nature: composition really depends on the needs and structure of your application.

Here's the prop drilling problem, simplified down to just the theme: in the Help Queue, `TicketControl` renders `EditTicketForm`, which renders `ReusableForm`. Only `ReusableForm` actually needs the theme - `EditTicketForm` sits in between doing real, unrelated work (loading the ticket being edited, handling its submission), and passing `theme` as a prop instead of using context would mean `EditTicketForm` has to accept and forward it purely so `ReusableForm` can reach it.

:::note[This is a simplified sketch]
To keep the composition idea itself clear, the example below ignores everything `TicketControl` and `EditTicketForm` actually do (loading a ticket, submitting an edit, Firestore, and so on) and focuses only on the theme. It's illustrative, not a literal, buildable version of these components.
:::

Without composition, passing the theme as a prop instead of using context would look like this:

```tsx
function TicketControl({ theme }: { theme: Theme }) {
  return <EditTicketForm theme={theme} />;
}

function EditTicketForm({ theme }: { theme: Theme }) {
  // EditTicketForm doesn't use theme itself - it only has this prop to hand off to ReusableForm.
  return <ReusableForm theme={theme} />;
}

function ReusableForm({ theme }: { theme: Theme }) {
  const styles = {
    backgroundColor: theme.buttonBackground,
    color: theme.textColor
  };

  return <button style={styles}>Submit</button>;
}
```

With composition, `TicketControl` renders `ReusableForm` itself and hands it to `EditTicketForm` as `children`, so `EditTicketForm` never has to know a theme exists:

```tsx
function TicketControl({ theme }: { theme: Theme }) {
  return (
    <EditTicketForm>
      <ReusableForm theme={theme} />
    </EditTicketForm>
  );
}

function EditTicketForm({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
```

`ReusableForm` still needs the `theme` prop, but the one component that has no use for it - `EditTicketForm` - no longer receives or forwards it at all. `ReactNode` is the type React uses for "anything renderable": an element, a string, a number, an array of those, `null`, and so on. It's the type you'll almost always want for a `children` prop.

This technique is called **inversion of control**, where a component higher up in the tree composes multiple components together and either renders them or saves them in a variable to pass down as a prop. It eases the burden of prop drilling by making it so that we don't have to pass props down through as many levels of components, or so that we can pass fewer props down.

More specifically, the "inversion of control" here is giving a component like `TicketControl` more control, rather than leaving component composition to components further down the tree. [The React docs on context](https://react.dev/learn/passing-data-deeply-with-context#before-you-use-context) point out that this isn't always the best choice: moving more complexity higher in the tree makes those higher-level components more complicated, and it forces the lower-level components to be more flexible than you may want them to be.

As it goes, component composition is always subjective and depends on the needs of your application. It's worth trying when the data isn't genuinely global - but for something like our theme, context was the right call.

To read more about the `children` prop, see the React docs on [passing JSX as children](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children). For another example of composition as an alternative to context, check out the section of the React docs titled [Before You Use Context](https://react.dev/learn/passing-data-deeply-with-context#before-you-use-context).

<!-- TODO: Update this link to point to a hooks-based TypeScript example repo:

For a complete example, here's a version of the Help Queue with a toggleable light and dark theme built with only props and composition, and no context at all:

---
**[<i class="glyphicon glyphicon-folder-open"></i>  GitHub Repo for Help Queue with Light/Dark Theme using Props and Composition](https://github.com/epicodus-lessons/react-help-queue-with-context/tree/02_with_props_and_composition)**

-->

## Further Exploration with Context
---

There are a few further exploration opportunities to discuss:

**1. For more examples and discussion, check out the docs.**

* [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)
* [`useContext`](https://react.dev/reference/react/useContext)
* [`createContext`](https://react.dev/reference/react/createContext)

**2. To learn how to combine context with a reducer, check out the docs.** In the Help Queue we paired context with `useState()`, but `useReducer()` pairs with context especially well: the reducer owns how state changes, and context carries both the state and the `dispatch` function to wherever they're needed.

* [Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)

**3. Explore how to package a context up behind a custom provider component.** We've already done half of this work: our `useTheme()` hook hides `useContext()` and the "am I inside a provider?" check from every component that consumes the theme. The other half is a custom `ThemeProvider` component that owns the theme state and renders `ThemeContext.Provider` itself, so that `App` doesn't have to hold the state or know that a context exists at all.

Kent C. Dodds has a great article called ["How to Use React Context Effectively"](https://kentcdodds.com/blog/how-to-use-react-context-effectively) that walks through exactly this combination of a custom provider component and a custom consumer hook. [Kent C. Dodds](https://kentcdodds.com/about) is a programming educator with many good articles about React.

Once you've read the article, try building a `ThemeProvider` component in the Help Queue or another project. As you do, think about what its props type should be: it needs a `children: ReactNode` prop so it can wrap the rest of your tree, and probably nothing else.

**4. Look into dedicated state-management libraries as an alternative to Context.** For state that's shared more widely or changes more often than a theme, libraries like [Zustand](https://zustand.docs.pmnd.rs/) and [Jotai](https://jotai.org/) have become popular alternatives to Context in production React apps. They avoid a downside of Context we haven't discussed: every component that consumes a context re-renders whenever the context value changes, even if it only cares about part of that value. These libraries let components subscribe to just the slice of state they need, and they typically require less boilerplate than writing your own reducer, actions, and provider by hand. Context remains the right tool for the Help Queue's theme, since it's low-frequency and needed almost everywhere, but for bigger or faster-changing shared state, it's worth knowing these libraries exist.
