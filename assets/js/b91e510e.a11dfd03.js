"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[92816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"\ud83d\udcd3 3.2.1.3 To Do List MVC Setup",day:"monday",id:"3-2-1-3-to-do-list-mvc-setup",hide_table_of_contents:!0},i=void 0,l={unversionedId:"c-and-net/basic-web-applications/3-2-1-3-to-do-list-mvc-setup",id:"version-1.1/c-and-net/basic-web-applications/3-2-1-3-to-do-list-mvc-setup",title:"\ud83d\udcd3 3.2.1.3 To Do List MVC Setup",description:"Now that we've had basic practice with the Model-View-Controller aspect of MVC web apps, let's create a more complex ASP.NET Core MVC application. We'll then continue building upon this codebase throughout the remainder of the C# and .NET course.",source:"@site/versioned_docs/version-1.1/3_c-and-net/2_basic-web-applications/AU-3-2-1-3-to-do-list-mvc-setup.md",sourceDirName:"3_c-and-net/2_basic-web-applications",slug:"/c-and-net/basic-web-applications/3-2-1-3-to-do-list-mvc-setup",permalink:"/v1.1/c-and-net/basic-web-applications/3-2-1-3-to-do-list-mvc-setup",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 3.2.1.3 To Do List MVC Setup",day:"monday",id:"3-2-1-3-to-do-list-mvc-setup",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\u270f\ufe0f 3.2.1.2 ASP.NET Core MVC Practice",permalink:"/v1.1/c-and-net/basic-web-applications/3-2-1-2-asp-net-core-mvc-practice"},next:{title:"\ud83d\udcd3 3.2.1.4 To Do List with MVC Forms",permalink:"/v1.1/c-and-net/basic-web-applications/3-2-1-4-to-do-list-with-mvc-forms"}},s={},p=[{value:"Starter Project for To Do List",id:"starter-project-for-to-do-list",level:2},{value:"Implementing an MVC Web Interface",id:"implementing-an-mvc-web-interface",level:2},{value:"Add ASP.NET Core MVC",id:"add-aspnet-core-mvc",level:3},{value:"<code>Program.cs</code>",id:"programcs",level:3},{value:"<code>Properties/launchSettings.json</code>",id:"propertieslaunchsettingsjson",level:3},{value:"<code>.gitignore</code>",id:"gitignore",level:3},{value:"Controller",id:"controller",level:3},{value:"Views",id:"views",level:3},{value:"Launching the Project",id:"launching-the-project",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that we've had basic practice with the Model-View-Controller aspect of MVC web apps, let's create a more complex ASP.NET Core MVC application. We'll then continue building upon this codebase throughout the remainder of the C# and .NET course."),(0,r.kt)("h2",{id:"starter-project-for-to-do-list"},"Starter Project for To Do List"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We'll call our new project the \"To Do List\". It will be an application that tracks our to-dos. We'll start simple and just have one ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," model that is meant to represent a single task on our To Do List. Later on we'll add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Category"),' model that will represent different to-do lists within our application, like one for "School" or one for "Home Chores". '),(0,r.kt)("p",null,'Since our goal is to practice with the ASP.NET Core MVC framework, we\'ve put together a basic starter project for the "To Do List" app that contains the following:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"Item")," class within the ",(0,r.kt)("inlineCode",{parentName:"li"},"ToDoList.Models")," namespace."),(0,r.kt)("li",{parentName:"ul"},"Full testing for the ",(0,r.kt)("inlineCode",{parentName:"li"},"Item")," class. The tests will all be similar to those we wrote for the ",(0,r.kt)("inlineCode",{parentName:"li"},"Triangle")," class in the Shape Tracker app.")),(0,r.kt)("p",null,"To begin this walkthrough, clone down the following code from the default branch ",(0,r.kt)("inlineCode",{parentName:"p"},"1_mvc_setup"),". Then, take a moment to explore the files and folders and run the tests to make sure they are all passing."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-2-to-do-list-csharp-net6/tree/1_mvc_setup"},(0,r.kt)("i",{class:"glyphicon glyphicon-folder-open"}),'  Starter GitHub Repo for the "To Do List" Application'))),(0,r.kt)("h2",{id:"implementing-an-mvc-web-interface"},"Implementing an MVC Web Interface"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We'll update this project to work with ASP.NET Core MVC. First we'll add the necessary components to our project structure."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"ToDoList")," production project, create the following file:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Program.cs")))),(0,r.kt)("li",{parentName:"ul"},"Still within the ",(0,r.kt)("inlineCode",{parentName:"li"},"ToDoList")," directory, create the following subdirectories:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Controllers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Views")))),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"ToDoList/Controllers")," create a ",(0,r.kt)("inlineCode",{parentName:"li"},"HomeController.cs")," file."),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"ToDoList/Views")," create a ",(0,r.kt)("inlineCode",{parentName:"li"},"Home")," subdirectory.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In this home subdirectory, create a single ",(0,r.kt)("inlineCode",{parentName:"li"},"Index.cshtml")," file."))),(0,r.kt)("li",{parentName:"ul"},"Finally, in the uppermost parent directory, ",(0,r.kt)("inlineCode",{parentName:"li"},"ToDoList.Solution"),", create a ",(0,r.kt)("inlineCode",{parentName:"li"},".gitignore")," file.")),(0,r.kt)("p",null,"The resulting structure should look like this:"),(0,r.kt)("pre",null,"ToDoList.Solution \u251c\u2500\u2500 .gitignore \u251c\u2500\u2500 ToDoList \u2502   \u251c\u2500\u2500 Controllers \u2502   \u2502   \u2514\u2500\u2500 HomeController.cs \u2502   \u251c\u2500\u2500 Models \u2502   \u2502   \u2514\u2500\u2500 Item.cs \u2502   \u251c\u2500\u2500 Program.cs \u2502   \u251c\u2500\u2500 Properties \u2502   \u2502   \u2514\u2500\u2500 launchSettings.json \u2502   \u251c\u2500\u2500 ToDoList.csproj \u2502   \u2514\u2500\u2500 Views \u2502       \u2514\u2500\u2500 Home \u2502           \u2514\u2500\u2500 Index.cshtml \u2514\u2500\u2500 ToDoList.Tests \u251c\u2500\u2500 ModelTests \u2502   \u2514\u2500\u2500 ItemTests.cs \u2514\u2500\u2500 ToDoList.Tests.csproj"),(0,r.kt)("h3",{id:"add-aspnet-core-mvc"},"Add ASP.NET Core MVC"),(0,r.kt)("p",null,"We'll also add the MVC framework package by updating the production project's ",(0,r.kt)("inlineCode",{parentName:"p"},".csproj")," file to include ",(0,r.kt)("inlineCode",{parentName:"p"},".Web")," in the Project SDK:"),(0,r.kt)("div",{class:"filename"},"ToDoList/ToDoList.csproj"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'<Project Sdk="Microsoft.NET.Sdk.Web">\n  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n  </PropertyGroup>\n</Project>\n')),(0,r.kt)("p",null,"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ToDoList")," production project in the terminal and run ",(0,r.kt)("inlineCode",{parentName:"p"},"$ dotnet restore"),"."),(0,r.kt)("h3",{id:"programcs"},(0,r.kt)("inlineCode",{parentName:"h3"},"Program.cs")),(0,r.kt)("p",null,"We'll populate ",(0,r.kt)("inlineCode",{parentName:"p"},"ToDoList/Program.cs")," with the same general configuration code we've used so far:"),(0,r.kt)("div",{class:"filename"},"ToDoList/Program.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace ToDoList\n{\n  class Program\n  {\n    static void Main(string[] args)\n    {\n      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\n      builder.Services.AddControllersWithViews();\n\n      WebApplication app = builder.Build();\n\n      app.UseHttpsRedirection();\n\n      app.UseRouting();\n\n      app.MapControllerRoute(\n        name: "default",\n        pattern: "{controller=Home}/{action=Index}/{id?}"\n      );\n\n      app.Run();\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"propertieslaunchsettingsjson"},(0,r.kt)("inlineCode",{parentName:"h3"},"Properties/launchSettings.json")),(0,r.kt)("p",null,"We'll populate ",(0,r.kt)("inlineCode",{parentName:"p"},"ToDoList/Properties/launchSettings.json")," with the same general configuration we'll use in all of our projects."),(0,r.kt)("div",{class:"filename"},"ProjectName.Solution/ProjectName/Properties/launchSettings.json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "profiles": {\n    "development": {\n      "commandName": "Project",\n      "dotnetRunMessages": true,\n      "launchBrowser": true,\n      "applicationUrl": "https://localhost:5001;http://localhost:5000",\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development"\n      }\n    },\n    "production": {\n      "commandName": "Project",\n      "dotnetRunMessages": true,\n      "launchBrowser": true,\n      "applicationUrl": "https://localhost:5001;http://localhost:5000",\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Production"\n      }\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"gitignore"},(0,r.kt)("inlineCode",{parentName:"h3"},".gitignore")),(0,r.kt)("p",null,"Double check that there's a ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," file with the following folders listed within:"),(0,r.kt)("div",{class:"filename"},".gitignore"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"obj\nbin\n")),(0,r.kt)("p",null,"Let's also ensure any ",(0,r.kt)("inlineCode",{parentName:"p"},"obj")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," directories already committed are no longer tracked by Git with the following commands in the top level of our project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git rm --cached obj -r\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git rm --cached bin -r\n")),(0,r.kt)("p",null,"If you receive a ",(0,r.kt)("inlineCode",{parentName:"p"},"did not match any files")," response, it means you're already ignoring these directories so there was nothing to remove from Git. This is normal."),(0,r.kt)("h3",{id:"controller"},"Controller"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"ToDoList/Controllers/HomeController.cs")," we'll add the standard import statements, namespace, and class:"),(0,r.kt)("div",{class:"filename"},"ToDoList/Controllers/HomeController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.AspNetCore.Mvc;\nusing ToDoList.Models;\n\nnamespace ToDoList.Controllers\n{\n  public class HomeController : Controller\n  {\n\n\n  }\n}\n")),(0,r.kt)("p",null,"In addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Microsoft.AspNetCore.Mvc")," namespace, we're also ",(0,r.kt)("inlineCode",{parentName:"p"},"using")," our ",(0,r.kt)("inlineCode",{parentName:"p"},"ToDoList.Models")," namespace. This grants access to our ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," class in the controller."),(0,r.kt)("p",null,"Now we can add our first route:"),(0,r.kt)("div",{class:"filename"},"ToDoList/Controllers/HomeController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\nusing ToDoList.Models;\n\nnamespace ToDoList.Controllers\n{\n  public class HomeController : Controller\n  {\n\n    [Route("/")]\n    public ActionResult Index()\n    {\n      Item starterItem = new Item("Add first item to To Do List");\n      return View(starterItem);\n    }\n\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We create an ",(0,r.kt)("inlineCode",{parentName:"p"},"Index()")," route method with a route decorator specifying a URL path of ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", which means this is the root route for ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:5000"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When the route is invoked, we create a placeholder ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," to populate our To Do List. We can access ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s because we are ",(0,r.kt)("inlineCode",{parentName:"p"},"using ToDoList.Models;")," at the top of this file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We pass ",(0,r.kt)("inlineCode",{parentName:"p"},"starterItem")," into the ",(0,r.kt)("inlineCode",{parentName:"p"},"View()")," method. Let's create a corresponding view now."))),(0,r.kt)("h3",{id:"views"},"Views"),(0,r.kt)("p",null,"Add the following to ",(0,r.kt)("inlineCode",{parentName:"p"},"Index.cshtml"),":"),(0,r.kt)("div",{class:"filename"},"ToDoList/Views/Home/Index.cshtml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>My To-Do List!</title>\n    <link \n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n      rel="stylesheet" \n      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n      crossorigin="anonymous">\n  </head>\n  <body>\n    <h1>To Do List</h1>\n    <ul>\n      <li>@Model.Description</li>\n    </ul>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"We use ",(0,r.kt)("inlineCode",{parentName:"p"},"@Model.Description")," to display the property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"starterItem")," object we passed into ",(0,r.kt)("inlineCode",{parentName:"p"},"View()")," in the controller."),(0,r.kt)("h2",{id:"launching-the-project"},"Launching the Project"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's check out the project in the browser. Enter the following command in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ToDoList")," directory (the production directory) to build and run the project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet watch run\n")),(0,r.kt)("p",null,"Remember: because we're using a ",(0,r.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," with a development profile configured as the default profile, the above command will start our project in development mode, which enables Developer Exception Pages."),(0,r.kt)("p",null,"If we visit ",(0,r.kt)("inlineCode",{parentName:"p"},"https://localhost:5001"),", our To Do List homepage loads correctly. If you get an error, you may not have your developer security certificate set up for HTTPS."))}u.isMDXComponent=!0}}]);