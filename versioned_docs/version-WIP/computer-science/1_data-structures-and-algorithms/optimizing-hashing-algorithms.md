---
title: "\U0001F4D3 Optimizing Hashing Algorithms"
id: optimizing-hashing-algorithms
slug: optimizing-hashing-algorithms
hide_table_of_contents: true
sidebar_position: 31
day: wednesday
type: lesson
url: >-
  https://github.com/epicodus-curriculum/capstone/blob/main/2_optimizing_hashing_algorithms.md
---

In the last lesson, we covered all the basic concepts in building a hash table. Our hash table only had 26 buckets for a reason — because it's easier to visualize a bucket for each letter of the alphabet.

How would we optimize our hash table to account for both its size in memory and also its overall efficiency if it has too many collisions?

Well, a lot of the optimizations we might consider are heavily grounded in math and are beyond the scope of this lesson. But we can still cover them more generally.

The hashing algorithm we wrote in the last issue had a number of problems. We already know one major issue — it's probably not enough buckets! A guideline to note is that a hash table will be at its most efficient when it's about 80% full. What does that mean? Well, that means that the number of key-value pairs it contains is about 80% of the total number of buckets.

So how do we create the correct number of buckets for a hash table? Well, there are two options:

* You can estimate the total number of buckets you'll eventually need. For instance, if you expect the hash table will eventually hold one million values, you'd need to account for 1.25 million buckets.

* You can start with a smaller number of buckets and then resize the hash table once a certain number of values have been added. As you might imagine, resizing a hash table is _very_ painful and inefficient. First, a new array needs to be created, then _all_ of the items in the old array need to be moved into a new array, and finally the old array needs to be deleted. For that reason, resizing a hash table should generally be avoided. So if you were to take this approach, you might account for eventual resizing but you'd ensure that it doesn't happen too often.

But how do you even enforce the size of the backing array? Well, JavaScript doesn't care. Theoretically, a JavaScript array can hold up to about 4.3 billion elements. However, other languages that are slightly closer to the machine _do_ care — so you might need to create an array that can hold a certain number of elements and then resize it later.

However, it's not the potential size of the array that really determines how many elements the array will hold. It's the algorithm itself. Think back to the algorithm we created in the last lesson. With that algorithm, our array will never have a length greater than 26 elements.

That's the biggest problem with the algorithm we wrote — and we'd need to rewrite it to deal with considerably more than 26 elements if we want it to actually be useful. So let's rewrite it to have 100,000 buckets instead. That means it could be used for up to 80,000 key-value pairs.

Before we do that, we need to consider another big problem with the algorithm we've already written.

If we were to add one thousand key-value pairs using the algorithm we wrote, which bucket do you think will have more collisions?

* The bucket corresponding to the letter J
* The bucket corresponding to the letter Z

Considering that our hash corresponds to names, the first bucket will have a _lot_ more collisions. At least for the United States, J is one of the most common first letters for names. Meanwhile, almost no one has a name that begins with the letter Z. This is not efficient at all. Not only will some buckets store more values — but in this case, these buckets will also be the ones most likely to be used. Looking up a key from the Z bucket might be really fast but hardly anyone will ever look up a key from that bucket. Meanwhile, the key corresponding to J will be used a lot. In other words, the most commonly used buckets will be the most inefficient. Not good at all!

So our algorithm can't just have the right number of buckets — it also needs to _evenly distribute_ values between buckets as much as possible. While collisions are expected, they should be minimized.

For instance, consider a hashing algorithm that adds the ASCII character codes of each element in the key. All of the following combinations (and many more) would add up to 220:

* `"nn"` (`n` has an ASCII code of 110)
* `"mo"` (`m` has an ASCII code of 109 while `o` has one of 111)
* `"om"` (the above string reversed)

Imagine now that all of our strings are six characters. If we summed each, there would be sum distributions that are much more common than others. In fact, considering that `n` is approximately halfway through the alphabet, we might see a lot of distributions around 660 (110 * 6). We can already see that would be a bad pattern for getting an even distribution.

The issues we've discussed are the two biggest performance concerns we need to consider when writing a hashing algorithm for a hash table. To sum up:

* A good hash table needs to have enough buckets — but not too many. A guideline to follow is that a hash table should be about 80% full.
* A good hashing algorithm needs to evenly distribute key-value pairs into buckets, resulting in as few collisions as possible. We may end up with more collisions due to bad luck, but the algorithm itself shouldn't cause those collisions.

Let's take a look at an adaptation of well-known hashing algorithm known as djb2 — from Daniel J. Bernstein, the creator of the algorithm. Note that while this function is a solid basic algorithm, better ones have since replaced this one.

```js
function hash(key) {
  let hash = 5381;
  let totalLetters = key.length;

  while(totalLetters) {
    hash = (hash * 33) ^ key.charCodeAt(--totalLetters);
  }
  return hash >>> 0;
}
```

Before we go further, let's address the numbers in the algorithm above: `5381` and `33`. There is nothing magical about these numbers — and many other numbers work just as well in this algorithm. That being said, these numbers are not entirely arbitrary and have some benefits in a hashing algorithm. For instance, prime numbers give a better distribution and both of these numbers are prime. Why do prime numbers give a better distribution? Well, it comes down to now many divisors a number has. The more divisors it has, the more collisions we can end up with. For that reason, even numbers are especially bad for hashing algorithms while most prime numbers will work fine. Since we are just covering general concepts and this isn't a math class, we won't get into the mathematic reasons more divisors leads to more collisions. If you are interested, we recommend doing further research on your own. That being said, the numbers in the algorithm above don't have better collision performance than other numbers — they just happen to be the ones that Bernstein came up with.

Next, we have a while loop based on `totalLetters`. You might wonder why we save the length of the key in a variable but what's happening in the while loop should make it clear. We are decrementing the value of `totalLetters` each time through the loop — and eventually it will be zero. We can't modify the length property in this way.

Next, let's take a look at the code in the loop itself:

```js
hash = (hash * 33) ^ key.charCodeAt(--totalLetters);
```

The best way to see what is happening here is to walk through how the hash changes for the string `"abc"`.

The first time through the loop, we use the XOR operator to compare the following:

```js
(5381 * 33) ^ 99
```

The first character evaluated in the loop will _always_ be compared to `(5381 * 33)`. The algorithm works its way backwards, starting at `totalLetters` and decrementing (`--totalLetters`). That means it checks the character code for the letter `"c"` first, which is 99. Note that we can go forwards or backwards through the string — either is fine.

The result of the above (in decimal) is `177606`.

The second time through the loop, we do the following (the character code for `"b"` is 97):

```js
(177606 * 33) ^ 98
```

This updates the hash to `5861092`.

The third and final time through the loop, we do the following:

```js
(5861092 * 33) ^ 98
```

This updates the hash to `193415941`. As we can see, this algorithm is designed for a lot of key-value pairs. 

Finally, when we are done iterating, we do the following:

```js
return hash >>> 0
```

What is the point of using the unsigned right shift operator (`>>>`)? Well, this operator returns an unsigned 32-bit integer. Unsigned means it's non-negative (it doesn't include the negative sign). Meanwhile, a 32-bit integer includes the range of numbers from 0 to 4294967295. Yes, that's nearly 4.3 billion numbers. If we didn't use `>>>`, our algorithm could return negative numbers for some keys. That will cause problems since we always want to have a positive number for a key.

By the way, an interesting side note: we can _technically_ add negative indexes to an array but it will lead to weird stuff:

```js
> const array = [1,2,3,4];
> array.length;
4
> array[-1] = "hi";
> array;
[1, 2, 3, 4, -1: "hi"]
> array[-1];
"hi"
> array.length;
4
> array.forEach(function(number) { console.log(number) });
1
2
3
4
```

As we can see, negative indexes don't count towards an array's length — and while we can use bracket notation to find negative indexes, when we iterate through the array with `Array.prototype.forEach()`, the loop only iterates over positive indexes. So while JavaScript allows negative indexes, it will lead to problems with our code. That's all the more reason to make sure that the hash value we return is unsigned.

At this point, you might wonder why the above hashing algorithm works the way it does. Why all this multiplication and the use of the XOR operator? Well, remember the goal of a hash is to create a wide spread of values with minimal collisions. The more collisions we have, the slower our hash will be. The algorithm above generates a hash very quickly and generates keys with relatively few collisions. There are better hashing algorithms out there — but this one is very interesting to look at because it is well-known, relatively simple, and uses bitwise manipulation to generate a wide range of indexes.

### SHA and Encryption

Hash algorithms are often used for passwords. You might've heard of SHA encryption before — for instance, SHA-1, SHA-256, and so on. In fact, SHA is short for _Secure Hashing Algorithm_. With a secure hashing algorithm, someone can create a password and then the secure hashing algorithm will scramble it and add salt to the password. Salting a password just means obscuring it further by adding additional characters to the password. Think of it as being like adding salt to soup — we can add the salt but we can't take it out once we've added it.

Let's say that I have a password for an account that's `bestPasswordEver123!` It's a terrible password but the application where I have the password would hash this password and save it in a table. The hashing algorithm will add salt and turn it into a string that looks like gibberish. Let's say that the hashed password is `1bas23drdvzad34abcz9783924`. Now we have the password in encrypted form. We can type in `bestPasswordEver123!` when we log in, the password will be encrypted, and then it will be compared to its entry in the password table. If it matches, you'll be successfully logged in. However, if it doesn't match, the log in attempt will fail.

However, if malicious users get the password table, they wouldn't be able to do anything with it. That is because secure hashing algorithms are one way operations — you can hash a password but you can't unhash it! We don't want to be able to decipher it — we just want to be able to input a password and see if it matches the hashed password — we don't ever want to unhash the hashed password — because only hackers would want to do that. So while we can correctly input `bestPasswordEver123!` and the hashing algorithm will match it to the correct value to allow us to log in, we can not get `bestPasswordEver123!` from `1bas23drdvzad34abcz9783924` — unless, of course, there's something wrong with the hashing algorithm.

In order for a secure hashing algorithm to be good, it has to keep collisions to a minimum and also use what is known as **avalanching**.

**Avalanching** means that even a very small change to a string leads to major changes to the encrypted password. The [Wikipedia entry on SHA-2](https://en.wikipedia.org/wiki/SHA-2) gives a great example of the avalanching effect at work. In the example below, SHA-2 is used to encrypt two strings that have only a single character different (a period at the end of the sentence).

```
SHA224("The quick brown fox jumps over the lazy dog")
0x 730e109bd7a8a32b1cb9d9a09aa2325d2430587ddbc0c38bad911525
SHA224("The quick brown fox jumps over the lazy dog.")
0x 619cba8e8e05826e9b8c519c0a5c68f4fb653e8a3d8aa04bb2c8cd4c
```

This is sufficient to change 111 of the 224 bits in the hashed result!

The reason for avalanching is simple — the easier a code is to break, the worse it is. If you can make a code unbreakable — or nearly so — that means it's very well hashed. However, if only a very small change occurred when we added a character to the string we want to hash, it would be much easier to determine the pattern and reverse engineer the code.

In terms of collisions, it should also be clear why we want to avoid them with secure hashing algorithms. The more collisions, the easier it is to guess a password. For instance, if the corresponding key-value pair for `Password123!` in a hash table has ten potential collisions, a malicious user is effectively checking ten passwords at once when they check `Password123!` Secure hashing algorithms can be vulnerable to collision attacks where malicious users attempt to break into a system by taking advantage of collisions. On the other hand, occasional collisions are possible — but the chances that a password collision will occur are extremely small.

Another interesting thing to note about secure hashing algorithms — they are designed to be very slow. Why is that? Well, think about the use case of a secure hashing algorithm — the algorithm should be able to check to see if a password matches a hash. If the algorithm were extremely fast (and it certainly could be if we didn't add bottlenecks), it would be easy to test tens of thousands of passwords very quickly. That's not something we want to do — but it would help malicious hackers crack passwords because they could test more combinations faster to see if any match a hashed password.

Finally, there is a big difference between hashing and encryption. Hashing is a one-way process — we turn a password into a hash but we don't ever turn the hash back into a password. Encryption, on the other hand, is a two-way process. If we encrypt a message (say, through an encrypted message service) and send it to someone else, we want that other person to be able to read the original message. That means it needs to be decrypted when it reaches the other end. We won't cover encryption in this lesson because it isn't related to hashes — however, it is important that you understand this basic distinction between secure hashing and encryption — the first is a one-way process while the second is a two-way process.