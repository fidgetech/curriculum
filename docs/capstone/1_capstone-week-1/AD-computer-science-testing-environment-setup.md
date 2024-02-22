---
title: "📓 Computer Science Testing Environment Setup"
day: weekend
---

Many of our computer science lessons involve building small logic-based applications to try out new concepts. These applications will not have a UI. Instead, we will use a test-driven environment with JavaScript to build out these applications.

We'll use a very basic setup for testing. We recommend creating a repo that uses the basic structure below. Then you can reuse the files in the repo for any computer science lessons that use TDD. This basic testing setup is also very useful for when you want to write, experiment with, and test code on your own.

Each TDD project will have the following structure:

```
__tests__
src
.babelrc
package.json
```

We do not need webpack — we just need enough of an environment to write and run tests.

Here's the `package.json` file:

<div class="filename">package.json</div>

```json
{
  "name": "name-of-project-here",
  "version": "1.0.0",
  "description": "Description of project",
  "scripts": {
    "test": "jest --coverage"
  },
  "devDependencies": {
    "@babel/core": "^7.6.4",
    "@babel/plugin-transform-modules-commonjs": "^7.6.0",
    "jest": "^24.9.0"
  }
}
```

As we can see, it's very pared down — all we need is Jest and Babel. A quick reminder: Babel is necessary for Jest to recognize ES6 import and export statements. Since we only need to test our code and there's no need for a web implementation, we don't need a module bundler like webpack. Obviously, you'll want to update the `"name"` and `"description"` of the project as needed.

Don't forget to run `npm install` after adding `package.json`.

Here's the `.babelrc` file:

<div class="filename">.babelrc</div>

```json
{
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-modules-commonjs"]
    }
  }
}
```

This is all we need to get started!
