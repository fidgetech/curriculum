"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[48575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"\ud83d\udcd3 3.6.0.10 Scaffolding API Controllers",day:"weekend",id:"3-6-0-10-scaffolding-api-controllers",hide_table_of_contents:!0},l=void 0,i={unversionedId:"c-and-net/building-an-api/3-6-0-10-scaffolding-api-controllers",id:"c-and-net/building-an-api/3-6-0-10-scaffolding-api-controllers",title:"\ud83d\udcd3 3.6.0.10 Scaffolding API Controllers",description:"In this lesson, we'll learn how to use the aspnet-codegenerator tool to scaffold files within our application. While dotnet new scaffolds entire projects based on templates, the aspnet-codegenerator tool can create files like controllers. This can save us a lot of work!",source:"@site/docs/3_c-and-net/6_building-an-api/AJ-3-6-0-10-scaffolding-api-controllers.md",sourceDirName:"3_c-and-net/6_building-an-api",slug:"/c-and-net/building-an-api/3-6-0-10-scaffolding-api-controllers",permalink:"/v1.2/c-and-net/building-an-api/3-6-0-10-scaffolding-api-controllers",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.6.0.10 Scaffolding API Controllers",day:"weekend",id:"3-6-0-10-scaffolding-api-controllers",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.6.0.09 Adding API Model Validation",permalink:"/v1.2/c-and-net/building-an-api/3-6-0-09-adding-api-model-validation"},next:{title:"\ud83d\udcd3 3.6.0.11 Further Exploration with API's",permalink:"/v1.2/c-and-net/building-an-api/3-6-0-11-further-exploration-with-apis"}},s={},c=[{value:"Scaffolding our Controller",id:"scaffolding-our-controller",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we'll learn how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"aspnet-codegenerator")," tool to scaffold files within our application. While ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet new")," scaffolds entire projects based on templates, the ",(0,r.kt)("inlineCode",{parentName:"p"},"aspnet-codegenerator")," tool can create files like controllers. This can save us a lot of work!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In this section's code review, you should not be using a scaffolding tool to create the boilerplate code for your routes.")," We want to see an understanding of this material and an ability to create it on your own, without the use of this tool.However, past this code review and in personal projects, feel free to use ",(0,r.kt)("inlineCode",{parentName:"p"},"aspnet-codegenerator")," to spin up a project files quickly!"),(0,r.kt)("h2",{id:"scaffolding-our-controller"},"Scaffolding our Controller"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"You've now added full CRUD to your API! Although we want you to be comfortable writing controller routes, in the future, you might find it easier to use a scaffolding tool to create the boilerplate code for your routes. We'll scaffold files using the ",(0,r.kt)("inlineCode",{parentName:"p"},"aspnet-codegenerator")," tool. "),(0,r.kt)("p",null,"First note that you should scaffold a controller after you have created your model and database context, but before you have created your controller. So for our Cretaceous Park API, ",(0,r.kt)("strong",{parentName:"p"},"you should not run the following commands, because the AnimalsController already exists.")," However, if you want to test it out, you could delete your AnimalsController, and run the command to scaffold it again. Otherwise, use the following commands in future projects."),(0,r.kt)("p",null,"First, we'll need to install some packages to our project, required for scaffolding. Run the following command in your project directory. For the Cretaceous Park API, this is the ",(0,r.kt)("inlineCode",{parentName:"p"},"CretaceousApi/")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet add package Microsoft.EntityFrameworkCore.SqlServer -v 6.0.0\n$ dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design -v 6.0.0\n")),(0,r.kt)("p",null,"Then, we'll install the tool ",(0,r.kt)("inlineCode",{parentName:"p"},"aspnet-codegenerator")," to create a controller based on a given model and database context. ",(0,r.kt)("strong",{parentName:"p"},"Note that we'll only ever need to install this tool once:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet tool install -g dotnet-aspnet-codegenerator --version 6\n")),(0,r.kt)("p",null,"Note that we specify ",(0,r.kt)("inlineCode",{parentName:"p"},"--version 6")," so that we install the version compatible with .NET 6."),(0,r.kt)("p",null,"Finally, we can scaffold! Run the following command in your project directory. For the Cretaceous Park API, this is the ",(0,r.kt)("inlineCode",{parentName:"p"},"CretaceousApi/")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ dotnet aspnet-codegenerator controller -name AnimalsController -async -api -m Animal -dc CretaceousApiContext -outDir Controllers\n")),(0,r.kt)("p",null,"This command invokes ",(0,r.kt)("inlineCode",{parentName:"p"},"aspnet-codegenerator")," to do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"controller"),": create a controller"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-name AnimalsController"),": use the name ",(0,r.kt)("inlineCode",{parentName:"li"},"AnimalsController")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-async"),": use asynchronous actions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-api"),": create the controller for an API"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-m Animal"),": use the ",(0,r.kt)("inlineCode",{parentName:"li"},"Animal")," model for the controller actions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-dc CretaceousApiContext"),": create a database context of type ",(0,r.kt)("inlineCode",{parentName:"li"},"CretaceousApiContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-outDir Controllers"),": add the new controller file to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Controllers/")," directory")),(0,r.kt)("p",null,"To learn more about how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"aspnet-codegenerator"),", visit the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/tools/dotnet-aspnet-codegenerator?view=aspnetcore-6.0"},"official documentation"),"."))}u.isMDXComponent=!0}}]);