"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[74929],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={title:"\u270f\ufe0f 3.5.5.1 Authentication with Identity Independent Project",day:"friday",id:"3-5-5-1-authentication-with-identity-independent-project",hide_table_of_contents:!0,paginationNext:null},a=void 0,l={unversionedId:"c-and-net/authentication-with-identity/3-5-5-1-authentication-with-identity-independent-project",id:"c-and-net/authentication-with-identity/3-5-5-1-authentication-with-identity-independent-project",title:"\u270f\ufe0f 3.5.5.1 Authentication with Identity Independent Project",description:"Independent Projects Overview",source:"@site/docs/3_c-and-net/5_authentication-with-identity/AU-3-5-5-1-authentication-with-identity-independent-project.md",sourceDirName:"3_c-and-net/5_authentication-with-identity",slug:"/c-and-net/authentication-with-identity/3-5-5-1-authentication-with-identity-independent-project",permalink:"/c-and-net/authentication-with-identity/3-5-5-1-authentication-with-identity-independent-project",draft:!1,tags:[],version:"current",frontMatter:{title:"\u270f\ufe0f 3.5.5.1 Authentication with Identity Independent Project",day:"friday",id:"3-5-5-1-authentication-with-identity-independent-project",hide_table_of_contents:!0,paginationNext:null},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.4.1.2 Weekly Technical Interview Prep",permalink:"/c-and-net/authentication-with-identity/3-4-1-2-weekly-technical-interview-prep"},next:{title:"\ud83d\udcd3 3.6.0.01 Building an API Objectives",permalink:"/c-and-net/building-an-api/3-6-0-01-building-an-api-objectives"}},s={},c=[{value:"Independent Projects Overview",id:"independent-projects-overview",level:2},{value:"Authentication with Identity Project Objectives",id:"authentication-with-identity-project-objectives",level:2},{value:"What is a polished, portfolio-quality state?",id:"what-is-a-polished-portfolio-quality-state",level:3},{value:"What are the baseline project requirements?",id:"what-are-the-baseline-project-requirements",level:3},{value:"Submission",id:"submission",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"independent-projects-overview"},"Independent Projects Overview"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Before you begin your project, take a moment to revisit and review the ",(0,r.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-at-epicodus/1-0-0-09-independent-projects-and-code-reviews"},"Independent Projects and Code Reviews")," lesson."),(0,r.kt)("h2",{id:"authentication-with-identity-project-objectives"},"Authentication with Identity Project Objectives"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This independent project will focus on implementing authentication and authorization using Identity. You are ",(0,r.kt)("em",{parentName:"p"},"not required")," to make an API call and parse its response using RestSharp and Newtonsoft for this project. We will use that tooling in the next section!"),(0,r.kt)("p",null,"Your code will be reviewed for the following objectives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does at least one of your classes have all CRUD methods implemented in your app?"),(0,r.kt)("li",{parentName:"ul"},"Are you able to view both sides of the many-many relationship? For a particular instance of a class, are you able to view all of the instances of the ",(0,r.kt)("strong",{parentName:"li"},"other")," class that are related to it?"),(0,r.kt)("li",{parentName:"ul"},"Are users able to register, log in and log out with Identity?"),(0,r.kt)("li",{parentName:"ul"},"Is Create, Update and Delete functionality limited to authenticated users?"),(0,r.kt)("li",{parentName:"ul"},"Build files and sensitive information are included in ",(0,r.kt)("inlineCode",{parentName:"li"},".gitignore")," file and is not to be tracked by Git, and includes instructions on how to create the ",(0,r.kt)("inlineCode",{parentName:"li"},"appsettings.json")," and set up the project."),(0,r.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,r.kt)("li",{parentName:"ul"},"The prompt's required functionality and baseline project requirements are in place.")),(0,r.kt)("h3",{id:"what-is-a-polished-portfolio-quality-state"},"What is a polished, portfolio-quality state?"),(0,r.kt)("p",null,"When a project is both polished and in a portfolio-quality state, this means:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You've reviewed your project and your README prior to submitting it to make sure there are no errors or missing information and you are consistent in your indentation, spacing, and code structure. "),(0,r.kt)("li",{parentName:"ul"},"You are following the best practices and coding conventions we teach.")),(0,r.kt)("h3",{id:"what-are-the-baseline-project-requirements"},"What are the baseline project requirements?"),(0,r.kt)("p",null,"All independent coding projects at Epicodus have these baseline requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A complete and informative README"),(0,r.kt)("li",{parentName:"ul"},"The project's commit history demonstrates that the project\u2019s required work hours have been met:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"8 hours of work is required for all students."))),(0,r.kt)("li",{parentName:"ul"},"Completion of the project based on the prompt ",(0,r.kt)("em",{parentName:"li"},"and")," objectives. The prompt contains details on the project's theme and features that are not always detailed in the objective. Carefully read through the prompt towards the end of your work session to make sure that you are not missing anything.")),(0,r.kt)("h2",{id:"submission"},"Submission"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Submit your Github repository to the ",(0,r.kt)("strong",{parentName:"p"},"Authentication with Identity")," Code Review on ",(0,r.kt)("a",{parentName:"p",href:"https://epicenter.epicodus.com"},"Epicenter"),"."),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-at-epicodus/1-0-0-09-independent-projects-and-code-reviews"},"Independent Projects and Code Reviews"),"  for details on how to submit your code, how feedback works and course completion requirements."))}u.isMDXComponent=!0}}]);