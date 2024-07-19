"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[19275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=o.createContext({}),d=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(r.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,u=p["".concat(r,".").concat(m)]||p[m]||h[m]||a;return n?o.createElement(u,s(s({ref:t},c),{},{components:n})):o.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[p]="string"==typeof e?e:i,s[1]=l;for(var d=2;d<a;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const a={title:"\ud83d\udcd3 1.1.4.8 Bootstrap Grid System",day:"thursday",id:"1-1-4-8-bootstrap-grid-system",hide_table_of_contents:!0},s=void 0,l={unversionedId:"introduction-to-programming/git-html-and-css/1-1-4-8-bootstrap-grid-system",id:"introduction-to-programming/git-html-and-css/1-1-4-8-bootstrap-grid-system",title:"\ud83d\udcd3 1.1.4.8 Bootstrap Grid System",description:"Lining up content evenly with only HTML and CSS can prove to be pretty challenging. That's why another most commonly-used Bootstrap feature is their grid system. The grid system allows us to use several Bootstrap classes to quickly create a wide variety of invisible grids that neatly space and line up content.",source:"@site/docs/1_introduction-to-programming/1_git-html-and-css/BT-1-1-4-8-bootstrap-grid-system.md",sourceDirName:"1_introduction-to-programming/1_git-html-and-css",slug:"/introduction-to-programming/git-html-and-css/1-1-4-8-bootstrap-grid-system",permalink:"/v1/introduction-to-programming/git-html-and-css/1-1-4-8-bootstrap-grid-system",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 1.1.4.8 Bootstrap Grid System",day:"thursday",id:"1-1-4-8-bootstrap-grid-system",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\u270f\ufe0f 1.1.4.7 Practice: Installing and Implementing Bootstrap",permalink:"/v1/introduction-to-programming/git-html-and-css/1-1-4-7-practice-installing-and-implementing-bootstrap"},next:{title:"\ud83d\udcd3 1.1.4.9 Customizing Styles with Bootstrap",permalink:"/v1/introduction-to-programming/git-html-and-css/1-1-4-9-customizing-styles-with-bootstrap"}},r={},d=[{value:"Bootstrap Grid System",id:"bootstrap-grid-system",level:2},{value:"Column Class Name Format",id:"column-class-name-format",level:3},{value:"Updating Our First Section at Epicodus Site",id:"updating-our-first-section-at-epicodus-site",level:2}],c={toc:d},p="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Lining up content evenly with only HTML and CSS can prove to be pretty challenging. That's why another most commonly-used Bootstrap feature is their grid system. The ",(0,i.kt)("a",{parentName:"p",href:"http://getbootstrap.com/css/#grid"},"grid system")," allows us to use several Bootstrap classes to quickly create a wide variety of invisible grids that neatly space and line up content."),(0,i.kt)("p",null,"In this lesson, we'll explore how to implement this powerful feature in our own projects."),(0,i.kt)("p",null,"The Bootstrap grid system contains just two parts: rows and columns. It is built on a powerful CSS concept known as the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"},"flexbox"),". The flexbox is a very important layout model for web designers, so if you have a specific interest in design, we recommend exploring it further on your own."),(0,i.kt)("p",null,"The good news is that we can easily implement Bootstrap's grid system and take advantage of this functionality without knowing anything about flexbox at all. That's exactly what we'll do in this lesson."),(0,i.kt)("h2",{id:"bootstrap-grid-system"},"Bootstrap Grid System"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"A bootstrap grid is a set of rows, each containing columns. There is no limit to the number of rows a page can have \u2014 but there can be no more than twelve columns. Let's add another file to our ",(0,i.kt)("inlineCode",{parentName:"p"},"section-in-review")," project called ",(0,i.kt)("inlineCode",{parentName:"p"},"bootstrap.html"),". This file isn't really meant to be part of our project \u2014 it's just an opportunity to practice with Bootstrap."),(0,i.kt)("p",null,"Next, add the following code:"),(0,i.kt)("div",{class:"filename"},"bootstrap.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <title>Bootstrap Grid System</title>\n  <link href="css/bootstrap.css" rel="stylesheet" type="text/css">\n</head>\n<body>\n  <div class="container">\n    <div class="row">\n      <div class="col-6">\n        <h1>Column 1</h1>\n        <p>Some text here!</p>\n      </div>\n      <div class="col-6">\n        <h1>Column 2</h1>\n        <p>Some text here!</p>\n      </div>\n    </div>\n  </div>\n</body>\n</html>\n')),(0,i.kt)("p",null,"Let's take a look in the browser and then discuss what we're doing here."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"An example of two columns in the browser.",src:n(77288).Z,width:"2074",height:"558"})),(0,i.kt)("p",null,"As we can see, we have two columns of equal width. Just as with other Bootstrap elements, they are responsive if we resize the page."),(0,i.kt)("p",null,"Now let's take a look at the Bootstrap format for creating these columns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="row">\n  <div class="col-6">\n    \x3c!-- Column 1 --\x3e\n  </div>\n  <div class="col-6">\n    \x3c!-- Column 2 --\x3e\n  </div>\n</div>\n')),(0,i.kt)("p",null,"Here, we have two columns nested in one row. The class of each column div is ",(0,i.kt)("inlineCode",{parentName:"p"},'"col-6"'),". Why 6, though? Well, remember that we can have up to twelve columns in a row. We can think of each of these columns as a single unit of width. So to make up half of the width of the page, we need six of those units. In order to have two columns then, each taking up half the width of the page, we need each of them to take up six units \u2014 that's why the class name is ",(0,i.kt)("inlineCode",{parentName:"p"},'"col-6"'),"."),(0,i.kt)("p",null,"If we wanted to have three equal columns, we'd do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="row">\n  <div class="col-4">\n    \x3c!-- Column 1 --\x3e\n  </div>\n  <div class="col-4">\n    \x3c!-- Column 2 --\x3e\n  </div>\n  <div class="col-4">\n    \x3c!-- Column 3 --\x3e\n  </div>\n</div>\n')),(0,i.kt)("p",null,"The difference here is that we use the class ",(0,i.kt)("inlineCode",{parentName:"p"},'"col-4"'),". This is because twelve divided by three is four \u2014 so our three columns are each four units wide."),(0,i.kt)("p",null,"We could use ",(0,i.kt)("inlineCode",{parentName:"p"},'"col-3"')," if we wanted to have four columns of equal width and ",(0,i.kt)("inlineCode",{parentName:"p"},'"col-2"')," if we wanted to have six columns of equal width."),(0,i.kt)("p",null,"Our columns don't have to be equal width, though. Bootstrap is very flexible and we could create a sidebar by doing something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="row">\n  <div class="col-3">\n    \x3c!-- Column 1 only has a width of 3 units. --\x3e\n  </div>\n  <div class="col-9">\n    \x3c!-- Column 2 has a width of 9 units. --\x3e\n  </div>\n</div>\n')),(0,i.kt)("p",null,"Try it out in the browser. Update the code in the container to have the code above as well as some headers and text. You'll see that the left column is 1/3 of the width of the right column. We could add more styling to the narrower column (such as a different colored background) to make it look more like a sidebar."),(0,i.kt)("p",null,"As long as the total value of units in a row is exactly equal to twelve, this system will work smoothly. Go over twelve and the columns will spill over into a new row (which will cause the page to become a mess). Go under and we will end up with odd white space."),(0,i.kt)("p",null,"Let's take a look at what happens when we have multiple rows. Replace all the content inside the ",(0,i.kt)("inlineCode",{parentName:"p"},'"container"')," class with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="row">\n  <div class="col-6">\n    <h1>Box 1</h1>\n    <p>Some text here!</p>\n  </div>\n  <div class="col-6">\n    <h1>Box 2</h1>\n    <p>Some text here!</p>\n  </div>\n</div>\n<div class="row">\n  <div class="col-6">\n    <h1>Box 3</h1>\n    <p>Some text here!</p>\n  </div>\n  <div class="col-6">\n    <h1>Box 4</h1>\n    <p>Some text here!</p>\n  </div>\n</div>\n')),(0,i.kt)("p",null,"Here's what this looks like in the browser:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"An example of multiple Bootstrap rows.",src:n(47910).Z,width:"1362",height:"478"})),(0,i.kt)("p",null,"Unlike with columns, which have a certain width, rows do not have a specific preset height. Additional CSS and Bootstrap rules are necessary to alter the height of rows."),(0,i.kt)("p",null,"There are a few important things to remember when working with the Bootstrap grid system:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rows must reside in a container. They don't necessarily need their own special container; if everything within the ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>")," tags is housed in a container div, that will work just fine.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Additionally, all columns ",(0,i.kt)("em",{parentName:"p"},"must")," reside within a row. And each row may contain up to 12 column units. We'll discuss this in further detail in just a moment."))),(0,i.kt)("h3",{id:"column-class-name-format"},"Column Class Name Format"),(0,i.kt)("p",null,"We can actually make our columns even more specific by adding a media query. The format for doing so looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"col-<media query>-<width>\n")),(0,i.kt)("p",null,"If we were working with ",(0,i.kt)("inlineCode",{parentName:"p"},'"col-6"'),", we could update this to add a media query like this: ",(0,i.kt)("inlineCode",{parentName:"p"},'"col-lg-6"'),"."),(0,i.kt)("p",null,"The media query portion of the column class name has several options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"xs"),': "Extra small" is used for phones'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sm"),': "Small" is used for tablets'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"md"),': "Medium" is used for desktops'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lg"),': "Large" is used for large desktops')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"xs"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"md"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"lg")," prefixes in column classes denote how narrow the viewport may become before the columns stack upon one another. In other words, Bootstrap has established an ideal breakpoint for when the columns should be. For example, here's the breakpoint for the ",(0,i.kt)("inlineCode",{parentName:"p"},"sm")," media query:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This GIF demonstrates where the breakpoint is for the small media query. The columns stack when the breakpoint is reached.",src:n(44887).Z,width:"800",height:"408"})),(0,i.kt)("p",null,"This is really nice because we wouldn't want to have two tiny and difficult to read columns on a smaller device like a phone or a tablet."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/layout/overview/#responsive-breakpoints"},"responsive breakpoints")," section of the Bootstrap Overview documentation gives more information on these media queries."),(0,i.kt)("h2",{id:"updating-our-first-section-at-epicodus-site"},"Updating Our First Section at Epicodus Site"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now that we have a little practice with the Bootstrap grid system, we can delete ",(0,i.kt)("inlineCode",{parentName:"p"},"bootstrap.html"),". Let's update the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file of our project in ",(0,i.kt)("inlineCode",{parentName:"p"},"section-in-review")," to incorporate a grid system."),(0,i.kt)("p",null,"We currently have 6 sections in our \"First Section at Epicodus\" website: Command Line, HTML, CSS, Bootstrap, and Partnering. Let's organize these into two rows of three columns, each with cards. Here's the updated code of ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>"),":"),(0,i.kt)("div",{class:"filename"},"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'...\n<body>\n  <div class="container">\n    <div class="jumbotron">\n      <h1>My First Section at Epicodus</h1>\n      <p>\n        I\'ve almost finished my first course section at Epicodus. Here are some of the things I\'ve learned so far:\n      </p>\n    </div>\n    <div class="row">\n      <div class="col-md-4">\n        <div class="card">\n          <div class="card-body">\n            <h2 class="card-title">Command Line</h2>\n            <ul class="card-text">\n              <li>Navigating my documents through the command line.</li>\n              <li>Creating new files and folders through the command line.</li>\n              <li>Moving and deleting files and folders through the command line.</li>\n              <li>Retrieving my current location from the command line.</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class="col-md-4">\n        <div class="card">\n          <div class="card-body">\n            <h2 class="card-title">Git and Github</h2>\n            <ul class="card-text">\n              <li>Initializing local Git repository, and create remote GitHub repositories.</li>\n              <li>Tracking and committing changes with Git.</li>\n              <li>Pushing a local Git repository to a remote GitHub repository.</li>\n              <li>Branching a project to make multiple copies.</li>\n              <li>Merging multiple Git branches back together.</li>\n              <li>Cloning down a project from GitHub to my local machine.</li>\n              <li class="bg-success">Publishing a website on GitHub pages.</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class="col-md-4">\n        <div class="card">\n          <div class="card-body">\n            <h2 class="card-title">HTML</h2>\n            <ul class="card-text">\n              <li>Using HTML tags to create websites.</li>\n              <li>Indenting and organizing HTML correctly.</li>\n              <li>Incorporating block elements.</li>\n              <li>Including inline elements.</li>\n              <li>Using both spans and divs.</li>\n              <li>Adding classes and ID\'s to style HTML with CSS.</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-md-4">\n        <div class="card">\n          <div class="card-body">\n            <h2 class="card-title">CSS</h2>\n            <ul class="card-text">\n              <li>Creating a stylesheet.</li>\n              <li>Using CSS selectors to specify an HTML element.</li>\n              <li>Writing CSS rules to style particular elements in my HTML.</li>\n              <li>Floating elements to create columns, sidebars, and other alignments.</li>\n              <li>Padding, margins, and the box model.</li>\n              <li>How CSS cascades to apply styles.</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class="col-md-4">\n        <div class="card">\n          <div class="card-body">\n            <h2 class="card-title">Bootstrap</h2>\n            <ul class="card-text">\n              <li>Downloading and installing Bootstrap.</li>\n              <li>Adding Bootstrap styles to a website.</li>\n              <li>Navigating Bootstrap documentation.</li>\n              <li class="bg-success">Creating websites with Bootstrap.</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class="col-md-4">\n        <div class="card">\n          <div class="card-body">\n            <h2 class="card-title">Partnering</h2>\n            <div class="card-text">\n              <blockquote class="blockquote">\n                <p>"It\'s been really good working with you!"</p>\n                <footer class="blockquote-footer">My partner the first day</footer>\n              </blockquote>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n')),(0,i.kt)("p",null,"Each row contains three columns with a class of ",(0,i.kt)("inlineCode",{parentName:"p"},'"col-md-4"')," and each of these columns contains a single card. We also have a ",(0,i.kt)("em",{parentName:"p"},"lot")," more code in the body of our HTML. Good indentation is very important so we can make sure we don't have one div too many \u2014 or too few."),(0,i.kt)("p",null,"Try it out in the browser. We'll see two rows, each with three cards. Each card has equal width while the height of the row is determined by the tallest card. The height of the card itself is determined by the amount of text in it. It's nowhere near perfect but it's a good start."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bootstrap grid with rows, columns, and cards.",src:n(45486).Z,width:"865",height:"568"})),(0,i.kt)("p",null,"As you might've guessed, it's also responsive, with a breakpoint designed for medium-sized devices."))}h.isMDXComponent=!0},45486:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/bootstrap-grid-updated-3bd16575143acb97666d60b459bfecaa.png"},47910:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/bootstrap-rows-2c6df61c7d44d29e4371a7c3ae5d8821.png"},44887:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/bootstrap-small-breakpoint-d71639aa941d3a25ac2272cb3b54a4da.gif"},77288:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/bootstrap-two-columns-92a2d844b2b3ce5a2ed0f337e5f3b782.png"}}]);