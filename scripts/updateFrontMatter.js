import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, extname } from 'path';
import matter from 'gray-matter';

const DOCS_DIR = '/Users/ash/fidgetech/docusaurus/docs/';

function processMarkdownFile({ filePath, isFirstFile, isLastFile }) {
  const fileContent = readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent, { preserve: true });

  const filename = filePath.split('/').pop();
  const id = filename.substring(3).replace('.md', '');

  data.id = id;
  data.hide_table_of_contents = true;
  if (isFirstFile) data.paginationPrev = null;
  if (isLastFile) data.paginationNext = null;

  writeMarkdown({ filePath, content, data });
}

function processAllMarkdownFiles(directory) {
  const files = readdirSync(directory).filter(file => extname(file) === '.md').sort();
  files.forEach((file, index) => {
    const filePath = join(directory, file);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      processAllMarkdownFiles(filePath);
    } else if (extname(filePath) === '.md') {
      const isFirstFile = index === 0;
      const isLastFile = index === files.length - 1;
      processMarkdownFile({ filePath, isFirstFile, isLastFile });
    }
  });
}

function writeMarkdown({ filePath, content, data }) {
  const frontMatterContent = matter.stringify(content, data, { lineWidth: -1 });
  const updatedFrontMatterContent = frontMatterContent.replace(/\\U0001F4D3/g, '📓');
  writeFileSync(filePath, updatedFrontMatterContent);
}

processAllMarkdownFiles(DOCS_DIR);
