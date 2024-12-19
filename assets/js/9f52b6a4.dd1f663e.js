"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[40145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},A=Object.keys(e);for(a=0;a<A.length;a++)n=A[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(a=0;a<A.length;a++)n=A[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,A=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=i(n),d=o,u=h["".concat(l,".").concat(d)]||h[d]||p[d]||A;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var A=n.length,r=new Array(A);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var i=2;i<A;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>A,metadata:()=>s,toc:()=>i});var a=n(87462),o=(n(67294),n(3905));const A={title:"\ud83d\udcd3 4.5.0.7 React Context",day:"weekend",id:"4-5-0-7-react-context",hide_table_of_contents:!0},r=void 0,s={unversionedId:"react/react-with-apis/4-5-0-7-react-context",id:"react/react-with-apis/4-5-0-7-react-context",title:"\ud83d\udcd3 4.5.0.7 React Context",description:"Now let's turn our attention to learning a new React tool for sharing data called context. In this lesson we'll get a conceptual introduction to context: what it is, its common use cases, and its alternatives.",source:"@site/docs/4_react/5_react-with-apis/AG-4-5-0-7-react-context.md",sourceDirName:"4_react/5_react-with-apis",slug:"/react/react-with-apis/4-5-0-7-react-context",permalink:"/v1.2/react/react-with-apis/4-5-0-7-react-context",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 4.5.0.7 React Context",day:"weekend",id:"4-5-0-7-react-context",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\ud83d\udcd3 4.5.0.6 NY Times API: Implementing useReducer",permalink:"/v1.2/react/react-with-apis/4-5-0-6-ny-times-api-implementing-usereducer"},next:{title:"\ud83d\udcd3 4.5.0.8 Help Queue: Planning and Setup for Context",permalink:"/v1.2/react/react-with-apis/4-5-0-8-help-queue-planning-and-setup-for-context"}},l={},i=[{value:"Context Shares Data",id:"context-shares-data",level:2},{value:"Context Updates the Components that Consumes its Data",id:"context-updates-the-components-that-consumes-its-data",level:2},{value:"Context Is Not a State Management Tool",id:"context-is-not-a-state-management-tool",level:2},{value:"When to Use Context",id:"when-to-use-context",level:2},{value:"Use Context as a Last Resort",id:"use-context-as-a-last-resort",level:2},{value:"Summary",id:"summary",level:2}],c={toc:i},h="wrapper";function p(e){let{components:t,...A}=e;return(0,o.kt)(h,(0,a.Z)({},c,A,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now let's turn our attention to learning a new React tool for sharing data called ",(0,o.kt)("strong",{parentName:"p"},"context"),". In this lesson we'll get a conceptual introduction to context: what it is, its common use cases, and its alternatives. "),(0,o.kt)("p",null,"Then, in the next lesson, we'll revisit our Help Queue application and update it to use context. We'll put all of the concepts in this lesson into practice by adding a light theme and dark theme to the Help Queue, and a button to toggle between each."),(0,o.kt)("h2",{id:"context-shares-data"},"Context Shares Data"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Context is a mechanism that allows developers to ",(0,o.kt)("strong",{parentName:"p"},"share data")," in a React application. Context is an object, and we can set up as many context objects as we need. In short, context is an alternative to props, both of which allow developers to pass data down, from one component to the next. The big difference between the two is how the data is passed down: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With props, data is explicitly passed down between each component to whatever component that needs it."),(0,o.kt)("li",{parentName:"ul"},'With context, we don\'t have to explicitly pass data between components. Instead, we create a new "context" and give it data to hold. Then, any component that needs the data stored in the context accesses it directly. ')),(0,o.kt)("p",null,"Check out the following visualization that demonstrates the difference."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data flow between React context and props.",src:n(15042).Z,width:"600",height:"299"})),(0,o.kt)("p",null,"In both cases, data flows down, but the power of context comes in its ability to share data between two components without having to explicitly pass data between any intermediary components. Because of this, context helps developers avoid prop drilling when data is shared across many components. "),(0,o.kt)("h2",{id:"context-updates-the-components-that-consumes-its-data"},"Context Updates the Components that Consumes its Data"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The other notable difference between context and props is in its relation to re-rendering. You may remember these key details about props:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A change in the value of a component's props does ",(0,o.kt)("strong",{parentName:"li"},"not")," trigger a re-render of that component. "),(0,o.kt)("li",{parentName:"ul"},"Only a change in the parent component's state will trigger a re-render of the parent component. This will in turn re-render all of its child components and they will all receive new props. ")),(0,o.kt)("p",null,"With context, the opposite is true:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'A change in the value of the context causes all of the components that consume (meaning, "use") its data will automatically be re-rendered. When we implement context in our Help Queue app in the next lesson, we\'ll learn exactly how this works. ')),(0,o.kt)("h2",{id:"context-is-not-a-state-management-tool"},"Context Is Not a State Management Tool"),(0,o.kt)("hr",null),(0,o.kt)("p",null,'It may be tempting to jump to the conclusion that context is a tool for "state management", however it\'s not true. Context is a tool for transmitting data, just like props. Neither tools change the value of their data, they just store and transmit data.'),(0,o.kt)("p",null,"If we want the data that context holds to change over time, then we need to use context in conjunction with ",(0,o.kt)("inlineCode",{parentName:"p"},"useState()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()"),", or a class component's ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," object. We'll learn how to do this in the next lesson."),(0,o.kt)("h2",{id:"when-to-use-context"},"When to Use Context"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Context should only be used in two cases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To share data that's considered global."),(0,o.kt)("li",{parentName:"ol"},"To share data that is used in multiple remote branches of a component tree that you would otherwise need to use heavy prop drilling to reach. ")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"The React docs for context"),' provides a few examples of what data could be needed on a "global" scale:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The user's locale, which includes the user's language, time zone, region, and any special preferences."),(0,o.kt)("li",{parentName:"ul"},"Color themes, like light and dark modes. "),(0,o.kt)("li",{parentName:"ul"},"The authenticated user.")),(0,o.kt)("p",null,"In theory, in each of the above cases many components will need the same information in order to function. To help us understand the two use cases for context, let's visualize them. Let's pretend we have an application with a component tree that looks like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"An example component tree with `App.js` as the root component and many nested components.",src:n(60191).Z,width:"639",height:"298"})),(0,o.kt)("p",null,"The root component of our tree is ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," and each component in the tree is represented by a square. Let's first visualize what an application that uses globally shared data might look like. We'll update our app's component tree to fill in components that use the global data with the color yellow:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"An example component tree that uses shared data that&#39;s considered global.",src:n(98818).Z,width:"639",height:"298"})),(0,o.kt)("p",null,'As we can see, "global" data in a React app doesn\'t mean that every component uses that data, but that ',(0,o.kt)("em",{parentName:"p"},"most")," or ",(0,o.kt)("em",{parentName:"p"},"many")," components do. This is a great use case for React context."),(0,o.kt)("p",null,"The other use case for context is when multiple components that are very far apart in the component tree need access to the same data. Let's visualize what that looks like: "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"An example component tree that uses shared data that is used by multiple components that are very far a part in the component tree.",src:n(25473).Z,width:"639",height:"298"})),(0,o.kt)("p",null,"In the above example, the components that use the shared data are in a light purple color, and they are pretty far apart in the component tree. Using context in the above example will help us avoid lifting data (as in ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/lifting-state-up.html"},'"lifting state up"'),") to the nearest ancestor component (",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),') and passing props down through many components (also called "prop drilling") to get the shared data where it needs to go.'),(0,o.kt)("h2",{id:"use-context-as-a-last-resort"},"Use Context as a Last Resort"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"With the use cases for context in mind, there's one final important thing to note when using context: the React docs heavily encourage developers to use context to share data only as a last resort. Why? Because it makes components harder to reuse: when a component uses context, it becomes dependent on the context and it can't be used outside of the context. "),(0,o.kt)("p",null,"But what would we do instead of using context? These are the two alternatives:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lift shared data up to a common ancestor and pass data down via props."),(0,o.kt)("li",{parentName:"ul"},"Consider how you can compose your components so that passing props is less cumbersome. ")),(0,o.kt)("p",null,"The React docs explain ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#before-you-use-context"},"the alternatives to using context on the docs"),", with examples. We'll also revisit this topic when we implement context in the Help Queue application. "),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this lesson, we've covered the conceptual basics of context:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Similar to props, context is a mechanism to transfer data between components."),(0,o.kt)("li",{parentName:"ul"},"Context is an object, and we can create as many of them as we need in our app."),(0,o.kt)("li",{parentName:"ul"},"Context updates the components that consume its data when its own value changes."),(0,o.kt)("li",{parentName:"ul"},"If we want to change the value of a context we create, we'll need to use a state management tool like ",(0,o.kt)("inlineCode",{parentName:"li"},"useState"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"useReducer"),", or a class component's ",(0,o.kt)("inlineCode",{parentName:"li"},"this.state")," object. "),(0,o.kt)("li",{parentName:"ul"},'Context should be used as a last resort to share data that\'s considered "global" in a React app.')),(0,o.kt)("p",null,"In the next lesson, we'll add a button to the Help Queue to toggle between light and dark mode, and we'll use context to do it! In the process, we'll review all of the concepts we learned in this lesson."))}p.isMDXComponent=!0},60191:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},98818:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},25473:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},15042:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/context-vs-props-data-flow-060a79fb78f3924f5f2b5c2f357fea13.png"}}]);