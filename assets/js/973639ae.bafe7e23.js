"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[45734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=l,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));const i={title:"\ud83d\udcd3 3.6.2.5 MVC Client: GetDetails()",day:"tuesday",id:"3-6-2-5-mvc-client-getdetails",hide_table_of_contents:!0},r=void 0,o={unversionedId:"c-and-net/building-an-api/3-6-2-5-mvc-client-getdetails",id:"c-and-net/building-an-api/3-6-2-5-mvc-client-getdetails",title:"\ud83d\udcd3 3.6.2.5 MVC Client: GetDetails()",description:"In the last lesson, we created a GetAll() method that returns a list of all animals from our API. Now we're ready to add methods to our Animal and ApiHelper classes for retrieving a single animal's details. The methods we'll add will look quite similar to the ones we already have.",source:"@site/docs/3_c-and-net/6_building-an-api/AR-3-6-2-5-mvc-client-getdetails.md",sourceDirName:"3_c-and-net/6_building-an-api",slug:"/c-and-net/building-an-api/3-6-2-5-mvc-client-getdetails",permalink:"/c-and-net/building-an-api/3-6-2-5-mvc-client-getdetails",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.6.2.5 MVC Client: GetDetails()",day:"tuesday",id:"3-6-2-5-mvc-client-getdetails",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.6.2.4 MVC Client: GetAll()",permalink:"/c-and-net/building-an-api/3-6-2-4-mvc-client-getall"},next:{title:"\ud83d\udcd3 3.6.2.6 MVC Client: POST, PUT, and DELETE",permalink:"/c-and-net/building-an-api/3-6-2-6-mvc-client-post-put-and-delete"}},s={},d=[{value:"GET for an Animal&#39;s Details",id:"get-for-an-animals-details",level:2},{value:"Adding Controller Action and View",id:"adding-controller-action-and-view",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In the last lesson, we created a ",(0,l.kt)("inlineCode",{parentName:"p"},"GetAll()")," method that returns a list of all animals from our API. Now we're ready to add methods to our ",(0,l.kt)("inlineCode",{parentName:"p"},"Animal")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ApiHelper")," classes for retrieving a single animal's details. The methods we'll add will look quite similar to the ones we already have."),(0,l.kt)("h2",{id:"get-for-an-animals-details"},"GET for an Animal's Details"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Here's the new ",(0,l.kt)("inlineCode",{parentName:"p"},"GetDetails()")," method that we'll add to our ",(0,l.kt)("inlineCode",{parentName:"p"},"Animal")," class"),(0,l.kt)("div",{class:"filename"},"Models/Animal.cs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"...\nnamespace CretaceousClient.Models\n{\n  public class Animal\n  {\n    ...\n\n    public static Animal GetDetails(int id)\n    {\n      var apiCallTask = ApiHelper.Get(id);\n      var result = apiCallTask.Result;\n\n      JObject jsonResponse = JsonConvert.DeserializeObject<JObject>(result);\n      Animal animal = JsonConvert.DeserializeObject<Animal>(jsonResponse.ToString());\n\n      return animal;\n    }\n  }\n}\n")),(0,l.kt)("p",null,"Why can't we just use one method for both the get all and get details functionality? Couldn't we just add an ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," to the URL string? The redundant code that we are creating doesn't look very DRY. "),(0,l.kt)("p",null,"Well, even though the core functionality of our methods is the same, they return different types of data and must be separated."),(0,l.kt)("p",null,"Here, we can see three key differences between our ",(0,l.kt)("inlineCode",{parentName:"p"},"GetDetails()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"GetAnimals()")," methods:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"We need to call on the ",(0,l.kt)("inlineCode",{parentName:"p"},"ApiHelper.Get()")," method, instead of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ApiHelper.GetAll()")," method.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"GetDetails()")," method returns a singular animal.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"GetDetails()")," method takes in the ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," of the animal.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The API call within ",(0,l.kt)("inlineCode",{parentName:"p"},"GetDetails()")," results in a JSON ",(0,l.kt)("em",{parentName:"p"},"object")," as opposed to a JSON ",(0,l.kt)("em",{parentName:"p"},"array"),"."))),(0,l.kt)("p",null,"Because of all of these reasons, we still need to create a new method for getting a single animal's details even though the code looks nearly identical to getting all animals from the database."),(0,l.kt)("p",null,"Now let's add the ",(0,l.kt)("inlineCode",{parentName:"p"},"ApiHelper.Get()")," method:"),(0,l.kt)("div",{class:"filename"},"Models/ApiHelper.cs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'...\nnamespace CretaceousClient.Models\n{\n  public class ApiHelper\n  {\n    ...\n\n    public static async Task<string> Get(int id)\n    {\n      RestClient client = new RestClient("http://localhost:5000/");\n      RestRequest request = new RestRequest($"api/animals/{id}", Method.Get);\n      RestResponse response = await client.GetAsync(request);\n      return response.Content;\n    }\n  }\n}\n')),(0,l.kt)("p",null,"This should still look familiar as it reflects the code we use to make API calls to the New York Times quite closely. "),(0,l.kt)("p",null,"As we discussed in the previous lesson, one key difference is using the ",(0,l.kt)("inlineCode",{parentName:"p"},"GetAsync()")," method, which will throw on a server error. To learn about the details of how error handling with RestSharp works, ",(0,l.kt)("a",{parentName:"p",href:"https://restsharp.dev/error-handling.html"},"visit the docs"),". "),(0,l.kt)("h2",{id:"adding-controller-action-and-view"},"Adding Controller Action and View"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Next, we'll add a controller action for ",(0,l.kt)("inlineCode",{parentName:"p"},"Details()"),":"),(0,l.kt)("div",{class:"filename"},"Controllers/AnimalsController.cs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.AspNetCore.Mvc;\nusing CretaceousClient.Models;\n\nnamespace CretaceousClient.Controllers;\n\npublic class AnimalsController : Controller\n{\n  public IActionResult Index()\n  {\n    List<Animal> animals = Animal.GetAnimals();\n    return View(animals);\n  }\n\n  public IActionResult Details(int id)\n  {\n    Animal animal = Animal.GetDetails(id);\n    return View(animal);\n  }\n}\n")),(0,l.kt)("p",null,"Finally, we'll add a view:"),(0,l.kt)("div",{class:"filename"},"Views/Animals/Details.cshtml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  ViewData["Title"] = $"Details for {Model.Name}";\n}\n\n<h1>All About @Model.Name</h1>\n\n<p>Species: @Model.Species</p>\n<p>Age: @Model.Age</p>\n\n@Html.ActionLink("Return to all animals", "Index")\n')),(0,l.kt)("p",null,"In the next lesson in this series, we'll cover new ground and make requests that ",(0,l.kt)("em",{parentName:"p"},"send")," data rather than ",(0,l.kt)("em",{parentName:"p"},"receive")," it."))}m.isMDXComponent=!0}}]);