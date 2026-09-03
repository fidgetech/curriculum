---
title: '✏️ 3.4.3.1 Routing, Auth, and Wait Time Practice: Team Check-in Board'
day: wednesday
id: 3-4-3-1-team-check-in-board-practice
hide_table_of_contents: true
---

**Goal:** Practice the routing, authentication, and wait-time concepts from this section by continuing the Team Check-in Board project you started earlier in this section.

## Warm Up
---

* What React technologies are you interested in exploring further? What are your strengths and weaknesses so far in terms of learning React?
* What should we consider when making a decision whether to add an external library to a project?

## Code
---

### Help Queue with Firestore

If you haven't already done so, work through the lessons in this section and update the Help Queue application to use the following:

* Routing with react-router,
* Firebase authentication and authorization,
* date-fns and Firestore server timestamps to add a wait time to each ticket.

### Team Check-in Board

Return to the Team Check-in Board project you worked on earlier in this section. Following the same process you used for Help Queue, add the following:

* A separate `/sign-in` route, using react-router. Users must sign in before they can view or post check-ins.
* A Firestore server timestamp on each check-in, and a formatted wait time (for example, "5 minutes ago") using `date-fns`.

## Instructor/Peer Code Review
---

* Application correctly uses Firestore for data storage.
* Application uses hooks for component state and lifecycle events.
* Component props and shared data shapes are described with TypeScript types.
* Routing, authentication, and a formatted wait time all work correctly.
