---
title: '✏️ 3.1.4.1 Technical Interview Preparation: Functional Programming'
day: thursday
id: 3-1-4-1-technical-interview-preparation-functional-programming
hide_table_of_contents: true
---

## Quick Reference

Use this as a study guide before practicing with your partner.

| Concept | One-line definition |
|---|---|
| Pure function | Same input always gives same output; no side effects |
| Immutability | Data is not changed in place; create new values instead |
| First-class function | Functions can be stored in variables, passed as arguments, and returned from other functions |
| Higher-order function | A function that takes or returns another function (e.g. `map`, `filter`, `reduce`) |
| Closure | An inner function that remembers variables from its outer function, even after the outer function has finished |
| Function factory | A function that uses a closure to generate specialized, pre-configured functions |
| Composition | Building complex objects from small, reusable functions instead of inheriting from parent classes |
| Declarative | Describing *what* you want (e.g. `map`) rather than *how* to do it step by step (e.g. a `for` loop) |
| Recursion | A function that calls itself to break a problem into smaller pieces |

## Technical Interview Questions
---

* What are some of the key differences between functional and object-oriented programming?
* What are some of the advantages of using functional programming over object-oriented programming?
* What is immutability and why is it important?
* What is the difference between imperative and declarative programming?
* What are pure functions and why are they important to functional programming?
* What does it mean when a function is a first-class citizen? Why is it useful for a language like JS to offer this functionality?
* What is a closure? What are some of their use cases?
* Demonstrate the differences between writing a loop and using recursion to solve a problem. What are the advantages of using recursion? What are potential disadvantages?
* What is the difference between composition and classical inheritance? What are some of the advantages of composition?
* What does it mean to mutate state? Why do we want to avoid this in functional programming?

## Stories and Examples
<hr />

Offering a tangible story or example that highlights your skills usually goes much further in an interview than simply telling your interviewer you're good at something. For example, it's better to tell a story about a time you tracked down a tricky bug versus simply saying "I'm good at problem-solving!"

Review the **STAR** method discussed in [this lesson on non-technical interviews](../../marketing-yourself/preparing-for-job-interviews/non-technical-interview). Use the **STAR** method to practice answering non-technical questions with your partner.

Here are some questions that commonly come up and that you can draw on your work in this section to answer:

**"Tell me about a time you improved the design of some code."**

> **Situation:** I was working on a JavaScript project that used classes and inheritance.
> **Task:** I needed to add a new feature, but the class hierarchy made it awkward — the new type didn't fit cleanly into the existing parent class.
> **Action:** I refactored the code to use composition instead of inheritance, building the behavior from small, focused functions that I could mix and match as needed.
> **Result:** The new feature fit naturally, and the individual functions were easy to test and reuse.

**"Tell me about a time you had to understand someone else's code before changing it."**

> **Situation:** I was given a function to extend that wasn't well documented.
> **Task:** I needed to understand what it was doing before I could safely modify it.
> **Action:** I traced through the logic step by step, identified that it had side effects (it was mutating an array that was passed in), and wrote tests to confirm my understanding of its behavior before touching it.
> **Result:** The tests caught a bug that would have been introduced by my first approach, and the final version was both correct and easier to reason about.

These are student project examples — that's fine. Interviewers understand you're early in your career. What matters is that you can describe your thinking clearly.

If you come up with stories of your own that you feel good about, write them down. It's hard to come up with specific examples on the spot during an interview. Having a few ready to go will serve you well.
