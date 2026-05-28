---
title: "📓 3.2.0.6 Functions in TypeScript"
day: weekend
id: 3-2-0-6-functions-in-typescript
hide_table_of_contents: true
---

## Typing Function Parameters

Functions are the most important place to write explicit type annotations. TypeScript cannot infer what types a function's parameters should be - it needs you to tell it.

Add a type annotation after each parameter name:

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

The `: string` after `name` is the parameter annotation. The `: string` after the closing parenthesis is the return type annotation. Together they form the complete **function signature** - a contract that says: "this function takes a string and returns a string."

## Return Type Annotations

The return type comes after the parameter list, before the function body:

```ts
function add(a: number, b: number): number {
  return a + b;
}

function isEven(n: number): boolean {
  return n % 2 === 0;
}

function getFullName(first: string, last: string): string {
  return `${first} ${last}`;
}
```

TypeScript can often infer return types, but writing them explicitly is considered good practice. It makes your function's purpose clear and protects against accidentally returning the wrong type:

```ts
function getScore(): number {
  return "excellent"; // Error: Type 'string' is not assignable to type 'number'
}
```

## The `void` Return Type

When a function doesn't return a value, its return type is `void`:

```ts
function logMessage(message: string): void {
  console.log(message);
}

function updateTitle(title: string): void {
  document.title = title;
}
```

`void` is different from `undefined`. `void` means "this function is called for its side effects and has no meaningful return value." You'll use `void` frequently with event handlers and callback functions in React.

## Arrow Functions

Arrow functions work the same way. Annotations go in the same positions:

```ts
const double = (n: number): number => n * 2;

const formatDate = (date: Date): string => date.toLocaleDateString();

const logError = (message: string): void => {
  console.error(`Error: ${message}`);
};
```

## Functions as Parameters

When you pass a function as an argument (a callback), you can type it as well. This is common in functional programming patterns like `map` and `filter`, and you'll use it a lot in React for event handlers:

```ts
function transform(value: number, fn: (n: number) => number): number {
  return fn(value);
}

transform(5, n => n * 2);  // 10
transform(5, n => n + 10); // 15
```

The type `(n: number) => number` describes a function that takes a number and returns a number. The parentheses, parameter list, arrow, and return type are all part of the syntax.

Here's another example you'll see frequently in React - typing a click handler:

```ts
function Button(label: string, onClick: () => void): void {
  // onClick here is a function that takes no arguments and returns nothing
}
```

## Function Type Aliases

If you use the same function type in multiple places, you can alias it:

```ts
type NumberTransformer = (n: number) => number;
type ClickHandler = () => void;
type EventCallback = (event: string, data: unknown) => void;

function transform(value: number, fn: NumberTransformer): number {
  return fn(value);
}
```

This is cleaner than repeating the full function type signature everywhere.

## Putting It Together

Here's a complete example using the patterns from this lesson and the previous ones:

```ts
type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
};

function createBook(id: number, title: string, author: string, year: number): Book {
  return { id, title, author, year };
}

function formatTitle(book: Book): string {
  return `${book.title} by ${book.author} (${book.year})`;
}

function isRecent(book: Book, threshold: number): boolean {
  return book.year >= threshold;
}

function updateYear(book: Book, year: number): Book {
  return { ...book, year };
}
```

Notice how every function has typed parameters and return types. Reading these signatures, you know exactly what each function expects and produces - without reading the implementation.
