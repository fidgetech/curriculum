---
title: '✏️ 3.3.3.1 Help Queue, Merch Site, Event Logger'
day: wednesday
id: 3-3-3-1-help-queue-merch-site-event-logger
hide_table_of_contents: true
---

**Goal:** You've been following along with the Help Queue lessons through the previous two segments — now apply those same patterns to a project of your own. Build a site with Create and Read functionality, plan your component tree carefully, and draw a component diagram to include in your README.

## Warm Up
---

* What is unidirectional data flow? Why is it important?
* What is a UUID? How are they useful?
* How can a method in a parent component have access to data in child components if data can only flow down, not up?

## Code
---

Choose one of the following projects. Your application should allow users to create new items and view a list of them. Plan your component structure before you start coding.

### Merch Site

Build a website for selling merchandise for a band, author, sports team, or any other purveyor that interests you.

A user should be able to do the following:

* Add new items to the store. Items should have fields for `name`, `description`, and `price` (along with any other fields you wish to add).
* View a list of all items in the store.

### Event Logger

Nope, this isn't a site for `console.log()`. Create a site for logging a specified type of real-world event — for instance, a site for birdwatchers to log sightings of birds, celebrity watchers to log sightings of pop stars, or board game players to log their plays of games.

A user should be able to do the following:

* Add new event types to track. For instance, in a bird-watching application, a user might add "Spotted Sandpiper" as a type of sighting to log.
* View a list of all event types.

## Instructor/Peer Code Review
---

* Application effectively uses local and shared state.
* Application was well-planned and utilizes unidirectional data flow.
* TypeScript types are defined for all component props.
* Users can create and view items.
* Application includes a component diagram in the README.
