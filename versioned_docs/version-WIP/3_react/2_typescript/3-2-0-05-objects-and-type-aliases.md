---
title: "📓 3.2.0.5 Objects and Type Aliases"
day: weekend
id: 3-2-0-5-objects-and-type-aliases
hide_table_of_contents: true
---

## Typing Objects

In JavaScript, objects can hold any combination of keys and values. TypeScript lets you describe the exact shape of an object - which properties it has and what type each property must be.

The most direct way to type an object is with an inline object type annotation:

```ts
const user: { name: string; age: number; isAdmin: boolean } = {
  name: "Alice",
  age: 30,
  isAdmin: false,
};
```

This tells TypeScript that `user` must have exactly these properties with these types. If a property is missing or has the wrong type, TypeScript will warn you:

```ts
const user: { name: string; age: number } = {
  name: "Alice",
  // Error: Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'
};
```

Inline types work fine for simple, one-off cases, but they get unwieldy quickly. If you have many objects of the same shape, you'd have to repeat the same long annotation everywhere. That's where type aliases come in.

## Type Aliases

A **type alias** gives a name to any type so you can reuse it. Use the `type` keyword:

```ts
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};
```

Now you can use `User` as a type anywhere:

```ts
const alice: User = { name: "Alice", age: 30, isAdmin: false };
const bob: User = { name: "Bob", age: 25, isAdmin: true };

function greetUser(user: User): string {
  return `Hello, ${user.name}!`;
}

const users: User[] = [alice, bob];
```

This is much cleaner. The type is defined once, and any mistake in any of these places gets caught immediately.

:::note
Don't worry about the function and array TypeScript syntax yet - we'll cover those in the next sections. The important part is that `User` is defined once and can be used everywhere we need to refer to that shape of object.
:::


## Naming Conventions

Type alias names use **PascalCase** (starting with a capital letter), the same as class names in JavaScript. This is a TypeScript convention that makes it easy to spot types in code:

```ts
type ProductCategory = { ... }  // good
type productCategory = { ... }  // not conventional
```

## Aliases for Non-Object Types

Type aliases aren't limited to objects. You can alias any type, including primitives, unions, and function signatures:

```ts
type Username = string;
type Score = number;
type StatusCode = 200 | 404 | 500; // union of literal numbers - more on this soon
```

Aliasing primitives is less common but sometimes useful for making code more self-documenting. `type Username = string` doesn't add type safety beyond `string`, but it makes intent clearer.

## A Practical Example

Here's a more complete example of type aliases in action. Notice how defining the type once lets us use it consistently across multiple values:

```ts
type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

const laptop: Product = { id: 1, name: "Laptop", price: 999, inStock: true };
const phone: Product = { id: 2, name: "Phone", price: 699, inStock: false };

// TypeScript catches a mismatch immediately
const tablet: Product = { id: 3, name: "Tablet", price: "free", inStock: true };
// Error: Type 'string' is not assignable to type 'number'

// Creating an updated product without mutation
const salePhone: Product = { ...phone, price: phone.price * 0.9 };
```

Both `laptop` and `phone` satisfy the `Product` type, and TypeScript enforces that immediately. The `tablet` example shows what happens when a property has the wrong type - a clear error pointing at the mismatch rather than a runtime surprise.

If the shape of `Product` ever changes - say you add a required `category` field - TypeScript will tell you every place that needs updating.

Notice the `salePhone` line creates a new `Product` using the spread operator, overwriting just the `price`. This is the immutability pattern from the functional programming section. TypeScript and functional programming work together well.
