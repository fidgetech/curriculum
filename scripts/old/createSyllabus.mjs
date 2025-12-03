// create syllabus for course

import { existsSync, readFileSync, readdirSync, statSync, unlinkSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
const docsPath = join(process.cwd().replace(/(scripts|docs)/, ''), 'docs');
const dayMapping = { 'weekend': 0, 'monday': 1,'tuesday': 2, 'wednesday': 3, 'thursday': 4, 'friday': 5, 'saturday': 6 };

const coursePath = join(docsPath, 'react');
const courseNumber = 4;

function generateSidebarForDirectory(directoryPath) {
  const categoryFilePath = join(directoryPath, 'category.json');
  if (existsSync(categoryFilePath)) { // if is a section directory
    const categoryFileContent = readFileSync(categoryFilePath);
    const { label, prefix } = JSON.parse(categoryFileContent);
    const sectionNumber = parseInt(directoryPath.split('/').pop()[0]);
    if (isNaN(sectionNumber)) {
      console.error('Invalid section number', directoryPath);
      process.exit(1);
    }
    console.log(`\nSection: ${courseNumber}.${sectionNumber};${label}`);
    const filenames = readdirSync(directoryPath).filter(fileName => fileName.endsWith('.md')).sort();
    let segmentCounter = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    for (const [index, filename] of filenames.entries()) {
      const filePath = join(directoryPath, filename);
      const fileContent = readFileSync(filePath, 'utf8');
      const { content, data } = matter(fileContent, { preserve: true });
      const segment = dayMapping[data.day];
      segmentCounter[segment]++;
      const lessonNumber = segmentCounter[segment];
      const number = `${courseNumber}.${sectionNumber}.${segment}.${lessonNumber}`;
      const title = data.title.replace(/(✏️ |📓 )/, '').replace(`${number} `, '');
      console.log(`Lesson: ${number};${title}`);
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
