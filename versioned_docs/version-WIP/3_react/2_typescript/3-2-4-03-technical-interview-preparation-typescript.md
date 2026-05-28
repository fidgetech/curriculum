---
title: "✏️ 3.2.4.3 Technical Interview Preparation: TypeScript"
day: thursday
id: 3-2-4-3-technical-interview-preparation-typescript
hide_table_of_contents: true
---

## Quick Reference

Use this as a study guide before practicing with your partner.

| Concept | One-line definition |
|---|---|
| Static typing | Types are checked at compile time, before the code runs |
| Type annotation | Explicit type label added by the developer (`: string`, `: number`, etc.) |
| Type inference | TypeScript deduces a value's type from context, without an annotation |
| Union type | A value that can be one of several types (`string \| number`) |
| Literal type | A type that accepts only a specific value (`"success" \| "error"`) |
| Type alias | A name for a type, defined with `type` |
| Interface | A named contract for the shape of an object; can be extended |
| Optional property | A property that may or may not be present (marked with `?`) |
| Generic | A type that takes another type as a parameter, written with `<T>` |
| Type narrowing | Writing a conditional that tells TypeScript which specific type a value is in a given branch |
| Discriminated union | A union of types where each member has a shared literal field for narrowing |
| Utility type | Built-in generic types that transform other types (`Partial<T>`, `Required<T>`, `Pick<T, K>`, `Omit<T, K>`, `Record<K, V>`, `Readonly<T>`) |

## Technical Interview Questions
---

* What is the difference between a type alias and an interface in TypeScript? When would you use one over the other?
* What does `strict: true` enable in `tsconfig.json`? Why is it recommended?
* What is type narrowing? Describe two different ways to narrow a union type.
* What is a generic? Write a simple generic function and explain what the `T` represents.
* What is the difference between `unknown` and `any`?
* What is a discriminated union? When would you use this pattern over a plain union?
* What is the difference between `??` and `||`? When does the difference matter?
* What does `Omit<T, K>` produce? Give an example of when you would use it.
* What does TypeScript mean by "structural typing"?
* Why does TypeScript warn about `Object is possibly 'null'`? What are two ways to handle this?

## Stories and Examples
<hr />

Offering a tangible story or example that highlights your skills usually goes much further in an interview than simply telling your interviewer you're good at something. For example, it's better to tell a story about a time TypeScript caught a tricky bug versus simply saying "I'm careful about types!"

Review the **STAR** method discussed in [this lesson on non-technical interviews](../../marketing-yourself/preparing-for-job-interviews/non-technical-interview). Use the **STAR** method to practice answering non-technical questions with your partner.

Here are some questions that commonly come up and that you can draw on your work in this section to answer:

**"Tell me about a time a tool caught a bug before you ran the code."**

> **Situation:** I was working on a TypeScript project that tracked books with optional ratings.
> **Task:** I needed to write a function that calculated the average rating across the whole collection.
> **Action:** When I tried to add `book.rating` to a running total, TypeScript flagged it because `rating` is optional - the value could be `undefined`. I added a narrowing check so the function only counted books that actually had a rating.
> **Result:** What would have been a confusing runtime error (or a misleading `NaN` average) became a clear compile-time message that pointed me straight at the fix. The function returned `null` honestly when no books had been rated yet, instead of returning a misleading zero.

**"Tell me about a time you had to think carefully about how to model data."**

> **Situation:** I was designing the data model for a small TypeScript application that tracked books with different reading statuses.
> **Task:** I needed to decide how to represent things like genre and reading status in a way that would catch typos and invalid values.
> **Action:** Instead of using plain strings, I defined literal union types for `Genre` and `ReadStatus`. I made `rating` an optional property because not every book had been read yet, and used a separate `NewBook` type (derived from `Book` with `Omit`) for cases where the `id` hadn't been assigned yet.
> **Result:** The types acted as documentation of what the data could and couldn't look like, and the editor autocompleted valid values as I wrote code. Several small bugs - a misspelled status, a missing `id` on a new book - showed up as red underlines instead of becoming runtime problems.

These are student project examples - that's fine. Interviewers understand you're early in your career. What matters is that you can describe your thinking clearly.

If you come up with stories of your own that you feel good about, write them down. It's hard to come up with specific examples on the spot during an interview. Having a few ready to go will serve you well.
