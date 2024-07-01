"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[58244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,y=s["".concat(d,".").concat(m)]||s[m]||u[m]||o;return n?a.createElement(y,r(r({ref:t},c),{},{components:n})):a.createElement(y,r({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"\ud83d\udcd3 3.4.0.7 Many-to-Many Update Functionality",day:"weekend",id:"3-4-0-7-many-to-many-update-functionality",hide_table_of_contents:!0},r=void 0,l={unversionedId:"c-and-net/many-to-many-relationships/3-4-0-7-many-to-many-update-functionality",id:"version-1.1/c-and-net/many-to-many-relationships/3-4-0-7-many-to-many-update-functionality",title:"\ud83d\udcd3 3.4.0.7 Many-to-Many Update Functionality",description:"We've added create and read functionality for our Tag entity and ItemTag join entity. Now we're ready to move onto adding update and delete functionality.",source:"@site/versioned_docs/version-1.1/3_c-and-net/4_many-to-many-relationships/AG-3-4-0-7-many-to-many-update-functionality.md",sourceDirName:"3_c-and-net/4_many-to-many-relationships",slug:"/c-and-net/many-to-many-relationships/3-4-0-7-many-to-many-update-functionality",permalink:"/v1.1/c-and-net/many-to-many-relationships/3-4-0-7-many-to-many-update-functionality",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 3.4.0.7 Many-to-Many Update Functionality",day:"weekend",id:"3-4-0-7-many-to-many-update-functionality",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.4.0.6 Many-to-Many Create Functionality",permalink:"/v1.1/c-and-net/many-to-many-relationships/3-4-0-6-many-to-many-create-functionality"},next:{title:"\ud83d\udcd3 3.4.0.8 Many-to-Many Delete Functionality",permalink:"/v1.1/c-and-net/many-to-many-relationships/3-4-0-8-many-to-many-delete-functionality"}},d={},p=[{value:"UPDATE: Adding Update Functionality to <code>Tag</code>s",id:"update-adding-update-functionality-to-tags",level:2}],c={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We've added create and read functionality for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," entity and ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," join entity. Now we're ready to move onto adding update and delete functionality. "),(0,i.kt)("p",null,"We won't add full CRUD for the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," join entity, just CRD functionality. Instead of allowing users to update join relationships, we'll simply have them create or delete relationships. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," entity on the other hand will have full CRUD functionality. So in this lesson we'll update our ",(0,i.kt)("inlineCode",{parentName:"p"},"TagsController")," and views to have update functionality."),(0,i.kt)("h2",{id:"update-adding-update-functionality-to-tags"},"UPDATE: Adding Update Functionality to ",(0,i.kt)("inlineCode",{parentName:"h2"},"Tag"),"s"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's start by creating ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit()")," GET and POST actions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"TagsController.cs"),"."),(0,i.kt)("p",null,"Here's the new code we'll add:"),(0,i.kt)("div",{class:"filename"},"Controllers/TagsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n    public ActionResult Edit(int id)\n    {\n      Tag thisTag = _db.Tags.FirstOrDefault(tags => tags.TagId == id);\n      return View(thisTag);\n    }\n\n    [HttpPost]\n    public ActionResult Edit(Tag tag)\n    {\n      _db.Tags.Update(tag);\n      _db.SaveChanges();\n      return RedirectToAction("Index");\n    }\n\n...\n')),(0,i.kt)("p",null,"The above code is the exact same as the code for update functionality in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoriesController"),": we pass the specific tag that we want to update to the view in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit()")," GET action, and then we update our database with the new ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit()")," POST action. When we're done, we redirect to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Index()")," action."),(0,i.kt)("p",null,"Next, let's create a view for our edit functionality. Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Views/Tags/")," subdirectory, create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit.cshtml")," and add the following code:"),(0,i.kt)("div",{class:"filename"},"Views/Tags/Edit.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@model ToDoList.Models.Tag\n\n<h2>Edit</h2>\n\n<h4>Edit this tag: @Html.DisplayFor(model => model.Title)</h4>\n\n@using (Html.BeginForm())\n{\n    @Html.HiddenFor(model => model.TagId)\n\n    @Html.LabelFor(model => model.Title)\n    @Html.EditorFor(model => model.Title)\n\n    <input type="submit" value="Save" />\n}\n\n<p>@Html.ActionLink("Back to list", "Index")</p>\n')),(0,i.kt)("p",null,"Finally, let's finish up by adding a link to our new ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit")," route to our tag's ",(0,i.kt)("inlineCode",{parentName:"p"},"Details.cshtml"),":"),(0,i.kt)("div",{class:"filename"},"Views/Tags/Details.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n<p>@Html.ActionLink("Edit Tag", "Edit", new { id = Model.TagId })</p>\n')),(0,i.kt)("p",null,"Now, if we run our application we should be able to edit tags. Up next, we'll add delete functionality for ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag"),"s and ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," join entities."))}u.isMDXComponent=!0}}]);