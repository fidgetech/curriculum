---
title: "📓 3.1.0.3 Using the Node REPL"
day: weekend
id: 3-1-0-3-using-the-node-repl
hide_table_of_contents: true
---

You've already used Node to run projects in Intermediate JavaScript. In this section, we'll use it differently: as a **REPL** — a quick interactive sandbox for trying out code.

REPL stands for **Read-Evaluate-Print-Loop**. You type an expression, Node evaluates it, prints the result, and waits for the next one. It's useful for experimenting with small pieces of code without setting up a full project.

Throughout this section, you'll encounter a lot of new function patterns. The Node REPL is a great way to try them out as you go.

## Opening the REPL

In your terminal, type:

```
node
```

You'll see a prompt:

```
>
```

Now you can type JavaScript and press Enter to run it:

```js
> 2 + 2
4
> "hello".toUpperCase()
'HELLO'
> [1, 2, 3].filter(n => n > 1)
[ 2, 3 ]
```

To exit, press `Ctrl + D` (or `Ctrl + C` twice).

## Trying Out FP Examples

As you work through this section, use the REPL to experiment. For example, after reading the pure functions lesson, you might try:

```js
> function addOne(num) { return num + 1; }
undefined
> addOne(5)
6
> addOne(5)
6
> addOne(5)
6
```

Seeing the same result every time is what makes it a pure function. Trying this yourself is more memorable than just reading about it.

## Running a File

If you want to experiment with a longer script, save it to a `.js` file and run it with:

```
node my-script.js
```

Use `console.log()` to print values to the terminal:

```js
// my-script.js
const addOne = (num) => num + 1;
console.log(addOne(5));
```

```
$ node my-script.js
6
```

## Your Choice of Tool

You can also use the Chrome DevTools console or an online editor like CodePen. The Node REPL is just often the fastest option when you're already in the terminal. Use whatever helps you experiment most easily.
