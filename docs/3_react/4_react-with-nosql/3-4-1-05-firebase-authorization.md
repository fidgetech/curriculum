---
title: "📓 3.4.1.5 Firebase Authorization"
day: monday
id: 3-4-1-5-firebase-authorization
hide_table_of_contents: true
---

In the last lesson, we added Firebase authentication to our `SignIn` component. However at this point, it really doesn't make a difference because our application doesn't care whether a user is signed in or not. In this lesson, we'll add some basic authorization to lock down the queue if a user isn't signed in.

In order to do this, we'll make some changes to `TicketControl.tsx`.

## Adding Basic Authorization to Help Queue
---

We'll start by importing our `Auth` instance from `firebase.ts` so we can access user data, like the currently signed in user. `db` and `auth` are both named imports, so we can combine the two into a single statement:

```tsx title="src/components/TicketControl.tsx"
import { db, auth } from '../firebase';
```

Next, we'll add a new `if` and `else` statement, and we'll add all of our ticket UI logic within the new `else` branch.

```tsx title="src/components/TicketControl.tsx"
// ...other imports

function TicketControl() {
  // ...state declarations and handlers

  // highlight-start
  if (auth.currentUser === null) {
    return (
      <h1>You must be signed in to access the queue.</h1>
    );
  } else {
  // highlight-end

    let currentlyVisibleState;
    let buttonText;

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>;
    } else if (editing && selectedTicket !== null) {
      currentlyVisibleState = (
        <EditTicketForm
          ticket={selectedTicket}
          onEditTicket={handleEditTicket}
        />
      );
      buttonText = "Return to Ticket List";
    } else if (selectedTicket !== null) {
      currentlyVisibleState = (
        <TicketDetail
          ticket={selectedTicket}
          onClickingDelete={handleDeleteTicket}
          onClickingEdit={handleEditClick}
        />
      );
      buttonText = "Return to Ticket List";
    } else if (formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={handleAddingNewTicketToList} />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = (
        <TicketList
          ticketList={mainTicketList}
          onTicketSelection={handleChangingSelectedTicket}
        />
      );
      buttonText = "Add Ticket";
    }

    return (
      <>
        {currentlyVisibleState}
        {error ? null : <button onClick={handleClick}>{buttonText}</button>}
      </>
    );
  // highlight-next-line
  }
}

export default TicketControl;
```

Don't forget that extra closing brace right before the function's own closing brace: since all of our existing return logic now lives inside the new `else` block, it needs one more `}` than before.

We set up our conditional UI logic by checking the value of `auth.currentUser`. You may readily guess what this represents, but let's get a little bit into the weeds.

We previously learned that the `auth` variable represents the authentication instance that's connected to our Help Queue web app that we created with Firebase. The variable `auth` is a Firebase [`Auth` object type](https://firebase.google.com/docs/reference/js/auth.auth.md#auth_interface). `Auth` has a property called `currentUser`, which holds the currently signed in user. Notably, if there is no user signed in, then `currentUser` is `null`.

So, when `auth.currentUser === null` is true, we display a message stating that the user needs to sign in to see the list of tickets. Otherwise, a user is signed in, and we show them the list of tickets.

A few things to notice about how this code is written:

* We use strict equality (`===`) rather than `==`, matching the comparisons we've been writing throughout the app. `auth.currentUser` is typed `User | null`, so a strict check against `null` is exactly what we want here.
* The original version of this code checked `auth.currentUser != null` in an `else if`. We use a plain `else` instead. Since `currentUser` is either `null` or a `User`, there is no third case, and an `else if` would leave TypeScript thinking our component might fall off the end of the function without returning anything.
* The signed-out branch returns a single `<h1>`, so it needs no fragment at all. The signed-in branch returns two elements, so it keeps the `<>` and `</>`.

If you are wondering where the `error` variable is coming from, we originally created a state variable for `error` to hold any errors generated in the process of querying our database. For a review, check out the lesson [Viewing Tickets from Firestore](../../react/react-with-nosql/3-4-0-13-viewing-tickets-from-firestore).

Take note that when `auth.currentUser` holds a signed in user, that user is a [`User` object](https://firebase.google.com/docs/reference/js/auth.user.md#user_interface) that extends functionality from the [`UserInfo` class](https://firebase.google.com/docs/reference/js/auth.userinfo.md#userinfo_interface). These classes contain properties that store the user's personal information, like their email, display name, phone number, and photo URL. That's the making of a user profile right there! Currently, we only gather an email and password, so if you want to add functionality for a user profile, you'll have to explore that in a project you create for this course section, or on your own.

At this point, we're ready to try out the authentication we created. Go ahead and do so now!

:::note[Why you may need to refresh the page]
Reading `auth.currentUser` during render works, but it has a limitation worth understanding. React re-renders a component when its state or props change. `auth.currentUser` is neither: it's a value we read off an object that Firebase manages, so when a user signs in or out, React has no idea anything happened and doesn't re-render `TicketControl`. You may find you need to refresh the page before the queue appears or disappears.

The Firebase solution is a function called [`onAuthStateChanged()`](https://firebase.google.com/docs/auth/web/manage-users), which registers a listener that fires whenever the signed-in user changes. If that sounds familiar, it should: it's the same shape as the `onSnapshot()` listener we set up for Firestore, and it belongs in a `useEffect` hook for the same reasons. Storing the current user in state, updated by that listener, gives React something it can actually react to. This is a great further exploration opportunity, and a natural fit for a custom hook.
:::

In this lesson, we've demonstrated how we can use authorization to determine what a component should render. The use case we provided in this lesson is a basic one, and larger applications will need more robust authentication and authorization. To learn more about the different ways a user can be authenticated, visit the Firebase [documentation for authentication](https://firebase.google.com/docs/auth/web/start).
