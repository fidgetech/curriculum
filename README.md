# Fidgetech Code Curriculum

This repository contains the Fidgetech Code curriculum, built with [Docusaurus 2](https://docusaurus.io/).

## Project Structure

### Curriculum Content

- **Location**: All curriculum content is in the `docs/` directory
- **Organization**: Content is organized into courses and sections (e.g., `docs/0_pre-work/`, `docs/introduction-to-programming/`)
- **Sidebar**: Navigation is manually configured in `sidebars.json`

### URLs and Routing

- **URL structure**: Determined by the directory path and the `id` field in each lesson's frontmatter
- **Example**: 
  - File: `docs/0_pre-work/1_getting-started-with-intro-to-programming/AA-1-0-0-14-welcome-to-intro.md`
  - Frontmatter `id`: `1-0-0-14-welcome-to-intro`
  - Resulting URL: `/pre-work/getting-started-with-intro-to-programming/1-0-0-14-welcome-to-intro`

(Note that the URL does not include the directory prefixes e.g. `0_` or `1_`.)

### Curriculum Numbering System

- 1st digit is course number (4 for react, tho will change to 3 in next version)
- 2nd digit is 0 for pre-work, 1 for 1st section after pre-work, etc.
- 3rd digit is segment (based on epicodus day) - pre-work/weekend is 0, monday is 1, etc.
- last digit is sequence of lesson within day

## Configuration

- **Site config**: `docusaurus.config.js`
- **Sidebar structure**: `sidebars.json`
- **Styles**: `src/css/custom.css`
- **Search**: Algolia DocSearch (configured in `docusaurus.config.js`)

## Versioning

This project uses versioned docs:
- **Current version**: v1.2 (default)
- **Previous versions**: v1.1
- Older versions are managed in `docusaurus.config.js`, `versions.json`, `versioned_sidebars.json`, and `versioned_docs/`.

## Updating Curriculum

When adding or modifying lessons:
1. Create/edit markdown files in the appropriate `docs/` subdirectory
2. Ensure frontmatter includes a unique `id` field
3. Update `sidebars.json` to include the new lesson in navigation
4. Test locally with `npm start` before committing

## Installation

Install dependencies:
```bash
npm install
```

## Local Development

Start the development server:
```bash
npm start
```

This opens a browser window at `http://localhost:3000`. Most changes are reflected live without restarting the server.

## Building

Generate static content for production:
```bash
npm run build
```

This creates optimized static files in the `build/` directory, ready for deployment to any static hosting service.

## Deployment

### GitHub Pages

Deploy to the `gh-pages` branch:

**With GitHub Actions:**
Merge to the `main` branch to trigger the `triggered-prep-build-deploy.yml` workflow.

This builds the site and deploys it to GitHub Pages automatically.

---

## Maintenance Scripts

### Find Broken Links

Scans all markdown files for broken external links and images.

**Setup:**

Add these environment variables to `.env` (for local use) and GitHub Secrets (for CI):
```
SCRIPT_BROKEN_LINKS_SENDGRID_API_KEY=your_sendgrid_api_key
SCRIPT_BROKEN_LINKS_FROM=sender@example.com
SCRIPT_BROKEN_LINKS_TO=recipient@example.com
SCRIPT_BROKEN_LINKS_CC=cc@example.com  # optional
```

**Run locally:**
```bash
npm run find-broken-links
```

In production (GitHub Actions), the script emails results to the configured recipients.
