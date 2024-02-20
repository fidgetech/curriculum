---
title: "\U0001F4D3 Introduction to ASCII"
id: introduction-to-ascii
slug: introduction-to-ascii
hide_table_of_contents: true
sidebar_position: 24
day: wednesday
type: lesson
url: 'https://github.com/fidgetech/capstone/blob/main/1_ascii_code.md'
---

There are some situations where we might need to convert a letter or a string into a number. For example, when we work with binary numbers, we might need to turn a letter to its binary representation. Some algorithms also require converting letters to numbers. A key example is a hashing algorithm, which requires the ability to convert a string into an index in an array.

Fortunately, all characters — including letters, numbers and punctuation — can be translated into an ASCII character code, which is the standard for encoding characters on a keyboard as a number. You can see a complete [ASCII chart here](https://www.ascii-code.com/).

ASCII specifications serve a very specific purpose. ASCII is a universal language that computers can use to communicate and share files. Without standards like ASCII, one machine might send a message that reads `"hello"` — but a second machine wouldn't be able to translate it for a user because there'd be no standard by which to decode the message from the first machine.

Generally, we will not need to worry about how various machines communicate with each other — that's something that other developers have taken care of for us. However, as mentioned before, there are situations where we might need to turn letters into numbers. Instead of just creating our own converter, we'd be better off using a universal standard that all machines understand.

## JavaScript Methods for ASCII Encoding

There are two important methods related to ASCII encoding. One is to turn a letter into its ASCII equivalent. The other is to turn an ASCII code back into its letter equivalent.

### Turning a Letter into ASCII Code

To turn a letter into its equivalent ASCII code, we can use the `String.prototype.charCodeAt()` method. This method takes a position in a string as an argument.

If we want to encode the first character in a string, we'd do the following:

```js
> "cat".charCodeAt(0);
99
```

If we try to get the character code of a position that doesn't exist, the method will return `NaN`:

```js
> "cat".charCodeAt(3);
NaN
```

If we want to return the codes for each character, we need to loop through the string. For example, we could do something like this:

```js
function asciiConverter(string) {
  return string.split("").map(function(letter) {
    return letter.charCodeAt(0);
  });
}
```

This splits the string and then uses `Array.prototype.map()` to return the ASCII code for each letter. As we can see from the example above, we use `String.prototype.charCodeAt(0)` because we are looking at one letter at a time. It's common to just use `String.prototype.charCodeAt(0)` in this kind of loop because we are evaluating each letter individually — and the first position of a single letter is always going to be itself.

### Turning an ASCII Code Into A Character

To go in the other direction, we can turn an ASCII code into a character with `String.fromCharCode()`. Note that this is a static method, not a prototype method.

We can call it like this:

```js
> String.fromCharCode(97);
"a"
```

Or we can pass in multiple arguments:

```js
> String.fromCharCode(99, 97, 116);
"cat"
```

This method won't just translate ASCII characters, by the way — it's for translating all UTF-16 characters. That means Unicode — which has a _lot_ more characters than ASCII. For instance:

```js
> String.fromCharCode(6543210);
"흪"
```

## Other Notes About ASCII

* The ASCII chart isn't just for numbers and letters. It's for encoding _all_ characters on a keyboard. The first 32 characters in the ASCII chart are characters that can't be printed. This includes everything from the backspace to the `esc` key. 

* Lower-cased letters are encoded differently than upper-cased letters. For instance, the ASCII code for `A` is 65 while the character code for `a` is 97. The letters are sequential so `B` is 66, `C` is 67, and so on. Because lower-case letters are also sequential, the lower-cased version of a letter will always have an ASCII code that's the sum of the ASCII code for the upper-cased version plus 32. Not that you need to know this fact — but it could help solve a problem some day if, for instance, you wanted to uppercase or lowercase letters based on their ASCII codes.

* There are also extended ASCII character codes for special characters such as characters used in other languages like `ë`.

* ASCII is based on a limited set of Latin character. This means many characters from other languages (such as Arabic) are not included. Unicode is much more extensive for character encoding.

In general, you will probably not need to think about ASCII too much. However, the topic will come up in several future lessons — including when we learn about bitwise manipulation and hashing algorithms. It's not anything you need to memorize — rather, it's important to be aware of ASCII as there are many problems where we might need to convert letters into numbers.