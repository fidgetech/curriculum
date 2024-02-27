"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[87505],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(o),u=a,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||r;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},58595:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=o(87462),a=(o(67294),o(3905));const r={title:"\ud83d\udcd3 1.1.4.5 Downloading and Installing Bootstrap",day:"thursday",id:"1-1-4-5-downloading-and-installing-bootstrap",hide_table_of_contents:!0},i=void 0,s={unversionedId:"introduction-to-programming/git-html-and-css/1-1-4-5-downloading-and-installing-bootstrap",id:"introduction-to-programming/git-html-and-css/1-1-4-5-downloading-and-installing-bootstrap",title:"\ud83d\udcd3 1.1.4.5 Downloading and Installing Bootstrap",description:"In this lesson, we'll walk through how to download and install Bootstrap into one of our own projects.",source:"@site/docs/1_introduction-to-programming/1_git-html-and-css/BQ-1-1-4-5-downloading-and-installing-bootstrap.md",sourceDirName:"1_introduction-to-programming/1_git-html-and-css",slug:"/introduction-to-programming/git-html-and-css/1-1-4-5-downloading-and-installing-bootstrap",permalink:"/introduction-to-programming/git-html-and-css/1-1-4-5-downloading-and-installing-bootstrap",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 1.1.4.5 Downloading and Installing Bootstrap",day:"thursday",id:"1-1-4-5-downloading-and-installing-bootstrap",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 1.1.4.4 Introduction to Bootstrap",permalink:"/introduction-to-programming/git-html-and-css/1-1-4-4-introduction-to-bootstrap"},next:{title:"\ud83d\udcd3 1.1.4.6 Bootstrap Basic Elements",permalink:"/introduction-to-programming/git-html-and-css/1-1-4-6-bootstrap-basic-elements"}},l={},p=[{value:"Downloading Bootstrap",id:"downloading-bootstrap",level:2},{value:"Downloading Files from Bootstrap&#39;s Website",id:"downloading-files-from-bootstraps-website",level:3},{value:"Adding a Downloaded Copy of Bootstrap to a Project",id:"adding-a-downloaded-copy-of-bootstrap-to-a-project",level:3},{value:"Linking to a CDN",id:"linking-to-a-cdn",level:3},{value:"A Few More Notes about Using a CDN",id:"a-few-more-notes-about-using-a-cdn",level:3},{value:"What are the <code>integrity</code> and <code>crossorigin</code> Attributes?",id:"what-are-the-integrity-and-crossorigin-attributes",level:4},{value:"What&#39;s the <code>&lt;script&gt;</code> Tag?",id:"whats-the-script-tag",level:4},{value:"Final Thoughts",id:"final-thoughts",level:4}],d={toc:p},c="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll walk through how to download and install Bootstrap into one of our own projects."),(0,a.kt)("p",null,"There are multiple ways to download Bootstrap. We'll address the two simplest approaches here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Downloading the Bootstrap source code and then adding the files directly to your project")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Using a CDN (content delivery network) to link to Bootstrap online"),(0,a.kt)("p",{parentName:"li"},"In future courses, we'll explore additional ways to integrate Bootstrap and other frameworks into a project."))),(0,a.kt)("h2",{id:"downloading-bootstrap"},"Downloading Bootstrap"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The first way we can add Bootstrap to a project is to download all of the necessary files and add them to our project. Then we'll link to them in our HTML just like we link to our CSS file."),(0,a.kt)("h3",{id:"downloading-files-from-bootstraps-website"},"Downloading Files from Bootstrap's Website"),(0,a.kt)("p",null,"We are currently using Bootstrap version 4.5, which can be downloaded ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/getting-started/download/"},"here"),". Note that later versions of Bootstrap will have differences from the version we use. However, most core functionality will still be the same. We do not recommend using other versions of Bootstrap with our curriculum."),(0,a.kt)("p",null,"Click the ",(0,a.kt)("em",{parentName:"p"},"Download")," button of the first option, which is ",(0,a.kt)("em",{parentName:"p"},"Compiled CSS and JS"),"."),(0,a.kt)("p",null,"This will download a ",(0,a.kt)("inlineCode",{parentName:"p"},".zip")," file. Click on the file to decompress it. Here's what's inside:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Contents of Bootstrap folder",src:o(74235).Z,width:"556",height:"894"})),(0,a.kt)("p",null,"There are two directories: ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"js"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"css")," folder contains files related to Bootstrap CSS. We can use either ",(0,a.kt)("inlineCode",{parentName:"li"},"bootstrap.css")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"bootstrap.min.css")," in our projects. Here's the difference between the two files:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bootstrap.css")," is the larger version of the source code. If we open this file, we'll be able to read all the CSS rules, which can be very helpful when we are just learning about Bootstrap \u2014 and when we want to figure out how to override a Bootstrap rule."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bootstrap.min.css")," is a ",(0,a.kt)("strong",{parentName:"li"},"minified")," file, which means that the source code has been compressed so that it's more efficient for machines to read. However, it's not in a human-readable form anymore. This is great for production (code that's deployed online) because it's faster, but it's not so great for development (code that's in the process of being built \u2014 which is exactly what we are doing). We recommend using ",(0,a.kt)("inlineCode",{parentName:"li"},"bootstrap.css")," for learning purposes.")))),(0,a.kt)("p",null,"We won't worry about other files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," directory."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"js")," directory contains JavaScript code necessary for animations, pop-ups, alerts, and other visual effects, as described ",(0,a.kt)("a",{parentName:"li",href:"https://getbootstrap.com/docs/4.5/getting-started/javascript/"},"here"),". We aren't ready to implement JavaScript in our projects yet so we won't worry about this directory for now.")),(0,a.kt)("h3",{id:"adding-a-downloaded-copy-of-bootstrap-to-a-project"},"Adding a Downloaded Copy of Bootstrap to a Project"),(0,a.kt)("p",null,"To integrate Bootstrap into our project, we simply need to move ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.css")," into the ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," directory of the project we're working on. This would be a good time to practice the ",(0,a.kt)("inlineCode",{parentName:"p"},"$ mv")," command in the terminal, though it's also fine to drag and drop the file."),(0,a.kt)("p",null,"Once the Bootstrap stylesheet is located in our ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," folder, we need to link to it in our site's ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," tags, just as we do with our own stylesheets:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n<head>\n  <link href="css/bootstrap.css" rel ="stylesheet" type="text/css" media="all">\n  <link href="css/styles.css" rel="stylesheet" type="text/css" media="all">\n  <title>Media Queries</title>\n</head>\n...\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(",(0,a.kt)("strong",{parentName:"em"},"Note:")," When you see ellipses (",(0,a.kt)("inlineCode",{parentName:"em"},"..."),") in a code snippet, it means portions of the file were omitted from the example. This keeps examples brief, making it easier to identify the ",(0,a.kt)("strong",{parentName:"em"},"new")," code that has been added.)")),(0,a.kt)("p",null,"As we see here, we can link to multiple stylesheets. However, it's very important that ",(0,a.kt)("em",{parentName:"p"},"our")," stylesheet is listed after the Bootstrap stylesheet. This way, the rules in our stylesheet will override rules that have the same name in the Bootstrap stylesheet. We'll cover this further in a future lesson."),(0,a.kt)("h3",{id:"linking-to-a-cdn"},"Linking to a CDN"),(0,a.kt)("p",null,"We can also add Bootstrap into a project via a ",(0,a.kt)("strong",{parentName:"p"},"content delivery network"),", or ",(0,a.kt)("strong",{parentName:"p"},"CDN"),'. This is the option under the section titled "jsDelivr" on Bootstrap\'s ',(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/getting-started/download/#jsdelivr"},"download page"),". jsDelivr is a content delivery network."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CDN-links-on-bootstraps-website",src:o(30443).Z,width:"837",height:"253"})),(0,a.kt)("p",null,"A content delivery network is exactly what it sounds like \u2014 a network of servers that make content available for users. In this case, Bootstrap is making its stylesheets available online, which means we can just load the online version directly to our project without needing to add any files to our ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," directory."),(0,a.kt)("p",null,"We can copy/paste the ",(0,a.kt)("inlineCode",{parentName:"p"},"<link>")," directly into the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," tags of our sites. This is similar to the manner we've been linking our stylesheets so far. The only difference is that the ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," property refers to an online location instead of a location in our ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n<head>\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">\n  <link href="css/styles.css" rel="stylesheet" type="text/css" media="all">\n  <title>Media Queries</title>\n</head>\n...\n')),(0,a.kt)("h3",{id:"a-few-more-notes-about-using-a-cdn"},"A Few More Notes about Using a CDN"),(0,a.kt)("h4",{id:"what-are-the-integrity-and-crossorigin-attributes"},"What are the ",(0,a.kt)("inlineCode",{parentName:"h4"},"integrity")," and ",(0,a.kt)("inlineCode",{parentName:"h4"},"crossorigin")," Attributes?"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"integrity")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"crossorigin")," attributes are used for ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/SRI/"},"Subresource Integrity (SRI)")," checking. According to ",(0,a.kt)("a",{parentName:"p",href:"https://www.srihash.org/"},"srihash.org"),", SRI checking allows browsers to ensure that resources hosted on third-party servers (like Bootstrap's CSS library that we are accessing via CDN) have not been tampered with. Performing SRI checking is a best practice set by W3C, the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/Consortium/"},"World Wide Web Consortium"),", an international organization that sets standards for the web."),(0,a.kt)("p",null,"Note, you do not need to retain any of the above information. However, it is interesting and you are welcome to read more on your own!"),(0,a.kt)("h4",{id:"whats-the-script-tag"},"What's the ",(0,a.kt)("inlineCode",{parentName:"h4"},"<script>")," Tag?"),(0,a.kt)("p",null,"You likely also noticed a ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tag in the Bootstrap CDN links:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"><\/script>\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tag lets us add executable code to our HTML, like JavaScript. This specific script tag lets us use Bootstrap's JavaScript library in our project (which we source via the CDN). "),(0,a.kt)("p",null,"We'll learn all about JavaScript and the ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tag in the next section. For now, it's helpful to know that JavaScript enables interactivity for webpages, like visual effects or animations. Because of this, many Bootstrap elements require JavaScript. Examples include dropdown menus, modal windows, and so on. If you'd like to see an example, check out ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/modal/#live-demo"},"this demo of a Bootstrap modal that uses JavaScript"),'. Make sure to click the button "Launch demo modal".'),(0,a.kt)("p",null,"Since we won't begin exploring JavaScript until the next section, we recommend holding off on adding any JavaScript features for now. This means you do not need to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tag for Bootstrap's JS library in your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," tags. Also, you will never be expected to add any Bootstrap JavaScript features for an independent project at Epicodus, so it's up to you if you eventually want to explore them further."),(0,a.kt)("p",null,"If you do want to explore JavaScript features, the easiest way to do this is to include the CDN link to Bootstrap's JavaScript file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," tags of your HTML document. "),(0,a.kt)("p",null,"To learn which elements require JavaScript, visit ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/getting-started/introduction/#components"},"Bootstrap's JavaScript Documentation"),'. Make sure to select the drop down that says "Show components requiring JavaScript".'),(0,a.kt)("h4",{id:"final-thoughts"},"Final Thoughts"),(0,a.kt)("p",null,"If we use a CDN, we have to have an internet connection for it to work \u2014 otherwise our project won't be able to access the content. Overall, though, CDNs are a great way to go \u2014 they are very fast and reliable."),(0,a.kt)("p",null,"Ultimately, both approaches we mention above work well. Now that we know how to add Bootstrap to our own projects, we're ready to start working with Bootstrap styles."))}h.isMDXComponent=!0},74235:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/bootstrap-contents-c2efc317392960242edd5f7e272f1621.png"},30443:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/bootstrap-cdn-with-jsdeliver-10013fc63909a78f281f23e7533833d0.png"}}]);