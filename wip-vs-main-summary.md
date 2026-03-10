# Summary: Changes in WIP Branch Not Yet in Main

This document summarizes the changes that exist in the `WIP` branch but have **not** been merged into the `main` branch.

The `WIP` and `main` branches share a common ancestor at commit `117b68ed` ("Merge pull request #5 from fidgetech/node"). Since that point, `main` has moved ahead with additional work (v1.3 curriculum, React updates, etc.), while the `WIP` branch has accumulated **4 commits of its own**:

1. `Update package-lock.json`
2. `initial batch of clean up in prework`
3. `pushing changes to getting started with intro to programming`
4. `pushing last batch of cosmetic updates to prework`

All WIP-unique changes are entirely within the **WIP version of the prework section** (`versioned_docs/version-WIP/0_pre-work/`). The theme is a **rebranding of all "Epicodus" references to "Fidgetech"**.

---

## 1. Prework Directory Restructured: `0_getting-started-at-epicodus/` → `0_getting-started-at-fidgetech/`

The entire `0_getting-started-at-epicodus/` subdirectory was renamed to `0_getting-started-at-fidgetech/`. All 12 lesson files were moved into the new directory, with most files also receiving content edits to replace "Epicodus" with "Fidgetech":

| File | Change |
|------|--------|
| `1-0-0-01-learn-how-to-program.md` | Moved + content rewritten for Fidgetech (new intro paragraph, philosophy, program overview) |
| `1-0-0-02-growth-mindset.md` | Moved + minor wording updates (Epicodus → Fidgetech) |
| `1-0-0-03-making-fidgetech-an-inclusive-place.md` | **New file** — replaces the deleted `making-epicodus-an-inclusive-place.md` |
| `1-0-0-04-community-agreements.md` | Moved + minor wording updates |
| `1-0-0-05-making-the-most-of-code-school.md` | Moved + minor wording updates |
| `1-0-0-06-pair-programming.md` | Moved + wording updates (Epicodus → Fidgetech) |
| `1-0-0-07-how-to-ask-for-help.md` | Moved, no content changes |
| `1-0-0-08-curriculum-details-intro-to-programming.md` | Moved + wording updates |
| `1-0-0-09-independent-projects-and-code-reviews.md` | Moved + wording updates |
| `1-0-0-10-academic-honesty.md` | Moved + wording updates |
| `1-0-0-11-final-capstone-project.md` | Moved, no content changes |
| `1-0-0-12-a-glossary-of-fidgetech-terminology.md` | Renamed from `a-glossary-of-epicodus-terminology.md` + wording updates |

The old `1-0-0-03-making-epicodus-an-inclusive-place.md` was deleted and replaced by the new Fidgetech-branded version.

---

## 2. Prework Index Updated (`versioned_docs/version-WIP/0_pre-work/index.md`)

All references to "Epicodus" replaced with "Fidgetech":
- "Welcome to the Pre-Work section of Learn How to Program." → "Welcome to the Pre-Work section of Fidgetech's Coding Programs!"
- "Getting Started at Epicodus" section heading → "Getting Started at Fidgetech"
- Body text references updated throughout

---

## 3. Getting Started with Intro to Programming Lessons Updated

The following lessons in `versioned_docs/version-WIP/0_pre-work/1_getting-started-with-intro-to-programming/` were updated to replace "Epicodus" with "Fidgetech":

- **`1-0-0-14-welcome-to-intro.md`** — section heading and link text updated; link target corrected to point to the new `0_getting-started-at-fidgetech/` directory
- **`1-0-0-16-text-editor-visual-studio-code.md`** — two "At Epicodus" references replaced with "At Fidgetech"
- **`1-0-0-17-introduction-to-the-command-line.md`** — "At Epicodus" references and example terminal prompt (`epicodus-5`) replaced with Fidgetech equivalents (`fidgetech-5`)
- **`1-0-0-18-interacting-with-the-command-line.md`** — "at Epicodus" references and example terminal prompts replaced; one Epicodus-specific `pwd` note removed
- **`1-0-0-20-git-and-github.md`** — "At Epicodus" references replaced; removed the line "The Epicodus Macs already have Git installed."
- **`1-0-0-21-git-configurations.md`** — "at Epicodus" and "an Epicodus repository" references replaced with Fidgetech
- **`1-0-0-22-creating-and-using-a-git-pat.md`** — "at Epicodus" references replaced; removed the `pagination_next: null` frontmatter; removed the final section about Epicodus-specific in-person shared machine PAT handling

---

## 4. Getting Started with Working Remotely Lessons Updated

The following lessons in `versioned_docs/version-WIP/0_pre-work/2_getting-started-with-working-remotely/` were updated to replace "Epicodus" with "Fidgetech":

- **`1-0-0-23-installing-software-on-your-machine.md`** — "the Epicodus program" → "the Fidgetech program"
- **`1-0-0-24-installing-and-using-discord.md`** — removed the note about Discord being pre-installed on Epicodus computers; Discord server anchor link fixed; "Epicodus' Discord server" → "Fidgetech's Discord server"
- **`1-0-0-25-customizing-discord.md`** — "another Discord account just for Epicodus classes" → "just for Fidgetech classes"
- **`1-0-0-26-working-with-a-dev-team.md`** — "At Epicodus" references and "Epicodus students" → Fidgetech equivalents
- **`1-0-0-27-direct-messages-in-discord.md`** — "Epicodus is a community" → "Fidgetech is a community"
- **`1-0-0-28-installing-and-using-vs-code-live-share.md`** — "Fidgetech uses VS Code Live Share" and "a fellow Epicodus student" → Fidgetech equivalent

---

## 5. DEI Curriculum File Renamed

- `versioned_docs/version-WIP/diversity-equity-and-inclusion/1_dei-curriculum-overview/making-epicodus-an-inclusive-place.md`
  renamed to `making-fidgetech-an-inclusive-place.md` (no content changes)

---

## 6. Package Dependency Update

`package-lock.json` was updated with minor dependency changes.

---

## Statistics

| Category | Count |
|------|-------|
| Files added | 1 |
| Files deleted | 1 |
| Files modified | 14 |
| Files renamed | 13 |
| **Total files changed** | **29** |
| Lines added | +178 |
| Lines removed | -176 |

All changes are scoped to the `versioned_docs/version-WIP/0_pre-work/` directory (plus `package-lock.json`). No changes to `main` curriculum content, site configuration, or other versions.
