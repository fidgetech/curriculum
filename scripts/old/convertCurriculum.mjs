import jsYaml from 'js-yaml';
import fs from 'fs-extra';
import { join } from 'path';
import { fetchLayoutFile, fetchFileContent } from "./fetchGithubContent.mjs";
import { parseGithubPath, timeout, canWriteFile } from "./utils.mjs";

const repoMappings = {
  'fidgetech-1-introduction-to-programming': 'fidgetech-1-introduction-to-programming',
  'fidgetech-2-intermediate-javascript': 'fidgetech-2-intermediate-javascript',
  'fidgetech-3-c-and-net': 'fidgetech-3-c-and-net',
  'fidgetech-4-react': 'fidgetech-4-react',
  'fidgetech-3-c-and-net-5-old.yaml': 'fidgetech-3-c-and-net-5-old',
  'prework': 'pre-work-full-stack',
  'introduction-to-programming': 'intro-full-stack',
  'introduction-to-programming-part-time': 'intro-full-stack',
  'intermediate-javascript': 'javascript-full-stack',
  'intermediate-javascript-part-time': 'javascript-full-stack',
  'react': 'react-full-stack',
  'react-part-time': 'react-full-stack',
  'c-and-net': 'c-sharp-full-stack',
  'c-and-net-part-time': 'c-sharp-full-stack',
  'workshops': 'workshops',
  'diversity-equity-and-inclusion': 'DEI-full-stack',
  'computer-science': 'computer-science',
  // 'soft-skills-and-job-prep-curriculum': 'career-services-full-stack',
  // 'admissions-materials': 'career-services-full-stack',
  // 'dei-curriculum': 'DEI-full-stack',
  // 'intro-workshop': 'workshops',
  // 'ucode-workshop': 'workshops',
  // 'intro-curriculum': 'intro-full-stack',
  // 'prework-curriculum': 'pre-work-full-stack',
  // 'js-curriculum': 'javascript-full-stack',
  // 'react-curriculum': 'react-full-stack',
  // 'c-sharp-curriculum': 'c-sharp-full-stack',
  // 'computer-science-curriculum': 'computer-science',
}

// keep lessons in these repos rather than moving them to section repo
const maintainRepoMappings = {
  // 'soft-skills-and-job-prep-curriculum': 'career-services-full-stack',
  // 'admissions-materials': 'pre-work-full-stack',
  // 'dei-curriculum': 'DEI-full-stack',
  // 'shared-curriculum': 'shared-full-stack',
  // 'prework-curriculum': 'pre-work-full-stack',
}

const courseFilenames = [
  // 'prework.yaml',
  // 'introduction-to-programming.yaml',
  // 'introduction-to-programming-part-time.yaml',
  // 'intermediate-javascript.yaml',
  // 'intermediate-javascript-part-time.yaml',
  // 'react.yaml',
  // 'react-part-time.yaml',
  // 'c-and-net.yaml',
  // 'c-and-net-part-time.yaml',
  // 'workshops.yaml',
  // 'diversity-equity-and-inclusion.yaml',
  // 'internship-and-job-search.yaml',
  // 'journaling-curriculum.yaml',
  // 'computer-science.yaml',
  'fidgetech-1-introduction-to-programming.yaml',
  'fidgetech-2-intermediate-javascript.yaml',
  'fidgetech-3-c-and-net.yaml',
  'fidgetech-4-react.yaml',
  'fidgetech-3-c-and-net-5-old.yaml',
];

for (const filename of courseFilenames) {
  console.log(`\n*********************************\nProcessing course ${filename}...\n\n`)
  // load course layout data
  const inputPath = join('scripts', 'inputs', filename);
  const courseData = jsYaml.load(fs.readFileSync(inputPath, 'utf8'));
  const {title: courseTitle, slug: courseSlug, show_weeks_and_days: courseShowWeeksAndDays, sections} = courseData;

  // determine output directory for course
  const courseOutRepo = repoMappings[courseSlug];
  const courseOutDir = join('scripts', 'outputs', courseOutRepo);
  const layoutsOutDir = join(courseOutDir, 'layouts');

  // reformat and save course layout file
  const courseLayoutContent = jsYaml.dump({
    title: courseTitle,
    show_weeks_and_days: courseShowWeeksAndDays,
    homepage: 'index.md',
    sections: sections.map(section => sectionFilename({ courseSlug, sectionSlug: section.slug, week: section.week })),
  }, { lineWidth: -1 });
  const courseLayoutOutputPath = join(layoutsOutDir, courseSlug + '.yaml');
  fs.outputFileSync(courseLayoutOutputPath, courseLayoutContent);

  // handle sections
  for (const { title, slug, number, week, path } of sections) {
    // load section layout data
    const { repo, directory, filename } = parseGithubPath(path);
    const sectionRepo = repo;
    const sectionSlug = slug;
    const sectionDirectory = directory;
    await timeout();
    const sectionLayoutFile = await fetchLayoutFile({ repo, directory, filename, org: 'epicodus-classroom' });
    const data = jsYaml.load(fs.readFileSync(sectionLayoutFile, 'utf8'));
    let lessons = data.flatMap(item => {
      return item[':lessons'].map(lesson => {
        const is_exercise = lesson[':filename'].toLowerCase().includes('classwork') || lesson[':filename'].toLowerCase().includes('independent_project');
        let newLesson = {};
        newLesson.title = lesson[':title'];
        newLesson.filename = lesson[':filename'];
        newLesson.day = item[':day'];
        newLesson.type = is_exercise ? 'exercise' : 'lesson';
        if (lesson[':repo']) { newLesson.repo = lesson[':repo']; }
        if (lesson[':directory']) { newLesson.directory = lesson[':directory']; }
        return newLesson;
      });
    });

    // // download lesson files to seed new repos
    for (const lesson of lessons) {
      const { repo=sectionRepo, directory=sectionDirectory, filename } = lesson;
      await timeout();
      const newContent = await fetchFileContent({ repo, directory, filename, org: 'epicodus-classroom' });
      const outDir = maintainRepoMappings[repo] ? join('scripts', 'outputs', maintainRepoMappings[repo]) : courseOutDir;
      const filePath = join(outDir, filename);
      if (await canWriteFile(filePath, newContent)) {
        fs.outputFileSync(filePath, newContent);
      }
    }

    // reformat lessons
    const updatedLessons = lessons.map(lesson => ({
      ...lesson,
      repo: maintainRepoMappings[lesson.repo] || undefined,
      directory: undefined,
    }));

    // reformat and save section layout file
    const sectionLayoutContent = jsYaml.dump({
      section: title,
      // slug: sectionSlug,
      order: number + 1,
      repo: courseOutRepo,
      directory: `${number + 1}_${sectionSlug}`,
      lessons: updatedLessons,
      // week,
    }, { lineWidth: -1 });
    const sectionLayoutOutputPath = join(layoutsOutDir, sectionFilename({ courseSlug, sectionSlug, week }));
    if (await canWriteFile(sectionLayoutOutputPath, sectionLayoutContent)) {
      fs.outputFileSync(sectionLayoutOutputPath, sectionLayoutContent);
    }
  }
}

function sectionFilename({ courseSlug, sectionSlug, week }) {
  const courseType = courseSlug.includes('part-time') ? 'pt' : 'ft';
  return `${courseType}_${week}_${sectionSlug}.yaml`;
}
