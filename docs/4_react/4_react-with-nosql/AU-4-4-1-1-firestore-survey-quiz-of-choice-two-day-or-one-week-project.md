---
title: '✏️ 4.4.1.1 Firestore Survey, Quiz of Choice (Two-Day or One-Week Project)'
day: monday
id: 4-4-1-1-firestore-survey-quiz-of-choice-two-day-or-one-week-project
hide_table_of_contents: true
---

**Goals:** Use Firestore as a data solution for a React application. Use hooks to manage state and component lifecycle events. **Going forward, you should not use class components.**   

Check in with your instructor if you have any questions.

## Warm Up
---

* What is the difference between Firebase and Firestore? (You may need to do additional research to answer this question.)
* What is the CAP theorem? What does each letter represent?
* What are some of the ways a NoSQL database differs from a SQL database?
* What are hooks? What pain points do hooks solve for React development?

## Code
---

### Help Queue with Firestore

Work through the weekend homework and update the Help Queue application to use hooks and Firestore as a data solution.

### Integrating Firestore with React Project

What you work on is ultimately up to you. We will provide two options but you may choose to work on another project as long as the focus of the project is using React hooks with Firebase services (like a Firestore database and authentication).

#### Prompt #1: Survey or Quiz of Choice

Create an application that allows a user to complete a quiz or survey. Users should be able to create new quizzes or surveys while other users should have the ability to fill out those surveys. To make this prompt a bit easier, you can have a set number of questions for each quiz or survey — that way, the surveys don't need to be dynamically rendered. (For instance, the form could have fields for `response1`, `response2`, and so on.)

Try implementing the following features:

* A user should be able to create, update and delete a survey. All surveys should be stored in the database.
* A user should be able to fill out and submit surveys. Survey results should be submitted to the database. (A survey result can be associated with a survey by mimicking a one-to-many relationship.)
* A user should be able to sign up, sign in, and sign out.
* A user should have their own dashboard which lists the surveys they've created.
* **Bonus**: A user should be able to see the combined data on a survey in their dashboard. For instance, if a survey provides a 1-5 rating, return an average rating for all surveys.
* **Challenging**: Try using [a library like D3](https://d3js.org/) to visualize data from surveys. This is only recommended if you have time to spare, interest in data visualization, and are doing one project for the entire course section.

#### Prompt #2: Memory Lane

Create an application that stores our memories so we don't have to store them ourselves anymore! Implementation is up to you — it could be a surreal exploration of dreams and the subconscious — or it could be a more practical collection of technical information you've learned and want to store in flashcard form.

Try adding the following:

* Full CRUD functionality with hooks and Firestore.
* User authentication and basic authorization.
* Routing with react-router.
* Ability to associate memories with specific users.

## Instructor/Peer Code Review
---

* Application correctly uses Firestore for data storage.
* Application uses hooks for component state and lifecycle events; there are no class components.
* Data is organized in a logical manner.
* All previous objectives are met.
