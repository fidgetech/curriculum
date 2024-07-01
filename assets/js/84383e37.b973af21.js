"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[37049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"\ud83d\udcd3 3.0.0.44 Improving Development by Using a Watcher",day:"weekend",id:"3-0-0-44-improving-development-by-using-a-watcher",hide_table_of_contents:!0,paginationNext:null},i=void 0,s={unversionedId:"c-and-net/lessons-32-44-tdd-and-debugging/3-0-0-44-improving-development-by-using-a-watcher",id:"c-and-net/lessons-32-44-tdd-and-debugging/3-0-0-44-improving-development-by-using-a-watcher",title:"\ud83d\udcd3 3.0.0.44 Improving Development by Using a Watcher",description:"Right now our applications run until they end, but we can change that with the help of a watcher, which will run our app continuously and (in most cases) reload when our source code changes.",source:"@site/docs/3_c-and-net/0_lessons-32-44-tdd-and-debugging/AM-3-0-0-44-improving-development-by-using-a-watcher.md",sourceDirName:"3_c-and-net/0_lessons-32-44-tdd-and-debugging",slug:"/c-and-net/lessons-32-44-tdd-and-debugging/3-0-0-44-improving-development-by-using-a-watcher",permalink:"/v1/c-and-net/lessons-32-44-tdd-and-debugging/3-0-0-44-improving-development-by-using-a-watcher",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.0.0.44 Improving Development by Using a Watcher",day:"weekend",id:"3-0-0-44-improving-development-by-using-a-watcher",hide_table_of_contents:!0,paginationNext:null},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.0.0.43 Debugging Tools",permalink:"/v1/c-and-net/lessons-32-44-tdd-and-debugging/3-0-0-43-debugging-tools"},next:{title:"\ud83d\udcd3 3.1.0.1 Test-Driven Development with C# Objectives",permalink:"/v1/c-and-net/test-driven-development-with-c/3-1-0-1-test-driven-development-with-c-objectives"}},l={},c=[{value:"The <code>dotnet</code> Watcher",id:"the-dotnet-watcher",level:2},{value:"Errors",id:"errors",level:3},{value:"Using the Watcher with <code>dotnet build</code>",id:"using-the-watcher-with-dotnet-build",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Right now our applications run until they end, but we can change that with the help of a watcher, which will run our app continuously and (in most cases) reload when our source code changes."),(0,a.kt)("h2",{id:"the-dotnet-watcher"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"dotnet")," Watcher"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Let's modify our ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet run")," command to save us some more time. .NET 6 provides a tool called a ",(0,a.kt)("strong",{parentName:"p"},"watcher"),". A watcher will monitor our files for us. Let's run the watcher now."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet watch run\n")),(0,a.kt)("p",null,"This command tells .NET to watch our application and then execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," command any time a change is made to our source code."),(0,a.kt)("p",null,"Here's the output in the terminal when we run our ",(0,a.kt)("inlineCode",{parentName:"p"},"watch")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'dotnet watch \ud83d\udd25 Hot reload enabled. For a list of supported edits, see https://aka.ms/dotnet/hot-reload. \n  \ud83d\udca1 Press "Ctrl + R" to restart.\ndotnet watch \ud83d\udd27 Building...\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n  ShapeTracker -> C:\\Users\\staff\\Desktop\\ShapeTracker.Soltuion\\ShapeTracker\\bin\\Debug\\net6.0\\ShapeTracker.dll\ndotnet watch \ud83d\ude80 Started\n')),(0,a.kt)("p",null,"With console apps, usually the ",(0,a.kt)("inlineCode",{parentName:"p"},"watch : Started")," message will quickly be replaced by the console UI. If you make a small change to the code, .NET will automatically run our program again. Try it out!"),(0,a.kt)("h3",{id:"errors"},"Errors"),(0,a.kt)("p",null,"If you have an error in your project, the output will look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet watch \ud83d\udd25 Hot reload enabled. For a list of supported edits, see https://aka.ms/dotnet/hot-reload. \n  \ud83d\udca1 Press \"Ctrl + R\" to restart.\ndotnet watch \ud83d\udd27 Building...\n  Determining projects to restore...\n  All projects are up-to-date for restore.\nC:\\Users\\staff\\Desktop\\ShapeTracker.Soltuion\\ShapeTracker\\Models\\Triangle.cs(57,14): error CS0103: The name '_instance' does not e\nxist in the current context [C:\\Users\\staff\\Desktop\\ShapeTracker.Soltuion\\ShapeTracker\\ShapeTracker.csproj]\ndotnet watch \u23f3 Waiting for a file to change before restarting dotnet...\n")),(0,a.kt)("p",null,"If you have such an error, you can simply fix it, save the file(s), and .NET will reload your program. Looking at the above terminal output, the error message is \"The name '_instance' does not exist in the current context\" and the location of the error is line 57 of ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle.cs"),". We can fix this error message by updating ",(0,a.kt)("inlineCode",{parentName:"p"},"_instance")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"_instances"),"."),(0,a.kt)("h3",{id:"using-the-watcher-with-dotnet-build"},"Using the Watcher with ",(0,a.kt)("inlineCode",{parentName:"h3"},"dotnet build")),(0,a.kt)("p",null,"We can also use the watcher to run other ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet")," commands, like ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet watch build\n")),(0,a.kt)("p",null,"Which outputs the following error message if we haven't fixed the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"_instance")," yet. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet watch \ud83d\ude80 Started\nMSBuild version 17.3.2+561848881 for .NET\n  Determining projects to restore...\n  All projects are up-to-date for restore.\nC:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker\\Models\\Triangle.cs(57,14): error CS0103: The name '_instance' does not e\nxist in the current context [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker\\ShapeTracker.csproj]\n\nBuild FAILED.\n\nC:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker\\Models\\Triangle.cs(57,14): error CS0103: The name '_instance' does not e \nxist in the current context [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker\\ShapeTracker.csproj]\n    0 Warning(s)\n    1 Error(s)\n\nTime Elapsed 00:00:01.83\ndotnet watch \u274c Exited with error code 1\ndotnet watch \u23f3 Waiting for a file to change before restarting dotnet...\n")),(0,a.kt)("p",null,"Or this output when there are no errors:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet watch build\ndotnet watch \ud83d\ude80 Started\nMSBuild version 17.3.2+561848881 for .NET\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n  ShapeTracker -> C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker\\bin\\Debug\\net6.0\\ShapeTracker.dll\n\nBuild succeeded.\n    0 Warning(s)\n    0 Error(s)\n\nTime Elapsed 00:00:01.77\ndotnet watch \u231a Exited\ndotnet watch \u23f3 Waiting for a file to change before restarting dotnet...\n")),(0,a.kt)("p",null,"This is great, because we can make changes to our code, then refer to the terminal to see the build output. Let's leave ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet watch build")," running and make a change to our code."))}u.isMDXComponent=!0}}]);