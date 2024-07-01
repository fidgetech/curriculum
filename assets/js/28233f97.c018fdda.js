"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[92361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),h=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=h(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=h(n),c=a,m=u["".concat(s,".").concat(c)]||u[c]||p[c]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var h=2;h<r;h++)i[h]=n[h];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var o=n(87462),a=(n(67294),n(3905));const r={title:"\ud83d\udcd3 Insertion Sort",id:"insertion-sort",slug:"insertion-sort",hide_table_of_contents:!0,sidebar_position:35,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/insertion_sort.md"},i=void 0,l={unversionedId:"capstone/capstone-week-1/insertion-sort",id:"version-1.1/capstone/capstone-week-1/insertion-sort",title:"\ud83d\udcd3 Insertion Sort",description:"In this lesson, we'll take a look at the insertion sort algorithm. This algorithm uses O(n2) time, so it's not a good choice for large lists. Interestingly enough, this algorithm isn't a bad choice for smaller lists, though. Why is that? Well, some of the algorithms that are efficient for large lists have a high constant while the insertion sort algorithm has a low constant. Think of it like this: if you want to give a letter to your neighbor next door, is it faster to just walk next door or deliver it by mail? It's faster to just go next door \u2014 because there is no overhead of a constant to worry about. On the other hand, the further away you need to go to mail a letter, the more it makes sense to send it via the post office instead of hand delivering it.",source:"@site/versioned_docs/version-1.1/capstone/1_capstone-week-1/BI-insertion-sort.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/insertion-sort",permalink:"/v1.1/capstone/capstone-week-1/insertion-sort",draft:!1,tags:[],version:"1.1",sidebarPosition:35,frontMatter:{title:"\ud83d\udcd3 Insertion Sort",id:"insertion-sort",slug:"insertion-sort",hide_table_of_contents:!0,sidebar_position:35,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/insertion_sort.md"},sidebar:"capstone",previous:{title:"\ud83d\udcd3 Binary Search Algorithm",permalink:"/v1.1/capstone/capstone-week-1/binary-search-algorithm"},next:{title:"\ud83d\udcd3 Selection Sort",permalink:"/v1.1/capstone/capstone-week-1/selection-sort"}},s={},h=[{value:"Clues",id:"clues",level:3},{value:"Solution",id:"solution",level:3}],d={toc:h},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll take a look at the ",(0,a.kt)("strong",{parentName:"p"},"insertion sort")," algorithm. This algorithm uses O(n",(0,a.kt)("sup",null,"2"),") time, so it's not a good choice for large lists. Interestingly enough, this algorithm isn't a bad choice for smaller lists, though. Why is that? Well, some of the algorithms that are efficient for large lists have a high constant while the insertion sort algorithm has a low constant. Think of it like this: if you want to give a letter to your neighbor next door, is it faster to just walk next door or deliver it by mail? It's faster to just go next door \u2014 because there is no overhead of a constant to worry about. On the other hand, the further away you need to go to mail a letter, the more it makes sense to send it via the post office instead of hand delivering it."),(0,a.kt)("p",null,"So how does the insertion sort work? Well, we can think of it as separating a collection into two parts. The first part is a sorted section and the second is an unsorted section. At first, the sorted part is just the first item in the collection. Let's take a look at an example that uses the array ",(0,a.kt)("inlineCode",{parentName:"p"},"[9,5,7,3,15,12]"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/insertion-sort.png",alt:"The illustration shows what will happen each time through the loop."})),(0,a.kt)("p",null,"The first time through the loop, the algorithm takes the first element in the unsorted section and then determines where it should go in the sorted section. Right now, the sorted section is only one element ",(0,a.kt)("inlineCode",{parentName:"p"},"[9]"),". Meanwhile, the unsorted section is the rest of the array. The first element of the unsorted section is ",(0,a.kt)("inlineCode",{parentName:"p"},"5"),". So the algorithm will insert the ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," before the ",(0,a.kt)("inlineCode",{parentName:"p"},"9"),"."),(0,a.kt)("p",null,"Now the sorted section is ",(0,a.kt)("inlineCode",{parentName:"p"},"[5,9]")," while the unsorted section is ",(0,a.kt)("inlineCode",{parentName:"p"},"[7,3,15,12]"),"."),(0,a.kt)("p",null,"The second time through the loop, the current index will be ",(0,a.kt)("inlineCode",{parentName:"p"},"7"),". So we'll iterate through the sorted section until we determine where it should go. It happens to be in the second position."),(0,a.kt)("p",null,"That makes the sorted section ",(0,a.kt)("inlineCode",{parentName:"p"},"[5,7,9]")," while the unsorted section is ",(0,a.kt)("inlineCode",{parentName:"p"},"[3,15,12]"),". You can look at the illustration to see how the rest of the process should go. "),(0,a.kt)("p",null,"You'll see that there is one iteration where the algorithm knows it doesn't need to swap because the value it's checking is already sorted. How does it know? It just needs to check the last value of the sorted section. If the value that it's comparing is higher than that value, we know it needs to go at the end of the sorted section. No insertion necessary!"),(0,a.kt)("p",null,"So this might seem relatively easy, right? Well, there's one thing that's tricky. There's no method that just inserts an element between two other elements in an array. It's easy to ",(0,a.kt)("em",{parentName:"p"},"replace")," an element \u2014 such as with splice. But ",(0,a.kt)("em",{parentName:"p"},"adding")," an element to the middle of the array is trickier. It involves ",(0,a.kt)("em",{parentName:"p"},"shifting")," every element that should come after the inserted element to the right. There are a lot of ways to do that, fortunately."),(0,a.kt)("p",null,"Now that you know how an insertion sort algorithm should work, it's time to try to write your own. We recommend implementing TDD though you can also try to whiteboard the solution as well. This one can actually be fairly tricky to solve."),(0,a.kt)("p",null,"If you are stumped, read a clue below and then continue trying to solve the problem. This is what would happen in an actual technical interview \u2014 an interviewer might prompt you, which could help you get to the next step."),(0,a.kt)("p",null,"If the clue isn't helpful because you've already solved that part of the equation, go to the next clue."),(0,a.kt)("h3",{id:"clues"},"Clues"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Clue #1:")," You will need two loops \u2014 an outer loop and an inner loop. The outer loop always starts with the first value of the unsorted section of the array. Since we can consider the first element of the array to be a sorted section of one element, that means our outer loop should start with an index of 1."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"for (let index = 1; index < array.length; index++) {\n    // Code omitted...\n  }\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Clue #2:")," What value do we need to insert in the ordered section of the array? That would be ",(0,a.kt)("inlineCode",{parentName:"p"},"array[index]"),", which we'll call ",(0,a.kt)("inlineCode",{parentName:"p"},"valueToInsert"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let valueToInsert = array[index];\n")),(0,a.kt)("p",null,"How should we determine where ",(0,a.kt)("inlineCode",{parentName:"p"},"valueToInsert")," should go in the sorted section? Should we work from the front of the sorted section or the end of the sorted section? Well, remember that when we insert ",(0,a.kt)("inlineCode",{parentName:"p"},"valueToInsert"),", we also need to ",(0,a.kt)("em",{parentName:"p"},"shift")," all elements after it one index ",(0,a.kt)("em",{parentName:"p"},"to the right"),". So if we start at the beginning of the sorted section, we'll first have to find where to insert the element \u2014 and then we'll have to continue iterating, shifting all elements after it. It would be better to work ",(0,a.kt)("em",{parentName:"p"},"backwards")," instead, shifting elements to the right as we find where to insert ",(0,a.kt)("inlineCode",{parentName:"p"},"valueToInsert"),". As an analogy, imagine that you want to insert a book on a shelf where there is only room for one book. You look at the last book on the shelf \u2014 and if the book should go before that, you move that book to the right so there is a new space for the inserted book to go. You keep moving books to the right until you find the correct space for the inserted book. Because you've been shifting books to the right, you have a space for it available."),(0,a.kt)("p",null,"Because our inner loop should work ",(0,a.kt)("em",{parentName:"p"},"from the end")," of the sorted section, that means we'd start at ",(0,a.kt)("inlineCode",{parentName:"p"},"index-1"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let indexOfSortedSection = index -1;\n")),(0,a.kt)("p",null,"So our code so far would look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"for (let index = 1; index < array.length; index++) {\n  let indexOfSortedSection = index - 1;\n  let valueToInsert = array[index];\n  // We will need an inner loop here that starts at array[indexOfSortedSection] and works backwards through the sorted section of the array until it finds where valueToInsert should go.\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Clue #3:")," What should our inner loop look like? Well, we could use a while loop. (Note we could use a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop as well.) As long as ",(0,a.kt)("inlineCode",{parentName:"p"},"array[indexOfSortedSection] > valueToInsert"),", we need to keep moving to the right. Remember, we want our numbers all in order \u2014 and currently ",(0,a.kt)("inlineCode",{parentName:"p"},"valueToInsert")," is to the right of ",(0,a.kt)("inlineCode",{parentName:"p"},"array[indexOfSortedSection]"),". That means the numbers will be out of order still. Once ",(0,a.kt)("inlineCode",{parentName:"p"},"valueToInsert")," is greater than or equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"array[indexOfSortedSection]"),", we know we've found the right place."),(0,a.kt)("p",null,"So here's the code up to this point:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"for (let index = 1; index < array.length; index++) {\n  let indexOfSortedSection = index - 1;\n  let valueToInsert = array[index];\n  while ((array[indexOfSortedSection] > valueToInsert)) {\n    // What should we do while this condition is true?\n  }\n  // And finally, what should we do once we've found the correct place for valueToInsert to go?\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Clue #4:")," At this point, you might be struggling to figure out what goes inside the while loop. Well, remember, if the condition in the loop is true, we need to move the element ",(0,a.kt)("em",{parentName:"p"},"to the right"),". We will also need to decrement the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"indexOfSortedSection")," after we are done because we aren't using a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop to do it for us."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"while ((array[indexOfSortedSection] > valueToInsert)) {\n  let newValue = array[indexOfSortedSection];\n  array[indexOfSortedSection + 1 ] = newValue;\n  indexOfSortedSection--\n}\n")),(0,a.kt)("p",null,"Here, we are saying, ",(0,a.kt)("em",{parentName:"p"},"hey, we still haven't found the correct place to insert our value. Let's shift this element one spot to the right.")," To do that, we first get the value of the current element in the sorted section. Then we assign the ",(0,a.kt)("em",{parentName:"p"},"next")," element in the array that collection. It's kind of like moving our books to create a space \u2014 though what we are actually doing is replacing the value at the next index with the value at the current index. You might be wondering how we aren't losing any data this way. Well, we saved ",(0,a.kt)("inlineCode",{parentName:"p"},"valueToInsert")," in a variable \u2014 so when we overwrite that element, it doesn't matter since we have the data saved. We will always shift an element one over to the right before we overwrite it. And the first time we do that, as we just mentioned, is when we overwrite the element that we've stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"valueToInsert"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Clue #5:")," This code is still missing one thing \u2014 we never actually insert ",(0,a.kt)("inlineCode",{parentName:"p"},"valueToInsert")," anywhere! We actually need to do this after we finish the while loop. This is what we need:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"while ((array[indexOfSortedSection] > valueToInsert)) {\n  let newValue = array[indexOfSortedSection];\n  array[indexOfSortedSection + 1 ] = newValue;\n  indexOfSortedSection--\n}\narray[indexOfSortedSection + 1] = valueToInsert;\n")),(0,a.kt)("p",null,"The key line is the final one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"array[indexOfSortedSection + 1] = valueToInsert;\n")),(0,a.kt)("p",null,"Why do the insert at ",(0,a.kt)("inlineCode",{parentName:"p"},"array[indexOfSortedSection + 1]"),"? Well, each time through the while loop, we decrement the index with ",(0,a.kt)("inlineCode",{parentName:"p"},"indexOfSortedSection--"),". Once we've verified that the previous element ",(0,a.kt)("em",{parentName:"p"},"isn't")," greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"valueToInsert"),", we need to insert the value after the previous element."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Here's the full solution to the problem:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function insertionSort(array) {\n  for (let index = 1; index < array.length; index++) {\n    let indexOfSortedSection = index - 1;\n    let valueToInsert = array[index];\n    while ((array[indexOfSortedSection] > valueToInsert)) {\n      let newValue = array[indexOfSortedSection];\n      array[indexOfSortedSection + 1 ] = newValue;\n      indexOfSortedSection--\n    }\n    array[indexOfSortedSection + 1] = valueToInsert;\n  }\n  return array;\n}\n")),(0,a.kt)("p",null,"Our algorithm takes an array as an argument. It essentially separates the array into two sections \u2014 the first sorted, the second unsorted. Since the sorted section is always the first element, that's why our outer loop, which sorts through the unsorted section, starts at an index of 1. It will always run through the entire array \u2014 that is, until ",(0,a.kt)("inlineCode",{parentName:"p"},"index < array.length"),"."),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," is always the first element of the unsorted section, that means that ",(0,a.kt)("inlineCode",{parentName:"p"},"index - 1")," is the last element of the unsorted section. We are going to work our way ",(0,a.kt)("em",{parentName:"p"},"backwards")," through the unsorted section. We discussed why in the clues and we'll cover the reason again in a moment."),(0,a.kt)("p",null,"For our inner loop, we need to keep track of two things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The current index of the sorted section. We initialize this by doing the following:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let indexOfSortedSection = index - 1;\n")),(0,a.kt)("p",null,"Remember, we are working backwards through the array so we need to start with the last element in the unsorted section."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The value we need to insert in our array. This is the value at ",(0,a.kt)("inlineCode",{parentName:"li"},"array[index]"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let valueToInsert = array[index];\n")),(0,a.kt)("p",null,"Next, we have our while loop. Our while loop is going to ",(0,a.kt)("em",{parentName:"p"},"shift")," elements to the right as it looks for where the ",(0,a.kt)("inlineCode",{parentName:"p"},"valueToInsert")," needs to be inserted. As long as ",(0,a.kt)("inlineCode",{parentName:"p"},"array[indexOfSortedSection] > valueToInsert"),", our loop will keep running. This condition states that as long as the element in our sorted array is greater than the value we need to insert, we need to keep shifting elements to the right. We can clarify this with a little example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Unsorted Section\n\n[3, 5, 8, 14] \n\n// Value to Insert\n\n12\n")),(0,a.kt)("p",null,"In the example above, we don't want ",(0,a.kt)("inlineCode",{parentName:"p"},"12")," to be inserted at the end of the sorted section. We need to shift the last value in the sorted section (",(0,a.kt)("inlineCode",{parentName:"p"},"14"),") to the right and then check again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Unsorted Section\n\n[3, 5, 8, ..., 14]\n")),(0,a.kt)("p",null,"We can see now that ",(0,a.kt)("inlineCode",{parentName:"p"},"12")," (",(0,a.kt)("inlineCode",{parentName:"p"},"valueToInsert"),") is greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"array[indexOfSortedSection]")," (",(0,a.kt)("inlineCode",{parentName:"p"},"8"),"), which means we've found the right spot to insert the value!"),(0,a.kt)("p",null,"To actually shift values to the right, we do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let newValue = array[indexOfSortedSection];\narray[indexOfSortedSection + 1 ] = newValue;\nindexOfSortedSection--\n")),(0,a.kt)("p",null,"We set the value of the ",(0,a.kt)("em",{parentName:"p"},"next")," index to the current index's value \u2014 essentially shifting it one to the right. For just a moment, the current index and the next index will be the same \u2014 but the current index will soon be overwritten, either by the value we want to insert (if we've found the right place for it) or the next element that needs to be shifted to the right. Remember, the very first time this happens, the element that we grabbed ",(0,a.kt)("inlineCode",{parentName:"p"},"valueToInsert")," from will be overwritten. That's why we need to save its value in the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"valueToInsert"),"."),(0,a.kt)("p",null,"By the way, if the value to insert doesn't need to be moved, our algorithm will see that right away because the conditional in the while loop will be met \u2014 so the inner loop wouldn't be activated. For that reason, in the ",(0,a.kt)("em",{parentName:"p"},"best case scenario"),", this algorithm is actually O(n). The best case scenario is that the algorithm is sorting a fully sorted or nearly sorted array \u2014 which means the inner loop will rarely be used. Of course, we probably wouldn't be trying to sort arrays that are already sorted \u2014 so the best case scenario wouldn't happen very often."),(0,a.kt)("p",null,"After our while loop shifts an element to the right, it decrements the index of the sorted section:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"indexOfSortedSection--\n")),(0,a.kt)("p",null,"Here's something a little weird about our algorithm. What if we need to insert something in the first position of our array? Well, ",(0,a.kt)("inlineCode",{parentName:"p"},"indexOfSortedSection")," will be decremented to ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),". Fortunately, the following is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", which will cause our while loop to end:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"undefined > valueToInsert\n")),(0,a.kt)("p",null,"This is a bit weird and we can avoid comparing it to ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," by doing the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\nwhile ((indexOfSortedSection >= 0) && (array[indexOfSortedSection] > valueToInsert)) {\n...\n")),(0,a.kt)("p",null,"This would ensure that we never compare it to ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," \u2014 though it ultimately amounts to the same thing."),(0,a.kt)("p",null,"Finally, once we've determined where we should insert ",(0,a.kt)("inlineCode",{parentName:"p"},"valueToInsert"),", we do so with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"array[indexOfSortedSection + 1] = valueToInsert;\n")),(0,a.kt)("p",null,"That's because when we determine that ",(0,a.kt)("inlineCode",{parentName:"p"},"valueToInsert")," is greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"array[indexOfSortedSection]"),", we have to put the value ",(0,a.kt)("em",{parentName:"p"},"after")," ",(0,a.kt)("inlineCode",{parentName:"p"},"array[indexOfSortedSection]")," \u2014 in other words, ",(0,a.kt)("inlineCode",{parentName:"p"},"array[indexOfSortedSection + 1]"),"."),(0,a.kt)("p",null,"Once this is all done, the array will be sorted and we can return it. While this algorithm is generally fairly slow, it is not too inefficient with smaller collections \u2014 and can be faster than better algorithms if the collection is small enough. We also don't need to worry about space because it will switch values in-place."),(0,a.kt)("p",null,"As we mentioned earlier, this algorithm can be a bit confusing at first. If you weren't able to figure out how to write it on your own \u2014 or are still feeling confused \u2014 we recommend trying it out in a VS Code Jest environment, adding a breakpoint to step through the code so you can see what happens on each line."))}p.isMDXComponent=!0}}]);