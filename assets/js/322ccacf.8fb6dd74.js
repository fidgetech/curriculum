"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[58865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,m=c["".concat(l,".").concat(u)]||c[u]||p[u]||i;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={title:"\ud83d\udcd3 1.2.2.3 Understanding Web APIs: The DOM",day:"tuesday",id:"1-2-2-3-understanding-web-apis-the-dom",hide_table_of_contents:!0},r=void 0,s={unversionedId:"introduction-to-programming/javascript-and-web-browsers/1-2-2-3-understanding-web-apis-the-dom",id:"introduction-to-programming/javascript-and-web-browsers/1-2-2-3-understanding-web-apis-the-dom",title:"\ud83d\udcd3 1.2.2.3 Understanding Web APIs: The DOM",description:'It\'s time to move beyond window methods to get a user response. Remember in the "Business and User Interface" lesson when we learned this?',source:"@site/docs/1_introduction-to-programming/2_javascript-and-web-browsers/BO-1-2-2-3-understanding-web-apis-the-dom.md",sourceDirName:"1_introduction-to-programming/2_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/1-2-2-3-understanding-web-apis-the-dom",permalink:"/introduction-to-programming/javascript-and-web-browsers/1-2-2-3-understanding-web-apis-the-dom",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 1.2.2.3 Understanding Web APIs: The DOM",day:"tuesday",id:"1-2-2-3-understanding-web-apis-the-dom",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\u270f\ufe0f 1.2.2.2 Practice: More Function Writing",permalink:"/introduction-to-programming/javascript-and-web-browsers/1-2-2-2-practice-more-function-writing"},next:{title:"\ud83d\udcd3 1.2.2.4 Accessing the DOM",permalink:"/introduction-to-programming/javascript-and-web-browsers/1-2-2-4-accessing-the-dom"}},l={},d=[{value:"The DOM",id:"the-dom",level:2},{value:"The DOM is a Tree",id:"the-dom-is-a-tree",level:3},{value:"A Hierarchy of Browser Objects \u2014 <code>document</code> Belongs to the <code>window</code> Object",id:"a-hierarchy-of-browser-objects--document-belongs-to-the-window-object",level:2},{value:"The DOM is a Web API",id:"the-dom-is-a-web-api",level:3},{value:"Summary",id:"summary",level:2}],h={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It's time to move beyond ",(0,a.kt)("inlineCode",{parentName:"p"},"window"),' methods to get a user response. Remember in the "Business and User Interface" lesson when we learned this?'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"However, ",(0,a.kt)("inlineCode",{parentName:"p"},"window.prompt()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"window.alert()")," really shouldn't be in our code at all \u2014 very few users like to be prompted or alerted (and both now have strong associations with hacky sites and malware). We've been using these ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," methods because they are the easiest way for beginners to get a user response, and we will continue to use them for a little while longer because they are so easy to use \u2014 but be aware they should generally be avoided.")),(0,a.kt)("p",null,"Well, it's very true. Now that we have a taste of writing code that interacts with users, it's time to learn the conventional tools used to handle user interaction: forms, buttons, and event handling. "),(0,a.kt)("p",null,"But before we can dive into learning these tools, we need to spend time learning how to access and manipulate the DOM. Why? The DOM houses all of our website's HTML. So, if we create a form in our webpage that we want the user to fill out and submit (an event), we'll need to know how to access the form through the DOM so we can set up our event handling. "),(0,a.kt)("p",null,"We're not going to worry about understanding the exact process of setting up event handling now. In this lesson, we will take time to review what the DOM is in more depth. Then in the next lesson, we'll learn how to access DOM elements. "),(0,a.kt)("h2",{id:"the-dom"},"The DOM"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"When the browser displays our website's HTML, it takes the HTML source code and turns into a HTML ",(0,a.kt)("strong",{parentName:"p"},"Document Object Model (DOM)"),". In fact when we see our HTML in the browser, what we're actually looking at is the HTML Document Object Model, and not our source code. "),(0,a.kt)("p",null,"At its most basic, we can understand the DOM as a series of related objects. All of these objects in the DOM are organized hierarchically so they accurately represent the structure, content, and markup of our HTML source code. In other words, anything that's in our HTML source code \u2014 an element, an attribute of an element, text \u2014 is turned into an object in the DOM."),(0,a.kt)("p",null,"The browser creates a Document Object Model representation of our HTML so that our HTML can be manipulated with a scripting language like JavaScript. For example, we can use JavaScript to access the DOM to add or remove HTML elements. Manipulating the DOM doesn't change the HTML source code \u2014 it only changes the DOM that's displayed in the browser window. Without the DOM, JavaScript would have no way of knowing about or interacting with our websites!"),(0,a.kt)("h3",{id:"the-dom-is-a-tree"},"The DOM is a Tree"),(0,a.kt)("p",null,'In technical terms, the DOM is our HTML represented as a hierarchical "tree" made up of "nodes". A ',(0,a.kt)("strong",{parentName:"p"},"tree")," is a data structure in computer programming, and there are many types of trees, but we won't spend time learning about all of them in this program. "),(0,a.kt)("p",null,"At its most basic, a tree consists of a root node that branches to child nodes, which in turn branch off into more child nodes. By default, nodes don't have any value \u2014 they can be of any data type. A node is just a data point along the tree, and it is always defined as in relation to other nodes. The following image from ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tree_(data_structure)"},"Wikipedia")," shows a tree with a root node of ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),", and a series connected and branching nodes, going downwards:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/tree-data-structure-from-wikipedia.png",alt:"This is an images of a tree data structure with a single root node at the top, and a series of child nodes."})),(0,a.kt)("p",null,"The tree data structure is similar to how trees in nature start at the trunk (the root node) and extend into a canopy, moving from limbs to branches to twigs (or, moving from node to node to node). We also use trees outside of computer programming to represent hierarchical relationships, like in a family tree or a species classification tree. And this is the main goal of trees \u2014 to represent hierarchical relationships between data."),(0,a.kt)("p",null,"The way we describe the relationships between each node in a tree is to identify whether it is a parent, child, or sibling. Using the image above, we can say:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The node that has no parent is the root node, and it has a value of ",(0,a.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,a.kt)("li",{parentName:"ul"},"The parent of node ",(0,a.kt)("inlineCode",{parentName:"li"},"7")," is the root node with a value of ",(0,a.kt)("inlineCode",{parentName:"li"},"2"),". "),(0,a.kt)("li",{parentName:"ul"},"The nodes with values ",(0,a.kt)("inlineCode",{parentName:"li"},"7")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"5")," are sibling nodes. "),(0,a.kt)("li",{parentName:"ul"},"The node with ",(0,a.kt)("inlineCode",{parentName:"li"},"9")," as its value is a child of node ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),", and a parent to node ",(0,a.kt)("inlineCode",{parentName:"li"},"4"),".")),(0,a.kt)("p",null,"Let's look at another example of a tree, this time of an HTML document."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/html-source-simple-with-tree.png",alt:"This image shows one HTML document as source code (on the left) and as a DOM (on the right)."})),(0,a.kt)("p",null,"This image shows one HTML document: on the left it's represented as source code, and on the right it's represented as a Document Object Model. In the DOM tree (the right in the image), the root node is the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object, which is a built-in object provided by the browser, just like the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object. Every node that branches from the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object in the DOM is an object that represents either an HTML element, text, or attribute. ",(0,a.kt)("strong",{parentName:"p"},"The ",(0,a.kt)("inlineCode",{parentName:"strong"},"document")," object")," is the entry point to accessing all of the DOM, including HTML elements, attributes, and text."),(0,a.kt)("p",null,"It's also important to note that every node in the DOM is an object. In terms of data structures, the DOM is a tree made up of nodes. However, since each node's value is an object, the HTML DOM is effectively a series of nested objects that stem from the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object."),(0,a.kt)("h2",{id:"a-hierarchy-of-browser-objects--document-belongs-to-the-window-object"},"A Hierarchy of Browser Objects \u2014 ",(0,a.kt)("inlineCode",{parentName:"h2"},"document")," Belongs to the ",(0,a.kt)("inlineCode",{parentName:"h2"},"window")," Object"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," objects we have learned about so far are not separate objects. ",(0,a.kt)("strong",{parentName:"p"},"In fact, by definition a ",(0,a.kt)("inlineCode",{parentName:"strong"},"window")," object represents our current browsing context with an HTML DOM inside of it"),". This means that the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object belongs to the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object. Check out this image that visualizes the relationship:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/window-is-global-object.png",alt:"This image shows a DOM tree with the root node as `window`, next to a browser window that shows two nested squares that represent the `document` object inside of the `window` object."})),(0,a.kt)("p",null,"The image shows the DOM tree next to the DOM in the browser. In the DOM tree, we can see that we've added ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," above ",(0,a.kt)("inlineCode",{parentName:"p"},"document"),". Because trees show hierarchical relationships, what this means is that the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object is nested inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object. Or, in other words, the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object is a property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object. "),(0,a.kt)("p",null,"Also in the image, we can see two colored squares that show what the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," include, both in the DOM tree and in the browser. The blue square represents the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object \u2014 our browser window or tab. The green square represents the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object, or the HTML DOM, and it is nested inside of the blue ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," square. Hopefully this relationship is intuitive \u2014 if ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," is our browser window, and our browser window contains our HTML, then the HTML ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," should be located within the ",(0,a.kt)("inlineCode",{parentName:"p"},"window"),". (If you are wondering about our website's CSS and JavaScript, this also gets added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object. We'll learn about each topic a bit more in upcoming lessons, but we won't be learning about either topic in depth.)"),(0,a.kt)("h3",{id:"the-dom-is-a-web-api"},"The DOM is a Web API"),(0,a.kt)("p",null,"Just a reminder that the DOM is a Web API!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The DOM is a Web API specification. A ",(0,a.kt)("strong",{parentName:"li"},"specification")," describes what the purpose of the API is, how it is structured, what it can do, and what other technology it interacts with."),(0,a.kt)("li",{parentName:"ul"},"An interface belonging to the DOM is the ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," object, which is also the entry point to the DOM. An ",(0,a.kt)("strong",{parentName:"li"},"interface")," is an object of a specific type that contains a specific set of functionality. We interact with a Web API through its interface(s). ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Remember: the ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," object is a global variable that's built-in to web browsers. ")))),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We reviewed information about the DOM that we already learned in previous lessons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The DOM is a Web API specification."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," object is the entry point to the DOM."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," object is a Web API interface.")),(0,a.kt)("p",null,"We also learned new information about the DOM:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The DOM is a tree made up of nodes, organized hierarchically. Each node is an object, so the HTML DOM is effectively a series of nested objects that stem from the ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," object."),(0,a.kt)("li",{parentName:"ul"},"Just as we view our website within the browser window, the ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," object is nested inside of the ",(0,a.kt)("inlineCode",{parentName:"li"},"window")," object. By definition a ",(0,a.kt)("inlineCode",{parentName:"li"},"window")," object represents our current browsing context with an HTML DOM inside of it.")))}p.isMDXComponent=!0}}]);