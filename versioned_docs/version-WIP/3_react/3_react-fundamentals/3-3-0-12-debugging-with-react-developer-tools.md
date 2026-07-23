---
title: "📓 3.3.0.12 Debugging with React Developer Tools"
day: weekend
id: 3-3-0-12-debugging-with-react-developer-tools
hide_table_of_contents: true
---

While we can use `console.log()` statements and `debugger` to debug our React applications, there is another very useful tool called React Developer Tools which we can use to debug our code as well.

React Developer Tools is available for both Chrome and Firefox. You can download and install it as a [Chrome extension](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) or a [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).

Once it is installed, a **Components** tab appears in our browser's developer tools panel. This tab shows the full component tree of the running React app, and we can click any component to inspect its current props and state. That makes it much easier to track down prop-passing issues than sprinkling `console.log()` statements throughout our code. For our Help Queue, we can click on a `Ticket` component and confirm that it is receiving the right props.

To see React Developer Tools in action, check out the [React Developer Tools page](https://react.dev/learn/react-developer-tools) in the official React docs.
