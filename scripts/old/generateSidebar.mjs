// generate nested Docusaurus sidebar for a section

import { writeFileSync } from 'fs';
import path from 'path';
import lodash from 'lodash';
import matter from 'gray-matter';
import { titleToId } from './utils.mjs';
import config from './config.mjs';

export function generateSectionSidebar({ title, number, lessons, show_weeks_and_days, outDir }) {
  const sidebarPath = path.join(outDir, 'sidebar.js');
  let [courseId, sectionId] = outDir.split('/').slice(-2);
  if (courseId === 'docs') courseId = '';
  sectionId = sectionId.replace(/^[^a-zA-Z]+/, ''); // remove leading non-alphabetic characters

  let label, items = '';
  if(show_weeks_and_days) {
    const groupedLessons = Object.values(lodash.groupBy(lessons, lesson => lesson.day));
    const days = groupedLessons.map(lessonGroup => ({
      type: 'category',
      label: lessonGroup[0].day.toUpperCase(),
      items: lessonGroup.map(lesson => `${path.join(courseId, sectionId, matter(lesson.frontMatter).data.id)}`)
    }));
    label = config.show_week_numbers ? `[wk${number}] ${title}` : title;
    items = days;
  } else {
    label = `${title}`;
    items = lessons.map(lesson => `${path.join(courseId, sectionId, matter(lesson.frontMatter).data.id)}`);
  }

  const sidebar = {
    type: 'category',
    label,
    items
  }
  const fileContent = `module.exports = ${JSON.stringify(sidebar, null, 2)};`;
  writeFileSync(sidebarPath, fileContent);
}

export function generateCourseSidebar({ title, sectionDirectories, docsCoursePath }) {
  const sidebarPath = path.join(docsCoursePath, 'sidebar.js');
  let [courseId] = docsCoursePath.split('/').slice(-1);
  if (courseId === 'docs') courseId = '';
  const requires = sectionDirectories.map(sectionDirectory => `require('${path.join(docsCoursePath, sectionDirectory, 'sidebar.js')}')`);

  const fileContent = `module.exports = [
  '${path.join(courseId, 'index')}',
  ${requires.join(',\n  ')}
];\n`;

  writeFileSync(sidebarPath, fileContent);
}

export function generateTopLevelSidebar({ trackRootPath, docsCoursePaths }) {
  const sidebarPath = path.join(trackRootPath, 'sidebars.js');
  const requires = docsCoursePaths.map(coursePath => `'${titleToId(coursePath.split('/').slice(-1)[0])}': require('${path.join(coursePath, 'sidebar.js')}')`);

  const fileContent = `module.exports = {
  ${requires.join(',\n  ')}
};\n`;

  writeFileSync(sidebarPath, fileContent);
}
