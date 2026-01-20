---
title: "📓 4.2.0.5 React Components"
day: weekend
id: 4-2-0-5-react-components
hide_table_of_contents: true
---

Components are the building blocks of React. Everything in a React application is a component.

Modern React applications use **function components**, though you may also see **class components** in older React codebases. All of the code we write will be added to functional components.

All React applications have a single root component called `App`. This `App` is a parent component for all the other components in an application. `create-react-app` automatically builds an `App` component for us, though we will always delete it and start from scratch when we build new applications.

## Function Components
---

Here's the basic structure of a function component:

```jsx
import React from "react";

function ThisIsAFunctionalComponent(){
  return (
    <div>
      {/* jsx code goes here */}
    </div>
  );
}

export default ThisIsAFunctionalComponent;
```

As we can see in the example above, a function component (also known as a functional component) is just a function that returns JSX. In this example, we're wrapping our JSX in a `<div>`, but components can return any valid JSX. We'll cover JSX in the next lesson.

We use an `import` statement to add the functionality we need. In this case, we need the `React` library. We also `export` the component so that it will be available to the rest of the application. We must always export components — otherwise, we won't be able to use them elsewhere!


## Nesting Components
---

As discussed at the beginning of this lesson, React applications have a root component called `App`. `App` is a **parent** to all the other components in an application. We could also say that all the other components in an application are the **children** of `App`.

* If `Component2` is nested inside `Component1`, we'd say that `Component2` is the child while `Component1` is the parent.

```
Component1 (Parent)
    |
Component2 (Child)
```

Components can also be siblings:

```
      Component1
      |        |
Component2  Component3
```

In the diagram above, `Component2` and `Component3` are siblings.

We will cover nesting in greater detail in future lessons, but for now, this covers the basics!

## React Applications Should Be Modular
---

Before we move on to the next lesson, there is one other important point to note. As we now know, a React application is made up of components. 

While it's possible to create an application that has just a few components, each with a lot of code, this is a bad practice.

Instead, our goal should be to create many small and modular components. This best practice allows us to fully separate our concerns. We will demonstrate this in greater detail in future lessons.

## Conclusion
---

In this lesson, we covered several key points:

* **Function components** are literally functions that returns a React element.

* **Nesting components** is a big part of developing with React. Components can be parents, siblings, children or any combination thereof.

* **Small, modular components** are the way to go. This makes our code easier to understand and allows us to separate presentational concerns.

If it's still not quite clear what a component is, that's to be expected — we haven't built one yet! However, building and using components will soon become second nature with React. Now that we understand the basic concepts behind components, we're ready to learn some JSX and actually build our first component.
