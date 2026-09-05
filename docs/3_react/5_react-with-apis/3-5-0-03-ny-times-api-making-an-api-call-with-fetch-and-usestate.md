---
title: "📓 3.5.0.3 NY Times API: Making an API Call with fetch and useState"
day: weekend
id: 3-5-0-3-ny-times-api-making-an-api-call-with-fetch-and-usestate
hide_table_of_contents: true
---

In this lesson, we'll build a small application that will use `fetch()` to make an API call to the New York Times (NYT). This will be reminiscent of the setup in the React with NoSQL course section, when we fetched data from a Firestore database. The difference is that this time we're calling a public API that we don't control, which means we'll also have to decide how to describe the shape of the data it hands back to us.

## Making an API Call with `fetch()`
---

Let's start out by bootstrapping a new React and TypeScript project with Vite. In your desktop or folder of choice, run the following commands:

```bash
npm create vite@latest react-with-api -- --template react-ts
cd react-with-api
npm install
```

:::tip
Remember to add `"strict": true` to `compilerOptions` in `tsconfig.app.json`, just as we did when we first set up a Vite project in React Fundamentals. We'll rely on strict type checking throughout this project.
:::

Next, let's get access to a New York Times developer API key. If you already have a New York Times API key from a previous project, you are welcome to use that one. If you don't, go to [Get Started](https://developer.nytimes.com/get-started) at the NYT's Developer site and complete the steps to getting an API key. Their documentation is excellent.

When you register a new app on the NYT Developer site, you'll be asked which of their APIs to enable for it. Make sure **Top Stories API** is toggled on, since that's the one we'll be calling in this lesson.

### Storing the API Key

Within the `react-with-api` project, let's add `.env` to the `.gitignore` file. Once you've made a commit, go ahead and create a `.env` file in the root directory of the project.

Finally, add the following to the `.env` file:

```text title=".env"
VITE_NYT_API_KEY=[Your NYT API key goes here]
```

Vite only exposes environment variables to our application code if their names begin with `VITE_`. Any other variable in `.env` stays out of the bundle entirely. That prefix is a safeguard: it means we have to opt in, variable by variable, to anything that gets shipped to the browser.

:::note
Because a front-end application runs in the user's browser, any key it uses ends up in the code we ship. Keeping the key in `.env` and out of version control is still worth doing, and it keeps the key out of our public repository, but it does not hide the key from someone using our site. As the Intermediate JavaScript lesson on [Protecting API Keys](../../intermediate-javascript/asynchrony-and-apis/2-3-0-8-protecting-api-keys) explained, the production approach is for the browser to call a server that you control, and for that server to hold the key and make the request to the API.
:::

### Creating the Components

Our application will have two components: `App.tsx` and `TopStories.tsx`. The `TopStories` component will contain information from the [NYT's Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview). We could make our API call in `App.tsx`, but we're separating it into `TopStories` in case you want to build this project out further on your own by adding other API calls, or functionality like searching for articles or listing what's most popular, books, or movies.

Let's create a `src/components` directory. Vite already generated `App.tsx` directly in `src`, so we'll move that file into `src/components`; `TopStories.tsx` doesn't exist yet, so we'll create it there from scratch. Their file paths will look like this:

* `react-with-api/src/components/App.tsx`
* `react-with-api/src/components/TopStories.tsx`

We won't need the styles Vite generated for us, so go ahead and delete `src/App.css` - once `App.tsx` stops importing it, it would otherwise just sit in the project unused.

After moving `App.tsx`, update the import in `main.tsx` to match, just as we did with the Help Queue:

```tsx title="src/main.tsx"
import App from './components/App';
```

Now replace the entire contents of `App.tsx` with the following:

```tsx title="src/components/App.tsx"
import TopStories from './TopStories';

function App() {
  return (
    <TopStories />
  );
}

export default App;
```

It's just a container for a `TopStories` component that we haven't created yet. The `TopStories` component will have the bulk of our code.

Notice that we don't need a fragment here. `App` returns a single element, so there's nothing to wrap.

### Describing the Data

Before we write any state, let's decide what a top story looks like to our application. The Top Stories API returns a large object with a `results` property holding an array of stories, and each story has more than twenty properties. We only plan to display two of them, so those are the only two we need to describe, plus one more that we'll use in a moment:

```ts title="src/types.ts"
export type TopStory = {
  title: string;
  abstract: string;
  url: string;
};

export type TopStoriesResponse = {
  results: TopStory[];
};
```

We're describing three properties: the `title` and `abstract` that we'll display, and the `url`, which we'll use as a unique key for each item in our list.

Two things are worth calling out here:

* **We type only what we use.** The stories arriving from the API will carry many more properties than these. That's fine. TypeScript checks that the properties we named are present and have the types we claimed; extra properties on the actual data don't cause a problem.
* **These types are a promise we're making, not something TypeScript can verify.** Types disappear when our code compiles, so nothing checks at runtime that the NYT response really matches `TopStoriesResponse`. What a type gives us here is a single, consistent description of that data everywhere in our own code. Reading the API's documentation carefully is still on us.

### Adding State

We'll continue to use hooks in function components to manage state and use component lifecycle features. Let's start by adding some local state:

```tsx title="src/components/TopStories.tsx"
import { useState } from 'react';
import { type TopStory } from '../types';

function TopStories() {
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [topStories, setTopStories] = useState<TopStory[]>([]);

  return <h1>Top Stories</h1>;
}

export default TopStories;
```

We've added a placeholder `return` for now, just so the component actually renders something while we build it up piece by piece. We'll replace it with real conditional rendering once we get to "Returning UI" below.

We've created three state variables: `error`, `isLoaded`, and `topStories`:

* The initial state of `error` is `null`. If the API call has a problem, we'll store the error message here.
* The initial state of `isLoaded` is `false`. We'll use the `useEffect()` hook to make the API call once, after our component first renders. Once the call is complete, `isLoaded` will be switched to `true`.
* Finally, `topStories` is an empty array. It will hold the NYT top stories once the API call succeeds.

Look closely at how the types are handled in those three lines, because all three cases come up constantly in React:

* `useState(false)` needs no annotation. TypeScript infers `boolean` from the initial value.
* `useState<string | null>(null)` does need one. Left to infer, TypeScript would decide that `error` holds `null` and nothing else, and then `setError("Something went wrong")` would be an error. The generic tells it that this state holds either a string or `null`.
* `useState<TopStory[]>([])` has a similar problem. An empty array on its own tells TypeScript nothing about what belongs in it, so we say explicitly that this state holds an array of `TopStory` objects.

The pattern to remember: when the initial value is a real value, let inference do the work. When the initial value is `null` or an empty array, provide the generic.

### Making the API Call

Next, let's set up a `useEffect()` hook to make the API call and update our state. Because `await` reads more clearly than a chain of `.then()` calls, we'll use it here, even though it requires a little extra work to make it fit into `useEffect()`. A `useEffect()` callback can't be an `async` function itself. An async function always returns a `Promise`, but React expects a `useEffect()` callback to return either nothing or a cleanup function - if it got a `Promise` back instead, it would assume we meant to return a cleanup function and warn us that we didn't. So instead, we declare a separate `async` function *inside* the effect, then call it right away:

```tsx title="src/components/TopStories.tsx"
// highlight-start
import { useState, useEffect } from 'react';
import { type TopStory, type TopStoriesResponse } from '../types';
// highlight-end

function TopStories() {
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [topStories, setTopStories] = useState<TopStory[]>([]);

  // highlight-start
  useEffect(() => {
    async function getTopStories() {
      try {
        const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`);
        const jsonifiedResponse: TopStoriesResponse = await response.json();
        setTopStories(jsonifiedResponse.results);
        setIsLoaded(true);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Something went wrong.');
        setIsLoaded(true);
      }
    }

    getTopStories();
  }, []);
  // highlight-end

  return <h1>Top Stories</h1>;
}

export default TopStories;
```

Since we've passed in an empty dependency array, this `useEffect()` hook will run once, after our component is first rendered.

We use the built-in `fetch()` API (a Web API, not React) to make our API call. The URL for the API call is in backticks so that we can use a template string for our API key, which we read with `import.meta.env.VITE_NYT_API_KEY`. That's how Vite hands us the values from `.env`.

Notice that `getTopStories()` is called with no `await` in front of it. We couldn't `await` it there even if we wanted to - the `useEffect()` callback itself is a regular, non-`async` function, and `await` is only valid inside an `async` function. But we also don't need to: nothing after that call depends on `getTopStories()` finishing. The function handles its own completion internally, by calling `setIsLoaded(true)` once it succeeds or fails, and that state update is exactly what tells React to re-render with the new data. The effect itself doesn't need to wait around for it.

Inside `getTopStories()`, a `try`/`catch` block does the same job that a `.then()`/`.catch()` chain would: if anything `await`ed inside the `try` block throws or rejects, execution jumps straight to `catch`.

Once the API call is complete, the response will be converted to JSON. Then, once it's been converted, we'll have our results. If all went well, we call `setTopStories()` with the top stories data and set `isLoaded` to `true` by calling `setIsLoaded(true)`. Because the top stories are stored in a property of the response called `results`, we update the `topStories` state to be `jsonifiedResponse.results`.

There are two type details in that code worth a closer look, because both exist to keep `any`/`unknown` from leaking into our application:

* `const jsonifiedResponse: TopStoriesResponse = await response.json();` annotates the value that `response.json()` produces. `response.json()` has no way of knowing what a given server will send, so TypeScript types its result as `any`. Annotating this variable is where we state what we expect that data to be. From this line forward, `jsonifiedResponse.results` is a `TopStory[]`, and `setTopStories()` accepts it happily.
* `error instanceof Error ? error.message : 'Something went wrong.'` narrows the value caught in `catch (error)`. TypeScript types a caught value as `unknown` by default - unlike a `.catch()` callback's parameter, it won't even let us write `catch (error: Error)` directly - because JavaScript lets you throw anything at all, not just `Error` objects. We could assert `(error as Error)` instead, since everything this particular `try` block actually throws is an `Error`, but recall from the [Type Assertions](../../react/typescript/3-2-2-2-type-assertions) lesson that assertions carry no runtime safety: if we're ever wrong, `.message` would silently be `undefined` instead of failing to compile. The `instanceof` check costs us one line and gives us a real runtime guarantee instead of a promise we're just hoping holds - that's what "prefer narrowing when you can" means in practice.

Speaking of `error.message`: notice that we store the message string rather than the error object itself, which lines up with the `string | null` type we gave that state variable. The message is what we want anyway, since a message is what we'll render.

As noted in the [Intermediate JavaScript lesson on `fetch()`](../../intermediate-javascript/asynchrony-and-apis/2-3-2-2-fetch-api), `fetch()` only rejects on network-level failures, not response codes like a 404 - our `try`/`catch` won't catch those either. Because of this, we'll need to add in additional error checking.

### Adding Additional Error Handling

We can check for 400 and 500 level issues by using the `fetch()` API's `ok` property, or by using an API's custom error responses. We could also use a combination of the two! As always, take time to research error handling in an API's documentation, and try breaking your API call to see what error messages are returned.

We can break an API call by doing any of the following:

* Removing a character from the API key.
* Changing the request URL.
* Putting in phony input, if the API call includes query parameters.

It turns out the NYT's documentation on error messages is non-existent. However, if we break the API call in Postman, we can see that the NYT API does in fact return custom error messages stored in a `fault` key. To keep this lesson focused, we'll stick to using the `fetch()` API's `ok` property to provide additional error handling.

Here's our updated code:

```tsx title="src/components/TopStories.tsx"
import { useState, useEffect } from 'react';
import { type TopStory, type TopStoriesResponse } from '../types';

function TopStories() {
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [topStories, setTopStories] = useState<TopStory[]>([]);

  useEffect(() => {
    async function getTopStories() {
      try {
        const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`);
        // highlight-start
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        // highlight-end
        const jsonifiedResponse: TopStoriesResponse = await response.json();
        setTopStories(jsonifiedResponse.results);
        setIsLoaded(true);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Something went wrong.');
        setIsLoaded(true);
      }
    }

    getTopStories();
  }, []);

  return <h1>Top Stories</h1>;
}

export default TopStories;
```

Now a response with a bad status code throws an `Error` that we build ourselves, which sends us straight to the same `catch` block - just triggered by our own `throw` this time instead of a network failure. Since we build that `Error` ourselves, `error instanceof Error` is still `true` regardless of whether the network or our own `throw` produced it, so the narrowing keeps working without any changes.

### Returning UI

Now let's replace the placeholder `return` statement we've had in place so far. In this case we'll use conditionals to determine which of the following our users will see:

* A "...Loading..." message
* The daily top stories
* An error

Here's the conditional with three possible returns:

```tsx title="src/components/TopStories.tsx"
import { useState, useEffect } from 'react';
import { type TopStory, type TopStoriesResponse } from '../types';

function TopStories() {
  // ...state and useEffect from before

  // highlight-start
  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>;
  } else {
    return (
      <>
        <h1>Top Stories</h1>
        <ul>
          {topStories.map((article) =>
            <li key={article.url}>
              <h3>{article.title}</h3>
              <p>{article.abstract}</p>
            </li>
          )}
        </ul>
      </>
    );
  }
  // highlight-end
}

export default TopStories;
```

If there's an `error`, we'll return an error message. As long as the error's initial state of `null` isn't changed, this conditional won't be triggered.

If `isLoaded` is `false`, we'll render a "...Loading..." message.

Otherwise, we'll return the top stories. Note the `key` prop on each list item. In React Fundamentals we learned that a stable, unique value makes a better key than an array index, since an index can cause subtle rendering bugs when items are reordered or removed. The stories from the NYT don't come with an id, but each one does have its own `url`, so that's what we use.

While each story object has many properties we could display, we're listing only the `title` and `abstract` properties. And because we typed `topStories` as `TopStory[]`, our editor will autocomplete `article.title` and `article.abstract` for us, and a typo like `article.abstrct` becomes a compile error rather than an `undefined` that quietly renders nothing.

We can do a simple implementation of an API call in this manner, and it works great. But what if our state gets more complicated? Let's say we not only get the top stories data from the NYT home page, but from the [arts, science, and technology](https://developer.nytimes.com/docs/top-stories-product/1/overview) sections as well. In that case, it's better to reach for another tool to manage complex state: the `useReducer()` hook. In the next lesson, we'll get to know how this hook works. Then, we'll refactor our NYT API call application to use it!
