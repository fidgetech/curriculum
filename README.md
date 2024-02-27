# Fidgetech Code Curriculum on Docusaurus

This is a Docusaurus 2 project for the Fidgetech Code curriculum.

- All lessons are located in the `docs` folder.
- Lessons must be in alphabetical order.
- Lesson filenames (minus the first 3 characters (e.g. `AA-`) and minus the `.md` extension) are used as slug in URL.
- Ignore `sidebar.js` files in the section subdirectories; they are overwritten on every build.
- Ignore `old-layout.yaml` files.
- `category.json` file defines the name of the section itself for the sidebar.
- `sidebar.js` files in the _course_ directories (not section subdirectories) define the order of sections for the course.

## Find broken links script

Include in `.env` and as Github secrets:

```sh
SCRIPT_BROKEN_LINKS_SENDGRID_API_KEY
SCRIPT_BROKEN_LINKS_FROM
SCRIPT_BROKEN_LINKS_TO
SCRIPT_BROKEN_LINKS_CC
```

Running locally:

```sh
npm run find-broken-links
```

For Github workflow:

- also set `NODE_ENV` secret to production


## Re-alphabetize files based on sidebar.js

I wrote a little script to make reordering section lessons easier.
To re-alphabetize the markdown files in a directory without having to manually rename files:

- reorder the items in a section `sidebar.js`
- `npm run alphabetize` and follow instructions provided

## Prep, build, deploy via GitHub Actions

Not quite ready yet...

## Prep, build, deploy from development machine

To prep, build, and deploy all tracks to gh-pages, run the `manually-update-lhtp` script. (May have to update values.)

## Prep only (development)

```
npm run prep
```

This will update the front matter and sidebars, based on alphabetical order of filenames.

---

### Installation (development)

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
