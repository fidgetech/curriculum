"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[37221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"\ud83d\udcd3 3.6.0.05 API: Create and Read",day:"weekend",id:"3-6-0-05-api-create-and-read",hide_table_of_contents:!0},r=void 0,l={unversionedId:"c-and-net/building-an-api/3-6-0-05-api-create-and-read",id:"c-and-net/building-an-api/3-6-0-05-api-create-and-read",title:"\ud83d\udcd3 3.6.0.05 API: Create and Read",description:"Now that we have seeded animal data, we'll create our first custom API endpoints for CREATE and READ functionality. We'll add:",source:"@site/docs/3_c-and-net/6_building-an-api/AF-3-6-0-05-api-create-and-read.md",sourceDirName:"3_c-and-net/6_building-an-api",slug:"/c-and-net/building-an-api/3-6-0-05-api-create-and-read",permalink:"/c-and-net/building-an-api/3-6-0-05-api-create-and-read",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.6.0.05 API: Create and Read",day:"weekend",id:"3-6-0-05-api-create-and-read",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.6.0.07 Seeding the Database",permalink:"/c-and-net/building-an-api/3-6-0-07-seeding-the-database"},next:{title:"\ud83d\udcd3 3.6.0.06 API: Update and Delete",permalink:"/c-and-net/building-an-api/3-6-0-06-api-update-and-delete"}},s={},p=[{value:"READ for Animals",id:"read-for-animals",level:2},{value:"Implicit Using Directives",id:"implicit-using-directives",level:3},{value:"Attribute Routing",id:"attribute-routing",level:3},{value:"We Never Return Views",id:"we-never-return-views",level:3},{value:"We Return HTTP Status Codes",id:"we-return-http-status-codes",level:3},{value:".NET Automatically Converts C# into JSON",id:"net-automatically-converts-c-into-json",level:3},{value:"It&#39;s a Best Practice to Use Async Controller Actions",id:"its-a-best-practice-to-use-async-controller-actions",level:3},{value:"We&#39;ll Use More HTTP Verb Templates, and These Contribute to Routing",id:"well-use-more-http-verb-templates-and-these-contribute-to-routing",level:3},{value:"Test the Endpoints",id:"test-the-endpoints",level:3},{value:"CREATE for Animals",id:"create-for-animals",level:2},{value:"Creating an <code>Animal</code>",id:"creating-an-animal",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now that we have seeded animal data, we'll create our first custom API endpoints for CREATE and READ functionality. We'll add:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A GET endpoint at ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:5000/api/animals")," that will return all animal objects."),(0,i.kt)("li",{parentName:"ul"},"A GET endpoint at ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:5000/api/animals/{id}")," that will return one animal object based on its ",(0,i.kt)("inlineCode",{parentName:"li"},"AnimalId")," property."),(0,i.kt)("li",{parentName:"ul"},"A POST endpoint at ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:5000/api/animals")," that will add a new animal to our database and requires a request body with an object literal of an animal.")),(0,i.kt)("p",null,"In the process, we'll learn about general conventions when creating an API controller and important features of controller actions for controllers marked with the ",(0,i.kt)("inlineCode",{parentName:"p"},"[ApiController]"),"."),(0,i.kt)("h2",{id:"read-for-animals"},"READ for Animals"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We'll start by creating an ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalsController.cs")," with two new methods. One will return all the animals in our application while the other will return just one animal based on its ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalId")," property."),(0,i.kt)("div",{class:"filename"},"Controllers/AnimalsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\nusing Microsoft.EntityFrameworkCore;\nusing CretaceousApi.Models;\n\nnamespace CretaceousApi.Controllers\n{\n  [Route("api/[controller]")]\n  [ApiController]\n  public class AnimalsController : ControllerBase\n  {\n    private readonly CretaceousApiContext _db;\n\n    public AnimalsController(CretaceousApiContext db)\n    {\n      _db = db;\n    }\n\n    // GET api/animals\n    [HttpGet]\n    public async Task<ActionResult<IEnumerable<Animal>>> Get()\n    {\n      return await _db.Animals.ToListAsync();\n    }\n\n    // GET: api/Animals/5\n    [HttpGet("{id}")]\n    public async Task<ActionResult<Animal>> GetAnimal(int id)\n    {\n      Animal animal = await _db.Animals.FindAsync(id);\n\n      if (animal == null)\n      {\n        return NotFound();\n      }\n\n      return animal;\n    }\n  }\n}\n')),(0,i.kt)("p",null,"The controller code looks very similar to code we might use when building a web application, with a few key differences. Let's work through all of them now!"),(0,i.kt)("h3",{id:"implicit-using-directives"},"Implicit Using Directives"),(0,i.kt)("p",null,"First take note that we're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Threading.Tasks")," namespaces, but we don't need to explicitly list them in our ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalsController")," because we've enabled implicit using directives in our project file (",(0,i.kt)("inlineCode",{parentName:"p"},".csproj")," file)."),(0,i.kt)("h3",{id:"attribute-routing"},"Attribute Routing"),(0,i.kt)("p",null,"Then, notice the attribute that we add to the top of the controller class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'[Route("api/[controller]")]\n')),(0,i.kt)("p",null,"With the above ",(0,i.kt)("inlineCode",{parentName:"p"},"[Route]")," attribute, we're specifying that the base request URL for the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalsController")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/animals"),". So for example, when we make a GET request to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals"),", we'll access the ",(0,i.kt)("inlineCode",{parentName:"p"},"Get()")," action in our ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalsController"),", which will then handle returning all of the animals in our database."),(0,i.kt)("h3",{id:"we-never-return-views"},"We Never Return Views"),(0,i.kt)("p",null,"Another key difference is that we aren't returning a view. Our ",(0,i.kt)("inlineCode",{parentName:"p"},"Get()")," action returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionResult")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"<IEnumerable<Animal>>"),", and our ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAnimal()")," action returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionResult")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"<Animal>"),". In our web applications, we didn't need to specify a type for our ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionResult")," because we were always returning a view. "),(0,i.kt)("h3",{id:"we-return-http-status-codes"},"We Return HTTP Status Codes"),(0,i.kt)("p",null,"Our GET endpoints not only return animals or an animal, they also return ",(0,i.kt)("strong",{parentName:"p"},"HTTP status codes"),"; when a successful GET request is returned from an API, there will also be a 200 OK HTTP status code returned. When we return a collection of animals or an animal object, the 200 OK status code is automatically added. "),(0,i.kt)("p",null,"When we want to generate another type of HTTP status code, we'll have to make use of ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase?view=aspnetcore-6.0#methods"},(0,i.kt)("inlineCode",{parentName:"a"},"ControllerBase")," class methods"),". We can see an example of this in the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAnimal()")," action: if no animal matching the specified id is returned, then we return ",(0,i.kt)("inlineCode",{parentName:"p"},"NotFound()"),", which will send a 404 Not Found HTTP status code as our API's response."),(0,i.kt)("p",null,"Take a moment to familiarize yourself with the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase?view=aspnetcore-6.0#methods"},(0,i.kt)("inlineCode",{parentName:"a"},"ControllerBase")," class methods"),". We won't use all of them in this Cretaceous Park API walkthrough, though you may find some of them useful in other APIs that you build."),(0,i.kt)("h3",{id:"net-automatically-converts-c-into-json"},".NET Automatically Converts C# into JSON"),(0,i.kt)("p",null,"You might be wondering... if our ",(0,i.kt)("inlineCode",{parentName:"p"},"Get()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAnimal()")," endpoints returns C# objects, how do those get turned into JSON? Well, the answer is that .NET automatically converts C# into JSON for us."),(0,i.kt)("h3",{id:"its-a-best-practice-to-use-async-controller-actions"},"It's a Best Practice to Use Async Controller Actions"),(0,i.kt)("p",null,"You may also have noticed that all of our controller action methods are asynchronous. It's a best practice to make our controller action methods asynchronous so that they can scale to handle more requests. This doesn't make any individual request get processed faster; instead it frees up our application to handle all requests asynchronously, which means that our application can handle more requests. To learn more about this topic, check out ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/archive/msdn-magazine/2014/october/async-programming-introduction-to-async-await-on-asp-net"},"this article on asynchronous code from the MSDN magazine"),". It's an older article, but the concepts are still relevant today."),(0,i.kt)("h3",{id:"well-use-more-http-verb-templates-and-these-contribute-to-routing"},"We'll Use More HTTP Verb Templates, and These Contribute to Routing"),(0,i.kt)("p",null,"Another key difference is with the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/routing?view=aspnetcore-6.0#http-verb-templates"},"HTTP verb templates")," that we use, like ",(0,i.kt)("inlineCode",{parentName:"p"},"[HttpGet]")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"[HttpPost]"),". While these aren't new, we'll now use more of them because we won't be making requests directly from an HTML5 form, which only supports GET and POST actions."),(0,i.kt)("p",null,"Also, these HTTP verb templates are meant to specify what ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"HTTP action method")," is needed to make the request. This means that not only do we need the right request URL, like ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals/"),", we also need the right HTTP action method. For ",(0,i.kt)("inlineCode",{parentName:"p"},"Get()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAnimal()"),", they both require a GET Http action."),(0,i.kt)("p",null,"Notice the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAnimal()")," action's attribute: ",(0,i.kt)("inlineCode",{parentName:"p"},'[HttpGet("{id}")]'),". As we can see, the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpGet()")," method accepts an argument; when we include ",(0,i.kt)("inlineCode",{parentName:"p"},'"{id}"')," as the argument, this configures the endpoint to expect another value added to the end of it: ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/animals/{id}"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"{id}")," is a variable for a value. With the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAnimal()")," action parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"int id"),", we further specify that the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"{id}")," should be an integer. This means we can now make a GET request with an animal's id in order to only get data for the animal that matches the specified id, just like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://localhost:5000/api/animals/1\n")),(0,i.kt)("p",null,"Note that the variable name ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," in ",(0,i.kt)("inlineCode",{parentName:"p"},'[HttpGet("{id}")]')," and in ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAnimal(int id)")," needs to match exactly. The value for the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," comes directly from the request URL. If we do the above GET request, it will return the animal object that has an ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalId")," of 1. "),(0,i.kt)("h3",{id:"test-the-endpoints"},"Test the Endpoints"),(0,i.kt)("p",null,"At this point, we've covered all of the salient differences between an API controller and one for an MVC application. Go ahead and test out both of the routes in Postman or Swagger UI and confirm that they are functioning as expected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET http://localhost:5000/api/animals\nGET http://localhost:5000/api/animals/2\n")),(0,i.kt)("h2",{id:"create-for-animals"},"CREATE for Animals"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Next, we'll add the ability to add animals to our database. Here's the new controller action method that we'll add to the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalsController"),":"),(0,i.kt)("div",{class:"filename"},"Controllers/AnimalsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n    // POST api/animals\n    [HttpPost]\n    public async Task<ActionResult<Animal>> Post(Animal animal)\n    {\n      _db.Animals.Add(animal);\n      await _db.SaveChangesAsync();\n      return CreatedAtAction(nameof(GetAnimal), new { id = animal.AnimalId }, animal);\n    }\n...\n")),(0,i.kt)("p",null,"Most of the features of our new ",(0,i.kt)("inlineCode",{parentName:"p"},"Post()")," method we covered when we explained our ",(0,i.kt)("inlineCode",{parentName:"p"},"Get()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAnimal()")," action methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This is an asynchronous method so that our API is free to handle other requests while certain async code is being processed. "),(0,i.kt)("li",{parentName:"ul"},"We don't return a view."),(0,i.kt)("li",{parentName:"ul"},"We specify the HTTP action method with the Http verb template ",(0,i.kt)("inlineCode",{parentName:"li"},"[HttpPost]"),".")),(0,i.kt)("p",null,"Other code is new. First notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Post()")," method takes an ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," parameter, which we call ",(0,i.kt)("inlineCode",{parentName:"p"},"animal"),". This ",(0,i.kt)("inlineCode",{parentName:"p"},"animal")," object comes from the ",(0,i.kt)("strong",{parentName:"p"},"body")," of the request. Since we've specified that our ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalsController")," is an ",(0,i.kt)("inlineCode",{parentName:"p"},"[ApiController]"),", our controller knows to infer that the value for the ",(0,i.kt)("inlineCode",{parentName:"p"},"animal")," parameter should come from the request body, and how to bind that data to an ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," object. This is all thanks to built-in functionality for controllers marked with the ",(0,i.kt)("inlineCode",{parentName:"p"},"[ApiController]")," attribute."),(0,i.kt)("p",null,"We could optionally explicitly state how controller action parameters should be bound. For example, we could use the ",(0,i.kt)("inlineCode",{parentName:"p"},"[FromBody]")," attribute to specify that the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"animal")," is found in the request body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"    [HttpPost]\n    public async Task<ActionResult<Animal>> Post([FromBody] Animal animal)\n    {\n      ...\n    }\n")),(0,i.kt)("p",null,"However doing so is optional with controllers marked with the ",(0,i.kt)("inlineCode",{parentName:"p"},"[ApiController]")," attribute. To learn more about model binding, visit ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-6.0#binding-source-parameter-inference"},'the MS docs on "Binding Source Parameter Inference"')," ."),(0,i.kt)("p",null,"The next thing we should cover is the new method ",(0,i.kt)("inlineCode",{parentName:"p"},"CreatedAtAction()")," that our ",(0,i.kt)("inlineCode",{parentName:"p"},"Post()")," action uses to return a response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"return CreatedAtAction(nameof(GetAnimal), new { id = animal.AnimalId }, animal);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CreatedAtAction()")," is another ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase?view=aspnetcore-6.0#methods"},(0,i.kt)("inlineCode",{parentName:"a"},"ControllerBase")," class method")," that specifically handles returning an HTTP status code of 201 Created. More than just that, this method lets us specify the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location"},"Location")," of the newly created object. What this means is that our ",(0,i.kt)("inlineCode",{parentName:"p"},"Post()")," controller action will return the newly created ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal"),' object to the user along with a "201 Created" status code, rather than the default 200 OK with no animal object. '),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CreatedAtAction()")," method takes 3 arguments to specify the location of the new object:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The name of the controller action, in this case the ",(0,i.kt)("inlineCode",{parentName:"li"},"GetAnimal()")," controller action specified via ",(0,i.kt)("inlineCode",{parentName:"li"},"nameof(GetAnimal)"),"."),(0,i.kt)("li",{parentName:"ul"},"The route values required for the controller action in a new anonymous object, in this case an ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," parameter for the ",(0,i.kt)("inlineCode",{parentName:"li"},"GetAnimal()")," controller action."),(0,i.kt)("li",{parentName:"ul"},"The resource that was created in this action.")),(0,i.kt)("h3",{id:"creating-an-animal"},"Creating an ",(0,i.kt)("inlineCode",{parentName:"h3"},"Animal")),(0,i.kt)("p",null,"Let's use our new ",(0,i.kt)("inlineCode",{parentName:"p"},"Post()")," action to add an animal to our database. We'll send a POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals")," with a ",(0,i.kt)("strong",{parentName:"p"},"body"),". We can create an animal object by passing an ",(0,i.kt)("strong",{parentName:"p"},"object literal")," in the body of our API call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "species": "Tyrannosaurus Rex",\n  "name": "Elizabeth",\n  "age": 8\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note that we should never include an ",(0,i.kt)("inlineCode",{parentName:"strong"},"animalId")," property, as that value should always be set by our database.")),(0,i.kt)("p",null,"Here's how adding a body to a POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals")," looks using Postman:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/aspnet-web-api-postman-post-request-with-body.png"},"Adding a body to a POST request to ",(0,i.kt)("inlineCode",{parentName:"a"},"http://localhost:5000/api/animals")," using Postman.")),(0,i.kt)("p",null,"When we make the POST request, we'll get a ",(0,i.kt)("inlineCode",{parentName:"p"},"201 Created")," status, which means the call was successful."),(0,i.kt)("p",null,"Then, if we make a GET request to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals"),", we'll see our new ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," will be returned in the response. "),(0,i.kt)("p",null,"Up next, we'll add update and delete functionality, completing full CRUD for our API."))}m.isMDXComponent=!0}}]);