"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[77098],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>f});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),l=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=l(t.components);return o.createElement(s.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},g=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,m=c(t,["components","mdxType","originalType","parentName"]),p=l(n),g=r,f=p["".concat(s,".").concat(g)]||p[g]||u[g]||a;return n?o.createElement(f,i(i({ref:e},m),{},{components:n})):o.createElement(f,i({ref:e},m))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[p]="string"==typeof t?t:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8243:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={title:"\ud83d\udcd3 4.1.0.2 Introduction to Functional Programming",day:"weekend",id:"4-1-0-2-introduction-to-functional-programming",hide_table_of_contents:!0},i=void 0,c={unversionedId:"react/functional-programming-with-javascript/4-1-0-2-introduction-to-functional-programming",id:"version-1.1/react/functional-programming-with-javascript/4-1-0-2-introduction-to-functional-programming",title:"\ud83d\udcd3 4.1.0.2 Introduction to Functional Programming",description:"Up to this point, we have mostly focused on object-oriented programming. We've built objects that store information and have methods attached to them. Object-oriented programming relies on techniques like inheritance and encapsulation.",source:"@site/versioned_docs/version-1.1/4_react/1_functional-programming-with-javascript/AB-4-1-0-2-introduction-to-functional-programming.md",sourceDirName:"4_react/1_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/4-1-0-2-introduction-to-functional-programming",permalink:"/v1.1/react/functional-programming-with-javascript/4-1-0-2-introduction-to-functional-programming",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 4.1.0.2 Introduction to Functional Programming",day:"weekend",id:"4-1-0-2-introduction-to-functional-programming",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\ud83d\udcd3 4.1.0.1 Functional Programming with JavaScript Objectives",permalink:"/v1.1/react/functional-programming-with-javascript/4-1-0-1-functional-programming-with-javascript-objectives"},next:{title:"\ud83d\udcd3 4.1.0.3 Testing Functional Code",permalink:"/v1.1/react/functional-programming-with-javascript/4-1-0-3-testing-functional-code"}},s={},l=[],m={toc:l},p="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Up to this point, we have mostly focused on object-oriented programming. We've built objects that store information and have methods attached to them. Object-oriented programming relies on techniques like ",(0,r.kt)("strong",{parentName:"p"},"inheritance")," and ",(0,r.kt)("strong",{parentName:"p"},"encapsulation"),"."),(0,r.kt)("p",null,"Functional programming is a completely different paradigm. In general, the goal of a functional program is to be ",(0,r.kt)("strong",{parentName:"p"},"stateless"),", which means we can no longer store information in objects. Functional programming focuses on what objects ",(0,r.kt)("em",{parentName:"p"},"do"),", not on what they ",(0,r.kt)("em",{parentName:"p"},"are"),". Instead of storing information in objects, we will pass information between functions. We will no longer ",(0,r.kt)("strong",{parentName:"p"},"mutate")," state \u2014 that means we won't even reassign values to variables. In other words, no more ",(0,r.kt)("inlineCode",{parentName:"p"},"let"),", only ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),"."),(0,r.kt)("p",null,"Object-oriented programming focuses on objects themselves while functional programming is focused on functions. We've used OOP in very concrete ways; for instance, a dog barks or a player stores a score."),(0,r.kt)("p",null,"In functional programming, our goal is to make our functions more abstract. This can make functional programming harder to grasp at first. However, once a function is abstracted, we can use it with many different objects. While OOP uses inheritance to give many kinds of objects functionality, functional programming uses a technique called ",(0,r.kt)("strong",{parentName:"p"},"composition"),". We will learn more about composition and how it works in a future lesson."),(0,r.kt)("p",null,"While we will focus on functional programming techniques during this course section, both object-oriented and functional programming have their advantages and disadvantages. A good coder will incorporate both paradigms, even in the same application."))}u.isMDXComponent=!0}}]);