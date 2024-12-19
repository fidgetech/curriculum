"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[74944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"\ud83d\udcd3 3.2.3.3 Saving Objects Within Other Objects",day:"wednesday",id:"3-2-3-3-saving-objects-within-other-objects",hide_table_of_contents:!0},o=void 0,s={unversionedId:"c-and-net/basic-web-applications/3-2-3-3-saving-objects-within-other-objects",id:"version-1.1/c-and-net/basic-web-applications/3-2-3-3-saving-objects-within-other-objects",title:"\ud83d\udcd3 3.2.3.3 Saving Objects Within Other Objects",description:'In the last lesson, we set up our new Category class with basic functionality like getters, a constructor, unique IDs, and a static list to contain all Categorys. Now we can focus on tying together our Category and Item classes. That way, a Category object with a Name like "School" can hold many different To Do List Items with Descriptions like "Finish section 2 code review," "Email teacher about planned absence," and so on.',source:"@site/versioned_docs/version-1.1/3_c-and-net/2_basic-web-applications/BI-3-2-3-3-saving-objects-within-other-objects.md",sourceDirName:"3_c-and-net/2_basic-web-applications",slug:"/c-and-net/basic-web-applications/3-2-3-3-saving-objects-within-other-objects",permalink:"/v1.1/c-and-net/basic-web-applications/3-2-3-3-saving-objects-within-other-objects",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 3.2.3.3 Saving Objects Within Other Objects",day:"wednesday",id:"3-2-3-3-saving-objects-within-other-objects",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.2.3.2 Objects Within Objects Setup",permalink:"/v1.1/c-and-net/basic-web-applications/3-2-3-2-objects-within-objects-setup"},next:{title:"\ud83d\udcd3 3.2.3.4 Objects Within Objects Interface Part 1",permalink:"/v1.1/c-and-net/basic-web-applications/3-2-3-4-objects-within-objects-interface-part-1"}},l={},c=[{value:"Saving Objects Within Objects",id:"saving-objects-within-objects",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last lesson, we set up our new ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," class with basic functionality like getters, a constructor, unique IDs, and a static list to contain all ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"s. Now we can focus on tying together our ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," classes. That way, a ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," object with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Name"),' like "School" can hold many different To Do List ',(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s with ",(0,i.kt)("inlineCode",{parentName:"p"},"Description"),'s like "Finish section 2 code review," "Email teacher about planned absence," and so on.'),(0,i.kt)("h2",{id:"saving-objects-within-objects"},"Saving Objects Within Objects"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"When we created our ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," class, we included an ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," property. It's a ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," that is empty at first:"),(0,i.kt)("div",{class:"filename"},"ToDoList/Models/Category.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n  public class Category\n  {\n    ...\n    public List<Item> Items { get; set; }\n\n    public Category(string categoryName)\n    {\n      ...\n      Items = new List<Item>{};\n    }\n\n...\n")),(0,i.kt)("p",null,"This is where ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s related to the parent ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," will be stored. Let's add this functionality now. What's the next simplest behavior we can implement? First, let's make sure we can add an ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," object into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," property of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," object. Here's the test:"),(0,i.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/CategoryTests.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [TestMethod]\n  public void AddItem_AssociatesItemWithCategory_ItemList()\n  {\n    //Arrange\n    string description = "Walk the dog.";\n    Item newItem = new Item(description);\n    List<Item> newList = new List<Item> { newItem };\n    string name = "Work";\n    Category newCategory = new Category(name);\n    newCategory.AddItem(newItem);\n\n    //Act\n    List<Item> result = newCategory.Items;\n\n    //Assert\n    CollectionAssert.AreEqual(newList, result);\n  }\n\n...\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," and add it to a ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then we create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," and call the soon-to-be-created ",(0,i.kt)("inlineCode",{parentName:"p"},"AddItem")," method upon it, passing in our sample ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Next, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"newCategory.Items"),", to retrieve the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s saved in our ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Finally, we assert that ",(0,i.kt)("inlineCode",{parentName:"p"},"newCategory.Items")," should return a ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," containing our single ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"."))),(0,i.kt)("p",null,"Now let's create the ",(0,i.kt)("inlineCode",{parentName:"p"},"AddItem()")," method necessary to run and pass this test:"),(0,i.kt)("div",{class:"filename"},"ToDoList/Models/Category.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n  public void AddItem(Item item)\n  {\n    Items.Add(item);\n  }\n\n...\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AddItem()")," will accept an ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," object and then use the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Add()")," method to save that item into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," property of a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"."),(0,i.kt)("p",null,"If we run our tests again, they should all pass. We're successfully saving objects of one type within objects of another type. In the next lesson, we'll integrate this new functionality into the MVC front end user interface of our application."))}m.isMDXComponent=!0}}]);