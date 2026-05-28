---
title: "📓 3.2.0.9 Union Types and Literal Types"
day: weekend
id: 3-2-0-9-union-types-and-literal-types
hide_table_of_contents: true
---

## Union Types

A **union type** describes a value that can be one of several types. The `|` operator (read as "or") separates the options:

```ts
let id: string | number;
id = "abc-123"; // valid
id = 42;        // also valid
id = true;      // Error: Type 'boolean' is not assignable to type 'string | number'
```

Union types are how TypeScript handles values that can legitimately be more than one type. You'll use them frequently in real code.

One of the most common uses is expressing that a value might be absent:

```ts
let username: string | null = null;    // not logged in yet
username = "Alice";                     // now they've logged in

let selectedId: number | undefined;    // nothing selected yet
selectedId = 42;                       // user selected something
```

This pattern replaces the ambiguous JavaScript habit of using `null` or `undefined` without documenting it. With a union type, the code explicitly says: "this value can be a string, or it can be null." That's a much clearer contract.

## Literal Types

A **literal type** is a type that represents a single, specific value rather than a broad category:

```ts
type Direction = "north"; // can only ever be the string "north"
```

On its own, a single literal type isn't useful. But combined with union types, literal types become one of the most practical tools in TypeScript:

```ts
type Direction = "north" | "south" | "east" | "west";
type Priority = "low" | "medium" | "high";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
```

These are union types made of string literals. A variable of type `Direction` can only be one of those four strings - no other strings are valid.

## Why Not Just Use `string`?

Compare these two function signatures:

```ts
// With plain string - accepts anything
function setDirection(direction: string): void {
  // what if someone passes "nroth" by mistake?
}

// With literal union - only accepts valid directions
function setDirection(direction: Direction): void {
  // TypeScript guarantees direction is "north" | "south" | "east" | "west"
}
```

With a literal union type, TypeScript catches typos and invalid values before your code runs. Your editor will also autocomplete valid options when you call the function, making it impossible to accidentally pass the wrong value.

## Literal Types in Object Types

Literal union types combine naturally with object types as constrained properties:

```ts
type ReadStatus = "want-to-read" | "currently-reading" | "finished";
type Genre = "fiction" | "non-fiction" | "mystery" | "sci-fi" | "biography";

type Book = {
  title: string;
  author: string;
  year: number;
  status: ReadStatus;
  genre: Genre;
};
```

Now you can't accidentally set a book's status to `"done"` or its genre to `"textbook"` - only the defined values are valid. This makes the data model much clearer and prevents an entire class of bugs.

## Numeric Literal Types

Literal types work with numbers too:

```ts
type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

let roll: DiceValue = 3;  // valid
let bad: DiceValue = 7;   // Error: Type '7' is not assignable to type 'DiceValue'
```

Numeric literals are less common than string literals, but they appear in patterns like HTTP status codes, dice rolls, or rating systems where only specific numbers are valid.

## Combining Unions with Object Types

Here's an example that puts several concepts together:

```ts
type TaskStatus = "todo" | "in-progress" | "done";
type Priority = "low" | "medium" | "high";

type Task = {
  id: number;
  title: string;
  status: TaskStatus;
  priority: Priority;
  assignedTo: string | null;  // union with null - task may be unassigned
};

function getActiveTasks(tasks: Task[]): Task[] {
  return tasks.filter(task => task.status !== "done");
}

function assignTask(task: Task, person: string): Task {
  return { ...task, assignedTo: person };
}
```

Notice `assignedTo: string | null`. This is explicit and honest: an unassigned task has `null` here, not an empty string or an undefined value. TypeScript enforces that you always account for the `null` case when you use `assignedTo`.

## Enums: A Brief Mention

TypeScript also has an `enum` type that serves a similar purpose to string literal unions:

```ts
enum Direction {
  North = "north",
  South = "south",
  East = "east",
  West = "west",
}
```

Enums exist and you'll sometimes see them in existing code. Most modern TypeScript style guides prefer string literal union types over enums - use those unless you have a specific reason not to.
