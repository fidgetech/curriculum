"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[74978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=l,m=c["".concat(r,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[c]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},29519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const o={title:"\ud83d\udcd3 Styling CSS",day:"weekend",id:"styling-css",hide_table_of_contents:!0},i=void 0,s={unversionedId:"workshops/workshop/styling-css",id:"workshops/workshop/styling-css",title:"\ud83d\udcd3 Styling CSS",description:"Now that we've added HTML content to our webpage, we can style and format our HTML using CSS.",source:"@site/docs/workshops/workshop/AD-styling-css.md",sourceDirName:"workshops/workshop",slug:"/workshops/workshop/styling-css",permalink:"/workshops/workshop/styling-css",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 Styling CSS",day:"weekend",id:"styling-css",hide_table_of_contents:!0},sidebar:"workshops",previous:{title:"\ud83d\udcd3 Writing HTML",permalink:"/workshops/workshop/writing-html"},next:{title:"\ud83d\udcd3 Intro to JavaScript",permalink:"/workshops/workshop/intro-to-javascript"}},r={},p=[{value:"Using CSS",id:"using-css",level:2},{value:"Using a class or id",id:"using-a-class-or-id",level:3},{value:"Using Bootstrap",id:"using-bootstrap",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Now that we've added HTML content to our webpage, we can style and format our HTML using ",(0,l.kt)("strong",{parentName:"p"},"CSS"),"."),(0,l.kt)("h2",{id:"using-css"},"Using CSS"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"CSS")," stands for ",(0,l.kt)("strong",{parentName:"p"},"Cascading Style Sheet"),". Just as HTML defines ",(0,l.kt)("em",{parentName:"p"},"what")," appears on our page, CSS defines how it ",(0,l.kt)("em",{parentName:"p"},"looks"),"."),(0,l.kt)("p",null,"Glitch has already provided a file called ",(0,l.kt)("inlineCode",{parentName:"p"},"style.css")," for us. In fact, the initial code that Glitch provided had some styling. So why doesn't our HTML use any of the styling that Glitch already has in ",(0,l.kt)("inlineCode",{parentName:"p"},"style.css"),"?"),(0,l.kt)("p",null,"Our ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," file doesn't have any styling from ",(0,l.kt)("inlineCode",{parentName:"p"},"style.css")," because the two files aren't linked yet. We need to add a link in ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," that tells the file where to find ",(0,l.kt)("inlineCode",{parentName:"p"},"style.css"),". Remember how we said that ",(0,l.kt)("inlineCode",{parentName:"p"},"head")," has other important uses besides the ",(0,l.kt)("inlineCode",{parentName:"p"},"title")," tag? This is where the link to the CSS file should go."),(0,l.kt)("p",null,"Let's add a link now. The code snippet below just shows the ",(0,l.kt)("inlineCode",{parentName:"p"},"head")," section of our code:"),(0,l.kt)("div",{class:"filename"},"index.html"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'...\n<head>\n  <title>Epicodus Workshop Project</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n...\n')),(0,l.kt)("p",null,"As soon as we add this code to ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html"),", we should see an update of our page in Glitch's right-hand pane. Our ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," file is now linked to ",(0,l.kt)("inlineCode",{parentName:"p"},"style.css"),", which means that any CSS rules we've included in ",(0,l.kt)("inlineCode",{parentName:"p"},"style.css")," will now be applied to our page."),(0,l.kt)("p",null,"Let's start by clearing all the code that Glitch provides in ",(0,l.kt)("inlineCode",{parentName:"p"},"style.css"),". We are going to create our own CSS rules now. Here's our first rule:"),(0,l.kt)("div",{class:"filename"},"style.css"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"h1 {\n  color: blue;\n}\n")),(0,l.kt)("p",null,"This style can be broken down into a few sections."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"h1")," tells our CSS that this style should be applied to any element of this type. It will be universal for all ",(0,l.kt)("inlineCode",{parentName:"li"},"<h1>")," elements on our page."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{...}")," are called ",(0,l.kt)("strong",{parentName:"li"},"curly-braces")," by most programmers. Some call them ",(0,l.kt)("em",{parentName:"li"},"handlebars")," or ",(0,l.kt)("em",{parentName:"li"},"wave-braces")," or other things, but they define the beginning and end of a style rule. Every rule within these symbols will be applied to the ",(0,l.kt)("inlineCode",{parentName:"li"},"<h1>")," elements."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"color")," is a ",(0,l.kt)("strong",{parentName:"li"},"property"),". It is the element we want to style in our HTML."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"}," blue")," is a ",(0,l.kt)("strong",{parentName:"li"},"value"),". It's the actual value that the property should have. We could change this to another color as well.")),(0,l.kt)("p",null,"We can combine multiple rules in each style. Let's add another property to this rule."),(0,l.kt)("div",{class:"filename"},"style.css"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"h1 {\n  color: blue;\n  background-color: gray;\n}\n")),(0,l.kt)("p",null,"This rule will change the background color of all ",(0,l.kt)("inlineCode",{parentName:"p"},"<h1>")," elements on our page. If we take a look at our site in Glitch, we'll see that our new rule has only modified the ",(0,l.kt)("inlineCode",{parentName:"p"},"h1")," tag."),(0,l.kt)("p",null,"It may not be the prettiest style, but we certainly have changed it. In fact, that gray looks a little too dark. Let's upgrade the style."),(0,l.kt)("div",{class:"filename"},"style.css"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"h1 {\n  color: blue;\n  background-color: lightgray;\n}\n")),(0,l.kt)("p",null,"You can look up a list of all the colors CSS has defined or use a ",(0,l.kt)("strong",{parentName:"p"},"hex-color"),". Let's use a hex-color to change the text to a lighter blue. While we're at it, we'll put that background color behind the entire body of the page."),(0,l.kt)("div",{class:"filename"},"style.css"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"h1 {\n  color: #5179ba;\n}\n\nbody {\n  background-color: lightgray;\n}\n")),(0,l.kt)("p",null,"Feel free to style elements on your page using the attributes and properties above. You can modify any element on that page including other header tags, paragraph tags, ",(0,l.kt)("inlineCode",{parentName:"p"},"img")," tags and so on."),(0,l.kt)("h3",{id:"using-a-class-or-id"},"Using a class or id"),(0,l.kt)("p",null,"So far we've been styling everything based on its element type. However, this isn't such a great idea in web development. What if we want to have one ",(0,l.kt)("inlineCode",{parentName:"p"},"h1")," look a certain way while another ",(0,l.kt)("inlineCode",{parentName:"p"},"h1")," should look completely different? In order to do this, we need to target only a single element or groups of elements."),(0,l.kt)("p",null,"We can use two powerful HTML tools to do this: the ",(0,l.kt)("strong",{parentName:"p"},"class")," and the ",(0,l.kt)("strong",{parentName:"p"},"id"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"An ",(0,l.kt)("strong",{parentName:"li"},"id")," is a single identifying attribute given to an HTML element."),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("strong",{parentName:"li"},"class")," is an attribute given to multiple HTML elements.")),(0,l.kt)("p",null,"Let's modify our list of goals in our HTML to see how this works. We'll add a few more items as well as add a few classes and ids."),(0,l.kt)("div",{class:"filename"},"index.html"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'...\n<ul id="goal-list">\n  <li class="list-item">Learn HTML</li>\n  <li class="list-item" id="css-item">Learn CSS</li>\n  <li class="list-item">Learn JavaScript</li>\n  <li class="list-item">Learn Git</li>\n</ul>\n...\n')),(0,l.kt)("p",null,"Let's also add an ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," to our image."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'...\n<img id="picture" src="https://tinyurl.com/lfkubwe" />\n...\n')),(0,l.kt)("p",null,"Next, let's add new CSS rules that we can apply to these ids and classes."),(0,l.kt)("p",null,"In order to apply rules to ids and classes in our CSS, we must do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"We use a ",(0,l.kt)("inlineCode",{parentName:"li"},"#")," to indicate that we are referring to an ",(0,l.kt)("em",{parentName:"li"},"id"),"."),(0,l.kt)("li",{parentName:"ul"},"We use a ",(0,l.kt)("inlineCode",{parentName:"li"},".")," to indicate that we're targeting a ",(0,l.kt)("em",{parentName:"li"},"class"),".")),(0,l.kt)("div",{class:"filename"},"css/style.css"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".list-item {\n  font-family: monospace;\n}\n\n#css-item {\n  color: #5179ba;\n}\n\n#goal-list {\n  border-style: solid;\n  border-color: #5179ba;\n  width: 30%;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".list-item")," refers to a class because it has a ",(0,l.kt)("inlineCode",{parentName:"p"},"."),". ",(0,l.kt)("inlineCode",{parentName:"p"},"#css-item")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"#goal-list")," refer to ids because they use a ",(0,l.kt)("inlineCode",{parentName:"p"},"#"),". It is a common error to get these mixed up when applying CSS rules. If a CSS rule isn't working correctly, this is the first thing to check."),(0,l.kt)("p",null,"Finally, let's give our image some style rules. We've already added the id ",(0,l.kt)("inlineCode",{parentName:"p"},"picture"),". Now we can target the image with a CSS rule that applies to ",(0,l.kt)("inlineCode",{parentName:"p"},"#picture"),"."),(0,l.kt)("div",{class:"filename"},"style.css"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"#picture {\n  width: 60%;\n  float: right;\n  border: solid;\n  border-color: grey beige white grey;\n}\n")),(0,l.kt)("h2",{id:"using-bootstrap"},"Using Bootstrap"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"We can make our CSS styling much easier by using an existing CSS library. There are many different CSS libraries out there but we'll focus on using a library called ",(0,l.kt)("strong",{parentName:"p"},"Bootstrap"),", which was built by Twitter. Let's add it to our project and make a few minor changes to our CSS."),(0,l.kt)("p",null,"In our HTML, just above where we linked our ",(0,l.kt)("inlineCode",{parentName:"p"},"style.css")," file, let's add a new line of code. It should look like this."),(0,l.kt)("div",{class:"filename"},"index.html"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'...\n<link\n  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"\n  rel="stylesheet"\n  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"\n  crossorigin="anonymous" />\n<link rel="stylesheet" href="style.css">\n<title>Epicodus Workshop Project</title>\n...\n')),(0,l.kt)("p",null,"This is a CSS file that contains thousands of styles and rules. Instead of linking to a file in our project (as we do with ",(0,l.kt)("inlineCode",{parentName:"p"},"style.css"),"), we are creating a ",(0,l.kt)("inlineCode",{parentName:"p"},"<script>")," tag that points to as a CDN, or content delivery network. This Bootstrap CSS file defines special classes we can use on our html."),(0,l.kt)("p",null,"Bootstrap automatically applies some styles to elements like ",(0,l.kt)("inlineCode",{parentName:"p"},"body"),", so we'll see changes in Glitch's right-hand pane as soon as we link to the Bootstrap stylesheet."),(0,l.kt)("p",null,"One problem that jumps out is that the text is very tight on the left of the screen. Let's use a Bootstrap class to fix that."),(0,l.kt)("p",null,"We'll also use a new HTML element called a ",(0,l.kt)("inlineCode",{parentName:"p"},"<div>"),". A ",(0,l.kt)("inlineCode",{parentName:"p"},"<div>")," makes divisions on the page and is used to group parts of our page together. Let's put all the code within the ",(0,l.kt)("inlineCode",{parentName:"p"},"<body>")," within a ",(0,l.kt)("inlineCode",{parentName:"p"},"<div>"),". We'll also give it a Bootstrap class called ",(0,l.kt)("inlineCode",{parentName:"p"},"container"),"."),(0,l.kt)("div",{class:"filename"},"index.html"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'...\n<body>\n  <div class="container">\n    ...\n  </div>\n</body>\n...\n')),(0,l.kt)("p",null,"This will make some styling changes to our page, including fixing some of our spacing issues."),(0,l.kt)("p",null,"If you want to see what the page looked like before and after we added this styling, you can comment out the styling links in the HTML head. When we comment code, it remains on the page but the code isn't rendered. If you highlight a line of code in Glitch and press ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt + /")," on your keyboard, that line of code will be grayed out in Glitch. To un-comment the code, simply repeat the process. This is a good way to see how a page looks with and without a CSS property."),(0,l.kt)("p",null,"Now that we've learned the basics of CSS, we're ready to add some interactivity to our site with JavaScript."))}u.isMDXComponent=!0}}]);