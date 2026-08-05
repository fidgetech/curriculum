---
title: "📓 3.3.0.8 Building a Static Site"
day: weekend
id: 3-3-0-8-building-a-static-site
hide_table_of_contents: true
---

React renders your application as a tree of components, with `App.tsx` at the root. For any component to appear on screen, it has to be rendered inside another component's returned JSX, somewhere within that tree. In practice, this means each new component you create in this lesson will not show up on its own. After you build it, you will import it into the right parent component and add it to that parent's `return` statement, starting with `App.tsx` at the top of the tree.

Create a `components` directory inside the `src` directory of your `help-queue` project to keep things organized as you add more components. Move your `App.tsx` file into `src/components`, which is where all of your components will live. Leave `main.tsx` in the top-level `src` directory, since it is the entry point for your application rather than a component.

Next, we need to make a change to our `main.tsx` file so it knows where to find the `App` component. Currently, `main.tsx` thinks that `App` is in the same directory:

```tsx title="src/main.tsx"
import App from './App';
```

However, since we've moved our `App` component into a directory called `components`, we need to update that import statement:

```tsx title="src/main.tsx"
import App from './components/App';
```

We will always make this update when beginning a new application with Vite.

Save the file and check your browser. If your development server isn't already running, start it with `npm run dev` and open the URL it prints (typically _http://localhost:5173_). Since we've only moved a file and updated its import, your site should load exactly as it did before, displaying "Help Queue" and the ticket information.

Now we're ready to create our first component. We'll start with our header. Create a new file called `Header.tsx` and add it to the `components` directory. Note that `Header.tsx` is capitalized. It is standard naming convention to capitalize component names.

Here's our new component:

```tsx title="src/components/Header.tsx"
function Header(){
  return (
    <h1>Help Queue</h1>
  );
}

export default Header;
```

As we can see, we've barely added anything. Our header just returns a single `<h1>` tag. As always, we need to export the component so it's available to the rest of our application. We imported and exported files in the same way when we worked with modules in Intermediate JavaScript.

Note also that we didn't need to wrap our JSX code in a fragment. This is because our component is only returning one element. If we were returning multiple elements, we'd need to use a fragment.

This component may seem too small but it really isn't. A more complex header might have more code in it, and yet even if it didn't, it makes sense to separate the header into its own component. After all, it doesn't have anything to do with tickets or a button for a form. Also, we may well need to add more to our header later and it's already nicely separated.

Next, we need to add our component to `App.tsx`:

```tsx title="src/components/App.tsx"
import Header from "./Header";

function App(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <>
      <Header />
      <h3>3a</h3>
      <h3>{name} and {name2}</h3>
      <p><em>React component not rendering!</em></p>
      <hr/>
    </>
  );
}

export default App;
```

We've made a few changes here:

* First, we need to import our new `Header` component.

* Next, we need to add `<Header />` as a child element of the fragment. We've also removed the code for the header from `App` because that code is now in the `Header` component.

Save the file and check your browser. You should still see the "Help Queue" header rendered at the top of the page. Note that we haven't actually changed anything on the page. We just moved the code for the header into its own component and imported it into `App`. This is a good example of how we can make our code more modular without changing anything about how the application looks or works.

## Building TicketList and Ticket

We have two more components to build: `TicketList` and `Ticket`. The relationship between them is that `TicketList` will contain individual `Ticket` components, and as our application grows, it will eventually hold many of them. We keep them as separate components because each represents a distinct concern: the list as a whole versus a single ticket within that list. This is exactly the component hierarchy we mapped out in the planning lesson, so refer back to that diagram if you want a reminder of how these pieces fit together.

Let's go ahead and create our `TicketList` component. Add a `TicketList.tsx` file to `src/components`.

Here's our new component. We'll be moving all of the ticket-related code out of `App.tsx` and into this component and its child component, `Ticket`:

```tsx title="src/components/TicketList.tsx"
import Ticket from "./Ticket";

function TicketList(){
  return (
    <Ticket />
  );
}

export default TicketList;
```

Our ticket list just needs to have a list of tickets. However, we will have a separate `Ticket` component, so for now, our `TicketList` will just hold the `Ticket` component. We will be building this out further in the next few lessons. Note that we are importing the `Ticket` component even though we haven't built it yet. The application will not compile properly if you try to run it now.

Finally, we'll add our `Ticket` component:

```tsx title="src/components/Ticket.tsx"
function Ticket(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <>
      <h3>3a</h3>
      <h3>{name} and {name2}</h3>
      <p><em>React component not rendering!</em></p>
      <hr/>
    </>
  );
}

export default Ticket;
```

We've moved most of the code that was originally in our `App` component into our `Ticket` component.

This is what our `App` component should look like after moving the ticket information into our `Ticket` component:

```tsx title="src/components/App.tsx"
import Header from "./Header";
import TicketList from "./TicketList";

function App(){
  return ( 
    <>
      <Header />
      <TicketList />
    </>
  );
}

export default App;
```

As we can see, our `App` component is really just a container for our other components now.

Now that the `Ticket` component exists, the application will compile again. Save your files and check your browser. You should see the full static site, with the header on top and the ticket information below it, looking just as it did before we split everything into components.

It may not seem like we've done much yet, but we've successfully separated our Help Queue into multiple components. We'll add a component with a button for showing a form when we are ready to work with state.

The importance of making small, modular components may not be obvious when our application is so simple. However, it's extremely important to practice separating components like this. It's not just a best practice. It's what makes React so modular and DRY. It will also make your life much easier when you work with larger React applications.

The article [Thinking in React](https://react.dev/learn/thinking-in-react), which is featured in the React documentation, outlines how professional React developers approach creating projects.

Before continuing, read the first two steps in the article above (_Break the UI Into a Component Hierarchy_ and _Build a Static Version in React_). These steps discuss how to mock-up a React application, break its UI into a component hierarchy, and build a static version. This is an essential skill to learn.
