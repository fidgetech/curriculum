import { writeFileSync } from 'fs';
import matter from 'gray-matter';

export function isFirstTwoLettersFollowedByDash(str) {
  return /^[A-Z]{2}-/.test(str);
}

export function generatePrefix(index) {
  return String.fromCharCode(65 + Math.floor(index / 26)) + String.fromCharCode(65 + index % 26); // Generates AA, AB, AC, ..., ZZ
}

export function titleToId(title) {
  const titleWithoutEmoji = title.replace('📓 ', '').replace('✏️ ', '');
  return titleWithoutEmoji.replace(/[\s._]/g, '-').replace(/[#:;=?<>()!',/]/g, '').toLowerCase();
}

export function writeMarkdown({ filePath, content, data }) {
  const frontMatterContent = matter.stringify(content, data, { lineWidth: -1 });
  const updatedFrontMatterContent = frontMatterContent.replace(/\\U0001F4D3/g, '📓');
  writeFileSync(filePath, updatedFrontMatterContent);
}
