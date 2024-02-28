"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[52725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={title:"\ud83d\udcd3 1.3.2.7 Separation of Logic: Fixing a Bug in Text Analyzer",day:"tuesday",id:"1-3-2-7-separation-of-logic-fixing-a-bug-in-text-analyzer",hide_table_of_contents:!0},a=void 0,s={unversionedId:"introduction-to-programming/arrays-looping/1-3-2-7-separation-of-logic-fixing-a-bug-in-text-analyzer",id:"introduction-to-programming/arrays-looping/1-3-2-7-separation-of-logic-fixing-a-bug-in-text-analyzer",title:"\ud83d\udcd3 1.3.2.7 Separation of Logic: Fixing a Bug in Text Analyzer",description:"We have a bug in our Text Analyzer application. But what exactly is it? You'll find it if you test the application out in the browser. This GIF below demonstrates exactly what is happening. In this lesson, we'll solve the bug, but we'll also do it while keeping our UI and business logic separated. At the end of the lesson, we'll look at two examples of poorly separated logic.",source:"@site/docs/1_introduction-to-programming/3_arrays-looping/AY-1-3-2-7-separation-of-logic-fixing-a-bug-in-text-analyzer.md",sourceDirName:"1_introduction-to-programming/3_arrays-looping",slug:"/introduction-to-programming/arrays-looping/1-3-2-7-separation-of-logic-fixing-a-bug-in-text-analyzer",permalink:"/introduction-to-programming/arrays-looping/1-3-2-7-separation-of-logic-fixing-a-bug-in-text-analyzer",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 1.3.2.7 Separation of Logic: Fixing a Bug in Text Analyzer",day:"tuesday",id:"1-3-2-7-separation-of-logic-fixing-a-bug-in-text-analyzer",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 1.3.2.6 Separation of Logic: Adding a UI to Text Analyzer",permalink:"/introduction-to-programming/arrays-looping/1-3-2-6-separation-of-logic-adding-a-ui-to-text-analyzer"},next:{title:"\ud83d\udcd3 1.3.2.8 Separation of Concerns in Text Analyzer: boldPassage() UI Function",permalink:"/introduction-to-programming/arrays-looping/1-3-2-8-separation-of-concerns-in-text-analyzer-boldpassage-ui-function"}},l={},u=[{value:"Fixing the Bug While Keeping Logic Separated",id:"fixing-the-bug-while-keeping-logic-separated",level:2},{value:"Finding the Bug",id:"finding-the-bug",level:3},{value:"Fixing the Bug",id:"fixing-the-bug",level:3},{value:"Examples of Bad Separation of Logic",id:"examples-of-bad-separation-of-logic",level:2},{value:"Example 1: Accessing or Updating the DOM from your Business Logic",id:"example-1-accessing-or-updating-the-dom-from-your-business-logic",level:3},{value:"Example 2: Including a Message to the User in the Values Returned from Business Logic Functions",id:"example-2-including-a-message-to-the-user-in-the-values-returned-from-business-logic-functions",level:3}],c={toc:u},p="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We have a bug in our Text Analyzer application. But what exactly is it? You'll find it if you test the application out in the browser. This GIF below demonstrates exactly what is happening. In this lesson, we'll solve the bug, but we'll also do it while keeping our UI and business logic separated. At the end of the lesson, we'll look at two examples of poorly separated logic."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Application correctly shows the occurrence of a word unless we don&#39;t enter anything into the selected-count field",src:n(40226).Z,width:"800",height:"272"})),(0,r.kt)("h2",{id:"fixing-the-bug-while-keeping-logic-separated"},"Fixing the Bug While Keeping Logic Separated"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"If we enter a text passage into the first form field and a word into the second form field, everything works correctly. However, if we don't enter anything in the second form field, our application states that the selected word count is the same as the total word count. But how is that possible? It should be zero \u2014 or better yet, the selected word count shouldn't show at all if it's not entered."),(0,r.kt)("p",null,"Considering the latter option, couldn't we just hide the selected word count and only show it if a word is entered in the second form field?"),(0,r.kt)("p",null,"Well, sure, we ",(0,r.kt)("em",{parentName:"p"},"could"),". And at least from a user perspective, there'd no longer be a bug. But that would be like sweeping dust under the rug so no one else will see it. It's still there. And it could eventually morph into a terrifying dust monster from another dimension if it's left there. Okay, that's not technically true, but the point is, we can't just hide bugs. We need to fix them."),(0,r.kt)("p",null,"This also gives us a perfect opportunity to revisit some of the debugging techniques we covered in the last course section. Remember those? We are especially referring to the techniques in ",(0,r.kt)("a",{parentName:"p",href:"/introduction-to-programming/javascript-and-web-browsers/1-2-4-7-debugging-in-javascript-using-debugger-and-breakpoints"},"Debugging in JavaScript: Using debugger and Breakpoints"),"."),(0,r.kt)("p",null,"So let's solve this by adding a breakpoint! We'll review the techniques covered in the lesson linked above because they are absolutely essential tools for debugging your code. Consider this a refresher. Whether or not you are feeling good about using breakpoints yet, they are so important that it's worth covering them again."),(0,r.kt)("h3",{id:"finding-the-bug"},"Finding the Bug"),(0,r.kt)("p",null,"At this point, we don't know what's causing the error. It seems like we've tested our functions pretty thoroughly, so maybe it's coming from the UI. However, it's still possible we missed something."),(0,r.kt)("p",null,"Start by opening the DevTools console if you haven't already. We always want to keep an eye on the console when we are testing our code in the browser."),(0,r.kt)("p",null,"If we load our page, there aren't any errors, which means there's nothing obvious just yet."),(0,r.kt)("p",null,"Next, click on the ",(0,r.kt)("em",{parentName:"p"},"Sources")," tab. If you dragged ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," into your browser to open the application, your ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js")," code should already be showing. If not, you may need to manually add the code by clicking ",(0,r.kt)("em",{parentName:"p"},"Filesystem")," in the left pane of ",(0,r.kt)("em",{parentName:"p"},"Sources")," and then clicking the ",(0,r.kt)("em",{parentName:"p"},"+")," icon as the GIF below shows."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Opening a new workspace for debugging.",src:n(63975).Z,width:"482",height:"726"})),(0,r.kt)("p",null,"Once we have our code open, we need to insert a breakpoint. The GIF below demonstrates the whole debugging process using a breakpoint. We'll also explain it in detail after the GIF and you should walk through the process on your own as well."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"We insert a breakpoint to pinpoint where the bug is, then test our function in the console.",src:n(45880).Z,width:"835",height:"533"})),(0,r.kt)("p",null,"First, we click on the line of code where we want the code to pause. Since the error is occurring in the line where we'd expect to see ",(0,r.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()")," correctly rendered, let's start by verifying that our ",(0,r.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()")," function is working correctly. That means we will add the breakpoint to the line right ",(0,r.kt)("em",{parentName:"p"},"after")," the line ",(0,r.kt)("inlineCode",{parentName:"p"},"const occurrencesOfWord = numberOfOccurrencesInText(word, passage);"),". This is line 39 in the GIF, though it might be a slightly different line number in your code."),(0,r.kt)("p",null,"Next, we manually submit the form again. Our code will execute and when it reaches the breakpoint, it will pause. The Sources tab will also show us the result of each line of code, which is very helpful. For instance, we can see the value of word from the input is ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),". We can also see that ",(0,r.kt)("inlineCode",{parentName:"p"},"occurrencesOfWord")," is equal to 6. That's not at all what we want."),(0,r.kt)("p",null,"In other words, the call was coming from inside the house all along! It's not the UI \u2014 the bug is coming from the function ",(0,r.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()")," that we've already tested."),(0,r.kt)("p",null,"In the GIF above, we then move to the Console tab and manually test the function ourselves with different arguments, but still passing in an empty string for the ",(0,r.kt)("inlineCode",{parentName:"p"},"word")," parameter."),(0,r.kt)("p",null,"Specifically, we do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'numberOfOccurrencesInText("", "hi");\n')),(0,r.kt)("p",null,"The result is ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", which isn't correct. It's often very helpful to try out code within the scope of the breakpoint. Remember, you can just switch over to the console and check the value of any functions or variables that exist in that scope when your code is paused. And if they don't exist when you expected they would, well, you've got a scope problem. While the values in the Sources tab generally give you a lot of information, we still recommend using the console to test your code regularly within breakpoints."),(0,r.kt)("p",null,"This particular problem isn't a scope problem, though. We have a bug in our ",(0,r.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()")," function. As a review, here's the code for the ",(0,r.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function numberOfOccurrencesInText(word, text) {\n  const textArray = text.split(" ");\n  let wordCount = 0;\n  textArray.forEach(function(element) {\n    if (element.toLowerCase().includes(word.toLowerCase())) {\n      wordCount++;\n    }\n  });\n  return wordCount;\n}\n')),(0,r.kt)("p",null,"When we originally used TDD to write this function, we wrote a test that checks if the text passage is an empty string but we never tested what would happen if the word itself is an empty string. That's one mistake we made. However, even if we had written that test early on, it would've broken later. That's because we introduced a new bug when we refactored our function to use ",(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.includes()"),". Check this out:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'"hi".includes("");\ntrue\n')),(0,r.kt)("p",null,"It turns out that when we use ",(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.includes()"),", ",(0,r.kt)("em",{parentName:"p"},"every")," string includes ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),". A really tiny bug, right? Well, look how quickly it came back to bite us. It's easy to forget a simple test like this. In fact, we just did."),(0,r.kt)("p",null,"If we were using Jest and we'd already written a test for this, Jest would automatically find and notify us of the failed test. As we'll discover in a few course sections, automated testing is a very powerful tool. However, it only works as well as the tests we write, which means we need to work on good test-writing practices now with our pseudocode tests."),(0,r.kt)("h3",{id:"fixing-the-bug"},"Fixing the Bug"),(0,r.kt)("p",null,"So let's fix this issue. Here are two possible fixes. Which one do you think is better?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Update our UI so that a user can't pass in an empty string or otherwise update the UI so the ",(0,r.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()")," function won't be called for an empty string.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Update our function so it can handle an empty string input for a word."))),(0,r.kt)("p",null,"If you guessed the second option, you are correct!"),(0,r.kt)("p",null,"Remember, our goal right now is to keep our logic separate. Our function should be robust on its own. If we tried to fix the problem by addressing the UI, our function would get more dependent on external logic (in this case, code that checks the user input in the UI) \u2014 and that is not good separation. "),(0,r.kt)("p",null,"There's certainly nothing wrong with doing ",(0,r.kt)("em",{parentName:"p"},"both")," things. For instance, we could ",(0,r.kt)("em",{parentName:"p"},"also")," do something in the UI as well. But they are still two completely different things. On the one hand, we want a robust function that always correctly returns the number of occurrences of a word. On the other, we want to notify a user if they don't input a word. Technically, our function could handle both things but it shouldn't. That would mean our code isn't properly separated."),(0,r.kt)("p",null,"So what's the next step?"),(0,r.kt)("p",null,"No, it's not time to fix the code yet. ",(0,r.kt)("em",{parentName:"p"},"First"),", we need to write a test. Always. No matter how small the fix."),(0,r.kt)("p",null,"Here's the test. (This should be the last test in the ",(0,r.kt)("strong",{parentName:"p"},"Describe")," block for ",(0,r.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Test: "If an empty string is passed in as a word, it should return 0."\nCode:\nconst word = "";\nconst text = "red RED Red!";\nnumberOfOccurrencesInText(word, text);\nExpected Output: 0\n')),(0,r.kt)("p",null,"The fix is simple:"),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function numberOfOccurrencesInText(word, text) {\n  if (word.trim().length === 0) {\n    return 0;\n  }\n  const textArray = text.split(" ");\n  let wordCount = 0;\n  textArray.forEach(function(element) {\n    if (element.toLowerCase().includes(word.toLowerCase())) {\n      wordCount++;\n    }\n  });\n  return wordCount;\n}\n')),(0,r.kt)("p",null,"We add a conditional to check if the ",(0,r.kt)("inlineCode",{parentName:"p"},"word")," parameter has 0 characters in it after being trimmed, and if so, return 0:"),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\nif (word.trim().length === 0) {\n  return 0;\n}\n...\n")),(0,r.kt)("p",null,"Remember, we can use ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim"},(0,r.kt)("inlineCode",{parentName:"a"},"String.prototype.trim()"))," to trim all whitespace from both ends of a string. Since the string is all whitespace, that will reduce it to ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),", which has a length of ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("p",null,"So our application has a functioning UI now and we've also fixed a bug. However, take careful note of the fact that we still kept business and UI logic separate in the process."),(0,r.kt)("h2",{id:"examples-of-bad-separation-of-logic"},"Examples of Bad Separation of Logic"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"example-1-accessing-or-updating-the-dom-from-your-business-logic"},"Example 1: Accessing or Updating the DOM from your Business Logic"),(0,r.kt)("p",null,"Let's say that we wanted to return a message to the user in the UI if they don't enter a word. We aren't actually going to do this \u2014 we just want to illustrate two examples where logic isn't properly separated. One of these examples is very obvious while the other is less so."),(0,r.kt)("p",null,"Here's the obviously bad example of mixing UI and business logic in our function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// This is bad! Don\'t put any logic to alter the DOM in your function!\n\nfunction numberOfOccurrencesInText(word, text) {\n  if (word.trim().length === 0) {\n    // I\'m directly altering the DOM from my business logic! This is bad.\n    document.getElementById("total-count").innerText = 0;\n  }\n  const textArray = text.split(" ");\n  let wordCount = 0;\n  textArray.forEach(function(element) {\n    if (element.toLowerCase().includes(word.toLowerCase())) {\n      wordCount++;\n    }\n  });\n  // I\'m directly altering the DOM from my business logic! This is bad.\n  document.getElementById("total-count").innerText = wordCount;\n}\n')),(0,r.kt)("p",null,"This example should be really obvious. Instead of returning the number of occurrences, the function doesn't return anything at all. It directly alters the DOM \u2014 which should be part of our user interface logic. Whenever you see a function altering the DOM in business logic, it's time to refactor. You shouldn't be doing it in the first place. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Again, if you have code that directly accesses or alters the DOM in any way, keep it out of your business logic.")," That's a job for the UI logic. "),(0,r.kt)("h3",{id:"example-2-including-a-message-to-the-user-in-the-values-returned-from-business-logic-functions"},"Example 2: Including a Message to the User in the Values Returned from Business Logic Functions"),(0,r.kt)("p",null,"Now let's look at a slightly less obvious example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Not so good either, but for less obvious reasons.\n\nfunction numberOfOccurrencesInText(word, text) {\n  if (word.trim().length === 0) {\n    return "You need to enter a word!";\n  }\n  const textArray = text.split(" ");\n  let wordCount = 0;\n  textArray.forEach(function(element) {\n    if (element.toLowerCase().includes(word.toLowerCase())) {\n      wordCount++;\n    }\n  });\n  return "There are " + wordCount + " total matches!";\n}\n')),(0,r.kt)("p",null,"Here there's no alteration of the DOM. However, our function still has a problem with separation of logic. How so? Well, it's really nice when our function ",(0,r.kt)("em",{parentName:"p"},"just")," returns the number of occurrences of a word in a text. It shouldn't care about anything else. That includes providing a message for a user. A message like ",(0,r.kt)("inlineCode",{parentName:"p"},'"You need to enter a word!"')," really belongs in the user interface because it's a specific message for a user. If you want to return these kinds of messages, put them in the UI logic instead."),(0,r.kt)("p",null,"Here's a silly example to hammer home the point. What if ",(0,r.kt)("inlineCode",{parentName:"p"},'"xyz".split("")')," didn't return the array ",(0,r.kt)("inlineCode",{parentName:"p"},'["x", "y", "z"]'),", but instead returned the following message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\"Hooray. You've successfully split the string into three elements: \xa0['x', 'y', 'z']!\"\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.split()")," would go from being one of the most useful methods in JavaScript to being absolutely worthless. Don't do the same to your own code!"),(0,r.kt)("p",null,"In the next lesson, we'll give one more example of UI logic versus business logic. This will hopefully really drive home the difference between the two."))}h.isMDXComponent=!0},63975:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-folder-to-workspace-b034b1cfb7d54f347c7c3e07ba33a31d.gif"},40226:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/text-analyzer-bug-8ad6fcaed8d29d509e27c6e3bf0d41d5.gif"},45880:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/text-analyzer-debugging-biz-logic-bug-68b58f791cda569a1c4bbe18cfef9c84.gif"}}]);