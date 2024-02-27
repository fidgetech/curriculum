"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[54011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},43879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const l={title:"\ud83d\udcd3 3.6.0.06 API: Update and Delete",day:"weekend",id:"3-6-0-06-api-update-and-delete",hide_table_of_contents:!0},o=void 0,r={unversionedId:"c-and-net/building-an-api/3-6-0-06-api-update-and-delete",id:"c-and-net/building-an-api/3-6-0-06-api-update-and-delete",title:"\ud83d\udcd3 3.6.0.06 API: Update and Delete",description:"In the last lesson, we added create and read functionality to our Cretaceous Park API. In this lesson, we'll add update and delete functionality as well.",source:"@site/docs/3_c-and-net/6_building-an-api/AG-3-6-0-06-api-update-and-delete.md",sourceDirName:"3_c-and-net/6_building-an-api",slug:"/c-and-net/building-an-api/3-6-0-06-api-update-and-delete",permalink:"/c-and-net/building-an-api/3-6-0-06-api-update-and-delete",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.6.0.06 API: Update and Delete",day:"weekend",id:"3-6-0-06-api-update-and-delete",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.6.0.05 API: Create and Read",permalink:"/c-and-net/building-an-api/3-6-0-05-api-create-and-read"},next:{title:"\ud83d\udcd3 3.6.0.08 Adding Parameters to a Get Request to Support Query Strings",permalink:"/c-and-net/building-an-api/3-6-0-08-adding-parameters-to-a-get-request-to-support-query-strings"}},s={},d=[{value:"Adding Update Functionality",id:"adding-update-functionality",level:2},{value:"Test It Out!",id:"test-it-out",level:3},{value:"Supporting Partial Updates",id:"supporting-partial-updates",level:3},{value:"Adding Delete Functionality",id:"adding-delete-functionality",level:2},{value:"Benefits of RESTful Standards",id:"benefits-of-restful-standards",level:3},{value:"Repository Reference",id:"repository-reference",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...l}=e;return(0,i.kt)(u,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last lesson, we added create and read functionality to our Cretaceous Park API. In this lesson, we'll add update and delete functionality as well."),(0,i.kt)("h2",{id:"adding-update-functionality"},"Adding Update Functionality"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We'll start by editing an animal. In order to do so, we'll use a new HTTP verb in our route called PUT. PUT is like POST in that it makes a change to the server. However, PUT changes existing information while POST creates new information. Because of this PUT requires a body with the entire updated animal object (including the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalId"),"). We'll make PUT requests to this endpoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PUT http://localhost:5000/api/animals/{id}\n")),(0,i.kt)("p",null,"Here's our new ",(0,i.kt)("inlineCode",{parentName:"p"},"Put()")," controller action:"),(0,i.kt)("div",{class:"filename"},"Controllers/AnimalsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n    // PUT: api/Animals/5\n    [HttpPut("{id}")]\n    public async Task<IActionResult> Put(int id, Animal animal)\n    {\n      if (id != animal.AnimalId)\n      {\n        return BadRequest();\n      }\n\n      _db.Animals.Update(animal);\n\n      try\n      {\n        await _db.SaveChangesAsync();\n      }\n      catch (DbUpdateConcurrencyException)\n      {\n        if (!AnimalExists(id))\n        {\n          return NotFound();\n        }\n        else\n        {\n          throw;\n        }\n      }\n\n      return NoContent();\n    }\n\n    private bool AnimalExists(int id)\n    {\n      return _db.Animals.Any(e => e.AnimalId == id);\n    }\n...\n')),(0,i.kt)("p",null,"Once again, this looks similar to code we'd use in an MVC web application, with a few key differences:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We use the ",(0,i.kt)("inlineCode",{parentName:"p"},"[HttpPut]")," verb template. This specifies that the request made to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Put()")," controller action needs to specify the PUT Http action verb.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We'll determine which animal will be updated based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"{id}")," parameter in the URL.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First, we check if the ",(0,i.kt)("inlineCode",{parentName:"p"},"{id}")," in the request URL matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"animal.AnimalId")," property in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," object passed into our controller action by the request body. If they do not match, it means that the request is poorly formatted, so we use ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase.badrequest?view=aspnetcore-6.0"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"ControllerBase.BadRequest()")," method")," to return a HTTP status code of 400 Bad Request.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the request is formatted correctly, then we proceed to updating the animal in our database. The code to update an animal should already be familiar. We use EF Core's built-in methods to update the animal in the database and then save the changes. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We then ask our database to save changes asynchronously. In the process of doing this, we handle the possible error of the animal with the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalId")," not existing. To do this we use a try/catch block along with a newly created private method called ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalExists()")," (for use within the controller, and to DRY up our code). If an animal by the specified id in the request URL does not exist, then we'll return a 404 Not Found HTTP status code via ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase.notfound?view=aspnetcore-6.0"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"ControllerBase.NotFound()")," method"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Finally, notice that we return ",(0,i.kt)("inlineCode",{parentName:"p"},"NoContent();")," at the end of the method. This will return a HTTP status code of 204 No Content, which means that the request has completed successfully, but there's no need to navigate away from the current page. To learn more about the 204 status code, visit ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204"},"the MDN docs"),"."))),(0,i.kt)("h3",{id:"test-it-out"},"Test It Out!"),(0,i.kt)("p",null,"Let's test our new PUT API endpoint using Postman."),(0,i.kt)("p",null,"We'll make a call to the following endpoint: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals/1"),". This is exactly the same as the URL for getting an individual animal's details. The difference is that we need to specify a PUT request instead of a GET request."),(0,i.kt)("p",null,"According to the HTTP specification, a PUT request requires the client to send the entire updated entity, not just the changes. The body of the API call will look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "animalId": 1,\n  "species": "Woolly Mammoth",\n  "name": "Matilda the Woolly Mammoth",\n  "age": 8\n}\n')),(0,i.kt)("p",null,"This specifies that an animal with an ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalId")," property of 1 (as specified in the URL of ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals/1"),") should be updated so that it's now Matilda the Woolly Mammoth with an age of 8. Here's how this request will look in Postman:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Adding a body to a PUT request to `http://localhost:5000/api/animals/1` using Postman.",src:n(19666).Z,width:"702",height:"264"})),(0,i.kt)("p",null,"We'll see a 204 No Content response from the API if our request is successful. "),(0,i.kt)("p",null,"We can also confirm that our animal has been updated as expected by changing our PUT request into a GET request in Postman and then making another call to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals/1"),". We should get our edited animal back."),(0,i.kt)("h3",{id:"supporting-partial-updates"},"Supporting Partial Updates"),(0,i.kt)("p",null,"As noted earlier, the PUT action requires an entire object with all of its properties in order to make an update to it in the database. Well, there's an alternative to this: to support partial updates, use PATCH instead:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH"},"PATCH on MDN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/web-api/jsonpatch?view=aspnetcore-6.0"},"Handling PATCH requests in ASP.NET Core Web APIs"))),(0,i.kt)("h2",{id:"adding-delete-functionality"},"Adding Delete Functionality"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now we're ready to add delete functionality. To do so, we'll use a new HTTP verb in a new controller action called ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteAnimal()"),". We'll make DELETE requests to the following endpoint, where ",(0,i.kt)("inlineCode",{parentName:"p"},"{id}")," is the variable for the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalId")," of the animal that we want to remove from out database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DELETE http://localhost:5000/api/animals/{id}\n")),(0,i.kt)("p",null,"Here's the new ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteAnimal()")," controller action:"),(0,i.kt)("div",{class:"filename"},"Controllers/AnimalsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n    // DELETE: api/Animals/5\n    [HttpDelete("{id}")]\n    public async Task<IActionResult> DeleteAnimal(int id)\n    {\n      Animal animal = await _db.Animals.FindAsync(id);\n      if (animal == null)\n      {\n        return NotFound();\n      }\n\n      _db.Animals.Remove(animal);\n      await _db.SaveChangesAsync();\n\n      return NoContent();\n    }\n...\n')),(0,i.kt)("p",null,"Note the new ",(0,i.kt)("inlineCode",{parentName:"p"},"[HttpDelete]")," verb template. It takes an argument for ",(0,i.kt)("inlineCode",{parentName:"p"},'"{id}"'),", which means that the request URL is supposed to be ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE http://localhost:5000/api/animals/{id}"),". It also means that we are relying on the URL to get the animal's id, just like with our ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAnimal")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Put()")," controller action methods."),(0,i.kt)("p",null,"Also just like our other controller actions, our ",(0,i.kt)("inlineCode",{parentName:"p"},"DeleteAnimal()")," method is asynchronous and it makes use of ",(0,i.kt)("inlineCode",{parentName:"p"},"ControllerBase")," class methods to return HTTP status codes."),(0,i.kt)("p",null,"Other than that, the code is largely the same as what we'd see in a MVC web application. EF Core doesn't care whether it gets information from an API or a web application when manipulating the database."),(0,i.kt)("p",null,"We can make our delete request by specifying the DELETE verb in Postman and making an API call to the following URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals/1"),". This will delete Matilda the Woolly Mammoth, just like time did."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sending a DELETE request to `http://localhost:5000/api/animals/1` using Postman.",src:n(91737).Z,width:"701",height:"60"})),(0,i.kt)("p",null,"We'll see a 204 No Content response from the API if our request is successful. "),(0,i.kt)("h3",{id:"benefits-of-restful-standards"},"Benefits of RESTful Standards"),(0,i.kt)("p",null,"Notice that we are able to have full CRUD functionality with only two URLs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://localhost:5000/api/animals\n")),(0,i.kt)("p",null,"and"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://localhost:5000/api/animals/1\n")),(0,i.kt)("p",null,"The benefits of RESTful standards become more readily apparent with an API. Developers don't need to search through documentation in order to surmise the correct URLs for an API. "),(0,i.kt)("p",null,"While a user of a web application might not notice that a URL in the browser is RESTful, a developer using an API certainly will notice whether the URL is RESTful and easy to work with. We should always keep the names of our endpoints as RESTful as possible."),(0,i.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,i.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-6-cretaceous-park-api-csharp-net6/tree/2_crud_functionality"},(0,i.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for Cretaceous Park API: ",(0,i.kt)("inlineCode",{parentName:"a"},"2_crud_functionality")))))}c.isMDXComponent=!0},91737:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},19666:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aspnet-web-api-postman-put-request-with-body-50327a27762b51316936ec4d4e07271d.png"}}]);