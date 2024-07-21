"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[2371],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>h});var i=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)r=o[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=i.createContext({}),s=function(t){var e=i.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},p=function(t){var e=s(t.components);return i.createElement(l.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},g=i.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=s(r),g=n,h=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return r?i.createElement(h,a(a({ref:e},p),{},{components:r})):i.createElement(h,a({ref:e},p))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,a=new Array(o);a[0]=g;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[m]="string"==typeof t?t:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},82425:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var i=r(87462),n=(r(67294),r(3905));const o={title:"\u270f\ufe0f 1.3.3.2 Practice: Rewriting Git History with Rebase",day:"wednesday",id:"1-3-3-2-practice-rewriting-git-history-with-rebase",hide_table_of_contents:!0},a=void 0,c={unversionedId:"introduction-to-programming/arrays-looping/1-3-3-2-practice-rewriting-git-history-with-rebase",id:"introduction-to-programming/arrays-looping/1-3-3-2-practice-rewriting-git-history-with-rebase",title:"\u270f\ufe0f 1.3.3.2 Practice: Rewriting Git History with Rebase",description:"Goal:  Now that we've learned about how to change previous commits, let's put this new information into practice!",source:"@site/docs/1_introduction-to-programming/3_arrays-looping/BD-1-3-3-2-practice-rewriting-git-history-with-rebase.md",sourceDirName:"1_introduction-to-programming/3_arrays-looping",slug:"/introduction-to-programming/arrays-looping/1-3-3-2-practice-rewriting-git-history-with-rebase",permalink:"/v1.2/introduction-to-programming/arrays-looping/1-3-3-2-practice-rewriting-git-history-with-rebase",draft:!1,tags:[],version:"current",frontMatter:{title:"\u270f\ufe0f 1.3.3.2 Practice: Rewriting Git History with Rebase",day:"wednesday",id:"1-3-3-2-practice-rewriting-git-history-with-rebase",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 1.3.3.1 Rewriting Git History with Rebase",permalink:"/v1.2/introduction-to-programming/arrays-looping/1-3-3-1-rewriting-git-history-with-rebase"},next:{title:"\ud83d\udcd3 1.3.3.3 Printing an Array to a Webpage",permalink:"/v1.2/introduction-to-programming/arrays-looping/1-3-3-3-printing-an-array-to-a-webpage"}},l={},s=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Rewriting Git History",id:"rewriting-git-history",level:3}],p={toc:s},m="wrapper";function u(t){let{components:e,...r}=t;return(0,n.kt)(m,(0,i.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal"),":  Now that we've learned about how to change previous commits, let's put this new information into practice!"),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When can you use the ",(0,n.kt)("inlineCode",{parentName:"li"},"git commit --amend")," command to change a commit message?"),(0,n.kt)("li",{parentName:"ul"},"What are the two things that the ",(0,n.kt)("inlineCode",{parentName:"li"},"git rebase -i")," command can do?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Complete the following exercise."),(0,n.kt)("h3",{id:"rewriting-git-history"},"Rewriting Git History"),(0,n.kt)("p",null,'Using the process outlined in the "Git: Rewriting History with Rebase" lesson, go back and alter two of the commits from a previous project: '),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use the ",(0,n.kt)("inlineCode",{parentName:"li"},"--amend")," flag to change the most recent commit."),(0,n.kt)("li",{parentName:"ul"},"The rebase command to change any commit other than the most recent. Choose to either reword a commit message or squash and combine two commits. ")),(0,n.kt)("p",null,"Everyone in your pair or group should alter two commits."))}u.isMDXComponent=!0}}]);