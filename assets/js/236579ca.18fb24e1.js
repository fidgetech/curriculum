"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[35486],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return t?n.createElement(h,o(o({ref:r},u),{},{components:t})):n.createElement(h,o({ref:r},u))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},53279:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(87462),i=(t(67294),t(3905));const a={title:"\u270f\ufe0f 4.1.1.3 Whiteboard Practice: Recursion",day:"monday",id:"4-1-1-3-whiteboard-practice-recursion",hide_table_of_contents:!0},o=void 0,c={unversionedId:"react/functional-programming-with-javascript/4-1-1-3-whiteboard-practice-recursion",id:"react/functional-programming-with-javascript/4-1-1-3-whiteboard-practice-recursion",title:"\u270f\ufe0f 4.1.1.3 Whiteboard Practice: Recursion",description:"You will get a chance to practice whiteboarding a lot during this course section. Time will be set aside during most class sessions at the discretion of your teacher. Use this time wisely to improve both your whiteboarding and functional programming skills!",source:"@site/docs/4_react/1_functional-programming-with-javascript/AP-4-1-1-3-whiteboard-practice-recursion.md",sourceDirName:"4_react/1_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/4-1-1-3-whiteboard-practice-recursion",permalink:"/v1/react/functional-programming-with-javascript/4-1-1-3-whiteboard-practice-recursion",draft:!1,tags:[],version:"current",frontMatter:{title:"\u270f\ufe0f 4.1.1.3 Whiteboard Practice: Recursion",day:"monday",id:"4-1-1-3-whiteboard-practice-recursion",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\u270f\ufe0f 4.1.1.2 Whiteboard Practice: Closures",permalink:"/v1/react/functional-programming-with-javascript/4-1-1-2-whiteboard-practice-closures"},next:{title:"\ud83d\udcd3 4.1.1.4 The Problems of Classical Inheritance",permalink:"/v1/react/functional-programming-with-javascript/4-1-1-4-the-problems-of-classical-inheritance"}},l={},s=[{value:"Practice with Recursion",id:"practice-with-recursion",level:3},{value:"Problem #1",id:"problem-1",level:4},{value:"Problem #2",id:"problem-2",level:4}],u={toc:s},p="wrapper";function m(e){let{components:r,...t}=e;return(0,i.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You will get a chance to practice whiteboarding a lot during this course section. Time will be set aside during most class sessions at the discretion of your teacher. Use this time wisely to improve both your whiteboarding and functional programming skills!"),(0,i.kt)("h3",{id:"practice-with-recursion"},"Practice with Recursion"),(0,i.kt)("p",null,"Alternate problem #1 and #2 with your pair."),(0,i.kt)("h4",{id:"problem-1"},"Problem #1"),(0,i.kt)("p",null,'Write a recursive function that reverses the order of words in a sentence. For instance, "I am a cat" should become "cat a am I".'),(0,i.kt)("h4",{id:"problem-2"},"Problem #2"),(0,i.kt)("p",null,'Write a recursive function that concatenates "red green refactor" to a string X number of times, where X is the argument passed into the function. ',(0,i.kt)("inlineCode",{parentName:"p"},"rgr(3)")," should return the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'"red green refactor red green refactor red green refactor"\n')))}m.isMDXComponent=!0}}]);