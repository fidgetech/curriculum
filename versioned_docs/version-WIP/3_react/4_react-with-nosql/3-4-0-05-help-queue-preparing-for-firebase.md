---
title: "📓 3.4.0.5 Help Queue: Preparing for Firebase"
day: weekend
id: 3-4-0-5-help-queue-preparing-for-firebase
hide_table_of_contents: true
---

We've now learned `useEffect` for running side effects, as well as the pattern for building custom hooks. Now let's look at the Help Queue and plan exactly how we'll use these tools to connect the app to Firebase.

## Opening Your Project

Go ahead and open your Help Queue project from React Fundamentals.

## Reviewing TicketControl

`TicketControl` is the component we'll be modifying the most. Here's an overview of its structure at the end of React Fundamentals:

```tsx title="src/components/TicketControl.tsx"
function TicketControl() {
  const [mainTicketList, setMainTicketList] = useState<TicketData[]>([]);
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<TicketData | null>(null);
  const [editing, setEditing] = useState(false);

  const handleClick = () => { ... }
  const handleDeleteTicket = (id: string) => { ... }
  const handleEditClick = () => { ... }
  const handleEditTicket = (ticketToEdit: TicketData) => { ... }
  const handleAddingNewTicketToList = (newTicket: TicketData) => { ... }
  const handleChangingSelectedTicket = (id: string) => { ... }

  // conditional rendering ...
}
```

Right now, `mainTicketList` is a local array stored in memory. When the page refreshes, it resets to `[]`.

## What Will Change

Adding Firebase will change **how tickets are stored and retrieved**, but it won't change the shape of the app. Here's what will stay exactly the same:

- The component tree (App, Header, TicketControl, TicketList, Ticket, TicketDetail, NewTicketForm, EditTicketForm, ReusableForm)
- Props and callback functions
- Conditional rendering logic in `TicketControl`
- The `formVisibleOnPage`, `selectedTicket`, and `editing` state variables
- TypeScript types on all components, including the `TicketData` type in `src/types.ts`

Here's what will change:

- **`mainTicketList`** will be populated from Firestore instead of a local array
- **A `useEffect` hook** will subscribe to the Firestore tickets collection when `TicketControl` first mounts, so the component stays in sync with the database automatically:

  ```tsx
  useEffect(() => {
    // subscribe to Firestore: when tickets change, call setMainTicketList with the new data
  }, []);
  ```

- **The handler functions** (`handleAddingNewTicketToList`, `handleDeleteTicket`, `handleEditTicket`) will write to Firestore instead of updating local state directly. The remaining handlers manage UI state only and will stay the same.

## What's Next

Before we can write any of this code, we need to understand Firebase and create a project. The upcoming lessons will cover:

1. What Firebase is and why we're using it
2. What NoSQL databases are and how they differ from SQL
3. Setting up a Firebase project and Firestore database
4. Connecting Firebase to our React app and writing our first database calls
