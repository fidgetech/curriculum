"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[69259],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),c=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(r.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,h=u["".concat(r,".").concat(p)]||u[p]||k[p]||o;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},34325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={title:"\ud83d\udcd3 4.4.0.5 Refactoring Help Queue to Use Hooks",day:"weekend",id:"4-4-0-5-refactoring-help-queue-to-use-hooks",hide_table_of_contents:!0},l=void 0,s={unversionedId:"react/react-with-nosql/4-4-0-5-refactoring-help-queue-to-use-hooks",id:"react/react-with-nosql/4-4-0-5-refactoring-help-queue-to-use-hooks",title:"\ud83d\udcd3 4.4.0.5 Refactoring Help Queue to Use Hooks",description:"Let's apply what we've learned about hooks to our Help Queue application. To do this, we'll build off of the version of our Help Queue that we completed by the end of the React Fundamentals course section. That means we won't be using Redux in this course section.",source:"@site/docs/4_react/4_react-with-nosql/AE-4-4-0-5-refactoring-help-queue-to-use-hooks.md",sourceDirName:"4_react/4_react-with-nosql",slug:"/react/react-with-nosql/4-4-0-5-refactoring-help-queue-to-use-hooks",permalink:"/v1/react/react-with-nosql/4-4-0-5-refactoring-help-queue-to-use-hooks",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 4.4.0.5 Refactoring Help Queue to Use Hooks",day:"weekend",id:"4-4-0-5-refactoring-help-queue-to-use-hooks",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\ud83d\udcd3 4.4.0.4 The Rules of Hooks, Custom Hooks, and Why Hooks Are Awesome",permalink:"/v1/react/react-with-nosql/4-4-0-4-the-rules-of-hooks-custom-hooks-and-why-hooks-are-awesome"},next:{title:"\ud83d\udcd3 4.4.0.6 Introduction to BaaS, Firebase, and Firestore",permalink:"/v1/react/react-with-nosql/4-4-0-6-introduction-to-baas-firebase-and-firestore"}},r={},c=[{value:"Refactoring Help Queue to Use Hooks",id:"refactoring-help-queue-to-use-hooks",level:2},{value:"Updating the <code>formVisibleOnPage</code> State",id:"updating-the-formvisibleonpage-state",level:3},{value:"Updating the <code>mainTicketList</code> State",id:"updating-the-mainticketlist-state",level:3},{value:"Updating the <code>formVisibleOnPage</code> State",id:"updating-the-formvisibleonpage-state-1",level:3},{value:"Removing Remaining References to <code>this</code>",id:"removing-remaining-references-to-this",level:3},{value:"Confirming a Successful Refactor",id:"confirming-a-successful-refactor",level:3}],d={toc:c},u="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's apply what we've learned about hooks to our Help Queue application. To do this, we'll build off of the version of our Help Queue that we completed by the end of the React Fundamentals course section. That means we won't be using Redux in this course section. "),(0,a.kt)("p",null,"After we complete our refactor to use hooks, we'll move on to incorporating a NoSQL database from Google's Firebase. "),(0,a.kt)("p",null,"If you have a Help Queue repo from the React Fundamentals course section that you created, you are welcome to build off of that repo. Alternatively, you can use the following repo, which contains all the code from the React Fundamentals course section: "),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/react-help-queue-starter-project"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Starter Project for Help Queue"))),(0,a.kt)("p",null,"As you read through these lessons as part of your weekend homework, know that you are not required to code along. The first classwork of the course section will prompt you to work through these lessons to refactor the Help Queue and connect it to a NoSQL database."),(0,a.kt)("p",null,"Our Help Queue refactor will involve completing these two items:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Turn the class component ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl")," into a function component."),(0,a.kt)("li",{parentName:"ul"},"Turn all state in ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl")," into state variables created and managed by the ",(0,a.kt)("inlineCode",{parentName:"li"},"useState")," hook.")),(0,a.kt)("p",null,"We'll run into a variety of compilation errors throughout this refactor since we'll be updating many variable names. So, hold off on building and running your project until we're done. "),(0,a.kt)("p",null,"Also take note that in this refactor we're not reorganizing where our state lives by moving state into other components or abstracting any stateful logic into a custom hook. "),(0,a.kt)("p",null,"Since we have multiple child components that need access to the same shared state, the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component remains the best location for our Help Queue's shared state. Also, since our Help Queue application is so small, there just isn't a good use case for abstracting any shared state into a custom hook. "),(0,a.kt)("p",null,"Remember that hooks don't change React fundamentals: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How we begin a React project by designing the UI so we can focus on component composition and reusability."),(0,a.kt)("li",{parentName:"ul"},'Later, how we determine where shared state should live by "lifting state up".'),(0,a.kt)("li",{parentName:"ul"},"Working with the unidirectional data flow by using props and callback functions. "),(0,a.kt)("li",{parentName:"ul"},"And more! Like considering whether to use external libraries like Redux to manage shared state in a central store. ")),(0,a.kt)("p",null,"It's worth a reminder that not all applications need Redux. To get an in-depth look into this, read more ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367"},"in this article")," and on ",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/faq/general#when-should-i-use-redux"},"the Redux docs"),"."),(0,a.kt)("h2",{id:"refactoring-help-queue-to-use-hooks"},"Refactoring Help Queue to Use Hooks"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The first refactor we'll make is turning ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," into a function component. To do this, we'll need to do a few things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update the class component declaration to a function component"),(0,a.kt)("li",{parentName:"ul"},"Comment out the constructor.  We'll refactor this more later, and then we'll remove it completely."),(0,a.kt)("li",{parentName:"ul"},"Turn the class methods into functions by adding ",(0,a.kt)("inlineCode",{parentName:"li"},"const")," in front of each declaration"),(0,a.kt)("li",{parentName:"ul"},"Remove the ",(0,a.kt)("inlineCode",{parentName:"li"},"render()")," method. ")),(0,a.kt)("p",null,"Here's what our updated code should look like:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport NewTicketForm from './NewTicketForm';\nimport TicketList from './TicketList';\nimport EditTicketForm from './EditTicketForm';\nimport TicketDetail from './TicketDetail';\n\nfunction TicketControl() {\n\n  // constructor(props) {\n  //   super(props);\n  //   this.state = {\n  //     formVisibleOnPage: false,\n  //     mainTicketList: [],\n  //     selectedTicket: null,\n  //     editing: false\n  //   };\n  // }\n\n  const handleClick = () => {\n    ...\n  }\n\n  const handleDeletingTicket = (id) => {\n    ...\n  }\n\n  const handleEditClick = () => {\n    ...\n  }\n\n  const handleEditingTicketInList = (ticketToEdit) => {\n    ...\n  }\n\n  const handleAddingNewTicketToList = (newTicket) => {\n    ...\n  }\n\n  const handleChangingSelectedTicket = (id) => {\n    ...\n  }\n\n  let currentlyVisibleState = null;\n  let buttonText = null; \n\n  if (this.state.editing ) {      \n    ...\n  } else if (this.state.selectedTicket != null) {\n    ...\n  } else if (this.state.formVisibleOnPage) {\n    ...\n  } else {\n    ...\n  }\n\n  return (\n    <React.Fragment>\n      {currentlyVisibleState}\n      <button onClick={this.handleClick}>{buttonText}</button> \n    </React.Fragment>\n  );\n}\n\nexport default TicketControl;\n")),(0,a.kt)("h3",{id:"updating-the-formvisibleonpage-state"},"Updating the ",(0,a.kt)("inlineCode",{parentName:"h3"},"formVisibleOnPage")," State"),(0,a.kt)("p",null,"Next, we'll update the ",(0,a.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage")," state to be created and managed by a ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook. To do this, we'll need to do a few things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, we'll import the ",(0,a.kt)("inlineCode",{parentName:"li"},"useState")," hook from React."),(0,a.kt)("li",{parentName:"ul"},"Then, we'll declare a ",(0,a.kt)("inlineCode",{parentName:"li"},"formVisibleOnPage")," state variable, with a ",(0,a.kt)("inlineCode",{parentName:"li"},"setFormVisibleOnPage")," updater function by calling the ",(0,a.kt)("inlineCode",{parentName:"li"},"useState")," hook and passing in an initial value of ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),". "),(0,a.kt)("li",{parentName:"ul"},"Finally, we'll update all locations where we call ",(0,a.kt)("inlineCode",{parentName:"li"},"this.state.formVisibleOnPage")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"this.setState(...)")," to reference the new ",(0,a.kt)("inlineCode",{parentName:"li"},"formVisibleOnPage")," state variable and call the ",(0,a.kt)("inlineCode",{parentName:"li"},"setFormVisibleOnPage")," updater function.")),(0,a.kt)("p",null,"Here's the updated code:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// new import!\nimport React, { useState } from 'react';\n...\n\nfunction TicketControl() {\n\n  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);\n\n  const handleClick = () => {\n    if (this.state.selectedTicket != null) {\n      // new code!\n      setFormVisibleOnPage(false);  \n      this.setState({\n        formVisibleOnPage: false,\n        selectedTicket: null,\n      });\n    } else {\n      // new code!\n      setFormVisibleOnPage(!formVisibleOnPage);\n    }\n  }\n\n  const handleDeletingTicket = (id) => {\n    ...\n  }\n\n  const handleEditClick = () => {\n    ...\n  }\n\n  const handleEditingTicketInList = (ticketToEdit) => {\n    ...\n  }\n\n  const handleAddingNewTicketToList = (newTicket) => {\n    const newMainTicketList = this.state.mainTicketList.concat(newTicket);\n    this.setState({mainTicketList: newMainTicketList});\n    // new code\n    setFormVisibleOnPage(false)\n  }\n\n  const handleChangingSelectedTicket = (id) => {\n    ...\n  }\n\n  let currentlyVisibleState = null;\n  let buttonText = null; \n\n  if (this.state.editing ) {      \n    ...\n  } else if (this.state.selectedTicket != null) {\n    ...\n    // removed this.state\n  } else if (formVisibleOnPage) {\n    ...\n  } else {\n    ...\n  }\n  \n  return (\n    ...\n  );\n}\n\nexport default TicketControl;\n")),(0,a.kt)("h3",{id:"updating-the-mainticketlist-state"},"Updating the ",(0,a.kt)("inlineCode",{parentName:"h3"},"mainTicketList")," State"),(0,a.kt)("p",null,"Next, we'll update the ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," state to be created and managed by a ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook. To do this, we repeat the same process we did with the ",(0,a.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage")," state:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, we'll declare a ",(0,a.kt)("inlineCode",{parentName:"li"},"mainTicketList")," state variable, with a ",(0,a.kt)("inlineCode",{parentName:"li"},"setMainTicketList")," updater function by calling the ",(0,a.kt)("inlineCode",{parentName:"li"},"useState")," hook and passing in an initial value of an empty array ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),". "),(0,a.kt)("li",{parentName:"ul"},"Then, we'll update all locations where we call ",(0,a.kt)("inlineCode",{parentName:"li"},"this.state.mainTicketList")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"this.setState(...)")," to reference the new ",(0,a.kt)("inlineCode",{parentName:"li"},"mainTicketList")," state variable and call the ",(0,a.kt)("inlineCode",{parentName:"li"},"setMainTicketList")," updater function.")),(0,a.kt)("p",null,"We've also made an update to the formatting and indentation when calling components and listing props so that it is easier to read. Here's a snippet from the larger code block below that highlights the updated formatting:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'else {\n  currentlyVisibleState = \n    <TicketList \n      onTicketSelection={this.handleChangingSelectedTicket} \n      ticketList={mainTicketList} />;\n  buttonText = "Add Ticket"; \n}\n')),(0,a.kt)("p",null,"Here's the updated code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\n\nfunction TicketControl() {\n  \n  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);\n  const [mainTicketList, setMainTicketList] = useState([]);\n\n  const handleClick = () => {\n    ...\n  }\n\n  const handleDeletingTicket = (id) => {\n    // new code!\n    const newMainTicketList = mainTicketList.filter(ticket => ticket.id !== id);\n    setMainTicketList(newMainTicketList);\n    // this.setState({\n    //   mainTicketList: newMainTicketList,\n    //   selectedTicket: null\n    // });\n  }\n\n  const handleEditClick = () => {\n    this.setState({editing: true});\n  }\n\n  const handleEditingTicketInList = (ticketToEdit) => {\n    // new code!\n    const editedMainTicketList = mainTicketList\n      .filter(ticket => ticket.id !== this.state.selectedTicket.id)\n      .concat(ticketToEdit);\n    // new code!\n    setMainTicketList(editedMainTicketList);\n    // this.setState({\n    //   mainTicketList: editedMainTicketList,\n    //   editing: false,\n    //   selectedTicket: null\n    // });\n  }\n\n  const handleAddingNewTicketToList = (newTicket) => {\n    // new code!\n    const newMainTicketList = mainTicketList.concat(newTicket);\n    // new code!\n    setMainTicketList(newMainTicketList);\n    setFormVisibleOnPage(false)\n  }\n\n  const handleChangingSelectedTicket = (id) => {\n    ...\n  }\n\n  let currentlyVisibleState = null;\n  let buttonText = null; \n\n  if (this.state.editing ) {      \n    ...\n  } else if (this.state.selectedTicket != null) {\n    ...\n  } else if (formVisibleOnPage) {\n    ...\n  } else {\n    currentlyVisibleState = \n      <TicketList \n        onTicketSelection={this.handleChangingSelectedTicket} \n        // new code!\n        ticketList={mainTicketList} />;\n    buttonText = "Add Ticket"; \n  }\n\n  return (\n    ...\n  );\n}\n\nexport default TicketControl;\n')),(0,a.kt)("h3",{id:"updating-the-formvisibleonpage-state-1"},"Updating the ",(0,a.kt)("inlineCode",{parentName:"h3"},"formVisibleOnPage")," State"),(0,a.kt)("p",null,"We'll finish our refactor to using the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook by updating the remaining ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"editing")," state slices. The process is exactly the same as with ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage"),". In one case, we'll need to update a variable called ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"selection")," in order to not clash with our state variables. As you read through the updated code below, pay attention to the comments."),(0,a.kt)("p",null,"Here's the updated code: "),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nfunction TicketControl() {\n\n  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);\n  const [mainTicketList, setMainTicketList] = useState([]);\n  const [selectedTicket, setSelectedTicket] = useState(null);\n  const [editing, setEditing] = useState(false);\n\n  const handleClick = () => {\n    if (selectedTicket != null) {\n      setFormVisibleOnPage(false);\n      // new code!\n      setSelectedTicket(null);\n      setEditing(false);\n    } else {\n      setFormVisibleOnPage(!formVisibleOnPage);\n    }\n  }\n  \n  const handleDeletingTicket = (id) => {\n    const newMainTicketList = mainTicketList.filter(ticket => ticket.id !== id);\n    setMainTicketList(newMainTicketList);\n    // new code!\n    setSelectedTicket(null);\n  }\n\n  const handleEditClick = () => {\n    // new code!\n    setEditing(true);\n  }\n  \n  const handleEditingTicketInList = (ticketToEdit) => {\n    const editedMainTicketList = mainTicketList\n    // new code: selectedTicket.id\n    .filter(ticket => ticket.id !== selectedTicket.id)\n    .concat(ticketToEdit);\n    setMainTicketList(editedMainTicketList);\n    // new code!\n    setEditing(false);\n    setSelectedTicket(null);\n  }\n\n  const handleAddingNewTicketToList = (newTicket) => {\n    ...\n  }\n\n  const handleChangingSelectedTicket = (id) => {\n    // new code: updated variable name to 'selection'\n    // so there's no clash with the state variable 'selectedTicket'\n    const selection = mainTicketList.filter(ticket => ticket.id === id)[0];\n    // new code!\n    setSelectedTicket(selection);\n  }\n\n  let currentlyVisibleState = null;\n  let buttonText = null; \n\n  // new code: editing\n  if (editing) {      \n    currentlyVisibleState = \n      <EditTicketForm \n        // new code: selectedTicket\n        ticket = {selectedTicket} \n        onEditTicket = {this.handleEditingTicketInList} />\n    buttonText = \"Return to Ticket List\";\n  // new code: selectedTicket\n  } else if (selectedTicket != null) {\n    currentlyVisibleState = \n      <TicketDetail \n        // new code: selectedTicket\n        ticket={selectedTicket} \n        onClickingDelete={this.handleDeletingTicket}\n        onClickingEdit = {this.handleEditClick} />\n    buttonText = \"Return to Ticket List\";\n  } else if (formVisibleOnPage) {\n    ...\n  } else {\n    ...\n  }\n\n  return (\n    ...\n  );\n}\n\nexport default TicketControl;\n")),(0,a.kt)("h3",{id:"removing-remaining-references-to-this"},"Removing Remaining References to ",(0,a.kt)("inlineCode",{parentName:"h3"},"this")),(0,a.kt)("p",null,"We've refactored all of our state to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook, so what's left? There's still quite a few references to ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," remaining when we pass down our helper functions as props to the components that ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," renders. These helper functions all used to be class methods that we'd need to reference with ",(0,a.kt)("inlineCode",{parentName:"p"},"this"),", like ",(0,a.kt)("inlineCode",{parentName:"p"},"this.handleEditingTicketInList"),". So let's review the big if/else statement at the end of ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," and remove all references to ",(0,a.kt)("inlineCode",{parentName:"p"},"this"),". "),(0,a.kt)("p",null,"Here's the updated code with the new formatting we're using to list components and props:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\n\nfunction TicketControl() {\n  ...\n\n  let currentlyVisibleState = null;\n  let buttonText = null; \n\n  if (editing) {      \n    currentlyVisibleState = \n      <EditTicketForm \n        ticket = {selectedTicket} \n        onEditTicket = {handleEditingTicketInList} />;\n    buttonText = "Return to Ticket List";\n  } else if (selectedTicket != null) {\n    currentlyVisibleState = \n      <TicketDetail \n        ticket={selectedTicket} \n        onClickingDelete={handleDeletingTicket}\n        onClickingEdit = {handleEditClick} />;\n    buttonText = "Return to Ticket List";\n  } else if (formVisibleOnPage) {\n    currentlyVisibleState = \n      <NewTicketForm \n        onNewTicketCreation={handleAddingNewTicketToList}/>;\n    buttonText = "Return to Ticket List"; \n  } else {\n    currentlyVisibleState = \n      <TicketList \n        onTicketSelection={handleChangingSelectedTicket} \n        ticketList={mainTicketList} />;\n    buttonText = "Add Ticket"; \n  }\n\n  return (\n    <React.Fragment>\n      {currentlyVisibleState}\n      <button onClick={handleClick}>{buttonText}</button> \n    </React.Fragment>\n  );\n}\n\nexport default TicketControl;\n')),(0,a.kt)("h3",{id:"confirming-a-successful-refactor"},"Confirming a Successful Refactor"),(0,a.kt)("p",null,"Now it's time to verify that our project still works as expected after this refactor. "),(0,a.kt)("p",null,"Optionally you can do a sweep of your code with ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"f")," to look for and remove any remaining ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state")," references before building your project. Or, you can directly build your project and work through any error messages that pop up that point to missed steps in the refactor process."),(0,a.kt)("p",null,"Also, I invite you to pause and review the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," \u2014 what do you think of it? Is it easier to read and reason about? What do you like most or least about this refactor?"))}k.isMDXComponent=!0}}]);