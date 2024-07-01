"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[13729],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=o,y=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return t?a.createElement(y,r(r({ref:n},p),{},{components:t})):a.createElement(y,r({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},29928:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));const i={title:"\ud83d\udcd3 2.3.2.3 Async and Await",day:"tuesday",id:"2-3-2-3-async-and-await",hide_table_of_contents:!0},r=void 0,s={unversionedId:"intermediate-javascript/asynchrony-and-apis/2-3-2-3-async-and-await",id:"intermediate-javascript/asynchrony-and-apis/2-3-2-3-async-and-await",title:"\ud83d\udcd3 2.3.2.3 Async and Await",description:"In this lesson, we'll cover async functions, a relatively new JavaScript feature that was added in ES 2017. (Remember that ES6 is ECMAScript 2015.) While you aren't required to use async functions for the independent project, they are a really useful piece of JavaScript functionality and definitely a tool you should know about and be familiar with.",source:"@site/docs/2_intermediate-javascript/3_asynchrony-and-apis/AV-2-3-2-3-async-and-await.md",sourceDirName:"2_intermediate-javascript/3_asynchrony-and-apis",slug:"/intermediate-javascript/asynchrony-and-apis/2-3-2-3-async-and-await",permalink:"/v1/intermediate-javascript/asynchrony-and-apis/2-3-2-3-async-and-await",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 2.3.2.3 Async and Await",day:"tuesday",id:"2-3-2-3-async-and-await",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.3.2.2 Fetch API",permalink:"/v1/intermediate-javascript/asynchrony-and-apis/2-3-2-2-fetch-api"},next:{title:"\ud83d\udcd3 2.3.2.4 Further Exploration: IIFEs",permalink:"/v1/intermediate-javascript/asynchrony-and-apis/2-3-2-4-further-exploration-iifes"}},c={},l=[{value:"<code>async</code> Functions",id:"async-functions",level:2},{value:"<code>async</code> and <code>await</code>",id:"async-and-await",level:3},{value:"Adding <code>async</code> and <code>await</code> to our OpenWeather API Project",id:"adding-async-and-await-to-our-openweather-api-project",level:3}],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll cover async functions, a relatively new JavaScript feature that was added in ES 2017. (Remember that ES6 is ECMAScript 2015.) While you aren't required to use async functions for the independent project, they are a really useful piece of JavaScript functionality and definitely a tool you should know about and be familiar with."),(0,o.kt)("p",null,"An async function allows us to write asynchronous code as if it were synchronous. This can make our code more concise. And while promises go very well with API calls, there are plenty of other situations where using async functions will handle asynchronous operations better than a promise will. For example, if we wanted to do a series of five or six things in a row, many but not all of them async, code with promises would be very verbose while async functions would be easier to read and reason about."),(0,o.kt)("p",null,"In fact, even the code from the last lesson chains together two async operations. Throw another API call into the mix that also uses ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()")," and we are talking about four async operations in a row when we consider the streaming data as well. It's very feasible that we'd do a few synchronous things in between(such as parsing data from the first API call)."),(0,o.kt)("h2",{id:"async-functions"},(0,o.kt)("inlineCode",{parentName:"h2"},"async")," Functions"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Before we update our weather API project to use async functions, let's take a look at an example. We can create an async function with the ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," keyword. Try the following code in the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> async function thisIsAsync() { return "This is async"; }\n> thisIsAsync();\nPromise\xa0{<resolved>: "This is async"}\n')),(0,o.kt)("p",null,"All we did here is add the ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," keyword to a basic function that returns a string. When we call the function, it returns a resolved promise. As this example shows, async functions are using promises under the hood, too!"),(0,o.kt)("h3",{id:"async-and-await"},(0,o.kt)("inlineCode",{parentName:"h3"},"async")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"await")),(0,o.kt)("p",null,"The real power of async functions lies with the ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," keyword. When ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," is used within an async function, our code will stop executing until the line of code that includes ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," is completed. Let's take a look at an example in the context of an API call that uses ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'async function makeApiCall() {\n  const response = await fetch("http://some-api-call.com");\n  const jsonifiedResponse = await response.json();\n  return jsonifiedResponse;\n}\n')),(0,o.kt)("p",null,"We start by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," keyword to our ",(0,o.kt)("inlineCode",{parentName:"p"},"makeApiCall()")," function. Now we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," keyword as needed inside of the async function to wait for asynchronous actions to complete. "),(0,o.kt)("p",null,"Note that we can't use the ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," keyword outside of an ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," function. If we try to, we'll get the following error: ",(0,o.kt)("inlineCode",{parentName:"p"},"Uncaught SyntaxError: await is only valid in async function"),"."),(0,o.kt)("p",null,"Next, we set the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," variable to be equal to the response of the API call. If we did this without the ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," keyword, ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," would be undefined. That's because the variable is assigned before the async ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()")," call is complete. "),(0,o.kt)("p",null,"Once we add the ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," keyword, though, the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," won't be assigned until the ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()")," call is resolved."),(0,o.kt)("p",null,"We also need to ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," the completion of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Response.json()")," method because it's an async operation, too. Once that's done, we're ready to return the final ",(0,o.kt)("inlineCode",{parentName:"p"},"jsonifiedResponse"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," keyword has given us the ability to write asynchronous code as if it were synchronous. This results in very concise code that is easy to read and understand."),(0,o.kt)("h3",{id:"adding-async-and-await-to-our-openweather-api-project"},"Adding ",(0,o.kt)("inlineCode",{parentName:"h3"},"async")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"await")," to our OpenWeather API Project"),(0,o.kt)("p",null,"Now that we've looked at a basic example, let's update our weather application to use ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"await"),"."),(0,o.kt)("p",null,"We'll start by updating our service logic:"),(0,o.kt)("div",{class:"filename"},"src/weather-service.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default class WeatherService {  \n  static async getWeather(city) {\n    try {\n      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);\n      const jsonifiedResponse = await response.json();\n      if (!response.ok) {\n        const errorMessage = `${response.status} ${response.statusText}\n        ${jsonifiedResponse.message}`;\n        throw new Error(errorMessage);\n      }\n      return jsonifiedResponse;\n    } catch(error) {\n      return error;\n    }\n  }\n}\n")),(0,o.kt)("p",null,"First, we update our static ",(0,o.kt)("inlineCode",{parentName:"p"},"getWeather")," method to be async. Next, we need to wrap our code in a ",(0,o.kt)("inlineCode",{parentName:"p"},"try...catch")," block. We use a ",(0,o.kt)("inlineCode",{parentName:"p"},"try...catch")," block to handle errors, because ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," functions don't have the capability of resolving or rejecting the promise it uses under the hood. "),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"try")," block, we'll make our API call with ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()")," and then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," keyword to wait for the API call to complete. Then we call ",(0,o.kt)("inlineCode",{parentName:"p"},"reponse.json()"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," this action. We do this next so that we can use the API response for weather data and for its error messages. The rest of the service code has only minor changes to variable names \u2014 we still throw an error if the ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," property isn't ",(0,o.kt)("inlineCode",{parentName:"p"},"ok"),", and if the response property is ",(0,o.kt)("inlineCode",{parentName:"p"},"ok"),', we return the "jsonified" response.'),(0,o.kt)("p",null,"Next, let's take a look at our user interface logic:"),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import 'bootstrap';\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport './css/styles.css';\nimport WeatherService from './weather-service.js';\n\n// Business Logic\n\nasync function getWeather(city) {\n  const response = await WeatherService.getWeather(city);\n  if (response.main) {\n    printElements(response, city);\n  } else {\n    printError(response, city);\n  }\n}\n\n// UI Logic\n\nfunction printElements(response, city) {\n  document.querySelector('#showResponse').innerText = `The humidity in ${city} is ${response.main.humidity}%.\n  The temperature in Kelvins is ${response.main.temp} degrees.`;\n}\n\nfunction printError(error, city) {\n  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}: \n  ${error}.`;\n}\n\nfunction handleFormSubmission(event) {\n  event.preventDefault();\n  const city = document.querySelector('#location').value;\n  document.querySelector('#location').value = null;\n  getWeather(city);\n}\n\nwindow.addEventListener(\"load\", function() {\n  document.querySelector('form').addEventListener(\"submit\", handleFormSubmission);\n});\n")),(0,o.kt)("p",null,"All of the updates we've made are within the ",(0,o.kt)("inlineCode",{parentName:"p"},"getWeather")," function. Now this function is ",(0,o.kt)("inlineCode",{parentName:"p"},"async"),", and inside we ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," the response of the API call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function getWeather(city) {\n  const response = await WeatherService.getWeather(city);\n  if (response.main) {\n    printElements(response, city);\n  } else {\n    printError(response, city);\n  }\n}\n")),(0,o.kt)("p",null,"Then, instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()"),", we directly run the ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," variable through a conditional to determine whether to print the weather data or print an error message."),(0,o.kt)("p",null,"And that's it!"),(0,o.kt)("p",null,"Async functions can be a concise and elegant way to write code. However, it's important to think carefully about the code we put inside async functions. We are essentially forcing any code inside an async function to run synchronously. That means any asynchronous actions will block the flow of code until it is complete. If we put too much code inside an async function, we risk overriding JavaScript's non-blocking capabilities, potentially making our code more inefficient. That's not an issue in the code above but it would be if we wrapped our entire application in an async function."),(0,o.kt)("p",null,"You are welcome (but not required) to use async functions for this section's independent project. You are also encouraged to practice writing async functions during the classwork. However, make sure you have a clear understanding of promises first. After all, async functions use promises under the hood. "),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-6-js-api-call-with-webpack/tree/5_fetch_with_async_await"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for API Project with ",(0,o.kt)("inlineCode",{parentName:"a"},"fetch()")))),(0,o.kt)("p",null,"The above link takes you to the branch called ",(0,o.kt)("inlineCode",{parentName:"p"},"5_fetch_with_async_await"),"."))}u.isMDXComponent=!0}}]);