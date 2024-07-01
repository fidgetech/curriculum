"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[38840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,y=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(y,i(i({ref:t},c),{},{components:r})):a.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},42042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"\ud83d\udcd3 1.3.0.7 Comparing and Cloning Arrays",day:"weekend",id:"1-3-0-7-comparing-and-cloning-arrays",hide_table_of_contents:!0},i=void 0,s={unversionedId:"introduction-to-programming/arrays-looping/1-3-0-7-comparing-and-cloning-arrays",id:"introduction-to-programming/arrays-looping/1-3-0-7-comparing-and-cloning-arrays",title:"\ud83d\udcd3 1.3.0.7 Comparing and Cloning Arrays",description:'Unlike other data types we\'ve seen so far, we can\'t compare two arrays by using the === comparison operator. In JavaScript, two primitive data type values can be equal. For example, "abc" is the same as any other "abc". But arrays are different \u2014 no two arrays are the same, even if they have the exact same elements inside.',source:"@site/docs/1_introduction-to-programming/3_arrays-looping/AG-1-3-0-7-comparing-and-cloning-arrays.md",sourceDirName:"1_introduction-to-programming/3_arrays-looping",slug:"/introduction-to-programming/arrays-looping/1-3-0-7-comparing-and-cloning-arrays",permalink:"/v1/introduction-to-programming/arrays-looping/1-3-0-7-comparing-and-cloning-arrays",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 1.3.0.7 Comparing and Cloning Arrays",day:"weekend",id:"1-3-0-7-comparing-and-cloning-arrays",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 1.3.0.6 Array Methods",permalink:"/v1/introduction-to-programming/arrays-looping/1-3-0-6-array-methods"},next:{title:"\ud83d\udcd3 1.3.0.8 Document Query Methods that Return Collections",permalink:"/v1/introduction-to-programming/arrays-looping/1-3-0-8-document-query-methods-that-return-collections"}},l={},p=[{value:"Comparing Arrays",id:"comparing-arrays",level:2},{value:"Cloning Arrays",id:"cloning-arrays",level:2},{value:"Additional Resources",id:"additional-resources",level:3}],c={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Unlike other data types we've seen so far, we can't compare two arrays by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"==="),' comparison operator. In JavaScript, two primitive data type values can be equal. For example, "abc" is the same as any other "abc". But arrays are different \u2014 ',(0,n.kt)("strong",{parentName:"p"},"no two arrays are the same, even if they have the exact same elements inside"),"."),(0,n.kt)("h2",{id:"comparing-arrays"},"Comparing Arrays"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"If you need to compare the ",(0,n.kt)("em",{parentName:"p"},"contents")," of two arrays, one way to accomplish this is to transform the arrays into strings using the ",(0,n.kt)("inlineCode",{parentName:"p"},"toString()")," method on each and comparing the return values. Be careful, though, because there are edge cases where this doesn't work correctly. An ",(0,n.kt)("strong",{parentName:"p"},"edge case")," in computer programming is a possible outcome of an operation that leads to unexpected or inconsistent results. Let's take a look at an example where we can effectively compare two arrays \u2014 and then let's tweak one of the arrays to make it a gotcha:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'> const a = [1,2,3];\n> const b = [1,2,3];\n> a === b;\nfalse\n> a.toString();\n"1,2,3"\n> a.toString() === b.toString();\ntrue\n')),(0,n.kt)("p",null,"Great! This works. But what if one of the arrays includes strings?"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'> const c = [1,2,"3"];\n> const d = [1,2,3];\n> c === d;\nfalse\n> c.toString();\n"1,2,3"\n> d.toString();\n"1,2,3"\n> c.toString() === d.toString();\ntrue\n')),(0,n.kt)("p",null,"According to the rules of strict equality (",(0,n.kt)("inlineCode",{parentName:"p"},"==="),"), strings and numbers are different \u2014 as well they should be. That means that the string ",(0,n.kt)("inlineCode",{parentName:"p"},'"3"')," inside array ",(0,n.kt)("inlineCode",{parentName:"p"},"c")," should not be considered the same as the number ",(0,n.kt)("inlineCode",{parentName:"p"},"3")," inside array ",(0,n.kt)("inlineCode",{parentName:"p"},"d"),". However, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.toString()")," method does not account for differing data types within each array: they are all turned into strings! So this is an example of when comparing the equality of two arrays by turning them into strings with ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.toString()")," does not work effectively."),(0,n.kt)("p",null,"As with many things in computer programming, we've found a fairly effective solution that doesn't work all of the time. As a developer, a big part of your job is to find things that work \u2014 but also to understand the little ways and circumstances where things don't work."),(0,n.kt)("h2",{id:"cloning-arrays"},"Cloning Arrays"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Here is another scenario where arrays operate differently than we might expect."),(0,n.kt)("p",null,"Suppose we have an array that we want to keep in its original form. We also need to manipulate this array in some way. We might have one variable hold the original array and another variable with a copy of the same array that we can change."),(0,n.kt)("p",null,"Try this in the console:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"> const originalArray = [1,2,3,4,5];\n> originalArray;\n[1, 2, 3, 4, 5]\n> let cloneArray = originalArray;\n> cloneArray;\n[1, 2, 3, 4, 5]\n> cloneArray.push(6);\n6\n> cloneArray;\n[1, 2, 3, 4, 5, 6]\n")),(0,n.kt)("p",null,"What does ",(0,n.kt)("inlineCode",{parentName:"p"},"originalArray")," look like now? We haven't touched it, so we may assume it would retain its original value of ",(0,n.kt)("inlineCode",{parentName:"p"},"[1,2,3,4,5]"),". But if we check it again in the console, we'll see the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"> originalArray;\n[1, 2, 3, 4, 5, 6]\n")),(0,n.kt)("p",null,"In JavaScript, the array is stored in memory. The variables ",(0,n.kt)("inlineCode",{parentName:"p"},"originalArray")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"cloneArray")," are called ",(0,n.kt)("strong",{parentName:"p"},"pointers"),". A pointer references an object in memory but is ",(0,n.kt)("em",{parentName:"p"},"not")," the object itself. Therefore, as the array is changed, the new value is reflected in all of the variables that point to it."),(0,n.kt)("p",null,"The way to clone an array ",(0,n.kt)("em",{parentName:"p"},"without")," simply making another pointer is to create a new variable set to a new array:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const cloneArray = originalArray.slice();\n")),(0,n.kt)("p",null,"Note that we use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()"),' here in a slightly different way than we learned in the last lesson \u2014 without arguments. This just "slices" the whole array so we can save it in a new variable. This ensures that the new array really is an entirely separate entity instead of simply a pointer to the original array.'),(0,n.kt)("h3",{id:"additional-resources"},"Additional Resources"),(0,n.kt)("p",null,"For more details on how the ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," method works, check out ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"},"MDN's JavaScript documentation"),"."))}d.isMDXComponent=!0}}]);