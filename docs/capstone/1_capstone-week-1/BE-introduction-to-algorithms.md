---
title: "📓 Introduction to Algorithms"
day: thursday
---

During this section, we'll take a deeper dive into some well-known algorithms. Most of these algorithms are for sorting collections, but we'll also throw in one very important search algorithm as well. 

Sorting is an important part of computer programming and life in general. Whether we're alphabetizing a list in an array or organizing our socks, sorting offers all kinds of benefits, particularly quick retrieval.

Because sorting is such an essential part of computer science, there are many sorting algorithms. Even if you use a language's native functionality to sort, it's still helpful to learn different sorting algorithms. They can give you a better understanding of Big O, and they can come up in a technical interview. They also give us opportunities to look at many different ways to solve a problem.

It should be a given that in order for a computer program to correctly sort a collection, it needs to know _how_ things should be sorted. In the case of numbers, that's generally easy — they are usually ordered sequentially. The same is true regarding alphabetization of strings. However, we could also use other conditions to determine how an array should be sorted — just as we could use a sorting system that sorts our socks based on their patterns and colors. We will focus on sorting numbers in our examples.

Here are the algorithms we'll cover in this section.

* **Binary search**: This is the one search algorithm we'll cover. A binary search algorithm can quickly find a value in a sorted array. We've covered binary search trees and writing a basic binary search algorithm will use similar concepts. By the way, note that we won't be covering **linear search**, the most common search algorithm — that's because it just involves iterating through a collection until you find a value — in other words, a simple loop. We've been doing that since Introduction to Programming.

* **Selection sort**: The selection sort algorithm compares the first element in a collection to every remaining element in the collection, swapping values as needed so that the first element always has the _lowest_ value. Then it does the same for each remaining element in the array. It is easy to implement, but its Big O is O(n<sup>2</sup>), which means it is slow.

* **Insertion sort**: The insertion sort algorithm separates an array into two smaller partitions — a sorted part and an unsorted part. At first, the sorted section is just the first element, but we iterate through the unsorted part one element at a time, _then_ iterate through the sorted section to determine where each element from the unsorted section should go. On each iteration, the sorted section becomes one element larger, and the unsorted section becomes one element smaller. Like the selection sort, this algorithm has a Big O of O(n<sup>2</sup>), so it's slow.

* **Bubble sort**: The bubble sort algorithm compares two elements in an array at a time, swapping them as needed in order to sort them. So it will start by comparing the first and second element, then it will compare the second and third element, and so on. After the algorithm has compared every value in the array, it does the same thing again until all of the values in the array are sorted. This algorithm is slow as well, with a Big O of O(n<sup>2</sup>).

* **Merge sort**: The merge sort algorithm is much more efficient than the algorithms we've discussed so far. It is also more complicated. It uses a divide and conquer approach to split an array into smaller and smaller sub-arrays, then merges those arrays back together, sorting as it goes. It has a Big O of O(n log(n)). The V8 engine used for Chrome and Node utilizes Timsort, a hybrid algorithm that in large part uses merge sort.

* **Quicksort**: The quicksort algorithm is the most complex sorting algorithm we'll cover. It separates an array into smaller partitions (though never breaking it up into separate arrays), determines a pivot point, and then uses pointers to swap values that are lower than the pivot to the left side of the array and values that are higher than the pivot to the right side of the array. Like the merge sort algorithm, it has a Big O of O(n log(n)). Interestingly, if you were to search the source code of V8, you'd see that mjsunit tests include this comment: _Quicksort is used for arrays which length > 22._ So even though V8 uses Timsort (a merge sort implementation), there are tools behind the scenes that are using quicksort.

There are many other sorting algorithms, too. After learning the algorithms in this section, you're encouraged to do a deeper dive on your own to at least get a sense of what's out there. Some, like the Timsort, are hybrids that take advantage of multiple different sorting algorithms. The reason for this is that algorithms that are efficient for large collections (such as merge sort) are often _slower_ than some O(n<sup>2</sup>) algorithms when it comes to very small collections. That's why it's not uncommon for a function to use one type of algorithm for a small collection and another for a larger collection.
