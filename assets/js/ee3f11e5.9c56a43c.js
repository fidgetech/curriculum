"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[83171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"\ud83d\udcd3 3.2.0.11 Custom URL Paths",day:"weekend",id:"3-2-0-11-custom-url-paths",hide_table_of_contents:!0},i=void 0,l={unversionedId:"c-and-net/basic-web-applications/3-2-0-11-custom-url-paths",id:"c-and-net/basic-web-applications/3-2-0-11-custom-url-paths",title:"\ud83d\udcd3 3.2.0.11 Custom URL Paths",description:"In the last lesson, we learned how we can configure routes like this one5000/home/goodbye.",source:"@site/docs/3_c-and-net/2_basic-web-applications/AK-3-2-0-11-custom-url-paths.md",sourceDirName:"3_c-and-net/2_basic-web-applications",slug:"/c-and-net/basic-web-applications/3-2-0-11-custom-url-paths",permalink:"/v1.2/c-and-net/basic-web-applications/3-2-0-11-custom-url-paths",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.2.0.11 Custom URL Paths",day:"weekend",id:"3-2-0-11-custom-url-paths",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.2.0.10 Introduction to Controllers, Routes and URLs",permalink:"/v1.2/c-and-net/basic-web-applications/3-2-0-10-introduction-to-controllers-routes-and-urls"},next:{title:"\ud83d\udcd3 3.2.0.12 Creating and Using Views",permalink:"/v1.2/c-and-net/basic-web-applications/3-2-0-12-creating-and-using-views"}},s={},c=[{value:"Custom URLs with Route Decorators",id:"custom-urls-with-route-decorators",level:2},{value:"Root Path",id:"root-path",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the last lesson, we learned how we can configure routes like this one: ",(0,r.kt)("em",{parentName:"p"},"localhost:5000/home/goodbye"),"."),(0,r.kt)("p",null,"However, this URL isn't very user-friendly. Users shouldn't have to type in the name of a controller. Thankfully, we can use a ",(0,r.kt)("strong",{parentName:"p"},"route decorator")," to easily declare custom URL paths for each route."),(0,r.kt)("h2",{id:"custom-urls-with-route-decorators"},"Custom URLs with Route Decorators"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's revisit our ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeController"),". With a single line of code, we can override which URL path matches which route."),(0,r.kt)("div",{class:"filename"},"FriendLetter/Controllers/HomeController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\n\nnamespace FriendLetter.Controllers\n{\n  public class HomeController : Controller\n  {\n\n    [Route("/hello")]\n    public string Hello() { return "Hello friend!"; }\n\n    [Route("/goodbye")]\n    public string Goodbye() { return "Goodbye friend."; }\n\n    [Route("/")]\n    public string Letter() { return "Our virtual postcard will go here soon!"; }\n\n  }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"route decorator")," ",(0,r.kt)("inlineCode",{parentName:"p"},'[Route("/hello")]')," provides additional information to a route we define. In our case, the decorator is overriding the default URL path that corresponds to each of the two routes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Instead of needing to visit ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/hello")," to activate our ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello()")," route, we now only have to visit ",(0,r.kt)("inlineCode",{parentName:"p"},"/hello"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Similarly, instead of visiting ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/goodbye")," to invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"Goodbye()"),", the URL ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:5000/goodbye")," will now invoke this route."))),(0,r.kt)("h3",{id:"root-path"},"Root Path"),(0,r.kt)("p",null,"We also added a third new route for our virtual postcard. This will route to ",(0,r.kt)("inlineCode",{parentName:"p"},'"/"'),". In other words, we don't need to append a path at all. If we navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:5000"),", this route will be activated. This is called a ",(0,r.kt)("strong",{parentName:"p"},"root path")," and it's the home page for our site. All sites should have a home page, which means all your projects should have a root route."))}d.isMDXComponent=!0}}]);