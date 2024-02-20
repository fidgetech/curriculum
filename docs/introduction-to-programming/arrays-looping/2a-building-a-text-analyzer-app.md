---
title: "\U0001F4D3 1.3.2.1 Building a Text Analyzer"
id: 1321-building-a-text-analyzer
slug: 1321-building-a-text-analyzer
hide_table_of_contents: true
sidebar_position: 20
day: tuesday
type: lesson
url: >-
  https://github.com/fidgetech/introduction-to-programming/blob/main/2a_building_a_text_analyzer_app.md
---

In this lesson, we'll start building a small application that can analyze a passage of text (such as a paragraph). It will count the total number of words in the passage, the total number of sentences, the number of times a specific word comes up, and so on. These kinds of applications are very helpful in the real world and we use them all the time in word processors such as Word, Google Docs, and Pages.

While this application will be small, we'll use it to cover several key concepts this section, including:

* Using Test-Driven Development to solve problems by starting small
* Separation of logic
* Loops in all their glory
* Further explorations such as regular expressions (which won't be required for the independent project)

Up until this point, we've mainly done one-off projects — a quick website to demonstrate a concept or a little practice in the DevTools console. Now, though, we'll be transitioning to more sustained projects that we'll work on over the course of a section — or even, in some cases — over multiple sections.

But first, we need a plan for our text analyzer application. There are many things to consider, such as how the user interface will work to all the various functions we'll need to write for our business logic. However, thinking about the big picture can get overwhelming fast, especially when we are dealing with complex problems.

This is one of those times when the following Lao Tzu quote feels appropriate:

> A journey of a thousand miles begins with a single step.

Maybe you've heard this quote a million times but there's a reason it's so used. It really has a lot of truth in it and it's also pretty appropriate for this stage of your time at Epicodus. The journey is a thousand miles and we are taking it one step at a time.

It's also very appropriate in terms of getting started on a bigger project — or even simply trying to solve a big problem in another codebase (which developers have to do a lot). These problems can be very overwhelming so we want to break them down as small as possible.

That's where test-driven development (TDD) comes in. Test-driven development means starting small and testing our code each step of the way. TDD leads to robust code and it's a very effective way to break overwhelming problems down into more manageable steps.

In the next lesson, we'll learn about TDD and start writing our first tests.