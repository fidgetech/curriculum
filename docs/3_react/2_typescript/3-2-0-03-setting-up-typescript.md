---
title: "📓 3.2.0.3 Setting Up TypeScript"
day: weekend
id: 3-2-0-3-setting-up-typescript
hide_table_of_contents: true
---

## Prerequisites

You should already have everything you need installed. If you need to review node and npm setup instructions, see [Installing Node.js](../../intermediate-javascript/getting-started-with-javascript/2-0-0-3-installing-node-js). You'll continue using VS Code, which has excellent built-in TypeScript support.

## Creating a TypeScript Project

Let's set up a simple TypeScript project that we can use to experiment as we work through the early lessons. We won't build anything complex yet - just get the tooling in place.

Create a new directory and initialize a Node project with a package.json file:

```
mkdir typescript-practice
cd typescript-practice
npm init -y
```

Now install TypeScript as a development dependency:

```
npm install typescript@6.0.3 --save-dev
```

We'll also install `ts-node`, which lets us run TypeScript files directly without a separate compile step. This is useful for learning and experimentation:

```
npm install ts-node --save-dev
```

## Configuring TypeScript

TypeScript's behavior is controlled by a `tsconfig.json` file at the root of your project. Generate a default one with:

```
npx tsc --init
```

This creates a `tsconfig.json` with many options, most of them commented out. Replace the entire contents of the file with this cleaner configuration:

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

Here's what each option does:

| Option | What It Does |
|--------|--------------|
| `"target": "ES2024"` | Compiles your TypeScript down to ES2024 JavaScript, which modern Node.js understands natively |
| `"module": "commonjs"` | Uses CommonJS module syntax (`require`/`module.exports`), which Node.js understands |
| `"rootDir": "./src"` | Tells TypeScript where your source files live |
| `"outDir": "./dist"` | Where compiled JavaScript files will be placed |
| `"strict": true` | Enables all strict type-checking options - **important: this is what makes TypeScript actually helpful** |
| `"esModuleInterop": true` | Makes importing CommonJS modules easier |
| `"skipLibCheck": true` | Skips type-checking of `.d.ts` type definition files from npm packages, which speeds up compilation. |

The most important setting is `"strict": true`. This enables a collection of strict checks that catch the most common TypeScript mistakes.

## Your First TypeScript File

Create a `src` directory and a first file inside it. Note the `.ts` extension - TypeScript files use `.ts` instead of `.js`:

```
mkdir src
```

```ts title="src/index.ts"
const greeting: string = "Hello, TypeScript!";
console.log(greeting);
```

The `: string` annotation is TypeScript syntax. It tells TypeScript - and anyone reading the code - that `greeting` should always be a string. If you try to assign a number to it, for example, TypeScript will warn you.

## Running TypeScript Files

There are two ways to run TypeScript code.

**Option 1: Use ts-node (quick, great for practice)**

```
npx ts-node src/index.ts
```

`ts-node` compiles and runs the file in one step, without creating any output files. This is the approach we'll use during this section's practice and project.

**Option 2: Compile first, then run**

```
npx tsc
node dist/index.js
```

`npx tsc` compiles all your TypeScript files and places the resulting JavaScript in `dist/`. You can then run the JavaScript with Node. This is the approach you'd use to prepare code for deployment.

For now, use `ts-node`. It's simpler for learning.

## TypeScript in VS Code

VS Code has TypeScript support built in - no extensions required. The moment you open a `.ts` file, VS Code begins type-checking it. Red underlines appear for type errors. Hovering over a variable shows its inferred type. Autocomplete knows the shape of your objects.

This editor feedback is one of the main reasons TypeScript is so useful. You don't have to run anything to see errors - they appear as you type.

## File Extensions

TypeScript files use the `.ts` extension. When we get to React, component files use `.tsx` - the `x` indicates the file contains JSX. For now, all of our files will be plain `.ts`.

## A Note on `any`

You may encounter the `any` type as you read documentation or look at existing code. `any` tells TypeScript to stop type-checking a value - it can be anything. While `any` is technically valid, using it defeats the purpose of TypeScript and introduces the same kinds of bugs TypeScript is meant to prevent. We'll cover it briefly in the next lesson, but the rule of thumb is: don't use `any`.

## Summary

To set up a standalone TypeScript project (for learning and practice):

1. `npm init -y`
2. `npm install typescript ts-node --save-dev`
3. `npx tsc --init`, then configure `tsconfig.json` with `strict: true`
4. Create `.ts` files in `src/`
5. Run with `npx ts-node src/index.ts`

With this setup in place, you're ready to start learning the language itself.
