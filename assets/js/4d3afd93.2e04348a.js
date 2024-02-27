"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[37688],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=o,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return a?n.createElement(f,i(i({ref:t},h),{},{components:a})):n.createElement(f,i({ref:t},h))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32016:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"\ud83d\udcd3 4.1.1.4 The Problems of Classical Inheritance",day:"monday",id:"4-1-1-4-the-problems-of-classical-inheritance",hide_table_of_contents:!0},i=void 0,s={unversionedId:"react/functional-programming-with-javascript/4-1-1-4-the-problems-of-classical-inheritance",id:"react/functional-programming-with-javascript/4-1-1-4-the-problems-of-classical-inheritance",title:"\ud83d\udcd3 4.1.1.4 The Problems of Classical Inheritance",description:"In Intermediate JavaScript, we learned about the concept of inheritance. A quick refresher: inheritance is when a child object gains the functionality of a parent object. In the case of classical inheritance, that functionality is passed down through classes. For instance, objects from a Cat class could inherit from a Mammal class and so on. In the case of JavaScript, that functionality is passed down via prototypal inheritance, though we have the syntactic sugar of classes with ES6.",source:"@site/docs/4_react/1_functional-programming-with-javascript/AQ-4-1-1-4-the-problems-of-classical-inheritance.md",sourceDirName:"4_react/1_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/4-1-1-4-the-problems-of-classical-inheritance",permalink:"/react/functional-programming-with-javascript/4-1-1-4-the-problems-of-classical-inheritance",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 4.1.1.4 The Problems of Classical Inheritance",day:"monday",id:"4-1-1-4-the-problems-of-classical-inheritance",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\u270f\ufe0f 4.1.1.3 Whiteboard Practice: Recursion",permalink:"/react/functional-programming-with-javascript/4-1-1-3-whiteboard-practice-recursion"},next:{title:"\ud83d\udcd3 4.1.1.5 Spread Operator",permalink:"/react/functional-programming-with-javascript/4-1-1-5-spread-operator"}},l={},c=[],h={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Intermediate JavaScript, we learned about the concept of ",(0,o.kt)("strong",{parentName:"p"},"inheritance"),". A quick refresher: inheritance is when a child object gains the functionality of a parent object. In the case of classical inheritance, that functionality is passed down through classes. For instance, objects from a ",(0,o.kt)("inlineCode",{parentName:"p"},"Cat")," class could inherit from a ",(0,o.kt)("inlineCode",{parentName:"p"},"Mammal")," class and so on. In the case of JavaScript, that functionality is passed down via prototypal inheritance, though we have the syntactic sugar of classes with ES6."),(0,o.kt)("p",null,"There are some issues with inheritance, however. One big issue is that it doesn't always make sense for an object to inherit all the functionality of another kind of object. This is more of an issue with classical inheritance, since prototypal inheritance can be targeted to individual objects and not just classes. As our codebases get more complex, we could end up in a situation where we're stuck giving objects all kinds of functionality that they don't need \u2014 and some of that unneeded functionality could lead to bugs as well as code that's hard to understand. Joe Armstrong, the creator of the functional language Erlang, has the perfect quote for this issue: \"You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.\""),(0,o.kt)("p",null,"There are several other issues with classical inheritance. Imagine you're building an application that characterizes the behavior of various mammals. For that reason, you decide to start with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Mammal")," class and to add various methods that should presumably apply to all mammals. As your application begins to grow, however, not all the methods apply to all of the mammals inheriting from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Mammal")," class. After all, there's a lot of variance in the animal kingdom \u2014 and by the time you need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"Platypus")," class, the entire application is in desperate need of a refactor. If only the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reptile")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Bird")," classes allow for egg-laying methods, how would that method be incorporated into ",(0,o.kt)("inlineCode",{parentName:"p"},"Platypus"),"? Not only is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Platypus")," neither type of animal, but it's already inheriting from another class, anyway."),(0,o.kt)("p",null,"The problem here is that classical inheritance forces us to add functionality up front that may cause us problems further down the road. We should always aim to make our code as flexible as possible. After all, we never know what our application will need as it gets bigger and scales up. Unfortunately, classical inheritance isn't very flexible."),(0,o.kt)("p",null,"This is because inheritance ",(0,o.kt)("strong",{parentName:"p"},"tightly couples")," classes and their objects. A piece of code is tightly coupled to another piece of code when they are reliant on each other for functionality. That means if something breaks or needs to be changed in one piece of the code, it will likely also break or need to be changed in another piece of code. This becomes increasingly problematic as an application gets larger and more and more things become reliant on a single piece of code."),(0,o.kt)("p",null,"For that reason, we should always endeavor to keep our code ",(0,o.kt)("strong",{parentName:"p"},"loosely coupled"),". Loosely coupled code isn't overly reliant on another piece of code to work. While two pieces of code may be related, they can work independently of each other. Pure functions are a good example of this \u2014 they take a value and return a value and don't really care about the rest of the application."),(0,o.kt)("p",null,"We'll discuss functional solutions to the problem of classical inheritance soon. While you should know what classical inheritance is and how to use it, it's also important to be aware that it can cause problems because it results in tightly coupled, less flexible code."))}u.isMDXComponent=!0}}]);