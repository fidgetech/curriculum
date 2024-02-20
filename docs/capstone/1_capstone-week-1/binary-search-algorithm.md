---
title: "\U0001F4D3 Binary Search Algorithm"
id: binary-search-algorithm
slug: binary-search-algorithm
hide_table_of_contents: true
sidebar_position: 32
day: thursday
type: lesson
url: 'https://github.com/fidgetech/capstone/blob/main/binary_search_algorithm.md'
---

In this lesson, we'll explore an important algorithm known as **binary search**. You have probably used a binary search algorithm before — in fact, you probably used one when you were a kid.

Did you ever play a number guessing game? Maybe someone asked you to guess a number between 1 and 100. If you guess incorrectly, you'll get a clue. Either the actual number is higher than the one you guessed or lower.

In this game, what number would you say first? Would it be a good idea to start with the number one? If not, why not?

If you want to consistently guess the number as quickly as possible, you probably intuitively know that the first guess should be fifty. Then, once you learn whether your guess is too high or too low, you've reduced the possible numbers by half — now you only have fifty numbers to worry about. At that point, if the number is lower, you might try to find the halfway point again and say twenty-five, reducing the range of numbers yet further. This approach is sometimes considered a divide-and-conquer approach. It's also exactly how a binary search works.

On the other hand, if you guess the number one and it's incorrect, you haven't really narrowed the range of possibility very much. There are still ninety-nine numbers to go.

If we were to start at the number one and then gradually count our way up, we would be **brute-forcing** the answer. It's a terribly inefficient approach. Sure, it's possible that we'll get the number right on the first try — but it's equally possible that we'll have to make ninety-nine more guesses to get the right number.

A computer program can make a hundred guesses very rapidly. But what if the goal is to guess a number between one and a billion? If we were to use the divide and conquer approach (a binary search), it will take _no more than thirty guesses_ to get the correct number. That is an excellent improvement in performance — especially since if we started from the number one, we'd likely have to count hundreds of millions of times to guess correctly.

Now that you know the basics of a binary search function, see if you can try writing one on your own. Given the following prompt, start by trying to write a brute force algorithm (one that counts from the first element) and then try to write a binary search algorithm.

Here's the prompt. Write a function that determines whether a sorted array includes a specified value. If the array doesn't include the value, the function should return `-1`. Here's an example of how this might look:

```js
const sortedArray = [3, 9, 14, 34, 45, 56, 63, 72, 88, 101, 132, 151, 168, 192];

binarySearcher(14, sortedArray)
// This function call should return 2 because the number 14 is at position 2 of the array.

binarySearcher(361, sortedArray)
// This function call should return -1 because the number 361 isn't included in the array.
```

Start by trying to write the function using a brute force approach. Then try writing a function that solves the problem using a binary search algorithm.

Don't worry — if you are stumped, we are going to include both approaches below. (At the very least, you should be able to solve the brute force approach quickly.) Before we continue, notice that we named the array above `sortedArray`. That's because a binary search function will only work if a collection is sorted. In the case of a number guesser, the numbers 1 to 100 are sorted. If we were asked to guess a food instead, we'd have to use a brute force approach — guessing until we come up with the right food. There is no way to sort food — unless we were doing so alphabetically, in which case we could then use binary search after all.

Let's start with the brute approach, which is much easier. 

```js
function bruteForceSearcher(number, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1
}
```

In our `bruteForceSearcher()` function, we just use a `for` loop which looks at each index of the array until it finds a match. If it finds a match, it returns the index. If it doesn't, it returns `-1`. We use a `for` loop here because at least we can break out of it if we find a match. While it's not a very efficient function, it would be even less efficient if we used `Array.prototype.forEach()` and had to iterate through every element even if we found a match.

If we tried this approach in a whiteboard interview, it would be very clear that we didn't know much, if anything, about computer science. Part of the reason why this is a fairly common question in whiteboard interviews is because it gives interviewers a chance to see if you know any search algorithms. If an interviewer asks you to write an algorithm that finds a number in an array, they probably won't tell you that the number is sorted. That's why this needs to be one of your first questions in this situation: "Is the array sorted or not?" If it is, you can use a binary search!

So now let's look at a binary search approach. If you haven't tried it out (or are stumped), here are a few hints to get you started if you want to try to find an answer on your own.

* We aren't going to be able to use a `for` loop or an `Array.prototype.forEach()` loop to solve this problem. That's because we don't want to loop through every element in the array!
* There are a few other approaches we can take instead. We can use a while loop or we can solve the problem recursively.
* In order to solve this problem, we need to keep track of three pieces of information: a lower number, a middle number, and an upper number. Let's place this in the context of the guessing game where we are trying to figure out a number between 1 and 100. Take a look at the chart below to see how we'll get to the correct number.

| Lower Number | Upper Number | Middle Number (Our guess) | Higher or lower? |
|--------------|--------------|---------------------------|------------------|
| 1            | 100          | 50                        | Higher           |
| 51           | 100          | 75                        | Lower            |
| 51           | 74           | 62                        | Correct!         |

Our first guess is halfway between 1 and 100. In other words, `let middleNumber = (lowNumber + highNumber)/2`.

When we learn that the number is higher than our guess, we need to adjust the lower number. After all, we've just eliminated all numbers from 1 to 50. The upper number doesn't change, though, because we haven't eliminated any numbers that are greater than 50.

That means that for our next guess, `lowNumber = 51` and `middleNumber = (51 + 100)/2`. This isn't quite a whole number, so to make this work in JavaScript we need to use something like `Math.floor()`, which will round the number down to the nearest whole number. That makes our new middle number 75.

Next, we learn that the number we need to guess is lower. We've now eliminated all numbers between 75 and 100. That makes our range a number between 51 and 74, which means `middleNumber = Math.floor((74 + 51)/2))`. Our guess is 62, which is the correct number.

Even if it weren't the correct number, our range would eventually narrow until there is only one possible value.

At this point, we can see that our algorithm needs to determine a `middleNumber`, determine whether that `middleNumber` is higher or lower than the number it's looking for, and then adjust the range accordingly, creating a new `middleNumber` in the process.

If you haven't come up with a solution to the prompt above yet, now is a good time to try again with the additional information you have. If you are still stumped, we're ready to move onto a pseudocoded answer. Why pseudocode instead of going immediately to JavaScript? Well, it's more important that you understand what a binary search algorithm is doing — less important is the language we do it in.

Remember, we want to see if a value exists in a sorted array or not. If it does, we return the index where the value exists. If not, we return `-1`.

Here's the solution in JavaScript:

```js
function binarySearch(numberWeWantToFind, arrayWeAreSearching) {
  let lowerIndex = 0; // The beginning index of an array will always be 0.
  let upperIndex = arrayWeAreSearching.length - 1; // The total number of elements in the array.
  // Next, we need our while loop. Note the condition. If the lowerIndex is ever greater than the upperIndex, that means that we've searched the entire array and the value isn't included. We can stop the loop and move on.
  while (lowerIndex <= upperIndex) {
    let middleIndex = Math.floor((lowerIndex + upperIndex)/2);  // We need to add the lowerIndex and upperIndex together and then divide them by 2 to determine the current middleIndex. We also need to round down to the nearest whole number if necessary. This will happen each time through the loop.
    if (arrayWeAreSearching[middleIndex] === numberWeWantToFind) {
      // This means we've found the number! We can just return the middleIndex.
      return middleIndex;
    } else if (arrayWeAreSearching[middleIndex] < numberWeWantToFind) {
      // This means that the number we are looking for is higher than the element in the array. We can eliminate every number that is less than or equal to middleIndex. To do that, we make the lowerIndex equal to middleIndex + 1.
      lowerIndex = middleIndex + 1;
    } else if (arrayWeAreSearching[middleIndex] > numberWeWantToFind) {
      // This means that the number we are looking for is lower than the element in the array. We can eliminate every number that is greater than or equal to middleIndex. To do that, we make upperIndex equal to middleIndex - 1.
      upperIndex = middleIndex - 1;
    }
  }
  // Note that we don't use an else condition just in case some other yucky thing we can't predict happens. Also if our loop never returns anything, it will end and return -1.
  return -1
}
```

The comments are pretty self-explanatory here, but we'll walk through this function briefly:

* We need to have a `lowerIndex`, `middleIndex`, and `upperIndex`. The `lowerIndex` will always start at 0 because that is the first position in an array. The `upperIndex` will always start at `array.length - 1` because that's the position of the last element. That makes it easy to determine the `middleIndex` with `Math.floor((lowerIndex + upperIndex)/2)`. Note that the `middleIndex` needs to be updated each time through the loop. Just as a human would need to make a new guess each time they don't correctly determine the number, the same is true for the algorithm. At the beginning of each new iteration, the algorithm makes a new "guess."
* Next, the loop will run while `lowerIndex <= upperIndex`. This can be a bit hard to visualize at first but once the `lowerIndex` is the same as the `upperIndex`, we've either landed on the correct number or the number doesn't exist in the array. We can think of this in terms of the guessing game. We'll simplify it so it's a number between 1 and 4. If we guess 3 and we learn that the number is higher, it must be 4. That's because the lower number now matches the upper number. The same is true when thinking of indices in an array. The difference, however, is that it's possible for our algorithm either to find the correct value or to determine that the value doesn't exist in the array. If it doesn't exist in the array, the loop ends and the function returns `-1`.
* There are three conditions in the loop. If the array element matches the number we want to find, we've got a match! We just need to return the `middleIndex`, which is the equivalent of our guess in the guessing game.
* If the value of the element in the array is _less than_ the number we guessed, we can eliminate every number that's _less than or equal to_ `middleIndex`. That's because we know `middleIndex` isn't the number we are looking for — and we also know that the number is higher than `middleIndex`. All we have to do is update the `lowerIndex` to be equal to `middleIndex + 1`.
* On the other hand, if the value of the element in the array is _greater than_ the number we guessed, we can eliminate every number that's _greater than or equal to_ `middleIndex`. All we have to do is update the `upperIndex` to be equal to `middleIndex - 1`.
* Then the loop runs again. Note that we don't have an `else` statement. If none of the conditions are met, we might want to add one that returns some kind of error handling just in case. 

So that's one approach to solving the problem. Another option is to write a binary search function that works recursively. When a function is recursive, that just means it calls itself until a condition is met. Recursive functions are common in functional programming. Also, in a whiteboard interview, solving a problem recursively is another opportunity to show your knowledge.

Here's the same problem solved recursively:

```js
function recursiveBinarySearch(number, array, beginIndex = 0, endIndex = array.length - 1) {
  let middleIndex = Math.floor((beginIndex + endIndex)/2);
  if (array[middleIndex] === number) {
    return middleIndex;
  } else if (beginIndex >= endIndex) {
    return -1
  } else if (array[middleIndex] < number) {
    beginIndex = middleIndex + 1;
    return recursiveBinarySearch(number, array, beginIndex, endIndex);
  } else if (array[middleIndex] > number) {
    endIndex = middleIndex - 1;
    return recursiveBinarySearch(number, array, beginIndex, endIndex);
  }
}
```

Note that our function now has additional parameters. Each time the function calls itself, all the variables that have been defined will fall out of scope. In this case, it means we need to add parameters for the `beginIndex` and `endIndex` so they can be passed along into the next function call. However, we can add default arguments for our `beginIndex` and `endIndex`. Because we know our `beginIndex` will always be 0, we add that as a default argument. And because we always know what the `endIndex` will be (`array.length-1`), we can add that as a default argument, too. That means a user can still call this function as if it has just two arguments. If it's not fully clear yet why we need these additional default arguments, we'll cover it in more detail in a moment.

In our function, we start by defining our `middleIndex`. We don't need to pass that in as a parameter because we will always have the information we need to determine the `middleIndex` — the beginning and ending index, which are passed into the function as parameters.

The first two conditionals should look relatively familiar. If `array[middleIndex] === number`, we have a match and we can return the `middleIndex`.

Next, if `beginIndex >= endIndex`, we know that the array doesn't include the value we are looking for. As we discussed with our first solution, once the `beginIndex` is greater than or equal to our `endIndex`, we've landed on the final place in the array that could be the number, only to learn that it isn't the specified number, which means the number isn't in the array.

Even the next two conditionals are somewhat similar to the way they were before. We start by determining whether our `beginIndex` or `endIndex` needs to be modified. Once these have been modified accordingly, we call our function again with the following:

```js
return recursiveBinarySearch(number, array, beginIndex, endIndex);
```

Remember, our function always needs to return something. That includes if the function is called recursively! If we don't return the function, it will still (mostly) work correctly, but when we actually need to return `middleIndex` or `-1`, the function will return `undefined`!

If this seems confusing, think about it this way:

```js
function nothingReturns() {
  returnsSomething();
}

function returnsSomething() {
  returns "something!"
}
```

In the example above, when `returnsSomething` is called by `nothingReturns`, it will return `"something!"` _to_ the `nothingReturns` function. Unless `nothingReturns` _itself_ returns `returnsSomething`, `"something!"` will just remain trapped inside `nothingReturns`. The same is true even when a function is calling itself. A function must always return something unless it has side effects. A side effect is some alteration the function makes _outside_ of itself — such as altering the DOM or updating an object.

When we recursively call `recursiveBinarySearch`, we can then pass in all the parameters it will need for the next function call — the `number`, `array`, `beginIndex`, and `endIndex`. The next time through the function, the `middleIndex` will be determined once again.

In this lesson, we've learned about binary search algorithms, including two approaches to writing a binary search algorithm. One approach uses a `while` loop, while the other is recursive. The binary search algorithm is an important computer science concept so make sure you understand the basics. It's a good idea to memorize this algorithm — so once you learn it, try writing one out a few times from memory.