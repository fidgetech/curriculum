---
title: "✏️ 3.2.4.2 Whiteboard Practice: TypeScript II"
day: thursday
id: 3-2-4-2-whiteboard-practice-typescript-ii
hide_table_of_contents: true
---

## Whiteboard Practice
---

When and how whiteboarding practice is implemented will be up to your teacher. Below are recommended prompts.

**Note to Fidgetech Students:** Contact your instructor when you read this lesson to set up a whiteboarding practice session.

### Goal

For this whiteboarding session, you'll practice working with utility types, generics, and discriminated unions.

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

Given this type:

```ts
type Employee = {
  id: number;
  name: string;
  department: string;
  salary: number;
  manager?: Employee;
};
```

Write a function `getReportChain(employee: Employee): string[]` that returns an array of names from the given employee up to the top of the management chain (the person with no manager). What type narrowing is needed?

---

### Problem 2

Write a function `mergeDefaults<T>(partial: Partial<T>, defaults: T): T` that returns a complete `T` object. Properties present in `partial` should override the defaults; any that are missing should be filled in from `defaults`.

For example:

```ts
type AppConfig = {
  theme: "light" | "dark";
  language: string;
  notificationsEnabled: boolean;
};

const defaults: AppConfig = {
  theme: "light",
  language: "en",
  notificationsEnabled: true,
};

const userConfig: Partial<AppConfig> = {
  theme: "dark",
};

mergeDefaults(userConfig, defaults);
// { theme: "dark", language: "en", notificationsEnabled: true }
```

What should the implementation look like? Can you use spread syntax here?

---

### Problem 3

You have a function that fetches data from an API. It might succeed or fail:

```ts
type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };
```

Write a function `fetchUser(id: number): Result<User>` (you can simulate it with hardcoded data). Then write a function `handleResult<T>(result: Result<T>, onSuccess: (data: T) => void, onError: (error: string) => void): void` that calls the appropriate callback.

What type narrowing strategy is needed here?

---

### Problem 4

Write a generic `pipeline<T>` function that takes an initial value of type `T` and an array of transformation functions, each of type `(value: T) => T`, and applies them in order, returning the final result.

For example:

```ts
const result = pipeline(
  "  hello world  ",
  [
    s => s.trim(),
    s => s.toUpperCase(),
    s => s.replace(" ", "_"),
  ]
);
// "HELLO_WORLD"
```
