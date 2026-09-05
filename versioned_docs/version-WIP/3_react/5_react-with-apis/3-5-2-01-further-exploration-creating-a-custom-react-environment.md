---
title: "📓 3.5.2.1 Further Exploration: Creating a Custom React Environment"
day: tuesday
id: 3-5-2-1-further-exploration-creating-a-custom-react-environment
hide_table_of_contents: true
---

When we scaffolded our first React project, Vite handed us a complete development environment in a single command. We got a dev server with instant updates, TypeScript support, JSX compilation, CSS Modules, and an optimized production build, all without writing a line of configuration ourselves.

Back in that lesson, we listed one file and then deliberately moved past it: `vite.config.ts`. That file is what this lesson is about. Vite's build configuration isn't buried inside a dependency, and there's no step where we have to unlock it or convert our project to get at it. It's an ordinary TypeScript file sitting in the root of our project, and we can open it and edit it whenever we like. The only reason we've left it alone so far is that Vite's defaults cover most applications well, not that the file is off limits.

This lesson is a tour of what lives in that file, what the plugin ecosystem around it can do, and when reaching for configuration is actually the right call.

### What's Already in vite.config.ts

Here's the entire file that Vite's `react-ts` template generates:

```ts title="vite.config.ts"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

That's it. Two lines of actual configuration. There are two pieces worth understanding:

* `defineConfig()` is a helper that exists purely for our benefit as TypeScript developers. It doesn't change how Vite behaves. It tells TypeScript what shape the configuration object is supposed to have, so our editor can autocomplete option names and flag typos before we ever run a build.

* `plugins: [react()]` is doing all the heavy lifting. This single plugin is why our `.tsx` files compile, why JSX works without importing React, and why editing a component updates the browser without losing our application's state.

Everything else Vite does for us is a default. The full list of options we could add lives in the [Vite config reference](https://vite.dev/config/).

### Path Aliases

One of the most common customizations is also one of the smallest. As an application grows and components get nested into folders, relative imports start to sprawl:

```ts
import { type TicketData } from '../../../types';
```

That path is fragile. If we move the file, every `../` has to be recounted. We can define an **alias** so that one prefix always points at our `src` directory:

```ts title="vite.config.ts"
import react from '@vitejs/plugin-react'
// highlight-next-line
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  // highlight-start
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // highlight-end
})
```

Now that same import becomes the following, from anywhere in the project:

```ts
import { type TicketData } from '@/types';
```

There's an important catch here, and it's instructive. Vite resolves that alias when it bundles our code, but TypeScript does its own separate module resolution when it type checks. If we only tell Vite about the alias, our application will run while our editor reports that it can't find the module. We have to tell TypeScript too, in `tsconfig.app.json`:

```json title="tsconfig.app.json"
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

The lesson generalizes: configuring our build tool and configuring TypeScript are two different jobs, and a change to one often needs a matching change to the other.

### Configuring the Dev Server

The `server` option controls the development server we start with `npm run dev`. We can pin the port, open a browser automatically, or set up a proxy:

```ts title="vite.config.ts"
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://example-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
```

The `proxy` option is especially relevant to the work we've been doing in this section. When our React application fetches from a third-party API, the browser sometimes refuses the request because the API is on a different origin. A proxy sidesteps that: our code requests `/api/articles` from our own dev server, and the dev server forwards the request along on our behalf, so as far as the browser is concerned there's only ever one origin involved.

Note that this proxy only exists in development. It's part of the dev server, not part of our production bundle, so a deployed application needs a different solution for the same problem. See [Server Options](https://vite.dev/config/server-options.html) for the rest of what's available here.

### Configuring the Build

The `build` option and the top-level `base` option shape what `npm run build` produces:

```ts title="vite.config.ts"
export default defineConfig({
  plugins: [react()],
  base: '/my-project-name/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
```

`base` is the one you're most likely to actually need. By default Vite assumes our application will be served from the root of a domain, so it writes asset paths like `/assets/index-abc123.js` into the built HTML. If we deploy to a subpath instead, as GitHub Pages does when it serves a project at _username.github.io/my-project-name_, those absolute paths point at nothing and we get a blank page with 404s in the console. Setting `base` tells Vite to prefix asset URLs correctly. This is a genuinely common source of confusion when a project works locally and then appears broken once deployed.

`sourcemap: true` makes the production build emit source maps, so a stack trace from the minified bundle can be traced back to our original TypeScript. See [Build Options](https://vite.dev/config/build-options.html) for the full set, and [Deploying a Static Site](https://vite.dev/guide/static-deploy) for host-specific notes.

### The Plugin Ecosystem

`@vitejs/plugin-react` is our first plugin, but the plugin system is where Vite's real extensibility lives. A plugin hooks into points in the build process and can transform files, inject code, add virtual modules, or generate extra output.

The design decision that makes this ecosystem large is that Vite's plugin interface is an extension of Rollup's, which means a great many existing Rollup plugins work in a Vite project without modification. Plugins commonly handle things like:

* Supporting older browsers that our default build target doesn't cover
* Importing file types Vite doesn't handle natively and turning them into modules we can use in components
* Visualizing what ended up in our bundle and how large each piece is
* Adding progressive web app features such as a service worker and a manifest
* Running a linter or type checker as part of the dev server so errors surface in the terminal

Rather than name specific packages that may have changed by the time you read this, start from the [Plugins](https://vite.dev/plugins/) page in the Vite documentation, which lists the officially maintained plugins, and the community-curated [awesome-vite](https://github.com/vitejs/awesome-vite) list. If you get curious about how they work internally, [Plugin API](https://vite.dev/guide/api-plugin) documents the hooks a plugin can implement, and writing a small one of your own is a genuinely good way to understand what a bundler does.

### When to Reach for Configuration, and When Not To

It's worth being deliberate here, because every option we add to a config file is one more thing to maintain and one more thing a teammate has to understand before they can reason about the build.

Good reasons to change the configuration:

* We have a concrete constraint the defaults don't meet, such as deploying to a subpath, proxying around a cross-origin API in development, or emitting source maps for production debugging.
* Relative imports have grown deep enough that an alias meaningfully improves the codebase.
* We need to work with a file type or platform target that Vite doesn't handle out of the box.

Reasons that tend not to hold up:

* A tutorial's config file had an option in it, so we copied it over without knowing what it does.
* We're optimizing a build that hasn't demonstrated a problem yet.
* We assume a "real" project must have a large config file. Plenty of production applications ship with a `vite.config.ts` barely longer than the template's.

The healthiest default is to start from Vite's defaults, add configuration in response to specific problems, and be able to explain every line that's in the file.

### Exploring Further

If you'd like to dig into this, here's a reasonable order to work through. You don't have to do all of it. Even the first step or two will leave you meaningfully more comfortable with your own tooling.

1. Open `vite.config.ts` in a project you've already built and read through the [config reference](https://vite.dev/config/) alongside it. You're not looking to memorize options, just to build a mental map of what's configurable.

2. Add a path alias, update `tsconfig.app.json` to match, and convert a handful of deep relative imports to use it. Confirm both that the application still runs and that your editor resolves the new paths.

3. Set `base` to a subpath, run `npm run build`, and open the generated `dist/index.html`. Look at how the asset URLs changed. This makes the deployment problem described above concrete.

4. Browse the official plugin list and awesome-vite. Pick one plugin that sounds useful for a project you're working on, read its README, and try adding it.

5. If you want to go further, read the Plugin API documentation and write a small plugin that does something simple, such as logging every file it transforms.

Understanding your build tool is a real job skill. Teams do customize their configurations, and being the person who can read a `vite.config.ts` and explain why each option is there, or confidently say that an option isn't needed, is genuinely valuable on a development team.
