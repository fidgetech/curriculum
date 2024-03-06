"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[16169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,h=p["".concat(l,".").concat(g)]||p[g]||u[g]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},46964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"\ud83d\udcd3 1.2.1.8 Debugging in JavaScript: Reading Console Errors",day:"monday",id:"1-2-1-8-debugging-in-javascript-reading-console-errors",hide_table_of_contents:!0},a=void 0,s={unversionedId:"introduction-to-programming/javascript-and-web-browsers/1-2-1-8-debugging-in-javascript-reading-console-errors",id:"introduction-to-programming/javascript-and-web-browsers/1-2-1-8-debugging-in-javascript-reading-console-errors",title:"\ud83d\udcd3 1.2.1.8 Debugging in JavaScript: Reading Console Errors",description:"One of the most important parts of being a developer is debugging. We'll often run into bugs in our code \u2014 and the code of others, too. Fortunately, there are many tools at our disposal for debugging JavaScript code. During this course section, we will cover four commonly used tools that can help you narrow down the source of your bugs:",source:"@site/docs/1_introduction-to-programming/2_javascript-and-web-browsers/BD-1-2-1-8-debugging-in-javascript-reading-console-errors.md",sourceDirName:"1_introduction-to-programming/2_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/1-2-1-8-debugging-in-javascript-reading-console-errors",permalink:"/introduction-to-programming/javascript-and-web-browsers/1-2-1-8-debugging-in-javascript-reading-console-errors",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 1.2.1.8 Debugging in JavaScript: Reading Console Errors",day:"monday",id:"1-2-1-8-debugging-in-javascript-reading-console-errors",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\u270f\ufe0f 1.2.1.7 Practice: Accessing Window Properties",permalink:"/introduction-to-programming/javascript-and-web-browsers/1-2-1-7-practice-accessing-window-properties"},next:{title:"\ud83d\udcd3 1.2.1.9 Interactivity with Window Methods",permalink:"/introduction-to-programming/javascript-and-web-browsers/1-2-1-9-interactivity-with-window-methods"}},l={},c=[{value:"Checking the DevTools Console",id:"checking-the-devtools-console",level:2},{value:"Uncaught ReferenceError",id:"uncaught-referenceerror",level:3},{value:"Getting <code>undefined</code> Returned When You Expect Otherwise",id:"getting-undefined-returned-when-you-expect-otherwise",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One of the most important parts of being a developer is debugging. We'll often run into bugs in our code \u2014 and the code of others, too. Fortunately, there are many tools at our disposal for debugging JavaScript code. During this course section, we will cover four commonly used tools that can help you narrow down the source of your bugs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Looking for errors in the DevTools console"),(0,o.kt)("li",{parentName:"ul"},"Pausing on exceptions"),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("inlineCode",{parentName:"li"},"console.log;")," to log values in our code"),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("inlineCode",{parentName:"li"},"debugger;")," and breakpoints to freeze our code")),(0,o.kt)("p",null,"We've looked in the DevTools console for errors before \u2014 such as when we learned how to see if our project can't find a CSS file in the ",(0,o.kt)("a",{parentName:"p",href:"../../introduction-to-programming/git-html-and-css/1-1-2-5-debugging-html-and-css"},"Debugging HTML and CSS")," lesson. However, the other three tools are new."),(0,o.kt)("p",null,"In this lesson, we'll revisit a key debugging technique: looking for errors in the DevTools console."),(0,o.kt)("h2",{id:"checking-the-devtools-console"},"Checking the DevTools Console"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Whenever we are running JavaScript in the browser and something isn't working correctly, the first step is ",(0,o.kt)("em",{parentName:"p"},"always")," to open the DevTools console. Too often, when an instructor comes by to help a student debug, we've found that the console isn't even open. That's a surefire sign that the student hasn't done ",(0,o.kt)("em",{parentName:"p"},"any")," debugging \u2014 which means it's time for the instructor to walk away and allow the student to actually spend time honing this absolutely essential skill."),(0,o.kt)("p",null,"When we open the console, any glaring errors will show up in red with an X to the left of the message. Meanwhile, warnings will show up in yellow. Generally, warnings won't break our code but they will include messages suggesting something in our code is deprecated or not ideal. Throughout this program, we will ignore warnings. Messages in the console that are red must be addressed."),(0,o.kt)("p",null,"Sometimes errors can be tricky and not show up as an error, but instead an ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," value. Since we'll be working with the DevTools console quite a bit to test our code, let's look at two examples of errors that can show up in our code."),(0,o.kt)("h3",{id:"uncaught-referenceerror"},"Uncaught ReferenceError"),(0,o.kt)("p",null,"If we open up the DevTools console and enter in the following code, we'll get an error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> wndow.innerWidth;\nUncaught ReferenceError: wndow is not defined at <anonymous>:1:1  VM70:1\n")),(0,o.kt)("p",null,"As we can see in the image, we can tell that this is an error because the message is in red and there's an X to the left of the message. We can also see that it's an error, because it states ",(0,o.kt)("inlineCode",{parentName:"p"},"ReferenceError"),". JavaScript has a handful of built-in errors that it prints in the console when our code breaks. You'll know that it's a built-in error because the error message begins with ",(0,o.kt)("inlineCode",{parentName:"p"},'"Uncaught <NameOf>Error: ..."'),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Uncaught")," means the error hasn't been addressed and the error is breaking your code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<NameOf>")," is the name of the error. ")),(0,o.kt)("p",null,"You'll learn about different types of errors as they come up, but you can also see ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#error_objects"},"a list of these errors on MDN"),". "),(0,o.kt)("p",null,"A helpful first step in resolving an error is to research it so you can understand what type of error you are dealing with. According to MDN, a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError"},"ReferenceError")," is:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The DevTools console shows two errors related to `wndow.innerWidth` and `window.innerHeigt`.",src:n(49989).Z,width:"486",height:"215"})),(0,o.kt)("p",null,"If we revisit our error message, we should quickly see the issue in the error message ",(0,o.kt)("inlineCode",{parentName:"p"},"wndow is not defined"),": we have a typo! We wrote ",(0,o.kt)("inlineCode",{parentName:"p"},"wndow")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"window"),", and the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"wndow")," doesn't exist in our code (we didn't create it and it's also not built-in). Encountering an error that's caused by a typo is ",(0,o.kt)("em",{parentName:"p"},"incredibly common")," among computer programmers new and old. "),(0,o.kt)("p",null,"Sometimes typos don't even cause errors, which can become very tricky bugs to fix. That's what we can see with the second statement we typed into the console. "),(0,o.kt)("h3",{id:"getting-undefined-returned-when-you-expect-otherwise"},"Getting ",(0,o.kt)("inlineCode",{parentName:"h3"},"undefined")," Returned When You Expect Otherwise"),(0,o.kt)("p",null,"Let's look at the next example bug (as seen in the above image) when we typed this code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> window.innerHeigt;\nundefined\n")),(0,o.kt)("p",null,"Here we're trying to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"innerHeight")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object, but we're only getting ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," returned to us. While this isn't an error, this is still helpful information for debugging. If we are expecting a certain outcome from the code we write and we don't get it, the first place we should always look is the code that we just typed. Indeed when we review our code ",(0,o.kt)("inlineCode",{parentName:"p"},"window.innerHeigt;"),", we should see that there's a typo in the property name: a missing ",(0,o.kt)("inlineCode",{parentName:"p"},"h")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"innerHeigt"),". Often in these cases it takes someone else's eyes to spot the typo! "),(0,o.kt)("p",null,"Even though there's clearly an error in our code, JavaScript won't give us an error message in this case because ",(0,o.kt)("inlineCode",{parentName:"p"},"window.innerHeigt;")," is the correct syntax for creating a new property called ",(0,o.kt)("inlineCode",{parentName:"p"},"innerHeigt")," that belongs to the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object. JavaScript just can't know what we intended, and it can't differentiate between a typo and the creation of a new property."),(0,o.kt)("p",null,"We can confirm that we can add a new property to the window object by giving our ",(0,o.kt)("inlineCode",{parentName:"p"},"innerHeigt")," property a value and looking for it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> window.innerHeigt = 1234;\n> window;\nWindow\xa0{0: Window, 1: Window, window: Window, self: Window, document: document, name: '', location: Location,\xa0\u2026}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"This image shows the new `innerHeigt` property in the `window` object.",src:n(82820).Z,width:"303",height:"195"})),(0,o.kt)("p",null,"So, remember to always work with your DevTools console open and keep an eye out for error messages! If something is wrong and there is no error message, a helpful starting point is to compare what you expect from the code you wrote to the actual result. This can give you ideas of where to look in your code for the error. Generally speaking, retracing your steps is always helpful when debugging an error in your code. "),(0,o.kt)("p",null,"Later in this course section, we'll learn how to use more powerful debugging tools that will make resolving ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," values even easier."))}u.isMDXComponent=!0},82820:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/incorrect-inner-height-property-for-console-errors-7f70323c1831dc92d7acbcbef8de2fa3.png"},49989:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/reading-console-errors-window-errors-35c28bc215cd927fe85c6b62d19a136f.png"}}]);