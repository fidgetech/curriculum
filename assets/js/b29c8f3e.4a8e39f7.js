"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[96126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"\ud83d\udcd3 4.2.1.4 Adding Local State",day:"monday",id:"4-2-1-4-adding-local-state",hide_table_of_contents:!0},i=void 0,l={unversionedId:"react/react-fundamentals/4-2-1-4-adding-local-state",id:"react/react-fundamentals/4-2-1-4-adding-local-state",title:"\ud83d\udcd3 4.2.1.4 Adding Local State",description:"We're ready to add local state to our application. We'll start by adding two new components to src/components:",source:"@site/docs/4_react/2_react-fundamentals/AR-4-2-1-4-adding-local-state.md",sourceDirName:"4_react/2_react-fundamentals",slug:"/react/react-fundamentals/4-2-1-4-adding-local-state",permalink:"/v1.2/react/react-fundamentals/4-2-1-4-adding-local-state",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 4.2.1.4 Adding Local State",day:"monday",id:"4-2-1-4-adding-local-state",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\ud83d\udcd3 4.2.1.3 Planning Our Application: Part 2",permalink:"/v1.2/react/react-fundamentals/4-2-1-3-planning-our-application-part-2"},next:{title:"\ud83d\udcd3 4.2.1.5 Conditional Rendering",permalink:"/v1.2/react/react-fundamentals/4-2-1-5-conditional-rendering"}},c={},p=[],s={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We're ready to add local state to our application. We'll start by adding two new components to ",(0,o.kt)("inlineCode",{parentName:"p"},"src/components"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NewTicketForm.js"),": This will be our form;\n",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl.js"),": This will be the parent component for ",(0,o.kt)("inlineCode",{parentName:"p"},"NewTicketForm.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketList.js"),"."),(0,o.kt)("p",null,"Let's add some placeholder code to our ",(0,o.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," component:"),(0,o.kt)("div",{class:"filename"},"src/components/NewTicketForm.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nfunction NewTicketForm(props){\n  return (\n    <React.Fragment>\n      <h3>This is a form.</h3>\n    </React.Fragment>\n  );\n}\n\nexport default NewTicketForm;\n')),(0,o.kt)("p",null,"Because we are only worried about our local state right now (and toggling between two different components), we won't worry about the particulars of the form just yet."),(0,o.kt)("p",null,"Next, let's add the skeleton of our ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl")," component. Remember that this must be a class-based component to handle state."),(0,o.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport NewTicketForm from './NewTicketForm';\nimport TicketList from './TicketList';\n\nclass TicketControl extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n\n  render(){\n    return (\n      <React.Fragment>\n      </React.Fragment>\n    );\n  }\n\n}\n\nexport default TicketControl;\n")),(0,o.kt)("p",null,"We briefly covered state components over the weekend homework. We recommend quickly reviewing the ",(0,o.kt)("a",{parentName:"p",href:"../../react/react-fundamentals/4-2-0-5-react-components"},"React Components")," lesson if the code above doesn't look familiar. We will add more code to this component shortly. Since this component will be a parent to ",(0,o.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketList"),", we need to make sure we import both."),(0,o.kt)("p",null,"Next, let's make a small update to our ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component. It needs to render the ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl")," component now, not the ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketList")," component."),(0,o.kt)("div",{class:"filename"},"src/components/App.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport Header from "./Header";\nimport TicketControl from "./TicketControl";\n\nfunction App(){\n  return ( \n    <React.Fragment>\n      <Header />\n      <TicketControl />\n    </React.Fragment>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"We no longer import the ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketList")," component \u2014 we import ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl")," instead. Our ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component has also been updated to display the ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl")," component instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketList")," as well."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note that if we run our application right now, it will not render any tickets.")," This is expected \u2014 our ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl")," component doesn't render anything yet."),(0,o.kt)("p",null,"Next, let's add some state to our ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl")," component. Remember that our component can have one of two possible states:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TicketList")," is showing and ",(0,o.kt)("inlineCode",{parentName:"li"},"NewTicketForm")," is hidden;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NewTicketForm")," is showing and ",(0,o.kt)("inlineCode",{parentName:"li"},"TicketList")," is hidden.")),(0,o.kt)("p",null,"What do we want the default local state to be? A list of tickets or a form? Well, if we are reproducing the Epicodus Help Queue, the default state should show the ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketList")," component and hide the ",(0,o.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," component. Our new state should reflect that:"),(0,o.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"...\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      formVisibleOnPage: false\n    };\n  }\n\n...\n")),(0,o.kt)("p",null,"We simply add a key-value pair to our ",(0,o.kt)("inlineCode",{parentName:"p"},"this.state")," object. The default state of our application should be ",(0,o.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage: false"),"."),(0,o.kt)("p",null,"We can add as many key-value pairs as we need to ",(0,o.kt)("inlineCode",{parentName:"p"},"this.state"),". Just make sure each key-value pair is inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")," and that each key-value pair is separated by a comma."),(0,o.kt)("p",null,"Now that we have a default state, we need a way to change it. We'll also need to use conditional rendering to determine which component should be showing."),(0,o.kt)("p",null,"In the next lesson, we'll add conditional rendering to our component. Then, in the lesson after that, we'll learn how to update state with events. After those two lessons are complete, we will have working functionality to toggle between our ticket list and our placeholder form."))}m.isMDXComponent=!0}}]);