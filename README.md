# LHTP 2.0 - Docusaurus

This is a rewrite of LearnHowToProgram ([textbook](https://github.com/epicodus/textbook)) using Docusaurus 2, a React-based static site generator.

## Pulling course docs and images from GitHub

The scripts to pull content from GitHub repos are written to work with a GitHub App.

- [Create a GitHub app](https://docs.github.com/en/apps/creating-github-apps) on the user or organization.
- For repository permissions, set `Contents` as `Read-only`
- Generate a private key for the app, copy its contents into `.env`
- Copy App ID from the overview screen and add to `.env`
- Install the app on the user or organization (all repos permission)
- Copy Installation ID from the URL and add to `.env`

For local development, add the following to `.env`.
For running the Github workflow, set these as Github secrets on this repo.

#### **`.env`**
```
ORG = 'GITHUB_USER_OR_ORG_NAME'
APP_ID = 'GITHUB_APP_ID'
INSTALLATION_ID = 'GITHUB_APP_INSTALLATION_ID'
PRIVATE_KEY = 'GITHUB_APP_PEM_KEY'
```

Update values if needed in `config.mjs` in the scripts folder.

## Fetch, build, deploy via GitHub Actions

Manually run the [fetch-build-deploy-manually](https://github.com/epicodus/lhtp/actions/workflows/fetch-build-deploy-manually.yml) workflow via GitHub actions.
This will fetch, build, and deploy all tracks to the appropriate gh-pages.

## Fetch, build, deploy from development machine

To fetch, build, and deploy all tracks to gh-pages, run the `manually-update-lhtp` script. (May have to update values.)

## Fetch only (development)

Or run the following to fetch docs and prep each track.

```
npm run fetch
```

This will build the docs directory, generate front matter and sidebars. It will also fetch static homepages and images. 
Images are placed in subdirectories of `static/images` named the same as the repo (e.g. `static/images/intro-curriculum`).
The root website is fetched into the root directory's docs folder, while each track is fetched into a subfolder of `tracks`.

---

## Build only (development)

Once the docs are in place in the `docs` folder and the images in `static/images`, you can run Docusaurus itself.
To build the root website, run this from the project root folder. To build each track, run this from the appropriate `tracks` subfolder.

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
