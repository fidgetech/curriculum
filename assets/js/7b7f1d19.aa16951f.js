"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[73483],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},20452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={title:"\ud83d\udcd3 4.3.0.5 Writing Our Second Redux Test",day:"weekend",id:"4-3-0-5-writing-our-second-redux-test",hide_table_of_contents:!0},o=void 0,s={unversionedId:"react/react-with-redux/4-3-0-5-writing-our-second-redux-test",id:"react/react-with-redux/4-3-0-5-writing-our-second-redux-test",title:"\ud83d\udcd3 4.3.0.5 Writing Our Second Redux Test",description:"We're ready to move on to our second test. Our goal is to give our Help Queue full CRUD functionality with Redux. In order to do that, we will need to be able to add a ticket.",source:"@site/docs/4_react/3_react-with-redux/AE-4-3-0-5-writing-our-second-redux-test.md",sourceDirName:"4_react/3_react-with-redux",slug:"/react/react-with-redux/4-3-0-5-writing-our-second-redux-test",permalink:"/v1/react/react-with-redux/4-3-0-5-writing-our-second-redux-test",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 4.3.0.5 Writing Our Second Redux Test",day:"weekend",id:"4-3-0-5-writing-our-second-redux-test",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\ud83d\udcd3 4.3.0.4 Writing Our First Redux Test",permalink:"/v1/react/react-with-redux/4-3-0-4-writing-our-first-redux-test"},next:{title:"\ud83d\udcd3 4.3.0.6 Writing Our Third Redux Test",permalink:"/v1/react/react-with-redux/4-3-0-6-writing-our-third-redux-test"}},c={},l=[{value:"Writing a Test for Adding Tickets",id:"writing-a-test-for-adding-tickets",level:3},{value:"Adding Logic to Make Our New Test Pass",id:"adding-logic-to-make-our-new-test-pass",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We're ready to move on to our second test. Our goal is to give our Help Queue full CRUD functionality with Redux. In order to do that, we will need to be able to add a ticket."),(0,i.kt)("p",null,"Before we start writing the test, let's think about how this will work in terms of our reducer."),(0,i.kt)("p",null,"As we briefly discussed in the last lesson, a reducer takes two arguments. One is the current state and one is an action to alter the current state."),(0,i.kt)("p",null,"That means that our updated reducer will need to accept a new action in order to actually add a ticket to our list of tickets. We will call this action ",(0,i.kt)("inlineCode",{parentName:"p"},"ADD_TICKET"),". It is Redux convention to capitalize actions and separate words with an underscore."),(0,i.kt)("h3",{id:"writing-a-test-for-adding-tickets"},"Writing a Test for Adding Tickets"),(0,i.kt)("p",null,"In order to write a test for adding tickets, we'll need to provide some ticket data at the top of the describe block:"),(0,i.kt)("div",{class:"filename"},"ticket-list-reducer.test.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import ticketListReducer from '../../reducers/ticket-list-reducer';\n\ndescribe('ticketListReducer', () => {\n\n  let action;\n  const ticketData = {\n    names: 'Ryan & Aimen',\n    location: '4b',\n    issue: 'Redux action is not working correctly.',\n    id: 1\n  };\n  //Don't remove the test we've already written!\n  ...\n});\n")),(0,i.kt)("p",null,"We add two things to the code above:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We declare an ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," but don't define it yet. Each of our new tests will define what the action should be (whether that is adding, updating, or deleting a ticket).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We create a ",(0,i.kt)("inlineCode",{parentName:"p"},"ticketData")," constant that provides ticket information for testing purposes."))),(0,i.kt)("p",null,"Next, let's write a test for adding tickets:"),(0,i.kt)("div",{class:"filename"},"ticket-list-reducer.test.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import ticketListReducer from '../../reducers/ticket-list-reducer';\n\ndescribe('ticketListReducer', () => {\n\n  let action;\n  const ticketData = {\n    names: 'Ryan & Aimen',\n    location: '4b',\n    issue: 'Redux action is not working correctly.',\n    id: 1\n  };\n\n  ...\n\n  test('Should successfully add new ticket data to mainTicketList', () => {\n    const { names, location, issue, id } = ticketData;\n    action = {\n      type: 'ADD_TICKET',\n      names: names,\n      location: location,\n      issue: issue,\n      id: id\n    };\n\n    expect(ticketListReducer({}, action)).toEqual({\n      [id] : {\n        names: names,\n        location: location,\n        issue: issue,\n        id: id\n      }\n    });\n  });\n\n});\n")),(0,i.kt)("p",null,"In our new test, we use ES6 destructuring syntax to provide keys from our ",(0,i.kt)("inlineCode",{parentName:"p"},"ticketData")," to the scope of our test."),(0,i.kt)("p",null,"In the last lesson, we briefly touched on the fact that our ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," can contain more than just the action's ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),". In the test above, our ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"ADD_TICKET"),". However, our reducer won't be able to do anything useful unless it also has information about the ticket it is supposed to add. That's why our reducer takes an object as an argument instead of just a string for the action type itself. Because it takes an object, it can take multiple key-value pairs that include additional information about the action the reducer will need to take."),(0,i.kt)("p",null,"This is also helpful because it's a code smell to pass too many arguments into a function. Functions with lots of arguments result in buggy code that's difficult to read. We can keep our reducers smelling spiffy by just passing in two arguments \u2014 the initial state and information about the action that should change the initial state."),(0,i.kt)("p",null,"Our new test should successfully fail:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},' FAIL  src/__tests__/reducers/ticket-list-reducer.test.js\n  ticketListReducer\n    \u2713 Should return default state if no action type is recognized (6ms)\n    \u2715 Should successfully add new ticket data to mainTicketList (6ms)\n\n  \u25cf ticketListReducer \u203a Should successfully add new ticket data to mainTicketList\n\n    expect(received).toEqual(expected) // deep equality\n\n    - Expected\n    + Received\n\n    - Object {\n    -   "1": Object {\n    -     "id": 1,\n    -     "issue": "Redux action is not working correctly.",\n    -     "location": "4b",\n    -     "names": "Ryan & Aimen",\n    -   },\n    - }\n    + Object {}\n\n      26 |       id: id\n      27 |     };\n    > 28 |     expect(ticketListReducer({}, action)).toEqual({\n         |                                           ^\n      29 |       [id] : {\n      30 |         names: names,\n      31 |         location: location,\n\n      at Object.test (src/__tests__/reducers/ticket-list-reducer.test.js:28:43)\n\nTest Suites: 1 failed, 1 total\nTests:       1 failed, 1 passed, 2 total\nSnapshots:   0 total\nTime:        2.801s\nRan all test suites related to changed files.\n')),(0,i.kt)("h3",{id:"adding-logic-to-make-our-new-test-pass"},"Adding Logic to Make Our New Test Pass"),(0,i.kt)("p",null,"Now we're ready to add logic to the reducer to pass our new test. Ultimately, a reducer is just a pure function that contains a conditional. What the reducer does is dependent on the action passed in as an argument."),(0,i.kt)("p",null,"We'll use a switch case to do this. A switch case is really just simplified syntax for writing a conditional statement. If you need a refresher on switch cases, ",(0,i.kt)("a",{parentName:"p",href:"../../intermediate-javascript/object-oriented-javascript/2-1-3-3-switch-cases"},"revisit this lesson"),"."),(0,i.kt)("div",{class:"filename"},"ticket-list-reducer.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const reducer = (state = {}, action) => {\n  const { names, location, issue, id } = action;\n  switch (action.type) {\n    case 'ADD_TICKET':\n      return Object.assign({}, state, {\n        [id]: {\n          names: names,\n          location: location,\n          issue: issue,\n          id: id\n        }\n      });\n    default:\n      return state;\n  }\n};\n\nexport default reducer;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We use ES6 object destructuring to destructure the other properties from the ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," object into the variables ",(0,i.kt)("inlineCode",{parentName:"p"},"names"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"location"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"issue"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Next, we state that our ",(0,i.kt)("inlineCode",{parentName:"p"},"switch")," will be based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"action.type"),". Because the ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," parameter takes an object, the reducer needs to look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," property to determine the action it should take.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As always, we don't want to mutate objects in pure functions. Instead, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign()")," to clone the ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," object. We discussed ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign()")," when we learned about functional programming, but it's a complex enough function that it's worth reviewing. In order for this to work correctly, ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign()")," must take three arguments:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The first argument ",(0,i.kt)("strong",{parentName:"p"},"must")," be an empty object ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),". Otherwise, ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign()")," will directly mutate the state we pass in instead of making a clone of it first. We don't want to do that!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The second argument is the object that will be cloned. In the reducer action above, it's the ticket list state we pass into our function.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The third argument is the change that should be made to our new copy. This will always be the new ticket that should be added to our ticket list state.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign()")," creates a new key-value pair where the key is the ticket's ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and the value is an object with all of the ticket's properties.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We return the value from ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign()"),". Our reducer hasn't altered anything. Instead, it made a copy of the state that was passed in as argument, altered the copy, and then returned the altered copy so it can be used elsewhere in our code."))),(0,i.kt)("p",null,'This is really, really important to understand \u2014 and causes a lot of problems otherwise. According to the Redux documentation, "Redux assumes that you never mutate the objects it gives to you in the reducer. ',(0,i.kt)("strong",{parentName:"p"},"Every single time, you must return the new state object."),"\" (The emphasis is theirs.) If we don't do this, we can get bad bugs that are very difficult to fix. The Redux store (which stores our data and which we'll discuss soon) may still update. However, because the original state has been mutated, Redux won't work properly and the React application won't get re-rendered correctly. In other words, if we mutate state in a reducer, we can end up with a situation where the data gets updated but React doesn't properly re-render components to reflect that. That is bad \u2014 and often quite challenging to fix."),(0,i.kt)("p",null,"If we run our tests, they will both pass:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"}," PASS  src/__tests__/reducers/ticket-list-reducer.test.js\n  ticketListReducer\n    \u2713 Should return default state if no action type is recognized (2ms)\n    \u2713 Should successfully add new ticket data to mainTicketList\n\nTest Suites: 1 passed, 1 total\nTests:       2 passed, 2 total\nSnapshots:   0 total\nTime:        0.488s, estimated 1s\nRan all test suites related to changed files.\n")),(0,i.kt)("p",null,"At this point, our reducer can now successfully handle the action for adding a ticket. Note, however, that we still haven't used Redux yet. Everything we've done so far is vanilla JavaScript. We've created a pure function that will take the current state, make a copy of that state, add a ticket to that copy, and then return the copy itself."),(0,i.kt)("p",null,"As we can see here, the reducer is only responsible for handling specific actions. It will never actually store any state. Even though we've written an action, our new ticket isn't stored anywhere. The Redux store will handle that. However, we aren't going to worry about Redux just yet. Instead, let's add full CRUD functionality to our reducer first."),(0,i.kt)("p",null,"Before we continue, note that our ",(0,i.kt)("inlineCode",{parentName:"p"},"ADD_TICKET")," action actually already provides update functionality. This is a basic fact of key-value pairs in an object. If we add a ticket with a key that already exists in our ticket list, the old values associated with the key will be replaced with the new values. If you'd like more practice with testing, try writing a test that confirms this."))}p.isMDXComponent=!0}}]);