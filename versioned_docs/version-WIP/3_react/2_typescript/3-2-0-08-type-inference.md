---
title: "📓 3.2.0.8 Type Inference"
day: weekend
id: 3-2-0-8-type-inference
hide_table_of_contents: true
---

## TypeScript Can Figure Out Types

You don't have to annotate every variable you write. TypeScript watches how you initialize values and infers the type from context. This is called **type inference**.

```ts
const name = "Alice"; // TypeScript infers: string
const count = 0;      // TypeScript infers: number
const active = true;  // TypeScript infers: boolean
```

Even though there are no type annotations here, TypeScript knows the types of these variables. If you hover over them in VS Code, you'll see the inferred type shown in a tooltip. And if you try to assign the wrong type later, TypeScript will still warn you:

```ts
let score = 100;
score = "high"; // Error: Type 'string' is not assignable to type 'number'
```

TypeScript inferred `score` as `number` from the initial value of `100`. No annotation needed to get type safety here.

## `const` vs `let` and Inference

When you use `const`, TypeScript infers a more specific type called a **literal type**:

```ts
const direction = "north"; // inferred as the literal type "north", not string
const maxRetries = 3;      // inferred as the literal type 3, not number
```

This is because `const` means the value can never change. TypeScript uses the exact value as the type.

With `let`, TypeScript infers the broader type, since the value can be reassigned:

```ts
let direction = "north"; // inferred as string (could be reassigned to any string)
let maxRetries = 3;       // inferred as number
```

This distinction matters when we get to union and literal types - but for now, just be aware that `const` and `let` can produce different inferred types.

## When Inference Works Well

Inference works best when a variable is initialized with a clear value:

```ts
const items = ["apple", "banana", "cherry"]; // inferred as string[]
const user = { name: "Alex", age: 25 };      // inferred as { name: string; age: number }
let score = 0;                               // inferred as number
```

TypeScript looks at the initial value and derives the type from it. You can rely on this in most day-to-day code - there's no need to manually annotate these variables.

## When You Should Write Explicit Annotations

Inference has limits. There are situations where TypeScript can't infer the right type, or where the inferred type is broader than you want.

**Function parameters.** TypeScript cannot infer parameter types from how a function is called. You must annotate them:

```ts
function multiply(a, b) {  // Error: Parameter 'a' implicitly has an 'any' type
  return a * b;
}

function multiply(a: number, b: number): number {  // Correct
  return a * b;
}
```

**Variables declared without an initial value.** If you declare a variable but don't initialize it, TypeScript has nothing to infer from, and will assign type `any`:

```ts
let result;          // TypeScript infers 'any' - avoid this
let result: string;  // Better: explicit annotation tells TypeScript what's coming
```

**Variables that could hold different types.** If you want a variable to hold either a string or null, inference won't produce that - you need to say so explicitly:

```ts
let username = null;         // TypeScript infers 'null' - not what you want
let username: string | null = null;  // Correct: can be string or null
```

**Empty arrays.** If you declare an empty array without an annotation, TypeScript infers `any[]` because it has no values to learn from:

```ts
const items = [];           // inferred as any[] - no type safety
const items: string[] = []; // Correct - an empty array that will hold strings
```

Always annotate empty arrays explicitly.

**Return types of functions.** While TypeScript can often infer return types, writing them explicitly is good practice. It documents your intent and catches cases where a function accidentally returns the wrong type:

```ts
function getScore(): number {
  return "high"; // Error: Type 'string' is not assignable to type 'number'
}
```

## A Practical Guideline

Here's a simple rule that covers most situations:

- **Let TypeScript infer types for local variables** initialized with a clear value
- **Always annotate function parameters** - TypeScript requires it anyway
- **Usually annotate function return types** - it makes your code easier to read and trust
- **Annotate variables that start as `null` or `undefined`** - inference can't help here

```ts
// Good - inference handles local variables
const users = ["Alice", "Bob", "Carol"];
const total = users.length;

// Good - explicit annotations on function signature
function formatName(first: string, last: string): string {
  return `${first} ${last}`;
}
```

You'll naturally get a feel for when annotations add clarity and when they're unnecessary as you write more TypeScript code.
