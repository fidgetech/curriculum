---
title: ✏️ Selection Sort
id: selection-sort
slug: selection-sort
hide_table_of_contents: true
sidebar_position: 34
day: thursday
type: exercise
url: 'https://github.com/fidgetech/capstone/blob/main/selection_sort.md'
---

A **selection sort** algorithm is one of the simplest sort algorithms we can learn. In fact, if you tried to implement a sort algorithm on your own, there's a decent chance that it is a selection sort. In a selection sort algorithm, we start by looping through our array. We then take the current index and loop through every _remaining_ element in the array, swapping as needed until the index is the lowest remaining value.

Let's walk through a simple example which should make this clearer. Here's an unsorted array:

```js
let array = [3,2,1];
```

We need to loop through this array. On the first iteration through the loop, the index is `3`. Now we need to compare that to every remaining element in the array by looping through the remaining elements.

Is `3` greater than `2`? It is. So we swap. Now the array looks like this:

```js
array = [2,3,1];
```

The first element in the array has changed — but we are still comparing it to remaining elements in the array. There is only one element left in the array to compare to: is `2` greater than `1`? Yes, it is. So we swap again. Our array now looks like this:

```js
array = [1,3,2];
```

The end result of all that swapping is that the first element in the array is now the element with the lowest value. It's been sorted — though as you can probably imagine, in a very large array, we'd probably need to do a _lot_ of swapping to do this.

So now it's time for our second iteration through the outer loop. The value at the second position is `3`. We only need to compare it against the _remaining_ elements in the array — all elements that come before it have already been sorted. So now we just need to compare it to the last element in the array. Remember, this is our inner loop — but because there is only one element left in the array, our inner loop will only perform one more iteration.

Is the element at the current index (`3`) greater than the element we are comparing it to (`2`)? Yes, it is. So we swap. Here's the array now:

```js
array = [1,2,3];
```

We then go to the final element in the array — but there are no remaining values to compare it to so we are finished.

The next step is to try to implement the selection sort on your own. Go ahead and try to do this. We recommend implementing TDD though you can also try to whiteboard the solution as well.

If you are stumped, read a clue and then continue trying to solve the problem. This is what would happen in an actual technical interview — an interviewer might prompt you, which could help you get to the next step.

If the clue isn't helpful because you've already solved that part of the equation, go to the next clue.

### Clues

**Clue #1:** You need to loop through each element in the array. Your first step is to add an outer loop that iterates through the current index. That can be a simple `for` loop:

```js
for (let i = 0; i < array.length; i ++) {
  // Code for comparing will go here.
}
```

**Clue #2:** You are going to need to iterate through every _remaining_ element in the array. In other words, from the element _after_ the current index until the end of the array. We can do this with another `for` loop:

```js
for (let i = 0; i < array.length; i ++) {
  for (let j = i+1; j < array.length; j++) {
    // Here's where we need to compare the element at position i to the element at position j.
  }
}
```

**Clue #3:** We need a conditional that compares the array at position `i` to the array at position `j`. And if the value at position `i` is _greater_ than the value at position `j`, we need to swap the two values — because we always want the _lowest_ value at position `i` (the element we are currently trying to sort).

```js
if (array[i] > array[j]) {
  // If this is the case, we need to swap the values!
}
```

**Clue #4:** It's time to swap. But be careful! We can't just do the following:

```js
array[i] = array[j]
array[j] = array[i]
```

Can you see why not? Well, if we update `array[i]` to the value of `array[j]`, we'll lose the former value of `array[i]` — and we won't be able to correctly reassign the value of `array[j]` to what `array[i]` used to be. So we need to assign it in a variable. For instance, we could do this:

```js
let higherValue = array[i];
array[i] = array[j]
array[j] = higherValue;
```

### Final Solution

As we discussed in the clues, we need an outer and an inner loop. The outer loop iterates through the entire array while the inner loop compares the current index with each element that comes _after_ the current index, swapping the current index with the index to compare as needed. Here's the final code:

```js
function selectionSort(array) {
  for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
    for (let indexToCompare = currentIndex+1; indexToCompare < array.length; indexToCompare++) {
      if (array[currentIndex] > array[indexToCompare]) {
        const higherValue = array[currentIndex];
        array[currentIndex] = array[indexToCompare];
        array[indexToCompare] = higherValue;
      }
    }
  }
  return array;
}
```

As we can see, the inner loop iterates from `currentIndex + 1` to less than the `array.length` — that's all the remaining elements in the array!

Then it checks if the array at the `currentIndex` position is greater than the array at `indexToCompare`. If it is, we need to swap!

We need to store one of the two values before swapping — otherwise, it will get lost. We store the higher value — though it could just as easily be the other way around. Then we swap the values.

Once we've completely iterated through both loops, we're done and the array will be fully sorted.

So what's the Big O of this algorithm? It should be obvious...

If you guess O(n<sup>2</sup>), you're right. While the inner array does get smaller and smaller over time, that's still a lot of iteration, especially for large unsorted arrays. On the other hand, we don't have to worry about memory constraints — no temporary arrays are created and values are swapped in-place. It's also a simple algorithm to implement. That being said, if you were asked to implement an efficient sorting algorithm in either a technical interview or in an application, this one would not be the way to go.