---
title: "📓 3.3.0.6 Introduction to JSX"
day: weekend
id: 3-3-0-6-introduction-to-jsx
hide_table_of_contents: true
---

In this lesson, we'll learn the basics of JSX, a syntax extension that adds special syntax capabilities to JavaScript. Specifically, JSX combines elements of both HTML and JavaScript.

We'll start by again replacing the content inside the App component in the `App.tsx` file. We'll build from scratch a simple function component that uses JSX.

JSX is a syntax extension that combines JavaScript with HTML. It makes React code much easier to read, write, and understand. For this reason, almost all React development teams use JSX. While we could technically write React applications with vanilla JavaScript, it would be very cumbersome.

Browsers don't understand JSX, so it needs to be compiled into regular JavaScript. Fortunately, Vite takes care of this for us behind the scenes, so we don't have to worry about it.

Replace the content of `App.tsx` with the following code. This example shows a single sample help ticket: its section ("3a"), the names of the students who need help, and a brief description of the issue.

```tsx title="src/App.tsx"
function App(){
  return (
    <>
      <h1>Help Queue</h1>
      <h3>3a</h3>
      <h3>Thato and Haley</h3>
      <p><em>React component not rendering!</em></p>
      <hr/>
    </>
  );
}

export default App;
```

Save the file and check your browser at _http://localhost:5173_. You should see the "Help Queue" heading along with the sample ticket's section, names, and description. Because the dev server reloads automatically whenever we save, our changes appear right away without us needing to refresh.

As we can see, our return statement is mostly standard HTML. In this context, this is actually JSX syntax, which recognizes standard HTML. Under the hood, JSX compiles down to plain JavaScript function calls that create these elements. Historically, that meant calling a method named `React.createElement()` for every element, but modern tooling like Vite uses an automatic JSX runtime that handles those calls for you. This is also why we don't need to `import React` at the top of the file, as we saw in the previous lesson. While it looks like we are writing HTML, this is actually **syntactic sugar**. Syntactic sugar is when a language or library provides an easier way to write and read code. This way we can write HTML without worrying about creating each element by hand.

We also use a new piece of syntax called a **fragment**, written as `<>...</>`. In order to return multiple elements, all the code in a function component's return statement must be wrapped in a single element. A fragment lets us do this without adding an extra node to the DOM, and it requires no import. We'll use the shorthand `<>...</>` throughout this curriculum.

If our component returns multiple elements and we don't wrap them in a single element, we'll get the following parsing error:

```
Adjacent JSX elements must be wrapped in an enclosing tag.
```

You may also see other approaches in older code. Wrapping elements in a `<div>` still works, but it's no longer preferred because it clutters the DOM with unnecessary divs, which is exactly the problem fragments were created to solve. You may also see fragments written in their longer form, `<React.Fragment>...</React.Fragment>`, which does the same thing as the shorthand but requires importing `React`.

While JSX may look like HTML, there are ways in which JSX is more like JavaScript. For instance, if we wanted to add a class to a div, we'd use `className` instead of `class`, like this:

```tsx
<div className="class-name"></div>
```

The reason is that `class` is a reserved word in JavaScript, so JSX uses `className` instead. In general, JSX attribute names follow JavaScript's DOM property naming rather than the HTML attribute names. You'll run into another example of this later when we build forms: the HTML `<label for="">` attribute becomes `htmlFor` in JSX.

We can also evaluate expressions inside curly braces. Update `App.tsx` to look like the following:

```tsx title="src/App.tsx"
function App(){
  const name = "Thato";
  const name2 = "Haley";

  return (
    <>
      <h1>Help Queue</h1>
      <h3>3a</h3>
      <h3>{name} and {name2}</h3>
      <p><em>React component not rendering!</em></p>
      {/* This is a JSX comment. */}
      <hr/>
    </>
  );
}

export default App;
```

Save the file and check your browser again: the names now come from variables, but they look exactly the same on screen.

In the above example, we are storing the names on the help ticket inside variables. We can then express the values of these variables using curly braces `{}`.

Note also the odd syntax for the comment above. JSX doesn't recognize either JS or HTML comments. To actually add a comment to JSX (which we'll generally avoid), we have to store a JS comment _inside_ curly braces so it will properly be evaluated as a comment. One nice thing about VS Code is that it will automatically use the correct syntax when we use the keyboard shortcut  for comments:

* `Command` + `/` for Mac
* `Ctrl` + `/` for Windows

We will always use curly braces for any JavaScript expression in JSX. Think about curly braces as a way to escape JSX back and return to vanilla JS. 

Finally, we need to know the syntax for rendering a child component within a parent component. We covered this briefly when we discussed our `main.tsx` file, which renders the `App` component using the following syntax: `<App />`. React lets us call a component by name using JSX element syntax, in essence creating a custom tag. 

This is a preview of syntax we'll use very soon. As we build out the Help Queue, we'll create components like `Header` and `Ticket` and render them inside `App` in exactly this way. For example, if we were working in `ParentComponent.tsx` and we wanted to render its child component, the return statement might look something like this:

```tsx
return (
  <>
    <ChildComponent />
  </>
);
```

For now, that's really all we need to know about JSX. We will cover using looping and conditionals as well as making forms and other JSX styling syntax in future lessons.

### Separation of Concerns

Before we move on to building out our Help Queue further, there's one other key point to address. We have spent prior sections focusing on keeping our concerns separate. Specifically, we've focused on keeping our UI logic separate from our business logic.

For that reason, it may seem strange to mix HTML and JavaScript syntax as we do with JSX.

However, remember that React is only the view layer. As a view library (not a framework), React only cares about presentation. Its job is to render the virtual DOM (reconciling it with the real DOM) leading to a more seamless user experience. Since developers have traditionally used HTML and JS to render the DOM, it makes sense to combine the advantages of both.
