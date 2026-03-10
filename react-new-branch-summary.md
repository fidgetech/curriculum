# Summary: Differences Between `main` and `react-new` Branches

## Overview

The `react-new` branch contains 4 commits ahead of `main`, representing a work-in-progress (WIP) rewrite and reorganization of the React course section in the `versioned_docs/version-WIP` documentation.

**Commits on `react-new` not in `main`:**
1. `WIP: functional programming curriculum updates`
2. `renumber lessons to create typescript section`
3. `WIP: continue functional programming rewrite`
4. `WIP: continue functional programming rewrite`

**Total changes:** 174 files changed, 1,335 insertions, 1,000 deletions

---

## Affected Directories

| Directory | Files Changed | Description |
|-----------|--------------|-------------|
| `versioned_docs/version-WIP/3_react/3_react-fundamentals/` | 39 | React Fundamentals lesson files renumbered (section moved from 3.2 → 3.3) |
| `versioned_docs/version-WIP/3_react/5_react-with-nosql/` | 36 | React with NoSQL lesson files renumbered (section moved from 3.4 → 3.5) |
| `versioned_docs/version-WIP/3_react/4_react-with-redux/` | 32 | React with Redux lesson files renumbered (section moved from 3.3 → 3.4) |
| `versioned_docs/version-WIP/3_react/1_functional-programming-with-javascript/` | 31 | Functional programming lessons substantially rewritten and renumbered |
| `versioned_docs/version-WIP/3_react/6_react-with-apis/` | 20 | React with APIs lesson files renumbered (section moved from 3.5 → 3.6) |
| `versioned_docs/version-WIP/3_react/7_team-week/` | 12 | Team week lesson files renumbered (section moved from 3.6 → 3.7) |
| `versioned_docs/version-WIP/3_react/2_typescript/` | 1 | **New section**: TypeScript objectives placeholder added |
| `versioned_docs/version-WIP/3_react/` | 1 | `index.md` updated to mention TypeScript |
| `versioned_docs/version-WIP/2_intermediate-javascript/0_getting-started-with-javascript/` | 1 | Node.js installation instructions updated |
| `versioned_sidebars/` | 1 | `version-WIP-sidebars.json` updated to reflect new section numbering |

---

## Key Changes by Area

### 1. New TypeScript Section (3.2)

A new **TypeScript** section (3.2) has been inserted between Functional Programming (3.1) and React Fundamentals (now 3.3). This caused all subsequent sections to be renumbered:

| Old Number | Section | New Number |
|------------|---------|------------|
| 3.1 | Functional Programming with JavaScript | 3.1 (unchanged) |
| *(new)* | TypeScript | **3.2** |
| 3.2 | React Fundamentals | **3.3** |
| 3.3 | React with Redux | **3.4** |
| 3.4 | React with NoSQL | **3.5** |
| 3.5 | React with APIs | **3.6** |
| 3.6 | Team Week | **3.7** |

The new TypeScript section currently contains only a stub file (`3-2-0-01-typescript-objectives.md`) with placeholder content ("Test"). This is consistent with the WIP (work-in-progress) nature of the branch — the section structure and numbering has been established, but the actual TypeScript curriculum content has not yet been written.

### 2. Functional Programming Section Rewrite (3.1)

The Functional Programming section has been substantially rewritten with a more beginner-friendly tone. Key changes include:

**Files added (new lessons):**
- `3-1-0-03-pure-functions.md` — New in-depth lesson on pure functions (189 lines), with detailed examples and explanation of side effects
- `3-1-0-04-immutability.md` — New in-depth lesson on immutability (133 lines)
- `3-1-0-11-function-factories.md` — New lesson on function factories (78 lines)

**Files deleted (removed lessons):**
- `3-1-0-05-immutability.md` — Replaced by the new, expanded `3-1-0-04-immutability.md`
- `3-1-0-07-pure-functions.md` — Replaced by the new, expanded `3-1-0-03-pure-functions.md`
- `3-1-0-10-currying.md` — Currying lesson removed; function factories lesson added in its place

**Lesson renumbering within 3.1:**
- `spread-operator` moved from lesson 3-1-1-05 (day 2) to 3-1-0-06 (day 1, core content)
- `imperative-versus-declarative-programming` moved to earlier in the sequence
- `capstone-planning` renumbered from 3-1-0-13 to 3-1-0-14

**Content rewrites:**
- **Objectives** (`3-1-0-01`): Rewritten with friendlier tone, added comparison table (OOP vs FP), added "Good news: you've already been doing FP!" framing
- **Introduction to FP** (`3-1-0-02`): Significantly expanded (~99 lines of changes)
- **Closures** (`3-1-0-10`): Substantial rewrite (~89 lines changed)
- **Composition** (`3-1-1-06`): Refactored (~52 lines changed)
- **Map/Reduce/Filter** (`3-1-0-12`): Updated (~30 lines changed)
- **Deep Clones** (`3-1-2-03`): Updated (~59 lines changed)
- **RPG/Haiku project** (`3-1-3-01`): Renamed from "Build Your Own RPG / Haiku Checker" to "RPG Utilities / Haiku Checker" (~36 lines changed)

### 3. Node.js Installation Instructions Updated

`versioned_docs/version-WIP/2_intermediate-javascript/0_getting-started-with-javascript/2-0-0-03-installing-node-js.md`

- Now recommends installing `nvm` (Node Version Manager) instead of using Homebrew directly
- Updated from "OSX Installation Instructions" to "MacOS or Linux Installation Instructions"
- Added Windows instructions using the nvm-windows tool
- Updated expected Node and npm version requirements
- ~65 lines changed

### 4. React Section Index Updated

`versioned_docs/version-WIP/3_react/index.md`

- Title changed from "Welcome to React." to "Welcome to React and TypeScript!"
- Added paragraph describing TypeScript and its history
- Added TypeScript to the list of topics covered

### 5. Sidebar Navigation Updated

`versioned_sidebars/version-WIP-sidebars.json` (~317 lines changed)

- All section labels and document IDs updated to reflect the new numbering scheme
- TypeScript section (3.2) added to navigation
- React Fundamentals moved from section 3.2 to 3.3, along with all child lesson IDs
- All subsequent sections similarly renumbered throughout the sidebar
- Functional programming lesson order updated to match new lesson sequence

---

## Nature of Changes

- **Structural reorganization**: A new TypeScript section (3.2) was inserted, causing all downstream sections to be renumbered. This is a large-scale but mostly mechanical change.
- **Content improvements**: The Functional Programming section has been substantively rewritten to be more accessible to beginners, with new lessons added and some removed.
- **Tooling update**: Node.js installation instructions modernized to use `nvm`.
- **All changes are in `versioned_docs/version-WIP`**: No production docs or other sections of the codebase are affected.
