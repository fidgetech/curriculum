---
title: "📓 3.2.0.11 Optional Properties and Parameters"
day: weekend
id: 3-2-0-11-optional-properties-and-parameters
hide_table_of_contents: true
---

## Optional Properties

In the real world, not every piece of data is always present. A user profile might not have a bio yet. A book might not have a rating. A product might not have a sale price.

TypeScript handles this with the `?` operator on type properties. A property marked with `?` is optional - the object can include it or omit it:

```ts
type UserProfile = {
  username: string;        // required
  email: string;           // required
  bio?: string;            // optional - may or may not be present
  avatarUrl?: string;      // optional
};

const user1: UserProfile = {
  username: "alice42",
  email: "alice@example.com",
  bio: "Software developer, book lover.",
  avatarUrl: "https://example.com/alice.jpg",
};

const user2: UserProfile = {
  username: "bob99",
  email: "bob@example.com",
  // bio and avatarUrl are omitted - that's fine
};
```

Both objects satisfy the `UserProfile` type. The optional properties can be present or absent.

## What Optional Actually Means

When a property is optional, its type is automatically `T | undefined` - TypeScript adds `undefined` to the union for you. This means if you access an optional property, TypeScript knows it might be `undefined` and requires you to handle that case:

```ts
function displayBio(user: UserProfile): string {
  return user.bio.toUpperCase(); // Error: Object is possibly 'undefined'
}
```

To fix this, you need to check whether the property exists before using it. This is called **type narrowing**, which we'll cover in depth in an upcoming lesson. For now, here's the pattern:

```ts
function displayBio(user: UserProfile): string {
  if (user.bio) {
    return user.bio.toUpperCase(); // safe - TypeScript knows it's a string here
  }
  return "No bio provided.";
}
```

This is not a bug to work around - it's TypeScript doing its job. Optional properties make the absence of data explicit, and TypeScript ensures you account for it.

## Optional Parameters

Function parameters can also be optional using `?`:

```ts
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

greet("Alice");              // "Hello, Alice!"
greet("Alice", "Good morning"); // "Good morning, Alice!"
```

Optional parameters must come after required parameters. This wouldn't compile:

```ts
function greet(greeting?: string, name: string): string { // Error
```

## Default Parameter Values

An alternative to optional parameters is **default values**. A default value provides a fallback when the argument isn't provided:

```ts
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

greet("Alice");              // "Hello, Alice!"
greet("Alice", "Good morning"); // "Good morning, Alice!"
```

With a default value, the parameter is still optional at the call site, but TypeScript knows it will never be `undefined` inside the function - it has the default. This is often cleaner than using `?` with a manual check inside the function body.

## Optional vs Default: When to Use Each

Both `?` and default values let callers omit an argument. The difference is what happens inside the function. Prefer default values when there's a sensible fallback. Use optional parameters (`?`) when omitting the argument means something specific - like "do something different when this isn't provided."

```ts
// Default value: sensible fallback, no check needed
function createUser(name: string, role: string = "viewer"): User {
  return { name, role };
}

// Optional: absence means "use all categories"
function filterItems(items: Item[], category?: string): Item[] {
  if (category) {
    return items.filter(item => item.category === category);
  }
  return items; // no category = return everything
}
```

## Optional Properties in Practice

Here's a type that uses optional properties to model data accurately:

```ts
type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: string;
  rating?: number;    // not all books have been rated
  notes?: string;     // reader's personal notes, may not exist
  finishedOn?: string; // date finished, only present if status is "finished"
};
```

These optional properties make the type honest: a book that hasn't been rated doesn't have a `rating: 0` (which would imply it was rated and got zero stars). It simply doesn't have a `rating` at all. That distinction matters.
