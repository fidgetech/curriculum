import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const DRY_RUN = false; // Set to false to actually update files
const UPDATE_TITLES = true; // Set to false to skip title updates (only sync IDs)

function syncTitlesAndIds(dir) {
  const entries = readdirSync(dir);
  
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    
    if (statSync(fullPath).isDirectory()) {
      syncTitlesAndIds(fullPath); // Recursively process directories
    } else if (entry.endsWith('.md')) {
      const expectedId = entry.replace('.md', '');
      
      // Extract numbering from filename: 1-1-0-1 -> 1.1.0.1
      const numberMatch = expectedId.match(/^(\d+-\d+-\d+-\d+)-/);
      
      const fileContent = readFileSync(fullPath, 'utf8');
      const { content, data } = matter(fileContent);
      
      let changed = false;
      
      // Update ID if different
      if (data.id  && data.id !== expectedId) {
        console.log(`${fullPath}`);
        console.log(`  ID:        ${data.id}`);
        console.log(`           → ${expectedId}`);
        
        if (!DRY_RUN) {
          data.id = expectedId;
        }
        changed = true;
      }
      
      // Update title numbering if requested and pattern matches
      if (UPDATE_TITLES && numberMatch && data.title) {
        const fileNumbering = numberMatch[1].replace(/-/g, '.'); // 1-1-0-1 -> 1.1.0.1
        
        // Match title pattern: emoji + space + numbers + space + rest
        const titleMatch = data.title.match(/^(📓|✏️)\s+(\d+\.\d+\.\d+\.\d+)\s+(.+)$/);
        
        if (titleMatch) {
          const [, emoji, currentNumbering, titleRest] = titleMatch;
          
          if (currentNumbering !== fileNumbering) {
            const newTitle = `${emoji} ${fileNumbering} ${titleRest}`;
            
            if (!changed) {
              console.log(`${fullPath}`);
            }
            console.log(`  Title: "${data.title}"`);
            console.log(`       → "${newTitle}"`);
            
            if (!DRY_RUN) {
              data.title = newTitle;
            }
            changed = true;
          }
        }
      }
      
      // Write changes
      if (changed) {
        if (!DRY_RUN) {
          const newContent = matter.stringify(content, data);
          writeFileSync(fullPath, newContent);
          console.log(`  ✓ Updated`);
        }
        console.log();
      }
    }
  }
}

console.log(DRY_RUN ? '=== DRY RUN ===\n' : '=== UPDATING FILES ===\n');
console.log(`UPDATE_TITLES: ${UPDATE_TITLES}\n`);
syncTitlesAndIds('./docs');
console.log(DRY_RUN ? '\nSet DRY_RUN = false to apply changes.' : '\n✓ Complete!');
