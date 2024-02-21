---
title: ✏️ Hashes Practice
id: hashes-practice
hide_table_of_contents: true
day: wednesday
---

Now it's time to apply our new knowledge about hash tables and algorithms.

## Homemade Hash Table

Create your own hash class and algorithm from scratch. You can use the one we created a few lessons ago as a template — but the next step is to improve it further. Use a TDD approach to build out your class and methods.

The hash table should have the following methods:

* `HashTable.prototype.set()`: Should add a key-value pair to the hash table.
* `HashTable.prototype.get()`: Should get a key-value pair from the hash table. Try incorporating a linked list!
* `HashTable.prototype.remove()`: Should remove a key-value pair from the hash table.
* `HashTable.prototype.clear()`: Should clear all key-values from the hash table.
* `HashTable.prototype.hash()`: The hash is the most important part!

For your `HashTable.prototype.hash()` method, you can try the following:

* Create a hash that will store at most 10000 key-value pairs.
* Try out the DBJ2 hashing algorithm. Make your own modifications such as applying bitwise manipulation in a different way.

* **More difficult**: Add a `HashTable.prototype.resize()` method that will double the size of the hash table when it's full or nearly full. You can make this a "manual" method that a developer would call if they see that the table is near its capacity. Note that its the hashing method that really determines how big the table will be in JavaScript since arrays can be of any size. So that means that a `HashTable.prototype.resize()` method will need to create a new array and then use the updated hashing algorithm to recalculate where all the key-value pairs should go in the new array.

## Secure Hashing Algorithm

Try making your own (probably not so) secure hashing algorithm. Once again, use a TDD approach.

* Incorporate bitwise manipulation in your algorithm.
* Try adding salt to your algorithm. This could be a nonsense string appended to the end of a password — and this nonsense string should be computed based on the original password.
* See how you can increase the avalanching effect of your algorithm. The easiest way to do this would be to compare what happens when `"cat"` and `"bat"` are passed into the algorithm. How different are the two hashes? You should also try to avoid _symmetry_ — which means that `"bat"` and `"tab"` could end up with the same hashes because they have the same characters. So the _order_ of characters in your hashing algorithm also matters!
* Add functionality to artificially slow down the computing time of your algorithm so that hackers couldn't easily use it for a brute force attack.

## Whiteboard Practice

Use a whiteboard to diagram how a hash table works. You may use code and illustrations. For instance, you might want to visually illustrate how a hashing algorithm maps a key to an array's index. Prepare your explanation as if you are describing hashing algorithms to someone that only knows the basics of coding (such as arrays and functions).
