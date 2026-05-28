---
title: "✏️ 3.2.3.4 Practice: Café Menu"
day: wednesday
id: 3-2-3-4-practice-cafe-menu
hide_table_of_contents: true
---

**Goal:** Practice using `Record` and `Omit` in a new context.

## Warm Up

- What does `Record<K, V>` produce? How is it different from writing an object type by hand?
- What does `Omit<T, K>` do? Give a concrete example of when it's useful.
- Why would a "create item" function accept a type without an `id` field?

## Code

You're modeling a café menu. Start a fresh TypeScript project (or a new file in your existing one) using these types:

```ts
type Category = "coffee" | "tea" | "food" | "other";

type MenuItem = {
  id: number;
  name: string;
  price: number;
  category: Category;
  available: boolean;
};
```

Write the following:

1. `getCategoryCounts(menu: MenuItem[]): Record<Category, number>` - returns an object showing how many items are in each category. Every category must be present in the result, even if the count is zero.

2. A `NewMenuItem` type using `Omit` that excludes `id`.

3. `createMenuItem(menu: MenuItem[], item: NewMenuItem): MenuItem[]` - assigns a new `id` and returns the updated menu with the new item added.

4. `filterAvailable(menu: MenuItem[]): MenuItem[]` - returns only items where `available` is `true`.

5. `updatePrice(menu: MenuItem[], id: number, price: number): MenuItem[]` - returns a new menu with that item's price updated. If the price is zero or negative, return the menu unchanged or throw an error.

Create a small menu with items in different categories and test each function.

## Designing Types From a Description

Once you've finished the café menu exercises, try this type design challenge. Read the description below and write TypeScript types to model it - no functions needed, just the types.

---

You're modeling a community sports league. Here's how it works:

- The league has multiple **teams**. Each team has a name and a home venue.
- Each team has a **roster** of players. Each player has a name and a jersey number. Jersey numbers are unique within a team but not across the whole league.
- The league schedules **games** between two teams. Each game has a date, a home team, and an away team. Games also record the final score for each side - but some scheduled games haven't been played yet, so scores aren't always available.
- Each game has a **status**: either scheduled, in progress, or completed.

Write the TypeScript types for this system. As you work, consider:

- Which properties are always present, and which might not be?
- Are any properties constrained to a specific set of values?
- How do you represent the relationship between a game and its two teams?

## Instructor/Peer Code Review

- Does `getCategoryCounts` include all four categories in its return value, even ones with zero items?
- Is `NewMenuItem` derived from `MenuItem` using `Omit` rather than written from scratch?
- Does the project compile with no TypeScript errors?
- In the type design section: does the model accurately reflect the description - are the right properties optional, and are constrained values represented as literal union types?
