// no longer used
// generate Docusaurus section sidebar.js files based on alphabetical order of section lessons

import { existsSync, readFileSync, readdirSync, writeFileSync, statSync } from 'fs';
import { join } from 'path';
const docsPath = join(process.cwd().replace(/(scripts|docs)/, ''), 'docs');

function generateSidebarForDirectory(directoryPath) {
  const categoryFilePath = join(directoryPath, 'category.json');
  if (existsSync(categoryFilePath)) {
    const categoryFileContent = readFileSync(categoryFilePath);
    const { label, prefix } = JSON.parse(categoryFileContent);

    const items = readdirSync(directoryPath)
      .filter(fileName => fileName.endsWith('.md'))
      .sort()
      .map(fileName => `${prefix}/${fileName.substring(3).replace('.md', '')}`);

    const sidebarContent = {
      type: 'category',
      label: label,
      items: items,
    };

    writeFileSync(
      join(directoryPath, 'sidebar.js'),
      `module.exports = ${JSON.stringify(sidebarContent, null, 2)};`
    );
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

traverseDirectories(docsPath);
console.log('Generated sidebar.js files based on alphabetical order of section lessons');
