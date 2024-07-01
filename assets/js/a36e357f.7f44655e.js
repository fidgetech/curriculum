"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[24634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,u=m["".concat(l,".").concat(h)]||m[h]||c[h]||s;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},59718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={title:"\ud83d\udcd3 3.0.0.11 Classes and Instance Methods",day:"weekend",id:"3-0-0-11-classes-and-instance-methods",hide_table_of_contents:!0},o=void 0,i={unversionedId:"c-and-net/lessons-6-18-data-types-and-variables/3-0-0-11-classes-and-instance-methods",id:"c-and-net/lessons-6-18-data-types-and-variables/3-0-0-11-classes-and-instance-methods",title:"\ud83d\udcd3 3.0.0.11 Classes and Instance Methods",description:"We wrote many JavaScript methods and functions in Introduction to Programming. The process is fairly similar in C# as well, but in this case we will always call them methods. That's because in C# every method \u2014 custom or built-in \u2014 belongs to some object. In other words, there are no standalone functions.",source:"@site/docs/3_c-and-net/0_lessons-6-18-data-types-and-variables/AF-3-0-0-11-classes-and-instance-methods.md",sourceDirName:"3_c-and-net/0_lessons-6-18-data-types-and-variables",slug:"/c-and-net/lessons-6-18-data-types-and-variables/3-0-0-11-classes-and-instance-methods",permalink:"/v1/c-and-net/lessons-6-18-data-types-and-variables/3-0-0-11-classes-and-instance-methods",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.0.0.11 Classes and Instance Methods",day:"weekend",id:"3-0-0-11-classes-and-instance-methods",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.0.0.10 Booleans, Branching, and Operators",permalink:"/v1/c-and-net/lessons-6-18-data-types-and-variables/3-0-0-10-booleans-branching-and-operators"},next:{title:"\ud83d\udcd3 3.0.0.12 Namespaces and Checking the Type of an Object",permalink:"/v1/c-and-net/lessons-6-18-data-types-and-variables/3-0-0-12-namespaces-and-checking-the-type-of-an-object"}},l={},p=[{value:"Classes",id:"classes",level:2},{value:"Useful Built-In C# Instance Methods",id:"useful-built-in-c-instance-methods",level:2},{value:"Method Naming Convention",id:"method-naming-convention",level:3},{value:"String Methods with Arguments",id:"string-methods-with-arguments",level:3},{value:"Strong Typing in Arguments",id:"strong-typing-in-arguments",level:3},{value:"Integer Methods",id:"integer-methods",level:3}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We wrote many JavaScript methods and functions in Introduction to Programming. The process is fairly similar in C# as well, but in this case we will always call them ",(0,r.kt)("strong",{parentName:"p"},"methods"),". That's because in C# every method \u2014 custom or built-in \u2014 belongs to some object. In other words, there are no standalone functions."),(0,r.kt)("p",null,"In this lesson, we'll practice calling ",(0,r.kt)("strong",{parentName:"p"},"built-in")," C# methods, that is, methods that already exist within the C# language that we just need to learn the right syntax in order to use. This is in contrast to ",(0,r.kt)("strong",{parentName:"p"},"custom")," methods, which we create. We'll learn how to create custom methods in a later lesson. "),(0,r.kt)("p",null,"This lesson will be focused on learning how to use ",(0,r.kt)("strong",{parentName:"p"},"instance methods"),", which are methods that are called on an object. This is in contrast to ",(0,r.kt)("strong",{parentName:"p"},"static methods"),", which are methods that are called on the class itself. We'll learn how to use static methods in an upcoming lesson."),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"First, let's review the difference between an instance of a class, and the class itself."),(0,r.kt)("p",null,"Just like in JavaScript, a ",(0,r.kt)("strong",{parentName:"p"},"class")," contains related code for a type of object. Well, nearly all values in C# are a type of object. That means the C# programming language is composed of syntax (like operators) as well as many built-in classes."),(0,r.kt)("p",null,"The string and integer literals we've created are also objects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> "I am a string, but still an object :)"\n"I am a string, but still an object :)"\n> 34\n34\n')),(0,r.kt)("p",null,"When we create a string in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL, we're invoking the built-in C# ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.string?view=net-6.0"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," class to create a new object based off it. The ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," class describes all of properties and methods that every C# string should have. "),(0,r.kt)("p",null,"More specifically, when we create a string like we did in the above code snippet, we're creating an ",(0,r.kt)("strong",{parentName:"p"},"instance")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," class that has the same properties and methods described in the ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," class. An instance is an object, whereas the class is the blueprint with which to make objects."),(0,r.kt)("p",null,"Later on, we'll learn how to create our own custom classes. For now, we'll continue working with built-in C# classes."),(0,r.kt)("h2",{id:"useful-built-in-c-instance-methods"},"Useful Built-In C# Instance Methods"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"instance method")," is a method that's called on an object, not the class. Let's work through some examples of instance methods that we can call on strings. Try these out in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> string phrase = "Programming is AWESOME";\n> phrase\n"Programming is AWESOME"\n> phrase.ToUpper()\n"PROGRAMMING IS AWESOME"\n> phrase.ToLower()\n"programming is awesome"\n')),(0,r.kt)("p",null,"First understand that ",(0,r.kt)("inlineCode",{parentName:"p"},"phrase")," is an object instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," class. When we call a method on ",(0,r.kt)("inlineCode",{parentName:"p"},"phrase"),", we're calling an instance method on it."),(0,r.kt)("p",null,"The pattern for calling a C# method is similar to JavaScript:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We append a ",(0,r.kt)("inlineCode",{parentName:"p"},"."),", or dot, to the end of our variable (or data we'd like to manipulate, if it's not stored in a variable).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We list the method name after the dot. In the first example above, we used the built-in method ",(0,r.kt)("inlineCode",{parentName:"p"},"ToUpper"),". In the second, we used ",(0,r.kt)("inlineCode",{parentName:"p"},"ToLower"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Just like with JavaScript, we append a set of parentheses ",(0,r.kt)("inlineCode",{parentName:"p"},"()")," to the end of the method name. Often called ",(0,r.kt)("strong",{parentName:"p"},"parens")," for short, these are where any arguments go. Sometimes methods have arguments, and sometimes they don't. The examples above don't contain arguments.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The method then ",(0,r.kt)("em",{parentName:"p"},"does something")," with or to the data it's called on. In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"ToUpper()")," makes our string all uppercase whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"ToLower()")," makes it all lowercase."))),(0,r.kt)("p",null,"For clarity sake, keep in mind that you can call methods directly on the data. Take this for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> "Programming is AWESOME".ToUpper()\n"PROGRAMMING IS AWESOME"\n')),(0,r.kt)("h3",{id:"method-naming-convention"},"Method Naming Convention"),(0,r.kt)("p",null,"Notice that unlike JavaScript, ",(0,r.kt)("strong",{parentName:"p"},"methods in C# begin with a capital letter"),". The beginning of any other words in the method name are also capitalized such as ",(0,r.kt)("inlineCode",{parentName:"p"},"LikeThis()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"EvenLikeThisExampleHere()"),". This is called ",(0,r.kt)("strong",{parentName:"p"},"Pascal case")," or ",(0,r.kt)("strong",{parentName:"p"},"upper camel case")," and is a standard and required convention in C#."),(0,r.kt)("h3",{id:"string-methods-with-arguments"},"String Methods with Arguments"),(0,r.kt)("p",null,"Let's look at a few more methods. This time we'll use some that take arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> string phraseOne = "hello world";\n> string phraseTwo = "hello";\n> phraseOne.Contains(phraseTwo)\ntrue\n')),(0,r.kt)("p",null,"To review, ",(0,r.kt)("strong",{parentName:"p"},"arguments")," are pieces of data passed into a method. In the example above, ",(0,r.kt)("inlineCode",{parentName:"p"},"Contains()")," is a string method. We pass it the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"phraseTwo")," as an argument. It then determines if ",(0,r.kt)("inlineCode",{parentName:"p"},"phraseTwo")," is included in ",(0,r.kt)("inlineCode",{parentName:"p"},"phraseOne"),", the variable that we call the method on. In this case, ",(0,r.kt)("em",{parentName:"p"},"\u201chello world\u201d")," contains the phrase, or ",(0,r.kt)("strong",{parentName:"p"},"substring"),", ",(0,r.kt)("em",{parentName:"p"},'"hello"'),", so it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"Similarly, we could use ",(0,r.kt)("inlineCode",{parentName:"p"},"Replace()")," to swap out part of a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> string phraseOne = "hello world";\n> string phraseTwo = "hello";\n> string phraseThree = phraseOne.Replace("hello", "goodbye");\n> phraseThree\n"goodbye world"\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Replace()")," takes two arguments. Both are strings. The method finds all substrings that match the first argument ",(0,r.kt)("inlineCode",{parentName:"p"},'"hello"')," and then replaces these substrings with the second argument ",(0,r.kt)("inlineCode",{parentName:"p"},'"goodbye"'),", turning the string ",(0,r.kt)("em",{parentName:"p"},'"hello world"')," into ",(0,r.kt)("em",{parentName:"p"},'"goodbye world"'),"."),(0,r.kt)("h3",{id:"strong-typing-in-arguments"},"Strong Typing in Arguments"),(0,r.kt)("p",null,"Because ",(0,r.kt)("strong",{parentName:"p"},"C# is a strongly-typed language"),", when we pass an argument to a method, it ",(0,r.kt)("em",{parentName:"p"},"must")," be the correct type. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Replace()")," method ",(0,r.kt)("strong",{parentName:"p"},"only")," accepts string arguments. If we try to pass it an integer (or ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),") instead, we get an error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> string phraseOne = \"hello world\";\n> int phraseTwo = 4;\n> phraseOne.Contains(phraseTwo)\n(1,20): error CS1503: Argument 1: cannot convert from 'int' to 'string'\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"1")," is an integer of the ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," data type, not a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". Errors like this one are very common. Whenever we see a message stating something like ",(0,r.kt)("em",{parentName:"p"},"Cannot convert (some data type) to (some other data type)"),", it means we've provided an incorrect data type in our code. The second data type mentioned in the message (",(0,r.kt)("inlineCode",{parentName:"p"},"string")," in the example above) is the data type C# ",(0,r.kt)("em",{parentName:"p"},"expected"),"; the first (",(0,r.kt)("inlineCode",{parentName:"p"},"int"),") is the incorrect type we provided instead."),(0,r.kt)("p",null,"If we ever need to find out what arguments may be provided to string methods, we can look at the ",(0,r.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/System.String_methods(v=vs.110).aspx"},"C# String Documentation"),"."),(0,r.kt)("h3",{id:"integer-methods"},"Integer Methods"),(0,r.kt)("p",null,"Integers also have built-in methods but there are not very many beyond the mathematical operators covered in the ",(0,r.kt)("em",{parentName:"p"},"Integers, Decimals, and Arithmetic")," lesson. Here's one that converts an integer to a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> int number = 56;\n> number\n56\n> number.ToString()\n"56"\n')),(0,r.kt)("p",null,"We've turned an ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," into a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," type instead. Now it can be used in methods that work with strings."),(0,r.kt)("p",null,"Next, we'll take a moment to learn about how .NET organizes its built-in classes into namespaces, and how we can check the type of an object we're working with to learn its class name and how to research more about it."))}c.isMDXComponent=!0}}]);