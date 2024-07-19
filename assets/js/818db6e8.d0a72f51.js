"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[70197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(d,o(o({ref:t},h),{},{components:n})):r.createElement(d,o({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u270f\ufe0f Utilizing Big O Notation Practice",id:"utilizing-big-o-notation-practice",slug:"utilizing-big-o-notation-practice",hide_table_of_contents:!0,sidebar_position:10,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/capstone/blob/main/2_big_o_practice.md"},o=void 0,l={unversionedId:"capstone/capstone-week-1/utilizing-big-o-notation-practice",id:"capstone/capstone-week-1/utilizing-big-o-notation-practice",title:"\u270f\ufe0f Utilizing Big O Notation Practice",description:"In the last lesson, we covered the basics of Big O notation. In this lesson, it's time to practice what we've covered. Go through the exercises below and try to identify the Big O of each algorithm. The answers (along with brief explanations) are at the end of the lesson. If some of the code looks confusing, don't worry about trying to understand every line \u2014 just see if you can correctly figure out the Big O runtime complexity.",source:"@site/docs/capstone/1_capstone-week-1/AJ-utilizing-big-o-notation-practice.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/utilizing-big-o-notation-practice",permalink:"/v1/capstone/capstone-week-1/utilizing-big-o-notation-practice",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u270f\ufe0f Utilizing Big O Notation Practice",id:"utilizing-big-o-notation-practice",slug:"utilizing-big-o-notation-practice",hide_table_of_contents:!0,sidebar_position:10,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/capstone/blob/main/2_big_o_practice.md"},sidebar:"capstone",previous:{title:"\ud83d\udcd3 Introduction to Big O Notation",permalink:"/v1/capstone/capstone-week-1/introduction-to-big-o-notation"},next:{title:"\ud83d\udcd3 Introduction to Trees",permalink:"/v1/capstone/capstone-week-1/introduction-to-trees"}},s={},u=[{value:"Problem 1",id:"problem-1",level:3},{value:"Problem 2",id:"problem-2",level:3},{value:"Problem 3",id:"problem-3",level:3},{value:"Problem 4",id:"problem-4",level:3},{value:"Problem 5",id:"problem-5",level:3},{value:"Problem 6",id:"problem-6",level:3},{value:"Problem 7",id:"problem-7",level:3},{value:"Problem 8",id:"problem-8",level:3},{value:"Problem 9",id:"problem-9",level:3},{value:"Problem 10",id:"problem-10",level:3},{value:"Answers",id:"answers",level:3}],h={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the last lesson, we covered the basics of Big O notation. In this lesson, it's time to practice what we've covered. Go through the exercises below and try to identify the Big O of each algorithm. The answers (along with brief explanations) are at the end of the lesson. If some of the code looks confusing, don't worry about trying to understand every line \u2014 just see if you can correctly figure out the Big O runtime complexity."),(0,a.kt)("h3",{id:"problem-1"},"Problem 1"),(0,a.kt)("p",null,"We can use the following algorithm to see if a numerical value exists in an array. The algorithm will find the first place where the number exists and return its index."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function findFirstIndexOfNumber(number, array) {\n  for (let i = 0; i < array.length; i++) {\n    if (array[i] === number) {\n      return i;\n    }\n  }\n  return -1\n}\n")),(0,a.kt)("p",null,"What is the Big O runtime of this algorithm?"),(0,a.kt)("h3",{id:"problem-2"},"Problem 2"),(0,a.kt)("p",null,"Now for a wrinkle on the last problem. Instead of finding just the first index where a number exists, our algorithm needs to find ",(0,a.kt)("em",{parentName:"p"},"every")," index where the number exists. Here's the algorithm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function findEachIndexOfNumber(number,array) {\n  let arrayOfIndexes = [];\n  array.forEach(function(element, index) {\n    if (element === number) {\n      arrayOfIndexes.push(index);\n    }\n  });\n  return arrayOfIndexes;\n}\n")),(0,a.kt)("p",null,"What is the Big O runtime for this algorithm?"),(0,a.kt)("h3",{id:"problem-3"},"Problem 3"),(0,a.kt)("p",null,"The following function checks to see if the last item in a data set is higher or lower than the first item in a data set \u2014 and returns ",(0,a.kt)("em",{parentName:"p"},"Higher"),", ",(0,a.kt)("em",{parentName:"p"},"Lower"),", or ",(0,a.kt)("em",{parentName:"p"},"Neither"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const array = [36, 14, 1, 7, 21];\n\nfunction higherOrLower(array) {\n  if (array[array.length -1 ] > array[0]) {\n    return "Higher";\n  else if (array[array.length -1 ] < array[0]) {\n    return "Lower";\n  } else {\n    return "Neither";\n  }\n}\n')),(0,a.kt)("p",null,"What is its Big O?"),(0,a.kt)("h3",{id:"problem-4"},"Problem 4"),(0,a.kt)("p",null,"We can use the following function to determine the sum of an array of sequential numbers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const array = [1,2,3,4,5,6,7,8];\n\nfunction determineSumOfSequentialArray(array) {\n   let sum = 0;\n   for (let i = 0; i < array.length; i++) {\n       sum += array[i];\n   }\n   return sum;\n}\n")),(0,a.kt)("p",null,"What is the Big O notation for this algorithm?"),(0,a.kt)("h3",{id:"problem-5"},"Problem 5"),(0,a.kt)("p",null,"We can also find the sum of an array of sequential numbers that begins with one in another way as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const array = [1,2,3,4,5,6,7,8];\n\nfunction determineSumOfSequentialArray(array) {\n  return array.length * (array.length + 1)/2;\n}\n")),(0,a.kt)("p",null,"What is the Big O of this algorithm?"),(0,a.kt)("h3",{id:"problem-6"},"Problem 6"),(0,a.kt)("p",null,"We can use the following recursive function to search an array of sorted numerical values to find a specific number in that array (or return -1 if the value isn't in the array):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function searchSortedArray(number, array, beginIndex = 0, endIndex = array.length - 1) {\n  let middleIndex = Math.floor((beginIndex + endIndex)/2);\n  if (array[middleIndex] === number) {\n    return middleIndex;\n  } else if (beginIndex >= endIndex) {\n    return -1;\n  } else if (array[middleIndex] < number) {\n    beginIndex = middleIndex + 1;\n    return searchSortedArray(number, array, beginIndex, endIndex);\n  } else if (array[middleIndex] > number) {\n    endIndex = middleIndex - 1;\n    return searchSortedArray(number, array, beginIndex, endIndex);\n  }\n}\n")),(0,a.kt)("p",null,"What is the Big O runtime of this algorithm?"),(0,a.kt)("h3",{id:"problem-7"},"Problem 7"),(0,a.kt)("p",null,"The following algorithm compares the values of two arrays and returns an array of pairs where the indexes match in both arrays. For instance, look at the following arrays:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const array1 = [3, 7, 9, 12, 15, 18, 32];\nconst array2 = [3, 3, 7, 41, 76];\n")),(0,a.kt)("p",null,"The first element in ",(0,a.kt)("inlineCode",{parentName:"p"},"array1")," matches both the first and second elements in ",(0,a.kt)("inlineCode",{parentName:"p"},"array2"),". This means the pairs ",(0,a.kt)("inlineCode",{parentName:"p"},"[0,0]")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"[0,1]")," will be in the returned array. The second element in ",(0,a.kt)("inlineCode",{parentName:"p"},"array1")," matches the third element in ",(0,a.kt)("inlineCode",{parentName:"p"},"array2")," so ",(0,a.kt)("inlineCode",{parentName:"p"},"[1,2]")," will also be in the returned array. So with the two arrays above, the function will return:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"[[0,0],[0,1],[1,2]]\n")),(0,a.kt)("p",null,"Here is the algorithm itself:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function compareArrays(array1, array2) {\n  let arrayOfPairs = [];\n  array1.forEach(function(e, i) {\n    array2.forEach(function(e2, i2) {\n      if (e === e2) {\n        arrayOfPairs.push([i, i2]);\n      }\n    });\n  });\n  return arrayOfPairs;\n}\n")),(0,a.kt)("p",null,"What is the runtime of this algorithm?"),(0,a.kt)("h3",{id:"problem-8"},"Problem 8"),(0,a.kt)("p",null,"The following function will sort an array of numbers from lowest to highest value. What is its runtime complexity?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function sortByValue(array){\n  function swap(array, index1, index2){\n    let temporaryValue = array[index1];\n    array[index1] = array[index2];\n    array[index2] = temporaryValue;\n  }\n  let count = 1;\n  while (count < array.length) {\n    let swapCount = 0;\n    for (let i=0; i<array.length-count; i++) {\n      if (array[i] > array[i+1]) {\n        swap(array, i, i+1);\n        swapCount++;\n      }\n    }\n   count++;\n }\n   return array;\n}\n")),(0,a.kt)("h3",{id:"problem-9"},"Problem 9"),(0,a.kt)("p",null,"The following algorithm checks to see if two arrays have any duplicate values. If they do, the duplicate values are pushed to an array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function returnDupes(array, array2) {\n  let dupeArray = [];\n  array.forEach(function(element) {\n    if (array2.includes(element)) {\n      dupeArray.push(element);\n    }\n  });\n  return dupeArray;\n}\n")),(0,a.kt)("p",null,"What is the Big O runtime of this algorithm?"),(0,a.kt)("h3",{id:"problem-10"},"Problem 10"),(0,a.kt)("p",null,"The following algorithm takes an array of elements and filters it so only elements between 5 and 20 are returned. Then it reduces the filtered array to its sum."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function sumFilteredData(array) {\n  return array.filter(function(element) {\n    return ((element > 5) && (element < 20))\n  }).reduce(function(valueToAdd, currentValue) {\n    return valueToAdd + currentValue;\n  }, 0);\n}\n")),(0,a.kt)("p",null,"What is the Big O runtime of this algorithm?"),(0,a.kt)("h3",{id:"answers"},"Answers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer #1:")," This algorithm needs to loop through the array until it finds the first occurrence of the number we are looking for. It doesn't matter how big the data set is, though \u2014 at most we need to loop through it once. The algorithm is O(N) linear time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer #2:")," Trick question! While this algorithm is a bit more intensive than the previous ones because it always has to search ",(0,a.kt)("em",{parentName:"p"},"all")," elements in the array, the upper bound is still the same \u2014 looping through each element once. The runtime is O(N) linear time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer #3:")," It doesn't matter how large the data set is. The algorithm just needs the first and last element in the array to calculate the answer. This algorithm is O(1) constant time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer #4:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"determineSumOfSequentialArray()")," has a single loop. As the data set grows, the time it takes to loop through the data set will also grow in a linear fashion. This algorithm is O(N)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer #5:")," No matter how big the size of the data set, our algorithm is simply doing a single computation. Because arrays have an inherent length property, there are no extra operations for larger arrays. This algorithm is O(1) (constant time). This is a much more efficient way to sum sequential arrays!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer #6:")," The key here is to determine that each time the function is called, the algorithm looks at the middle index of the array, determines whether or not the number it's searching for is higher or lower, and then throws out the other half of the array. Halving a data set is a good indicator that this algorithm has a runtime complexity of O(log N). The space complexity, which we should consider because it's a recursive function and uses a call stack, is also O(log N). By the way, this is a binary search algorithm \u2014 which we'll learn more about in a future lesson."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer #7:")," This algorithm uses a loop within a loop. For that reason, it might be tempting to say this algorithm has a runtime complexity of O(N",(0,a.kt)("sup",null,"2"),"). However, that is not the case! The outer loop loops over one array while the inner loop loops over a ",(0,a.kt)("em",{parentName:"p"},"different")," array. We have two different variables here, not one! In this case, we don't need to be beholden to the variable N. Instead, it would be more accurate to state that this algorithm has a runtime complexity of O(AB), where A represents the first array and B represents the second array. However, just as O(N",(0,a.kt)("sup",null,"2"),") is not a great runtime, nor is O(AB) in the case of large data sets."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer #8:")," Even if the code seems a bit confusing at first, the nested loop should be a giveaway \u2014 there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop inside a while loop. This algorithm has O(N",(0,a.kt)("sup",null,"2"),") runtime complexity, which means it has quadratic complexity. By the way, this is an example of a sorting algorithm known as bubble sort. We will learn more about this sorting algorithm in a future lesson."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer #9:")," In terms of code, this algorithm might seem to be elegantly written and concise. At a glance, it appears to be O(N) because it has a single loop. But be careful. What do you think ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.includes()")," is doing under the hood? It doesn't just automatically know whether an array includes a value. It needs to iterate through the array to find a value. While JavaScript is presumably using optimized techniques under the hood to find that value, iteration is still necessary. So we essentially have a nested loop, though each loop is looping through a different array. As a result, we can call this O(AB) time \u2014 which potentially is as slow as quadratic time if both arrays are very large. Keep an eye out for JavaScript convenience methods like ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.includes()")," and ask yourself whether they might be looping under the hood."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer #10:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," both iterate through the entire collection. In this algorithm, these iterations are chained, not nested, so the Big O runtime is O(2N). Because we drop the constants, the Big O is O(N). You might wonder why ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," doesn't affect the Big O runtime \u2014 won't it potentially make the data set much smaller? Remember that Big O concerns itself with upper bounds \u2014 and it's possible that in this situation ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," wouldn't filter any results out of a large data set."))}c.isMDXComponent=!0}}]);