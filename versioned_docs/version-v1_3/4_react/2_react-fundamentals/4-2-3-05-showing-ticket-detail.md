---
title: "📓 4.2.3.5 Showing Ticket Detail"
day: wednesday
id: 4-2-3-5-showing-ticket-detail
hide_table_of_contents: true
---

In the lesson [Planning Our Application: Part 3](4-2-3-3-planning-our-application-part-3), we planned how to add a `TicketDetail` component to our Help Queue. Now let's build it!

## The Big Picture

Before we write any code, let's understand what we're trying to accomplish:

1. A user sees the ticket list
2. They click on a ticket
3. The detail view for that ticket appears
4. They click "Return to Ticket List" to go back

To make this work, we need to answer two questions:

- **How does `TicketControl` know which ticket was clicked?** We'll pass a function *down* to `Ticket` that reports back when clicked.
- **How does the correct detail view appear?** We'll store the selected ticket in `TicketControl`'s state and use conditional rendering to show `TicketDetail` with the right ticket when appropriate.

Think of it like a restaurant: the waiter (`Ticket`) doesn't cook the food — they just take your order and pass it back to the kitchen (`TicketControl`). The kitchen decides what to do with that information.

## Our Roadmap

We'll work through this in seven steps:

1. Create a placeholder `TicketDetail` component
2. Add `selectedTicket` state to `TicketControl`
3. Write a function to handle ticket selection
4. Update the conditional rendering in `TicketControl`
5. Pass the function down through `TicketList` to `Ticket`
6. Display the actual ticket data in `TicketDetail`
7. Fix the "Return to Ticket List" button

Let's go!

---

## Step 1: Create the `TicketDetail` Component

We'll start simple — just a placeholder that proves our component works. Create a new file called `TicketDetail.js` in the `src/components` folder with this content:

```js title="src/components/TicketDetail.js"
import React from "react";

function TicketDetail(props) {
  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <p>You clicked on a ticket!</p>
      <hr />
    </React.Fragment>
  );
}

export default TicketDetail;
```

Nothing fancy yet. We'll add the actual ticket data later once we confirm everything is connected properly.

---

## Step 2: Add State to Track the Selected Ticket

Now we need `TicketControl` to remember which ticket (if any) the user has selected.

Add this new state variable alongside the existing ones in `TicketControl.js`:

```js title="src/components/TicketControl.js"
// Inside the TicketControl component function
const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
const [mainTicketList, setMainTicketList] = useState([]);
const [selectedTicket, setSelectedTicket] = useState(null); // Add this line
```

**Why `null`?** Because when the app loads, no ticket is selected yet (the user has not clicked on one). We use `null` to represent "nothing selected." Later we'll update this state to hold the actual ticket object when the user clicks a ticket.

---

## Step 3: Write the Selection Handler Function

When a user clicks a ticket, we need a function that:
1. Takes the ticket's `id`
2. Finds the matching ticket in our list
3. Stores it in `selectedTicket` state

Add this function inside `TicketControl`:

```js title="src/components/TicketControl.js"
const handleChangingSelectedTicket = (id) => {
  const selection = mainTicketList.find(ticket => ticket.id === id); // Find ticket with given id
  setSelectedTicket(selection); // Store the selected ticket in state
};
```

**Breaking this down:**
- `find()` returns the first ticket where `ticket.id === id`
- `setSelectedTicket(selection)` updates our state, triggering a re-render

:::tip[find() vs filter()]
**Why `find()` instead of `filter()`?** `find()` returns a single item (the first match), while `filter()` returns an array of all matches. Since ticket IDs are unique, we only need one ticket, so `find()` is the right choice here.
:::

---

## Step 4: Update the Conditional Rendering

Now we need to actually *show* the `TicketDetail` component with the selected ticket when a ticket is selected.

First, import the `TicketDetail` component at the top of `TicketControl.js`:

```js
import TicketDetail from './TicketDetail';
```

Then update the conditional rendering logic. Here's the key insight: **we now have three possible views**, and we need to check them in the right order:

- **1.** If a ticket is selected, show `TicketDetail` with that ticket.
- If no ticket is selected, either show the form or the list depending on `formVisibleOnPage` state:
  - **2.** If `formVisibleOnPage` is true, show `NewTicketForm`.
  - **3.** Otherwise, show `TicketList`.

```js title="src/components/TicketControl.js"
let currentlyVisibleState = null;
let buttonText = null;

if (selectedTicket !== null) {
  // A ticket is selected → show its details
  currentlyVisibleState = <TicketDetail ticket={selectedTicket} />;
  buttonText = "Return to Ticket List";
} else if (formVisibleOnPage) {
  // No ticket selected, but form should show → show the form
  currentlyVisibleState = (
    <NewTicketForm onNewTicketCreation={handleAddingNewTicketToList} />
  );
  buttonText = "Return to Ticket List";
} else {
  // Default → show the ticket list
  currentlyVisibleState = (
    <TicketList
      ticketList={mainTicketList}
      onTicketSelection={handleChangingSelectedTicket}
    />
  );
  buttonText = "Add Ticket";
}
```

**Notice two important things:**

1. We check `selectedTicket` *first*. Order matters! If a ticket is selected, we want to show its details regardless of what `formVisibleOnPage` says.

2. We pass `handleChangingSelectedTicket` to `TicketList` as a prop called `onTicketSelection`. This is how we'll eventually connect clicks to our handler.

---

## Step 5: Pass the Function Through `TicketList` to `Ticket`

Here's a tricky part. Our click handler lives in `TicketControl`, but the actual clicking happens in `Ticket`. We need to pass the function through `TicketList` to get it there.

**Think of it like passing a note in class:** `TicketControl` writes the note, hands it to `TicketList`, who hands it to `Ticket`.

### Update `TicketList`

```js title="src/components/TicketList.js"
import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.ticketList.map((ticket) =>
        <Ticket
          whenTicketClicked={props.onTicketSelection} // pass the function
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          id={ticket.id} // pass the ticket's id
          key={ticket.id}
        />
      )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func // added prop type
};

export default TicketList;
```

**What changed:**
- We receive `onTicketSelection` from `TicketControl` (via `props.onTicketSelection`)
- We pass it down to each `Ticket` as `whenTicketClicked`
- We pass the ticket's `id` as a prop (each `Ticket` needs to know its own ID)
- We updated TicketList.propTypes to include `onTicketSelection` as a function

### Update `Ticket`

Now `Ticket` has access to the click handler function. Let's make it call that function when clicked:

```js title="src/components/Ticket.js"
import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenTicketClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Ticket;
```

**The crucial line:**
```jsx
<div onClick={() => props.whenTicketClicked(props.id)}>
```

**Why the arrow function?** If we wrote `onClick={props.whenTicketClicked(props.id)}`, the function would run immediately when the component renders — not when clicked! The arrow function says "when clicked, *then* call this function with this ID."

At this point, if you click a ticket, you should see the `TicketDetail` placeholder we made earlier. (Note that the Return to Ticket List button won't work yet; we'll fix that before the end of this lesson.)

Note that we also updated `Ticket.propTypes` to include `id` and `whenTicketClicked`.

---

## Step 6: Display the Actual Ticket Data

Now that clicking works, let's update `TicketDetail` to show real ticket information:

```js title="src/components/TicketDetail.js"
import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props) {
  const { ticket } = props;  // Destructure for cleaner code

  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <hr />
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object
};

export default TicketDetail;
```

:::tip[About destructuring]
**`const { ticket } = props`** is shorthand for **`const ticket = props.ticket`**. It makes the code cleaner, especially when accessing multiple properties.
:::

---

## Step 7: Fix the "Return to Ticket List" Button

Try clicking a ticket, then clicking "Return to Ticket List." Uh oh — it shows the form instead of the list!

The problem is in the `handleClick` function in the `TicketControl` component. We need to clear `selectedTicket` when returning to the ticket list because otherwise the conditional rendering still thinks a ticket is selected.

```js title="src/components/TicketControl.js"
const handleClick = () => {
  if (selectedTicket !== null) {
    // We're on the detail page → go back to the list
    setFormVisibleOnPage(false);
    setSelectedTicket(null);
  } else {
    // We're on the form or list → toggle the form
    setFormVisibleOnPage(!formVisibleOnPage);
  }
};
```

**The logic:**
- If `selectedTicket` has a value, we must be viewing ticket details. Clear it to go back to the list.
- Otherwise, toggle the form like before.

---

## Recap: How Data Flows

Let's trace what happens when a user clicks a ticket:

```
User clicks ticket in Ticket component
    ↓
onClick calls props.whenTicketClicked(props.id)
    ↓
That function is actually handleChangingSelectedTicket from TicketControl
    ↓
handleChangingSelectedTicket finds the ticket and calls setSelectedTicket
    ↓
State updates, component re-renders
    ↓
Conditional sees selectedTicket !== null
    ↓
TicketDetail renders with the selected ticket
```

The function travels *down* through props. The data (which ticket was clicked) travels back *up* through that function call. This pattern — passing functions as props to handle events is fundamental to React.

---

## Summary

Here's what we accomplished:

| Component | What It Does |
|-----------|--------------|
| `TicketControl` | Holds `selectedTicket` state; provides `handleChangingSelectedTicket` function |
| `TicketList` | Passes the handler function down to each `Ticket` |
| `Ticket` | Calls the handler with its ID when clicked |
| `TicketDetail` | Displays the selected ticket's information |

This pattern of "lifting state up" to a parent component and passing handlers down is one you'll use constantly in React. It might feel awkward at first, but with practice it becomes second nature.

If you've been holding your breath (hopefully not), you can breathe out now. All of these steps may seem overly complicated at first. There are a lot of moving parts in a React application, especially once we start passing around a lot of props. Good planning is very important. Ultimately, the content in this lesson will be more likely to click if you code along with it.

Practice is also important, and at least in the short term, try to look at bugs as a potential teacher as opposed to a source of frustration. Bugs _will_ happen, especially at first. It can be challenging to keep track of all the props that need to be passed around — along with all the other little details that come with adding a core piece of functionality. However, React error messages tend to be very informative, so follow your errors up and down the component tree until you see where everything connects.

---

## Troubleshooting Common Issues

**"Nothing happens when I click a ticket"**
- Check that `onClick` uses an arrow function: `onClick={() => ...}`
- Verify the function is being passed down through each component
- Add `console.log` statements to trace where the chain breaks

**"I see the form instead of the ticket list"**
- Make sure you updated `handleClick` to check `selectedTicket`
- Verify the order of your conditionals (check `selectedTicket` first)

**"Props are undefined"**
- Double-check spelling of prop names at each level
- Make sure you're accessing `props.propName`, not just `propName`
