---
title: "📓 Introduction to Stacks and Queues"
day: tuesday
id: introduction-to-stacks-and-queues
hide_table_of_contents: true
---

In this lesson, we're going to learn about **stacks** and **queues**. We'll start by covering a brief overview of each. Then we'll write basic `stack` and `queue` functions.

Stacks and queues are both data structures that hold a list of elements. However, there is a key difference in how they work. A queue is **first in, first out** or **FIFO**. On the other hand, a stack is **last in, first out** or **LIFO**.

Let's use some examples of how both the FIFO and LIFO principles apply in our daily lives.

* When we get in a line (at the grocery store checkout counter, to go to a movie, or anything else), we expect the first person in line to get served first and so on. This is a prime example of FIFO. People would get very upset if the last people in line were served first.

* On the other hand, let's say we are reorganizing and stacking books from a bookshelf one at a time. When we take a book off the stack, we will most likely take it off the top of the stack, not the bottom. This is an example of LIFO because the last book added to the stack is the first one that's taken off the stack.

There are plenty of examples in computer programming where we'll use queues and stacks as well. For instance, we might be waiting in a help ticket queue at a code school like Epicodus. Or we might be waiting to download something and others are queued to download that thing first.

When it comes to stacks, we work with the JavaScript call stack every time we write JavaScript code. We can see this clearly in the following example:

```js
function first() {
  return second();
}

function second() {
  return third();
}

function third() {
  return "hello!"
}
```

When we call `first()`, what happens? `first()` calls `second()` which calls `third()`. But which one is actually _resolved_ first? Well, `first()` can't be resolved until `second()` is — and `second()` can't be resolved until `third()` is. How can the `first()` function ultimately return `"hello!"` unless the `third()` function resolves first?

This is the stack:

```
TOP OF THE STACK

third()
second()
first()

BOTTOM OF THE STACK
```

The technical term for each function is a stack is a **frame**. Whenever a function is called in the JavaScript runtime (the time our code is actually executed), the runtime creates a stack frame for that function. There is a limit to that stack — which you've probably noticed if you've ever run an infinite loop by accident and received a `Range error: maximum call stack size exceeded` error.

By the way, if you are confused about what the runtime _is_, in the Chrome browser or in Node (JavaScript backend environment) the runtime is the V8 engine.

And when it comes to queues, we are actually working with a queue every time we run async JavaScript code in the browser. The browser actually uses separate web APIs to run async code and when that async code is ready to run (such as when a response from an API is received), that code is actually put in a **callback queue** which is _not_ the call stack. So our synchronous code is put on the call stack (LIFO) while our asynchronous code is queued up in the callback queue (FIFO). Meanwhile, an event loop determines whether to run code from the call stack or the callback queue. You don't need to have a deep understanding of this to work with JavaScript. The point here is that we are regularly working with both stacks and queues whether we are aware of it or not!

### Writing Our Own Stack and Queue Functions

#### Exercise

Next, let's do a little exercise. See if you can write your own `stack()` and `queue()` classes which add and remove elements as needed. Here are some hints — and don't overthink it. It's actually surprisingly simple to do.

* Remember that both stacks and queues are data structures.
* What common data structure will allow us to easily add and remove elements?
* Stacks are last in, first out, which means we need to add things to the end of the data structure and remove things from the end of the data structure.
* Queues are first in, first out, which means we need to add things to the end of the data structure and then remove things from the beginning of the data structure.

Take a few minutes to write out these classes and then check out the solution below.

#### Solution

The hints hopefully made it fairly clear that we can use arrays to easily model both queues and stacks. `Array.prototype.push()` can be used to add elements to the end of either a stack or a queue. Meanwhile, we can use `Array.prototype.pop()` to remove elements from the end of a stack and we can use `Array.prototype.shift()` to remove elements from the beginning of a queue.

Here's our simple implementation of a stack:

```js
class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    return this.elements.push(element);
  }

  pop() {
    return this.elements.pop();
  }
}
```

Yep, that's it. That is really all a stack is doing — pushing and popping. Note that we can also use `Array.prototype.shift()` and `Array.prototype.unshift()` as well. This feels a bit closer to how a stack actually works since it adds an element to the beginning of the collection and then removes it from the beginning of the collection. The one downside to this approach is that it's a bit slower — that's because JavaScript needs to re-index the array each time an element is added or removed from the beginning of the stack.

Ultimately, either approach is fine — the most important thing is that whichever element was added to the stack most recently must also be the one that gets removed most recently — that's last-in, first-out (LIFO).

Here's our implementation of a queue — which will look very similar:

```js
class Queue {
  constructor() {
    this.elements = [];
  }

  enqueue(element) {
    return this.elements.push(element);
  }

  dequeue() {
    return this.elements.shift();
  }
}
```

There are a few differences here. First, we call our methods `Queue.prototype.enqueue()` and `Queue.prototype.dequeue()`. That's because when we add an item to a queue, it's known as **enqueuing** while removing an item from a queue is known as **dequeuing**.

Actual queues and stacks generally have other methods as well — and they are more complex than these very simple implementations. However, on a basic conceptual level, the code examples above encapsulate what we need to know about stacks and queues.

We'll get more practice with stacks and queues when we write certain algorithms. For instance, it's common to use a queue with a breadth-first search algorithm and a stack with a depth-first search algorithm.
