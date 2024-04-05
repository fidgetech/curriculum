import { fetchCourse } from './fetchCourse.mjs';

const repo = 'capstone';
const trackName = 'capstone';
const directory = 'layouts/ft';
const filename = 'capstone.yaml';

const trackDocsPath = `docs/${trackName}`;

async function runFetchCourse() {
  await fetchCourse({
    trackDocsPath,
    repo,
    directory,
    filename,
    root: true
  });
}

runFetchCourse().catch(console.error);
