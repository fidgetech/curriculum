---
title: "\U0001F4D3 Bubble Sort"
id: bubble-sort
slug: bubble-sort
hide_table_of_contents: true
sidebar_position: 37
day: thursday
type: lesson
url: 'https://github.com/epicodus-curriculum/capstone/blob/main/bubble_sort.md'
---

In this lesson, we'll cover the **bubble sort algorithm**. It isn't efficient for either large _or_ small collections, so there's no reason to use it in the real world. However, it is a conceptually interesting way of sorting a collection — and this gives us an opportunity to explore yet another method for sorting.

A bubble sort algorithm compares the first two elements in a collection. If the first element is the higher value, that means the two elements are out of order — so the algorithm swaps them. Then it does the same comparison between the second and third elements, the third and fourth elements, and so on until it has gone through the entire collection. Then it will iterate through the entire collection again, swapping as needed. The algorithm is called _bubble_ sort because elements eventually bubble up in the correct order — though it can take many iterations for this to happen. In fact, since the higher of the two elements is always moved to the right in a bubble swap, after the first passthrough, the last element is sorted. After the second passthrough, we know the second-to-last element is sorted, and so on. Adding this optimization can make a bubble sort 50% faster — though its Big O still O(n<sup>2</sup>), or quadratic time.

Let's take a look at a visual example of a bubble sort's first passthrough of a collection.

![This chart shows a bubble sort comparing elements in a collection and swapping as needed.](/computer-science-curriculum-2020/bubble-sort.png)

As we can see from this illustration, the bubble sort algorithm compares one pair of elements at a time and swaps them as needed. By the end of the first iteration, the last element in the collection will be sorted. It's just a coincidence that the last three elements happen to be sorted in the diagram above. Each iteration through the collection can only guarantee that one more sorted element will be added to the end — though in general, the rest of the collection will gradually become more sorted as well.

Looking at the example above, how many more passthroughs will the algorithm need to make before it is finished?

If you guessed two, that is almost the right answer. After two more passes, the collection will be entirely sorted because `3` will be in its correct place at the beginning of the collection.

However, the algorithm doesn't know the collection is sorted yet. It will need to make _one more_ pass to ensure that every element is sorted.

At this point, it's time to try to implement your own bubble sort algorithm. The solution we will provide below is recursive, though your solution does not need to be. Once again, try to solve the problem without using the clues below. As needed, read a clue and see if you can solve the problem before moving onto the next clue.

### Clues

**Clue #1:** We'll need a simple loop that iterates through the array. Each time through the array, it needs to do a comparison. `if (array[index] > array[index + 1])`, something needs to happen, but what?

**Clue #2:** If our algorithm finds it needs to swap two values, we'll have to have a placeholder for one of them — otherwise one of the values will get lost as we are trying to swap! It could look something like this:

```js
let min = array[index + 1];
array[index + 1] = array[index];
array[index] = min;
```

**Clue #3:** How is our algorithm supposed to know when if it needs to iterate through the collection again or not? Well, we can use a flag called `swapped` that is set to `false` — but is changed to `true` if a swap happens while iterating through the collection.

**Clue #4:** Once we have the basic algorithm in place, how can we make it more efficient? Well, each time we fully iterate through the collection, we know at least one more element at the end of the collection has been sorted. We can set up a counter for the number of `passes` we've made — and then the next time through the loop, the number of iterations will be less than `array.length — passes`.

### Solution

Now we're ready for the solution. As we mentioned before, we are providing a recursive solution — but you can also solve this without recursion as well. Here is an example of the bubble sort algorithm:

```js
function bubbleSort(array, passes = 0) {
  let swapped = false;
  for (let index = 0; index < array.length — passes; index++) {
    if (array[index] > array[index + 1]) {
      let min = array[index + 1];
      array[index + 1] = array[index];
      array[index] = min;
      swapped = true;
    }
  }
  passes++
  if (swapped === true) {
    return bubbleSort(array, passes);
  } else {
    return array;
  }
}
```

Our function takes an `array` as an argument. It will also start with `0` passes.

Next, we have a variable called `swapped` that flags whether any values have been swapped or not. It starts out as `false`.

If an array has already been sorted, the algorithm will only need to iterate through it once — that is O(n). Of course, that is a best case (and rare) scenario.

Next, we have our loop. Note that it will keep iterating until `index < array.length — passes`. The first time this for loop fully runs, `passes` will be 0 — but it will be increased by 1 after the algorithm has fully iterated through the collection. Technically, we don't need to add `passes` at all for this algorithm to work — but it does make it considerably more efficient.

If `(array[index] > array[index + 1])`, that means the values need to be swapped. Remember, the lower value needs to be on the right as this will be sorted in ascending value.

Here's how we make the swap:

```js
let min = array[index + 1];
array[index + 1] = array[index];
array[index] = min;
swapped = true;
```

First, we need to store one of the values in a variable — otherwise, when we make the swap, one of the values would end up lost. Then we make the swap. Finally, we make sure our `swapped` flag is set to `true`. If this conditional is never hit when the algorithm runs through the loop, `swapped` will remain `false`, which means the collection is fully sorted.

After the `for` loop is complete, we increment the number of `passes` by 1. This way, the next time we iterate through the collection, we can omit one more element from the end — because each time through the collection, the remaining highest value will be sorted. In other words, the sorted section at the end of the array becomes one element longer.

Finally, if `swapped` is `true`, the algorithm calls itself recursively and goes through the process of iterating through the collection again.

However, if `swapped` is not true, that means the algorithm went through the entire collection without swapping any pairs — which means it's fully sorted and can be returned.

And that, in a nutshell, is the bubble sort algorithm — an algorithm that is interesting to learn but which you will likely never use in the real world.