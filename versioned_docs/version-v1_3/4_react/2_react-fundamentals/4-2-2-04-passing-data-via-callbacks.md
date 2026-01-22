---
title: "📓 4.2.2.4 Passing Data Via Callbacks"
day: tuesday
id: 4-2-2-4-passing-data-via-callbacks
hide_table_of_contents: true
---

In the last lesson, we covered the concept of unidirectional data flow. In this lesson, we'll apply what we've learned. To recap, we'll need to do the following:

1. Add `mainTicketList` to state in our `TicketControl` component.
2. Create a function in `TicketControl` that will take form data and add it to our ticket list.
3. Pass this function down to the child `NewTicketForm` component as a prop.
4. Call this function in our child component when the form is submitted.

Despite the relatively small amount of code being added, we are working with challenging new concepts. Be patient with yourself and follow along slowly. If it doesn't all click immediately (and it probably won't), trust the process and keep practicing these concepts in class and on your own.

## Step 1: Add mainTicketList to State
---

Let's start by adding a `mainTicketList` state variable and passing it down as a prop to `TicketList`:

```js title="src/components/TicketControl.js"
import React, { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

function TicketControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTicketList, setMainTicketList] = useState([]); // new code

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (formVisibleOnPage) {
    currentlyVisibleState = <NewTicketForm />;
    buttonText = "Return to Ticket List";
  } else {
    currentlyVisibleState = <TicketList ticketList={mainTicketList} />; // updated
    buttonText = "Add Ticket";
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}

export default TicketControl;
```

Notice we're initializing `mainTicketList` as an empty array. We're doing this because we don't want this application to start with fake tickets. The queue should be empty until we start adding tickets via our form. (We'll be removing our array of dummy tickets from `TicketList` in just a moment.)

Also, notice how we're passing `mainTicketList` down to `TicketList` as a prop called `ticketList`.

## Step 2: Update TicketList to Use Props
---

In step 1, we passed `mainTicketList` state from `TicketControl` down to our `TicketList` component. Now we need to update `TicketList.js` to use this prop. We'll also remove the old `mainTicketList` constant that held our dummy tickets.

```js title="src/components/TicketList.js"
import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

// Remove const mainTicketList = [ ... ]. We no longer need these dummy tickets.

function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.ticketList.map((ticket, index) =>
        <Ticket 
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index} />
      )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
```

We've made several changes here:

- Now that we are passing `ticketList` down through `props`, we need to import `prop-types` and add a prop type of `array` for our `ticketList`.
- We removed our `mainTicketList` constant which stored the dummy tickets — we won't need these anymore!
- We loop through `props.ticketList` instead of the local constant.

Now we'll be able to make changes to our ticket list and display tickets as they're added.

## Step 3: Create a Function to Handle Adding Tickets
---

Now let's create a function in `TicketControl` that will handle adding new tickets to our list:

```js title="src/components/TicketControl.js"
import React, { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

function TicketControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTicketList, setMainTicketList] = useState([]);

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  }

  const handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = mainTicketList.concat(newTicket);
    setMainTicketList(newMainTicketList);
    setFormVisibleOnPage(false);
  }

  // ... rest of component
}
```

Our new function is called `handleAddingNewTicketToList` because it does just that — handles the process of adding a new ticket to our `mainTicketList`. It takes a `newTicket` as a parameter.

:::info[naming convention]
It's common practice to prefix the name of an event handler function with `handle`. Any props containing that function will be prefixed with `on`. This is because the prop will be used _when_ the event occurs, but the function itself is what _actually handles_ the necessary actions. It also ensures the names are similar enough to easily determine which props and functions correspond, yet different enough to tell them apart.
:::

Let's break down what this function does:

1. **Create a new array:** We call `mainTicketList.concat(newTicket)`. Unlike `push()`, which directly alters the array it's called on, `concat()` returns a _new_ array with the item added. This is important because we should **never alter state directly**. You'll also commonly see the spread operator used for this: `[...mainTicketList, newTicket]`. Both approaches create a new array without mutating state.

2. **Update state:** We call `setMainTicketList(newMainTicketList)` to update our state with the new array.

3. **Hide the form:** We call `setFormVisibleOnPage(false)` so the user sees the queue (with their new ticket) instead of the form.

## Step 4: Pass the Function Down as a Prop
---

Now we need to pass `handleAddingNewTicketToList` down to our `NewTicketForm` component as a prop:

```js title="src/components/TicketControl.js"
...

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

...
```

We pass `handleAddingNewTicketToList` as a prop called `onNewTicketCreation`. Notice the naming convention: `handle` prefix for the function, `on` prefix for the prop.

:::tip
Note that we split the JSX onto multiple lines for readability. This is a common practice when passing multiple props or when the component name and props exceed a certain length.
:::

Next, we need to update `NewTicketForm` to accept and use this prop:

```js title="src/components/NewTicketForm.js"
import React from "react";
import PropTypes from "prop-types";

function NewTicketForm(props) {

  // We'll update this function in the next step
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
```

We've added two things:

1. Made sure `props` is a parameter of our function component.
2. Added `PropTypes` for `onNewTicketCreation`, specifying it's a function.

## Step 5: Use the Callback and Add a Unique ID
---

We're almost done! We need to:

- Import the UUID library to assign unique IDs to new tickets.
- Update `handleNewTicketFormSubmission` to create a ticket object and pass it to `onNewTicketCreation`.

Here's the complete updated `NewTicketForm`:

```js title="src/components/NewTicketForm.js"
import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewTicketForm(props) {

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
```

We call `props.onNewTicketCreation()` and pass in an object with all of the ticket properties, including a unique ID generated by the UUID library.

:::tip
If you need to get a number from a form, remember to parse the value. For example:

```js
props.onNewTicketCreation({
  // ...other properties
  numberOfStudents: parseInt(event.target.numberOfStudents.value)
});
```
:::

One last thing. Now that we're assigning a unique ID to each ticket, we should update our `TicketList` component to use this ID as the `key` prop instead of the array index. Using a stable unique identifier as the key is a React best practice - it helps React efficiently track which items have changed, been added, or removed, avoiding potential rendering bugs.

```js title="src/components/TicketList.js"
...

{props.ticketList.map((ticket) =>
  <Ticket 
    names={ticket.names}
    location={ticket.location}
    issue={ticket.issue}
    key={ticket.id} />
)}

...
```

## How It All Connects
---

Let's trace the data flow:

1. User fills out the form and clicks "Help!"
2. `handleNewTicketFormSubmission` in `NewTicketForm` is called
3. This function calls `props.onNewTicketCreation()` with the ticket data
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
