---
title: "✏️ 3.2.2.6 Book Tracker: Part 2"
day: tuesday
id: 3-2-2-6-book-tracker-part-2
hide_table_of_contents: true
---

Let's get back to our book tracker app. In the last section, we defined our data types and wrote some basic functions for managing our collection of books. Now let's add a feature that will require us to use some of the more advanced TypeScript concepts we've learned.

## Warm Up

- What happens when you access an optional property without checking whether it exists first? What does TypeScript do?
- What is a generic function? What does the `<T>` syntax mean?

---

## Calculating an Average Rating

Not every book in our collection has a rating - `rating` is an optional property on `Book`. A function that calculates the average rating across all books needs to handle the case where some books have no rating. Furthermore, it needs to handle the edge case where no books have been rated yet. In that situation, let's say that it should return `null`.

We need to use a union return type here, because there are two possible outcomes: a `number` if there are ratings, or `null` if there aren't any. And we can use type narrowing to check for the presence of `rating` on each book before including it in our average calculation.

Add this function to `library.ts`:

```ts title="src/library.ts"
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
```

The `if (book.rating !== undefined)` check is type narrowing in action. Inside that block, TypeScript knows `book.rating` is a `number` - not `number | undefined` - so it's safe to add to `total`. Without the check, TypeScript would error on `total += book.rating` because `undefined` can't be used in arithmetic.

The return type is `number | null` rather than just `number`. This is honest - there genuinely are two possible outcomes, and callers need to handle both. Returning `0` when there are no ratings would be misleading.

Now import `averageRating` into `index.ts` and test it with your books data. Be sure to test both cases: some books with ratings, and a collection with no ratings at all:

```ts title="src/index.ts"
import { addBook, filterByStatus, filterByGenre, removeBook, updateStatus, averageRating, findById } from "./library";

// ... your existing code ...

console.log('averageRating', averageRating(books)); // Should print null since no books have ratings yet
const onTheRoad: Book = {
  id: 5,
  title: "On the Road",
  author: "Jack Kerouac",
  year: 1957,
  genre: "fiction",
  status: "finished",
  rating: 1
}
const fellowship: Book = {
  id: 6,
  title: "The Fellowship of the Ring",
  author: "J.R.R. Tolkien",
  year: 1954,
  genre: "fiction",
  status: "finished",
  rating: 5
};
books = addBook(books, onTheRoad);
books = addBook(books, fellowship);
console.log('averageRating', averageRating(books)); // Should print 3
```
---

## Finding a Book by ID

We already have `filterByStatus` and `filterByGenre` for getting subsets of the collection. But sometimes you just need one specific book by its `id`. Here's a function for that:

```ts title="src/library.ts"
export function findById<T extends { id: number }>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}
```

This function uses a generic with a constraint: `T extends { id: number }` means "T can be any type, as long as it has at least an `id: number` property." Because of that constraint, TypeScript knows `item.id` is safe to access inside the function.

The return type is `T | undefined` - `Array.prototype.find` returns `undefined` if no item matches, and we reflect that honestly in our type.

Because this function works with any object that has an `id`, it isn't specific to books. You could call it with an array of any typed objects that have an `id` field:

```ts title="src/index.ts"
import { addBook, filterByStatus, filterByGenre, removeBook, updateStatus, averageRating, findById } from "./library";

// ... your existing code ...

const book = findById(books, 2);
if (book) {
  console.log('findById', book.title); // TypeScript knows book is a Book here
}
```

The `if (book)` check narrows the type from `Book | undefined` to just `Book` inside the block, which is required before accessing properties on it.

---

## Your `library.ts` So Far

```ts title="src/library.ts"
import { Book, Genre, ReadStatus } from "./types";

export function addBook(books: Book[], book: Book): Book[] {
  return [...books, book];
}

export function filterByStatus(books: Book[], status: ReadStatus): Book[] {
  return books.filter(book => book.status === status);
}

export function filterByGenre(books: Book[], genre: Genre): Book[] {
  return books.filter(book => book.genre === genre);
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
```

Run `npx tsc --noEmit` to check for errors before moving on.
