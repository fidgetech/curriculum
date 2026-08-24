---
title: "✏️ 3.2.4.1 Book Tracker: Part 4"
day: thursday
id: 3-2-4-1-book-tracker-part-4
hide_table_of_contents: true
---

Let's finish up our book tracker by adding some search and sort functionality. We'll also review our code and write a README to document the project.

## Warm Up

- How does `Array.prototype.sort` work? What does the comparison function return, and what do the different return values mean?
- What's the difference between `??` and `||`? When does the difference matter?

---

## Searching by Title

`searchByTitle` does a case-insensitive search and returns all books whose title contains the query string:

```ts title="src/library.ts"
export function searchByTitle(books: Book[], query: string): Book[] {
  const lowerQuery = query.toLowerCase();
  return books.filter(book => book.title.toLowerCase().includes(lowerQuery));
}
```

Converting both the query and the title to lowercase before comparing means `"uprooted"`, `"Uprooted"`, and `"UPROOTED"` all find the same book. The function signature is straightforward - `query` is just a `string`, and TypeScript doesn't need anything more specific.

Test `searchByTitle` in `index.ts`:

```ts title="src/index.ts"
import { addBook, filterByStatus, filterByGenre, removeBook, updateStatus, averageRating, findById, updateRating, getStatusCounts, searchByTitle } from "./library";

// ... existing code ...

const results = searchByTitle(books, "the");
console.log('searchByTitle', results.map(b => b.title)); // all titles containing "the"
```

---

## Sorting by Year

`sortByYear` returns a new array of books sorted by publication year. The direction parameter defaults to `"asc"` if not provided:

```ts title="src/library.ts"
export function sortByYear(books: Book[], direction: "asc" | "desc" = "asc"): Book[] {
  return [...books].sort((a, b) =>
    direction === "asc" ? a.year - b.year : b.year - a.year
  );
}
```

The spread operator `[...books]` creates a copy of the array before sorting. This is important because `Array.prototype.sort` sorts in place - it modifies the original array. Since we're following the immutability pattern throughout this project, we copy first and sort the copy.

The comparison function returns a negative number if `a` should come before `b`, a positive number if `b` should come before `a`, and zero if their order doesn't matter. Subtracting years gives exactly this behavior.

Test `sortByYear`:

```ts title="src/index.ts"
import { addBook, filterByStatus, filterByGenre, removeBook, updateStatus, averageRating, findById, updateRating, getStatusCounts, searchByTitle, sortByYear } from "./library";

// ... existing code ...

const oldestFirst = sortByYear(books, "asc");
const newestFirst = sortByYear(books, "desc");
console.log('sortByYear asc', oldestFirst.map(b => b.title));  // titles sorted from oldest to newest
console.log('sortByYear desc', newestFirst.map(b => b.title));  // titles sorted from newest to oldest
```

---

## Sorting by Rating

Sorting by rating is more complex because `rating` is optional. For the purpose of this exercise, books with no rating should always appear at the end regardless of sort direction:

```ts title="src/library.ts"
export function sortByRating(books: Book[], direction: "asc" | "desc" = "desc"): Book[] {
  return [...books].sort((a, b) => {
    if (a.rating === undefined && b.rating === undefined) return 0;
    if (a.rating === undefined) return 1;
    if (b.rating === undefined) return -1;
    return direction === "asc" ? a.rating - b.rating : b.rating - a.rating;
  });
}
```

We handle the `undefined` cases before doing any arithmetic. Returning `1` when `a.rating` is missing pushes `a` toward the end; returning `-1` when `b.rating` is missing pushes `b` toward the end. Once we've ruled out `undefined`, TypeScript knows both ratings are numbers and the arithmetic is safe.

Test `sortByRating` with a mix of rated and unrated books to make sure unrated books always appear last.

```ts title="src/index.ts"
import { addBook, filterByStatus, filterByGenre, removeBook, updateStatus, averageRating, findById, updateRating, getStatusCounts, searchByTitle, sortByYear, sortByRating } from "./library";

// ... existing code ...

const byRatingDesc = sortByRating(books, "desc");
const byRatingAsc = sortByRating(books, "asc");
console.log('sortByRating desc', byRatingDesc.map(b => `${b.title} (${b.rating ?? "no rating"})`));  // titles sorted from highest to lowest rating, unrated last
console.log('sortByRating asc', byRatingAsc.map(b => `${b.title} (${b.rating ?? "no rating"})`));  // titles sorted from lowest to highest rating, unrated last
```

---

## Refactoring Check

Before writing your README, look back over `library.ts` with fresh eyes:

- Are there any places where you used `any`? Replace it with a proper type.
- Are your function signatures as specific as they can be? Check that parameter types are as narrow as useful.
- Are there any repeated patterns that a utility type could simplify?
- Does every function compile cleanly with `npx tsc --noEmit`?

---

## README

Create a `README.md` at the root of your project. Include:

- What the project does
- How to run it (`npx tsx src/index.ts`)
- A list of the functions available and what each one does

---

## Complete `library.ts`

Your finished `library.ts` should look like this:

```ts title="src/library.ts"
import { Book, Genre, NewBook, ReadStatus } from "./types";

export function addBook(books: Book[], newBook: NewBook): Book[] {
  const nextId = books.length === 0 ? 1 : Math.max(...books.map(b => b.id)) + 1;
  const book: Book = { ...newBook, id: nextId };
  return [...books, book];
}

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

export function searchByTitle(books: Book[], query: string): Book[] {
  const lowerQuery = query.toLowerCase();
  return books.filter(book => book.title.toLowerCase().includes(lowerQuery));
}

export function sortByYear(books: Book[], direction: "asc" | "desc" = "asc"): Book[] {
  return [...books].sort((a, b) =>
    direction === "asc" ? a.year - b.year : b.year - a.year
  );
}

export function sortByRating(books: Book[], direction: "asc" | "desc" = "desc"): Book[] {
  return [...books].sort((a, b) => {
    if (a.rating === undefined && b.rating === undefined) return 0;
    if (a.rating === undefined) return 1;
    if (b.rating === undefined) return -1;
    return direction === "asc" ? a.rating - b.rating : b.rating - a.rating;
  });
}
```

Congratulations on finishing the book tracker! This was a big project with a lot of different pieces, so it's a great accomplishment to have it all working together. Take some time to review your code and make sure you're happy with how everything turned out.
