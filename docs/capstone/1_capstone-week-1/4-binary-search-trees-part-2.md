---
title: "\U0001F4D3 Binary Search Trees Part 2"
id: binary-search-trees-part-2
slug: binary-search-trees-part-2
hide_table_of_contents: true
sidebar_position: 12
day: monday
type: lesson
url: >-
  https://github.com/fidgetech/capstone/blob/main/4_binary_search_trees_part_2.md
---

In the last lesson, we made a small application with a method that can build a binary search tree. In this lesson, we'll use our application to create a larger binary search tree that we can then search with several different kinds of algorithms.

But first, there is a catch.

What happens if the first node we insert has a `data` property of `1`? Well, the tree will never have a left side. Let's say we were to do the following:

```js
let bst = new BST();
bst.insertNode(new BSTNode(1));
bst.insertNode(new BSTNode(2));
bst.insertNode(new BSTNode(3));
bst.insertNode(new BSTNode(4));
bst.insertNode(new BSTNode(5));
bst.insertNode(new BSTNode(6));
bst.insertNode(new BSTNode(7));
```

We'd end up with a binary search tree that looks like this:

![The image shows a binary search tree where all child nodes are to the right of their parent node.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/unbalanced_tree.png)

This is an **unbalanced** binary search tree. The image shows exactly how it's unbalanced. It's weighted to one side only. This imbalance leads to a taller binary search tree. The greater the height of a binary search tree, the more inefficient it is. On the other hand, look what happens when we insert the nodes in a slightly different order:

```js
let bst = new BST();
bst.insertNode(new BSTNode(4));
bst.insertNode(new BSTNode(2));
bst.insertNode(new BSTNode(6));
bst.insertNode(new BSTNode(1));
bst.insertNode(new BSTNode(3));
bst.insertNode(new BSTNode(5));
bst.insertNode(new BSTNode(7));
```

![Now the binary search tree has an equal number of nodes on the left and right hand side.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/full_binary_tree.png)

Now our binary search tree has a height of 3 instead of a height of 7. If we were to traverse this tree searching for the number 7, we'd only need to run through two loops — instead of 7 — to find the value we are looking for.

This binary search tree isn't just balanced.

* It's also a **full binary tree**. A full binary tree is a binary tree where each node has either zero or two children.
* In addition, it's also a **complete binary tree**. A complete binary tree is a binary tree that is completely filled from left to right (though the bottom level doesn't need to be completely filled from left to right). In this binary tree, even the bottom level is completely full, which makes it a **perfect binary tree**. Complete binary trees can be efficiently represented as arrays, though further discussion of this fact is beyond the scope of this lesson.

We won't go into details about full, complete, and perfect binary trees other than to say they are ideal in terms of getting and representing data efficiently.

So what would we need to do to make sure that our binary search tree is always balanced? It involves rotating nodes, which would add a lot of complexity to our little application. We've learned how to build a binary search tree to have a better understanding of what they are and how they work — adding code to rotate and balance the tree risks adding more confusion without any additional clarification. If you want to learn how to rotate and balance a binary search tree, we recommend doing further research on your own.

So what does our binary search tree actually look like in terms of code?

Well, you can poke around in the console and find out for yourself. Just plug this code into the console:

```js
class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insertNode(insertedNode) {
    if (this.root === null) {
      this.root = insertedNode;
    } else {
      let currentNode = this.root;
      
      while (true) {
        if (currentNode.data > insertedNode.data) {
          if (currentNode.left === null) {
            currentNode.left = insertedNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.data < insertedNode.data) {
          if (currentNode.right === null) {
            currentNode.right = insertedNode;
            return this;
          } else {
            currentNode = currentNode.right
          }
        } else {
          return this;
        }
      }
    }
  }
}

let bst = new BST();
bst.insertNode(new BSTNode(4));
bst.insertNode(new BSTNode(2));
bst.insertNode(new BSTNode(6));
bst.insertNode(new BSTNode(1));
bst.insertNode(new BSTNode(3));
bst.insertNode(new BSTNode(5));
bst.insertNode(new BSTNode(7));

bst
```

We can then look at the BST object:

![A screenshot of the fully-expanded BST object in the console.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/BST_object.png)

As you can see, the `BST` object's `root` property holds the entire binary search tree. It's a series of deeply nested objects, with each parent node containing information about its child nodes.

A binary search tree doesn't necessarily need to be represented in this way — it could also be represented as a JSON object or something else. But this should give you a general sense of what our binary search tree actually looks like.

At this point, we can build a binary search tree from scratch. But how can we search a tree for a value? In the next lesson, we'll add a method that looks through our binary search tree.
