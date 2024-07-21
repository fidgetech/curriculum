"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[48218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),d=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,m=p["".concat(r,".").concat(u)]||p[u]||h[u]||i;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={title:"\ud83d\udcd3 1.1.4.6 Bootstrap Basic Elements",day:"thursday",id:"1-1-4-6-bootstrap-basic-elements",hide_table_of_contents:!0},s=void 0,l={unversionedId:"introduction-to-programming/git-html-and-css/1-1-4-6-bootstrap-basic-elements",id:"introduction-to-programming/git-html-and-css/1-1-4-6-bootstrap-basic-elements",title:"\ud83d\udcd3 1.1.4.6 Bootstrap Basic Elements",description:"In this lesson, we'll learn how to implement several of the most common Bootstrap resources and styles. These resources will make our projects look considerably nicer without much additional work.",source:"@site/docs/1_introduction-to-programming/1_git-html-and-css/BR-1-1-4-6-bootstrap-basic-elements.md",sourceDirName:"1_introduction-to-programming/1_git-html-and-css",slug:"/introduction-to-programming/git-html-and-css/1-1-4-6-bootstrap-basic-elements",permalink:"/v1.2/introduction-to-programming/git-html-and-css/1-1-4-6-bootstrap-basic-elements",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 1.1.4.6 Bootstrap Basic Elements",day:"thursday",id:"1-1-4-6-bootstrap-basic-elements",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 1.1.4.5 Downloading and Installing Bootstrap",permalink:"/v1.2/introduction-to-programming/git-html-and-css/1-1-4-5-downloading-and-installing-bootstrap"},next:{title:"\u270f\ufe0f 1.1.4.7 Practice: Installing and Implementing Bootstrap",permalink:"/v1.2/introduction-to-programming/git-html-and-css/1-1-4-7-practice-installing-and-implementing-bootstrap"}},r={},d=[{value:"Project Setup",id:"project-setup",level:2},{value:"Adding Bootstrap",id:"adding-bootstrap",level:2},{value:"Bootstrap Styles",id:"bootstrap-styles",level:2},{value:"Containers",id:"containers",level:3},{value:"Jumbotron",id:"jumbotron",level:3},{value:"Typography",id:"typography",level:3},{value:"Blockquotes",id:"blockquotes",level:4},{value:"Built-in Classes",id:"built-in-classes",level:3},{value:"Cards",id:"cards",level:3}],c={toc:d},p="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll learn how to implement several of the most common Bootstrap resources and styles. These resources will make our projects look considerably nicer without much additional work."),(0,o.kt)("h2",{id:"project-setup"},"Project Setup"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We'll create a website to summarize what we've learned so far this in this section \u2014 and we'll add Bootstrap styles along the way."),(0,o.kt)("p",null,"Start by creating a new project directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"section-in-review"),". It will contain an ",(0,o.kt)("inlineCode",{parentName:"p"},".html")," file named ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"css")," directory."),(0,o.kt)("p",null,"Now let's add some starter code to ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html"),":"),(0,o.kt)("div",{class:"filename"},"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en-US\">\n<head>\n  <title>My First Section at Epicodus</title>\n</head>\n<body>\n  <h1>My First Section at Epicodus</h1>\n  <p>\n    I've almost finished my first course section at Epicodus. Here are some of the things I've learned so far:\n  </p>\n  <h2>Command Line</h2>\n  <ul>\n    <li>Navigating my documents through the command line.</li>\n    <li>Creating new files and folders through the command line.</li>\n    <li>Moving and deleting files and folders through the command line.</li>\n    <li>Retrieving my current location from the command line.</li>\n  </ul>\n  <h2>Git and GitHub</h2>\n  <ul>\n    <li>Initializing local Git repository, and create remote GitHub repositories.</li>\n    <li>Tracking and committing changes with Git.</li>\n    <li>Pushing a local Git repository to a remote GitHub repository.</li>\n    <li>Branching a project to make multiple copies.</li>\n    <li>Merging multiple Git branches back together.</li>\n    <li>Cloning down a project from GitHub to my local machine.</li>\n    <li>Publishing a website on GitHub pages.</li>\n  </ul>\n  <h2>HTML</h2>\n  <ul>\n    <li>Using HTML tags to create websites.</li>\n    <li>Indenting and organizing HTML correctly.</li>\n    <li>Incorporating block elements.</li>\n    <li>Including inline elements.</li>\n    <li>Using both spans and divs.</li>\n    <li>Adding classes and ID's to style HTML with CSS.</li>\n  </ul>\n  <h2>CSS</h2>\n  <ul>\n    <li>Creating a stylesheet.</li>\n    <li>Using CSS selectors to specify an HTML element.</li>\n    <li>Writing CSS rules to style particular elements in my HTML.</li>\n    <li>Floating elements to create columns, sidebars, and other alignments.</li>\n    <li>Padding, margins, and the box model.</li>\n    <li>How CSS cascades to apply styles.</li>\n  </ul>\n  <h2>Bootstrap</h2>\n  <ul>\n    <li>Downloading and installing Bootstrap.</li>\n    <li>Adding Bootstrap styles to a website.</li>\n    <li>Navigating Bootstrap documentation.</li>\n    <li>Creating websites with Bootstrap.</li>\n  </ul>\n</body>\n</html>\n")),(0,o.kt)("p",null,"Let's take a look at our site:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"example-site-without-bootstrap",src:n(11635).Z,width:"342",height:"466"})),(0,o.kt)("p",null,"Not very exciting so far. It's time to add Bootstrap!"),(0,o.kt)("h2",{id:"adding-bootstrap"},"Adding Bootstrap"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"As described in the ",(0,o.kt)("a",{parentName:"p",href:"../../introduction-to-programming/git-html-and-css/1-1-4-5-downloading-and-installing-bootstrap"},"Bootstrap: Downloading & Installing")," lesson, let's download a copy of Bootstrap and place the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap.css")," stylesheet into our project's ",(0,o.kt)("inlineCode",{parentName:"p"},"css")," folder."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," We are taking this approach instead of a CDN because it can be useful to take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap.css")," file for development purposes. That's also why we aren't using the minified version."),(0,o.kt)("p",null,"Our project directory should be organized like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"section-in-review\n\u251c\u2500\u2500 css\n\u2502\xa0\xa0 \u2514\u2500\u2500 bootstrap.css\n\u2514\u2500\u2500 index.html\n")),(0,o.kt)("p",null,"Then, we'll link this Bootstrap stylesheet in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," tags of our HTML file:"),(0,o.kt)("div",{class:"filename"},"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'...\n<head>\n  <title>My First Section at Epicodus</title>\n  <link href="css/bootstrap.css" rel="stylesheet" type="text/css">\n</head>\n...\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(",(0,o.kt)("strong",{parentName:"em"},"Note:")," Remember, when ",(0,o.kt)("inlineCode",{parentName:"em"},"...")," is in a code snippet, this simply means that we've omitted code from the file we're depicting, in order to make it clearer to see where changes have occurred.)")),(0,o.kt)("h2",{id:"bootstrap-styles"},"Bootstrap Styles"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If we refresh our page, we'll see it already looks different:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"example-site-with-bootstrap",src:n(30434).Z,width:"366",height:"520"})),(0,o.kt)("p",null,"It looks a little better, but we've hardly scratched the surface of what we can do. Bootstrap provides many styling rules we can apply to our HTML. Let's add one now."),(0,o.kt)("h3",{id:"containers"},"Containers"),(0,o.kt)("p",null,"One of the most commonly-used Bootstrap elements is a ",(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/layout/overview/"},"container"),". Containers wrap our content and add padding that dynamically increases or decreases in size depending on the user's viewport."),(0,o.kt)("p",null,"We can add a container to our HTML like this:"),(0,o.kt)("div",{class:"filename"},"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <title>My First Section at Epicodus</title>\n  <link href="css/bootstrap.css" rel="stylesheet" type="text/css">\n</head>\n<body>\n  <div class="container">\n\n    ...\n\n  </div>\n</body>\n</html>\n')),(0,o.kt)("p",null,"Here we've placed a div directly inside our ",(0,o.kt)("inlineCode",{parentName:"p"},"<body>")," tags with a class of ",(0,o.kt)("inlineCode",{parentName:"p"},"container"),". (Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"...")," is a placeholder for all our body HTML \u2014 don't remove the HTML from your own project.)"),(0,o.kt)("p",null,"If we refresh the page, we'll see that padding has been added around the edges of our content:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"When we add a Bootstrap container, padding is automatically added.",src:n(48346).Z,width:"422",height:"527"})),(0,o.kt)("p",null,"Also, if we resize the width of the browser window, we can see that the amount of padding automatically changes depending on the size of the viewport. When we integrate Bootstrap elements and components into our pages, they're automatically responsive."),(0,o.kt)("p",null,"Bootstrap is essentially a really big CSS stylesheet. Earlier, we learned how to ",(0,o.kt)("a",{parentName:"p",href:"../../introduction-to-programming/git-html-and-css/1-1-3-1-styling-with-classes"},"add classes to HTML elements")," to style our pages. Adding Bootstrap's built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"container")," class is very similar. But instead of manually defining CSS rules that style anything with the ",(0,o.kt)("inlineCode",{parentName:"p"},"container")," class in our ",(0,o.kt)("em",{parentName:"p"},"own")," stylesheet, the Bootstrap stylesheet we included in our project ",(0,o.kt)("em",{parentName:"p"},"already has")," CSS rules for the ",(0,o.kt)("inlineCode",{parentName:"p"},"container")," class defined. All we need to do is add this class in order to make use of the CSS in the  ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap.css")," file!"),(0,o.kt)("h3",{id:"jumbotron"},"Jumbotron"),(0,o.kt)("p",null,"Another commonly-used Bootstrap element is something called a ",(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/jumbotron/"},"Jumbotron"),". Jumbotrons are primarily used to add emphasis to content on a page. They'll often be placed at the top of the page to act as a heading."),(0,o.kt)("p",null,"Just like the container, we can add a Jumbotron by including a div with the ",(0,o.kt)("inlineCode",{parentName:"p"},"jumbotron")," class wherever we'd like it to appear. Let's place ours at the top of the page, directly within our container:"),(0,o.kt)("div",{class:"filename"},"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n  <body>\n    <div class="container">\n      <div class="jumbotron">\n        <h1>My First Section at Epicodus</h1>\n        <p>\n          I\'ve almost finished my first course section at Epicodus. Here are some of the things I\'ve learned so far:\n        </p>\n      </div>\n\n...\n')),(0,o.kt)("p",null,"We can refresh the page and see our new Jumbotron:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"site-with-jumbotron",src:n(50217).Z,width:"710",height:"394"})),(0,o.kt)("p",null,"Once again, this element is automatically responsive. Our jumbotron will re-center itself and its text as the width of the viewport changes."),(0,o.kt)("h3",{id:"typography"},"Typography"),(0,o.kt)("h4",{id:"blockquotes"},"Blockquotes"),(0,o.kt)("p",null,"Bootstrap also includes many easy ways to style text. For instance, we can add ",(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.0/content/typography/"},"blockquotes")," to display nicely-formatted quotes on our page."),(0,o.kt)("p",null,"Let's add another section to our site. We'll call it \"Partnering\" and it will contain a quote from one of our partners this section:"),(0,o.kt)("div",{class:"filename"},"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n      <h2>Bootstrap</h2>\n      <ul>\n        <li>Downloading and installing Bootstrap.</li>\n        <li>Adding Bootstrap styles to a website.</li>\n        <li>Navigating Bootstrap documentation.</li>\n        <li>Creating websites with Bootstrap.</li>\n      </ul>\n      <h2>Partnering</h2>\n      <blockquote class="blockquote">\n        <p>"It\'s been really good working with you!"</p>\n        <footer class="blockquote-footer">My partner the first day</footer>\n      </blockquote>\n    </div>\n  </body>\n</html>\n')),(0,o.kt)("p",null,"To do this, we need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"blockquote")," with a class of ",(0,o.kt)("inlineCode",{parentName:"p"},'"blockquote"'),". Inside that class, we can specify a ",(0,o.kt)("inlineCode",{parentName:"p"},"footer")," with a class of ",(0,o.kt)("inlineCode",{parentName:"p"},'"blockquote-footer"')," for the attribution of the quote. Check it out:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A Bootstrap blockquote",src:n(34464).Z,width:"806",height:"254"})),(0,o.kt)("h3",{id:"built-in-classes"},"Built-in Classes"),(0,o.kt)("p",null,"Another great feature of Bootstrap is the wide variety of built-in classes we can add to almost any element."),(0,o.kt)("p",null,"Let's highlight a few concepts we found enjoyable during this course section in green. We can do this by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"bg-success")," class to various ",(0,o.kt)("inlineCode",{parentName:"p"},"<li>")," tags on our page."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bg"),' stands for "background", and ',(0,o.kt)("inlineCode",{parentName:"p"},"success")," is a name used throughout Bootstrap to refer to a particular shade of green:"),(0,o.kt)("div",{class:"filename"},"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n      <h2>Git and GitHub</h2>\n      <ul>\n\n         ...\n\n        <li class="bg-success">Publishing a website on GitHub pages.</li>\n\n         ...\n\n      </ul>\n      <h2>CSS</h2>\n      <ul>\n\n        ...\n\n        <li class="bg-success">How CSS cascades to apply styles.</li>\n      </ul>\n      <h2>Bootstrap</h2>\n      <ul>\n\n        ...\n\n        <li class="bg-success">Creating websites with Bootstrap.</li>\n...\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The bg-success class adds a green background to our list items.",src:n(91986).Z,width:"398",height:"487"})),(0,o.kt)("p",null,"Similarly, we could use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bg-info")," class on our existing blockquote to add some color. Try it out on some of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<li>"),"s in the project."),(0,o.kt)("h3",{id:"cards"},"Cards"),(0,o.kt)("p",null,"Another simple effect that can easily organize a page is a ",(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/card/"},"card"),". It allows us to organize content inside a card. Let's update our HTML and then take a look."),(0,o.kt)("div",{class:"filename"},"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'...\n    <div class="card">\n      <div class="card-body">\n        <h2 class="card-title">Command Line</h2>\n        <ul class="card-text">\n          <li>Navigating my documents through the command line.</li>\n          <li>Creating new files and folders through the command line.</li>\n          <li>Moving and deleting files and folders through the command line.</li>\n          <li>Retrieving my current location from the command line.</li>\n        </ul>\n      </div>\n    </div>\n...\n')),(0,o.kt)("p",null,"Our card has a class of ",(0,o.kt)("inlineCode",{parentName:"p"},'"card"')," and then we have various classes inside the card depending on the element: ",(0,o.kt)("inlineCode",{parentName:"p"},'"card-body"')," for the body of the card, ",(0,o.kt)("inlineCode",{parentName:"p"},'"card-title"')," for the title, and ",(0,o.kt)("inlineCode",{parentName:"p"},'"card-text"')," for the text. Here's what it looks like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"This is an example of a very basic card.",src:n(20238).Z,width:"1970",height:"434"})),(0,o.kt)("p",null,"This is a very basic card and we can do a lot more with it \u2014 for instance, there's an option to add images that fit inside the card as well. Just check out the ",(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/card/"},"documentation"),"."),(0,o.kt)("p",null,"Cards are also automatically responsive and will resize automatically as the user's viewport changes in size."),(0,o.kt)("p",null,"While our site still looks relatively plain, we can do a lot more with Bootstrap. With just a few additional HTML tags, we can quickly transform the style and format of our pages. Make sure to check out the ",(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/alerts/"},"components documentation")," to see some of the things we can do with Bootstrap."),(0,o.kt)("p",null,"In the next few lessons, we'll explore additional Bootstrap elements, how to integrate our own CSS stylesheets with Bootstrap styles, and more."),(0,o.kt)("p",null,"As we move forward in the course, take advantage of Bootstrap to make professional, polished pages for all your projects. You aren't expected to be an expert on styling \u2014 but the nice thing about Bootstrap is that you don't have to be."))}h.isMDXComponent=!0},91986:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bootstrap-bg-success-updated-3e0a9636daced1ffca4c26ce3a8175bf.png"},30434:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example-site-with-bootstrap-updated-39616f1bbefd0f4c28ea0aebd2071307.png"},11635:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example-site-without-bootstrap-updated-d49aad506ae07361199b8757b2c57665.png"},48346:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/site-with-container-updated-93614ecb611f42a8ba0bc6be04f479a4.png"},50217:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/site-with-jumbotron-updated-ee0b8e8bb1f3f7e8918cc3759338d861.png"},34464:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blockquote-a48926296c9e9259803e25a1915430f9.png"},20238:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bootstrap-card-a589d3ee1f74db7949a449e5ab59d19e.png"}}]);