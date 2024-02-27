"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[36796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={title:"\ud83d\udcd3 4.4.0.12 Adding Tickets to Firestore",day:"weekend",id:"4-4-0-12-adding-tickets-to-firestore",hide_table_of_contents:!0},r=void 0,l={unversionedId:"react/react-with-nosql/4-4-0-12-adding-tickets-to-firestore",id:"react/react-with-nosql/4-4-0-12-adding-tickets-to-firestore",title:"\ud83d\udcd3 4.4.0.12 Adding Tickets to Firestore",description:"Let's update our Help Queue to add new tickets directly to our Firestore database. Since Firestore data is saved in documents, which are grouped into collections, we'll need to create a tickets collection to hold individual ticket documents. To do this, we'll update the handleAddingNewTicketToList function in TicketControl.js and make use two Firestore functions:",source:"@site/docs/4_react/4_react-with-nosql/AL-4-4-0-12-adding-tickets-to-firestore.md",sourceDirName:"4_react/4_react-with-nosql",slug:"/react/react-with-nosql/4-4-0-12-adding-tickets-to-firestore",permalink:"/react/react-with-nosql/4-4-0-12-adding-tickets-to-firestore",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 4.4.0.12 Adding Tickets to Firestore",day:"weekend",id:"4-4-0-12-adding-tickets-to-firestore",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\ud83d\udcd3 4.4.0.11 Adding Firebase to React",permalink:"/react/react-with-nosql/4-4-0-11-adding-firebase-to-react"},next:{title:"\ud83d\udcd3 4.4.0.13 Viewing Tickets from Firestore",permalink:"/react/react-with-nosql/4-4-0-13-viewing-tickets-from-firestore"}},s={},c=[{value:"Adding Tickets to Firestore",id:"adding-tickets-to-firestore",level:2},{value:"How it Works: Creating New Collections with <code>collection()</code>",id:"how-it-works-creating-new-collections-with-collection",level:3},{value:"How it Works: Deleting Collections",id:"how-it-works-deleting-collections",level:3},{value:"Using Firestore Auto-Generated IDs",id:"using-firestore-auto-generated-ids",level:3},{value:"A Consideration When Using Random IDs",id:"a-consideration-when-using-random-ids",level:3},{value:"Adding a New Document Without a Firestore Auto-Generated ID",id:"adding-a-new-document-without-a-firestore-auto-generated-id",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's update our Help Queue to add new tickets directly to our Firestore database. Since Firestore data is saved in documents, which are grouped into collections, we'll need to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"tickets")," collection to hold individual ticket documents. To do this, we'll update the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleAddingNewTicketToList")," function in ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl.js")," and make use two Firestore functions: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"collection()")," allows us to specify a collection within our firestore database."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"addDoc()")," allows us to add a new document to a Firestore collection.")),(0,a.kt)("p",null,"We'll also refactor our Help Queue to let Firestore set each unique ticket id instead of using the ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid")," library."),(0,a.kt)("h2",{id:"adding-tickets-to-firestore"},"Adding Tickets to Firestore"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The first thing we need in order to do anything with our database is access to our database instance. This means we need to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"db")," variable from ",(0,a.kt)("inlineCode",{parentName:"p"},"firbase.js")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl"),":"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect, useState } from 'react';\nimport NewTicketForm from './NewTicketForm';\nimport TicketList from './TicketList';\nimport EditTicketForm from './EditTicketForm';\nimport TicketDetail from './TicketDetail';\n// new import!\nimport db from './../firebase.js';\n")),(0,a.kt)("p",null,"Now that we have access to our ",(0,a.kt)("inlineCode",{parentName:"p"},"db")," variable, we can use it in any request we make, including adding, updating, and deleting Firestore data."),(0,a.kt)("p",null,"So how do we format a POST request to Firestore? We'll follow the instructions in the Firestore docs on how to ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document"},"Add Data")," to a Firestore database. "),(0,a.kt)("p",null,"Here's our updated code, including a new import statement from the ",(0,a.kt)("inlineCode",{parentName:"p"},"firebase/firestore")," library:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\nimport { collection, addDoc } from "firebase/firestore";\n\nfunction TicketControl() {\n  ...\n\n  const handleAddingNewTicketToList = async (newTicketData) => {\n    await addDoc(collection(db, "tickets"), newTicketData);\n    setFormVisibleOnPage(false);\n  }\n\n  ...\n}\n\nexport default TicketControl;\n')),(0,a.kt)("p",null,"Let's break down this new code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"firebase/firestore")," library will have all of the helper functions that we need to implement CRUD functionality in our app. Right now we just import ",(0,a.kt)("inlineCode",{parentName:"li"},"collection")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"addDoc"),", but later we'll update this statement to import more Firestore helper functions."),(0,a.kt)("li",{parentName:"ul"},"The process of accessing our firestore database is asynchronous, so we use the ",(0,a.kt)("inlineCode",{parentName:"li"},"async")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"await")," keywords:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We make our ",(0,a.kt)("inlineCode",{parentName:"li"},"handleAddingNewTicketToList")," function expression ",(0,a.kt)("inlineCode",{parentName:"li"},"async"),", and "),(0,a.kt)("li",{parentName:"ul"},"We ",(0,a.kt)("inlineCode",{parentName:"li"},"await")," the ",(0,a.kt)("inlineCode",{parentName:"li"},"addDoc()")," function call."))),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"collection()")," function allows us to specify a collection within our firestore database. This function takes two arguments: the Firestore database instance, and the name of our collection. This function returns a ",(0,a.kt)("inlineCode",{parentName:"li"},"CollectionReference")," object, which as its name suggests, is an object that acts as a reference to a collection within our Firestore database. "),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"addDoc()")," function allows us to add a new document to a specified collection. This function takes two arguments: a collection reference and the data to be added to the new document. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Take note: the data that we add as the second argument must always be a JavaScript object! Each object key and value will become the Firestore document's field and value. The image below is a representation of this transformation.")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A representation of how JS objects get turned into Firestore documents.",src:n(84236).Z,width:"1030",height:"147"})),(0,a.kt)("p",null,"Also, if it's easier to read and reason about, we can re-write the new code in ",(0,a.kt)("inlineCode",{parentName:"p"},"handleAddingNewTicketToList")," to separate the ",(0,a.kt)("inlineCode",{parentName:"p"},"collection()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"addDoc()")," function calls onto multiple lines:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\nimport { collection, addDoc } from "firebase/firestore";\n\nfunction TicketControl() {\n  ...\n\n  const handleAddingNewTicketToList = async (newTicketData) => {\n    const collectionRef = collection(db, "tickets");\n    await addDoc(collectionRef, newTicketData);\n    setFormVisibleOnPage(false);\n  }\n\n  ...\n}\n\nexport default TicketControl;\n')),(0,a.kt)("p",null,"So with that, are we done? Not quite! Let's review a few important notes about adding and removing Firestore collections, and then we'll re-configure our code to let Firestore apply the unique IDs for each ticket."),(0,a.kt)("h3",{id:"how-it-works-creating-new-collections-with-collection"},"How it Works: Creating New Collections with ",(0,a.kt)("inlineCode",{parentName:"h3"},"collection()")),(0,a.kt)("p",null,"It's important to note that the process of creating new collections is highly automated through the ",(0,a.kt)("inlineCode",{parentName:"p"},"collection()")," helper function. This is how it works: when we create a new document and specify the name of a collection that we want to add the document to, Firestore will look in the database to see if a collection with the specified name exists, and if not, Firestore will simply create a new collection."),(0,a.kt)("h3",{id:"how-it-works-deleting-collections"},"How it Works: Deleting Collections"),(0,a.kt)("p",null,"The process of deleting a collection is also automated. Whenever we remove the last remaining document in a collection, Firestore will automatically delete that collection from the database. "),(0,a.kt)("p",null,"If you want to remove a collection with many documents still inside of it from your code, you'll need to delete each document (and any subcollections) individually. Again, when all documents are deleted from a collection, Firestore will automatically delete that collection. So all of this is to say, there's no Firestore helper function that deletes an entire collection."),(0,a.kt)("p",null,"However, you can manually delete an entire collection from the Firebase console. If you want to do this, follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open your Firestore database, "),(0,a.kt)("li",{parentName:"ul"},"Within the ",(0,a.kt)("em",{parentName:"li"},"Data")," tab, click the three vertical dots next to the name of the collection. In the image below this is circled in red "),(0,a.kt)("li",{parentName:"ul"},"From the menu that pops up, click ",(0,a.kt)("em",{parentName:"li"},"Delete collection"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How to delete a collection via the online Firestore database UI.",src:n(30207).Z,width:"678",height:"405"})),(0,a.kt)("h3",{id:"using-firestore-auto-generated-ids"},"Using Firestore Auto-Generated IDs"),(0,a.kt)("p",null,"Instead of using the ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid")," library, we'll use IDs that are auto-generated by Firestore. Also, instead of saving the unique ticket ID as a property of each ticket object, we'll set it as the name of our Firestore document. Let's get into it!"),(0,a.kt)("p",null,"We've actually already done most of the leg work to make this happen: the ",(0,a.kt)("inlineCode",{parentName:"p"},"addDoc")," function doesn't have a location to specify the document's ID, so when we use it to add a new document, Firestore knows that it needs to auto-generate one for us. "),(0,a.kt)("p",null,"We do, however, need to update ",(0,a.kt)("inlineCode",{parentName:"p"},"NewTicketForm.js")," to not generate an ID or an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property for our ticket. Remove the following two lines of code from ",(0,a.kt)("inlineCode",{parentName:"p"},"NewTicketForm.js"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"import { v4 } from 'uuid';")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id: v4()"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n// import { v4 } from \'uuid\';  <-- Remove this line!\nimport PropTypes from "prop-types"; \nimport ReusableForm from "./ReusableForm";\n\nfunction NewTicketForm(props){\n\n  function handleNewTicketFormSubmission(event) {\n    event.preventDefault();\n    props.onNewTicketCreation({\n      names: event.target.names.value, \n      location: event.target.location.value, \n      issue: event.target.issue.value, \n      // id: v4()  // <--- Remove this line!\n    });\n  }\n\n  return (\n    ...\n  );\n}\n\nNewTicketForm.propTypes = {\n  onNewTicketCreation: PropTypes.func\n};\n\nexport default NewTicketForm;\n')),(0,a.kt)("p",null,"So where does this auto-generated ID appear? It gets added as the the document's identifier. To understand this, let's add a new ticket to Firestore via our Help Queue app, and then inspect the newly created ticket in the online Firestore UI."),(0,a.kt)("p",null,"Go ahead and serve your Help Queue app and add a new ticket now. The ticket data that we'll use for this example has the following data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'names: "Fatima and Quincy"'),(0,a.kt)("li",{parentName:"ul"},'location: "3B"'),(0,a.kt)("li",{parentName:"ul"},'issue: "state variable not updating as expected"')),(0,a.kt)("p",null,"Now, navigate to the Firebase console, then open your Help Queue project, then select ",(0,a.kt)("em",{parentName:"p"},"Firestore Database")," from the left-hand vertical menu. This will open the Firestore database UI from which we can inspect our database data. You should see something very similar to what's in the image below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The leftmost column lists our collections. Here we have our ",(0,a.kt)("inlineCode",{parentName:"li"},"tickets")," collection listed."),(0,a.kt)("li",{parentName:"ul"},"The middle column lists the documents in the selected collection. As we can see, documents are listed by their ID. An ID can be any string, and we've used Firestore's auto-generated ID. "),(0,a.kt)("li",{parentName:"ul"},"The rightmost column list the data from the selected document.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Data in the Firestore database: a `tickets` collection with one ticket in it. The ticket has an auto-generated ID from Firestore.",src:n(19487).Z,width:"932",height:"365"})),(0,a.kt)("h3",{id:"a-consideration-when-using-random-ids"},"A Consideration When Using Random IDs"),(0,a.kt)("p",null,"If you are using a random ID generator, whether from the UUID library or Firestore, these IDs are typically not created to mark the order in which each document was created. What's more, Firestore lists the documents in a collection alphabetically by their ID (with numbers taking precedence over letters). That means that the order in which our list of tickets appear in our app can (and oftentimes do) change every time we add a new ticket to the list."),(0,a.kt)("p",null,"If the creation order of each document in a collection is important, there are two solutions to try out:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use a Firestore ",(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/firestore/manage-data/add-data#server_timestamp"},"Server Timestamp")," to mark when a document was initially created, or updated. You can then use this timestamp to sort your documents by their timestamp at creation when you query the database. We'll learn how to do this when we add ",(0,a.kt)("a",{parentName:"li",href:"/react/react-with-nosql/adding-wait-time-to-the-queue"},"a wait time to the Help Queue")," "),(0,a.kt)("li",{parentName:"ol"},"Create a custom method or use an external library that gives unique IDs that also are prefixed with a number that marks the order in which it was created.  ")),(0,a.kt)("h3",{id:"adding-a-new-document-without-a-firestore-auto-generated-id"},"Adding a New Document Without a Firestore Auto-Generated ID"),(0,a.kt)("p",null,"You may be wondering what our code would look like if we did not want Firestore to auto-generate an ID for us. Well, we'd need to use new methods: ",(0,a.kt)("inlineCode",{parentName:"p"},"setDoc()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"doc()"),". This is what our code would look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { v4 } from 'uuid';\nimport { setDoc, doc } from 'firebase/firestore;\n\nfunction TicketControl() {\n  ...\n\n  const handleAddingNewTicketToList = async (newTicketData) => {\n    await setDoc(doc(db, \"tickets\", v4()), newTicketData);\n    setFormVisibleOnPage(false);\n  }\n\n  ...\n}\n\nexport default TicketControl;\n")),(0,a.kt)("p",null,"Let's break this down!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"doc()")," function allows us to reference a document in the firestore database. With ",(0,a.kt)("inlineCode",{parentName:"li"},"doc()"),", we can specify the location of a new document or the location of an existing document. A few notes:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"doc()")," function takes 3 arguments: the database instance, the collection name, and the unique document identifier. In the above example, we've used the ",(0,a.kt)("inlineCode",{parentName:"li"},"uuid")," library's ",(0,a.kt)("inlineCode",{parentName:"li"},"v4()")," function to generate a unique ID. "),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"doc()")," function returns a ",(0,a.kt)("inlineCode",{parentName:"li"},"DocumentReference")," object, which as its name suggests, is an object that acts as a reference to a document within our Firestore database. "))),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"setDoc()")," function is similar to the ",(0,a.kt)("inlineCode",{parentName:"li"},"addDoc()")," function: we can use it to add or update a specified document with the data that's passed in as its second argument. ")),(0,a.kt)("p",null,"In our Help Queue app, we won't use the above code, and instead let Firestore auto-generated unique IDs for us."),(0,a.kt)("p",null,"Up next, we'll learn how to read data from Firestore. In the process, we'll learn how to take Firestore's auto-generated ID and add it as a property to each ticket in our local ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," so that we can continue to loop through the ticket list and display each ticket."))}p.isMDXComponent=!0},84236:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/firestore-JS-obj-to-doc-e56bd306a412e80d7d142723f7147a02.png"},30207:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/firestore-manual-delete-49f4c3199265951aa42265465272cb49.png"},19487:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/firestore-ticket-data-and-id-5b97701431557b4f3fcc44486970f15f.png"}}]);