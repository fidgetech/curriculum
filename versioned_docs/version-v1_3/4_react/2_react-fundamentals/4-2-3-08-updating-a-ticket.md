---
title: "📓 4.2.3.8 Updating a Ticket"
day: wednesday
id: 4-2-3-8-updating-a-ticket
hide_table_of_contents: true
---

In this lesson, we will add the final piece of CRUD functionality to our Help Queue application: the ability to update a ticket. The actual Help Queue doesn't have this functionality — however, it's helpful for us to learn and apply CRUD functionality in our own applications so we are including it here. Also, update functionality is required on this upcoming independent project.

Before we add an `EditTicketForm` component, we will need to do a bit more planning. In the interest of keeping things simple, our new component will be a direct child of `TicketControl`. Here's an updated diagram of our components:

![Our component tree will have our new `EditTicketForm` as a direct child of `TicketControl`.](/images/React/Week-1-React-2019/adding-editticketform-component-updated.jpg)

There are a few benefits to this approach:

* Our `TicketControl` component already handles state so we will only need to lift state from the `EditTicketForm` to `TicketControl`.
* There won't be any prop-drilling because props will only be passed down one level to `EditTicketForm`.
* `TicketControl` is already handling which component is showing so we can use its local state to determine whether `EditTicketForm` is showing.

However, this is just one approach to building out the CRUD in our application. It is not necessarily the best way or the most scalable. The key takeaway here is applying problem-solving skills and React knowledge to add CRUD functionality. At the same time, we need to remind ourselves that there is no canonical, opinionated way to do things in React — unlike with Rails or .NET.

We will start by covering the steps we need to take to add edit functionality to our applications. Before reading through these steps, we recommend trying to outline these steps on your own.

One thing that can be helpful to consider is what the user will need to do in order to update a ticket. We can apply what we've learned about Behavior Driven Development here.

**Behavior #1**

When a user navigates to the ticket detail page, they should be able to click an edit button that takes them to an edit form.

#### **Implementation**:

* We will need to add a state variable to `TicketControl` to determine whether the `EditTicketForm` is showing or not. The default state will be `editing: false`.
* We will need to add a function to `TicketControl` that will set `editing` to `true`. We will call this function `handleEditClick`.
* Next, we will need to pass down `handleEditClick` to the `TicketDetail` component (and add a PropType).
* Then we will add a button to `TicketDetail` that triggers the `handleEditClick` function. When the button is clicked, `editing` will be set to `true`.
* We also have to add a conditional to render the `EditTicketForm`. We will need to pass the ticket to be edited as a prop down to `EditTicketForm`. Since we will already have a `selectedTicket` set to an actual ticket, we can just pass the `selectedTicket` as a prop.
* Finally, we need to create our `EditTicketForm`. It will use the `ReusableForm` component we made in the last lesson.

**Behavior #2**

When a user fills out the edit form and clicks the edit button, the specified ticket should be edited in the queue.

#### **Implementation**:

* We will need to add a function to `TicketControl` that will update a ticket. We will do so in `TicketControl` because that is where our state currently resides. We will call this function `handleEditingTicketInList`.
* `handleEditingTicketInList` will update the state in the `mainTicketList` to reflect the edited ticket.
* `handleEditingTicketInList` will also need to update `selectedTicket` to `null` because the ticket editing is complete — and we don't want the `TicketDetail` component showing.
* `handleEditingTicketInList` also has to update `editing` to `false` so the `EditTicketForm` doesn't show.
* We will need to pass `handleEditingTicketInList` to our new `EditTicketForm` as a prop.
* Next, we will need to add a button to `EditTicketForm` that will trigger a `handleEditTicketFormSubmission` function when clicked.
* Finally, we will add a function called `handleEditTicketFormSubmission` which will capture values from the edit form and then trigger the `handleEditingTicketInList` function in the `TicketControl` component.

That's a lot of stuff to handle! It's mostly little pieces of code here and there but it can feel overwhelming, especially when you're learning React. This will become second nature with practice. Careful planning (drawings help) and writing out the steps needed to add functionality can make this process easier.

## Behavior #1: Toggle Edit Form
---

We will start by writing the code to toggle between a ticket's detail and an edit form. We won't worry about the code for actually editing a ticket yet.

### Add New State Variable

First we will add a new state variable:

```js title="src/components/TicketControl.js"
const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
const [mainTicketList, setMainTicketList] = useState([]);
const [selectedTicket, setSelectedTicket] = useState(null);
const [editing, setEditing] = useState(false); // new code
```

The default state of our new state variable is `false`.

### Add Function for Showing the Edit Form

Next, we will add a function for showing the edit form. This function needs to go in `TicketControl`, which handles the local state that determines which component should show.

```js title="src/components/TicketControl.js"
const handleEditClick = () => {
  setEditing(true);
}
```

### Pass `handleEditClick` As Prop To `TicketDetail` Component

Now we need to update the props passed into our `TicketDetail` component:

```js title="src/components/TicketControl.js"
if (selectedTicket != null) {
  currentlyVisibleState = 
    <TicketDetail 
      ticket={selectedTicket} 
      onClickingDelete={handleDeletingTicket} 
      onClickingEdit={handleEditClick} />
  buttonText = "Return to Ticket List";
}
```

We pass down our function as a prop with `onClickingEdit={handleEditClick}`.

### Add "Update" Button with `onClick` Handler to `TicketDetail`

We will need to add an "Update" button to our `TicketDetail` component. When a user clicks this button, the edit form will show. This button will go right above the code for our delete button:

```jsx title="src/components/TicketDetail.js"
<button onClick={props.onClickingEdit}>Update Ticket</button>
<button onClick={() => onClickingDelete(ticket.id)}>Close Ticket</button>
```

Also, we can't forget to add a prop type for our new prop:

```js title="src/components/TicketDetail.js"
TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};
```

At this point, when we click on the button, `editing` will be set to `true`. We can verify this is working by using the React DevTools to inspect the state of `TicketControl`.

If it's not working, it's time to debug. Check and make sure that props have correctly been passed down, that functions are correctly named, and that a prop type has been added.

### Add A Conditional That Triggers When `editing` Is `true`

Next, we will add a new conditional to our conditional rendering logic. This conditional will trigger if `editing` is set to `true`:

```js title="src/components/TicketControl.js"
import EditTicketForm from './EditTicketForm';

// ... inside TicketControl function

let currentlyVisibleState = null;
let buttonText = null;

if (editing) {      
  currentlyVisibleState = 
    <EditTicketForm 
      ticket={selectedTicket} />
  buttonText = "Return to Ticket List";
} else if (selectedTicket != null) {
  // ... rest of conditionals
}
```

First, we need to import our `EditTicketForm`, which hasn't been created yet. (Our application will fail to compile until we add that component.)

We will pass the current `selectedTicket` to the `EditTicketForm`. Since a user will have to click on a ticket to access the "Update" button, `selectedTicket` will already be set to the ticket we want.

### Create `EditTicketForm` Component

Now it's time to create our `EditTicketForm` component. We will use the `ReusableForm` component we created in a previous lesson:

```js title="src/components/EditTicketForm.js"
import React from "react";
import ReusableForm from "./ReusableForm";

function EditTicketForm(props) {
  return (
    <React.Fragment>
      <ReusableForm 
        buttonText="Update Ticket" />
    </React.Fragment>
  );
}

export default EditTicketForm;
```

The "Update Ticket" button won't do anything yet — this is part of the second behavior that we have yet to implement.

At this point, a user should be able to access the edit form and return to the main page. If the application doesn't work correctly, it's time to debug. While debugging can be frustrating, it's a great opportunity to get a better understanding of how React works.

## Behavior #2: Editing a Ticket
---

Fortunately, this behavior will be much easier to implement now that we have our form in place. We just need to create a new function for updating a ticket and then pass it down to the `EditTicketForm` so it can be attached to a click handler.

### Write Function for Updating Ticket

As stated in our implementation for this behavior, the function needs to do the following things:

* Update the state of `mainTicketList` to show the edited ticket
* Set `selectedTicket` to `null` because we're done editing
* Set `editing` to `false` so the `TicketList` component shows instead of the `EditTicketForm` component

Here's our new function:

```js title="src/components/TicketControl.js"
const handleEditingTicketInList = (ticketToEdit) => {
  const editedMainTicketList = mainTicketList
    .filter(ticket => ticket.id !== selectedTicket.id)
    .concat(ticketToEdit);
  setMainTicketList(editedMainTicketList);
  setEditing(false);
  setSelectedTicket(null);
}
```

Let's start by taking a look at the first part of our new function:

```js
const editedMainTicketList = mainTicketList
  .filter(ticket => ticket.id !== selectedTicket.id)
  .concat(ticketToEdit);
```

Note that we've broken this up into multiple lines to make it more readable. This is a common technique when we chain multiple functions together. It is not required (and it does not change the functionality of the code), but it can make chained functions easier on the eyes.

We filter the previous version of the ticket out of the list with `filter()` and then add the edited version of the ticket to the list with `concat()`. While we could've edited the ticket directly, this is easier and doesn't involve mutating the ticket — just replace it with the new version.

Next, we call `setMainTicketList` to update the state to the list with the updated ticket.

Finally, we update `editing` to `false` and `selectedTicket` to `null`.

### Pass New Function Down to `EditTicketForm` as a Prop

Next, we need to pass our new function down as a prop to our `EditTicketForm` component:

```js title="src/components/TicketControl.js"
if (editing) {      
  currentlyVisibleState = 
    <EditTicketForm 
      ticket={selectedTicket} 
      onEditTicket={handleEditingTicketInList} />
  buttonText = "Return to Ticket List";
}
```

We've added: `onEditTicket={handleEditingTicketInList}`.

### Add PropType to `EditTicketForm` Component

Next, let's add prop types to `EditTicketForm` for the props we are passing down. We also need to import `PropTypes`.

```js title="src/components/EditTicketForm.js"
import PropTypes from "prop-types";

// ... component code ...

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onEditTicket: PropTypes.func
};
```

### Add Event Handler in `EditTicketForm` Along with Function to Capture Form Values

Lastly, we'll add a function called `handleEditTicketFormSubmission` that captures form values and triggers the `handleEditingTicketInList` function in `TicketControl`. We also need to update our JSX so the event handler in our form refers to our new `handleEditTicketFormSubmission` function.

```js title="src/components/EditTicketForm.js"
import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditTicketForm(props) {
  const { ticket } = props;

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: ticket.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditTicketFormSubmission}
        buttonText="Update Ticket" />
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onEditTicket: PropTypes.func
};

export default EditTicketForm;
```

Our function grabs values from the form and then triggers `handleEditingTicketInList` via the `onEditTicket` prop.

We also update the event handler on our `ReusableForm` component to be `handleEditTicketFormSubmission`.

At this point, our Update functionality should be working and we'll have full CRUD for our Help Queue.

## Fixing the Last Bug
---

There is still a small bug, however. If you want to practice debugging, see if you can find it and fix it on your own.

If we get to the editing a ticket form and click "Return to Ticket List," it won't actually return us to the ticket list. And if we click that button and _then_ try to edit a ticket, we'll get an error.

The issue, once again, comes from the `handleClick` function in `TicketControl`. We need to make sure that `editing` is set to `false` when the function is triggered. Here's the updated function:

```js title="src/components/TicketControl.js"
const handleClick = () => {
  if (selectedTicket != null) {
    setFormVisibleOnPage(false);
    setSelectedTicket(null);
    setEditing(false); // new code
  } else {
    setFormVisibleOnPage(!formVisibleOnPage);
  }
}
```

The cause of the bug should now make sense. When a user navigated to the edit form and clicked the "Return to Ticket List" button, `selectedTicket` is not `null` — however, our conditional set `formVisibleOnPage` to `false` and `selectedTicket` to `null` _without_ setting `editing` to `false`. That way, if a user then tried to fill out the edit form, they'd get an error because the edit form would no longer be associated with a specific ticket. It's an error that seems a bit weird at first — but which becomes clear once we take a closer look at the code.

At this point, a senior dev on the team would say it's time to refactor. This function is really doing a lot — it's handling four different button clicks seamlessly. On the one hand, it's great to get a function to do so much, but on the other hand, it's going to get increasingly buggy, especially in a larger code base. As you create your React applications this week, it's important to think about the tradeoffs in your design decisions, and to discuss them with your peers.

## Summary
---

In this lesson, we added several behaviors to our Help Queue application. First, we planned out the new behaviors our application needs and listed all the steps we need to take to implement these behaviors. While it's not necessary to write down all of these steps, it can be helpful for newcomers to React.

Next, we added functionality to show an edit form (local state) and then update a ticket in our `mainTicketList` (shared state). Once again, we had to deal with a lot of little pieces. It may even seem like we needed to add a huge and overly complicated amount of code when we could do a fairly simple implementation with vanilla JS.

However, we've written dynamic, modular and scalable code that lends itself well to further expansion. If all the steps are still overwhelming, trust the process — learning a new library or framework is always challenging and React is no different. In a few weeks, working with these concepts will become second nature.
