---
title: '✏️ 3.3.4.1 Help Queue, Merch Site, Event Logger (part 2)'
day: thursday
id: 3-3-4-1-help-queue-merch-site-event-logger-day-2
hide_table_of_contents: true
---

**Goal:** The lessons in this segment have covered Read (detail view), Delete, and Update — now add those operations to the project you started in the previous exercise. By the end, your application should have full CRUD functionality.

## Warm Up
---

* Why do we wrap an event handler in an arrow function when we need to pass an argument to it?
* How do you remove an item from a state array without mutating state directly?
* How can a single form component be reused for both creating a new item and editing an existing one?

## Code
---

Return to the project you built in the previous exercise and add the remaining CRUD operations. Refer back to the Help Queue lessons from this segment if you get stuck on any of the patterns.

### Merch Site

Add the following to your existing application:

* View the details of a selected item.
* Edit an existing item's fields.
* Increase or decrease the `quantity` of an item. If a user clicks "Buy", the `quantity` decreases by one; if they click "Restock", it increments by a specified number.
* When the `quantity` of an item reaches `0`, the item should say "Out of Stock". A user should not be able to reduce the `quantity` below `0`.

#### Further Exploration

* Add the ability to delete an item from the store.
* Create a `Cart` component. When a user clicks "Buy", the item should be added to the cart.
* A user should be able to view and remove items from the cart.
* Create a widget that shows the number of items in the cart, updated whenever items are added.

### Event Logger

Add the following to your existing application:

* View the details of a selected event type.
* Edit an existing event type.
* Allow users to increment the count of an event type when there is a new sighting, play, or occurrence. Users should also be able to decrement (for instance, if they made a mistake).

#### Further Exploration

* Add the ability to delete an event type from the list.
* Create a dynamic component that shows the total number of events logged so far. It should appear on every page and aggregate across all event types — so if there are 3 "Spotted Sandpiper" sightings and 4 "Red-Winged Blackbird" sightings, it might read "7 total sightings."

## Instructor/Peer Code Review
---

* Application effectively uses local and shared state.
* Application was well-planned and utilizes unidirectional data flow.
* TypeScript types are defined for all component props.
* Application has working CRUD functionality.
* Application includes a component diagram in the README.
