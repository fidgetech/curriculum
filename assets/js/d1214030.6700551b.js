"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[76439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(g,o(o({ref:t},h),{},{components:r})):n.createElement(g,o({ref:t},h))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},60926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"\ud83d\udcd3 Merge Sort",id:"merge-sort",slug:"merge-sort",hide_table_of_contents:!0,sidebar_position:38,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/merge_sort.md"},o=void 0,l={unversionedId:"capstone/capstone-week-1/merge-sort",id:"capstone/capstone-week-1/merge-sort",title:"\ud83d\udcd3 Merge Sort",description:"At this point, we've looked at several sorting algorithms that have a Big O of O(N2): the bubble sort, insertion sort, and selection sort algorithms. Now we're ready to look at a few algorithms that are both more efficient and more complex.",source:"@site/docs/capstone/1_capstone-week-1/BL-merge-sort.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/merge-sort",permalink:"/v1/capstone/capstone-week-1/merge-sort",draft:!1,tags:[],version:"current",sidebarPosition:38,frontMatter:{title:"\ud83d\udcd3 Merge Sort",id:"merge-sort",slug:"merge-sort",hide_table_of_contents:!0,sidebar_position:38,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/merge_sort.md"},sidebar:"capstone",previous:{title:"\ud83d\udcd3 Bubble Sort",permalink:"/v1/capstone/capstone-week-1/bubble-sort"},next:{title:"\ud83d\udcd3 Quicksort",permalink:"/v1/capstone/capstone-week-1/quicksort"}},s={},p=[{value:"Writing A Function to Merge Two Arrays",id:"writing-a-function-to-merge-two-arrays",level:3},{value:"Dividing An Array",id:"dividing-an-array",level:3}],h={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At this point, we've looked at several sorting algorithms that have a Big O of O(N",(0,a.kt)("sup",null,"2"),"): the bubble sort, insertion sort, and selection sort algorithms. Now we're ready to look at a few algorithms that are both more efficient and more complex."),(0,a.kt)("p",null,"In this lesson, we'll cover the ",(0,a.kt)("strong",{parentName:"p"},"merge sort")," algorithm, which uses a divide and conquer approach to break down an array into many arrays of just one element, then sorts and merges the arrays back together until the array we started with is fully sorted. The Big O of a merge sort algorithm is O(n * Log n) \u2014 which is faster than O(n",(0,a.kt)("sup",null,"2"),"). One interesting thing, though, is that the Big O for a merge sort algorithm is ",(0,a.kt)("em",{parentName:"p"},"always")," the same \u2014 whether that's the best-case or worst-case scenario. So in a best-case or near best-case scenario (where an algorithm is already sorted), the inefficient algorithms we've learned are faster than merge sort."),(0,a.kt)("p",null,"Because this is a more complex algorithm to implement, we are going to return to our TDD approach. We aren't asking you to figure it yourself (so no clues this time) but you are more than welcome to try to write your own solution if you want a challenge."),(0,a.kt)("p",null,"Before we get started, let's take a look at how a merge sort actually works. We'll use the array we've been working with so far with other sort algorithms as an example: ",(0,a.kt)("inlineCode",{parentName:"p"},"[9,5,7,3,15,12]"),"."),(0,a.kt)("p",null,"First, a merge sort algorithm splits the larger array into smaller and smaller arrays \u2014 until each array is only one element."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/split-before-merge-sort.png",alt:"In a merge sort, the array is split in half repeatedly until it is a series of arrays of just one element"})),(0,a.kt)("p",null,"As we can see from the illustration, this is the ",(0,a.kt)("em",{parentName:"p"},"divide")," part of a merge sort's ",(0,a.kt)("em",{parentName:"p"},"divide and conquer")," approach."),(0,a.kt)("p",null,"You can probably guess what happens next: the arrays are ",(0,a.kt)("em",{parentName:"p"},"merged")," again \u2014 but they are sorted as they're merged."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/merge-array-again.png",alt:"Next, each smaller array is merged and sorted until all the arrays have merged into one sorted array."})),(0,a.kt)("p",null,"The end result is a fully sorted array \u2014 and while the process may seem complicated, it's more efficient than the sorting algorithms we've learned so far \u2014 at least for large collections."),(0,a.kt)("h3",{id:"writing-a-function-to-merge-two-arrays"},"Writing A Function to Merge Two Arrays"),(0,a.kt)("p",null,"As always, we'll start small with our TDD approach. We don't need to solve the entire problem at once. Let's start by writing a function that will merge two arrays. We'll use the same Jest testing environment we've been using throughout the computer science curriculum. We'll begin with a test:"),(0,a.kt)("div",{class:"filename"},"__tests__/merge-sort.test.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { merge } from '../src/merge-sort.js';\n\ndescribe('merge', () => {\n\n  test('it will merge two arrays of one element each', () => {\n    const leftArray = [3];\n    const rightArray = [6];\n    expect(merge(leftArray, rightArray)).toEqual([3, 6]);\n  });\n});\n")),(0,a.kt)("p",null,"First, note that we are using a named import instead of a default import here. That's because our source code will ultimately have multiple functions \u2014 and we'll need to write tests for each of them."),(0,a.kt)("p",null,"Our first test will check to see if we can correctly merge two arrays. No sorting will happen yet."),(0,a.kt)("p",null,"Here's the code to get this to pass:"),(0,a.kt)("div",{class:"filename"},"src/merge-sort.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export function merge(leftArray, rightArray) {\n  let mergedArray = [];\n  mergedArray.push(leftArray[0]);\n  mergedArray.push(rightArray[0]);\n  return mergedArray;\n}\n")),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"merge()")," function takes two arguments \u2014 a ",(0,a.kt)("inlineCode",{parentName:"p"},"leftArray")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"rightArray"),". We haven't written code that splits an array yet, but when we do, it will take the half of the array on the left and split it from the half of the array on the right."),(0,a.kt)("p",null,"For example, let's say we had the following: ",(0,a.kt)("inlineCode",{parentName:"p"},"[5, 3, 9, 1]"),". If we were to split this in two, ",(0,a.kt)("inlineCode",{parentName:"p"},"[5, 3]")," would be the ",(0,a.kt)("inlineCode",{parentName:"p"},"leftArray")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"[9, 1]")," would be the ",(0,a.kt)("inlineCode",{parentName:"p"},"rightArray"),". We would then split these into arrays of single elements again because a merge sort algorithm always breaks everything down to arrays of single elements before it begins to sort."),(0,a.kt)("p",null,"Next, we create a ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray")," variable which holds an empty array. Since there is no sorting to do, we simply push the two elements into the merged array \u2014 first the left, then the right."),(0,a.kt)("p",null,"That will get our first test passing."),(0,a.kt)("p",null,"What if the element in the ",(0,a.kt)("inlineCode",{parentName:"p"},"leftArray")," is larger? Let's write a test for that now."),(0,a.kt)("div",{class:"filename"},"__tests__/merge-sort.test.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n  test('it will merge and sort two arrays of one element each', () => {\n    const leftArray = [6];\n    const rightArray = [3];\n    expect(merge(leftArray, rightArray)).toEqual([3, 6]);\n  });\n...\n")),(0,a.kt)("p",null,"Getting this passing is as simple as adding a conditional and changing the order we push the elements. Here's the code:"),(0,a.kt)("div",{class:"filename"},"src/merge-sort.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export function merge(leftArray, rightArray) {\n  let mergedArray = [];\n  if (leftArray[0] > rightArray[0]) {\n    mergedArray.push(rightArray[0]);\n    mergedArray.push(leftArray[0]);\n  } else {\n    mergedArray.push(leftArray[0]);\n    mergedArray.push(rightArray[0]);\n  }\n  return mergedArray;\n}\n")),(0,a.kt)("p",null,"It's not very clean and has a lot of repetition. However, it gets the test passing and should demonstrate a clear sense of what we are trying to do. If the value in the ",(0,a.kt)("inlineCode",{parentName:"p"},"rightArray")," is smaller, we push that one to ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray")," first. If the value in the ",(0,a.kt)("inlineCode",{parentName:"p"},"leftArray")," is smaller, that's the one that gets pushed into ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray")," first."),(0,a.kt)("p",null,"Also, all that repetition with the ",(0,a.kt)("inlineCode",{parentName:"p"},"[0]")," position of each array should get us thinking about the next step \u2014 working with arrays that have more than one element. We'll obviously need a loop to do that. Let's start with a test again."),(0,a.kt)("div",{class:"filename"},"__tests__/merge-sort.test.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n  test('it will merge and sort two arrays of two elements each', () => {\n    const leftArray = [3, 5];\n    const rightArray = [4, 6];\n    expect(merge(leftArray, rightArray)).toEqual([3, 4, 5, 6]);\n  });\n...\n")),(0,a.kt)("p",null,"In the test above, we take two arrays of two elements each. We expect our ",(0,a.kt)("inlineCode",{parentName:"p"},"merge()")," function to merge and sort these two arrays. By the way, note that these arrays are both sorted. Our ",(0,a.kt)("inlineCode",{parentName:"p"},"merge()")," function will only work if every element in both of the arrays it merges are sorted. This is expected \u2014 after all, it will start with two arrays, each with a single element, merge and sort them, and continue to do that until it has fully sorted the array. The ",(0,a.kt)("inlineCode",{parentName:"p"},"merge()")," function should never be merging two unsorted arrays into a sorted array \u2014 if that were to happen, it would mean there's something wrong with our code \u2014 and the final ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray")," will not be correctly sorted."),(0,a.kt)("p",null,"To get this test passing, we're going to need a loop. Our loop will actually go through ",(0,a.kt)("em",{parentName:"p"},"both")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"leftArray")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"rightArray"),", pushing the lower value as needed. But how exactly will this work? Before we show you the code, a key caveat \u2014 our tests ",(0,a.kt)("strong",{parentName:"p"},"will not pass yet")," because we are omitting a key step. For now, we just want to demonstrate how the loop will work."),(0,a.kt)("div",{class:"filename"},"src/merge-sort.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Our tests won't pass yet because a key step is still missing. The loop itself, though, is complete.\n\nexport function merge(leftArray, rightArray) {\n  let mergedArray = [];\n  let leftIndex = 0;\n  let rightIndex = 0;\n  while ((leftIndex < leftArray.length) && (rightIndex < rightArray.length)) {\n    if (leftArray[leftIndex] <= rightArray[rightIndex]) {\n      mergedArray.push(leftArray[leftIndex]);\n      leftIndex ++;\n    } else {\n      mergedArray.push(rightArray[rightIndex]);\n      rightIndex ++;\n    }\n  }\n  return mergedArray;\n}\n")),(0,a.kt)("p",null,"First, we need an index for both arrays. We'll name these ",(0,a.kt)("inlineCode",{parentName:"p"},"leftIndex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rightIndex")," and start them each at ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),". What we're doing here is creating a pointer that will start at the first element of each array."),(0,a.kt)("p",null,"Next, we'll use a while loop. As long as ",(0,a.kt)("inlineCode",{parentName:"p"},"leftIndex < leftArray.length")," ",(0,a.kt)("em",{parentName:"p"},"and")," ",(0,a.kt)("inlineCode",{parentName:"p"},"rightIndex < rightArray.length"),", the loop will keep running. We'll cover this more in a moment."),(0,a.kt)("p",null,"Next, we have a conditional. If the element at the ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," position of ",(0,a.kt)("inlineCode",{parentName:"p"},"leftArray")," is less than or equal to the element at the ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," position of ",(0,a.kt)("inlineCode",{parentName:"p"},"rightArray"),", that means we need to push the element from ",(0,a.kt)("inlineCode",{parentName:"p"},"leftArray")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray")," first. After we do that, there's another key step \u2014 we need to ",(0,a.kt)("em",{parentName:"p"},"increment")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"leftIndex"),". That's because we are done pushing the first element from the ",(0,a.kt)("inlineCode",{parentName:"p"},"leftArray")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray"),". The next time through the loop, we will no longer be pointing at the first element of ",(0,a.kt)("inlineCode",{parentName:"p"},"leftArray")," \u2014 instead, we'll be pointing at its second element. ",(0,a.kt)("inlineCode",{parentName:"p"},"rightIndex")," will still be pointing at the first element of ",(0,a.kt)("inlineCode",{parentName:"p"},"rightArray")," because we haven't pushed any elements from that array into ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray")," yet."),(0,a.kt)("p",null,"On the other hand, if the value at ",(0,a.kt)("inlineCode",{parentName:"p"},"rightArray")," is smaller, the element that we are pointing at in the ",(0,a.kt)("inlineCode",{parentName:"p"},"rightArray")," will get merged and ",(0,a.kt)("inlineCode",{parentName:"p"},"rightIndex")," will be incremented."),(0,a.kt)("p",null,"Let's imagine for a moment that we are merging the following arrays:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const leftArray = [2, 3, 5];\nconst rightArray = [7, 9, 13];\n")),(0,a.kt)("p",null,"Note that all the values in ",(0,a.kt)("inlineCode",{parentName:"p"},"leftArray")," are smaller than all the values in ",(0,a.kt)("inlineCode",{parentName:"p"},"rightArray"),"."),(0,a.kt)("p",null,"The first time through the loop, both the ",(0,a.kt)("inlineCode",{parentName:"p"},"leftIndex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rightIndex")," will be 0. ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," is less than ",(0,a.kt)("inlineCode",{parentName:"p"},"7")," so ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," will be pushed to ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"leftIndex")," will be incremented to ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,a.kt)("p",null,"The second time through the loop, ",(0,a.kt)("inlineCode",{parentName:"p"},"leftIndex")," is 1 and ",(0,a.kt)("inlineCode",{parentName:"p"},"rightIndex")," is still 0. ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," is less than ",(0,a.kt)("inlineCode",{parentName:"p"},"7")," so ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," will be pushed to ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"leftIndex")," will be incremented to 2 while ",(0,a.kt)("inlineCode",{parentName:"p"},"rightIndex")," doesn't change."),(0,a.kt)("p",null,"The third time through the loop, ",(0,a.kt)("inlineCode",{parentName:"p"},"leftIndex")," is 2 and ",(0,a.kt)("inlineCode",{parentName:"p"},"rightIndex")," still hasn't changed \u2014 it's 0. ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," is less than ",(0,a.kt)("inlineCode",{parentName:"p"},"7")," so it gets pushed to ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray"),"."),(0,a.kt)("p",null,"The fourth time through the loop, we are taking advantage of how JavaScript handles comparisons with ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),". There is no ",(0,a.kt)("inlineCode",{parentName:"p"},"leftArray[3]"),", which means it's ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),". Because our condition is false, all of the elements of the ",(0,a.kt)("inlineCode",{parentName:"p"},"rightArray")," will be pushed, one at a time, to ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray")," while ",(0,a.kt)("inlineCode",{parentName:"p"},"rightIndex")," is incremented once each time."),(0,a.kt)("p",null,"Let's also demonstrate how this works with an illustration because this is the first time we've used two pointers to point at and compare values from two different arrays at different indexes of each array. Let's say we want to merge the following two arrays: ",(0,a.kt)("inlineCode",{parentName:"p"},"[3, 7, 12]")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"[2, 5, 9]"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/merge-sort-pointer/first-iteration.png",alt:"First iteration through the loop."})),(0,a.kt)("p",null,"The first time through the loop, we have pointers at the first element of both arrays. That's what the illustration above shows. Because ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," is the lower value, it will get pushed to ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray")," and the pointer for the array on the right will move forward one element."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/merge-sort-pointer/second-iteration.png",alt:"Second iteration through the loop."})),(0,a.kt)("p",null,"The illustration above shows where we are at the second time through the loop. We are now comparing ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"5"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," is smaller \u2014 and that value from the left array is going to get pushed to ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray"),". The pointer for the array on the left gets moved forward one element."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/merge-sort-pointer/third-iteration.png",alt:"Third iteration through the loop."})),(0,a.kt)("p",null,"Each pointer has moved forward one by the time we start our third iteration. Now we are comparing ",(0,a.kt)("inlineCode",{parentName:"p"},"7")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"5"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," is smaller so that value gets pushed to ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray")," and the pointer for the array on the right gets moved forward one element."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/merge-sort-pointer/fourth-iteration.png",alt:"Fourth iteration through the loop."})),(0,a.kt)("p",null,"Now we are comparing ",(0,a.kt)("inlineCode",{parentName:"p"},"7")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"9"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"7")," is less, so push that to ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray")," and move the pointer forward for the array on the left."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/merge-sort-pointer/fifth-iteration.png",alt:"Fifth iteration through the loop."})),(0,a.kt)("p",null,"For our fifth and last time through the loop, we'll compare ",(0,a.kt)("inlineCode",{parentName:"p"},"9")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"12"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"9")," is less so it will get pushed to ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray"),"."),(0,a.kt)("p",null,"But wait a minute. We only do five total loops? What about the sixth element? Our ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray")," won't contain the number ",(0,a.kt)("inlineCode",{parentName:"p"},"12"),". This is because the conditions for both while loops has been met. So if we run our tests now, we'll see that our ",(0,a.kt)("inlineCode",{parentName:"p"},"merge()")," function ",(0,a.kt)("em",{parentName:"p"},"mostly")," merges and sorts two sorted arrays \u2014 but the final element will be missing. In fact, with the way the pointers work, the pointer for the array on the right will now be pointing ",(0,a.kt)("em",{parentName:"p"},"beyond")," the final element."),(0,a.kt)("p",null,"This actually works to our advantage. We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," to grab the values at both the ",(0,a.kt)("inlineCode",{parentName:"p"},"leftIndex")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"rightIndex")," for their respective arrays. Let's take a look at the updated function:"),(0,a.kt)("div",{class:"filename"},"src/merge-sort.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export function merge(leftArray, rightArray) {\n  let mergedArray = [];\n  let leftIndex = 0;\n  let rightIndex = 0;\n  while ((leftIndex < leftArray.length) && (rightIndex < rightArray.length)) {\n    if (leftArray[leftIndex] <= rightArray[rightIndex]) {\n      mergedArray.push(leftArray[leftIndex]);\n      leftIndex ++;\n    } else {\n      mergedArray.push(rightArray[rightIndex]);\n      rightIndex ++;\n    }\n  }\n  mergedArray = mergedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex)); // new code\n  return mergedArray;\n}\n")),(0,a.kt)("p",null,"As we can see, we slice the elements at both the ",(0,a.kt)("inlineCode",{parentName:"p"},"leftIndex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rightIndex")," and concatenate them to ",(0,a.kt)("inlineCode",{parentName:"p"},"mergedArray"),". The nice thing about ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()"),' is that we can "slice" a non-existent piece of an array (such as the 5th element of an array that only has 3 elements) and it will just return an empty array. So if we slice the ',(0,a.kt)("inlineCode",{parentName:"p"},"leftIndex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rightIndex")," of the arrays in the illustration above, the ",(0,a.kt)("inlineCode",{parentName:"p"},"leftIndex")," for the array on the left will be ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," \u2014 and the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"leftArray.slice(2)")," will be ",(0,a.kt)("inlineCode",{parentName:"p"},"[12]"),". Meanwhile, ",(0,a.kt)("inlineCode",{parentName:"p"},"rightIndex")," is at ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," \u2014 so if we run ",(0,a.kt)("inlineCode",{parentName:"p"},"rightArray.slice(3)"),", the return will be ",(0,a.kt)("inlineCode",{parentName:"p"},"[]"),". That means we can concatenate the value at both ",(0,a.kt)("inlineCode",{parentName:"p"},"rightIndex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"leftIndex"),". One will concatenate ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")," and the other will concatenate ",(0,a.kt)("inlineCode",{parentName:"p"},"[12]"),"."),(0,a.kt)("p",null,"So now we have a working ",(0,a.kt)("inlineCode",{parentName:"p"},"merge()")," function that will merge sorted arrays of any size. The next step is to write a recursive function that will split up an array into smaller parts."),(0,a.kt)("h3",{id:"dividing-an-array"},"Dividing An Array"),(0,a.kt)("p",null,"We'll call this function ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()"),". The very first behavior we'll test is that it can correctly return an array of one or zero elements. There's no need to sort in that case."),(0,a.kt)("p",null,"Here's our test. We'll keep our new tests in the same suite."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n  test('mergeSort() will return an array of one or zero elements', () => {\n    const array = [1]\n    expect(mergeSort(array)).toEqual([1]);\n  });\n...\n")),(0,a.kt)("p",null,"And here's the code to get this test passing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export function mergeSort(array) {\n  if (array.length <= 1) {\n    return array;\n  }\n}\n")),(0,a.kt)("p",null,"This conditional is an essential part of our function. We'll see why in a moment."),(0,a.kt)("p",null,"So what's our next test? Well, this function will be splitting arrays in half \u2014 but it won't be returning these values. It will only be doing so internally so the ",(0,a.kt)("inlineCode",{parentName:"p"},"merge()")," function can process them \u2014 and this function will also be called recursively. Our next test will check if ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()")," can properly sort an array of two elements."),(0,a.kt)("p",null,"Why test this when we've already confirmed that ",(0,a.kt)("inlineCode",{parentName:"p"},"merge()")," will sort an array of two elements? Well, ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()")," will be a control function that recursively calls itself and uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"merge()")," function we've already written to sort and merge arrays. So we need to make sure that ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()")," can correctly handle this and return the final sorted array."),(0,a.kt)("p",null,"Here's a test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n  test('mergeSort() will sort an array of two elements', () => {\n    const array = [7,4];\n    expect(mergeSort(array)).toEqual([4,7]);\n  });\n...\n")),(0,a.kt)("p",null,"Now let's get this test passing. Here's the full ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export function mergeSort(array) {\n  if (array.length <= 1) {\n    return array;\n  }\n  const midpoint = Math.floor(array.length / 2);\n  const leftArray = array.slice(0, midpoint);\n  const rightArray = array.slice(midpoint);\n  return merge(mergeSort(leftArray), mergeSort(rightArray));\n}\n")),(0,a.kt)("p",null,"Let's skip to the new code. We determine the ",(0,a.kt)("inlineCode",{parentName:"p"},"midpoint")," of the array with ",(0,a.kt)("inlineCode",{parentName:"p"},"Math.floor(array.length / 2);"),". Once we know the ",(0,a.kt)("inlineCode",{parentName:"p"},"midpoint"),", we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," to divide the array in half using the ",(0,a.kt)("inlineCode",{parentName:"p"},"midpoint"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const leftArray = array.slice(0, midpoint);\nconst rightArray = array.slice(midpoint);\n")),(0,a.kt)("p",null,"Each time our ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()")," function is called on an array, it will find the midpoint and then create a ",(0,a.kt)("inlineCode",{parentName:"p"},"leftArray")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"rightArray"),"."),(0,a.kt)("p",null,"Next, we'll pass these into our ",(0,a.kt)("inlineCode",{parentName:"p"},"merge()")," function. Note, however, the arguments we are passing into ",(0,a.kt)("inlineCode",{parentName:"p"},"merge()"),". We aren't just passing in ",(0,a.kt)("inlineCode",{parentName:"p"},"leftArray")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rightArray"),". We're passing in the ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()")," function as both arguments instead. We'll explain exactly what's happening by walking through an example in a moment."),(0,a.kt)("p",null,"But first, if we check our test, we'll see that it passes. In fact, our code is complete. We could write another test for an array with any number of unsorted elements and it will pass."),(0,a.kt)("p",null,"Now let's go into a bit more detail about what exactly is happening recursively in this function because it can be a bit confusing at first."),(0,a.kt)("p",null,"Let's say we pass in the following array to our ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const array = [7, 3, 5, 4];\n")),(0,a.kt)("p",null,"First, our algorithm will check to see if the array's length is less than 1. It's not."),(0,a.kt)("p",null,"Next, it will calculate the ",(0,a.kt)("inlineCode",{parentName:"p"},"midpoint"),", which is ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"leftArray")," will be ",(0,a.kt)("inlineCode",{parentName:"p"},"[7, 3]")," while ",(0,a.kt)("inlineCode",{parentName:"p"},"rightArray")," will be ",(0,a.kt)("inlineCode",{parentName:"p"},"[5, 4]"),"."),(0,a.kt)("p",null,"So here's what gets passed into our ",(0,a.kt)("inlineCode",{parentName:"p"},"merge()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"return merge(mergeSort([7,3]), mergeSort([5,4]));\n")),(0,a.kt)("p",null,"In effect, we are saying, ",(0,a.kt)("em",{parentName:"p"},"merge")," these arrays \u2014 but wait! ",(0,a.kt)("em",{parentName:"p"},"Split")," them again first."),(0,a.kt)("p",null,"So ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()")," gets called again for each array."),(0,a.kt)("p",null,"For the left array (",(0,a.kt)("inlineCode",{parentName:"p"},"[7, 3]"),"), the midpoint is 1. The array will be split again into new left and right arrays: ",(0,a.kt)("inlineCode",{parentName:"p"},"[7]")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"[3]")," respectively."),(0,a.kt)("p",null,"Meanwhile, ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()")," is doing the same thing for the right array (",(0,a.kt)("inlineCode",{parentName:"p"},"[5, 4]"),") and splitting them into ",(0,a.kt)("inlineCode",{parentName:"p"},"[5]")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"[4]"),"."),(0,a.kt)("p",null,"So our ",(0,a.kt)("inlineCode",{parentName:"p"},"merge()")," function will be called four ",(0,a.kt)("em",{parentName:"p"},"more")," times, one for each of these one element arrays. Once again, we are saying, ",(0,a.kt)("em",{parentName:"p"},"merge")," these arrays \u2014 but wait! First ",(0,a.kt)("em",{parentName:"p"},"split")," them again if needed."),(0,a.kt)("p",null,"Now we have four ",(0,a.kt)("em",{parentName:"p"},"additional")," ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()")," function calls in addition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()")," calls that are already in the stack."),(0,a.kt)("p",null,"Here is where our conditional is essential:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (array.length <= 1) {\n  return array;\n}\n")),(0,a.kt)("p",null,"If we have broken our arrays down to one or zero elements each, ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()")," will just return the array. If we didn't do this, our ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()")," function would keep saying ",(0,a.kt)("em",{parentName:"p"},"merge \u2014 but wait! Split first")," forever, even though we can't split an array of one or zero elements any further. The maximum call stack will be exceeded and the function will fail. If you want to see this for yourself, remove the conditional and run the ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()")," function."),(0,a.kt)("p",null,"Once each of the ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()")," function calls return the array, we're ready to go back through the stack, resolving each ",(0,a.kt)("inlineCode",{parentName:"p"},"merge()")," function call, sorting each array and merging it until we have a single sorted array again. As always, don't forget that a JavaScript function has to ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," something or its return will be ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),". For that reason, we have to ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"merge()")," function."),(0,a.kt)("p",null,"The recursive part of a merge sort algorithm is the most confusing part \u2014 so take a little time to understand what's happening if it's still not quite clear. This divide and conquer approach is certainly faster than the quadratic time sorting algorithms we've learned so far. However, as you might imagine, JavaScript isn't well-suited for this algorithm when it comes to sorting very large arrays. That's because JavaScript has a maximum stack size. For instance, if we were to run this test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\ntest('mergeSort() will sort an array of one million elements', () => {\n  let array = [];\n  for (let i = 0; i <= 1000000; i++ ) {\n    array.push(Math.floor(Math.random() * Math.floor(1000)));\n  }\n  expect(mergeSort(array)).toEqual([]);\n});\n...\n")),(0,a.kt)("p",null,"We will get a ",(0,a.kt)("inlineCode",{parentName:"p"},"Maximum call stack size exceeded")," error. JavaScript will happily create an array of one million elements for us \u2014 but our ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeSort()")," function won't be able to handle the call stack of all those recursive calls. In order to fix it, we'd need to utilize tail call optimization \u2014 which would mean that recursive calls wouldn't be added to the stack. But that's a digression from our current topic."),(0,a.kt)("p",null,"Generally, a merge sort algorithm is much better than the algorithms we've already learned, but there are some interesting additional pieces of information about it. The algorithms we've already learned use quadratic time in the average and worst-case scenarios \u2014 but in the best-case scenario (where an array is already sorted or mostly sorted), they only use linear time."),(0,a.kt)("p",null,"A merge sort algorithm, on the other hand, ",(0,a.kt)("em",{parentName:"p"},"always")," divides and conquers before merging again. That means it will take the same amount of time regardless of whether the array is sorted or not. This makes it consistent \u2014 the best-case and worst-case scenario are the same \u2014 but you can probably imagine scenarios where the quadratic time algorithms we've already learned might function better. For instance, let's say we have a database full of millions of small arrays. Most are sorted, but there are some that are not due to occasional glitches in our sorting software. We'd actually be better off doing the work with one of our quadratic algorithms because this task would mostly run in linear time with only occasional arrays that would be sorted in quadratic time."),(0,a.kt)("p",null,"So while a merge sort algorithm is generally a better tool for sorting large arrays, that doesn't mean that the quadratic time sorting algorithms we've learned can't sometimes do the job faster."))}d.isMDXComponent=!0}}]);