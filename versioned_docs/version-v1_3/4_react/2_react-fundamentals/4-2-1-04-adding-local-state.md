---
title: "📓 4.2.1.4 Adding Local State"
day: monday
id: 4-2-1-4-adding-local-state
hide_table_of_contents: true
---

We're ready to add local state to our application. We'll start by adding two new components to `src/components`:

- `NewTicketForm.js`: This will be our form
- `TicketControl.js`: This will be the parent component for `NewTicketForm.js` and `TicketList.js`

Let's add some placeholder code to our `NewTicketForm` component:

```js title="src/components/NewTicketForm.js"
import React from "react";

function NewTicketForm(props){
  return (
    <React.Fragment>
      <h3>This is a form.</h3>
    </React.Fragment>
  );
}

export default NewTicketForm;
```

Because we are only worried about our local state right now (and toggling between two different components), we won't worry about the particulars of the form just yet.

Next, let's add our `TicketControl` component. This component will use the `useState` hook to manage local state.

```js title="src/components/TicketControl.js"
import React, { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

function TicketControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);

  return (
    <React.Fragment>
    </React.Fragment>
  );
}

export default TicketControl;
```

Let's walk through what we've set up:

1. We import `useState` from React.
2. We import both `NewTicketForm` and `TicketList` since this component will be their parent.
3. We create a state variable called `formVisibleOnPage` with an initial value of `false`.
4. We also get a function called `setFormVisibleOnPage` that we'll use to update this state.

Next, let's make a small update to our `App` component. It now needs to render the `TicketControl` component rather than the `TicketList` component.

```js title="src/components/App.js"
import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <TicketControl />
    </React.Fragment>
  );
}

export default App;
```

We no longer import the `TicketList` component — we import `TicketControl` instead. Our `App` component has also been updated to display the `TicketControl` component instead of `TicketList` as well.

**Note that if we run our application right now, it will not render any tickets.** This is expected — our `TicketControl` component doesn't render anything yet.

## Understanding Our Local State
---

Remember that our component can have one of two possible states:

* `TicketList` is showing and `NewTicketForm` is hidden
* `NewTicketForm` is showing and `TicketList` is hidden

What do we want the default local state to be? A list of tickets or a form? Here we're setting the default state to show the `TicketList` component and hide the `NewTicketForm` component. That's why we initialized our state like this:

```js
const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
```

The default state of our application has `formVisibleOnPage` set to `false`.

We can add as many state variables as we need using multiple `useState` calls:

```js
const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
const [mainTicketList, setMainTicketList] = useState([]);
const [selectedTicket, setSelectedTicket] = useState(null);
```

Each `useState` call creates an independent piece of state with its own updater function. This is a key advantage of hooks — we can separate our concerns by having different state variables for different purposes.

Now that we have a default state, we need a way to change it. We'll also need to use conditional rendering to determine which component should be showing.

In the next lesson, we'll add conditional rendering to our component. Then, in the lesson after that, we'll learn how to update state with events. After those two lessons are complete, we will have working functionality to toggle between our ticket list and our placeholder form.
