---
title: "✏️ 3.2.2.5 Practice: Generics"
day: tuesday
id: 3-2-2-5-practice-generics
hide_table_of_contents: true
---

**Goal:** Write your own generic functions and a generic type alias from scratch. You just saw how `<T>` works in the generics lesson - now you'll use it yourself before applying it in the next project.

## Code

Start a fresh TypeScript file (or a new file in your existing project). You'll work with a small movie collection using this type:

```ts
type Movie = {
  id: number;
  title: string;
  year: number;
};
```

Create an array of a few `Movie` objects to test against as you go:

```ts
const movies: Movie[] = [
  { id: 1, title: "The Matrix", year: 1999 },
  { id: 2, title: "Spirited Away", year: 2001 },
  { id: 3, title: "Avatar", year: 2025 }
];
```

### Step 1: Write a generic `getFirst`

Write a function `getFirst` that takes an array of any type and returns its first element. Use a single type parameter `<T>`:

```ts
function getFirst<T>(items: T[]): T {
  // return the first item
}
```

The `<T>` means "for whatever type `T` is, this function takes an array of `T` and returns one `T`." Fill in the body, then call it with your `movies` array:

```ts
const firstMovie = getFirst(movies);
console.log(firstMovie.title);
```

Notice that you did not have to write `getFirst<Movie>(movies)`. TypeScript **infers** that `T` is `Movie` from the argument you passed, so `firstMovie` is typed as `Movie` and `firstMovie.title` autocompletes. Let inference do the work - that's the usual way to call a generic function.

### Step 2: Write a generic `lastOrNull`

Write a function `lastOrNull` that returns the last element of an array, or `null` if the array is empty. The return type should be `T | null`:

```ts
function lastOrNull<T>(items: T[]): T | null {
  // return the last item, or null if there are none
}
```

Test it with your `movies` array and with an empty array. Confirm that TypeScript knows the result could be `null` - you should not be able to access `.title` on the result without checking for `null` first.

### Step 3: Write a generic `wrapInArray`

Write a function `wrapInArray` that takes a single value of any type and returns an array containing just that value:

```ts
function wrapInArray<T>(value: T): T[] {
  // return an array with value as its only element
}
```

This time `T` is the type of a single value, and the function returns a `T[]`. Test it with a number, a string, and one of your `Movie` objects. Confirm the inferred types:

```ts
const numbers = wrapInArray(7);          // inferred as number[]
const words = wrapInArray("hello");      // inferred as string[]
const oneMovie = wrapInArray(movies[0]); // inferred as Movie[]
```

### Step 4: Write a generic type alias

Generics work with type aliases too, not just functions. Write a generic type alias called `Collection<T>` that describes a named group of items:

```ts
type Collection<T> = {
  name: string;
  items: T[];
};
```

Now use it to create a typed movie collection. When you fill in `T` with `Movie`, TypeScript knows `items` must be a `Movie[]`:

```ts
const favorites: Collection<Movie> = {
  name: "Favorites",
  items: movies,
};
```

Try creating a second collection with a different type - for example `Collection<string>` for a list of tags - to see how the same shape adapts to whatever type you fill in.

### Step 5: Combine them

Use the functions and type you wrote together. Pull the first movie out of your `favorites` collection, then wrap it back into a fresh array:

```ts
const topItem = getFirst(favorites.items);
const topWrapped = wrapInArray(topItem);
```

Confirm that `topItem` is typed as `Movie` and `topWrapped` is typed as `Movie[]`, all without writing any type annotations yourself. That inference is the payoff of generics.

## Instructor/Peer Code Review

- Does each function declare a type parameter `<T>` and use it consistently in the parameters and return type?
- Are you relying on type inference when calling the functions, rather than spelling out `<Movie>` every time?
- Does `lastOrNull` correctly force callers to handle the `null` case?
- Does the project compile with no TypeScript errors (`npx tsc --noEmit`)?
