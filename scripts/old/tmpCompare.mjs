import path from 'path';
import fs from 'fs/promises';
import { diffLines } from 'diff';
import chalk from 'chalk';
import readline from 'readline';

const courses = {
  'fidgetech-1-introduction-to-programming': [
    'fidgetech-1-introduction-to-programming.yaml',
    'ft_0_1-0-getting-started-at-epicodus.yaml',
    'ft_0_1-0-getting-started-with-intro-to-programming.yaml',
    'ft_0_1-0-getting-started-with-working-remotely.yaml',
    'ft_1_1-1-git-html-and-css.yaml',
    'ft_2_1-2-javascript-and-web-browsers.yaml',
    'ft_3_1-3-arrays-looping.yaml',
  ],
  'fidgetech-2-intermediate-javascript': [
    'fidgetech-2-intermediate-javascript.yaml',
    'ft_0_2-0-getting-started-with-javascript.yaml',
    'ft_1_2-1-object-oriented-javascript.yaml',
    'ft_2_2-2-test-driven-development-and-environments-with-javascript.yaml',
    'ft_3_2-3-asynchrony-and-apis.yaml',
    'ft_4_2-4-team-week.yaml',
  ],
  'fidgetech-3-c-and-net': [
    'fidgetech-3-c-and-net.yaml',
    'ft_0_3-0-lessons-1-5-getting-started-with-c.yaml',
    'ft_0_3-0-lessons-19-31-basic-console-apps.yaml',
    'ft_0_3-0-lessons-32-44-tdd-and-debugging.yaml',
    'ft_0_3-0-lessons-6-18-data-types-and-variables.yaml',
    'ft_1_3-1-test-driven-development-with-c.yaml',
    'ft_2_3-2-basic-web-applications.yaml',
    'ft_3_3-3-database-basics.yaml',
    'ft_4_3-4-many-to-many-relationships.yaml',
    'ft_5_3-5-authentication-with-identity.yaml',
    'ft_6_3-6-building-an-api.yaml',
    'ft_7_3-7-team-project.yaml',
  ],
  'fidgetech-4-react': [
    'fidgetech-4-react.yaml',
    'ft_0_4-0-functional-programming-with-javascript.yaml',
    'ft_1_4-1-react-fundamentals.yaml',
    'ft_2_4-2-react-with-redux.yaml',
    'ft_3_4-3-react-with-nosql.yaml',
    'ft_4_4-4-react-with-apis.yaml',
    'ft_5_4-5-independent-capstone-projects.yaml',
  ]
};

const homeDir = process.env.HOME;
const pathCurriculum = path.join(homeDir, 'curriculum', 'fidgetech');
const pathIncoming = path.join(homeDir, 'lhtp', 'scripts', 'outputs');

const compareLayouts = async () => {
  for (const course in courses) {
    console.log(`\nCOURSE: ${course}`);
    for (const layout of courses[course]) {
      const curriculumFile = path.join(pathCurriculum, course, 'layouts', layout);
      const incomingFile = path.join(pathIncoming, course, 'layouts', layout);
      console.log(`\nLAYOUT FILE: ${layout}\n`)
      await compareFiles(curriculumFile, incomingFile);
      await awaitUserInput();
    }
  }
};

const compareFiles = async (file1, file2) => {
  try {
    const data1 = await fs.readFile(file1, 'utf8');
    const data2 = await fs.readFile(file2, 'utf8');
    const fileDiff = diffLines(data1, data2);
    fileDiff.forEach(part => {
      if (part.added) {
        process.stdout.write(chalk.green(part.value));
      } else if (part.removed) {
        process.stdout.write(chalk.red(part.value));
      } else {
        // process.stdout.write(part.value);
      }
    });
  } catch (err) {
    console.error(`Error comparing files: ${err}`);
  }
};

const awaitUserInput = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('Press Enter to continue...', () => {
      rl.close();
      resolve();
    });
  });
}

compareLayouts();
