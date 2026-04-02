---
title: "\U0001F4D3 Memory Basics"
id: memory-basics
slug: memory-basics
hide_table_of_contents: true
sidebar_position: 44
day: thursday
type: lesson
url: 'https://github.com/epicodus-curriculum/capstone/blob/main/memory_basics.md'
---

During your time at Epicodus, you've learned about storing data in variables, collections such as arrays and objects, and in databases. But we've never covered how our machines store this information. In this lesson, we'll cover the basics of how these things are stored in our machine. We'll start by looking at how a low-level language like C or C++ stores various pieces of information in either a stack or a heap. We'll also learn a bit more about **garbage collection**, the process of removing variables that are no longer in scope, and **memory leaks**, which is when variables and other code we are no longer using remain in memory (kind of like old food in the fridge that just takes up space).

You might wonder why we are going to concern ourselves with how low-level languages like C and C++ do things. After all, we have focused only on learning high-level languages like JavaScript at Epicodus. Well, when we use Chrome or Node, we are utilizing the V8 engine — which is built with C++. So on a deeper level, we _are_ utilizing low-level languages, which means it's good to know a little bit more about how they work. If we were working on a computer science degree, we'd go all the way to the level of machine language by learning about the assembly language. We aren't covering assembly in this course but it's still useful to see how our code works on a deeper level beyond JavaScript. In this case, we'll start by looking at random-access memory, then we'll look at how C and C++ handle memory, and then finally we'll take a look at what the V8 engine does.

## Random-Access Memory (RAM)

Most people that own a computer have at least a passing familiarity with the term RAM (random-access memory). Generally, we know that the more RAM a computer has, the faster it is — and the more programs it can handle. But what is RAM exactly? And how does it differ from other memory storage on our computer?

Well, in general, a computer has two kinds of memory. RAM is used to run tasks while our hard drive is used to store files. We can use the analogy of a person working on a project. As that person works (and perhaps multi-tasks), all the brain power they're using at that moment is like RAM. Meanwhile, all the other stuff that's being stored (childhood memories, vague recollections of algebra) is that person's storage drive.

Likewise, when we write a program and save it, that program is stored on our computer's storage drive (or in the cloud, on a flash drive, or wherever we might choose to store it). 

When we execute our program, it needs to be loaded into the machine's RAM. Whether we are using the internet, running programs we've written, writing a paper, or playing a video game, all kinds of code is running behind the scenes — and the function calls, variables and temporary data our program uses are all being stored in the machine's RAM.

You've probably experienced a significant slow-down with a computer before when too many programs are running — or when we have too many windows open in a browser. Often, that occurs because we are running out of RAM. The way to fix the problem is to either close out the programs (use less memory) or get more RAM installed (have more memory to deal with all the programs).

So let's say we run a JavaScript program we've written. The program has a variable called `userInput`. First, this program needs to be loaded into the random-access memory of the machine. If there's not enough RAM, only part of the program will be loaded into RAM and the rest will be kept on the storage drive and pulled from as needed. As you might imagine, this slows down the execution of the program significantly.

The JavaScript interpreter will convert the variable from JavaScript all the way down to bits. In a compiled language, a compiler will do this conversion. We won't look too deeply into this conversion — thankfully our machines do the heavy lifting for us.

The memory itself is organized into **memory addresses**, also known as **addresses**. Each memory address holds one byte of data. (A quick reminder — a byte is 8 bits of data.) Memory addresses are sequential and we can think of them as being like street addresses. When someone delivers mail, they know where it should go because they simply have to go to the correct street address. So when our machine gets a piece of code that needs to be stored in RAM, it uses the memory address to determine where it should go — or where it should be retrieved from as needed.

Within RAM, there are two regions of memory: the stack and the heap. It's important to note that while the stack is similar to the data structure we've learned about (which is LIFO), the heap is just a name for the other region of memory — and it isn't actually stored in a heap data structure.

## Stack Memory Versus Heap Memory

The stack memory is a linear data structure, which means that it is stored sequentially. When we call a function, the function and the variables inside that function are stored in stack memory. Stack memory is allocated and deallocated for us automatically. But what does that mean? Well, our machine will assign it as needed and then remove it when it is no longer needed and we don't have to worry about it. For instance, when we call a function, the variables in that function automatically are in scope. That is the memory being allocated. Then, when the function is complete, the variables in that function fall out of scope. That is the memory being deallocated. We don't need to tell the stack memory to add or remove these variables — it will take care of that for us. Stack memory is much faster than heap memory. One downside of stack memory, though, is that it's much smaller than heap memory, and if we're not careful, we can end up with a stack overflow, especially if we are calling functions recursively.

On the other hand, heap memory is a hierarchical data structure. It's not stored sequentially — instead, it's stored in relation to other data. This is where dynamic variables such as global variables are stored. Also, a low-level language like C can manually allocate variables to the heap. It's slower than stack memory because there's no easy way to just grab values from the heap, unlike with stack memory, where we can just look at the top of the stack and grab what we need.

You might think that it's as simple as local versus global when it comes to determining stack versus heap storage but it's not. We also need to look at **value types** versus **reference types**.

A **value type** is a single space in memory in the stack where a value as stored. These include primitives such as numbers and strings.

Meanwhile, **reference types** contain pointers to where an object is stored in memory. The object itself (such as a JavaScript array or basic object) is stored in the heap. But if we're using good coding practices, the pointer is probably being stored in a local variable in a function — which means that the reference is being stored in the stack while the array or object is being stored in the heap. Since dynamic variables are stored in the heap, it makes sense that the arrays and objects we create in JavaScript would be stored there as they can often change.

Unlike with stack memory, heap memory isn't automatically deallocated. We either need to do it manually (such as in a low-level language like C) or have an interpreter or compiler handle it for us in a high-level language like JavaScript.

## How C and C++ Handle Memory

We are skipping over the bits and bytes aspect of memory allocation and deallocation — and we are also skipping over assembly language and machine level code — but we won't jump all the way up to a high-level language like JavaScript just yet.

Instead, let's look at a key difference in how a low-level language like C or C++ handles memory. As we've already mentioned, stack memory is handled automatically in RAM. However, heap memory is not. In the case of a low-level language like C++, we need to allocate and deallocate memory in the heap manually. If we don't, we'll run into memory leaks. We will talk more about memory leaks later in this lesson.

When we want to allocate a certain amount of memory with C or C++, we can do so with the `malloc` function. (You don't need to memorize this — what's more important is the process that occurs.) The `malloc` function allocates a _specific_ number of bytes. We might do something like this:

```c
pointer = (int *) malloc (100);
```

Here, we are creating a number (`int`) and then allocating 100 bytes in the heap memory to store this number. We store this in a `pointer` variable, which will allow us to access this number later — and also deallocate memory as necessary.

Meanwhile, the `realloc` function increases or decreases the size of a memory block while the `free` function releases memory back into the system. So if we wanted to free up the memory that `pointer` references, we'd do the following:

```c
free(pointer);
```

If we forgot to free up this memory — but we were no longer using the integer in our program — we'd have a memory leak. Add up enough memory leaks and performance will be significantly impacted.

## JavaScript and V8

So now we're at the level of JavaScript. To run JavaScript, we need to use a JavaScript engine to compile our code. Traditionally, JavaScript engines were interpreters but they now use JIT (just-in-time) compilation, which is faster. Throughout our time at Epicodus, we've primarily run JavaScript in Chrome (if we're running applications in the browser) or in Node (if we are running tests with Jest or using the Node REPL). Chrome and Node use the V8 engine — which is built on C++. As we mentioned at the beginning of this lesson, that's why it's helpful to know a little bit more about what's happening under the hood!

JavaScript primitives are value types. Meanwhile, arrays, objects, and functions are reference types. For the latter, that means that when we create a reference type, we are creating a variable that is a pointer that will be stored in stack memory (unless it's a global variable) while the object itself (arrays and functions are both objects in JavaScript) will be stored in heap memory.

So let's say that we call the following function:

```js
function doesSomething() {
  let array = [];
  // Do stuff with array.
  return somethingElse;
}
```

When this function is called in a program, the variables inside `doesSomething()` will go on the stack memory. When we assign `array`, a new array will be created in heap memory and a pointer to that array (the `array` variable itself) will be stored in stack memory because it's a local variable. JavaScript will automatically do the memory allocation for us — and will do so whenever a variable is declared.

We'll do some computation with the array and then return `somethingElse` from the function. At that point, we are done with the function call — and the local variable. So what happens next? Well, high level languages like JavaScript manage memory via **garbage collection**. Garbage collection just means that when a program no longer needs memory, it will automatically be deallocated for us. Generally, high-level languages include garbage collection.

How does JavaScript know whether a piece of memory should be garbage collected? Well, traditionally JavaScript and other languages would count references. If an object ever has nothing else referring to it, it's no longer being used, meaning that object will be garbage-collected. After all, if there are no references to an object (such as a variable), we have no way of accessing it.

However, this method of garbage collection doesn't work for circular dependencies. For example, if one object refers to another and that second object refers to the first — they will both always have at least one reference, meaning they'll never be garbage-collected.

At this point, modern browsers and V8 use a mark-and-sweep algorithm. This algorithm simple determines whether a variable or object is still reachable or not. If it isn't reachable, it's garbage-collected. At this point, we have enough knowledge that we could write a mark-and-sweep algorithm ourselves if we wanted by applying graph theory and writing either a DFA or a BFA.

So if we return to the `doesSomething()` function above, when the variables inside the function fall out of scope, the `array` variable will be removed from the stack memory. Then, when a mark-and-sweep finds that the array object in heap memory is no longer reachable (because the only pointer to it has fallen out of scope), the array object will automatically be removed from heap memory.

## Memory Leaks

Since memory deallocation is automatically handled for us in JavaScript, we don't need to worry about memory leaks, right?

That's actually not true. Memory leaks can and do happen in JavaScript, even if we don't have to be as attentive as we would in a low-level language where we need to deallocate memory manually.

We've talked a lot about why global variables are generally bad — they can interfere with our code and pollute local variables with the same names. And now we have another reason why we should avoid global variables if possible. They remain in memory as long as the program is running. If we think about this in the context of a mark-and-sweep algorithm, this makes sense. A global variable is always reachable, which means it will never be garbage-collected.

We can also potentially run into memory links with the `setInterval()` function. Imagine, for instance, we run a `setInterval()` that updates a timer along with some other pieces of information in an application. At some point, the timer gets cleared (perhaps by the user) but there's no code to actually clear the interval. In that case, the call to `setInterval()` will continue to reference code that's no longer needed but can't be garbage-collected because it's still being used behind the scenes.

There are other instances when we can create memory leaks in JavaScript, but for the most part we don't need too worry about them too much as long as we follow best practices. As you can probably guess, the very best practice is to keep code as tightly scoped as possible so that the memory allocated to that code is garbage-collected as soon as it's no longer needed.