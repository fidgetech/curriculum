---
title: "📓 3.5.0.4 The useReducer Hook"
day: weekend
id: 3-5-0-4-the-usereducer-hook
hide_table_of_contents: true
---

The first thing to know about the `useReducer()` hook is that it is an alternative to the `useState()` hook. That means `useReducer()` is a way to initialize and manage state in a function component. This also means that anything we can do with the `useReducer()` hook, we can also do with the `useState()` hook. So, when would we use `useReducer()`? Before getting into the use cases and benefits of the `useReducer()` hook, let's first get to know how to use it.

## The `useReducer()` Hook
---

As its name implies, the `useReducer()` hook makes use of a "reducer" function that handles evaluating and transforming state. A **reducer function** is an ordinary function that follows a specific convention in how it is set up:

* A reducer takes in two arguments: the current state and an **action** that describes how the state should change. An action contains a `type` property that names the action, and it can optionally contain data to add to state.
* A reducer uses [a switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) to handle different action types. Each action type will lead to a different way of updating state.
* A reducer then returns the new state.

Also note that reducer functions are pure functions. As we covered in the functional programming section, a pure function meets the following criteria:

* Always returns an output
* Has no side effects
* Does not rely on external variables or state
* Always returns the same answer for a given input

Here's a small reducer that manages whether a form is visible:

```ts
type FormAction = { type: 'TOGGLE_FORM' };

function reducer(state: boolean, action: FormAction): boolean {
  const { type } = action;
  switch (type) {
    case 'TOGGLE_FORM':
      return !state;
    default:
      throw new Error(`There is no action matching ${type}.`);
  }
}
```

If we want to update our state with the `useReducer()` hook, we dispatch an action to our reducer, like so:

```ts
dispatch({ type: 'TOGGLE_FORM' })
```

That action object should look familiar. In the TypeScript section, we learned that a **discriminated union** is a union of object types that share a property whose value is a unique string literal, and we noted that `type` is the conventional name for that property in React action objects. That's exactly what `FormAction` is: a (very short) union of the action shapes our reducer accepts, discriminated by `type`. As we add more actions, that union grows, and TypeScript narrows the action inside each `case` so we can only reach the data that action actually carries.

One more thing worth knowing: the vocabulary of reducers, actions, and dispatching isn't unique to the `useReducer()` hook. Several state management libraries you may run into use the same names and follow the same conventions, so this pattern will look familiar when you see it elsewhere.

With that brief introduction in mind, let's implement a `useReducer()` hook. For this next practice, we'll revisit the `counter-app` application that we built when we first learned [the `useState()` hook](../../react/react-fundamentals/3-3-1-2-introduction-to-state) and [the `useEffect()` hook](../../react/react-with-nosql/3-4-0-3-running-side-effects-with-the-useeffect-hook), and we'll refactor the `Counter` component to use a `useReducer()` hook.

:::note
Honestly, `useState()` is the more natural fit for a single `count` number like this one - we'll see exactly why later in this lesson, in "When to Use `useReducer()`." We're refactoring `Counter` anyway because it's a small, familiar component, which lets us focus entirely on how `useReducer()` works without also having to learn a new domain at the same time. Once we're comfortable with the mechanics, we'll immediately put the hook to use somewhere it actually earns its keep: managing the `error`, `isLoaded`, and `topStories` state for our NYT API calls, starting two lessons from now.
:::

### Setting Up our Practice Project

If you still have your `counter-app` project, open it up now. If you don't, you can scaffold a new one. For simplicity, the examples in this lesson only reference the `Counter` component - if your `counter-app` project also has the `Timer` component from earlier lessons, that's fine, just leave it as is. We won't be touching it here.

```bash
npm create vite@latest intro-to-usereducer -- --template react-ts
cd intro-to-usereducer
npm install
```

Remember to add `"strict": true` to `compilerOptions` in `tsconfig.app.json`. Then, within the project folder, follow these steps:

* Create a new file called `Counter.tsx` in the `src` folder.
* Create and export an empty `Counter` function component inside of `Counter.tsx`.
* Import `Counter` into `App.tsx` and add it to the `return` statement.

The `App` component should look like this:

```tsx title="src/App.tsx"
import Counter from './Counter';

function App() {
  return (
    <Counter />
  );
}

export default App;
```

And here's the logic for the `Counter` component:

```tsx title="src/Counter.tsx"
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.title = String(count);
  }, [count]);

  return (
    <>
      {hidden ? <h1>Count Hidden</h1> : <h1>{count}</h1>}
      <button onClick={() => setCount(count + 1)}>Count!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </>
  );
}

export default Counter;
```

In the `Counter` component we have a button to show and hide the count, as well as a button to increment the count by 1 on each click. We also have a `useEffect()` hook that updates the document's `title` with the value of the count, every time the count changes in value.

Note the `String(count)` in the effect. `document.title` is a string, and `count` is a number, so TypeScript will not let us assign one to the other without converting it first. This is the kind of small mismatch that would silently work in JavaScript and that TypeScript asks us to make explicit.

### Creating Initial State and a Reducer Function

In this refactor, we're going to turn the `count` state variable into state managed by a `useReducer()` hook. We'll start this refactor by importing `useReducer` from React at the top of our file:

```tsx title="src/Counter.tsx"
import { useState, useEffect, useReducer } from 'react';
```

**The `useReducer()` hook takes two arguments**:

* A reducer function.
* An object to define initial state.

Let's create both of those next, along with the types that describe them. We'll create these outside of the `Counter` function component:

```tsx title="src/Counter.tsx"
import { useState, useEffect, useReducer } from 'react';

// highlight-start
type CounterState = {
  count: number;
};

type CounterAction = { type: 'increment' };

const initialState: CounterState = {
  count: 0
};

function reducer(state: CounterState, action: CounterAction): CounterState {
  const { type } = action;
  switch (type) {
    case 'increment':
      return {
        count: state.count + 1
      };
    default:
      throw new Error(`There is no action matching ${type}.`);
  }
}
// highlight-end

function Counter() {
  // ...same Counter component as before
}

export default Counter;
```

First notice that we've created our types, our initial state, and our reducer outside of the `Counter` function component, but still within `Counter.tsx`. This organization is common practice. We could also initialize these variables within the `Counter` function component, or in an entirely separate file. There's no single right answer as to what's the best organization practice, and it usually depends on what's best for testing and for minimizing the complexity of components.

In the `initialState` variable, we've created an object with one key, `count`, which starts with a value of `0`. This is the state that we'll use when we initialize our `useReducer()` hook. We annotate it as `CounterState` so that TypeScript checks the initial state against the same type the reducer promises to return.

In the `reducer()` function declaration, we've followed the convention of reducer functions by doing the following:

* Taking in an argument for state and an argument for an action.
* Setting up a switch statement based on the action's `type` property. Our switch statement has:
  * An `'increment'` case that increments the `count` state variable by `1`
  * A `default` case that throws an error if the action's `type` property does not match any of the available reducer action types.

Previously we might have returned the state unchanged in the `default` case, and that is acceptable. However, it's much better to use the default switch case for error handling. Why? When we throw errors, we fail loudly, and this ultimately makes it easier to debug the issue.

There's one detail in that code worth explaining, since it's specific to writing reducers in TypeScript. Notice that we pull `type` off the action into its own variable before the switch:

```ts
const { type } = action;
switch (type) {
```

Why not just write `switch (action.type)`? Because of the exhaustiveness checking we saw in the discriminated unions lesson. Once the action type is a union and every member of that union is handled by a `case`, TypeScript concludes that the `default` branch can't be reached, and inside it the `action` parameter is narrowed all the way down to `never`. Reading a property off a `never` is a compile error. Destructuring the discriminant first gives us a plain variable that we can still put in our error message, while TypeScript continues to narrow the `action` object correctly inside each `case`.

Our `CounterAction` has only one member today, so `action.type` in the `default` case would still compile here. Getting in the habit now pays off in the very next lesson, where our reducer handles two actions that carry different data.

Also note that **initial state is not set by [a default parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)** in the reducer function. Instead, initial state is passed into the `useReducer()` hook as an argument. We'll see what this looks like in just a moment.

### Invoking the `useReducer()` Hook

Now we're ready to use the `useReducer()` hook.

Here's how we'll update the `Counter` component:

```tsx title="src/Counter.tsx"
import { useState, useEffect, useReducer } from 'react';

type CounterState = {
  count: number;
};

type CounterAction = { type: 'increment' };

const initialState: CounterState = {
  count: 0
};

function reducer(state: CounterState, action: CounterAction): CounterState {
  const { type } = action;
  switch (type) {
    case 'increment':
      return {
        count: state.count + 1
      };
    default:
      throw new Error(`There is no action matching ${type}.`);
  }
}

function Counter() {
  // highlight-next-line
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hidden, setHidden] = useState(false);

  // highlight-start
  useEffect(() => {
    document.title = String(state.count);
  }, [state.count]);
  // highlight-end

  return (
    <>
      {/* highlight-next-line */}
      {hidden ? <h1>Count Hidden</h1> : <h1>{state.count}</h1>}
      {/* highlight-next-line */}
      <button onClick={() => dispatch({ type: 'increment' })}>Count!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </>
  );
}

export default Counter;
```

There are a lot of updates here, so let's look at them one by one. First, let's look at the `useReducer()` hook itself:

```ts
const [state, dispatch] = useReducer(reducer, initialState);
```

The `useReducer()` hook takes two arguments:

* A reducer function
* Initial state

Just like with the `useState()` hook, the `useReducer()` hook returns two variables that we destructure from an array:

* The state. We've called this variable `state`, though we could have called this `countState` instead.
* A function to update state. We've called this variable `dispatch`, though we could have called this `dispatchCount` instead.

Notice that we don't write any type arguments on `useReducer()` itself. Because our `reducer` function is fully typed, TypeScript already knows that `state` is a `CounterState` and that `dispatch` only accepts a `CounterAction`. That second part is a real benefit: if we mistype the action and write `dispatch({ type: 'incrment' })`, we get a compile error instead of an error thrown at runtime when a user clicks the button.

The remaining updates that we make to the `Counter` component have to do with using the `state` and `dispatch` tools that are returned from the `useReducer()` hook.

First, if we want to access the count, we now need to do so by accessing the `state` object first:

```ts
state.count
```

Second, if we want to update the count, we need to create an action object with a `type` property that matches the name of a case in our reducer:

```ts
dispatch({ type: 'increment' })
```

And with that we've covered the basics of using the `useReducer()` hook! However, there's still plenty to cover as to best practices and use cases.

### Best Practices

Other than universal best practices like using descriptive variable names, the `useState()` and `useReducer()` hooks share a core best practice:

**1. Practice separation of concerns.**

You should use multiple `useReducer()` hooks to manage multiple and different state values. For example, you could make the argument that the `hidden` state variable should be added to our new `useReducer()` hook so that all of the counter related actions are in one place. But is that practicing good separation of concerns? By "good separation of concerns" we are asking the following: does hiding and showing a part of the UI have to do with managing the count's value? It does not.

If you are ever on the fence about separation of concerns, consider real refactors that you may want to make to your app and its state. For example, what if you no longer want the show/hide feature to be in the `Counter`, but instead want to use it in `App.tsx` to handle showing and hiding both the `Timer` and `Counter` components? Even in a small application, managing the `hidden` state separately from the count would make that refactor a smoother process.

However, let's say we wanted to refactor our app to include the functionality to decrement the count and to reset the count. In this case, we would expand our existing `useReducer()` to manage this new functionality as well, since it all directly relates to the count.

### When to Use `useReducer()`

[The React docs](https://react.dev/reference/react/useReducer) suggest reaching for `useReducer()` in two cases:

1. When you have complex state that has multiple sub-values.
2. When your state update depends on the previous state value.

That said, we don't have to! We can manage complex state and access previous state using the `useState()` hook, as well.

It's recommended to use `useReducer()` to manage complex state because writing a reducer inherently involves organizing state updates into named actions, which makes it easier to read and reason about. Also, we can create complex objects and make updates to deeply nested properties in the reducer switch cases, which is not as easy to express as an argument to an update function from the `useState()` hook.

Similarly, it's recommended to use `useReducer()` to access the previous state value, because that's what the `state` parameter represents in a reducer, and it can be easier to work with as a result:

```ts
// The state parameter is always the previous state.
function reducer(state: CounterState, action: CounterAction): CounterState {
  // ...switch statement as before
}
```

Whereas with the `useState()` hook, we'd have to pass in a function to access the previous state, just like in the example below. Again, accessing the previous state isn't particularly harder to do with `useState()`, it's just a bit more direct with `useReducer()`.

```ts
const [count, setCount] = useState(0);
// How to access previous state in a state update:
setCount(prevState => prevState + 1);
```

There are other reasons you may end up using the `useReducer()` hook instead of `useState()`. For one, you might choose `useReducer()` because you feel more comfortable using it. That is completely acceptable. Similarly, your development team or company may prefer to use `useReducer()` and the conventions it dictates for code structure. As a baseline, you should be familiar with the `useReducer()` hook and be able to implement it in your code, whether or not you use it regularly.

### Benefits and Features of `useReducer()`

There are other benefits and features that can also influence your decision on whether to use the `useReducer()` hook:

* Reducers are easier to test. A reducer is a pure function that takes state and an action and returns new state, so a test needs no components, no rendering, and no mocking.
* You can incorporate programming patterns like action creators and action constants with `useReducer()` that make our code less buggy. We'll do exactly that in the next lesson.
* Typed actions catch mistakes early. Because the action type is a discriminated union, TypeScript can tell you that you dispatched an action that doesn't exist, or that you forgot to include the data an action requires.
* You can better connect error handling to your state by setting up the `default` case in a reducer to throw or return an error.
* If you declare the reducer for the `useReducer()` hook within the component that uses it (not just in the same file, but within the component), the reducer function can read the component's props. Every time the component is re-rendered, the reducer function will be newly created and access the props again, which means the reducer always has access to updated props. The React docs don't go into this possibility, so if you are interested in learning more, you should do some research.
* Instead of passing down callback functions to child components so that they can trigger state updates, you can instead pass down the `dispatch()` function. This can be easier to manage, since you are only passing in one `dispatch()` function, instead of many different callback functions. This can also optimize performance by removing extra callback functions. Why? `dispatch()` is created once, while these callback functions are newly created every time the component re-renders. Fewer functions means less memory usage, which means improved performance.

### Next Steps

To learn more about the `useReducer()` hook, visit [the React docs](https://react.dev/reference/react/useReducer). In the docs, you can read more about:

* How to specify the initial state. This reiterates what we learned in this lesson.
* [Avoiding recreating the initial state](https://react.dev/reference/react/useReducer#avoiding-recreating-the-initial-state) on every render, which is a brand new topic.
* How React skips a re-render when a dispatch results in state that hasn't actually changed. We haven't covered this explicitly, and it's true of the `useState()` hook as well.

Up next, we're going to refactor our New York Times API call app to use the `useReducer()` hook. If you want to practice more with the `useReducer()` hook before moving on, try adding the following functionality to the `Counter` component:

* A button that decrements the count by 1.
* A button that resets the count to 0.

As you add those, notice what TypeScript asks of you: each new action needs to be added to the `CounterAction` union before the reducer will accept a `case` for it, and before `dispatch()` will let you send it.
