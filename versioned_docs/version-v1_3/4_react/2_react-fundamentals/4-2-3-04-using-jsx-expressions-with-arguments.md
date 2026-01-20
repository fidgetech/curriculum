---
title: "📓 4.2.3.4 Passing Arguments to Event Handlers"
day: wednesday
id: 4-2-3-4-passing-arguments-to-event-handlers
hide_table_of_contents: true
---

Before we continue, let's discuss an important gotcha related to event handlers in JSX.

## The Problem
---

When we attach an event handler like `onClick`, we pass a function reference:

```jsx
<button onClick={handleClick}>Click me</button>
```

Notice there are no parentheses after `handleClick`. We're telling React "here's the function to call when clicked" — we're not calling it ourselves.

If we add parentheses:

```jsx
<button onClick={handleClick()}>Click me</button>
```

This **calls the function immediately** when the component renders, not when the button is clicked. That's almost never what we want.

## When You Need to Pass an Argument
---

But what if we need to pass an argument to our function? Let's say we want to pass a ticket's `id` to a delete function:

```jsx
// ❌ This calls the function immediately!
<button onClick={handleDelete(ticket.id)}>Delete</button>
```

This won't work — `handleDelete(ticket.id)` runs right away because of the parentheses.

The solution is to wrap it in an arrow function:

```jsx
// ✅ This waits for the click
<button onClick={() => handleDelete(ticket.id)}>Delete</button>
```

## Why This Works
---

When we write `() => handleDelete(ticket.id)`, we're creating a new function that:
1. Takes no parameters (the empty `()`)
2. When called, executes `handleDelete(ticket.id)`

So `onClick` receives a function reference (the arrow function), not the result of calling `handleDelete`. React stores this function and calls it later when the user actually clicks.

Think of it like this:

```js
// Without arguments - just pass the function
onClick={handleClick}

// With arguments - wrap in an arrow function
onClick={() => handleClick(someArgument)}
```

## Summary
---

- `onClick={myFunction}` — passes the function (correct)
- `onClick={myFunction()}` — calls immediately (wrong)
- `onClick={() => myFunction(arg)}` — passes a function that will call `myFunction(arg)` when clicked (correct)

You'll use this pattern frequently in React whenever you need to pass data to an event handler, like passing an `id` to identify which item was clicked.