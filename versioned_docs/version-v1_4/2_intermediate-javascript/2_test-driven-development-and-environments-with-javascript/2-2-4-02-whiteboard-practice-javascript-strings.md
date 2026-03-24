---
title: '✏️ 2.2.4.2 Whiteboard Practice: JavaScript Strings'
day: thursday
id: 2-2-4-2-whiteboard-practice-javascript-strings
hide_table_of_contents: true
---

## Whiteboard Practice
---

When and how whiteboarding practice is implemented will be up to your teacher. Below is a recommended prompt.

### Goal

For this section's whiteboarding lesson, we'll focus on using arrays and loops to assess a string.

As the interviewee:

* Ask clarifying questions.
* Keep talking.
* Explain your plan at the beginning; recap what you've done at the end.
* Plan your space.

As the interviewer:

* Answer questions as best as you can.
* Be encouraging. Whiteboarding is difficult!
* Be patient. Only offer hints if your partner indicates that they need help.
* Be engaged. Part of this practice is getting used to having someone evaluate your work as you produce it.
* Offer _constructive_ feedback. Find at least one thing that your partner did well _and_ one thing they could improve at.

### Prompts

**Prompt 1**: Write a method that takes in a string and counts each instance of each letter in the string. It should return an array of integers, where each integer represents the number of occurrences of a letter. The array should start with the number of `a`s, and end with number of `z`s. This means that if the array is called `letters`, then `letters[0]` should represent the number of `a`s, and `letters[25]` should represent the number of `z`s).

**Example**:

* Given: `"As you know, Morty, I've got a lot of enemies in the universe that consider my genius a threat"`
* Return: `[ 5, 0, 1, 1, 10, 1, 2, 3, 6, 0, 1, 1, 3, 6, 7, 0, 0, 4, 5, 8, 3, 2, 1, 0, 3, 0 ]`


**Prompt 2 (More difficult)**: Write a method that takes in a string (`word`) and an array of strings (`dictionary`). The method should check to see if the `word` contains any of the words in the `dictionary`. The method should segment the `word` into the words that are found in the `dictionary` and return an array of those words.

**Example**:

* Given: `"applepie"`, `[ "app", "apple", "bunny", "carrot", "pie", "pies"]`
* Return: `[ "app", "apple", "pie"]`

### Further Exploration

#### Prompt 1

1. Alter your method to return a variable that contains key-value pairs, where each key is a letter in the string, and the value is the number of times that letter occurred in the string. You might choose to dynamically create a variable name. For example, if you wanted to set `"a"` as a key and give a value `1`, that would be written as follows:

```js 
let letter = "a"; let letters={}; letters[letter] = 1;`.   
```

  * **Example:** 
    * Given: `"As you know, Morty, I've got a lot of enemies in the universe that consider my genius a threat"`
    * Return: `{ a:5, c:1, d:1, e:10, f:1, g:2, h:3, i:6, k:1, l:1, m:3, n:6, o:7, p:0, r:4, s:5, t:8, u:3, v:2, y:3 }`


2. Write another method that returns `true` if the string is a pangram and `false` if it is not a pangram. A pangram is a sentence that contains at least one instance of each letter of the alphabet.
3. Then, alter this method so that it can parse a string that contains multiple sentences. The method should return false if no pangrams are present and should return an array of the sentences that are pangrams if there are any present. It is recommended that you create another helper method.
  
#### Prompt 2

1. Alter your method so that it checks whether the given word is a _compound_ of any of the words in the dictionary. A compound is when two or more words are combined to form a new word. For this exercise, the compound does not have to be a real word. The method should return an array of the words that make up the compound. If no combination of words from the dictionary creates the given word, then the method should return null. 
  * **Example**:
    * Given: `"applepie"`, `[ "app", "apple", "bunny", "carrot", "pie", "pies"]`
    * Return: `[ "apple", "pie"]`
