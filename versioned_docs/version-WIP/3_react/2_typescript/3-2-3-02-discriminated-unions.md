---
title: "📓 3.2.3.2 Discriminated Unions"
day: wednesday
id: 3-2-3-2-discriminated-unions
hide_table_of_contents: true
---

## The Problem

You've seen union types of objects in the type narrowing lesson, where the `in` operator was needed to figure out which variant a value belongs to. That approach works, but it's a little awkward - you have to remember which properties are unique to each variant, and adding a new variant means hunting through the code for every `in` check.

There's a more scalable pattern for unions of object types where you control the data: **discriminated unions** (sometimes called **tagged unions**).

A discriminated union is a union of object types where each member shares a single property whose value is a unique literal type. That shared property is called the **discriminant**, and it tells TypeScript - and you - exactly which variant a value is.

## Building Up the Pattern

Imagine we're modeling a shape that can be a circle, a rectangle, or a triangle. Each shape has different fields needed to describe it.

A first attempt - just a plain union of objects:

```ts
type Shape =
  | { radius: number }
  | { width: number; height: number }
  | { base: number; height: number };

function area(shape: Shape): number {
  if ("radius" in shape) {
    return Math.PI * shape.radius ** 2;
  }
  if ("width" in shape) {
    return shape.width * shape.height;
  }
  return 0.5 * shape.base * shape.height;
}
```

This works, but it has problems. The `in` checks rely on which properties happen to be unique. Notice that `width` is unique to rectangles only because triangles don't have a `width` - if we later added a `width` to triangles, the narrowing would silently break. There's also nothing in the type itself that names the variants. Reading the code, you have to *deduce* what each branch represents.

## Adding a Discriminant

Now refactor with a discriminant - a shared `kind` property whose value is a unique string literal for each variant:

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };
```

Each variant now has a `kind` field, and that field is a literal type that uniquely identifies the variant. The data is self-describing - reading a `Shape` value, you can immediately see which variant it is.

Now narrowing becomes a check on `kind` instead of a property-existence check:

```ts
function area(shape: Shape): number {
  // highlight-next-line
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  // highlight-next-line
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  }
  return 0.5 * shape.base * shape.height;
}
```

TypeScript narrows the type based on the `kind` value. Inside the `kind === "circle"` block, it knows `shape` has a `radius`. Inside `kind === "rectangle"`, it knows `shape` has a `width` and `height`. The narrowing is explicit and stable - it doesn't depend on guessing which properties happen to be unique.

## Switch Statements: The Idiomatic Style

When narrowing on a discriminant, a `switch` statement reads more naturally than a chain of `if`s:

```ts
function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    case "triangle":
      return 0.5 * shape.base * shape.height;
  }
}
```

TypeScript narrows the type in each `case` branch just as it does with `if` checks. This is the idiomatic style for working with discriminated unions, and it scales well as the number of variants grows.

## Naming the Discriminant

The discriminant can be called anything - `kind`, `type`, and `tag` are the three most common conventions. Many codebases pick one and use it consistently:

```ts
// kind - common in general TypeScript code
type Result =
  | { kind: "success"; data: string }
  | { kind: "error"; message: string };

// type - common in React (you'll see this in action types)
type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "SET"; value: number };
```

`type` as a property name can collide with the `type` keyword in some contexts, but TypeScript handles this fine - the only thing that matters is that you pick a name and use it consistently across the variants.

## Further Exploration: Exhaustiveness Checking with `never`

One of the most useful features of discriminated unions is the ability to ask TypeScript to verify that you've handled every variant. This is called **exhaustiveness checking**.

The trick uses the `never` type. `never` is the type of a value that can never exist - if TypeScript thinks a variable has type `never`, it means execution can't actually reach that point given the types.

If we extend our `switch` with a `default` case that assigns to a `never` variable:

```ts
function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    case "triangle":
      return 0.5 * shape.base * shape.height;
    // highlight-start
    default:
      const _exhaustive: never = shape;
      throw new Error(`Unhandled shape: ${_exhaustive}`);
    // highlight-end
  }
}
```

If all variants are handled, TypeScript reaches the `default` only when `shape` has been narrowed to `never` - and assigning `never` to a `never` variable is fine. Everything compiles.

But if you later add a new variant:

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number }
  // highlight-next-line
  | { kind: "square"; side: number };
```

Now `shape` in the `default` branch is `{ kind: "square"; side: number }`, which can't be assigned to `never`. TypeScript fails to compile at the `default` case, telling you exactly where to go add the missing handler.

This pattern turns "did I forget a case?" from a runtime bug into a compile-time error. It's especially valuable in large codebases where one change in a type definition can ripple across many files.

## Try It

Open `src/index.ts` and work through these in order.

**1. Add a `perimeter` function.** Using the `Shape` type from this lesson, write a `perimeter` function that returns the perimeter of each shape. Use a `switch` on `shape.kind`. Formulas: circle = `2 * Math.PI * radius`, rectangle = `2 * (width + height)`, triangle = you can leave this as `0` since we don't have enough information. Notice how TypeScript narrows the type in each `case` so you only have access to the right properties.

**2. Model a network request.** Real React apps frequently model a request as one of three states - loading, success, or error. Define this type:

```ts
type RequestState =
  | { kind: "loading" }
  | { kind: "success"; data: string }
  | { kind: "error"; message: string };
```

Then write a `describeRequest(state: RequestState): string` function that returns a human-readable message for each variant. Use a `switch` on `state.kind`. Try passing in all three variants and log the results.

Notice that `"loading"` has no extra fields - the discriminant alone is enough to describe that state. `"success"` and `"error"` each carry their own relevant data. This is the pattern you'll use constantly in React.

## When to Reach for Discriminated Unions

Use discriminated unions when:

- You have data that can be in one of several distinct states, and each state has different fields
- You control the data shape (you're not consuming someone else's API as-is)
- You want clean narrowing without depending on property-existence checks

Use plain unions with `in` or `typeof` narrowing when:

- The data comes from an external source and doesn't already have a discriminant
- You're narrowing across primitives (`string | number`), where `typeof` is the natural tool

## Looking Ahead

Discriminated unions show up constantly in React with TypeScript. They're the standard pattern for typing action objects in reducers, for modeling network request states (loading / success / error), and for component state machines. The work you do here will translate directly into the React sections that follow.
