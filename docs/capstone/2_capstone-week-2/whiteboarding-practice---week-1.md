---
title: ✏️ Whiteboarding Practice - Week 1
id: whiteboarding-practice---week-1
slug: whiteboarding-practice---week-1
hide_table_of_contents: true
sidebar_position: 9
day: monday
type: exercise
url: >-
  https://github.com/epicodus-curriculum/capstone/blob/main/whiteboarding_prompt_1.md
pagination_next: null
---

## Whiteboarding Practice - Week 1

Every week during the final two months of the Capstone course, you and your peers will perform a whiteboarding prompt. This will be performed either in front of your peers, or have your instructor join to provide feedback directly. 

Each week, there will be 4 prompts available in lessons titled just like this lesson. The intention behind these prompts is to perform them with as little research or pre-planning as you feel comfortable with, as this will help prepare you for the world of interviewing.

Before reviewing the prompts below, overview the Recap on [Whiteboarding Best Practices](https://full-time.learnhowtoprogram.com/capstone/capstone-week-2/recap-whiteboarding-best-practices). 

Additionally, review the Recap lesson on [Recursion](https://full-time.learnhowtoprogram.com/capstone/capstone-week-2/recap-recursion), and feel free to utilize recursion in instances that you feel most comfortable. 

As one additional layer, use the concepts that you learned last week to help create efficient solutions. Think about what the Big O notation for your solution might be when you've finished your experience. Can you improve upon it? Could one of the algorithms we've covered help you? 

Lastly, you are welcome to choose other prompts from other sources like [LeetCode](https://leetcode.com/). We recommend Easy to Medium prompt levels. 

### Prompts

---

#### Contiguous Subarray with Greatest Sum

Given an array containing both positive and negative integers, return the *sum* of the contiguous subarray with the largest sum. 

Example: 

```
Input: [-2, -3, 4, -1, -2, 1, 5, -3]
Ouput: 7 
// The largest sum of a contiguous subarray is 7 (4 + -1 + -2 + 1 + 5 === 7)
```

<details><summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: You may want to look at Kadane's Algorithm</p>
<p>Hint 2: You may need to define a "maximum so far"</p>
<p>Hint 3: You may need to define a "maximum at this point" and compare it to the "maximum so far"</p>
</details>

---

#### Find the Missing Number

Given an array of size N-1 with integers in the range of [1, N], find the missing number from the first N integers.

Note: There are no duplicates in the list. 

Constrains: You may not use the `.includes()` method.

Example: 

```
Input: arr = [1, 2, 3, 4, 6], N = 6
Output: 5 // The missing number
```

<details><summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: You can approach this using Hashing.</p>
<p>Hint 2: Use a temporary array, and fill it with N amount of 0s.</p>
<p>Hint 3: For each integer that exists in the original array, set the value of the temporary array's index to that value</p>
<p>Hint 4: The element that is still 0 after the previous step would be the missing number (Index + 1)</p>
</details>

---

#### Dutch National Flag problem

Given an array A[] consisting of only 0s, 1s, and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.

This problem is also the same as the famous **“Dutch National Flag problem”**. The problem was proposed by Edsger Dijkstra. The problem is as follows:

>Given N balls of colour red, white or blue arranged in a line in random order. You have to arrange all the balls such that the balls with the same colours are adjacent with the order of the balls, with the order of the colours being red, white and blue (i.e., all red coloured balls come first then the white coloured balls and then the blue coloured balls). 

Example:

```
Input: {0, 1, 2, 0, 1, 2}
Output: {0, 0, 1, 1, 2, 2}

Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}
```

<details><summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: You can approach this using any variety of sorting algorithms.</p>
<p>Hint 2: The "simplest" solution is to count all 0s, 1s, and 2s</p>
<p>Hint 3: After counting each integer, use those counts to modify the original array</p>
<p>Hint 4: Using those counts, use a loop that decrements the count of each number while also replacing the numbers in the original array with your counted numbers in order.</p>
</details>

---

#### Length of the longest substring without repeating characters

Given a string str, find the length of the longest substring without repeating characters. 

Examples:

```
Example 1:
Input: “ABCDEFGABEF”
Output: 7
Explanation: The longest substring without repeating characters are “ABCDEFG”, “BCDEFGA”, and “CDEFGAB” with lengths of 7

Example 2:
Input: “ILOVEEPICODUS”
Output: 8
Explanation: The longest substring without repeating characters is "EPICODUS, with a length of 8
```

<details><summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: One potentail solution uses the <a href="https://medium.com/@rishu__2701/mastering-sliding-window-techniques-48f819194fd7">Sliding Window approach</a></p>
<p>Hint 2: Keep track of the current longest substring (our return value).</p>
<p>Hint 3: Keep track of all characters that have been visited thus far in a series of loops.</p>
<p>Hint 4: Use an outer loop (using `i` to track the index) to set the beginning of the substring</p>
<p>Hint 5: Use an inner loop to update the "visited" list of characters. If a character has not been visited yet, add it to the list and increment your "current longest" tracker. If it has been visited already, break the inner loop, which will move i to the next index (sliding the window) and starting again with a new list of "visited".</p>
</details>