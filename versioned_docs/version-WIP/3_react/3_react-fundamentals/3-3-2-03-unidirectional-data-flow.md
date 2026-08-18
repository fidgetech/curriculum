---
title: "📓 3.3.2.3 Unidirectional Data Flow"
day: tuesday
id: 3-3-2-3-unidirectional-data-flow
hide_table_of_contents: true
---

So far we have only been working with local state. However, when a user inputs data in our form, we somehow need to get that data from our `NewTicketForm` component to its parent `TicketControl` component.

Before we do that, we need to learn more about **unidirectional data flow**. Unidirectional data flow is a language-agnostic term for applications that have data flowing in only one direction.

In the case of React applications, data can only flow from a parent component _down_ to a child component. That's why shared state should always be lifted to a common ancestor. Only the component holding a piece of state and its child components will ever be able to access that state. Components that are higher up the component tree (above a component with state) have no way to know about that state because of unidirectional data flow. In fact, components in React are so modular that they don't even know their parents exist. It's the job of parent components to keep track of their children, not the other way around.

The same is true with props. We can only pass props _down_ from a parent component to a child component. That's the whole point of unidirectional data flow. It may seem like a limiting concept, but it makes planning, building, and debugging an application much easier. If state and props could flow in every direction, our applications would quickly become a mess.

So if data can only be passed _down_, then how can we get information from a child component up to a parent component?

The answer: we need to use **callbacks**. Here's how it works:

1. We define a function in a parent component that has state.
2. The parent component passes this function into the child component as a prop. Functions can be props just like any other data type.
3. We call this function in our child component, passing data as an argument.
4. When the child calls this function, the function in the parent component is invoked. Because the function lives in the parent component, the parent can access any data that's passed into it.

This may feel like we're breaking the rules of unidirectional data flow because the parent component can access information from the function call in the child component.

However, unidirectional data flow is still being maintained. The parent component passes props _down_ using unidirectional data flow. If a function is passed downward as a prop, then the child component can call that function. The child component is not passing any data _up_ to the parent component. Instead, the child component is simply invoking a function that was passed _down_ to it. The parent component is still in control of what happens with that data.

In our Help Queue application, we'll use this pattern to add new tickets:

When a user submits the form in `NewTicketForm` (child), we need that ticket data to reach `TicketControl` (parent) where our ticket list lives. So we'll create a function in `TicketControl` (parent) that knows how to add tickets, pass that function down to `NewTicketForm` (child) as a prop, and then call that function when the form is submitted.

Let's apply unidirectional data flow to our Help Queue. We'll move the `mainTicketList` array from `TicketList` (child) to `TicketControl` (parent) and pass it down as a prop. This is a small change, but it will set us up to add new tickets in the next lesson.

## A Shared Types File
---

Before we move any data around, we need a type to describe what a ticket object looks like. The immediate reason is `TicketList`: it's about to accept a `ticketList` prop, and to declare `TicketListProps` we have to write the shape out explicitly. TypeScript can infer the shape of `mainTicketList` in `TicketControl` from the literal values, but a prop type requires a name. And since that same type will also be needed in `NewTicketForm` when we wire up the form, putting it in a dedicated shared file makes it easy to import from anywhere. Let's create `src/types.ts`:

```ts title="src/types.ts"
export type TicketData = {
  names: string;
  section: string;
  issue: string;
  id: string;
};
```

A few things to notice:

- This file ends in `.ts`, not `.tsx`, because it contains only a type definition and no JSX.
- We name the type `TicketData` rather than `Ticket` because we already have a component called `Ticket`. If both shared the same name, any file that needed to import both would run into a naming conflict. Using `TicketData` for the data shape keeps the two distinct.
- We `export` the type so we can import it wherever we need to describe a ticket object.

## Moving mainTicketList to the Parent
---

Right now, our `mainTicketList` array lives inside `TicketList`. But `TicketList` is a child component, and `TicketControl` is its parent. Since `TicketControl` is the parent of the whole ticket section, it's a better home for data that the section depends on. Moving the list up to `TicketControl` and passing it down as a prop is unidirectional data flow in action: the data lives in the parent, and it flows _down_ to all of the children that need it.

Let's move `mainTicketList` into `TicketControl` and pass it down to `TicketList` as a prop:

```tsx title="src/components/TicketControl.tsx"
import { useState } from 'react';
import { type TicketData } from '../types';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

const mainTicketList: TicketData[] = [
  {
    names: 'Thato and Haley',
    section: '3A',
    issue: 'React component not rendering!',
    id: '1'
  },
  {
    names: 'Sleater and Kinney',
    section: '4B',
    issue: 'TypeScript error in component.',
    id: '2'
  },
  {
    names: 'Imani & Jacob',
    section: '9F',
    issue: 'Tests are not passing.',
    id: '3'
  }
];

function TicketControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  }

  let currentlyVisibleState;
  let buttonText;

  if (formVisibleOnPage) {
    currentlyVisibleState = <NewTicketForm />;
    buttonText = "Return to Ticket List";
  } else {
    currentlyVisibleState = <TicketList ticketList={mainTicketList} />;
    buttonText = "Add Ticket";
  }

  return (
    <>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </>
  );
}

export default TicketControl;
```

A couple of things to notice here:

- We import our new `TicketData` type and use it to annotate the array: `const mainTicketList: TicketData[]`. Now TypeScript will make sure every object in the list is a complete, valid ticket.
- `mainTicketList` is defined outside the component function, at module scope. It doesn't depend on props or state, so there's no reason to recreate it every time the component renders.
- We pass the list down to `TicketList` through a prop called `ticketList`.

:::note
We write `import { type TicketData }` rather than `import { TicketData }` to signal that we're importing a type, not a value. TypeScript can erase type-only imports at compile time without needing to check whether `TicketData` is a value or a type - a small but consistent habit that makes intent clear.
:::

## Updating TicketList to Receive the Prop
---

Now we need to update `TicketList` so it accepts `ticketList` as a prop instead of relying on a local constant. We'll also remove the `mainTicketList` constant that used to live in this file, since it now lives in `TicketControl`.

```tsx title="src/components/TicketList.tsx"
import Ticket from "./Ticket";
import { type TicketData } from '../types';

type TicketListProps = {
  ticketList: TicketData[];
};

function TicketList({ ticketList }: TicketListProps) {
  return (
    <>
      <hr />
      {ticketList.map((ticket) =>
        <Ticket
          names={ticket.names}
          section={ticket.section}
          issue={ticket.issue}
          key={ticket.id}
        />
      )}
    </>
  );
}

export default TicketList;
```

Here's what changed:

- We import the `TicketData` type from our shared types file.
- We define a `TicketListProps` type describing the props this component receives. Our one prop, `ticketList`, is an array of `TicketData` objects, so its type is `TicketData[]`.
- We destructure `ticketList` out of the props in the function signature so we can refer to it by name instead of writing `props.ticketList`.
- We loop through the `ticketList` prop instead of a local constant, and the old `mainTicketList` constant is gone.

## What We've Accomplished
---

If we run our application now, it looks exactly the same in the browser as it did before - the same tickets appear in the queue. But something important has changed under the hood: our ticket data now lives in `TicketControl` (the parent) and flows _down_ to `TicketList` (the child) through a prop. That's precisely the unidirectional pattern we described above.

In the next lesson, we'll take this one step further by replacing our hardcoded list with real state, so that users can add tickets dynamically through the form.
