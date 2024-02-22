// script to go through YAML *course* layout file and call fetchSection for each section/week

import fs from "fs-extra";
import path from "path";
import { readYamlFile } from "./utils.mjs";
import { fetchSection } from "./fetchSection.mjs";
import { fetchFile } from "./fetchGithubContent.mjs";
import { fetchLayoutFile } from "./fetchGithubContent.mjs";
import { generateCourseSidebar } from "./generateSidebar.mjs";
import { fetchImages } from "./fetchGithubContent.mjs";
import { titleToId } from "./utils.mjs";
import config from "./config.mjs";

// the below assumes layout files for course and layout files for all sections in the course are in the same repo and directory
export async function fetchCourse({ trackDocsPath, repo, directory, filename, root }) {
  const courseLayoutPath = await fetchLayoutFile({ repo, directory, filename });
  const { title, homepage, show_weeks_and_days, sections } = await readYamlFile(courseLayoutPath);
  const docsCoursePath = root ? trackDocsPath : path.join(trackDocsPath, titleToId(title));

  console.log('FETCHING COURSE ' + title + ' to ' + docsCoursePath);

  const sectionDirectories = [];
  for (const layoutFile of sections) {
    const sectionLayoutFilePath = await fetchLayoutFile({ repo, directory, filename: layoutFile });
    const sectionLayout = await readYamlFile(sectionLayoutFilePath);
    sectionDirectories.push(sectionLayout.directory);
    fs.ensureDirSync(path.join(docsCoursePath, sectionLayout.directory));
    fetchSection({
      sectionLayout,
      docsCoursePath,
      show_weeks_and_days
    });
  }

  generateCourseSidebar({
    title,
    docsCoursePath,
    sectionDirectories
  });

  fetchCourseHomepage({
    homepage,
    repo,
    outDir: docsCoursePath
  });

  if (config.fetch_images) {
    fetchImages({ repo });
  }
}

function fetchCourseHomepage({ homepage, repo, outDir }) {
  fetchFile({
    repo,
    directory: '',
    filename: homepage,
    outDir
  });
}
