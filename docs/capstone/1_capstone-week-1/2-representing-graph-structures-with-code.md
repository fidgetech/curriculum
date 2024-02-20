---
title: "\U0001F4D3 Representing Graph Structures with Code"
id: representing-graph-structures-with-code
slug: representing-graph-structures-with-code
hide_table_of_contents: true
sidebar_position: 16
day: tuesday
type: lesson
url: >-
  https://github.com/fidgetech/capstone/blob/main/2_representing_graph_structures_with_code.md
---

In the last lesson, we learned about the basics of graph theory and looked at a few visual representations of graphs. While visualizing graphs is very useful, as we've learned from working with tree structures, we can't simply apply visualization to code. For instance, a search tree isn't actually a tree in code — even though we can depict it that way on a piece of paper. Instead, a search tree is simply a series of nodes where the parent nodes have references to their children.

So how can we represent a graph as code? Let's take a look at our interstellar travel again — but this time we'll make it an undirected graph. The aliens of Wobox are relieved!

![Undirected graph showing connections between planets.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/undirected_graph_planets.png)

To simplify things even further, we've also made it so there are no circuits. That means that it's not possible to "loop" back to a planet without backtracking.

To depict the graph above, we need to know about two things: the nodes and the edges.

We can start by storing all the nodes in a data structure such as an array.

```js
const nodes = ["Lub", "Nu", "Zygob", "Wobox", "Cyra"];
```

So how do we represent the edges? There are several ways to do this.

### Edge Lists

We can use an **edge list** to list all the edges between various nodes. Each edge can be written as a pair of values. For instance, we could depict the edge between Lub and Nu as:

```js
["Lub", "Nu"]
```

To depict all of the edges in our graph, we could do the following:

```js
const edges = [["Lub", "Nu"], ["Zygob", "Nu"], ["Nu", "Wobox"], ["Wobox", "Cyra"]];
```

Each pair represents one of the edges in our graph. The order of the pairs doesn't matter. We also only need to depict the pair once and don't also need to have a reversed copy. For instance, since we already have `["Lub", "Nu"]`, we don't need `["Nu", "Lub"]`.

If we wanted to see if a specific edge exists in a collection where the edges aren't ordered, we'd have to do a linear search through the collection, so that means O(N) runtime.

### Adjacency Lists

Another way to represent all the edges in a graph is with an **adjacency list**. With an adjacency list, we'd list _all_ of the nodes that each node is adjacent to. Let's use a JavaScript object to demonstrate.

```js
const adjacencyList = {
  "Zygob": ["Nu"],
  "Lub": ["Nu"],
  "Nu": ["Lub", "Zygob", "Wobox"],
  "Wobox": ["Nu", "Cyra"],
  "Cyra": ["Wobox"]
}
```

As we can see, each node is a key and all of the adjacent nodes are stored as a value. Adjacent nodes are stored multiple times — as we can see, Lub includes Nu as a value and Nu includes Lub as a value.

We can also use an adjacency list to represent directed edges as well. For instance:

```js
const adjacencyList = {
  "Wobox": [],
  "Cyra": ["Wobox"]
}
```

In this adjacency list, Wobox can't reach any nodes but Cyra can reach Wobox. Poor Wobox!

### Adjacency Matrix

Finally, we can use an **adjacency matrix** to depict all the edges in a graph. An adjacency matrix uses a series of zeroes and ones or booleans to depict whether two nodes are adjacent or not.

Here's how this looks organized in a table.

|       | Lub   | Zygob | Cyra  | Nu    | Wobox |
|-------|-------|-------|-------|-------|-------|
| Lub   | 0     | 0     | 0     | 1     | 0     |
| Zygob | 0     | 0     | 0     | 1     | 0     |
| Cyra  | 0     | 0     | 0     | 0     | 1     |
| Nu    | 1     | 1     | 0     | 0     | 1     |
| Wobox | 0     | 0     | 1     | 1     | 0     |

To depict this in JavaScript, we'd use nested arrays to represent each row in the matrix:

```js
const adjacencyMatrix = [
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [1, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
];
```

It may seem silly to represent a planet's relationship with itself in an adjacency matrix. However, there is a type of graph known as a **multigraph** where nodes can have multiple edges — including an edge that starts and ends at the same node. For example, a multigraph could look like this (some planets omitted for simplicity).

![An example of a multigraph.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/multigraph.png)

For this reason, it makes sense that an adjacency matrix also checks to see if an edge connects a node to itself.

Note that an adjacency matrix can also be used to show directed edges. For instance, the intersection of the row Cyra with the column Wobox could have a value of 1 while the intersection of the row Wobox with the column Cyra could be 0. Then the trip to Wobox would be one way after all.

If we want to see whether two nodes are adjacent in an adjacency matrix, we can do so in constant time O(1). For instance, in order to check if Lub and Nu are adjacent, we simply need to check `adjacencyMatrix[0][3]`. In other words, we just need to find the intersection of a specific column and row in the matrix.

However, there's also a downside. Adjacency matrixes can take up a lot of space, especially when considering **sparse** graphs. A graph is sparse if it doesn't have very many edges in relation to nodes. Why does this matter in terms of an adjacency matrix? Well, look at all the zeroes in the matrix above. We have to store information about the relationship between _every pair of nodes in the graph_ — even if they don't have an edge between them. That's a lot of empty space that doesn't exist in either an edge list or an adjacency list.

Also, if we want to find all the edges that the row Cyra has, we need to do a linear search of the entire row. Many of those values could be zeroes, so in a large data set, we are searching a lot of elements just to find a few adjacent nodes — especially in a sparse graph. Meanwhile, in an adjacency list, all the values corresponding to a node would represent adjacent nodes so there are fewer values to iterate through to get all the adjacent nodes.

### Summary

In this lesson, we've learned three ways to represent the relationships (or edges) between nodes:

* Edge lists
* Adjacency lists
* Adjacency Matrixes

In the next lesson, we'll start building out a small TDD application to create a graph, including adding and removing nodes and edges. At that point, we'll be ready to start learning algorithms to traverse a graph.