---
title: "📓 3.5.0.6 NY Times API: Implementing useReducer"
day: weekend
id: 3-5-0-6-ny-times-api-implementing-usereducer
hide_table_of_contents: true
---

Now it's time to refactor the `TopStories` component to use the `useReducer()` hook. Let's first take a look at the updated code, and then review the changes in detail down below.

If you want to take on a challenge, try refactoring the `TopStories` component to use the `useReducer()` hook on your own before looking at the updated code below.

```tsx title="src/components/TopStories.tsx"
// highlight-next-line
import { useEffect, useReducer } from 'react'; // swap useState for useReducer
// highlight-next-line
import topStoriesReducer from '../reducers/top-stories-reducer';
// highlight-next-line
import { getTopStoriesFailure, getTopStoriesSuccess } from '../actions';
// highlight-next-line
import { type TopStoriesState, type TopStoriesResponse } from '../types'; // swap TopStory for TopStoriesState

// highlight-start
const initialState: TopStoriesState = {
  isLoaded: false,
  topStories: [],
  error: null
};
// highlight-end

function TopStories() {
  // highlight-next-line
  const [state, dispatch] = useReducer(topStoriesReducer, initialState); // replaces all three useState calls

  useEffect(() => {
    async function getTopStories() {
      try {
        const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`);
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        const jsonifiedResponse: TopStoriesResponse = await response.json();
        // create and dispatch an action
        // highlight-start
        const action = getTopStoriesSuccess(jsonifiedResponse.results);
        dispatch(action);
        // highlight-end
      } catch (error) {
        // create and dispatch an action
        // highlight-start
        const action = getTopStoriesFailure(error instanceof Error ? error.message : 'Something went wrong.');
        dispatch(action);
        // highlight-end
      }
    }

    getTopStories();
  }, []);

  // highlight-next-line
  const { error, isLoaded, topStories } = state;

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
}

export default TopStories;
```

Let's go over the changes we've made to `TopStories.tsx`. Most of this should be familiar from what we've learned about the `useReducer()` hook in the `Counter` example.

* First, we need to import `useReducer` from React. We'll also need to remove the `useState` import since we're no longer using it.
* Next, we need to import the two action creators that we'll use to generate our actions: `getTopStoriesFailure` and `getTopStoriesSuccess`.
* We also import the `TopStoriesState` type so we can annotate our initial state, and we keep the `TopStoriesResponse` type for the API response.
* Next, outside of the `TopStories` component, we create our initial state that will be added as an argument to the `useReducer()` hook. We could instead put the initial state in a separate file, or even in `top-stories-reducer.ts`, and import it into `TopStories.tsx`. Whatever you choose, be consistent across your entire application.
* We remove the three `useState()` statements and replace them with a `useReducer()` hook, passing in the `topStoriesReducer` and the `initialState`. We save the state and dispatch function that's returned from the `useReducer()` hook in the variables `state` and `dispatch`. Remember that we can call these variables anything, so long as the names describe what they represent.
* Later in the `useEffect()` hook and API call logic, when we receive a successful response or a failure response, we use one of our two action creator functions to generate an action, and then we dispatch that action using the `dispatch()` function.
* Finally, the last step in this refactor is to destructure the `error`, `isLoaded`, and `topStories` variables from the `state` variable.

Notice how much type information we get here without writing a single annotation inside the component. Because `topStoriesReducer` is typed, `state` is a `TopStoriesState`, so destructuring it gives us an `error` that's `string | null`, an `isLoaded` that's a `boolean`, and a `topStories` that's a `TopStory[]`. And because `dispatch` only accepts a `TopStoriesAction`, and our action creators only produce those, the two `dispatch(action)` calls are checked end to end. If we ever changed what a success action carries, TypeScript would point us at every place that needs updating.

Now we can run our application and everything will be working correctly. In other words, our API application is complete! We now have the tools to make API calls with `fetch()` in React applications with both the `useState()` and `useReducer()` hooks.

:::tip
In production apps, most teams don't hand-roll `fetch()` plus `useReducer()` or `useState()` for every API call. Libraries like [TanStack Query](https://tanstack.com/query/latest) and [SWR](https://swr.vercel.app/) build on the same ideas we just implemented by hand (loading, error, and success state) but also handle caching, request deduplication, retries, and race conditions for you. It's worth understanding the hooks-based approach we just built, since it's close to what those libraries are doing under the hood, but consider reaching for one of them instead of writing this pattern from scratch in a real project.
:::

## Next Steps
---

Keep in mind that you don't always have to write a custom hook yourself - plenty of pre-built ones already exist as npm packages, ready to install. A couple of well-established, actively maintained examples:

* [`react-hook-form`](https://github.com/react-hook-form/react-hook-form) for form state and validation
* [`usehooks-ts`](https://github.com/juliencrn/usehooks-ts) for a broad set of TypeScript utility hooks, including `useMediaQuery`, `useLocalStorage`, and `useDebounceValue`
