---
title: "✏️ 3.2.3.3 Book Tracker: Part 3"
day: wednesday
id: 3-2-3-3-book-tracker-part-3
hide_table_of_contents: true
---

Time to add some more features to our book tracker! In this section, we'll practice using `Record`, `Omit`, and `Pick` to implement new functionality.

## Warm Up

- What does the `Record<K, V>` utility type produce? When is it more useful than defining an object type by hand?
- What is the difference between `Omit` and `Pick`? Give an example of when you'd reach for each one.

---

## Updating a Rating

Books can have ratings between 1 and 5. We need a function that updates a book's rating by id. If the new rating is outside the valid range, it should leave the collection unchanged and ideally let the caller know something went wrong.

We can implement this with a runtime check at the start of the function:

```ts title="src/library.ts"
export function updateRating(books: Book[], id: number, rating: number): Book[] {
  if (rating < 1 || rating > 5) {
    throw new Error(`Invalid rating: ${rating}. Must be between 1 and 5.`);
  }

  return books.map(book => {
    if (book.id === id) {
      return { ...book, rating };
    }
    return book;
  });
}
```

Notice that the validation happens at runtime with a regular `if` check, not at the type level. TypeScript can catch many mistakes, but enforcing that a number falls within a specific range isn't something the type system handles directly. For that, runtime validation is the right tool. The two approaches - TypeScript types and runtime checks - complement each other.

Now test our new `updateRating` function:

```ts title="src/index.ts"
import { addBook, filterByStatus, filterByGenre, removeBook, updateStatus, averageRating, findById, updateRating } from "./library";

// ... existing code ...

books = updateRating(books, 2, 4);
console.log('updateRating', findById(books, 2)?.rating); // 4

// Out of range - throws an error
try {
  books = updateRating(books, 2, 10);
} catch (e) {
  console.log('updateRating', (e as Error).message); // "Invalid rating: 10. Must be between 1 and 5."
}
```

---

## Counting Books by Status

It's useful to know how many books are in each status. `Record<ReadStatus, number>` is a natural fit here - it gives us an object where every valid status is guaranteed to be a key.

To implement `getStatusCounts`, we can initialize an object with all the statuses set to 0, then loop through the books and increment the appropriate count:

```ts title="src/library.ts"
export function getStatusCounts(books: Book[]): Record<ReadStatus, number> {
  const counts: Record<ReadStatus, number> = {
    "want-to-read": 0,
    "currently-reading": 0,
    "finished": 0,
  };

  for (const book of books) {
    counts[book.status]++;
  }

  return counts;
}
```

TypeScript will error if you leave out any of the three statuses when initializing `counts`. That's the benefit of `Record<ReadStatus, number>` - it forces the object to have every key in `ReadStatus`, not just some of them.

Test it:

```ts title="src/index.ts"
import { addBook, filterByStatus, filterByGenre, removeBook, updateStatus, averageRating, findById, updateRating, getStatusCounts } from "./library";

// ... existing code ...

const counts = getStatusCounts(books);
console.log('getStatusCounts', counts["finished"]);
console.log('getStatusCounts', counts["currently-reading"]);
console.log('getStatusCounts', counts["want-to-read"]);
```

---

## Creating a Book Without an ID

In a real application, new books wouldn't come in with their own `id` - the database would assign one. Looking back at `addBook` from Part 1, it required callers to supply an `id` along with the rest of the book's data. Now that we have `Omit`, we can fix that properly.

Add a `NewBook` type to `src/types.ts`:

```ts title="src/types.ts"
export type NewBook = Omit<Book, "id">;
```

`Omit<Book, "id">` creates a new type that has all of `Book`'s properties except `id`. 

Update `addBook` in `src/library.ts` to accept a `NewBook` instead of a `Book`, and have it assign the id automatically:

```ts title="src/library.ts"
import { Book, Genre, ReadStatus, NewBook } from "./types";

export function addBook(books: Book[], newBook: NewBook): Book[] {
  const nextId = books.length === 0 ? 1 : Math.max(...books.map(b => b.id)) + 1;
  const book: Book = { ...newBook, id: nextId };
  return [...books, book];
}
```

Update any calls to `addBook` in `src/index.ts` to use `NewBook` instead of `Book` as the type annotation, and remove the `id` field. Changing the annotation is what makes TypeScript enforce the constraint - if you leave it as `Book`, structural typing would let the `id` through silently:

```ts title="src/index.ts"
import { Book, NewBook } from "./types";
import { addBook, filterByStatus, filterByGenre, removeBook, updateStatus, averageRating, findById, updateRating, getStatusCounts } from "./library";

// ... existing code ...

const flowers: NewBook = {
  title: "Flowers for Algernon",
  author: "Daniel Keyes",
  year: 1966,
  genre: "fiction",
  status: "want-to-read",
  // id: 99  // TypeScript error: 'id' does not exist in type 'NewBook'
};

books = addBook(books, flowers);
console.log('addBook', books[books.length - 1].id); // assigned automatically
```

---

## Your `library.ts` So Far

```ts title="src/library.ts"
// highlight-next-line
import { Book, Genre, ReadStatus, NewBook } from "./types";

// highlight-start
export function addBook(books: Book[], newBook: NewBook): Book[] {
  const nextId = books.length === 0 ? 1 : Math.max(...books.map(b => b.id)) + 1;
  const book: Book = { ...newBook, id: nextId };
  return [...books, book];
}
// highlight-end

export function filterByStatus(books: Book[], status: ReadStatus): Book[] {
  return books.filter(book => book.status === status);
}

export function removeBook(books: Book[], id: number): Book[] {
  return books.filter(book => book.id !== id);
}

export function updateStatus(books: Book[], id: number, status: ReadStatus): Book[] {
  return books.map(book => {
    if (book.id === id) {
      return { ...book, status };
    }
    return book;
  });
}

export function filterByGenre(books: Book[], genre: Genre): Book[] {
  return books.filter(book => book.genre === genre);
}

export function averageRating(books: Book[]): number | null {
  let total = 0;
  let count = 0;

  for (const book of books) {
    if (book.rating !== undefined) {
      total += book.rating;
      count++;
    }
  }

  return count === 0 ? null : total / count;
}

export function findById<T extends { id: number }>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}

// highlight-start
export function updateRating(books: Book[], id: number, rating: number): Book[] {
  if (rating < 1 || rating > 5) {
    throw new Error(`Invalid rating: ${rating}. Must be between 1 and 5.`);
  }

  return books.map(book => {
    if (book.id === id) {
      return { ...book, rating };
    }
    return book;
  });
}

export function getStatusCounts(books: Book[]): Record<ReadStatus, number> {
  const counts: Record<ReadStatus, number> = {
    "want-to-read": 0,
    "currently-reading": 0,
    "finished": 0,
  };

  for (const book of books) {
    counts[book.status]++;
  }

  return counts;
}
// highlight-end
```

Run `npx tsc --noEmit` to check for errors.
