// add id and pagination to frontmatter based on alphabetical order of section lessons

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import matter from 'gray-matter';
import { writeMarkdown, isFirstTwoLettersFollowedByDash } from './utils.js';
const docsPath = join(process.cwd().replace(/(scripts|docs)/, ''), 'docs');

function processMarkdownFile({ filePath, isFirstFile, isLastFile }) {
  const fileContent = readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent, { preserve: true });
  const filename = filePath.split('/').pop();

  if (isFirstTwoLettersFollowedByDash(filename)) {
    data.id = filename.substring(3).replace('.md', '');;
    data.hide_table_of_contents = true;
    if (isFirstFile) data.paginationPrev = null;
    if (isLastFile) data.paginationNext = null;

    writeMarkdown({ filePath, content, data });
  }
}

function processAllMarkdownFiles(directory) {
  const entries = readdirSync(directory).sort();
  const markdownFiles = entries.filter(file => extname(file) === '.md');

  markdownFiles.forEach((file, index) => {
    const filePath = join(directory, file);
    const isFirstFile = index === 0;
    const isLastFile = index === markdownFiles.length - 1;
    processMarkdownFile({ filePath, isFirstFile, isLastFile });
  });

  entries.forEach(entry => {
    const entryPath = join(directory, entry);
    if (statSync(entryPath).isDirectory()) {
      processAllMarkdownFiles(entryPath);
    }
  });
}

processAllMarkdownFiles(docsPath);
console.log('Added id and pagination to frontmatter based on lesson filenames and alphabetical order');
