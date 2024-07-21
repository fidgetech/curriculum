"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[54627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"\ud83d\udcd3 2.2.0.14 Processing HTML with a webpack Plugin",day:"weekend",id:"2-2-0-14-processing-html-with-a-webpack-plugin",hide_table_of_contents:!0},o=void 0,l={unversionedId:"intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-14-processing-html-with-a-webpack-plugin",id:"intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-14-processing-html-with-a-webpack-plugin",title:"\ud83d\udcd3 2.2.0.14 Processing HTML with a webpack Plugin",description:"So far we've used webpack to bundle our JavaScript and CSS files. We can also use webpack to generate HTML files for us. Note that we're not using webpack to bundle HTML with our JS and CSS \u2014 instead, we're using webpack to do some additional work for us by having webpack process and generate our HTML based on a template we provide to webpack.",source:"@site/docs/2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript/AN-2-2-0-14-processing-html-with-a-webpack-plugin.md",sourceDirName:"2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript",slug:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-14-processing-html-with-a-webpack-plugin",permalink:"/v1.2/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-14-processing-html-with-a-webpack-plugin",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 2.2.0.14 Processing HTML with a webpack Plugin",day:"weekend",id:"2-2-0-14-processing-html-with-a-webpack-plugin",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.2.0.13 Bundling CSS with webpack Loaders",permalink:"/v1.2/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-13-bundling-css-with-webpack-loaders"},next:{title:"\ud83d\udcd3 2.2.0.15 Improving Development by Automating Clean Up Tasks",permalink:"/v1.2/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-15-improving-development-by-automating-clean-up-tasks"}},p={},s=[{value:"webpack Plugins",id:"webpack-plugins",level:2},{value:"Using HtmlWebpackPlugin",id:"using-htmlwebpackplugin",level:2}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So far we've used webpack to bundle our JavaScript and CSS files. We can also use webpack to generate HTML files for us. Note that we're not using webpack to bundle HTML with our JS and CSS \u2014 instead, we're using webpack to do some additional work for us by having webpack process and generate our HTML based on a template we provide to webpack."),(0,i.kt)("p",null,"Why would we do this? A bigger application could have many HTML files, all with multiple different entry points. In fact, this is a feature of webpack \u2014 to have multiple entry points instead of just one. With multiple entry points, we can tell webpack to create a bundle with dependencies for each entry point we specify. In turn, this gives us flexibility to load just one or all bundles, or load them at different times. This is a more advanced topic that you don't need to understand right now. At Epicodus, we'll only use one entry point with one bundle."),(0,i.kt)("p",null,"Let's get back to why we would use webpack to generate our HTML. Considering again an application with multiple entry points, what if someone adds an entry point or changes the ",(0,i.kt)("inlineCode",{parentName:"p"},"output")," configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),"? Our HTML file's script tags would then also need to be updated, too. That might lead to errors, and it is something we would need to manage carefully in order to avoid errors."),(0,i.kt)("p",null,"In an ideal world, we should only have to update our configuration file, and have our changes automatically be applied by webpack. Well, that's just what we'll do with a webpack plugin called ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/plugins/html-webpack-plugin/"},"HtmlWebpackPlugin")," \u2014 we'll let  webpack do the heavy lifting of processing and generating our HTML files. "),(0,i.kt)("p",null,"By the end of this lesson, you should have HtmlWebpackPlugin installed and configured in your Shape Tracker project."),(0,i.kt)("h2",{id:"webpack-plugins"},"webpack Plugins"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"To add this functionality to webpack, we'll use our first ",(0,i.kt)("strong",{parentName:"p"},"plugin")," called HtmlWebpackPlugin."),(0,i.kt)("p",null,"What's the difference between a webpack loader and a webpack plugin?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Loaders preprocess code that webpack can't directly work with, which means any file that's not JavaScript. Generally loaders process code before or during the creation of our bundle, and they only work with specific file types.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Plugins are more powerful. They can modify and work with the entire bundle, so they generally run after the bundle has been created."))),(0,i.kt)("p",null,"If the difference between loaders and plugins is feeling fuzzy, that's nothing to be worried about. You can continue using webpack without knowing the difference between loaders and plugins. Also, don't worry about spending extra time trying to understand the difference between the two. For the most part, once we have an environment set up, we can forget about it \u2014 at least until we need to add or update new packages."),(0,i.kt)("h2",{id:"using-htmlwebpackplugin"},"Using HtmlWebpackPlugin"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Before we install the plugin, ",(0,i.kt)("strong",{parentName:"p"},"let's move our ",(0,i.kt)("inlineCode",{parentName:"strong"},"index.html")," file from the ",(0,i.kt)("inlineCode",{parentName:"strong"},"dist")," folder back into the ",(0,i.kt)("inlineCode",{parentName:"strong"},"src")," folder"),". Why? From now on, we'll let webpack handle generating our HTML and outputting it to ",(0,i.kt)("inlineCode",{parentName:"p"},"dist"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.html")," will be the HTML template that webpack uses to do this. "),(0,i.kt)("p",null,"This is why ",(0,i.kt)("inlineCode",{parentName:"p"},"dist/")," is in our ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file \u2014 webpack will automatically generate everything inside this directory for us. Any developer can clone our project and then build it from our source code \u2014 so it would be redundant to push that code to GitHub."),(0,i.kt)("p",null,"Now let's add another dev dependency with npm. In the terminal, navigate to the root of the Shape Tracker project and enter the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install html-webpack-plugin@4.5.2 --save-dev\n")),(0,i.kt)("p",null,"Let's also update ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," to use this new plugin:"),(0,i.kt)("div",{class:"filename"},"webpack.config.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n// There's a new line below this one!\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist')\n  },\n  // The plugins key below this line is also new!\n  plugins: [\n    new HtmlWebpackPlugin({\n      title: 'Shape Tracker',\n      template: './src/index.html',\n      inject: 'body'\n    })\n  ],\n  module: {\n    rules: [\n      {\n        test: /\\.css$/,\n        use: [\n          'style-loader',\n          'css-loader'\n        ]\n      }\n    ]\n  }\n};\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First we require ",(0,i.kt)("inlineCode",{parentName:"p"},"html-webpack-plugin")," and make it available in ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Next we add a new key to the ",(0,i.kt)("inlineCode",{parentName:"p"},"module.exports")," object called ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Finally, we instantiate a new ",(0,i.kt)("inlineCode",{parentName:"p"},"HtmlWebpackPlugin"),". Our instantiated plugin is taking three arguments:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"title"),": This will be the title of our auto-generated HTML file.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"template"),": This is the HTML file we'll use as a template. Here we specify that it should be the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file we just moved to the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," folder. If we didn't specify a template file, then webpack would just generate a file with a ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<title>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tags.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"inject"),": This is a nice little option. webpack will inject our script at the bottom of our HTML for us. It's yucky to put script tags in the body when we're writing code because it's hard to read and mixes HTML and JS, which are separate concerns. However, our code will be more performant in production if we put our script tags there. webpack gives us the best of both worlds. We can write clean code when we're developing and then let webpack make it more performant for us by moving the script tags to the bottom of the HTML."))))),(0,i.kt)("p",null,"Also, because all the code in our HTML file loads synchronously, line by line, putting our script tags at the end of our HTML file means that we NO longer need to create an event listener for the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," 'load' event in our code: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"window.addEventListener('load', function() {\n  // We set up event listeners here.\n});\n")),(0,i.kt)("p",null,"That's because we use it to prevent our scripts from running before our HTML has loaded so that we can ensure that our HTML elements exist and we can target them with document query methods. Moving our script tag to the bottom of our HTML file will reorder the loading process of our project's dependencies: first our HTML will load, then our scripts will load. Again, this happens because our script tag has been added to the bottom of our HTML body."),(0,i.kt)("p",null,"All that said, we won't remove the event listener for the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," 'load' event from our example projects. However, you can if you would like to, as long as your scripts tags are at the bottom of your HTML's body tag, with or without using webpack."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Some students have found that their projects load faster ",(0,i.kt)("em",{parentName:"p"},"in development")," when they use ",(0,i.kt)("inlineCode",{parentName:"p"},"inject: 'head'")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"inject: 'body'"),". Ultimately, you may use either option based on your preferences. However, keep in mind that having the script at the end of the body is preferable for production sites."),(0,i.kt)("p",null,"Before we ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npm run build")," our application again, let's remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tag currently linking our bundled JavaScript from ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html"),". Here's the updated ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>"),":"),(0,i.kt)("div",{class:"filename"},"src/index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"...\n<head>\n  <title>Shape Tracker</title>\n</head>\n...\n")),(0,i.kt)("p",null,"Now run ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npm run build"),". webpack will add ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," to our ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," folder for us. If you take a look, you'll see that webpack has added a script tag for our bundled JavaScript to the bottom of our HTML file."),(0,i.kt)("p",null,"At this point, we can open ",(0,i.kt)("inlineCode",{parentName:"p"},"dist/index.html")," (either by opening it in the browser or by using Live Server), and our site will be there. Everything appears exactly the same \u2014 but our code is now bundled."))}c.isMDXComponent=!0}}]);