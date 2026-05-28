---
title: "📓 3.2.2.1 Type Narrowing and Type Guards"
day: tuesday
id: 3-2-2-1-type-narrowing-and-type-guards
hide_table_of_contents: true
---

## The Problem

When you have a value that could be one of several types - a union type or an optional type - TypeScript won't let you use it until you've determined which type it actually is. This is a common source of TypeScript warnings for new developers, and understanding how to handle it will save you a lot of frustration.

Here's a simple example. Suppose you have a function that might return a username or null:

```ts
function getUsername(): string | null {
  ...
  return loggedIn ? currentUser.name : null;
}

const username = getUsername(); // string | null
username.toUpperCase();         // Error: Object is possibly 'null'
```

TypeScript is right to complain. If `username` is `null`, calling `.toUpperCase()` would crash at runtime.

**Type narrowing** is the process of writing code that tells TypeScript which specific type a value is in a given branch. Once you've narrowed the type, TypeScript lifts the restriction and lets you use the value fully.

## Truthiness Narrowing

The most natural way to handle `null` and `undefined` is a simple `if` check. Since `null` and `undefined` are falsy, checking for truthiness narrows them out:

```ts
const username = getUsername(); // string | null

if (username) {
  // TypeScript knows: username is string here
  console.log(username.toUpperCase()); // safe
} else {
  console.log("No user logged in.");
}
```

This works for optional properties too:

```ts
type Book = {
  title: string;
  rating?: number;
};

function displayRating(book: Book): string {
  if (book.rating) {
    return `Rating: ${book.rating}/5`;
  }
  return "Not yet rated";
}
```

:::note
Truthiness narrowing works for `null`, `undefined`, `0`, `""`, and `false` - all falsy values. If a value could legitimately be `0` or an empty string and still be "present", use `!== undefined` and `!== null` instead. For example: `if (book.rating !== undefined && book.rating !== null)` would correctly handle a rating of `0`.
:::

## `typeof` Checks

Truthiness works well for null checks, but when a value could be one of several primitive types, you need `typeof` to distinguish between them:

```ts
function formatInput(input: string | number): string {
  if (typeof input === "string") {
    // TypeScript knows: input is string here
    return input.toUpperCase();
  }
  // TypeScript knows: input is number here
  return input.toFixed(2);
}
```

A truthiness check wouldn't help here - both strings and numbers can be truthy. `typeof` tells TypeScript exactly which type you're dealing with in each branch.

`typeof` works for the primitive types: `"string"`, `"number"`, `"boolean"`, `"undefined"`.

## The `in` Operator

When you have a union of object types, neither truthiness nor `typeof` can distinguish between them (both are objects). The `in` operator checks whether a property exists on an object:

```ts
type Dog = {
  name: string;
  breed: string;
};

type Fish = {
  name: string;
  tankSize: number;
};

type Pet = Dog | Fish;

function describePet(pet: Pet): string {
  if ("breed" in pet) {
    // TypeScript knows: pet is Dog (the only type in Pet with 'breed')
    return `${pet.name} is a ${pet.breed}`;
  }
  // TypeScript knows: pet is Fish (the only type in Pet without 'breed')
  return `${pet.name} needs a ${pet.tankSize}L tank`;
}
```

The `in` operator narrows the union to the type that has that property.

## Optional Chaining

A shorthand for handling optional properties is the **optional chaining** operator (`?.`).

```ts
// Instead of:
if (book.rating) {
  console.log(book.rating.toFixed(1));
}

// You can write:
console.log(book.rating?.toFixed(1)); // returns undefined if rating is undefined
```

`?.` short-circuits and returns `undefined` if the value before it is `null` or `undefined`. This doesn't narrow the type, but it's a clean way to safely access optional values when you just need the value or undefined.

## Nullish Coalescing

The **nullish coalescing** operator (`??`) provides a fallback when a value is `null` or `undefined`:

```ts
const rating = book.rating ?? 0;             // 0 if no rating
const displayName = username ?? "Anonymous"; // "Anonymous" if not logged in
```

`??` is more precise than `||`. The `||` operator triggers on any falsy value (including `0`, `""`), while `??` only triggers on `null` and `undefined`. Use `??` when a value of `0` or an empty string might be valid.

## Putting It Together: Fixing Common TS Warnings

Most TypeScript warnings you'll encounter in practice fall into a small number of patterns. Here's how narrowing resolves them:

```ts
// Warning: "Object is possibly null or undefined"
// Fix: truthiness check or explicit null check
function getLength(text: string | null): number {
  if (text === null) return 0;
  return text.length;
}

// Warning: "Object is possibly undefined"
// Fix: optional chaining or truthiness check
type Config = {
  timeout?: number;
};
function getTimeout(config: Config): number {
  return config.timeout ?? 5000;
}

// Warning: "Property X does not exist on type Y"
// Fix: narrow to the correct type first
function processValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Type narrowing is one of the more uniquely TypeScript concepts - there's no equivalent in plain JavaScript because JavaScript doesn't track types. Once you internalize these patterns, a large class of TypeScript errors become straightforward to fix.
