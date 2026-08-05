---
title: "📓 3.3.0.10 Looping in JSX"
day: weekend
id: 3-3-0-10-looping-in-jsx
hide_table_of_contents: true
---

Currently, our application only has two hard-coded tickets. However, this isn't how our Help Queue should actually work. A functioning, production-ready application should contain a dynamic list of tickets. In this lesson, we'll cover looping through content in JSX.

## Looping in JSX
---

First, let's create an array of tickets in `TicketList.tsx`:

```tsx title="src/components/TicketList.tsx"
import Ticket from './Ticket';

const mainTicketList = [
  {
    names: 'Thato and Haley',
    section: '3A',
    issue: 'React component not rendering!',
    id: '1'
  },
  {
    names: 'Sleater and Kinney',
    section: '4B',
    issue: 'TypeScript error in component.',
    id: '2'
  },
  {
    names: 'Imani & Jacob',
    section: '9F',
    issue: 'Tests are not passing.',
    id: '3'
  }
];

function TicketList() {
  // existing code
}

export default TicketList;
```

TypeScript infers the type of each object in this array from the literal values, so we don't need to add an explicit type annotation here. In the future, this list will come from a database or an external data source. We'll explore that in later sections. For now, we'll store hard-coded tickets inside our `TicketList` component. Note that we use `const`, not `let`. Remember that props are read-only and that we can't change them.

Next, we'll update the `TicketList` component to include a loop that renders a Ticket component for each entry in `mainTicketList`. In JSX, we use the `map()` function for loops.

```tsx title="src/components/TicketList.tsx"
function TicketList(){
  return (
    <>
      <hr/>
      {mainTicketList.map((ticket) =>
        <Ticket
          names={ticket.names}
          section={ticket.section}
          issue={ticket.issue}
          key={ticket.id}
        />
      )}
    </>
  );
}
```

As we can see here, `map()` loops through our `mainTicketList`. On each iteration, it creates a new `Ticket` with props corresponding to one of the tickets in `mainTicketList`.

There is one important thing to note: we add a `key` prop to each `Ticket`. If we don't, our code will run correctly but we'll get the following warning in the console: _Warning: Each child in an array or iterator should have a unique "key" prop._

Having unique keys makes our application more efficient because it helps React differentiate between similar components so it can identify which have been updated, added, or removed from the list during its virtual DOM reconciliation. We use `ticket.id` as the key since each ticket already has a unique ID — this is always preferable to using the array index, which can cause subtle rendering bugs if items are reordered or removed.

Now we can run our application and see that all our tickets are correctly populating!

### Additional Resources

If you'd like a more technical explanation about how React uses these unique `key` props, check out the ["Why does React need keys?" in the React documentation](https://react.dev/learn/rendering-lists#why-does-react-need-keys).
