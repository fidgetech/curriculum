---
title: "📓 Binary Search Trees Part 3"
day: monday
id: binary-search-trees-part-3
hide_table_of_contents: true
---

In this lesson, we'll write a basic method that traverses a binary search tree and lets us know whether the tree holds a value or not. There are actually a number of important algorithms that we can use to search trees — including depth-first search (DFS) algorithms and breadth-first search (BFS) algorithms, which search all the nodes in a tree. However, we are going to learn about those algorithms in the next section when we learn about graph theory. Because our tree is a binary search tree, it's much easier and quicker to find a specific node — and there is no reason to check every node in the tree to find a value, which is what we'd need to do with a BFS or DFS.

Our method will borrow heavily from our `BST.prototype.insertNode()` method — after all, just as that method traverses our tree to determine where a node should be inserted, our new method will do something very similar — except instead of inserting a new node, it will check to see if that node exists.

As always, we will use TDD to write our method. First, though, we'll add a `beforeEach` block where we'll recreate the perfect binary search tree we built in the last lesson:

<div class="filename">__tests__/bst.test.js</div>

```js
import BST from '../src/bst.js';
import BSTNode from '../src/bst-node.js';

describe('binarySearchTree', () => {

 const pbst = new BST();

  beforeEach(() => {
    pbst.insertNode(new BSTNode(4));
    pbst.insertNode(new BSTNode(2));
    pbst.insertNode(new BSTNode(6));
    pbst.insertNode(new BSTNode(1));
    pbst.insertNode(new BSTNode(3));
    pbst.insertNode(new BSTNode(5));
    pbst.insertNode(new BSTNode(7));  
  });
});
```

As the diagram in the last lesson shows, this is how we can visually depict this binary search tree:

![This binary search tree has an equal number of nodes on the left and right hand side.](/images/computer-science-curriculum-2020/full_binary_tree.png)

Now we have a very basic tree that we can run our tests on.

As always, we should start with the simplest behavior. In this case, the simplest behavior would be no traversal at all — because the root node _is_ the value we are searching for.

Here's the test:

<div class="filename">__tests__/bst.test.js</div>

```js
...
  test('it should return true if the root node is equal to 4', () => {
    expect(pbst.search(4)).toEqual(true);
  });
...
```

Getting it passing is simple:

<div class="filename">src/bst.js</div>

```js
class BST {
...
  search(value) {
    return true;
  }
...
}
```

It's a very basic test but as always it's good to start with the simplest behavior. With very difficult problems, it's easy to get overwhelmed — but this gives us a starting point.

What's the next simplest behavior? Well, what if the root node isn't the value we are looking for? We still aren't worried about traversal yet.

Here's the test:

<div class="filename">__tests__/bst.test.js</div>

```js
...
  test('it should return false if the root node is not equal to 31', () => {
    expect(pbst.search(31)).toEqual(false);
  });
...
```

Note that we've inputted a value (`31`) because this test will still ultimately pass once we are finished building our method.

And here's the code to get this passing:


<div class="filename">src/bst.js</div>

```js
...
  search(value) {
    if (this.root.data === value) {
      return true;
    }
    return false;
  }
...
```

We haven't done any traversal yet but we've set the groundwork to incrementally build on our method.

Next, let's write a test to see if our method can traverse to the left. If we look at the diagram above, we can see that the left child of the root node of our perfect binary search tree has a value of 2. Our next test will check to see if that value exists:

<div class="filename">__tests__/bst.test.js</div>

```js
...
  test('it should return true if the first child node on the left is equal to 2', () => {
    expect(pbst.search(2)).toEqual(true);
  });
...
```

The modifications we'll make to our method will look very similar to our `BST.prototype.insertNode()` method. We'll need to add a while loop at this point.


<div class="filename">src/bst.test.js</div>

```js
search(value) {
  if (this.root.data === value) {
    return true;
  } else {
    let currentNode = this.root;
    while (true) {
      if (currentNode.data === value) {
        return true;
      } else if (currentNode.data > value) {
        currentNode = currentNode.left;
      }
    }
  }
}
```

Just as we did with our `BST.prototype.insertNode()` method, we'll start by creating a variable for the `currentNode`. When this variable is declared, it will be assigned to `this.root`.

Then we'll have a loop that runs until a condition is met. Be careful here — the code above can easily be an infinite loop. In fact, if we run our tests now, there _will_ be an infinite loop. We'll fix that in a moment.

If `currentNode.data === value`, we've found the node — our method should `return true`. Otherwise, if `currentNode.data` (where we are in the tree) has a value greater than the value we've passed in, we know we need to go left.

Now let's go back to the problem with our tests. Adding this new condition creates an infinite loop. We can comment out the offending test to verify that our new test runs:

<div class="filename">__tests__/bst.test.js</div>

```js
...
  // test('it should return false if the root node is not equal to 31', () => {
  //   expect(pbst.search(31)).toEqual(false);
  // });
...
```

We'll be able to uncomment this test out once we write the code for traversing right in our binary search tree but we aren't there yet. For now, we can only traverse to the left — and there's no way we'll ever be able to correctly evaluate whether our tree contains the value `31` just by going to the left.

Before we start testing and writing code for traversing to the right, there's one other thing we need to take care of. What if when we traverse to the left, there are no more nodes to traverse? Well, that would mean that the node we are looking for doesn't exist in the tree. Let's write a test for that, too:

<div class="filename">__tests__/bst.test.js</div>

```js
...
  test('it should return if the value 0 is not in the tree', () => {
    expect(pbst.search(0)).toEqual(false);
  });
...
```

In order to pass this test, we just need to add one more conditional:

<div class="filename">src/bst.js</div>

```js
search(value) {
  if (this.root.data === value) {
    return true;
  } else {
    let currentNode = this.root;
    while (true) {
      if (currentNode.data === value) {
        return true;
      } else if (currentNode.data > value) {
        currentNode = currentNode.left;
      }
      // The conditional below is new.
      if (currentNode === null) {
        return false;
      }
    }
  }
}
```

If the `currentNode === null`, that means we've reached the bottom of the tree without finding the value we're looking for. Since there are no more nodes to search, the value doesn't exist in the tree. By the way, note that this is an `if` statement — not another `else if` — we _always_ want our algorithm to check if the `currentNode` has been updated to `null`.

The next step is to make sure our method can search to the right. Here's a test:

<div class="filename">__tests__/bst.test.js</div>

```js
...
  test('it should return true if the tree includes 7', () => {
    expect(pbst.search(7)).toEqual(true);
  });
...
```

Note that we skip down to the right child's right child — that shouldn't be a problem, though, since we are already looping.

Here's our updated method:

<div class="filename">src/bst.js</div>

```js
...
  search(value) {
    if (this.root.data === value) {
      return true;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data === value) {
          return true;
        } else if (currentNode.data > value) {
          currentNode = currentNode.left;
        } else if (currentNode.data < value) {
          currentNode = currentNode.right;
        }
        if (currentNode === null) {
          return false;
        }
      }
    }
  }
...
```

Now our test should be passing.

We should also be able to verify that our method can go left and then right (or vice versa):

<div class="filename">__tests__/bst.test.js</div>

```js
...
  test('it should return true if the tree includes 5', () => {
    expect(pbst.search(5)).toEqual(true);
  });
...
```

It can. Finally, we have one test that's commented out. Now that we can traverse both to the left and right, we can uncomment the test and it will be passing as well. And that's our method for `BST.prototype.search()` — which is quite similar to our `BST.prototype.insertNode()` method.

On average, inserting, searching and removing nodes from a binary search tree has a Big O of O(log n). That's pretty good — and better than linear time (O(n)). Of course, there is a worst-case scenario of O(n) if the tree is severely unbalanced — but this is unlikely, especially in well-designed binary search tree algorithms which include tree rebalancing.
