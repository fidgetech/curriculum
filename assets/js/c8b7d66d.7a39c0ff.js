"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[92598],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),b=r,m=p["".concat(l,".").concat(b)]||p[b]||u[b]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},41293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"\ud83d\udcd3 3.3.0.01 Database Basics Objectives",day:"weekend",id:"3-3-0-01-database-basics-objectives",hide_table_of_contents:!0,pagination_prev:null},i=void 0,s={unversionedId:"c-and-net/database-basics/3-3-0-01-database-basics-objectives",id:"version-1.1/c-and-net/database-basics/3-3-0-01-database-basics-objectives",title:"\ud83d\udcd3 3.3.0.01 Database Basics Objectives",description:"Up until this point, data for our programs has been stored in our computers' RAM, also known as random-access memory. This is a fast, temporary place to store information but it's not suitable for long-term storage.",source:"@site/versioned_docs/version-1.1/3_c-and-net/3_database-basics/AA-3-3-0-01-database-basics-objectives.md",sourceDirName:"3_c-and-net/3_database-basics",slug:"/c-and-net/database-basics/3-3-0-01-database-basics-objectives",permalink:"/v1.1/c-and-net/database-basics/3-3-0-01-database-basics-objectives",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 3.3.0.01 Database Basics Objectives",day:"weekend",id:"3-3-0-01-database-basics-objectives",hide_table_of_contents:!0,pagination_prev:null},sidebar:"c-and-net",next:{title:"\ud83d\udcd3 3.3.0.02 Introduction to Databases",permalink:"/v1.1/c-and-net/database-basics/3-3-0-02-introduction-to-databases"}},l={},c=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2},{value:"Previous Objectives",id:"previous-objectives",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Up until this point, data for our programs has been stored in our computers' ",(0,r.kt)("strong",{parentName:"p"},"RAM"),", also known as ",(0,r.kt)("strong",{parentName:"p"},"random-access memory"),". This is a fast, temporary place to store information but it's not suitable for long-term storage."),(0,r.kt)("p",null,"Anything we want to save after halting our applications must be written to permanent storage on a hard disk. Starting in this section, we will begin using databases that will permanently store our data."),(0,r.kt)("p",null,"During the first part of the section, we'll learn how relational databases work and experiment with the ",(0,r.kt)("strong",{parentName:"p"},"SQL")," language to read, write, and query databases. We'll cover how to configure our own databases using tools including MySQL Workbench and MySQL Community Server. We'll build our database methods from scratch so we can see how an ORM (Object-Relational Mapping) tool works under the hood."),(0,r.kt)("p",null,"During the second part of the section, we'll use an ORM library called Entity Framework Core to make working with a database much easier. This will take care of the boilerplate code for us so we can focus on coding our applications."),(0,r.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do the database table and column names follow proper naming conventions? "),(0,r.kt)("li",{parentName:"ul"},"Do the project folder and exported database follow the specific naming requirements for this project?"),(0,r.kt)("li",{parentName:"ul"},"Are the instructions for re-creating your database thorough and clear?"),(0,r.kt)("li",{parentName:"ul"},"Is there a one-to-many relationship set up correctly in the database?"),(0,r.kt)("li",{parentName:"ul"},"Is CREATE functionality included for one class and is CREATE and VIEW functionality included for the other class?"),(0,r.kt)("li",{parentName:"ul"},"Is EF Core used for communication with the database?"),(0,r.kt)("li",{parentName:"ul"},"Build files and sensitive information are included in ",(0,r.kt)("inlineCode",{parentName:"li"},".gitignore")," file and is not to be tracked by Git, and includes instructions on how to create the ",(0,r.kt)("inlineCode",{parentName:"li"},"appsettings.json")," and set up the project."),(0,r.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,r.kt)("li",{parentName:"ul"},"The prompt's required functionality and baseline project requirements are in place.")),(0,r.kt)("h3",{id:"previous-objectives"},"Previous Objectives"),(0,r.kt)("p",null,"Additionally, the following objectives from previous sections will continue to apply:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Project uses two or more controllers."),(0,r.kt)("li",{parentName:"ul"},"GET and POST requests/responses are used successfully."),(0,r.kt)("li",{parentName:"ul"},"MVC routes follow RESTful conventions."),(0,r.kt)("li",{parentName:"ul"},"Logic is easy to understand."),(0,r.kt)("li",{parentName:"ul"},"Code and Git documentation follows best practices (descriptive variables names, proper indentation and spacing, separation between front and back-end logic, detailed commit messages in the correct tense, and a well-formatted README).")))}u.isMDXComponent=!0}}]);