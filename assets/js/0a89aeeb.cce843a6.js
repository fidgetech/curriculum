"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[80005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||i;return n?r.createElement(u,a(a({ref:t},p),{},{components:n})):r.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},62794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"\ud83d\udcd3 1.1.1.9 HTML Block Elements Part 2",day:"monday",id:"1-1-1-9-html-block-elements-part-2",hide_table_of_contents:!0},a=void 0,l={unversionedId:"introduction-to-programming/git-html-and-css/1-1-1-9-html-block-elements-part-2",id:"introduction-to-programming/git-html-and-css/1-1-1-9-html-block-elements-part-2",title:"\ud83d\udcd3 1.1.1.9 HTML Block Elements Part 2",description:"Now let's create a second web page using HTML block elements in our my-first-webpage project.  We'll have two web pages in our directory.  The new page will list a few of our favorite things.",source:"@site/docs/1_introduction-to-programming/1_git-html-and-css/AJ-1-1-1-9-html-block-elements-part-2.md",sourceDirName:"1_introduction-to-programming/1_git-html-and-css",slug:"/introduction-to-programming/git-html-and-css/1-1-1-9-html-block-elements-part-2",permalink:"/v1.2/introduction-to-programming/git-html-and-css/1-1-1-9-html-block-elements-part-2",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 1.1.1.9 HTML Block Elements Part 2",day:"monday",id:"1-1-1-9-html-block-elements-part-2",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 1.1.1.8 HTML Block Elements: <p> Tags, Headings, List Elements, and More",permalink:"/v1.2/introduction-to-programming/git-html-and-css/1-1-1-8-html-block-elements-p-tags-headings-list-elements-and-more"},next:{title:"\u270f\ufe0f 1.1.1.10 Practice: Block Elements",permalink:"/v1.2/introduction-to-programming/git-html-and-css/1-1-1-10-practice-block-elements"}},s={},c=[],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now let's create a second web page using HTML block elements in our ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-webpage")," project.  We'll have two web pages in our directory.  The new page will list a few of our favorite things."),(0,o.kt)("p",null,"When we want to add a file to a project directory, we need to make sure we are in the correct directory.  For this new page, we'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"$ pwd")," to ensure that we are in ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-webpage"),".  If not, we'll navigate to the correct folder and then add a new html file called ",(0,o.kt)("inlineCode",{parentName:"p"},"favorite-things.html"),".  Once added, we'll open our project in our text editor so that we can add the content for our new page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ pwd\n/Users/staff/Desktop/my-first-webpage\n$ touch favorite-things.html\n$ code .\n")),(0,o.kt)("p",null,"Type the following HTML into ",(0,o.kt)("inlineCode",{parentName:"p"},"favorite-things.html"),".  Resist the urge to cut and paste.  An often overlooked part of learning to code is developing the muscle memory of typing code which is different than typing regular text.  We need to learn the rhythm of indenting, spacing and moving around your code and that only evolves with the repetition of hands on keys."),(0,o.kt)("p",null,"As you type this file content, think through how each tag will impact the way the text will display in the browser."),(0,o.kt)("div",{class:"filename"},"favorite-things.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <title>Michael\'s favorite things</title>\n</head>\n<body>\n  <h1>My favorite things</h1>\n  <h2>These are a few of my favorite things.</h2>\n\n  <h3>People</h3>\n  <p>Here are some of my favorite people!</p>\n  <ul>\n    <li>My brother Christopher</li>\n    <li>My mom and dad:\n      <ul>\n        <li>Steve</li>\n        <li>Carol</li>\n      </ul>\n    </li>\n    <li>My friend Jessica</li>\n    <li>My friend Candy</li>\n  </ul>\n\n  <h3>Flavors of ice cream</h3>\n  <p>These are my three favorites, in order:</p>\n  <ol>\n    <li>Pistachio</li>\n    <li>Malted milk chocolate</li>\n    <li>Black licorice (really!)</li>\n  </ol>\n\n  <p>Thanks for reading about me!</p>\n</body>\n</html>\n')),(0,o.kt)("p",null,"Let's take a look!"),(0,o.kt)("p",null,"After finish this and seeing it display as we expect it to, we'll make sure to commit our changes with Git and push the updated project to GitHub:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ git add favorite-things.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'$ git commit -m "add web page with info on favorite things"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ git push [remote nickname] main")," (replacing nickname with the same nickname you used when you added the remote link in the previous lesson)"),(0,o.kt)("li",{parentName:"ul"},"check on GitHub that your ",(0,o.kt)("inlineCode",{parentName:"li"},"my-first-webpage")," repository now contains both ",(0,o.kt)("inlineCode",{parentName:"li"},"my-first-webpage.html")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"favorite-things.html"),".")))}d.isMDXComponent=!0}}]);