"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[35353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},v="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),v=s(n),m=o,u=v["".concat(p,".").concat(m)]||v[m]||c[m]||a;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[v]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"\ud83d\udcd3 2.2.0.17 Improving Development with a Live Development Server",day:"weekend",id:"2-2-0-17-improving-development-with-a-live-development-server",hide_table_of_contents:!0},i=void 0,l={unversionedId:"intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-17-improving-development-with-a-live-development-server",id:"version-1.1/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-17-improving-development-with-a-live-development-server",title:"\ud83d\udcd3 2.2.0.17 Improving Development with a Live Development Server",description:"We'll improve our developer experience further by using a live development server for webpack. With a live development server, any time we make changes to our code, it's automatically re-bundled and our browser window is reloaded.",source:"@site/versioned_docs/version-1.1/2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript/AQ-2-2-0-17-improving-development-with-a-live-development-server.md",sourceDirName:"2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript",slug:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-17-improving-development-with-a-live-development-server",permalink:"/v1.1/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-17-improving-development-with-a-live-development-server",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 2.2.0.17 Improving Development with a Live Development Server",day:"weekend",id:"2-2-0-17-improving-development-with-a-live-development-server",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.2.0.16 Improving Development with Source Maps for Debugging",permalink:"/v1.1/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-16-improving-development-with-source-maps-for-debugging"},next:{title:"\ud83d\udcd3 2.2.0.18 Improving Development by Linting Code",permalink:"/v1.1/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-18-improving-development-by-linting-code"}},p={},s=[{value:"webpack Development Server",id:"webpack-development-server",level:2},{value:"Writing a New npm Script",id:"writing-a-new-npm-script",level:3},{value:"If webpack-dev-server Doesn&#39;t Work",id:"if-webpack-dev-server-doesnt-work",level:3}],d={toc:s},v="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(v,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We'll improve our developer experience further by using a live development server for webpack. With a ",(0,o.kt)("strong",{parentName:"p"},"live development server"),", any time we make changes to our code, it's automatically re-bundled and our browser window is reloaded."),(0,o.kt)("p",null,"Remote students at Epicodus should already be well-familiar with the Live Server development server, which reloads the webpage every time we make a change to our code base \u2014 our JS, CSS, or HTML. However, Live Server won't automatically live reload our projects now that we're using webpack to generate HTML and bundle our JS and CSS. That's because our source code that we edit is completely separate from the output files that webpack generates and adds to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," folder, and that we serve to run the webpage."),(0,o.kt)("p",null,"By the end of this lesson, we'll have added a new package to our Shape Tracker project to handle live reloading our code in the browser as we make changes to our source code. This package is called webpack-dev-server. ",(0,o.kt)("strong",{parentName:"p"},"From now on, we'll no longer use Live Server, and instead use webpack-dev-server to serve our webpack projects.")),(0,o.kt)("h2",{id:"webpack-development-server"},"webpack Development Server"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We'll start by installing webpack-dev-server with npm. Navigate to the root of the Shape Tracker directory and run the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install webpack-dev-server@3.11.3 --save-dev --save-exact\n")),(0,o.kt)("p",null,"Now let's update ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," to use webpack-dev-server."),(0,o.kt)("div",{class:"filename"},"webpack.config.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist')\n  },\n  devServer: {                 // new line\n    contentBase: './dist'      // new line\n  },                           // new line\n\n  ...\n\n};\n")),(0,o.kt)("h3",{id:"writing-a-new-npm-script"},"Writing a New npm Script"),(0,o.kt)("p",null,"If we run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm run build"),", our code will be re-bundled by webpack, but our webpack-dev-server won't start. In order to get our server to start, we actually need to invoke the server to open. We'll do this by creating a new npm script in the ",(0,o.kt)("inlineCode",{parentName:"p"},'"scripts"')," section of ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". "),(0,o.kt)("p",null,"Let's add another script called ",(0,o.kt)("inlineCode",{parentName:"p"},'"start"'),":"),(0,o.kt)("div",{class:"filename"},"package.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n  "scripts": {\n    "build": "webpack --mode=development",\n    "start": "webpack-dev-server --open --mode=development"\n  },\n...\n')),(0,o.kt)("p",null,"If we run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm run start")," in the command line, webpack will automatically spin up a development server at http://localhost:8080/. Try making a small change to the application code in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder. For instance, change the background color in ",(0,o.kt)("inlineCode",{parentName:"p"},"css/styles.css")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"red"),". Once you save, the page will be updated instantly."),(0,o.kt)("p",null,"Note that when we run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm run start"),", webpack will not create a bundle and a ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," folder. We need to ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm run build")," for that. So, if we were cloning a project down from GitHub and starting it for the first time, we'd need to be sure to run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm run build")," to build the project, and then ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm run start")," to start the development server."),(0,o.kt)("p",null,"We can make our lives easier by modifying ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm run start")," to do both things: build the project and then start our development server. We just need to make the following modification to our ",(0,o.kt)("inlineCode",{parentName:"p"},'"scripts"'),":"),(0,o.kt)("div",{class:"filename"},"package.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n  "scripts": {\n    "build": "webpack --mode=development",\n    "start": "npm run build && webpack-dev-server --open --mode=development"\n  },\n...\n')),(0,o.kt)("p",null,"Note that the double ampersand ",(0,o.kt)("inlineCode",{parentName:"p"},"&&")," simply chains two commands together. In this case, we're calling our own npm ",(0,o.kt)("inlineCode",{parentName:"p"},'"build"')," script, and then opening the webpack-dev-server."),(0,o.kt)("h3",{id:"if-webpack-dev-server-doesnt-work"},"If webpack-dev-server Doesn't Work"),(0,o.kt)("p",null,"Up to this point, remote learning students have been using VS Code's Live Server extension. When using webpack, though, remote students should use the webpack development server if possible. To do so, just run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm run start")," during a VS Code Live Share session. The server should automatically be shared via VS Code Live Share."),(0,o.kt)("p",null,"However, some remote students have issues with sharing webpack's development server. If this is the case, you may also use the VS Code Live Server extension you've been using to share servers up to this point."),(0,o.kt)("p",null,"To do so, you'll need to follow these steps after you make a change to your source code and you want to see it reflected in the browser:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"$ npm run build")," to compile the latest code."),(0,o.kt)("li",{parentName:"ul"},"Run the Live Server extension on ",(0,o.kt)("inlineCode",{parentName:"li"},"dist/index.html"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," For this section's independent project, you should be using webpack's development server since you won't be live sharing your code with others. "),(0,o.kt)("p",null,"In the next lesson, we'll add the last of our tooling to improve our development \u2014 a linter."))}c.isMDXComponent=!0}}]);