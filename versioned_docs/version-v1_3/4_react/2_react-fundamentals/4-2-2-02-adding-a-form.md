---
title: "📓 4.2.2.2 Adding a Form"
day: tuesday
id: 4-2-2-2-adding-a-form
hide_table_of_contents: true
---

So far, the form component in our Help Queue application just contains placeholder data. We'll need an actual form to add tickets to the queue. In this lesson, we'll create a form that collects the value of different fields by taking advantage of `event.target`. Then, over the next several lessons, we'll learn how to take advantage of unidirectional data flow and shared state so our form correctly adds tickets to the queue.

## Adding a Form
---

We'll start by replacing the placeholder text in the `return()` of our `NewTicketForm` component with an actual form:

```js title="NewTicketForm.js"
import React from "react";

function NewTicketForm(props){

  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
}

export default NewTicketForm;
```

Notice that our form has a new type of event handler called `onSubmit`. This is similar to when we added an `onClick` event handler when we learned how to toggle local state. The difference is that `onSubmit` triggers when the submit button of a form is clicked.

Our `onSubmit` handler will trigger the function `handleNewTicketFormSubmission`, which we'll define in the next section.

## Adding an Event Handler to Our Form
---

Now that we have a form in place, we need a `handleNewTicketFormSubmission` function. This function will be triggered when the form is submitted.

Let's add that function just above the lines of code where we instantiated our form:

```js title="NewTicketForm.js"
...

function NewTicketForm(){

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
  }
...
```

We need to add `event.preventDefault()` to our form submission handler just as we have in the past. The default behavior of an HTML submit button is to submit data and refresh the page. We don't want it to refresh the page so we prevent the default behavior.

For now we'll just `console.log()` the values of our fields. We are taking advantage of `event.target`, which gives us access to the event that was just fired - in this case the submit event. We can grab the values that came from that submit event based on their `name` property. We just need to call `event.target.[input-field-name-goes-here].value`.

Now if we run `npm start`, we will see that the fields from our form are properly logged in the console.

In the next lesson, we'll learn about unidirectional data flow. Then, in the lesson after that, we'll learn how we can get our form data to its parent `TicketControl` component, which can actually handle state.
