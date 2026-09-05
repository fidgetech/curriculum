---
title: "📓 3.3.3.6 Deleting a Ticket"
day: wednesday
id: 3-3-3-6-deleting-a-ticket
hide_table_of_contents: true
---

In the last lesson, we added the ability for a user to see an individual ticket's detail page. We had to alter or create four different components in order to add this relatively small piece of functionality.

Some good news: adding delete functionality is going to be much easier. This is because we planned out our application carefully. We will only need to alter two components - `TicketControl` (which holds our shared state) and `TicketDetail` (where the delete button will live).

If we'd chosen to place `TicketDetail` below `Ticket` in the component tree, we'd have a prop-drilling nightmare. Our function for deleting tickets would need to pass through `TicketList`, `Ticket`, and `TicketDetail` - three layers of props for one button click!

## Our Roadmap

1. Write a `handleDeleteTicket` function in `TicketControl`
2. Pass this function as a prop to `TicketDetail`
3. Add a delete button that triggers the function

Let's go!

---

## Step 1: Write the `handleDeleteTicket` Function

We'll start by adding a function to `TicketControl` that deletes a ticket from `mainTicketList` based on its ID:

```tsx title="src/components/TicketControl.tsx"
const handleDeleteTicket = (id: string) => {
  const newMainTicketList = mainTicketList.filter(ticket => ticket.id !== id);
  setMainTicketList(newMainTicketList);
  setSelectedTicket(null);
};
```

**Breaking this down:**
- The `id` parameter is typed as a `string`, matching the `id` property on our `TicketData` type
- `filter()` returns all tickets where `ticket.id !== id` - in other words, every ticket *except* the one we're deleting
- `setMainTicketList(newMainTicketList)` updates state with our filtered list
- `setSelectedTicket(null)` returns the user to the ticket list view

:::tip[filter() for deletion]
In the last lesson, we used `find()` to get a single matching ticket. Here we use `filter()` to get all tickets *except* the one we're deleting.
:::

---

## Step 2: Pass the Function to `TicketDetail`

Next, pass `handleDeleteTicket` as a prop to `TicketDetail`. Update the conditional rendering in `TicketControl`:

```tsx title="src/components/TicketControl.tsx"
if (selectedTicket !== null) {
  currentlyVisibleState = (
    <TicketDetail
      ticket={selectedTicket}
      // highlight-next-line
      onClickingDelete={handleDeleteTicket}
    />
  );
  buttonText = "Return to Ticket List";
}
```

---

## Step 3: Add the Delete Button to `TicketDetail`

Now we just need a button that calls `onClickingDelete` when clicked:

```tsx title="src/components/TicketDetail.tsx"
import { type TicketData } from '../types';

type TicketDetailProps = {
  ticket: TicketData;
  // highlight-next-line
  onClickingDelete: (id: string) => void;
};

// highlight-next-line
function TicketDetail({ ticket, onClickingDelete }: TicketDetailProps) {
  return (
    <>
      <h1>Ticket Detail</h1>
      <h3>{ticket.section} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      {/* highlight-next-line */}
      <button onClick={() => onClickingDelete(ticket.id)}>Close Ticket</button>
      <hr />
    </>
  );
}

export default TicketDetail;
```

**What changed:**
- We add `onClickingDelete` to `TicketDetailProps` alongside `ticket`, typed as `(id: string) => void`: a function that takes a string `id` and returns nothing
- We destructure `onClickingDelete` from props in the function signature
- The button's `onClick` uses an arrow function to pass `ticket.id` to the handler

---

## Recap

That's it - just two files changed! This is the payoff from planning our component tree well. Because `TicketDetail` is a direct child of `TicketControl`, we passed one prop through one level.

| Component | What Changed |
|-----------|--------------|
| `TicketControl` | Added `handleDeleteTicket` function; passed it to `TicketDetail` |
| `TicketDetail` | Added delete button that calls `onClickingDelete` |

---

## What's Next?

We're ready to add update functionality, the last piece of CRUD. But first, we'll extract our form into a reusable component. This will save us from duplicating code when we create the edit form.
