---
title: "📓 3.3.2.1 Generating Unique IDs"
day: tuesday
id: 3-3-2-1-generating-unique-ids
hide_table_of_contents: true
---

So far each of our tickets in the `TicketList` component uses a key set to the index of a `map()` function. While this works as a temporary solution, it's not a good practice in a real world application. Instead, each of our tickets should have its own unique ID.

Unique IDs are important for many reasons. In larger database-backed applications, they are an essential way to differentiate between records. However, they are also useful even in React applications that don't use databases. Using the index of an iterator function isn't a reliable way to ensure that each record in a React application has a unique key. In fact, using the index as a key can potentially make our code less efficient and even break our application.

Remember that React relies on unique keys in order to efficiently reconcile the virtual DOM with the actual DOM. We should do everything we can to make sure those keys are always unique. In addition, unique IDs are helpful for correctly finding a record so it can be updated, deleted, and so on.

## UUID

The standard format for unique IDs in web development is UUID, which stands for "universally unique identifier." UUIDs are also sometimes called GUIDs, or "globally unique identifiers."

A UUID has 32 characters. The number of total permutations of a UUID is 2<sup>122</sup>. This is such a large number that every computer application across the world, regardless of language or platform, could use UUID and still have an extremely tiny chance of duplicates. UUIDs are not specific to React, JavaScript, or even web development. They're used in everything from operating systems to SQL database keys.

## `crypto.randomUUID()`

To generate UUIDs in our React application, we'll use `crypto.randomUUID()` - a method built into the browser. No library installation or import is required.

```ts
const id = crypto.randomUUID();
```

Each call to `crypto.randomUUID()` returns a new, unique UUID string. We could create a ticket object with a generated ID like this:

```ts
const ticket = { id: crypto.randomUUID() };
```

TypeScript already knows the type of `crypto.randomUUID()` - it returns a `string` - so we get full type checking with no extra setup.

In the next lesson, we'll begin to create our `NewTicketForm` component and use `crypto.randomUUID()` to assign unique IDs to new tickets.
