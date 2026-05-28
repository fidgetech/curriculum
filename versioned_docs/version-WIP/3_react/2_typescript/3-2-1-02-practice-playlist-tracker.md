---
title: "✏️ 3.2.1.2 Practice: Playlist Tracker"
day: monday
id: 3-2-1-2-practice-playlist-tracker
hide_table_of_contents: true
---

**Goal:** Practice defining types and writing typed functions in a new context. Use what you've learned so far - type aliases, literal union types, typed function signatures, and immutable array operations.

## Warm Up

- What is a union type of string literals, and how does it help prevent bugs?
- What is the difference between a required and an optional property in a TypeScript type?
- Why do we return a new array instead of mutating the original?

## Code

You're building a playlist tracker. Start a fresh TypeScript project (or a new file in your existing one) using these types:

```ts
type Genre = "pop" | "rock" | "jazz" | "classical" | "hip-hop" | "other";

type Song = {
  id: number;
  title: string;
  artist: string;
  durationSeconds: number;
  genre: Genre;
  liked: boolean;
};
```

Write the following typed functions:

1. `addSong(songs: Song[], song: Song): Song[]` - returns a new array with the song added

2. `removeSong(songs: Song[], id: number): Song[]` - returns a new array with that song removed

3. `filterByGenre(songs: Song[], genre: Genre): Song[]` - returns only songs of the given genre

4. `getLiked(songs: Song[]): Song[]` - returns only songs where `liked` is `true`

5. `getTotalDuration(songs: Song[]): number` - returns the total duration of all songs in seconds

Create a few `Song` objects and test each function before moving on.

## Instructor/Peer Code Review

- Are type annotations present on all function parameters and return types?
- Do functions return new arrays rather than modifying the originals?
- Does the project compile with no TypeScript errors (`npx tsc --noEmit`)?
