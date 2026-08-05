---
title: "📓 3.3.0.4 Setting Up a React Project with Vite"
day: weekend
id: 3-3-0-4-setting-up-a-react-project-with-vite
hide_table_of_contents: true
---

In Intermediate JavaScript, we built our project environments by hand: installing webpack, configuring Babel, and wiring up npm scripts. That was valuable practice, but it's a lot of setup to repeat every time we start a new project. For React, we'll use a tool that handles all of that for us.

## Why Vite

**Vite** is the current standard for scaffolding new React projects. It gives us a fast development server, instant feedback as we edit code, and built-in support for TypeScript right out of the box. Vite handles the bundling and compiling behind the scenes, so we can focus on learning React instead of configuring tooling. We won't need to write a webpack config or set up Babel ourselves.

## Creating the Project

We'll build a project called **help-queue** throughout the React Fundamentals section. Let's scaffold it now. Run the following command in the directory where you keep your projects:

```bash
npm create vite@latest help-queue -- --template react-ts
```

A few things to note about this command:

* `npm create vite@latest` runs Vite's project creation tool, using the latest version.
* `help-queue` is the name of the project (and the directory that will be created).
* The bare `--` separates npm's own arguments from the arguments being passed through to the `create-vite` package. Without it, `--template` might be interpreted as an npm flag rather than reaching Vite.
* `--template react-ts` tells Vite to scaffold a React project that uses TypeScript.

Once the command finishes, move into the new directory and install the dependencies:

```bash
cd help-queue
npm install
```

Then start the development server:

```bash
npm run dev
```

`npm run dev` starts a local development server, typically at _http://localhost:5173_. Open that URL in your browser and you'll see Vite's default starter page. The server watches your files and updates the browser automatically as you make changes, so you can leave it running while you work.

## Project Structure

Open `help-queue` in your code editor and look at the files Vite generated. You don't need to understand every file in depth, but here are some you'll encounter:

### Key files and folders

* **`index.html`**: This is the single HTML page for our application, and it lives at the root of the project (not inside a `public/` folder). It contains a `<div id="root"></div>` where our React app will be rendered, and a `<script>` tag that points to `src/main.tsx`, the entry point for our code.

* **`src/main.tsx`**: The entry point for the application. This is where React mounts itself onto the DOM. We'll look at this file closely in a moment. Note the `.tsx` extension - that `x` indicates the file contains JSX, which we'll cover soon.

* **`src/App.tsx`**: The root component of our application. Vite fills this with some starter content, which we'll replace with our own code.

* **`src/index.css`** and **`src/App.css`**: Two stylesheets the template includes. `index.css` is a global stylesheet that applies to the whole app, while `App.css` is meant to style the `App` component. In React, relying on global stylesheets isn't considered best practice. The recommended approach is CSS Modules, which scope styles to individual components automatically. We'll cover that in a later lesson.

* **`tsconfig.json`**: The TypeScript configuration you've seen before, though Vite splits it across three files. `tsconfig.json` itself is just an orchestrator that references the other two: `tsconfig.app.json` holds the settings for your application code in `src/`, and `tsconfig.node.json` covers `vite.config.ts`. The app-specific options live in `tsconfig.app.json`. One thing the template does *not* set is `strict: true`, so add it yourself in `tsconfig.app.json` under `compilerOptions`:

  ```json title="tsconfig.app.json"
  {
    "compilerOptions": {
      "strict": true,
      // ...the rest of the options Vite generated
    }
  }
  ```

  You worked in strict mode throughout the TypeScript section, and you'll want that same type-checking in your React projects.

* **`.gitignore`**: Vite generates this for you, and it already includes `node_modules/` and the build output folder. You won't need to edit it.

* **`node_modules/`** and **`package.json`**: These should be familiar from prior sections. `node_modules/` holds the installed packages, and `package.json` lists the project's dependencies and scripts.

### Other files you may encounter

* **`src/assets`**: The conventional home for images and other static assets in a Vite project. The template fills this with its own demo images, which we'll clear out — but we'll add our own images here in a later lesson.

* **`public/`**: A folder for static assets that are served as-is. It's less central than it was in older tooling, and we won't use it much for now.

* **`src/vite-env.d.ts`**: A TypeScript declaration file that provides types for Vite-specific features. You don't need to modify or understand it right now; just know it belongs there.

* **`vite.config.ts`**: Vite's own configuration file. You won't need to modify this for now.

## A Closer Look at `main.tsx`

Open `src/main.tsx`. It looks something like this:

```tsx title="src/main.tsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

Let's start with the imports:

* `import { StrictMode } from 'react'` and `import { createRoot } from 'react-dom/client'` use **named imports**, a pattern you already saw in the TypeScript section. Instead of pulling in each package's entire default export, we import only the specific pieces we need by name. Here we grab `StrictMode` from the core React library and `createRoot` from `react-dom/client`, the library responsible for connecting React to the DOM. React itself describes what the UI should look like; `react-dom/client` handles actually inserting it into the webpage.

The last statement does a lot in a single line. To understand it, let's pull it apart into a few intermediate steps using variables:

```tsx
const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

Now we can walk through it one line at a time:

* `const rootElement = document.getElementById('root')!` finds the `<div id="root">` element from `index.html`. This is the element our entire React app will live inside.

  Notice the `!` at the end. This is a TypeScript **non-null assertion**, which you saw in the type assertions lesson. `getElementById` has a return type of `HTMLElement | null`, because in general there's no guarantee the element exists. The `!` tells TypeScript, "I know this element exists." We can make that promise confidently because `index.html`, which Vite generated and we reviewed above, includes that exact `<div id="root">`.

* `const root = createRoot(rootElement)` creates a React "root" inside that element. The root is the connection point between React and the DOM, and it's what gives us the ability to render React components onto the page.

* `root.render(...)` takes the React component we want to display and renders it into the root. We pass it a single element: our `<App />` component, wrapped in `<StrictMode>`.

* `<StrictMode>` is a wrapper that highlights potential problems in your components during development. It doesn't render anything visible to the page, and it has no effect on the production build. One visible side effect: in development, React intentionally renders components twice to help detect unintended side effects, so if you add a `console.log` inside a component and see it fire twice, that's why. It's a helpful safety net while you're working, so we'll leave it in place.

Those intermediate variables make each step easier to read, but they aren't strictly necessary. Because we only use `rootElement` and `root` once each, we can chain everything together. That's exactly what the template does, collapsing the three steps back into a single statement:

```tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

This is identical to the expanded version above; it just skips the intermediate variables. Both forms find the root element, create a React root inside it, and render `<App />` wrapped in `<StrictMode>`.

If you're feeling fuzzy about what a "component" is, don't worry. We'll cover components in detail in the very next lesson.

## Cleaning Up the Boilerplate

Vite's starter content is just a demo. We'll start fresh, so replace the entire contents of `src/App.tsx` with a minimal component:

```tsx title="src/App.tsx"
function App() {
  return (
    <h1>Hello from React!</h1>
  );
}

export default App;
```

There's one more cleanup step we do need to make. Open `src/main.tsx` and remove the `import './index.css'` line. The template's default global stylesheet sets some styles that can interfere with how elements look in the examples coming up, so we'll take it out now. Your `main.tsx` should look like this:

```tsx title="src/main.tsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

:::tip
Optionally, you can delete `App.css` and `index.css`, as well as the contents of the `assets` folder, since those files are no longer referenced.
:::

After updating `App.tsx` and `main.tsx` as described above, check your browser. If the development server is still running, you should see "Hello from React!" appear automatically.

## Available Scripts

Vite gives you a handful of npm scripts in `package.json`. The ones you'll use most are:

* `npm run dev`: Starts the local development server (the command you've already used).
* `npm run build`: Builds an optimized version of your app for deployment.
* `npm run preview`: Serves the built app locally so you can preview the production build before deploying.

For now, `npm run dev` is the only one you need. With your project scaffolded and running, you're ready to start learning about React components.
