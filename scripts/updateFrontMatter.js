import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, extname } from 'path';
import matter from 'gray-matter';

const DOCS_DIR = '/Users/ash/fidgetech/docusaurus/docs/';

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

function writeMarkdown({ filePath, content, data }) {
  const frontMatterContent = matter.stringify(content, data, { lineWidth: -1 });
  const updatedFrontMatterContent = frontMatterContent.replace(/\\U0001F4D3/g, '📓');
  writeFileSync(filePath, updatedFrontMatterContent);
}

processAllMarkdownFiles(DOCS_DIR);

function isFirstTwoLettersFollowedByDash(str) {
  return /^[A-Za-z]{2}-/.test(str);
}
