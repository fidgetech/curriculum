---
title: "📓 4.4.0.2 Review: Help Queue and What's Next"
day: weekend
id: 4-4-0-2-review-help-queue-and-whats-next
hide_table_of_contents: true
---

In React Fundamentals, you built the Help Queue from scratch: a full CRUD application with components, props, state, event handlers, forms, and callbacks. Before we add new features, let's take stock of where we left off — and identify the one thing the app still can't do.

## The Help Queue Component Tree

Here's the full component tree — this is the hierarchy you built up piece by piece in React Fundamentals:

```
App
├── Header
└── TicketControl
    ├── TicketList
    │   └── Ticket (one for each ticket)
    ├── NewTicketForm
    │   └── ReusableForm
    ├── TicketDetail
    │   └── ReusableForm (when editing)
    └── EditTicketForm
        └── ReusableForm
```

`TicketControl` is the center of the app. It holds all shared state and decides which view to render.

## State in TicketControl

Here's the state in `TicketControl` at the end of React Fundamentals:

```js
const [mainTicketList, setMainTicketList] = useState([]);
const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
const [selectedTicket, setSelectedTicket] = useState(null);
const [editing, setEditing] = useState(false);
```

- `mainTicketList` holds all the tickets
- `formVisibleOnPage` tracks whether the new ticket form is visible
- `selectedTicket` holds the ticket the user has clicked on (for the detail and edit views)
- `editing` tracks whether the edit form is showing

Data flows from `TicketControl` down to child components via props. When a child needs to communicate back — to create, update, or delete a ticket — it calls a callback function that was passed down from `TicketControl`.

## The Missing Piece: Persistence

The app works well, but there's a problem: **the data doesn't survive a page refresh.**

The `mainTicketList` array only exists in JavaScript memory. Close the browser tab, refresh the page, or open the app on a different device — and all tickets are gone. That's because there's no database storing them anywhere.

For a real application, we need data to **persist**: to be saved somewhere so it survives page refreshes and can be shared across users and devices.

## The Solution: Firebase and Firestore

We're going to connect Help Queue to a real database using **Firebase**, a cloud service from Google. Specifically, we'll use **Firestore**, Firebase's NoSQL database, to store our tickets.

With Firestore:
- Tickets will be stored in a collection in the cloud, not in a local JavaScript array
- Creating, updating, or deleting a ticket will write to the database
- The UI will update automatically whenever the database changes

From a user's perspective, the app will look and work the same. But the data will now persist across refreshes and be accessible from anywhere.

## A New Tool: `useEffect`

To connect to Firestore, we'll set up a live connection — something that listens for changes in the database and updates the component when tickets change. Setting up this kind of connection is called a **side effect**: code that reaches outside the component to interact with an external system.

React has a hook for running side effects: `useEffect`. You already know `useState` for managing state inside a component. `useEffect` is the companion hook for everything that happens *around* a render — connecting to databases, setting up subscriptions, updating the page title, and so on.

We'll learn exactly how `useEffect` works in the next lesson.

## Getting Your Help Queue Ready

You'll continue building on the Help Queue you completed in React Fundamentals.

<!-- TODO: Update this link to point to a v1.3 hooks-based starter repo:

If you have a working repo from that section, use it. If you'd like a clean starting point, here is a repo with the final Help Queue from the React Fundamentals section:

---
**[<i class="glyphicon glyphicon-folder-open"></i>  Help Queue — React Fundamentals Complete](https://github.com/epicodus-lessons/react-with-nosql-starter-project)**

---

-->


As you read through these lessons as part of your weekend homework, know that you are not required to code along. The first classwork of the course section will prompt you to work through these lessons with your Help Queue project.
