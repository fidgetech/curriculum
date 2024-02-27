"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[98902],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?a.createElement(f,r(r({ref:n},d),{},{components:t})):a.createElement(f,r({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42330:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const i={title:"\ud83d\udcd3 3.0.0.31 Configuration Reference and Review of C# Conventions",day:"weekend",id:"3-0-0-31-configuration-reference-and-review-of-c-conventions",hide_table_of_contents:!0,paginationNext:null},r=void 0,l={unversionedId:"c-and-net/lessons-19-31-basic-console-apps/3-0-0-31-configuration-reference-and-review-of-c-conventions",id:"c-and-net/lessons-19-31-basic-console-apps/3-0-0-31-configuration-reference-and-review-of-c-conventions",title:"\ud83d\udcd3 3.0.0.31 Configuration Reference and Review of C# Conventions",description:"In this lesson, we're going to review the C# style conventions that we've learned about so far. This lesson also includes a configuration and project structure reference that you can use in all of your future console app projects.",source:"@site/docs/3_c-and-net/0_lessons-19-31-basic-console-apps/AM-3-0-0-31-configuration-reference-and-review-of-c-conventions.md",sourceDirName:"3_c-and-net/0_lessons-19-31-basic-console-apps",slug:"/c-and-net/lessons-19-31-basic-console-apps/3-0-0-31-configuration-reference-and-review-of-c-conventions",permalink:"/c-and-net/lessons-19-31-basic-console-apps/3-0-0-31-configuration-reference-and-review-of-c-conventions",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.0.0.31 Configuration Reference and Review of C# Conventions",day:"weekend",id:"3-0-0-31-configuration-reference-and-review-of-c-conventions",hide_table_of_contents:!0,paginationNext:null},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.0.0.30 Console App Project Structure: How to Add More Code Files",permalink:"/c-and-net/lessons-19-31-basic-console-apps/3-0-0-30-console-app-project-structure-how-to-add-more-code-files"},next:{title:"\ud83d\udcd3 3.0.0.32 What We'll Learn in this Section",permalink:"/c-and-net/lessons-32-44-tdd-and-debugging/3-0-0-32-what-well-learn-in-this-section"}},s={},c=[{value:"Style Conventions",id:"style-conventions",level:2},{value:"Indentation and Spacing",id:"indentation-and-spacing",level:3},{value:"Capitalization and Naming",id:"capitalization-and-naming",level:3},{value:"Other Conventions",id:"other-conventions",level:3},{value:"Configuration and File Structure Reference",id:"configuration-and-file-structure-reference",level:2},{value:"Reminder: Commit Your <code>.gitignore</code> First!",id:"reminder-commit-your-gitignore-first",level:3},{value:"<code>.csproj</code> Files",id:"csproj-files",level:3},{value:"Build Folders",id:"build-folders",level:3},{value:"Code Files: User Interface Logic in <code>Program.cs</code>",id:"code-files-user-interface-logic-in-programcs",level:3},{value:"Code Files: Business Logic in the <code>Models</code> subdirectory",id:"code-files-business-logic-in-the-models-subdirectory",level:3},{value:"Organizing More Code Files",id:"organizing-more-code-files",level:3}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we're going to review the C# style conventions that we've learned about so far. This lesson also includes a configuration and project structure reference that you can use in all of your future console app projects."),(0,o.kt)("h2",{id:"style-conventions"},"Style Conventions"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In order to become good programmers, we need to use a consistent coding style. When our code is consistent, we can focus on what the code does instead of how it's written. Errors are more apparent when debugging and it's easier to collaborate with other developers."),(0,o.kt)("p",null,"Here are some general C# coding guidelines to follow from the .NET docs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/identifier-names"},"C# Naming Conventions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions"},"C# Coding Conventions"))),(0,o.kt)("h3",{id:"indentation-and-spacing"},"Indentation and Spacing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each brace should begin on a new line. This is called ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Indent_style#Allman_style"},"Allman Style"),". A single line statement block can go without braces but the block must be properly indented on its own line and must not be nested in other statement blocks that use braces."),(0,o.kt)("li",{parentName:"ul"},"Avoid more than one empty line at any time. For example, do not have two blank lines between members of a type."),(0,o.kt)("li",{parentName:"ul"},"Avoid free spaces. For example, avoid ",(0,o.kt)("inlineCode",{parentName:"li"},"if (someVar == 0) . . ."),", where the dots mark the extra free spaces."),(0,o.kt)("li",{parentName:"ul"},"Be consistent in your use of indentation. At Epicodus, we use two spaces of indentation while the .NET documentation recommends four spaces of indentation. There are advantages to both approaches. One advantage of two spaces is that a line of code is less likely to run past the width of a text editor. An advantage of four spaces is that some developers believe it's easier to read. Ultimately, it's a matter of preference \u2014 and being consistent with the standards of your workplace. At Epicodus, use two spaces unless you and your pair agree to use four. (You may use either two or four on independent projects.)")),(0,o.kt)("h3",{id:"capitalization-and-naming"},"Capitalization and Naming"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use PascalCase for:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"public field names"),(0,o.kt)("li",{parentName:"ul"},"public property names"),(0,o.kt)("li",{parentName:"ul"},"class names"),(0,o.kt)("li",{parentName:"ul"},"method names"),(0,o.kt)("li",{parentName:"ul"},"namespaces"),(0,o.kt)("li",{parentName:"ul"},"file names"),(0,o.kt)("li",{parentName:"ul"},"directory names"))),(0,o.kt)("li",{parentName:"ul"},"Use lowerCamelCase for all method parameters and local variables."),(0,o.kt)("li",{parentName:"ul"},"Prepend an underscore ",(0,o.kt)("inlineCode",{parentName:"li"},"_")," and use lowerCamelCase for all private field names."),(0,o.kt)("li",{parentName:"ul"},"Namespace names should be separated by a period, as in ",(0,o.kt)("inlineCode",{parentName:"li"},"ShapeTracker.Models")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"ShapeTracker.UserInterfaceModels"),".")),(0,o.kt)("h3",{id:"other-conventions"},"Other Conventions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Always specify the visibility, even if it is the default. For example, we should say ",(0,o.kt)("inlineCode",{parentName:"li"},"private string Description"),", not ",(0,o.kt)("inlineCode",{parentName:"li"},"string Description"),"."),(0,o.kt)("li",{parentName:"ul"},"Always declare the variable type, including if that type is a class. For example, we should use the code ",(0,o.kt)("inlineCode",{parentName:"li"},"Item newItem = new Item(...)"),", since the type of ",(0,o.kt)("inlineCode",{parentName:"li"},"newItem")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"Item"),". We should not use the code ",(0,o.kt)("inlineCode",{parentName:"li"},"var newItem = new Item(...)")," since the type of ",(0,o.kt)("inlineCode",{parentName:"li"},"newItem")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"Item"),". In general, ",(0,o.kt)("inlineCode",{parentName:"li"},"var")," is too vague and shouldn't be used."),(0,o.kt)("li",{parentName:"ul"},"Namespace imports should be specified at the top of the file, outside of namespace declarations, and should be sorted alphabetically."),(0,o.kt)("li",{parentName:"ul"},"Semicolons are required after all statements.")),(0,o.kt)("h2",{id:"configuration-and-file-structure-reference"},"Configuration and File Structure Reference"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"C# console apps should follow certain naming conventions and file structure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There should be a parent directory named ",(0,o.kt)("inlineCode",{parentName:"li"},"ProjectName.Solution"),". Our solution directory will contain our project's production directory, as well as a testing directory that we'll add in the next pre-work section. ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"While we don't have to use ",(0,o.kt)("inlineCode",{parentName:"li"},"ProjectName.Solution"),", it's still common to have a parent directory named at least ",(0,o.kt)("inlineCode",{parentName:"li"},"ProjectName"),"."))),(0,o.kt)("li",{parentName:"ul"},"Within the parent directory we should include a ",(0,o.kt)("inlineCode",{parentName:"li"},"README.md")," and ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore"),". The ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," should include ",(0,o.kt)("inlineCode",{parentName:"li"},"obj")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"bin"),", which are auto-generated files from the compilation process."),(0,o.kt)("li",{parentName:"ul"},"Within the parent directory, we'll add a subdirectory for the production code:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ProjectName")))),(0,o.kt)("li",{parentName:"ul"},"Within the ",(0,o.kt)("inlineCode",{parentName:"li"},"ProjectName")," subdirectory, we'll add the following files and folders:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"ProjectName.csproj")," file, which will contain our project's configurations and required resources."),(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"Program.cs")," file, which will contain our project's user interface logic as well as the entry point to our application."),(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"Models")," subdirectory, which will contain any business logic files."))),(0,o.kt)("li",{parentName:"ul"},"When you are ready to create business logic files, they should be added to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Models")," subdirectory, and named in one of two ways:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"After the class it contains, as in ",(0,o.kt)("inlineCode",{parentName:"li"},"Triangle.cs")," contains a ",(0,o.kt)("inlineCode",{parentName:"li"},"Triangle")," class."),(0,o.kt)("li",{parentName:"ul"},"A plural name that generally represents the multiple classes that the file contains, as in ",(0,o.kt)("inlineCode",{parentName:"li"},"Helpers.cs")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Banners.cs"),"."),(0,o.kt)("li",{parentName:"ul"},"Include a ",(0,o.kt)("inlineCode",{parentName:"li"},"public")," access modifier so the business logic file can be accessible to tests, which will live in a separate assembly. (We'll learn about testing in the next pre-work section.)")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is standard naming convention and should be followed in all projects."),"  "),(0,o.kt)("p",null,"After following these steps, the directory should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ProjectName.Solution/\n  \u251c\u2500\u2500 ProjectName/\n  \u2502     \u251c\u2500\u2500 Models/\n  \u2502     \u2502     \u2514\u2500\u2500 ClassName.cs\n  \u2502     \u251c\u2500\u2500 ProjectName.csproj\n  \u2502     \u2514\u2500\u2500 Program.cs\n  \u251c\u2500\u2500 .gitignore\n  \u2514\u2500\u2500 README.md\n")),(0,o.kt)("h3",{id:"reminder-commit-your-gitignore-first"},"Reminder: Commit Your ",(0,o.kt)("inlineCode",{parentName:"h3"},".gitignore")," First!"),(0,o.kt)("p",null,"This is a friendly reminder to make sure that you set up and commit your ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," first after you initialize Git in your projects. Doing so ensures that you are ignoring the files you don't want saved to your remote GitHub repo first."),(0,o.kt)("p",null,"Your ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," should look like this:"),(0,o.kt)("div",{class:"filename"},"ProjectName.Solution/.gitignore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"obj\nbin\n")),(0,o.kt)("h3",{id:"csproj-files"},(0,o.kt)("inlineCode",{parentName:"h3"},".csproj")," Files"),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},".csproj"),' file is the "project file" and it lists project-wide configurations as well as all outside packages or dependencies our project requires. In this course section, our ',(0,o.kt)("inlineCode",{parentName:"p"},".csproj")," files will contain the following boilerplate code:"),(0,o.kt)("div",{class:"filename"},"ProjectName.Solution/ProjectName/ProjectName.csproj"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'<Project Sdk="Microsoft.NET.Sdk">\n\n  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n    <OutputType>Exe</OutputType>\n  </PropertyGroup>\n\n</Project>\n')),(0,o.kt)("h3",{id:"build-folders"},"Build Folders"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"obj")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," folders are generated automatically when you run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet build"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," directory contains our compiled output code. The ",(0,o.kt)("inlineCode",{parentName:"p"},"obj")," directory contains the resources our code needs. "),(0,o.kt)("p",null,"These folders are always located in the same folder as your project (",(0,o.kt)("inlineCode",{parentName:"p"},".csproj"),") file. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ProjectName.Solution/\n  \u251c\u2500\u2500 ProjectName/\n  \u2502     \u251c\u2500\u2500 bin/\n  \u2502     \u251c\u2500\u2500 Models/\n  \u2502     \u2502     \u2514\u2500\u2500 ClassName.cs\n  \u2502     \u251c\u2500\u2500 obj/\n  \u2502     \u251c\u2500\u2500 ProjectName.csproj\n  \u2502     \u2514\u2500\u2500 Program.cs\n  \u251c\u2500\u2500 .gitignore\n  \u2514\u2500\u2500 README.md\n")),(0,o.kt)("p",null,"We won't spend much time learning about these folders or look at their contents. Since these folders are auto-generated, we won't include them in project file/folder structure examples. "),(0,o.kt)("h3",{id:"code-files-user-interface-logic-in-programcs"},"Code Files: User Interface Logic in ",(0,o.kt)("inlineCode",{parentName:"h3"},"Program.cs")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," contains our user interface logic as well as the entry point to our application, the ",(0,o.kt)("inlineCode",{parentName:"p"},"static void Main()")," method. Here's the boilerplate for ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),":"),(0,o.kt)("div",{class:"filename"},"ProjectName.Solution/ProjectName/Program.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ProjectName\n{\n  class Program\n  {\n    static void Main()\n    {\n      // UI code goes here.\n    }\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The standard namespace name for our program's entry point is ",(0,o.kt)("inlineCode",{parentName:"strong"},"ProjectName"),".")," However, we can give it a more specific namespace like ",(0,o.kt)("inlineCode",{parentName:"p"},"ProjectName.UserInterface")," or something else."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," does not need to be called ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),", nor does the class name need to be ",(0,o.kt)("inlineCode",{parentName:"p"},"Program"),", however this is a very standard practice."),(0,o.kt)("h3",{id:"code-files-business-logic-in-the-models-subdirectory"},"Code Files: Business Logic in the ",(0,o.kt)("inlineCode",{parentName:"h3"},"Models")," subdirectory"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Models")," directory should contain all of our business logic files. We'll follow the practice of having one business logic class per file, but it's totally okay to include multiple classes within a single file. "),(0,o.kt)("p",null,"The naming convention for business logic files and classes is for the name of the class to match the name of the file, as in ",(0,o.kt)("inlineCode",{parentName:"p"},"Triangle.cs")," contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"Triangle")," class. We also need to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," access modifier for all classes that we want accessible to tests we write (which we'll learn about in the next pre-work section.)"),(0,o.kt)("div",{class:"filename"},"ProjectName.Solution/ProjectName/Models/ClassName.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ProjectName.Models\n{\n  public class ClassName\n  {\n    // Business Logic goes here.\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The standard namespace name for all of our business logic files is ",(0,o.kt)("inlineCode",{parentName:"strong"},"ProjectName.Models"),".")),(0,o.kt)("h3",{id:"organizing-more-code-files"},"Organizing More Code Files"),(0,o.kt)("p",null,"If we want to organize more code files (UI and business logic), this is a good way to go:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All business logic files go in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Models/")," directory."),(0,o.kt)("li",{parentName:"ul"},"Create a new subdirectory within the ",(0,o.kt)("inlineCode",{parentName:"li"},"ProjectName")," directory called ",(0,o.kt)("inlineCode",{parentName:"li"},"UserInterfaceModels")," (or something similar) and add all additional user interface files within that subdirectory. "),(0,o.kt)("li",{parentName:"ul"},"It's convention for ",(0,o.kt)("inlineCode",{parentName:"li"},"Program.cs"),", the entry point to our application, to remain in the root of the production directory ",(0,o.kt)("inlineCode",{parentName:"li"},"ProjectName"),".")),(0,o.kt)("p",null,"Here's what the resulting file structure should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ProjectName.Solution/\n  \u251c\u2500\u2500 ProjectName/\n  \u2502     \u251c\u2500\u2500 Models/\n  |     |     \u251c\u2500\u2500 ClassName.cs\n  |     |     \u251c\u2500\u2500 ClassName.cs\n  \u2502     \u2502     \u2514\u2500\u2500 ClassName.cs\n  |     \u251c\u2500\u2500 UserInterfaceModels/\n  |     |     \u2514\u2500\u2500 ClassName.cs\n  \u2502     \u251c\u2500\u2500 ProjectName.csproj\n  \u2502     \u2514\u2500\u2500 Program.cs\n  \u251c\u2500\u2500 .gitignore\n  \u2514\u2500\u2500 README.md\n")))}u.isMDXComponent=!0}}]);