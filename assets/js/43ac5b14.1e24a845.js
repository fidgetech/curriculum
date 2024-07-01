"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[42675],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return t?n.createElement(g,l(l({ref:a},d),{},{components:t})):n.createElement(g,l({ref:a},d))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90614:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const i={title:"\ud83d\udcd3 3.0.0.09 Variables",day:"weekend",id:"3-0-0-09-variables",hide_table_of_contents:!0},l=void 0,o={unversionedId:"c-and-net/lessons-6-18-data-types-and-variables/3-0-0-09-variables",id:"c-and-net/lessons-6-18-data-types-and-variables/3-0-0-09-variables",title:"\ud83d\udcd3 3.0.0.09 Variables",description:"Declaring variables in C# looks slightly different from declaring variables in Javascript. We already got a sense of how variables are declared in the previous two lessons from a few code examples, but we're going to take the time to walk through this process in more detail now.",source:"@site/docs/3_c-and-net/0_lessons-6-18-data-types-and-variables/AD-3-0-0-09-variables.md",sourceDirName:"3_c-and-net/0_lessons-6-18-data-types-and-variables",slug:"/c-and-net/lessons-6-18-data-types-and-variables/3-0-0-09-variables",permalink:"/v1/c-and-net/lessons-6-18-data-types-and-variables/3-0-0-09-variables",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.0.0.09 Variables",day:"weekend",id:"3-0-0-09-variables",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.0.0.08 Integers, Decimals, and Arithmetic",permalink:"/v1/c-and-net/lessons-6-18-data-types-and-variables/3-0-0-08-integers-decimals-and-arithmetic"},next:{title:"\ud83d\udcd3 3.0.0.10 Booleans, Branching, and Operators",permalink:"/v1/c-and-net/lessons-6-18-data-types-and-variables/3-0-0-10-booleans-branching-and-operators"}},s={},p=[{value:"Variables in C#",id:"variables-in-c",level:2},{value:"Defining a C# Variable",id:"defining-a-c-variable",level:3},{value:"String Variables",id:"string-variables",level:3},{value:"Strongly-Typed Languages",id:"strongly-typed-languages",level:3},{value:"Naming Conventions",id:"naming-conventions",level:3},{value:"<code>var</code>",id:"var",level:3}],d={toc:p},c="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Declaring variables in C# looks slightly different from declaring variables in Javascript. We already got a sense of how variables are declared in the previous two lessons from a few code examples, but we're going to take the time to walk through this process in more detail now."),(0,r.kt)("h2",{id:"variables-in-c"},"Variables in C#"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"defining-a-c-variable"},"Defining a C# Variable"),(0,r.kt)("p",null,"To create a C# variable, we need three things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("strong",{parentName:"p"},"descriptive name")," so it's easy to tell what the variable represents. Our variables should always have descriptive names, regardless of the language we use.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("strong",{parentName:"p"},"data type")," such as ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," to declare what type of data the variable holds. We didn't need to do this in JavaScript because it is weakly typed. However, because C# is strongly typed, we always need to declare the data type of a variable.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An ",(0,r.kt)("strong",{parentName:"p"},"initial value")," should be set with the ",(0,r.kt)("strong",{parentName:"p"},"assignment operator")," (the ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," symbol).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The whole statement should end with a semicolon ",(0,r.kt)("inlineCode",{parentName:"p"},";"),". "))),(0,r.kt)("h3",{id:"string-variables"},"String Variables"),(0,r.kt)("p",null,"Here's an example of a string stored inside of a variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> string phrase = "Hello World";\n')),(0,r.kt)("p",null,"In the example above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"string")," is the data type our variable will be;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"phrase")," is our descriptive name;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'"Hello World"')," is the initial value;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The entire statement ends with a ",(0,r.kt)("inlineCode",{parentName:"p"},";")," semicolon."))),(0,r.kt)("p",null,"After creating this variable, we can retrieve its value by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"phrase"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> phrase\n"Hello World"\n')),(0,r.kt)("p",null,"We can also perform actions upon this variable. We could use the concatenation operator on ",(0,r.kt)("inlineCode",{parentName:"p"},"phrase")," to add another string to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> phrase + "!!!!"\n"Hello World!!!!"\n')),(0,r.kt)("h3",{id:"strongly-typed-languages"},"Strongly-Typed Languages"),(0,r.kt)("p",null,"Remember, we must always define what ",(0,r.kt)("em",{parentName:"p"},"type")," of data a variable will hold. We say ",(0,r.kt)("inlineCode",{parentName:"p"},'string phrase = "Hello World";')," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"not"))," ",(0,r.kt)("inlineCode",{parentName:"p"},'phrase = "Hello World";')),(0,r.kt)("p",null,"Similarly, we could define a variable containing an ",(0,r.kt)("strong",{parentName:"p"},"integer")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> int number = 1;\n> number\n1\n")),(0,r.kt)("p",null,"Again, ",(0,r.kt)("strong",{parentName:"p"},"C# variables must declare the type of data they contain"),". This is because C# is a ",(0,r.kt)("strong",{parentName:"p"},"strongly typed language"),", meaning it rigidly insists on consistent and explicit data types."),(0,r.kt)("p",null,"As we learned in a previous lesson, ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," is a data type for whole numbers. Because variables behave exactly like the values they store, we can use any number of arithmetic operators with variables containing integers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> number + number\n2\n\n> int bigNumber = 100;\n> bigNumber\n100;\n\n> number + bigNumber\n101\n")),(0,r.kt)("p",null,"If we do not include the data type, or do not treat the variable as the data type it is, we'll get error messages letting us know what we did wrong."),(0,r.kt)("h3",{id:"naming-conventions"},"Naming Conventions"),(0,r.kt)("p",null,"Before we wrap up, let's address naming conventions. C# variable names should always be written in ",(0,r.kt)("strong",{parentName:"p"},"lower camel case")," just like JavaScript. The first letter of the first word is lowercase, there are no spaces between words, and the first letter of any subsequent words are capitalized. It looks like this: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"myVariable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"myMultipleWordVariableName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"myEvenLongerMultiWordVariableName"))),(0,r.kt)("h3",{id:"var"},(0,r.kt)("inlineCode",{parentName:"h3"},"var")),(0,r.kt)("p",null,'The variable initializer (or "declaration statement") ',(0,r.kt)("inlineCode",{parentName:"p"},"var")," exists in the C# language, and we use it in just the same way we would in JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> var myName = "remy";\n> myName\n"remy"\n')),(0,r.kt)("p",null,"We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," in place of any more specific data type. In the above example, we could have specifically declared our ",(0,r.kt)("inlineCode",{parentName:"p"},"myName")," variable as a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". As we can see, we can instead use ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," in place of ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", and C# will do the work to figure out that ",(0,r.kt)("inlineCode",{parentName:"p"},"myName")," is in fact a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,r.kt)("p",null,"When we use the declaration statement ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),", we're using ",(0,r.kt)("strong",{parentName:"p"},"implicit typing"),", where C# determines the type. When we use the exact type, in our example ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", we're using ",(0,r.kt)("strong",{parentName:"p"},"explicit typing"),", where we're telling C# exactly what type we're using. Take note that in both cases, C# remains a strictly-typed language and declaring a type is required when we initialize new variables. Only in the case of using ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),", do we let C# do the work of figuring out the exact type."),(0,r.kt)("p",null,"You'll see ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," used in online examples a fair amount, but you won't find it often in the LearnHowToProgram.com curriculum. In fact, ",(0,r.kt)("strong",{parentName:"p"},"we strongly recommend that you do not use ",(0,r.kt)("inlineCode",{parentName:"strong"},"var")," in any of your projects.")," That's quite simply because it's crucial for us to learn about C# types as beginners in a strongly-typed language! When we use ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),", we don't need to know a variable's type, and when we don't have to pay attention to the types we are using in our projects, we won't learn about them, plain and simple."))}m.isMDXComponent=!0}}]);