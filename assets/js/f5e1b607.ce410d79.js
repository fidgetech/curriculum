"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[92261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u270f\ufe0f 1.2.4.4 Practice: Calculator and More",day:"thursday",id:"1-2-4-4-practice-calculator-and-more",hide_table_of_contents:!0},i=void 0,l={unversionedId:"introduction-to-programming/javascript-and-web-browsers/1-2-4-4-practice-calculator-and-more",id:"introduction-to-programming/javascript-and-web-browsers/1-2-4-4-practice-calculator-and-more",title:"\u270f\ufe0f 1.2.4.4 Practice: Calculator and More",description:"Goal: Explore using a variety of form input types, branching, and event listeners by completing the exercises listed below.",source:"@site/docs/1_introduction-to-programming/2_javascript-and-web-browsers/CP-1-2-4-4-practice-calculator-and-more.md",sourceDirName:"1_introduction-to-programming/2_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/1-2-4-4-practice-calculator-and-more",permalink:"/v1.2/introduction-to-programming/javascript-and-web-browsers/1-2-4-4-practice-calculator-and-more",draft:!1,tags:[],version:"current",frontMatter:{title:"\u270f\ufe0f 1.2.4.4 Practice: Calculator and More",day:"thursday",id:"1-2-4-4-practice-calculator-and-more",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 1.2.4.3 Calculator with Forms and Branching",permalink:"/v1.2/introduction-to-programming/javascript-and-web-browsers/1-2-4-3-calculator-with-forms-and-branching"},next:{title:"\ud83d\udcd3 1.2.4.5 Function Scope Versus Block Scope",permalink:"/v1.2/introduction-to-programming/javascript-and-web-browsers/1-2-4-5-function-scope-versus-block-scope"}},c={},s=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Calculator From Scratch",id:"calculator-from-scratch",level:3},{value:"Character Builder",id:"character-builder",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goal:")," Explore using a variety of form input types, branching, and event listeners by completing the exercises listed below."),(0,o.kt)("h2",{id:"warm-up"},"Warm Up"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How do we gather form input from a select (i.e.: dropdown) box? How does this differ from a basic input (i.e.: text) field?"),(0,o.kt)("li",{parentName:"ul"},"What does ",(0,o.kt)("inlineCode",{parentName:"li"},":checked")," refer to when gathering input from radio buttons?"),(0,o.kt)("li",{parentName:"ul"},"If we include ",(0,o.kt)("inlineCode",{parentName:"li"},'type="number"')," in an HTML form field, do we still need to use ",(0,o.kt)("inlineCode",{parentName:"li"},"parseInt()")," when retrieving the value (assuming we need a number)?")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Meet the goal by completing one of the practice prompts below. Your project must use: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"event listeners"),(0,o.kt)("li",{parentName:"ul"},"function declarations"),(0,o.kt)("li",{parentName:"ul"},"new form input types"),(0,o.kt)("li",{parentName:"ul"},"branching")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'If you are feeling less comfortable with these topics, you should choose the "calculator from scratch" project. If you are feeling more comfortable with these topics or want to stretch your comfort zone, build the "character builder" project.')),(0,o.kt)("p",null,"Make sure to budget time for any remaining lessons or practice prompts listed for this class session."),(0,o.kt)("h3",{id:"calculator-from-scratch"},"Calculator From Scratch"),(0,o.kt)("p",null,"Rebuild the calculator project from scratch ",(0,o.kt)("strong",{parentName:"p"},"without"),' referencing the previous lesson "Calculator with Forms and Branching". You may reference the lessons on branching, event listening, and form input types as needed. This prompt is meant to be a safe option to practice the new topics from today. '),(0,o.kt)("p",null,'If you really get stuck, you still should not reference the "Calculator with Forms and Branching" lesson. Instead, make use of the debugging tools you\'ve learned about so far: reading console errors and using ',(0,o.kt)("inlineCode",{parentName:"p"},"console.log()"),". Or, review previous lessons, research online, and ask for help from a peer or instructor. "),(0,o.kt)("h3",{id:"character-builder"},"Character Builder"),(0,o.kt)("p",null,"Create a webpage that helps users create a character for a game \u2014 any game! Ask the user to fill in a form with their character's name, and any information you feel like is relevant to the game. Use branching to determine some aspect of the character, like their personality or their strength."),(0,o.kt)("p",null,"Make sure to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Include all form input types we've covered so far (except checkboxes)"),(0,o.kt)("li",{parentName:"ul"},"Use event listeners with function declarations"),(0,o.kt)("li",{parentName:"ul"},"Use branching \u2014 note that your branching logic to determine the result does not need to be complicated.")),(0,o.kt)("p",null,"When you run into an bug, review your console for any errors and use ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log()")," to log any values. If you are still stuck after that, consider reviewing lessons, researching online, or asking for help from another your instructor."))}d.isMDXComponent=!0}}]);