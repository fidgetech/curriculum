---
title: ✏️ Quicksort
day: thursday
id: quicksort
hide_table_of_contents: true
paginationNext: null
---

In this lesson, we'll learn about the **quicksort algorithm**, which is a divide and conquer algorithm like merge sort. The quicksort algorithm is generally faster with smaller data sets, while the merge sort algorithm is faster with large data sets.

If you thought that merge sort was a bit complex, the quicksort algorithm is yet another step up in difficulty. Let's take a look at how it works — and then we'll write a modified and slightly simpler version ourselves.

A quicksort algorithm randomly finds a pivot point in a collection. It then adds pointers before and after the pivot point and swaps them as needed. It's easier to show how this works with a graphic. 

First, the quicksort algorithm _randomly_ finds a pivot point.

![This graphic shows a collection of 7 elements. The pivot point is the fifth element, which is 9.](/images/computer-science-curriculum-2020/pivot-point.png)

A good quicksort algorithm has built-in ways to intelligently determine a good random pivot point (so it's not entirely random). That is beyond the scope of this lesson, though, both because it's hard to test randomness and also because it involves a good understanding of probability theory. All you really need to know is that this randomness, if applied correctly, actually makes a quicksort algorithm _faster_.

In the image above, the fifth element (which holds the value `9`) is the pivot point. Again, this is randomly determined — it's not the middle element — nor does it even need to be near the middle. It could be the first element in the array, the last, or any other element.

Next, we add pointers to the leftmost and rightmost elements of the collection.

![The algorithm compares the value at the left and right pointers to the pivot point.](/images/computer-science-curriculum-2020/quicksort/quicksort-pointers.png)

The values at each pointer are compared to the value at the pivot point. The value at the left pointer is `11`, which is greater than the pivot point's value, which is `9`. Meanwhile, the value at the right pointer is `3`, which is less than the pivot point's value. That means we can swap the values and move the pointers inward one spot each.

The second iteration through the algorithm, the collection looks like this:

![The first and last values have been swapped and the pointers have moved one spot inward.](/images/computer-science-curriculum-2020/quicksort/second-comparison.png)

As we can see, the first and last values of the collection have been swapped. The pointers have each moved inward one position. We do the same comparison again. `13` is greater than the pivot point while `7` is less than the pivot point. We can swap again.

The pointers will be moved inward another position. Since the right pointer is now on the pivot point — and the pivot point is neither less than or greater than itself — the pointer will skip to the next position to evaluate. So here's where we're at now:

![Once again we've swapped values and moved the pointers inward.](/images/computer-science-curriculum-2020/quicksort/third-comparison.png)

Now we are comparing `12` and `6` — since the left pointer is pointing at a value greater than the pivot point and the right pointer is pointing at a value less than the pivot point, we can swap again.

Once our pointers intersect, we are finished with our first round of sorting.

Our collection is now a bit more sorted than it was. Every value on the left side of the collection (up to our left pointer) is less than the value at our pivot point. Meanwhile, every value on the right side of our collection (from our right pointer to the end of the collection) is greater than the pivot point.

Now it's time for our second round of sorting. This is where the divide and conquer approach comes in. We now perform the exact same operations on our left and right sub-arrays. The illustration below demonstrates this next step.

![We are now going to sort two partitions.](/images/computer-science-curriculum-2020/quicksort/partioned-arrays.png)

As we can see, we now have a left array and a right array — which are divided based on where the left and right pointers met when we finished our first round of sorting.

Once again, we add a pivot point and then place pointers at both the left and rightmost elements of each sub-array. Then we go through the sorting process again.

As you can see from the left sub-array in the illustration above, a swap won't always occur. The value at the left pointer (`3`) is less than the value at the pivot point (`7`) so it will not be swapped with the value at the right pointer even though the value at the right pointer (`6`) is also less than the value at the pivot point. Since both conditions aren't met, there can be no swap.

Over time, this dividing and conquering and swapping of values progressively reorganizes the array until it's fully sorted. It may still be hard to visualize how this array will be completely sorted based on where we're currently at. That's partly because on our second round of sorting, we happened to pick terrible pivot points. Each pivot point is higher than every value in its sub-array, which means that there will be no actual sorting occurring in this round. That will happen sometimes, and it's important to avoid picking bad pivot points if possible. There is no perfect way to find efficient pivot points — and as we mentioned already, it's actually more efficient to find those pivot points randomly — even though the randomness means sometimes there will be bad pivot points.

Let's use TDD to write a quicksort algorithm. This will hopefully clarify any lingering questions you might have about how the algorithm works.

## Writing a Quicksort Algorithm

We'll start by writing several smaller functions, gradually bringing them all together in a control function that we can call recursively. Because our approach is to divide and conquer, just as we did with our merge sort function, a recursive solution will be most effective. That's because we'll need to call the same function over and over on each array and partitioned sub-array.

### Finding the Pivot

First, let's write a test for a `findPivot()` function. A more complex and efficient implementation would randomize the pivot, but we are going to keep it simple. Probably the easiest thing we could do is make the pivot point either the first or last element in an array. However, this would make our algorithm horribly inefficient if the array is already sorted. Why is that? Well, the worst possible pivot point is one where _every_ value is either greater than the pivot point (which would happen if we use the first value of a sorted array) or less than the pivot point (which would happen if we use the last value of a sorted array). While we can't assume that arrays will be sorted, sometimes they are. For that reason, we will use the middle element of an array as the pivot point.

Before we write our test, let's take a moment to think about the parameters of our `findPivot()` function. Obviously, we'll need to pass in an array so it can find the pivot point. However, unlike with our merge sort algorithm, we aren't actually going to split up arrays into smaller sub-arrays and then merge them again. Instead, we are going to organize the sub-arrays in place. That means we also need parameters for the first and last elements of the sub-array where we need to find a pivot. Let's take another look at the illustration from above:

![We are now going to sort two partitions.](/images/computer-science-curriculum-2020/quicksort/partioned-arrays.png)

As we can see, there are pointers at the left and right element of each sub-array. We can determine where the pivot point should go based on these pointers.

Our function should take the following parameters: `findPivot(array, leftPointer, rightPointer)`.

Now we're ready for a test.

<div class="filename">__tests__/quicksort.test.js</div>

```js
import { findPivot } from '../src/quicksort.js';

describe('quicksort functions', () => {

  test('it will find a pivot point halfway through the array', () => {
    const array = [1,6,9];
    const leftPointer = 0;
    const rightPointer = 2;
    expect(findPivot(array, leftPointer, rightPointer)).toEqual(6);
  });
});
```

In the test above, we create an array of three elements. We also establish where the `leftPointer` is (the first element of the array) as well as the `rightPointer` (the last element of the array). It's a few extra lines of code to store the pointers in separate variables, but we do so to make it clear exactly what's happening here.

When we call our `findPivot()` function, it should determine the pivot based on these parameters. Note that we expect the function to return the _value_ of the element at the pivot point, not its _position_. That's because we will be comparing all the other values in the array to the pivot, determining whether that value should go to the left or the right. We don't actually care about the position of the pivot itself.

Let's get this test passing:

<div class="filename">src/quicksort.js</div>

```js
export function findPivot(array, leftPointer, rightPointer) {
  return array[Math.floor((leftPointer + rightPointer)/2)];
}
```

This function simply finds the midpoint of the array based on the `leftPointer` and `rightPointer` values. Then it returns the value of the element at that position in the array.

### Swapping Values

Now that our first test is passing, we're ready to start working on our next function. A quicksort algorithm needs to be able to swap two elements. However, in order to do so, it needs to temporarily store the value of one of the elements in a variable. Otherwise, that information will get lost during the swap. We've done the same thing with other algorithms in the past, but this time we are actually separating this out into its own little function. This will help make the bulk of our quicksort code easier to understand when we get to it.

So the next step is to write a `swap()` function that will take the values at a `leftPointer` and `rightPointer` and swap them. This function won't determine whether or not two values should be swapped — it will mindlessly do its work when called. This also follows good TDD principles — we don't care yet about whether two values _should_ be swapped — just that we have the functionality so we can swap them.

Here's our next test (don't forget to import the new function):

<div class="filename">__tests__/quicksort.test.js</div>

```js
import { findPivot, swap } from '../src/quicksort.js';

describe('quicksort functions', () => {

  ...

  test('it will swap two values in an array', () => {
    let array = [6,9,3,1,5];
    const leftPointer = 0;
    const rightPointer = 3;
    expect(swap(array, leftPointer, rightPointer)).toEqual([1,9,3,6,5]);
  });
});
```

In this test, we create an array along with a `leftPointer` and `rightPointer` value. Our `swap()` function will simply swap the values at the two pointers.

Here's the code to get this test passing:

<div class="filename">src/quicksort.js</div>

```js
export function swap(array, leftPointer, rightPointer){
  const valueToReplace = array[leftPointer];
  array[leftPointer] = array[rightPointer];
  array[rightPointer] = valueToReplace;
  return array;
}
```

This function should be familiar based on other algorithms we've written. We create a variable called `valueToReplace` to temporarily store the value at the left pointer. Then we can replace the value at the left pointer with the value at the right pointer. Finally, we can update the value at the right pointer with `valueToReplace`. Lastly, we'll return the array. This will get our test passing.

### Sorting a Partition in an Array

Next, we'll write a function to sort an array or sub-array. This function will use both our `swap()` and `findPivot()` functions. This function will be called `sortPartition()`. We use the term **partition** here because our divide and conquer approach will separate our array into smaller and smaller partitions. This is in contrast to a merge algorithm, which breaks down an array into smaller sub-arrays.

The goal of this function will simply be to sort a partition based on its pivot point. Note that we don't expect it to fully sort a partition — we just expect it to do one passthrough where it swaps values based on the pivot. For instance, let's say we have the following array:

```js
[5, 1, 3, 2, 7]
```

We'll say the pivot is `3`. Based on that, we know we'd want to swap `5` to the right side because it's less than the pivot. However, we wouldn't swap `7` because it's already where it needs to be — so the right pointer would move left to `2`, which should be swapped. The `2` and the `5` would then be swapped.

That would leave our array looking like this.

```js
[2, 1, 3, 5, 7]
```

The left pointer and right pointer would then each move inward one position, meaning `1` and `3` would be compared. There'd be no other swaps.

Here's our new test (once again, don't forget we'll need to import an additional function):

<div class="filename">__tests__/quicksort.test.js</div>

```js
import { findPivot, swap, sortPartition } from '../src/quicksort.js';

describe('quicksort functions', () => {

  ...

  test('it will sort and swap values in an array based on a pivot point', () => {
    const array = [5, 1, 3, 2, 7];
    const leftPointer = 0;
    const rightPointer = 4;
    expect(sortPartition(array, leftPointer, rightPointer)).toEqual([2, 1, 3, 5, 7]);
  });
});
```

Our `sortPartition()` function will sort an array (or partition in an array) based on its `leftPointer` and `rightPointer`. In this case, the partition is the whole array — but our function will have the flexibility to work with partitions of any size within an array.

Let's get this test passing. This function is going to do some heavy lifting.

<div class="filename">src/quicksort.js</div>

```js
...

export function sortPartition(array, leftPointer, rightPointer) {
  const pivot = findPivot(array, leftPointer, rightPointer);
  while (leftPointer <= rightPointer) {
    while (array[leftPointer] < pivot) {
      leftPointer++;
    }
    while (array[rightPointer] > pivot) {
        rightPointer--;
    }
    if (leftPointer <= rightPointer) {
      array = swap(array, leftPointer, rightPointer);
      leftPointer++;
      rightPointer--;
    }
  }
  return array;
}
```

Our `sortPartition()` function takes three parameters. The first is the full `array`. The second and third are the pointers. These pointers will determine the beginning and the end of the partition.

The first thing our new function will do is determine the `pivot`:

```js
const pivot = findPivot(array, leftPointer, rightPointer);
```

Fortunately, we've already written a function to find the pivot for us!

Next, we have a while loop that will run as long as the `leftPointer <= rightPointer`. All this means is that the loop will keep running until the left and right pointer intersect. When the two pointers intersect, that means we've swapped all the values we can and it's time to return the array.

Within this while loop, we have two more while loops. The first while loop runs while the left pointer is less than or equal to the pivot:

```js
while (array[leftPointer] < pivot) {
  leftPointer++;
}
```

This loop will move the `leftPointer` inward until it finds a value that is greater than or equal to the pivot. In other words, it will move the pointer until it finds a value that can be swapped because it should be on the right side of the partition, not the left. It may move one position over, or it could move thousands — all this while loop is doing is finding the next value that is eligible for a swap because it's greater than or equal to to the pivot. If the value can't be swapped, the `leftPointer` is incremented by one.

The next while loop does the same thing, but for the `rightPointer`:

```js
while (array[rightPointer] > pivot) {
  rightPointer--;
}
```

The `rightPointer` will be moved inward until it finds a value that is eligible to be swapped. If it can't be swapped, the `rightPointer` is decremented by one (as this pointer is moving backwards through the array).

Finally, we have a conditional that runs after the two while loops find values that can be swapped.

```js
if (leftPointer <= rightPointer) {
  array = swap(array, leftPointer, rightPointer);
  leftPointer++;
  rightPointer--;
}
```

Why do we need this conditional? Well, we have an outer while loop that has the same condition: `leftPointer <= rightPointer`. However, eventually the two while loops that run within this outer while loop will overshoot each other — and the outer while loop won't catch this until _after_ we complete a full iteration of the outer while loop. However, we are still in the `outer` while loop — so we need to make sure `leftPointer <= rightPointer` before we do a swap.

If this conditional is met, we can use our `swap()` function:

```js
array = swap(array, leftPointer, rightPointer);
```

Technically, we could just do the following without assigning the `return` value to the `array` variable:

```js
swap(array, leftPointer, rightPointer);
```

Why is that? Well, remember that JavaScript doesn't store arrays (or any other non-primitive values) in variables. It stores _references_ to arrays and other objects in variables. So even though the `array` variable inside the `swap()` function is a different variable with a different scope than the `array` variable that lives outside the `swap()` function, they are both just references to the same array. Sometimes this idiosyncrasy of JavaScript can burn us, but it will actually help us out in this algorithm, as we'll see soon.

So that is our `sortPartition()` function. It will take a partition in an array (which is determined by the `leftPointer` and `rightPointer` parameters) and swap values based on a `pivot`.

### Writing a Recursive `quickSort()` Function

We're almost done. The next step is to create a control function — our actual `quicksort()` function — which will call itself recursively until the collection is fully sorted.

Here's a test (once again, we need to add another import):

```js
import { findPivot, swap, sortPartition, quickSort } from '../src/quicksort.js';

describe('quicksort functions', () => {

  ...

  test('it will quicksort an array', () => {
    let array = [3, 9, 7, 2, 8, 6, 5, 4];
    expect(quickSort(array)).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
```

As we can see, our final test just checks to see whether we can correctly quicksort an array. We are in the home stretch!

Before we go into the code, a quick note — we are going to need to make a small refactor to our `sortPartition()` function in a moment. Our `quickSort()` function will _not_ work yet — and the test will not pass.

Here's the code for our `quickSort()` function:

```js
...

export function quickSort(array, leftPointer = 0, rightPointer = array.length - 1) {
  let partitionPoint;
  if (array.length > 1) {
    partitionPoint = sortPartition(array, leftPointer, rightPointer);
    if (leftPointer < partitionPoint - 1) {
      quickSort(array, leftPointer, partitionPoint - 1);
    }
    if (rightPointer > partitionPoint) {
      quickSort(array, partitionPoint, rightPointer);
    }
  }
  return array;
}
```

Our `quickSort()` function takes three parameters: the `array`, `leftPointer`, and `rightPointer`. Note that we pass in default values for the `leftPointer` and `rightPointer`. When we initially call the function, we are going to want it to run on the entire array — however, it would be inconvenient if we had to pass in the values of the left and right pointers every time we call it. When the function recursively calls itself, it will pass in new `leftPointer` and `rightPointer` values.

Next, our function will need to know where it needs to be partitioned. We will declare a variable called `partitionPoint` but not assign a value yet. We need to declare it outside our conditionals, or it will lose its scope when we pass from one conditional to the next.

Then we have a conditional — if we have an array that is only one or zero values, there's no need to partition or sort it. This makes our code a little bit more efficient. Unlike with our merge sort algorithm, where omitting this conditional will cause an infinite loop, this one just adds a little efficiency. We could omit it here and our quick sort algorithm will still run correctly.

So what comes next? Well, we need to sort our original array and then determine the `partitionPoint`. Without the `partitionPoint`, we can't determine the smaller partitions we need to quicksort.

However, there's a problem. None of our methods determine where the partition should go!

If we look at the code we've written so far, we'll see that the `sortPartition()` function has the information we need. After all, when the `leftPointer` and `rightPointer` intersect, that intersection point should be our `partitionPoint`. However, that information is stuck inside the scope of `sortPartition()`. That function returns an array, not information about the pointer intersection that our `quickSort()` function needs.

Well, this is where we can take advantage of the fact that all of our `array` variables don't actually store the array we are modifying. They are just references to an array that is being stored in memory. In other words, we don't actually need to return an `array` from `sortPartition()`. Instead, we can just return the value of `leftPointer` and determine the `partitionPoint` based on that.

This does mean updating both our `sortPartition()` test as well as the function itself. Even though we do have to modify this test, our original test was still very helpful — it verified that `sortPartition()` will correctly move pointers and swap values as needed based on the pivot.

Let's start by updating our test:

```js
...
  test('it will sort and swap values in an array based on a pivot point', () => {
    const array = [5, 1, 3, 2, 7];
    const leftPointer = 0;
    const rightPointer = 4;
    expect(sortPartition(array, leftPointer, rightPointer)).toEqual(3);
  });
...
```

Thinking about how our `sortPartition()` function works, we can determine what the value of the `leftPointer` should be after a passthrough. The `leftPointer` will stay at position `0` while the `rightPointer` will move to position `3`. Then the values will be swapped. The `leftPointer` will move to position `1` while the `rightPointer` will move to position `2`. So the array looks like this now:

```js
[2, 1, 3, 5, 7];
```

The `leftPointer` is still less than or equal to the `rightPointer` (`1 <= 2`), so our outer while loop will run again.

Next, we'll run through the first inner while loop. We compare the value at the `leftPointer` (which is `1`) to the `pivot`, which is `3`. So the while loop increments the `leftPointer` by 1. Now the `leftPointer` is at position `2`. It's at the pivot. So the value at the `leftPointer` is `3`, which is the value of the `pivot`. `3 < 3` is not true so that while loop is finished.

Next, the `rightPointer` compares its current value at position `2`, which is the pivot. `3 > 3` is not true so that while loop doesn't end up iterating at all.

Finally, we check if `(leftPointer <= rightPointer)`. They are both at position `2`, so this is true. We then do our `swap()` function, which is needless since it's just a self-swap. We could add a conditional, so this self-swap doesn't happen, but the amount of code added wouldn't even save us much overhead.

At that point, we increment the `leftPointer` by 1 and decrement the `rightPointer` by 1. The `leftPointer` is at position 3 while the right pointer is at position 1. The condition of the outer while loop is no longer true because `3 <= 2` returns false. So the outer while loop is finished. 

That was an extensive walkthrough just to determine where the `leftPointer` is. But now it's clear why the expectation for our test is that `sortPartition()` should return `3`.

All we need to do to get this test passing again is update the return of our `sortPartition()` function:

```js
export function sortPartition(array, leftPointer, rightPointer) {
  const pivot = findPivot(array, leftPointer, rightPointer)
  while (leftPointer <= rightPointer) {
    while (array[leftPointer] < pivot) {
        leftPointer++;
    }
    while (array[rightPointer] > pivot) {
        rightPointer--;
    }
    if (leftPointer <= rightPointer) {
        swap(array, leftPointer, rightPointer);
        leftPointer++;
        rightPointer--;
    }
  }
  // All we've changed is the return statement.
  return leftPointer;
}
```

This will get our test passing. Incidentally, it will get our `quickSort()` test passing, too, but we aren't done walking through that function yet. So let's return to the `quickSort()` walkthrough. 

Here's the whole function again:

```js
...
export function quickSort(array, leftPointer = 0, rightPointer = array.length - 1) {
  let partitionPoint;
  if (array.length > 1) {
    partitionPoint = sortPartition(array, leftPointer, rightPointer);
    if (leftPointer < partitionPoint - 1) {
      quickSort(array, leftPointer, partitionPoint - 1);
    }
    if (rightPointer > partitionPoint) {
      quickSort(array, partitionPoint, rightPointer);
    }
  }
  return array;
}
...
```

We are currently at this line of the code:

```js
partitionPoint = sortPartition(array, leftPointer, rightPointer);
```

Our `sortPartition()` function now returns where the `leftPointer` is when `sortPartition()` is complete. That will be the updated value of our `partitionPoint` variable.

Just to clarify once again, `sortPartition()` is still sorting the array even though the function now returns the value of its `leftPointer`, not the array itself. That's because regardless of the scope of any of the `array` variables in the `quickSort()` function, they are always referring to the same array in memory. These references will fall out of scope and new references will be created, but once again, they are always modifying the same array.

Now that we have a `partitionPoint`, we'll be able to divide our array into smaller and smaller partitions until the collection is fully sorted. To determine whether we'll need to run `quickSort()` again, we have two conditionals.

Here's the first conditional:

```js
if (leftPointer < partitionPoint - 1) {
  quickSort(array, leftPointer, partitionPoint - 1);
}
```

This reference to a `leftPointer` might be a bit confusing at first because it's a different `leftPointer` than the one we were just referring to in `sortPartition()`. So let's slow down a bit and walk through this.

When we first call our `quickSort()` function, it calls `sortPartition()`, which does a single quicksort passthrough of our entire array. Inside `sortPartition()`, both pointers are moving and values are being swapped until the passthrough ends. At this point, the `leftPointer` value from inside our `sortPartition()` is only useful to determine the `partitionPoint`. The `leftPointer` value from inside that function falls out of scope.

Now we have an array that's a little bit more sorted and we have a `partitionPoint` to determine where this array should be partitioned. But our `leftPointer` and `rightPointer` values are the first and last element of the array, respectively. This is fine — because these values are only going to be used to determine the boundaries of each partition. As long as the `leftPointer` is less than the rightmost boundary of the partition, we can keep sorting. But once the `leftPointer` overtakes `partitionPoint`, our algorithm knows that particular partition is completely sorted.

So as long as the conditional is true, we still have sorting to do. That means our algorithm will call `quickSort()` on the newly-created left partition. The boundary for this partition will be the `leftPointer` on the left side and `partitionPoint - 1` on the right side.

The next conditional does the same thing, but for the newly-created right partition. The boundary for this partition will be `partitionPoint` on the left side and `rightPointer` on the right side.

As each recursive call occurs, the partitions on each side will get smaller and smaller. When the pointers intersect with the opposite side of their boundary — which means there are no values between the boundaries — that section is done. We work our way through the stack of recursive calls until the entire array is sorted and then returned.

If this is still confusing — and we expect it might be since this is the most challenging algorithm we've covered — we recommend setting up a breakpoint in the code, intentionally breaking the test for `quickSort()`, and then stepping through the code line by line to see exactly what's happening.

At this point, we've learned five different sorting algorithms. There are many others but they are beyond the scope of this curriculum. You're encouraged to do further exploration on your own — and you might find this visualization interesting (not recommended for epileptics): [15 Sorting Algorithms in 6 Minutes](https://www.youtube.com/watch?v=kPRA0W1kECg&ab_channel=TimoBingmann). It shows how each sorting algorithm actually processes and sorts collections.
