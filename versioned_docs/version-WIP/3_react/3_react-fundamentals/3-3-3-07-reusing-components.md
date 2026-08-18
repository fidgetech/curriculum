---
title: "📓 3.3.3.7 Reusing Components"
day: wednesday
id: 3-3-3-7-reusing-components
hide_table_of_contents: true
---

One of React's advantages is its ability to reuse components. Whenever we find ourselves copying code between components, we should ask: can this be extracted into a reusable component?

We're almost ready to add update functionality to our Help Queue. But first, let's think ahead. Our `NewTicketForm` component has a form. We'll need an `EditTicketForm` with the exact same fields. Instead of copying the form code (not DRY!), let's extract it into a `ReusableForm` component that both can use.

## Our Roadmap

1. Create a `ReusableForm` component
2. Refactor `NewTicketForm` to use it

That's it - just two steps. We're setting ourselves up for the next lesson.

---

## Step 1: Create the `ReusableForm` Component

This component's only job is to render the form. The parent component will handle what happens on submit.

```tsx title="src/components/ReusableForm.tsx"
import { type SubmitEvent } from 'react';

type ReusableFormProps = {
  formSubmissionHandler: (event: SubmitEvent<HTMLFormElement>) => void;
  buttonText: string;
};

function ReusableForm({ formSubmissionHandler, buttonText }: ReusableFormProps) {
  return (
    <form onSubmit={formSubmissionHandler}>
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
      <button type='submit'>{buttonText}</button>
    </form>
  );
}

export default ReusableForm;
```

**What makes it reusable:**
- `formSubmissionHandler` - each parent component can pass its own submit function
- `buttonText` - the button can say "Help!" for new tickets or "Update" for edits

Notice how the prop types describe exactly what this component expects. `buttonText` is a `string`, and `formSubmissionHandler` is a function that takes a form submit event and returns nothing. That's the same `SubmitEvent<HTMLFormElement>` type we used when we first wired up the form, and it's why we import it here even though this component never writes a submit handler of its own - it only receives one.

The form fields themselves (`names`, `section`, and `issue`) are identical for both use cases, so we hardcode those. If your app had forms with different fields, you could pass those as props too.

:::note
The form is the only element we're returning, so we don't need a fragment here. Fragments are only necessary when we need to return multiple elements side by side.
:::

---

## Step 2: Refactor `NewTicketForm`

Now update `NewTicketForm` to use our new component:

```tsx title="src/components/NewTicketForm.tsx"
import { type SubmitEvent } from 'react';
import { type TicketData } from '../types';
import ReusableForm from './ReusableForm';

type NewTicketFormProps = {
  onNewTicketCreation: (ticket: TicketData) => void;
};

function NewTicketForm({ onNewTicketCreation }: NewTicketFormProps) {

  function handleNewTicketFormSubmission(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onNewTicketCreation({
      names: formData.get('names') as string,
      section: formData.get('section') as string,
      issue: formData.get('issue') as string,
      id: crypto.randomUUID()
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

**What changed:**
- We import `ReusableForm`
- The `return` now renders `ReusableForm` instead of the raw form JSX
- We pass our handler function and button text as props

The `handleNewTicketFormSubmission` function stays here because it's specific to creating new tickets. It still reads the submitted values with `FormData` and still generates a unique `id` with `crypto.randomUUID()` - none of that logic changes. The only difference is where the form markup lives.

TypeScript is doing quiet work for us here. `ReusableFormProps` says `formSubmissionHandler` must accept a `SubmitEvent<HTMLFormElement>`, and `handleNewTicketFormSubmission` accepts exactly that, so the two line up. If we later passed a handler with the wrong parameter type, or forgot `buttonText` entirely, we'd find out immediately in the editor instead of in the browser.

---

## Recap

We extracted shared form JSX into a reusable component:

| Component | Responsibility |
|-----------|----------------|
| `ReusableForm` | Renders form fields and button; calls whatever submit handler it receives |
| `NewTicketForm` | Handles the logic for creating a new ticket; passes its handler to `ReusableForm` |

This may seem like extra work for little benefit right now. But in the next lesson, we'll create `EditTicketForm` - and instead of copying many lines of form JSX, we'll just reuse `ReusableForm` with a different handler.
