"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[61611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const s={title:"\ud83d\udcd3 1.1.3.3 Divs and Spans",day:"wednesday",id:"1-1-3-3-divs-and-spans",hide_table_of_contents:!0},o=void 0,r={unversionedId:"introduction-to-programming/git-html-and-css/1-1-3-3-divs-and-spans",id:"introduction-to-programming/git-html-and-css/1-1-3-3-divs-and-spans",title:"\ud83d\udcd3 1.1.3.3 Divs and Spans",description:"Classes are great for selectively applying styles to certain parts of your web pages. But sometimes you'll have entire sections of your pages that you want to style a certain way, and adding a style to every tag gets annoying. Here's a new page I made about fish. Notice how several elements in a row all have the same class:",source:"@site/docs/1_introduction-to-programming/1_git-html-and-css/BD-1-1-3-3-divs-and-spans.md",sourceDirName:"1_introduction-to-programming/1_git-html-and-css",slug:"/introduction-to-programming/git-html-and-css/1-1-3-3-divs-and-spans",permalink:"/v1.2/introduction-to-programming/git-html-and-css/1-1-3-3-divs-and-spans",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 1.1.3.3 Divs and Spans",day:"wednesday",id:"1-1-3-3-divs-and-spans",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\u270f\ufe0f 1.1.3.2 Practice: Styling with Classes",permalink:"/v1.2/introduction-to-programming/git-html-and-css/1-1-3-2-practice-styling-with-classes"},next:{title:"\u270f\ufe0f 1.1.3.4 Practice: Divs and Spans",permalink:"/v1.2/introduction-to-programming/git-html-and-css/1-1-3-4-practice-divs-and-spans"}},l={},p=[],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Classes are great for selectively applying styles to certain parts of your web pages. But sometimes you'll have entire sections of your pages that you want to style a certain way, and adding a style to every tag gets annoying. Here's a new page I made about fish. Notice how several elements in a row all have the same class:"),(0,i.kt)("div",{class:"filename"},"fish.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <link href="css/styles.css" rel="stylesheet" type="text/css" media="all">\n  <title>Everything about fish</title>\n</head>\n<body>\n  <h1>Everything about fish</h1>\n\n  <p>Here is everything you need to know about fish. First, the important stuff:</p>\n\n  <h2 class="important">Types of fish</h2>\n\n  <p class="important">There are many types of fish. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n\n  <p class="important">Here are some types of fish:</p>\n\n  <ul class="important">\n    <li>Goldfish</li>\n    <li>Catfish</li>\n    <li>And lots, lots more!</li>\n  </uL>\n\n  <h2 class="important">Other important stuff</h2>\n\n  <p class="important">Here is some other really important stuff about fish. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n\n  <p>Now, for some less important stuff about fish.</p>\n\n  <h2 class="unimportant">Fish like to play golf</h2>\n\n  <p class="unimportant">Little-known fact: fish like to play golf. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n\n  <h2 class="unimportant">Fish are not mammals</h2>\n\n  <p class="unimportant">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n</body>\n</html>\n')),(0,i.kt)("p",null,"Let's learn a new tag that will simplify all of this: the ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>")," tag."),(0,i.kt)("div",{class:"filename"},"fish.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <title>Everything about fish</title>\n</head>\n<body>\n  <h1>Everything about fish</h1>\n\n  <p>Here is everything you need to know about fish. First, the important stuff:</p>\n\n  <div class="important">\n    <h2>Types of fish</h2>\n\n    <p>There are many types of fish. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n\n    <p>Here are some types of fish:</p>\n\n    <ul>\n      <li>Goldfish</li>\n      <li>Catfish</li>\n      <li>And lots, lots more!</li>\n    </uL>\n\n    <h2>Other important stuff</h2>\n\n    <p>Here is some other really important stuff about fish. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n  </div>\n\n  <p>Now, for some less important stuff about fish.</p>\n\n  <div class="unimportant">\n    <h2>Fish like to play golf</h2>\n\n    <p>Little-known fact: fish like to play golf. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n\n    <h2>Fish are not mammals</h2>\n\n    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n  </div>\n</body>\n</html>\n')),(0,i.kt)("p",null,"Then, we can style entire areas of the page using selectors for ",(0,i.kt)("inlineCode",{parentName:"p"},".important")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".unimportant"),", for example:"),(0,i.kt)("div",{class:"filename"},"styles.css"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".important {\n  color: red;\n}\n\n.unimportant {\n  color: blue;\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>")," tag does nothing on its own: it's just a place to add a class that is then applied to everything that is nested within it. It's ",(0,i.kt)("em",{parentName:"p"},"very")," common to apply styles by using ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>")," tags to separate the content of your pages. Typically, in your CSS, you won't even explicitly label a selector as being for a ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>"),"; in other words, you'd write ",(0,i.kt)("inlineCode",{parentName:"p"},".important"),", rather than ",(0,i.kt)("inlineCode",{parentName:"p"},"div.important"),"."),(0,i.kt)("p",null,"Remember my little lecture about how good code is code that is easy to change? We just made our code easier to change: if we want to change the class name, we only have to change one ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>")," instead of all of the elements that are now nested inside of it. Nice!"),(0,i.kt)("p",null,"For inline elements, there's a similar tag called ",(0,i.kt)("inlineCode",{parentName:"p"},"<span>"),":"),(0,i.kt)("div",{class:"filename"},"fish.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<p>There are many types of <span class="highlight">fish</span>. For example, there are <span class="fish-type">red</span> fish, <span class="fish-type">green</span> fish, <span class="fish-type">one</span> fish, and <span class="fish-type">two</span> fish. There are also <span class="highlight">more types of fish than you could possibly imagine</span>.</p>\n')),(0,i.kt)("p",null,"And we can style these inline elements with ",(0,i.kt)("inlineCode",{parentName:"p"},".highlight")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".fish-type"),"."),(0,i.kt)("p",null,"At first, it might be a little confusing to know when to use a ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," versus a ",(0,i.kt)("inlineCode",{parentName:"p"},"span"),". Let's look at a quick example. The following code uses both a ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"span"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\n<div class="important">\n  All of the code within the div class "important" will be <span class="highlight">red</span>. Note how the span here is inline because it targets only one word? We can use spans to target text that is less than one line (inline) while we\'d use divs to target text that is more than one line (multiline).\n</div>\n')),(0,i.kt)("p",null,"As noted in the code, we'd use a div for text that covers multiple lines of text while we'd use a span for text that covers less than a line of code."),(0,i.kt)("p",null,"We won't be using spans very often but it's still important to know about them. On the other hand, we'll be using divs all the time."))}c.isMDXComponent=!0}}]);