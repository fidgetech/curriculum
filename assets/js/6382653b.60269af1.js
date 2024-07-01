"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[93741],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},75462:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"\ud83d\udcd3 1.3.0.4 Introduction to Arrays",day:"weekend",id:"1-3-0-4-introduction-to-arrays",hide_table_of_contents:!0},i=void 0,s={unversionedId:"introduction-to-programming/arrays-looping/1-3-0-4-introduction-to-arrays",id:"introduction-to-programming/arrays-looping/1-3-0-4-introduction-to-arrays",title:"\ud83d\udcd3 1.3.0.4 Introduction to Arrays",description:"Until now, we've always dealt with one piece of information at a time: one number, one string, one element on a page. However, we often need to group things together when we are coding. In programming, a group of things is often referred to as a collection.",source:"@site/docs/1_introduction-to-programming/3_arrays-looping/AD-1-3-0-4-introduction-to-arrays.md",sourceDirName:"1_introduction-to-programming/3_arrays-looping",slug:"/introduction-to-programming/arrays-looping/1-3-0-4-introduction-to-arrays",permalink:"/v1/introduction-to-programming/arrays-looping/1-3-0-4-introduction-to-arrays",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 1.3.0.4 Introduction to Arrays",day:"weekend",id:"1-3-0-4-introduction-to-arrays",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 1.3.0.3 Static versus Instance with Built-In JS Objects",permalink:"/v1/introduction-to-programming/arrays-looping/1-3-0-3-static-versus-instance-with-built-in-js-objects"},next:{title:"\ud83d\udcd3 1.3.0.5 Bracket Notation",permalink:"/v1/introduction-to-programming/arrays-looping/1-3-0-5-bracket-notation"}},l={},p=[{value:"Arrays",id:"arrays",level:2},{value:"Using a Method to Add to an Array",id:"using-a-method-to-add-to-an-array",level:3},{value:"Using <code>const</code> Doesn&#39;t Prevent Modifying an Array",id:"using-const-doesnt-prevent-modifying-an-array",level:3},{value:"Summary",id:"summary",level:2}],u={toc:p},h="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Until now, we've always dealt with one piece of information at a time: one number, one string, one element on a page. However, we often need to group things together when we are coding. In programming, a group of things is often referred to as a ",(0,r.kt)("strong",{parentName:"p"},"collection"),"."),(0,r.kt)("p",null,"In this lesson, we will cover a very common form of collecting items: the ",(0,r.kt)("strong",{parentName:"p"},"array"),". As you read through this lesson, open up your DevTools console and try out the code examples we work through. The angle bracket ",(0,r.kt)("inlineCode",{parentName:"p"},">")," indicates that we're putting the code into the DevTools console."),(0,r.kt)("h2",{id:"arrays"},"Arrays"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Arrays are enclosed in square brackets like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> let array = [];\n")),(0,r.kt)("p",null,"In the example above, we've created an empty array with square brackets and stored it in a variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"array"),". Note that we use ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," here, not ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),". If we start with an empty array, we are almost certainly going to want to change it. After all, an array isn't very useful if we aren't using it to hold things. Also, we'll find that ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," doesn't stop arrays from being mutated. We'll cover that soon."),(0,r.kt)("p",null,"We can also create an array that already has items in it. Here's an array that holds the months of the year:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];\n')),(0,r.kt)("p",null,"Why did we use ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," here? Well, presumably the months of the year aren't going to change, and we use ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," to communicate our intentions to other developers. We'll revisit this array in just a moment."),(0,r.kt)("p",null,"Arrays can hold strings, numbers, variables, and other JavaScript primitives and objects. They can even hold other arrays \u2014 or a mix of things. The items in an array are commonly referred to as ",(0,r.kt)("strong",{parentName:"p"},"elements"),". Here are some examples of arrays that hold strings and numbers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[2, 5, 7, 3423, 85, 65]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'["e", "p", "i", "c", "o", "d", "u", "s"]')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'["word", 45, "word2", 123]'))),(0,r.kt)("p",null,"Here's an example of an array that holds a variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> const variable = "I\'m a variable!";\n> const things = [variable, "I\'m not a variable!"];\n> things;\n["I\'m a variable!", "I\'m not a variable!"]\n')),(0,r.kt)("p",null,"Here's an example of an array that holds an expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> const numbers = [62, 62 / 2];\n> numbers;\n[62, 31]\n")),(0,r.kt)("p",null,"Here's an array that holds not just strings and numbers, but other arrays:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const mixOfArraysAndPrimitives = ["string", 123, ["another string", 456], 321, "yet another string", true];\n')),(0,r.kt)("p",null,"The examples above show some of the elements we can put in an array. As we can see, arrays are pretty flexible \u2014 we even slipped a boolean into the array above. Arrays are really just containers for holding collections of things \u2014 and we can put just about anything into an array. As developers, we can do things to organize arrays as we see fit, but from the perspective of JavaScript, arrays are just a bucket that can hold different kinds of elements."),(0,r.kt)("p",null,"Let's look at our original empty array again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> let array = [];\n")),(0,r.kt)("h3",{id:"using-a-method-to-add-to-an-array"},"Using a Method to Add to an Array"),(0,r.kt)("p",null,"What if we want to add things to this array? Arrays are a type of object, so it has properties and methods. There are many different methods that can be called on arrays. One of the most common is ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.push()"),", which allows you to add new objects to the end of an array."),(0,r.kt)("p",null,"Let's take a look:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> let array = [];\n> array.push("hi");\n1\n> array;\n["hi"]\n> array.push("there");\n2\n> array;\n["hi", "there"]\n')),(0,r.kt)("p",null,"When we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.push()")," method on an array, the return value of the method is the new length of the array. In this case, it's ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),". To see how the array has been modified, we can just check the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"array"),"."),(0,r.kt)("h3",{id:"using-const-doesnt-prevent-modifying-an-array"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"const")," Doesn't Prevent Modifying an Array"),(0,r.kt)("p",null,"What happens if we try to push a new value into our ",(0,r.kt)("inlineCode",{parentName:"p"},"months")," array?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];\n> months.push("I\'m not a month mwa ha ha");\n13\n> months;\n["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "I\'m not a month mwa ha ha"];\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We can see that ",(0,r.kt)("inlineCode",{parentName:"strong"},"const")," doesn't stop an array from being modified. ",(0,r.kt)("inlineCode",{parentName:"strong"},"const")," just stops variables from being reassigned or redeclared.")," That works great with primitives. If we change a variable holding the number ",(0,r.kt)("inlineCode",{parentName:"p"},"8")," for instance (such as by trying to add another number to it), we are reassigning the variable."),(0,r.kt)("p",null,"That's not the case with arrays, though. When we modify an array, we aren't reassigning or redeclaring the variable. It's still the same array even though we've made changes to it. In the case of using ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," with an array, it's kind of like a permit that protects a house from being knocked down or altered (as you'll often see for historic homes). However, you can still change the furniture in the house even though the permit won't allow the house to be replaced. In this analogy, the array is the house and the elements are the furniture."),(0,r.kt)("p",null,"In JavaScript, you can't do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const array = [];\n> array = ["hi"];\nUncaught TypeError: Assignment to constant variable.\n')),(0,r.kt)("p",null,"This is like building a house and then knocking it down and replacing it with another one. We assign an empty array to the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," and then we try to reassign the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"array"),". As the error shows, we can't do that with a ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),"."),(0,r.kt)("p",null,"Note the difference here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const array = [];\n> array.push("hi");\n1\n> array;\n["hi"]\n')),(0,r.kt)("p",null,"We didn't knock down the house here. Our array still exists \u2014 we just added an item to it. This is like adding a new piece of furniture to the house."),(0,r.kt)("p",null,"This is an important gotcha about using ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," with arrays. We can still modify the array (whether that means adding or removing items from it) so it's not truly constant. Why use ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," with arrays at all then?"),(0,r.kt)("p",null,"Well, this is when we can use our code to communicate our intentions. ",(0,r.kt)("strong",{parentName:"p"},"When we use ",(0,r.kt)("inlineCode",{parentName:"strong"},"const")," with an array, we're telling other developers that the array ",(0,r.kt)("em",{parentName:"strong"},"shouldn't")," be modified. It also makes clear that you won't be modifying the array yourself.")),(0,r.kt)("p",null,"When refactoring your code, you should always check to see if any of your variables need to be changed from ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," or vice versa. This makes your code clearer and easier to read."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In this lesson, we covered a few of the basics of arrays. By this point, you should know that an array is just a collection that can contain just about anything. We've also covered the ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.push()")," method, one of the most ubiquitous array methods, and discussed why ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," doesn't work as you might expect with arrays \u2014 and when you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," with arrays anyway."),(0,r.kt)("p",null,"In the next lesson, we'll learn about the ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.length")," property of arrays. We'll also cover bracket notation, which we can use to look at specific values inside an array. Then, in the lesson after that, we'll cover commonly used array methods."))}c.isMDXComponent=!0}}]);