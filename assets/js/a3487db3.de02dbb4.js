"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[25632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"\ud83d\udcd3 4.4.3.2 Styled Components",day:"wednesday",id:"4-4-3-2-styled-components",hide_table_of_contents:!0},l=void 0,i={unversionedId:"react/react-with-nosql/4-4-3-2-styled-components",id:"react/react-with-nosql/4-4-3-2-styled-components",title:"\ud83d\udcd3 4.4.3.2 Styled Components",description:"Up to this point, we've covered only two basic approaches to styling React applications:",source:"@site/docs/4_react/4_react-with-nosql/BD-4-4-3-2-styled-components.md",sourceDirName:"4_react/4_react-with-nosql",slug:"/react/react-with-nosql/4-4-3-2-styled-components",permalink:"/v1/react/react-with-nosql/4-4-3-2-styled-components",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 4.4.3.2 Styled Components",day:"wednesday",id:"4-4-3-2-styled-components",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\u270f\ufe0f 4.4.3.1 Choose Your Own Adventure (Two-Day or One-Week Project)",permalink:"/v1/react/react-with-nosql/4-4-3-1-choose-your-own-adventure-two-day-or-one-week-project"},next:{title:"\ud83d\udcd3 4.4.3.3 Further Exploration Opportunities",permalink:"/v1/react/react-with-nosql/4-4-3-3-further-exploration-opportunities"}},p={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Up to this point, we've covered only two basic approaches to styling React applications:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"External stylesheets"),(0,o.kt)("li",{parentName:"ul"},"CSS objects")),(0,o.kt)("p",null,"While we generally don't recommend using external stylesheets with React, CSS objects are a very solid approach. Another very popular approach in the React community is to use an external library called ",(0,o.kt)("inlineCode",{parentName:"p"},"styled-components"),"."),(0,o.kt)("p",null,"We can add ",(0,o.kt)("inlineCode",{parentName:"p"},"styled-components")," to a project with the following ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm install styled-components\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"styled-components")," library has a unique approach to styling that makes it very easy for us to scope styles to specific elements."),(0,o.kt)("p",null,"Here's an example. Let's say we want the \"Help Queue\" header in our Help Queue application to have special styles attached to it. We can do the following with the ",(0,o.kt)("inlineCode",{parentName:"p"},"styled-components")," library:"),(0,o.kt)("div",{class:"filename"},"src/components/Header.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'...\nimport styled from \'styled-components\';\n\nconst HelpQueueHeader = styled.h1`\n  font-size: 24px;\n  text-align: center;\n  color: white;\n  background-color: purple;\n`;\n\nfunction Header(){\n  return (\n    <React.Fragment>\n        <HelpQueueHeader>\n          Help Queue\n        </HelpQueueHeader>\n        <ul>\n          <li>\n            <Link to="/">Home</Link>\n          </li>\n          <li>\n            <Link to="/sign-in">Sign In</Link>\n          </li>\n        </ul>\n    </React.Fragment>\n  );\n}\n\nexport default Header;\n')),(0,o.kt)("p",null,"We start by importing ",(0,o.kt)("inlineCode",{parentName:"p"},"styled from 'styled-components';"),". Next, we create a variable that will hold our styles:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const HelpQueueHeader = styled.h1`\n  font-size: 24px;\n  text-align: center;\n  color: white;\n  background-color: purple;\n`;\n")),(0,o.kt)("p",null,"In this case, we wanted a styled ",(0,o.kt)("inlineCode",{parentName:"p"},"h1"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"styled")," will always come before the styled element \u2014 think of it as being a property on ",(0,o.kt)("inlineCode",{parentName:"p"},"styled"),"."),(0,o.kt)("p",null,"Next, we put the actual CSS rules inside of backticks."),(0,o.kt)("p",null,"Finally, we wrap the element we want to stylize in tags with the same variable name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"...\n<HelpQueueHeader>\n  Help Queue\n</HelpQueueHeader>\n...\n")),(0,o.kt)("p",null,"If we run our application in the browser, our styles will be applied! Best of all, they will be scoped only to the code contained inside our tags."),(0,o.kt)("p",null,"You may wonder why our variable is capitalized (",(0,o.kt)("inlineCode",{parentName:"p"},"HelpQueueHeader"),"). Well, it's convention to capitalize component names \u2014 and ",(0,o.kt)("inlineCode",{parentName:"p"},"styled-components")," is actually taking our styles and turning them into a component called ",(0,o.kt)("inlineCode",{parentName:"p"},"HelpQueueHeader"),", hence the name of the library."),(0,o.kt)("p",null,"Let's look at one more example. Let's say that we want to wrap all of the code in our ",(0,o.kt)("inlineCode",{parentName:"p"},"Header")," component in a style. We could do the following:"),(0,o.kt)("div",{class:"filename"},"Header.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nconst StyledWrapper = styled.section`\n  background-color: orange;\n`;\n\nfunction Header(){\n  return (\n    <StyledWrapper>\n      ...\n    </StyledWrapper>\n  );\n}\n\n...\n")),(0,o.kt)("p",null,"We create a ",(0,o.kt)("inlineCode",{parentName:"p"},"StyledWrapper")," that we wrap around all the JSX code in our return statement. We don't even need to use a React fragment anymore because our code is already wrapped in our new stylized component."),(0,o.kt)("p",null,"This only scratches the surface of what we can do with ",(0,o.kt)("inlineCode",{parentName:"p"},"styled-components"),". We recommend using this library for styling going forward."),(0,o.kt)("p",null,"For more information on ",(0,o.kt)("inlineCode",{parentName:"p"},"styled-components"),", check out the library's ",(0,o.kt)("a",{parentName:"p",href:"https://styled-components.com/docs"},"excellent documentation"),"."))}d.isMDXComponent=!0}}]);