"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[27223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"\ud83d\udcd3 4.4.1.2 Client-Side Routing",day:"monday",id:"4-4-1-2-client-side-routing",hide_table_of_contents:!0},o=void 0,s={unversionedId:"react/react-with-nosql/4-4-1-2-client-side-routing",id:"react/react-with-nosql/4-4-1-2-client-side-routing",title:"\ud83d\udcd3 4.4.1.2 Client-Side Routing",description:"Firebase offers much more than just a database solution \u2014 the service also provides an authentication solution that's easy to implement.",source:"@site/docs/4_react/4_react-with-nosql/AV-4-4-1-2-client-side-routing.md",sourceDirName:"4_react/4_react-with-nosql",slug:"/react/react-with-nosql/4-4-1-2-client-side-routing",permalink:"/v1/react/react-with-nosql/4-4-1-2-client-side-routing",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 4.4.1.2 Client-Side Routing",day:"monday",id:"4-4-1-2-client-side-routing",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\u270f\ufe0f 4.4.1.1 Firestore Survey, Quiz of Choice (Two-Day or One-Week Project)",permalink:"/v1/react/react-with-nosql/4-4-1-1-firestore-survey-quiz-of-choice-two-day-or-one-week-project"},next:{title:"\ud83d\udcd3 4.4.1.3 React Router",permalink:"/v1/react/react-with-nosql/4-4-1-3-react-router"}},l={},c=[{value:"Server-Side Routing",id:"server-side-routing",level:2},{value:"Client-Side Routing",id:"client-side-routing",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Firebase offers much more than just a database solution \u2014 the service also provides an authentication solution that's easy to implement."),(0,i.kt)("p",null,"We'll be adding Firebase authentication to our Help Queue application. Before we do that, though, it would be nice to have a separate sign-in page in our application. We'll put a sign-in link in our header. Then, when a user clicks on that link, they will be taken to that page."),(0,i.kt)("p",null,"To do this, we will incorporate ",(0,i.kt)("strong",{parentName:"p"},"client-side routing"),". This is different from ",(0,i.kt)("strong",{parentName:"p"},"server-side routing"),", which is how tools like .NET and Rails handle routing. Let's take a quick look at the difference."),(0,i.kt)("h2",{id:"server-side-routing"},"Server-Side Routing"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's think about the simple HTML sites we made in Introduction to Programming. Let's say we decided to host a site (maybe on GitHub, maybe somewhere else). The URL is ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"http://www.mywebsite.com"},"www.mywebsite.com")),"."),(0,i.kt)("p",null,"Users will view our site in their ",(0,i.kt)("strong",{parentName:"p"},"clients")," (usually a web browser, like Chrome or Firefox). They'll click on links to navigate to different pages on the site. These links depict the URL path of a different location on the site. For instance, we might have a URL like this: ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"http://www.mywebsite.com/portfolio"},"www.mywebsite.com/portfolio")),"."),(0,i.kt)("p",null,"When a user clicks a link, the client executes an HTTP ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request to retrieve the ",(0,i.kt)("strong",{parentName:"p"},"resources")," at the ",(0,i.kt)("em",{parentName:"p"},"portfolio")," ",(0,i.kt)("strong",{parentName:"p"},"path")," from the ",(0,i.kt)("strong",{parentName:"p"},"server")," hosting the site. The server receives this request, gathers the resources being requested (which could be HTML, CSS, JS or other code), and then sends it back to the client in a ",(0,i.kt)("strong",{parentName:"p"},"response"),". The client then uses the contents of the response to render the new page for the user."),(0,i.kt)("p",null,"Each time a link is clicked, the client sends another request for information. The server receives and processes that request and then sends a response back containing the necessary resources. This ongoing back-and-forth conversation is called a ",(0,i.kt)("strong",{parentName:"p"},"request-response loop"),"."),(0,i.kt)("p",null,"This is also the process that .NET and Rails applications use. It's the traditional way applications have handled routing \u2014 but it's not very fast, especially for more interactive sites."),(0,i.kt)("h2",{id:"client-side-routing"},"Client-Side Routing"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Tools like the React Router library that we'll use follow a pattern called ",(0,i.kt)("strong",{parentName:"p"},"client-side routing"),". As the name implies, this means the client (probably our browser) is responsible for routing, not the server."),(0,i.kt)("p",null,"Let's imagine that ",(0,i.kt)("em",{parentName:"p"},"mywebsite.com")," is a React site that uses client-side routing instead. The user still visits the site by entering a URL or clicking a link in their ",(0,i.kt)("strong",{parentName:"p"},"client"),". The client still sends a request to the website's server to retrieve information about the site. But instead of responding with just the resources for that page, the server responds with a single JavaScript file containing ",(0,i.kt)("em",{parentName:"p"},"everything")," for the ",(0,i.kt)("em",{parentName:"p"},"entire site"),". This file might have a name like ",(0,i.kt)("em",{parentName:"p"},"app.bundle.js"),"."),(0,i.kt)("p",null,"When the user navigates to a different part of the site such as ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"http://www.mywebsite.com/portfolio"},"www.mywebsite.com/portfolio")),"), ",(0,i.kt)("strong",{parentName:"p"},"the client doesn't send another request to the site's server."),' Instead, the file that the server initially sent is already in the browser\'s resources. The client is responsible for locating the content for the new "page" based on the code in the ',(0,i.kt)("em",{parentName:"p"},"app.bundle.js")," file."),(0,i.kt)("p",null,"This means that technically we aren't going to a different page. It just looks that way. This also makes it faster to complete concurrent calls to APIs and databases while rendering a new document because we are no longer making server requests to load and render new pages."),(0,i.kt)("p",null,"In the next lesson, we'll add client-side routing to our Help Queue application with React Router. Then, once we've added a router and a sign-in page, we'll be ready to add Firebase authentication to our application."))}h.isMDXComponent=!0}}]);