"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[45917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=a,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},63036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"\ud83d\udcd3 3.2.0.1 Basic Web Applications Objectives",day:"weekend",id:"3-2-0-1basic-web-applications-objectives",hide_table_of_contents:!0,pagination_prev:null},i=void 0,l={unversionedId:"c-and-net/basic-web-applications/3-2-0-1basic-web-applications-objectives",id:"c-and-net/basic-web-applications/3-2-0-1basic-web-applications-objectives",title:"\ud83d\udcd3 3.2.0.1 Basic Web Applications Objectives",description:"All C# apps we've created thus far have run in the command line. We've made cool stuff, sure, but without a front-end user interface our user interaction remains fairly limited.",source:"@site/docs/3_c-and-net/2_basic-web-applications/AA-3-2-0-1basic-web-applications-objectives.md",sourceDirName:"3_c-and-net/2_basic-web-applications",slug:"/c-and-net/basic-web-applications/3-2-0-1basic-web-applications-objectives",permalink:"/v1.2/c-and-net/basic-web-applications/3-2-0-1basic-web-applications-objectives",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.2.0.1 Basic Web Applications Objectives",day:"weekend",id:"3-2-0-1basic-web-applications-objectives",hide_table_of_contents:!0,pagination_prev:null},sidebar:"c-and-net",next:{title:"\ud83d\udcd3 3.2.0.2 How the Web Works: Clients and Servers",permalink:"/v1.2/c-and-net/basic-web-applications/3-2-0-2-how-the-web-works-clients-and-servers"}},s={},c=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All C# apps we've created thus far have run in the command line. We've made cool stuff, sure, but without a front-end user interface our user interaction remains fairly limited."),(0,a.kt)("p",null,"But we're about to change that! In this section, we'll begin creating C# web applications that run in the browser, like a 'real' website, instead of just the command line. We'll use a special web application framework called ",(0,a.kt)("strong",{parentName:"p"},"ASP.NET Core MVC")," to do this."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("strong",{parentName:"p"},"ASP.NET Core")," is an open-source framework within the .NET 6 framework. ",(0,a.kt)("strong",{parentName:"p"},"ASP.NET Core")," itself contains multiple frameworks to create cross-platform web applications. These include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ASP.NET Core MVC"),(0,a.kt)("li",{parentName:"ul"},"ASP.NET Core Razor Pages"),(0,a.kt)("li",{parentName:"ul"},"ASP.NET Core Blazor"),(0,a.kt)("li",{parentName:"ul"},"ASP.NET Core Web APIs"),(0,a.kt)("li",{parentName:"ul"},"And more!")),(0,a.kt)("p",null,"As noted above, we'll be working with ASP.NET Core MVC. ",(0,a.kt)("strong",{parentName:"p"},"MVC")," stands for ",(0,a.kt)("strong",{parentName:"p"},"Model-View-Controller"),", which is a coding pattern that separates code into 3 sections: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The model \u2014 what defines our objects"),(0,a.kt)("li",{parentName:"ul"},"The view \u2014 what users see on the website"),(0,a.kt)("li",{parentName:"ul"},"The controller \u2014 the mechanism that routes website traffic")),(0,a.kt)("p",null,"We will start by delving into routing and app creation with ASP.NET Core MVC's routing system. Then we will build our own custom C# classes and methods. Your work this section will cover the following tools and concepts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Server-Side MVCs"),(0,a.kt)("li",{parentName:"ul"},"HTTP methods"),(0,a.kt)("li",{parentName:"ul"},"RESTful routing"),(0,a.kt)("li",{parentName:"ul"},"Objects within objects"),(0,a.kt)("li",{parentName:"ul"},"Razor markup and syntax"),(0,a.kt)("li",{parentName:"ul"},"Saving data with C#")),(0,a.kt)("p",null,"By the end of the section, you should be able to create an ASP.NET Core MVC web application with good test coverage of model logic. "),(0,a.kt)("p",null,"When searching on the internet or conversing with other developers, always be careful to specify that you are using ASP.NET Core version 6. Note that the version of ASP.NET Core will always match the version of .NET that we use."),(0,a.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A splash page is used."),(0,a.kt)("li",{parentName:"ul"},"Project has ",(0,a.kt)("inlineCode",{parentName:"li"},"Vendor")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Order")," classes."),(0,a.kt)("li",{parentName:"ul"},"Project uses two or more controllers."),(0,a.kt)("li",{parentName:"ul"},"Models are thoroughly tested."),(0,a.kt)("li",{parentName:"ul"},"GET and POST requests/responses are used successfully."),(0,a.kt)("li",{parentName:"ul"},"MVC routes follow RESTful conventions."),(0,a.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,a.kt)("li",{parentName:"ul"},"The prompt\u2019s required functionality and baseline project requirements are met.")))}d.isMDXComponent=!0}}]);