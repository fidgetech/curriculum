"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[35117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,c=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(c,r(r({ref:t},h),{},{components:n})):a.createElement(c,r({ref:t},h))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const l={title:"\ud83d\udcd3 Writing HTML",day:"weekend",id:"writing-html",hide_table_of_contents:!0},r=void 0,o={unversionedId:"workshops/workshop/writing-html",id:"workshops/workshop/writing-html",title:"\ud83d\udcd3 Writing HTML",description:"In this lesson, we'll learn how to write HTML in Glitch.",source:"@site/docs/workshops/workshop/AC-writing-html.md",sourceDirName:"workshops/workshop",slug:"/workshops/workshop/writing-html",permalink:"/workshops/workshop/writing-html",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 Writing HTML",day:"weekend",id:"writing-html",hide_table_of_contents:!0},sidebar:"workshops",previous:{title:"\ud83d\udcd3 Using Glitch",permalink:"/workshops/workshop/using-glitch"},next:{title:"\ud83d\udcd3 Styling CSS",permalink:"/workshops/workshop/styling-css"}},s={},p=[{value:"Writing HTML",id:"writing-html",level:2},{value:"Expanding HTML",id:"expanding-html",level:3},{value:"An HTML list",id:"an-html-list",level:3},{value:"Hyperlinks",id:"hyperlinks",level:3}],h={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll learn how to write HTML in Glitch."),(0,i.kt)("h2",{id:"writing-html"},"Writing HTML"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"HTML")," is the basic building block of the internet. HTML is used to display the basic content of every website you've ever visited."),(0,i.kt)("p",null,"Read the following code and type it into the ",(0,i.kt)("em",{parentName:"p"},"index.html")," file. The code that was there previously should be removed."),(0,i.kt)("div",{class:"filename"},"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Epicodus Workshop Project</title>\n  </head>\n  <body>\n    <h1>My Programming Goals</h1>\n  </body>\n</html>\n")),(0,i.kt)("p",null,"We are using several different element types here. Each element has two ",(0,i.kt)("strong",{parentName:"p"},"tags"),": an opening tag and a closing tag. Here is an example: ",(0,i.kt)("inlineCode",{parentName:"p"},"<html>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"</html>"),". Tags are always enclosed in ",(0,i.kt)("inlineCode",{parentName:"p"},"<")," and ",(0,i.kt)("inlineCode",{parentName:"p"},">"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"<html>")," is an opening tag. ",(0,i.kt)("inlineCode",{parentName:"p"},"</html>")," is a closing tag. Closing tags always include a ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," after the ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),"."),(0,i.kt)("p",null,"Here are the tags we are using in the code above:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<html>")," tells the browser that everything within it is HTML."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<head>")," includes important information about the webpage that will not be displayed. For now we are just including a ",(0,i.kt)("inlineCode",{parentName:"li"},"<title>"),". We will cover other elements that go in ",(0,i.kt)("inlineCode",{parentName:"li"},"<head>")," soon."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<body>")," contains information that will be displayed to the user. Most of the code we add will go in the body."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<h1>")," is a header tag. There are headers 1-6 and they correspond to different text sizes. You can try changing ",(0,i.kt)("inlineCode",{parentName:"li"},"<h1>")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"<h2>")," and so on and see how the preview in the left-hand pane of Glitch changes.")),(0,i.kt)("p",null,"If you make any errors in your HTML, Glitch will add a red dot to the left of the line where the error is. You can hover the cursor over the red dot to see what the error is. If you accidentally type ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>")," like ",(0,i.kt)("inlineCode",{parentName:"p"},"<<body>"),", you'll get the following error: \"Special characters can't be escaped.\""),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/ucode-glitch-photos/brooke-ucode-glitch-update-5.20.21/glitch-images-MAY-2022/linter-error.jpg",alt:"Here's an example of an error showing in Glitch."})),(0,i.kt)("p",null,"Even if an error message doesn't make sense yet, it can still provide useful information. The error message above doesn't help us much - it's happening because the ",(0,i.kt)("strong",{parentName:"p"},"linter")," reading our software is confused. A linter looks for errors in our code and points them out to us. In this case, the linter is still being helpful: it tells us exactly where the error is so we can fix it. We just need to remove the extra ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),"."),(0,i.kt)("h3",{id:"expanding-html"},"Expanding HTML"),(0,i.kt)("p",null,"Let's add more elements to our HTML. Follow along and match your HTML to the following code snippet. We will focus on the code inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>")," element. Each html document should only have ",(0,i.kt)("strong",{parentName:"p"},"one")," set of ",(0,i.kt)("inlineCode",{parentName:"p"},"body"),' tags - they should "wrap around" the rest of the html code that isn\'t inside the ',(0,i.kt)("inlineCode",{parentName:"p"},"head"),"."),(0,i.kt)("div",{class:"filename"},"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"...\n  <body>\n    <h1>My Programming Goals</h1>\n    <p>Every journey is easier if you <strong>know where you're going.</strong> <em>-unknown</em></p>\n  </body>\n...\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"<p>")," element is a paragraph. This is the basic text element used in HTML. It's used to display most basic text. Note how the ",(0,i.kt)("inlineCode",{parentName:"li"},"<strong>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"<em>")," tags inside the paragraph element have changed the styling in the right-hand pane of Glitch. ",(0,i.kt)("inlineCode",{parentName:"li"},"strong")," tags add ",(0,i.kt)("strong",{parentName:"li"},"bold")," while ",(0,i.kt)("inlineCode",{parentName:"li"},"em")," tags add ",(0,i.kt)("em",{parentName:"li"},"italics"),".")),(0,i.kt)("p",null,"Now let's use a new element to display an image on our page."),(0,i.kt)("div",{class:"filename"},"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'...\n  <body>\n    <h1>My Programming Goals</h1>\n    <p>Every journey is easier if you <strong>know where you\'re going.</strong> <em>-unknown</em></p>\n\n    <img src="https://tinyurl.com/lfkubwe" />\n\n  </body>\n...\n')),(0,i.kt)("p",null,"Here we've added an element called an ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>"),". We can use this image to link to an image. Note that there is no closing tag ",(0,i.kt)("inlineCode",{parentName:"p"},"</img>")," present. Instead the ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," is located at the end of the element itself. This is called a self-closing element."),(0,i.kt)("p",null,"This element has additional information included as well. It has an ",(0,i.kt)("strong",{parentName:"p"},"attribute")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"src"),". This attribute defines the source of the image. In this case we're using a URL to show an image from the internet. You can replace this URL with another image by copying and pasting an image link inside the double quotation marks. You must always add quotation marks to an attribute. Any information about the attribute is included inside the quotation marks like the code example above."),(0,i.kt)("h3",{id:"an-html-list"},"An HTML list"),(0,i.kt)("p",null,"Let's create a list of goals below the image we're displaying. Add the following code below the ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>")," element:"),(0,i.kt)("div",{class:"filename"},"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"...\n<h3>My Goals:</h3>\n<p>\n  I want to become a professional web developer. Here are the things I'll need to learn first.\n</p>\n<ul>\n  <li>Learn HTML</li>\n  <li>Learn CSS</li>\n</ul>\n...\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<ul>")," is an element that indicates we wish to display an un-ordered list. By default this means we'll display bullet points."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<li>")," is a list item. When displayed within a list, they will be grouped together.")),(0,i.kt)("h3",{id:"hyperlinks"},"Hyperlinks"),(0,i.kt)("p",null,"Now let's add a link:"),(0,i.kt)("div",{class:"filename"},"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'...\n<h3>My favorite website</h3>\n<h4><a href="http://www.google.com">Google</a></h4>\n...\n')),(0,i.kt)("p",null,"Here we've used another set of header elements and a new element called an ",(0,i.kt)("strong",{parentName:"p"},"anchor"),". The anchor is defined with the ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," element. The anchor has an ",(0,i.kt)("strong",{parentName:"p"},"attribute")," just like an image. The ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," attribute is the hypertext reference. If a user clicks on the link, the ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," states the site where the user will end up."),(0,i.kt)("p",null,'If you try to open the link in the Glitch panel, it will throw an error. To actually visit the link, you need to do it in a new tab. You can right click your mouse and click "Open link in new tab".'),(0,i.kt)("p",null,"Our basic site now has basic elements including a header, paragraph element, an image, a list, and a hyperlink. In the next lesson, we'll add styling with CSS."))}m.isMDXComponent=!0}}]);