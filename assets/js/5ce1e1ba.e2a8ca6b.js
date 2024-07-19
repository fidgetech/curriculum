"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[52848],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,w=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(w,i(i({ref:t},p),{},{components:n})):r.createElement(w,i({ref:t},p))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"\ud83d\udcd3 3.3.1.4 Introducing Entity Framework Core",day:"monday",id:"3-3-1-4-introducing-entity-framework-core",hide_table_of_contents:!0},i=void 0,s={unversionedId:"c-and-net/database-basics/3-3-1-4-introducing-entity-framework-core",id:"version-1.1/c-and-net/database-basics/3-3-1-4-introducing-entity-framework-core",title:"\ud83d\udcd3 3.3.1.4 Introducing Entity Framework Core",description:"So far, we've managed all SQL statements ourselves. We've written code both to issue SQL commands to the database and to process query results with classes like MySqlCommand, MySqlParameter, and MySqlDataReader from the MySqlConnector library.",source:"@site/versioned_docs/version-1.1/3_c-and-net/3_database-basics/AS-3-3-1-4-introducing-entity-framework-core.md",sourceDirName:"3_c-and-net/3_database-basics",slug:"/c-and-net/database-basics/3-3-1-4-introducing-entity-framework-core",permalink:"/v1.1/c-and-net/database-basics/3-3-1-4-introducing-entity-framework-core",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 3.3.1.4 Introducing Entity Framework Core",day:"monday",id:"3-3-1-4-introducing-entity-framework-core",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.3.1.3 Using SQL Designer",permalink:"/v1.1/c-and-net/database-basics/3-3-1-3-using-sql-designer"},next:{title:"\ud83d\udcd3 3.3.1.5 Configuration for Entity Framework Core",permalink:"/v1.1/c-and-net/database-basics/3-3-1-5-configuration-for-entity-framework-core"}},l={},c=[{value:"Object Relational Mapping (ORM)",id:"object-relational-mapping-orm",level:2},{value:"Entity Framework Core",id:"entity-framework-core",level:2},{value:"Versions and Types",id:"versions-and-types",level:3},{value:"Next Steps",id:"next-steps",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"So far, we've managed all SQL statements ourselves. We've written code both to issue SQL commands to the database and to process query results with classes like ",(0,a.kt)("inlineCode",{parentName:"p"},"MySqlCommand"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MySqlParameter"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"MySqlDataReader")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"MySqlConnector")," library."),(0,a.kt)("p",null,"Now we're going to begin exploring more advanced options. We'll use an ",(0,a.kt)("strong",{parentName:"p"},"object relational mapping")," (or ",(0,a.kt)("strong",{parentName:"p"},"ORM"),") framework to help simplify and manage our database interactions. In this lesson, we'll briefly discuss what an ORM does and why it's beneficial. Then we'll introduce the specific ORM our ASP.NET Core 6.0 applications will use: ",(0,a.kt)("strong",{parentName:"p"},"Entity Framework Core"),"."),(0,a.kt)("p",null,"In following lessons, we'll walk through how to configure and use EF Core in our To Do List app. You are welcome to code along with the lessons, or simply read through them. Throughout the walkthrough we'll share links to an example To Do List project that uses EF Core to communicate with a MySQL database."),(0,a.kt)("h2",{id:"object-relational-mapping-orm"},"Object Relational Mapping (ORM)"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Object-Relational Mapping (ORM)")," allows us to query and manipulate database data in an object-oriented fashion. Essentially, ORMs turn database info into objects of the language we're working in. This way we can focus on writing in C# instead of needing to deal with raw SQL."),(0,a.kt)("p",null,"Object Relational Mapping is a language-agnostic concept. Different languages have different ORM libraries. For instance, Ruby uses a tool called Active Record, Python's commonly-used Django framework includes ORM, and Java has multiple open-source options available."),(0,a.kt)("h2",{id:"entity-framework-core"},"Entity Framework Core"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Entity Framework Core")," (also called ",(0,a.kt)("strong",{parentName:"p"},"EF Core"),") is a powerful library that simplifies the process of mapping C# objects to database records. We can use EF Core to vastly simplify our database CRUD functionality."),(0,a.kt)("p",null,"While we'll use EF Core to communicate with a MySQL database, EF Core works with many types of databases. To see a complete list, visit ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/providers/?tabs=dotnet-core-cli"},"the MS Docs on EF Core Database Providers"),"."),(0,a.kt)("h3",{id:"versions-and-types"},"Versions and Types"),(0,a.kt)("p",null,"Entity Framework comes in two forms: Entity Framework and Entity Framework Core. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Entity Framework (EF) was built to work with the .NET Framework and is not compatible with applications built using .NET. Notably, EF only works on Windows computers, just like the .NET Framework.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Entity Framework Core (EF Core) was built to work with .NET, the software development kit (SDK) that we use in LearnHowToProgram.com coursework. Just like .NET, EF Core is open-source and cross-platform. EF Core has fewer features than Entity Framework, however it is lightweight and recommended for applications that don't require highly complex data manipulation. "))),(0,a.kt)("p",null,"Because we use .NET 6.0, so we must also use Entity Framework Core version 6.0."),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In the next few lessons we'll walk through configuring Entity Framework Core to work with our own applications. Then we'll use EF Core to help us write CRUD functionality that allows us to interact with our database without manually-constructed MySQL commands."))}d.isMDXComponent=!0}}]);