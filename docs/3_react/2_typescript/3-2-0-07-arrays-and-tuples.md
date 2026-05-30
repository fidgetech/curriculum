---
title: "📓 3.2.0.7 Arrays and Tuples"
day: weekend
id: 3-2-0-7-arrays-and-tuples
hide_table_of_contents: true
---

## Typed Arrays

In TypeScript, an array has a single element type - all items in the array must be the same type. You write an array type by putting `[]` after the element type:

```ts
const names: string[] = ["Alice", "Bob", "Carol"];
const scores: number[] = [95, 87, 100];
```

The `type[]` syntax is what you'll see throughout this curriculum. TypeScript also has a longer form for array types that you'll understand once we cover generics.

If you try to push the wrong type into a typed array, TypeScript will warn you:

```ts
const scores: number[] = [95, 87, 100];
scores.push("excellent"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

## Arrays of Objects

Array typing becomes especially useful with arrays of objects. You define the type of each item, and TypeScript ensures every item in the array has the right shape:

```ts
type Book = {
  title: string;
  author: string;
  year: number;
};

const library: Book[] = [
  { title: "Uprooted", author: "Naomi Novik", year: 2015 },
  { title: "Neuromancer", author: "William Gibson", year: 1984 },
];
```

Now TypeScript knows that every element of `library` is a `Book`. When you access an item, you get full autocomplete and type safety for its properties.

Notice how the array type (`Book[]`) references the type name - you can use any named type to describe the elements of an array.

## Tuples

A **tuple** is a fixed-length array where each position has a specific type. Unlike regular arrays where all elements share the same type, a tuple can have different types at each position.

```ts
const point: [number, number] = [10, 25];         // x, y coordinates
const entry: [string, number] = ["Alice", 95];    // name, score pair
```

The types are positional - the first element of `entry` must be a `string`, the second must be a `number`. Swapping them or adding extras is an error:

```ts
const point: [number, number] = [10, 25, 5]; // Error: too many elements
const entry: [string, number] = [95, "Alice"]; // Error: types in wrong order
```

## When to Use Tuples

Tuples are useful when you want to return multiple values from a function and the order and types are fixed:

```ts
function getMinMax(numbers: number[]): [number, number] {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return [min, max];
}

const [low, high] = getMinMax([3, 1, 7, 2]); // low = 1, high = 7
```

You'll also see tuples in React. React's `useState` hook returns a tuple:

```ts
const [count, setCount] = useState(0);
// useState returns [number, (value: number) => void]
// that's a tuple: the current value and the setter function
```

We'll come back to this when we start working with React. For now, just recognize the pattern: a function can return a pair of `[value, setter]`.

## A Note on Readonly Arrays

Sometimes you want an array that can't be modified after creation. TypeScript supports this with the `readonly` modifier:

```ts
const colors: readonly string[] = ["red", "green", "blue"];
colors.push("yellow"); // Error: Property 'push' does not exist on type 'readonly string[]'
```

This is useful when you want to enforce immutability - one of the functional programming principles from the previous section. You won't need `readonly` arrays right away, but knowing they exist is helpful.
