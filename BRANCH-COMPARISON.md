# WIP vs WIP-local Branch Comparison

## Overview

Both **WIP** and **WIP-local** contain the same four commits of new work (prework content cleanup) that are not yet merged into `main`. The key difference is their relationship to `main`:

- **WIP** branched off from an older commit on `main` and is **behind main by 16 commits**.
- **WIP-local** branched off from the current HEAD of `main` — it is a **rebased version of WIP** on top of the latest `main`.

In short, `WIP-local` represents the same changes as `WIP`, rebased to be current with `main`.

---

## Commits Not in `main`

Both branches carry four commits of new work that are not present in `main`. They have the same commit messages and were made on the same dates, but have different SHA hashes because `WIP-local` was rebased.

| Order | Commit Message | Date |
|-------|---------------|------|
| 1 (oldest) | `Update package-lock.json` | 2026-01-16 |
| 2 | `initial batch of clean up in prework` | 2026-02-09 |
| 3 | `pushing changes to getting started with intro to programming` | 2026-02-09 |
| 4 (newest) | `pushing last batch of cosmetic updates to prework` | 2026-02-09 |

### On WIP (SHAs)

```
a44c5b2  Update package-lock.json
689f13b  initial batch of clean up in prework
f164cc0  pushing changes to getting started with intro to programming
af8314c  pushing last batch of cosmetic updates to prework
```

### On WIP-local (SHAs)

```
2e4c835  Update package-lock.json
79b2cfe  initial batch of clean up in prework
ab84df0  pushing changes to getting started with intro to programming
1daa592  pushing last batch of cosmetic updates to prework
```

---

## Files Changed (vs `main`)

The 29 files changed by the four new commits, all in the prework section of the `version-WIP` docs:

- `package-lock.json`
- `versioned_docs/version-WIP/0_pre-work/0_getting-started-at-epicodus/1-0-0-03-making-epicodus-an-inclusive-place.md` *(deleted)*
- `versioned_docs/version-WIP/0_pre-work/0_getting-started-at-fidgetech/1-0-0-01-learn-how-to-program.md`
- `versioned_docs/version-WIP/0_pre-work/0_getting-started-at-fidgetech/1-0-0-02-growth-mindset.md`
- `versioned_docs/version-WIP/0_pre-work/0_getting-started-at-fidgetech/1-0-0-03-making-fidgetech-an-inclusive-place.md` *(new file, replaces epicodus version)*
- `versioned_docs/version-WIP/0_pre-work/0_getting-started-at-fidgetech/1-0-0-04-community-agreements.md`
- `versioned_docs/version-WIP/0_pre-work/0_getting-started-at-fidgetech/1-0-0-05-making-the-most-of-code-school.md`
- `versioned_docs/version-WIP/0_pre-work/0_getting-started-at-fidgetech/1-0-0-06-pair-programming.md`
- `versioned_docs/version-WIP/0_pre-work/0_getting-started-at-fidgetech/1-0-0-07-how-to-ask-for-help.md`
- `versioned_docs/version-WIP/0_pre-work/0_getting-started-at-fidgetech/1-0-0-08-curriculum-details-intro-to-programming.md`
- `versioned_docs/version-WIP/0_pre-work/0_getting-started-at-fidgetech/1-0-0-09-independent-projects-and-code-reviews.md`
- `versioned_docs/version-WIP/0_pre-work/0_getting-started-at-fidgetech/1-0-0-10-academic-honesty.md`
- `versioned_docs/version-WIP/0_pre-work/0_getting-started-at-fidgetech/1-0-0-11-final-capstone-project.md`
- `versioned_docs/version-WIP/0_pre-work/0_getting-started-at-fidgetech/1-0-0-12-a-glossary-of-fidgetech-terminology.md`
- `versioned_docs/version-WIP/0_pre-work/1_getting-started-with-intro-to-programming/1-0-0-14-welcome-to-intro.md`
- `versioned_docs/version-WIP/0_pre-work/1_getting-started-with-intro-to-programming/1-0-0-16-text-editor-visual-studio-code.md`
- `versioned_docs/version-WIP/0_pre-work/1_getting-started-with-intro-to-programming/1-0-0-17-introduction-to-the-command-line.md`
- `versioned_docs/version-WIP/0_pre-work/1_getting-started-with-intro-to-programming/1-0-0-18-interacting-with-the-command-line.md`
- `versioned_docs/version-WIP/0_pre-work/1_getting-started-with-intro-to-programming/1-0-0-20-git-and-github.md`
- `versioned_docs/version-WIP/0_pre-work/1_getting-started-with-intro-to-programming/1-0-0-21-git-configurations.md`
- `versioned_docs/version-WIP/0_pre-work/1_getting-started-with-intro-to-programming/1-0-0-22-creating-and-using-a-git-pat.md`
- `versioned_docs/version-WIP/0_pre-work/2_getting-started-with-working-remotely/1-0-0-23-installing-software-on-your-machine.md`
- `versioned_docs/version-WIP/0_pre-work/2_getting-started-with-working-remotely/1-0-0-24-installing-and-using-discord.md`
- `versioned_docs/version-WIP/0_pre-work/2_getting-started-with-working-remotely/1-0-0-25-customizing-discord.md`
- `versioned_docs/version-WIP/0_pre-work/2_getting-started-with-working-remotely/1-0-0-26-working-with-a-dev-team.md`
- `versioned_docs/version-WIP/0_pre-work/2_getting-started-with-working-remotely/1-0-0-27-direct-messages-in-discord.md`
- `versioned_docs/version-WIP/0_pre-work/2_getting-started-with-working-remotely/1-0-0-28-installing-and-using-vs-code-live-share.md`
- `versioned_docs/version-WIP/0_pre-work/index.md`
- `versioned_docs/version-WIP/diversity-equity-and-inclusion/1_dei-curriculum-overview/making-fidgetech-an-inclusive-place.md`

---

## How WIP and WIP-local Relate to Each Other

| Property | WIP | WIP-local |
|----------|-----|-----------|
| Branched from `main` at | `117b68e` (Jan 8 2026) | `77ef1f6` (Mar 10 2026) |
| Commits behind `main` | 16 commits | 0 (up to date) |
| Unique commits not in `main` | 4 | 4 (same content) |
| SHAs match `WIP`? | — | No (rebased) |

`WIP-local` is a **rebase of `WIP` onto the current `main`**. The 16 commits present in `main` but missing from `WIP` include:

```
5d525e8  add styling to jsx titles
3a2d5e1  create curriculum fork: v1.2 -> v1.3
81647ee  update class components usage to useState
2172f5e  Merge pull request #6 from fidgetech/v1.3
9ba86a0  fix sidebar for v1.3
0896148  remove redux section from v1.3
90d1ca6  Merge pull request #7 from fidgetech/v1.3
f80fc74  minor updates to v1.3 react fundamentals lessons
831a955  Merge pull request #8 from fidgetech/v1.3
cf4f522  further cleanup react fundamentals lessons
80253ea  Merge pull request #9 from fidgetech/v1.3
0f24491  minor update to react fundamentals objectives
d66af58  update react with nosql section
eb83289  minor react wording updates
5d68913  fix title/id mismatches on c# section; update 404 page
77ef1f6  Version-WIP: renumber react sections; update FP section (#16)
```

## Recommendation

To merge the prework cleanup work into `main`, use **`WIP-local`** — it is already rebased on top of `main` and will merge cleanly. The `WIP` branch would require rebasing before it could be merged without conflicts.
