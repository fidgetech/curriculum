"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[32106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"\ud83d\udcd3 3.0.0.02 Installing C# and .NET",day:"weekend",id:"3-0-0-02-installing-c-and--net",hide_table_of_contents:!0},l=void 0,i={unversionedId:"c-and-net/lessons-1-5-getting-started-with-c/3-0-0-02-installing-c-and--net",id:"version-1.1/c-and-net/lessons-1-5-getting-started-with-c/3-0-0-02-installing-c-and--net",title:"\ud83d\udcd3 3.0.0.02 Installing C# and .NET",description:"First we'll install .NET, which provides access to the C# language. Follow along with instructions for your operating system below.",source:"@site/versioned_docs/version-1.1/3_c-and-net/0_lessons-1-5-getting-started-with-c/AB-3-0-0-02-installing-c-and--net.md",sourceDirName:"3_c-and-net/0_lessons-1-5-getting-started-with-c",slug:"/c-and-net/lessons-1-5-getting-started-with-c/3-0-0-02-installing-c-and--net",permalink:"/v1.1/c-and-net/lessons-1-5-getting-started-with-c/3-0-0-02-installing-c-and--net",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 3.0.0.02 Installing C# and .NET",day:"weekend",id:"3-0-0-02-installing-c-and--net",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.0.0.01 Welcome to C#",permalink:"/v1.1/c-and-net/lessons-1-5-getting-started-with-c/3-0-0-01-welcome-to-c"},next:{title:"\ud83d\udcd3 3.0.0.03 Installing dotnet-script",permalink:"/v1.1/c-and-net/lessons-1-5-getting-started-with-c/3-0-0-03-installing-dotnet-script"}},s={},c=[{value:"Installing the .NET SDK",id:"installing-the-net-sdk",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"First we'll install .NET, which provides access to the C# language. Follow along with instructions for your operating system below."),(0,r.kt)("h2",{id:"installing-the-net-sdk"},"Installing the .NET SDK"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"C# and .NET programming are fully supported on Mac operating systems. We can install .NET and C# on Mac, Windows, or Linux in a few steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you use a Mac computer, you need to determine whether your computer was made with the Apple Chip or Intel Chip, because there is a different SDK to download for each chip. ",(0,r.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT211814"},"Follow this Apple support article to learn whether your computer has an Apple chip or Intel chip."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Download the .NET 6 SDK (Software Development Kit)"),". To view all download options for the .NET 6 SDK, ",(0,r.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0"},"visit this page"),". Or, click on any of the following links for an immediate download from Microsoft:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.402-windows-x64-installer"},"For Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.402-macos-arm64-installer"},"For Macs with Apple Chip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.402-macos-x64-installer"},"For Macs with Intel Chip"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Open the file.")," This will launch an installer which will walk you through installation steps. Use the default settings the installer suggests.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Confirm the installation is successful.")," First, restart your command line shell (Terminal or GitBash) if it's already open, and then run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"$ dotnet --version"),". You should see something like this in response:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"6.0.402\n")),(0,r.kt)("p",null,"This means both .NET and C# are successfully installed and your computer recognizes the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet")," command."),(0,r.kt)("p",null,"In the next two lessons, we'll install ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script")," and MySQL."))}u.isMDXComponent=!0}}]);