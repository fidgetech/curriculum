---
title: "📓 3.5.0.5 NY Times API: Writing and Testing our Reducer and Actions"
day: weekend
id: 3-5-0-5-ny-times-api-writing-and-testing-our-reducer-and-actions
hide_table_of_contents: true
---

We're now ready to start refactoring our New York Times (NYT) API application to use the `useReducer()` hook to handle state. However, we're going to go a few steps further than we did in the last lesson: we're going to write action creators and action constants for our actions, and we're going to fully test our reducer and action creators.

While we don't have to use action creators or action constants with `useReducer()`, it's good to take the time to practice testing. Remember that reducers, action constants, and action creators are just plain TypeScript functions and values. There are no components to render and no DOM to set up, which is what makes them so pleasant to test.

:::note
The Vite template doesn't come with a test runner installed, so you'll need to add Jest to this project before the tests below can run. If it's been a while, revisit [A Note on Testing](../../react/functional-programming-with-javascript/3-1-0-13-a-note-on-testing) and the Intermediate JavaScript lessons it links to for a refresher on getting Jest set up.
:::

## Project Planning and Setup
---

Open up your NYT API app, and add the following directories to `src`:

* `__tests__`
* `reducers`
* `actions`

Next, add the following directories to `src/__tests__`:

* `reducers`
* `actions`

Now we're ready to start planning our application state, and how our reducers will update it.

### Planning Our Initial State

When we used the `useState()` hook to manage the state related to our API call, we had three variables:

* `isLoaded`, initialized to `false`
* `topStories`, initialized to an empty array
* `error`, initialized to `null`

The question we need to answer is whether we should create one reducer to manage all of this state, or separate this state into multiple reducers, or even leave some of the state to be managed by a `useState()` hook. What do you think we should do?

Well, we know that the values of `isLoaded`, `topStories`, and `error` are all set based on the success or failure of the API call. This is a good indication that these state variables are related and that it's best to manage them within the same `useReducer()` hook. So, we'll do just that.

Here's what our initial state will look like:

```ts
{
  isLoaded: false,
  topStories: [],
  error: null
}
```

### Planning our Actions

We'll need to have two actions, one for the success of the API call and another for a failure:

* `'GET_TOP_STORIES_SUCCESS'`: This action will be dispatched when we receive a response for a successful API call. It will set `isLoaded` to `true` and will include a `topStories` property with the API response's payload.
* `'GET_TOP_STORIES_FAILURE'`: This action will be dispatched when we receive a response from a failed API call. It will set `isLoaded` to `true` and will include an `error` property with the API response's error message.

### Typing Our State and Actions

Since we already have a `src/types.ts` file describing a top story, that's where we'll describe our reducer's state and actions too. Add the following to that file:

```ts title="src/types.ts"
export type TopStoriesState = {
  isLoaded: boolean;
  topStories: TopStory[];
  error: string | null;
};

export type TopStoriesAction =
  | { type: 'GET_TOP_STORIES_SUCCESS'; topStories: TopStory[] }
  | { type: 'GET_TOP_STORIES_FAILURE'; error: string };
```

`TopStoriesState` is a direct translation of the plan we just made: the same three properties, with the types the initial values imply. Note that `error` is `string | null`, matching the `useState<string | null>(null)` we wrote earlier.

`TopStoriesAction` is a discriminated union, and it says something more interesting: it describes not just what our two actions are named, but what data each one is allowed to carry. A success action carries `topStories` and nothing else. A failure action carries `error` and nothing else. Dispatching a success action without its `topStories` payload, or attaching an `error` to it, is now a compile error rather than a bug we discover in the browser.

### Add Constants for Reducer Actions

Before we go any further, let's create constants for our action names in a new file, `src/actions/ActionTypes.ts`:

```ts title="src/actions/ActionTypes.ts"
export const GET_TOP_STORIES_FAILURE = 'GET_TOP_STORIES_FAILURE';
export const GET_TOP_STORIES_SUCCESS = 'GET_TOP_STORIES_SUCCESS';
```

Why bother, when we could type the strings out wherever we need them? Because a misspelled string is a silent bug: a `case` that never matches, or an action that never fires. A misspelled constant is a compile error, and our editor will autocomplete the correct name for us.

There's a nice detail here that comes from TypeScript's inference rules. Because we declared these with `const`, their types aren't `string`. They're the literal types `"GET_TOP_STORIES_FAILURE"` and `"GET_TOP_STORIES_SUCCESS"`. That means they line up exactly with the literal types in our `TopStoriesAction` union, so we can use the constants in place of the raw strings anywhere, including in `case` clauses, and narrowing still works.

## Testing
---

Now that we have everything set up, we can start testing.

### Testing and Writing Our Reducer's Default Case

For our first test, our reducer should throw an error if an action it doesn't recognize is passed into it.

Here's our test:

```ts title="src/__tests__/reducers/top-stories-reducer.test.ts"
import topStoriesReducer from '../../reducers/top-stories-reducer';
import { type TopStoriesState, type TopStoriesAction } from '../../types';

describe('topStoriesReducer', () => {

  const initialState: TopStoriesState = {
    isLoaded: false,
    topStories: [],
    error: null
  };

  test('should successfully throw a new error if a non-matching action type is passed into it', () => {
    expect(
      () => {
        topStoriesReducer(initialState, { type: null } as unknown as TopStoriesAction);
      }
    ).toThrow("There is no action matching null.");
  });
});
```

We start by importing our reducer (which we haven't created yet, and we'll do that in a moment) along with our types. Then we store the `initialState` in a constant in our `describe` block, annotated as `TopStoriesState`. Finally, our test verifies that if an unrecognized action type is passed in, an error is thrown with the message `"There is no action matching null."`.

Look at that assertion in the test, though:

```ts
{ type: null } as unknown as TopStoriesAction
```

Our reducer's action parameter is typed as `TopStoriesAction`, and `{ type: null }` is not one of those actions. TypeScript is doing its job by rejecting it. But the behavior we want to verify is a runtime safety net, so for this one test we use the double assertion we learned about in the type assertions lesson to hand the reducer something it says it doesn't want.

Is testing that worthwhile if TypeScript already prevents it? Yes. Types only protect the code that TypeScript compiles. Actions can also be dispatched from data that arrived at runtime, and a reducer that fails loudly is easier to debug than one that quietly returns unchanged state.

Next, in a new file, we need to create our reducer with a switch and a default case:

```ts title="src/reducers/top-stories-reducer.ts"
import { type TopStoriesState, type TopStoriesAction } from '../types';

const topStoriesReducer = (state: TopStoriesState, action: TopStoriesAction): TopStoriesState => {
  const { type } = action;
  switch (type) {
    default:
      throw new Error(`There is no action matching ${type}.`);
  }
};

export default topStoriesReducer;
```

For now, our reducer throws an error for the default case, just like we tested for. If we run our tests, they will pass.

:::note
At this intermediate step, TypeScript will report that `state` is declared but its value is never read. Our reducer really doesn't use it yet, and the Vite template turns on the `noUnusedParameters` check, which flags exactly this. It resolves itself as soon as we add our first `case` in the next step, so there's nothing to fix.
:::

### Testing and Writing `GET_TOP_STORIES_SUCCESS`

Now we're ready to write a test for our `GET_TOP_STORIES_SUCCESS` action. This action will be triggered if our API call is successful.

Here's the test:

```ts title="src/__tests__/reducers/top-stories-reducer.test.ts"
import * as ActionTypes from '../../actions/ActionTypes';

describe('topStoriesReducer', () => {

  let action: TopStoriesAction;

  // ...previous initialState variable

  test('successfully getting top stories should change isLoaded to true and update topStories', () => {
    const topStories = [
      { title: "An article", abstract: "An abstract", url: "https://example.com/an-article" }
    ];
    action = {
      type: ActionTypes.GET_TOP_STORIES_SUCCESS,
      topStories
    };

    expect(topStoriesReducer(initialState, action)).toEqual({
      isLoaded: true,
      topStories: topStories,
      error: null
    });
  });
});
```

First, we need to make sure we import our constants from `ActionTypes.ts` and create an `action` variable that we can reuse throughout the tests. Notice that we annotate it as `TopStoriesAction`, which means each test can assign either of our two actions to it and nothing else.

Notice also what the payload looks like. In JavaScript we could have gotten away with a placeholder like the string `"An article"`, since a reducer doesn't inspect its payload. TypeScript won't allow that here: `TopStoriesAction` says a success action's `topStories` is a `TopStory[]`, so our test data has to be an array of story objects with the right properties. That's a small amount of extra typing in exchange for test data that actually resembles what the application will receive.

Our test will verify that when the `GET_TOP_STORIES_SUCCESS` action is dispatched, `isLoaded` will be set to `true` and the `topStories` property will be updated to the payload.

Once we make sure the test fails, we can update our reducer to make it pass:

```ts title="src/reducers/top-stories-reducer.ts"
// highlight-next-line
import * as ActionTypes from '../actions/ActionTypes';
import { type TopStoriesState, type TopStoriesAction } from '../types';

const topStoriesReducer = (state: TopStoriesState, action: TopStoriesAction): TopStoriesState => {
  const { type } = action;
  switch (type) {
    // highlight-start
    case ActionTypes.GET_TOP_STORIES_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        topStories: action.topStories
      };
    // highlight-end
    default:
      throw new Error(`There is no action matching ${type}.`);
  }
};

export default topStoriesReducer;
```

Our new action returns a new state object: we use JavaScript's spread syntax to make a copy of the `state` object, and we specify that `isLoaded` is set to `true` and the `topStories` property is set to `action.topStories`, the payload we've passed into our action. This is the same functional approach to immutability we've been practicing since the functional programming section: we never modify the state we were handed, we build a new object from it.

There's something worth noticing inside that `case`. We can read `action.topStories` there, and TypeScript is fine with it, because matching on the discriminant narrowed `action` to the success variant of our union. If we tried to read `action.error` in that same block, we'd get a compile error, because a success action doesn't have one.

If we run our tests, our latest test will pass.

### Testing and Writing `GET_TOP_STORIES_FAILURE`

Next we'll test and write the second action, `GET_TOP_STORIES_FAILURE`. Both the test and the reducer action will look very similar to `GET_TOP_STORIES_SUCCESS`. Here's the test:

```ts title="src/__tests__/reducers/top-stories-reducer.test.ts"
// ...previous imports and tests

  test('failing to get topStories should change isLoaded to true and add an error message', () => {
    const error = "An error";
    action = {
      type: ActionTypes.GET_TOP_STORIES_FAILURE,
      error
    };

    expect(topStoriesReducer(initialState, action)).toEqual({
      isLoaded: true,
      topStories: [],
      error: "An error"
    });
  });
// ...closing braces for describe block
```

We create an `error` constant that holds a string. The action itself looks very similar to `GET_TOP_STORIES_SUCCESS`, and the only difference is the payload. We'll expect the new state to have `isLoaded` set to `true` and `error` set to `"An error"`. Meanwhile, `topStories` will remain an empty array since it won't change if we don't get a successful payload.

Verify that the test fails. Then, we can update our reducer:

```ts title="src/reducers/top-stories-reducer.ts"
import * as ActionTypes from '../actions/ActionTypes';
import { type TopStoriesState, type TopStoriesAction } from '../types';

const topStoriesReducer = (state: TopStoriesState, action: TopStoriesAction): TopStoriesState => {
  const { type } = action;
  switch (type) {
    case ActionTypes.GET_TOP_STORIES_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        topStories: action.topStories
      };
    // highlight-start
    case ActionTypes.GET_TOP_STORIES_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.error
      };
    // highlight-end
    default:
      throw new Error(`There is no action matching ${type}.`);
  }
};

export default topStoriesReducer;
```

As we can see, the actions for success and failure are very similar. They just have different payloads.

At this point, our reducer is complete.

### Testing and Writing Action Creators

Next, we'll write action creators for our reducer actions. We'll also test these action creators. An **action creator** is a function that builds an action object for us, so that the components dispatching actions don't have to assemble those objects by hand.

Here are the tests:

```ts title="src/__tests__/actions/index.test.ts"
import * as actions from '../../actions';
import * as ActionTypes from '../../actions/ActionTypes';

describe('top stories reducer actions', () => {
  it('getTopStoriesSuccess should create GET_TOP_STORIES_SUCCESS action', () => {
    const topStories = [
      { title: "An article", abstract: "An abstract", url: "https://example.com/an-article" }
    ];
    expect(actions.getTopStoriesSuccess(topStories)).toEqual({
      type: ActionTypes.GET_TOP_STORIES_SUCCESS,
      topStories
    });
  });

  it('getTopStoriesFailure should create GET_TOP_STORIES_FAILURE action', () => {
    const error = "An error";
    expect(actions.getTopStoriesFailure(error)).toEqual({
      type: ActionTypes.GET_TOP_STORIES_FAILURE,
      error
    });
  });
});
```

These tests verify that the functions we'll create to generate our reducer actions actually do so successfully.

Here are the functions to make our new tests pass:

```ts title="src/actions/index.ts"
import * as ActionTypes from './ActionTypes';
import { type TopStory, type TopStoriesAction } from '../types';

export const getTopStoriesSuccess = (topStories: TopStory[]): TopStoriesAction => ({
  type: ActionTypes.GET_TOP_STORIES_SUCCESS,
  topStories
});

export const getTopStoriesFailure = (error: string): TopStoriesAction => ({
  type: ActionTypes.GET_TOP_STORIES_FAILURE,
  error
});
```

Note that we export each action creator separately.

Each action creator declares exactly what it needs (an array of stories, or an error message) and declares that it returns a `TopStoriesAction`. That return type annotation is doing real work: if we ever build an object here that isn't one of our two actions, TypeScript catches it in this file, rather than at the `dispatch()` call in a component.

## Summary
---

At this point, we've planned out the initial state of our reducer and how our reducer will change it. We described that state and those actions with TypeScript types, created constants for each of our reducer actions, and then used test-driven development to create a reducer that will update state when we make an API call. Finally, we tested and wrote action creators that will make it easier to dispatch our actions in our application.

However, we still haven't refactored our application to use the `useReducer()` hook! Let's do that next and wrap up this practice project.
