"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[47437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"\ud83d\udcd3 2.2.0.13 Bundling CSS with webpack Loaders",day:"weekend",id:"2-2-0-13-bundling-css-with-webpack-loaders",hide_table_of_contents:!0},s=void 0,l={unversionedId:"intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-13-bundling-css-with-webpack-loaders",id:"intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-13-bundling-css-with-webpack-loaders",title:"\ud83d\udcd3 2.2.0.13 Bundling CSS with webpack Loaders",description:"In the last lesson, we bundled our JavaScript files with webpack. That's a good start \u2014 but we can also use webpack for bundling other files that aren't JavaScript, as long as we are using the right webpack loader.",source:"@site/docs/2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript/AM-2-2-0-13-bundling-css-with-webpack-loaders.md",sourceDirName:"2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript",slug:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-13-bundling-css-with-webpack-loaders",permalink:"/v1/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-13-bundling-css-with-webpack-loaders",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 2.2.0.13 Bundling CSS with webpack Loaders",day:"weekend",id:"2-2-0-13-bundling-css-with-webpack-loaders",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.2.0.12 Bundling JavaScript",permalink:"/v1/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-12-bundling-javascript"},next:{title:"\ud83d\udcd3 2.2.0.14 Processing HTML with a webpack Plugin",permalink:"/v1/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-14-processing-html-with-a-webpack-plugin"}},o={},p=[{value:"Bundling CSS",id:"bundling-css",level:2},{value:"webpack Loaders",id:"webpack-loaders",level:3},{value:"Adding <code>css/styles.css</code> to the <code>src</code> Directory",id:"adding-cssstylescss-to-the-src-directory",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the last lesson, we bundled our JavaScript files with webpack. That's a good start \u2014 but we can also use webpack for bundling other files that aren't JavaScript, as long as we are using the right webpack loader. "),(0,r.kt)("p",null,"In this lesson, we'll learn how to bundle our CSS and use webpack loaders for CSS. "),(0,r.kt)("p",null,"Even though we'll only be working with one CSS file in our project, large scale projects often work with many CSS files, which means bundling them can make a noticeable difference in terms of performance."),(0,r.kt)("p",null,"By the end of this lesson, you should have webpack configured to bundle Shape Tracker's CSS along with its JS files."),(0,r.kt)("h2",{id:"bundling-css"},"Bundling CSS"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"First, we need to install two new project dependencies with npm at their pinned versions. In the terminal, navigate to the root of the Shape Tracker project and enter the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install style-loader@1.3.0 css-loader@3.6.0 --save-dev\n")),(0,r.kt)("p",null,"This will add two more dev dependencies to our ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file. Our ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," directory and ",(0,r.kt)("inlineCode",{parentName:"p"},"package-lock.json")," file will also be updated automatically."),(0,r.kt)("h3",{id:"webpack-loaders"},"webpack Loaders"),(0,r.kt)("p",null,"Next let's update our ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," file:"),(0,r.kt)("div",{class:"filename"},"webpack.config.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist')\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.css$/,\n        use: [\n          'style-loader',\n          'css-loader'\n        ]\n      }\n    ]\n  }\n};\n")),(0,r.kt)("p",null,"Here we configure our webpack module further by adding specific ",(0,r.kt)("strong",{parentName:"p"},"rules"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," line tells webpack where to look for files that match a certain file type. Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," line uses a regular expression to find files with a ",(0,r.kt)("inlineCode",{parentName:"p"},".css")," extension. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," line then directs webpack to use the specified ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://webpack.js.org/concepts/loaders/"},"loaders")),". We have two loaders specified, and webpack knows to look for them in our project's dependencies."),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"loader")," preprocesses a file before it's actually loaded by webpack. We need these loaders because webpack only understands JavaScript, not other assets such as CSS. The loaders will actually transform our CSS into JavaScript code so webpack can bundle it."),(0,r.kt)("h3",{id:"adding-cssstylescss-to-the-src-directory"},"Adding ",(0,r.kt)("inlineCode",{parentName:"h3"},"css/styles.css")," to the ",(0,r.kt)("inlineCode",{parentName:"h3"},"src")," Directory"),(0,r.kt)("p",null,"Next, let's move our ",(0,r.kt)("inlineCode",{parentName:"p"},"css")," directory into our ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," directory. After all, it's part of our source code, too. Finally, we need to import our CSS into our ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," file so it is available for webpack to bundle. To import it, we'll add the following import statement:"),(0,r.kt)("div",{class:"filename"},"src/index.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import './css/styles.css';\n\n...\n")),(0,r.kt)("p",null,"Finally, we can remove the following line from ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="./../css/styles.css">\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>")," now looks like this:"),(0,r.kt)("div",{class:"filename"},"dist/index.html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  <script type="text/javascript" src="bundle.js"><\/script>\n  <title>Shape Tracker</title>\n</head>\n')),(0,r.kt)("p",null,"It's time to ",(0,r.kt)("inlineCode",{parentName:"p"},"$ npm run build"),". Now if we refresh the browser, we'll see our new CSS rule has been applied. No need for separate ",(0,r.kt)("inlineCode",{parentName:"p"},"<link>")," tags for styles in our HTML!"))}u.isMDXComponent=!0}}]);