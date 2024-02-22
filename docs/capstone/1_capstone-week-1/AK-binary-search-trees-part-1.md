---
title: "📓 Binary Search Trees Part 1"
day: monday
id: binary-search-trees-part-1
hide_table_of_contents: true
---

In the last lesson, we learned about binary tree and binary search tree data structures. Over the next several lessons, we'll build an application that creates a binary search tree from scratch. We'll also learn how to search this BSTs in the process.

To get started, use the basic testing structure described in the [Computer Science Testing Environment](https://www.learnhowtoprogram.com/computer-science/big-o-notation-and-binary-trees/computer-science-testing-environment) lesson.

## Creating a Node

We'll use a TDD approach, which means we'll start by writing a test for the smallest possible behavior. Just as a block tower is made of building blocks, our binary search tree is made of nodes. And just as we can't build a tower without blocks, we need to start with nodes before we can even think about building a binary search tree.

We'll start by writing a constructor for a node object. We'll call this object `BSTNode`. We could call it something even simpler like `Node` but we don't want to mix things up with Node.js.

Before we write a test for the constructor, we need to think about what a node needs to know. First, it will have to have a key (which we'll call `data`). That key will be a numerical value. This key will be used to determine where a node should go in a binary search tree.

Create a file in `__tests__` called `bst-node.test.js`. Here's our first test:

<div class="filename">__tests__/bst-node.test.js</div>

```js
import BSTNode from '../src/bst-node.js';

describe('bstNode', () => {

  test('should correctly create a node', () => {
    const node = new BSTNode(36);
    expect(node.data).toEqual(36);
  });
});
```

Next, let's get this test passing.

<div class="filename">src/bst-node.js</div>

```js
export default class BSTNode {
  constructor(data) {
    this.data = data;
  }
}
```

Once we add this code, our first test will be passing. However, we'll need to update our test and constructor in just a moment. As of now, there's something missing from a node. Can you guess what it is?

Here's a hint. Remember that trees are a way to store _relationships between different nodes_. 

Here's another hint. _A parent node should know about its children. However, a child node doesn't need to know about its parent._

Since we know that every parent node can have at most two child nodes and that one is on the left side and the other is on the right, we can store this relationship by adding two more properties to a node: `left` and `right`.

Let's update our test:

<div class="filename">__tests__/bst-node.test.js</div>

```js
import BSTNode from '../src/bst-node.js';

describe('bstNode', () => {

  test('should correctly create a node', () => {
    const node = new BSTNode(36);
    expect(node.data).toEqual(36);
    expect(node.left).toEqual(null);
    expect(node.right).toEqual(null);
  });
});
```

Note that these properties will both be `null` to start. When a node has `left` and `right` properties that are `null`, that means it has no children. Later, as our application adds child nodes, it will update the `left` and `right` properties of parent nodes as needed.

Let's update our source code to get our test passing:

<div class="filename">src/bst-node.js</div>

```js
export default class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
```

So now our application can create a basic node. The building blocks of a binary search tree are in place. We're ready to start building out our binary search tree creator.

## Adding a Root Node to a Binary Search Tree

Let's take a moment to think about the smallest behavior we can implement for a binary search tree creator. What does a binary search tree _need_ to have?

If you guessed a root node, you are correct. We are going to need to sort our binary search tree so that values that are _less than_ the root node go on the left-hand side while values that are _greater than_ the root node go on the right side. Without a starting root node, we have no way to sort our binary search tree.

Our binary search tree won't automatically come with a root node, though — we have to add our own. So what should the initial state of our binary search tree be? An object with a `root` of `null`. In other words, an empty binary search tree.

Let's write a test:

<div class="filename">__tests__/bst.test.js</div>

```js
import BST from '../src/bst.js';

describe('binarySearchTree', () => {

  test('should initialize a binary search tree with a root of null', () => {
    let bst = new BST();
    expect(bst.root).toEqual(null);
  });
});
```

Getting this test passing is very simple:

<div class="filename">src/bst.js</div>

```js
export default class BST {
  constructor() {
    this.root = null;
  }
}
```

### Inserting a Node

So now we have a way of creating a node and a way to create a binary search tree — but the binary search tree has no nodes. What's the next thing we need to do?

Well, a tower made of building blocks starts with a single block. And likewise, we need to be able to add a node to a binary search tree. We don't need to think about everything this binary search tree needs to do just yet, though. All we have to do is write a method that inserts a single node. We'll call that method `BST.prototype.insertNode()`.

It's time for another test:

<div class="filename">__tests__/bst.test.js</div>

```js
...
// We need to import our BSTNode now.
import BSTNode from '../src/bst-node.js';

describe('binarySearchTree', () => {

  ...

  test('it should create a new root node', () => {
    let bst = new BST();
    let node = new BSTNode(36);
    bst.insertNode(node);
    expect(bst.root).toEqual(node);
  });
});
```

In this test, we create instances of both a new `BST` and a new `BSTNode`. Note the new import statement at the beginning of our tests — we have to import the `BSTNode` class now. Next, we call `BST.prototype.insertNode()` to insert the instantiated node into the binary search tree. We'll expect the `root` property of our binary search tree to equal the inserted node.

Here's the code to make it pass:

<div class="filename">src/bst.js</div>

```js
export default class BST {
  constructor() {
    this.root = null;
  }

  insertNode(node) {
    this.root = node;
  }
}
```

As we can see, we're following the principles of TDD and keeping our code as simple as possible. For now, all we need to do is set `this.root` equal to the inserted node. Adding a root node will always be the first step after we instantiate an empty binary search tree.

### Inserting a Node Less Than the Root

Now that we have a root node, that means we have a point of comparison. Next, we need to be able to add a child node. We'll start with a child node that's _less than_ the root node.

But how do we build that relationship? How will our binary search tree _know_ how to sort (and search for) other nodes?

Well, that's why we added `left` and `right` properties for nodes. If a number is less than the parent node, that means the parent node's `left` property should be updated to be the child node. That sounds more complicated than it is. A test should make it clear.

<div class="filename">__tests__/bst.test.js</div>

```js
...

describe('binarySearchTree', () => {

  ...

  test('it should add a child node to the right of the root node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insertNode(rootNode);
    let newNode = new BSTNode(22);
    bst.insertNode(newNode);
    expect(rootNode.left.data).toEqual(22);
  });
});
```

These tests aren't very DRY — you can use a `beforeEach()` block to refactor them. For now, we'll stay focused on building out our application.

This time, we're inserting two nodes. After inserting the second node, we're expecting the `data` property of `rootNode.left` to be equal to `22`. In other words, the child node will be placed on the left side of the root node because its value is smaller than the root node's value.

Here's the updated `BST.prototype.insertNode()` method to get this passing:

<div class="filename">src/bst.js</div>

```js
insertNode(node) {
  if (this.root === null) {
    this.root = node;
  } else {
    this.root.left = node;
  }  
}
```

This is the bare minimum code needed to get this test passing. It will need to be refactored multiple times as we continue to test. The goal of using TDD here isn't just to reinforce good problem-solving habits but also to slowly work through the process of building a binary search tree, deepening our understanding of what is happening.

### Inserting a Node Greater Than the Root

Next, we need to do the same for adding a child node on the right side of the root node. Here's a test:

<div class="filename">__tests__/bst.test.js</div>

```js
test('it should add a child node to the right of the root node', () => {
  let bst = new BST();
  let rootNode = new BSTNode(36);
  bst.insertNode(rootNode);
  let newNode = new BSTNode(48);
  bst.insertNode(newNode);
  expect(rootNode.right.data).toEqual(48);
});
```

Again, not a very DRY test considering our previous test — but it does make explicit exactly what we are trying to do. Here's the updated `BST.prototype.insertNode()` method to get the test to pass:

<div class="filename">src/bst.js</div>

```js
insertNode(node) {
  if (this.root === null) {
    this.root = node;
  } else if (this.root.data > node.data) {
    this.root.left = node;
  } else if (this.root.data < node.data) {
    this.root.right = node;
  }
}
```

We've updated our method to have three conditionals. The second and third conditionals determine whether the node should go to the left or the right of the root node. If the value of the `data` property is greater than the new node's `data` property, the new child node goes on the left side. If the value of the new node's `data` property is greater than the root node's `data` property, it goes on the right side of the root node.

At this point, you should have a basic idea of what's happening in a binary search tree. We can use the general principle above either to add new nodes or to traverse a binary search tree. Whether we are building or traversing, we just need to look at the value of the current node and then determine whether we need to go left or right.

Well, that's the basic principle. If we look at the code we have so far, it's still incomplete. Our method can build a root node with two children and that's it. In order to continue to build our binary search tree, our application needs to traverse _and_ construct nodes. It needs to check a node, see whether it needs to go left or right, and then move to the correct node. Then it needs to repeat the process until it finds where the new node should go.

### Adding A Node to a Child Node (Left Side)

The fact that we need to repeat the process offers a strong clue for what needs to happen next: we need to add either a loop or recursion. Let's write a test first. This test will see if our method can correctly insert a node so that our binary search tree has a height of three. Here's an image of what this would look like if we were first going to insert a child node to the left and then add a node to that child's right:

![Image of adding a child node to the root node and then adding a node to the child.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/go_left_then_right.png)

To recreate the process of what's happening in the image above, we first need to insert a child node to the left of the root node. Then, to create the next node, our method needs to traverse to the child node we just created. Finally, the method needs to insert another child node (we can think of this one as being the "grandchild" of the root node) that's to the _right_ of its parent node.

This is our eventual goal, anyway. We'll break it down even more with TDD. Let's start by testing that our application can just traverse and go left. Then we'll write an additional test to ensure it can go right. Finally, we'll write a test that depicts what's happening in the image above. Once again, this is a good TDD approach and will also allow us to put our method together slowly so it's really clear what is happening.

The image below shows what we'll test first:

![In the image below, we go left twice.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/go_left_twice.png)

As we can see in the image, we need to create a root node, then a child node to the left of the root node, and then a child node to the left of that child node. Here's the test:

<div class="filename">__tests__/bst.test.js</div>

```js
  test('it should add a child to the left of a child node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insertNode(rootNode);
    let node2 = new BSTNode(22);
    bst.insertNode(node2);
    let node3 = new BSTNode(11);
    bst.insertNode(node3);
    expect(rootNode.left.left.data).toEqual(11);
  });
```

You might wonder why we keep using `let`, especially since we aren't changing any of these objects in the test above. Well, our method _will_ be changing a `BSTNode`'s properties on a regular basis, updating its `left` and `right` properties, so it makes sense that we use `let`.

Next, here's the code. We have to make quite a few changes for this to work:

<div class="filename">src/bst.js</div>

```js
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
        currentNode.right = insertedNode;
        return this;
      }
    }
  }
}
```

Let's walk through the new code line by line.

* Note that we've changed the parameter to `insertedNode`. This is to differentiate the node being inserted from the `currentNode` — the node being traversed. We'll talk about `currentNode` more in a moment.
* We don't need to change our first conditional — if there's no root node, we just set the node to be equal to `this.root`. So when we insert our first node, it will become `this.root`.
* Otherwise, we need to either add a child node to the root or traverse further down the tree. We create a new variable called `currentNode` which starts out equal to the value of the root node. If we need to traverse further down the tree, the value of `currentNode` will be updated as needed. When we insert a second node, this will be a child of the root node. However, because no traversal is needed to add a child node to the root node, there's also no need to update `currentNode`. We only need to start thinking about traversal once we are adding children to a root node's children. We'll cover this more in a moment.
* Next, we have a `while (true)` loop. Since true is always true, this loop will run forever unless we use `break` or `return` statements. Obviously, we'll need to be careful to make sure that we don't create any situations where we don't eventually break out of the loop.
* Inside our loop, we have a conditional that will run if `currentNode.data` is greater than `insertedNode.data`. We're setting the stage here. If the node being traversed is greater than the newly inserted node, we're going to need to put the newly inserted node to the left of the traversed node.
* If `(currentNode.left === null)`, we've reached the end of our journey. We can insert the node here. That means we can set `currentNode.left = insertedNode;`.
* Finally, we'll return `this` — the binary search tree. We could also just break out of the loop as well with a `break` statement. However, it might be more useful for users if we return the updated tree. The important thing is that once we insert the node, we stop the loop — otherwise, it will run forever.
* However, if `currentNode.left` isn't equal to `null`, that means there's a node there and we need to traverse down another level. That means we need to update the `currentNode` to node stored in the `left` property of the node being traversed.
* We haven't updated the code for the right side of the tree yet other than to update the variable names.

If we run our tests, they will pass. Let's walk through what our method is doing for each insertion.

#### First Insertion: `bst.insertNode(rootNode);`

There is no root node yet so `this.root` is updated to be the root node as shown in the code below.

```js
if (this.root === null) {
  this.root = insertedNode;
}
```

#### Second Insertion: `bst.insertNode(node2);`

`node2` has a `data` value of `22` in our test. There is already a root node so we will move along to the code in the `else` statement:

```js
let currentNode = this.root;
while (true) {
  if (currentNode.data > insertedNode.data) {
    if (currentNode.left === null) {
      currentNode.left = insertedNode;
      return this;
    }
    ...
  }
}
```

* The `currentNode` is the root node which has a `data` value of `36`. We run our loop and hit the next conditional because `currentNode.data` (36) is greater than `insertedNode.data` (22).
* The root node doesn't have any child nodes yet so `currentNode.left` (the root node's left child property) is `null`. That means we can set the value of the root node's left child property to the inserted node.
* We are done. We need to return or break out of our statement so it doesn't run forever.

#### Third Insertion: `bst.insertNode(node3);`

`node3` has a `data` value of `11` in our test.

* There's already a root node so we skip over that conditional.
* `currentNode` will be set to the root node (`let currentNode = this.root;`).
* Next, we hit our loop. The value of the root node is greater than the inserted node so that conditional is true.
* However, the value of the root node's `left` property isn't `null`. That means we move to the `else` statement:

```js
...
} else {
  currentNode = currentNode.left;
}
...
```

* Before the reassignment, `currentNode` is the root node. After reassignment, `currentNode` is set to the root node's left property. We have a new `currentNode` and we've successfully traversed down a level in our tree!
* We iterate through the while loop again. The value of the `currentNode`'s `data` property (22) is still greater than the value of the `insertedNode`'s `data` property (11).
* The `currentNode` (the root node's left child node) doesn't have any children yet so `currentNode.left === null`. We can insert the new node and return from the function. We are done — and we've successfully traversed multiple levels of the tree to insert a node.

### Adding A Node to a Child Node (Right Side)

Next, we need to add a test for adding child nodes on the right side. We've already laid all the groundwork for the left side so try writing a test (and the passing code) for the right side as well before looking at the code below.

Here's the test:

<div class="filename">__tests__/bst.test.js</div>

```js
test('it should add a child to the right of a child node', () => {
  let bst = new BST();
  let rootNode = new BSTNode(36);
  bst.insertNode(rootNode);
  let node2 = new BSTNode(48);
  bst.insertNode(node2);
  let node3 = new BSTNode(73);
  bst.insertNode(node3);
  expect(rootNode.right.right.data).toEqual(73);
});
```

We've just updated the test so that the values increase with each node instead of decrease — which means that nodes will always be added to the right side. Finally, we expect the `rootNode.right.right.data` property to be equal to `73` — the value of the highest `data` property. Note that `rootNode.right.right` is the right child of the right child of the root node — just in case those nested properties are confusing.

To make the code pass, we just need to add some code that looks very similar to the code we added for inserting nodes in the left side of our tree. Here's the complete method so far:

<div class="filename">src/bst.js</div>

```js

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
      }
    }
  }
}
```

As you can see, the code for inserting nodes on the right side is almost exactly the same as the code we've already added for the left side so we won't explain it again.

### Verifying the Code Works for Both Sides

At this point, our code should work regardless of whether our method has to traverse left, right, or both. However, it would be good to verify that it can traverse one direction and then the other. Remember the following image from earlier in the lesson?

![Image of adding a child node to the root node and then adding a node to the child.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/go_left_then_right.png)

Let's add a test for that now:

<div class="filename">__tests__/bst.test.js</div>

```js
test('it should add a child to left or right of a node', () => {
  let bst = new BST();
  let rootNode = new BSTNode(36);
  bst.insertNode(rootNode);
  let node2 = new BSTNode(22);
  bst.insertNode(node2);
  let node3 = new BSTNode(33);
  bst.insertNode(node3);
  expect(rootNode.left.right.data).toEqual(33);
});
```

If we run our tests, we'll see it passes.

So we're good to go. Right? Or is there something missing? Can you think of a condition we haven't handled in our method? If so, how should it be handled?

### Handling Duplicate Values

What happens if a node with a specified `data` value already exists in our binary search tree? Well, binary search trees can't have duplicates so that's not allowed. And if we were to try to insert a node with a `data` value that already exists in our tree, we'd hit an infinite loop because we're not dealing with that conditional.

So let's write a test and keep it simple. If we try to insert a node that has the same `data` property as another node in the tree, our method will just return the existing binary search tree.

Here's the test:

<div class="filename">__tests__/bst.test.js</div>

```js
test('it should not add duplicate nodes', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insertNode(rootNode);
    let node2 = new BSTNode(36);
    expect(bst.insertNode(node2)).toEqual({"root": {"data": 36, "left": null, "right": null}});
  });
```

We insert a node and then try to insert a second node that has the same `data` value. Because we are setting our method to return the full tree when we call `bst.insertNode(node2)`, it will return a tree that only includes one node — not the duplicate.

Here's the full logic which will get all tests passing:

<div class="filename">src/bst.js</div>

```js
export default class BST {
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
```

We just needed to add an `else` statement that returns the full tree — because if the `data` property of the node we are trying to insert is neither less than nor equal to any existing node in the tree, it either must have an equal `data` value or have some bogus `data` value that can't be compared (for instance, `"hello"` is neither less than nor equal to any number), which means we just return the tree instead of altering it.

We could clean up our code by adding more robust error handling and DRYing up our tests but that's not the point of our project. We've created a simple method that can build a basic binary search tree. In the next lesson, we'll use this application to actually build a binary search tree that we'll then be able to search. We'll also discover a big problem with our binary search tree method as well, though fixing it is beyond the scope of this curriculum.
