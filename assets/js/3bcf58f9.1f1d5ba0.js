"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[32365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={title:"\ud83d\udcd3 2.0.0.3 Installing node.js",day:"weekend",id:"2-0-0-3-installing-node-js",hide_table_of_contents:!0,paginationNext:null},a=void 0,l={unversionedId:"intermediate-javascript/getting-started-with-javascript/2-0-0-3-installing-node-js",id:"version-1.1/intermediate-javascript/getting-started-with-javascript/2-0-0-3-installing-node-js",title:"\ud83d\udcd3 2.0.0.3 Installing node.js",description:"Before the first week of class, take time to ensure all necessary tools and frameworks are correctly installed on your personal machine, including those we will use later on in the course.",source:"@site/versioned_docs/version-1.1/2_intermediate-javascript/0_getting-started-with-javascript/AC-2-0-0-3-installing-node-js.md",sourceDirName:"2_intermediate-javascript/0_getting-started-with-javascript",slug:"/intermediate-javascript/getting-started-with-javascript/2-0-0-3-installing-node-js",permalink:"/v1.1/intermediate-javascript/getting-started-with-javascript/2-0-0-3-installing-node-js",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 2.0.0.3 Installing node.js",day:"weekend",id:"2-0-0-3-installing-node-js",hide_table_of_contents:!0,paginationNext:null},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.0.0.2 JS Documentation and Resources",permalink:"/v1.1/intermediate-javascript/getting-started-with-javascript/2-0-0-2-js-documentation-and-resources"},next:{title:"\ud83d\udcd3 2.1.0.1 Object-Oriented JavaScript Objectives",permalink:"/v1.1/intermediate-javascript/object-oriented-javascript/2-1-0-1-object-oriented-javascript-objectives"}},s={},p=[{value:"OSX Installation Instructions",id:"osx-installation-instructions",level:2},{value:"Homebrew Installation",id:"homebrew-installation",level:3},{value:"Windows / Linux Installation Instructions",id:"windows--linux-installation-instructions",level:2},{value:"Working with Node",id:"working-with-node",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before the first week of class, take time to ensure all necessary tools and frameworks are correctly installed on your personal machine, including those we will use later on in the course."),(0,r.kt)("p",null,"The JavaScript course will require ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js"),". You are expected to install any tools you do not already have ",(0,r.kt)("em",{parentName:"p"},"before")," the course begins. Confirm each tool is functioning properly by following all instructions below."),(0,r.kt)("h2",{id:"osx-installation-instructions"},"OSX Installation Instructions"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"On OS X systems, install ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," through ",(0,r.kt)("inlineCode",{parentName:"p"},"Homebrew")," with the following command in your home directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ brew install node\n")),(0,r.kt)("p",null,"Confirm that ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," (node package manager, installed automatically with ",(0,r.kt)("inlineCode",{parentName:"p"},"Node"),") are in place by checking the versions (",(0,r.kt)("inlineCode",{parentName:"p"},"Node"),"  should be 4.0.x or higher, ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," should be 3.6.x or higher):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ node -v\nv14.5.0\n$ npm -v\n6.14.5\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(If you have an older version of ",(0,r.kt)("inlineCode",{parentName:"em"},"Node")," already installed, upgrade through ",(0,r.kt)("inlineCode",{parentName:"em"},"Homebrew")," by running ",(0,r.kt)("inlineCode",{parentName:"em"},"$ brew upgrade node"),".)")),(0,r.kt)("p",null,'Complete the "Working with Node" section below to confirm your installation is functioning correctly.'),(0,r.kt)("h3",{id:"homebrew-installation"},"Homebrew Installation"),(0,r.kt)("p",null,"If you do not have Homebrew installed yet, you may install it now by copy and pasting this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,r.kt)("p",null,"This installs ",(0,r.kt)("a",{parentName:"p",href:"http://brew.sh/"},"Homebrew")," on your device."),(0,r.kt)("p",null,"Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile\n")),(0,r.kt)("h2",{id:"windows--linux-installation-instructions"},"Windows / Linux Installation Instructions"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"To install Node on other systems, go to the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node website"),", then download and install the appropriate installer for your operating system. Note that there are two versions available to download: the ",(0,r.kt)("em",{parentName:"p"},"LTS")," version and the ",(0,r.kt)("em",{parentName:"p"},"Current")," version. ",(0,r.kt)("em",{parentName:"p"},"LTS")," is short for long-term support. Either version is fine, though the ",(0,r.kt)("em",{parentName:"p"},"Current")," version will be more recent."),(0,r.kt)("p",null,"If you are using Windows, choose the ",(0,r.kt)("em",{parentName:"p"},"Windows Installer")," option for downloading. Use the Setup Manager for installation, clicking ",(0,r.kt)("em",{parentName:"p"},"Next")," through each setup window. This includes clicking ",(0,r.kt)("em",{parentName:"p"},"Next")," on the custom setup window as all the options are already preselected (",(0,r.kt)("em",{parentName:"p"},"Node.js runtime"),", ",(0,r.kt)("em",{parentName:"p"},"npm package manager"),", ",(0,r.kt)("em",{parentName:"p"},"Online documentation shortcuts"),", and ",(0,r.kt)("em",{parentName:"p"},"Add to PATH"),"). When you reach the final setup window, click ",(0,r.kt)("em",{parentName:"p"},"Install"),"."),(0,r.kt)("p",null,'After installation is complete, go through the "Working with Node" section below to confirm your installation is functioning correctly.'),(0,r.kt)("h2",{id:"working-with-node"},"Working with Node"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Confirm Node.js is functioning correctly by creating a small test project. ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," to your desktop and then input the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ echo \"console.log('Hello world');\" > hello.js\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"echo")," simply copies the string (the part inside double quotations), outputting it (",(0,r.kt)("inlineCode",{parentName:"p"},">"),") into the file we specify (",(0,r.kt)("inlineCode",{parentName:"p"},"hello.js"),"). You don't need to create ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.js")," ahead of time. ",(0,r.kt)("inlineCode",{parentName:"p"},"echo")," will take care of that for you."),(0,r.kt)("p",null,"Now let's run this file with Node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ node hello.js\n")),(0,r.kt)("p",null,'"Hello world" will be printed to the terminal. Once you are done, you can remove ',(0,r.kt)("inlineCode",{parentName:"p"},"hello.js")," from your desktop."),(0,r.kt)("p",null,"Node.js is a JavaScript runtime environment just like the browser. In fact, Node.js's underlying JavaScript engine is V8, which is the same engine used in Google Chrome. The major difference between Node and a browser like Chrome is that the browser provides the runtime environment in the browser, whereas Node provides it on the command line. They also have slightly different capabilities, with the browser providing tools like the DOM, and Node providing tools like file system access."),(0,r.kt)("p",null,"We won't be doing much with Node.js as a runtime environment, though. We will mainly use it as a package manager to install JavaScript libraries in our projects."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"If you encounter any issues installing Node.js, ask for help from your instructor.  However, even though we aren't using these frameworks yet, it's important to set up these tools now to make sure that you can use your personal computer to complete Epicodus projects."))}u.isMDXComponent=!0}}]);