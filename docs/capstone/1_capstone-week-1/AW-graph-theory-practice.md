---
title: ✏️ Graph Theory Practice
day: tuesday
id: graph-theory-practice
hide_table_of_contents: true
---

Now that we've learned the basics of graph theory, it's time to practice! First, walk through all the examples in the graph theory lessons and code along if you haven't already. Once you are done, you are ready for some additional challenges.

* Create an application that shows connections in a **directed** graph. To do this, create an application with ten nodes which are all locations. They could be locations for your hometown, for a mythical realm, or for an imaginary city. First, use [draw.io](draw.io) to draw your graph. Add nodes that are both one-way and two-way. (There are both one-way and two-way arrows in draw.io.) Make sure that some nodes are unreachable to others.

* Once you have completed your diagram, you will need to make some updates to your code. For instance, the `Graph.prototype.addNode()` method we wrote is undirected. You can update this method or add additional methods such as `Graph.prototype.addDirectedEdge()` and `Graph.prototype.addUndirectedEdge()`. It's up to you to determine how you want to implement a directed graph application. Just make sure to use TDD.

* Add a counter to determine how many steps it takes to traverse the entire graph using both BFS and DFS.

* **More challenging:** Try writing recursive versions of your DFS and BFS algorithms.

* **Difficult:** Write a `Graph.prototype.shortestPath()` method to determine the _shortest path_ between one node and another. The method should return the path (the nodes traversed) to get from the starting node to the targeted node.

* Once you've figured that out, time for another application refactor! Make the edges **weighted**. Each edge should now have a value associated with it that represents the distance between the two nodes. To do this, create an `Edge` class. Each instantiated edge should have a `distance` property. When calculating the shortest path, your `Graph.prototype.shortestPath()` method should take into account these distances.

* Finally, create a `Graph.prototype.allPaths()` method that returns _all_ paths — similar to what we might see with an application like GoogleMaps. Once again, this should return the paths between the starting node and the target node. The difference is that all the potential paths can be returned. Sort these paths from shortest to longest.

