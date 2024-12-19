"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[39687],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),g=n,h=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return r?i.createElement(h,a(a({ref:t},p),{},{components:r})):i.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var i=r(87462),n=(r(67294),r(3905));const o={title:"\u270f\ufe0f 1.3.3.2 Practice: Rewriting Git History with Rebase",day:"wednesday",id:"1-3-3-2-practice-rewriting-git-history-with-rebase",hide_table_of_contents:!0},a=void 0,c={unversionedId:"introduction-to-programming/arrays-looping/1-3-3-2-practice-rewriting-git-history-with-rebase",id:"version-1.1/introduction-to-programming/arrays-looping/1-3-3-2-practice-rewriting-git-history-with-rebase",title:"\u270f\ufe0f 1.3.3.2 Practice: Rewriting Git History with Rebase",description:"Goal:  Now that we've learned about how to change previous commits, let's put this new information into practice!",source:"@site/versioned_docs/version-1.1/1_introduction-to-programming/3_arrays-looping/BD-1-3-3-2-practice-rewriting-git-history-with-rebase.md",sourceDirName:"1_introduction-to-programming/3_arrays-looping",slug:"/introduction-to-programming/arrays-looping/1-3-3-2-practice-rewriting-git-history-with-rebase",permalink:"/v1.1/introduction-to-programming/arrays-looping/1-3-3-2-practice-rewriting-git-history-with-rebase",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\u270f\ufe0f 1.3.3.2 Practice: Rewriting Git History with Rebase",day:"wednesday",id:"1-3-3-2-practice-rewriting-git-history-with-rebase",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 1.3.3.1 Rewriting Git History with Rebase",permalink:"/v1.1/introduction-to-programming/arrays-looping/1-3-3-1-rewriting-git-history-with-rebase"},next:{title:"\ud83d\udcd3 1.3.3.3 Printing an Array to a Webpage",permalink:"/v1.1/introduction-to-programming/arrays-looping/1-3-3-3-printing-an-array-to-a-webpage"}},l={},s=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Rewriting Git History",id:"rewriting-git-history",level:3}],p={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal"),":  Now that we've learned about how to change previous commits, let's put this new information into practice!"),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When can you use the ",(0,n.kt)("inlineCode",{parentName:"li"},"git commit --amend")," command to change a commit message?"),(0,n.kt)("li",{parentName:"ul"},"What are the two things that the ",(0,n.kt)("inlineCode",{parentName:"li"},"git rebase -i")," command can do?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Complete the following exercise."),(0,n.kt)("h3",{id:"rewriting-git-history"},"Rewriting Git History"),(0,n.kt)("p",null,'Using the process outlined in the "Git: Rewriting History with Rebase" lesson, go back and alter two of the commits from a previous project: '),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use the ",(0,n.kt)("inlineCode",{parentName:"li"},"--amend")," flag to change the most recent commit."),(0,n.kt)("li",{parentName:"ul"},"The rebase command to change any commit other than the most recent. Choose to either reword a commit message or squash and combine two commits. ")),(0,n.kt)("p",null,"Everyone in your pair or group should alter two commits."))}u.isMDXComponent=!0}}]);