---
title: "📓 Introduction to Hash Tables"
day: wednesday
---

Hash tables are one of the most important data structures you can possibly learn. They are used to efficiently store key-value pairs and are designed for super-fast lookup, insertion, and removal. The key underlying principle of a hash table is a hashing algorithm which converts keys into an index in an array. We'll discuss this more in a moment. Hashing algorithms are also an essential feature of encryption, allowing us to ensure passwords and other sensitive data remain secure.

In this lesson, we'll learn how to build a basic hash table from scratch. To do so, we'll also create a very mediocre hashing algorithm. This lesson is focused more on understanding the basics of how a hash table works — not the intricacies of hashing algorithms. Our mediocre hashing algorithm is meant to serve as a teaching tool that simplifies how hash tables and hashing algorithms work. We will take a look at ways to write an efficient hashing algorithm in the next lesson.

## Hashes

A hash is a set of key-value pairs with extremely fast lookup (if the hash is well-implemented). We simply need to get a key from a hash to quickly retrieve the value. This should sound familiar because we have been working with hashes a lot.

In JavaScript, we use basic objects and maps as a hash. For instance, here's a basic object where we can retrieve values based on keys:

```js
let hash = {
  "John": "Lead vocalist",
  "Paul": "Bass guitarist",
  "George": "Lead guitarist",
  "Ringo": "Drummer"
}
```

To get the value associated with a key, we simply need to do this:

```js
> hash["john"]
"Lead guitarist"
```

We can easily set a value as well:

```js
hash["ted"] = "Not a Beatle!"
```

While a basic object is the easiest implementation of a hash in JavaScript, maps are even better:

```js
let map = new Map(["John", "Lead vocalist"], ["Paul", "Bass guitarist"], ["George", "Lead guitarist"], ["Ringo", "Drummer"])
```

We can get and set values from a map like this:

```js
map.get("John");
map.set("Ted", "Not a Beatle!");
```

Ruby and C# students have also been working with hashes regularly. In the case of Ruby, the data structure is called a hash. In the case of C#, the data structure is called a dictionary. However, they are doing the same thing that a JavaScript map does.

Because we are working with high-level languages, it's easy to just take advantage of all the benefits of hash tables without really thinking about how they work. However, hashes aren't an innate feature of programming languages. They are actually built using arrays. Remember that looking up an index in an array has a Big O of O(1) constant time. That is very fast. For that reason, the goal of a hash table to get as close to that speed as possible.

Let's look at the hash above again:

```js
let hash = {
  "John": "Lead vocalist",
  "Paul": "Bass guitarist",
  "George": "Lead guitarist",
  "Ringo": "Drummer"
}
```

How in the world can we turn that into an array with extremely fast lookup times? Well, the only way we can do that is to associate keys with specific indexes. To do that, we need to write a special hashing algorithm that translates a key to an array index and back. In other words, we need a function that determines what number the key `"John"` should equal.

We're going to use object-oriented programming and a test-driven approach to build a `HashTable` class. This class will include methods to get, set, and remove key-value pairs from a hash table. It will use an array under the hood and the methods will be backed by a hashing algorithm.

## Instantiating a Hash Table

As we just discussed, hashes aren't innate to programming languages. They use arrays under the hood. That means when we instantiate a new hash table, it will need to use an array. Let's start with a test:

```js
import HashTable from '../src/hash-table.js';

describe('HashTable', () => {

  let hashTable = new HashTable();

  afterEach(() => {
    hashTable = new HashTable();
  });

  test('should instantiate a hash with an empty array', () => {
    expect(hashTable.array).toEqual([]);
  });
});
```

A few things about this code:

* We create an instance of the `HashTable` class outside our test and include an `afterEach()` block as well. This will keep our tests DRY as we go.

The test itself is simple. We should expect the `hashTable` variable (which stores an instance of `HashTable`) to start with an empty array.

Here's the code to get this passing:

```js
export default class HashTable {
  constructor() {
    this.array = [];
  }
}
```

All of our key-value pairs will be stored in this array. But how will we store them so we can quickly insert and retrieve values?

If we just pushed key-value pairs to the array, that wouldn't be very efficient. Insertion at the end of an array would be super-fast (pushing to the end of an array is O(1)) but we'd need a linear search (O(N)) to find key-value pairs. In a very large data set, it would take quite some time to grab key-values near the end of the data set. Meanwhile, insertion anywhere else in an array is quite slow (O(N)) because, in addition to inserting the new element, the index of each element that comes after the inserted element must be shifted. While JavaScript takes care of this for us, it will still be time-consuming with large datasets.

What if we used a binary search tree to place key-value pairs? We could assign each key a value and then sort our array that way. This would have a faster search time of O(log(N)), or logarithmic time than just using an array. However, insertion would potentially be slower than our previous option — generally O(log(N)), and logarithmic time, while faster than linear time, is a lot slower than the O(1) constant time of just pushing to an array. Also, the worst-case scenario is O(N) for insertion.

What we need is a hashing algorithm that will use an array while also utilizing the strengths of other data structures. What is the biggest strength of an array? Well, finding a value in an array is relatively slow (O(N)), but finding an element by its index is super fast (O(1)). That means we want to associate each key in our hash with the index of an array. That way, we can do a super-fast lookup. We'll also be able to take advantage of super-fast key-value insertion and removal using some other tricks as well. We'll learn about those later in the lesson.

First, we'll need to write an algorithm that will associate the value of a key with an array's index.

## A Very Basic Hashing Algorithm

To start, our application is going to use a very mediocre algorithm so we can focus primarily on how hash tables work. Super-fast hashing algorithms are complex and beyond the scope of this lesson — but we will make some basic improvements to our algorithm over the course of this lesson to deepen our understanding of hash tables.

As we now know, we need a way to turn a key into the index of an array. That means our algorithm needs to somehow turn a key that is a string into a number.

For the purpose of our application, we are going to assume that the hash we are working with has keys that are strings. (It's a Beatles hash so that makes sense.) And because we are keeping this very simple, our hashing algorithm will just look at the first letter of a string and turn it into a number.

So if the first letter of a string key is `"a"`, it should be converted to an index of `0`.

If the first letter of a string key is `"b"`, it should be converted to an index of `1`.

This will apply to every letter up to `"z"`, which will be converted to an index of `25`.

That means the key `"John"` would be converted to an index of `9` in our hash table's array (since J is the 10th letter of the alphabet).

This is similar to what a worker would do with an old-fashioned paper filing system. If the worker gets a file that begins with the letter `"j"`, they will put the file in the cabinet that corresponds with the letter. Likewise, when a worker needs to find a file that begins with that letter, they know exactly which filing cabinet to check.

This is exactly how a hashing algorithm works, except instead of calling it a cabinet, we call each index in the array a **bucket**. The hash we are creating will have 25 buckets, one for each letter of the alphabet. And just as file cabinets make it easier for a worker to narrow down a search for a particular file — or to know exactly where to put it — the buckets in a hash table work the same way. A real-world hash table with a lot of data will have a lot more than 25 buckets but we'll cover that later.

Let's write a test for our hashing algorithm:

```js
  ...
  test('should return a number representation of a letter', () => {
    expect(hashTable.hash("Alaric")).toEqual(0);
    expect(hashTable.hash("zygorth")).toEqual(25);
  });
...
```

Our test will check to see if two keys can correctly be converted. Note that one starts with a capital letter and the other doesn't. It shouldn't matter what the case is — they should be translated to the same index regardless. We'd normally break this up into several tests but in the interest of brevity, we are testing multiple behaviors here.

So how can we convert strings into numbers? For our very simple algorithm, we need to grab the first letter of the string, make sure it is lower-cased, and then convert it to its corresponding ASCII code.

If you're not familiar with ASCII, it's the standard for encoding any character on a keyboard as a number. Remember that at the lowest level of our machines, characters on a keyboard don't exist — everything is binary (zeroes and ones). While we can convert characters to their binary representation, there's also a decimal representation as well. You can see an [ASCII chart here](https://www.ascii-code.com/) to see how the numbers translate.

Using this chart, a lowercase `a` corresponds to the number `97`. The numbers go up sequentially to a lowercase `z`, which translates to the number `122` (decimal character code). In other words, we just need to lowercase the first letter of a string, convert it to its ASCII code and then subtract 97 from that value. That would give us a `0` for the letter `a`, a `1` for the letter `b`, and so on.

Here's the code to get this test passing:

```js
...
  hash(key) {
    return key.charAt(0).toLowerCase().charCodeAt(0) - 97;
  }
...
```

We've added a method called `HashTable.prototype.hash()` which is our hashing algorithm. It takes a `key` as an argument.

The algorithm takes the first letter (`key.charAt(0)`) and then lower-cases it (`toLowerCase()`). Next, we use the JavaScript method `String.prototype.charCodeAt(0)`, which translates the first character into an ASCII number. Finally, we subtract 97 from the number. After all, we don't want an array with 96 empty elements before the element containing keys starting with the letter `a`.

If we run our test, it will pass.

At this point, we have a very basic hashing algorithm. We can use this algorithm both to _store_ an element in a hash table and to _find_ it — much like a worker can use a filing system to store and find files alphabetically.

The code snippet below demonstrates that we'll use the hashing algorithm in both our `HashTable.prototype.set()` and `HashTable.prototype.get()` methods.

```js
function set(key, value) {
  // Hashing function converts the key into an index and then stores the value at that index in the array.
}
```

```js
function get(key) {
  // The same hashing function once again converts the key into an index and then grabs that index from the array.
}
```

If we pass in the key `"John"`, our `Hash.prototype.set()` function will use the hashing algorithm to determine that the value corresponding to John should be placed at the 9th position of the hashing array.

Similarly, if we try to look up the key `"John"`, our `Hash.prototype.get()` function will use the same hashing algorithm to determine that if the key exists, it will be at the 9th position of the array (which we can also call a bucket).

When we look at a worker using a file system, we could say that the worker, too, is using a very basic algorithm to sort and retrieve using cabinets instead of buckets. It's not necessary for the worker to do a linear search (searching each file one at a time until they find a match). The cabinets make the search much faster, though some linear searching will likely be necessary once the right cabinet is found.

## Adding a Key-Value Pair to a Hash Table

Next, we need to actually add a key-value pair to our hash table. Let's start with a test.

```js
...
  test('should correctly set a key-value pair in a hash table', () => {
    hashTable.set("John", "Lead Singer");
    expect(hashTable.array[9]).toEqual([["John", "Lead Singer"]]);
  });
...
```

In this test, we call `HashTable.prototype.set()` with two arguments: the first is the key while the second is the value.

In our expectation, we check that `hashTable.array[9]` is equal to the following: `[["John", "Lead Singer"]]`. Note that we have to hard-code the index of the array because we haven't written a `HashTable.prototype.get()` method yet.

The value of the bucket at the ninth position should be the following: `[["John", "Lead Singer"]]`. Why is this a nested array and why are we storing both the key and the value?

Well, our array only has 25 buckets, one for each letter of the alphabet. What will happen when we want to add Jane to this hash table like this?

```js
hashTable.set("Jane", "Fan of The Beatles")
```

We can't just store values in the bucket corresponding to the letter J because the bucket would look like this after adding both John and Jane:

```js
["Lead Singer", "Fan of The Beatles"]
```

How would our application know which value corresponds to John and which to Jane?

In order for our application to know the difference, we need to store the keys as well:

```js
[["John", "Lead Singer"], ["Jane", "Fan of The Beatles"]]
```

When an element is added to a hash table bucket that already contains an element, it's known as a **collision**.

So what is the point of a collision? Why would a hash table account for one?

Well, our hash table implementation has only 26 buckets. That's not nearly enough for a good hash table. There are going to be lots of collisions — and if we were storing millions of names, it wouldn't be very efficient.

From that perspective, wouldn't it make sense to just avoid collisions altogether? Why not assign a unique index for every possible key?

That wouldn't be a good idea. Here's why.

Let's say we want to create a hashing algorithm that can assign a different index in an array for each unique string. And let's say we limit the length of a string key to 6 characters. There are more than 300 million permutations of 6 characters _just_ for lower-case letters. So let's say you add your first element to a hashing algorithm and it assigns a value at the 100 millionth position for a unique string. Congratulations! Your hash now uses an array that has information about one key-value pair but has 100 million elements. That's terrible in terms of space and memory considerations.

To deal with this issue, we need to be a little less picky. Instead of giving every single permutation of characters a unique spot in an array, we use buckets instead — just like we are doing so far. We account for buckets having some collisions — but not very many. For instance, with our mediocre algorithm, if our hash table needed to store millions of names, the bucket corresponding to the letter J might hold a huge number of values. In order to find the key-value pair we want, we'd need to do an inefficient search. 

Ideally, however, the number of values in a hash table's array should not exceed the number of buckets. So if you have one thousand values, you should have at least one thousand buckets as well. However, just because the number of buckets roughly corresponds to the number of values being held, it doesn't mean you won't have a lot of collisions. If you have a good algorithm, you shouldn't have too many — but you'll always have to account for at least some. We'll discuss this further in the next lesson.

Let's get our test passing now. Once again, we'll group a few behaviors together to keep things moving quickly.

```js
...
set(key, value) {
  const index = this.hash(key);
  if (this.array[index] === undefined) {
    this.array[index] = []
  }
  this.array[index].push([key, value]);
}
...
```

Our `HashTable.prototype.set()` method takes two arguments: a key and a value. For instance, in our test, we do the following: `hashTable.set("John", "Lead Singer");`.

Next, we do the following:

```js
const index = this.hash(key);
```

This is our hashing algorithm at work! All we do is pass in a key and our `HashTable.prototype.hash()` method will determine what index the key should correspond to.

Next, we check the following:

```js
if (this.array[index] === undefined) {
  this.array[index] = []
}
```

If there is no value at the specified index of the hash table's array, it will be `undefined`. That means we need to place an empty array there. After all, we can't push anything to `undefined`.

Finally, we do the following:

```js
this.array[index].push([key, value]);
```

We push the specified key-value pair `("John", "Lead Singer")` to the array at the specified index.

To sum up, our algorithm determines where the key of `"John"` should go. Based on our algorithm, the index should be 9. Then our method checks to see if any key-value pairs are stored in the array at the index of 9. This is the bucket where all J values should be stored. If there aren't any values there yet, an array is initialized. If there are values, we know an array already exists there and we move onto the next step. We push the new key-value pair into its correct bucket.

By the way, we are using arrays in our buckets to keep things simple. In a hash table with few collisions, using arrays for buckets works just fine. However, there's always the possibility of a lot of collisions, and for that reason real-world hash tables generally use linked lists for their buckets. We will learn about linked lists in another lesson. However, it isn't strictly necessary to know about linked lists to understand the basics of how hash tables work. And as we mentioned before, each individual bucket _shouldn't_ have too many collisions — but we still have to account for the possibility.

In general, this `HashTable.prototype.set()` method encapsulates what this method should do in just about _any_ hash table implementation. The difference would be the hashing algorithm itself — as well as some differences in the code depending on how to best add the key-value pair to the data structure being used for the bucket.

## Retrieving a Value From a Hash Table

Next, we need to be able to retrieve a value from our hash table. We'll use the same hashing algorithm to help us retrieve values. But first we need to write a test.

```js
...
test('should correctly get a key-value pair from a hash table', () => {
  hashTable.set("John", "Lead Singer");
  hashTable.set("Jane", "Fan of The Beatles");
  expect(hashTable.get("John")).toEqual("Lead Singer");
});
```

Our test will add two key-value pairs that will go into the same bucket. Then it will expect our new `HashTable.prototype.get()` method to grab the correct value for the key `"John"`.

Here's the code to get this test passing:

```js
get(key) {
  const index = this.hash(key);
  const bucket = this.array[index];
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      return bucket[i][1];
    }
  }
}
```

Look at the first line inside our method:

```js
const index = this.hash(key);
```

Once again, our hashing algorithm is at work. Hashing algorithms are very fast — they don't use loops so they are always O(1) constant time. And because they are combined with putting an element in an indexed array, another O(1) operation, the process of finding buckets for either retrieving or setting key-value pairs is very fast.

Next, we determine which bucket we need to look in:

```js
const bucket = this.array[index];
```

We actually don't need this line of code but saving this value in a `bucket` variable makes it a little clearer what's happening here.

Finally, we need to loop through key-value pairs until we find the correct key. At that point, we can find return the corresponding value.

```js
for (let i = 0; i < bucket.length; i++) {
  if (bucket[i][0] === key) {
    return bucket[i][1];
  }
}
```

Remember that each bucket is an array of arrays. The nested arrays are key-value pairs. The value at position 0 of each nested array is the key while the value at position 1 of each nested array is the value.

If we find a key in one of the nested arrays (`bucket[i][0]`) that matches the key we passed into our method, we return the value that corresponds with it (`bucket[i][1]`). If you're feeling confused about the bracket notation there, remember that the `[i]` represents iterating through the bucket while the `[0]` or `[1]` represents the key or value of each nested array.

There are a few other use cases we need to consider. What if the key doesn't exist in the bucket? Also, what if no values exist in the bucket at all?

Here's a test for when a bucket doesn't have any values:

```js
...
test('should return null if the bucket has no values', () => {
  expect(hashTable.get("John")).toEqual(null);
});
...
```

And here's our updated method:

```js
get(key) {
  const element = this.hash(key);
  const bucket = this.array[element];
  if (bucket != undefined) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  }
  return null;
}
```

First, if our `bucket` is `undefined`, it won't run through the loop. We also add `return null;` at the end of our method. This means our method will return `null` if the `bucket` is `undefined` (our test condition) _or_ if the bucket is defined but doesn't include a value. We should still confirm that it correctly returns null if the bucket contains key-value pairs but not the key we are looking for. Here's the test:

```js
...
test('should return null if the bucket does not contain the key we are looking for', () => {
  hashTable.set("John", "Lead Singer");
  hashTable.set("Jane", "Fan of The Beatles");
  expect(hashTable.get("Jim")).toEqual(null);
});
...
```

If we run it, we'll see that the test is passing.

### Summary of Hash Tables

In this lesson, we've written a basic hash table implementation with three methods. We didn't include a `HashTable.prototype.remove()` method because the implementation is basically the same as it would be with `HashTable.prototype.get()`. The only difference is that instead of just returning a value once it finds a key, it actually removes that key-value pair from the hash table.

So let's summarize the higher level concepts we've learned about hash tables here:

* Hash tables use an array under the hood. There is no native support for hashes in most languages.
* Finding an element in an array is not very fast (linear time) but finding an element based on its index is very fast (constant time).
* For that reason, hash tables use hashing algorithms to translate a key into an array index.
* Each element in a hash table's backing array is known as a bucket. A bucket can store multiple values.
* When a key-value pair is added to a bucket that already has existing key-value pairs, it's known as a collision.
* Collisions are a necessary part of hash tables. Otherwise, we'd need unnecessarily big arrays to account for every possible unique key a hash table can hold.
* All the main methods of a hash table rely on the hashing algorithm, whether that's methods to add, look up, or remove key-value pairs.

At this point, you know the basics of how a hash table works — and you know the underlying concepts and mechanisms of how they're implemented, whether that's in JavaScript, C#, Ruby, or another language.

In the next lesson, we'll cover ways we could make our hashing algorithm much faster.
