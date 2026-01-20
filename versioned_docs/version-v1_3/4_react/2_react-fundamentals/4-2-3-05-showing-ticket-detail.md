---
title: "📓 4.2.3.5 Showing Ticket Detail"
day: wednesday
id: 4-2-3-5-showing-ticket-detail
hide_table_of_contents: true
---

In the lesson called _Planning Our Application: Part 3_, we updated the plan for our Help Queue application to include a `TicketDetail` component. A user should be able to click on a ticket and then go to that ticket's detail page.

Before starting, this might be a good time to take a deep breath. We aren't going to be adding too many new lines of code to our application in this lesson. However, we have to do a lot of little things in many different places. This will be a long lesson, so pay close attention.

Here are the things we need to do to add ticket detail functionality to our site:

* Create a placeholder `TicketDetail` component (it will be updated to take props later in this lesson).
* Update `TicketControl` to include a `selectedTicket` state variable.
* Create a function in `TicketControl` that will handle when a ticket is clicked.
* Create a new conditional in `TicketControl` to handle the `TicketDetail` component.
* Use props to pass down our function for handling a ticket click first to our `TicketList` component and then to the `Ticket` component, where the function will be attached to a ticket.
* Once the `selectedTicket` state is properly being updated, update the `TicketDetail` component to accept `TicketDetail` props.
* Add PropTypes for props as needed.

This is a lot of stuff — but we are being exhaustive in outlining each step we need to take to update our code. Take your time with this lesson — and also when you are adding functionality across multiple components in your own React applications.

## Create a Placeholder `TicketDetail` Component
---

Let's start with a placeholder `TicketDetail` component:

```js title="src/components/TicketDetail.js"
import React from "react";

function TicketDetail(props){
  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <hr/>
    </React.Fragment>
  );
}

export default TicketDetail;
```

There's nothing new or unusual here — just a component rendering a single hard-coded element. We will update this component to use props after we successfully get the `TicketControl` component to update a selected ticket.

## Update the `TicketControl` Component
---

Now let's make some changes to our `TicketControl` component. We will do the following:

* Add a state variable for `selectedTicket`. It will have a default state of `null`.
* Add a function called `handleChangingSelectedTicket` for handling a click event on a ticket. When a user clicks on the ticket, it will activate this function, which will change the value of `selectedTicket` to an actual ticket object.
* Add a conditional for rendering the `TicketDetail` component when `selectedTicket` is not `null`. This will ensure the user actually sees the `TicketDetail` component.

### Update `TicketControl` State

We will start by adding our new state variable:

```js title="src/components/TicketControl.js"
const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
const [mainTicketList, setMainTicketList] = useState([]);
const [selectedTicket, setSelectedTicket] = useState(null); // new code
```

Our `selectedTicket` starts as `null` because no ticket has been selected yet.

### Write Function to Handle Click Event on Ticket

Next, let's write a function that will take the `id` property of a ticket, find the correct ticket, and then set `selectedTicket` equal to that ticket. Since we know what this function should do, we can write it in isolation without worrying how it will interact with other components.

```js title="src/components/TicketControl.js"
const handleChangingSelectedTicket = (id) => {
  const selection = mainTicketList.filter(ticket => ticket.id === id)[0];
  setSelectedTicket(selection);
}
```

We will use `filter()` (which is perfect for functional programming) to filter our `mainTicketList` down to tickets where `ticket.id` equals the `id` passed into our function. Because we are using UUIDs now, we know that only one ticket will ever have a matching `id`.

Because `filter()` returns an array, we need to specify that we want the first (and only element) in that array. We use bracket notation to do that.

Finally, we use `setSelectedTicket` to update the state of our `selectedTicket` state variable.

Our function isn't connected to our user interface yet — but its functionality will be in place by the end of the lesson.

### Update `TicketControl`'s Conditional Rendering

Now we need to update our conditional rendering logic. We've included comments detailing the three changes we are making. The first two changes are related to adding a conditional to our conditional rendering. The third involves passing our new function as a prop.

```js title="src/components/TicketControl.js"
import TicketDetail from './TicketDetail';

// ... inside TicketControl function

let currentlyVisibleState = null;
let buttonText = null; 

if (selectedTicket != null) {
  currentlyVisibleState = 
    <TicketDetail 
      ticket={selectedTicket} />
  buttonText = "Return to Ticket List";
} else if (formVisibleOnPage) {
  currentlyVisibleState = 
    <NewTicketForm 
      onNewTicketCreation={handleAddingNewTicketToList} />;
  buttonText = "Return to Ticket List";
} else {
  currentlyVisibleState = 
    <TicketList 
      ticketList={mainTicketList} 
      onTicketSelection={handleChangingSelectedTicket} />;
  buttonText = "Add Ticket";
}
```

First, we add a conditional that will render the `TicketDetail` component if `selectedTicket != null`. We pass `selectedTicket` into the `TicketDetail` component as a prop called `ticket`. (We will use this prop soon.)

We also update our previous `if` statement to an `else if` statement. We won't use two `if` statements — if the `TicketDetail` component should be rendered, there's no reason to check if the `NewTicketForm` should be rendered.

Last, we need to pass our new `handleChangingSelectedTicket` function down to the `TicketList` component as a prop:

```jsx
onTicketSelection={handleChangingSelectedTicket}
```

## Pass Props Through `TicketList` Component
---

We need to make several small changes to our `TicketList` component:

* We will no longer use the `index` of our iterator as a `key`. We will use a ticket's actual `id` property instead.
* We will add a PropType for our new `onTicketSelection` prop.
* We will also pass down several props to the `Ticket` component.

Here are the updates:

```js title="src/components/TicketList.js"
import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket
          whenTicketClicked={props.onTicketSelection}
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          id={ticket.id}
          key={ticket.id} />
      )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default TicketList;
```

First, we no longer need to pass `index` into our `map()` function. We've updated the `key` to be equal to `ticket.id`.

Note that we also have to pass in an `id` prop. This is because we can't pass a `key` to a child component as a prop. However, our `Ticket` component will still need access to its own `id`, hence a separate `id` prop which is also set to `ticket.id`.

We will also pass `props.onTicketSelection` down to the `Ticket` component as a prop. The `Ticket` component will handle determining whether it has been selected — not the `TicketList` component. For the sake of clarity, we are naming the prop being passed down to the `Ticket` component `whenTicketClicked`. Because `onTicketSelection` is itself a prop from the `TicketControl` component, it is one of `TicketList`'s props, which is why we need to prefix `onTicketSelection` with `props`.

Finally, we also need to add a PropType for `onTicketSelection`.

## Add Function To `Ticket` Component
---

Now it's time to pass the `handleChangingSelectedTicket` function down to our `Ticket` component. It has been passed down from `TicketControl` to `TicketList` as a prop called `onTicketSelection`. Then `TicketList` passed it down to `Ticket` as a prop called `whenTicketClicked`.

It may already seem a bit convoluted — and we are only passing this function down through a few components. It should be clear why prop drilling through many components should generally be avoided. Fortunately, we are only passing this prop down from a parent to a child to that child's child. That's not a big deal — but our code would get messy if we drilled much further.

Let's take a look at our updated `Ticket` component. All we are adding is a div with an `onClick` handler and a few `PropTypes`.

```js title="src/components/Ticket.js"
import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
    <React.Fragment>
      <div onClick={() => props.whenTicketClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Ticket;
```

We wrap an individual ticket in a div that looks like this:

```jsx
<div onClick={() => props.whenTicketClicked(props.id)}>
```

Because `TicketList` is iterating through each individual ticket, each ticket will have its own div with an `onClick` handler attached.

As we discussed in the last lesson, we need to use an arrow function so the expression isn't evaluated immediately. We pass in the ticket's id via `props.id`.

At this point, we can click on a ticket and the `selectedTicket` state in `TicketControl` will update, showing our placeholder `TicketDetail` component. Once again, it may seem like information is being passed up from `Ticket` all the way to `TicketControl`, but the opposite is happening. Instead, think of `TicketControl` expanding its scope all the way down to `Ticket` with the help of props and callbacks.

## Update `TicketDetail` Component to Render `selectedTicket`
---

Earlier in this lesson, we added the following line of code to `TicketControl`:

```jsx
currentlyVisibleState = <TicketDetail ticket={selectedTicket} />
```

We specified that the value of `selectedTicket` should be passed as a prop called `ticket` down to our `TicketDetail` component.

Now we just need to use those props in `TicketDetail`. Here's our updated `TicketDetail` component:

```js title="src/components/TicketDetail.js"
import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props){
  const { ticket } = props;
  
  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <hr/>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object
};

export default TicketDetail;
```

Note that we use object destructuring (`const { ticket } = props;`) to derive the `ticket` object from our props. Otherwise, for a ticket attribute like `location`, we'd need to say `props.ticket.location` instead of just `ticket.location`. It is common — but not necessary — to use object destructuring with props in React.

We also specify that `ticket` will have a PropType of `object`.

## Finishing Up
---

We are almost done. However, there's still a problem with our application. When we navigate to ticket detail and click on the _Return to Ticket List_ button, nothing will happen.

Let's take a look at that button in the `TicketControl` component:

```jsx
<button onClick={handleClick}>{buttonText}</button>
```

The issue must be in the `handleClick` function, so let's take a look at that:

```js
const handleClick = () => {
  setFormVisibleOnPage(!formVisibleOnPage);
}
```

Currently, the `handleClick` function only toggles the visibility of our form. We also need it to set `selectedTicket` to `null` so the queue can show. But it's not quite that simple. When we click on a ticket's detail, `formVisibleOnPage` is set to `false`. We don't want to toggle it back to `true`! That's why we see the form for adding a ticket when we click on the button.

Let's update the `handleClick` function so it can also handle returning to the queue from the ticket detail page:

```js title="src/components/TicketControl.js"
const handleClick = () => {
  if (selectedTicket != null) {
    setFormVisibleOnPage(false);
    setSelectedTicket(null);
  } else {
    setFormVisibleOnPage(!formVisibleOnPage);
  }
}
```

We know that if `selectedTicket` isn't `null` then we must be on the ticket detail page. In that case, we know that `formVisibleOnPage` should be set to `false` and `selectedTicket` should be set to `null`. Otherwise, we know that we must be on the add ticket page or the ticket list page — so our `else` statement can just continue to toggle the `formVisibleOnPage` state.

Now our button toggles between all of our components.

However, we are at the point when this function is probably trying to do too much. It felt like nice, clean code and a reusable function before — and while we've adapted it for yet another use, it's not quite as clean anymore. We definitely wouldn't want this function to have a ton of conditionals, each for handling a different kind of click! So this is the point where we might want to consider refactoring this function as our application gets larger. Because everything is working, we won't do a refactor here — but it's always good to pay close attention and consider when we might want to refactor code.

If you've been holding your breath (hopefully not), you can breathe out now. All of these steps may seem overly complicated at first. There are a lot of moving parts in a React application, especially once we start passing around a lot of props. Good planning is very important. Ultimately, the content in this lesson will be more likely to click if you code along with it.

Practice is also important, and at least in the short term, try to look at bugs as a potential teacher as opposed to a source of frustration. Bugs _will_ happen, especially at first. It can be challenging to keep track of all the props that need to be passed around — along with all the other little details that come with adding a core piece of functionality. However, React error messages tend to be very informative, so follow your errors up and down the component tree until you see where everything connects.
