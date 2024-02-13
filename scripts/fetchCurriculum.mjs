// script to fetch entire curriculum (from multiple GitHub repos)

import fs from 'fs-extra';
import path from 'path';
import { clearDirectories, readYamlFile } from "./utils.mjs";
import { fetchTrack } from "./fetchTrack.mjs";
import { fetchLayoutFile, fetchFile } from "./fetchGithubContent.mjs";
import config from "./config.mjs";

const defaultTracks = ['fidgetech'];
const args = process.argv.slice(2);
const tracksToFetch = args.length > 0 ? args : defaultTracks;

async function fetchCurriculum() {
  const curriculumLayoutPath = await fetchLayoutFile({ repo: config.shared_files_repo, filename: config.curriculum_layout_file });
  const { tracks } = await readYamlFile(curriculumLayoutPath);

  for (const track of tracks) {
    if (tracksToFetch.includes(track.name)) {
      console.log(`Fetching ${track.name} track...`);
      await fetchTrack({ track });
    }
  }
  // console.log('Fetching root site...');
  // fetchRootSite();
}

// function fetchRootSite() {
//   fetchFile({ repo: config.shared_files_repo, directory: 'root', filename: 'docusaurus.config.js', outDir: config.root_path });
//   fetchFile({ repo: config.shared_files_repo, directory: 'root', filename: 'site-home.md', outDir: config.local_docs_path });
//   fetchFile({ repo: config.shared_files_repo, filename: 'tracks.md', outDir: config.local_docs_path });
//   fetchFile({ repo: config.student_handbook_repo, filename: 'student-handbook.md', outDir: config.local_docs_path });  
//   fs.writeFileSync(path.join(config.root_path, 'static', 'CNAME'), 'www.learnhowtoprogram.com'); // gh-pages custom domain
//   fs.writeFileSync(path.join(config.root_path, 'sidebars.js'), `module.exports = {};`); // disable sidebar
// }

clearDirectories([
  config.scratch_directory_path,
  config.local_docs_path,
  config.local_images_path,
  config.local_tracks_path
]);
fetchCurriculum();
