---
title: "📓 1.1.4.13 VS Code with HTML"
day: thursday
id: 1-1-4-13-vs-code-with-html
hide_table_of_contents: true
---

Before we move on, let's cover a few basic tips and tricks for working with HTML in VS Code. This lesson is optional but the content here is highly recommended. The VS Code features mentioned below make it easier to work with HTML and other coding languages.

## In this lesson
---

- How to **fold** code sections to focus on structure
- Using line guides and tag highlighting to match opening/closing tags
- **Intellisense** and Emmet snippets for faster HTML editing

> **AI Support:** Unsure how a VS Code feature works or which shortcut to use? You can ask AI to explain an editor feature in plain language. Use AI to **understand VS Code tools for HTML**—not to generate project code or complete exercises for you.
>
> **Example prompts:**
> - Weak: "Fix my HTML indentation."
> - Strong: "Can you explain how code folding in VS Code helps when working with nested Bootstrap rows and columns—without rewriting my HTML for me?"
>
> Before asking, check: [Do I have the license for this?](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech#activity-2-do-you-have-the-license-for-this) See [Using AI Responsibly at Fidgetech](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech) and [How to Ask for Help](../../pre-work/getting-started-at-fidgetech/1-0-0-07-how-to-ask-for-help).

If we look at the HTML in our `section-in-review` project, it's starting to get a bit overwhelming. It's often frustrating to add rows and columns to HTML that already exists, and it can also be challenging to get our indentation lined up and make sure we have the correct number of tags and closing tags — and that all of those tags are in the right places.

VS Code is designed to make our lives easier as developers. Here are a few things we can do to make HTML easier to work with.

### Folding Code

When we are working with longer sections of code, it's helpful to be able to hide code we don't need at the moment. This can make the code less overwhelming to look at and work with.

We can "fold" sections of code in VS Code, as this GIF shows.

![Fold code by clicking on the arrow between the line number and the code.](/images/VS+Code+Lessons/folding-code.gif)

In the GIF above, we fold sections of code (code enclosed in tags). To do this, we hover over the gutter between the line numbers and the code. This will show arrows for each section of code.

If the arrow is pointing down, that means the section of code is fully expanded and showing. If the arrow is pointing to the right, that means the code is hidden, though the first line of the hidden section will be showing. This line will be highlighted in blue and there will also be ellipses to the right of the line to show that the section is hidden. This can be helpful when we accidentally hide our code and wonder where it went.

We can click on the arrows to either expand or hide our code. As the GIF above shows, it's probably not very helpful to hide larger sections of code like the div for the `"container"` class, but it can be helpful to hide our `"head"` code. Also, if we are focused on adding rows and columns, hiding sections like the jumbotron will also be helpful.

If we take a look at the image below, we'll see that folding code can help us make sure that we have the correct number of rows and columns — with closing tags for each — without looking at all of our card content:

![Code in cards is folded so that only rows and columns are showing.](/images/VS+Code+Lessons/folded-code.png)

This can be _very_ helpful when we are trying to add rows and columns to our code.

Note that code folding isn't limited to HTML. We can fold code for other languages in VS Code, too.

### Using Line Guides and Highlighting Divs

Sometimes we'll want to see exactly where a div begins and ends. While folding code can help a bit, it might not be as helpful if we need to see all the code — either for reasons of context or because we are hunting down an error (such as a missing closing tag or a typo). There are two subtle but very useful things VS Code does to help us.

First, we can click on a div to highlight it. When we do, the closing div will also automatically be highlighted. Take a look at the GIF below.

![In this GIF, we can click on a div to highlight its closing div. It also emphasizes the line guide.](/images/VS+Code+Lessons/line-guides.gif)

As we can see in the GIF above, there are vertical guidelines showing us exactly where each tag opens and closes. Even better, we can click on a tag to _emphasize_ the vertical line that corresponds with that level of indentation. In this GIF, we click on the div with the `"row"` class. This emphasizes the vertical line for that level of indentation within the div. We can follow it all the way down to the closing tag — and look — VS Code has automatically highlighted the closing tag for us!

This is really useful — and sometimes even necessary when trying to figure out where a closing tag is missing (or when we have one closing tag too many).

> **Try asking AI:** "Can you explain how VS Code's tag highlighting helps find missing closing tags in nested HTML?"
>
> After reading AI's response, explain the concept back in your own words before moving on.

Of course, to fully use this functionality, we need to have clear, consistent indentation.

### Intellisense

Like other powerful code editors, VS Code has a built-in ability to "sense" what you might be typing in. You've probably noticed this before — VS Code will provide a dropdown of items as you're typing. It might seem annoying at first, at least until you know how to harness the power of what's called Intellisense. Let's take a look at a basic example. In the process, we'll demonstrate another piece of cool VS Code functionality as well.

![We can use VS Code's Intellisense to autofill code for us. And we can use Emmet snippets to autofill even more.](/images/VS+Code+Lessons/intellisense.gif)

In the example above, when we type in the letter "d", VS Code knows that we might mean `<div>`. It will provide a dropdown that includes `div` as the first option. If we hit _Tab_, VS Code will automatically create a div and its closing tag for us — all we had to do is type in "d" and then hit _Tab_. That can save us a lot of typing in the long run.

Note that if VS Code isn't automatically showing a dropdown when we are typing, we can always prompt it to do so by hitting `Ctrl` + `Space`.

Next, we can do the same thing with an ordered list. And finally, here's another cool piece of functionality. We can type `li*3` to specify that we want three `<li>` tags. As we'll learn in the next course section, the `*` represents multiplication in coding.

`li*3` is known as an Emmet snippet. Emmet is a toolkit for web developers that makes writing code more efficient. You are not required to know about Emmet snippets in this course, but they can make your coding life easier in the long run. For more information about using Emmet snippets with VS Code, see the [documentation](https://code.visualstudio.com/docs/editor/emmet).

There's another very helpful thing to know about Intellisense. It doesn't just help us type code more efficiently — it makes code **discoverable**. For instance, let's say we want to add an HTML tag and we can't remember what it is. All we know is the letter it begins with. We can type in that letter and then Intellisense can help jog our memory. Intellisense can sometimes even suggest something we don't know about at all, saving us the time we'd need to hunt through documentation. This quality of discoverability becomes more apparent when we start working with other coding languages like JavaScript. However, by working with and becoming more comfortable with Intellisense now, we'll be better prepared to take advantage of this feature going forward.

For more information on how VS Code can help us work with HTML, see [HTML in Visual Studio Code](https://code.visualstudio.com/docs/languages/html). You are not required to know or use any of these features for Fidgetech. However, we recommend using the VS Code features above because they make it easier to write and debug HTML.

## Checkpoint
---

Before moving on, you should be able to:

- [ ] Fold code sections in VS Code to focus on HTML structure
- [ ] Use tag highlighting to match opening and closing tags
- [ ] Use Intellisense or an Emmet snippet to speed up HTML editing

If you're unsure, re-read the section above or ask AI: "Can you explain three VS Code features that help with nested Bootstrap HTML—without writing my code for me?"
