---
title: "📓 3.2.2.4 Introduction to Generics"
day: tuesday
id: 3-2-2-4-introduction-to-generics
hide_table_of_contents: true
---

## The Problem Generics Solve

Suppose you want to write a function that returns the first element of an array. You might start like this:

```ts
function getFirst(items: number[]): number {
  return items[0];
}
```

This works for arrays of numbers. But what if you want to use it with strings? Or with an array of `Book` objects? You'd have to write a separate function for each type:

```ts
function getFirstNumber(items: number[]): number { return items[0]; }
function getFirstString(items: string[]): string { return items[0]; }
function getFirstBook(items: Book[]): Book { return items[0]; }
```

That's repetitive, and all three functions do exactly the same thing. You could use `any[]` to make one function that accepts everything, but then you lose type safety - the return type would also be `any`, and TypeScript couldn't help you use the result correctly.

Generics solve this problem.

## Generic Syntax

A **generic** function uses a **type parameter** - a placeholder type that gets filled in when the function is called:

```ts
function getFirst<T>(items: T[]): T {
  return items[0];
}
```

The `<T>` after the function name declares a type parameter named `T`. You can read this as: "for whatever type `T` is, this function takes an array of `T` and returns one `T`."

When you call the function, TypeScript infers what `T` is from the argument you pass. You can specify it explicitly (`getFirst<number>(...)`) but rarely need to:

```ts
const first = getFirst([10, 20, 30]);    // T is inferred as number; returns number
const word = getFirst(["a", "b", "c"]);  // T is inferred as string; returns string
const book = getFirst(library);          // T is inferred as Book; returns Book
```

One function, works with any type, fully type-safe. When you call `getFirst` with a `number[]`, TypeScript knows the return value is a `number` - not `any`. You get autocomplete, type checking, and error catching on the result. That's the power of generics.

## You've Already Been Using Generics

`Array<T>` is a generic type - you've been using it whenever you write `string[]` or `number[]`. The `T[]` syntax is shorthand for `Array<T>`. TypeScript fills in `T` with the element type.

## Generic Functions in Practice

Here's another practical generic function - one that searches an array by `id`:

```ts
function findById<T>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id); // Error: Property 'id' does not exist on type 'T'
}
```

This doesn't compile - TypeScript doesn't know that `T` has an `id` property, so accessing `item.id` is an error. To fix this, we add a **constraint** using `extends`:

```ts
function findById<T extends { id: number }>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}
```

`T extends { id: number }` means "T must have at least an `id: number` property" - TypeScript now knows `item.id` is safe to access. Note that `extends` here is different from its use with interfaces: it's a constraint ("T can be any type, as long as it has this shape"), not inheritance.

With this function, you can search any array of objects that have an `id` field:

```ts
type Book = { id: number; title: string; author: string; };
type User = { id: number; name: string; email: string; };

const books: Book[] = [
  { id: 1, title: "Uprooted", author: "Naomi Novik" },
  { id: 2, title: "Neuromancer", author: "William Gibson" },
];

const users: User[] = [
  { id: 42, name: "Alice", email: "alice@example.com" },
];

const foundBook = findById(books, 1);    // returns Book | undefined
const foundUser = findById(users, 42);   // returns User | undefined
```

## Generic Type Aliases

Generics work with type aliases too. Here's a type that wraps any data type in a standard API response shape:

```ts
type ApiResponse<T> = {
  data: T;
  error: string | null;
  loading: boolean;
};
```

When you use it, you fill in `T` with the specific type you're expecting back. `ApiResponse<Book[]>` means "an API response whose `data` field is a `Book[]`"; `ApiResponse<User>` means "an API response whose `data` field is a `User`":

```ts
const booksResponse: ApiResponse<Book[]> = {
  data: [],        // TypeScript knows this must be a Book[]
  error: null,
  loading: true,
};

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "Alice", email: "alice@example.com" }, // must be a User
  error: null,
  loading: false,
};
```

The shape of the other properties (`error`, `loading`) stays the same every time. Only `data` changes type. Without generics you'd need a separate `BookListResponse`, `UserResponse`, etc. type for each.

Generics can also take multiple type parameters. Here's a `Pair` type that holds two values - `A` and `B` can be the same type or different types:

```ts
type Pair<A, B> = {
  first: A;
  second: B;
};

const coordinates: Pair<number, number> = { first: 10, second: 25 }; // both the same type
const nameScore: Pair<string, number> = { first: "Alice", second: 95 }; // different types
```

Multiple type parameters are written as a comma-separated list inside `<>`.

## How Much Generics to Know Right Now

Generics can get quite advanced, and that's not necessary at this stage. What's most important for now is:

1. You can read `<T>` and understand it's a type parameter - a placeholder
2. You understand that `Array<T>` and `T[]` are both using this mechanism
3. You can write a simple generic function that works across types

As you encounter more TypeScript in practice, generics will become more intuitive. For now, focus on the pattern.
