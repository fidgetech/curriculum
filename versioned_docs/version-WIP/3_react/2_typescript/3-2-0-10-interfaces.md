---
title: "📓 3.2.0.10 Interfaces"
day: weekend
id: 3-2-0-10-interfaces
hide_table_of_contents: true
---

## What Is an Interface?

You've been using `type` to describe object shapes. TypeScript also provides the `interface` keyword for the same purpose:

```ts
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}
```

For basic use, `interface` and `type` are interchangeable. Both describe the properties an object must have, and both work the same way as type annotations:

```ts
const alice: User = { name: "Alice", age: 30, isAdmin: false };

function greet(user: User): string {
  return `Hello, ${user.name}`;
}
```

So why does `interface` exist? It has two capabilities that `type` doesn't: **extending** and **declaration merging**.

## Extending Interfaces

Interfaces can extend other interfaces, inheriting their properties and adding new ones:

```ts
interface Animal {
  name: string;
  sound: string;
}

interface Pet extends Animal {
  owner: string;
  vaccinated: boolean;
}
```

`Pet` now has four properties: `name`, `sound`, `owner`, and `vaccinated`. Any object of type `Pet` must have all of them:

```ts
const myDog: Pet = {
  name: "Rex",
  sound: "woof",
  owner: "Jordan",
  vaccinated: true,
};
```

You can achieve something similar with `type` using an intersection (`&`):

```ts
type Animal = {
  name: string;
  sound: string;
};

type Pet = Animal & {
  owner: string;
  vaccinated: boolean;
};
```

Both work. `interface extends` reads more clearly when building up a type hierarchy; `type` intersections are more flexible for complex cases.

## Declaration Merging

One behavior unique to interfaces is **declaration merging**. If you declare two interfaces with the same name, TypeScript automatically merges them into one:

```ts
interface Config {
  host: string;
}

interface Config {
  port: number;
}

// TypeScript treats this as:
// interface Config {
//   host: string;
//   port: number;
// }

const config: Config = { host: "localhost", port: 3000 }; // both required
```

This rarely comes up in application code, but it's how library authors extend type definitions without modifying the original source. You'll encounter it when reading library type definitions, even if you don't write it yourself.

`type` aliases cannot be merged - declaring two `type` aliases with the same name is an error.

## Interface vs Type: Which to Use?

Both work for object shapes. The practical guidance:

- **`type` is the default** - it handles objects, unions, intersections, and everything else with one consistent syntax.
- **`interface` when you need `extends`** - for building type hierarchies, `interface extends` is more readable than type intersections.
- **`interface` when extending library types** - declaration merging lets you add properties to types defined in third-party packages.

In practice, many codebases just pick one and use it consistently. You'll see both styles in real projects. The important thing is that you can read either and understand the tradeoffs.
