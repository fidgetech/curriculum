// rename files to be in alphabetical order based on the order in sidebar.js

const { dir } = require('console');
const fs = require('fs');
const path = require('path');
const docsPath = require.main.path.replace('scripts', 'docs');

const updatePath = process.argv[2];
if (!updatePath) {
  console.error('Provide full path to directory you want to re-alphabetize files in, or "all" to re-alphabetize every section.');
  console.error('For example: npm run alphabetize /Users/username/curriculum/docs/course/section/sidebar.js');
  console.error('ALL sections: npm run alphabetize all');
  console.error('');
  process.exit(1);
}

function removePrefixes(dirPath) {
  console.log(`Removing prefixes from files in ${dirPath}...`)
  try {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
      if (file.endsWith('.md') && isFirstTwoLettersFollowedByDash(file)) {
        const oldPath = path.join(dirPath, file);
        const newPath = path.join(dirPath, file.substring(3));
        fs.renameSync(oldPath, newPath);
        console.log(`Removed prefix from ${file}`);
      } else if (file.endsWith('.md')) {
        console.log(`Skipped: ${file}`);
      }
    }
    console.log(`Prefixes removed from files in ${dirPath}\n`);
  } catch (error) {
    console.error('Error renaming files:', error);
  }
};

function renameMarkdownFilesBasedOnSidebar(directory, sidebarPath) {
  let sidebar = require(sidebarPath);
  if (!sidebar.items) return;
  delete require.cache[require.resolve(sidebarPath)];

  removePrefixes(directory);

  console.log(`Adding prefixes for files in ${directory}...`)
  console.log(sidebar.items);
  sidebar.items.forEach((item, index) => {
    const id = item.substring(item.lastIndexOf('/') + 1);
    const markdownFilePath = path.join(directory, `${id}.md`);
    if (fs.existsSync(markdownFilePath)) {
      const prefix = generatePrefix(index);
      const newFilename = `${prefix}-${id}.md`;
      const newFilePath = path.join(directory, newFilename);
      fs.renameSync(markdownFilePath, newFilePath);
      console.log(`${markdownFilePath.replace(`${directory}/`,'')} => ${newFilePath.replace(`${directory}/`,'')}`);
    } else {
      console.error(`! file not found: ${markdownFilePath}`);
    }
  });
  console.log(`Prefixes added for files in ${directory}\n`);
}

function traverseDirectory(directory) {
  const files = fs.readdirSync(directory);
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      const sidebarPath = path.join(filePath, 'sidebar.js');
      if (fs.existsSync(sidebarPath)) {
        renameMarkdownFilesBasedOnSidebar(filePath, sidebarPath);
      }
      traverseDirectory(filePath);
    }
  });
}

if (updatePath === 'all') {
  traverseDirectory(docsPath);
} else {
  const sidebarPath = path.join(updatePath, 'sidebar.js');
  if (!fs.existsSync(sidebarPath)) {
    console.error(`No sidebar.js found in ${updatePath}`);
    process.exit(1);
  }
  renameMarkdownFilesBasedOnSidebar(updatePath, sidebarPath);
}
console.log('Renamed files to be in alphabetical order based on the order in sidebar.js');


// helpers

function isFirstTwoLettersFollowedByDash(str) {
  return /^[A-Z]{2}-/.test(str);
}

function generatePrefix(index) {
  return String.fromCharCode(65 + Math.floor(index / 26)) + String.fromCharCode(65 + index % 26); // Generates AA, AB, AC, ..., ZZ
}