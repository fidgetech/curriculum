"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[61746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"\ud83d\udcd3 3.0.0.06 Using a C# REPL",day:"weekend",id:"3-0-0-06-using-a-c-repl",hide_table_of_contents:!0,pagination_prev:null},i=void 0,l={unversionedId:"c-and-net/lessons-6-18-data-types-and-variables/3-0-0-06-using-a-c-repl",id:"version-1.1/c-and-net/lessons-6-18-data-types-and-variables/3-0-0-06-using-a-c-repl",title:"\ud83d\udcd3 3.0.0.06 Using a C# REPL",description:"We're finally ready to craft our first C# code!",source:"@site/versioned_docs/version-1.1/3_c-and-net/0_lessons-6-18-data-types-and-variables/AA-3-0-0-06-using-a-c-repl.md",sourceDirName:"3_c-and-net/0_lessons-6-18-data-types-and-variables",slug:"/c-and-net/lessons-6-18-data-types-and-variables/3-0-0-06-using-a-c-repl",permalink:"/v1.1/c-and-net/lessons-6-18-data-types-and-variables/3-0-0-06-using-a-c-repl",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 3.0.0.06 Using a C# REPL",day:"weekend",id:"3-0-0-06-using-a-c-repl",hide_table_of_contents:!0,pagination_prev:null},sidebar:"c-and-net",next:{title:"\ud83d\udcd3 3.0.0.07 Strings, String Concatenation and Interpolation, and Chars",permalink:"/v1.1/c-and-net/lessons-6-18-data-types-and-variables/3-0-0-07-strings-string-concatenation-and-interpolation-and-chars"}},s={},p=[{value:"The REPL",id:"the-repl",level:2},{value:"Accessing the REPL",id:"accessing-the-repl",level:3},{value:"Command Notation",id:"command-notation",level:3},{value:"Exiting the REPL",id:"exiting-the-repl",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We're finally ready to craft our first C# code! "),(0,r.kt)("p",null,"This lesson will explore a tool called a ",(0,r.kt)("strong",{parentName:"p"},"REPL")," that will allow us to run C# code directly in the command line. This is similar to how we ran JavaScript code using the browser DevTools console in the Intro to Programming and Intermediate JS courses."),(0,r.kt)("p",null,"The rest of this pre-work section will focus on learning and practice C# basics: data types, variables, methods, classes, type checking, branching, operators, looping, and more! As we'll see, a lot of the concepts we learned in JavaScript will also exist in C#, just with slightly different syntax."),(0,r.kt)("h2",{id:"the-repl"},"The REPL"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The next few lessons will use a command line tool called a ",(0,r.kt)("strong",{parentName:"p"},"REPL"),". This stands for ",(0,r.kt)("strong",{parentName:"p"},"READ - EVALUATE - PRINT - LOOP"),". It works as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We type in a line of code and hit enter. The REPL ",(0,r.kt)("strong",{parentName:"li"},"reads")," this code."),(0,r.kt)("li",{parentName:"ol"},"The REPL then ",(0,r.kt)("strong",{parentName:"li"},"evaluates")," the code, figuring out what it does."),(0,r.kt)("li",{parentName:"ol"},"Next it ",(0,r.kt)("strong",{parentName:"li"},"prints")," the result of running this code."),(0,r.kt)("li",{parentName:"ol"},"Finally, it ",(0,r.kt)("strong",{parentName:"li"},"loops")," back to step 1 so we can enter more code.")),(0,r.kt)("p",null,"Since we've installed ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script"),", we have a C# REPL available right in the terminal!"),(0,r.kt)("h3",{id:"accessing-the-repl"},"Accessing the REPL"),(0,r.kt)("p",null,"We can launch the REPL by opening our Terminal application (on a Mac machine) or our GitBash application (on Windows), entering the following command, then hitting ",(0,r.kt)("em",{parentName:"p"},"Enter"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet-script\n")),(0,r.kt)("p",null,"Regardless of operating system, we should be met with the following:"),(0,r.kt)("pre",null,">"),(0,r.kt)("p",null,"We're now in the REPL! The ",(0,r.kt)("inlineCode",{parentName:"p"},">")," symbol is the command prompt for ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script"),", and this is where we'll enter in all of our commands."),(0,r.kt)("h3",{id:"command-notation"},"Command Notation"),(0,r.kt)("p",null,"Before we run code, notice how the command prompt for ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script")," starts with the ",(0,r.kt)("inlineCode",{parentName:"p"},">")," symbol. A ",(0,r.kt)("strong",{parentName:"p"},"command prompt")," is just that, a symbol that denotes where we can enter in commands. The ",(0,r.kt)("inlineCode",{parentName:"p"},">")," is different from the standard terminal command prompt, which looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Guest-User@Desktop epicodus_student $\n")),(0,r.kt)("p",null,"Yours will differ slightly, depending on what OS you are on, what your computer's user name is:"),(0,r.kt)("p",null,"Again, notice the REPL precedes the command prompt with ",(0,r.kt)("inlineCode",{parentName:"p"},">")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"%"),", like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},">\n")),(0,r.kt)("p",null,"When our curriculum depicts commands meant to be run in the REPL, we'll precede them with ",(0,r.kt)("inlineCode",{parentName:"p"},">")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"%"),". When you see this, you are not required to type a ",(0,r.kt)("inlineCode",{parentName:"p"},">"),". You will only type the command listed after the ",(0,r.kt)("inlineCode",{parentName:"p"},">"),"."),(0,r.kt)("p",null,"If you see a command preceded with a ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"%"),", like you did in Intro and Intermediate JS, that means the command is meant for the standard terminal."),(0,r.kt)("h3",{id:"exiting-the-repl"},"Exiting the REPL"),(0,r.kt)("p",null,"We can exit at any point by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl + C"),"."),(0,r.kt)("p",null,"Now that we understand the basics of the C# REPL, let's practice. In the next few lessons, we'll cover how to use strings, variables, numbers and methods with C#."))}m.isMDXComponent=!0}}]);