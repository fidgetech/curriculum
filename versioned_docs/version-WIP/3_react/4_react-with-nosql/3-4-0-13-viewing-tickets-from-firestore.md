---
title: "📓 3.4.0.13 Viewing Tickets from Firestore"
day: weekend
id: 3-4-0-13-viewing-tickets-from-firestore
hide_table_of_contents: true
---

We now have the ability to add tickets to Firestore in our Help Queue application. However, we can't see the tickets in our application yet. There are two ways we can get data from Firestore:

1. We can get all documents in a collection once with the `getDocs()` function. When data is needed, we make a request to Firestore, following the familiar request-response pattern.

2. We can set up a listener that actively listens for realtime changes in Firestore. Whenever Firestore is updated, our application will get a snapshot of the data and update our app accordingly.

If we were to go with the first option, we'd have to set up code in our app that calls the `getDocs()` function anytime a ticket gets added, updated, or deleted so that our app is up-to-date with our database. And that's exactly the functionality we get for free by setting up a listener. So, we'll go with option #2.

## Reading Firestore Data
---

We'll add our listener to the `TicketControl` component, so that we can update our `mainTicketList` state variable with the data we retrieve from the Firestore database.

To properly set up this listener, we'll need to set up a `useEffect` hook that does a few things:

* Runs once after our component first renders,
* Sets up an `onSnapshot` listener that gets all of the ticket data in the `tickets` collection and adds it to an array,
* Calls `setMainTicketList()` passing in the array of tickets in order to update our `mainTicketList` state variable. This in turn will trigger a re-render of our `TicketControl` component, and it will display the updated ticket data.

We'll do this in three phases. In the first phase, we'll set up our `useEffect()` hook and learn the basics of the `onSnapshot()` function. Here's the first round of new code:

```tsx title="src/components/TicketControl.tsx"
// updated imports (others stay the same):
import { useEffect, useState } from 'react';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';

function TicketControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTicketList, setMainTicketList] = useState<TicketData[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<TicketData | null>(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "tickets"),
      (collectionSnapshot) => {
        // do something with ticket data
      },
      (firestoreError) => {
        // do something with error
      }
    );

    return () => unSubscribe();
  }, []);

  // ...the remaining code in the component stays the same
}

export default TicketControl;
```

First, make sure to import the `onSnapshot` function from `'firebase/firestore'`, and to add `useEffect` to the existing import from `'react'`.

Let's notice a few things about the `useEffect()` hook:

* We've passed in an empty array as the second argument, which means our effect will run once after our component's first render. Just like with event listeners, we only want to create our Firestore database listener once.
* We return a cleanup function for the `useEffect()` hook to run. `useEffect()` will call this function when the `TicketControl` component unmounts, and it will unsubscribe our database listener; by "unsubscribe", we mean to stop the listener.
* The side effect that we run is creating the `onSnapshot()` listener that listens to changes in our database.

Now let's examine the `onSnapshot()` function:

* First note that we can set up a database listener to listen for changes on a document, a set of documents, or an entire collection. In our case, we're listening for changes to the `tickets` collection.
* The `onSnapshot()` function takes three arguments:
  * A document or collection reference that we want our listener to listen to.
  * A callback function to handle a successful request. This function will be called the first time that we set up our listener, and anytime there's a change to the `tickets` collection.
  * A callback function to handle errors that happen when making a database request.
* The `onSnapshot()` function returns a function that we can call at any point to stop the listener. We save this returned function in a variable called `unSubscribe`. We could call this variable anything, like `stop` or `clearListener`.

:::note[Where are the types on those callbacks?]
Notice that we didn't annotate `collectionSnapshot` or `firestoreError`. We don't have to. Firebase ships its own type definitions, so TypeScript already knows that the first callback receives a `QuerySnapshot` and the second receives a `FirestoreError`. This is **contextual typing**: because the callbacks are written inline as arguments to `onSnapshot()`, TypeScript works out their parameter types from the function they're being passed to.

There's a real benefit here beyond saving keystrokes. Hover over either parameter in your editor and you'll see the exact type, along with every property and method available on it. That turns your editor into a second copy of the Firestore API reference.
:::

### Handling a Successful Response

Now that we have a sense of the basics of our new `useEffect()` hook and the `onSnapshot()` function, let's add code to handle a successful response.

Here's the new code:

```tsx title="src/components/TicketControl.tsx"
useEffect(() => {
  const unSubscribe = onSnapshot(
    collection(db, "tickets"),
    (collectionSnapshot) => {
      const tickets: TicketData[] = [];
      collectionSnapshot.forEach((doc) => {
        const data = doc.data();
        tickets.push({
          names: data.names,
          section: data.section,
          issue: data.issue,
          id: doc.id
        });
      });
      setMainTicketList(tickets);
    },
    (firestoreError) => {
      // do something with error
    }
  );

  return () => unSubscribe();
}, []);
```

Let's summarize what we're doing with this code: we're looping through the collection of returned ticket documents to construct an array of ticket objects. When we've finished constructing the array, we call `setMainTicketList()` to update the `mainTicketList` state variable with the array of tickets.

There are a few things to mention in this process.

First, it's important to note that how the Firestore database stores our data is not the same as how we structure that same data in our application. That's why we need to manually create an array, loop through the returned collection (represented by the `collectionSnapshot` parameter), create an object for each ticket, and push it to our array.

Second, it's during this process that we create our ticket object's `id` property and set it to the auto-generated id from Firestore. We can access the document identifier by accessing the `id` property of each document in the returned collection:

```tsx
collectionSnapshot.forEach((doc) => {
  const data = doc.data();
  tickets.push({
    // ...other fields
    id: doc.id // this code
  });
});
```

:::note[One small but important annotation]
Notice that we declared our array as `const tickets: TicketData[] = []` rather than `const tickets = []`. That annotation is doing real work. It tells TypeScript to check every object we push against `TicketData`, so a misspelled `sektion` or a forgotten `issue` is caught in the editor.

It matters here specifically because Firestore has no idea what shape our documents have. A document is just a set of fields, and any field could hold a string, a number, a nested map, or nothing at all. So `doc.data()` hands us back values that TypeScript can't say anything about. This is a **boundary**: the point where data from the outside world enters our app. TypeScript can't verify what arrives, but by naming the type we expect on our side of the boundary, we at least guarantee that everything downstream of this listener is a well-formed ticket.

The flip side is that we're now responsible for the boundary itself. If someone edits a ticket in the Firebase console and replaces `section` with a number, TypeScript won't stop us and our app will render that number.
:::

### Firestore Object Types

Third, we need to take a closer look at the Firestore object types that we're accessing here. As previously noted, the `collectionSnapshot` parameter represents the response from our database. We can name this parameter whatever we want, but since we're accessing a collection, we descriptively call our parameter `collectionSnapshot`. In terms of Firestore object types, this parameter is a [`QuerySnapshot`](https://firebase.google.com/docs/reference/js/firestore_.querysnapshot) object that's made up of one or more [`DocumentSnapshot`](https://firebase.google.com/docs/reference/js/firestore_.documentsnapshot) objects. Each of these object types has its own properties and methods. This is important to note, because when we call `collectionSnapshot.forEach(...)`, we're actually calling a [`QuerySnapshot`](https://firebase.google.com/docs/reference/js/firestore_.querysnapshot) method, and not JavaScript's `Array.prototype.forEach()` method.

However, [`QuerySnapshot`](https://firebase.google.com/docs/reference/js/firestore_.querysnapshot) has a handy `docs` property that returns an array of `DocumentSnapshot` objects. That means we can call any array method on `collectionSnapshot.docs`. Here's an example of using `map()` instead of `forEach()`:

```tsx
const tickets: TicketData[] = collectionSnapshot.docs.map((doc) => {
  const data = doc.data();
  return {
    names: data.names,
    section: data.section,
    issue: data.issue,
    id: doc.id
  };
});
```

This version is a little closer to the functional style we've been practicing: there's no empty array to declare and no `push()` calls, just a transformation from one array to another. Notice that the type annotation moved to the `tickets` variable, which is still what tells TypeScript to check each returned object against `TicketData`.

The lesson here is that you should always check the [API reference](https://firebase.google.com/docs/reference/js/firestore_) of the tools you are working with when you run into issues doing something you expect you might be able to do. Why the API reference? It lists object types (also called "classes") in detail, including any properties and methods of those objects, as well as the parameter and return types for any functions. And because Firebase ships TypeScript definitions, your editor can show you much of that same information without leaving your code.

Since each document in the `collectionSnapshot` that we're looping through is a `DocumentSnapshot` object, we need to use the methods available for that object type to access the document's data. In our code, we're using the `DocumentSnapshot.data()` method, but we could use [the `DocumentSnapshot.get()` method](https://firebase.google.com/docs/reference/js/firestore_.documentsnapshot.md#documentsnapshotget) instead. We'll leave that for further exploration.

The `DocumentSnapshot.data()` method returns all of a document's data in the form of an object, mapping over the Firestore document fields and values to object keys and values. So for example, in `doc.data().names`:

* `doc` accesses the Firestore document, a `DocumentSnapshot` object.
* `.data()` returns the Firestore document's data as an object.
* `.names` accesses the `names` key to get its value.

Because `.data()` transforms all of a document's data into an object, we could shorten our code with the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax):

```tsx
const unSubscribe = onSnapshot(
  collection(db, "tickets"),
  (collectionSnapshot) => {
    const tickets = collectionSnapshot.docs.map((doc) => ({
      ...doc.data() as Omit<TicketData, "id">, // Spread operator in use!
      id: doc.id
    }));
    setMainTicketList(tickets);
  },
  (firestoreError) => {
    // do something with error
  }
);
```

This version needs a type assertion where the field-by-field version did not, and it's worth understanding why. When we listed the fields out one at a time, we were telling TypeScript exactly which properties the object has. Spreading `doc.data()` doesn't do that: the values Firestore returns have no known shape, so TypeScript can't confirm that a `names` or a `section` is in there at all, and it will refuse to treat the result as a `TicketData`. Writing `as Omit<TicketData, "id">` is us telling TypeScript what we know is in the document - and TypeScript will trust us completely, without checking.

That's the real tradeoff: one broad, unverified promise instead of three narrow ones TypeScript can actually check. Because of that, we'll keep using the field-by-field version for the rest of this section. Updating your code to use the spread operator is entirely optional, and you should only do it if you're comfortable maintaining that promise by hand as our data shape changes.

:::caution[This shortcut has an expiration date]
`Omit<TicketData, "id">` happens to be the same shape as the `NewTicketData` type we created in the last lesson - but only right now. Later in this section, `TicketData` gains a field whose raw Firestore value needs to be converted before it matches our type (a timestamp that has to become a `Date`). If you've switched to the spread version, `as Omit<TicketData, "id">` will keep compiling at that point, but it will be lying: it will claim you already have a value you haven't actually produced yet. The field-by-field version we use in this lesson doesn't have this problem, since every field is listed and converted explicitly.
:::

As always, there are many ways to structure our code. To learn about other handy methods and properties for `DocumentSnapshot` and `QuerySnapshot`, take a look at the Firestore API reference when you have the time:

* [`DocumentSnapshot`](https://firebase.google.com/docs/reference/js/firestore_.documentsnapshot)
* [`QuerySnapshot`](https://firebase.google.com/docs/reference/js/firestore_.querysnapshot)

The last thing to note with the addition of this new code is actually a reminder: all of the code in this first callback function will run every time there's an update in our Firestore database. This is all thanks to the built-in functionality of the `onSnapshot()` function!

Next, let's handle errors.

### Handling Errors

As described in the docs on [handling listener errors](https://firebase.google.com/docs/firestore/query-data/listen), these are most commonly caused by security permission denials. Also, if an error does occur with our listener, it will automatically stop listening. These issues will almost always be sorted out in development before any code gets shipped.

However, we can still set up general error handling to ensure that if errors do come up with our listener, they at least get printed to the DOM. To do this, we'll set up a new state variable called `error` to track any errors that occur.

Here's what our updated code looks like (pay attention to the comments as you review the code):

```tsx title="src/components/TicketControl.tsx"
import { useEffect, useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import EditTicketForm from './EditTicketForm';
import TicketDetail from './TicketDetail';
import { type TicketData, type NewTicketData } from '../types';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

function TicketControl() {
  // ...other state declarations
  // new code!
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "tickets"),
      (collectionSnapshot) => {
        // ...same ticket-building logic as before
      },
      (firestoreError) => {
        // new code!
        setError(firestoreError.message);
      }
    );

    return () => unSubscribe();
  }, []);

  // ...other handler functions

  // add error handling to the conditional rendering logic
  if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>;
  } else if (editing && selectedTicket !== null) {
    // ...EditTicketForm
  } else if (selectedTicket !== null) {
    // ...TicketDetail
  } else if (formVisibleOnPage) {
    // ...NewTicketForm
  } else {
    // ...TicketList
  }

  // add error handling to the return statement
  return (
    <>
      {currentlyVisibleState}
      {/* New code below! */}
      {error ? null : <button onClick={handleClick}>{buttonText}</button>}
    </>
  );
}

export default TicketControl;
```

Let's walk through the new pieces.

Our `error` state variable holds either an error message or nothing at all, so we type it as `useState<string | null>(null)`. This is the same pattern we used for `selectedTicket`: an initial value of `null` doesn't tell TypeScript what the state will eventually hold, so we spell out the union ourselves. If we wrote `useState(null)`, TypeScript would decide this state can only ever be `null` and would reject our call to `setError()`.

A Firestore error is returned as a [`FirestoreError`](https://firebase.google.com/docs/reference/js/firestore_.firestoreerror) object and it has a `message` property with a description of the error that occurred. So, if an error does occur with our listener, we call `setError(firestoreError.message)`. Notice that we named the callback parameter `firestoreError` rather than `error`. A parameter named `error` would shadow our `error` state variable inside that callback, which makes the code harder to read even though it compiles.

Later in our conditional that determines the UI, we first check to see if there's an error, and if so, we display it. Notice that `if (error)` is enough here. Because `error` is typed as `string | null`, TypeScript narrows it to a plain `string` inside the block, so it's happy to render `{error}` in our JSX.

Finally, in our return statement, we make sure to only display the button element if there is not an error. We're also using a fragment shorthand (`<>` and `</>`) to wrap the two elements, just as we do elsewhere in the app.

Optionally, if you want to check that this code works, we can cause a security permissions issue by updating the Firestore database rules to only allow reading and writing data if a user is authenticated. To do this, navigate to your Firestore database, and then select the _Rules_ tab. You should currently have the test mode rule from earlier in this section, allowing access until a set expiration date. Comment out that existing `allow` statement by adding `//` in front of each of its two lines. After doing so, your rules should look something like this (your date will be different from the one shown here):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      // allow read, write: if
      //   request.time < timestamp.date(2026, 9, 30);
    }
  }
}
```

Then, add this new `allow` statement below the commented out rules: `allow read, write: if request.auth != null;`. Your rules should now look similar to this code snippet:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      // allow read, write: if
      //   request.time < timestamp.date(2026, 9, 30);
      allow read, write: if request.auth != null;
    }
  }
}
```

Then, publish your changes. The new rules could take a few moments to take effect.

Finally, test out your app! You should see the following message on screen:

```
There was an error: Missing or insufficient permissions.
```

When you've tested your app to your heart's content, make sure to revert your database rules to what they were previously! We still need to add update and delete functionality.

## Summary
---

Now that we have the listener set up in `TicketControl.tsx`, anytime we change the database from our app or from the Firestore Database console (via the online Firebase console for the Help Queue project), the listener will automatically call the first callback function (so long as there is not an error) that we set up in the `onSnapshot()` function:

```tsx
// the first callback function within `onSnapshot()`
(collectionSnapshot) => {
  const tickets: TicketData[] = [];
  collectionSnapshot.forEach((doc) => {
    const data = doc.data();
    tickets.push({
      names: data.names,
      section: data.section,
      issue: data.issue,
      id: doc.id
    });
  });
  setMainTicketList(tickets);
}
```

As we know, this callback function handles creating an array of tickets.

Since we call `setMainTicketList(tickets)` to update the `mainTicketList` state variable from within the listener, this will trigger a re-render of our `TicketControl` component so that our application is always showing the most up-to-date data from our database.
