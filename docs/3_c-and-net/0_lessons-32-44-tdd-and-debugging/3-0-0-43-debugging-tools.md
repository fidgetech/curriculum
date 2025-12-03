---
title: "📓 3.0.0.43 Debugging Tools"
day: weekend
id: 3-0-0-43-debugging-tools
hide_table_of_contents: true
---

As our applications grow, we'll run into more complex bugs. Fortunately, there are multiple tools, techniques and approaches to quickly locate and squash pesky bugs.

## General Debugging Techniques for Any Language
---

### Learn to Love Errors!

C# offers lots of information when we encounter an error. Errors are there to give clues. They might not tell us exactly what's wrong with our code but they usually point us in the right direction.

**The first step in debugging should always be to follow the errors.** Check the line number that the error references as well as the lines directly before and after the error. So much of programming is about pattern recognition, which is why stylistic things like indentation are important. As we get used to the way clean code looks, more mistakes will be visually obvious and easier to debug.

Let's briefly look at two common errors within the C# REPL.

The first error message lets us know that the variable doesn't exist in the current context. When we get an error message like that, it's almost always because there's a typo. Indeed, that's the issue in the following code.

![Error that tells us that a variable doesn't exist, because of a typo.](/images/c-sharp/prework/error-variable-doesnt-exist-due-to-typo.png)

The next error message could actually be due to a handful of issues. Take a look:

![Error that tells us that a method doesn't exist because of incorrect casing.](/images/c-sharp/prework/error-method-doesnt-exist-due-to-casing.png)

We could be getting this error because we've forgotten a using directive, there's a typo in the method/field/property/class name that we're referencing, and even if we're using incorrect case. When there are many reasons why something is wrong, we need to look at the context. 

In this example, we're using incorrect case. If we look at the context and error message, it's letting us know that `toUpper()` doesn't exist. When we double check the spelling of the `String.ToUpper()` instance method, we should be able to see that we used incorrect case. However, sometimes it takes a fresh pair of eyes (someone else looking at our code) to spot these pesky typos.

Finally, take note that compiler errors typically have an ID number that we can use to look up more information about the error. In the above two examples, there's C# error codes CS0103 and CS1061.

**Remember to carefully read error messages from failed tests.** Test failure messages contain a lot of information about what failed, where, and why. Check out the following failure message:

<pre>
<code style="color:red">
  Failed CheckType_DeterminesWhenScalene_String [59 ms]
  Error Message:
   Assert.AreEqual failed. Expected:&lt;scalene&gt;. Actual:&lt;not a triangle&gt;.
  Stack Trace:
     at ShapeTracker.Tests.TriangleTests.CheckType_DeterminesWhenScalene_String() in C:\Users\staff\Desktop\ShapeTracker.Solution\ShapeTracker.Tests\ModelTests\TriangleTests.cs:line 107


Failed!  - Failed:     1, Passed:     8, Skipped:     0, Total:     9, Duration: 117 ms - ShapeTracker.Tests.dll (net6.0)
</code>
</pre>

In the failure message, we can get the following helpful information about what went wrong:

* We can read the name of the test method that failed, `CheckType_DeterminesWhenScalene_String`
* We can see the values for what we expect, `Expected:<scalene>`, versus what we actually got, `Actual:<not a triangle>`.
* We can see a stack trace that takes us to the failed `Assert.AreEqual()` method on line 107 of `TriangleTests.cs`.

### _"What if I have no errors?!"_

Sometimes code won't execute as expected and there isn't a detailed error. If this happens, don't panic! Again, it's important to accept that encountering bugs is just part of programming. Here's a few of the most common methods for debugging.

### Document Work

It's easy to get lost when debugging if we don't keep track of what we've tried already.

As we debug, it's important to write down what we try and what the result is. This keeps track of the clues we uncover while we're troubleshooting. It also makes it easier to explain a problem to someone else. If other developers can see what we've tried so far, they can better understand the issue at hand. Instead of simply saying "my code isn't working," we can say something like  "My code isn't working and I've tried X and Y."

Organization is key — we don't want to be running in circles trying the same things over and over. We also want to be able to succinctly communicate our issues and troubleshooting attempts to other developers.

### Use the Console
We can use `Console.WriteLine()` to print the value of variables, what a method is returning, and so on. In fact, we can use `Console.WriteLine()` just as we use `console.log()` with JavaScript. This is one of the easiest and most useful ways we can debug our code.

### Comment Out Until it Works and Then Uncomment Until it Breaks Again

Another good way to diagnose what's wrong with our code is to debug it one section at a time. Comment out everything in a problematic area of code. Then uncomment out code line by line, seeing what works and what doesn't. This can help determine exactly which line caused the issue.

Also, regular commits can help us with debugging. We should commit whenever we make working updates. That way, when our code breaks and we can't find a way out, we can revert to a previous commit. We can check our previous revisions on GitHub by clicking on _Commits_ in the top left corner of a repo.

We can also revert our code to a previous commit by running the following series of commands:

```bash
$ git log --oneline
```

This will list all of our local Git commits. Locate the number of the commit to revert back to and save it.

Then, run the following command, providing the specific commit number:

```bash
$ git reset <commit-number>
```

For example, if a commit had the identifier `56e05fced`, we would revert back to that point in time with the following command:

```bash
$ git reset 56e05fced
```

### Googling

Google is a fantastic tool but should be used with caution. Look at message boards like Stack Overflow to see if others have encountered a similar problem. However, when using someone else's code, it's essential to understand exactly what it does. Blindly copying and pasting code because "it just works" will only create headaches later.

### Don't Get Mad

Sometimes it's necessary to take a break and step away from our code, especially if we find ourselves getting angry or frustrated. Take a walk or have a snack. Stepping away from a problem can also indirectly — or even directly — lead to a solution. This is in part because our brains often continue to mull over the problem in a subconscious, decentralized way, which might be just what we need to attack the issue from a different angle.

### One Thing at a Time

Step through code line by line from beginning to end. It can help to say the code out loud or even write it down. Try testing code in a REPL, check the value of variables and so on. Simplify everything. Check code that is assumed to be working — we might have accidentally introduced a bug or there could be another unintended effect of that code we haven't considered.

For example, maybe nothing is working because we've been editing the wrong copy of the file. We have seen this happen many times to students!

### Ask a Friend

Ask a classmate to take a look. Sometimes a different pair of eyes can spot something simple like a spelling error. In fact, frequently, just the act of explaining a problem to someone can be enough to help figure out a solution.

### When We Find the Solution...

Document all bugs and their solutions. We should discuss the solution with our pair and ask ourselves the following questions: "How will I prevent this problem from happening again? What error messages should I watch for? If I see the error again, where should I look for a solution?" This will help save time so we can learn from our mistakes. Embrace bugs as an opportunity to learn programming more deeply and to avoid future bugs.
