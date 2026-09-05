---
title: "📓 3.3.0.11 Styling React Components"
day: weekend
id: 3-3-0-11-styling-react-components
hide_table_of_contents: true
---

Up to this point, we haven't discussed adding CSS styles to a React application. There are many different approaches, and in this lesson we'll cover two built-in ones: **CSS Modules**, our recommended approach for component-level styles, and **inline styles**, which are handy when a style value needs to change based on props or state. We'll also look at why plain global stylesheets fall short, and briefly survey the broader landscape of styling tools you'll encounter in the wild.

## The Problem with Global Stylesheets
---

A plain, external stylesheet - like the `index.css` and `App.css` files Vite's template includes - is a **global** stylesheet. When our React application is built, all of the CSS files in the application are bundled together into a single stylesheet. Even if we split our styles across many files, ultimately it's almost exactly the same as writing one big global stylesheet. That isn't great for styling individual components.

The trouble is that global styles aren't scoped to the components they belong to. Imagine a parent component and a child component that each define a rule for the class `.container`. Because all of that CSS ends up in one shared stylesheet, those two rules collide. The child component's rule can override the parent component's rule **even though the child's stylesheet was never imported into the parent**. As our application grows and more components define their own class names, these accidental collisions become harder and harder to track down.

For that reason, plain external stylesheets aren't a good fit for styling individual components. What we want is a way to write CSS for a component that stays scoped to that component, so its class names can never leak out and clobber another component's styles. That's exactly what CSS Modules give us.

## CSS Modules - the Recommended Approach
---

A **CSS Module** is a CSS file whose class names are automatically scoped to a single component. To create one, we name the file `ComponentName.module.css`. The `.module.css` extension is the important part: it tells Vite to treat this file as a CSS Module rather than a global stylesheet. Vite supports CSS Modules with no extra setup.

Let's add one to our `Ticket` component. Create a file called `Ticket.module.css` in the `components` folder, alongside `Ticket.tsx`:

```css title="src/components/Ticket.module.css"
.ticket {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.ticket h3 {
  margin-top: 0;
}
```

Now we import that file into our component. Instead of a bare `import './Ticket.css'`, we import the stylesheet as an object, conventionally named `styles`:

```tsx title="src/components/Ticket.tsx"
// highlight-next-line
import styles from './Ticket.module.css';

type TicketProps = {
  names: string;
  section: string;
  issue: string;
};

function Ticket({ names, section, issue }: TicketProps) {
  return (
    // highlight-next-line
    <div className={styles.ticket}>
      <h3>{names} - {section}</h3>
      <p><em>{issue}</em></p>
    {/* highlight-next-line */}
    </div>
  );
}

export default Ticket;
```

The key difference from a global stylesheet is how we apply a class. Instead of writing a plain string like `className="ticket"`, we reference the class through the imported `styles` object: `className={styles.ticket}`. Each class we define in the module becomes a property on that object.

Under the hood, Vite generates a unique class name for each class in the module - something like `Ticket_ticket__abc12` - and applies that generated name to the element. Because every component's class names are made unique this way, the styles from one component can never collide with another, even if two components both define a class called `ticket`. That's the scoping problem from the previous section, solved for us automatically.

## Inline Styles
---

CSS Modules are great for static styles, but sometimes a style value needs to depend on a prop or state. For that, React has a second built-in option: **inline styles**, where you pass a JavaScript object directly to an element's `style` prop.

Here's a simple example using the `Header` component:

```tsx title="src/components/Header.tsx"
function Header() {
  const headerStyles = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '1rem'
  };

  return (
    <header style={headerStyles}>
      <h1>Help Queue</h1>
    </header>
  );
}

export default Header;
```

CSS objects have a slightly different syntax from regular CSS:

- Property names are **camelCase**: `backgroundColor` instead of `background-color`.
- Values are **strings**: `'1rem'`, `'#2c3e50'`. (You can omit `'px'` from pixel values — `padding: 16` is equivalent to `padding: '16px'`.)
- Rules are separated by **commas**, since this is a plain JavaScript object.

You can also pass the object inline with double curly braces — the outer pair is JSX expression syntax, the inner pair is the object literal:

```tsx
<header style={{ backgroundColor: '#2c3e50', padding: '1rem' }}>
```

The real advantage of inline styles is that values can be any JavaScript expression, making them a natural fit for styles that change at runtime:

```tsx
<div style={{ opacity: isLoading ? 0.5 : 1 }}>
```

For static styles, CSS Modules keep concerns separated more cleanly. Use inline styles when a value needs to be computed at render time.

## Other Approaches Worth Knowing
---

Beyond CSS Modules and inline styles, there's a wider landscape of styling tools you'll encounter in the wild. Here's a quick survey so the terms are familiar when you see them:

* **Tailwind CSS**: A utility-first framework where you compose styles from small utility classes written directly in your JSX, rather than keeping a separate CSS file per component. It's very popular in modern React and Next.js projects.
* **Component libraries** (MUI, shadcn/ui, Chakra UI, and others): Collections of pre-built, pre-styled components you drop into your app. They come with their own styling systems and are commonly used in professional projects to move quickly.
* **Global CSS**: Still the right choice for genuinely global styles like CSS resets and base typography. For those, keep a single `index.css` rather than scattering global rules across component files.
* **CSS-in-JS** (styled-components, Emotion): Libraries that let you write CSS inside your JavaScript. This approach was popular for a while, but it comes with tradeoffs that don't fit as cleanly with newer React patterns, so it shows up less often in new projects today.

You don't need to learn all of these now. The point is simply to recognize them when you see them in real-world codebases.

## Wrapping Up
---

CSS Modules are our recommended approach for styling individual components. Reach for a global `index.css` for true app-wide styles like resets, use a CSS Module for static component-level styles, and use inline styles when a value needs to be computed at render time.
