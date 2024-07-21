"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[52464],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return t?o.createElement(m,a(a({ref:n},p),{},{components:t})):o.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1348:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(87462),i=(t(67294),t(3905));const r={title:"\ud83d\udcd3 2.3.2.4 Further Exploration: IIFEs",day:"tuesday",id:"2-3-2-4-further-exploration-iifes",hide_table_of_contents:!0},a=void 0,s={unversionedId:"intermediate-javascript/asynchrony-and-apis/2-3-2-4-further-exploration-iifes",id:"intermediate-javascript/asynchrony-and-apis/2-3-2-4-further-exploration-iifes",title:"\ud83d\udcd3 2.3.2.4 Further Exploration: IIFEs",description:"This lesson is optional further exploration. You can skip it entirely if you want. We'll use a more advanced technique called an IIFE to refactor the code we wrote in the last lesson.",source:"@site/docs/2_intermediate-javascript/3_asynchrony-and-apis/AW-2-3-2-4-further-exploration-iifes.md",sourceDirName:"2_intermediate-javascript/3_asynchrony-and-apis",slug:"/intermediate-javascript/asynchrony-and-apis/2-3-2-4-further-exploration-iifes",permalink:"/v1.2/intermediate-javascript/asynchrony-and-apis/2-3-2-4-further-exploration-iifes",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 2.3.2.4 Further Exploration: IIFEs",day:"tuesday",id:"2-3-2-4-further-exploration-iifes",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.3.2.3 Async and Await",permalink:"/v1.2/intermediate-javascript/asynchrony-and-apis/2-3-2-3-async-and-await"},next:{title:"\u270f\ufe0f 2.3.3.1 Bike Index, Cryptocurrency Analytics App, API of Choice (Longer Project)",permalink:"/v1.2/intermediate-javascript/asynchrony-and-apis/2-3-3-1-bike-index-cryptocurrency-analytics-app-api-of-choice-longer-project"}},l={},c=[{value:"Immediately-Invoked Function Expressions",id:"immediately-invoked-function-expressions",level:2},{value:"IFFE Syntax",id:"iffe-syntax",level:3},{value:"Benefits of IIFEs",id:"benefits-of-iifes",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This lesson is ",(0,i.kt)("strong",{parentName:"p"},"optional further exploration"),". You can skip it entirely if you want. We'll use a more advanced technique called an IIFE to refactor the code we wrote in the last lesson. "),(0,i.kt)("h2",{id:"immediately-invoked-function-expressions"},"Immediately-Invoked Function Expressions"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"An IIFE is an Immediately-Invoked Function Expression. IIFEs definitely have their use cases (there's more on this below) but they really aren't necessary for beginners or even intermediate developers to know about. However, you may run into them in the wild, so it can be helpful to get some exposure now. "),(0,i.kt)("p",null,"So, to get familiar with how we can use an IIFE, let's turn our async ",(0,i.kt)("inlineCode",{parentName:"p"},"getWeather")," function into an IIFE that's a part of our ",(0,i.kt)("inlineCode",{parentName:"p"},"handleFormSubmission"),". This is what our ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," file will look like:"),(0,i.kt)("div",{class:"filename"},"src/index.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import 'bootstrap';\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport './css/styles.css';\nimport WeatherService from './weather-service.js';\n\n// UI Logic\n\nfunction handleFormSubmission(event) {\n  event.preventDefault();\n  const city = document.querySelector('#location').value;\n  document.querySelector('#location').value = null;\n  (async function() {\n    const response = await WeatherService.getWeather(city);\n    if (response.main) {\n      printElements(response, city);\n    } else {\n      printError(response, city);\n    }\n  })();  \n}\n\nfunction printElements(response, city) {\n  document.querySelector('#showResponse').innerText = `The humidity in ${city} is ${response.main.humidity}%.\n  The temperature in Kelvins is ${response.main.temp} degrees.`;\n}\n\nfunction printError(error, city) {\n  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}: \n  ${error}.`;\n}\n\nwindow.addEventListener(\"load\", function() {\n  document.querySelector('form').addEventListener(\"submit\", handleFormSubmission);\n});\n")),(0,i.kt)("p",null,"As noted, we've removed the ",(0,i.kt)("inlineCode",{parentName:"p"},"getWeather")," function, and now we have an IIFE inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"handleFormSubmission")," that does the same thing as the ",(0,i.kt)("inlineCode",{parentName:"p"},"getWeather")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function handleFormSubmission() {\n  ...\n\n  (async function() {\n    const response = await WeatherService.getWeather(city);\n    if (response.main) {\n      printElements(response, city);\n    } else {\n      printError(response, city);\n    }\n  })();  \n}\n")),(0,i.kt)("h3",{id:"iffe-syntax"},"IFFE Syntax"),(0,i.kt)("p",null,"So what exactly is going on here? And what's with the weird additional parens? Well, that's the syntax for an IIFE \u2014 a function that's immediately invoked. Here's the syntax in a nutshell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Pseudocode example!\n\n(function() {\n  // A function to be invoked immediately.\n})();\n")),(0,i.kt)("p",null,"The key thing here is that we wrap the function itself in ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping"},"grouping parentheses")," and then we also have a closing parens at the end of the IIFE:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The parentheses around the function are so the JavaScript compiler doesn't throw an error. "),(0,i.kt)("li",{parentName:"ul"},"The parens at the end invoke the function just like we'd invoke any named function. ")),(0,i.kt)("p",null,"We can even use a named function for an IIFE:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Pseudocode!\n\n(function thisIsImmediatelyInvoked() {\n  // A function to be invoked immediately.\n})();\n")),(0,i.kt)("h3",{id:"benefits-of-iifes"},"Benefits of IIFEs"),(0,i.kt)("p",null,"Updating our code in ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," to use an IIFE changed the way our code was structured, but it wasn't necessarily an improvement. So, the question remains, why use an IIFE? "),(0,i.kt)("p",null,"Well, the biggest benefit of IIFEs is data privacy. Any variables or data in an IIFE are scoped to it and aren't available elsewhere. If we don't use an IIFE, those variables will be available in other scopes, perhaps even the global scope, which isn't good."),(0,i.kt)("p",null,"Let's quickly demonstrate:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> (function() {\n  const secret = "This is a secret!"\n})();\n> secret;\nVM126:4 Uncaught ReferenceError: secret is not defined\n')),(0,i.kt)("p",null,"If we run this in the DevTools console, we'll get a ",(0,i.kt)("inlineCode",{parentName:"p"},"secret is not defined")," error. As we know, it's very important to scope our code. For instance, think about the projects we did before we implemented JavaScript. We might have something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function doSomething() {\n  // This function will do something.\n}\n\nwindow.onload = function() {\n  doSomething();\n};\n")),(0,i.kt)("p",null,"Well, that ",(0,i.kt)("inlineCode",{parentName:"p"},"doSomething()")," function is available globally \u2014 we could even access it by typing in ",(0,i.kt)("inlineCode",{parentName:"p"},"window.doSomething")," in the DevTools console when we run our project."),(0,i.kt)("p",null,"So traditionally, it was common to use an IIFE to wrap the code in the user interface source code like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"(function() {\n  \n  function doSomething() {\n    // This function will do something.\n  }\n\n  window.onload = function() {\n    doSomething();\n  };\n})();\n")),(0,i.kt)("p",null,"This way, the ",(0,i.kt)("inlineCode",{parentName:"p"},"doSomething()")," function will no longer be in the global scope (or accessible via the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object). It would just be available within the scope of the IIFE, which is where we want it."),(0,i.kt)("p",null,"Fortunately, webpack solves this problem for us, too, and doesn't allow code to leak into the global scope, so you won't see an IIFE used in this way with webpack. They can still be a useful tool for scoping code, though, and they can make an async function look a little bit cleaner."),(0,i.kt)("p",null,"The example repository hasn't been updated to include this code because it's optional. However, if you are interested in working with IIFEs, we recommend trying them out when you are writing async functions. For more information on the use cases for IIFEs, ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/IIFE"},"visit the MDN documentation on IIFEs"),"."))}d.isMDXComponent=!0}}]);