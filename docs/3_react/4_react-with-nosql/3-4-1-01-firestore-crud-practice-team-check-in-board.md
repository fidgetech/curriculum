---
title: '✏️ 3.4.1.1 Firestore CRUD Practice: Team Check-in Board'
day: monday
id: 3-4-1-1-firestore-crud-practice-team-check-in-board
hide_table_of_contents: true
---

**Goals:** Use Firestore as a data solution for a React application written in TypeScript. Use hooks to manage state and component lifecycle events.

Check in with your instructor if you have any questions.

## Warm Up
---

* What is the difference between Firebase and Firestore? (You may need to do additional research to answer this question.)
* What is the CAP theorem? What does each letter represent?
* What are some of the ways a NoSQL database differs from a SQL database?
* What does `useEffect` do that `useState` alone can't handle? Give an example of when you'd use it.
* What is a custom hook and why would you create one?

## Code
---

### Help Queue with Firestore

If you haven't already done so, work through the lessons in this section to update the Help Queue application to use Firestore as a data solution.

### Team Check-in Board

For additional practice with Firestore, we've provided a Team Check-in Board starter project. It's a small application with full CRUD functionality already built using local state, the same way Help Queue worked at the end of React Fundamentals - no Firestore involved yet.

**[<i class="glyphicon glyphicon-folder-open"></i>  GitHub Repo for Team Check-in Board Starter Project](https://github.com/fidgetech-curriculum-projects/team-check-in-board)**

Clone down the starter project, then follow the same process you used for Help Queue: connect the project to a Firebase project of its own, and replace the local state with Firestore.

By the end, your Team Check-in Board should:

* Store all check-ins in Firestore instead of local state.
* Support the same CRUD functionality as before: create, view, edit, and delete a check-in.

Because the interface is already built, you can put your effort into getting comfortable with `useEffect`, `onSnapshot`, and the rest of the Firestore CRUD functions covered in this section's lessons.

You'll come back to this same project later in this section to add routing, authentication, and a wait time, so hold onto it.

## Instructor/Peer Code Review
---

* Application correctly uses Firestore for data storage.
* Application uses hooks for component state and lifecycle events.
* Component props and shared data shapes are described with TypeScript types.
* Full CRUD functionality (create, read, update, delete) works correctly.
