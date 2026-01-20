---
title: "\U0001F4D3 Building Graphs Part 2"
id: building-graphs-part-2
slug: building-graphs-part-2
hide_table_of_contents: true
sidebar_position: 20
day: tuesday
type: lesson
url: >-
  https://github.com/epicodus-curriculum/capstone/blob/main/4_building_graphs_part_2.md
---

Let's start building our application now using the testing structure from the [Computer Science Testing Environment](/capstone/capstone-week-1/computer-science-testing-environment-setup) lesson.

We are going to keep this application very simple. In fact, our nodes will just be strings. That way, we can focus entirely on building a `Graph` class without worrying about a `Node` class.

So let's think about the simplest possible behavior our `Graph` class should have. We should be able to instantiate a graph with an empty data structure where we will store information about nodes and edges. So which data structure should we use?

Remember, we have three options:

* Edge list
* Adjacency list
* Adjacency matrix

We aren't going to do an edge list because honestly, it's not that great for searching. We'd have to look through the entire collection of pairs just to see a list of someone's friends. That's not very efficient.

That leaves an adjacency list or an adjacency matrix. We are going to use an adjacency list for a number of reasons. First, we can store additional data in an adjacency list (such as information about nodes and edges). We won't do that here, but it's an advantage that an adjacency list has over an adjacency matrix.

An adjacency list is also more efficient than an adjacency matrix for checking a node's adjacent nodes — and in the context of this application, that means it's more efficient for looking at a list of someone's friends. That is a pretty important operation. Why is it more efficient? Well, finding adjacent nodes is an O(N) search for both adjacency lists and adjacency matrixes. However, with an adjacency list, we just need to iterate over a list of adjacent nodes (in this case, a list of someone's friends). In the case of an adjacency matrix, we'd need to iterate over _all_ nodes — that is, everyone in the application, and check to see if each person is a friend or not. So imagine if our application has a million users. We want to see a list of Jasmine's friends. (She has fifty friends in the application in all.) It makes much more sense to iterate through a list of those fifty friends to see them than to iterate through _all_ one million users, checking to see if each is a friend or not.

Now that we've decided to use an adjacency list, we know that when we instantiate a `Graph`, it should come with an empty adjacency list.

We are going to use a `Map` to store this list. While we could keep things very simple and just use a JavaScript object, there are performance advantages to using a `Map` — and we can easily use a `Map`'s built-in methods to add nodes and edges to our adjacency list. What are the performance advantages? Well, for one thing, a `Map` uses a hash table lookup algorithm under the hood. The ES6 specs guarantee at least an average of **sub-linear complexity** for `Map` implementations. But what does that mean? Well, sub-linear complexity means that the Big O needs to be better than linear time (O(N)), so that could be something like O(1) constant time or O(log n) logarithmic time.

Meanwhile, if we used an object instead, we'd need to iterate through the object — and object iteration isn't optimized already, which means we'd have a Big O of O(N). So iterating through objects is slower.

### Instantiating a Graph

Our first check will make sure that we can correctly instantiate a new graph with an empty adjacency list:

<div class="filename">__tests__/graph.test.js</div>

```js
import Graph from '../src/graph.js';

describe('Graph', () => {

  let graph = new Graph();

  afterEach(() => {
    graph = new Graph();
  });

  test('should correctly instantiate a graph', () => {
    expect(graph.adjacencyList.size).toEqual(0);
  });
});
```

Note that we start by instantiating a new graph and also add an `afterEach()` block to reset the graph after each test. It's overkill for just one test but it will DRY up future tests.

In the test itself, we `expect(graph.adjacencyList.size).toEqual(0)`. Maps have a `size` property, which means we can just check to see if our graph's `adjacencyList` has a `size` property that's equal to zero (an empty map).

Here's the code to get this passing:

<div class="filename">src/graph.js</div>

```js
export default class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
}
```

### Creating Nodes

What's the next thing we need to do? Well, we need to be able to add people to our social network. People are the equivalent of nodes in a graph. We'll keep our methods sufficiently abstract so they pertain more to creating graphs in general than building social networks more specifically. For that reason, we'll add a `Graph.prototype.addNode()` method, not a `Graph.prototype.addFriend()` method.

Here's our new test.

<div class="filename">__tests__/graph.test.js</div>

```js
...
  test('should add a new node', () => {
    graph.addNode("Jasmine");
    expect(graph.adjacencyList.get("Jasmine").size).toEqual(0);
  });
...
```

We should be able to add a node via a `Graph.prototype.addNode()` method. We don't have a `Graph.prototype.getNode()` method yet so we can't use that for our expectation. For that reason, we'll just access the node via the graph's `adjacencyList`. Since the `adjacencyList` is a `Map`, we can use `Map.prototype.get()` to get the value associated with the key. Why are we looking for a `size` property again once we get the value related to Jasmine? Well, each key in our adjacency list will be a `Set`. A `Set` is a collection of entirely unique values. Jasmine and Ada can be friends only once — not three times — so we want to make sure that a node can occur in the collection only once. That's where using a JavaScript `Set` comes in handy.

Once again, the ES6 specifications guarantee that `Set` implementations generally have sub-linear complexity — so `Set`s are also pretty efficient and much better than using a collection like an array.

Returning to our test, it should be clear why the size of the initial set should be zero. We want to add Jasmine as a key to our adjacency list map. However, Jasmine doesn't have any friends yet — so the set representing adjacent nodes is still empty. Don't worry — Jasmine will have some friends soon.

Here's the code we need to pass our test:

<div class="filename">src/graph.js</div>

```js
export default class Graph {
  ...
  addNode(name) {
    this.adjacencyList.set(name, new Set());
  }
}
```

As we can see, the implementation is simple. We use `Map.prototype.set()` to add a key-value pair to our `adjacencyList`. The key will be the name of the node we are adding and the value will be an empty `Set`.

### Checking to See if Nodes Exist

What's the next behavior we should implement? Well, we need to know whether a node exists in our graph or not. That means the next step is to add a `Graph.prototype.hasNode()` method. The simplest behavior for this method will be to return `false` if the node doesn't exist in the adjacency list.

Here's a test:

<div class="filename">__tests__/graph.test.js</div>

```js
...
  test('should return false if the node does not exist in the adjacency list', () => {
    expect(graph.hasNode("Ada")).toEqual(false);
  });
...
```

And here's the minimum code in a `Graph.prototype.getNode()` method to get this test passing:

<div class="filename">src/graph.js</div>

```js
...
  hasNode(name) {
    return false;
  }
...
```

Now we need to write a test for when a node _does_ exist in a graph:

<div class="filename">__tests__/graph.test.js</div>

```js
...
  test('check to see if node exists in graph', () => {
    graph.addNode("Jasmine");
    expect(graph.hasNode("Jasmine")).toEqual(true);
  });
...
```

To get this test passing, we can use a method that a `Map`'s prototype offers. Here's the update to our method:

<div class="filename">src/graph.js</div>

```js
...
  hasNode(name) {
    if (this.adjacencyList.get(name)) {
      return true;
    }
    return false;
  }
...
```

We take advantage of `Map.prototype.get()`, which either returns a value of a key in a map or returns `undefined` if the key doesn't exist. Here's a situation where our code is already more efficient because we are using maps instead of just iterating through a basic object. To check if our graph has a node, we need to do a search. Because we are using `Map.prototype.get()` instead of looping through an array or object, calling this method has sub-linear complexity instead of linear complexity (O(N)).

Now that we've added all the basic functionality for nodes other than removing nodes, which we'll get to later, we're ready to start adding functionality for edges.

### Adding Edges

At this point, we have methods to add nodes to a graph and to see whether a node exists in our graph. The next step is to add functionality to add relationships between nodes.

In other words, we need to be able to add edges, which means we need a `Graph.prototype.createEdge()` method.

As always, we'll start with a test:

<div class="filename">__tests__/graph.test.js</div>

```js
...
  test('add an edge between two nodes', () => {
    graph.addNode("Jasmine");
    graph.addNode("Ada");
    graph.createEdge("Jasmine", "Ada");
    expect(graph.adjacencyList.get("Jasmine").has("Ada")).toEqual(true);
    expect(graph.adjacencyList.get("Ada").has("Jasmine")).toEqual(true);
  });
...
```

First, we need to add two nodes to our test. Then we need to create an edge between these two nodes with a `Graph.prototype.createEdge()` method. Note that this test has two expectations. Remember that this is an **undirected** graph — a friendship goes two ways, not one. That means we need to add each node to the other's adjacency node list. If this were a directed graph, we'd just update one adjacency list — and the order of arguments in our `Graph.prototype.createEdge()` method would matter.

Note also that we have to do some chaining in our expectations to reach the values we want. We start by using `Map.prototype.get()` to get the value associated with a node, which happens to be a set. Then we use `Set.prototype.has()` to determine whether the set actually has the node we are looking for.

If the worst-case scenario in terms of Big O is O(N) for both of these operations, that means with chaining we have O(2N) — so still O(N). However, the worst-case will be rare and the average-case will be sub-linear complexity.

Here's the method to get this test to pass:

<div class="filename">src/graph.js</div>

```js
...
  createEdge(node1, node2) {
    let set1 = this.adjacencyList.get(node1);
    let set2 = this.adjacencyList.get(node2);
    set1.add(node2);
    set2.add(node1);
  }
...
```

To create an edge, we need information about the nodes we want to create an edge between. That means our method takes two arguments. We need to grab the set associated with each node. Then we need to add each node to the other node's list of adjacent nodes. Remember that because these are sets, we don't need to worry about duplicates — JavaScript will take care of that for us.

We can also make our method more concise with additional chaining:

<div class="filename">src/graph.js</div>

```js
createEdge(node1, node2) {
  this.adjacencyList.get(node1).add(node2);
  this.adjacencyList.get(node2).add(node1);
}
```

### Checking to See If An Edge Exists

We _could_ just do something like the following whenever we want to see if an edge (in this case, a friendship) exists:

```js
graph.adjacencyList.get("Ada").has("Jasmine")
```

This would check to see if Ada and Jasmine are friends.

However, this is pretty important functionality for our application to have. That means we should add it.

Let's start with the easiest behavior — just returning `false`.

<div class="filename">__tests__/graph.test.js</div>

```js
...
  test('check to see if edge exists in graph', () => {
    graph.addNode("Jasmine");
    graph.addNode("Ada");
    expect(graph.hasEdge("Jasmine", "Ada")).toEqual(false);
  });
...
```

Here's the implementation:

<div class="filename">src/graph.js</div>

```js
...
  hasEdge(node1, node2) {
    return false;
  }
...
```

Now that we have that test passing, we're ready to move on. Typically, we won't update tests we've already written but we are going to make an exception here.

We will update the following test to use our new method:

<div class="filename">__tests__/graph.test.js</div>

```js
...
  test('add an edge between two nodes', () => {
    graph.addNode("Jasmine");
    graph.addNode("Ada");
    graph.createEdge("Jasmine", "Ada");
    expect(graph.adjacencyList.get("Jasmine").has("Ada")).toEqual(true);
    expect(graph.adjacencyList.get("Ada").has("Jasmine")).toEqual(true);
  });
...
```

Instead of expecting `graph.adjacencyList.get("Ada").has("Jasmine")` to equal true, why not just apply our new method instead?

Our updated test looks like this:

<div class="filename">__tests__/graph.test.js</div>

```js
...
  test('add an edge between two nodes', () => {
    graph.addNode("Jasmine");
    graph.addNode("Ada");
    graph.createEdge("Jasmine", "Ada");
    expect(graph.hasEdge("Ada", "Jasmine")).toEqual(true);
  });
...
```

As we can see here, we now expect `graph.hasEdge("Ada", "Jasmine")).toEqual(true);`.

This test will fail — let's update our `Graph.prototype.hasEdge()` method now:

<div class="filename">src/graph.js</div>

```js
...
  hasEdge(node1, node2) {
    if (this.adjacencyList.get(node1).has(node2)) {
      return true
    }
    return false;
  }
...
```

Because this is an undirected graph, it doesn't matter which way we check the relationship — each node is adjacent to the other node. So we just check that the set associated with the `node1` key includes `node2`. If it does, our method will return true.

That's all we need to get all our tests passing.

### Removing Edges

We should also be able to remove an edge as well — no more friendship, sadly...

Here's the test:

<div class="filename">__tests__/graph.test.js</div>

```js
...
  test('remove an edge between two nodes', () => {
    graph.addNode("Jasmine");
    graph.addNode("Ada");
    graph.createEdge("Jasmine", "Ada");
    graph.removeEdge("Jasmine", "Ada");
    expect(graph.hasEdge("Ada", "Jasmine")).toEqual(false);
  });
```

In this test, we first create two nodes and add an edge. Next, we'll call `graph.removeEdge("Jasmine", "Ada");`. Based on removing that edge, our expectation should show that there's no longer an edge between the Ada and Jasmine nodes.

Now let's get this test passing:

<div class="filename">src/graph.js</div>

```js
...
  removeEdge(node1, node2) {
    this.adjacencyList.get(node1).delete(node2);
    this.adjacencyList.get(node2).delete(node1);
  }
...
```

Because this is an undirected graph, both nodes include the other node in their set of adjacent nodes. That means we need to remove `node1` from `node2`'s adjacent nodes and vice versa. Here's another situation where having sub-linear complexity benefits us. If we were doing our own implementation with objects and arrays, we'd need to do an O(N) search to get a node and then another O(N) search to find the node to delete. Removing the node from the array would then shift all the remaining indexes of the array — yet another O(N) operation. Then we'd do that all over again going in the other direction. While O(6N) still boils down to O(N), it should be clear that having more efficient code can really help us in the long run, especially if our data sets get especially large.

### Removing Nodes

Finally, let's add some functionality for removing nodes. We saved this for last since it's a bit more complex than the functionality we've built so far. That's because it's not as simple as just deleting a node. We also need to delete all references to that node in the rest of the adjacency list. In the context of a social network application, when we remove a person from the app, everyone else that's friends with that person will no longer have them listed as a friend because it's only possible to be friends with someone who is also on the app.

<div class="filename">__tests__/graph.test.js</div>

First, a test:

```js
...
test('should delete a node and all of its adjacent nodes', () => {
      graph.addNode("Ada");
      graph.addNode("Jasmine");
      graph.addNode("Lydia");
      graph.createEdge("Ada", "Jasmine");
      graph.createEdge("Ada", "Lydia");
      graph.removeNode("Ada");
      expect(graph.hasNode("Ada")).toEqual(false);
      expect(graph.hasEdge("Jasmine", "Ada")).toEqual(false);
      expect(graph.hasEdge("Lydia", "Ada")).toEqual(false);
  });
...
```

This is a pretty wordy test (and at some point, it would be good to look at ways to DRY our tests further). First, we need to add three nodes and then create edges between our first node and the others. Why are we doing this? Well, we want to make sure that we are correctly removing all edges that refer to the deleted node. We also have three expectations — which is on the heavy side. Ideally, we'd break this test up into a few smaller behaviors (just deleting a node first before testing to see if edges were successfully removed), but we're doing it all in one test here.

We expect the node we've deleted to be gone. However, we still have two other nodes that have references to the deleted node — so we also expect those references to be gone as well.

Let's implement the method now:

<div class="filename">src/graph.js</div>

```js
...
  removeNode(name) {
    if (this.adjacencyList.has(name)) {
      this.adjacencyList.get(name).forEach((edge) => {
        this.adjacencyList.get(edge).delete(name);
      });
      this.adjacencyList.delete(name);
    }
  }
...
```

First, we check if the node we want to delete exists as a key in the adjacency list (`(this.adjacencyList.has(name))`). Based on our test, the node represents Ada which exists in our graph.

Next, we call `this.adjacencyList.get(name)`. This is the `Set` of edges associated with the node we want to delete. In the case of Ada, the edges (or friendships) are Jasmine and Lydia.

For each edge, we need to do the following: `this.adjacencyList.get(edge).delete(name);`. So for our first edge (Jasmine), we grab the key associated with Jasmine and then remove Ada from her friendships. Next, we do the same with the second edge (Lydia). We grab the key associated with Lydia and then remove Ada from her friendships, too. 

At this point, we've removed all of the edges related to Ada in other nodes. The last step is to delete the node itself — in this case, Ada, removing her entirely from the application.

A few other things to note here. We use arrow notation (`=>`) so that `this.adjacencyList` remains bound to the same `this` both inside and outside the loop. If it weren't for `=>`, the `this` inside the loop would lose its binding and be `undefined`.

So what is the runtime complexity of this algorithm? It's hard to pinpoint exactly without fully knowing everything JavaScript is doing to optimize sets and maps under the hood. However, we can make some educated guesses.

* `this.adjacencyList.has(name)` has sub-lineal complexity. We know that maps use hash tables under the hood. This may be close to O(1) lookup.

* Looping through the set of adjacent nodes is O(N), which is typical with basic loops.

* Inside the loop, we need to get an edge and remove it — which depending on how ES6 implements deleting items from a set, is at least sub-lineal complexity and possibly even close to O(1).

On the other hand, imagine that we implemented our own basic functionality where we needed to first iterate through the set of adjacent nodes and then had to iterate again through each node's adjacent nodes to find which one needed to be deleted. That would be O(AB), which isn't so great. (It would not be O(N<sup>2</sup>) because the nested loop iterates over a _different_ set in the outer loop.)

At this point, we have everything in place to add and remove nodes and edges from our graph application. We can also check to see if a node or edge exists in the adjacency list and we can return all of a node's edges.

The next step is to learn about traversing our graph — and that means applying BFS and DFS — breadth-first search and depth-first search algorithms. We will start learning about these algorithms in the next lesson.
