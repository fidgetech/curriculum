---
title: "📓 3.3.2.2 Adding a Form"
day: tuesday
id: 3-3-2-2-adding-a-form
hide_table_of_contents: true
---

So far, the form component in our Help Queue application just contains placeholder data. We'll need an actual form to add tickets to the queue. In this lesson, we'll create a form that collects the value of different fields by taking advantage of the browser's `FormData` API. Then, over the next several lessons, we'll learn how to take advantage of unidirectional data flow and shared state so our form correctly adds tickets to the queue.

## Adding a Form
---

We'll start by replacing the placeholder text in the `return()` of our `NewTicketForm` component with an actual form:

```tsx title="NewTicketForm.tsx"
function NewTicketForm() {

  return (
    <>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='section'
          placeholder='Section' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Help!</button>
      </form>
    </>
  );
}

export default NewTicketForm;
```

Notice that our form has a new type of event handler called `onSubmit`. This is similar to when we added an `onClick` event handler when we learned how to toggle local state. The difference is that `onSubmit` triggers when the submit button of a form is clicked.

Our `onSubmit` handler will trigger the function `handleNewTicketFormSubmission`, which we'll define in the next section.

## Adding an Event Handler to Our Form
---

Now that we have a form in place, we need the `handleNewTicketFormSubmission` function. This function will be triggered when the form is submitted.

Let's add that function just above the lines of code where we instantiated our form:

```tsx title="NewTicketForm.tsx"
import { type SubmitEvent } from 'react';

function NewTicketForm() {

  function handleNewTicketFormSubmission(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get('names'));
    console.log(formData.get('section'));
    console.log(formData.get('issue'));
  }

// ... rest of the component code
```

We need to add `event.preventDefault()` to our form submission handler just as we have in the past. The default behavior of an HTML submit button is to submit data and refresh the page. We don't want it to refresh the page so we prevent the default behavior.

For now we'll just `console.log()` the values of our fields. We use `FormData` to read them, and `event.currentTarget` to refer to the form element itself - `currentTarget` is always the element the handler is attached to. The event is typed as `SubmitEvent<HTMLFormElement>` so TypeScript knows what kind of event and element we're working with.

:::note
`FormData` is a built-in browser API for reading form field values. `new FormData(formElement)` captures all the fields at once, and `.get('fieldName')` retrieves a specific field by its `name` attribute. So `formData.get('names')` returns whatever the user typed into the input with `name='names'`.
:::

Now if we run `npm run dev`, we will see that the fields from our form are properly logged in the console.

:::note
We're using what React calls **uncontrolled inputs** here - we let the DOM handle the form data and grab values when the form is submitted. This is a straightforward approach that works well for simple forms. Later, you may encounter **controlled inputs**, where React state tracks each field's value as the user types. Both approaches are valid; we're using uncontrolled inputs to keep things simple while we learn.
:::

In the next lesson, we'll learn about unidirectional data flow. Then, in the lesson after that, we'll learn how we can get our form data to its parent `TicketControl` component, which can actually handle state.
