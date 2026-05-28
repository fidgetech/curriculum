---
title: "📓 3.2.2.2 Type Assertions"
day: tuesday
id: 3-2-2-2-type-assertions
hide_table_of_contents: true
---

## The Problem

Most of the time, TypeScript figures out the type of a value on its own, and its inference is correct. But occasionally you know something about a value that TypeScript can't figure out for itself. The value comes from outside your code - the DOM, a network response, a parsed string - and TypeScript only sees a broad, generic type where you know a more specific one applies.

A **type assertion** is how you tell TypeScript: "trust me, I know this value is actually this type." You write it with the `as` keyword:

```ts
const value = something as SpecificType;
```

This is a compile-time instruction only. An assertion does not convert or change the value at runtime - there's no code generated for it at all. It simply overrides what TypeScript inferred and treats the value as the type you named from that point on.

You won't need to write type assertions often in the code you write for this section. But you'll run into them in documentation, libraries, and existing codebases - so it's worth knowing what they are. By the end of this lesson, you'll know what they mean, when they're legitimate, and how to recognize the warning signs of misuse.

## Assertions vs. Narrowing

It's worth contrasting assertions with **type narrowing**, which you covered in the previous lesson. The two solve overlapping problems but in opposite ways:

- **Narrowing works _with_ the type system.** You write a runtime check (`if (typeof x === "string")`) that _proves_ to TypeScript what the type is. TypeScript verifies your reasoning.
- **Assertions work _around_ the type system.** You _assert_ what the type is, and TypeScript takes your word for it without checking.

Narrowing is always the safer choice when it's available, because TypeScript validates it. Reach for an assertion only when narrowing genuinely can't express what you know.

## When You Legitimately Need Assertions

There are a handful of situations where assertions are the right tool. Here are the three you'll meet most often.

### DOM APIs

The DOM is the most common place beginners encounter assertions. Consider this:

```ts
const input = document.getElementById("username");
input.value; // Error: 'input' is possibly 'null'.
             // Property 'value' does not exist on type 'HTMLElement'.
```

TypeScript types `document.getElementById()` as `HTMLElement | null`. It can't know what element `"username"` refers to - that depends on your HTML, which TypeScript never sees. So it gives you the most general type it safely can, and that general type doesn't have a `.value` property.

If you know the element is a text input, you can assert it:

```ts
const input = document.getElementById("username") as HTMLInputElement;
console.log(input.value); // OK - HTMLInputElement has a .value property
```

You're telling TypeScript something it can't determine on its own: that this particular element is an `HTMLInputElement`. As long as your HTML actually contains a matching input, the assertion is honest and correct.

### Parsed JSON and External Data

When data enters your program from outside - an API response, a file, `localStorage` - TypeScript has no way to know its shape. `JSON.parse()` returns `any`, which opts out of type checking entirely:

```ts
type User = {
  id: number;
  name: string;
};

const json = '{ "id": 1, "name": "Alice" }';
const user = JSON.parse(json) as User;

console.log(user.name); // typed as string
```

The assertion gives the parsed value a useful type so the rest of your code can rely on it. The honest caveat: TypeScript is trusting you that the JSON really has this shape. If the data doesn't match, the assertion is a lie and you'll get errors later. In production code you'd often validate the shape first (with a library like Zod, or a manual check) and then assert based on what you verified.

:::note
You'll sometimes see the type `unknown` instead of `any` for external data. `unknown` is the safer cousin of `any`: it represents "a value of some type we don't know yet," but unlike `any` it won't let you use the value until you've narrowed or asserted it to a specific type. An assertion is one of the ways to move a value from `unknown` to something usable.
:::

### Numeric Literal Types

Now back to the dice example from the union types lesson:

```ts
type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDie(): DiceValue {
  return Math.floor(Math.random() * 6 + 1) as DiceValue;
}
```

`Math.floor(...)` always produces a `number` as far as TypeScript is concerned. TypeScript can't reason about the arithmetic to conclude the result is always between 1 and 6 - it only sees the `number` return type of `Math.floor`. So assigning that `number` to a `DiceValue` return type would be an error without the assertion. Here _you_ know the math guarantees a value in range, so `as DiceValue` bridges the gap between what TypeScript can prove and what you know to be true.

## `as const`

There's one assertion that's both extremely useful and completely safe: `as const`. Instead of asserting a different type, it asks TypeScript to infer the _narrowest_ possible type for a value.

Compare these:

```ts
let direction = "north";          // type: string
let direction = "north" as const; // type: "north"
```

By default, TypeScript widens a `let` string to the general `string` type, since the variable could be reassigned to any string. With `as const`, it keeps the literal type `"north"`. This matters when a value needs to fit a literal union:

```ts
type Direction = "north" | "south" | "east" | "west";

let heading = "north";          // type: string - won't fit Direction without help
let heading = "north" as const; // type: "north" - fits Direction perfectly
```

`as const` works on objects and arrays too, making every property `readonly` and every value a literal:

```ts
const config = { theme: "dark", size: 12 };
// type: { theme: string; size: number }

const config = { theme: "dark", size: 12 } as const;
// type: { readonly theme: "dark"; readonly size: 12 }
```

It also turns an array into a fixed **tuple** of literals, which is handy for things like fixed option lists:

```ts
const sizes = [10, 20, 30] as const;
// type: readonly [10, 20, 30] - not number[]
```

What makes `as const` safe is that you're guaranteed not to be lying to TypeScript. Every other assertion says "treat this as a type it might not be." `as const` says "be _more_ precise about the type this already is." You can't be wrong with it, so use it freely.

## The Risk of Assertions

Assertions (except `as const`) bypass type checking, which means TypeScript will not catch a mistaken assertion. If you assert the wrong type, the code compiles cleanly and then fails at runtime:

```ts
const value = "hello" as unknown as number;

console.log(value.toFixed(2)); // compiles fine, crashes at runtime:
                               // value.toFixed is not a function
```

`value` is really a string, but you told TypeScript it's a number, so it lets you call `.toFixed()` - a method strings don't have. The error surfaces only when the code actually runs.

The rule to internalize: **assert only when _you_ know something TypeScript genuinely cannot, not to silence an error you don't understand.** An assertion is a promise you're making to the compiler. If you find yourself reaching for `as` frequently, that's usually a sign the types aren't modeled correctly - the better fix is to improve the types, not to override them.

## The Double Assertion Pattern

You may run across an assertion that goes through `unknown` on its way to the target type:

```ts
const id = "abc" as unknown as number;
```

This is called a **double assertion**, and it exists because TypeScript will refuse a direct assertion when the two types are too unrelated for it to consider the assertion plausible (`"abc" as number` on its own produces an error). Asserting through `unknown` first sidesteps that objection, since `unknown` is compatible with everything.

You don't need to write these. The reason to recognize them is that they're a warning sign: the compiler tried to tell someone a conversion was probably a mistake, and the double assertion silenced that warning. Occasionally a double assertion is legitimately needed for stubborn third-party types, but when you see `value as unknown as TargetType` in a codebase, treat it as a flag that something in the design may be off rather than as a pattern to copy.

## Try It

Open the `src/index.ts` scratchpad from the setup lesson and try each of these. The point is to observe how assertions change what TypeScript reports, not to build anything.

1. **Assert parsed JSON.** Paste in this JSON string and define a `Book` type to match it:

   ```ts
   type Book = {
     title: string;
     author: string;
   };

   const json = '{ "title": "Uprooted", "author": "Naomi Novik" }';

   const book = JSON.parse(json);       // hover over `book` - what type is it?
   const typedBook = JSON.parse(json) as Book; // hover over `typedBook`

   console.log(typedBook.author);
   ```

   Hover over `book` and notice it's `any` - TypeScript lets you access `book.anythingAtAll` with no complaint, because `any` turns off checking. Now hover over `typedBook` and access `typedBook.title`. With the assertion, you get autocomplete and an actual error if you misspell a property. Run it with `npx ts-node src/index.ts` to confirm `typedBook.author` correctly logs "Naomi Novik".

2. **Assert a DOM element.** Write this into your editor and then hover over `input` and `value`:

   ```ts
   const input = document.getElementById("email");
   input.value; // hover over `input` and over `value`
   ```

   :::note
   Actually running this code would crash since `document` doesn't exist in Node, but you can still write it and hover over the variables to see the types.
   :::

   Hover over `input` and see that it's `HTMLElement | null`, which is why `.value` is an error - not all HTMLElements have a `.value` property. Now add an `as HTMLInputElement` assertion:

   ```ts
   const input = document.getElementById("email") as HTMLInputElement;
   input.value; // again hover over `input` and over `.value`
   ```
   
   Now the assertion typed input as an `HTMLInputElement` and `.value` is now allowed. This is a situation encountered frequently in browser code.

3. **Observe `as const`.** Declare a heading two ways and compare:

   ```ts
   let heading1 = "north";          // hover - what type?
   let heading2 = "north" as const; // hover - what type?
   ```

   Hover over each. `heading1` is widened to `string`, while `heading2` keeps the literal type `"north"`. Now add `type Direction = "north" | "south" | "east" | "west";` above them and try assigning each one to a `Direction` variable. Which assignment does TypeScript accept, and why?

## Summary

Type assertions let you override TypeScript's inference with `as Type` when you know more about a value than the compiler does - typically with DOM elements, external data, and numeric literals. They're a compile-time instruction only and carry no runtime safety, so a wrong assertion fails silently until the code runs. Prefer narrowing when you can, lean on `as const` freely since it only makes types more precise, and treat the double-assertion-through-`unknown` pattern as a warning sign rather than a habit.
