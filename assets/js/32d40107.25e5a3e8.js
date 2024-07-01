"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[30336],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,u=d["".concat(s,".").concat(m)]||d[m]||f[m]||a;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54349:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"\ud83d\udcd3 2.2.1.3 Red Green Refactor Workflow",day:"monday",id:"2-2-1-3-red-green-refactor-workflow",hide_table_of_contents:!0},i=void 0,l={unversionedId:"intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-1-3-red-green-refactor-workflow",id:"intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-1-3-red-green-refactor-workflow",title:"\ud83d\udcd3 2.2.1.3 Red Green Refactor Workflow",description:"Before we start writing automated tests, let's cover the Red, Green, Refactor workflow. We've actually been applying some of the principles of this workflow already. However, we need automated testing in place to really apply it.",source:"@site/docs/2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript/AW-2-2-1-3-red-green-refactor-workflow.md",sourceDirName:"2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript",slug:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-1-3-red-green-refactor-workflow",permalink:"/v1/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-1-3-red-green-refactor-workflow",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 2.2.1.3 Red Green Refactor Workflow",day:"monday",id:"2-2-1-3-red-green-refactor-workflow",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.2.1.2 TDD Review",permalink:"/v1/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-1-2-tdd-review"},next:{title:"\ud83d\udcd3 2.2.1.4 Setting Up Jest",permalink:"/v1/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-1-4-setting-up-jest"}},s={},p=[{value:"The Red-Green-Refactor WorkFlow",id:"the-red-green-refactor-workflow",level:2}],c={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before we start writing automated tests, let's cover the ",(0,o.kt)("strong",{parentName:"p"},"Red, Green, Refactor")," workflow. We've actually been applying some of the principles of this workflow already. However, we need automated testing in place to really apply it. "),(0,o.kt)("h2",{id:"the-red-green-refactor-workflow"},"The Red-Green-Refactor WorkFlow"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's take a look at how it works. We've already been applying most of these steps. However, the steps in ",(0,o.kt)("strong",{parentName:"p"},"bold")," are new."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Identify the simplest possible functionality our program must exhibit."),(0,o.kt)("li",{parentName:"ol"},"Write a coded test."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("font",{color:"red"},"Before coding, make sure the test fails."))," "),(0,o.kt)("li",{parentName:"ol"},"Implement the functionality with the least amount of code possible. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("font",{color:"green"},"Run the automated test to confirm it passes. (If it doesn't pass, revisit step 4.)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("font",{color:"green"},"Make sure all previous tests still pass."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("font",{color:"blue"},"Check if code can be refactored. If so, refactor and repeat step 6.")),(0,o.kt)("li",{parentName:"ol"},"Commit your code! You should always commit after each passing test."),(0,o.kt)("li",{parentName:"ol"},"Repeat this entire process with the next simplest piece of functionality.")),(0,o.kt)("p",null,'There are two new steps in the list above. In step 3, we need to confirm that the test fails before we write the code to get it passing. We haven\'t covered this yet. It\'s a little more involved than it sounds \u2014 there are "good" fails and "bad" fails. We\'ll cover both soon.'),(0,o.kt)("p",null,"We covered step 6 briefly in Introduction to Programming. However, running all previous tests manually is time-consuming so it wasn't part of our workflow. With automated testing, we'll be able to run all of our tests with a single terminal command. If ",(0,o.kt)("em",{parentName:"p"},"any")," of our tests don't work (whether it's our most recent test or an older one), we need to isolate the issue and fix it before moving on."),(0,o.kt)("p",null,"It should be clear why this is called the Red, Green, Refactor workflow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("font",{color:"red"},"Red")),' means we need to write a test that fails at first. This needs to be a "good" fail before we move on. We\'ll learn more about "good" fails soon.'),(0,o.kt)("li",{parentName:"ul"},'"',(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("font",{color:"green"},"Green")),'" means that all of our tests need to be passing before we move on.'),(0,o.kt)("li",{parentName:"ul"},'"',(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("font",{color:"blue"},"Refactor")),'" means that we should always look for opportunities to refactor after each passing test.')),(0,o.kt)("p",null,"In the next lesson, we'll learn how to set up Jest. Then we'll be ready to apply the Red, Green, Refactor workflow and start writing tests."))}f.isMDXComponent=!0}}]);