"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[9504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"\ud83d\udcd3 Intro to JavaScript",day:"weekend",id:"intro-to-javascript",hide_table_of_contents:!0},i=void 0,s={unversionedId:"workshops/workshop/intro-to-javascript",id:"workshops/workshop/intro-to-javascript",title:"\ud83d\udcd3 Intro to JavaScript",description:"We've added new HTML content to our site and styled it with CSS. Next, we'll explore the basics of a programming language called JavaScript, which will allow us to add interactivity into our site. JavaScript is more complex than the topics we've covered so far so we'll spend two lessons discussing it.",source:"@site/docs/workshops/workshop/AE-intro-to-javascript.md",sourceDirName:"workshops/workshop",slug:"/workshops/workshop/intro-to-javascript",permalink:"/v1.2/workshops/workshop/intro-to-javascript",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 Intro to JavaScript",day:"weekend",id:"intro-to-javascript",hide_table_of_contents:!0},sidebar:"workshops",previous:{title:"\ud83d\udcd3 Styling CSS",permalink:"/v1.2/workshops/workshop/styling-css"},next:{title:"\ud83d\udcd3 Interactivity with JavaScript and jQuery",permalink:"/v1.2/workshops/workshop/interactivity-with-javascript-and-jquery"}},l={},p=[{value:"Introduction to JavaScript",id:"introduction-to-javascript",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We've added new HTML content to our site and styled it with CSS. Next, we'll explore the basics of a programming language called ",(0,r.kt)("strong",{parentName:"p"},"JavaScript"),", which will allow us to add interactivity into our site. JavaScript is more complex than the topics we've covered so far so we'll spend two lessons discussing it."),(0,r.kt)("p",null,"We'll explore and experiment with basic JavaScript in this lesson. In the next lesson, we'll add an interactive form to our site using a  library called ",(0,r.kt)("strong",{parentName:"p"},"jQuery"),"."),(0,r.kt)("h2",{id:"introduction-to-javascript"},"Introduction to JavaScript"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"So far, our site is static and has no interaction. There's no way to make our page ",(0,r.kt)("em",{parentName:"p"},"do")," anything."),(0,r.kt)("p",null,"Let's change that with JavaScript. JavaScript is a full-fledged programming language that takes years to master. At Epicodus, we concentrate on learning the fundamentals of the language, which is enough to get our students their first programming jobs. However, we don't need to know all the fundamentals just yet. This workshop will give you a taste of what JavaScript is like."),(0,r.kt)("p",null,"We are going to use a site called ",(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/pen/"},"Codepen")," to explore JavaScript a bit more. Open a new window and ",(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/pen/"},"go to this page"),". Don't close your Glitch window, though. We will return to the site we are building in the next lesson."),(0,r.kt)("p",null,"Here's what the Codepen panel looks like. As you can see, we can add HTML, CSS and JavaScript here, too. Codepen is a popular site for sharing snippets of code. You are welcome to create an account but it's not required for experimenting with Codepen. Today we will just focus on the panel on the right, which is for JavaScript code."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An image of panels in Codepen. JS is on the right.",src:n(8806).Z,width:"3244",height:"1578"})),(0,r.kt)("p",null,"Go ahead and enter the following code into the JavaScript panel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'alert("Hello World!");\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An image showing an alert in Codepen. The alert code is showing on the right.",src:n(34171).Z,width:"2864",height:"908"})),(0,r.kt)("p",null,"Our page just said hi. The box that popped up is called an ",(0,r.kt)("strong",{parentName:"p"},"alert"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"alert()")," is a JavaScript function. Simply put, a ",(0,r.kt)("strong",{parentName:"p"},"function")," is a piece of code that carries out an operation. We can use all kinds of pre-existing functions and we can even define our own functions."),(0,r.kt)("p",null,"Note the parentheses in our function. In programming, we call those ",(0,r.kt)("strong",{parentName:"p"},"parens"),". They're a good clue that the piece of code we're looking at is a function. The parens have a special use, which is to collect data that the function itself will then use. The information passed into parens is called an ",(0,r.kt)("strong",{parentName:"p"},"argument"),". In the case of our function here, we're giving it the argument ",(0,r.kt)("inlineCode",{parentName:"p"},'"Hello World!"'),"."),(0,r.kt)("p",null,"Our phrase is contained within quotes. This is because in JavaScript, words aren't simply words. The word ",(0,r.kt)("inlineCode",{parentName:"p"},'"alert"')," and the function ",(0,r.kt)("inlineCode",{parentName:"p"},"alert()")," use the same set of letters so we need a way to differentiate them. For a function, we use parens. For a piece of text, we use quotes. A piece of text contained within quotes is called a ",(0,r.kt)("strong",{parentName:"p"},"string"),". When we write code, everything that needs to be treated as a piece of text must be formatted as a string."),(0,r.kt)("p",null,"String is a ",(0,r.kt)("strong",{parentName:"p"},"data type"),". There are many other data types. One example is numbers, which are called ",(0,r.kt)("strong",{parentName:"p"},"integers")," in JavaScript. Note that there is a difference between the number ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," and the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"2"'),". The first is an integer while the second is a string. Let's see how this works."),(0,r.kt)("p",null,"Clear the contents of the right-hand panel in Codepen and add the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'alert(2 + 2);\nalert(4 * "2");\nalert(8 + "2");\n')),(0,r.kt)("p",null,"We will get the following alerts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4"),(0,r.kt)("li",{parentName:"ul"},"8"),(0,r.kt)("li",{parentName:"ul"},"82")),(0,r.kt)("p",null,"The first two make some sense. However, the third doesn't actually add the two numbers together."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the first case, JavaScript took our two ",(0,r.kt)("strong",{parentName:"li"},"integers")," and added them."),(0,r.kt)("li",{parentName:"ul"},"Next, JavaScript tried to multiply 4 times the ",(0,r.kt)("strong",{parentName:"li"},"string")," ",(0,r.kt)("inlineCode",{parentName:"li"},'"2"'),". That would be like saying \"What is the product of 4 times trout\". It's a word. We can't do math with a word. So JavaScript changed the ",(0,r.kt)("inlineCode",{parentName:"li"},'"2"')," from a ",(0,r.kt)("strong",{parentName:"li"},"string")," to an ",(0,r.kt)("strong",{parentName:"li"},"integer")," and gave us the result. It ",(0,r.kt)("em",{parentName:"li"},"inferred")," the data type."),(0,r.kt)("li",{parentName:"ul"},"Finally, JavaScript took the ",(0,r.kt)("strong",{parentName:"li"},"integer")," ",(0,r.kt)("inlineCode",{parentName:"li"},"8")," and tried to add the ",(0,r.kt)("strong",{parentName:"li"},"string")," ",(0,r.kt)("inlineCode",{parentName:"li"},'"2"'),". No problem. But instead of doing a mathematical operation, it attaches the string and the integer together. This is an operation in programming called ",(0,r.kt)("strong",{parentName:"li"},"concatenation"),". It's literally sticking two things together to make them one thing. This happened because the symbol we use in JavaScript to tell it to concatenate is the symbol ",(0,r.kt)("inlineCode",{parentName:"li"},"+"),". If we were to add ",(0,r.kt)("inlineCode",{parentName:"li"},"5")," and ",(0,r.kt)("inlineCode",{parentName:"li"},'"trout"')," together, we would get ",(0,r.kt)("inlineCode",{parentName:"li"},'"5trout"'),".")),(0,r.kt)("p",null,"Try experimenting with different combinations of strings and integers. Guess what will happen before you refresh your page."),(0,r.kt)("p",null,"There are many different data types in JavaScript and in computer programming in general. We can only scratch the surface in this workshop but we cover them in much more depth in our full curriculum. We can even define our own data types and set up rules for how they behave. If you'd like to learn more about JavaScript, there are many great resources online. Check out our lessons at ",(0,r.kt)("a",{parentName:"p",href:"https://full-time.learnhowtoprogram.com/introduction-to-programming"},"learnhowtoprogram.com"),"."),(0,r.kt)("p",null,"In our next lesson, we'll learn how to use JavaScript to do something useful on our Glitch site."))}h.isMDXComponent=!0},8806:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/codepen-1-3bec617b7a2e5f29c0b1a9de983cbc0e.png"},34171:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/codepen-2-08df78595e85c86dd44a2a6d99c1c474.png"}}]);