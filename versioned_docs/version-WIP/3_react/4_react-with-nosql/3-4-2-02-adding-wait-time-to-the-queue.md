---
title: "📓 3.4.2.2 Adding Wait Time to the Queue"
day: tuesday
id: 3-4-2-2-adding-wait-time-to-the-queue
hide_table_of_contents: true
---

In this lesson we're going to work with the Firestore server timestamp to add a wait time to our Help Queue project. For this refactor, we'll need to complete a few steps:

1. We'll use a new function called `serverTimestamp()` to generate a timestamp when a ticket is initially created. This will be the exact time when the ticket is added to our database.
2. Then, we'll use this timestamp to generate a formatted wait time using the `date-fns` library, computed fresh each time a ticket renders.
3. Finally, we'll set up a `useEffect()` hook with a `setInterval()` function that re-renders the queue every minute, so the formatted wait time stays current.

We'll also learn how to use a Firestore timestamp to order our tickets from oldest to newest. Why bother? Well, we're making use of timestamps for another scenario: preserving the creation order for every document in a collection.

Previously we learned that the auto-generated IDs from Firestore are always random and they do not include any reference as to the order in which each document was created. However, Firestore still orders the documents in a collection alphabetically by its identifier, with numbers taking precedence over letters. This means that the order in which documents appear in the database and our website is subject to change anytime a new document is added. That's no good. So, we'll solve that issue in this lesson, and we'll do so with the help of server timestamps.

Let's get into this refactor!

## Updating Our Types
---

Every ticket is about to carry one new piece of information: the moment it was created. Before we write any component code, let's say so in `src/types.ts`. Doing the types first is a habit worth building: it forces us to decide what shape our data has before we start moving it around.

Here's the updated file:

```ts title="src/types.ts"
// highlight-next-line
import { type FieldValue } from 'firebase/firestore';

export type TicketData = {
  names: string;
  section: string;
  issue: string;
  id: string;
  // highlight-next-line
  timeOpen: Date;
};

// highlight-start
export type NewTicketData = {
  names: string;
  section: string;
  issue: string;
  timeOpen: FieldValue;
};
// highlight-end
```

There's a lot packed into that small file, so let's work through it.

**`TicketData` gains one field.** `timeOpen` is a `Date`, because by the time a ticket reaches our components we'll have converted the Firestore timestamp into a JavaScript `Date` object. We'll compute a human-readable wait time from it later, but we won't store that string on the ticket itself - more on why in a moment.

**`NewTicketData` is no longer built with `Omit`.** This is the interesting part. Up to now, `NewTicketData` was just `Omit<TicketData, "id">`: the exact same fields, minus the one Firestore assigns. That worked because a ticket looked identical going into the database and coming back out.

That's no longer true. On the way _in_, `timeOpen` isn't a date at all. It's the value returned by `serverTimestamp()`, which is a placeholder that tells Firestore "fill this in with the time you receive this write." Firebase types that placeholder as `FieldValue`.

So the two types genuinely describe `timeOpen` differently now, and writing `NewTicketData` out in full is the clearest way to say that. We could express the relationship with an intersection instead:

```ts
export type NewTicketData = Omit<TicketData, "id" | "timeOpen"> & {
  timeOpen: FieldValue;
};
```

Both versions produce the same type. The second one stays in sync automatically if we add a field to `TicketData` later, at the cost of being harder to read at a glance. We'll use the explicit version in this lesson.

:::tip[Why not just use `Date` for the incoming timestamp?]
We could create the timestamp ourselves with `new Date()` and skip `FieldValue` entirely. The reason we don't is that `new Date()` reads the clock on the _user's_ machine, which may be wrong, in a different time zone, or deliberately set to something odd. `serverTimestamp()` asks Firestore's servers for the time instead, so every ticket in the queue is stamped by the same clock. When you need timestamps that different users can be compared against each other, that difference matters.
:::

## Adding a Server Timestamp at Ticket Creation
---

The first thing we'll do in this refactor is create a server timestamp when a ticket is first created. Later on, we'll use this value to calculate a formatted time that shows how long a ticket has been open.

To add a Firestore server timestamp to new tickets, we'll need to update `NewTicketForm.tsx`. Here's the new code:

```tsx title="src/components/NewTicketForm.tsx"
import { type SubmitEvent } from 'react';
import { type NewTicketData } from '../types';
import ReusableForm from './ReusableForm';
// highlight-next-line
import { serverTimestamp } from 'firebase/firestore';

type NewTicketFormProps = {
  onNewTicketCreation: (ticket: NewTicketData) => void;
};

function NewTicketForm({ onNewTicketCreation }: NewTicketFormProps) {

  function handleNewTicketFormSubmission(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onNewTicketCreation({
      names: formData.get('names') as string,
      section: formData.get('section') as string,
      issue: formData.get('issue') as string,
      // highlight-next-line
      timeOpen: serverTimestamp()
    });
  }

  return (
    <ReusableForm
      formSubmissionHandler={handleNewTicketFormSubmission}
      buttonText="Help!"
    />
  );
}

export default NewTicketForm;
```

We've added a new import to get access to the `serverTimestamp()` function from `firebase/firestore`. Then, we've added a new `timeOpen` property that's set to the `serverTimestamp()`:

```tsx
timeOpen: serverTimestamp()
```

As you may guess, the `serverTimestamp()` function returns a value that Firestore replaces with a timestamp corresponding to when the ticket gets added as a document in the database.

Notice that we didn't have to change the prop type at all. `onNewTicketCreation` is still typed as `(ticket: NewTicketData) => void`, and because we already updated `NewTicketData` to include `timeOpen`, TypeScript accepts the new property here and would have complained if we'd left it out. Because `handleAddingNewTicketToList` in `TicketControl` also takes a `NewTicketData`, that side of the connection is already correct too. Doing the type work first meant this component change was the only edit we needed.

## Adding a Formatted Wait Time
---

The next step is to add a formatted wait time that displays how long a ticket has been open. We'll start by converting the raw Firestore timestamp into a `Date` in `TicketControl.tsx`. Then we'll compute and display the actual formatted wait time in `Ticket.tsx`, where it's rendered.

We'll start by installing the `date-fns` library, a popular JavaScript library for working with dates and time. We can use date-fns to manipulate and parse time, which is exactly what we'll use it for.

In the root directory of your Help Queue project, run the following command:

```bash
npm install date-fns@4
```

date-fns ships its own TypeScript definitions, so there's no separate `@types` package to install. As soon as it's installed, your editor knows what each of its functions accepts and returns.

We'll use the `formatDistanceToNow()` helper function from `date-fns` to display a human-readable time like "about 5 minutes ago". The [documentation for date-fns](https://date-fns.org/docs/Getting-Started) is extensive, and there are many other helper functions available. We recommend checking it out when you have the time, as there are many use cases where it can add valuable functionality to an application.

This is how we'll use [the `formatDistanceToNow` helper function](https://date-fns.org/v4.4.0/docs/formatDistanceToNow):

```tsx
formatDistanceToNow(new Date());
```

This time, we're not going to include the options object that will add "ago" to the end of the formatted time, like "7 minutes ago". You can add it if you like. This is what the syntax looks like:

```tsx
formatDistanceToNow(new Date(), {
  addSuffix: true
});
```

Since `formatDistanceToNow()` takes a JavaScript `Date` object as its first argument, `timeOpen` needs to already be a `Date` by the time it reaches the component that calls it. Let's convert the Firestore timestamp into a `Date` in `TicketControl.tsx` first, before we get to where `formatDistanceToNow()` is actually called:

```tsx title="src/components/TicketControl.tsx"
// ...other imports

function TicketControl() {
  // ...other state declarations

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "tickets"),
      (collectionSnapshot) => {
        const tickets: TicketData[] = [];
        collectionSnapshot.forEach((doc) => {
          // highlight-next-line
          const data = doc.data({ serverTimestamps: 'estimate' });
          // highlight-next-line
          const jsDate = data.timeOpen.toDate();
          tickets.push({
            names: data.names,
            section: data.section,
            issue: data.issue,
            // highlight-next-line
            timeOpen: jsDate,
            id: doc.id
          });
        });
        setMainTicketList(tickets);
      },
      (firestoreError) => {
        setError(firestoreError.message);
      }
    );

    return () => unSubscribe();
  }, []);

  // ...rest of TicketControl
}

export default TicketControl;
```

Let's break down this new code. First we go through the process of turning the Firestore server timestamp into a `Date` object:

```tsx
const data = doc.data({ serverTimestamps: 'estimate' });
const jsDate = data.timeOpen.toDate();
```

`serverTimestamps` matters specifically for fields created with `serverTimestamp()`, like `timeOpen`. Right after a ticket is created, there's a brief window before Firestore's server confirms the write and reports back the real timestamp; until then, the field would otherwise just be `null`. Passing `'estimate'` tells Firestore to fill that gap with a timestamp based on the local device's clock instead, so `timeOpen` always has a usable value. `doc.data()` accepts this same option as `doc.get()`, so we can pass it once here and read every field, including `timeOpen`, off the same `data` object. `data.timeOpen` is a [Firestore `Timestamp` object](https://firebase.google.com/docs/reference/js/firestore_.timestamp.md); calling `Timestamp.toDate()` on it hands us back a plain JavaScript `Date`.

If you compare this with earlier versions of this code, you may also notice the redundant `new Date(timeOpen)` wrapper is gone: since `toDate()` already returns a `Date`, that wrapper did nothing, so we've dropped it.

:::caution[Delete your old tickets first]
`data.timeOpen.toDate()` will throw a runtime error for any ticket document that has no `timeOpen` field, because `undefined` has no `toDate()` method. Every ticket you created before this lesson is in exactly that state.

Go delete any old tickets from the Firebase console before testing. Doing this will also help us avoid errors when we sort the Firestore tickets by their creation date later in this lesson.

This is the same boundary problem we discussed when we first read documents out of Firestore. `doc.data()` reaches into a document whose shape TypeScript knows nothing about, so nothing here can be checked at compile time. Our types describe what we _intend_ each document to contain; keeping the database's actual contents in line with that intention is our job.
:::

We then add the new `timeOpen` property to our ticket object:

```tsx
tickets.push({
  // ...names, section, issue as before
  timeOpen: jsDate,
  // ...id as before
});
```

The `timeOpen` property is set to the `jsDate` variable. It's now required by `TicketData`, so if we had left it out, the `tickets.push()` call would have failed to compile and pointed us straight at the missing field.

:::note[If you used the spread-operator listener from Viewing Tickets from Firestore]
In [Viewing Tickets from Firestore](../../react/react-with-nosql/3-4-0-13-viewing-tickets-from-firestore), we mentioned that the optional spread-operator version of this listener (`...doc.data() as Omit<TicketData, "id">`) happened to describe the same shape as `NewTicketData`, but wouldn't stay that way forever. This is where they part ways: `timeOpen` needs to go through `{ serverTimestamps: 'estimate' }` and `.toDate()` before it matches `TicketData`, and a type assertion can't do that conversion for you - it would just tell TypeScript to trust that a raw Firestore `Timestamp` (or `null`, mid-write) is already a `Date`, when it isn't.

If you're using the spread version, switch back to listing fields out individually, as we do in this lesson. The field-by-field version already handles this conversion correctly.
:::

Why not leave `timeOpen` as a Firestore `Timestamp`? We'll pass `timeOpen` down to `Ticket` in a moment, where `formatDistanceToNow()` will use it to render a wait time, and that function wants a `Date`. Converting once, at the boundary where data enters our app, means every component downstream gets to work with an ordinary `Date`. That's a pattern worth remembering: convert external data into your own types as early as possible, so the rest of your code never has to think about where it came from.

### Keeping the Wait Time Fresh

There's a wrinkle with computing a wait time this way: `formatDistanceToNow()` produces a string that goes stale. A ticket rendered the moment it opens says "less than a minute", but five minutes later, if nothing else has changed, React has no reason to re-render that ticket, so the page would still say "less than a minute".

It might be tempting to store the formatted string in state and recompute it on a timer, but that means keeping two pieces of state - `timeOpen` and a string derived from it - in sync by hand, and they could in principle drift apart. Instead, we'll compute the formatted string directly where `Ticket` renders (we'll get there in the next section), and use a `setInterval()` here just to periodically force `TicketControl` to re-render, so that computation reruns with a fresh idea of "now".

Here's the new code:

```tsx title="src/components/TicketControl.tsx"
// ...other imports

function TicketControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTicketList, setMainTicketList] = useState<TicketData[]>([]);
  // ...other state declarations
  // highlight-next-line
  const [, setNow] = useState(new Date());

  // ...existing useEffect for the Firestore listener

  // highlight-start
  useEffect(() => {
    const waitTimeInterval = setInterval(() => setNow(new Date()), 60000);

    return function cleanup() {
      clearInterval(waitTimeInterval);
    }
  }, []);
  // highlight-end

  // ...rest of TicketControl
}

export default TicketControl;
```

We add a new state variable, but notice the empty spot before `setNow` in the destructuring, and that we never reference `now` anywhere. `useState()` always returns an array of two items, and skipping the first with a bare comma is a normal way to say "give me the setter, but I don't need to name the current value." That's intentional here: this state exists purely to give React a reason to re-render `TicketControl` every minute. When that happens, every `Ticket` in the queue re-renders too, and, as we're about to see, recomputes its own formatted wait time fresh.

:::tip[Why the dependency array is empty]
This effect's dependency array is `[]`, not `[mainTicketList]`. The interval doesn't need to know anything about the ticket list - it only calls `setNow()`, which has nothing to do with `mainTicketList`. An empty array means this effect runs once, sets up a single interval, and only tears it down when `TicketControl` unmounts.
:::

The cleanup function works the same way it always has: `clearInterval(waitTimeInterval)` stops the interval, which matters because it prevents the creation of multiple intervals every time this effect reruns.

### Computing and Displaying the Wait Time in `Ticket`

Next, let's update our `Ticket` component to compute and display the wait time. We'll need `TicketList.tsx` to pass `timeOpen` down as a prop instead, so `Ticket` has the raw data it needs to do its own formatting. Let's start there.

Here's the updated code:

```tsx title="src/components/TicketList.tsx"
import Ticket from './Ticket';
import { type TicketData } from '../types';

type TicketListProps = {
  ticketList: TicketData[];
  onTicketSelection: (id: string) => void;
};

function TicketList({ ticketList, onTicketSelection }: TicketListProps) {
  return (
    <>
      <hr />
      {ticketList.map((ticket) =>
        <Ticket
          onTicketClick={onTicketSelection}
          names={ticket.names}
          section={ticket.section}
          // highlight-next-line
          timeOpen={ticket.timeOpen}
          issue={ticket.issue}
          id={ticket.id}
          key={ticket.id}
        />
      )}
    </>
  );
}

export default TicketList;
```

`TicketListProps` doesn't change here. `ticketList` is still a `TicketData[]`, and `TicketData` is the type we already extended, so `ticket.timeOpen` is available to pass along without any further work.

Next, we'll update `Ticket.tsx` to accept `timeOpen` and compute the formatted wait time itself, right where it's rendered.

Here's the new code:

```tsx title="src/components/Ticket.tsx"
// highlight-next-line
import { formatDistanceToNow } from 'date-fns';

type TicketProps = {
  names: string;
  section: string;
  issue: string;
  // highlight-next-line
  timeOpen: Date;
  id: string;
  onTicketClick: (id: string) => void;
};

// highlight-next-line
function Ticket({ names, section, issue, timeOpen, id, onTicketClick }: TicketProps) {
  return (
    <div onClick={() => onTicketClick(id)}>
      <h3>{section} - {names}</h3>
      <p><em>{issue}</em></p>
      {/* highlight-next-line */}
      <p><em>{formatDistanceToNow(timeOpen)}</em></p>
      <hr />
    </div>
  );
}

export default Ticket;
```

**What changed:**

* We import `formatDistanceToNow` here instead of in `TicketControl`, since this is where we actually use it.
* We add `timeOpen: Date` to `TicketProps`, and destructure `timeOpen` alongside the other props.
* We call `formatDistanceToNow(timeOpen)` directly inside the JSX we render.

Because this call happens during render, it reruns every time `Ticket` re-renders, which is exactly what the `now` state we added to `TicketControl` is for: every minute, `TicketControl` re-renders, `Ticket` re-renders along with it, and `formatDistanceToNow(timeOpen)` runs again with a fresh idea of "now".

While we were in here, we also dropped the fragment that used to wrap the `<div>`. A fragment is only needed when a component returns more than one element at the top level, and this component returns a single `<div>`.

`TicketDetail` needs no changes at all. It receives a whole `ticket: TicketData` object rather than individual props, so it automatically has access to `timeOpen`. If we later decide to show the wait time on the detail page too, that's a one-line addition with no prop plumbing.

### Keeping `EditTicketForm` Compiling

Now that `TicketData` requires a `timeOpen` field, the object `EditTicketForm` builds when a user submits an edit needs to include it too, or this call to `onEditTicket()` won't compile:

```tsx title="src/components/EditTicketForm.tsx"
function handleEditTicketFormSubmission(event: SubmitEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  onEditTicket({
    names: formData.get('names') as string,
    section: formData.get('section') as string,
    issue: formData.get('issue') as string,
    id: ticket.id,
    // highlight-next-line
    timeOpen: ticket.timeOpen
  });
}
```

Just like `id`, `timeOpen` isn't something a user edits through the form, so we carry it over from the existing `ticket` prop rather than reading it from `formData`. Editing a ticket's names, section, or issue shouldn't reset when it was originally opened.

:::note[This fix is about TypeScript, not a runtime bug]
Without this change, the app would actually keep working fine. `handleEditTicket` in `TicketControl` destructures `id` off the object it receives and passes the rest straight to `updateDoc()`, which only touches the fields you give it. So a missing `timeOpen` wouldn't get sent to Firestore at all, and the ticket's existing `timeOpen` would simply be left alone in the database - which is what we want anyway.

The problem is purely that `onEditTicket` is typed to expect a full `TicketData`, so leaving `timeOpen` out won't compile. Vite's dev server doesn't type-check, so `npm run dev` would run without complaint; only `tsc` (via `npm run build`, or your editor) catches it. We're fixing it here because a real project should still compile cleanly, not because skipping it would break anything you'd actually see in the browser.
:::

At this point, we've completed our refactor. Serve your Help Queue and test out the changes we made; you should now see a formatted time listed that shows how long a ticket has been open.

## Ordering Tickets by Creation Timestamp
---

Now that we have a timestamp associated with each ticket, let's sort our tickets by their creation date. To do this we need to change our `onSnapshot()` Firestore listener in `TicketControl` to use a `query()`.

Here's the updated code:

```tsx title="src/components/TicketControl.tsx"
// ...other imports
// highlight-next-line
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc, query, orderBy } from 'firebase/firestore';

function TicketControl() {
  // ...other state declarations

  useEffect(() => {
    // highlight-start
    const queryByTimestamp = query(
      collection(db, "tickets"),
      orderBy('timeOpen')
    );
    // highlight-end
    const unSubscribe = onSnapshot(
      // highlight-next-line
      queryByTimestamp,
      (collectionSnapshot) => {
        const tickets: TicketData[] = [];
        collectionSnapshot.forEach((doc) => {
          const data = doc.data({ serverTimestamps: 'estimate' });
          const jsDate = data.timeOpen.toDate();
          tickets.push({
            names: data.names,
            section: data.section,
            issue: data.issue,
            timeOpen: jsDate,
            id: doc.id
          });
        });
        setMainTicketList(tickets);
      },
      (firestoreError) => {
        setError(firestoreError.message);
      }
    );

    return () => unSubscribe();
  }, []);

  // ...rest of TicketControl
}

export default TicketControl;
```

We start by updating our import statement from `firebase/firestore` to also import `query` and `orderBy`.

Then, in our effect, we start by constructing a query:

```tsx
const queryByTimestamp = query(
  collection(db, "tickets"),
  orderBy('timeOpen')
);
```

The `queryByTimestamp` query gets all documents in the `"tickets"` collection and orders them by the value set in each ticket's `timeOpen` field. The order of the tickets will be ascending: older tickets will be at the top and newer tickets will be at the bottom.

If we wanted descending order instead, we could specify that by adding a second argument to the `orderBy()` function:

```tsx
const queryByTimestamp = query(
  collection(db, "tickets"),
  orderBy('timeOpen', 'desc')
);
```

The only other change we make is updating the first argument in the `onSnapshot()` function call to use the `queryByTimestamp` variable, which represents our Firestore query:

```tsx
useEffect(() => {
  const queryByTimestamp = query(
    collection(db, "tickets"),
    orderBy('timeOpen')
  );
  const unSubscribe = onSnapshot(
    // highlight-next-line
    queryByTimestamp,
    // ...same callbacks as before
  );

  return () => unSubscribe();
}, []);
```

Nothing inside the success callback needed to change. Firebase types a query and a collection reference so that both produce the same kind of snapshot, which means our existing callback keeps working unmodified.

And that's it! Now our tickets are organized by their creation date.

The best thing about this refactor is that we didn't have to write our own function to sort the Firestore data. That's a big advantage of using Firestore: it's flexible like all NoSQL databases are, but it contains enough structure (in the form of collections and documents) and built-in helper functions to make filtering and sorting data straightforward.

Next up, let's learn how to host our Help Queue web app with Firebase.
