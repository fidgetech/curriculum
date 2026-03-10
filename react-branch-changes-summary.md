# React Branch: Changes Outside the React Section

This document summarizes all changes made in the `react` branch that fall **outside** the `versioned_docs/version-WIP/3_react/` curriculum section.

---

## 1. 404 Page (`src/theme/NotFound/Content/index.js`)

**What changed:** The 404 "Not Found" page was simplified.

- Removed the second paragraph that instructed users to contact the owner of the site that linked them to the broken URL.
- Added `:(` to the end of the first paragraph ("We could not find what you were looking for. :(").

---

## 2. Node.js Installation Instructions (`versioned_docs/version-WIP/2_intermediate-javascript/0_getting-started-with-javascript/2-0-0-03-installing-node-js.md`)

**What changed:** The Node.js installation guide in the Intermediate JavaScript course was substantially rewritten.

- **macOS:** Replaced Homebrew-based installation with `nvm` (Node Version Manager) via a `curl` script. The section was renamed from "OSX Installation Instructions" to "MacOS or Linux Installation Instructions", reflecting that Linux is also covered.
- **Windows:** Replaced the direct Node.js installer approach with `nvm-windows` (from the `coreybutler/nvm-windows` GitHub releases page).
- **Specific version pinned:** Both platforms now install Node.js **v16.20.0** (via `nvm install 16.20.0`) rather than installing whatever the latest version is.
- **Verification section:** Updated expected version output (`node -v` → `v16.20.0`, `npm -v` → `8.19.4`). Added mention of `nvm list` to list installed Node versions.
- **Wording:** Minor cleanup, e.g., "Epicodus projects" changed to "projects".

---

## 3. C# and .NET — Database Basics Lesson Title Numbers (`versioned_docs/version-WIP/c-and-net/3_database-basics/`)

**What changed:** Five lesson titles in the C# and .NET "Database Basics" section had incorrect lesson numbers in their frontmatter `title` field. All were corrected from `3.3.x.x` to `3.4.x.x`.

| File | Old Title Number | New Title Number |
|------|-----------------|-----------------|
| `3-3-1-01-to-do-list-and-project-rebuild.md` | 3.3.1.1 | 3.4.1.1 |
| `3-3-3-01-best-restaurants-in-town.md` | 3.3.3.1 | 3.4.3.1 |
| `3-3-4-01-technical-interview-practice.md` | 3.3.4.1 | 3.4.4.1 |
| `3-3-4-02-whiteboard-practice.md` | 3.3.4.2 | 3.4.4.2 |
| `3-3-5-01-database-basics-independent-project.md` | 3.3.5.1 | 3.4.5.1 |

---

## 4. WIP Sidebar Navigation (`versioned_sidebars/version-WIP-sidebars.json`)

**What changed:** The sidebar for the WIP version of the React course was restructured to reflect a new curriculum layout.

### New TypeScript Section Added
A new **section 3.2 TypeScript** was inserted between Functional Programming (3.1) and React Fundamentals. This shifts all subsequent section numbers up by one:

| Old Number | Old Label | New Number | New Label |
|---|---|---|---|
| 3.2 | React Fundamentals | 3.3 | React Fundamentals |
| 3.3 | React with Redux | 3.4 | React with Redux |
| 3.4 | React with NoSQL | 3.5 | React with NoSQL |
| 3.5 | React with APIs | 3.6 | React with APIs |
| 3.6 | Team Week | 3.7 | Team Week |

### Functional Programming Lesson Reordering
Within section 3.1 (Functional Programming), several lessons were reordered and renumbered:

- **Pure Functions** and **Immutability** moved earlier in the sequence (now 3-1-0-3 and 3-1-0-4, respectively).
- **Spread Operator** (previously lesson 3-1-1-5, in week 2) moved to 3-1-0-6 (week 1 pre-work).
- **Function Factories** added as a new lesson (3-1-0-11), which was not previously in the sidebar.
- **Currying** removed from the sidebar listing.

### Project Renamed
The "Build Your Own RPG / Haiku Checker" two-day project was renamed to "RPG Utilities / Haiku Checker" (sidebar ID updated from `3-1-3-1-build-your-own-rpg-haiku-checker-two-day-project` to `3-1-3-1-rpg-utilities-haiku-checker-two-day-project`).
