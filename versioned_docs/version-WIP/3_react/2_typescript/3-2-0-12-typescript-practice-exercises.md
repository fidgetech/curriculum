---
title: "✏️ 3.2.0.12 TypeScript Practice Exercises"
day: weekend
id: 3-2-0-12-typescript-practice-exercises
hide_table_of_contents: true
---

**Goal:** Practice the TypeScript concepts from the earlier lessons before starting the project. Work through as many of these as you can on your own. These exercises are for practice - there's no single right answer for most of them.

Set up a small TypeScript project (or use the one you created in the [Setting Up TypeScript](3-2-0-3-setting-up-typescript) lesson) to try these out with `tsx`.

---

## Exercise 1: Type Annotations and Inference

1. Declare a `const` variable for each of these values without annotations. Hover over each in VS Code to see what TypeScript infers:
   - Your name _(note: avoid naming your variable `name` to prevent conflicts with built-in properties)_
   - Your age
   - Whether you prefer dark mode (`true` or `false`)
   - A list of your three favorite programming languages

2. Now declare the same four values using `let`. What changes about the inferred types?

3. Declare an empty array for a shopping list. What does TypeScript infer? Fix it by adding an explicit annotation.

---

## Exercise 2: Object Types

1. Define a `type` called `Movie` with the following properties:
   - `title` - a string
   - `director` - a string
   - `year` - a number
   - `genre` - one of: `"action"`, `"comedy"`, `"drama"`, `"horror"`, `"sci-fi"` (use a separate `type` alias for this)
   - `rating` - a number (optional)

2. Create at least three `Movie` objects that satisfy this type. Make sure at least one has a rating and at least one doesn't.

3. Create a `Movie[]` array containing your three movies.

---

## Exercise 3: Typed Functions

Write the following functions with full type annotations on parameters and return types:

1. `getTitle(movie: Movie): string` - returns the title of a movie

2. `filterByGenre(movies: Movie[], genre: Genre): Movie[]` - returns all movies of a given genre (use the `Genre` type you created above)

3. `createMovie(title: string, director: string, year: number, genre: Genre): Movie` - creates and returns a new `Movie` object with no rating

---

## Exercise 4: Literal Union Types

1. Create a `Priority` type that can be `"low"`, `"medium"`, `"high"`, or `"critical"`.

2. Write a function `getPriorityLabel(priority: Priority): string` that returns a descriptive label for each level (e.g., `"Low priority"`, `"Critical - address immediately"`). Use a `switch` or `if/else` chain.

3. Call `getPriorityLabel` with `"urgent"` instead of a valid priority. What does TypeScript say?

4. Create a `Status` type that can be `"active"` or `"inactive"`. Declare a variable of that type, reassign it to the other valid value, then try to assign it `"pending"`. What error do you get? _(Note: avoid naming your variable `status` to prevent conflicts with built-in properties.)_
