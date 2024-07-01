"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[6257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"\ud83d\udcd3 1.3.3.7 for Loops with Text Analyzer",day:"wednesday",id:"1-3-3-7-for-loops-with-text-analyzer",hide_table_of_contents:!0},i=void 0,l={unversionedId:"introduction-to-programming/arrays-looping/1-3-3-7-for-loops-with-text-analyzer",id:"version-1.1/introduction-to-programming/arrays-looping/1-3-3-7-for-loops-with-text-analyzer",title:"\ud83d\udcd3 1.3.3.7 for Loops with Text Analyzer",description:"Over the last few lessons, we've learned how and when to use a for loop. Now let's look at a couple of situations where a for loop would be better than Array.prototype.forEach() in our text analyzer application.",source:"@site/versioned_docs/version-1.1/1_introduction-to-programming/3_arrays-looping/BI-1-3-3-7-for-loops-with-text-analyzer.md",sourceDirName:"1_introduction-to-programming/3_arrays-looping",slug:"/introduction-to-programming/arrays-looping/1-3-3-7-for-loops-with-text-analyzer",permalink:"/v1.1/introduction-to-programming/arrays-looping/1-3-3-7-for-loops-with-text-analyzer",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 1.3.3.7 for Loops with Text Analyzer",day:"wednesday",id:"1-3-3-7-for-loops-with-text-analyzer",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 1.3.3.6 When to use for",permalink:"/v1.1/introduction-to-programming/arrays-looping/1-3-3-6-when-to-use-for"},next:{title:"\u270f\ufe0f 1.3.3.8 Practice: Pig Latin",permalink:"/v1.1/introduction-to-programming/arrays-looping/1-3-3-8-practice-pig-latin"}},s={},p=[{value:"Updating Text Analyzer To Use <code>for</code> Loops",id:"updating-text-analyzer-to-use-for-loops",level:2},{value:"Adding <code>firstInstanceOfWord()</code>",id:"adding-firstinstanceofword",level:3},{value:"Updating <code>isEmpty()</code> To Use Built-In JS <code>arguments</code> Object",id:"updating-isempty-to-use-built-in-js-arguments-object",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Over the last few lessons, we've learned how and when to use a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop. Now let's look at a couple of situations where a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop would be better than ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," in our text analyzer application."),(0,a.kt)("p",null,"We will not use TDD for these examples. That's because we've already covered TDD in depth and the goal here is to focus on ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loops. However, you are expected to continue using TDD in your own projects as well as on this section's independent project. We also won't incorporate the function into the UI. You can do that on your own."),(0,a.kt)("h2",{id:"updating-text-analyzer-to-use-for-loops"},"Updating Text Analyzer To Use ",(0,a.kt)("inlineCode",{parentName:"h2"},"for")," Loops"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"adding-firstinstanceofword"},"Adding ",(0,a.kt)("inlineCode",{parentName:"h3"},"firstInstanceOfWord()")),(0,a.kt)("p",null,"We'll start with adding new functionality to our application. Specifically, we'll add a function that finds the position of the ",(0,a.kt)("strong",{parentName:"p"},"first")," instance of a word in a passage of text. This is a good use case for a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop because we can break out of the loop as soon as we find the first instance of the word."),(0,a.kt)("p",null,"Here's how we might write this function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> function firstInstanceOfWord(word, text) {\n  const textArray = text.split(" ");\n  for (let i = 0; i < textArray.length; i++) {\n    console.log(i);\n    if (word === textArray[i]) {\n      return i;\n    }\n  }\n  return -1;\n}\n')),(0,a.kt)("p",null,"Add this code to the DevTools console and then call it with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> firstInstanceOfWord("hi", "hey hi hey hey hey hey hey hey what");\n0\n\u200b1\n1\n')),(0,a.kt)("p",null,"You'll see that the ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," only logs 0 and 1 before breaking out of the loop and returning ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),", the index location of ",(0,a.kt)("inlineCode",{parentName:"p"},'"hi"'),". This is in contrast to how we'd have to solve this same problem with ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> function firstInstanceOfWord(word, text) {\n  const textArray = text.split(" ");\n  let position = -1;\n  textArray.forEach(function(element, index) {\n    console.log(index);\n    if ((word === element) && (position === -1)) {\n      position = index;\n    }\n  });\n  return position;\n}\n')),(0,a.kt)("p",null,"If we put this version of the function in the DevTools console, it will return the correct answer as well but the function will loop through every element in the array even though it finds what it's looking for in the second element."),(0,a.kt)("p",null,"Also, there are some slightly wonky things we have to do. ",(0,a.kt)("inlineCode",{parentName:"p"},"let position = -1")," is like a flag that's set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". You might wonder why both functions return ",(0,a.kt)("inlineCode",{parentName:"p"},"-1")," if they don't return a matching word. Why not just return ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"? Well, it's common for JavaScript methods to return ",(0,a.kt)("inlineCode",{parentName:"p"},"-1")," when there's not a match. We should be returning a number or a boolean, not a number sometimes and a boolean other times. This makes our function more consistent."),(0,a.kt)("p",null,"Note our conditional, too: ",(0,a.kt)("inlineCode",{parentName:"p"},"if ((word === element) && (position === -1))"),". This is because we only want ",(0,a.kt)("inlineCode",{parentName:"p"},"position")," to be updated ",(0,a.kt)("em",{parentName:"p"},"once"),": the first time we find a match. When that happens, ",(0,a.kt)("inlineCode",{parentName:"p"},"position")," will no longer be ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),". If we didn't do this, the function would always return the ",(0,a.kt)("em",{parentName:"p"},"last")," match, not the first."),(0,a.kt)("p",null,"So in addition to needing to continuing looping even after finding a match, there is some other code we have to add to solve this problem with ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),". That is not ideal. A ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop does a better job in this situation."),(0,a.kt)("p",null,"Of course, the function above doesn't account for case sensitivity, punctuation, and so on. You can add all of this functionality in your own application \u2014 and include tests as well."),(0,a.kt)("h3",{id:"updating-isempty-to-use-built-in-js-arguments-object"},"Updating ",(0,a.kt)("inlineCode",{parentName:"h3"},"isEmpty()")," To Use Built-In JS ",(0,a.kt)("inlineCode",{parentName:"h3"},"arguments")," Object"),(0,a.kt)("p",null,"Now let's look at one other use case for a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop in our application. This is not something you are required to know for the independent project but it's a cool little thing we can use to expand the capacity of our ",(0,a.kt)("inlineCode",{parentName:"p"},"isEmpty()")," function."),(0,a.kt)("p",null,"Remember our little utility method?"),(0,a.kt)("div",{class:"filename"},"scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Utility Logic\n\nfunction isEmpty(testString) {\n  return (testString.trim().length === 0);\n}\n")),(0,a.kt)("p",null,"Well, currently it only checks one input. This means anytime we need to check two separate strings, we need to call ",(0,a.kt)("inlineCode",{parentName:"p"},"isEmpty()")," twice, like in the ",(0,a.kt)("inlineCode",{parentName:"p"},"boldPassage()")," function: "),(0,a.kt)("div",{class:"filename"},"scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function boldPassage(word, text) {\n  if (isEmpty(word) || isEmpty(text)) {\n    return null;\n  }\n  ...\n  return p;\n}\n")),(0,a.kt)("p",null,"While this is a good and working solution, we can improve our ",(0,a.kt)("inlineCode",{parentName:"p"},"isEmpty()")," function by making it work with ",(0,a.kt)("strong",{parentName:"p"},"any")," number of arguments. We'll do this by using JavaScript's ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments"},"arguments object"),"."),(0,a.kt)("p",null,"Check this out:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"> function isEmpty() {\n  for (let i=0; i < arguments.length; i++) {\n    console.log(arguments[i]);\n    if (arguments[i].trim().length === 0) {\n      return true;\n    }\n  }\n  return false;\n}\n")),(0,a.kt)("p",null,"So what exactly is happening here? This function has ",(0,a.kt)("em",{parentName:"p"},"no")," parameters. So where is ",(0,a.kt)("inlineCode",{parentName:"p"},"arguments")," coming from? Well, JavaScript makes an ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments"},"arguments object")," available inside functions that includes the values of ",(0,a.kt)("em",{parentName:"p"},"all")," arguments that are passed into the function. ",(0,a.kt)("strong",{parentName:"p"},"You are ",(0,a.kt)("em",{parentName:"strong"},"not")," expected to ever use this on an independent project but it's a handy thing to know about.")),(0,a.kt)("p",null,"Also, it illustrates another great use for ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loops. That's because ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"arguments"),' is an "array-like" object, just like the ',(0,a.kt)("inlineCode",{parentName:"strong"},"NodeList")," and ",(0,a.kt)("inlineCode",{parentName:"strong"},"HTMLCollection")," objects we learned about at the start of this section.")," We can access each individual argument inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"arguments")," object with bracket notation. However, it's not actually an array so we can't use ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," to loop over the ",(0,a.kt)("inlineCode",{parentName:"p"},"arguments")," object, unless we convert it into an array."),(0,a.kt)("p",null,"So in the ",(0,a.kt)("inlineCode",{parentName:"p"},"isEmpty()")," function, we use a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop. In each iteration through the loop, we check the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"arguments[i]"),". In this way, we can check out ",(0,a.kt)("inlineCode",{parentName:"p"},"arguments[0]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"arguments[1]"),", and so on for as many arguments as we pass into ",(0,a.kt)("inlineCode",{parentName:"p"},"isEmpty()")," when we call it."),(0,a.kt)("p",null,"Let's try it out in the console. Copy the update ",(0,a.kt)("inlineCode",{parentName:"p"},"isEmpty()")," function into the console and then input the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> isEmpty("hi", "bye", "", "bonjour!");\nhi\nbye\n\ntrue\n')),(0,a.kt)("p",null,"As we can see from the return values, each argument is being logged, including the empty string, and then the function returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". It never logs ",(0,a.kt)("inlineCode",{parentName:"p"},"bonjour")," because the function detects an empty string as a parameter, which means not all of the parameters qualify as inputted words."),(0,a.kt)("p",null,"With this update to ",(0,a.kt)("inlineCode",{parentName:"p"},"isEmpty()"),", we can use this utility function ",(0,a.kt)("em",{parentName:"p"},"regardless of the number of arguments")," passed into it. Our utility function just got more useful. Now we can update how we call ",(0,a.kt)("inlineCode",{parentName:"p"},"isEmpty()")," in our ",(0,a.kt)("inlineCode",{parentName:"p"},"boldPassage()")," function:"),(0,a.kt)("div",{class:"filename"},"scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\n// Utility Logic\n\nfunction isEmpty() {\n  for (let i=0; i < arguments.length; i++) {\n    if (arguments[i].trim().length === 0) {\n      return true;\n    }\n  }\n  return false;\n}\n\n// Business Logic\n\n...\n\n// UI Logic\n\nfunction boldPassage(word, text) {\n  if (isEmpty(word, text)) {\n    return null;\n  }\n  ...\n  return p;\n}\n\n...\n")),(0,a.kt)("p",null,"While ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," will usually get the job done \u2014 and should generally be favored whenever we need to loop through each item in an array \u2014 there are plenty of use cases where ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loops are the right tool, including both of the use cases above in our text analyzer application."))}d.isMDXComponent=!0}}]);