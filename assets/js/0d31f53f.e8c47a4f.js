"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[20153],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||o;return a?r.createElement(m,i(i({ref:t},s),{},{components:a})):r.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},45122:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"\u270f\ufe0f 4.5.1.1 React with API (Three-Day Project)",day:"monday",id:"4-5-1-1-react-with-api-three-day-project",hide_table_of_contents:!0},i=void 0,l={unversionedId:"react/react-with-apis/4-5-1-1-react-with-api-three-day-project",id:"version-1.1/react/react-with-apis/4-5-1-1-react-with-api-three-day-project",title:"\u270f\ufe0f 4.5.1.1 React with API (Three-Day Project)",description:"Goals: Build a React application that makes API calls. Follow along with the weekend lessons to make an API call with the useReducer() hook, and then a light/dark theme with context. Then spend the remaining class sessions building out a project with your pair or group. This project will utilize your skills with React to consume any API of your choosing.",source:"@site/versioned_docs/version-1.1/4_react/5_react-with-apis/AM-4-5-1-1-react-with-api-three-day-project.md",sourceDirName:"4_react/5_react-with-apis",slug:"/react/react-with-apis/4-5-1-1-react-with-api-three-day-project",permalink:"/v1.1/react/react-with-apis/4-5-1-1-react-with-api-three-day-project",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\u270f\ufe0f 4.5.1.1 React with API (Three-Day Project)",day:"monday",id:"4-5-1-1-react-with-api-three-day-project",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\ud83d\udcd3 4.5.0.12 Team Week: Project Pitch",permalink:"/v1.1/react/react-with-apis/4-5-0-12-team-week-project-pitch"},next:{title:"\ud83d\udcd3 4.5.1.2 Further Exploration: React Native",permalink:"/v1.1/react/react-with-apis/4-5-1-2-further-exploration-react-native"}},c={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"React with API Calls and Context",id:"react-with-api-calls-and-context",level:3},{value:"Full Stack Project",id:"full-stack-project",level:3},{value:"Instructor/Peer Code Review",id:"instructorpeer-code-review",level:2}],s={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goals:")," Build a React application that makes API calls. Follow along with the weekend lessons to make an API call with the ",(0,n.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook, and then a light/dark theme with context. Then spend the remaining class sessions building out a project with your pair or group. This project will utilize your skills with React to consume any API of your choosing."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"At what point in a React component's lifecycle might we make an API call and why?"),(0,n.kt)("li",{parentName:"ul"},"When should we prefer to use the ",(0,n.kt)("inlineCode",{parentName:"li"},"useReducer()")," hook versus the ",(0,n.kt)("inlineCode",{parentName:"li"},"useState()")," hook for state management?"),(0,n.kt)("li",{parentName:"ul"},"Is context a state management tool? Explain why or why not."),(0,n.kt)("li",{parentName:"ul"},"Name some use cases for context."),(0,n.kt)("li",{parentName:"ul"},"Name alternatives to using context.")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"react-with-api-calls-and-context"},"React with API Calls and Context"),(0,n.kt)("p",null,"Work through the weekend homework to make a React application that makes an API call to the NY Times API. Then implement a light/dark mode in the Help Queue with the use of context."),(0,n.kt)("h3",{id:"full-stack-project"},"Full Stack Project"),(0,n.kt)("p",null,"Spend the next three class sessions building a React application around an API of your choosing. You may create any type of application as long as it uses the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"React"),(0,n.kt)("li",{parentName:"ul"},"React hooks to manage state"),(0,n.kt)("li",{parentName:"ul"},"The Fetch API ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," If you wish, you may also try React Native, which is designed for mobile development. See the upcoming homework if you are interested."),(0,n.kt)("p",null,"For a starting list of potential APIs to choose from, take a look at this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/public-apis/public-apis"},"repository containing public APIs"),"."),(0,n.kt)("h2",{id:"instructorpeer-code-review"},"Instructor/Peer Code Review"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Application parses API response and displays response data in the UI."),(0,n.kt)("li",{parentName:"ul"},"State is managed with hooks."),(0,n.kt)("li",{parentName:"ul"},"React application has detailed README with local deployment instructions and links to other repos related to the project if applicable.")))}h.isMDXComponent=!0}}]);