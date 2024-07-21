"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[22402],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?n.createElement(h,i(i({ref:r},u),{},{components:t})):n.createElement(h,i({ref:r},u))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48679:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={title:"\u270f\ufe0f 4.1.1.2 Whiteboard Practice: Closures",day:"monday",id:"4-1-1-2-whiteboard-practice-closures",hide_table_of_contents:!0},i=void 0,l={unversionedId:"react/functional-programming-with-javascript/4-1-1-2-whiteboard-practice-closures",id:"react/functional-programming-with-javascript/4-1-1-2-whiteboard-practice-closures",title:"\u270f\ufe0f 4.1.1.2 Whiteboard Practice: Closures",description:"You will get a chance to practice whiteboarding a lot during this course section. Time will be set aside during most class sessions at the discretion of your teacher. Use this time wisely to improve both your whiteboarding and functional programming skills!",source:"@site/docs/4_react/1_functional-programming-with-javascript/AO-4-1-1-2-whiteboard-practice-closures.md",sourceDirName:"4_react/1_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/4-1-1-2-whiteboard-practice-closures",permalink:"/v1.2/react/functional-programming-with-javascript/4-1-1-2-whiteboard-practice-closures",draft:!1,tags:[],version:"current",frontMatter:{title:"\u270f\ufe0f 4.1.1.2 Whiteboard Practice: Closures",day:"monday",id:"4-1-1-2-whiteboard-practice-closures",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\u270f\ufe0f 4.1.1.1 Coin Counter, Sieve",permalink:"/v1.2/react/functional-programming-with-javascript/4-1-1-1-coin-counter-sieve"},next:{title:"\u270f\ufe0f 4.1.1.3 Whiteboard Practice: Recursion",permalink:"/v1.2/react/functional-programming-with-javascript/4-1-1-3-whiteboard-practice-recursion"}},c={},s=[{value:"Practice with Closures and Currying",id:"practice-with-closures-and-currying",level:3},{value:"Problem #1",id:"problem-1",level:4},{value:"Problem #2",id:"problem-2",level:4},{value:"Problem #3 (Harder)",id:"problem-3-harder",level:4},{value:"Problem #4 (Harder)",id:"problem-4-harder",level:4}],u={toc:s},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You will get a chance to practice whiteboarding a lot during this course section. Time will be set aside during most class sessions at the discretion of your teacher. Use this time wisely to improve both your whiteboarding and functional programming skills!"),(0,o.kt)("h3",{id:"practice-with-closures-and-currying"},"Practice with Closures and Currying"),(0,o.kt)("p",null,"Alternate problem #1 and #2 with your pair. Then alternate problem #3 and #4."),(0,o.kt)("h4",{id:"problem-1"},"Problem #1"),(0,o.kt)("p",null,"Use a closure to create multiple functions for adding a prefix to a name. The prefix could be Doctor, Duchess, Sir, and so on."),(0,o.kt)("p",null,"It should be possible to create a new prefix function like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const prefixSir = addPrefix("Sir");\n')),(0,o.kt)("h4",{id:"problem-2"},"Problem #2"),(0,o.kt)("p",null,"Use a closure to create multiple functions for making various animal noises. For example, it should be possible to do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const lionSound = soundMaker("roar");\nconst mouseSound = soundMaker("squeak");\n')),(0,o.kt)("h4",{id:"problem-3-harder"},"Problem #3 (Harder)"),(0,o.kt)("p",null,"Use closures to create multiple functions for adding both a prefix ",(0,o.kt)("strong",{parentName:"p"},"and")," a suffix to a name. For example, it should be possible to do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const misterJunior = nameEnhancer("Mister")("Junior");\nconst duchessThird = nameEnhancer("Duchess")("The Third");\n')),(0,o.kt)("h4",{id:"problem-4-harder"},"Problem #4 (Harder)"),(0,o.kt)("p",null,"Use closures to create multiple functions to first add to and then multiply a value. It should be possible to do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const addTwoMultiplyByThree = addaMult(2)(3);\nconst addFiveMultiplyByNine = addaMult(5)(9);\n")))}d.isMDXComponent=!0}}]);