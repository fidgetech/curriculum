---
title: '✏️ 3.1.3.1 RPG Utilities, Haiku Checker (Two-day Project)'
day: wednesday
id: 3-1-3-1-rpg-utilities-haiku-checker-two-day-project
hide_table_of_contents: true
---

**Goal:** For this project, continue building functional applications. Try incorporating all the different tools you've learned so far from closures to recursion to composition. You may incorporate object-oriented elements in your applications, but try to keep your code functional where possible.

## Warm Up
---

* What does it mean to mutate state? Why should we generally avoid this in functional programming?
* What does it mean that functions are first class citizens? 
* What is a closure, and how do function factories use closures?

## Code
---

### Build Your Own RPG Utilities

Use function factories to build a set of weapon utilities for a simple RPG.

Weapon factory: Create a function factory that generates different weapons. Each weapon should take a base damage value and return the calculated damage:

```js
const sword = createWeapon("Sword", 1.5); // multiplier of 1.5
const dagger = createWeapon("Dagger", 0.8); // multiplier of 0.8

sword(10);   // "Sword does 15 damage!"
dagger(10);  // "Dagger does 8 damage!"
```

Armor factory: Create a function factory that generates armor with different defense ratings. Armor should reduce incoming damage:

```js
const leather = createArmor("Leather", 0.1); // reduces damage by 10%
const plate = createArmor("Plate", 0.5); // reduces damage by 50%

leather(20);  // "Leather absorbs 2 damage! You take 18 damage."
plate(20);    // "Plate absorbs 10 damage! You take 10 damage."
```

Bonus: Create a potion factory, spell factory, or another game element of your choice using the same pattern.

### Haiku Checker/Creator

Here's another project from Intermediate JavaScript — if you've already built this project, try refactoring your object-oriented approach so that it's functional instead. You may also choose to build a functional application from scratch.

A haiku is a poem that consists of three lines. The first has five syllables, the second has seven, and the third has five. Start by creating an application that checks whether a poem is in fact a haiku. If you have time, build out your application so that it can randomly generate haikus.

* Your logic should verify that the poem has three lines.
* Your logic should verify English syllable rules (and exceptions) one at a time. A quick Google search will provide information on English syllable rules.
* If you successfully complete a Haiku checker, continue to build out your application to randomly generate haikus.

Make sure you test your application for each new rule you implement.


## Instructor/Peer Code Review
---

* Code uses functional programming and avoids mutating state as much as possible.
* Code demonstrates an understanding of closures and other functional concepts.
* Application works as expected.
* Code is well tested.
