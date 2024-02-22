---
title: "📓 1.2.0.10 Strings"
day: weekend
---

We've done a lot with numbers, but there's more to this world than just math. Let's look at words.

```javascript
> "Hello world!";
"Hello world!"
```

The stuff inside the quotes is called a **string**. Strings can include letters, punctuation, and even numbers.

```javascript
> "5674";
"5674"
> "!?&";
"!?&"
> "Strings are wild! ;)";
"Strings are wild! ;)"
```

What happens if we don't surround our string with quotes?

```javascript
> hello;
x Uncaught ReferenceError: hello is not defined (...)
```

This doesn't work because JavaScript doesn't know what `hello` means when it's not a string. It looks to see if it's a variable or something similar, and if it doesn't find a variable with that name defined anywhere it gives us an error message.

We can set variables equal to strings:

```javascript
> const myString = "Strings can contain characters like @, $, and %.";
undefined
```

If you want to put a quote inside a string, you have two options. Here's the first:

```javascript
> "Quoth the raven, \"Nevermore.\"";
"Quoth the raven, "Nevermore.""
```

The backslashes `\` in front of the quotes is called an **escape**. It tells JavaScript that the quote `"` that comes right after it is not the end of the string, but just a character inside the string.

You can also use single quotes:

```javascript
> '"Programming is fun!", she exclaimed.';
""Programming is fun!", she exclaimed."
```

JavaScript generally doesn't care if you use single or double quotes to indicate a string. If you have a lot of double quotes within the string, using single quotes to indicate the string saves you from having to escape all of the double quotes inside.

Finally, note that we are still using semicolons at the end of each line. By doing so, we can be explicit about where a piece of code terminates (at the end of a line) instead of expecting JavaScript to automatically do it for us.
