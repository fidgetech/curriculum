"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[82625],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"\ud83d\udcd3 3.5.2.1 Making an API Call with RestSharp",day:"tuesday",id:"3-5-2-1-making-an-api-call-with-restsharp",hide_table_of_contents:!0},r=void 0,l={unversionedId:"c-and-net/authentication-with-identity/3-5-2-1-making-an-api-call-with-restsharp",id:"c-and-net/authentication-with-identity/3-5-2-1-making-an-api-call-with-restsharp",title:"\ud83d\udcd3 3.5.2.1 Making an API Call with RestSharp",description:"In this lesson, we'll learn how to make an API call with a console application and a popular REST API client library called RestSharp. We will start with a console application in order to focus on learning the basic process of making an API call and parsing the response. Then we'll practice making API calls from an ASP.NET Core MVC app.",source:"@site/docs/3_c-and-net/5_authentication-with-identity/AN-3-5-2-1-making-an-api-call-with-restsharp.md",sourceDirName:"3_c-and-net/5_authentication-with-identity",slug:"/c-and-net/authentication-with-identity/3-5-2-1-making-an-api-call-with-restsharp",permalink:"/v1/c-and-net/authentication-with-identity/3-5-2-1-making-an-api-call-with-restsharp",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.5.2.1 Making an API Call with RestSharp",day:"tuesday",id:"3-5-2-1-making-an-api-call-with-restsharp",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.5.1.4 Jokes and Appropriate Humor",permalink:"/v1/c-and-net/authentication-with-identity/3-5-1-4-jokes-and-appropriate-humor"},next:{title:"\ud83d\udcd3 3.5.2.2 Deserializing API Responses with Newtonsoft.Json",permalink:"/v1/c-and-net/authentication-with-identity/3-5-2-2-deserializing-api-responses-with-newtonsoft-json"}},s={},p=[{value:"Project Setup",id:"project-setup",level:2},{value:"Creating Basic Project Files and Folders",id:"creating-basic-project-files-and-folders",level:3},{value:"A Few Notes on Using the <code>dotnet new</code> Scaffolding Tool",id:"a-few-notes-on-using-the-dotnet-new-scaffolding-tool",level:3},{value:"Add RestSharp",id:"add-restsharp",level:3},{value:"Create an Environment Variable for the API Key",id:"create-an-environment-variable-for-the-api-key",level:3},{value:"Adding Code To Make An API Call",id:"adding-code-to-make-an-api-call",level:2},{value:"Run the Program",id:"run-the-program",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],c={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll learn how to make an API call with a console application and a popular REST API client library called ",(0,o.kt)("a",{parentName:"p",href:"https://restsharp.dev/"},"RestSharp"),". We will start with a console application in order to focus on learning the basic process of making an API call and parsing the response. Then we'll practice making API calls from an ASP.NET Core MVC app.  "),(0,o.kt)("p",null,"In the following lessons we'll also learn how to deserialize the JSON that's returned from (most) API calls. Throughout the lessons, we'll learn how to protect our API keys. "),(0,o.kt)("h2",{id:"project-setup"},"Project Setup"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We'll use the New York Times' Top Stories API for this example project. In order to use the Top Stories API, you'll need to create a free ",(0,o.kt)("a",{parentName:"p",href:"https://developer.nytimes.com/"},"New York Times developer account"),". Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.nytimes.com/get-started"},"Get Started")," steps to create an application and get your own API key. We recommend doing this first as API keys can sometimes take a little while to become activated."),(0,o.kt)("h3",{id:"creating-basic-project-files-and-folders"},"Creating Basic Project Files and Folders"),(0,o.kt)("p",null,"For this example project you may build your own console app from scratch or use the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," project scaffolding tool. A tool that scaffolds a project for us builds the folders and files with some boilerplate code, and it's a handy way to get started quickly on a new project. We'll use this tool again in future projects, so you will have a chance to practice with it at some point. More information on using the scaffolding tool is below. "),(0,o.kt)("p",null,"If you opt to build your own console app from scratch, build out this project structure to start and make sure to add the appropriate code to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConsoleApiCall.csproj")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ConsoleApiCall\n\u251c\u2500\u2500 Models/\n\u251c\u2500\u2500 Program.cs\n\u2514\u2500\u2500 ConsoleApiCall.csproj\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't initialize or save your changes to Git until you've completed the setup steps for protecting your API key.")," "),(0,o.kt)("h3",{id:"a-few-notes-on-using-the-dotnet-new-scaffolding-tool"},"A Few Notes on Using the ",(0,o.kt)("inlineCode",{parentName:"h3"},"dotnet new")," Scaffolding Tool"),(0,o.kt)("p",null,"To use the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," project scaffolding tool, open the command line, navigate to your desktop or another destination folder, and enter in the following command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet new console -o ConsoleApiCall -f net6.0\n")),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"-o"),' flag allows us to specify the "output directory", the directory where all of the scaffolded files will be added. The ',(0,o.kt)("inlineCode",{parentName:"p"},"-f")," flag allows us to specify the framework version we want our project to use."),(0,o.kt)("p",null,"It's also important to note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," scaffolding tool generates its console apps with a few newer features enabled:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implicit ",(0,o.kt)("inlineCode",{parentName:"li"},"using"),"s are enabled, which allows us to avoid having to explicitly list using directives."),(0,o.kt)("li",{parentName:"ul"},"Nullable types are enabled, which allows us to use nullable types anywhere in our program. If we don't enable nullable types globally through the ",(0,o.kt)("inlineCode",{parentName:"li"},".csproj")," file, then we have to explicitly create nullable contexts with ",(0,o.kt)("inlineCode",{parentName:"li"},"#nullable enable")," in the specific locations where we want to use nullable types."),(0,o.kt)("li",{parentName:"ul"},"Top level statements are enabled, which makes it so that we don't need to explicitly include the entry point's ",(0,o.kt)("inlineCode",{parentName:"li"},"Main()")," method. Note that only one class in our project can have this method, and usually it is ",(0,o.kt)("inlineCode",{parentName:"li"},"Program"),". ")),(0,o.kt)("p",null,"The first two features correspond to settings that we can enable for our entire app in our project's ",(0,o.kt)("inlineCode",{parentName:"p"},".csproj"),". The third feature is always enabled, and optional:"),(0,o.kt)("div",{class:"filename"},"ConsoleApiCall.csproj"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'<Project Sdk="Microsoft.NET.Sdk">\n\n  <PropertyGroup>\n    <OutputType>Exe</OutputType>\n    <TargetFramework>net6.0</TargetFramework>\n    <ImplicitUsings>enable</ImplicitUsings>\n    <Nullable>enable</Nullable>\n  </PropertyGroup>\n\n</Project>\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We're going to opt out of these features for now.")," This is in order to..."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Understand which using directives we need to use certain tools."),(0,o.kt)("li",{parentName:"ol"},"Remind ourselves about C# console app's entry point."),(0,o.kt)("li",{parentName:"ol"},"Avoid managing nullable variables throughout our app. When nullable types are enabled, we need to explicitly list which types could be ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," in our apps, which is a lot more than you might think. For example, ",(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/api/system.console.readline?view=net-6.0"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"System.Console.ReadLine()")," method")," returns the user input, or ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," if there's nothing returned. If nullable types are enabled across our app, we would need to make sure that we're explicitly marking the variable that holds the user input as nullable: ",(0,o.kt)("inlineCode",{parentName:"li"},"string? userResponse = System.Console.ReadLine();"),". When nullable types are not enabled we don't have to do this additional work. Since we haven't spent a lot of time working with nullable types, it's easier right now to simply enable them as needed in our app, instead of as a setting for our whole app. To review more information about nullable types, start with the LearnHowToProgram.com lesson on ",(0,o.kt)("a",{parentName:"li",href:"../../c-and-net/test-driven-development-with-c/3-1-2-6-nullable-types"},"Nullable Types"),". ")),(0,o.kt)("p",null,"Make sure to remove or comment out these configurations in your ",(0,o.kt)("inlineCode",{parentName:"p"},"ConsoleApiCall.csproj"),":"),(0,o.kt)("div",{class:"filename"},"ConsoleApiCall.csproj"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'<Project Sdk="Microsoft.NET.Sdk">\n\n  <PropertyGroup>\n    <OutputType>Exe</OutputType>\n    <TargetFramework>net6.0</TargetFramework>\n    \x3c!-- <ImplicitUsings>enable</ImplicitUsings> --\x3e\n    \x3c!-- <Nullable>enable</Nullable> --\x3e\n  </PropertyGroup>\n\n</Project>\n')),(0,o.kt)("p",null,"Note that you are welcome to choose your own path with these configurations, but the instructions in these lessons will not include how using these features may affect the warning or errors you get in your app. "),(0,o.kt)("h3",{id:"add-restsharp"},"Add RestSharp"),(0,o.kt)("p",null,"Next, Let's add the RestSharp package to our project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet add package RestSharp --version 108.0.3\n")),(0,o.kt)("h3",{id:"create-an-environment-variable-for-the-api-key"},"Create an Environment Variable for the API Key"),(0,o.kt)("p",null,"The last step for setup is to protect our API key in an environment variable. There are many ways we can do this, and we'll take a simple approach in this lesson."),(0,o.kt)("p",null,"First, we'll create a ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," with the file and folders listed within that we do not want tracked in our Git history:"),(0,o.kt)("div",{class:"filename"},".gitignore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"EnvironmentVariables.cs\nobj\nbin\n")),(0,o.kt)("p",null,"Next, we'll commit the change we made to our ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," to our Git history."),(0,o.kt)("p",null,"Next, let's create the file that we've ignored. It's in this file that we'll put our API key."),(0,o.kt)("div",{class:"filename"},"EnvironmentVariables.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace ConsoleApiCall.Keys\n{\n  public static class EnvironmentVariables\n  {\n    public static string ApiKey = "[YOUR-API-KEY-HERE]";\n  }\n}\n')),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},'"[YOUR-API-KEY-HERE]"')," with your own API key. "),(0,o.kt)("p",null,"Wherever we need to use our API key in our application we can do so by adding a using directive for ",(0,o.kt)("inlineCode",{parentName:"p"},"ConsoleApiCall.Keys")," and calling ",(0,o.kt)("inlineCode",{parentName:"p"},"EnvironmentVariables.ApiKey"),". We'll do just that later in this lesson."),(0,o.kt)("p",null,"Keep in mind that this is very basic protection for our API key. We could still accidentally commit our API key to our Git history and publish it to the web.  To learn about other ways we can manage secrets, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-6.0"},"MS Docs on application secrets"),"."),(0,o.kt)("h2",{id:"adding-code-to-make-an-api-call"},"Adding Code To Make An API Call"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConsoleApiCall/")," project directory in VS Code and we'll get started. The ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," command has already added a basic ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," file for us: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// See https://aka.ms/new-console-template for more information\nConsole.WriteLine("Hello, World!");\n')),(0,o.kt)("p",null,"Take note that the code in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," is making use of top-level statements and implicit using directives, which allows us to omit the ",(0,o.kt)("inlineCode",{parentName:"p"},"Main()")," method and not explicitly include the ",(0,o.kt)("inlineCode",{parentName:"p"},"using System;")," namespace directive to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Console.WriteLine()")," method."),(0,o.kt)("p",null,"Let's update ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," to include basic code to make an API call. We'll also explicitly list all of our using directives and our ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.Main()")," method, the entry point to our C# console applications."),(0,o.kt)("p",null,"Here's how we'll update ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),":"),(0,o.kt)("div",{class:"filename"},"Program.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Threading.Tasks;\nusing RestSharp;\nusing ConsoleApiCall.Keys;\n\nnamespace ApiTest\n{\n  class Program \n  {\n    static void Main()\n    {\n      Task<string> apiCallTask = ApiHelper.ApiCall(EnvironmentVariables.ApiKey);\n      string result = apiCallTask.Result;\n      Console.WriteLine(result);\n    }\n  }\n\n  class ApiHelper\n  {\n    public static async Task<string> ApiCall(string apiKey)\n    {\n      RestClient client = new RestClient("https://api.nytimes.com/svc/topstories/v2");\n      RestRequest request = new RestRequest($"home.json?api-key={apiKey}", Method.Get);\n      RestResponse response = await client.ExecuteAsync(request);\n      return response.Content;\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Let's take time to understand this new code, and then try running it afterwards. "),(0,o.kt)("p",null,"We'll first take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiCall")," static method that we've created:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We create a class called ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiHelper")," that contains a static method ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiCall")," which takes an ",(0,o.kt)("inlineCode",{parentName:"p"},"apiKey")," parameter.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We want our API calls to run asynchronously so that the application is responsive and free to run other tasks while the HTTP request/response loop executes. In order to achieve this, we add the ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," keyword to our method declaration.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Whenever a method is declared as ",(0,o.kt)("inlineCode",{parentName:"p"},"async"),", we need to return a ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," type. We specify the return type of our Task object (a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),") in the angle brackets, but a generic ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," can also be returned.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Note that we use the base URL ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://api.nytimes.com/svc/topstories/v2"},"https://api.nytimes.com/svc/topstories/v2"))," from the Top Stories API. We instantiate a RestSharp ",(0,o.kt)("inlineCode",{parentName:"p"},"RestClient")," object and store the connection in a variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"client"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Next, we create a ",(0,o.kt)("inlineCode",{parentName:"p"},"RestRequest")," object. This is our actual request. We include the path to the endpoint we are looking for (",(0,o.kt)("inlineCode",{parentName:"p"},"home.json"),") along with our API key.  We also specify that we will be using a GET Http method.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Note that we utilize C#'s string interpolation to place the ",(0,o.kt)("inlineCode",{parentName:"p"},"apiKey")," variable into the ",(0,o.kt)("inlineCode",{parentName:"p"},"RestRequest")," by placing a ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," before a string and then placing any interpolated values in curly braces.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Then we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," keyword to specify that we need to receive a result before we attempt to define ",(0,o.kt)("inlineCode",{parentName:"p"},"response"),". We call the ",(0,o.kt)("inlineCode",{parentName:"p"},"RestClient"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecuteAsync")," method and pass in our request object.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Finally, we return the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"RestResponse response")," variable, which is a string representation of the response content."))),(0,o.kt)("p",null,"Now, let's take a a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.Main()")," method:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Main()")," method, we create a variable to store the returned ",(0,o.kt)("inlineCode",{parentName:"p"},"Task<string>")," from our ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," function and then call the ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiHelper")," class' ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiCall")," method. It's here that we pass in our New York Times API key via our environment variable  ",(0,o.kt)("inlineCode",{parentName:"p"},"EnvironmentVariables.ApiKey"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Then, we create a variable to store the ",(0,o.kt)("inlineCode",{parentName:"p"},"Result")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Task"),", which in our case is a string representation of the API call's response content.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Lastly, we write the result to the console."))),(0,o.kt)("h2",{id:"run-the-program"},"Run the Program"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Next, run the program with ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet run"),". We'll get a long, very dense response that has all the data for the New York Times' top stories."),(0,o.kt)("p",null,"To make better sense of this data, we can paste the response into a JSON formatter like this ",(0,o.kt)("a",{parentName:"p",href:"http://jsonviewer.stack.hu/"},"one"),'. Copy the data into the formatter and then click the "Format" button. Of course, Postman can help us read this data, too.'),(0,o.kt)("p",null,"However, this isn't an ideal way to deal with API responses. In the next lesson, we'll learn how to parse and deserialize JSON data in our C# applications."),(0,o.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,o.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/c-sharp-newyorktimes-api-call/tree/1_api_call_in_console_app"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for Sample New York Times API Call: ",(0,o.kt)("inlineCode",{parentName:"a"},"1_api_call_in_console_app")))))}h.isMDXComponent=!0}}]);