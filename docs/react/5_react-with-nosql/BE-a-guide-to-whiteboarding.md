---
title: "📓 A Guide to Whiteboarding"
day: weekend
---

This lesson will cover a basic approach to whiteboarding. A technical interview can come in many forms and there is no one-size-fits-all approach. However, the following approach will serve you well in traditional whiteboard sessions where one or more interviewers are evaluating your ability to write code.

## How and Why Do Companies Conduct Technical Interviews?

Technical companies conduct technical interviews for a simple reason: they want to evaluate your technical knowledge as well as your ability to solve problems.

Many companies have a multi-step interview process. Especially in bigger companies, this process usually starts with a screening interview with an HR manager or recruiter. This initial interview is used to assess whether you might be a good fit for the company.

Next, it's typical for companies to evaluate your technical abilities. There are many ways to do this. You may take part in one (or more) of the following during the interview process:

* A technical whiteboard where you will be asked to whiteboard your answer to a problem.
* A broader technical interview where you are asked technical questions — but answer verbally and don't use a whiteboard.
* A take-home technical problem where you have an allotted amount of time to solve the problem on your own before explaining your solution to an interviewer.
* A pair or solo programming session where you solve a technical problem on screen instead of using a whiteboard.

Technical interviews — especially whiteboard interviews — have become somewhat controversial. While they are a traditional method of evaluating technical abilities, they have several issues:

* **Coders typically use computers, not whiteboards, to solve problems.** We often use Stack Overflow, linters, auto-complete and other features to write code. For that reason, whiteboards often don't do a great job simulating what a person will actually be expected to do on the job.
* **Whiteboards can be especially anxiety-inducing.** This effect can be compounded for people from underrepresented backgrounds, people with anxiety, and so on.
* **Whiteboards can be helpful for determining good candidates, but they also screen out good candidates.** If someone aces a whiteboard, it may be a good indicator of their technical knowledge. However, if someone does poorly on a whiteboard for the reasons listed above, they may be screened out despite the fact that whiteboarding didn't accurately show their problem-solving and technical abilities.

Ultimately, whiteboard interviews are a common but imperfect way to evaluate potential employees. The interview process can feel like a gauntlet — especially when the process consists of five or more interviews, including a technical. It's all the more reason to practice whiteboarding.

In the next section, we'll cover some key steps for having a successful whiteboard session.

## Steps to a Successful Whiteboard Interview

A whiteboard interview starts with a technical question from an interviewer. For example, an interviewer might ask you to sort an array. There are many approaches to this problem, some more efficient than others. It may be tempting to just dive in, but that's not the best approach. 

### 1. Ask clarifying questions
Technical interviewers will often be deliberately vague or leave out important details. In an actual job setting, it's important to understand the scope of a problem and ask clarifying questions. The same is true in a technical interview. Here are some clarifying questions you might ask:

  * **What data types should your function accept?** Should it only accept numbers or strings or another data type? Or should it be able to accept multiple data types?
  * **What data type should your function return?** Should it return a number, string, or something else?
  * **What exactly should the function do?** This could encompass a range of different questions. For instance, if you were asked to sort an array, should the array be assorted ascending or descending? Should the array sort numbers, strings, or both?

This stage of the interview is also a good time to collect your thoughts, think out loud, and take a moment to settle your nerves before moving to the next step.

### 2. Write clearly and use the whiteboard wisely
At this point, you are ready to start writing on the whiteboard. (If you are a remote student, you will probably not be using a whiteboard. See below for more pointers on whiteboarding remotely.) If you are in person and using a whiteboard, start in the upper left corner of the whiteboard. If you start in the middle of the whiteboard, you will run out of space, making it harder to present your function. We recommend taking a little time to practice writing code on a larger whiteboard if you have the chance. You will not be evaluated on penmanship but illegible writing will make it difficult for interviewers to evaluate your code. In addition, if you run out of space, you will either have to erase code you've written, try to cram your code into too small of a space (making it hard to read), or you might even have to resort to drawing arrows to blank spaces on the whiteboard so you can write more code. This can give the appearance that your code is disorganized and chaotic.

It's also important to put space between each line of code you write. You may realize that you need to add some code later and this will make it easier to add a new line between two lines of code you've already written.

### 3. Write down your inputs and outputs 
Next, write down your expected inputs and outputs on the whiteboard including the data type and an example. For instance, let's say you are asked to write a function that sorts an array. You've asked clarifying questions and you've determined that the function should accept an array of numbers and then return the sorted array. You would write the following on the board:

  * **Input:** An array of numbers [9,2,4,1]
  * **Output:** An array of numbers [1,2,4,9]

While this example happens to have the same kind of input and output, it's common for the input and output to be different.

Writing down an example confirms that you understand the prompt, and it gives you an input and output to test against when you review and summarize your solution after you are done writing it.

### 4. Consider edge cases
You will also need to consider edge cases. For instance, if we are expected to write a function that sorts an array of numbers, we might consider the following edge cases:

  * What if `null` is passed into the function?
  * What if a number is passed into the function in the form of a string?

This is an essential part of whiteboarding. Technical interviewers will almost always give problems that have special considerations or edge cases. At the very least, you should think about what your function should do if the wrong type of input is passed in as an argument. Consider edge cases before writing your algorithm — but be aware that you can always come up with more edge cases as you're whiteboarding your code.

### 5. Write your algorithm.
At this point, you are ready to write your algorithm. You will often be given the option to write your algorithm in the language of your choice. However, if the position you are applying for uses a specific language, you may be asked to code in that language. You will be expected to write your algorithm in JavaScript during your whiteboard technical interview.

As always, use descriptive variable names. They will help your interviewers — and you — understand your code. It's not uncommon for an interviewee's mind to go blank in the middle of an interview. If the code is clean, well-written, and easy to understand, it can guide you back into the flow.

If you don't remember the name of a function or method, you can use pseudocode. If you find yourself in a scenario where you can't code the algorithm in JavaScript or the language you started in, pseudocode is your final resort. At the very least, you can show your interviewers your thought process and your reasoning.

You won't be penalized for a missing semicolon or small syntax errors. However, bigger syntax errors can suggest fundamental misunderstandings. For instance, if you don't know the syntax for JavaScript's `map()` function, that could be more problematic.

As you write your algorithm, keep the following in mind:

* **Don't forget to think out loud.** As you write your code, you need to explain your reasoning out loud. This can be challenging at first — kind of like trying to pat your head and rub your belly at the same time. Practice helps. Make sure you speak clearly. Avoid using filler noises like "uh." It can also be helpful to take a little break in the middle of your code to check in — are your interviewers understanding you? Do they have any questions? This kind of interaction can also be helpful if you are feeling stuck and need a moment to figure out your next step.

* **Make eye contact.** This is important for several reasons. First, it gives you opportunities to connect to your interviewers. Remember, they are also evaluating whether they'd like to work with you. Second, it gives you an opportunity to "read the room." Do your interviewers understand what you are saying and doing or do they look confused? Third, it projects confidence. Ultimately, confidence is an intangible thing. It's difficult to practice improving confidence — and sometimes the feeling of confidence can abandon us at inopportune times. However, we can practice making eye contact and speaking clearly, two things that will help us appear confident.

* **Use correct technical terminology.** You do not need to be a programming whiz with an encyclopedic knowledge. However, you do need to know the basics. For instance, we might say, "I'll call the parameter to this function 'numValue.' This indicates that the function should take a number as an argument." Do not make up terminology. If you are not sure what something is called, then be as specific as possible but avoid vague language.

* **Don't apologize for your mistakes.** If you offend your interviewer or do something truly wrong (hopefully not!), by all means apologize. But don't apologize for being yourself and doing your best. Even if you feel you aren't doing your best, don't apologize for being yourself. Syntax errors, needing to pseudocode, or feeling nervous in an interview are not reasons to apologize. Once again, we want to try to appear confident regardless of how we might feel.

### 6. Summarize your code
Once you are done writing your algorithm, walk through your code line by line and explain what it does. During the process, you may see opportunities to fix or improve your code. 

We suggest using the example input and output you wrote at the start of the session (step #3) to manually test your code. Walk the input through your code and talk about the transformations that happen at each line — you _should_ arrive at the output, and if you don't it's a good indication that your code needs a second review.

### 7. Optimize your code. 
This is a more advanced step and you are not required to optimize your code for next week's technical interview. However, as you get more experience, you should look for ways to optimize your whiteboard code. For instance, there are many ways to sort an array and some are more efficient than others. If you used a brute force solution to sort an array, you might want to try implementing a [merge sort](https://en.wikipedia.org/wiki/Merge_sort) — or at least tell your interviewers about it.

## Whiteboarding Remotely

Students taking Epicodus remotely will follow a slightly different process than in-person students. Most remote students will screen share their code and type it in a text editor instead of using a whiteboard. Some employers do remote whiteboard sessions in this manner — and many others "whiteboard" using a computer — so "whiteboarding" with a text editor is good practice.

If you are doing a remote session to share your code, you'll need to consider the following points:

* **Make sure the desktop background is professional.** When sharing your screen, you may be in a situation where potential employers see your desktop. If this is the case, make sure the background image isn't distracting or inappropriate. The same goes for any files that may be showing on the desktop. A cluttered desktop with a lot of files can also be an issue — both if you need to find a file — and as a sign that suggests a lack of organization.

* **Troubleshoot your remote setup ahead of time.** Make sure that all tools work correctly, including your mic, camera, and any sharing software you are using. In the case of a potential employer, they may ask you to use a remote sharing tool you haven't used in the past. If so, make sure you know how to use it before your technical interview.

* **Take additional steps to ensure the interviewer understands you.** If you are screen-sharing code, you may or may not be on a video call with your interviewer. Especially if you're not on video, it will be harder to pick up any cues from the interviewer as to whether they can understand you. Be proactive and periodically check in with your interviewer and make sure that they can understand you and that there are no technical difficulties such as the screen freezing or the mic cutting out.

## Practice Makes Perfect

Ultimately, practice makes perfect. Take the time to practice whiteboarding on your own and with your peers. If you don't have a whiteboard handy, it's still useful to try writing a solution with pencil and paper. The process of solving coding problems without a computer is challenging at first — and it feels different both physically and mentally from the process of having a keyboard at your fingertips.
