"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[18652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return n?i.createElement(h,o(o({ref:t},m),{},{components:n})):i.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:a,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const l={title:"\ud83d\udcd3 3.2.2.3 Deleting Items",day:"tuesday",id:"3-2-2-3-deleting-items",hide_table_of_contents:!0},o=void 0,r={unversionedId:"c-and-net/basic-web-applications/3-2-2-3-deleting-items",id:"version-1.1/c-and-net/basic-web-applications/3-2-2-3-deleting-items",title:"\ud83d\udcd3 3.2.2.3 Deleting Items",description:"In the last lesson we discussed CRUD actions and their corresponding HTTP request methods. So far, our To Do List can create Items with a POST request via our form and read Items with a GET request so users can see the full To Do List.",source:"@site/versioned_docs/version-1.1/3_c-and-net/2_basic-web-applications/BC-3-2-2-3-deleting-items.md",sourceDirName:"3_c-and-net/2_basic-web-applications",slug:"/c-and-net/basic-web-applications/3-2-2-3-deleting-items",permalink:"/v1.1/c-and-net/basic-web-applications/3-2-2-3-deleting-items",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 3.2.2.3 Deleting Items",day:"tuesday",id:"3-2-2-3-deleting-items",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.2.2.2 HTTP CRUD Methods",permalink:"/v1.1/c-and-net/basic-web-applications/3-2-2-2-http-crud-methods"},next:{title:"\ud83d\udcd3 3.2.2.4 Finding Objects with Unique IDs",permalink:"/v1.1/c-and-net/basic-web-applications/3-2-2-4-finding-objects-with-unique-ids"}},s={},p=[{value:"Clearing <code>Item</code> Lists",id:"clearing-item-lists",level:2},{value:"HTML Form",id:"html-form",level:3},{value:"Corresponding POST Route",id:"corresponding-post-route",level:3},{value:"Success Page",id:"success-page",level:3}],m={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the last lesson we discussed CRUD actions and their corresponding HTTP request methods. So far, our To Do List can create ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s with a POST request via our form and read ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s with a GET request so users can see the full To Do List."),(0,a.kt)("p",null,"Let's add functionality to delete ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s. Then we'll walk through updating ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s in later lessons."),(0,a.kt)("h2",{id:"clearing-item-lists"},"Clearing ",(0,a.kt)("inlineCode",{parentName:"h2"},"Item")," Lists"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We'll begin by adding functionality to delete all ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s, as this broader action should be simpler to begin with."),(0,a.kt)("h3",{id:"html-form"},"HTML Form"),(0,a.kt)("p",null,"First, we need a button users can click to invoke this action. We'll add one to the bottom of our ",(0,a.kt)("inlineCode",{parentName:"p"},"Items/Index.cshtml")," view:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Views/Items/Index.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n<form action="/items/delete" method="post">\n  <button type="submit" name="button">Clear All Items</button>\n</form>\n')),(0,a.kt)("p",null,"The entire updated file looks like this:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Views/Items/Index.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>My To-Do List!</title>\n    <link \n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n      rel="stylesheet" \n      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n      crossorigin="anonymous">\n  </head>\n  <body>\n    @using ToDoList.Models;\n\n    <h1>To Do List</h1>\n    @if (Model.Count == 0)\n    {\n      <p>There are no items in the list.</p>\n    }\n    <ul>\n      @foreach (Item item in Model)\n      {\n        <li>@item.Description</li>\n      }\n    </ul>\n\n    <a href="/items/new">Add a new item.</a>\n\n    <form action="/items/delete" method="post">\n      <button type="submit" name="button">Clear All Items</button>\n    </form>\n  </body>\n</html>\n')),(0,a.kt)("p",null,"Notice this button resides in ",(0,a.kt)("inlineCode",{parentName:"p"},"<form>")," tags. It's not a standalone ",(0,a.kt)("inlineCode",{parentName:"p"},"<button>")," element. Only forms can submit and use the POST method required to update the server. Deleting something is still considered a server update because data is changing. A few more things to notice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," attribute is ",(0,a.kt)("inlineCode",{parentName:"p"},'"/items/delete"'),". The route that will run when the button is clicked must have this same path.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"method")," attribute is ",(0,a.kt)("inlineCode",{parentName:"p"},"post"),". This will create a POST request to update the server. The corresponding route path must be defined with ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpPost()"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We also add ",(0,a.kt)("inlineCode",{parentName:"p"},'type="submit"')," to the button. This is always required to successfully send a POST request from a form, even if that form is just a button."))),(0,a.kt)("h3",{id:"corresponding-post-route"},"Corresponding POST Route"),(0,a.kt)("p",null,"Let\u2019s create the route that will handle this form's submission. We'll add the following to ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsController.cs")," below our ",(0,a.kt)("inlineCode",{parentName:"p"},"Create()")," route:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Controllers/ItemsController.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n    [HttpPost("/items/delete")]\n    public ActionResult DeleteAll()\n    {\n      Item.ClearAll();\n      return View();\n    }\n\n...\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Notice the ",(0,a.kt)("inlineCode",{parentName:"p"},'"/items/delete"')," path matches the ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," attribute of the form exactly.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We also use ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpPost()")," to denote this route will handle POST requests, since our form's ",(0,a.kt)("inlineCode",{parentName:"p"},"method")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},'"post"'),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Because the route's path and HTTP method match the form's path and ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," attribute, this route will be invoked when our form is submitted.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Once invoked by a POST request to ",(0,a.kt)("inlineCode",{parentName:"p"},'"/items/delete"')," (which will happen when our new form is submitted), the route calls the static ",(0,a.kt)("inlineCode",{parentName:"p"},"ClearAll()")," method, which we already defined in our ",(0,a.kt)("inlineCode",{parentName:"p"},"Item.cs")," model."))),(0,a.kt)("p",null,"The entire updated controller file looks like this:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Controllers/ItemsController.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\nusing ToDoList.Models;\nusing System.Collections.Generic;\n\nnamespace ToDoList.Controllers\n{\n  public class ItemsController : Controller\n  {\n    [HttpGet("/items")]\n    public ActionResult Index()\n    {\n      List<Item> allItems = Item.GetAll();\n      return View(allItems);\n    }\n\n    [HttpGet("/items/new")]\n    public ActionResult CreateForm()\n    {\n      return View();\n    }\n\n    [HttpPost("/items")]\n    public ActionResult Create(string description)\n    {\n      Item myItem = new Item(description);\n      return RedirectToAction("Index");\n    }\n\n    [HttpPost("/items/delete")]\n    public ActionResult DeleteAll()\n    {\n      Item.ClearAll();\n      return View();\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"success-page"},"Success Page"),(0,a.kt)("p",null,"Because our new ",(0,a.kt)("inlineCode",{parentName:"p"},"DeleteAll()")," route returns ",(0,a.kt)("inlineCode",{parentName:"p"},"View()"),", it will automatically look for a view file matching the route name. The route is named ",(0,a.kt)("inlineCode",{parentName:"p"},"DeleteAll()")," and exists on the ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsController"),", so we'll need a ",(0,a.kt)("inlineCode",{parentName:"p"},"DeleteAll.cshtml")," file in ",(0,a.kt)("inlineCode",{parentName:"p"},"Views/Items"),". Let's create this now:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Views/Items/DeleteAll.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<h1>Your list has been cleared!</h1>\n<p><a href="/items">Back to list.</a></p>\n')),(0,a.kt)("p",null,"This will display a success message confirming ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s were deleted and include a link back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/items")," page. If we wanted, we could also choose to use a redirect to go back to the index or home page as well."))}d.isMDXComponent=!0}}]);