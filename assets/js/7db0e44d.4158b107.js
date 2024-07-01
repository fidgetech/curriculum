"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[97646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"\ud83d\udcd3 4.5.0.6 NY Times API: Implementing useReducer",day:"weekend",id:"4-5-0-6-ny-times-api-implementing-usereducer",hide_table_of_contents:!0},i=void 0,s={unversionedId:"react/react-with-apis/4-5-0-6-ny-times-api-implementing-usereducer",id:"react/react-with-apis/4-5-0-6-ny-times-api-implementing-usereducer",title:"\ud83d\udcd3 4.5.0.6 NY Times API: Implementing useReducer",description:"Now it's time to refactor the TopStories component to use the useReducer() hook. Let's first take a look at the updated code, and then review the changes in detail down below.",source:"@site/docs/4_react/5_react-with-apis/AF-4-5-0-6-ny-times-api-implementing-usereducer.md",sourceDirName:"4_react/5_react-with-apis",slug:"/react/react-with-apis/4-5-0-6-ny-times-api-implementing-usereducer",permalink:"/v1/react/react-with-apis/4-5-0-6-ny-times-api-implementing-usereducer",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 4.5.0.6 NY Times API: Implementing useReducer",day:"weekend",id:"4-5-0-6-ny-times-api-implementing-usereducer",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\ud83d\udcd3 4.5.0.5 NY Times API: Writing and Testing our Reducer and Actions",permalink:"/v1/react/react-with-apis/4-5-0-5-ny-times-api-writing-and-testing-our-reducer-and-actions"},next:{title:"\ud83d\udcd3 4.5.0.7 React Context",permalink:"/v1/react/react-with-apis/4-5-0-7-react-context"}},l={},c=[{value:"Next Steps",id:"next-steps",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now it's time to refactor the ",(0,o.kt)("inlineCode",{parentName:"p"},"TopStories")," component to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook. Let's first take a look at the updated code, and then review the changes in detail down below."),(0,o.kt)("p",null,"If you want to take on a challenge, try refactoring the ",(0,o.kt)("inlineCode",{parentName:"p"},"TopStories")," component to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook by yourself before looking at the updated code below."),(0,o.kt)("div",{class:"filename"},"src/components/TopStories.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// We remove the useState hook and add the useReducer hook.\nimport React, { useEffect, useReducer } from 'react';\nimport topStoriesReducer from './../reducers/top-stories-reducer';\n// We import our action creators.\nimport { getTopStoriesFailure, getTopStoriesSuccess } from './../actions/index';\n\n// We create initial state for the useReducer hook.\nconst initialState = {\n  isLoaded: false,\n  topStories: [],\n  error: null\n};\n\nfunction TopStories () {\n  // We initialize the useReducer hook.\n  const [state, dispatch] = useReducer(topStoriesReducer, initialState);\n\n  useEffect(() => {\n    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)\n      .then(response => {\n        if (!response.ok) {\n          throw new Error(`${response.status}: ${response.statusText}`);\n        } else {\n          return response.json()\n        }\n      })\n      .then((jsonifiedResponse) => {\n        // We create an action and then dispatch it.\n        const action = getTopStoriesSuccess(jsonifiedResponse.results)\n        dispatch(action);\n      })\n      .catch((error) => {\n        // We create an action and then dispatch it. \n        const action = getTopStoriesFailure(error.message)\n        dispatch(action);\n      });\n    }, [])\n  \n  // we destructure error, isLoaded, and topStories from the state variable.\n  const { error, isLoaded, topStories } = state;\n\n  if (error) {\n    return <h1>Error: {error}</h1>;\n  } else if (!isLoaded) {\n    return <h1>...Loading...</h1>;\n  } else {\n    return (\n      <React.Fragment>\n        <h1>Top Stories</h1>\n        <ul>\n          {topStories.map((article, index) =>\n            <li key={index}>\n              <h3>{article.title}</h3>\n              <p>{article.abstract}</p>\n            </li>\n          )}\n        </ul>\n      </React.Fragment>\n    );\n  }\n}\n\nexport default TopStories;\n")),(0,o.kt)("p",null,"Let's go over the changes we've made to ",(0,o.kt)("inlineCode",{parentName:"p"},"TopStories.js"),". Most of this should be familiar from what we've learned about the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," example. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, we need to import ",(0,o.kt)("inlineCode",{parentName:"li"},"useReducer")," from React. We'll also need to remove the ",(0,o.kt)("inlineCode",{parentName:"li"},"useState")," import since we're no longer using it."),(0,o.kt)("li",{parentName:"ul"},"Next, we need to import the two action creators that we'll use to generate our actions: ",(0,o.kt)("inlineCode",{parentName:"li"},"getTopStoriesFailure")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"getTopStoriesSuccess"),". "),(0,o.kt)("li",{parentName:"ul"},"Next, outside of the ",(0,o.kt)("inlineCode",{parentName:"li"},"TopStories")," component, we create our initial state that will be added as an argument to the ",(0,o.kt)("inlineCode",{parentName:"li"},"useReducer()")," hook. We could instead put the initial state in a separate file, or even in ",(0,o.kt)("inlineCode",{parentName:"li"},"top-stories-reducer.js"),", and import it into ",(0,o.kt)("inlineCode",{parentName:"li"},"TopStories.js"),". Whatever you do, you should be consistent across your entire application."),(0,o.kt)("li",{parentName:"ul"},"We remove the three ",(0,o.kt)("inlineCode",{parentName:"li"},"useState()")," statements and replace them with a ",(0,o.kt)("inlineCode",{parentName:"li"},"useReducer()")," hook, passing in the ",(0,o.kt)("inlineCode",{parentName:"li"},"initialState")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"topStoriesReducer"),". We save the state and dispatch function that's returned from the ",(0,o.kt)("inlineCode",{parentName:"li"},"useReducer()")," hook in the variables ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch"),"; remember that we can call these variables anything so long as it is descriptive of what it represents."),(0,o.kt)("li",{parentName:"ul"},"Later in the ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect()")," hook and API call logic, when we receive a successful response or a failure response, we use either of our two action creator functions to generate an action, and then we dispatch that action using the ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch()")," function."),(0,o.kt)("li",{parentName:"ul"},"Finally, the last step in this refactor is to destructure the ",(0,o.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"isLoaded"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"topStories")," variables from the ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," variable. ")),(0,o.kt)("p",null,"Now we can run our application and everything will be working correctly. In other words, our API application is complete! We now have the tools to make API calls with ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()")," in React applications with both the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hooks. "),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"As you build React apps, we encourage you to continue to use hooks to manage state and avoid class components. That includes whether you use hooks in conjunction with a state library like Redux, or standalone. If you would like to learn how to make an API call in a class component, ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/faq-ajax.html"},"visit the React docs.")),(0,o.kt)("p",null,"Also, keep in mind that there are many, many custom React hooks out there. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rehooks/awesome-react-hooks"},"Check out this excellent list of resources on hooks"),", which includes tutorials and links to various custom hooks. Among other things, these custom hooks offer the following additional functionality to function components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Handling form state"),(0,o.kt)("li",{parentName:"ul"},"Using the Fetch API"),(0,o.kt)("li",{parentName:"ul"},"Drawing SVGs"),(0,o.kt)("li",{parentName:"ul"},"Handling media queries")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/react-with-api-and-useReducer"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  API Project with React and the ",(0,o.kt)("inlineCode",{parentName:"a"},"useReducer()")," Hook"))))}d.isMDXComponent=!0}}]);