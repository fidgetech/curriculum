---
title: "📓 4.2.1.6 Updating State with Events"
day: monday
id: 4-2-1-6-updating-state-with-events
hide_table_of_contents: true
---

In this lesson, we'll handle our first event in a React application. We've handled many events before — every time we use functions to respond to a click or a submit button, we are handling an event. The process in React is very similar:

* First, we add a click handler to an element (such as a button).
* Next, that click handler will trigger a function. We need to write that function as well.

## Adding a Click Handler to JSX
---

Here's how our click handler will look:

```jsx
<button onClick={handleClick}>Add ticket</button>
```

Here, we take a `button` element and add an `onClick` handler to it. We need to specify the function `onClick` will trigger. As always, we need to use curly braces to make sure that JSX properly evaluates any JS code.

Note that there are a few syntactical differences between how we do this in React as opposed to how we'd accomplish the same thing with vanilla JavaScript:

- Instead of `onclick`, we use `onClick` (camelCase is important in React).
- In plain old JavaScript, we'd wrap the function being called in a string, like `<button onclick="doSomething()">`. In JSX, we use curly braces.

Other than these syntactical differences, attaching click handlers in React is very similar to how we might attach a click handler in a vanilla JavaScript application.

Now let's actually add our event handler to our component:

```js title="src/components/TicketControl.js"
import React, { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

function TicketControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);

  let currentlyVisibleState = null;
  let buttonText = null; // new code

  if (formVisibleOnPage) {
    currentlyVisibleState = <NewTicketForm />;
  } else {
    currentlyVisibleState = <TicketList />;
    buttonText = "Add Ticket"; // new code
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button> { /* new code */ }
    </React.Fragment>
  );
}

export default TicketControl;
```

We've added a button to our `TicketControl` component. Notice that we haven't defined the `handleClick` function yet — we'll do that in the next section.

:::tip
There are two different kinds of comments above — this is expected. Comments in JSX syntax need to be wrapped in curly braces, unlike the other comments, which are standard JS comments.
:::

We've added a few things:

* We create a new variable called `buttonText` and set its value to `null`.
* If `formVisibleOnPage` is `false`, we set the value of `buttonText` to `"Add Ticket"`.
* In the return statement, we render the button with the text stored in `buttonText`.

You may wonder why we have this button here instead of in the `TicketList` component. Well, this button has nothing to do with displaying tickets — it's about controlling which view is shown! It belongs in `TicketControl` because it directly affects this component's state.

## Writing the Event Handler Function
---

Next, we need to write the function that will be called when the button is clicked. In a function component, we simply define a function inside our component:

```js title="src/components/TicketControl.js"
import React, { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

function TicketControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);

  // new code
  const handleClick = () => {
    setFormVisibleOnPage(true);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (formVisibleOnPage) {
    currentlyVisibleState = <NewTicketForm />;
  } else {
    currentlyVisibleState = <TicketList />;
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

Our `handleClick` function is simple — it just calls `setFormVisibleOnPage(true)` to update our state.

Now if we run our application, we can successfully click on "Add Ticket" and our form will show!

## Toggling a Boolean
---

When we add a working form to our application, our submit button will return users to the list of tickets. However, what if a user changes their mind and wants to return to the queue without submitting a ticket? Let's update our button so that it can toggle between the two views.

First, let's update our `handleClick` function to toggle the boolean instead of just setting it to `true`:

```js title="src/components/TicketControl.js"
const handleClick = () => {
  setFormVisibleOnPage(!formVisibleOnPage);
}
```

This line says: "set `formVisibleOnPage` to the opposite of its current value." If it's `true`, it becomes `false`. If it's `false`, it becomes `true`.

For most cases, this approach works perfectly. However, if you're dealing with rapid state updates or updates inside effects, you might want to use the functional form of the state updater:

```js
const handleClick = () => {
  setFormVisibleOnPage(prevState => !prevState);
}
```

This version receives the previous state as an argument and returns the new state. It's more explicit about the fact that the new state depends on the previous state.

### Updating the Button for Both Views

Now that we've updated our `handleClick` function to toggle, we need to update our conditional logic so that the button text changes depending on which view is currently visible:

```js title="src/components/TicketControl.js"
import React, { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

function TicketControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (formVisibleOnPage) {
    currentlyVisibleState = <NewTicketForm />;
    buttonText = "Return to Ticket List";
  } else {
    currentlyVisibleState = <TicketList />;
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

Now the button shows "Return to Ticket List" or "Add Ticket" depending on the view. It's the same button with the same click handler — we just change the text to make it clear what clicking the button will do.

At this point, we've successfully added local state and we can use a button to toggle back and forth between two components. Make sure to take the time to practice working with local state and event handlers.

## A Note on Function Definitions
---

You might wonder why we define `handleClick` as an arrow function:

```js
const handleClick = () => {
  setFormVisibleOnPage(!formVisibleOnPage);
}
```

In function components, you can also use regular function declarations:

```js
function handleClick() {
  setFormVisibleOnPage(!formVisibleOnPage);
}
```

Both work fine in function components! The arrow function syntax is common because it's concise, and some developers prefer the consistency of always using `const` for function definitions. Use whichever style you prefer.
