"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[18918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),h=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=h(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var h=2;h<r;h++)l[h]=n[h];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var a=n(87462),o=(n(67294),n(3905));const r={title:"\ud83d\udcd3 Bubble Sort",day:"thursday",id:"bubble-sort",hide_table_of_contents:!0},l=void 0,i={unversionedId:"capstone/capstone-week-1/bubble-sort",id:"capstone/capstone-week-1/bubble-sort",title:"\ud83d\udcd3 Bubble Sort",description:"In this lesson, we'll cover the bubble sort algorithm. It isn't efficient for either large or small collections, so there's no reason to use it in the real world. However, it is a conceptually interesting way of sorting a collection \u2014 and this gives us an opportunity to explore yet another method for sorting.",source:"@site/docs/capstone/1_capstone-week-1/BI-bubble-sort.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/bubble-sort",permalink:"/capstone/capstone-week-1/bubble-sort",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 Bubble Sort",day:"thursday",id:"bubble-sort",hide_table_of_contents:!0},sidebar:"capstone",previous:{title:"\u270f\ufe0f Selection Sort",permalink:"/capstone/capstone-week-1/selection-sort"},next:{title:"\ud83d\udcd3 Merge Sort",permalink:"/capstone/capstone-week-1/merge-sort"}},s={},h=[{value:"Clues",id:"clues",level:3},{value:"Solution",id:"solution",level:3}],p={toc:h},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll cover the ",(0,o.kt)("strong",{parentName:"p"},"bubble sort algorithm"),". It isn't efficient for either large ",(0,o.kt)("em",{parentName:"p"},"or")," small collections, so there's no reason to use it in the real world. However, it is a conceptually interesting way of sorting a collection \u2014 and this gives us an opportunity to explore yet another method for sorting."),(0,o.kt)("p",null,"A bubble sort algorithm compares the first two elements in a collection. If the first element is the higher value, that means the two elements are out of order \u2014 so the algorithm swaps them. Then it does the same comparison between the second and third elements, the third and fourth elements, and so on until it has gone through the entire collection. Then it will iterate through the entire collection again, swapping as needed. The algorithm is called ",(0,o.kt)("em",{parentName:"p"},"bubble")," sort because elements eventually bubble up in the correct order \u2014 though it can take many iterations for this to happen. In fact, since the higher of the two elements is always moved to the right in a bubble swap, after the first passthrough, the last element is sorted. After the second passthrough, we know the second-to-last element is sorted, and so on. Adding this optimization can make a bubble sort 50% faster \u2014 though its Big O still O(n",(0,o.kt)("sup",null,"2"),"), or quadratic time."),(0,o.kt)("p",null,"Let's take a look at a visual example of a bubble sort's first passthrough of a collection."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"This chart shows a bubble sort comparing elements in a collection and swapping as needed.",src:n(70222).Z,width:"681",height:"931"})),(0,o.kt)("p",null,"As we can see from this illustration, the bubble sort algorithm compares one pair of elements at a time and swaps them as needed. By the end of the first iteration, the last element in the collection will be sorted. It's just a coincidence that the last three elements happen to be sorted in the diagram above. Each iteration through the collection can only guarantee that one more sorted element will be added to the end \u2014 though in general, the rest of the collection will gradually become more sorted as well."),(0,o.kt)("p",null,"Looking at the example above, how many more passthroughs will the algorithm need to make before it is finished?"),(0,o.kt)("p",null,"If you guessed two, that is almost the right answer. After two more passes, the collection will be entirely sorted because ",(0,o.kt)("inlineCode",{parentName:"p"},"3")," will be in its correct place at the beginning of the collection."),(0,o.kt)("p",null,"However, the algorithm doesn't know the collection is sorted yet. It will need to make ",(0,o.kt)("em",{parentName:"p"},"one more")," pass to ensure that every element is sorted."),(0,o.kt)("p",null,"At this point, it's time to try to implement your own bubble sort algorithm. The solution we will provide below is recursive, though your solution does not need to be. Once again, try to solve the problem without using the clues below. As needed, read a clue and see if you can solve the problem before moving onto the next clue."),(0,o.kt)("h3",{id:"clues"},"Clues"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Clue #1:")," We'll need a simple loop that iterates through the array. Each time through the array, it needs to do a comparison. ",(0,o.kt)("inlineCode",{parentName:"p"},"if (array[index] > array[index + 1])"),", something needs to happen, but what?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Clue #2:")," If our algorithm finds it needs to swap two values, we'll have to have a placeholder for one of them \u2014 otherwise one of the values will get lost as we are trying to swap! It could look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let min = array[index + 1];\narray[index + 1] = array[index];\narray[index] = min;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Clue #3:")," How is our algorithm supposed to know when if it needs to iterate through the collection again or not? Well, we can use a flag called ",(0,o.kt)("inlineCode",{parentName:"p"},"swapped")," that is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," \u2014 but is changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if a swap happens while iterating through the collection."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Clue #4:")," Once we have the basic algorithm in place, how can we make it more efficient? Well, each time we fully iterate through the collection, we know at least one more element at the end of the collection has been sorted. We can set up a counter for the number of ",(0,o.kt)("inlineCode",{parentName:"p"},"passes")," we've made \u2014 and then the next time through the loop, the number of iterations will be less than ",(0,o.kt)("inlineCode",{parentName:"p"},"array.length \u2014 passes"),"."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Now we're ready for the solution. As we mentioned before, we are providing a recursive solution \u2014 but you can also solve this without recursion as well. Here is an example of the bubble sort algorithm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function bubbleSort(array, passes = 0) {\n  let swapped = false;\n  for (let index = 0; index < array.length \u2014 passes; index++) {\n    if (array[index] > array[index + 1]) {\n      let min = array[index + 1];\n      array[index + 1] = array[index];\n      array[index] = min;\n      swapped = true;\n    }\n  }\n  passes++\n  if (swapped === true) {\n    return bubbleSort(array, passes);\n  } else {\n    return array;\n  }\n}\n")),(0,o.kt)("p",null,"Our function takes an ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," as an argument. It will also start with ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," passes."),(0,o.kt)("p",null,"Next, we have a variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"swapped")," that flags whether any values have been swapped or not. It starts out as ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,"If an array has already been sorted, the algorithm will only need to iterate through it once \u2014 that is O(n). Of course, that is a best case (and rare) scenario."),(0,o.kt)("p",null,"Next, we have our loop. Note that it will keep iterating until ",(0,o.kt)("inlineCode",{parentName:"p"},"index < array.length \u2014 passes"),". The first time this for loop fully runs, ",(0,o.kt)("inlineCode",{parentName:"p"},"passes")," will be 0 \u2014 but it will be increased by 1 after the algorithm has fully iterated through the collection. Technically, we don't need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"passes")," at all for this algorithm to work \u2014 but it does make it considerably more efficient."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"(array[index] > array[index + 1])"),", that means the values need to be swapped. Remember, the lower value needs to be on the right as this will be sorted in ascending value."),(0,o.kt)("p",null,"Here's how we make the swap:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let min = array[index + 1];\narray[index + 1] = array[index];\narray[index] = min;\nswapped = true;\n")),(0,o.kt)("p",null,"First, we need to store one of the values in a variable \u2014 otherwise, when we make the swap, one of the values would end up lost. Then we make the swap. Finally, we make sure our ",(0,o.kt)("inlineCode",{parentName:"p"},"swapped")," flag is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". If this conditional is never hit when the algorithm runs through the loop, ",(0,o.kt)("inlineCode",{parentName:"p"},"swapped")," will remain ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", which means the collection is fully sorted."),(0,o.kt)("p",null,"After the ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop is complete, we increment the number of ",(0,o.kt)("inlineCode",{parentName:"p"},"passes")," by 1. This way, the next time we iterate through the collection, we can omit one more element from the end \u2014 because each time through the collection, the remaining highest value will be sorted. In other words, the sorted section at the end of the array becomes one element longer."),(0,o.kt)("p",null,"Finally, if ",(0,o.kt)("inlineCode",{parentName:"p"},"swapped")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the algorithm calls itself recursively and goes through the process of iterating through the collection again."),(0,o.kt)("p",null,"However, if ",(0,o.kt)("inlineCode",{parentName:"p"},"swapped")," is not true, that means the algorithm went through the entire collection without swapping any pairs \u2014 which means it's fully sorted and can be returned."),(0,o.kt)("p",null,"And that, in a nutshell, is the bubble sort algorithm \u2014 an algorithm that is interesting to learn but which you will likely never use in the real world."))}c.isMDXComponent=!0},70222:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bubble-sort-415870ea93b2f8677b027b8501c13391.png"}}]);