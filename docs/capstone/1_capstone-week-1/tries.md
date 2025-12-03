---
title: "\U0001F4D3 Tries"
id: tries
slug: tries
hide_table_of_contents: true
sidebar_position: 43
day: thursday
type: lesson
url: 'https://github.com/epicodus-curriculum/capstone/blob/main/tries.md'
---

In this lesson, we will introduce the **trie** (pronounced "try"), which is a kind of tree that's often used for storing and retrieving strings. In fact, the word **trie** is associated with the "trie" in re**trie**val. We'll focus on the basics of what a trie is in this lesson. Then, if you like, you can do further research on your own to learn about how to add, remove, and find values in a trie.

A trie always has an "empty" root node with references to other nodes. Because of the references, it's not really empty — but the root node doesn't have a value on its own. It's common to use tries to store words, so if we were going to use a trie to store English words, we'd have a root node with 26 child nodes. Each child node would represent a letter of the alphabet.

![This trie shows an empty root node plus the first three letters of the alphabet.](/images/computer-science-curriculum-2020/trie_1.png)

To simplify things, the trie above just shows the first three letters of the alphabet.

So what happens once we want to add actual words to a trie?

Each child node has a reference to each letter of the alphabet — just like the root node. So we'd construct words by adding more child nodes to the trie.

![This trie includes the words "cat", "call", and "cot".](/images/computer-science-curriculum-2020/trie2.png)

This trie now includes three words: _cat_, _call_, and _cot_. Each use the _C_ node, which now has two child nodes to represent the three words we've added: an _A_ node and an _O_ node. Cat and call both use the _C_ and its child _A_ node. If we were going to add the word _can_, it would also use these two nodes before diverging.

The main advantage of tries is that they can retrieve strings very quickly. However, a significant disadvantage of tries is that they take a large amount of memory. Despite the memory issue, there are many important use cases for quick string retrieval. For instance, consider the autofill feature on search engines. A trie can be used to quickly determine possible substrings if a user has typed in the letters _c_ and _a_. You can likely imagine many other use cases where quickly retrieving strings is important — ranging from the fields of genomics to data analytics.

If you'd like to learn how to create and search a trie yourself, check out the following article: [Tries — JavaScript Simple Implementation](https://medium.com/@alexanderv/tries-javascript-simple-implementation-e2a4e54e4330).