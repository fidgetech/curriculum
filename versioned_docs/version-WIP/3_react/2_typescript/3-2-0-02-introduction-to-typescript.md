---
title: "📓 3.2.0.2 Introduction to TypeScript"
day: weekend
id: 3-2-0-2-introduction-to-typescript
hide_table_of_contents: true
---

## What Is TypeScript?

JavaScript is a flexible language. You can pass a string where a number is expected, call a method on `undefined`, or store completely different kinds of values in the same variable - and JavaScript won't complain until something breaks at runtime. This flexibility makes JavaScript quick to write, but it also makes bugs easy to introduce and hard to find.

TypeScript was created at Microsoft in 2012 to address exactly this problem. TypeScript is a **superset of JavaScript**, which means any valid JavaScript code is also valid TypeScript code. But TypeScript adds one powerful feature on top: **static types**. In practice, this means you can take JavaScript code and add TypeScript types to it gradually. Though with strict settings, which we'll use throughout this section, TypeScript will flag missing annotations.

With TypeScript, you declare what type of data each variable, parameter, and function return value should be. TypeScript then checks your code *before it runs* and tells you when something doesn't match. Errors that would otherwise only appear at runtime - crashing your app in a user's browser - get caught during development instead.

TypeScript doesn't run directly in browsers or Node.js. It **compiles to JavaScript**. It's a tool that validates your code, then produces clean JavaScript that runs anywhere JavaScript runs.

## A Concrete Example

Here's the kind of bug TypeScript can catch. In plain JavaScript:

```js
function getDisplayName(user) {
  return user.firstName + " " + user.lastName;
}

getDisplayName("Alice"); // runtime error: Cannot read properties of undefined (reading 'firstName')
```

This code looks reasonable, but if someone passes a string instead of a user object, it crashes. JavaScript has no way to warn you before this happens.

With TypeScript:

```ts
type User = {
  firstName: string;
  lastName: string;
};

function getDisplayName(user: User): string {
  return user.firstName + " " + user.lastName;
}

getDisplayName("Alice");
// Error: Argument of type 'string' is not assignable to parameter of type 'User'
```

TypeScript catches the mistake immediately - in your editor, before the code ever runs. The red underline appears the moment you type the incorrect argument.

Don't worry about the syntax yet. The point is that TypeScript turns a runtime crash into a compile-time warning.

## Why Use TypeScript?

**Catch errors early.** TypeScript finds type mismatches, missing properties, and incorrect function arguments while you're writing code - not after a user has encountered a crash.

**Better editor support.** Because TypeScript knows the shape of your data, code editors can offer precise autocomplete, inline documentation, and suggestions. When you type `user.`, your editor can show you exactly which properties exist on that object. This makes development faster and reduces the need to constantly check documentation.

**Self-documenting code.** Type annotations communicate intent. When you read a function signature like `function createTicket(title: string, priority: number): Ticket`, you immediately know what it expects and what it returns - without reading the full implementation.

**Safer refactoring.** When you rename a property or change a function's signature, TypeScript tells you every place in the codebase that needs to be updated. Without TypeScript, you'd have to find those places manually, which is easy to miss.

**Industry standard.** TypeScript is now the default for most professional JavaScript projects - most new React projects are started with TypeScript by default. Being comfortable with TypeScript is a practical skill for finding a job and working on existing codebases.

## TypeScript Is Still JavaScript

One important thing to keep in mind: TypeScript doesn't replace JavaScript. It builds on it. Everything you've already learned about JavaScript - functions, arrays, objects, closures, map and filter - still applies. TypeScript just adds a layer on top that makes that code safer and more explicit.

When TypeScript compiles your code, it strips away all the type annotations and produces standard JavaScript. Types are a development tool, not a runtime feature.

## What to Expect in This Section

In this section, we'll learn TypeScript on its own, separate from React. We'll start with the basics - annotating variables and functions - and build up to the patterns you'll use most often in real projects: typed object shapes, union types, generics, and type narrowing.

The goal isn't to learn every feature TypeScript offers. The goal is to learn enough TypeScript to write clear, idiomatic typed code and to understand the errors and warnings you'll encounter when building React applications.
