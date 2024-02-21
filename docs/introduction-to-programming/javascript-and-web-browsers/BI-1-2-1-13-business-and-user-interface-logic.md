---
title: "📓 1.2.1.13 Business and User Interface Logic"
id: 1-2-1-13-business-and-user-interface-logic
hide_table_of_contents: true
day: monday
---

Well-organized code is easier to debug, it appears more professional, and is easier to revisit later. Writing organized code is a highly-valued skill in the programming field. When working on a team, you'll often collaborate with other developers. Clean code is easier for others to understand and contribute to. Before we begin writing more complex JavaScript, let's make sure we understand how to organize our code using the best, most professional practices from the very beginning.

One of the most important organizational rules to follow is keeping what is known as your user interface and business logic separate. In this lesson we'll explore what user interface and business logics are, and what each handles.

## User Interface and Business Logics
---

Consider a basic calculator application. Its code falls into two categories: Code that performs calculations, or code responsible for interacting with the user.

The code that handles arithmetic is the **business logic**. It's the 'inner workings' of the application that performs calculations and returns a value. It's what takes the numbers `4` and `5`, adds them together, and arrives at `9`. The `add()` function we've created is a business logic function.

The code that handles interacting with users is the **user interface logic**. It retrieves and displays information from the user and provides it to the business logic to calculate. While buttons on a calculator may be _labeled_ with numbers, they're just visual buttons. User interface logic is what translates clicking on this area of the page:

![button-on-calculator](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week2-js-jquery/button-on-calculator.png)

... into the number `4`.  After all, we cannot perform addition on _buttons_, but you can perform addition on _numbers_. The user interface logic registers that the user has pushed the button labeled "4". It then provides the number `4` to the business logic where we may perform calculations with it.

Let's say we also press the buttons labeled "+" and "5". The user interface logic also translates these interactions into the number `5` and recognizes it will need a method for addition. The business logic then adds the numbers `4` and `5` together, and returns `9`. The user interface logic can then display this result to the user:

![result-from-calculator](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week2-js-jquery/result-displayed-from-calculator.png)

User interface logic handles interacting with the user including displaying or gathering information. The business logic handles calculating or manipulating information behind the scenes.

## Separation of Logic
---

Our goal is to write clean, well-organized code. **Because user interface and business logic have separate purposes, their code should always be separate**. Keep this rule in mind as we begin to explore event handling in the coming lessons.

You may be wondering about `window.prompt()` and `window.alert()`. These are both considered user interface logic, because they handle gathering and displaying information to the user. However, `window.prompt()` and `window.alert()` really shouldn't be in our code at all — very few users like to be prompted or alerted (and both now have strong associations with hacky sites and malware). We've been using these `window` methods because they are the easiest way for beginners to get a user response, and we will continue to use them for a little while longer because they are so easy to use — but be aware they should generally be avoided.

At this point, it's okay if everything we discussed isn't entirely clear right now. Just understand the basic differences between these two logics, and know they should be separate. Throughout the section, we will see what this actually looks like in practice. By keeping this basic information in mind _before_ we write more complex JavaScript, you'll learn the most professional practices from the very beginning!
