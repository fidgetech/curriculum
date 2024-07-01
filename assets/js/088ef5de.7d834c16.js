"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[97982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},32545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"\ud83d\udcd3 3.5.0.2 Async and Await",day:"weekend",id:"3-5-0-2-async-and-await",hide_table_of_contents:!0},r=void 0,s={unversionedId:"c-and-net/authentication-with-identity/3-5-0-2-async-and-await",id:"version-1.1/c-and-net/authentication-with-identity/3-5-0-2-async-and-await",title:"\ud83d\udcd3 3.5.0.2 Async and Await",description:"During Intermediate JavaScript, we learned how to write asynchronous code and manage asynchronicity while performing complex actions like API calls. In this lesson, we'll discuss how C# handles asynchronous code.",source:"@site/versioned_docs/version-1.1/3_c-and-net/5_authentication-with-identity/AB-3-5-0-2-async-and-await.md",sourceDirName:"3_c-and-net/5_authentication-with-identity",slug:"/c-and-net/authentication-with-identity/3-5-0-2-async-and-await",permalink:"/v1.1/c-and-net/authentication-with-identity/3-5-0-2-async-and-await",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 3.5.0.2 Async and Await",day:"weekend",id:"3-5-0-2-async-and-await",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.5.0.1 Authentication with Identity Objectives",permalink:"/v1.1/c-and-net/authentication-with-identity/3-5-0-1-authentication-with-identity-objectives"},next:{title:"\ud83d\udcd3 3.5.0.3 Introduction to Authentication, Authorization, and Identity",permalink:"/v1.1/c-and-net/authentication-with-identity/3-5-0-3-introduction-to-authentication-authorization-and-identity"}},l={},p=[{value:"Synchronous Operations",id:"synchronous-operations",level:2},{value:"Asynchronous Operations",id:"asynchronous-operations",level:2},{value:"Rules and Conventions",id:"rules-and-conventions",level:3},{value:"Namespace",id:"namespace",level:3},{value:"Additional Resources",id:"additional-resources",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"During Intermediate JavaScript, we learned how to write asynchronous code and manage asynchronicity while performing complex actions like API calls. In this lesson, we'll discuss how C# handles asynchronous code."),(0,i.kt)("p",null,"Why is this relevant now? In the next few lessons, we'll learn how to authenticate users with Identity. This will require our applications to manage asynchronous actions, so we need to learn how to recognize and write asynchronous methods."),(0,i.kt)("h2",{id:"synchronous-operations"},"Synchronous Operations"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"So far the C# code we've written is ",(0,i.kt)("strong",{parentName:"p"},"synchronous")," and our code executes a single line at a time. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit()")," action in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemsController.cs")," is an example of a synchronous method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n    public ActionResult Edit(int id)\n    {\n      Item thisItem = _db.Items.FirstOrDefault(item => item.ItemId == id);\n      ViewBag.CategoryId = new SelectList(_db.Categories, "CategoryId", "Name");\n      return View(thisItem);\n    }\n...\n')),(0,i.kt)("p",null,"Let's walk through what occurs when this synchronous method is called:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit()")," is called, our program looks in the database to find a specific item.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After locating the item, our program returns the Edit ",(0,i.kt)("inlineCode",{parentName:"p"},"View()"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"While our program is looking in the database, the browser waits. It cannot return the view until ",(0,i.kt)("inlineCode",{parentName:"p"},"thisItem")," is found because the line of code attempting to locate ",(0,i.kt)("inlineCode",{parentName:"p"},"thisItem")," appears ",(0,i.kt)("em",{parentName:"p"},"before")," we return the view.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When ",(0,i.kt)("inlineCode",{parentName:"p"},"thisItem")," is located, the application can return the view to be displayed in the browser."))),(0,i.kt)("p",null,"Because the lines of code are executed in order, this is a ",(0,i.kt)("strong",{parentName:"p"},"synchronous")," operation."),(0,i.kt)("h2",{id:"asynchronous-operations"},"Asynchronous Operations"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"On the other hand, an ",(0,i.kt)("strong",{parentName:"p"},"asynchronous"),' (also, "async") operation allows other code to run while a method is waiting to return.\nThis is very similar to what we learned in JavaScript. However, the code we write to manage this process looks much different.'),(0,i.kt)("p",null,"There are three primary parts to an async C# method:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," keyword")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," keyword")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A special ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," class that represents an action or actions the program may not have completed yet because they're async."))),(0,i.kt)("p",null,"Let's walk through an example async method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'static async void ProcessTextFileAsync()\n{\n  Task<int> asyncTask = ExampleAsyncMethodThatTakesAWhile();\n\n  Console.WriteLine("Please wait patiently while I run the ExampleAsyncMethodThatTakesAWhile().");\n\n  int x = await asyncTask;\n\n  Console.WriteLine("Return value of ExampleAsyncMethodThatTakesAWhile(): " + x);\n}\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"First, the ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," keyword is included in the method's signature: ",(0,i.kt)("inlineCode",{parentName:"p"},"static async void ProcessTextFileAsync()"),". Async methods should always have an ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," modifier in their declaration. It tells our application the method should run asynchronously.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next, notice the ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," keyword in the line ",(0,i.kt)("inlineCode",{parentName:"p"},"int x = await asyncTask"),". As its name suggests, this keyword makes the application wait until the specified async action ",(0,i.kt)("inlineCode",{parentName:"p"},"asyncTask")," is completed. Once ",(0,i.kt)("inlineCode",{parentName:"p"},"asyncTask")," is completed, it will define ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),'. This gives us a great deal of control over our code. We can allow multiple lines of code to run asynchronously and then add multiple "waiting points" with ',(0,i.kt)("inlineCode",{parentName:"p"},"await"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Our hypothetical async method ",(0,i.kt)("inlineCode",{parentName:"p"},"ExampleAsyncMethodThatTakesAWhile()")," stores the return data in the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"asyncTask"),". Notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"asyncTask")," has the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"Task<int>"),". In C#, ",(0,i.kt)("strong",{parentName:"p"},"an asynchronous method can only return ",(0,i.kt)("inlineCode",{parentName:"strong"},"void")," or a ",(0,i.kt)("inlineCode",{parentName:"strong"},"Task")," object representing the asynchronous operation itself.")," A ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," represents ongoing work. While a ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," by default, we can specify what type the task will eventually return by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Task<TResult>")," class. For example:"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Task<int>")," returns an ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Task<string>")," returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Task<ActionResult>")," returns an ",(0,i.kt)("inlineCode",{parentName:"li"},"ActionResult"),".")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"In the code above we want the result to be the integer ",(0,i.kt)("inlineCode",{parentName:"li"},"x"),". In order to turn a ",(0,i.kt)("inlineCode",{parentName:"li"},"Task<int>")," into an ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),", we use the ",(0,i.kt)("inlineCode",{parentName:"li"},"await")," keyword. This forces the program to wait until ",(0,i.kt)("inlineCode",{parentName:"li"},"task")," is appropriately defined as an ",(0,i.kt)("inlineCode",{parentName:"li"},"int")," before moving on to subsequent lines of code.")),(0,i.kt)("p",null,"Let's consider one more pseudocode example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'static async void DoMyHolidayErrandsForMeAsync()\n{\n  Task<int> determineHowManyGiftsIShouldBuy = ProcessSantasList("C:\\\\naughty_or_nice.txt");\n  BakeSugarCookies();\n  HangLights();\n  int giftNumber = await determineHowManyGiftsIShouldBuy;\n  for (int index = 0; index < giftNumber; index++)\n  {\n    BuyHolidayGifts();\n    MarkOffList(index);\n  }\n}\n')),(0,i.kt)("p",null,"Here, we have an ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," method called ",(0,i.kt)("inlineCode",{parentName:"p"},"DoMyHolidayErrandsForMeAsync()"),". We could describe the method as doing the following: \"I need you to do holiday errands. Start determining how many gifts we need to buy and feel free to multi-task and bake the cookies and hang lights while you're doing that, too. But ",(0,i.kt)("strong",{parentName:"p"},"wait")," to define ",(0,i.kt)("inlineCode",{parentName:"p"},"giftNumber")," until after the ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessSantasList()"),' method fully finishes because we need its results before continuing. After we have that number, we can buy the necessary number of gifts and start marking them off our list."'),(0,i.kt)("h3",{id:"rules-and-conventions"},"Rules and Conventions"),(0,i.kt)("p",null,"Before we wrap up, let's review the rules and conventions for async methods in C#:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Async methods always have an ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," modifier in their declaration, as seen above.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It's also a best practice to include the term ",(0,i.kt)("inlineCode",{parentName:"p"},"Async")," at the end of the method name as seen in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessTextFileAsync()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DoMyHolidayErrandsForMeAsync()")," methods.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Again, an asynchronous method can only return ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," object representing the asynchronous operation itself.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We can specify what type the ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," will eventually become. For example, the type ",(0,i.kt)("inlineCode",{parentName:"p"},"Task<int>")," will resolve to an ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Task<string>")," returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Task<ActionResult>")," returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionResult"),". When we do this, we're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Task<TResult>")," class.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," keyword can ",(0,i.kt)("strong",{parentName:"p"},"only")," be used in a method that includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," modifier in its signature.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Because ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," waits for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Task"),' to finish and return its specified data type, we can use it to "unwrap" a ',(0,i.kt)("inlineCode",{parentName:"p"},"Task"),". For instance, if we ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," something declared as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Task<int>"),", we'll receive an ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," value, because that's what that ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," returns when its async code is finished running. Similarly, if we use ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," on a ",(0,i.kt)("inlineCode",{parentName:"p"},"Task<string>"),", we'd receive a string value."))),(0,i.kt)("h3",{id:"namespace"},"Namespace"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Task<TResult>")," classes belong to the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Threading.Tasks")," namespace. So anytime we use a ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," in our code, we'll need to add the following using directive."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"using System.Threading.Tasks;\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Threading.Tasks")," namespace contains a lot of classes to help us manage concurrent and asynchronous code. To learn more, visit the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks?view=net-6.0"},"MS Docs for the ",(0,i.kt)("inlineCode",{parentName:"a"},"System.Threading.Tasks")," namespace"),"."),(0,i.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To review the official guide on asynchrony with C#, visit the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/"},"MS docs on async and await"),". ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For some examples of async/await methods in use, check out ",(0,i.kt)("a",{parentName:"p",href:"http://www.dotnetperls.com/async"},"this article from dotnetperls"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For more information about the ",(0,i.kt)("inlineCode",{parentName:"p"},"Task<TResult>")," class, we recommend the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1?view=net-6.0"},"MS Documentation"),"."))))}m.isMDXComponent=!0}}]);