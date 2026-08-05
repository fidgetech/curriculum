---
title: "📓 3.3.2.4 Passing Data Via Callbacks"
day: tuesday
id: 3-3-2-4-passing-data-via-callbacks
hide_table_of_contents: true
---

In the last lesson, we moved `mainTicketList` into `TicketControl` and passed it down to `TicketList` as a prop. Now we'll replace that hardcoded list with real state, and wire up the form so users can actually add tickets. Here's what we'll do:

1. Convert `mainTicketList` in `TicketControl` from a hardcoded constant to state.
2. Create a function in `TicketControl` that takes form data and adds a new ticket to the list.
3. Pass this function down to `NewTicketForm` as a prop.
4. Call this function in `NewTicketForm` when the form is submitted.

Despite the relatively small amount of code being added, we are working with challenging new concepts. Be patient with yourself and follow along slowly. If it doesn't all click immediately (and it probably won't), trust the process and keep practicing these concepts.

## Step 1: Convert mainTicketList to State
---

In the previous lesson, we moved `mainTicketList` into `TicketControl`. Now we'll replace it with state so the list can grow as users add tickets. Remove the `mainTicketList` constant and add a `useState` call inside the component:

```tsx title="src/components/TicketControl.tsx"
import { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import { type TicketData } from '../types';

function TicketControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTicketList, setMainTicketList] = useState<TicketData[]>([]);

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

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

The queue now starts empty - no hardcoded tickets. We use `useState<TicketData[]>([])` rather than just `useState([])` because TypeScript can't infer the type from an empty array. The explicit generic `<TicketData[]>` tells TypeScript this state (`mainTicketList`) holds an array of `TicketData` objects, allowing TypeScript to catch anything that doesn't match.

## Step 2: Create a Function to Handle Adding Tickets
---

Now let's create a function in `TicketControl` that will handle adding new tickets to our list:

```tsx title="src/components/TicketControl.tsx"
import { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import { type TicketData } from '../types';

function TicketControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTicketList, setMainTicketList] = useState<TicketData[]>([]);

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  }

  // new code
  const handleAddingNewTicketToList = (newTicket: TicketData) => {
    const newMainTicketList = mainTicketList.concat(newTicket);
    setMainTicketList(newMainTicketList);
    setFormVisibleOnPage(false);
  }

  // ... rest of component
}
```

Our new function is called `handleAddingNewTicketToList` because it does just that - handles the process of adding a new ticket to our `mainTicketList`. It takes a `newTicket` as a parameter, which we've typed as a `TicketData`. Because we imported the `TicketData` type, TypeScript will make sure that anything passed to this function is a complete, valid ticket.

:::info[naming convention]
It's common practice to prefix the name of an event handler function with `handle`. Any props containing that function will be prefixed with `on`. This is because the prop will be used _when_ the event occurs, but the function itself is what _actually handles_ the necessary actions. It also ensures the names are similar enough to easily determine which props and functions correspond, yet different enough to tell them apart.
:::

Let's break down what this function does:

1. **Create a new array:** We call `mainTicketList.concat(newTicket)`. Unlike `push()`, which directly alters the array it's called on, `concat()` returns a _new_ array with the item added. This is important because we should **never alter state directly**. You'll also commonly see the spread operator used for this: `[...mainTicketList, newTicket]`. Both approaches create a new array without mutating state.

2. **Update state:** We call `setMainTicketList(newMainTicketList)` to update our state with the new array.

3. **Hide the form:** We call `setFormVisibleOnPage(false)` so the user sees the queue (with their new ticket) instead of the form.

## Step 3: Pass the Function Down as a Prop
---

Now we need to pass `handleAddingNewTicketToList` down to our `NewTicketForm` component as a prop:

```tsx title="src/components/TicketControl.tsx"
// ...existing code

let currentlyVisibleState = null;
let buttonText = null;

if (formVisibleOnPage) {
  currentlyVisibleState = 
    <NewTicketForm 
      onNewTicketCreation={handleAddingNewTicketToList}
    />; // updated
  buttonText = "Return to Ticket List";
} else {
  currentlyVisibleState = 
    <TicketList 
      ticketList={mainTicketList}
    />;
  buttonText = "Add Ticket";
}

// existing code...
```

We pass `handleAddingNewTicketToList` as a prop called `onNewTicketCreation`. Notice the naming convention: `handle` prefix for the function, `on` prefix for the prop.

:::tip
Note that we split the JSX onto multiple lines for readability. This is a common practice when passing multiple props or when the component name and props exceed a certain length.
:::

Next, we need to update `NewTicketForm` to accept and use this prop:

```tsx title="src/components/NewTicketForm.tsx"
import { type SubmitEvent } from 'react';
import { type TicketData } from '../types';

type NewTicketFormProps = {
  onNewTicketCreation: (ticket: TicketData) => void;
};

function NewTicketForm({ onNewTicketCreation }: NewTicketFormProps) {

  // We'll update this function in the next step
  function handleNewTicketFormSubmission(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get('names'));
    console.log(formData.get('section'));
    console.log(formData.get('issue'));
  }

  return (
    <>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='section'
          placeholder='Section' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Help!</button>
      </form>
    </>
  );
}

export default NewTicketForm;
```

We've added two things:

1. We defined a `NewTicketFormProps` type. Our one prop, `onNewTicketCreation`, is a function that takes a `TicketData` and returns nothing, so its type is `(ticket: TicketData) => void`. This describes exactly what kind of function `NewTicketForm` expects to receive.
2. We destructured `onNewTicketCreation` out of the props in the function signature so we can call it directly.

## Step 4: Use the Callback and Add a Unique ID
---

We're almost done! We need to:

- Generate a unique ID for each new ticket using `crypto.randomUUID()`.
- Update `handleNewTicketFormSubmission` to create a ticket object and pass it to `onNewTicketCreation`.

Here's the complete updated `NewTicketForm`:

```tsx title="src/components/NewTicketForm.tsx"
import { type SubmitEvent } from 'react';
import { type TicketData } from '../types';

type NewTicketFormProps = {
  onNewTicketCreation: (ticket: TicketData) => void;
};

function NewTicketForm({ onNewTicketCreation }: NewTicketFormProps) {

  function handleNewTicketFormSubmission(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onNewTicketCreation({
      names: formData.get('names') as string,
      section: formData.get('section') as string,
      issue: formData.get('issue') as string,
      id: crypto.randomUUID()
    });
  }

  return (
    <>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='section'
          placeholder='Section' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Help!</button>
      </form>
    </>
  );
}

export default NewTicketForm;
```

We call `onNewTicketCreation()` and pass in an object with all of the ticket properties, including a unique ID generated by `crypto.randomUUID()`.

:::note
`formData.get()` can return more than just a string (for example, it returns `null` if no field with that name exists), so TypeScript won't assume the values are strings on its own. Because we know these fields exist and hold text, we use `as string` to tell TypeScript to treat each value as a string. This is called a **type assertion**.
:::

:::tip
If you need to get a number from a form, remember to parse the value. For example:

```tsx
onNewTicketCreation({
  // ...other properties
  numberOfStudents: parseInt(formData.get('numberOfStudents') as string)
});
```
:::

## How It All Connects
---

Let's trace the data flow:

1. User fills out the form and clicks "Help!"
2. `handleNewTicketFormSubmission` in `NewTicketForm` is called
3. This function builds a ticket object (including a unique ID from `crypto.randomUUID()`) and calls `onNewTicketCreation()` with it
4. `onNewTicketCreation` is actually `handleAddingNewTicketToList` from `TicketControl`
5. `handleAddingNewTicketToList` adds the ticket to state and hides the form
6. React re-renders `TicketControl`, which now passes the updated list to `TicketList`
7. The new ticket appears in the queue!

Try it out in the browser. Now when we add a ticket via the form, it will be added to the queue!

## Summary
---

In this lesson, we learned how to pass data from a child component up to a parent component using callbacks. This is a fundamental pattern in React:

- **State lives in the parent** component that needs to share it.
- We **pass a callback function down** to child components as a prop.
- The child **calls this function** (usually in response to an event) and passes data as an argument.
- The parent's function **receives the data** and updates state.
- **Naming convention:** `handleX` for the function, `onX` for the prop.

This pattern maintains unidirectional data flow while still allowing child components to communicate with their parents.
</content>
</invoke>
