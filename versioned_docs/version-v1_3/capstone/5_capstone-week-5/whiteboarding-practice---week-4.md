---
title: ✏️ Whiteboarding Practice - Week 4
id: whiteboarding-practice---week-4
slug: whiteboarding-practice---week-4
hide_table_of_contents: true
sidebar_position: 3
day: monday
type: exercise
url: >-
  https://github.com/epicodus-curriculum/capstone/blob/main/whiteboarding_prompt_4.md
---

## Whiteboarding Practice - Week 4

Every week during the final two months of the Capstone course, you and your peers will perform a whiteboarding prompt. This will be performed either in front of your peers, or have your instructor join to provide feedback directly. 

Each week, there will be 4 prompts available in lessons titled just like this lesson. The intention behind these prompts is to perform them with as little research or pre-planning as you feel comfortable with, as this will help prepare you for the world of interviewing.

Before reviewing the prompts below, overview the Recap on [Whiteboarding Best Practices](https://full-time.learnhowtoprogram.com/capstone/capstone-week-3/recap-whiteboarding-best-practices). 

Additionally, review the Recap lesson on [Recursion](https://full-time.learnhowtoprogram.com/capstone/capstone-week-3/recap-recursion), and feel free to utilize recursion in instances that you feel most comfortable. 

As one additional layer, use the concepts that you learned during the Computer Science section to help create efficient solutions.

Lastly, you are welcome to choose other prompts from other sources like [LeetCode](https://leetcode.com/). We recommend Easy to Medium prompt levels. 

### Prompts

#### Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

*Elements that are to be included within the merged array with only include up to `nums1[m-1]` and `nums2[n-1]`, and not any trailing 0s (where `nums1[i > m-1]`).*


Example:

```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
```

<details>

<summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: You can start from the end of both arrays and merge them into the end of `nums1`.</p>
<p>Hint 2: Initialize three pointers: one for the end of `nums1` (using `m`), one for the end of `nums2` (using `n`), and one for the end of the merged array (`array1.length-1`).</p>
<p>Hint 3: Compare elements from `nums1` and `nums2` from their respective ends and merge them into `nums1` from the end.</p>
<p>Hint 4: Continue this process until you've merged all elements from `nums2` into `nums1`.</p>
<p>Hint 5: You will compare elements within each array at their respective pointers, and depending on which item is larger, you will place the larger element at the current third pointer, then decrement the third pointer as well as decrement the pointer that found the larger of the two elements, and compare again.</p>

</details>

---


#### Kth Largest Element in an Array

Find the kth largest element in an unsorted integer array nums. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example:
```
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
```

<details>

<summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: You can solve this problem using a priority queue (min-heap).</p>
<p>Hint 2: Initialize a min-heap and add elements from `nums` to it.</p>
<p>Hint 3: If the size of the heap exceeds k, remove the smallest element (the root).</p>
<p>Hint 4: After adding all elements, the root of the heap will be the kth largest element.</p>
<p>You could alternatively solve this by sorting the array, and returning the element by calculating the index of its position using `k`, but there are some things to consider:</p>
<p>Min-Heap Approach:</p>
<ul>
<li>Time Complexity: Building a min-heap from an unsorted array has a time complexity of O(n), where n is the number of elements in the array. Extracting the minimum element k times from the heap has a time complexity of O(klogn). Overall, the time complexity is O(n + klogn).</li>
<li>Space Complexity: The space complexity is O(n) to store the min-heap.</li>
</ul>

<p>Sorting Approach:</p>
<ul>
<li>Time Complexity: Sorting the array using an efficient sorting algorithm like quicksort or mergesort typically has a time complexity of O(nlogn). Accessing the kth largest element after sorting the array has a time complexity of O(1).</li>
<li>Space Complexity: The space complexity depends on the sorting algorithm used. Quicksort and mergesort typically have O(logn) space complexity for recursion.</li>
</ul>

<p>Which Approach to Choose:</p>
<ul>
<li>Size of the Array: If the size of the array is relatively small, sorting the entire array may be more efficient than building a heap.</li>
<li>Value of k: If k is much smaller than the size of the array, extracting the minimum element k times from a min-heap may be more efficient than sorting the entire array.</li>
<li>Memory Constraints: If memory usage is a concern and you don't want to modify the original array, sorting may require extra memory for a copy of the array, while the min-heap approach operates in-place.</li>
</ul>

</details>

---

#### Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

*There are multiple ways to solve this problem.*

Example:

```
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]

// Explanation: nums[0] + nums[1] = 2 + 7 = 9, so the answer is [0, 1].
```


<details>

<summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: You can use a hash table to store the indices of elements as you traverse the array.</p>
<p>Hint 2: Iterate through the array and for each element, check if `target - nums[i]` exists in the hash table.</p>
<p>Hint 3: If it does, return the current index and the index of `target - nums[i]`.</p>
<p>Hint 4: If it doesn't, add the current element's index to the hash table.</p>

</details>


---

#### Rotate Image

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example:

```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
```

<details>

<summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Futher explanation:</p>
<p>Given an n x n 2D matrix representing an image, the task is to rotate the image by 90 degrees clockwise. This operation should be done in-place, meaning that the original matrix should be modified directly.</p>
<p>Hint 1: You can rotate the image layer by layer.</p>
<p>Hint 2: Iterate through each layer of the matrix, starting from the outermost layer.</p>
<p>Hint 3: For each layer, iterate through the elements and perform a four-way swap to rotate them.</p>
<p>Hint 4: Repeat the process for each layer until all layers are rotated.</p>
<p>Approach:</p>
<p>The hints provided suggest a layer-by-layer rotation approach. We start by rotating the outermost layer of the matrix and then move towards the inner layers. For each layer, we perform a four-way swap to rotate the elements.</p>
<ol>
<li>We start by defining a function rotate that takes the 2D matrix matrix as input.</li>
<li>We find the size of the matrix n (since it's an n x n matrix).</li>
<li>We iterate through each layer of the matrix using a for loop. The number of layers is half of the matrix's size.</li>
<li>For each layer, we determine the indices of the first and last elements of that layer.</li>
<li>Within the layer, we iterate through each element using another for loop.</li>
<li>We calculate the offset of the current element within the layer.</li>
<li>We perform a four-way swap to rotate the elements. We store the value of the top element, then swap elements clockwise within the layer.</li>
<li>After completing the rotation for all layers, the original matrix is now rotated by 90 degrees clockwise.</li>
</ol>

<p>Here is an example implemenation</p>

```javascript
function rotate(matrix) {
    const n = matrix.length;

    // Iterate through each layer of the matrix
    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
        const first = layer;
        const last = n - 1 - layer;

        // Iterate through each element in the current layer
        for (let i = first; i < last; i++) {
            const offset = i - first;
            const top = matrix[first][i];
            
            // Perform four-way swap to rotate the elements
            matrix[first][i] = matrix[last - offset][first];
            matrix[last - offset][first] = matrix[last][last - offset];
            matrix[last][last - offset] = matrix[i][last];
            matrix[i][last] = top;
        }
    }
}
```

</details>
