"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[37390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>w});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),u=i,w=s["".concat(p,".").concat(u)]||s[u]||m[u]||a;return n?r.createElement(w,o(o({ref:t},d),{},{components:n})):r.createElement(w,o({ref:t},d))}));function w(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"\u270f\ufe0f 1.2.1.11 Practice: Interactivity with Window Methods",day:"monday",id:"1-2-1-11-practice-interactivity-with-window-methods",hide_table_of_contents:!0},o=void 0,l={unversionedId:"introduction-to-programming/javascript-and-web-browsers/1-2-1-11-practice-interactivity-with-window-methods",id:"introduction-to-programming/javascript-and-web-browsers/1-2-1-11-practice-interactivity-with-window-methods",title:"\u270f\ufe0f 1.2.1.11 Practice: Interactivity with Window Methods",description:"Goal",source:"@site/docs/1_introduction-to-programming/2_javascript-and-web-browsers/BG-1-2-1-11-practice-interactivity-with-window-methods.md",sourceDirName:"1_introduction-to-programming/2_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/1-2-1-11-practice-interactivity-with-window-methods",permalink:"/introduction-to-programming/javascript-and-web-browsers/1-2-1-11-practice-interactivity-with-window-methods",draft:!1,tags:[],version:"current",frontMatter:{title:"\u270f\ufe0f 1.2.1.11 Practice: Interactivity with Window Methods",day:"monday",id:"1-2-1-11-practice-interactivity-with-window-methods",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 1.2.1.10 A Common Data Type Error and Data Type Coercion",permalink:"/introduction-to-programming/javascript-and-web-browsers/1-2-1-10-a-common-data-type-error-and-data-type-coercion"},next:{title:"\ud83d\udcd3 1.2.1.12 Adding JS to a Project",permalink:"/introduction-to-programming/javascript-and-web-browsers/1-2-1-12-adding-js-to-a-project"}},p={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"<code>window</code> Methods Practice",id:"window-methods-practice",level:3}],d={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goal:"),'  In the "Interactivity with Window Methods" lesson, we learned:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"window")," methods perform actions in the browser."),(0,i.kt)("li",{parentName:"ul"},"Examples of ",(0,i.kt)("inlineCode",{parentName:"li"},"window")," methods include ",(0,i.kt)("inlineCode",{parentName:"li"},"window.alert()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"window.prompt()"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"window.confirm()"),"."),(0,i.kt)("li",{parentName:"ul"},"JavaScript methods can be chained onto ",(0,i.kt)("inlineCode",{parentName:"li"},"window")," methods.")),(0,i.kt)("p",null,"Methods are an important part of programming, and you'll be using them constantly. Get the hang of calling ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," methods by completing the practice exercises listed below."),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How can we comment out code?"),(0,i.kt)("li",{parentName:"ul"},"What happens when we run code that is commented out?"),(0,i.kt)("li",{parentName:"ul"},"What are the differences between the ",(0,i.kt)("inlineCode",{parentName:"li"},"window.alert()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"window.confirm()"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"window.prompt()")," methods?"),(0,i.kt)("li",{parentName:"ul"},"What is data type coercion?")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"window-methods-practice"},(0,i.kt)("inlineCode",{parentName:"h3"},"window")," Methods Practice"),(0,i.kt)("p",null,"Practice using these ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"window.alert()")," to pop up a dialog box with a warning for the user."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"window.confirm()")," to ask a yes or no question."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"window.prompt()")," to ask a question."),(0,i.kt)("li",{parentName:"ul"},"Save the response to the ",(0,i.kt)("inlineCode",{parentName:"li"},"window.prompt()")," as a variable. All responses entered by a user into a prompt input are saved as strings (even if the user enters ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),", the value is saved as the string, ",(0,i.kt)("inlineCode",{parentName:"li"},'"10"'),"). Run at least 3 string methods of your choice on the string variable that you create from the prompt."),(0,i.kt)("li",{parentName:"ul"},"Ask the user to enter their age in a prompt, and turn the response into a number using ",(0,i.kt)("inlineCode",{parentName:"li"},"parseInt()"),". First, save the response as a new variable and turn it into a number. Then, try turning the response into a number without saving it into a variable.")))}m.isMDXComponent=!0}}]);