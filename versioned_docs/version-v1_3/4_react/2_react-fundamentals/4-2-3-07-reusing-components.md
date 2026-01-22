---
title: "📓 4.2.3.7 Reusing Components"
day: wednesday
id: 4-2-3-7-reusing-components
hide_table_of_contents: true
---

One of React's advantages is its ability to reuse components. Whenever we find ourselves copying code between components, we should ask: can this be extracted into a reusable component?

We're almost ready to add update functionality to our Help Queue. But first, let's think ahead. Our `NewTicketForm` component has a form. We'll need an `EditTicketForm` with the exact same fields. Instead of copying the form code (not DRY!), let's extract it into a `ReusableForm` component that both can use.

## Our Roadmap

1. Create a `ReusableForm` component
2. Refactor `NewTicketForm` to use it

That's it — just two steps. We're setting ourselves up for the next lesson.

---

## Step 1: Create the `ReusableForm` Component

This component's only job is to render the form. The parent component will handle what happens on submit.

```js title="src/components/ReusableForm.js"
import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const { formSubmissionHandler, buttonText } = props;

  return (
    <React.Fragment>
      <form onSubmit={formSubmissionHandler}>
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
        <button type='submit'>{buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
```

**What makes it reusable:**
- `formSubmissionHandler` — each parent component can pass its own submit function
- `buttonText` — the button can say "Help!" for new tickets or "Update" for edits

The form fields themselves are identical for both use cases, so we hardcode those. If your app had forms with different fields, you could pass those as props too.

---

## Step 2: Refactor `NewTicketForm`

Now update `NewTicketForm` to use our new component:

```js title="src/components/NewTicketForm.js"
import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid';

function NewTicketForm(props) {

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
```

**What changed:**
- We import `ReusableForm`
- The `return` now renders `ReusableForm` instead of the raw form JSX
- We pass our handler function and button text as props

The `handleNewTicketFormSubmission` function stays here because it's specific to creating new tickets.

---

## Recap

We extracted shared form JSX into a reusable component:

| Component | Responsibility |
|-----------|----------------|
| `ReusableForm` | Renders form fields and button; calls whatever submit handler it receives |
| `NewTicketForm` | Handles the logic for creating a new ticket; passes its handler to `ReusableForm` |

This may seem like extra work for little benefit right now. But in the next lesson, we'll create `EditTicketForm` — and instead of copying many lines of form JSX, we'll just reuse `ReusableForm` with a different handler.
