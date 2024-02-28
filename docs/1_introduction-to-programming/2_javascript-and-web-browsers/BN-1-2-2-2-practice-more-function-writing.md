---
title: '✏️ 1.2.2.2 Practice: More Function Writing'
day: tuesday
id: 1-2-2-2-practice-more-function-writing
hide_table_of_contents: true
---

**Goal:** Continue practicing writing and calling custom functions. It is simply additional practice. You may speak with your instructor about these extra prompts, if you feel comfortable enough with the concepts to move on.

* Follow the [Calculator Business Logic Exercise](/introduction-to-programming/javascript-and-web-browsers/1-2-1-15-practice-calculator-ui-and-business-logic) in order to write your code in VS Code, while launching it in the browser with an HTML file.
* Remember to use descriptive variable names and be mindful of your indentation.
* Don't forget to make regular commits and push to GitHub.

## Code
---

These prompts are created in order of easier to more challenging. Read through each prompt with your pair and pick which one interests you the most. Pick just one prompt to complete. If you have additional time at the end of your class session, then come back to this classwork and choose another prompt to complete.

### Temperature Conversion App

Write a function that converts temperature between Celsius and Fahrenheit. You can do this in the DevTools console, or create a project in VS Code like we did for the calculator app.

### Cooking Units Conversion App

Write functions to be used by a cooking app that convert between units. For example:

* A function that converts between ounces (oz) and pounds (lbs) to grams (g).
* A function that converts teaspoons (tsp), tablespoons (tbsp), and cups to milliliters (ml). 
* A function that converts gallons to liters. 

Do some research online about what conversion you want to do. You can convert between imperial and metric measurement systems, or convert between dry weights and liquid volumes. 

Create a project for this like you did for the calculator project.

### Cipher

Practice writing functions for encoding a sentence from your user, as if you wanted to keep someone from reading it. To complete this exercise review previous lessons and the JavaScript methods we've covered thus far. Create a JavaScript file and an HTML file in VS Code for this project so that you can load your JavaScript in the browser, just like we did for the calculator project.

* Start by prompting your user to enter a sentence. Then, store the sentence in a variable and display it to the user.

* Next, create a function that will take the first and last letter of the sentence, capitalize them, and return this as a new string.

* Create another function that will reverse the order of these two letters and return the result.

* Create a third function that calls the other two functions you've just created. For example, if I enter the sentence _"I am a sentence"_, it should enter your first function (which should output _"IE"_),  then call your second function, passing in the output value from the previous. It would return _"EI"_ to me.

* Add code to your third function to concatenate the new two-letter string together with the original phrase. It should add the two-letter string at the end, forming the final result "I am a sentenceEI."

* Create a fourth function to count the number of letters in the original sentence, divide it by two (rounding down if necessary), and output the letter at this index. Concatenate this letter at the beginning of the original sentence.  For example, if _"I am a sentence"_ is my original input, and it has 15 total characters in it. If I divide this by 2, I get 7.5, which rounds down to 7. The letter at the 7th position in the sentence is _"s"_. So my final result is _"sI am a sentenceEI"_.

* Bonus: Take the final result and reverse it: _"IEecnetnes a ma ls"_.

**Note:** It may seem somewhat impractical to create multiple functions for the cipher program, but writing multiple functions that have the ability to call each other will prepare you to write code in small, manageable chunks. This makes code easier to debug, and complex problems easier to approach. Rather than attempting to do everything all at once, we break things down into little pieces!
