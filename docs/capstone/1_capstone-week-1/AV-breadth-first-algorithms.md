---
title: "📓 Breadth First Algorithms"
id: breadth-first-algorithms
hide_table_of_contents: true
day: tuesday
---

In the last lesson, we used a depth-first algorithm to determine if a target node in our friendship network is reachable from a starting node. In this lesson, we'll test and write a `Graph.prototype.breadthFirstReachable()` method. This method will do the exact same thing as our `Graph.prototype.depthFirstReachable()` method. The only difference is how the method will work. Instead of using a depth-first search, the method will use a breadth-first search.

This will feel a little bit different than our usual TDD process because we will use the exact same tests that we used in the last lesson. In other words, our tests are already written for us! Go ahead a create a `bfs.test.js` file in `__tests__` with the exact same tests that are in the `dfs.test.js` file. Then update the name of the `Graph.prototype.depthFirstReachable()` method to `Graph.prototype.breadthFirstReachable()`. Our goal here is just to verify that everything in our method works correctly as we won't get tests passing one at a time. That's because the method itself is extremely similar to the one we wrote in the last lesson.

The only difference is that we'll use a queue instead of a stack. That means each time we add new nodes to traverse, they will go to the end of the queue instead of the top of the stack. We will still evaluate the first element in the collection — but because it's a queue (and new items are being pushed to the end of the queue), this will be first-in, first-out (FIFO) instead of last-in, first-out (LIFO).

Here's the full updated method:

<div class="filename">src/bfs.js</div>

```js
breadthFirstReachable(startingNode, targetNode) {
    if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {
      return false;
    }
    let queue = [startingNode];
    let traversedNodes = new Set();
    while (queue.length) {
      const currentNode = queue.shift();
      if (currentNode === targetNode) {
        return true;
      } else {
        traversedNodes.add(currentNode);
        const adjacencyList = this.adjacencyList.get(currentNode);
        adjacencyList.forEach(function(node) {
          if (!traversedNodes.has(node)) {
            queue.push(node);
          }
        });
      }
    }
    return false;
  }
```

The first three lines in the method look exactly the same as our previous method:

```js
if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {
  return false;
}
```

This just ensures that both the `startingNode` and the `targetNode` exist in the graph and will get our first two tests passing. Once again, we don't want the overhead of doing a search algorithm if we can quickly determine whether a node exists in the list or not (which has O(1) time).

Now let's take a look at the very subtle difference between DFS and BFS:

<div class="filename">src/bfs.js</div>

```js
...
  let queue = [startingNode];
  let traversedNodes = new Set();
  while (queue.length) {
    const currentNode = queue.shift();
    if (currentNode === targetNode) {
      return true;
    } else {
      traversedNodes.add(currentNode);
      const adjacencyList = this.adjacencyList.get(currentNode);
      adjacencyList.forEach(function(node) {
        if (!traversedNodes.has(node)) {
          queue.push(node);
        }
      });
    }
  }
  return false;
}
...
```

Other than the fact that we changed the name of our collection from `stack` to `queue`, there is only one small change in the method. Can you find it?

The only difference is inside our inner loop when we do the following:

```js
queue.push(node);
```

Meanwhile, in the last lesson, we did the following instead:

```js
stack.unshift(node);
```

In both algorithms, we always traverse the first element in the collection each iteration through the loop. The difference is that when we add new elements to the queue, they go to the _end_ of the collection, which means they will be traversed last (a breadth-first search). Meanwhile, with the stack, they go to the _beginning_ of the collection, when means they will be traversed first (a depth-first search).

That is really the only difference between a DFS and a BFS. Despite that fact, the order at which items are traversed can make a huge impact on the overall efficiency of an algorithm. For instance, if we knew there was a high probability that a node is a friend or a friend of a friend, we probably won't want to do a DFS. Instead, we could just use a BFS to first check all friends and then check all friends of friends.

It may seem hard to believe that such a small change has such a big difference on how we'd search a graph. However, it does. If we implement a queue, it's the equivalent of saying "let's completely take a look at everything on this level before we go to the next level". Meanwhile, if we implement a stack, it's the equivalent of saying, "hang on, I'm going to completely explore everything in this branch before going to the next one."

Now that we've learned the basics of DFS and BFS, we're well on our way to having a basic understanding of graphs and how we can traverse them. We also have some new problem-solving tools to work with. In addition to our knowledge of two new algorithms (DFS and BFS), we can also see how we can use queues and stacks, two different data structures, to solve different kinds of problems. Whether that is using JavaScript's event loop or writing an algorithm, these data structures are absolutely essential.
