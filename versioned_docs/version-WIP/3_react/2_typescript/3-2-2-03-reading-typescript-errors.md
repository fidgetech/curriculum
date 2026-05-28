---
title: "📓 3.2.2.3 Reading TypeScript Errors"
day: tuesday
id: 3-2-2-3-reading-typescript-errors
hide_table_of_contents: true
---

TypeScript error messages have a reputation for being long and intimidating. When you first start working with the language, an error that spans five or six lines of dense type information can feel impossible to parse. The good news: once you learn the shape of the most common errors, they tell you almost exactly what to fix.

This lesson is a practical reference for reading TypeScript errors. We'll walk through the categories of errors you'll actually see in this section's exercises and project, and break down what each one is telling you.

## A Strategy for Reading Long Errors

Before getting into specific error categories, here's a general approach. A typical TypeScript error has two parts:

1. A **short error code and headline** at the top (the part that tells you which category of error this is)
2. A longer **details block** below, which often shows full type definitions

When the details block is long, your eye can glaze over. The trick is to focus on the **last line or two** of the error first - that's usually where TypeScript tells you exactly which property or value is the problem. The lines above are context.

For example, in an error that reads:

```
Type '{ title: string; year: string; }' is not assignable to type 'Book'.
  Types of property 'year' are incompatible.
    Type 'string' is not assignable to type 'number'.
```

The last line is the actual problem: a `string` is being assigned where a `number` is expected. The lines above explain the path the type checker took to find it.

## "Object is possibly 'null' or 'undefined'"

This is one of the first errors you'll meet, and one of the most common.

```ts
function getUsername(): string | null {
  // ...
}

const username = getUsername();
console.log(username.toUpperCase());
// Error: 'username' is possibly 'null'.
```

**What it means:** the value you're using might not be there. TypeScript refuses to let you call a method or read a property on it until you've ruled out the `null` or `undefined` case.

**Why TypeScript does this:** if `username` is actually `null` at runtime, `username.toUpperCase()` crashes with a `TypeError`. TypeScript catches this class of bug before you run the code.

**How to fix it:** narrow the type so TypeScript knows the value isn't null in the branch where you use it. The [Type Narrowing](./3-2-2-1-type-narrowing-and-type-guards) lesson covers the techniques in depth - briefly, the options are a truthiness check (`if (username) ...`), an explicit comparison (`if (username !== null) ...`), or optional chaining (`username?.toUpperCase()`) when you want to safely access without branching.

## "Type 'X' is not assignable to type 'Y'"

This is by far the most common TypeScript error, and the one that comes in the most flavors. It means you tried to put a value of one shape into a slot that expects a different shape.

```ts
type Book = {
  title: string;
  year: number;
};

const book: Book = {
  title: "Uprooted",
  year: "2015",
};
// Error: Type 'string' is not assignable to type 'number'.
```

Here it's a simple primitive mismatch - `year` should be `number` but is `string`.

When the types are objects, the error gets longer. TypeScript shows you both shapes and then narrows in on the specific property that doesn't match:

```ts
const book: Book = {
  title: "Uprooted",
  publishedIn: 2015,
};
// Error: Type '{ title: string; publishedIn: number; }'
// is not assignable to type 'Book'.
//   Object literal may only specify known properties,
//   and 'publishedIn' does not exist in type 'Book'.
```

**A note on structural typing:** TypeScript checks types by their shape, not their name. Two types with identical properties are considered the same type, even if they have different names. This is why error messages often show you the full structure of a type rather than just its name. When you see a long error listing every property of two types, TypeScript is showing you the shapes it's comparing.

**How to fix it:** read the last line of the error. It will name the specific property that doesn't match, and tell you what type it expected versus what type it found. Then change either the value or the type so they agree.

## "Property 'X' does not exist on type 'Y'"

This usually means you accessed a property that only exists on some members of a union type.

```ts
type Dog = { name: string; breed: string };
type Fish = { name: string; tankSize: number };
type Pet = Dog | Fish;

function describe(pet: Pet): string {
  return `${pet.name} is a ${pet.breed}`;
  // Error: Property 'breed' does not exist on type 'Pet'.
  //   Property 'breed' does not exist on type 'Fish'.
}
```

TypeScript is telling you: "I can't guarantee `pet` is a `Dog` here, so I can't let you access `.breed`. It might be a `Fish`, and `Fish` doesn't have a `.breed`."

**How to fix it:** narrow the union before accessing the property. Use an `in` check, a `typeof` check, or a discriminated union pattern (covered later in this section). Once TypeScript knows which branch of the union you're in, the property becomes accessible.

This error also appears when you simply mistype a property name. If the error says a property doesn't exist on a type you control, double-check your spelling before reaching for type narrowing.

## "Parameter 'X' implicitly has an 'any' type"

This one comes from the `strict: true` setting in your `tsconfig.json`.

```ts
function greet(name) {
  return `Hello, ${name}`;
}
// Error: Parameter 'name' implicitly has an 'any' type.
```

**What it means:** you defined a function parameter without giving it a type, and TypeScript can't infer one from context. Under `strict: true`, TypeScript refuses to silently treat the parameter as `any` - that would defeat the purpose of using TypeScript.

**How to fix it:** add a type annotation to the parameter.

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

If you genuinely don't know the type yet (for example, while sketching out a function), use `unknown` rather than `any`. `unknown` is the safe version of `any` - TypeScript still lets you accept any value, but it forces you to narrow before using it.

## When the Error Doesn't Make Sense

Sometimes an error appears on a line that looks fine, while the real problem is somewhere else. A common case: you've defined a type incorrectly, and the error shows up at every place you use that type rather than at the type definition.

When this happens:

- Check the type definition itself, not just the line the error points at
- Look at what TypeScript thinks the type is by hovering over the variable in VS Code
- Read the error from the bottom up, following the chain of "Types of property..." lines

The information you need is almost always in the error - it just sometimes takes a few reads to find it.

## Summary

TypeScript errors look intimidating but follow a small number of patterns:

| Error | What it means | Where to look |
|---|---|---|
| Object is possibly 'null' or 'undefined' | The value might not be there | Narrow it before using |
| Type 'X' is not assignable to type 'Y' | Shape mismatch | Last line names the bad property |
| Property 'X' does not exist on type 'Y' | Wrong branch of a union (or typo) | Narrow first, or fix the name |
| Parameter 'X' implicitly has an 'any' type | Missing annotation under `strict` | Add a type annotation |

When you see a long error, read the last line first.
