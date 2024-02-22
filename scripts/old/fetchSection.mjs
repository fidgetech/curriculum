// script to go through YAML layout file for a section/week, fetch content from GitHub, write to appropriate directories

import fs from "fs-extra";
import path from "path";
import lodash from "lodash";
import { fetchDocusaurusDocs } from "./fetchGithubContent.mjs";
import { generateFrontMatter } from "./generateFrontMatter.mjs";
import { generateSectionSidebar } from "./generateSidebar.mjs";

export async function fetchSection({ sectionLayout, docsCoursePath, show_weeks_and_days }) {
  const { section, order, directory, repo, lessons } = sectionLayout;
  const outDir = path.join(docsCoursePath, directory);
  console.log('Fetching section ' + section + ' to ' + outDir);

  const updatedLessons = addLessonMetadata({
    lessons,
    repo,
    directory
  });

  const fetchedLessons = await fetchLessons({
    lessons: updatedLessons
  });

  const deduplicatedLessons = renameDuplicateLessons({
    lessons: fetchedLessons
  });

  const lessonsWithLinksFixed = fixLinks({
    lessons: deduplicatedLessons,
    docsCoursePath
  });

  const lessonsWithFrontMatter = addLessonFrontMatter({
    lessons: lessonsWithLinksFixed,
    show_weeks_and_days
  });

  // save lessons
  for (const { filename, content, frontMatter } of lessonsWithFrontMatter) {
    const mdx = frontMatter + content;
    const filepath = path.join(outDir, filename.replaceAll('_', '-'));
    fs.writeFileSync(filepath, mdx);
  }

  generateSectionSidebar({
    title: section,
    number: order,
    lessons: lessonsWithFrontMatter,
    show_weeks_and_days,
    repo,
    outDir
  });
}

const addLessonMetadata = ({ lessons, repo, directory }) => {
  return lessons.map((lesson, i) => ({
    ...lesson,
    repoFilename: lesson.filename,
    repo: lesson.repo || repo,
    directory: lesson.directory || directory,
    number: i,
    isFirst: i === 0,
    isLast: i === lessons.length - 1
  }));
}

const addLessonFrontMatter = ({ lessons, show_weeks_and_days }) => {
  const dayCount = { "weekend": 0, "sunday": 0, "monday": 0, "tuesday": 0, "wednesday": 0, "thursday": 0, "friday": 0 };
  return lessons.map(lesson => ({
    ...lesson,
    frontMatter: generateFrontMatter({
      ...lesson,
      show_weeks_and_days,
      numberDay: nextNumber(dayCount, lesson.day)
    })
  }));
}

const nextNumber = (dayCount, day) => {
  dayCount[day]++
  return dayCount[day];
}

async function fetchLessons({ lessons }) {
  const fetchedLessons = [];
  const groupedLessons = Object.values(lodash.groupBy(lessons, lesson => lesson.repo));
  for (const lessonGroup of groupedLessons) {
    const { repo } = lessonGroup[0];
    const batch = await fetchDocusaurusDocs({ repo, lessons: lessonGroup });
    fetchedLessons.push(...batch);
  }
  return fetchedLessons;
}

function renameDuplicateLessons({ lessons }) {
  const filenameCount = {};
  return lessons.map(({ filename, title, ...lesson }) => {
    const [name, ext] = filename.split('.');
    filenameCount[name] = (filenameCount[name] || 0) + 1;
    const newFilename = filenameCount[name] > 1 ? `${name}_day_${filenameCount[name]}.${ext}` : filename;
    const newTitle = filenameCount[name] > 1 ? `${title} (day ${filenameCount[name]})` : title;
    return {
      filename: newFilename,
      title: newTitle,
      ...lesson
    };
  });
}

function fixLinks({ lessons, docsCoursePath }) {
  if (docsCoursePath.includes('full-time')) {
    return lessons.map(lesson => ({
      ...lesson,
      content: lesson.content.replaceAll('-part-2/', '/')
    }));
  } else {
    return lessons;
  }
}
