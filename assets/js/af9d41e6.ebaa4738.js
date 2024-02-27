"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[13584],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},70037:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"\ud83d\udcd3 4.3.0.7 Anatomy of a Reducer",day:"weekend",id:"4-3-0-7-anatomy-of-a-reducer",hide_table_of_contents:!0},i=void 0,l={unversionedId:"react/react-with-redux/4-3-0-7-anatomy-of-a-reducer",id:"react/react-with-redux/4-3-0-7-anatomy-of-a-reducer",title:"\ud83d\udcd3 4.3.0.7 Anatomy of a Reducer",description:"Over the last several lessons, we've built and tested a reducer that will allow us to take CRUD actions in our Help Queue application. Reducers can get considerably more complex \u2014 and we'll eventually learn more advanced techniques such as splitting and combining reducers \u2014 but for now, we'll focus on reviewing what we've learned so far. Having a clear understanding of how reducers work will make learning Redux much easier.",source:"@site/docs/4_react/3_react-with-redux/AG-4-3-0-7-anatomy-of-a-reducer.md",sourceDirName:"4_react/3_react-with-redux",slug:"/react/react-with-redux/4-3-0-7-anatomy-of-a-reducer",permalink:"/react/react-with-redux/4-3-0-7-anatomy-of-a-reducer",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 4.3.0.7 Anatomy of a Reducer",day:"weekend",id:"4-3-0-7-anatomy-of-a-reducer",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\ud83d\udcd3 4.3.0.6 Writing Our Third Redux Test",permalink:"/react/react-with-redux/4-3-0-6-writing-our-third-redux-test"},next:{title:"\ud83d\udcd3 4.3.0.8 The Redux Store",permalink:"/react/react-with-redux/4-3-0-8-the-redux-store"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Over the last several lessons, we've built and tested a reducer that will allow us to take CRUD actions in our Help Queue application. Reducers can get considerably more complex \u2014 and we'll eventually learn more advanced techniques such as splitting and combining reducers \u2014 but for now, we'll focus on reviewing what we've learned so far. Having a clear understanding of how reducers work will make learning Redux much easier."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The parameters of a reducer generally look something like this:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"(state = {}, action)\n")),(0,n.kt)("p",null,"The first parameter accepts the current state as an argument. It's typical for that state to have a default value. (In the example above, it is ",(0,n.kt)("inlineCode",{parentName:"p"},"{}"),", but it could be another type of object as well.)"),(0,n.kt)("p",null,"The second parameter accepts an object as an argument. This object contains a ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," property that determines the action that should be taken. This object may contain other properties that are needed to update the current state."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Reducers are always pure functions. This makes them much easier to test. For this reason, they will never directly alter state in our application. All a reducer cares about is taking a thing, applying an action to a copy of that thing, and then returning the altered copy. It doesn't know anything else about our application such as how state will be stored or applied in the UI. ",(0,n.kt)("strong",{parentName:"p"},"Never use a reducer for side effects!"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Reducers use a switch case to determine which action should be taken. The format of a switch case in a reducer looks like this:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"switch (action.type) {\n  case 'ACTION_ONE':\n    // ...\n  case 'ACTION_TWO':\n    // ...\n  case 'ACTION_THREE':\n    // ...\n  default:\n    // This will generally just return the unchanged state.\n  }\n")),(0,n.kt)("p",null,"A switch case is just vanilla JavaScript. It is similar to having a series of ",(0,n.kt)("inlineCode",{parentName:"p"},"if")," statements chained together. Note that it is ",(0,n.kt)("strong",{parentName:"p"},"not")," like an ",(0,n.kt)("inlineCode",{parentName:"p"},"if...else")," statement \u2014 all conditions will be run unless we use ",(0,n.kt)("inlineCode",{parentName:"p"},"break")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"return")," statements \u2014 so we should always include those. Otherwise, our reducers will be prone to unintended behavior."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Action ",(0,n.kt)("inlineCode",{parentName:"li"},"type"),"s are strings. The name of the action should be capitalized with all words being separated by underscores. For example, this is correct syntax for an action: ",(0,n.kt)("inlineCode",{parentName:"li"},"ACTION_ONE"),". Note that even though action ",(0,n.kt)("inlineCode",{parentName:"li"},"type"),"s are strings, they are often saved as constants. We will go over this in a future lesson.")),(0,n.kt)("p",null,"That is the basics of reducers in a nutshell. If you ever have any confusion about how they work, review this lesson."))}d.isMDXComponent=!0}}]);