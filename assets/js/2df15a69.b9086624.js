"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[17139],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,u=c["".concat(s,".").concat(h)]||c[h]||m[h]||r;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},28075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"\ud83d\udcd3 3.3.1.9 Showing Item Details with EF Core",day:"monday",id:"3-3-1-9-showing-item-details-with-ef-core",hide_table_of_contents:!0},o=void 0,l={unversionedId:"c-and-net/database-basics/3-3-1-9-showing-item-details-with-ef-core",id:"c-and-net/database-basics/3-3-1-9-showing-item-details-with-ef-core",title:"\ud83d\udcd3 3.3.1.9 Showing Item Details with EF Core",description:"Our To Do List application currently has an option for users to click on an item's details. However, we haven't added that route or its corresponding view yet. Let's do that now.",source:"@site/docs/3_c-and-net/3_database-basics/AX-3-3-1-9-showing-item-details-with-ef-core.md",sourceDirName:"3_c-and-net/3_database-basics",slug:"/c-and-net/database-basics/3-3-1-9-showing-item-details-with-ef-core",permalink:"/v1.2/c-and-net/database-basics/3-3-1-9-showing-item-details-with-ef-core",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.3.1.9 Showing Item Details with EF Core",day:"monday",id:"3-3-1-9-showing-item-details-with-ef-core",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.3.1.8 HTML Helper Methods, Lambda Expressions, and String Interpolation",permalink:"/v1.2/c-and-net/database-basics/3-3-1-8-html-helper-methods-lambda-expressions-and-string-interpolation"},next:{title:"\ud83d\udcd3 3.3.1.10 Further Exploration with Testing",permalink:"/v1.2/c-and-net/database-basics/3-3-1-10-further-exploration-with-testing"}},s={},p=[{value:"Showing an <code>Item</code> Details",id:"showing-an-item-details",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Our To Do List application currently has an option for users to click on an item's details. However, we haven't added that route or its corresponding view yet. Let's do that now."),(0,i.kt)("h2",{id:"showing-an-item-details"},"Showing an ",(0,i.kt)("inlineCode",{parentName:"h2"},"Item")," Details"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We'll start with the controller action, which will include some new code."),(0,i.kt)("div",{class:"filename"},"Controllers/ItemsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public ActionResult Details(int id)\n{\n    Item thisItem = _db.Items.FirstOrDefault(item => item.ItemId == id);\n    return View(thisItem);\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Details")," method takes the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of the entry we want to view as its sole parameter. Remember that this needs to match the property from the anonymous object we created using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionLink()")," method with the code ",(0,i.kt)("inlineCode",{parentName:"p"},"new { id = item.ItemId }"),". Check the previous lesson for details.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We pass in this ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," as an argument to the LINQ method ",(0,i.kt)("inlineCode",{parentName:"p"},"FirstOrDefault()"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This method once again uses a lambda. We can ultimately read this method as:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Start by looking at ",(0,i.kt)("inlineCode",{parentName:"li"},"_db.Items")," (our ",(0,i.kt)("inlineCode",{parentName:"li"},"items")," table)."),(0,i.kt)("li",{parentName:"ul"},"Then find any items where the ",(0,i.kt)("inlineCode",{parentName:"li"},"ItemId")," of an item is equal to the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," we've passed into this method.")))),(0,i.kt)("p",null,"Note that we could do the following and it would still work fine:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"Item thisItem = _db.Items.FirstOrDefault(thing => thing.ItemId == id);\n")),(0,i.kt)("p",null,"However, it makes sense for the name to clearly represent the dataset we are pulling from."),(0,i.kt)("p",null,"While the lambda syntax may still feel confusing, once again we don't need to have an in-depth understanding of lambdas in order to start using LINQ."),(0,i.kt)("p",null,"Now let's create the corresponding view."),(0,i.kt)("div",{class:"filename"},"Views/Items/Details.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@model ToDoList.Models.Item\n\n<h2>Item Details</h2>\n<hr />\n<h3>@Html.DisplayNameFor(model => model.Description): @Html.DisplayFor(model => model.Description)</h3>\n<p>@Html.ActionLink("Back to list", "Index")</p>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We start with a model directive so the view can reference the model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We use two new HTML helper methods: ",(0,i.kt)("inlineCode",{parentName:"p"},"DisplayNameFor()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DisplayFor()"),'. The former displays the property name while the latter displays the value of that property. For an item with a description of "Wash rhino," this will be rendered as ',(0,i.kt)("inlineCode",{parentName:"p"},'Description: "Wash rhino"')," in our HTML.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Finally, we use another ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionLink()")," to render a link that will return the user to the index route."))),(0,i.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,i.kt)("p",null,"Follow the link below to view how a sample version of the To Do List app should look like at this point. Note that this is a link to a specific branch in the repository."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-3-to-do-list-with-ef-core-csharp-net6/tree/2_create_read_and_details_with_html_helpers"},(0,i.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for To Do List with EF Core: 2","_","create","_","read","_","and","_","details","_","with","_","html","_","helpers"))))}m.isMDXComponent=!0}}]);