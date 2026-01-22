---
title: "📓 4.2.2.3 Unidirectional Data Flow"
day: tuesday
id: 4-2-2-3-unidirectional-data-flow
hide_table_of_contents: true
---

So far we have only been working with local state. However, when a user inputs data in our form, we somehow need to get that data from our `NewTicketForm` component to its parent `TicketControl` component.

Before we do that, we need to learn more about **unidirectional data flow**. Unidirectional data flow is a language-agnostic term for applications that have data flowing in only one direction.

In the case of React applications, data can only flow from a parent component _down_ to a child component. That's why shared state should always be lifted to a common ancestor. Only the component holding a piece of state and its child components will ever be able to access that state. Components that are higher up the component tree (above a component with state) have no way to know about that state because of unidirectional data flow. In fact, components in React are so modular that they don't even know their parents exist. It's the job of parent components to keep track of their children, not the other way around.

The same is true with props. We can only pass props _down_ from a parent component to a child component. That's the whole point of unidirectional data flow. It may seem like a limiting concept, but it makes planning, building, and debugging an application much easier. If state and props could flow in every direction, our applications would quickly become a mess.

So if data can only be passed _down_, then how can we get information from a child component up to a parent component?

The answer: we need to use **callbacks**. Here's how it works:

1. We define a function in a parent component that has state.
2. The parent component passes this function into the child component as a prop. Functions can be props just like any other data type.
3. We call this function in our child component, passing data as an argument.
4. When the child calls this function, the function in the parent component is invoked. Because the function lives in the parent component, the parent can access any data that's passed into it.

This may feel like we're breaking the rules of unidirectional data flow because the parent component can access information from the function call in the child component.

However, unidirectional data flow is still being maintained. The parent component passes props _down_ using unidirectional data flow. If a function is passed downward as a prop, then the child component can call that function. The child component is not passing any data _up_ to the parent component. Instead, the child component is simply invoking a function that was passed _down_ to it. The parent component is still in control of what happens with that data.

In our Help Queue application, we'll use this pattern to add new tickets:

When a user submits the form in `NewTicketForm` (child), we need that ticket data to reach `TicketControl` (parent) where our ticket list lives. So we'll create a function in `TicketControl` (parent) that knows how to add tickets, pass that function down to `NewTicketForm` (child) as a prop, and then call that function when the form is submitted.

In the next lesson, we'll walk through implementing this step-by-step. Don't worry if the concept still feels abstract — it will make much more sense once you see the actual code and how the pieces connect.
