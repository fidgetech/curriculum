---
title: "📓 4.2.1.5 Conditional Rendering"
day: monday
id: 4-2-1-5-conditional-rendering
hide_table_of_contents: true
---

In this lesson, we'll cover **conditional rendering**. Conditional rendering is exactly what it sounds like — using a conditional to determine what content should be rendered. Conditional rendering is a great example of local state in action, and it's very common in dynamic applications. It's really also just mostly plain old JavaScript.

Let's add a condition to the `TicketControl` component now:

```js title="src/components/TicketControl.js"
import React, { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

function TicketControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);

  let currentlyVisibleState = null;

  if (formVisibleOnPage) {
    currentlyVisibleState = <NewTicketForm />;
  } else {
    currentlyVisibleState = <TicketList />;
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  );
}

export default TicketControl;
```

Let's break down what's happening:

1. First, we create a variable called `currentlyVisibleState` and set it to `null` because we haven't determined which component should be rendered yet.

2. Next, we check the value of `formVisibleOnPage`. If it's `true`, the `currentlyVisibleState` will be set to our `NewTicketForm` component. Otherwise, our `currentlyVisibleState` will be set to our `TicketList` component.

3. Finally, in our `return()` statement, we use JSX curly braces to evaluate which component should be rendered.

Note that the conditional logic is just JavaScript, **not** JSX. We can use plain old JavaScript outside of our `return()` statement. We only need to use JSX and curly braces for evaluation inside our `return()`. We do set the value of `currentlyVisibleState` to React components, but this is just like setting the value of a variable to any other value.

That's all there is to it. If we run our application, our ticket list will be showing because that is the default state of our page (`formVisibleOnPage` is `false`). However, we can't toggle anything yet!

## Alternative Approaches to Conditional Rendering
---

There are several ways to handle conditional rendering in React. The approach above with an if/else statement is clear and readable, especially when you have more than two conditions.

### Ternary Operator

For simple two-way conditions, you can use a ternary operator directly in your JSX:

```js
return (
  <React.Fragment>
    {formVisibleOnPage ? <NewTicketForm /> : <TicketList />}
  </React.Fragment>
);
```

### Logical AND Operator

If you only want to render something when a condition is true (and nothing otherwise), you can use the logical AND operator:

```js
return (
  <React.Fragment>
    {formVisibleOnPage && <NewTicketForm />}
  </React.Fragment>
);
```

This renders `NewTicketForm` only when `formVisibleOnPage` is `true`. When it's `false`, nothing is rendered.

For our Help Queue application, we'll stick with the if/else approach because it's clearer and we'll be adding more conditions as our application grows.

In the next lesson, we'll learn how to update our local state with an event so we can actually toggle between our components!
