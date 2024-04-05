---
title: ✏️ Whiteboarding Practice - Week 3
id: whiteboarding-practice---week-3
slug: whiteboarding-practice---week-3
hide_table_of_contents: true
sidebar_position: 2
day: monday
type: exercise
url: >-
  https://github.com/epicodus-curriculum/capstone/blob/main/whiteboarding_prompt_3.md
paginationNext: null
---

## Whiteboarding Practice - Week 3

Every week during the final two months of the Capstone course, you and your peers will perform a whiteboarding prompt. This will be performed either in front of your peers, or have your instructor join to provide feedback directly. 

Each week, there will be 4 prompts available in lessons titled just like this lesson. The intention behind these prompts is to perform them with as little research or pre-planning as you feel comfortable with, as this will help prepare you for the world of interviewing.

Before reviewing the prompts below, overview the Recap on [Whiteboarding Best Practices](https://full-time.learnhowtoprogram.com/capstone/capstone-week-3/recap-whiteboarding-best-practices). 

Additionally, review the Recap lesson on [Recursion](https://full-time.learnhowtoprogram.com/capstone/capstone-week-3/recap-recursion), and feel free to utilize recursion in instances that you feel most comfortable. 

As one additional layer, use the concepts that you learned during the Computer Science section to help create efficient solutions.

Lastly, you are welcome to choose other prompts from other sources like [LeetCode](https://leetcode.com/). We recommend Easy to Medium prompt levels. 

### Prompts

---

#### Reverse Words in a String

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters separated by a single space. The input string does not contain leading or trailing spaces, and the words themselves may contain leading or trailing spaces.

Example:


```
Input: "the sky is blue"
Output: "blue is sky the"
```

<details><summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: You can split the input string into an array of words.</p>
<p>Hint 2: Reverse the order of the array.</p>
<p>Hint 3: Join the array elements into a single string with spaces.</p>
</details>

---

#### Merge Intervals


Given an array of intervals intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example:


```
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
// Explanation: Intervals [1,3] and [2,6] overlap, so they are merged into [1,6].
```


<details><summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: Sort the intervals based on the start times.</p>
<p>Hint 2: Initialize an empty list to store the merged intervals.</p>
<p>Hint 3: Iterate through the sorted intervals, merging overlapping intervals as you go.</p>
<p>Hint 4: Keep track of the start and end of the current interval and compare them with the next interval to determine if they overlap.</p>
<p>Hint 5: If they overlap, update the end of the current interval; otherwise, add the current interval to the result and update the current interval.</p>
</details>

---

#### Minimum Window Substring

Given a string s and a string t, find the minimum window in s that contains all the characters of t in any order.

Example:


```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
// Explanation: The minimum window substring "BANC" contains all the characters of "ABC".
```

<details><summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: You can use the sliding window technique for this problem.</p>
<p>Hint 2: Initialize two pointers, one at the beginning and one at the end of the string.</p>
<p>Hint 3: Expand the window by moving the end pointer until all characters in `t` are included.</p>
<p>Hint 4: Once all characters are included, shrink the window by moving the start pointer until some characters of `t` are no longer included.</p>
<p>Hint 5: Keep track of the minimum window size and update it as you find smaller windows.</p>
</details>

---

#### Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.

Example:

```
Input: "babad"
Output: "bab" or "aba"
// Explanation: Both "aba" and "bab" are valid answers.
```

<details><summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: You can solve this problem using dynamic programming or expanding around the center.</p>
<p>Hint 2: For each character in the string, consider it as the center of a palindrome and expand around it.</p>
<p>Hint 3: Handle both even and odd length palindromes separately.</p>
<p>Hint 4: Keep track of the longest palindrome found so far.</p>
<p>Hint 5: Return the longest palindrome found.</p>
</details>

---

#### Longest Substring with At Most Two Distinct Characters

Given a string s, return the length of the longest substring that contains at most two distinct characters.

Example:

```
Input: "eceba"
Output: 3
// Explanation: The substring "ece" contains 2 distinct characters.
```

<details><summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: You can solve this problem using the sliding window technique.</p>
<p>Hint 2: Initialize two pointers, one at the beginning and one at the end of the string.</p>
<p>Hint 3: Expand the window by moving the end pointer until the number of distinct characters exceeds two.</p>
<p>Hint 4: While expanding, keep track of the maximum length of the substring.</p>
<p>Hint 5: Shrink the window by moving the start pointer until the number of distinct characters becomes two again.</p>
</details>

---

#### Tribonacci Sequence

The Tribonacci sequence Tn is defined as follows:

T0 = 0
T1 = 1
T2 = 1
Tn = Tn-1 + Tn-2 + Tn-3 for n > 2
Write a function to return the value of Tn.

Example:


```
Input: n = 4
Output: 4
// Explanation: T4 = T3 + T2 + T1 = 2 + 1 + 1 = 4.
```

<details><summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: You can solve this problem using recursion or iteration.</p>
<p>Hint 2: If you choose recursion, define a base case for n = 0, n = 1, and n = 2.</p>
<p>Hint 3: For larger values of n, calculate Tn by recursively calling the function for Tn-1, Tn-2, and Tn-3.</p>
<p>Hint 4: If you choose iteration, use a loop to calculate the values of Tn from T0 to Tn.</p>
<p>Hint 5: Use three variables to store the last three values of Tn and update them in each iteration.</p>
</details>







