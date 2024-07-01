"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[3467],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(o),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},45470:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const i={title:"\ud83d\udcd3 2.2.0.16 Improving Development with Source Maps for Debugging",day:"weekend",id:"2-2-0-16-improving-development-with-source-maps-for-debugging",hide_table_of_contents:!0},a=void 0,s={unversionedId:"intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-16-improving-development-with-source-maps-for-debugging",id:"version-1.1/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-16-improving-development-with-source-maps-for-debugging",title:"\ud83d\udcd3 2.2.0.16 Improving Development with Source Maps for Debugging",description:"How else can we improve our development experience? We can ensure that we are using source maps for debugging bundled code.",source:"@site/versioned_docs/version-1.1/2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript/AP-2-2-0-16-improving-development-with-source-maps-for-debugging.md",sourceDirName:"2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript",slug:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-16-improving-development-with-source-maps-for-debugging",permalink:"/v1.1/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-16-improving-development-with-source-maps-for-debugging",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 2.2.0.16 Improving Development with Source Maps for Debugging",day:"weekend",id:"2-2-0-16-improving-development-with-source-maps-for-debugging",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.2.0.15 Improving Development by Automating Clean Up Tasks",permalink:"/v1.1/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-15-improving-development-by-automating-clean-up-tasks"},next:{title:"\ud83d\udcd3 2.2.0.17 Improving Development with a Live Development Server",permalink:"/v1.1/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-17-improving-development-with-a-live-development-server"}},l={},p=[{value:"Using DevTools Source Maps",id:"using-devtools-source-maps",level:2},{value:"If DevTools Source Mapping Works, Why Use webpack Source Maps?",id:"if-devtools-source-mapping-works-why-use-webpack-source-maps",level:3},{value:"Using Built-In webpack Configuration Options for Source Maps",id:"using-built-in-webpack-configuration-options-for-source-maps",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How else can we improve our development experience? We can ensure that we are using source maps for debugging bundled code."),(0,r.kt)("p",null,"When we bundle our code and open it in the browser, any errors will refer to the bundle, not to our original source code. Since the bundle is minimized and very difficult to read, that makes it difficult to actually understand the errors. With source maps, we can trace the error back to our code, making it easier to debug. "),(0,r.kt)("p",null,"Specifically, a ",(0,r.kt)("strong",{parentName:"p"},"source map")," connects code that's been compiled, minified, and bundled to the original source code. This allows us to get descriptive error messages. For example, without source maps, our error messages will point to our ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle.js"),", just like in the following image. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"This image shows an error that points to the bundle.js instead of a specific line in a specific file.",src:o(17366).Z,width:"338",height:"128"})),(0,r.kt)("p",null,"To cause the error, we introduced a typo into one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"parseInt()")," functions,  calling it ",(0,r.kt)("inlineCode",{parentName:"p"},"parsInt()")," instead. In our small Shape Tracker application, it won't be too big of a deal to locate the source of that issue based off of the message ",(0,r.kt)("inlineCode",{parentName:"p"},"ReferenceError: parsInt is not defined"),". However, in a much bigger application, it could be a nightmare! "),(0,r.kt)("p",null,"Other than unhelpful error messages, another big issue of debugging bundled code without a source map is that we can't add breakpoints to easily debug our code. "),(0,r.kt)("p",null,"In the end, you should always use a source map when you are developing and debugging a bundled code base. For our code, we'll use the source mapping provided by our DevTools and webpack:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We'll use DevTools source mapping in order to use breakpoints and ",(0,r.kt)("inlineCode",{parentName:"li"},"debugger;")," statements. "),(0,r.kt)("li",{parentName:"ul"},"We'll use webpack source mapping in order to access optional configurations for source maps.")),(0,r.kt)("p",null,"By the end of this lesson, you'll have configured webpack to use source maps!"),(0,r.kt)("h2",{id:"using-devtools-source-maps"},"Using DevTools Source Maps"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The DevTools of all modern browsers offer built-in source maps. These source maps enable DevTools functionality like debugging with breakpoints and ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger;")," in the Sources tab. You can configure whether these are turned on or off, but the default configuration is on. As it should be! "),(0,r.kt)("p",null,"As long as we haven't specifically turned off source mapping (either in the browser or in our ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),"), our DevTools will automatically generate a source map connecting the code in the bundle to our original source code. This means that we'll get descriptive error messages that point us to the exact line in our source code that's causing the error. And, we'll also be able to open the Sources panel in our DevTools, find a ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," directory with the source code inside, and set breakpoints in our source code. The image below demonstrates this. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"This image shows the DevTools generated source maps for Shape Tracker&#39;s source code in the `src` folder.",src:o(81784).Z,width:"555",height:"340"})),(0,r.kt)("h3",{id:"if-devtools-source-mapping-works-why-use-webpack-source-maps"},"If DevTools Source Mapping Works, Why Use webpack Source Maps?"),(0,r.kt)("p",null,"The source mapping that DevTools provides should work in all of the cases that we'll need \u2014 to debug our business and user interface logic! "),(0,r.kt)("p",null,"However, the DevTools source mapping won't always be able to generate source maps for our entire bundle without fail or further configuration. That's why it's good to also rely on the source mapping that webpack provides. "),(0,r.kt)("p",null,"An example of where DevTools fails is with external style libraries (Bootstrap) when we bundle our code in production mode. And in this situation, we don't get a breaking error, but a warning. This case is highly specific and it's extremely likely that you won't run into this issue. Furthermore, we'll never be debugging Bootstrap directly. "),(0,r.kt)("p",null,"Another reason to use webpack to configure source maps is to shape how they get generated, which includes the ability to not generate source maps or hide them. We won't be doing either of these in this course, but in short, we do need to learn the basic configurations for source mapping via webpack. "),(0,r.kt)("h2",{id:"using-built-in-webpack-configuration-options-for-source-maps"},"Using Built-In webpack Configuration Options for Source Maps"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Setting up source maps for webpack is very straightforward. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"module.exports")," object, we'll add a new configuration option that's built-in to webpack. Go ahead and add this to your Shape Tracker project now."),(0,r.kt)("div",{class:"filename"},"webpack.config.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist')\n  },\n  devtool: 'eval-source-map',  // new line\n\n  ...\n\n};\n")),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"devtool: 'eval-source-map'"),", we've enabled webpack to generate source maps. Enabling this option will make our website load slower since there's more for our webpage to upload and process. This means we would not want to include this option when we create a build of our website for production."),(0,r.kt)("p",null,"Now if we rebuild our our bundle and HTML with ",(0,r.kt)("inlineCode",{parentName:"p"},"$ npm run build")," our project will have access to two sets of source maps. We can use both source maps to explore our code in DevTools, but we'll still only be able to set breakpoints in the source maps generated by our DevTools."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"This image shows two sets of source maps in the DevTools _Sources_ tab: one from DevTools and the other from webpack.",src:o(77313).Z,width:"400",height:"377"})),(0,r.kt)("p",null,"As noted previously, there are other configuration options for the ",(0,r.kt)("inlineCode",{parentName:"p"},"devtool")," option in our ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),". The webpack docs list all of the available options, including how fast or slow they are, whether it's recommended for production, and other details about if and how the source code is changed. It's optional to review these options now, but if you are curious, visit the docs here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://webpack.js.org/configuration/devtool/"},"Devtool"))),(0,r.kt)("p",null,"In the next lesson, we'll add another great tool for development: a server to live reload a project created with webpack."))}d.isMDXComponent=!0},81784:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/devtools-sourcemaps-400429ce10219d8e7ed45ff0fd4606f2.png"},17366:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"},77313:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/sourcemaps-devtools-and-webpack-16cbff3e2b95555a15efe2bf52b70d51.png"}}]);