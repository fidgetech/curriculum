import { writeFileSync } from 'fs';
import matter from 'gray-matter';

export function isFirstTwoLettersFollowedByDash(str) {
  return /^[A-Za-z]{2}-/.test(str);
}

export function writeMarkdown({ filePath, content, data }) {
  const frontMatterContent = matter.stringify(content, data, { lineWidth: -1 });
  const updatedFrontMatterContent = frontMatterContent.replace(/\\U0001F4D3/g, '📓');
  writeFileSync(filePath, updatedFrontMatterContent);
}
