"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[86189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},73134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={title:"\ud83d\udcd3 4.4.0.1 React with NoSQL Objectives",day:"weekend",id:"4-4-0-1-react-with-nosql-objectives",hide_table_of_contents:!0,pagination_prev:null},i=void 0,l={unversionedId:"react/react-with-nosql/4-4-0-1-react-with-nosql-objectives",id:"version-1.1/react/react-with-nosql/4-4-0-1-react-with-nosql-objectives",title:"\ud83d\udcd3 4.4.0.1 React with NoSQL Objectives",description:"In this course section, we'll learn how to persist data with a NoSQL database. We'll use Google's Firebase, an app development platform that provides many services including NoSQL databases, authentication, and hosting.",source:"@site/versioned_docs/version-1.1/4_react/4_react-with-nosql/AA-4-4-0-1-react-with-nosql-objectives.md",sourceDirName:"4_react/4_react-with-nosql",slug:"/react/react-with-nosql/4-4-0-1-react-with-nosql-objectives",permalink:"/v1.1/react/react-with-nosql/4-4-0-1-react-with-nosql-objectives",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 4.4.0.1 React with NoSQL Objectives",day:"weekend",id:"4-4-0-1-react-with-nosql-objectives",hide_table_of_contents:!0,pagination_prev:null},sidebar:"react",next:{title:"\ud83d\udcd3 4.4.0.2 Introduction to Hooks with the useState Hook",permalink:"/v1.1/react/react-with-nosql/4-4-0-2-introduction-to-hooks-with-the-usestate-hook"}},s={},c=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this course section, we'll learn how to persist data with a NoSQL database. We'll use Google's Firebase, an app development platform that provides many services including NoSQL databases, authentication, and hosting."),(0,a.kt)("p",null,"We will cover the following concepts about NoSQL databases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The differences between NoSQL and SQL databases."),(0,a.kt)("li",{parentName:"ul"},"How data is saved in NoSQL database."),(0,a.kt)("li",{parentName:"ul"},"The CAP theorem, which describes distributed NoSQL databases."),(0,a.kt)("li",{parentName:"ul"},"The acronym BASE that further describes the CAP theorem.")),(0,a.kt)("p",null,"When working with Firebase, we'll use the following services and integrate them into the Help Queue project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Firestore database (a type of NoSQL database)"),(0,a.kt)("li",{parentName:"ul"},"Authentication"),(0,a.kt)("li",{parentName:"ul"},"Hosting")),(0,a.kt)("p",null,"In this course section, we won't be using Redux to manage our application's state. Instead, we'll learn how to use React hooks! Hooks are tools that enable us to ",(0,a.kt)("em",{parentName:"p"},"re"),"use stateful logic and to use state and lifecycle features in function components. While using hooks and using Redux is not mutually exclusive, we're going to focus on only using hooks to manage our React app's state and component lifecycle events by refactoring the Help Queue project. To that end, we'll provide a repo with a starter project."),(0,a.kt)("p",null,"We'll cover the following topics about hooks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"useState()")," hook"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"useEffect()")," hook"),(0,a.kt)("li",{parentName:"ul"},"The rules of hooks"),(0,a.kt)("li",{parentName:"ul"},"How hooks solve multiple pain points in React development"),(0,a.kt)("li",{parentName:"ul"},"How to write a custom hook")),(0,a.kt)("p",null,"After we learn how to use hooks, we will no longer use class components. That means we'll take the extra step of converting the Help Queue ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component into a function component that uses hooks to manage state and component lifecycle events. Thereafter, we'll start adding Firebase services to the Help Queue. "),(0,a.kt)("p",null,"We'll also cover these additional topics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Structuring data in Firestore databases"),(0,a.kt)("li",{parentName:"ul"},"Routing with React Router"),(0,a.kt)("li",{parentName:"ul"},"Making Firestore queries"),(0,a.kt)("li",{parentName:"ul"},"Adding a wait time to the Help Queue"),(0,a.kt)("li",{parentName:"ul"},"Styling components with styled-components"),(0,a.kt)("li",{parentName:"ul"},"Other further exploration activities")),(0,a.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"For this course section, the independent project will be different from previous weeks. You will spend your normally scheduled independent project time studying for a whiteboard technical interview. Then, you will take part in a whiteboard technical interview with your peers. You will submit peer evaluations for the technical interviews you participate in and also submit your whiteboard solution in lieu of the usual independent project. More details on technical whiteboarding will be provided in this weekend's homework."),(0,a.kt)("p",null,"This course section's group whiteboard interview will be reviewed for the following objectives:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Whiteboard solution has been submitted."),(0,a.kt)("li",{parentName:"ul"},"Whiteboard interview meets all requirements (based on peer feedback)."),(0,a.kt)("li",{parentName:"ul"},"Your evaluations for peers are complete and include constructive feedback.")))}d.isMDXComponent=!0}}]);