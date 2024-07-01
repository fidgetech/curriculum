"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[87030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"\u270f\ufe0f 1.2.2.2 Practice: More Function Writing",day:"tuesday",id:"1-2-2-2-practice-more-function-writing",hide_table_of_contents:!0},a=void 0,c={unversionedId:"introduction-to-programming/javascript-and-web-browsers/1-2-2-2-practice-more-function-writing",id:"introduction-to-programming/javascript-and-web-browsers/1-2-2-2-practice-more-function-writing",title:"\u270f\ufe0f 1.2.2.2 Practice: More Function Writing",description:"Goal: Continue practicing writing and calling custom functions. It is simply additional practice. You may speak with your instructor about these extra prompts, if you feel comfortable enough with the concepts to move on.",source:"@site/docs/1_introduction-to-programming/2_javascript-and-web-browsers/BN-1-2-2-2-practice-more-function-writing.md",sourceDirName:"1_introduction-to-programming/2_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/1-2-2-2-practice-more-function-writing",permalink:"/v1/introduction-to-programming/javascript-and-web-browsers/1-2-2-2-practice-more-function-writing",draft:!1,tags:[],version:"current",frontMatter:{title:"\u270f\ufe0f 1.2.2.2 Practice: More Function Writing",day:"tuesday",id:"1-2-2-2-practice-more-function-writing",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 1.2.2.1 Variable Scope",permalink:"/v1/introduction-to-programming/javascript-and-web-browsers/1-2-2-1-variable-scope"},next:{title:"\ud83d\udcd3 1.2.2.3 Understanding Web APIs: The DOM",permalink:"/v1/introduction-to-programming/javascript-and-web-browsers/1-2-2-3-understanding-web-apis-the-dom"}},s={},l=[{value:"Code",id:"code",level:2},{value:"Temperature Conversion App",id:"temperature-conversion-app",level:3},{value:"Cooking Units Conversion App",id:"cooking-units-conversion-app",level:3},{value:"Cipher",id:"cipher",level:3}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goal:")," Continue practicing writing and calling custom functions. It is simply additional practice. You may speak with your instructor about these extra prompts, if you feel comfortable enough with the concepts to move on."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Follow the ",(0,o.kt)("a",{parentName:"li",href:"../../introduction-to-programming/javascript-and-web-browsers/1-2-1-15-practice-calculator-ui-and-business-logic"},"Calculator Business Logic Exercise")," in order to write your code in VS Code, while launching it in the browser with an HTML file."),(0,o.kt)("li",{parentName:"ul"},"Remember to use descriptive variable names and be mindful of your indentation."),(0,o.kt)("li",{parentName:"ul"},"Don't forget to make regular commits and push to GitHub.")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"These prompts are created in order of easier to more challenging. Read through each prompt with your pair and pick which one interests you the most. Pick just one prompt to complete. If you have additional time at the end of your class session, then come back to this classwork and choose another prompt to complete."),(0,o.kt)("h3",{id:"temperature-conversion-app"},"Temperature Conversion App"),(0,o.kt)("p",null,"Write a function that converts temperature between Celsius and Fahrenheit. You can do this in the DevTools console, or create a project in VS Code like we did for the calculator app."),(0,o.kt)("h3",{id:"cooking-units-conversion-app"},"Cooking Units Conversion App"),(0,o.kt)("p",null,"Write functions to be used by a cooking app that convert between units. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A function that converts between ounces (oz) and pounds (lbs) to grams (g)."),(0,o.kt)("li",{parentName:"ul"},"A function that converts teaspoons (tsp), tablespoons (tbsp), and cups to milliliters (ml). "),(0,o.kt)("li",{parentName:"ul"},"A function that converts gallons to liters. ")),(0,o.kt)("p",null,"Do some research online about what conversion you want to do. You can convert between imperial and metric measurement systems, or convert between dry weights and liquid volumes. "),(0,o.kt)("p",null,"Create a project for this like you did for the calculator project."),(0,o.kt)("h3",{id:"cipher"},"Cipher"),(0,o.kt)("p",null,"Practice writing functions for encoding a sentence from your user, as if you wanted to keep someone from reading it. To complete this exercise review previous lessons and the JavaScript methods we've covered thus far. Create a JavaScript file and an HTML file in VS Code for this project so that you can load your JavaScript in the browser, just like we did for the calculator project."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Start by prompting your user to enter a sentence. Then, store the sentence in a variable and display it to the user.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Next, create a function that will take the first and last letter of the sentence, capitalize them, and return this as a new string.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create another function that will reverse the order of these two letters and return the result.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a third function that calls the other two functions you've just created. For example, if I enter the sentence ",(0,o.kt)("em",{parentName:"p"},'"I am a sentence"'),", it should enter your first function (which should output ",(0,o.kt)("em",{parentName:"p"},'"IE"'),"),  then call your second function, passing in the output value from the previous. It would return ",(0,o.kt)("em",{parentName:"p"},'"EI"')," to me.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Add code to your third function to concatenate the new two-letter string together with the original phrase. It should add the two-letter string at the end, forming the final result "I am a sentenceEI."')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a fourth function to count the number of letters in the original sentence, divide it by two (rounding down if necessary), and output the letter at this index. Concatenate this letter at the beginning of the original sentence.  For example, if ",(0,o.kt)("em",{parentName:"p"},'"I am a sentence"')," is my original input, and it has 15 total characters in it. If I divide this by 2, I get 7.5, which rounds down to 7. The letter at the 7th position in the sentence is ",(0,o.kt)("em",{parentName:"p"},'"s"'),". So my final result is ",(0,o.kt)("em",{parentName:"p"},'"sI am a sentenceEI"'),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Bonus: Take the final result and reverse it: ",(0,o.kt)("em",{parentName:"p"},'"IEecnetnes a ma ls"'),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," It may seem somewhat impractical to create multiple functions for the cipher program, but writing multiple functions that have the ability to call each other will prepare you to write code in small, manageable chunks. This makes code easier to debug, and complex problems easier to approach. Rather than attempting to do everything all at once, we break things down into little pieces!"))}m.isMDXComponent=!0}}]);