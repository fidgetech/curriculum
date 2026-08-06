// Usage: npm run check-wip-drift [-- --verbose]
// Reports content drift between docs/ (the current live version) and
// versioned_docs/version-WIP/ (the in-progress future version), so
// backport-worthy fixes and forgotten WIP-only content don't get lost.

import { promises as fs } from 'fs';
import path from 'path';
import { diffLines } from 'diff';
import chalk from 'chalk';

const docsPath = path.join(process.cwd(), 'docs');
const wipPath = path.join(process.cwd(), 'versioned_docs', 'version-WIP');
const verbose = process.argv.includes('--verbose');

// Files expected to differ by design (e.g. version-specific links) - not real drift.
const EXPECTED_DIFFS = new Set(['courses.md']);
const IGNORE_DIRS = new Set(['.vscode']);

async function collectFiles(root, dir = root, out = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (IGNORE_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await collectFiles(root, fullPath, out);
    } else {
      out.push(path.relative(root, fullPath));
    }
  }
  return out;
}

const [docsFiles, wipFiles] = await Promise.all([
  collectFiles(docsPath),
  collectFiles(wipPath),
]);

const docsSet = new Set(docsFiles);
const wipSet = new Set(wipFiles);

const onlyInDocs = docsFiles.filter(f => !wipSet.has(f));
const onlyInWip = wipFiles.filter(f => !docsSet.has(f));
const shared = docsFiles.filter(f => wipSet.has(f) && !EXPECTED_DIFFS.has(f));

const changed = [];
for (const relPath of shared) {
  const [a, b] = await Promise.all([
    fs.readFile(path.join(docsPath, relPath), 'utf8'),
    fs.readFile(path.join(wipPath, relPath), 'utf8'),
  ]);
  if (a !== b) changed.push({ relPath, a, b });
}

console.log(chalk.bold('\nComparing docs/ (live) vs versioned_docs/version-WIP/ (staging)\n'));

if (onlyInDocs.length) {
  console.log(chalk.yellow.bold(`Only in docs/ - not yet ported to WIP (${onlyInDocs.length}):`));
  onlyInDocs.forEach(f => console.log(chalk.yellow(`  ${f}`)));
  console.log();
}

if (onlyInWip.length) {
  console.log(chalk.cyan.bold(`Only in WIP - future-only content, or a forgotten backport (${onlyInWip.length}):`));
  onlyInWip.forEach(f => console.log(chalk.cyan(`  ${f}`)));
  console.log();
}

if (changed.length) {
  console.log(chalk.magenta.bold(`Content differs (${changed.length}):`));
  for (const { relPath, a, b } of changed) {
    console.log(chalk.magenta(`  ${relPath}`));
    if (verbose) {
      diffLines(a, b).forEach(part => {
        if (part.added) process.stdout.write(chalk.green(part.value));
        else if (part.removed) process.stdout.write(chalk.red(part.value));
      });
      console.log();
    }
  }
  console.log();
}

if (!onlyInDocs.length && !onlyInWip.length && !changed.length) {
  console.log(chalk.green('No drift found. docs/ and version-WIP are in sync.\n'));
} else {
  console.log(chalk.dim('Run with --verbose to see line-level diffs for changed files.\n'));
}
