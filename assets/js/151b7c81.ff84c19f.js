"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[46667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const r={title:"\ud83d\udcd3 2.2.0.18 Improving Development by Linting Code",day:"weekend",id:"2-2-0-18-improving-development-by-linting-code",hide_table_of_contents:!0},o=void 0,l={unversionedId:"intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-18-improving-development-by-linting-code",id:"intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-18-improving-development-by-linting-code",title:"\ud83d\udcd3 2.2.0.18 Improving Development by Linting Code",description:"In this lesson, we'll add a linter to our project. This will be the last tool we'll use to improve our developer experience, though there are many other tools out there! Linters check our code for errors, but even better, linters tell us when we're writing code that's not very good!",source:"@site/docs/2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript/AR-2-2-0-18-improving-development-by-linting-code.md",sourceDirName:"2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript",slug:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-18-improving-development-by-linting-code",permalink:"/v1.2/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-18-improving-development-by-linting-code",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 2.2.0.18 Improving Development by Linting Code",day:"weekend",id:"2-2-0-18-improving-development-by-linting-code",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.2.0.17 Improving Development with a Live Development Server",permalink:"/v1.2/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-17-improving-development-with-a-live-development-server"},next:{title:"\ud83d\udcd3 2.2.0.19 Adding A Production Dependency: Bootstrap",permalink:"/v1.2/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-0-19-adding-a-production-dependency-bootstrap"}},s={},u=[{value:"Installing ESLint",id:"installing-eslint",level:2},{value:"Configuring ESLint",id:"configuring-eslint",level:2},{value:"Adding an npm Script to Lint without webpack",id:"adding-an-npm-script-to-lint-without-webpack",level:2},{value:"Customizing ESLint",id:"customizing-eslint",level:2},{value:"Using ESLint Effectively",id:"using-eslint-effectively",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll add a linter to our project. This will be the last tool we'll use to improve our developer experience, though there are many other tools out there! Linters check our code for errors, but even better, linters tell us when we're writing code that's not very good!"),(0,a.kt)("p",null,"We'll use ",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," to ",(0,a.kt)("strong",{parentName:"p"},"lint")," JavaScript and find any errors or style/convention issues in our code. By the end of this lesson, we'll have made a few changes to our project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use npm to install eslint and eslint-webpack-plugin to our project."),(0,a.kt)("li",{parentName:"ul"},"Configure webpack to use eslint-webpack-plugin to lint our JavaScript files as it bundles our code."),(0,a.kt)("li",{parentName:"ul"},"Create a new file called ",(0,a.kt)("inlineCode",{parentName:"li"},".eslintrc")," that configures how ESLint lints our code. "),(0,a.kt)("li",{parentName:"ul"},"Add a new script to npm in order to invoke ESLint to lint our code, separate from webpack's bundling process.")),(0,a.kt)("h2",{id:"installing-eslint"},"Installing ESLint"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Let's install ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint")," to install ESLint, a popular JavaScript linter, along with ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint-webpack-plugin"),", which allows us to use the ESLint with webpack. In the terminal, navigate to the root of the Shape Tracker project and enter the following commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ npm install eslint@8.18.0 --save-dev\n$ npm install eslint-webpack-plugin@2.7.0 --save-dev\n")),(0,a.kt)("p",null,"Let's update our webpack configuration so our code is automatically linted whenever we build:"),(0,a.kt)("div",{class:"filename"},"webpack.config.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst { CleanWebpackPlugin } = require('clean-webpack-plugin');\nconst ESLintPlugin = require('eslint-webpack-plugin');   // new line!\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist'),\n  },\n  devtool: 'eval-source-map',\n  devServer: {               \n    contentBase: './dist'    \n  },\n  plugins: [\n    new ESLintPlugin(), // new line!\n    new CleanWebpackPlugin(),\n    ...\n  ]\n  ...\n}    \n")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"ESLintPlugin"),", we require the package at the top of ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," to make it available to call on within our config file, and then we add a new line to the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," to create a new instance of the plugin with ",(0,a.kt)("inlineCode",{parentName:"p"},"new ESLintPlugin()"),". "),(0,a.kt)("p",null,"By default eslint-webpack-plugin, or ",(0,a.kt)("inlineCode",{parentName:"p"},"ESLintPlugin"),", is configured to look for JavaScript files only and ignore the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," directory. We don't want to lint ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," because they are external JavaScript libraries that have (hopefully) been tested by other developers. This is common practice."),(0,a.kt)("p",null,"We can optionally pass an object as an argument into ",(0,a.kt)("inlineCode",{parentName:"p"},"new ESLintPlugin()"),". Within the object we can specify certain options we want configured for ESLint. ",(0,a.kt)("strong",{parentName:"p"},"We won't do this in our projects"),", but here is what this might look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Do not add this to your project.\n// It is only an example.\nnew ESLintPlugin({\n  option1: value1, \n  option2: value2\n})\n")),(0,a.kt)("p",null,"To explore this more, check out the list of available options we can use to configure ESLint in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/eslint-webpack-plugin/tree/2.x#options"},"eslint-webpack-plugin project README")," for version 2.x."),(0,a.kt)("p",null,"Note that ESLint won't work yet \u2014 and we won't be able to build our project until we add an ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc")," configuration file in just a moment. If you try to build now, you'll get an error. That's because our webpack configuration is trying to run ESLint but can't do so without a configuration file."),(0,a.kt)("h2",{id:"configuring-eslint"},"Configuring ESLint"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"To use ESLint, we'll need to add a configuration file called ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc")," in the root directory of our project:"),(0,a.kt)("div",{class:"filename"},".eslintrc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "parserOptions": {\n    "ecmaVersion": 2018,\n    "sourceType": "module"\n  },\n  "extends": "eslint:recommended",\n  "env": {\n    "es6": true,\n    "browser": true,\n    "node": true\n  },\n  "rules": {\n    "semi": 1,\n    "indent": ["warn", 2],\n    "no-console": "warn"\n  }\n}\n')),(0,a.kt)("p",null,"Our configuration file is written using JSON (JavaScript Object Notation), but it can also be written in JavaScript or YAML (Yet Another Markup Language). ESLint is very configurable and we just have a few basics here."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Within the ",(0,a.kt)("inlineCode",{parentName:"p"},'"parserOptions"'),', we specify the parser should look for "modules" (',(0,a.kt)("inlineCode",{parentName:"p"},'"sourceType": "module"'),") that are written using up through ES2018 (",(0,a.kt)("inlineCode",{parentName:"p"},'"ecmaVersion": 2018'),"). So far we are just using a few of these newer JavaScript features (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," statements), but we'll use more soon. Note that ES2018 provides even more functionality than ES6 (which was released in 2015). Why use a more advanced version here? Using an older version caused bugs in our configuration of ESLint and this was the hotfix. A hotfix is when a bug causes problems and needs to be fixed immediately. Also, the configuration will enable ESLint to recognize some newer JS features we'll be using in the next section as well.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"With ",(0,a.kt)("inlineCode",{parentName:"p"},'"extends": "eslint:recommended"'),", we use ESLint's recommended set of rules for linting. We could customize these or use other sets as well. Once again, ESLint's recommended rules are very strict \u2014 so we can always customize them further as needed. To see exactly which rules are included in the recommended set, go to ",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/"},"ESLint Rules"),". All rules that include a checkmark are part of the recommended set. As you'll see, there are a lot of them!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Within ",(0,a.kt)("inlineCode",{parentName:"p"},'"env"'),", we let ESLint know a few things about our global environment. Specifically we are using ES6 and we are working in the browser.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Within ",(0,a.kt)("inlineCode",{parentName:"p"},'"rules"'),", we add a few basic rules:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"First, we are using semicolons and setting the error level to ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),", which means the linter will give us a warning about missing semicolons. (An error level of ",(0,a.kt)("inlineCode",{parentName:"li"},"2")," means the linter will throw an error instead \u2014 stopping our code in its tracks.)"),(0,a.kt)("li",{parentName:"ul"},"We also add a rule for indentation. We pass ",(0,a.kt)("inlineCode",{parentName:"li"},'"warn"')," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),". The second argument in the array is the number of spaces our code should be indented, so this is a little confusing. In this case, ",(0,a.kt)("inlineCode",{parentName:"li"},"2")," means indented spaces, but it often means the error level. We'll cover the error level more shortly."),(0,a.kt)("li",{parentName:"ul"},"The last rule is to warn us about any ",(0,a.kt)("inlineCode",{parentName:"li"},"console.log()")," statements in our code. We've asked ESLint to warn us if there are any in our source code. This will help remind us to remove ",(0,a.kt)("inlineCode",{parentName:"li"},"console.log()")," statements before we finalize our code and push it to our remote repo.")))),(0,a.kt)("p",null,"Now that we have an ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc")," configuration in place, we can now build our project again \u2014 and it will automatically be linted for us! Try introducing an error (for instance, add a typo to a variable name) and see for yourself!"),(0,a.kt)("h2",{id:"adding-an-npm-script-to-lint-without-webpack"},"Adding an npm Script to Lint without webpack"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"It would be nice to have the option to lint our code without bundling it with webpack. We can add a script to our ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file to handle this:"),(0,a.kt)("div",{class:"filename"},"package.json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'...\n  "scripts": {\n    "build": "webpack --mode=development",\n    "start": "npm run build && webpack-dev-server --open --mode=development",\n    "lint": "eslint src --ext .js"\n  },\n...\n')),(0,a.kt)("p",null,"Now we can run the script ",(0,a.kt)("inlineCode",{parentName:"p"},"$ npm run lint")," and ESLint will lint all JavaScript files in our ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," folder. It's a simple configuration since we're storing all of our JS in one place: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eslint")," invokes ESLint"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src")," specifies the folder to lint"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--ext .js")," stands for files with a ",(0,a.kt)("inlineCode",{parentName:"li"},".js")," extension")),(0,a.kt)("h2",{id:"customizing-eslint"},"Customizing ESLint"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"ESLint can be a real headache to configure. The default configuration is very strict and it will throw an error at many different things, even when our code is working otherwise. In most cases, these errors are helpful because they'll lead to better code. At other times, though, ESLint can bog us down. In these cases, we can update our ESLint configuration file to be a little less strict."),(0,a.kt)("p",null,"There are three basic levels for how ESLint can handle an error:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")," or ",(0,a.kt)("inlineCode",{parentName:"li"},'"off"')," means that ESLint will ignore a rule entirely. In general, we don't want to do this. It's nice to at least get a warning (even if we plan to ignore it)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," or ",(0,a.kt)("inlineCode",{parentName:"li"},'"warn"')," means that ESLint will provide a warning but will not throw an error. If we don't want a rule to throw an error, we'll generally change it to be a warning instead."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2")," or ",(0,a.kt)("inlineCode",{parentName:"li"},'"error"')," means that ESLint will throw an error and stop our code in its tracks. That means we can't build until we fix the error (or change the rule to a warning). In general, we should focus on fixing the error ",(0,a.kt)("em",{parentName:"li"},"instead")," of changing the rule to a warning, but there will be times when it makes sense to update the rule.")),(0,a.kt)("p",null,"Because we are using the recommended set of rules, many are already automatically set to level ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," \u2014 the highest level. We can override the recommended settings by adding custom configurations to the ",(0,a.kt)("inlineCode",{parentName:"p"},'"rules"')," object of ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc"),"."),(0,a.kt)("p",null,"Let's go over an example of updating a rule to be a warning instead of an error. The recommended set of rules does not allow ",(0,a.kt)("inlineCode",{parentName:"p"},"debugger;")," statements. This makes sense \u2014 in general, we should add breakpoints via the ",(0,a.kt)("em",{parentName:"p"},"Sources")," tab of Chrome DevTools instead."),(0,a.kt)("p",null,"However, let's say we don't know about this rule yet (after all, there are so many ESLint rules) and we decide we want to add a ",(0,a.kt)("inlineCode",{parentName:"p"},"debugger;")," statement directly to our code:"),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Triangle from \"./triangle.js\";\nimport './css/styles.css';\n\nfunction handleFormSubmission() {\n  event.preventDefault();\n  debugger;\n  const length1 = parseInt(document.querySelector('#length1').value);\n  const length2 = parseInt(document.querySelector('#length2').value);\n  const length3 = parseInt(document.querySelector('#length3').value);\n  const triangle = new Triangle(length1, length2, length3);\n  const response = triangle.checkType();\n  const pTag = document.createElement(\"p\");\n  pTag.append(response);\n  document.querySelector('#response').append(pTag);\n}\n\nwindow.addEventListener(\"load\", function() {\n  document.querySelector(\"#triangle-checker-form\").addEventListener(\"submit\", handleFormSubmission);\n});\n")),(0,a.kt)("p",null,"Now if we run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ npm run build"),", we'll get the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ERROR in \n/Users/staff/Desktop/shape-tracker/src/index.js\n  6:3  error  Unexpected 'debugger' statement  no-debugger\n\n\u2716 1 problem (1 error, 0 warnings)\n")),(0,a.kt)("p",null,"This error causes our build to fail entirely. As we can see, this is pretty annoying if we want to be able to use ",(0,a.kt)("inlineCode",{parentName:"p"},"debugger;")," statements. There are actually several ways we can address this issue."),(0,a.kt)("p",null,"Let's say we just want to have a ",(0,a.kt)("inlineCode",{parentName:"p"},"debugger;")," statement briefly \u2014 and we don't actually want to update the rule. We can do the following in our code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint-disable */\ndebugger;\n/* eslint-enable */\n")),(0,a.kt)("p",null,"This disables ESLint before the specified line and then enables ESLint again after the specified line (or lines). We can even make it more specific:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint-disable no-debugger */\ndebugger;\n/* eslint-enable no-debugger */\n")),(0,a.kt)("p",null,"Here, we specify that ",(0,a.kt)("em",{parentName:"p"},"just")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"no-debugger")," rule should be disabled for the line. We should always be more specific if possible, especially if there's a significant amount of code in the section we are temporarily disabling."),(0,a.kt)("p",null,"In general, we don't want to leave these comments in our code for long \u2014 but they can be helpful if we are trying to debug something and we really need to build our code and take a look in the browser to see what's going on. For instance, ESLint may be doing an excellent job pointing at an error in our code \u2014 but we might need to look at the code in the browser to understand what's going on."),(0,a.kt)("p",null,"By the way, these comments should ",(0,a.kt)("em",{parentName:"p"},"never")," be included in a submitted independent project. They aren't portfolio-ready code!"),(0,a.kt)("p",null,"The other option is to change an error to a warning in our ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc")," file. If we do this, we don't have to add comments directly to our code \u2014 and these rules will apply ",(0,a.kt)("em",{parentName:"p"},"everywhere")," for ESLint."),(0,a.kt)("p",null,"Here's how we can update the rule in our ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc")," file:"),(0,a.kt)("div",{class:"filename"},".eslintrc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'"rules": {\n  "semi": 1,\n  "indent": ["warn", 2],\n  "no-debugger": "warn" // new line\n}\n')),(0,a.kt)("p",null,"We simply add a line to the ",(0,a.kt)("inlineCode",{parentName:"p"},'"rules"')," object with a key of ",(0,a.kt)("inlineCode",{parentName:"p"},'"no-debugger"')," (the name of the rule) and a value of ",(0,a.kt)("inlineCode",{parentName:"p"},'"warn"'),". This will override the default setting."),(0,a.kt)("p",null,"Now if we build our code, we'll get a warning instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"6:3  warning  Unexpected 'debugger' statement  no-debugger\n")),(0,a.kt)("p",null,"Our code will build and we'll be able to use our ",(0,a.kt)("inlineCode",{parentName:"p"},"debugger;")," statement in our built project."),(0,a.kt)("h2",{id:"using-eslint-effectively"},"Using ESLint Effectively"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Here's the general process we should follow if ESLint throws an error:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Find and fix the error if possible, then build our code as usual."),(0,a.kt)("li",{parentName:"ul"},"If we can't find and fix the error without looking at our built project in the browser, use comments to disable the section of code that is causing problems. Once the error is fixed, remove those comments."),(0,a.kt)("li",{parentName:"ul"},"As a last resort, if we really find that ESLint is being too strict, we can update the rule to give us a warning instead of throwing an error. The name of the rule is always included in the error that ESLint throws \u2014 so we can just put that rule directly in our ",(0,a.kt)("inlineCode",{parentName:"li"},".eslintrc")," file and change its setting to ",(0,a.kt)("inlineCode",{parentName:"li"},'"warn"'),".")),(0,a.kt)("p",null,"We've found that students will have issues with a wide variety of rules \u2014 and we can't troubleshoot or list them all. Use this section to guide you through any rules that cause you issues. You are welcome to customize your ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc")," file to suit you and your coding needs \u2014 after all, the purpose of ESLint is to help you write better code, not cause you headaches. You will not be penalized on your independent project for any custom configurations you make in ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc"),"."),(0,a.kt)("p",null,"We recommend looking over at the ",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring"},"ESLint Configuration")," page. There's a lot of information here \u2014 so you don't need to absorb it all. Ultimately, it's fine to just use the recommended rule set \u2014 and to update rules as needed (but hopefully sparingly)."),(0,a.kt)("p",null,"Now that we've added a linter, ESLint will help us write better code and avoid bugs along the way."))}c.isMDXComponent=!0}}]);