---
title: ✏️ Utilizing Big O Notation Practice
day: monday
---

In the last lesson, we covered the basics of Big O notation. In this lesson, it's time to practice what we've covered. Go through the exercises below and try to identify the Big O of each algorithm. The answers (along with brief explanations) are at the end of the lesson. If some of the code looks confusing, don't worry about trying to understand every line — just see if you can correctly figure out the Big O runtime complexity.

### Problem 1

We can use the following algorithm to see if a numerical value exists in an array. The algorithm will find the first place where the number exists and return its index.

```js
function findFirstIndexOfNumber(number, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1
}
```

What is the Big O runtime of this algorithm?

### Problem 2

Now for a wrinkle on the last problem. Instead of finding just the first index where a number exists, our algorithm needs to find _every_ index where the number exists. Here's the algorithm:

```js
function findEachIndexOfNumber(number,array) {
  let arrayOfIndexes = [];
  array.forEach(function(element, index) {
    if (element === number) {
      arrayOfIndexes.push(index);
    }
  });
  return arrayOfIndexes;
}
```

What is the Big O runtime for this algorithm?

### Problem 3

The following function checks to see if the last item in a data set is higher or lower than the first item in a data set — and returns _Higher_, _Lower_, or _Neither_.

```js
const array = [36, 14, 1, 7, 21];

function higherOrLower(array) {
  if (array[array.length -1 ] > array[0]) {
    return "Higher";
  else if (array[array.length -1 ] < array[0]) {
    return "Lower";
  } else {
    return "Neither";
  }
}
```

What is its Big O?

### Problem 4

We can use the following function to determine the sum of an array of sequential numbers:

```js
const array = [1,2,3,4,5,6,7,8];

function determineSumOfSequentialArray(array) {
   let sum = 0;
   for (let i = 0; i < array.length; i++) {
       sum += array[i];
   }
   return sum;
}
```

What is the Big O notation for this algorithm?

### Problem 5

We can also find the sum of an array of sequential numbers that begins with one in another way as well:

```js
const array = [1,2,3,4,5,6,7,8];

function determineSumOfSequentialArray(array) {
  return array.length * (array.length + 1)/2;
}
```

What is the Big O of this algorithm?

### Problem 6

We can use the following recursive function to search an array of sorted numerical values to find a specific number in that array (or return -1 if the value isn't in the array):

```js
function searchSortedArray(number, array, beginIndex = 0, endIndex = array.length - 1) {
  let middleIndex = Math.floor((beginIndex + endIndex)/2);
  if (array[middleIndex] === number) {
    return middleIndex;
  } else if (beginIndex >= endIndex) {
    return -1;
  } else if (array[middleIndex] < number) {
    beginIndex = middleIndex + 1;
    return searchSortedArray(number, array, beginIndex, endIndex);
  } else if (array[middleIndex] > number) {
    endIndex = middleIndex - 1;
    return searchSortedArray(number, array, beginIndex, endIndex);
  }
}
```

What is the Big O runtime of this algorithm?

### Problem 7

The following algorithm compares the values of two arrays and returns an array of pairs where the indexes match in both arrays. For instance, look at the following arrays:

```js
const array1 = [3, 7, 9, 12, 15, 18, 32];
const array2 = [3, 3, 7, 41, 76];
```

The first element in `array1` matches both the first and second elements in `array2`. This means the pairs `[0,0]` and `[0,1]` will be in the returned array. The second element in `array1` matches the third element in `array2` so `[1,2]` will also be in the returned array. So with the two arrays above, the function will return:

```js
[[0,0],[0,1],[1,2]]
```

Here is the algorithm itself:

```js
function compareArrays(array1, array2) {
  let arrayOfPairs = [];
  array1.forEach(function(e, i) {
    array2.forEach(function(e2, i2) {
      if (e === e2) {
        arrayOfPairs.push([i, i2]);
      }
    });
  });
  return arrayOfPairs;
}
```

What is the runtime of this algorithm?

### Problem 8

The following function will sort an array of numbers from lowest to highest value. What is its runtime complexity?

```js
function sortByValue(array){
  function swap(array, index1, index2){
    let temporaryValue = array[index1];
    array[index1] = array[index2];
    array[index2] = temporaryValue;
  }
  let count = 1;
  while (count < array.length) {
    let swapCount = 0;
    for (let i=0; i<array.length-count; i++) {
      if (array[i] > array[i+1]) {
        swap(array, i, i+1);
        swapCount++;
      }
    }
   count++;
 }
   return array;
}
```

### Problem 9

The following algorithm checks to see if two arrays have any duplicate values. If they do, the duplicate values are pushed to an array.

```js
function returnDupes(array, array2) {
  let dupeArray = [];
  array.forEach(function(element) {
    if (array2.includes(element)) {
      dupeArray.push(element);
    }
  });
  return dupeArray;
}
```

What is the Big O runtime of this algorithm?

### Problem 10

The following algorithm takes an array of elements and filters it so only elements between 5 and 20 are returned. Then it reduces the filtered array to its sum.

```js
function sumFilteredData(array) {
  return array.filter(function(element) {
    return ((element > 5) && (element < 20))
  }).reduce(function(valueToAdd, currentValue) {
    return valueToAdd + currentValue;
  }, 0);
}
```

What is the Big O runtime of this algorithm?

### Answers

**Answer #1:** This algorithm needs to loop through the array until it finds the first occurrence of the number we are looking for. It doesn't matter how big the data set is, though — at most we need to loop through it once. The algorithm is O(N) linear time.

**Answer #2:** Trick question! While this algorithm is a bit more intensive than the previous ones because it always has to search _all_ elements in the array, the upper bound is still the same — looping through each element once. The runtime is O(N) linear time.

**Answer #3:** It doesn't matter how large the data set is. The algorithm just needs the first and last element in the array to calculate the answer. This algorithm is O(1) constant time.

**Answer #4:** `determineSumOfSequentialArray()` has a single loop. As the data set grows, the time it takes to loop through the data set will also grow in a linear fashion. This algorithm is O(N).

**Answer #5:** No matter how big the size of the data set, our algorithm is simply doing a single computation. Because arrays have an inherent length property, there are no extra operations for larger arrays. This algorithm is O(1) (constant time). This is a much more efficient way to sum sequential arrays!

**Answer #6:** The key here is to determine that each time the function is called, the algorithm looks at the middle index of the array, determines whether or not the number it's searching for is higher or lower, and then throws out the other half of the array. Halving a data set is a good indicator that this algorithm has a runtime complexity of O(log N). The space complexity, which we should consider because it's a recursive function and uses a call stack, is also O(log N). By the way, this is a binary search algorithm — which we'll learn more about in a future lesson.

**Answer #7:** This algorithm uses a loop within a loop. For that reason, it might be tempting to say this algorithm has a runtime complexity of O(N<sup>2</sup>). However, that is not the case! The outer loop loops over one array while the inner loop loops over a _different_ array. We have two different variables here, not one! In this case, we don't need to be beholden to the variable N. Instead, it would be more accurate to state that this algorithm has a runtime complexity of O(AB), where A represents the first array and B represents the second array. However, just as O(N<sup>2</sup>) is not a great runtime, nor is O(AB) in the case of large data sets.

**Answer #8:** Even if the code seems a bit confusing at first, the nested loop should be a giveaway — there is a `for` loop inside a while loop. This algorithm has O(N<sup>2</sup>) runtime complexity, which means it has quadratic complexity. By the way, this is an example of a sorting algorithm known as bubble sort. We will learn more about this sorting algorithm in a future lesson.

**Answer #9:** In terms of code, this algorithm might seem to be elegantly written and concise. At a glance, it appears to be O(N) because it has a single loop. But be careful. What do you think `Array.prototype.includes()` is doing under the hood? It doesn't just automatically know whether an array includes a value. It needs to iterate through the array to find a value. While JavaScript is presumably using optimized techniques under the hood to find that value, iteration is still necessary. So we essentially have a nested loop, though each loop is looping through a different array. As a result, we can call this O(AB) time — which potentially is as slow as quadratic time if both arrays are very large. Keep an eye out for JavaScript convenience methods like `Array.prototype.includes()` and ask yourself whether they might be looping under the hood.

**Answer #10:** `Array.prototype.filter()` and `Array.prototype.reduce()` both iterate through the entire collection. In this algorithm, these iterations are chained, not nested, so the Big O runtime is O(2N). Because we drop the constants, the Big O is O(N). You might wonder why `Array.prototype.filter()` doesn't affect the Big O runtime — won't it potentially make the data set much smaller? Remember that Big O concerns itself with upper bounds — and it's possible that in this situation `Array.prototype.filter()` wouldn't filter any results out of a large data set.
