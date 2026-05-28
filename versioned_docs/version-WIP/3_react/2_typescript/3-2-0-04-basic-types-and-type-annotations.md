---
title: "📓 3.2.0.4 Basic Types and Type Annotations"
day: weekend
id: 3-2-0-4-basic-types-and-type-annotations
hide_table_of_contents: true
---

## Type Annotations

A type annotation is how you tell TypeScript what type a value should be. The syntax is a colon followed by the type name, placed after the variable name:

```ts
const name: string = "Alice";
const age: number = 30;
const isActive: boolean = true;
```

TypeScript will now enforce that these variables always hold values of their declared type. If you try to assign the wrong type later, TypeScript will warn you:

```ts
let score: number = 100;
score = "high"; // Error: Type 'string' is not assignable to type 'number'
```

## The Primitive Types

TypeScript's three most common types correspond to JavaScript's three main primitive values.

### `string`

Any text value:

```ts
const firstName: string = "Jordan";
const message: string = `Welcome, ${firstName}`;
```

### `number`

All numbers - integers and decimals alike. JavaScript doesn't distinguish between them, and neither does TypeScript:

```ts
const year: number = 2026;
const price: number = 9.95;
const rating: number = 4.5;
```

### `boolean`

`true` or `false`:

```ts
const isLoggedIn: boolean = false;
const hasPermission: boolean = true;
```

## `null` and `undefined`

In TypeScript with `strict` mode enabled (which we set up in the previous lesson), `null` and `undefined` are their own types. A variable typed as `string` cannot hold `null` - you have to explicitly allow it if that's what you want.

```ts
let username: string = "Alice";
username = null; // Error: Type 'null' is not assignable to type 'string'
```

To allow `null`, you use a union type (which we'll cover in depth later in this section). Here's a preview:

```ts
let username: string | null = "Alice";
username = null; // Now this is allowed
```

You'll see this pattern frequently in real TypeScript code. Functions that might not find a result often return `Type | null` or `Type | undefined`.

## `any`

The `any` type tells TypeScript to stop checking a value. It can hold any kind of data, and TypeScript won't warn you when you use it in unexpected ways:

```ts
let data: any = "hello";
data = 42;        // no error
data = true;      // no error
data.toUpperCase(); // no error even though data is now a boolean
```

This sounds convenient, but it removes all the benefits of TypeScript. Code using `any` is just regular JavaScript - you don't get error catching, autocomplete, or safety.

**The rule: do not use `any`.** If you're tempted to reach for it, there's almost always a better option. We'll cover those options throughout this section.

:::note
You may see `any` in older code or in tutorials that prioritize brevity. That doesn't mean it's good practice. In a project with `strict` mode enabled, TypeScript will also warn you when `any` appears where a real type was expected.
:::

## `unknown`

`unknown` is the type-safe alternative to `any`. Like `any`, a variable of type `unknown` can hold any value. But unlike `any`, TypeScript won't let you use an `unknown` value until you've checked what it actually is.

```ts
let input: unknown = getUserInput(); // could be anything

input.toUpperCase(); // Error: Object is of type 'unknown'

if (typeof input === "string") {
  input.toUpperCase(); // OK - TypeScript now knows it's a string
}
```

`unknown` is the right type to use when you genuinely don't know what you'll receive - for example, data coming from an API response or user input. We'll come back to this when we cover type narrowing.

## `void`

`void` is used exclusively as the return type of functions that don't return a value. You won't use it on variables. We'll cover it fully in the functions lesson, but it's worth knowing the name:

```ts
function logMessage(message: string): void {
  console.log(message);
  // no return statement
}
```

## When to Write Type Annotations

You don't need to annotate every single variable. TypeScript can often figure out the type on its own - a feature called **type inference** that we'll cover in a future lesson.
