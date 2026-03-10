# Summary: Differences Between WIP Branch and Main Branch

This document summarizes the changes in the `WIP` branch compared to the `main` branch.

## Overview

The WIP branch contains 4 commits ahead of main:
1. `Update package-lock.json`
2. `initial batch of clean up in prework`
3. `pushing changes to getting started with intro to programming`
4. `pushing last batch of cosmetic updates to prework`

The changes fall into five categories: removal of the v1.3 curriculum version, rebranding of the WIP prework from Epicodus to Fidgetech, image updates, CSS cleanup, and site configuration changes.

---

## 1. Version v1.3 Removed

The entire `version-v1_3` versioned documentation (845 files) has been deleted, including all curriculum content, sidebars, and version configuration.

**Files removed:**
- `versioned_docs/version-v1_3/` — all lessons across all courses (Introduction to Programming, Intermediate JavaScript, C#/.NET, React, etc.)
- `versioned_sidebars/version-v1_3-sidebars.json`

**Configuration changes (`docusaurus.config.js`):**
- Removed the `v1_3` entry from the `versions` configuration
- Removed the "Version 1.3" link from the navbar dropdown menu

**`versions.json`:**
- Removed `"v1_3"` from the versions list

---

## 2. WIP Prework: Rebranded from Epicodus to Fidgetech

The WIP prework section has been restructured to replace all references to "Epicodus" with "Fidgetech."

**Directory rename:**
- `versioned_docs/version-WIP/0_pre-work/0_getting-started-at-epicodus/` → `0_getting-started-at-fidgetech/`

**Files moved/renamed into the new `0_getting-started-at-fidgetech/` directory:**
- `1-0-0-01-learn-how-to-program.md` — updated to reference Fidgetech instead of Epicodus
- `1-0-0-02-growth-mindset.md` — sourced from v1.3, updated for Fidgetech
- `1-0-0-03-making-fidgetech-an-inclusive-place.md` — new file (replaces the Epicodus-branded version)
- `1-0-0-04-community-agreements.md` — updated for Fidgetech
- `1-0-0-05-making-the-most-of-code-school.md` — updated for Fidgetech
- `1-0-0-06-pair-programming.md` — sourced from v1.3, updated for Fidgetech
- `1-0-0-07-how-to-ask-for-help.md` — moved unchanged
- `1-0-0-08-curriculum-details-intro-to-programming.md` — sourced from v1.3, updated for Fidgetech
- `1-0-0-09-independent-projects-and-code-reviews.md` — sourced from v1.3, updated for Fidgetech
- `1-0-0-10-academic-honesty.md` — sourced from v1.3, updated for Fidgetech
- `1-0-0-11-final-capstone-project.md` — moved unchanged
- `1-0-0-12-a-glossary-of-fidgetech-terminology.md` — renamed from `a-glossary-of-epicodus-terminology.md`, updated for Fidgetech

**Files deleted from old `0_getting-started-at-epicodus/` directory:**
- `1-0-0-02-growth-mindset.md`
- `1-0-0-03-making-epicodus-an-inclusive-place.md`
- `1-0-0-06-pair-programming.md`
- `1-0-0-08-curriculum-details-intro-to-programming.md`
- `1-0-0-09-independent-projects-and-code-reviews.md`
- `1-0-0-10-academic-honesty.md`
- `1-0-0-12-a-glossary-of-epicodus-terminology.md`

**DEI curriculum:**
- `making-epicodus-an-inclusive-place.md` → `making-fidgetech-an-inclusive-place.md`

**Other WIP content updates:**
- `versioned_docs/version-WIP/0_pre-work/index.md` — updated all "Epicodus" references to "Fidgetech" throughout the section overview
- Various other WIP lesson files updated with minor wording changes to replace "Epicodus" with "Fidgetech"

---

## 3. Image Updates

- **Renamed (URL encoding fix):** Two React images renamed to use `%20` instead of `+` for URL-encoded spaces:
  - Before: `static/images/Intermediate+JavaScript/React/inline-styles-in-action.png`
  - After: `static/images/Intermediate%20JavaScript/React/inline-styles-in-action.png`
  - Before: `static/images/Intermediate+JavaScript/React/style-free-component.png`
  - After: `static/images/Intermediate%20JavaScript/React/style-free-component.png`
- **Deleted:** `static/images/React/Week-4-React-2020/testmode.png` (unused image)
- **Optimized:** `static/images/React/firebase-project-homepage-navigation.png` — reduced from 374 KB to 111 KB

---

## 4. CSS Cleanup (`src/css/custom.css`)

Removed custom code block title styling rules that overrode Docusaurus defaults:

```css
/* Removed: */
[data-theme='light'] div[class^='codeBlockTitle'],
[data-theme='light'] div[class*=' codeBlockTitle'] {
  background: #d0d0d0;
  font-weight: bold;
}

[data-theme='dark'] div[class^='codeBlockTitle'],
[data-theme='dark'] div[class*=' codeBlockTitle'] {
  background: #3a3a3a;
  font-weight: bold;
}
```

---

## 5. Site Configuration (`docusaurus.config.js`)

- Removed v1.3 from the `versions` configuration object
- Removed "Version 1.3" from the navbar version dropdown
- Commented out the "Version 1.1" link in the navbar version dropdown (was already not in the versions config)

---

## 6. Package Updates

`package-lock.json` was updated with minor dependency changes.

---

## Statistics

| Category | Count |
|---|---|
| Files added | 1 |
| Files deleted | 853 |
| Files modified | 19 |
| Files renamed | 14 |
| **Total files changed** | **887** |
| Lines added | +182 |
| Lines removed | -105,660 |

The bulk of deletions (845 files) are from the removal of `versioned_docs/version-v1_3/`.
