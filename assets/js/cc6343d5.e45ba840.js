"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[72148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"\u270f\ufe0f 2.3.2.1 API Refactor, Dino Ipsum",day:"tuesday",id:"2-3-2-1-api-refactor-dino-ipsum",hide_table_of_contents:!0},i=void 0,s={unversionedId:"intermediate-javascript/asynchrony-and-apis/2-3-2-1-api-refactor-dino-ipsum",id:"intermediate-javascript/asynchrony-and-apis/2-3-2-1-api-refactor-dino-ipsum",title:"\u270f\ufe0f 2.3.2.1 API Refactor, Dino Ipsum",description:"Goal:  Practice making API calls in JavaScript using a promise. Start by following along with the homework to build out the refactor of the OpenWeather API project. Then move onto another project. Each project should include a full development environment, a .env file for sensitive API variables, and complete README instructions, including instructions for setting up an API key as needed. Make sure to include error handling and practice parsing JSON, too.",source:"@site/docs/2_intermediate-javascript/3_asynchrony-and-apis/AT-2-3-2-1-api-refactor-dino-ipsum.md",sourceDirName:"2_intermediate-javascript/3_asynchrony-and-apis",slug:"/intermediate-javascript/asynchrony-and-apis/2-3-2-1-api-refactor-dino-ipsum",permalink:"/intermediate-javascript/asynchrony-and-apis/2-3-2-1-api-refactor-dino-ipsum",draft:!1,tags:[],version:"current",frontMatter:{title:"\u270f\ufe0f 2.3.2.1 API Refactor, Dino Ipsum",day:"tuesday",id:"2-3-2-1-api-refactor-dino-ipsum",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.3.1.8 Speaking Up",permalink:"/intermediate-javascript/asynchrony-and-apis/2-3-1-8-speaking-up"},next:{title:"\ud83d\udcd3 2.3.2.2 Fetch API",permalink:"/intermediate-javascript/asynchrony-and-apis/2-3-2-2-fetch-api"}},l={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"OpenWeather API",id:"openweather-api",level:3},{value:"Project Refactor",id:"project-refactor",level:3},{value:"Dino Ipsum API",id:"dino-ipsum-api",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal:"),"  Practice making API calls in JavaScript using a promise. Start by following along with the homework to build out the refactor of the OpenWeather API project. Then move onto another project. Each project should include a full development environment, a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file for sensitive API variables, and complete README instructions, including instructions for setting up an API key as needed. Make sure to include error handling and practice parsing JSON, too."),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is a promise? What are the advantages and disadvantages of using a promise for async code?"),(0,r.kt)("li",{parentName:"ul"},"What is a static method? How is a static method different from an instance method?"),(0,r.kt)("li",{parentName:"ul"},"How can we use callbacks to handle async code?"),(0,r.kt)("li",{parentName:"ul"},"What causes callback hell and how can we avoid it?")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"openweather-api"},"OpenWeather API"),(0,r.kt)("p",null,"Follow along with the lessons to update the OpenWeather API project to use a promise, separate API business logic, and a static method."),(0,r.kt)("h3",{id:"project-refactor"},"Project Refactor"),(0,r.kt)("p",null,"Next, refactor one of the projects you worked on in the last class session to use promises. Once again, make sure that API call business logic is properly separated. Make sure to use static methods, too."),(0,r.kt)("h3",{id:"dino-ipsum-api"},"Dino Ipsum API"),(0,r.kt)("p",null,"Use this API to allow your users to generate ",(0,r.kt)("a",{parentName:"p",href:"http://dinoipsum.herokuapp.com/#res"},"dinosaur themed Lorem Ipsum"),". Use it any way you like. "),(0,r.kt)("p",null,"For instance, you could create a dinosaur-themed game where someone needs to guess the name of the dinosaur in 7 guesses. You could have users guess letter by letter, or by guessing whole words, like in ",(0,r.kt)("a",{parentName:"p",href:"https://wordplay.com/"},"the game Wordle"),". "),(0,r.kt)("p",null,"Whatever you do, don't worry about making a complex UI, like in the Wordle game that's linked above. Keep the UI as simple as possible and focus on completing the functionality of your application first. Once that's in place, you can move onto improving the UI. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Be sure you set your output format to JSON, not HTML or text."),(0,r.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does the application have a fully functioning development environment?"),(0,r.kt)("li",{parentName:"ul"},"Does the application successfully wrap an API call in a promise?"),(0,r.kt)("li",{parentName:"ul"},"Are business and user interface logic separated?"),(0,r.kt)("li",{parentName:"ul"},"Are API keys stored in a ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file and protected?"),(0,r.kt)("li",{parentName:"ul"},"Does the README include instructions for setting up the project including getting an API key and adding it to a ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file?")))}d.isMDXComponent=!0}}]);