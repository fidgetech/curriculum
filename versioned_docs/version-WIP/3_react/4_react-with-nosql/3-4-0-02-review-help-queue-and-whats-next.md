---
title: "📓 3.4.0.2 Review: Help Queue and What's Next"
day: weekend
id: 3-4-0-2-review-help-queue-and-whats-next
hide_table_of_contents: true
---

In React Fundamentals, we built the Help Queue from scratch: a full CRUD application with components, props, state, event handlers, forms, and callbacks, all written in TypeScript. Before we add new features, let's take stock of where we left off and identify the one thing the app still can't do.

## The Help Queue Component Tree

Here's the full component tree, the hierarchy we built up piece by piece in React Fundamentals:

```
App
├── Header
└── TicketControl
    ├── TicketList
    │   └── Ticket (one for each ticket)
    ├── NewTicketForm
    │   └── ReusableForm
    ├── TicketDetail
    └── EditTicketForm
        └── ReusableForm
```

Every one of those components lives in `src/components` as a `.tsx` file, and the shared `TicketData` type lives in `src/types.ts`.

`TicketControl` is the center of the app. It holds all shared state and decides which view to render.

## State in TicketControl

Here's the state in `TicketControl` at the end of React Fundamentals:

```ts
const [mainTicketList, setMainTicketList] = useState<TicketData[]>([]);
const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
const [selectedTicket, setSelectedTicket] = useState<TicketData | null>(null);
const [editing, setEditing] = useState(false);
```

- `mainTicketList` holds all the tickets
- `formVisibleOnPage` tracks whether the new ticket form is visible
- `selectedTicket` holds the ticket the user has clicked on (for the detail and edit views)
- `editing` tracks whether the edit form is showing

Notice which of these need an explicit type argument and which don't. `formVisibleOnPage` and `editing` start out as `false`, so TypeScript infers `boolean` on its own. An empty array and `null` don't say enough by themselves, so we spell those out: `useState<TicketData[]>([])` and `useState<TicketData | null>(null)`.

Data flows from `TicketControl` down to child components via props, and each component declares a props type describing exactly what it expects. When a child needs to communicate back, whether to create, update, or delete a ticket, it calls a callback function that was passed down from `TicketControl`.

## The Missing Piece: Persistence

The app works well, but there's a problem: **the data doesn't survive a page refresh.**

The `mainTicketList` array only exists in memory. Close the browser tab, refresh the page, or open the app on a different device, and all the tickets are gone. That's because there's no database storing them anywhere.

For a real application, we need data to **persist**: to be saved somewhere so it survives page refreshes and can be shared across users and devices.

## The Solution: Firebase and Firestore

We're going to connect Help Queue to a real database using **Firebase**, a cloud service from Google. Specifically, we'll use **Firestore**, Firebase's NoSQL database, to store our tickets.

With Firestore:
- Tickets will be stored in a collection in the cloud, not in a local array
- Creating, updating, or deleting a ticket will write to the database
- The UI will update automatically whenever the database changes

From a user's perspective, the app will look and work the same. But the data will now persist across refreshes and be accessible from anywhere.

## A New Tool: `useEffect`

To connect to Firestore, we'll set up a live connection: something that listens for changes in the database and updates the component when tickets change. Setting up this kind of connection is called a **side effect**, meaning code that reaches outside the component to interact with an external system.

React has a hook for running side effects: `useEffect`. We already know `useState` for managing state inside a component. `useEffect` is the companion hook for everything that happens *around* a render, such as connecting to databases, setting up subscriptions, or updating the page title.

We'll learn exactly how `useEffect` works in the next lesson.

## Getting Your Help Queue Ready

You'll continue building on the Help Queue you completed in React Fundamentals.

<!-- TODO: Update this link to point to a hooks-based TypeScript starter repo:

If you have a working repo from that section, use it. If you'd like a clean starting point, here is a repo with the final Help Queue from the React Fundamentals section:

---
**[<i class="glyphicon glyphicon-folder-open"></i>  Help Queue - React Fundamentals Complete](https://github.com/epicodus-lessons/react-with-nosql-starter-project)**

---

-->
