"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[31029],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),d=a,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return o?n.createElement(f,i(i({ref:t},c),{},{components:o})):n.createElement(f,i({ref:t},c))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},65153:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=o(87462),a=(o(67294),o(3905));const r={title:"\ud83d\udcd3 3.6.0.11 Further Exploration with API's",day:"weekend",id:"3-6-0-11-further-exploration-with-apis",hide_table_of_contents:!0},i=void 0,s={unversionedId:"c-and-net/building-an-api/3-6-0-11-further-exploration-with-apis",id:"c-and-net/building-an-api/3-6-0-11-further-exploration-with-apis",title:"\ud83d\udcd3 3.6.0.11 Further Exploration with API's",description:"It\u2019s time to do a deep dive on your own. In the classwork for this course section, you'll be tasked with trying to incorporate one or more of the following features into your API:",source:"@site/docs/3_c-and-net/6_building-an-api/AK-3-6-0-11-further-exploration-with-apis.md",sourceDirName:"3_c-and-net/6_building-an-api",slug:"/c-and-net/building-an-api/3-6-0-11-further-exploration-with-apis",permalink:"/c-and-net/building-an-api/3-6-0-11-further-exploration-with-apis",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.6.0.11 Further Exploration with API's",day:"weekend",id:"3-6-0-11-further-exploration-with-apis",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.6.0.10 Scaffolding API Controllers",permalink:"/c-and-net/building-an-api/3-6-0-10-scaffolding-api-controllers"},next:{title:"\ud83d\udcd3 3.6.0.12 Documenting Your API",permalink:"/c-and-net/building-an-api/3-6-0-12-documenting-your-api"}},l={},u=[{value:"Further Exploration Instructions",id:"further-exploration-instructions",level:3},{value:"Token-Based Authentication and Authorization",id:"token-based-authentication-and-authorization",level:3},{value:"API Versioning",id:"api-versioning",level:3},{value:"Paginating an API",id:"paginating-an-api",level:3},{value:"Enable CORS",id:"enable-cors",level:3}],c={toc:u},p="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It\u2019s time to do a deep dive on your own. In the classwork for this course section, you'll be tasked with trying to incorporate one or more of the following features into your API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Token-Based Authentication"),(0,a.kt)("li",{parentName:"ul"},"API Versioning"),(0,a.kt)("li",{parentName:"ul"},"Pagination"),(0,a.kt)("li",{parentName:"ul"},"Enable CORS")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For your independent project this course section, you'll also be tasked with incorporating one or more of the preceding further exploration topics into the API you create.")," The goal of this further exploration objective is for you to practice the skills that developers use everyday when they are tasked with implementing a new feature that may not have step-by-step guides for the exact implementation they need."),(0,a.kt)("p",null,"In this lesson, we'll learn a bit about each further exploration topic as well as basic expectations you should have for this practice. "),(0,a.kt)("h3",{id:"further-exploration-instructions"},"Further Exploration Instructions"),(0,a.kt)("p",null,"Before getting started, review each of the further exploration objectives below and do some preliminary research. You should be familiar with each of these concepts even if you don\u2019t add them to your API."),(0,a.kt)("p",null,"With this being the last section of new material for the C# and .NET course, one of our main goals for this section is to foster growth in your ability to independently troubleshoot. This means the further exploration will be exactly that: ",(0,a.kt)("em",{parentName:"p"},"exploration"),". Once you begin active development in the industry, there will not always be step-by-step guides for exact implementation of concepts that fit neatly into your projects. It is critical that you have the opportunity to get experience in diving into documentation, modifying code snippets you find online to fit your needs, looking up error messages you receive, and solving problems with patience and trial-and-error. "),(0,a.kt)("p",null,"In this section, we will reaffirm a point from the student handbook: "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Our best advice is to not think of Epicodus as a place to learn Ruby, React, C#, JavaScript, or some other language or tool. Instead, think of it as a place to learn how to learn.")," ")),(0,a.kt)("p",null,"Although teachers ",(0,a.kt)("em",{parentName:"p"},"may")," be willing to talk broadly about these further exploration concepts with you, do not expect any teacher guidance on these principles. It may be frustrating in the moment to feel like you are on your own in finding these answers, but it's the best preparation we can give you for the world waiting for you after Epicodus. This course section is an opportunity to differentiate yourself through your unique implementations of these concepts."),(0,a.kt)("p",null,"There are tutorials available online for each of these objectives, but you\u2019ll likely need to do some customization to get the code working for your own APIs. We'll provide some starting resources, but you will have to do additional research. Collaborate with your classmates and share information. Be prepared for code examples that don\u2019t seem to work or don\u2019t fit your exact needs. Most of all, be patient with yourself. This is a key part of being a developer \u2014 piecing together available resources into a solution that works for you. Each of these objectives are essential parts of a good API, so take your pick and learn as much as you can!"),(0,a.kt)("h3",{id:"token-based-authentication-and-authorization"},"Token-Based Authentication and Authorization"),(0,a.kt)("p",null,"A good API usually has an authentication scheme. Otherwise users can access all the endpoints in your API. Malicious or misinformed users could make ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT")," requests that seriously harm your database and the overall functionality of your application."),(0,a.kt)("p",null,"The standard for authentication is to use JSON Web Tokens (also known as JWT) for authentication. These are simply encrypted JSON tokens storing a user's credentials. There are quite a few tutorials available for integrating JWT authentication into a .NET 6 API. Try adding authentication into your own application."),(0,a.kt)("p",null,"Here are a few resources to get you started:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.yogihosting.com/jwt-api-aspnet-core/"},"ASP.NET Core JWT Authentication and Authorization of Web API")," From Yogi Hosting."),(0,a.kt)("li",{parentName:"ul"},"Learn general information about JWTs on ",(0,a.kt)("a",{parentName:"li",href:"https://jwt.io/introduction"},"jwt.io"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/architecture/microservices/secure-net-microservices-web-applications/#authenticate-with-bearer-tokens"},"Learn how to secure an ASP.NET Core Web API with bearer tokens."))),(0,a.kt)("h3",{id:"api-versioning"},"API Versioning"),(0,a.kt)("p",null,"Good code lasts forever. Actually, that's not true at all. Code is always changing, getting updated and breaking. The same is true with APIs."),(0,a.kt)("p",null,"This can lead to big problems. Let's say your API is used by thousands of enterprise-level customers. If you incorporate breaking changes (or even minimal changes) to your API, which is inevitable, your customers might experience errors and downtime. Even a small change to an API endpoint could have major repercussions for another application that relies on that endpoint."),(0,a.kt)("p",null,"This is why a good API uses versioning. Generally, an API starts with Version 1.0. That way, when we make breaking changes at some point in the future, we can push these changes to Version 2.0. We can then leave Version 1.0 available for enterprises that don't have time to update to Version 2.0 just yet, or might need to make updates to their own code to deal with the changes first. If we're making smaller changes to an API, we might not upgrade to 2.0 \u2014 instead, 1.1 would suffice."),(0,a.kt)("p",null,"Here are some resources to get you started:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check out this ",(0,a.kt)("a",{parentName:"li",href:"https://blog.christian-schou.dk/how-to-use-api-versioning-in-net-core-web-api/"},"tutorial")," from Christan Schou for adding versioning to your API."),(0,a.kt)("li",{parentName:"ul"},"Check out ",(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/shows/visual-studio-toolbox/versioning-aspnet-core-services"},"this video from Microsoft")," that discusses how to add and manage versions to ASP.NET Core apps.")),(0,a.kt)("h3",{id:"paginating-an-api"},"Paginating an API"),(0,a.kt)("p",null,"Let\u2019s say our API has thousands of records. It would no longer be reasonable for a GET request to return all of the records in our database. Instead, we should paginate the results to only return a selection of results, instead of all of the records."),(0,a.kt)("p",null,"A user should be able to access the API endpoint with a query parameter that specifies the page that should be returned. For example, the query string ",(0,a.kt)("em",{parentName:"p"},"/records?page=2")," might return page 2 of the results."),(0,a.kt)("p",null,"Here are some resources to get you started:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/data/ef-mvc/sort-filter-page?view=aspnetcore-6.0"},"Adding sort, filter, and paging"),' from the ASP.NET Core docs. Note that this guide shows you how to sort and filter along with adding pagination (also called "paging").'),(0,a.kt)("li",{parentName:"ul"},"Check out the following Code Maze ",(0,a.kt)("a",{parentName:"li",href:"https://code-maze.com/paging-aspnet-core-webapi/"},"tutorial")," on implementing pagination.")),(0,a.kt)("h3",{id:"enable-cors"},"Enable CORS"),(0,a.kt)("p",null,"Generally, we do not want to enable Cross-Origin Resource Sharing in an API. This is because it reduces the security of our application. However, there are certain use cases where having a CORS-compliant API can be useful. For instance, if we want users to be able to make an API call from a client-side JavaScript application, we'd enable CORS."),(0,a.kt)("p",null,"Try enabling CORS in your application by following ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-6.0"},"this tutorial")," from the official Microsoft documentation."))}h.isMDXComponent=!0}}]);