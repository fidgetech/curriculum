"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[28557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"\ud83d\udcd3 4.3.0.1 React with Redux Objectives",day:"weekend",id:"4-3-0-1-react-with-redux-objectives",hide_table_of_contents:!0,pagination_prev:null},c=void 0,o={unversionedId:"react/react-with-redux/4-3-0-1-react-with-redux-objectives",id:"react/react-with-redux/4-3-0-1-react-with-redux-objectives",title:"\ud83d\udcd3 4.3.0.1 React with Redux Objectives",description:"In the last course section, we covered the basics of building a React application and managing state. In a smaller application like our Help Queue, we can manage our shared and local state without using external libraries.",source:"@site/docs/4_react/3_react-with-redux/AA-4-3-0-1-react-with-redux-objectives.md",sourceDirName:"4_react/3_react-with-redux",slug:"/react/react-with-redux/4-3-0-1-react-with-redux-objectives",permalink:"/v1.2/react/react-with-redux/4-3-0-1-react-with-redux-objectives",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 4.3.0.1 React with Redux Objectives",day:"weekend",id:"4-3-0-1-react-with-redux-objectives",hide_table_of_contents:!0,pagination_prev:null},sidebar:"react",next:{title:"\ud83d\udcd3 4.3.0.2 Introduction to Redux",permalink:"/v1.2/react/react-with-redux/4-3-0-2-introduction-to-redux"}},l={},u=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2}],s={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the last course section, we covered the basics of building a React application and managing state. In a smaller application like our Help Queue, we can manage our shared and local state without using external libraries."),(0,a.kt)("p",null,"In this course section, we will learn to use ",(0,a.kt)("strong",{parentName:"p"},"Redux"),", a library that we can use to manage shared state in React applications. We will learn about the different parts of Redux, including the Redux ",(0,a.kt)("strong",{parentName:"p"},"store")," and ",(0,a.kt)("strong",{parentName:"p"},"reducers"),". Here are the topics we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The basics of Redux, including the store and reducers"),(0,a.kt)("li",{parentName:"ul"},"Creating, combining and splitting reducers"),(0,a.kt)("li",{parentName:"ul"},"Testing reducers with Jest"),(0,a.kt)("li",{parentName:"ul"},"Combining React and Redux using React Redux"),(0,a.kt)("li",{parentName:"ul"},"Using action creators and constants"),(0,a.kt)("li",{parentName:"ul"},"Component lifecycle methods")),(0,a.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Your code will be reviewed for the following objectives:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Redux successfully manages all shared state."),(0,a.kt)("li",{parentName:"ul"},"All Redux reducers are pure functions."),(0,a.kt)("li",{parentName:"ul"},"Jest is used to test all reducers."),(0,a.kt)("li",{parentName:"ul"},"Actions are successfully dispatched to specify changes to state."),(0,a.kt)("li",{parentName:"ul"},"Reducers receive and handle actions to correctly mutate the store's state."),(0,a.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,a.kt)("li",{parentName:"ul"},"The prompt\u2019s required functionality and baseline project requirements are met.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You can preview the exact instructions and requirements for the React with Redux code review by reading the ",(0,a.kt)("a",{parentName:"strong",href:"../../react/react-with-redux/4-3-5-1-react-with-redux-independent-project"},"React with Redux Independent Project")," lesson at the end of this section.")))}p.isMDXComponent=!0}}]);