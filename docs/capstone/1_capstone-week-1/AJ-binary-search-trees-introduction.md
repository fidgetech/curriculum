---
title: "📓 Binary Search Trees Introduction"
day: monday
---

In this lesson, we'll give an overview of two data structures: the **binary tree** and the **binary search tree**. They are quite similar — the main difference is that a binary search tree has additional restraints that make it better for searching.

## Binary Tree

A binary tree is a type of general tree structure. As the name suggests, it's a structure where each node can have no more than two child nodes. (We can infer this from the name because binary can be defined as something that has two parts.)

Here's an example of a binary tree:

![Image of a binary tree.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/binary_tree.png)

In the diagram above, each parent node has at most two child nodes. However, it's also fine if a parent has one or zero nodes. (In the latter case, it's technically not a parent.) By the way, don't worry about how the keys line up on the nodes. They do not need to be ordered in a specific fashion in a binary tree.

When a parent has two child nodes in a binary tree, the child nodes are referred to as the **left child** and the **right child** based on whether the node is on the left or right.

![When a parent has two nodes, the nodes are referred to as the left and right child.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/left_and_right_child.png)

Binary trees have many uses. In fact, compilers often use them to build what is known as an **abstract syntax tree** (or AST) — an intermediate representation of the code that is not yet fully compiled. The JavaScript parser uses an AST as well, though it's a general tree, not a binary tree.

## Binary Search Tree

A binary search tree is very similar to a binary tree but also has a few additional restrictions. Let's take a look at an example.

![An example of a binary search tree.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/binary_search_tree.svg)

In the example above, you'll see that all child nodes _to the left_ of the root node have a value _less than_ the root node. Meanwhile, all child nodes _to the right_ of the root node have a value _greater than_ the root node. This pattern continues all the way down the tree. The left-hand child always has a value _less than_ its parent while the right-hand child always has a value _greater than_ its parent. Based on this pattern, we automatically know a few things about a few values in a binary search tree. The bottom left leaf node will be the lowest value in the tree while the bottom right leaf node will be the greatest value in the tree.

Duplicate keys aren't allowed in a binary search tree. This should make intuitive sense — because each child node must be either _less than_ or _greater than_ its parent node's key, there is no possibility of repeat keys.

Over the next several lessons, we'll create a small application that makes a binary search tree from scratch. In the process, we'll also learn how to search a binary search tree.
