"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[26450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,h=p["".concat(d,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={title:"\ud83d\udcd3 3.3.2.2 Update with EF Core",day:"tuesday",id:"3-3-2-2-update-with-ef-core",hide_table_of_contents:!0},r=void 0,l={unversionedId:"c-and-net/database-basics/3-3-2-2-update-with-ef-core",id:"c-and-net/database-basics/3-3-2-2-update-with-ef-core",title:"\ud83d\udcd3 3.3.2.2 Update with EF Core",description:"Now that we've had some time to practice adding create and read functionality with Entity, we're ready to add update and delete functionality as well. In this lesson, we'll add update functionality. In the next lesson, we'll add the ability to delete items as well.",source:"@site/docs/3_c-and-net/3_database-basics/BA-3-3-2-2-update-with-ef-core.md",sourceDirName:"3_c-and-net/3_database-basics",slug:"/c-and-net/database-basics/3-3-2-2-update-with-ef-core",permalink:"/v1.2/c-and-net/database-basics/3-3-2-2-update-with-ef-core",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.3.2.2 Update with EF Core",day:"tuesday",id:"3-3-2-2-update-with-ef-core",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\u270f\ufe0f 3.3.2.1 To Do List, Animal Shelter, and Inventory",permalink:"/v1.2/c-and-net/database-basics/3-3-2-1-to-do-list-animal-shelter-and-inventory"},next:{title:"\ud83d\udcd3 3.3.2.3 Delete with EF Core",permalink:"/v1.2/c-and-net/database-basics/3-3-2-3-delete-with-ef-core"}},d={},s=[{value:"Adding Update Functionality",id:"adding-update-functionality",level:2},{value:"Updating the View",id:"updating-the-view",level:3}],c={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now that we've had some time to practice adding create and read functionality with Entity, we're ready to add update and delete functionality as well. In this lesson, we'll add update functionality. In the next lesson, we'll add the ability to delete items as well."),(0,i.kt)("h2",{id:"adding-update-functionality"},"Adding Update Functionality"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We'll start by updating our controller:"),(0,i.kt)("div",{class:"filename"},"ItemsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\npublic ActionResult Edit(int id)\n{\n    Item thisItem = _db.Items.FirstOrDefault(item => item.ItemId == id);\n    return View(thisItem);\n}\n\n[HttpPost]\npublic ActionResult Edit(Item item)\n{\n    _db.Items.Update(item);\n    _db.SaveChanges();\n    return RedirectToAction("Index");\n}\n\n...\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First, we have both ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit")," actions. The ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," action will route to a page with a form for updating an item. The ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," action will actually update the item. Don't forget that we need to include an ",(0,i.kt)("inlineCode",{parentName:"p"},"[HttpPost]")," annotation above the ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," action.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Like our ",(0,i.kt)("inlineCode",{parentName:"p"},"Details")," method, the ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request uses a specific entry as the model for the page. In fact, the code in this action looks exactly the same as the code in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Details")," action. That's because it's doing the same thing: finding a specific item and then passing it to the view."))),(0,i.kt)("h3",{id:"updating-the-view"},"Updating the View"),(0,i.kt)("p",null,"Now we're ready to add a view with a form:"),(0,i.kt)("div",{class:"filename"},"Views/Items/Edit.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@model ToDoList.Models.Item\n\n<h2>Edit</h2>\n\n<h4>Edit this item: @Html.DisplayFor(model => model.Description)</h4>\n\n@using (Html.BeginForm())\n{\n    @Html.HiddenFor(model => model.ItemId)\n\n    @Html.LabelFor(model => model.Description)\n    @Html.EditorFor(model => model.Description)\n\n    <input type="submit" value="Save" />\n}\n<p>@Html.ActionLink("Back to list", "Index")</p>\n\n')),(0,i.kt)("p",null,"This view is very similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create.cshtml")," view we constructed together in the last lesson. However, there is a key new addition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"@Html.HiddenFor(model => model.ItemId)\n")),(0,i.kt)("p",null,"This is because we need to pass the specific item's ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemId")," on to the controller. If we don't, our controller won't know which item to update."),(0,i.kt)("p",null,"Finally, let's add an edit link to ",(0,i.kt)("inlineCode",{parentName:"p"},"Details.cshtml"),". That way, a user can go to a specific item's page and then click on a link to edit that item."),(0,i.kt)("div",{class:"filename"},"Views/Items/Details.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<p>@Html.ActionLink("Edit Item", "Edit", new { id = Model.ItemId })</p>\n')),(0,i.kt)("p",null,"In this case, we need to specify that we are looking for the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemId")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," that is passed into this view."))}m.isMDXComponent=!0}}]);