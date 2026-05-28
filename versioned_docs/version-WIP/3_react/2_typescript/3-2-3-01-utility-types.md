---
title: "📓 3.2.3.1 Utility Types"
day: wednesday
id: 3-2-3-1-utility-types
hide_table_of_contents: true
---

## What Are Utility Types?

TypeScript includes a set of built-in **utility types** - generic types that transform an existing type into a new one. They're a practical application of generics that you'll see and use regularly.

The main benefit of utility types is avoiding repetition. Instead of defining a new type from scratch every time you need a slight variation on an existing type, you derive the new type from the one you already have.

## `Partial<T>`

`Partial<T>` takes a type and makes all of its properties optional:

```ts
type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type PartialUser = Partial<User>;
// equivalent to:
// {
//   id?: number;
//   name?: string;
//   email?: string;
//   role?: string;
// }
```

`Partial` is useful when you're updating an object and only need to provide some fields - the rest stay unchanged:

```ts
function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

updateUser(currentUser, { name: "Alice" });          // only updating name
updateUser(currentUser, { email: "new@email.com" }); // only updating email
```

This is a very common pattern in React when managing state updates.

## `Required<T>`

`Required<T>` is the opposite of `Partial` - it makes all properties required, even optional ones:

```ts
type Config = {
  host?: string;
  port?: number;
  timeout?: number;
};

type FullConfig = Required<Config>;
// {
//   host: string;
//   port: number;
//   timeout: number;
// }
```

`Required` is useful when you want to ensure a fully-populated object - for example, after a setup step that fills in any missing values.

## `Pick<T, K>`

`Pick<T, K>` creates a new type by selecting only the properties you specify from an existing type:

```ts
type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
};

type ArticleSummary = Pick<Article, "id" | "title" | "author">;
// {
//   id: number;
//   title: string;
//   author: string;
// }
```

`Pick` is useful when you need a subset of a type - for example, showing a list preview that doesn't include the full content.

## `Omit<T, K>`

`Omit<T, K>` is the inverse of `Pick` - it creates a type with everything *except* the specified properties:

```ts
type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
};

type NewArticle = Omit<Article, "id" | "publishedAt">;
// {
//   title: string;
//   content: string;
//   author: string;
// }
```

`Omit` is most useful when you have a type that comes from an API or database - with server-managed fields like `id` and `publishedAt` - and you need a version of that type without those fields for a form or create request. Rather than defining a separate type from scratch and keeping the two in sync, you derive it from the one you already have.

## `Record<K, V>`

`Record<K, V>` creates an object type where all keys are type `K` and all values are type `V`. It's a typed version of a plain object used as a dictionary or lookup table:

```ts
type UserRole = "admin" | "editor" | "viewer";

type RolePermissions = Record<UserRole, string[]>;
// {
//   admin: string[];
//   editor: string[];
//   viewer: string[];
// }

const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
};
```

`Record` is useful any time you have a set of known keys (like user roles, status codes, or category names) and want to map each key to a value.

## `Readonly<T>`

`Readonly<T>` takes a type and makes all of its properties read-only, meaning they can't be reassigned after the object is created:

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = { id: 1, name: "Alice", email: "alice@email.com" };
user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property
```

This is the object-level version of the `readonly` array modifier you saw earlier, and it's another way to enforce immutability - one of the functional programming principles from before. You'll see this idea again soon in React, where props are read-only: a component can use the props it receives but is never allowed to change them.

## A Note on When to Use Utility Types

You don't need to use utility types everywhere. They're most valuable when:

- You find yourself writing nearly-identical types that differ only in whether some properties are required
- You need a type that's a subset or superset of an existing one
- You want to avoid maintaining two types in sync when one can be derived from the other

If you have a simple type that doesn't have close relatives, just write it directly. Utility types solve a specific problem - don't reach for them when a plain type alias is clearer.

## Summary

| Utility Type | What It Does |
|---|---|
| `Partial<T>` | Makes all properties optional |
| `Required<T>` | Makes all properties required |
| `Pick<T, K>` | Keeps only specified properties |
| `Omit<T, K>` | Removes specified properties |
| `Record<K, V>` | Object with known keys and uniform values |
| `Readonly<T>` | Makes all properties read-only |
