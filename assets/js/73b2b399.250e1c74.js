"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[78830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,k=d["".concat(o,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"\ud83d\udcd3 3.0.0.15 Lists",day:"weekend",id:"3-0-0-15-lists",hide_table_of_contents:!0},s=void 0,l={unversionedId:"c-and-net/lessons-6-18-data-types-and-variables/3-0-0-15-lists",id:"c-and-net/lessons-6-18-data-types-and-variables/3-0-0-15-lists",title:"\ud83d\udcd3 3.0.0.15 Lists",description:"If we want to create a collection where we can add or remove items, we need to use a list. For example, we might want to create a groceryList which could have any number of items in it. A  list is a collection, usually of a single data type (like string or int). Unlike an array, a list can dynamically change in length.",source:"@site/docs/3_c-and-net/0_lessons-6-18-data-types-and-variables/AJ-3-0-0-15-lists.md",sourceDirName:"3_c-and-net/0_lessons-6-18-data-types-and-variables",slug:"/c-and-net/lessons-6-18-data-types-and-variables/3-0-0-15-lists",permalink:"/c-and-net/lessons-6-18-data-types-and-variables/3-0-0-15-lists",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.0.0.15 Lists",day:"weekend",id:"3-0-0-15-lists",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.0.0.14 Arrays",permalink:"/c-and-net/lessons-6-18-data-types-and-variables/3-0-0-14-arrays"},next:{title:"\ud83d\udcd3 3.0.0.16 Dictionaries",permalink:"/c-and-net/lessons-6-18-data-types-and-variables/3-0-0-16-dictionaries"}},o={},p=[{value:"Lists",id:"lists",level:2},{value:"Creating Lists",id:"creating-lists",level:3},{value:"Adding Content to <code>List</code>s",id:"adding-content-to-lists",level:3},{value:"Accessing Content in <code>List</code>s",id:"accessing-content-in-lists",level:3},{value:"Removing Content from <code>List</code>s",id:"removing-content-from-lists",level:3},{value:"The <code>List&lt;T&gt;</code> Class",id:"the-listt-class",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If we want to create a collection where we can add or remove items, we need to use a list. For example, we might want to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"groceryList")," which could have any number of items in it. A  ",(0,i.kt)("strong",{parentName:"p"},"list")," is a collection, usually of a single data type (like ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),"). Unlike an array, a list ",(0,i.kt)("em",{parentName:"p"},"can")," dynamically change in length."),(0,i.kt)("h2",{id:"lists"},"Lists"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"creating-lists"},"Creating Lists"),(0,i.kt)("p",null,"Let\u2019s open up the REPL and create a new list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"> List<string> groceryList = new List<string> {};\n")),(0,i.kt)("p",null,"There's several steps to creating a C# list. From left to right:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Declare a ",(0,i.kt)("inlineCode",{parentName:"strong"},"List")),". We use the keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," object. Notice this is capitalized, unlike data types like ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Declare the data type the List will contain.")," It's best practice to declare the data type in angle brackets after ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," as we do with ",(0,i.kt)("inlineCode",{parentName:"p"},"List<string>")," in the example above.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Give it a variable name"),". In the example above, we gave our ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," the name ",(0,i.kt)("inlineCode",{parentName:"p"},"groceryList"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create a new instance of ",(0,i.kt)("inlineCode",{parentName:"strong"},"List")," using its constructor"),". Finally, we create our ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," using its constructor with the ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," keyword: ",(0,i.kt)("inlineCode",{parentName:"p"},"new List<string>"),". The example above states ",(0,i.kt)("inlineCode",{parentName:"p"},"groceryList")," will be a new ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," containing ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"s.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Add data"),". Note that we use empty curly brackets at the end of the constructor to initialize an empty list without any data. If we try to run this without those curly brackets, we'll see: ",(0,i.kt)("inlineCode",{parentName:"p"},"error CS1526: A new expression requires an argument list or (), [], or {} after type"),". "))),(0,i.kt)("p",null,"Note that there are several ways to initialize lists, and you might see them used interchangeably. We could use curly brackets with starting values inside like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'List<string> groceryList2 = new List<string> {"eggs", "milk"};\n')),(0,i.kt)("p",null,"Or, you might see parens used ",(0,i.kt)("inlineCode",{parentName:"p"},"()")," instead of curly brackets ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," to initialize an empty list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"List<string> groceryList3 = new List<string> ();\n")),(0,i.kt)("p",null,"And there's still a few other ways to initialize a list. ",(0,i.kt)("a",{parentName:"p",href:"https://www.dotnetperls.com/initialize-list"},"Dot Net Perls has helpful documentation")," on this topic with some more examples."),(0,i.kt)("h3",{id:"adding-content-to-lists"},"Adding Content to ",(0,i.kt)("inlineCode",{parentName:"h3"},"List"),"s"),(0,i.kt)("p",null,"Once we've created a ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),", we can call the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add()")," method to add items to the ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'> List<string> groceryList = new List<string> {};\n> groceryList\nList<string>(0) { }\n> groceryList.Add("spaghetti");\n> groceryList.Add("tomatoes");\n> groceryList.Add("basil");\n> groceryList.Add("meatballs");\n> groceryList\nList<string>(4) { "spaghetti", "tomatoes", "basil", "meatballs" }\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the code above, we create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"s.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then we call ",(0,i.kt)("inlineCode",{parentName:"p"},"Add()")," four times to add four separate strings: ",(0,i.kt)("inlineCode",{parentName:"p"},'"spaghetti"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"tomatoes"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"basil"'),", and ",(0,i.kt)("inlineCode",{parentName:"p"},'"meatballs"'),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We call ",(0,i.kt)("inlineCode",{parentName:"p"},"groceryList")," to see its included items before and after we're done adding items."))),(0,i.kt)("h3",{id:"accessing-content-in-lists"},"Accessing Content in ",(0,i.kt)("inlineCode",{parentName:"h3"},"List"),"s"),(0,i.kt)("p",null,"Items in a ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," have a unique index just like with arrays. We can access an item at a specific index using square brackets:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'> groceryList[1]\n"tomatoes"\n> groceryList[3]\n"meatballs"\n')),(0,i.kt)("p",null,"We can also redefine/overwrite items at specific indexes using similar notation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'> groceryList[1] = "CANDY!";\n> groceryList\n{ "spaghetti", "CANDY!", "basil", "meatballs" }\n')),(0,i.kt)("h3",{id:"removing-content-from-lists"},"Removing Content from ",(0,i.kt)("inlineCode",{parentName:"h3"},"List"),"s"),(0,i.kt)("p",null,"If we check our pantry and realize we already have basil, we can remove it from our grocery list. To remove an item from a ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),", we'll use the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"Remove()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'> groceryList.Remove("basil");\n> groceryList\n{ "spaghetti", "CANDY!", "meatballs" }\n')),(0,i.kt)("p",null,"When we call ",(0,i.kt)("inlineCode",{parentName:"p"},"Remove()")," on an item in a ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),", C# will return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the item is found and removed. If the argument is not present in a ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),", C# will return ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h3",{id:"the-listt-class"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"List<T>")," Class"),(0,i.kt)("p",null,"We can learn more about lists by reviewing the information in ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=net-6.0"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"List<T>")," class"),". There are many helpful methods and properties! For example, check out this instance method called ",(0,i.kt)("inlineCode",{parentName:"p"},"Insert()")," that lets us insert a new element at a specified index:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'> List<string> groceryList2 = new List<string> { "spaghetti", "tomatoes", "basil", "meatballs" };\n> groceryList2.Insert(0, "flowers")\n1\n')))}m.isMDXComponent=!0}}]);