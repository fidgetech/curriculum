---
title: "✏️ 1.2.1.8 Activity: Intentional Failure × Read the Error"
day: monday
id: 1-2-1-8-activity-intentional-failure-and-reading-the-error
hide_table_of_contents: true
---

In the last lesson, we practiced reading errors in the DevTools console. Now let's get some deliberate practice with a twist: instead of debugging a mistake *you* made, you'll debug code that's *intentionally* broken.

## Errors Are Information, Not Crisis

---

When beginning developers see a red error message, it's common to feel a jolt of panic — like something has gone badly wrong. But an error message isn't a crisis. It's information. JavaScript is telling you something specific about what it expected versus what it found. The faster you can treat errors as clues instead of failures, the faster you'll become comfortable debugging — which is a skill you'll use every single day as a developer.

This activity gives you five intentionally broken code snippets. Your job isn't to panic and Google the first Stack Overflow answer you find — it's to slow down, observe, and practice a repeatable process for understanding *why* code breaks before you fix it.

## In this lesson

---

- Practice a repeatable 6-step process for approaching broken code
- Work through 5 snippets, each with a different common beginner bug
- Practice using AI to help you understand an error — without asking it for the fix
- Reflect on your debugging process with your pair or group

> **AI Support:** This activity is designed around using AI as an explanation partner, not a fix-it button. In each step below, you'll ask AI to help you understand what's happening — never to hand you corrected code. Before asking, check: [Do I have the license for this?](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech#activity-2-do-you-have-the-license-for-this) See [Using AI Responsibly at Fidgetech](../../pre-work/getting-started-at-fidgetech/1-0-0-13-using-ai-responsibly-at-fidgetech) and [How to Ask for Help](../../pre-work/getting-started-at-fidgetech/1-0-0-07-how-to-ask-for-help).

## The 6-Step Process

---

For **each** of the 5 snippets below, work through these steps in order. Don't skip ahead to fixing the code before you've completed steps 1–4!

1. **Observe.** Read the code carefully *before* running it. Don't run it yet.
2. **Predict, then run.** Write down (on paper, in a notes doc, or out loud to your pair) what you think will happen when this code runs. Then actually run it and see what happens.
3. **Ask AI to explain — not fix.** Copy the error message (or the unexpected output) and ask AI to explain what it means in plain language. Do **not** paste the whole snippet and ask AI "what's wrong with this" or "fix this."
4. **Hypothesize.** Based on AI's explanation and your own read of the code, write down in your own words what you think is causing the bug.
5. **Fix it yourself.** Now, and only now, try correcting the code so it works as intended.
6. **Debrief.** Compare your hypothesis in step 4 to the actual fix. Were you right? What surprised you?

> **Example prompts for Step 3:**
> - Weak: "Here's my code, what's wrong with it?"
> - Strong: "I got `Uncaught ReferenceError: myAge is not defined`. Can you explain in plain language what a ReferenceError means and 2–3 common reasons it happens — without telling me what's specifically wrong in my code?"

## Snippet 1: Undefined Variable

---

```javascript
function greetStudent() {
  const studentName = "Jordan";
  console.log("Welcome, " + studentNam + "!");
}

greetStudent();
```

Work through the 6-step process above with this snippet.

## Snippet 2: Missing Return

---

```javascript
function addTax(price) {
  const total = price * 1.08;
}

const finalPrice = addTax(20);
console.log("Your total is $" + finalPrice);
```

Work through the 6-step process above with this snippet. (Hint: this one won't throw a red error — remember what we learned about `undefined` showing up without an error message!)

## Snippet 3: Wrong Types (Coercion Surprise)

---

```javascript
const firstNumber = window.prompt("Enter a number: ");
const secondNumber = window.prompt("Enter another number: ");

const sum = firstNumber + secondNumber;
window.alert("The sum is: " + sum);
```

Work through the 6-step process above with this snippet. Try entering `5` and `5` when prompted — what do you expect the alert to say, and what does it actually say?

## Snippet 4: Off-by-One

---

```javascript
const word = "fidgetech";
const lastLetter = word.charAt(word.length);

console.log("The last letter is: " + lastLetter);
```

Work through the 6-step process above with this snippet. (Hint: this one won't throw an error *or* return `undefined` — remember, not every bug announces itself loudly!)

## Snippet 5: Mismatched Brackets

---

```javascript
function calculateArea(width, height) {
  const area = width * height;
  return area;

console.log(calculateArea(4, 5));
```

Work through the 6-step process above with this snippet. (Hint: this error will point you to a line number that might not be exactly where the *real* problem is — that's normal for syntax errors!)

## Debrief Questions

---

Discuss these with your pair, dev team, or in Scrum:

- Which snippet was hardest to diagnose, and why? Was it the type of bug, or the type of error message (or lack of one)?
- Did AI's explanation match the hypothesis you wrote down in step 4? If it didn't at first, what did you do next?
- What patterns do you notice across these five bugs? Have you already run into a similar one in your own code this week?
- How did it feel to debug code that wasn't yours, that you knew was broken on purpose? Did that change how you approached it compared to when you find a bug in your own project?
- What's one debugging habit from this activity you want to carry forward into your independent project?

## Checkpoint

---

Before moving on, you should be able to:

- [ ] Explain why treating an error as "information" instead of "crisis" changes how you approach debugging
- [ ] Describe the 6-step process in your own words
- [ ] Identify the difference between a syntax error, a reference error, and a bug that produces `undefined` with no error at all
- [ ] Write an AI prompt that asks for an explanation of an error, without asking for the fix

If you're unsure, re-read the sections above or ask AI: "Can you explain the difference between an error that stops my code from running and a bug that just gives me the wrong value — without giving me an example fix?"
