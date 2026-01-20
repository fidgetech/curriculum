---
title: ✏️ Whiteboarding Practice - Week 2
id: whiteboarding-practice---week-2
slug: whiteboarding-practice---week-2
hide_table_of_contents: true
sidebar_position: 4
day: monday
type: exercise
url: >-
  https://github.com/epicodus-curriculum/capstone/blob/main/whiteboarding_prompt_2.md
---

## Whiteboarding Practice - Week 2

Every week during the final two months of the Capstone course, you and your peers will perform a whiteboarding prompt. This will be performed either in front of your peers, or have your instructor join to provide feedback directly. 

Each week, there will be 4 prompts available in lessons titled just like this lesson. The intention behind these prompts is to perform them with as little research or pre-planning as you feel comfortable with, as this will help prepare you for the world of interviewing.

Before reviewing the prompts below, overview the Recap on [Whiteboarding Best Practices](https://full-time.learnhowtoprogram.com/capstone/capstone-week-3/recap-whiteboarding-best-practices). 

Additionally, review the Recap lesson on [Recursion](https://full-time.learnhowtoprogram.com/capstone/capstone-week-3/recap-recursion), and feel free to utilize recursion in instances that you feel most comfortable. 

As one additional layer, use the concepts that you learned during the Computer Science section to help create efficient solutions.

Lastly, you are welcome to choose other prompts from other sources like [LeetCode](https://leetcode.com/). We recommend Easy to Medium prompt levels. 

### Prompts

---

#### Product of Array Except Self

Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Constraints: Do your best to complete this *without a nested loop*

Example:


```
Input: [1, 2, 3, 4]
Output: [24, 12, 8, 6]
// Explanation: The product of array except self for each position is calculated as follows:
// output[0] = 2 * 3 * 4 = 24
// output[1] = 1 * 3 * 4 = 12
// output[2] = 1 * 2 * 4 = 8
// output[3] = 1 * 2 * 3 = 6
```

<details>

<summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: You can calculate the product of all elements from the left side and the product of all elements from the right side.</p>
<p>Hint 2: Use two separate arrays to store the product of elements to the left and right of each element.</p>
<p>Hint 3: Finally, multiply the corresponding elements from both arrays to get the result.</p>

</details>

---

#### Container With Most Water

Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). 'n' vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Example:

```
Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
Output: 49
// Explanation: The maximum area is obtained by selecting the minimum of the heights of the vertical lines ( ex: Math.min(8, 7) === 7) and multiplying it by the width between the lines (index 8 - index 1 === 7 spaces apart).
//
Input: array = [1, 5, 4, 3]
Output: 6
Explanation : 
5 and 3 are distance 2 apart. 
So the size of the base = 2. 
Height of container = min(5, 3) = 3. 
So total area = 3 * 2 = 6
```

<details>

<summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: This problem can be solved using the two-pointer technique.</p>
<p>Hint 2: Initialize two pointers, one at the beginning and one at the end of the array.</p>
<p>Hint 3: Calculate the area formed by the two lines at the pointers and update the maximum area if the current area is greater.</p>
<p>Hint 4: Move the pointer with the smaller height towards the center of the array, as this might lead to a higher area.</p>
<p>Hint 5: Repeat the process until the pointers meet.</p>

</details>

---

#### Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example:


```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
// Explanation: The grouped anagrams are:
// ["bat"] - as "bat" has no anagram.
// ["nat", "tan"] - as "tan" and "nat" are anagrams of each other.
// ["ate", "eat", "tea"] - as "ate", "eat", and "tea" are anagrams of each other.
```

<details>

<summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: You can use a hash table to group anagrams.</p>
<p>Hint 2: Convert each string into a character count (e.g., "ate" becomes "a1e1t1").</p>
<p>Hint 3: Use the character counts as keys in the hash table and store all strings with the same character counts together.</p>

</details>

---

#### Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Example:


```
Input: "()[]{}"
Output: true

Input: "([)]"

Output: false
```

<details>

<summary><i class="glyphicon glyphicon-chevron-right"></i><strong>Click me to view or hide hints</strong><i class="glyphicon glyphicon-chevron-left"></i></summary>
<p>Hint 1: You can use a stack to solve this problem.</p>
<p>Hint 2: Traverse the string, pushing opening brackets onto the stack.</p>
<p>Hint 3: When encountering a closing bracket, pop the top element from the stack and check if it matches the corresponding opening bracket.</p>
<p>Hint 4: If the stack is empty or the popped bracket does not match, return false.</p>
<p>Hint 5: At the end, check if the stack is empty. If it is, return true; otherwise, return false.</p>

</details>

---

#### Unique Elements in List

Given an unsorted list of elements, return the same list in the same order but with only unique elements. In other words, remove all duplicate elements in the list and return it in its original order. 


Constraints: `1 <= list.length <= 10^6`

Example: 


Level 1: List contains only integers

```
Input: [1, 2, 3, 2, 10, 5, 1] 
Output: [1, 2, 10, 5]
```

Level 2: List contains both strings and integers 

```
Input: [1, “1”, 2, 0, 10, “String”, “3”, 3, 3]
Output: [1, “1”, 2, 0, 10, “String”, “3”, 3]
```

Level 3: List contains strings, integers, and bools

```
Input: [true, false, true, “true”, 1, 3, “1”]
Output: [true, false, “true”, 1, 3, “1”]
```

Level 4: List contains strings, integers, bools, and objects

```
Input: [true, false, true, “true”, 1, 3, “1”, {"a": 1}, {"a": 2}]
Output: [true, false, “true”, 1, 3, “1”, {"a": 1}, {"a": 2}]
```



