---
title: "📓 4.4.0.3 Running Side Effects with the useEffect Hook"
day: weekend
id: 4-4-0-3-running-side-effects-with-the-useeffect-hook
hide_table_of_contents: true
---

You already know how to use `useState` to manage state inside a function component. Now let's learn about the companion hook for running **side effects**: `useEffect`.

Keep in mind that a **side effect** is not a React-specific term; instead, it's a way of describing functions in general. A function has side effects when it changes something outside of its own scope. Often this looks like making a network request to an API, but this also includes changing the value of a variable that exists outside of the scope of the function. Another good example of a side effect is updating a value in the DOM. 

As we know, when a function does not have side effects, we call it a **pure function**, where for any given input, you can always expect the same output. These functions are predictable, easy to test, simple to reason about, and easy to maintain and refactor.

With that review, let's dive into what the `useEffect` hook can do for us! We'll learn it by building a small standalone example app, then later apply it to Help Queue when we connect to Firebase.

## Setting Up an Example App
---

To explore `useEffect`, we'll build on the `counter-app` from the Introduction to State lesson in React Fundamentals. Recreate it now if you don't have it handy from before:

```
$ npx create-react-app counter-app
```

Replace the code in `src/App.js` with:

```js title="src/App.js"
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
```

And here's `src/Counter.js`, the same as in the Introduction to State lesson:

```js title="src/Counter.js"
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count!</button>
    </React.Fragment>
  );
}

export default Counter;
```

For the `useEffect` examples in this lesson, we'll need a second state variable so we can demonstrate how the dependency array works. Add `hidden` state and a second button:

```js title="src/Counter.js"
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(false);

  return (
    <React.Fragment>
      {hidden ? <h1>Count Hidden</h1> : <h1>{count}</h1>}
      <button onClick={() => setCount(count + 1)}>Count!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </React.Fragment>
  );
}

export default Counter;
```

Now we have two state variables to work with. We'll also add a `Timer` component later in the lesson.

## `useEffect`
---

We should use the `useEffect` hook when we want to run side effects in any of the following cases:

* After our component is first rendered
* When a specific state variable or prop changes
* After every re-render of our component

The last case is the default behavior for the `useEffect` hook. Let's take a look.

Open the `Counter` component, and update the code as shown here:

```js title="src/Counter.js"
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    console.log("effect!");
  });

  return (
    <React.Fragment>
      {hidden ? <h1>Count Hidden</h1> : <h1>{count}</h1>}
      <button onClick={() => setCount(count + 1)}>Count!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </React.Fragment>
  );
}

export default Counter;
```

We import `useEffect` alongside `useState` at the top of the file, then call it inside the component. It takes a callback function as its argument — that callback is the "effect" that runs. If we run our app and click the _Count!_ or _Hide/Show_ buttons, we'll see `"effect!"` logged each time, because every state change causes a re-render, and every re-render triggers the effect.

That's the default behavior: `useEffect` runs after every render.

Let's try adding something other than a `console.log()`. Update your `useEffect` hook to perform the following side effect:

```js
  useEffect(() => {
    console.log("effect!");
    document.title = count;
  });
```

With `document.title = count`, we're updating the `<title>` tag of our HTML to the current value of `count`. Now if we click the _Count!_ or _Hide/Show_ buttons, we'll see `"effect!"` logged each time and the page title will update to match `count`.

### Skipping Effects

As is, we can optimize our code in the `useEffect` hook. How? Well, we really only need to update the title of our HTML document to the new `count` value when `count` changes. Right now, it will get updated every re-render, which is caused by any change in state, including clicking the Hide/Show button.

React developers have a solution for this, and this is what it looks like:

```js
  useEffect(() => {
    console.log("effect!");
    document.title = count;
  }, [count]);
```

Notice that we've added a second argument to our `useEffect` hook: `[count]`. This second argument is called **a dependency array**, and it can contain one or more state variables or props within it. When we add a dependency array to our `useEffect` hook, we're saying that whether our effect should run depends on whether the value of the state variables in our dependency array have changed.

When we add `count` as our dependency, we're specifically directing `useEffect` to run the effect only if the value of `count` changes. If `count` does not change, the `useEffect` hook will skip the effect.

We can test this out. Now if we run our `counter-app` and click on our _Count!_ and _Hide/Show_ buttons, we'll only see our `"effect!"` message logged when we click on the _Count!_ button.

As noted above, adding a dependency array means the effect only runs when one of those dependencies changes — not after every render.

### Only Running the Effect Once

You can tell the `useEffect` hook to run its effect only once by passing in an empty dependency array:

```js
  useEffect(() => {
    console.log("effect!");
    document.title = count;
  }, []);
```

In this case, we're saying that our effect does not depend on the change of any state variables or props in our component, and it should only run once, after the first render.

We won't use this in our `counter-app` application now, but you can try it out if you like. Later on we'll use an empty dependency array to set up a subscription to our NoSQL database (provided by Firebase) once, after the first render of our component.

### Performing Clean-Up Tasks

Let's look at one last example with the `useEffect` hook to understand how we can perform clean up tasks. In this example, we'll create a timer that counts up from 0 every second. We'll also be able to pause the timer as well!

First, let's update our `App` component in the `counter-app` application to import and render a new `Timer` component. Here's the code:

```js title="src/App.js"
import './App.css';
import Counter from './Counter';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <Counter />
      <Timer />
    </div>
  );
}

export default App;
```

Next, let's create a new file called `Timer.js`, also in the `src` folder. Here's the code that we'll add inside of `Timer.js` to create the new `Timer` component:

```js title="src/Timer.js"
import React, { useState, useEffect } from 'react';

function Timer() {
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimer(timerState => timerState + 1)
      }, 1000
    )}

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <React.Fragment>
      {isActive ? <h1>{timer}</h1> : <h1>Timer Stopped</h1>}
      <button onClick={() => setIsActive(!isActive)}>Start/Stop</button>
    </React.Fragment>
  );
}

export default Timer;
```

We're doing quite a few things in our new `Timer` component, some of which should look familiar: 

* We're using two state variables, `timer` and `isActive`, to track the value of our timer and whether it is active or not. 
* We include a button to start and stop the timer.
* We use a `useEffect` hook to set up an interval when our timer is active, and to remove it when our timer is stopped.

Let's take a closer look at our `useEffect` hook.

```js
  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimer(timerState => timerState + 1)
      }, 1000
    )}

    return () => clearInterval(interval);
  }, [isActive]);
```

Notice that we have one dependency that we've passed into the `useEffect` dependency array: `isActive`. That's because we want our effect to run only when the value of `isActive` changes. 

This useEffect hook runs whenever `isActive` changes. If `isActive` is true (if the user started the timer), we set up an interval that increments the timer value every second.

But how do we stop the timer? That's where the optional `useEffect` clean up mechanism comes in handy. To use this mechanism, we need to return a function from `useEffect`'s callback function:

```js
  useEffect(() => {
    ...

    return () => clearInterval(interval);
  }, [isActive]);
```

The function we return is called a **cleanup function**. React calls it when the component unmounts, and also before re-running the effect on any subsequent render. In the case of our `Timer`, that means the interval is cleared whenever `isActive` changes, and then a new one is started only if `isActive` is `true`.

:::note
One thing worth noting: we're passing a callback function into `setTimer` rather than a value directly.

The normal way to update state is to pass the new value directly into the state setter, like this:
```js
setTimer(timer + 1)
```

But that would require us to list `timer` as a dependency in our `useEffect` hook, which would cause the effect to re-run every second (because `timer` changes every second). Instead, we can pass a function into the state setter, like this:

```js
setTimer(timerState => timerState + 1)
```

When you pass a function to a state setter, React passes the current state value in as the argument (here we name it `timerState`). This lets us update `timer` without listing it as a dependency in the effect — which means the effect won't re-run every second just because `timer` changed. For more detail on this pattern, see [What can I do if my effect dependencies change too often?](https://reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often)
:::

## Resources and Next Steps
---

Whew! We've covered a lot in this lesson. If anything about `useEffect` isn't feeling entirely clear, know that we'll be using it again when we connect Help Queue to Firebase — seeing it applied to a real problem will help it click. Before we start in on that, we're going to wrap up our introduction to hooks by reviewing the rules of hooks and how to write a custom hook.

Note that it's normal for unexpected things to happen when we're first learning about hooks and how to implement them. If you run into issues, you should always start by referencing [the React docs on Hooks](https://reactjs.org/docs/hooks-intro.html).

For docs specifically on the `useEffect` hook, visit these links:

* [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
* [Hook API Reference: useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
* [Hooks FAQ](https://reactjs.org/docs/hooks-faq.html)
