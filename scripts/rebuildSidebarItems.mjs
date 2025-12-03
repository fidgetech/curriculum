import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const DRY_RUN = false;

// Find the actual directory by checking for prefixed versions
function findDirectory(pathFromSidebar) {
  const parts = pathFromSidebar.split('/');
  let currentPath = './docs';
  
  for (const part of parts) {
    const entries = readdirSync(currentPath);
    
    // Look for exact match first
    if (entries.includes(part)) {
      currentPath = join(currentPath, part);
      continue;
    }
    
    // Look for prefixed version (e.g., "0_pre-work" matches "pre-work")
    const prefixed = entries.find(entry => {
      // Match pattern: optional-number_rest-of-name
      const match = entry.match(/^(\d+_)?(.+)$/);
      return match && match[2] === part;
    });
    
    if (prefixed) {
      currentPath = join(currentPath, prefixed);
    } else {
      return null; // Directory not found
    }
  }
  
  return currentPath;
}

function getMarkdownFiles(dir) {
  if (!dir || !statSync(dir).isDirectory()) {
    return [];
  }
  
  return readdirSync(dir)
    .filter(file => file.endsWith('.md'))
    .sort()
    .map(file => file.replace('.md', ''));
}

function rebuildCategoryItems(category) {
  if (typeof category === 'string') {
    // It's just a string reference like "pre-work/index"
    return category;
  }
  
  if (category.type === 'category' && Array.isArray(category.items) && category.items.length > 0) {
    // Get the first item to determine the directory
    const firstItem = category.items.find(item => typeof item === 'string');
    
    if (firstItem) {
      // Extract directory path from item (remove the last segment which is the filename)
      const parts = firstItem.split('/');
      const dirPath = parts.slice(0, -1).join('/');
      
      // Find the actual filesystem directory
      const actualDir = findDirectory(dirPath);
      
      if (actualDir) {
        const files = getMarkdownFiles(actualDir);
        
        // Rebuild items array with the same path prefix
        category.items = files.map(file => `${dirPath}/${file}`);
        
        console.log(`Category: ${category.label}`);
        console.log(`  Sidebar path: ${dirPath}`);
        console.log(`  Filesystem: ${actualDir}`);
        console.log(`  Found ${files.length} files`);
        console.log();
      } else {
        console.log(`⚠️  Category: ${category.label}`);
        console.log(`  Could not find directory for: ${dirPath}`);
        console.log();
      }
    }
    
    // Recursively process nested categories
    category.items = category.items.map(item => 
      typeof item === 'object' ? rebuildCategoryItems(item) : item
    );
  }
  
  return category;
}

function rebuildSidebar() {
  const sidebarPath = './sidebars.json';
  const sidebar = JSON.parse(readFileSync(sidebarPath, 'utf8'));
  
  console.log('Rebuilding sidebar items...\n');
  
  // Process each top-level section
  for (const [sectionKey, sectionValue] of Object.entries(sidebar)) {
    console.log(`=== Section: ${sectionKey} ===\n`);
    
    if (Array.isArray(sectionValue)) {
      sidebar[sectionKey] = sectionValue.map(item => 
        rebuildCategoryItems(item)
      );
    }
    
    console.log();
  }
  
  if (DRY_RUN) {
    console.log('=== DRY RUN ===\n');
    for (const [sectionKey, sectionValue] of Object.entries(sidebar)) {
      console.log(`Section: ${sectionKey}`);
      console.log(JSON.stringify(sectionValue, null, 2));
      console.log();
    }
  } else {
    writeFileSync(sidebarPath, JSON.stringify(sidebar, null, 2) + '\n');
    console.log('✓ sidebars.json updated!');
  }
}

console.log(DRY_RUN ? '=== DRY RUN ===\n' : '=== UPDATING SIDEBARS ===\n');
rebuildSidebar();
console.log(DRY_RUN ? '\nSet DRY_RUN = false to apply changes.' : '');
