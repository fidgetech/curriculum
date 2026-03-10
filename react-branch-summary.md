# Summary: Changes in the `react` Branch Not Yet in `main`

The `react` and `main` branches share a common ancestor at commit `117b68ed` ("Merge pull request #5 from fidgetech/node"). Since that point, the `react` branch has accumulated **4 unique commits**:

1. `d7680f0f WIP: functional programming curriculum updates`
2. `c9109e1e renumber lessons to create typescript section`
3. `87a529e9 WIP: continue functional programming rewrite`
4. `007bf533 WIP: continue functional programming rewrite`

All changes are scoped to the WIP version of the curriculum. The work falls into four main areas: a **rewrite of the Functional Programming section**, the **insertion of a new TypeScript section** (which caused a renumbering cascade), **minor updates to related lessons**, and a small **404 page fix**.

---

## 1. Functional Programming Section — Content Rewrite

The most significant changes are a substantial rewrite of the `1_functional-programming-with-javascript` lessons under `versioned_docs/version-WIP/3_react/`. The goal appears to be making the content more beginner-friendly: adding concrete code examples, using comparison tables, softening the anti-OOP framing, and restructuring the lesson sequence.

### New Lessons Added

| New File | Description |
|----------|-------------|
| `3-1-0-03-pure-functions.md` | New 189-line lesson on pure functions (same input → same output, no side effects, no shared state) with many code examples including ✅/❌ annotated comparisons |
| `3-1-0-04-immutability.md` | New 133-line lesson on immutability — variables, arrays, and objects — with before/after code examples |
| `3-1-0-11-function-factories.md` | New 78-line lesson on function factories: using closures to create reusable, pre-configured functions |

### Lessons Deleted

| Deleted File | Reason |
|--------------|--------|
| `3-1-0-05-immutability.md` | Replaced by the new, expanded `3-1-0-04-immutability.md` |
| `3-1-0-07-pure-functions.md` | Replaced by the new, expanded `3-1-0-03-pure-functions.md` |
| `3-1-0-10-currying.md` | Currying topic removed from curriculum entirely |

### Lessons Renumbered (Sequence Restructured)

The spread operator lesson was moved from week 1 (`3-1-1-05`) up to week 0 (`3-1-0-06`), and several lessons were shifted to accommodate the new pure-functions and immutability lessons at positions 03 and 04:

| Old File | New File |
|----------|----------|
| `3-1-0-06-imperative-versus-declarative-programming.md` | `3-1-0-07-imperative-versus-declarative-programming.md` |
| `3-1-0-08-first-class-citizens.md` | `3-1-0-09-first-class-citizens.md` |
| `3-1-0-09-closures.md` | `3-1-0-10-closures.md` |
| `3-1-0-11-map-reduce-and-filter.md` | `3-1-0-12-map-reduce-and-filter.md` |
| `3-1-0-12-recursion.md` | `3-1-0-13-recursion.md` |
| `3-1-0-13-capstone-planning-the-minimum-viable-product.md` | `3-1-0-14-capstone-planning-the-minimum-viable-product.md` |
| `3-1-1-05-spread-operator.md` (week 1) | `3-1-0-06-spread-operator.md` (week 0, with significant content expansion) |

### Lessons with Substantive Content Edits

- **`3-1-0-01-functional-programming-with-javascript-objectives.md`** — Objectives rewritten as a structured table (Concept / What It Means / Why It Matters); added an OOP vs. FP comparison table; friendlier tone ("Good news: you've already been doing some functional programming!")

- **`3-1-0-02-introduction-to-functional-programming.md`** — Major rewrite; added concrete "before and after" code examples; restructured as three key principles (Focus on Functions, Prefer Stateless Functions, Avoid Mutating Data); removed the `day: weekend` front matter

- **`3-1-0-03-testing-functional-code.md`** — Major rewrite; the previous version was a disclaimer about why lessons don't include tests; the new version explains *why FP code is easy to test*, with side-by-side OOP vs. FP test examples

- **`3-1-0-06-spread-operator.md`** (moved from `3-1-1-05`) — Expanded from a shorter lesson into a more comprehensive one with more use cases and immutability focus; now includes examples of using spread for array prepend/append alternatives to `push`/`unshift`

- **`3-1-0-07-imperative-versus-declarative-programming.md`** (moved from `3-1-0-06`) — Content edits including a new `:::tip[Important Clarification]` callout box explaining that declarative code still runs imperative steps, just packaged up

- **`3-1-0-10-closures.md`** (moved from `3-1-0-09`) — Significantly shortened/simplified; the Eric Elliott "$40,000 question" intro was removed; content was made more approachable

- **`3-1-1-04-the-problems-of-classical-inheritance.md`** — Rewritten with a more balanced perspective; removed the dismissive framing of OOP; added "Inheritance works well when you have clear, stable hierarchies" opening; same concepts (tight coupling, gorilla-banana quote) but more nuanced

- **`3-1-1-06-composition.md`** — Minor wording: "function literal" → "function" throughout

- **`3-1-1-07-state.md`** — Shortened significantly; removed the Redux/pubsub/observer pattern explanation (deferred to when Redux is taught); simplified to focus on the challenge of managing state without mutation

- **`3-1-1-09-building-a-functional-application-part-1.md`** — Section "Problems With Our Object-Oriented Approach" renamed to "Refactoring to a Functional Approach"; framing changed from OOP-is-bad to "OOP works fine here, but let's practice FP patterns"

- **`3-1-2-03-further-exploration-creating-deep-clones.md`** — Updated to use `structuredClone()` (modern built-in) instead of `JSON.parse(JSON.stringify(...))` or lodash; removed lodash installation instructions

- **`3-1-3-01-build-your-own-rpg-haiku-checker-two-day-project.md`** — Title changed from "Build Your Own RPG" to "RPG Utilities"; project prompt changed to use function factories to build RPG weapon utilities; review question about LIFO/stack replaced with a closure/function-factory question

### Minor Edits to Practice/Project Lessons

Small wording adjustments in: `3-1-1-01-coin-counter-sieve.md`, `3-1-1-02-whiteboard-practice-closures.md`, `3-1-1-03-whiteboard-practice-recursion.md`, `3-1-2-02-whiteboard-practice-composition.md`, `3-1-4-05-linkedin-profiles.md`, `3-1-4-06-indeed-resume.md`, `3-1-4-07-whiteboard-practice.md`, `3-1-5-01-functional-programming-with-javascript-independent-project.md`

---

## 2. New TypeScript Section Inserted

A placeholder **TypeScript section** was inserted between Functional Programming (section 1) and React Fundamentals:

**New file:** `versioned_docs/version-WIP/3_react/2_typescript/3-2-0-01-typescript-objectives.md`

This is a stub file containing only:
```
---
title: "📓 3.2.0.1 TypeScript Objectives"
day: weekend
id: 3-2-0-1-typescript-objectives
hide_table_of_contents: true
pagination_prev: null
---

Test
```

**React course index updated** (`versioned_docs/version-WIP/3_react/index.md`):
- Title changed from "Welcome to React." to "Welcome to React and TypeScript!"
- Added a paragraph introducing TypeScript
- Added "TypeScript" as a bullet in the topics list

---

## 3. Renumbering Cascade: React Course Sections Shifted

Because TypeScript was inserted as section **2**, all subsequent sections were renumbered. Every lesson file in these sections was renamed with updated IDs (only the lesson number prefix changed; content was untouched except for the `id:` front matter field):

| Old Directory | New Directory | Lesson ID Prefix Change |
|---------------|---------------|------------------------|
| `2_react-fundamentals/` | `3_react-fundamentals/` | `3-2-x-xx` → `3-3-x-xx` |
| `3_react-with-redux/` | `4_react-with-redux/` | `3-3-x-xx` → `3-4-x-xx` |
| `4_react-with-nosql/` | `5_react-with-nosql/` | `3-4-x-xx` → `3-5-x-xx` |
| `5_react-with-apis/` | `6_react-with-apis/` | `3-5-x-xx` → `3-6-x-xx` |
| `6_team-week/` | `7_team-week/` | `3-6-x-xx` → `3-7-x-xx` |

This affected **~135 lesson files** across these five sections (file renames only — no content changes other than the `id:` field).

**Sidebar updated:** `versioned_sidebars/version-WIP-sidebars.json` was regenerated to reflect all new lesson IDs and the new TypeScript section.

---

## 4. C#/.NET Database Basics — Unintended Side Effect of the Renumber

**This is collateral damage from a bulk find-and-replace, not an intentional change.**

### Background: C#/.NET Lesson Numbering

The C#/.NET course uses **course number 5** in its lesson title prefixes. All lessons in the `3_database-basics` section correctly use `5.3.x.x` in their titles (5 = C#/.NET course, 3 = section 3 = database-basics). For example:

- `3-3-0-01-database-basics-objectives.md` → title: `📓 5.3.0.01 Database Basics Objectives`
- `3-3-1-02-database-schema-and-relationship-types.md` → title: `📓 5.3.1.2 Database Schema and Relationship Types`
- `3-3-2-01-to-do-list-animal-shelter-and-inventory.md` → title: `✏️ 5.3.2.1 To Do List, Animal Shelter, and Inventory`

The `id:` field for all of these also uses `5-3-x-x`.

### The Pre-Existing Bug

However, five specific lessons in the same directory had **wrong title numbers** that used `3.3.x.x` instead of `5.3.x.x`. Their `id:` fields were already correct (`5-3-x-x`); only the human-visible `title:` field was wrong:

| File | Wrong Title (ancestor / main) | Correct Title (should be) |
|------|-------------------------------|---------------------------|
| `3-3-1-01-to-do-list-and-project-rebuild.md` | `✏️ 3.3.1.1 To Do List and Project Rebuild` | `✏️ 5.3.1.1 …` |
| `3-3-3-01-best-restaurants-in-town.md` | `✏️ 3.3.3.1 Best Restaurants in Town` | `✏️ 5.3.3.1 …` |
| `3-3-4-01-technical-interview-practice.md` | `✏️ 3.3.4.1 Technical Interview Practice` | `✏️ 5.3.4.1 …` |
| `3-3-4-02-whiteboard-practice.md` | `✏️ 3.3.4.2 Whiteboard Practice` | `✏️ 5.3.4.2 …` |
| `3-3-5-01-database-basics-independent-project.md` | `✏️ 3.3.5.1 Database Basics Independent Project` | `✏️ 5.3.5.1 …` |

### What the React Branch Did

The react branch commit `c9109e1e "renumber lessons to create typescript section"` ran a bulk renumber to change all react course section 3 lesson IDs from `3-3-x-xx` to `3-4-x-xx` (since React with Redux moved from section 3 to section 4). This bulk operation matched on the string `3.3` in titles, which inadvertently caught these five C#/.NET files whose titles had the pre-existing wrong `3.3.x.x` prefix.

Result: the react branch changed these titles from `3.3.x.x` → `3.4.x.x` — still wrong for the C#/.NET course (they should be `5.3.x.x`), just wrong in a different way. **No lesson body content was changed.** The `id:` fields were not affected. This is an unintended side effect, not a deliberate curriculum change to the C#/.NET course.

| File | Before (wrong) | After in react branch (also wrong) | What it should be |
|------|----------------|------------------------------------|-------------------|
| `3-3-1-01-to-do-list-and-project-rebuild.md` | `3.3.1.1` | `3.4.1.1` | `5.3.1.1` |
| `3-3-3-01-best-restaurants-in-town.md` | `3.3.3.1` | `3.4.3.1` | `5.3.3.1` |
| `3-3-4-01-technical-interview-practice.md` | `3.3.4.1` | `3.4.4.1` | `5.3.4.1` |
| `3-3-4-02-whiteboard-practice.md` | `3.3.4.2` | `3.4.4.2` | `5.3.4.2` |
| `3-3-5-01-database-basics-independent-project.md` | `3.3.5.1` | `3.4.5.1` | `5.3.5.1` |

---

## 5. Installing Node.js — Updated Instructions

**`versioned_docs/version-WIP/2_intermediate-javascript/0_getting-started-with-javascript/2-0-0-03-installing-node-js.md`**

The macOS installation section was significantly updated:
- Old: Install via `brew install node`; check versions manually
- New: Install via `nvm` (Node Version Manager); instructions now cover both MacOS **and Linux** together; uses `nvm install 16.20.0`; added Windows section with equivalent nvm-windows instructions

---

## 6. Custom 404 Page — Minor Simplification

**`src/theme/NotFound/Content/index.js`**

The 404 page was simplified:
- Old: Two paragraphs — "We could not find what you were looking for." + "Please contact the owner of the site that linked you to the original URL and let them know their link is broken."
- New: Single paragraph — "We could not find what you were looking for. :("

---

## Statistics

| Category | Count |
|----------|-------|
| Files added | 4 |
| Files deleted | 3 |
| Files modified | 27 |
| Files renamed (lesson ID updates only) | ~146 |
| **Total files changed** | **~180** |
| Lines added | +1,341 |
| Lines removed | -1,014 |

The bulk of the file count (146 renames) is purely the renumbering cascade from inserting the TypeScript section. The substantive changes are the ~30 files in the functional programming rewrite plus the new TypeScript stub.
