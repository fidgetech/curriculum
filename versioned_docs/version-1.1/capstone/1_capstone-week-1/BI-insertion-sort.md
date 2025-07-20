---
title: "\U0001F4D3 Insertion Sort"
id: insertion-sort
slug: insertion-sort
hide_table_of_contents: true
sidebar_position: 35
day: thursday
type: lesson
url: 'https://github.com/epicodus-curriculum/capstone/blob/main/insertion_sort.md'
---

In this lesson, we'll take a look at the **insertion sort** algorithm. This algorithm uses O(n<sup>2</sup>) time, so it's not a good choice for large lists. Interestingly enough, this algorithm isn't a bad choice for smaller lists, though. Why is that? Well, some of the algorithms that are efficient for large lists have a high constant while the insertion sort algorithm has a low constant. Think of it like this: if you want to give a letter to your neighbor next door, is it faster to just walk next door or deliver it by mail? It's faster to just go next door — because there is no overhead of a constant to worry about. On the other hand, the further away you need to go to mail a letter, the more it makes sense to send it via the post office instead of hand delivering it.

So how does the insertion sort work? Well, we can think of it as separating a collection into two parts. The first part is a sorted section and the second is an unsorted section. At first, the sorted part is just the first item in the collection. Let's take a look at an example that uses the array `[9,5,7,3,15,12]`.

![The illustration shows what will happen each time through the loop.](/images/computer-science-curriculum-2020/insertion-sort.png)

The first time through the loop, the algorithm takes the first element in the unsorted section and then determines where it should go in the sorted section. Right now, the sorted section is only one element `[9]`. Meanwhile, the unsorted section is the rest of the array. The first element of the unsorted section is `5`. So the algorithm will insert the `5` before the `9`.

Now the sorted section is `[5,9]` while the unsorted section is `[7,3,15,12]`.

The second time through the loop, the current index will be `7`. So we'll iterate through the sorted section until we determine where it should go. It happens to be in the second position.

That makes the sorted section `[5,7,9]` while the unsorted section is `[3,15,12]`. You can look at the illustration to see how the rest of the process should go. 

You'll see that there is one iteration where the algorithm knows it doesn't need to swap because the value it's checking is already sorted. How does it know? It just needs to check the last value of the sorted section. If the value that it's comparing is higher than that value, we know it needs to go at the end of the sorted section. No insertion necessary!

So this might seem relatively easy, right? Well, there's one thing that's tricky. There's no method that just inserts an element between two other elements in an array. It's easy to _replace_ an element — such as with splice. But _adding_ an element to the middle of the array is trickier. It involves _shifting_ every element that should come after the inserted element to the right. There are a lot of ways to do that, fortunately.

Now that you know how an insertion sort algorithm should work, it's time to try to write your own. We recommend implementing TDD though you can also try to whiteboard the solution as well. This one can actually be fairly tricky to solve.

If you are stumped, read a clue below and then continue trying to solve the problem. This is what would happen in an actual technical interview — an interviewer might prompt you, which could help you get to the next step.

If the clue isn't helpful because you've already solved that part of the equation, go to the next clue.

### Clues

**Clue #1:** You will need two loops — an outer loop and an inner loop. The outer loop always starts with the first value of the unsorted section of the array. Since we can consider the first element of the array to be a sorted section of one element, that means our outer loop should start with an index of 1.

```js
for (let index = 1; index < array.length; index++) {
    // Code omitted...
  }
```

**Clue #2:** What value do we need to insert in the ordered section of the array? That would be `array[index]`, which we'll call `valueToInsert`:

```js
let valueToInsert = array[index];
```

How should we determine where `valueToInsert` should go in the sorted section? Should we work from the front of the sorted section or the end of the sorted section? Well, remember that when we insert `valueToInsert`, we also need to _shift_ all elements after it one index _to the right_. So if we start at the beginning of the sorted section, we'll first have to find where to insert the element — and then we'll have to continue iterating, shifting all elements after it. It would be better to work _backwards_ instead, shifting elements to the right as we find where to insert `valueToInsert`. As an analogy, imagine that you want to insert a book on a shelf where there is only room for one book. You look at the last book on the shelf — and if the book should go before that, you move that book to the right so there is a new space for the inserted book to go. You keep moving books to the right until you find the correct space for the inserted book. Because you've been shifting books to the right, you have a space for it available.

Because our inner loop should work _from the end_ of the sorted section, that means we'd start at `index-1`:

```js
let indexOfSortedSection = index -1;
```

So our code so far would look like this:

```js
for (let index = 1; index < array.length; index++) {
  let indexOfSortedSection = index - 1;
  let valueToInsert = array[index];
  // We will need an inner loop here that starts at array[indexOfSortedSection] and works backwards through the sorted section of the array until it finds where valueToInsert should go.
}
```

**Clue #3:** What should our inner loop look like? Well, we could use a while loop. (Note we could use a `for` loop as well.) As long as `array[indexOfSortedSection] > valueToInsert`, we need to keep moving to the right. Remember, we want our numbers all in order — and currently `valueToInsert` is to the right of `array[indexOfSortedSection]`. That means the numbers will be out of order still. Once `valueToInsert` is greater than or equal to `array[indexOfSortedSection]`, we know we've found the right place.

So here's the code up to this point:

```js
for (let index = 1; index < array.length; index++) {
  let indexOfSortedSection = index - 1;
  let valueToInsert = array[index];
  while ((array[indexOfSortedSection] > valueToInsert)) {
    // What should we do while this condition is true?
  }
  // And finally, what should we do once we've found the correct place for valueToInsert to go?
}
```

**Clue #4:** At this point, you might be struggling to figure out what goes inside the while loop. Well, remember, if the condition in the loop is true, we need to move the element _to the right_. We will also need to decrement the value of `indexOfSortedSection` after we are done because we aren't using a `for` loop to do it for us.

```js
while ((array[indexOfSortedSection] > valueToInsert)) {
  let newValue = array[indexOfSortedSection];
  array[indexOfSortedSection + 1 ] = newValue;
  indexOfSortedSection--
}
```

Here, we are saying, _hey, we still haven't found the correct place to insert our value. Let's shift this element one spot to the right._ To do that, we first get the value of the current element in the sorted section. Then we assign the _next_ element in the array that collection. It's kind of like moving our books to create a space — though what we are actually doing is replacing the value at the next index with the value at the current index. You might be wondering how we aren't losing any data this way. Well, we saved `valueToInsert` in a variable — so when we overwrite that element, it doesn't matter since we have the data saved. We will always shift an element one over to the right before we overwrite it. And the first time we do that, as we just mentioned, is when we overwrite the element that we've stored in `valueToInsert`.

**Clue #5:** This code is still missing one thing — we never actually insert `valueToInsert` anywhere! We actually need to do this after we finish the while loop. This is what we need:

```js
while ((array[indexOfSortedSection] > valueToInsert)) {
  let newValue = array[indexOfSortedSection];
  array[indexOfSortedSection + 1 ] = newValue;
  indexOfSortedSection--
}
array[indexOfSortedSection + 1] = valueToInsert;
```

The key line is the final one:

```js
array[indexOfSortedSection + 1] = valueToInsert;
```

Why do the insert at `array[indexOfSortedSection + 1]`? Well, each time through the while loop, we decrement the index with `indexOfSortedSection--`. Once we've verified that the previous element _isn't_ greater than `valueToInsert`, we need to insert the value after the previous element.

### Solution

Here's the full solution to the problem:

```js
function insertionSort(array) {
  for (let index = 1; index < array.length; index++) {
    let indexOfSortedSection = index - 1;
    let valueToInsert = array[index];
    while ((array[indexOfSortedSection] > valueToInsert)) {
      let newValue = array[indexOfSortedSection];
      array[indexOfSortedSection + 1 ] = newValue;
      indexOfSortedSection--
    }
    array[indexOfSortedSection + 1] = valueToInsert;
  }
  return array;
}
```

Our algorithm takes an array as an argument. It essentially separates the array into two sections — the first sorted, the second unsorted. Since the sorted section is always the first element, that's why our outer loop, which sorts through the unsorted section, starts at an index of 1. It will always run through the entire array — that is, until `index < array.length`.

Since `index` is always the first element of the unsorted section, that means that `index - 1` is the last element of the unsorted section. We are going to work our way _backwards_ through the unsorted section. We discussed why in the clues and we'll cover the reason again in a moment.

For our inner loop, we need to keep track of two things:

* The current index of the sorted section. We initialize this by doing the following:

```js
let indexOfSortedSection = index - 1;
```

Remember, we are working backwards through the array so we need to start with the last element in the unsorted section.

* The value we need to insert in our array. This is the value at `array[index]`:

```js
let valueToInsert = array[index];
```

Next, we have our while loop. Our while loop is going to _shift_ elements to the right as it looks for where the `valueToInsert` needs to be inserted. As long as `array[indexOfSortedSection] > valueToInsert`, our loop will keep running. This condition states that as long as the element in our sorted array is greater than the value we need to insert, we need to keep shifting elements to the right. We can clarify this with a little example.

```js
// Unsorted Section

[3, 5, 8, 14] 

// Value to Insert

12
```

In the example above, we don't want `12` to be inserted at the end of the sorted section. We need to shift the last value in the sorted section (`14`) to the right and then check again:

```js
// Unsorted Section

[3, 5, 8, ..., 14]
```

We can see now that `12` (`valueToInsert`) is greater than `array[indexOfSortedSection]` (`8`), which means we've found the right spot to insert the value!

To actually shift values to the right, we do the following:

```js
let newValue = array[indexOfSortedSection];
array[indexOfSortedSection + 1 ] = newValue;
indexOfSortedSection--
```

We set the value of the _next_ index to the current index's value — essentially shifting it one to the right. For just a moment, the current index and the next index will be the same — but the current index will soon be overwritten, either by the value we want to insert (if we've found the right place for it) or the next element that needs to be shifted to the right. Remember, the very first time this happens, the element that we grabbed `valueToInsert` from will be overwritten. That's why we need to save its value in the variable `valueToInsert`.

By the way, if the value to insert doesn't need to be moved, our algorithm will see that right away because the conditional in the while loop will be met — so the inner loop wouldn't be activated. For that reason, in the _best case scenario_, this algorithm is actually O(n). The best case scenario is that the algorithm is sorting a fully sorted or nearly sorted array — which means the inner loop will rarely be used. Of course, we probably wouldn't be trying to sort arrays that are already sorted — so the best case scenario wouldn't happen very often.

After our while loop shifts an element to the right, it decrements the index of the sorted section:

```js
indexOfSortedSection--
```

Here's something a little weird about our algorithm. What if we need to insert something in the first position of our array? Well, `indexOfSortedSection` will be decremented to `-1`. Fortunately, the following is `false`, which will cause our while loop to end:

```js
undefined > valueToInsert
```

This is a bit weird and we can avoid comparing it to `undefined` by doing the following:

```js
...
while ((indexOfSortedSection >= 0) && (array[indexOfSortedSection] > valueToInsert)) {
...
```

This would ensure that we never compare it to `undefined` — though it ultimately amounts to the same thing.

Finally, once we've determined where we should insert `valueToInsert`, we do so with the following:

```js
array[indexOfSortedSection + 1] = valueToInsert;
```

That's because when we determine that `valueToInsert` is greater than `array[indexOfSortedSection]`, we have to put the value _after_ `array[indexOfSortedSection]` — in other words, `array[indexOfSortedSection + 1]`.

Once this is all done, the array will be sorted and we can return it. While this algorithm is generally fairly slow, it is not too inefficient with smaller collections — and can be faster than better algorithms if the collection is small enough. We also don't need to worry about space because it will switch values in-place.

As we mentioned earlier, this algorithm can be a bit confusing at first. If you weren't able to figure out how to write it on your own — or are still feeling confused — we recommend trying it out in a VS Code Jest environment, adding a breakpoint to step through the code so you can see what happens on each line.