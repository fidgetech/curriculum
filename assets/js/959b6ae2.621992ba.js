"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[20772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={title:"\ud83d\udcd3 3.1.1.2- A Closer Look at Compiling and Executing C# Programs",day:"monday",id:"3-1-1-2--a-closer-look-at-compiling-and-executing-c-programs",hide_table_of_contents:!0},i=void 0,l={unversionedId:"c-and-net/test-driven-development-with-c/3-1-1-2--a-closer-look-at-compiling-and-executing-c-programs",id:"version-1.1/c-and-net/test-driven-development-with-c/3-1-1-2--a-closer-look-at-compiling-and-executing-c-programs",title:"\ud83d\udcd3 3.1.1.2- A Closer Look at Compiling and Executing C# Programs",description:"Over the pre-work we learned how to create console apps and test business logic using TDD and MSTest. Let's take a closer look at the process of compiling and running code in C#.",source:"@site/versioned_docs/version-1.1/3_c-and-net/1_test-driven-development-with-c/AC-3-1-1-2--a-closer-look-at-compiling-and-executing-c-programs.md",sourceDirName:"3_c-and-net/1_test-driven-development-with-c",slug:"/c-and-net/test-driven-development-with-c/3-1-1-2--a-closer-look-at-compiling-and-executing-c-programs",permalink:"/v1.1/c-and-net/test-driven-development-with-c/3-1-1-2--a-closer-look-at-compiling-and-executing-c-programs",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 3.1.1.2- A Closer Look at Compiling and Executing C# Programs",day:"monday",id:"3-1-1-2--a-closer-look-at-compiling-and-executing-c-programs",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\u270f\ufe0f 3.1.1.1 Shape Tracker, Ping Pong, Sphinx, Queen Attack",permalink:"/v1.1/c-and-net/test-driven-development-with-c/3-1-1-1-shape-tracker-ping-pong-sphinx-queen-attack"},next:{title:"\ud83d\udcd3 3.1.1.3- Overloading Constructors and Methods",permalink:"/v1.1/c-and-net/test-driven-development-with-c/3-1-1-3--overloading-constructors-and-methods"}},c={},s=[{value:"Compilation",id:"compilation",level:2},{value:"JIT",id:"jit",level:3},{value:"AOT",id:"aot",level:3},{value:"Steps in the .NET Compilation Process",id:"steps-in-the-net-compilation-process",level:2},{value:"Running C# Code with the Common Language Runtime (CLR)",id:"running-c-code-with-the-common-language-runtime-clr",level:2},{value:"A Diagram of Compiling and Executing C# Programs",id:"a-diagram-of-compiling-and-executing-c-programs",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Over the pre-work we learned how to create console apps and test business logic using TDD and MSTest. Let's take a closer look at the process of compiling and running code in C#."),(0,r.kt)("h2",{id:"compilation"},"Compilation"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compilation")," is the process of assembling information from various sources into one location. In software development, this means transforming the code a developer writes into machine readable code which can be executed by a microprocessor."),(0,r.kt)("p",null,"All code is compiled. But this can happen in more than one way."),(0,r.kt)("h3",{id:"jit"},"JIT"),(0,r.kt)("p",null,"When we write a line of JavaScript code and pass it into the browser, it automatically runs. There is a direct relationship between the code we write and the behaviors we observe and interact with. In fact, the file the browser references is the same file we've written."),(0,r.kt)("p",null,"However, a ",(0,r.kt)("strong",{parentName:"p"},"compile")," action ",(0,r.kt)("em",{parentName:"p"},"does")," happen with JavaScript in the browser. The code is evaluated and the actions within the code are carried out, but this happens live, as the user loads or interacts with the code. This type of compilation is called ",(0,r.kt)("strong",{parentName:"p"},"Just In Time")," compiling (",(0,r.kt)("strong",{parentName:"p"},"JIT")," for short) because the code is compiled on-demand at the server or client level."),(0,r.kt)("h3",{id:"aot"},"AOT"),(0,r.kt)("p",null,"With C#, our computers do not interpret the code we write. Instead, our code is a set of instructions to build a program."),(0,r.kt)("p",null,"With this type of compilation, our code must go through several steps to be compiled into a different format that is optimized for our machines. The code is often compiled to binary files and is saved separately from the code we write. It would be very challenging for humans to read this code."),(0,r.kt)("p",null,"This compilation happens long before a user ever encounters our program and is called ",(0,r.kt)("strong",{parentName:"p"},"Ahead Of Time")," compiling or ",(0,r.kt)("strong",{parentName:"p"},"AOT")," for short."),(0,r.kt)("h2",{id:"steps-in-the-net-compilation-process"},"Steps in the .NET Compilation Process"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Several steps occur when we run ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-build"},"the command ",(0,r.kt)("inlineCode",{parentName:"a"},"dotnet build")," to compile our C# code"),"."),(0,r.kt)("p",null,"First, the build platform ",(0,r.kt)("strong",{parentName:"p"},"MSBuild")," is invoked. MSBuild looks through our project file and decides what resources it will need to build our program, just as a cook might decide which ingredients are needed for a recipe."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'<Project Sdk="Microsoft.NET.Sdk">\n\n    <PropertyGroup>\n        <OutputType>Exe</OutputType>\n        <TargetFramework>net6.0</TargetFramework>\n    </PropertyGroup>\n\n</Project>\n')),(0,r.kt)("p",null,"In the project file, we specify configurations that we want MSBuild to use in its compilation process:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We tell MSBuild we are using ",(0,r.kt)("inlineCode",{parentName:"li"},'"Microsoft.NET.Sdk"'),", a software development kit which contains the C# language and many libraries of information."),(0,r.kt)("li",{parentName:"ul"},"We tell MSBuild that we would like an ",(0,r.kt)("strong",{parentName:"li"},"executable"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"Exe")," output, meaning a program that can be run."),(0,r.kt)("li",{parentName:"ul"},"We also specify that we will be using the ",(0,r.kt)("inlineCode",{parentName:"li"},"net6.0")," framework, which contains a lot of built-in libraries (namespaces) that our C# code relies on (like ",(0,r.kt)("inlineCode",{parentName:"li"},"System"),").")),(0,r.kt)("p",null,"After MSBuild successfully gathers all of the resources our project needs, it will create a new folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"obj"),", and put all of the resources inside."),(0,r.kt)("p",null,"The next thing MSBuild does is compile our project's source code \u2014 the C# code that we write. The goal is to compile multiple C# files into a single executable file. However, if MSBuild encounters an error during this process (like a missing resource), it will fail, stop compiling, and deliver us a ",(0,r.kt)("strong",{parentName:"p"},"compiler error")," in the terminal. It's our job to resolve compiler errors so that MSBuild can compile our code. "),(0,r.kt)("p",null,"If there are no compiler errors, MSBuild will end its work by putting all of the compiled code in a ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," folder, including an executable file that we can run (with the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet run")," command). The executable file will end in ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".dll"),". "),(0,r.kt)("p",null,"Take note that the executable file no longer contains C# \u2014 it actually contains code written in the ",(0,r.kt)("strong",{parentName:"p"},"Common Intermediate Language (CIL)"),". What's that? The CLI is a programming language that various higher-level languages (C#, Visual Basic, F#) are turned into during the compilation process. It's an ",(0,r.kt)("strong",{parentName:"p"},"intermediary")," language, because it will eventually be compiled again into machine code when we run our program. We'll go over that next! To read more about the common intermediate language, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/standard/managed-code#intermediate-language--execution"},"MS docs"),"."),(0,r.kt)("h2",{id:"running-c-code-with-the-common-language-runtime-clr"},"Running C# Code with the Common Language Runtime (CLR)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"After our C# program is compiled, we run it with the command ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet run"),". This command invokes the .NET ",(0,r.kt)("strong",{parentName:"p"},"runtime")," called the ",(0,r.kt)("strong",{parentName:"p"},"Common Language Runtime (CLR)")," which does a few things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compiles the CIL code into machine code, which is code that only our computers can understand and process. "),(0,r.kt)("li",{parentName:"ul"},"Directs our computer to run the code!"),(0,r.kt)("li",{parentName:"ul"},"Provides services that improve our code's performance.")),(0,r.kt)("p",null,"The CLR exists in order to help developers write quality code that is cross-platform, meaning code that can be run on (most) operating systems (like Mac and Linux). We don't need to understand the extended details of the CLR, but if you want to learn more, start with ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/standard/clr"},"this article from Microsoft"),". "),(0,r.kt)("p",null,"So in the end, our C# code gets compiled twice \u2014 once to the CLI, and a second time to machine code. "),(0,r.kt)("h2",{id:"a-diagram-of-compiling-and-executing-c-programs"},"A Diagram of Compiling and Executing C# Programs"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Here's a diagram of how C# programs are compiled and executed to help you visualize the process:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A diagram of the process of writing, compiling, and running C# code.",src:n(28016).Z,width:"525",height:"855"})))}u.isMDXComponent=!0},28016:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/c-sharp-compilation-and-execution-b965b0f8a1aa0af981f06cf65bf5610c.png"}}]);