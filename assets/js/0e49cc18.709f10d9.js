"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[80768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"\ud83d\udcd3 3.2.1.6 Lists and Redirects in a Controller",day:"monday",id:"3-2-1-6-lists-and-redirects-in-a-controller",hide_table_of_contents:!0},i=void 0,l={unversionedId:"c-and-net/basic-web-applications/3-2-1-6-lists-and-redirects-in-a-controller",id:"c-and-net/basic-web-applications/3-2-1-6-lists-and-redirects-in-a-controller",title:"\ud83d\udcd3 3.2.1.6 Lists and Redirects in a Controller",description:"We can display a single item in our To Do List but that's not very helpful in itself. After all, this is a list of things to do, not a single item.",source:"@site/docs/3_c-and-net/2_basic-web-applications/AX-3-2-1-6-lists-and-redirects-in-a-controller.md",sourceDirName:"3_c-and-net/2_basic-web-applications",slug:"/c-and-net/basic-web-applications/3-2-1-6-lists-and-redirects-in-a-controller",permalink:"/v1.2/c-and-net/basic-web-applications/3-2-1-6-lists-and-redirects-in-a-controller",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.2.1.6 Lists and Redirects in a Controller",day:"monday",id:"3-2-1-6-lists-and-redirects-in-a-controller",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.2.1.5 Request-Response Loop and HTTP Methods with ASP.NET Core MVC",permalink:"/v1.2/c-and-net/basic-web-applications/3-2-1-5-request-response-loop-and-http-methods-with-asp-net-core-mvc"},next:{title:"\ud83d\udcd3 3.2.1.7 Loops and Conditionals with Razor",permalink:"/v1.2/c-and-net/basic-web-applications/3-2-1-7-loops-and-conditionals-with-razor"}},s={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We can display a single item in our To Do List but that's not very helpful in itself. After all, this is a ",(0,r.kt)("em",{parentName:"p"},"list")," of things to do, not a single item."),(0,r.kt)("p",null,"In this lesson, we'll update our controller to return a list of to dos. In the process, we'll also cover using redirects to DRY up our code. In the next lesson, we'll update our ",(0,r.kt)("inlineCode",{parentName:"p"},"index.cshtml")," view to display our list."),(0,r.kt)("p",null,"Let's change our controller code to pass in multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s to the view, not just a single ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),". Note that this will not compile until we update our views, in the next lesson:"),(0,r.kt)("div",{class:"filename"},"HomeController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'...\nusing System.Collections.Generic;\n\nnamespace ToDoList.Controllers\n{\n  public class HomeController : Controller\n  {\n\n    [HttpGet("/")]\n    public ActionResult Index()\n    {\n\n      List<Item> allItems = Item.GetAll();\n      return View(allItems);\n    }\n\n    ...\n\n    [HttpPost("/items")]\n    public ActionResult Create(string description)\n    {\n      Item myItem = new Item(description);\n      return RedirectToAction("Index");\n    }\n  }\n}\n')),(0,r.kt)("p",null,"First, we need to update our ",(0,r.kt)("inlineCode",{parentName:"p"},"Index()")," route method so that the route has access to all ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s. We'll use the static ",(0,r.kt)("inlineCode",{parentName:"p"},"GetAll()")," method to store a ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s in the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"allItems"),". We then pass ",(0,r.kt)("inlineCode",{parentName:"p"},"allItems")," to the view."),(0,r.kt)("p",null,"Note that we also need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"using System.Collections.Generic;")," to our file now that we've added a ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," to our controller."),(0,r.kt)("p",null,"We also make an update to our ",(0,r.kt)("inlineCode",{parentName:"p"},"Create()")," route method as well. As we discussed in the last lesson, this route only needs to create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),". It doesn't care about updating a view. While we could add ",(0,r.kt)("inlineCode",{parentName:"p"},"List<Item> allItems = Item.GetAll();")," to our ",(0,r.kt)("inlineCode",{parentName:"p"},"Create()")," method, it wouldn't be very DRY."),(0,r.kt)("p",null,"Instead, we can use a method called ",(0,r.kt)("inlineCode",{parentName:"p"},"RedirectToAction()")," to redirect to another route. ",(0,r.kt)("inlineCode",{parentName:"p"},"RedirectToAction()")," takes a route method as an argument. ",(0,r.kt)("inlineCode",{parentName:"p"},'RedirectToAction("Index");')," tells the server to invoke the ",(0,r.kt)("inlineCode",{parentName:"p"},"Index()")," route after the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create()")," route has been invoked. This means we don't have to repeat the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"Index()"),". We can just tell ",(0,r.kt)("inlineCode",{parentName:"p"},"Create()")," to redirect to ",(0,r.kt)("inlineCode",{parentName:"p"},"Index()")," instead."),(0,r.kt)("p",null,"In the next lesson, we'll update our view to display a ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s with loops and conditionals."))}u.isMDXComponent=!0}}]);