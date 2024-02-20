---
title: ✏️ Binary Search Trees Practice
id: binary-search-trees-practice
slug: binary-search-trees-practice
hide_table_of_contents: true
sidebar_position: 14
day: monday
type: exercise
url: >-
  https://github.com/fidgetech/capstone/blob/main/6_binary_search_tree_practice.md
---

Now that you're done following along with the lessons to build and traverse a binary search tree, it's time for an additional challenge. Try adding the functionality listed below to your application. It's okay if you do not get the functionality fully implemented — these are both challenging features and there's a reason we don't walk through them in-depth in our curriculum.

### Add a `BST.prototype.remove()` Method

At first glance, this may not seem overly challenging — just find and remove a node, right? We already have methods to traverse the tree to insert or find nodes, so why would removing a node be any more difficult?

Well, what happens if you remove a node from the middle of a tree? You can't just leave that space empty — another node needs to replace it, but which one? And once that node is removed, what about filling in the space that moved node left behind?

Fortunately, we can use a TDD approach to solve this problem one step at a time. See how many steps you can get through on your own — and then do some research on your own to find a full solution if you can't solve the problem yourself. There are plenty of resources online — including implementations in JavaScript.

* The `BST.prototype.remove()` method should return `false` if the node to be removed doesn't exist in the tree.
* The method should remove a **leaf node**. Remember that a leaf node is a node at the very bottom of the tree. That means it doesn't have any children — and we can simply remove the node.
* Don't forget to check if the root node is the only node in the tree — that would make it a leaf node — so it's the only one that would need to be updated.
* Next, the method should remove a node that has **only one child**. This is also relatively easy to do. Since there is only one child, the child takes the place of the removed node — and there is nothing else we need to worry about. This is true even if it is the root node.
* Next, the method should remove a node that has **two children**. This is much harder to do. Several things need to happen.
  * First, one of the child nodes needs to take the place of the deleted node. This can be either the left child or the right child. In this case, we will use the left child.
  * Once the former left child has taken the place of the deleted parent node, the former right child becomes the child of its former sibling. In other words, what was once the left child is now the parent of what was once the right child.

  The diagrams below illustrate what happens:

  ![The node is removed and its left child takes its place — which means the right child becomes the child of what used to be its sibling.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/tree-node-removal.png)

  In the left diagram, _Node to delete_ hasn't been deleted yet. We see that it has links to its parent node and two child nodes. All of those connections need to be updated.

  In the right diagram, _Deleted Node_ has been removed. _Former Left Child_ used to be _Deleted Node's_ left child — but now it has taken its place. Now, _Deleted Node_ is no longer _Former Left Child's_ parent — instead _Parent_ is. Meanwhile, _Former Right Child_ becomes the right child of _Former Left Child_.

  Think of it as two siblings next in line for succession to be the king. The king dies, then the first child becomes the king. The second child is next in line for succession. Any other children of those two children still need to be accounted for!

* Once you've successfully written a method that replaces a deleted node with its left child, write another that replaces a deleted node with its right child instead.

### Keep the Tree Balanced

Next, we'll move onto another challenging problem. The first couple of steps will be easy to solve, but the problem will get progressively harder. How can we keep a tree balanced? Well, first, we need to think about what it even means for a tree to be balanced. Fortunately, this is actually very easy to do — the difference between the height of the root's left subtree and the height of the root's right subtree needs to be either 1 or 0. We can depict this with an illustration.

Here's an example of a balanced tree with its height:

![In this illustration, the difference between the subtree's heights is 1.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/balanced-tree-with-height.png)

Here we can see that the height of the left subtree is 1 while the height of the right subtree is 2. The difference between those heights is 1 so this is a balanced tree.

On the other hand, let's review this illustration of an unbalanced tree from a few lessons ago:

![The image shows a binary search tree where all child nodes are to the right of their parent node.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/unbalanced_tree.png)

The tree above has a left subtree with a height of 0 and a right subtree with a height of 6 — a difference much greater than one. This tree isn't balanced at all!

Having a balanced tree makes it more efficient. It means that the maximum number of iterations a search or insert algorithm has to do is approximately the same for both sides of the tree.

Try writing an algorithm to check a binary search tree's balance — and rebalance it if necessary. Make sure to use TDD. Once again, the first few steps are much easier — but the problem gets progressively harder.

* First, add two properties to the `BST` constructor. One will store the height of the left subtree while the other will store the height of the right subtree. **Note:** It's considerably harder to compute the height of a tree than to store information about its height. We would need to use a depth-first or breadth-first search to determine the greatest height in a subtree otherwise.
* Next, update the `BST.prototype.insertNode()` method so that it keeps track of the height of an inserted element. That means that each time the method traverses down a node, the temporary height should be increased by one. If the temporary height is greater than the actual height of the subtree when the element is inserted, the actual height should be updated.
* Next, write a `BST.prototype.check()` method. This method will just check to see if the tree is balanced or not. It should return the difference in height between the left and right subtrees.

The next steps are challenging — but we recommend trying them out if you have the time. You may want to read this informative article on [Self-balanced Binary Search Trees with AVL in JavaScript](https://adrianmejia.com/self-balanced-binary-search-trees-with-avl-tree-data-structure-for-beginners/). In addition to having some good basic information on trees, the article describes how to balance a binary search tree.

The article is a full walk-through of the process, so you can choose either to follow along with the coding steps in the article or try to solve at least a few steps of the problem on your own. For a greater challenge, we recommend using the article only for hints and trying to solve as many steps without additional assistance.

* If the tree is imbalanced, use rotation to rebalance the tree. Write and test a `BST.prototype.rebalance()` method.
* Finally, try writing an AVL tree. This is a self-balancing tree named for its inventors (Georgy Adelson-Velsky and Evgenii Landis). The article linked above walks through the process.