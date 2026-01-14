---
title: "📓 3.1.0.7 Imperative Versus Declarative Programming"
day: weekend
id: 3-1-0-7-imperative-versus-declarative-programming
hide_table_of_contents: true
---

Up to this point, we've mostly used an **imperative** style of programming. **Imperative programming** is when we tell our program exactly what we want to do and how we want it done. This means explicitly stating all the steps needed to get to an end result.

This is in contrast to the **declarative** style of programming, which is preferred when we write functional code. **Declarative programming** is when we tell our program what the end result should be and then let our program decide the best way to achieve this result.

Let's use an example to demonstrate the differences between these two techniques. Let's say we are leaving instructions so our friend can do their laundry.

Here's how we'd do this from an imperative perspective:

1. Open the washing machine.
2. Add clothes.
3. Add one cup of laundry detergent.
4. Close the washing machine.
5. Set the water temperature to warm.
6. Turn the knob to start.
7. Pull the start knob to begin washing.

Here's how we'd do the exact same thing from a declarative perspective:

1. Wash the clothes.

In the first example, we give very specific instructions on how clothes should be washed. Our program will follow each step, which will lead to the desired end result. In the second example, we simply tell the program what to do — wash the clothes — and let our program handle the steps it takes to reach that result. 

:::tip[Important Clarification]
The steps don't disappear in declarative programming—
they've just been written once and packaged up for reuse. Someone had to program 
the washing machine to know how to wash clothes. But once that's done, everyone 
can use "wash clothes" without rewriting those steps.

This is exactly what happens with JavaScript methods like `map()`. Someone wrote 
the looping logic once, and now we can reuse it. The benefit isn't that the steps 
vanish—it's that we only write them once, test them once, and then focus on our 
specific problem (like doubling numbers) instead of rewriting loops over and over.
:::

We've actually written declarative code before. For instance, when we write HTML, we don't describe where each individual pixel on the screen should be placed. Instead, we describe what the end goal is. When we create an `<input>` field, we're saying "place a form input here." We aren't saying "create a box roughly x pixels high and y pixels wide here, add a cursor if the user clicks on it, and then make sure the box has functionality to accept user text input." We only have to describe the end goal, not every single step required to reach that end goal.

We've also used declarative programming in JavaScript. `map()` is an excellent example.

From an imperative perspective, we could double each element in an array like this:

```js
const originalArray = [1,2,3];
let doubledArray = [];
for (let i = 0; i < originalArray.length; i++) {
  doubledArray[i] = originalArray[i] * 2;
}
```

Here we instruct our code to create an empty array called `doubledArray`, iterate over each element in our `originalArray`, double each of those elements, and then push them into `doubledArray`.

With `map()`, however, we let JavaScript handle most of the work:

```js
const originalArray = [1,2,3];
const newArray = originalArray.map(function(element) {
  return element * 2;
});
```

Here, we simply tell the program to complete a transformation (`map()`) that doubles every element by 2. We don't state every step explicitly. As a result, our code is cleaner and easier to read.

:::tip[Key Insight]
Both styles execute the same steps internally. The difference is 
*where* those steps are written.

With `map()`, someone already wrote the looping logic once, tested it, and made it 
reusable. Now you can:
- Focus on your actual problem (doubling numbers) instead of loop mechanics
- Make your intent immediately clear to other developers
:::

While imperative code is sometimes necessary, declarative code is widely considered more reusable, readable, and easier for programmers to collaborate on. We will favor this style of coding when we build functional programs.
