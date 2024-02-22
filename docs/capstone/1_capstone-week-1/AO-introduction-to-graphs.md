---
title: "📓 Introduction to Graphs"
day: tuesday
---

In computer science, a **graph** (also known as a network) is a collection of **nodes** (also known as vertices) and **edges** (also known as links or relations). We can think of nodes as _things_ while the edges describe the _relationships_ between those things. The study of graphs is known as graph theory and it fits into the larger field of network theory, which is useful for understanding everything from social networks to databases.

We've have actually been working with graphs a lot already. That's because the tree data structures we learned in the last section are graphs with additional rules. We'll talk about this more soon.

First, let's take a look at a hypothetical example of a graph:

![Graph shows interstellar routes between planets.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/graph_theory_planets.png)

An advanced interstellar civilization has set up travel routes between five planets. In this graph, the planets represent **nodes**. The travel routes between each planet represent **edges**. Edges can be **directed** (pointing in one direction) or **undirected** (pointing in both directions). If this terminology mostly sounds familiar already, it's because the tree structures we've been working with already are directed graphs!

In the solar system above, it's possible to travel roundtrip between Lub and Nu because they are connected by an undirected edge. However, it's only possible to fly one way from Nu to Cyra because they are connected by a directed edge and the edge is pointing from Nu to Cyra. As the chart shows, the only way to fly from Zygob to Cyra would be:

Zygob -> Lub -> Nu -> Cyra

Also, notice that the edge between Nu and Wobox points in only one direction — towards Wobox. This illustrates another key concept of graphs known as **reachability**. Once you go to Wobox, there is no way to get to any other planet. As a result, the rest of the graph is unreachable from this node.

Similarly, as we demonstrated above, the reachability of Cyra from Zygob is:

Zygob -> Lub -> Nu -> Cyra

If the graph above were completely undirected, we'd be able to travel round-trip to Nu without any backtracking:

![We can make a round trip between Lub, Nu, Zygob, and Cyra without backtracking.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/graph_circuit.png)

In the image above, we could make a round trip to Nu without backtracking by doing either of the following:

```
Nu -> Cyra -> Zygob -> Lub -> Nu
```

```
Nu -> Lub -> Zygob -> Cyra -> Nu
```

There's no backtracking needed. For instance, if there were no edge between Zygob and Cyra, the only round trip to Nu would involve going to another node and then going back over the same edge again.

When we can loop to a node without backtracking, the loop is known as a **circuit**.

A graph can also be **weighted** or **unweighted**. If a graph is weighted, its edges have numerical values associated with them. If it's unweighted, its edges do not have numerical values.

We could make the graph above weighted by adding a numerical value to each edge. That numerical value could represent the distance between each planet, the cost to travel between planets, or even something like the number of aliens traveling between each planet. 

Meanwhile, each node (such as Lub) can also contain information as well. As we mentioned at the beginning of the lesson, nodes are _things_ while edges depict _relationships_. So a node could be an object with many properties. For instance, each planet might have `name`, `mass`, `population` and `atmosphericComposition` properties.

As we've already mentioned, trees are a special kind of graph. For instance, let's take another look at a binary search tree.

![Image of binary search tree with directed edges.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/directed_binary_search_tree.png)

We've made an update to this image of a binary search tree — now we depict it with directed edges. That's because in a tree data structure, parent nodes have knowledge of their children but child nodes don't know about their parents. To traverse a binary search tree (or other tree data structures), we need to start at the root node and work our way down. We can't start at a child node and work our way up because the edges of tree structures aren't undirected.

At this point, it should be clear that a binary search tree (and other trees) are just graphs with special rules. In addition to having directed edges, they have other special rules as well. For instance, a node in a tree structure can only have one parent but many children. And binary search trees are even more specific — a node can have at most two child nodes. This is in contrast to graphs in general, where nodes don't have these specific rules.

We take advantage of graph theory a lot in our daily lives, even if we aren't always applying the concepts personally.

For instance, every day at Epicodus we use git regularly. Here's a graph showing the commit history of a project:

![A project with three branches.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/git_graph.png)

Here, we see a project with a main branch plus two other branches (perhaps a feature and a dev branch). As we can see, all edges eventually lead back to the initial commit. From commit D, the history looks like this:

```
First Commit, A, D
```

However, from commit G the history looks like this:

```
First Commit, A, B, E, F, G
```

As we can see, we can't access commit G from commit D — they have alternate histories. We can depict a git commit history as a directed graph where all nodes eventually lead back to the initial commit.

We also take advantage of graph theory every time we use a mapping application like Googlemaps.

For instance, if we wanted to go from Powell's Books to Revolution Hall in Portland, we might look up directions to see which way is fastest.

![Image shows series of nodes connected with directed edges.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/google_maps_directed_graph.png)

In order to find the fastest route, Google will calculate the shortest distance between the first node (Powell's Books) and the last node (Revolution Hall). As you might guess, the edges need to be weighted so that the actual distance between each node can be determined.

It's common to use algorithms to determine the shortest path between two nodes. It's also common to use algorithms to determine the reachability of a node. For instance, in our graph of planets from the beginning of the lesson, planet Zygob is not reachable from planet Wobox.

Before continuing to the next lesson, read [Think Like A Git's section on Graph Theory](http://think-like-a-git.net/sections/graph-theory.html). Read from the page on _Graph Theory_ to the page on _Reachability_. Don't worry — each page is a quick read and Portland developer Sam Livingston-Gray does an excellent job explaining the basics of graph theory with visuals.

You may have read through Think Like a Git during [Intermediate JavaScript Team Week](https://www.learnhowtoprogram.com/intermediate-javascript/team-week/learning-more-about-git). Even if you have, we still recommend reading this resource again.

We also recommend this [short video](https://www.youtube.com/watch?v=82zlRaRUsaY&ab_channel=SystemsInnovation) on graph theory which provides a nice overview.

Graph theory can get _much_ more complex than the basics we cover here. However, we now know enough to move onto the next step: representing graphs with code.
