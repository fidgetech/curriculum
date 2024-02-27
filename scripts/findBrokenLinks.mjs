// Usage: npm run find-broken-links
// Set variables in .env and as github secrets:
//   - NODE_ENV (production or development)
//   - SCRIPT_BROKEN_LINKS_SENDGRID_API_KEY
//   - SCRIPT_BROKEN_LINKS_FROM
//   - SCRIPT_BROKEN_LINKS_TO
//   - SCRIPT_BROKEN_LINKS_CC (if needed)

import 'dotenv/config';
import { default as axios } from 'axios';
import { promises as fs } from 'fs';
import { join, extname } from 'path';
import { sendEmailWithAttachment } from './nodemailer.mjs';
const docsPath = join(process.cwd(), 'docs');
const logFile = 'fidgetech-broken-links.txt';

const traverseDir = async (dir) => {
  const files = await fs.readdir(dir);
  for (const file of files) {
    const fullPath = join(dir, file);
    const stat = await fs.stat(fullPath);
    if (stat.isDirectory()) {
      await traverseDir(fullPath);
    } else if (stat.isFile() && extname(file) === '.md') {
      const content = await fs.readFile(fullPath, 'utf8');

      const urlMatches = content.match(/\(http[^\)]+\)\)?/g);
      const urls = urlMatches?.map(url => url.slice(1, -1))

      const imgTagRegex = /<img[^>]+src=["'](https:\/\/learnhowtoprogram\.s3\.us-west-2\.amazonaws\.com\/[^\)'"]+)["']/g;
      let imgTagMatches = [];
      let match;
      while ((match = imgTagRegex.exec(content)) !== null) {
        imgTagMatches.push(match[1]);
      }

      const allUrls = [...(urls || []), ...imgTagMatches];

      if (allUrls.length > 0) {
        for (let url of allUrls) {
          url = url.includes(")") && !url.includes("(") ? url.slice(0, -1) : url;
          try {
            await axios.get(url, { timeout: 10000 });
          } catch (error) {
            if (error?.response?.status !== 403) {
              const abridgedPath = fullPath.replace(`${docsPath}`, 'docs');
              const abridgedUrl = url.replace('http://', '').replace('https://', '');
              logToFile(`${abridgedPath} - ${abridgedUrl} - ${error}`);
            }
          }
        }
      }

    }
  }
};

console.log('SCRIPT_BROKEN_LINKS_FROM', process.env.SCRIPT_BROKEN_LINKS_FROM);
await deleteLogFile();
await traverseDir(docsPath);
await distributeLogFile();
deleteLogFile();


// helpers

async function distributeLogFile() {
  if (process.env.NODE_ENV === 'production') {
    await sendEmailWithAttachment(logFile);
  } else {
    console.log(await fs.readFile(logFile, 'utf8'));
  }  
}

async function logToFile(message)  {
  await fs.appendFile(logFile, message + '\n', 'utf8');
}

async function deleteLogFile() {
  await fs.rm(logFile, { force: true });
}
