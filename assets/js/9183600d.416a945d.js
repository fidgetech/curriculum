"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[87101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"\ud83d\udcd3 4.2.0.8 Building a Static Site",day:"weekend",id:"4-2-0-8-building-a-static-site",hide_table_of_contents:!0},i=void 0,p={unversionedId:"react/react-fundamentals/4-2-0-8-building-a-static-site",id:"version-1.1/react/react-fundamentals/4-2-0-8-building-a-static-site",title:"\ud83d\udcd3 4.2.0.8 Building a Static Site",description:"We've built a basic plan for our Help Queue and we're ready to start coding our application. Because our site is static for now, we will only use function components. Before we begin, there's an important point to reiterate \u2014 App.js is the parent component for all other components in our application. For that reason, as we add each component to our application, we will also need to add it either to App.js or to its parent component. This will become clear soon.",source:"@site/versioned_docs/version-1.1/4_react/2_react-fundamentals/AH-4-2-0-8-building-a-static-site.md",sourceDirName:"4_react/2_react-fundamentals",slug:"/react/react-fundamentals/4-2-0-8-building-a-static-site",permalink:"/v1.1/react/react-fundamentals/4-2-0-8-building-a-static-site",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 4.2.0.8 Building a Static Site",day:"weekend",id:"4-2-0-8-building-a-static-site",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\ud83d\udcd3 4.2.0.7 Planning a React Application",permalink:"/v1.1/react/react-fundamentals/4-2-0-7-planning-a-react-application"},next:{title:"\ud83d\udcd3 4.2.0.9 Props",permalink:"/v1.1/react/react-fundamentals/4-2-0-9-props"}},l={},c=[],s={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We've built a basic plan for our Help Queue and we're ready to start coding our application. Because our site is static for now, we will only use function components. Before we begin, there's an important point to reiterate \u2014 ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," is the parent component for ",(0,o.kt)("strong",{parentName:"p"},"all")," other components in our application. For that reason, as we add each component to our application, we will also need to add it either to ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," or to its parent component. This will become clear soon."),(0,o.kt)("p",null,"Before we do anything else, let's add a new directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"components")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory of our ",(0,o.kt)("inlineCode",{parentName:"p"},"help-queue")," project. All of our components will be added to this directory including ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),". Storing all components in a ",(0,o.kt)("inlineCode",{parentName:"p"},"components")," directory is considered a best practice. However, note that ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," should ",(0,o.kt)("em",{parentName:"p"},"not")," be added to our new ",(0,o.kt)("inlineCode",{parentName:"p"},"components")," directory."),(0,o.kt)("p",null,"Next, we need to make a change to our ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," file so it knows where to find the ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component. Currently, ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," thinks that ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," is in the same directory:"),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import App from './App';\n")),(0,o.kt)("p",null,"However, since we've moved our ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component into a directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"components"),", we need to update that import statement:"),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import App from './components/App';\n")),(0,o.kt)("p",null,"We will always make this update when making a new application with ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app"),"."),(0,o.kt)("p",null,"Now we're ready to create our first function component. We'll start with our header. Create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"Header.js")," and add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"components")," directory. Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"Header.js")," is capitalized. It is standard naming convention to capitalize component names."),(0,o.kt)("p",null,"Here's our new component:"),(0,o.kt)("div",{class:"filename"},"src/components/Header.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n\nfunction Header(){\n  return (\n    <h1>Help Queue</h1>\n  );\n}\n\nexport default Header;\n')),(0,o.kt)("p",null,"As we can see, we've barely added anything \u2014 our header just returns a single ",(0,o.kt)("inlineCode",{parentName:"p"},"<h1>")," tag. As always, we need to import ",(0,o.kt)("inlineCode",{parentName:"p"},"React")," and export the component so it's available to the rest of our application. We imported and exported files in the same way when we worked with webpack in Intermediate JavaScript."),(0,o.kt)("p",null,"Note also that we didn't need to wrap our JSX code in a ",(0,o.kt)("inlineCode",{parentName:"p"},"<React.Fragment>"),". This is because our component is only returning one element. If we were returning multiple elements, we'd need to use a fragment."),(0,o.kt)("p",null,"This component may seem too small but it really isn't. A more complex header might have more code in it, and yet even if it didn't, it makes sense to separate the header into its own component. After all, it doesn't have anything to do with tickets or a button for a form. Also, we may well need to add more to our header later and it's already nicely separated."),(0,o.kt)("p",null,"Next, we need to add our component to ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,o.kt)("div",{class:"filename"},"src/components/App.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport Header from "./Header";\n\nfunction App(){\n  const name = "Thato";\n  const name2 = "Haley";\n  return (\n    <React.Fragment>\n      <Header />\n      <h3>3a</h3>\n      <h3>{name} and {name2}</h3>\n      <p><em>Firebase entries not saving!</em></p>\n      <hr/>\n    </React.Fragment>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"We've made a few changes here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First, we need to import our new ",(0,o.kt)("inlineCode",{parentName:"p"},"Header")," component.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Next, we need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"<Header />")," as a child element of ",(0,o.kt)("inlineCode",{parentName:"p"},"<React.Fragment>"),". We've also removed the code for the header from ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," because that code is now in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Header")," component."))),(0,o.kt)("p",null,"Next, we're ready to create our ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketList")," component. Let's add a ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketList.js")," file to ",(0,o.kt)("inlineCode",{parentName:"p"},"src/components"),"."),(0,o.kt)("p",null,"Here's our new component. We'll be moving all of the ticket-related code out of ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," and into this component:"),(0,o.kt)("div",{class:"filename"},"src/components/TicketList.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport Ticket from "./Ticket";\n\nfunction TicketList(){\n  return (\n    <Ticket />\n  );\n}\n\nexport default TicketList;\n')),(0,o.kt)("p",null,"Our ticket list just needs to have a list of tickets. However, we will have a separate ",(0,o.kt)("inlineCode",{parentName:"p"},"Ticket")," component, so for now, our ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketList")," will just hold the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ticket")," component. We will be building this out further in the next few lessons. Note that we are importing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ticket")," component even though we haven't built it yet. The application will not compile properly if you try to run it now."),(0,o.kt)("p",null,"Finally, we'll add our ",(0,o.kt)("inlineCode",{parentName:"p"},"Ticket")," component:"),(0,o.kt)("div",{class:"filename"},"src/components/Ticket.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n\nfunction Ticket(){\n  const name = "Thato";\n  const name2 = "Haley";\n  return (\n    <React.Fragment>\n      <h3>3a</h3>\n      <h3>{name} and {name2}</h3>\n      <p><em>Firebase entries not saving!</em></p>\n      <hr/>\n    </React.Fragment>\n  );\n}\n\nexport default Ticket;\n')),(0,o.kt)("p",null,"We've moved most of the code that was originally in our ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component into our ",(0,o.kt)("inlineCode",{parentName:"p"},"Ticket")," component."),(0,o.kt)("p",null,"This is what our ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component should look like after moving the ticket information into our ",(0,o.kt)("inlineCode",{parentName:"p"},"Ticket")," component:"),(0,o.kt)("div",{class:"filename"},"src/components/App.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport Header from "./Header";\nimport TicketList from "./TicketList";\n\nfunction App(){\n  return ( \n    <React.Fragment>\n      <Header />\n      <TicketList />\n    </React.Fragment>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"As we can see, our ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component is really just a container for our other components now."),(0,o.kt)("p",null,"It may not seem like we've done much yet, but we've successfully separated our Help Queue into multiple components. We'll add a component with a button for showing a form when we are ready to work with state."),(0,o.kt)("p",null,"The importance of making small, modular components may not be obvious when our application is so simple. However, it's extremely important to practice separating components like this. It's not just a best practice \u2014 it's what makes React so modular and DRY. It will also make your life much easier when you work with larger React applications."),(0,o.kt)("p",null,"The article ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/thinking-in-react.html"},"Thinking in React"),", which is featured in the React documentation, outlines how professional React developers approach creating projects."),(0,o.kt)("p",null,"Before continuing, read the first two steps in the article above (",(0,o.kt)("em",{parentName:"p"},"Break the UI Into a Component Hierarchy")," and ",(0,o.kt)("em",{parentName:"p"},"Build a Static Version in React"),"). These steps discuss how to mock-up a React application, break its UI into a component hierarchy, and build a static version. This is an essential skill to learn."))}d.isMDXComponent=!0}}]);