"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[66323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},19193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"\ud83d\udcd3 4.5.0.3 NY Times API: Making an API Call with fetch and useState",day:"weekend",id:"4-5-0-3-ny-times-api-making-an-api-call-with-fetch-and-usestate",hide_table_of_contents:!0},i=void 0,s={unversionedId:"react/react-with-apis/4-5-0-3-ny-times-api-making-an-api-call-with-fetch-and-usestate",id:"version-1.1/react/react-with-apis/4-5-0-3-ny-times-api-making-an-api-call-with-fetch-and-usestate",title:"\ud83d\udcd3 4.5.0.3 NY Times API: Making an API Call with fetch and useState",description:"In this lesson, we'll build a small application that will use fetch() to make an API call to the New York Times (NYT). This example is very similar to the one that the React documentation provides, but with a few modifications to follow best practices. This example will also be reminiscent of the setup in the React with NoSQL course section when we fetched data from a Firestore database.",source:"@site/versioned_docs/version-1.1/4_react/5_react-with-apis/AC-4-5-0-3-ny-times-api-making-an-api-call-with-fetch-and-usestate.md",sourceDirName:"4_react/5_react-with-apis",slug:"/react/react-with-apis/4-5-0-3-ny-times-api-making-an-api-call-with-fetch-and-usestate",permalink:"/v1.1/react/react-with-apis/4-5-0-3-ny-times-api-making-an-api-call-with-fetch-and-usestate",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 4.5.0.3 NY Times API: Making an API Call with fetch and useState",day:"weekend",id:"4-5-0-3-ny-times-api-making-an-api-call-with-fetch-and-usestate",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\ud83d\udcd3 4.5.0.2 React with APIs Development Project",permalink:"/v1.1/react/react-with-apis/4-5-0-2-react-with-apis-development-project"},next:{title:"\ud83d\udcd3 4.5.0.4 The useReducer Hook",permalink:"/v1.1/react/react-with-apis/4-5-0-4-the-usereducer-hook"}},l={},p=[{value:"Making an API Call with <code>fetch()</code>",id:"making-an-api-call-with-fetch",level:2},{value:"Creating the Components",id:"creating-the-components",level:3},{value:"Adding State",id:"adding-state",level:3},{value:"Making the API Call",id:"making-the-api-call",level:3},{value:"Adding Additional Error Handling",id:"adding-additional-error-handling",level:3},{value:"Returning UI",id:"returning-ui",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll build a small application that will use ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()")," to make an API call to the New York Times (NYT). This example is very similar to the one that the ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/faq-ajax.html"},"React documentation")," provides, but with a few modifications to follow best practices. This example will also be reminiscent of the setup in the React with NoSQL course section when we fetched data from a Firestore database."),(0,o.kt)("h2",{id:"making-an-api-call-with-fetch"},"Making an API Call with ",(0,o.kt)("inlineCode",{parentName:"h2"},"fetch()")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's start out by bootstrapping a new React project with create-react-app. In your desktop or folder of choice, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npx create-react-app react-with-api\n")),(0,o.kt)("p",null,"Next, let's get access to a New York Times developer API key. If you already have a New York Times API key from a previous Epicodus project, you are welcome to use that one. If you don't, go to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.nytimes.com/get-started"},"Get Started")," at the NYT's Developer site and complete the steps to getting an API key. Their documentation is excellent."),(0,o.kt)("p",null,"Within the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-with-api")," project, let's add ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," file. Once you've made a commit, go ahead and create a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in the root directory of the project."),(0,o.kt)("p",null,"Finally, add the following to the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file. Don't forget that all environmental variables need to have ",(0,o.kt)("inlineCode",{parentName:"p"},"REACT_APP")," as a prefix or they won't work."),(0,o.kt)("div",{class:"filename"},".env"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"REACT_APP_API_KEY=[Your NYT API key goes here]\n")),(0,o.kt)("h3",{id:"creating-the-components"},"Creating the Components"),(0,o.kt)("p",null,"Our application will have two components: ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TopStories.js"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"TopStories")," component will contain information from the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.nytimes.com/docs/top-stories-product/1/overview"},"NYT's Top Stories API"),". We could only use ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," to make our API call, but we're separating it into ",(0,o.kt)("inlineCode",{parentName:"p"},"TopStories")," in case you want to build this project out further on your own by adding on other API calls, functionality like searching for articles or listing what's most popular, books, or movies. "),(0,o.kt)("p",null,"We'll add both ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TopStories.js")," to a ",(0,o.kt)("inlineCode",{parentName:"p"},"components/")," folder. Their file paths will look like this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"react-with-api/src/components/App.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"react-with-api/src/copmonents/TopStories.js"))),(0,o.kt)("p",null,"That means we'll need to update the import for ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," to the following:"),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport App from './components/App';\n\n...\n")),(0,o.kt)("p",null,"Here's the code that we'll add to ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,o.kt)("div",{class:"filename"},"components/App.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport './App.css';\nimport TopStories from './TopStories';\n\nfunction App() {\n  return (\n    <React.Fragment>\n      < TopStories />\n    </React.Fragment>\n  );\n}\n\nexport default App;\n")),(0,o.kt)("p",null,"It's just a container for a ",(0,o.kt)("inlineCode",{parentName:"p"},"TopStories")," component that we haven't created yet. The ",(0,o.kt)("inlineCode",{parentName:"p"},"TopStories")," component will have the bulk of our code. "),(0,o.kt)("h3",{id:"adding-state"},"Adding State"),(0,o.kt)("p",null,"We'll continue to use hooks in function components to manage state and use component lifecycle features. Let's start by adding some local state:"),(0,o.kt)("div",{class:"filename"},"components/TopStories.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react';\n\nfunction TopStories() {\n  const [error, setError] = useState(null);\n  const [isLoaded, setIsLoaded] = useState(false);\n  const [topStories, setTopStories] = useState([]);\n}\n\nexport default TopStories;\n")),(0,o.kt)("p",null,"We've created three state variables: ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoaded"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"topStories"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The initial state of the ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," property is ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),". If the API call has an error, this property will be changed."),(0,o.kt)("li",{parentName:"ul"},"The initial state of ",(0,o.kt)("inlineCode",{parentName:"li"},"isLoaded")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),". We'll use the ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect()")," hook to make the API call once, after our component first renders. Once the call is complete, ",(0,o.kt)("inlineCode",{parentName:"li"},"isLoaded")," will be switched to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},"Finally, ",(0,o.kt)("inlineCode",{parentName:"li"},"topStories")," is an empty array. It will contain the NYT top stories in JSON format. Once the API call is made, we will update ",(0,o.kt)("inlineCode",{parentName:"li"},"topStories")," to hold this information.")),(0,o.kt)("h3",{id:"making-the-api-call"},"Making the API Call"),(0,o.kt)("p",null,"Next, let's set up a ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook to make the API call and update our state:"),(0,o.kt)("div",{class:"filename"},"components/TopStories.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect } from 'react';\n\nfunction TopStories () {\n  const [error, setError] = useState(null);\n  const [isLoaded, setIsLoaded] = useState(false);\n  const [topStories, setTopStories] = useState([]);\n\n  useEffect(() => {\n    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)\n      .then(response => response.json())\n      .then((jsonifiedResponse) => {\n          setTopStories(jsonifiedResponse.results)\n          setIsLoaded(true)\n        })\n      .catch((error) => {\n        setError(error)\n        setIsLoaded(true)\n      });\n    }, [])\n}\n\nexport default TopStories;\n")),(0,o.kt)("p",null,"Since we've passed in an empty array dependency, this ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook will run once, after our component is first rendered."),(0,o.kt)("p",null,"We use the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()")," API (a Web API, not React) to make our API call. The URL for the API call is in backticks so that we can use a template string for our API key, which is stored in an environmental variable."),(0,o.kt)("p",null,"Once the API call is complete, the response will be converted to JSON. Then, once it's been converted, we'll have our results. If all went well, we call ",(0,o.kt)("inlineCode",{parentName:"p"},"setTopStories()")," with the top stories data and set ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoaded")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"setIsLoaded(true)"),". Because the topStories are stored in a property of the response called ",(0,o.kt)("inlineCode",{parentName:"p"},"results"),", we update the ",(0,o.kt)("inlineCode",{parentName:"p"},"topStories")," state to be ",(0,o.kt)("inlineCode",{parentName:"p"},"jsonifiedResponse.results"),"."),(0,o.kt)("p",null,"If an error happens, we set ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoaded")," to true and set the ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," property to the error that the API call returns."),(0,o.kt)("p",null,"As noted in the ",(0,o.kt)("a",{parentName:"p",href:"../../intermediate-javascript/asynchrony-and-apis/2-3-2-2-fetch-api"},"Intermediate JavaScript lesson on ",(0,o.kt)("inlineCode",{parentName:"a"},"fetch()")),", a catch block with ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()")," will only catch internal server errors \u2014 not issues like a 404 error code. Because of this, we'll need to add in additional error checking. "),(0,o.kt)("h3",{id:"adding-additional-error-handling"},"Adding Additional Error Handling"),(0,o.kt)("p",null,"We can check for 400 and 500 level issues by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()")," API's ",(0,o.kt)("inlineCode",{parentName:"p"},"ok")," property, or by using an API's custom error responses. We could also use a combination of the two! As always, take time to research error handling on an API's documentation, and try breaking your API call to see what error messages are returned. "),(0,o.kt)("p",null,"We can break an API call by doing any of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Removing a character from the API key."),(0,o.kt)("li",{parentName:"ul"},"Changing the request URL."),(0,o.kt)("li",{parentName:"ul"},"Putting in phony input, if the API call includes query parameters.")),(0,o.kt)("p",null,"It turns out the NYT's documentation on error messages is non-existent. However, if we break the API call in Postman, we can see that the NYT API does in fact return custom error messages stored in a ",(0,o.kt)("inlineCode",{parentName:"p"},"fault")," key. To keep things simple for this lesson, we'll stick to using the ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()")," API's ",(0,o.kt)("inlineCode",{parentName:"p"},"ok")," property to provide additional error handling. "),(0,o.kt)("p",null,"Here's our updated code."),(0,o.kt)("div",{class:"filename"},"components/TopStories.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect } from 'react';\n\nfunction TopStories () {\n  const [error, setError] = useState(null);\n  const [isLoaded, setIsLoaded] = useState(false);\n  const [topStories, setTopStories] = useState([]);\n\n  useEffect(() => {\n    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)\n      .then(response => {\n          if (!response.ok) {\n            throw new Error(`${response.status}: ${response.statusText}`);\n          } else {\n            return response.json()\n          }\n        })\n      .then((jsonifiedResponse) => {\n          setTopStories(jsonifiedResponse.results)\n          setIsLoaded(true)\n        })\n      .catch((error) => {\n        setError(error.message)\n        setIsLoaded(true)\n      });\n    }, [])\n}\n\nexport default TopStories;\n")),(0,o.kt)("h3",{id:"returning-ui"},"Returning UI"),(0,o.kt)("p",null,"Finally, we need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," statement. In this case we'll use conditionals to determine which of the following our users will see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'A "...Loading..." message'),(0,o.kt)("li",{parentName:"ul"},"The daily top stories"),(0,o.kt)("li",{parentName:"ul"},"An error")),(0,o.kt)("p",null,"Here's the conditional with three possible returns:"),(0,o.kt)("div",{class:"filename"},"components/TopStories.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect, useState } from 'react';\n\nfunction TopStories () {\n  ...\n\n  ...\n\n  if (error) {\n    return <h1>Error: {error}</h1>;\n  } else if (!isLoaded) {\n    return <h1>...Loading...</h1>;\n  } else {\n    return (\n      <React.Fragment>\n        <h1>Top Stories</h1>\n        <ul>\n          {topStories.map((article, index) =>\n            <li key={index}>\n              <h3>{article.title}</h3>\n              <p>{article.abstract}</p>\n            </li>\n          )}\n        </ul>\n      </React.Fragment>\n    );\n  }\n}\n\nexport default TopStories;\n")),(0,o.kt)("p",null,"If there's an ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),", we'll return an error message. As long as the error's default state of ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," isn't changed, this conditional won't be triggered."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoaded")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),', we\'ll render a "...Loading..." message.'),(0,o.kt)("p",null,"Otherwise, we'll return the top stories. Note that we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," as a key for each list item just as we did in the React Fundamentals course section. In a more complex application, there could be valid reasons to give each story object in the ",(0,o.kt)("inlineCode",{parentName:"p"},"topStories")," array their own IDs (to then use as a key), but in this particular use case, we are doing the basics needed for React to complete the reconciliation process."),(0,o.kt)("p",null,"While each story object has many properties we can display, we're listing only the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"abstract")," properties."),(0,o.kt)("p",null,"We can do a simple implementation of an API call in this manner \u2014 and it works great. But what if our state gets more complicated? Let's say we not only get the top stories data from the NYT home page, but from the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.nytimes.com/docs/top-stories-product/1/overview"},"arts, science, and technology")," sections as well? In this case, it's better to reach for another tool to manage complex state: the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook. In the next lesson, we'll get to know how this hook works. Then, we'll refactor our NYT API call application to use it!"))}u.isMDXComponent=!0}}]);