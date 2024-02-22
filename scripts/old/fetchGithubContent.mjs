// script to fetch files from private github repo; uses github app authentication
// For Github workflow, set ORG and INSTALLATION_TOKEN env variables
// For local use, set ORG, PRIVATE_KEY, APP_ID, INSTALLATION_ID env variables

import fs from "fs-extra";
import path from "path";
import axios from "axios";
import "dotenv/config";
import { timeout } from "./utils.mjs";
import { getInstallationAccessToken } from "./getInstallationToken.mjs";
import { execSync } from 'child_process';
import config from "./config.mjs";

let githubContentCache = {};

const INSTALLATION_ACCESS_TOKEN = process.env.INSTALLATION_TOKEN || await getInstallationAccessToken();

export async function fetchLayoutFile({ repo, directory, filename, org=config.org }) {
  await fetchFile({
    repo,
    directory,
    filename,
    outDir: config.scratch_directory_path,
    org
  });
  return path.join(config.scratch_directory_path, filename);
}

export async function fetchDocusaurusDocs({ repo, directory='', lessons }) {
  // console.log(`\nFetching ${lessons.length} file(s) from ${repo}/${directory}`);
  const fetchedDocuments = await fetchGithubContent({ repo, directory, documents: lessons });
  return fetchedDocuments;
}

async function fetchGithubContent({ repo, directory='', documents, org=config.org }) {
  const client = axios.create({
    baseURL: `https://api.github.com/repos/${org}/${repo}/contents/${directory}`,
    headers: {
      Accept: "application/vnd.github.raw+json",
      Authorization: `Bearer ${INSTALLATION_ACCESS_TOKEN}`,
    },
  });
  // console.log(`\nRetrieving ${documents.length} file(s) from ${repo}/${directory}`);
  let fetchedDocuments = [];
  for (const doc of documents) {
    const cacheKey = `${org}:${repo}:${directory}:${doc.filename}`;
    if (!githubContentCache[cacheKey]) {
      await timeout(1000);
      const response = await client.get(doc.filename);
      githubContentCache[cacheKey] = response.data;
    }
    fetchedDocuments.push({ ...doc, content: githubContentCache[cacheKey] });
  }
  return fetchedDocuments;
}

export async function fetchFileContent({ repo, directory='', filename, org=config.org }) {
  const [{ content }] = await fetchGithubContent({ repo, directory, documents: [{ filename }], org });
  return content;
}

export async function fetchFile({ repo, directory='', outDir, filename, org=config.org }) {
  const content = await fetchFileContent({ repo, directory, filename, org });
  fs.writeFileSync(path.join(outDir, filename), content);
}

// remove this?
export async function fetchImages({ repo }) {
  const repoUrl = `https://github.com/${config.org}/${repo}`;
  const tempImagesPath = path.join(config.scratch_directory_path, 'temp_images');
  const imagesPath = path.join(config.local_images_path, repo);
  try {
    execSync(`git clone ${repoUrl} ${tempImagesPath}`);
    await fs.ensureDir(imagesPath)
    await fs.copy(path.join(tempImagesPath, config.repo_images_path), imagesPath);
    await fs.remove(tempImagesPath);
    console.log('Images copied successfully.');
  } catch (error) {
    console.error('Error copying images:', error);
  }
}
