"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[51423],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,g=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},41336:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"\ud83d\udcd3 Representing Graph Structures with Code",id:"representing-graph-structures-with-code",slug:"representing-graph-structures-with-code",hide_table_of_contents:!0,sidebar_position:18,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/2_representing_graph_structures_with_code.md"},s=void 0,l={unversionedId:"capstone/capstone-week-1/representing-graph-structures-with-code",id:"capstone/capstone-week-1/representing-graph-structures-with-code",title:"\ud83d\udcd3 Representing Graph Structures with Code",description:"In the last lesson, we learned about the basics of graph theory and looked at a few visual representations of graphs. While visualizing graphs is very useful, as we've learned from working with tree structures, we can't simply apply visualization to code. For instance, a search tree isn't actually a tree in code \u2014 even though we can depict it that way on a piece of paper. Instead, a search tree is simply a series of nodes where the parent nodes have references to their children.",source:"@site/docs/capstone/1_capstone-week-1/AR-representing-graph-structures-with-code.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/representing-graph-structures-with-code",permalink:"/capstone/capstone-week-1/representing-graph-structures-with-code",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"\ud83d\udcd3 Representing Graph Structures with Code",id:"representing-graph-structures-with-code",slug:"representing-graph-structures-with-code",hide_table_of_contents:!0,sidebar_position:18,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/2_representing_graph_structures_with_code.md"},sidebar:"capstone",previous:{title:"\ud83d\udcd3 Introduction to Graphs",permalink:"/capstone/capstone-week-1/introduction-to-graphs"},next:{title:"\ud83d\udcd3 Building Graphs Part 1",permalink:"/capstone/capstone-week-1/building-graphs-part-1"}},i={},c=[{value:"Edge Lists",id:"edge-lists",level:3},{value:"Adjacency Lists",id:"adjacency-lists",level:3},{value:"Adjacency Matrix",id:"adjacency-matrix",level:3},{value:"Summary",id:"summary",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the last lesson, we learned about the basics of graph theory and looked at a few visual representations of graphs. While visualizing graphs is very useful, as we've learned from working with tree structures, we can't simply apply visualization to code. For instance, a search tree isn't actually a tree in code \u2014 even though we can depict it that way on a piece of paper. Instead, a search tree is simply a series of nodes where the parent nodes have references to their children."),(0,r.kt)("p",null,"So how can we represent a graph as code? Let's take a look at our interstellar travel again \u2014 but this time we'll make it an undirected graph. The aliens of Wobox are relieved!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/undirected_graph_planets.png",alt:"Undirected graph showing connections between planets."})),(0,r.kt)("p",null,"To simplify things even further, we've also made it so there are no circuits. That means that it's not possible to \"loop\" back to a planet without backtracking."),(0,r.kt)("p",null,"To depict the graph above, we need to know about two things: the nodes and the edges."),(0,r.kt)("p",null,"We can start by storing all the nodes in a data structure such as an array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const nodes = ["Lub", "Nu", "Zygob", "Wobox", "Cyra"];\n')),(0,r.kt)("p",null,"So how do we represent the edges? There are several ways to do this."),(0,r.kt)("h3",{id:"edge-lists"},"Edge Lists"),(0,r.kt)("p",null,"We can use an ",(0,r.kt)("strong",{parentName:"p"},"edge list")," to list all the edges between various nodes. Each edge can be written as a pair of values. For instance, we could depict the edge between Lub and Nu as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'["Lub", "Nu"]\n')),(0,r.kt)("p",null,"To depict all of the edges in our graph, we could do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const edges = [["Lub", "Nu"], ["Zygob", "Nu"], ["Nu", "Wobox"], ["Wobox", "Cyra"]];\n')),(0,r.kt)("p",null,"Each pair represents one of the edges in our graph. The order of the pairs doesn't matter. We also only need to depict the pair once and don't also need to have a reversed copy. For instance, since we already have ",(0,r.kt)("inlineCode",{parentName:"p"},'["Lub", "Nu"]'),", we don't need ",(0,r.kt)("inlineCode",{parentName:"p"},'["Nu", "Lub"]'),"."),(0,r.kt)("p",null,"If we wanted to see if a specific edge exists in a collection where the edges aren't ordered, we'd have to do a linear search through the collection, so that means O(N) runtime."),(0,r.kt)("h3",{id:"adjacency-lists"},"Adjacency Lists"),(0,r.kt)("p",null,"Another way to represent all the edges in a graph is with an ",(0,r.kt)("strong",{parentName:"p"},"adjacency list"),". With an adjacency list, we'd list ",(0,r.kt)("em",{parentName:"p"},"all")," of the nodes that each node is adjacent to. Let's use a JavaScript object to demonstrate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const adjacencyList = {\n  "Zygob": ["Nu"],\n  "Lub": ["Nu"],\n  "Nu": ["Lub", "Zygob", "Wobox"],\n  "Wobox": ["Nu", "Cyra"],\n  "Cyra": ["Wobox"]\n}\n')),(0,r.kt)("p",null,"As we can see, each node is a key and all of the adjacent nodes are stored as a value. Adjacent nodes are stored multiple times \u2014 as we can see, Lub includes Nu as a value and Nu includes Lub as a value."),(0,r.kt)("p",null,"We can also use an adjacency list to represent directed edges as well. For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const adjacencyList = {\n  "Wobox": [],\n  "Cyra": ["Wobox"]\n}\n')),(0,r.kt)("p",null,"In this adjacency list, Wobox can't reach any nodes but Cyra can reach Wobox. Poor Wobox!"),(0,r.kt)("h3",{id:"adjacency-matrix"},"Adjacency Matrix"),(0,r.kt)("p",null,"Finally, we can use an ",(0,r.kt)("strong",{parentName:"p"},"adjacency matrix")," to depict all the edges in a graph. An adjacency matrix uses a series of zeroes and ones or booleans to depict whether two nodes are adjacent or not."),(0,r.kt)("p",null,"Here's how this looks organized in a table."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Lub"),(0,r.kt)("th",{parentName:"tr",align:null},"Zygob"),(0,r.kt)("th",{parentName:"tr",align:null},"Cyra"),(0,r.kt)("th",{parentName:"tr",align:null},"Nu"),(0,r.kt)("th",{parentName:"tr",align:null},"Wobox"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lub"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Zygob"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cyra"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nu"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Wobox"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("p",null,"To depict this in JavaScript, we'd use nested arrays to represent each row in the matrix:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const adjacencyMatrix = [\n  [0, 0, 0, 1, 0],\n  [0, 0, 0, 1, 0],\n  [0, 0, 0, 0, 1],\n  [1, 1, 0, 0, 1],\n  [0, 0, 1, 1, 0],\n];\n")),(0,r.kt)("p",null,"It may seem silly to represent a planet's relationship with itself in an adjacency matrix. However, there is a type of graph known as a ",(0,r.kt)("strong",{parentName:"p"},"multigraph")," where nodes can have multiple edges \u2014 including an edge that starts and ends at the same node. For example, a multigraph could look like this (some planets omitted for simplicity)."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/multigraph.png",alt:"An example of a multigraph."})),(0,r.kt)("p",null,"For this reason, it makes sense that an adjacency matrix also checks to see if an edge connects a node to itself."),(0,r.kt)("p",null,"Note that an adjacency matrix can also be used to show directed edges. For instance, the intersection of the row Cyra with the column Wobox could have a value of 1 while the intersection of the row Wobox with the column Cyra could be 0. Then the trip to Wobox would be one way after all."),(0,r.kt)("p",null,"If we want to see whether two nodes are adjacent in an adjacency matrix, we can do so in constant time O(1). For instance, in order to check if Lub and Nu are adjacent, we simply need to check ",(0,r.kt)("inlineCode",{parentName:"p"},"adjacencyMatrix[0][3]"),". In other words, we just need to find the intersection of a specific column and row in the matrix."),(0,r.kt)("p",null,"However, there's also a downside. Adjacency matrixes can take up a lot of space, especially when considering ",(0,r.kt)("strong",{parentName:"p"},"sparse")," graphs. A graph is sparse if it doesn't have very many edges in relation to nodes. Why does this matter in terms of an adjacency matrix? Well, look at all the zeroes in the matrix above. We have to store information about the relationship between ",(0,r.kt)("em",{parentName:"p"},"every pair of nodes in the graph")," \u2014 even if they don't have an edge between them. That's a lot of empty space that doesn't exist in either an edge list or an adjacency list."),(0,r.kt)("p",null,"Also, if we want to find all the edges that the row Cyra has, we need to do a linear search of the entire row. Many of those values could be zeroes, so in a large data set, we are searching a lot of elements just to find a few adjacent nodes \u2014 especially in a sparse graph. Meanwhile, in an adjacency list, all the values corresponding to a node would represent adjacent nodes so there are fewer values to iterate through to get all the adjacent nodes."),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this lesson, we've learned three ways to represent the relationships (or edges) between nodes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edge lists"),(0,r.kt)("li",{parentName:"ul"},"Adjacency lists"),(0,r.kt)("li",{parentName:"ul"},"Adjacency Matrixes")),(0,r.kt)("p",null,"In the next lesson, we'll start building out a small TDD application to create a graph, including adding and removing nodes and edges. At that point, we'll be ready to start learning algorithms to traverse a graph."))}u.isMDXComponent=!0}}]);