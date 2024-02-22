// script to fetch track (from multiple GitHub repos)

import fs from 'fs-extra';
import path from "path";
import { fetchCourse } from "./fetchCourse.mjs";
import { generateTopLevelSidebar } from "./generateSidebar.mjs";
import config from "./config.mjs";
import { clearDirectories } from "./utils.mjs";
import { fetchFile } from './fetchGithubContent.mjs';

export async function fetchTrack({ track }) {
  const trackRootPath = path.join(config.root_path, 'tracks', track.name);
  const trackDocsPath = path.join(trackRootPath, 'docs');
  clearDirectories([trackRootPath, trackDocsPath]);

  let docsCoursePaths = [];
  for (const { repo, directory, filename, root } of track.course_layouts) {
    docsCoursePaths.push(root ? trackDocsPath : path.join(trackDocsPath, filename.replace('.yaml', '')));
    await fetchCourse({
      trackDocsPath,
      repo,
      directory,
      filename,
      root
    });
  }

  fetchFile({ repo: config.shared_files_repo, filename: 'tracks.md', outDir: trackDocsPath });
  fetchFile({ repo: config.student_handbook_repo, filename: 'student-handbook.md', outDir: trackDocsPath });  
  // fetchFile({ repo: config.shared_files_repo, directory: track.name, filename: 'docusaurus.config.js', outDir: trackRootPath });
  // if (track.name !== 'workshops') {
    //     fetchFile({ repo: config.shared_files_repo, directory: track.name, filename: 'courses.md', outDir: trackDocsPath });
  //   }
  fetchFile({ repo: config.shared_files_repo, filename: 'docusaurus.config.js', outDir: trackRootPath });
  fetchFile({ repo: config.shared_files_repo, filename: 'courses.md', outDir: trackDocsPath });

  fs.copyFileSync(path.join(config.root_path, 'package.json'), path.join(trackRootPath, 'package.json'));
  fs.copyFileSync(path.join(config.root_path, 'package-lock.json'), path.join(trackRootPath, 'package-lock.json'));
  fs.copySync(path.join(config.root_path, 'src'), path.join(trackRootPath, 'src'));
  fs.copySync(path.join(config.root_path, 'static'), path.join(trackRootPath, 'static'));
  // fs.writeFileSync(path.join(trackRootPath, 'static', 'CNAME'), `${track.name}.learnhowtoprogram.com`); // gh-pages custom domain
  fs.writeFileSync(path.join(trackRootPath, 'static', 'CNAME'), 'fidgetechcode.org'); // gh-pages custom domain

  generateTopLevelSidebar({ trackRootPath, docsCoursePaths });
}
