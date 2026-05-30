---
title: "✏️ 3.2.2.7 Whiteboard Practice: TypeScript"
day: tuesday
id: 3-2-2-7-whiteboard-practice-typescript
hide_table_of_contents: true
---

## Whiteboard Practice
---

When and how whiteboarding practice is implemented will be up to your teacher. Below are recommended prompts.

**Note to Fidgetech Students:** Contact your instructor when you read this lesson to set up a whiteboarding practice session.

### Goal

For this whiteboarding session, you'll practice writing typed function signatures, narrowing union types, and applying generics.

As the interviewee:

* Ask clarifying questions.
* Keep talking.
* Explain your plan at the beginning; recap what you've done at the end.
* Plan your space.

As the interviewer:

* Answer questions as best as you can.
* Be encouraging. Whiteboarding is difficult!
* Be patient. Only offer hints if your partner indicates that they need help.
* Be engaged. Part of this practice is getting used to having someone evaluate your work as you produce it.
* Offer _constructive_ feedback. Find at least one thing that your partner did well _and_ one thing they could improve at.

Alternate who is whiteboarding between problems.

---

### Problem 1

Write a function `summarize` that accepts either a `string` or a `string[]`. If given a string, return it as-is. If given an array, return all the strings joined together with `", "`.

Show the function signature and implementation. What type narrowing do you need?

---

### Problem 2

You're given this type:

```ts
type Vehicle = {
  make: string;
  model: string;
  year: number;
  mileage?: number;
};
```

Write a function `describeVehicle` that returns a string describing the vehicle. If mileage is present, include it. If not, say "mileage unknown".

---

### Problem 3 (Harder)

You have this union type:

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };
```

Write a function `calculateArea(shape: Shape): number` that returns the correct area for each shape. You'll need to use type narrowing - what strategy works best here?

Formulas: circle = π × r², rectangle = width × height, triangle = ½ × base × height

*Note:* This pattern - a union of object types each with a shared `kind` property holding a unique literal value - is called a **discriminated union**. TypeScript handles it especially well with `switch (shape.kind)`, narrowing to the exact type in each case.

---

### Problem 4 (Harder)

Write a generic function `partition<T>` that takes an array and a test function, and returns a tuple of two arrays: the first containing items that pass the test, the second containing items that don't.

For example:

```ts
const numbers = [1, 2, 3, 4, 5, 6];

partition(numbers, n => n % 2 === 0);
// [ [ 2, 4, 6 ], [ 1, 3, 5 ] ]
```

What should the function signature look like? What types do the parameters and return value need?
