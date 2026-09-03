---
title: "📓 3.4.0.14 Updating and Deleting Tickets in Firestore"
day: weekend
id: 3-4-0-14-updating-and-deleting-tickets-in-firestore
hide_table_of_contents: true
---

We're ready to get our edit and delete functionality working again. We will continue to update code in `TicketControl.tsx` to make the edit and delete functionality alter tickets directly in Firestore. We'll also make use of three Firestore functions:

* `updateDoc()` will allow us to update a document in Firestore.
* `deleteDoc()` will allow us to delete documents in Firestore.
* `doc()` will allow us to reference a document in the Firestore database. With `doc()`, we can specify the location of a new document or the location of an existing document.

## Updating Tickets
---

To update tickets in Firestore, we'll refactor the `handleEditTicket()` function in the `TicketControl` component.

First, we need to import `updateDoc` and `doc` from `firebase/firestore`:

```tsx title="src/components/TicketControl.tsx"
import { collection, addDoc, onSnapshot, doc, updateDoc } from 'firebase/firestore';
```

Next, we need to refactor the `handleEditTicket()` function. Here's the new code:

```tsx title="src/components/TicketControl.tsx"
const handleEditTicket = async (ticketToEdit: TicketData) => {
  const { id, ...ticketFields } = ticketToEdit;
  const ticketRef = doc(db, "tickets", id);
  await updateDoc(ticketRef, ticketFields);
  setEditing(false);
  setSelectedTicket(null);
}
```

While this code is new, it's rather similar to the process we followed when adding a ticket to Firestore:

* First, we separate the ticket's `id` from the rest of its fields using rest destructuring: `const { id, ...ticketFields } = ticketToEdit;`. We need the `id` on its own to build the document reference, and we want the remaining fields on their own as the document's new data. Notice that `ticketFields` ends up with exactly the shape of `Omit<TicketData, "id">`, which TypeScript works out for us without any annotation.
* Next, we create a document reference with the `doc()` function for the ticket that we want to update:
  * The `doc()` function takes 3 arguments: the database instance, the collection name, and the unique document identifier.
  * The `doc()` function returns a `DocumentReference` object, which as its name suggests, is an object that acts as a reference to a document within our Firestore database.
* Next, we call the `updateDoc()` function. The first argument we pass into this function is the document reference for the ticket we want to update, and the second argument is the new data that the ticket should be updated with.
* Finally, take note that the `updateDoc()` function is asynchronous, so we need to make our `handleEditTicket()` function `async` and apply the `await` keyword before the `updateDoc()` function call.

:::note[Why separate out the `id`?]
We could pass the whole `ticketToEdit` object as the second argument to `updateDoc()`, and it would work. But remember where our ticket IDs come from now: Firestore assigns each document an identifier, and in the last lesson we read that identifier with `doc.id`. The `id` property on our ticket objects is something we _derive_ from the document, not something stored inside it.

If we wrote the whole object back, we'd add a redundant `id` field to the document's data. It wouldn't break anything, because our listener still reads the identifier rather than the field, but it would mean the same value lives in two places and could disagree. Keeping the id out of the document data keeps a single source of truth.
:::

Note that we can optionally rewrite the above function to combine the `doc()` and `updateDoc()` calls onto one line:

```tsx
const handleEditTicket = async (ticketToEdit: TicketData) => {
  const { id, ...ticketFields } = ticketToEdit;
  await updateDoc(doc(db, "tickets", id), ticketFields);
  setEditing(false);
  setSelectedTicket(null);
}
```

Since we set up the listener in the last lesson, this means that anytime we update a ticket with the `updateDoc()` function, our listener will be triggered and the `mainTicketList` state variable in the `TicketControl` component will be updated.

Notice also what's missing from this function. In React Fundamentals, `handleEditTicket` used `map()` to build a new list with the edited ticket swapped in, then called `setMainTicketList()`. That work is gone now, because the listener does it for us. We write to the database, the database notifies our listener, and the listener updates state.

## Deleting Tickets
---

To delete documents in Firestore, we'll update the `handleDeleteTicket()` function in the `TicketControl` component. We'll also need the Firestore function `deleteDoc()`, so let's start by updating our import statement from `firebase/firestore`:

```tsx title="src/components/TicketControl.tsx"
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
```

Next, let's update `handleDeleteTicket()`. Here's the new code:

```tsx title="src/components/TicketControl.tsx"
const handleDeleteTicket = async (id: string) => {
  await deleteDoc(doc(db, "tickets", id));
  setSelectedTicket(null);
}
```

The `deleteDoc()` function follows the same pattern as `updateDoc()`:

* It's asynchronous and uses `async` and `await` to manage the asynchrony.
* It takes a document reference as an argument that specifies which document in the Firestore database should be deleted.

The only difference from the `updateDoc()` function is that `deleteDoc()` does not take a second argument for data.

Notice that the signature of `handleDeleteTicket` hasn't changed at all: it still takes an `id: string`. That matters because `TicketDetail` declares its `onClickingDelete` prop as `(id: string) => void`, and our new function still satisfies that contract. We rewrote the entire body of this function to talk to a database instead of to local state, and not a single other component needed to change. That's what a well-defined type at a component boundary buys us: we can replace an implementation with confidence that we haven't broken the components around it.

And with that, we've completed CRUD functionality for our Help Queue application!

## What's Next
---

In the next lesson, we'll wrap up our introduction to Firestore by reviewing how to structure data in Firestore.

In upcoming coursework, we'll expand the functionality of our Help Queue:

* We'll add authentication and basic authorization.
* We'll use the react-router library to create routes.
* We'll host our project with Firebase.
* We'll learn about Firestore Queries and other further exploration opportunities.
