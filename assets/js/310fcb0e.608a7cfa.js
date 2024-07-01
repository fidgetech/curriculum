"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[70167],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,y=u["".concat(c,".").concat(d)]||u[d]||h[d]||i;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90714:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"\u270f\ufe0f 2.3.3.1 Bike Index, Cryptocurrency Analytics App, API of Choice (Longer Project)",day:"wednesday",id:"2-3-3-1-bike-index-cryptocurrency-analytics-app-api-of-choice-longer-project",hide_table_of_contents:!0},o=void 0,l={unversionedId:"intermediate-javascript/asynchrony-and-apis/2-3-3-1-bike-index-cryptocurrency-analytics-app-api-of-choice-longer-project",id:"version-1.1/intermediate-javascript/asynchrony-and-apis/2-3-3-1-bike-index-cryptocurrency-analytics-app-api-of-choice-longer-project",title:"\u270f\ufe0f 2.3.3.1 Bike Index, Cryptocurrency Analytics App, API of Choice (Longer Project)",description:"Goal: Practice using all of the tools that we have learned so far to create an app centered around your choice of public JSON APIs which support CORS. As always, make sure you test API calls with Postman first.",source:"@site/versioned_docs/version-1.1/2_intermediate-javascript/3_asynchrony-and-apis/AX-2-3-3-1-bike-index-cryptocurrency-analytics-app-api-of-choice-longer-project.md",sourceDirName:"2_intermediate-javascript/3_asynchrony-and-apis",slug:"/intermediate-javascript/asynchrony-and-apis/2-3-3-1-bike-index-cryptocurrency-analytics-app-api-of-choice-longer-project",permalink:"/v1.1/intermediate-javascript/asynchrony-and-apis/2-3-3-1-bike-index-cryptocurrency-analytics-app-api-of-choice-longer-project",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\u270f\ufe0f 2.3.3.1 Bike Index, Cryptocurrency Analytics App, API of Choice (Longer Project)",day:"wednesday",id:"2-3-3-1-bike-index-cryptocurrency-analytics-app-api-of-choice-longer-project",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.3.2.4 Further Exploration: IIFEs",permalink:"/v1.1/intermediate-javascript/asynchrony-and-apis/2-3-2-4-further-exploration-iifes"},next:{title:"\ud83d\udcd3 2.3.3.2 Further Exploration: Chaining Promises",permalink:"/v1.1/intermediate-javascript/asynchrony-and-apis/2-3-3-2-further-exploration-chaining-promises"}},c={},s=[{value:"Warm Up \u2014 Part 1",id:"warm-up--part-1",level:2},{value:"Warm Up \u2014 Part 2",id:"warm-up--part-2",level:2},{value:"Code",id:"code",level:2},{value:"Bike Index API",id:"bike-index-api",level:3},{value:"Cryptocurrency Analytics App",id:"cryptocurrency-analytics-app",level:3},{value:"Pick Your Own API",id:"pick-your-own-api",level:3},{value:"Instructor/Peer Code Review",id:"instructorpeer-code-review",level:2}],p={toc:s},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal"),": Practice using all of the tools that we have learned so far to create an app centered around your choice of public JSON APIs which support CORS. As always, make sure you test API calls with Postman first."),(0,r.kt)("p",null,"This is a multi-day project, so you'll have time to do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Experiment with different tools for working with asynchrony, including callbacks, promises, the Fetch API, and async functions"),(0,r.kt)("li",{parentName:"ul"},"Make multiple API calls in the application"),(0,r.kt)("li",{parentName:"ul"},"Separate out logic clearly, including keeping business logic separate from service and UI logic as necessary"),(0,r.kt)("li",{parentName:"ul"},"Write a great README with thorough setup instructions"),(0,r.kt)("li",{parentName:"ul"},"Experiment with chaining promises")),(0,r.kt)("h2",{id:"warm-up--part-1"},"Warm Up \u2014 Part 1"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This warm up is for your first class session working on this multi-day project.")),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Are there any potential disadvantages to using async functions?"),(0,r.kt)("li",{parentName:"ul"},"What is SOP and CORS? Why is it important for making API calls in our projects?"),(0,r.kt)("li",{parentName:"ul"},"What is your preferred method of making API calls, and why?")),(0,r.kt)("h2",{id:"warm-up--part-2"},"Warm Up \u2014 Part 2"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This warm up is for your second class session working on this multi-day project.")),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How does the Fetch API work? "),(0,r.kt)("li",{parentName:"ul"},"What does ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch()")," return?"),(0,r.kt)("li",{parentName:"ul"},"How do async functions work? "),(0,r.kt)("li",{parentName:"ul"},"What does the ",(0,r.kt)("inlineCode",{parentName:"li"},"await")," keyword do?")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Carefully read all of the prompts below and select one to work on.")," You are encouraged to do preliminary research into each API to make your selection."),(0,r.kt)("h3",{id:"bike-index-api"},"Bike Index API"),(0,r.kt)("p",null,"Build an app using the ",(0,r.kt)("a",{parentName:"p",href:"https://bikeindex.org/"},"Bike Index API"),". Your app could list all the bikes that have been registered as stolen in a given location in the past week. Or it could display statistics \u2014 for instance, you could see which manufacturer is most frequently stolen in a given area."),(0,r.kt)("p",null,"To get started, check out ",(0,r.kt)("a",{parentName:"p",href:"https://bikeindex.org/documentation/api_v3"},"the main page of the Bike Index API Docs"),'. When you are ready to set up an API key, scroll down to find the "Your applications" section of "OAuth" \u2014 it\'s from here you can set up an account and get an API key.'),(0,r.kt)("h3",{id:"cryptocurrency-analytics-app"},"Cryptocurrency Analytics App"),(0,r.kt)("p",null,"Build an app using the ",(0,r.kt)("a",{parentName:"p",href:"https://www.coingecko.com/"},"CoinGecko API"),". Take a look at the CoinGecko homepage to get a sense of what you can do \u2014 the homepage is entirely built with the CoinGecko API. CoinGecko also provides ",(0,r.kt)("a",{parentName:"p",href:"https://apiguide.coingecko.com/getting-started/endpoint-demo"},"a helpful resource")," that explains what API endpoints are used to create the different features on the homepage. Here are some specific ideas of what you can do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your app can list currencies and their metadata (information like a description and full name, their category, as well as their symbol name). "),(0,r.kt)("li",{parentName:"ul"},"Or, your app could show the price and exchange rates for currencies."),(0,r.kt)("li",{parentName:"ul"},"You could also show the number of trades happening for each currency.")),(0,r.kt)("p",null,"Important to Know:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CoinGecko does not require an API key or account to get started on a basic free plan for hobbyists or devs who are using the API in a practice project. If you want to specifically practice with an API that requires a key, select a different prompt."),(0,r.kt)("li",{parentName:"ul"},'Under the free plan, there is an API call limit of 10 - 50 calls per minute, depending on API "traffic", meaning how many people are using the API at the same time.'),(0,r.kt)("li",{parentName:"ul"},"Since we'll be using the API in practice projects only, we'll need to follow their requirements for attribution, that is, giving credit and linking to CoinGecko in our website. To learn about CoinGecko's requirement for attribution, ",(0,r.kt)("a",{parentName:"li",href:"https://www.coingecko.com/en/branding"},"visit this webpage"),".")),(0,r.kt)("p",null,"Resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start by reviewing the ",(0,r.kt)("a",{parentName:"li",href:"https://apiguide.coingecko.com/getting-started/introduction"},"Official API Documentation"),", which includes references, tutorials, and information on best practices, errors, and rate limits."),(0,r.kt)("li",{parentName:"ul"},"Check out the ",(0,r.kt)("a",{parentName:"li",href:"https://www.coingecko.com/en/api/documentation"},"API explorer")," to test out the various API endpoints. You'll be able to input optional and required parameters and you'll get the actual API output returned to you. The API explorer tool is an alternative to using Postman to test out the API.")),(0,r.kt)("h3",{id:"pick-your-own-api"},"Pick Your Own API"),(0,r.kt)("p",null,"If you decide to use an API that isn't listed here, start with some research. We recommend checking out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/public-apis/public-apis"},"this comprehensive list of public APIs")," that's organized by type of data and authentication required. However, there are many other online resources about free APIs. Take note of a few things when selecting an API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure that the API has a free tier."),(0,r.kt)("li",{parentName:"ul"},"Make sure to confirm that the API supports CORS and that it returns JSON (unless you want to experiment with a format like XML). "),(0,r.kt)("li",{parentName:"ul"},"We suggest looking for APIs that use an API key. This isn't required, however! It's up to you to decide what's most important for you to practice."),(0,r.kt)("li",{parentName:"ul"},"We recommend that you only pick one API to focus on for the entire time so that you can have an opportunity to really build out your project. ")),(0,r.kt)("p",null,"Otherwise, if you liked the cryptocurrency analytics app prompt, but you want to work with an API that requires an API key, check out ",(0,r.kt)("a",{parentName:"p",href:"https://polygon.io/docs/stocks/getting-started"},"Polygon.io"),". Polygon includes information about stocks as well as crypto. The docs aren't quite as friendly as CoinGecko, but you will still be able to easily work with the API. Take note of a few things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The free plan for the Polygon.io API has a rate limit of 5 API calls per minute. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polygon.io/docs/stocks/get_v3_reference_tickers__ticker"},'Metadata, like the company name (not "ticker symbol") and description, only exists for stocks'),".")),(0,r.kt)("h2",{id:"instructorpeer-code-review"},"Instructor/Peer Code Review"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does the application make at least one API call and work as expected?"),(0,r.kt)("li",{parentName:"ul"},"Is application logic fully separated into user interface, service logic, and if necessary, business logic?"),(0,r.kt)("li",{parentName:"ul"},"Does the application include a fully functional development environment, including a ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file to hide any API keys?"),(0,r.kt)("li",{parentName:"ul"},"Does the application include a README with all setup instructions?")))}h.isMDXComponent=!0}}]);