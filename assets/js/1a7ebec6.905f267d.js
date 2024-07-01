"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[31446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,u=h["".concat(s,".").concat(d)]||h[d]||m[d]||o;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"\ud83d\udcd3 3.1.1.4- Try/Catch Blocks",day:"monday",id:"3-1-1-4--trycatch-blocks",hide_table_of_contents:!0},i=void 0,l={unversionedId:"c-and-net/test-driven-development-with-c/3-1-1-4--trycatch-blocks",id:"version-1.1/c-and-net/test-driven-development-with-c/3-1-1-4--trycatch-blocks",title:"\ud83d\udcd3 3.1.1.4- Try/Catch Blocks",description:'When our application throws an error, the program is throwing an exception. Almost every time the compiler throws an error, it uses the term "exception." An exception occurs when we execute or interact with a program that results in the program crashing.',source:"@site/versioned_docs/version-1.1/3_c-and-net/1_test-driven-development-with-c/AE-3-1-1-4--trycatch-blocks.md",sourceDirName:"3_c-and-net/1_test-driven-development-with-c",slug:"/c-and-net/test-driven-development-with-c/3-1-1-4--trycatch-blocks",permalink:"/v1.1/c-and-net/test-driven-development-with-c/3-1-1-4--trycatch-blocks",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 3.1.1.4- Try/Catch Blocks",day:"monday",id:"3-1-1-4--trycatch-blocks",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.1.1.3- Overloading Constructors and Methods",permalink:"/v1.1/c-and-net/test-driven-development-with-c/3-1-1-3--overloading-constructors-and-methods"},next:{title:"\ud83d\udcd3 3.1.1.5- More Built-In C# Classes and Tips for Using the MS Docs",permalink:"/v1.1/c-and-net/test-driven-development-with-c/3-1-1-5--more-built-in-c-classes-and-tips-for-using-the-ms-docs"}},s={},c=[{value:"Try/Catch Blocks",id:"trycatch-blocks",level:2},{value:"Example",id:"example",level:3},{value:"A Note on Composite Formatting",id:"a-note-on-composite-formatting",level:3},{value:"Another Try/Catch Example",id:"another-trycatch-example",level:3}],p={toc:c},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When our application throws an error, the program is ",(0,r.kt)("strong",{parentName:"p"},"throwing an exception"),'. Almost every time the compiler throws an error, it uses the term "exception." An ',(0,r.kt)("strong",{parentName:"p"},"exception")," occurs when we execute or interact with a program that results in the program crashing."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exception handling"),' refers to the act of coding a program to handle exceptions in a manner that doesn\'t lead to the application crashing. When an exception is thrown, we can program our application to "catch" and handle the exception appropriately. We can do this with a ',(0,r.kt)("strong",{parentName:"p"},"try/catch block"),". As we'll see C# try/catch blocks offer the same functionality as try/catch blocks in JavaScript."),(0,r.kt)("h2",{id:"trycatch-blocks"},"Try/Catch Blocks"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"When an exception is thrown, the CLR (Common Language Runtime) automatically looks for a ",(0,r.kt)("strong",{parentName:"p"},"catch")," statement to handle the exception. If no catch statement is found, the exception is considered ",(0,r.kt)("strong",{parentName:"p"},"unhandled")," and the execution of the program halts. In other words, our program crashes."),(0,r.kt)("p",null,"We can manually add code to tell our application how to handle exceptions in try/catch blocks. The ",(0,r.kt)("strong",{parentName:"p"},"try")," part is where we put the code that ",(0,r.kt)("em",{parentName:"p"},"may")," cause an exception. If everything is fine and no exception is thrown, the application simply moves on. If an exception ",(0,r.kt)("em",{parentName:"p"},"is")," thrown, the program will automatically run the code in the ",(0,r.kt)("strong",{parentName:"p"},"catch")," part to handle that exception."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"catch")," blocks can take an ",(0,r.kt)("inlineCode",{parentName:"p"},"Exception")," object as a parameter, which can help handle exceptions even more effectively. ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.exception?view=net-6.0"},"The ",(0,r.kt)("inlineCode",{parentName:"a"},"Exception")," class")," has a number of useful properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Message"),": a short description of the exception;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Source"),": the application name;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StackTrace"),": the path to what caused the exception;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TargetSite"),": the name of the method where the exception occurred.")),(0,r.kt)("p",null,"Also note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Exception")," class lives in the ",(0,r.kt)("inlineCode",{parentName:"p"},"System")," namespace, so we'll need to include the using directive ",(0,r.kt)("inlineCode",{parentName:"p"},"using System;")," wherever we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Exception")," class."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's work through an example of how we could use a try/catch block. Note that the following example is adapted from the ",(0,r.kt)("a",{parentName:"p",href:"http://www.dotnetperls.com/exception"},"Exception Handling Tutorial on dotnetperls"),"."),(0,r.kt)("div",{class:"filename"},"DivideByZero.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\n\nclass Program\n{\n  static void Main()\n  {\n    try\n    {\n      int value = 1 / int.Parse("0");\n    }\n    catch (Exception ex)\n    {\n      Console.WriteLine("Message = {0}", ex.Message);\n      Console.WriteLine("Source = {0}", ex.Source);\n      Console.WriteLine("StackTrace = {0}", ex.StackTrace);\n      Console.WriteLine("TargetSite = {0}", ex.TargetSite);\n    }\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This program is going to ",(0,r.kt)("em",{parentName:"p"},"try")," to return the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," of an integer that's divided by zero. Everything compiles as expected but when we actually try to run the program and divide by zero, an exception is thrown because it isn't possible to divide by zero.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Normally this exception would halt the program entirely. However, because the code throwing an exception resides in the ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," of our try/catch block, C# will automatically run the code within the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," portion in an attempt to gracefully handle the exception.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The code in ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," logs details about the exception to the console instead of halting the program entirely. "))),(0,r.kt)("p",null,"Compiling and running this program would result in the following output in the console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Message = Attempted to divide by zero.\nSource = DivideByZero\nStackTrace =    at Program.Main()\nTargetSite = Void Main()\n")),(0,r.kt)("p",null,"So even though our code has an exception in it, we've successfully handled it in our try/catch block!"),(0,r.kt)("h3",{id:"a-note-on-composite-formatting"},"A Note on Composite Formatting"),(0,r.kt)("p",null,"Notice how we pass in two arguments to each ",(0,r.kt)("inlineCode",{parentName:"p"},"Console.WriteLine()")," method call, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'Console.WriteLine("StackTrace = {0}", ex.StackTrace);\n')),(0,r.kt)("p",null,"The second argument ",(0,r.kt)("inlineCode",{parentName:"p"},"ex.StackTrace")," supplies the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"{0}")," within the first argument's string. This is called a ",(0,r.kt)("strong",{parentName:"p"},"composite format string"),", in which we include ",(0,r.kt)("strong",{parentName:"p"},"format items")," in a string whose values get evaluated and set by an additional argument. Let's see another example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string name = "Stacey";\nstring age = "12";\nConsole.WriteLine("Name = {0}, Age = {1}", name, age);\n')),(0,r.kt)("p",null,"Try out the above code in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL if you like! "),(0,r.kt)("p",null,"In the above code we have a string with format items: ",(0,r.kt)("inlineCode",{parentName:"p"},'"Name = {0}, Age = {1}"'),". The format items are ",(0,r.kt)("inlineCode",{parentName:"p"},"{0}")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"{1}")," and will be replaced by the next two arguments that are passed into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Console.WriteLine()")," method, ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"age"),"."),(0,r.kt)("p",null,"To learn other ways to use composite format strings, visit ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting"},"the MS docs"),"!"),(0,r.kt)("h3",{id:"another-trycatch-example"},"Another Try/Catch Example"),(0,r.kt)("p",null,"We now have a sense of how try/catch blocks work, so let's see how we can use try/catch within the Shape Tracker console app. "),(0,r.kt)("p",null,"Right now, we can get an unhandled exception if a user does NOT put in numbers when our program requests three sides. Check it out:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*\nWelcome to the Shape Tracker app!\nWe'll calculate what type of triangle you have based off of the lengths of the triangle's 3 sides.\nPlease enter a number:\na\nEnter another number:\nf\nEnter a third number:\ng\nUnhandled exception. System.FormatException: Input string was not in a correct format.\n   at System.Number.ThrowOverflowOrFormatException(ParsingStatus status, TypeCode type)    \n   at System.Int32.Parse(String s)\n   at ShapeTracker.Program.Main() in C:\\Users\\brook\\Desktop\\csharp-sect-1\\shp\\8\\private-ver2-shapetracker\\ShapeTracker\\Program.cs:line 19\n")),(0,r.kt)("p",null,"The above unhandled exception is generated when we try to parse the ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," user input into ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"int.Parse()")," static method. This makes sense \u2014 we can't parse ",(0,r.kt)("inlineCode",{parentName:"p"},'"a"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"g"')," into a number!!"),(0,r.kt)("p",null,"So let's see how a try/catch block can add the right error handling in this situation:"),(0,r.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      Console.WriteLine("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*");\n      Console.WriteLine("Welcome to the Shape Tracker app!");\n      Console.WriteLine("We\'ll calculate what type of triangle you have based off of the lengths of the triangle\'s 3 sides.");\n      Console.WriteLine("Please enter a number:");\n      string stringNumber1 = Console.ReadLine();  \n      Console.WriteLine("Enter another number:");\n      string stringNumber2 = Console.ReadLine();  \n      Console.WriteLine("Enter a third number:");\n      string stringNumber3 = Console.ReadLine();  \n      try\n      {\n        int length1 = int.Parse(stringNumber1);  \n        int length2 = int.Parse(stringNumber2);  \n        int length3 = int.Parse(stringNumber3);\n        Triangle tri = new Triangle(length1, length2, length3);\n        ConfirmOrEditTriangle(tri);  \n      }\n      catch\n      {\n        Console.WriteLine("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");\n        Console.WriteLine("ERROR: Please only enter in numbers! Special symbols and alphabetic characters will not be accepted.");\n        Console.WriteLine("Please try again...");\n        Main();\n      }\n    }\n\n    ... // other code omitted for brevity!\n  }\n}\n')),(0,r.kt)("p",null,"We've added the code that could throw an unhandled exception within a ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block. "),(0,r.kt)("p",null,"If our code works as expected, like when a user only enters strings with a number like ",(0,r.kt)("inlineCode",{parentName:"p"},'"3"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"5000"'),", those strings will be parsed correctly and our application's logic will continue creating a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," instance and calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfirmOrEditTriangle()")," method."),(0,r.kt)("p",null,"If our code fails, like when a user enters anything other than a string with a number in it, like ",(0,r.kt)("inlineCode",{parentName:"p"},'"s"'),", then the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block will be run. Within our catch block, we let the user know what went wrong and we call ",(0,r.kt)("inlineCode",{parentName:"p"},"Main()")," again to start the program over. "),(0,r.kt)("p",null,"Notice that we don't use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Exception")," class within the catch block. Well, you don't have to! You should always do what makes sense for your app, and sometimes we can write more human-understandable error messages than the compiler generates. "),(0,r.kt)("p",null,"If we did want to incorporate the runtime error message, we could do something like this:"),(0,r.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      Console.WriteLine("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*");\n      Console.WriteLine("Welcome to the Shape Tracker app!");\n      Console.WriteLine("We\'ll calculate what type of triangle you have based off of the lengths of the triangle\'s 3 sides.");\n      Console.WriteLine("Please enter a number:");\n      string stringNumber1 = Console.ReadLine();  \n      Console.WriteLine("Enter another number:");\n      string stringNumber2 = Console.ReadLine();  \n      Console.WriteLine("Enter a third number:");\n      string stringNumber3 = Console.ReadLine();  \n      try\n      {\n        int length1 = int.Parse(stringNumber1);  \n        int length2 = int.Parse(stringNumber2);  \n        int length3 = int.Parse(stringNumber3);\n        Triangle tri = new Triangle(length1, length2, length3);\n        ConfirmOrEditTriangle(tri);  \n      }\n      catch (Exception ex)\n      {\n        Console.WriteLine("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");\n        Console.WriteLine("ERROR: {0}", ex.Message);\n        Console.WriteLine("Please only enter in numbers! Special symbols and alphabetic characters will not be accepted.");\n        Console.WriteLine("Please try again...");\n        Main();\n      }\n    }\n\n    ... // other code omitted for brevity!\n  }\n}\n')))}m.isMDXComponent=!0}}]);