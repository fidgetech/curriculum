---
title: "✏️ 3.2.1.1 Book Tracker: Part 1"
day: monday
id: 3-2-1-1-book-tracker-part-1
hide_table_of_contents: true
---

**Goal:** Build a TypeScript program that manages a personal reading list. The program will operate on a collection of books - adding and removing entries, updating reading status, and filtering by genre or status. There's no browser or UI; the functions operate on arrays of data and log results to the console.

---

## Warm Up
---

* What is the difference between a `type` alias and an `interface`? When might you prefer one over the other?
* What does it mean for a property to be optional in TypeScript? How do you declare one, and what does its type become once you mark it with `?`?
* Why use a literal union type like `"want-to-read" | "currently-reading" | "finished"` instead of a plain `string`?
* How do you add type annotations to a function's parameters and its return value? What does TypeScript do for you once those annotations are in place?
* What does the spread operator (`...`) do when used in an object expression? Why does this matter for immutability?

---

## Project Setup

Create a new directory and initialize a TypeScript project:

```
mkdir book-tracker
cd book-tracker
npm init -y
npm install typescript ts-node --save-dev
npx tsc --init
```

Update `tsconfig.json` with the same configuration from the setup lesson:

```json title="tsconfig.json"
{
  "compilerOptions": {
    "target": "ES2024",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

Create a `src` directory and the files you'll work in:

```
mkdir src
touch src/types.ts src/library.ts src/index.ts
```

---

## Defining Your Types

Before writing any code, think about what you're modeling. What does a book have? Some properties come from the physical world: a `title`, an `author`, and the `year` it was published. For a reading tracker app, those are the bare minimum, but the user is probably going to want to track more information about each book. For example, they might want to filter their library by `genre`. We also want to allow users to track their reading `status` for each book - whether they want to read it, are currently reading it, or have finished it. Users might also want to record a `rating` for each book and write `notes` about their thoughts on it. The app itself also needs to assign an `id` to each book so it can be uniquely identified when we want to update or remove it.

So these are the properties we want to include on our `Book` type:
- `id`
- `title`
- `author`
- `year`
- `genre`
- `status`
- `rating`
- `notes`

Now what types should those properties be? `id` is often stored as a number, `title` and `author` are strings, and `year` is a number. That part is straightforward. `genre` and `status` are also strings, but they have a limited set of valid values, so we can be more specific with their types.

Let's consider `status`. There are only three meaningful values: the user wants to read the book, is currently reading it, or has finished it. If we typed `status` as `string`, nothing would stop someone from writing `"done"` or `"reading"` or a typo like `"finsihed"`, and TypeScript would happily accept it. A literal union type pins the value down to exactly the options we intend, and we get autocomplete and typo-catching for free.

The same reasoning applies to `genre`. There's a fixed set of categories the app supports, so a union of literals expresses that more honestly than `string` does.

Since `ReadStatus` and `Genre` will appear both on the `Book` type and in function signatures throughout the rest of the project, it's worth giving them their own names rather than inlining the unions. Naming them makes the `Book` type easier to read and means any future change to the allowed values happens in one place.

```ts
type ReadStatus = "want-to-read" | "currently-reading" | "finished"

type Genre =
  | "fiction"
  | "non-fiction"
  | "mystery"
  | "sci-fi"
  | "biography"
  | "other"
```

Now one final question to consider: which of the properties on `Book` do we want to require, and which should be optional? Let's require users to enter a title, author, year, genre, and status for every book. However, they might not have a rating or notes for every book yet. That difference is what optional properties are for, so `rating` and `notes` should be marked with a `?` to indicate that they are optional.

Start in `src/types.ts`. Define the types your entire project will use:

```ts title="src/types.ts"
export type ReadStatus = "want-to-read" | "currently-reading" | "finished";

export type Genre =
  | "fiction"
  | "non-fiction"
  | "mystery"
  | "sci-fi"
  | "biography"
  | "other";

export type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: Genre;
  status: ReadStatus;
  rating?: number;
  notes?: string;
};
```

:::tip
Note that we export each type as we define it. This allows us to import them in other files and use them for type annotations throughout the project.
:::

---

## Create Test Data

Open `src/index.ts` and add some starting data that we can use to test our functions as we build them. Import our `Book` type and create an array of books:

```ts title="src/index.ts"
import { Book } from "./types";

let books: Book[] = [
  {
    id: 1,
    title: "Uprooted",
    author: "Naomi Novik",
    year: 2015,
    genre: "fiction",
    status: "finished",
  },
  {
    id: 2,
    title: "The Fifth Season",
    author: "N.K. Jemisin",
    year: 2015,
    genre: "fiction",
    status: "currently-reading",
  },
  {
    id: 3,
    title: "Neuromancer",
    author: "William Gibson",
    year: 1984,
    genre: "sci-fi",
    status: "want-to-read",
  },
];
```

## Building the Library

The `library.ts` file is where we'll write all the functions that operate on our books data. Each function will take in an array of `Book` objects and return a new array of `Book` objects, with the appropriate changes made. This way we can keep our data immutable and avoid side effects.

Open `src/library.ts` and import our types:

```ts title="src/library.ts"
import { Book, Genre, ReadStatus } from "./types";
```

### Adding a Book

Our first function takes the current list of books and a new book, and returns a new list with the book added:

```ts title="src/library.ts"
export function addBook(books: Book[], book: Book): Book[] {
  return [...books, book];
}
```

Both parameters are fully typed, so if we try to pass an object missing a required field - or with a misspelled genre - TypeScript will catch it immediately. We use the spread operator to return a new array rather than mutating the original, which is the immutability pattern from the functional programming section.

Test `addBook` by importing it into `index.ts`:

```ts title="src/index.ts"
import { addBook } from "./library";

const newBook: Book = {
  id: 4,
  title: "A Memory Called Empire",
  author: "Arkady Martine",
  year: 2019,
  genre: "sci-fi",
  status: "want-to-read",
};

books = addBook(books, newBook);
console.log('addBook', books.length); // 4
console.log('addBook', books[3].title); // "A Memory Called Empire"
```

Run `npx ts-node src/index.ts` to verify it works. It should log `4` to the console, indicating the new book was added successfully.

### Filtering by Status

`filterByStatus` takes the books array and a `ReadStatus` and returns only the books with that status:

```ts title="src/library.ts"
export function filterByStatus(books: Book[], status: ReadStatus): Book[] {
  return books.filter(book => book.status === status);
}
```

The `status` parameter is typed as `ReadStatus`, not just `string`. TypeScript will catch it if you pass in anything that isn't `"want-to-read"`, `"currently-reading"`, or `"finished"`. Your editor will also autocomplete valid options when you call this function.

Test `filterByStatus` in `index.ts`. Update your imports to include `filterByStatus` and then call it with one of the valid status values:

```ts title="src/index.ts"
import { addBook, filterByStatus } from "./library";

// ...

const currentlyReading = filterByStatus(books, "currently-reading");
console.log('filterByStatus', currentlyReading.length); // 1
console.log('filterByStatus', currentlyReading[0].title); // "The Fifth Season"
```

Run `npx ts-node src/index.ts` to verify it works. It should log `1` and `"The Fifth Season"` to the console, indicating that the filter function is correctly returning only the book with the "currently-reading" status.

### Filtering by Genre

`filterByGenre` follows the same pattern as `filterByStatus`:

```ts title="src/library.ts"
export function filterByGenre(books: Book[], genre: Genre): Book[] {
  return books.filter(book => book.genre === genre);
}
```

The `Genre` type ensures only valid genre strings can be passed in.

Test `filterByGenre`:

```ts title="src/index.ts"
import { addBook, filterByStatus, filterByGenre } from "./library";

// ...

const scifi = filterByGenre(books, "sci-fi");
console.log('filterByGenre', scifi.length); // 2 (Neuromancer and A Memory Called Empire)
```

### Removing a Book

`removeBook` takes the books array and a book's `id`, and returns a new array with that book left out:

```ts title="src/library.ts"
export function removeBook(books: Book[], id: number): Book[] {
  return books.filter(book => book.id !== id);
}
```

The `id` parameter is typed as `number`. If you pass a string by mistake, TypeScript will warn you. Again, we return a new array rather than modifying the original.

Test `removeBook`:

```ts title="src/index.ts"
import { addBook, filterByStatus, filterByGenre, removeBook } from "./library";

// ...

books = removeBook(books, 1);
console.log('removeBook', books.length); // 3 - Uprooted has been removed
console.log('removeBook', books.find(b => b.id === 1)); // undefined
```

Run `npx ts-node src/index.ts` to verify it works. It should log `3` because we're back down to 3 books, and `undefined` because the book with `id` 1 was removed from the array.

### Updating a Book's Status

`updateStatus` takes the books array, a book `id`, and a new `ReadStatus`, and returns a new array with that book's status updated.

```ts title="src/library.ts"
export function updateStatus(books: Book[], id: number, status: ReadStatus): Book[] {
  return books.map(book => {
    if (book.id === id) {
      return { ...book, status };
    }
    return book;
  });
}
```

We use `map` to iterate over every book. When we find the one with the matching `id`, we return a new book object using the spread operator - preserving all its existing properties and overwriting only `status`. Every other book is returned unchanged. The result is a brand new array.

Test `updateStatus`:

```ts title="src/index.ts"
import { addBook, filterByStatus, filterByGenre, removeBook, updateStatus } from "./library";

// ...
  
books = updateStatus(books, 2, "finished");
const finished = filterByStatus(books, "finished");
console.log('updateStatus', finished.length); // 1 - The Fifth Season is now finished
console.log('updateStatus', finished.map(b => b.title)); // ["The Fifth Season"]
```

---

## Your `library.ts` So Far

After following along, your `library.ts` should look like this:

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
```

Run `npx tsc --noEmit` to verify your project compiles with no errors before moving on. No output means success!
