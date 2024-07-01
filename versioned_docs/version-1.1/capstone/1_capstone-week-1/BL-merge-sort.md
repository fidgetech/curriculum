---
title: "\U0001F4D3 Merge Sort"
id: merge-sort
slug: merge-sort
hide_table_of_contents: true
sidebar_position: 38
day: thursday
type: lesson
url: 'https://github.com/epicodus-curriculum/capstone/blob/main/merge_sort.md'
---

At this point, we've looked at several sorting algorithms that have a Big O of O(N<sup>2</sup>): the bubble sort, insertion sort, and selection sort algorithms. Now we're ready to look at a few algorithms that are both more efficient and more complex.

In this lesson, we'll cover the **merge sort** algorithm, which uses a divide and conquer approach to break down an array into many arrays of just one element, then sorts and merges the arrays back together until the array we started with is fully sorted. The Big O of a merge sort algorithm is O(n * Log n) — which is faster than O(n<sup>2</sup>). One interesting thing, though, is that the Big O for a merge sort algorithm is _always_ the same — whether that's the best-case or worst-case scenario. So in a best-case or near best-case scenario (where an algorithm is already sorted), the inefficient algorithms we've learned are faster than merge sort.

Because this is a more complex algorithm to implement, we are going to return to our TDD approach. We aren't asking you to figure it yourself (so no clues this time) but you are more than welcome to try to write your own solution if you want a challenge.

Before we get started, let's take a look at how a merge sort actually works. We'll use the array we've been working with so far with other sort algorithms as an example: `[9,5,7,3,15,12]`.

First, a merge sort algorithm splits the larger array into smaller and smaller arrays — until each array is only one element.

![In a merge sort, the array is split in half repeatedly until it is a series of arrays of just one element](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/split-before-merge-sort.png)

As we can see from the illustration, this is the _divide_ part of a merge sort's _divide and conquer_ approach.

You can probably guess what happens next: the arrays are _merged_ again — but they are sorted as they're merged.

![Next, each smaller array is merged and sorted until all the arrays have merged into one sorted array.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/merge-array-again.png)

The end result is a fully sorted array — and while the process may seem complicated, it's more efficient than the sorting algorithms we've learned so far — at least for large collections.

### Writing A Function to Merge Two Arrays

As always, we'll start small with our TDD approach. We don't need to solve the entire problem at once. Let's start by writing a function that will merge two arrays. We'll use the same Jest testing environment we've been using throughout the computer science curriculum. We'll begin with a test:

<div class="filename">__tests__/merge-sort.test.js</div>

```js
import { merge } from '../src/merge-sort.js';

describe('merge', () => {

  test('it will merge two arrays of one element each', () => {
    const leftArray = [3];
    const rightArray = [6];
    expect(merge(leftArray, rightArray)).toEqual([3, 6]);
  });
});
```

First, note that we are using a named import instead of a default import here. That's because our source code will ultimately have multiple functions — and we'll need to write tests for each of them.

Our first test will check to see if we can correctly merge two arrays. No sorting will happen yet.

Here's the code to get this to pass:

<div class="filename">src/merge-sort.js</div>

```js
export function merge(leftArray, rightArray) {
  let mergedArray = [];
  mergedArray.push(leftArray[0]);
  mergedArray.push(rightArray[0]);
  return mergedArray;
}
```

Our `merge()` function takes two arguments — a `leftArray` and a `rightArray`. We haven't written code that splits an array yet, but when we do, it will take the half of the array on the left and split it from the half of the array on the right.

For example, let's say we had the following: `[5, 3, 9, 1]`. If we were to split this in two, `[5, 3]` would be the `leftArray` and `[9, 1]` would be the `rightArray`. We would then split these into arrays of single elements again because a merge sort algorithm always breaks everything down to arrays of single elements before it begins to sort.

Next, we create a `mergedArray` variable which holds an empty array. Since there is no sorting to do, we simply push the two elements into the merged array — first the left, then the right.

That will get our first test passing.

What if the element in the `leftArray` is larger? Let's write a test for that now.

<div class="filename">__tests__/merge-sort.test.js</div>

```js
...
  test('it will merge and sort two arrays of one element each', () => {
    const leftArray = [6];
    const rightArray = [3];
    expect(merge(leftArray, rightArray)).toEqual([3, 6]);
  });
...
```

Getting this passing is as simple as adding a conditional and changing the order we push the elements. Here's the code:

<div class="filename">src/merge-sort.js</div>

```js
export function merge(leftArray, rightArray) {
  let mergedArray = [];
  if (leftArray[0] > rightArray[0]) {
    mergedArray.push(rightArray[0]);
    mergedArray.push(leftArray[0]);
  } else {
    mergedArray.push(leftArray[0]);
    mergedArray.push(rightArray[0]);
  }
  return mergedArray;
}
```

It's not very clean and has a lot of repetition. However, it gets the test passing and should demonstrate a clear sense of what we are trying to do. If the value in the `rightArray` is smaller, we push that one to `mergedArray` first. If the value in the `leftArray` is smaller, that's the one that gets pushed into `mergedArray` first.

Also, all that repetition with the `[0]` position of each array should get us thinking about the next step — working with arrays that have more than one element. We'll obviously need a loop to do that. Let's start with a test again.

<div class="filename">__tests__/merge-sort.test.js</div>

```js
...
  test('it will merge and sort two arrays of two elements each', () => {
    const leftArray = [3, 5];
    const rightArray = [4, 6];
    expect(merge(leftArray, rightArray)).toEqual([3, 4, 5, 6]);
  });
...
```

In the test above, we take two arrays of two elements each. We expect our `merge()` function to merge and sort these two arrays. By the way, note that these arrays are both sorted. Our `merge()` function will only work if every element in both of the arrays it merges are sorted. This is expected — after all, it will start with two arrays, each with a single element, merge and sort them, and continue to do that until it has fully sorted the array. The `merge()` function should never be merging two unsorted arrays into a sorted array — if that were to happen, it would mean there's something wrong with our code — and the final `mergedArray` will not be correctly sorted.

To get this test passing, we're going to need a loop. Our loop will actually go through _both_ the `leftArray` and the `rightArray`, pushing the lower value as needed. But how exactly will this work? Before we show you the code, a key caveat — our tests **will not pass yet** because we are omitting a key step. For now, we just want to demonstrate how the loop will work.

<div class="filename">src/merge-sort.js</div>

```js
// Our tests won't pass yet because a key step is still missing. The loop itself, though, is complete.

export function merge(leftArray, rightArray) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while ((leftIndex < leftArray.length) && (rightIndex < rightArray.length)) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex ++;
    } else {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex ++;
    }
  }
  return mergedArray;
}
```

First, we need an index for both arrays. We'll name these `leftIndex` and `rightIndex` and start them each at `0`. What we're doing here is creating a pointer that will start at the first element of each array.

Next, we'll use a while loop. As long as `leftIndex < leftArray.length` _and_ `rightIndex < rightArray.length`, the loop will keep running. We'll cover this more in a moment.

Next, we have a conditional. If the element at the `0` position of `leftArray` is less than or equal to the element at the `0` position of `rightArray`, that means we need to push the element from `leftArray` into `mergedArray` first. After we do that, there's another key step — we need to _increment_ the `leftIndex`. That's because we are done pushing the first element from the `leftArray` into `mergedArray`. The next time through the loop, we will no longer be pointing at the first element of `leftArray` — instead, we'll be pointing at its second element. `rightIndex` will still be pointing at the first element of `rightArray` because we haven't pushed any elements from that array into `mergedArray` yet.

On the other hand, if the value at `rightArray` is smaller, the element that we are pointing at in the `rightArray` will get merged and `rightIndex` will be incremented.

Let's imagine for a moment that we are merging the following arrays:

```js
const leftArray = [2, 3, 5];
const rightArray = [7, 9, 13];
```

Note that all the values in `leftArray` are smaller than all the values in `rightArray`.

The first time through the loop, both the `leftIndex` and `rightIndex` will be 0. `2` is less than `7` so `2` will be pushed to `mergedArray` and `leftIndex` will be incremented to `1`.

The second time through the loop, `leftIndex` is 1 and `rightIndex` is still 0. `3` is less than `7` so `3` will be pushed to `mergedArray`. `leftIndex` will be incremented to 2 while `rightIndex` doesn't change.

The third time through the loop, `leftIndex` is 2 and `rightIndex` still hasn't changed — it's 0. `5` is less than `7` so it gets pushed to `mergedArray`.

The fourth time through the loop, we are taking advantage of how JavaScript handles comparisons with `undefined`. There is no `leftArray[3]`, which means it's `undefined`. Because our condition is false, all of the elements of the `rightArray` will be pushed, one at a time, to `mergedArray` while `rightIndex` is incremented once each time.

Let's also demonstrate how this works with an illustration because this is the first time we've used two pointers to point at and compare values from two different arrays at different indexes of each array. Let's say we want to merge the following two arrays: `[3, 7, 12]` and `[2, 5, 9]`.

![First iteration through the loop.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/merge-sort-pointer/first-iteration.png)

The first time through the loop, we have pointers at the first element of both arrays. That's what the illustration above shows. Because `2` is the lower value, it will get pushed to `mergedArray` and the pointer for the array on the right will move forward one element.

![Second iteration through the loop.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/merge-sort-pointer/second-iteration.png)

The illustration above shows where we are at the second time through the loop. We are now comparing `3` and `5`. `3` is smaller — and that value from the left array is going to get pushed to `mergedArray`. The pointer for the array on the left gets moved forward one element.

![Third iteration through the loop.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/merge-sort-pointer/third-iteration.png)

Each pointer has moved forward one by the time we start our third iteration. Now we are comparing `7` and `5`. `5` is smaller so that value gets pushed to `mergedArray` and the pointer for the array on the right gets moved forward one element.

![Fourth iteration through the loop.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/merge-sort-pointer/fourth-iteration.png)

Now we are comparing `7` and `9`. `7` is less, so push that to `mergedArray` and move the pointer forward for the array on the left.

![Fifth iteration through the loop.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/merge-sort-pointer/fifth-iteration.png)

For our fifth and last time through the loop, we'll compare `9` and `12`. `9` is less so it will get pushed to `mergedArray`.

But wait a minute. We only do five total loops? What about the sixth element? Our `mergedArray` won't contain the number `12`. This is because the conditions for both while loops has been met. So if we run our tests now, we'll see that our `merge()` function _mostly_ merges and sorts two sorted arrays — but the final element will be missing. In fact, with the way the pointers work, the pointer for the array on the right will now be pointing _beyond_ the final element.

This actually works to our advantage. We can use `Array.prototype.slice()` to grab the values at both the `leftIndex` and the `rightIndex` for their respective arrays. Let's take a look at the updated function:

<div class="filename">src/merge-sort.js</div>

```js
export function merge(leftArray, rightArray) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while ((leftIndex < leftArray.length) && (rightIndex < rightArray.length)) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex ++;
    } else {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex ++;
    }
  }
  mergedArray = mergedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex)); // new code
  return mergedArray;
}
```

As we can see, we slice the elements at both the `leftIndex` and `rightIndex` and concatenate them to `mergedArray`. The nice thing about `Array.prototype.slice()` is that we can "slice" a non-existent piece of an array (such as the 5th element of an array that only has 3 elements) and it will just return an empty array. So if we slice the `leftIndex` and `rightIndex` of the arrays in the illustration above, the `leftIndex` for the array on the left will be `2` — and the value of `leftArray.slice(2)` will be `[12]`. Meanwhile, `rightIndex` is at `3` — so if we run `rightArray.slice(3)`, the return will be `[]`. That means we can concatenate the value at both `rightIndex` and `leftIndex`. One will concatenate `[]` and the other will concatenate `[12]`.

So now we have a working `merge()` function that will merge sorted arrays of any size. The next step is to write a recursive function that will split up an array into smaller parts.

### Dividing An Array

We'll call this function `mergeSort()`. The very first behavior we'll test is that it can correctly return an array of one or zero elements. There's no need to sort in that case.

Here's our test. We'll keep our new tests in the same suite.

```js
...
  test('mergeSort() will return an array of one or zero elements', () => {
    const array = [1]
    expect(mergeSort(array)).toEqual([1]);
  });
...
```

And here's the code to get this test passing:

```js
export function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
}
```

This conditional is an essential part of our function. We'll see why in a moment.

So what's our next test? Well, this function will be splitting arrays in half — but it won't be returning these values. It will only be doing so internally so the `merge()` function can process them — and this function will also be called recursively. Our next test will check if `mergeSort()` can properly sort an array of two elements.

Why test this when we've already confirmed that `merge()` will sort an array of two elements? Well, `mergeSort()` will be a control function that recursively calls itself and uses the `merge()` function we've already written to sort and merge arrays. So we need to make sure that `mergeSort()` can correctly handle this and return the final sorted array.

Here's a test:

```js
...
  test('mergeSort() will sort an array of two elements', () => {
    const array = [7,4];
    expect(mergeSort(array)).toEqual([4,7]);
  });
...
```

Now let's get this test passing. Here's the full `mergeSort()` function:

```js
export function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const midpoint = Math.floor(array.length / 2);
  const leftArray = array.slice(0, midpoint);
  const rightArray = array.slice(midpoint);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
```

Let's skip to the new code. We determine the `midpoint` of the array with `Math.floor(array.length / 2);`. Once we know the `midpoint`, we can use `Array.prototype.slice()` to divide the array in half using the `midpoint`:

```js
const leftArray = array.slice(0, midpoint);
const rightArray = array.slice(midpoint);
```

Each time our `mergeSort()` function is called on an array, it will find the midpoint and then create a `leftArray` and a `rightArray`.

Next, we'll pass these into our `merge()` function. Note, however, the arguments we are passing into `merge()`. We aren't just passing in `leftArray` and `rightArray`. We're passing in the `mergeSort()` function as both arguments instead. We'll explain exactly what's happening by walking through an example in a moment.

But first, if we check our test, we'll see that it passes. In fact, our code is complete. We could write another test for an array with any number of unsorted elements and it will pass.

Now let's go into a bit more detail about what exactly is happening recursively in this function because it can be a bit confusing at first.

Let's say we pass in the following array to our `mergeSort()` function:

```js
const array = [7, 3, 5, 4];
```

First, our algorithm will check to see if the array's length is less than 1. It's not.

Next, it will calculate the `midpoint`, which is `2`. `leftArray` will be `[7, 3]` while `rightArray` will be `[5, 4]`.

So here's what gets passed into our `merge()` function:

```js
return merge(mergeSort([7,3]), mergeSort([5,4]));
```

In effect, we are saying, _merge_ these arrays — but wait! _Split_ them again first.

So `mergeSort()` gets called again for each array.

For the left array (`[7, 3]`), the midpoint is 1. The array will be split again into new left and right arrays: `[7]` and `[3]` respectively.

Meanwhile, `mergeSort()` is doing the same thing for the right array (`[5, 4]`) and splitting them into `[5]` and `[4]`.

So our `merge()` function will be called four _more_ times, one for each of these one element arrays. Once again, we are saying, _merge_ these arrays — but wait! First _split_ them again if needed.

Now we have four _additional_ `mergeSort()` function calls in addition to the `mergeSort()` calls that are already in the stack.

Here is where our conditional is essential:

```js
if (array.length <= 1) {
  return array;
}
```

If we have broken our arrays down to one or zero elements each, `mergeSort()` will just return the array. If we didn't do this, our `mergeSort()` function would keep saying _merge — but wait! Split first_ forever, even though we can't split an array of one or zero elements any further. The maximum call stack will be exceeded and the function will fail. If you want to see this for yourself, remove the conditional and run the `mergeSort()` function.

Once each of the `mergeSort()` function calls return the array, we're ready to go back through the stack, resolving each `merge()` function call, sorting each array and merging it until we have a single sorted array again. As always, don't forget that a JavaScript function has to `return` something or its return will be `undefined`. For that reason, we have to `return` the `merge()` function.

The recursive part of a merge sort algorithm is the most confusing part — so take a little time to understand what's happening if it's still not quite clear. This divide and conquer approach is certainly faster than the quadratic time sorting algorithms we've learned so far. However, as you might imagine, JavaScript isn't well-suited for this algorithm when it comes to sorting very large arrays. That's because JavaScript has a maximum stack size. For instance, if we were to run this test:

```js
...
test('mergeSort() will sort an array of one million elements', () => {
  let array = [];
  for (let i = 0; i <= 1000000; i++ ) {
    array.push(Math.floor(Math.random() * Math.floor(1000)));
  }
  expect(mergeSort(array)).toEqual([]);
});
...
```

We will get a `Maximum call stack size exceeded` error. JavaScript will happily create an array of one million elements for us — but our `mergeSort()` function won't be able to handle the call stack of all those recursive calls. In order to fix it, we'd need to utilize tail call optimization — which would mean that recursive calls wouldn't be added to the stack. But that's a digression from our current topic.

Generally, a merge sort algorithm is much better than the algorithms we've already learned, but there are some interesting additional pieces of information about it. The algorithms we've already learned use quadratic time in the average and worst-case scenarios — but in the best-case scenario (where an array is already sorted or mostly sorted), they only use linear time.

A merge sort algorithm, on the other hand, _always_ divides and conquers before merging again. That means it will take the same amount of time regardless of whether the array is sorted or not. This makes it consistent — the best-case and worst-case scenario are the same — but you can probably imagine scenarios where the quadratic time algorithms we've already learned might function better. For instance, let's say we have a database full of millions of small arrays. Most are sorted, but there are some that are not due to occasional glitches in our sorting software. We'd actually be better off doing the work with one of our quadratic algorithms because this task would mostly run in linear time with only occasional arrays that would be sorted in quadratic time.

So while a merge sort algorithm is generally a better tool for sorting large arrays, that doesn't mean that the quadratic time sorting algorithms we've learned can't sometimes do the job faster.