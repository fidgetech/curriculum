"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[57103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,u=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return n?a.createElement(u,l(l({ref:t},m),{},{components:n})):a.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},72891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={title:"\ud83d\udcd3 3.4.0.8 Many-to-Many Delete Functionality",day:"weekend",id:"3-4-0-8-many-to-many-delete-functionality",hide_table_of_contents:!0},l=void 0,r={unversionedId:"c-and-net/many-to-many-relationships/3-4-0-8-many-to-many-delete-functionality",id:"version-1.1/c-and-net/many-to-many-relationships/3-4-0-8-many-to-many-delete-functionality",title:"\ud83d\udcd3 3.4.0.8 Many-to-Many Delete Functionality",description:"In this lesson we'll complete our refactor to include a many-to-many functionality between tags and items by adding delete functionality. We'll add delete functionality for Tags and delete functionality for ItemTags.",source:"@site/versioned_docs/version-1.1/3_c-and-net/4_many-to-many-relationships/AH-3-4-0-8-many-to-many-delete-functionality.md",sourceDirName:"3_c-and-net/4_many-to-many-relationships",slug:"/c-and-net/many-to-many-relationships/3-4-0-8-many-to-many-delete-functionality",permalink:"/v1.1/c-and-net/many-to-many-relationships/3-4-0-8-many-to-many-delete-functionality",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 3.4.0.8 Many-to-Many Delete Functionality",day:"weekend",id:"3-4-0-8-many-to-many-delete-functionality",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.4.0.7 Many-to-Many Update Functionality",permalink:"/v1.1/c-and-net/many-to-many-relationships/3-4-0-7-many-to-many-update-functionality"},next:{title:"\u270f\ufe0f 3.4.1.1 University Registrar, Doctor's Office",permalink:"/v1.1/c-and-net/many-to-many-relationships/3-4-1-1-university-registrar-doctors-office"}},s={},d=[{value:"DELETE: Adding Delete Functionality to <code>Tag</code>s",id:"delete-adding-delete-functionality-to-tags",level:2},{value:"DELETE: Adding Delete Functionality to <code>ItemTag</code>s",id:"delete-adding-delete-functionality-to-itemtags",level:2},{value:"<code>joinId</code> and Route Configuration in <code>Program.cs</code>",id:"joinid-and-route-configuration-in-programcs",level:3},{value:"Updating the <code>ItemsController</code> and <code>Details.cshtml</code> View to Delete Join Entities",id:"updating-the-itemscontroller-and-detailscshtml-view-to-delete-join-entities",level:3},{value:"Repository Reference",id:"repository-reference",level:3}],m={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson we'll complete our refactor to include a many-to-many functionality between tags and items by adding delete functionality. We'll add delete functionality for ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag"),"s and delete functionality for ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag"),"s."),(0,i.kt)("h2",{id:"delete-adding-delete-functionality-to-tags"},"DELETE: Adding Delete Functionality to ",(0,i.kt)("inlineCode",{parentName:"h2"},"Tag"),"s"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We'll start by creating ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete()")," GET and POST actions in our ",(0,i.kt)("inlineCode",{parentName:"p"},"TagsController"),". Here's the new code that we'll add:"),(0,i.kt)("div",{class:"filename"},"Controllers/TagsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n    public ActionResult Delete(int id)\n    {\n      Tag thisTag = _db.Tags.FirstOrDefault(tags => tags.TagId == id);\n      return View(thisTag);\n    }\n\n    [HttpPost, ActionName("Delete")]\n    public ActionResult DeleteConfirmed(int id)\n    {\n      Tag thisTag = _db.Tags.FirstOrDefault(tags => tags.TagId == id);\n      _db.Tags.Remove(thisTag);\n      _db.SaveChanges();\n      return RedirectToAction("Index");\n    }\n...\n')),(0,i.kt)("p",null,"Note that when we delete a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag"),", all join entities that reference that tag's ",(0,i.kt)("inlineCode",{parentName:"p"},"TagId")," will also automatically be deleted. This is configured through ",(0,i.kt)("strong",{parentName:"p"},"foreign key constraints"),", which configures how objects in relationships should be deleted or updated when one object in the relationship is deleted or updated. For example, in our one-to-many relationship between categories and items, an item always belongs to a single category, and a category can have many items. If a user deletes a category that has five items in it, we can configure through foreign key constraints how those five items should be treated: should they remain in the database? Should they all be deleted?"),(0,i.kt)("p",null,"The default behavior in our application for one-to-many and many-to-many relationships is that when one object is deleted, related objects should also be deleted:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the one-to-many relationship between categories and items, when a category is deleted all associated items will also be deleted. That's because each ",(0,i.kt)("inlineCode",{parentName:"li"},"Item")," object has a ",(0,i.kt)("inlineCode",{parentName:"li"},"CategoryId")," property that becomes a foreign key in our database tables and links each ",(0,i.kt)("inlineCode",{parentName:"li"},"Item")," to a specific ",(0,i.kt)("inlineCode",{parentName:"li"},"Category"),"."),(0,i.kt)("li",{parentName:"ul"},"In the many-to-many relationship between items and tags, when an item is deleted all join entities in the ",(0,i.kt)("inlineCode",{parentName:"li"},"itemtags")," table that reference that item will also be deleted. That's because ",(0,i.kt)("inlineCode",{parentName:"li"},"ItemId")," is a foreign key in the ",(0,i.kt)("inlineCode",{parentName:"li"},"itemtags")," table, connecting each ",(0,i.kt)("inlineCode",{parentName:"li"},"ItemTag")," object to a specific ",(0,i.kt)("inlineCode",{parentName:"li"},"Item")," object. Similarly, when a tag is deleted all join entities in the ",(0,i.kt)("inlineCode",{parentName:"li"},"itemtags")," table that reference that tag will also be deleted. That's because ",(0,i.kt)("inlineCode",{parentName:"li"},"TagId")," is a foreign key in the ",(0,i.kt)("inlineCode",{parentName:"li"},"itemtags")," table, connecting each ",(0,i.kt)("inlineCode",{parentName:"li"},"ItemTag")," object to a specific ",(0,i.kt)("inlineCode",{parentName:"li"},"Tag")," object.")),(0,i.kt)("p",null,"The automatic deletion of associated objects through foreign keys has a specific name: ",(0,i.kt)("strong",{parentName:"p"},"cascade delete"),". This is the default behavior for the foreign keys we create because they are all non-nullable, which means they can't have a ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," value. This means that when a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," entry in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tags")," database table is removed, then all of the entries in all other tables (right now just the ",(0,i.kt)("inlineCode",{parentName:"p"},"itemtags")," table) that use that ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," as a foreign key (via ",(0,i.kt)("inlineCode",{parentName:"p"},"TagId"),") will also be removed, because the foreign key cannot be ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("p",null,"We could configure our foreign keys constraints to not delete associated objects, but we don't have a reason to change this behavior right now. Also, the specifics of how to do that is out of the scope of this lesson. To learn more about configuring cascade delete with EF Core, start by reading ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/modeling/relationships?tabs=fluent-api%2Cfluent-api-simple-key%2Csimple-key"},"the article on creating and configuring relationships with EF Core"),". Some of the article's content will be a review, but other content will be new. Then, read about ",(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html"},"foreign key constraints on the MySQL documentation"),"."),(0,i.kt)("p",null,"Next, let's create our view that confirms that we are sure that we want to delete the tag. Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Views/Tags/")," subdirectory, create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete.cshtml"),", and add the following contents:"),(0,i.kt)("div",{class:"filename"},"Views/Tags/Delete.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@model ToDoList.Models.Tag\n\n<h2>Are you sure you want to delete this?</h2>\n\n@Html.DisplayNameFor(model => model.Title): @Html.DisplayFor(model => model.Title)\n@using (Html.BeginForm())\n{\n    <input type="submit" value="Delete" />\n}\n@Html.ActionLink("Back to List", "Index")\n')),(0,i.kt)("p",null,"As always, let's finish up by adding a link to our new ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete")," route to our tag's ",(0,i.kt)("inlineCode",{parentName:"p"},"Details.cshtml"),":"),(0,i.kt)("div",{class:"filename"},"Views/Tags/Details.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'...\n<p>@Html.ActionLink("Delete Tag", "Delete", new { id = Model.TagId })</p>\n')),(0,i.kt)("h2",{id:"delete-adding-delete-functionality-to-itemtags"},"DELETE: Adding Delete Functionality to ",(0,i.kt)("inlineCode",{parentName:"h2"},"ItemTag"),"s"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Next, we'll add the ability to delete join relationships. This time we won't create a new view for this, but instead add a delete button directly below each join entity in the details view in both ",(0,i.kt)("inlineCode",{parentName:"p"},"Views/Items/Details.cshtml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Views/Tags/Details.cshtml"),"."),(0,i.kt)("p",null,"First, let's check out the new button we'll be adding to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Views/Tags/Details.cshtml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'@using (Html.BeginForm("DeleteJoin", "Tags"))\n{\n  @Html.Hidden("joinId", @join.ItemTagId)\n  <input type="submit" value="Delete"/>\n}\n')),(0,i.kt)("p",null,"Notably, the button is wrapped in a form that contains a hidden ",(0,i.kt)("inlineCode",{parentName:"p"},"joinId")," value for the join entity. That's because in order to change something in our database, we need to make a request via a form. When the user submits this form, it will go to a ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteJoin")," action in the ",(0,i.kt)("inlineCode",{parentName:"p"},"TagsController.cs")," which will handle deleting the join entity in our ",(0,i.kt)("inlineCode",{parentName:"p"},"itemtags")," database table using the ",(0,i.kt)("inlineCode",{parentName:"p"},"joinId")," variable."),(0,i.kt)("p",null,"Also notice that we pass in two arguments to our ",(0,i.kt)("inlineCode",{parentName:"p"},"BeginForm()"),' method. The first argument is the route method that we\'d like to invoke and the second argument is the controller (note that .NET appends "Controller" to whatever string you pass in). Previously we did not include these arguments to ',(0,i.kt)("inlineCode",{parentName:"p"},"BeginForm()"),". That's because we relied on the default routing that the ",(0,i.kt)("inlineCode",{parentName:"p"},"BeginForm()")," HTML helper provides, which is to route to the controller action that matches the current URL. In the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"Tags/Details"),", that would be the ",(0,i.kt)("inlineCode",{parentName:"p"},"Details()")," action in the ",(0,i.kt)("inlineCode",{parentName:"p"},"TagsController"),". However, we want to route to the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteJoin()")," action, which is why we specify this explicitly in ",(0,i.kt)("inlineCode",{parentName:"p"},'@using (Html.BeginForm("DeleteJoin", "Tags"))'),"."),(0,i.kt)("p",null,"Next, let's see how we'll place this form within ",(0,i.kt)("inlineCode",{parentName:"p"},"View/Tags/Details.cshtml"),". Here's what our code should look like now: "),(0,i.kt)("div",{class:"filename"},"Views/Tags/Details.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@using ToDoList.Models\n@model ToDoList.Models.Tag\n\n<h2>Tag Details</h2>\n<hr />\n<h3>@Html.DisplayNameFor(model => model.Title): @Html.DisplayFor(model => model.Title)</h3>\n\n@if(@Model.JoinEntities.Count == 0)\n{\n  <p>This tag does not belong to any items</p>\n}\nelse\n{\n  <h4>Items the tag belongs to:</h4>\n  <ul>\n  @foreach(ItemTag join in Model.JoinEntities)\n  {\n    <li>@join.Item.Description</li>\n    @using (Html.BeginForm("DeleteJoin", "Tags"))\n    {\n      @Html.Hidden("joinId", @join.ItemTagId)\n      <input type="submit" value="Delete"/>\n    }\n  }\n  </ul>\n}\n\n<p>@Html.ActionLink("Back to list", "Index")</p>\n<p>@Html.ActionLink("Add an Item", "AddItem", new { id = Model.TagId })</p>\n<p>@Html.ActionLink("Edit Tag", "Edit", new { id = Model.TagId })</p>\n<p>@Html.ActionLink("Delete Tag", "Delete", new { id = Model.TagId })</p>\n')),(0,i.kt)("p",null,"Notice that we've added the new form/button below each join entity. That means there will be a separate button created for each join entity listed on the tag's details page, each with a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"joinId")," value."),(0,i.kt)("p",null,"Next, let's create the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteJoin()")," action in the ",(0,i.kt)("inlineCode",{parentName:"p"},"TagsController.cs"),". Here's the new code we'll add:"),(0,i.kt)("div",{class:"filename"},"Controllers/TagsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n    [HttpPost]\n    public ActionResult DeleteJoin(int joinId)\n    {\n      ItemTag joinEntry = _db.ItemTags.FirstOrDefault(entry => entry.ItemTagId == joinId);\n      _db.ItemTags.Remove(joinEntry);\n      _db.SaveChanges();\n      return RedirectToAction("Index");\n    }\n\n...\n')),(0,i.kt)("p",null,"The code to remove a database entry should look familiar, with the only difference being that we're going into the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTags")," database table. Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteJoin()")," action will find the entry in the join table by using the join entry's ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTagId"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTagId")," is being passed in through the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"joinId")," in our action's parameter and came from the ",(0,i.kt)("inlineCode",{parentName:"p"},"BeginForm()")," HTML helper method in our details view."),(0,i.kt)("p",null,"Note that we've called our action ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteJoin()")," because it handles deleting an ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," join relationship. However we could name this route something more specific if we prefer, like ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteItemTagJoin"),", or if we happen to have multiple many-to-many relationships."),(0,i.kt)("h3",{id:"joinid-and-route-configuration-in-programcs"},(0,i.kt)("inlineCode",{parentName:"h3"},"joinId")," and Route Configuration in ",(0,i.kt)("inlineCode",{parentName:"h3"},"Program.cs")),(0,i.kt)("p",null,"We use the name ",(0,i.kt)("inlineCode",{parentName:"p"},"joinId")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteJoin()")," route instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," because .NET automatically utilizes the value in the URL query if we name the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),". For example, if we named the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"joinId")," and the details URL was something like ",(0,i.kt)("inlineCode",{parentName:"p"},"/Items/Details/6"),", then the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," would be 6, which is the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemId")," and not the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTagId")," that we wanted from our ",(0,i.kt)("inlineCode",{parentName:"p"},"Hidden()")," method."),(0,i.kt)("p",null,"The reason .NET uses this convention is due to our configuration in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," file. Take a look at the following code in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," file:"),(0,i.kt)("div",{class:"filename"},"ToDoList/Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n      app.MapControllerRoute(\n          name: "default",\n          pattern: "{controller=Home}/{action=Index}/{id?}"\n        );\n...\n')),(0,i.kt)("p",null,"The template option tells .NET how to treat routes. This configuration, known as ",(0,i.kt)("strong",{parentName:"p"},"conventional routing"),", matches a path like ",(0,i.kt)("inlineCode",{parentName:"p"},"/Items/Details/6")," to its specific controller action by looking for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Details")," action route in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," controller. Then it binds the value of 6 to the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," variable. We won't change routes in this class, but be aware that .NET routing conventions can be configured. If you're interested in learning more, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/routing?view=aspnetcore-6.0"},"documentation on the subject.")),(0,i.kt)("h3",{id:"updating-the-itemscontroller-and-detailscshtml-view-to-delete-join-entities"},"Updating the ",(0,i.kt)("inlineCode",{parentName:"h3"},"ItemsController")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"Details.cshtml")," View to Delete Join Entities"),(0,i.kt)("p",null,"Next, we'll add the same delete button and controller action to our items. The process will be the exact same as with tags, except different naming to reflect that we're in the items controller and views."),(0,i.kt)("p",null,"Let's start with the controller action this time. Within ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemsController.cs"),", add the following new route:"),(0,i.kt)("div",{class:"filename"},"Controllers/ItemsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n    [HttpPost]\n    public ActionResult DeleteJoin(int joinId)\n    {\n      ItemTag joinEntry = _db.ItemTags.FirstOrDefault(entry => entry.ItemTagId == joinId);\n      _db.ItemTags.Remove(joinEntry);\n      _db.SaveChanges();\n      return RedirectToAction("Index");\n    }\n\n...\n')),(0,i.kt)("p",null,"Next, let's update the ",(0,i.kt)("inlineCode",{parentName:"p"},"Views/Items/Details.cshtml")," to include a new form and button for each join entity listed for the item:"),(0,i.kt)("div",{class:"filename"},"Views/Items/Details.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@using ToDoList.Models\n@model ToDoList.Models.Item\n\n<h2>Item Details</h2>\n<hr />\n<h3>@Html.DisplayNameFor(model => model.Description): @Html.DisplayFor(model => model.Description)</h3>  \n<h3>@Html.DisplayNameFor(model => model.Category): @Html.DisplayFor(model => model.Category.Name)</h3>\n\n@if(@Model.JoinEntities.Count == 0)\n{\n  <p>This item does not have any tags yet!</p>\n}\nelse\n{\n  <h4>This item has the following tags:</h4>\n  <ul>\n    @foreach(ItemTag join in Model.JoinEntities)\n    {\n      <li>Tag: @join.Tag.Title</li>\n      @using (Html.BeginForm("DeleteJoin", "Items"))\n      {\n        @Html.Hidden("joinId", @join.ItemTagId)\n        <input type="submit" value="Delete"/>\n      }\n    }\n  </ul>\n}\n\n<p>@Html.ActionLink("Back to list", "Index")</p>\n<p>@Html.ActionLink("Edit Item or Category", "Edit", new { id = Model.ItemId })</p>\n<p>@Html.ActionLink("Add a Tag", "AddTag", new { id = Model.ItemId })</p>\n<p>@Html.ActionLink("Delete Item", "Delete", new { id = Model.ItemId })</p>\n')),(0,i.kt)("p",null,"And with that, we've completed CRUD for tags and CRD for our ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," many-to-many join entity. Start your To Do List's server and check out the completed functionality in the browser!"),(0,i.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,i.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-4-to-do-list-with-many-to-many-csharp-net6/tree/4_m2m_update_and_delete"},(0,i.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  GitHub Repo for To Do List with EF Core Migrations and a Many-to-Many Relationship: 4","_","m2m","_","update","_","and","_","delete"))))}c.isMDXComponent=!0}}]);