// give lesson Fidgetech numbers

import { existsSync, readFileSync, readdirSync, writeFileSync, statSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
const docsPath = join(process.cwd().replace(/(scripts|docs)/, ''), 'docs');
const dayMapping = { 'weekend': 0, 'monday': 1,'tuesday': 2, 'wednesday': 3, 'thursday': 4, 'friday': 5, 'saturday': 6 };

const coursePath = join(docsPath, 'react');
const courseNumber = 4;

function generateSidebarForDirectory(directoryPath) {
  const categoryFilePath = join(directoryPath, 'category.json');
  if (existsSync(categoryFilePath)) { // if is a section directory
    const sectionNumber = parseInt(directoryPath.split('/').pop()[0]);
    if (isNaN(sectionNumber)) {
      console.error('Invalid section number', directoryPath);
      process.exit(1);
    }
    console.log('\nSection', sectionNumber);
    const filenames = readdirSync(directoryPath).filter(fileName => fileName.endsWith('.md')).sort();
    let segmentCounter = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    for (const filename of filenames) {
      const filePath = join(directoryPath, filename);
      const fileContent = readFileSync(filePath, 'utf8');
      const { content, data } = matter(fileContent, { preserve: true });
      const segment = dayMapping[data.day];
      segmentCounter[segment]++;
      const lessonNumber = segmentCounter[segment];
      const emoji = data.title.includes('✏️') ? '✏️' : '📓';
      const title = `${emoji} ${courseNumber}.${sectionNumber}.${segment}.${lessonNumber} ${data.title.replace(/(✏️ |📓 )/, '')}`;
      console.log(title);
    }
  }
}

function traverseDirectories(directoryPath) {
  generateSidebarForDirectory(directoryPath);
  const filesAndDirectories = readdirSync(directoryPath);
  filesAndDirectories.forEach(name => {
    const fullPath = join(directoryPath, name);
    if (statSync(fullPath).isDirectory()) {
      traverseDirectories(fullPath);
    }
  });
}

traverseDirectories(coursePath);
