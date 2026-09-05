---
title: "📓 3.3.3.5 Showing Ticket Detail"
day: wednesday
id: 3-3-3-5-showing-ticket-detail
hide_table_of_contents: true
---

In the lesson [Planning Our Application: Part 3](3-3-3-3-planning-our-application-part-3), we planned how to add a `TicketDetail` component to our Help Queue. Now let's build it!

## The Big Picture

Before we write any code, let's understand what we're trying to accomplish:

1. A user sees the ticket list
2. They click on a ticket
3. The detail view for that ticket appears
4. They click "Return to Ticket List" to go back

To make this work, we need to answer two questions:

- **How does `TicketControl` know which ticket was clicked?** We'll pass a function *down* to `Ticket` that reports back when clicked.
- **How does the correct detail view appear?** We'll store the selected ticket in `TicketControl`'s state and use conditional rendering to show `TicketDetail` with the right ticket when appropriate.

Think of it like a restaurant: the waiter (`Ticket`) doesn't cook the food - they just take your order and pass it back to the kitchen (`TicketControl`). The kitchen decides what to do with that information.

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

We'll start simple - just a placeholder that proves our component works. Create a new file called `TicketDetail.tsx` in the `src/components` folder with this content:

```tsx title="src/components/TicketDetail.tsx"
function TicketDetail() {
  return (
    <>
      <h1>Ticket Detail</h1>
      <p>You clicked on a ticket!</p>
      <hr />
    </>
  );
}

export default TicketDetail;
```

Nothing fancy yet. We'll add the actual ticket data later once we confirm everything is connected properly.

---

## Step 2: Add State to Track the Selected Ticket

Now we need `TicketControl` to remember which ticket (if any) the user has selected.

Add this new state variable alongside the existing ones in `TicketControl.tsx`:

```tsx title="src/components/TicketControl.tsx"
// Inside the TicketControl component function
const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
const [mainTicketList, setMainTicketList] = useState<TicketData[]>([]);
// highlight-next-line
const [selectedTicket, setSelectedTicket] = useState<TicketData | null>(null);
```

**Why `null`?** Because when the app loads, no ticket is selected yet (the user has not clicked on one). We use `null` to represent "nothing selected." Later we'll update this state to hold the actual ticket object when the user clicks a ticket.

:::note[TypeScript Tip]
Notice that we give `useState` an explicit type of `TicketData | null`. Just like the empty array we typed in an earlier lesson, TypeScript can't work out the full type from the starting value on its own. If we wrote `useState(null)`, TypeScript would decide this state can only ever hold `null`, and it would complain the moment we tried to store a ticket in it. Writing `useState<TicketData | null>(null)` says "this holds either a ticket or nothing," which is exactly what we mean.
:::

---

## Step 3: Write the Selection Handler Function

When a user clicks a ticket, we need a function that:
1. Takes the ticket's `id`
2. Finds the matching ticket in our list
3. Stores it in `selectedTicket` state

Add this function inside `TicketControl`:

```tsx title="src/components/TicketControl.tsx"
const handleChangingSelectedTicket = (id: string) => {
  const selection = mainTicketList.find(ticket => ticket.id === id) ?? null; // Find ticket with given id
  setSelectedTicket(selection); // Store the selected ticket in state
};
```

**Breaking this down:**
- The `id` parameter is typed as a `string`, matching the `id` property on our `TicketData` type
- `find()` returns the first ticket where `ticket.id === id`
- If nothing matches, `find()` returns `undefined`. Our state holds `TicketData | null`, not `TicketData | undefined`, so we use `?? null` to turn that `undefined` into `null`. Without it, TypeScript would flag the call to `setSelectedTicket()`.
- `setSelectedTicket(selection)` updates our state, triggering a re-render

:::tip[find() vs filter()]
**Why `find()` instead of `filter()`?** `find()` returns a single item (the first match), while `filter()` returns an array of all matches. Since ticket IDs are unique, we only need one ticket, so `find()` is the right choice here.
:::

---

## Step 4: Update the Conditional Rendering

Now we need to actually *show* the `TicketDetail` component with the selected ticket when a ticket is selected.

First, import the `TicketDetail` component at the top of `TicketControl.tsx`:

```tsx
import TicketDetail from './TicketDetail';
```

Then update the conditional rendering logic. Here's the key insight: **we now have three possible views**, and we need to check them in the right order:

- **1.** If a ticket is selected, show `TicketDetail` with that ticket.
- If no ticket is selected, either show the form or the list depending on `formVisibleOnPage` state:
  - **2.** If `formVisibleOnPage` is true, show `NewTicketForm`.
  - **3.** Otherwise, show `TicketList`.

```tsx title="src/components/TicketControl.tsx"
let currentlyVisibleState;
let buttonText;

// highlight-start
if (selectedTicket !== null) {
  // A ticket is selected → show its details
  currentlyVisibleState = <TicketDetail ticket={selectedTicket} />;
  buttonText = "Return to Ticket List";
} else if (formVisibleOnPage) {
// highlight-end
  // No ticket selected, but form should show → show the form
  currentlyVisibleState = <NewTicketForm onNewTicketCreation={handleAddingNewTicketToList} />;
  buttonText = "Return to Ticket List";
} else {
  // Default → show the ticket list
  currentlyVisibleState = (
    <TicketList
      ticketList={mainTicketList}
      // highlight-next-line
      onTicketSelection={handleChangingSelectedTicket}
    />
  );
  buttonText = "Add Ticket";
}
```

**Notice two important things:**

1. We check `selectedTicket` *first*. Order matters! If a ticket is selected, we want to show its details regardless of what `formVisibleOnPage` says.

2. We pass `handleChangingSelectedTicket` to `TicketList` as a prop called `onTicketSelection`. This is how we'll eventually connect clicks to our handler.

:::note
There's a bonus to writing `if (selectedTicket !== null)`. Inside that block, TypeScript knows `selectedTicket` can't be `null` anymore, so it treats the value as a plain `TicketData`. That's why we can pass it straight to `TicketDetail`, which requires a real ticket. TypeScript follows our conditionals and narrows types along with us.
:::

---

## Step 5: Pass the Function Through `TicketList` to `Ticket`

Here's a tricky part. Our click handler lives in `TicketControl`, but the actual clicking happens in `Ticket`. We need to pass the function through `TicketList` to get it there.

**Think of it like passing a note in class:** `TicketControl` writes the note, hands it to `TicketList`, who hands it to `Ticket`.

### Update `TicketList`

```tsx title="src/components/TicketList.tsx"
import Ticket from "./Ticket";
import { type TicketData } from '../types';

type TicketListProps = {
  ticketList: TicketData[];
  // highlight-next-line
  onTicketSelection: (id: string) => void;
};

// highlight-next-line
function TicketList({ ticketList, onTicketSelection }: TicketListProps) {
  return (
    <>
      <hr />
      {ticketList.map((ticket) =>
        <Ticket
          // highlight-next-line
          onTicketClick={onTicketSelection}
          names={ticket.names}
          section={ticket.section}
          issue={ticket.issue}
          // highlight-next-line
          id={ticket.id}
          key={ticket.id}
        />
      )}
    </>
  );
}

export default TicketList;
```

**What changed:**
- We receive `onTicketSelection` from `TicketControl` and destructure it in the function signature
- We pass it down to each `Ticket` as `onTicketClick`
- We pass the ticket's `id` as a prop (each `Ticket` needs to know its own ID)
- We updated `TicketListProps` to include `onTicketSelection`, typed as `(id: string) => void`: a function that takes a string `id` and returns nothing

### Update `Ticket`

Now `Ticket` has access to the click handler function. Let's make it call that function when clicked:

```tsx title="src/components/Ticket.tsx"
type TicketProps = {
  names: string;
  section: string;
  issue: string;
  // highlight-start
  id: string;
  onTicketClick: (id: string) => void;
};

function Ticket({ names, section, issue, id, onTicketClick }: TicketProps) {
  // highlight-end
  return (
    <>
      {/* highlight-next-line */}
      <div onClick={() => onTicketClick(id)}>
        <h3>{section} - {names}</h3>
        <p><em>{issue}</em></p>
        <hr />
      {/* highlight-next-line */}
      </div>
    </>
  );
}

export default Ticket;
```

**The crucial line:**
```tsx
<div onClick={() => onTicketClick(id)}>
```

**Why the arrow function?** If we wrote `onClick={onTicketClick(id)}`, the function would run immediately when the component renders, not when clicked! The arrow function says "when clicked, *then* call this function with this ID."

At this point, if you click a ticket, you should see the `TicketDetail` placeholder we made earlier. (Note that the Return to Ticket List button won't work yet; we'll fix that before the end of this lesson.)

Note that we also updated `TicketProps` to include `id` and `onTicketClick`.

---

## Step 6: Display the Actual Ticket Data

Now that clicking works, let's update `TicketDetail` to show real ticket information:

```tsx title="src/components/TicketDetail.tsx"
// highlight-start
import { type TicketData } from '../types';

type TicketDetailProps = {
  ticket: TicketData;
};

function TicketDetail({ ticket }: TicketDetailProps) {
  // highlight-end
  return (
    <>
      <h1>Ticket Detail</h1>
      {/* highlight-next-line */}
      <h3>{ticket.section} - {ticket.names}</h3>
      {/* highlight-next-line */}
      <p><em>{ticket.issue}</em></p>
      <hr />
    </>
  );
}

export default TicketDetail;
```

Notice that our `ticket` prop is typed as a whole `TicketData` object rather than as a list of separate `names`, `section`, and `issue` props. Because `TicketControl` already has the complete ticket object in state, it's simpler to hand the whole thing over at once. TypeScript still checks every property we reach for, so `ticket.sekction` would be caught as a typo immediately.

---

## Step 7: Fix the "Return to Ticket List" Button

Try clicking a ticket, then clicking "Return to Ticket List." Uh oh, it shows the form instead of the list!

The problem is in the `handleClick` function in the `TicketControl` component. We need to clear `selectedTicket` when returning to the ticket list because otherwise the conditional rendering still thinks a ticket is selected.

```tsx title="src/components/TicketControl.tsx"
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
onClick calls onTicketClick(id)
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

The function travels *down* through props. The data (which ticket was clicked) travels back *up* through that function call. This pattern of passing functions as props to handle events is fundamental to React.

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

Practice is also important, and at least in the short term, try to look at bugs as a potential teacher as opposed to a source of frustration. Bugs _will_ happen, especially at first. It can be challenging to keep track of all the props that need to be passed around, along with all the other little details that come with adding a core piece of functionality. However, React and TypeScript error messages tend to be very informative, so follow your errors up and down the component tree until you see where everything connects.

---

## Troubleshooting Common Issues

**"Nothing happens when I click a ticket"**
- Check that `onClick` uses an arrow function: `onClick={() => ...}`
- Verify the function is being passed down through each component
- Add `console.log` statements to trace where the chain breaks

**"I see the form instead of the ticket list"**
- Make sure you updated `handleClick` to check `selectedTicket`
- Verify the order of your conditionals (check `selectedTicket` first)

**"TypeScript says a prop is missing or has the wrong type"**
- Double-check the spelling of prop names at each level; the name in the props type has to match the name the parent passes
- Make sure each prop appears in the component's props type, and that you destructured it in the function signature
- For handler props, confirm the function signature matches, such as `(id: string) => void`
