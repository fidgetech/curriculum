"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[9888],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=l(a),u=s,g=h["".concat(d,".").concat(u)]||h[u]||c[u]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=u;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[h]="string"==typeof e?e:s,i[1]=r;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19024:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=a(87462),s=(a(67294),a(3905));const o={title:"\ud83d\udcd3 Building Graphs Part 2",id:"building-graphs-part-2",slug:"building-graphs-part-2",hide_table_of_contents:!0,sidebar_position:20,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/4_building_graphs_part_2.md"},i=void 0,r={unversionedId:"capstone/capstone-week-1/building-graphs-part-2",id:"capstone/capstone-week-1/building-graphs-part-2",title:"\ud83d\udcd3 Building Graphs Part 2",description:"Let's start building our application now using the testing structure from the Computer Science Testing Environment lesson.",source:"@site/docs/capstone/1_capstone-week-1/AT-building-graphs-part-2.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/building-graphs-part-2",permalink:"/v1/capstone/capstone-week-1/building-graphs-part-2",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"\ud83d\udcd3 Building Graphs Part 2",id:"building-graphs-part-2",slug:"building-graphs-part-2",hide_table_of_contents:!0,sidebar_position:20,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/4_building_graphs_part_2.md"},sidebar:"capstone",previous:{title:"\ud83d\udcd3 Building Graphs Part 1",permalink:"/v1/capstone/capstone-week-1/building-graphs-part-1"},next:{title:"\ud83d\udcd3 Introduction to Stacks and Queues",permalink:"/v1/capstone/capstone-week-1/introduction-to-stacks-and-queues"}},d={},l=[{value:"Instantiating a Graph",id:"instantiating-a-graph",level:3},{value:"Creating Nodes",id:"creating-nodes",level:3},{value:"Checking to See if Nodes Exist",id:"checking-to-see-if-nodes-exist",level:3},{value:"Adding Edges",id:"adding-edges",level:3},{value:"Checking to See If An Edge Exists",id:"checking-to-see-if-an-edge-exists",level:3},{value:"Removing Edges",id:"removing-edges",level:3},{value:"Removing Nodes",id:"removing-nodes",level:3}],p={toc:l},h="wrapper";function c(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Let's start building our application now using the testing structure from the ",(0,s.kt)("a",{parentName:"p",href:"/capstone/capstone-week-1/computer-science-testing-environment-setup"},"Computer Science Testing Environment")," lesson."),(0,s.kt)("p",null,"We are going to keep this application very simple. In fact, our nodes will just be strings. That way, we can focus entirely on building a ",(0,s.kt)("inlineCode",{parentName:"p"},"Graph")," class without worrying about a ",(0,s.kt)("inlineCode",{parentName:"p"},"Node")," class."),(0,s.kt)("p",null,"So let's think about the simplest possible behavior our ",(0,s.kt)("inlineCode",{parentName:"p"},"Graph")," class should have. We should be able to instantiate a graph with an empty data structure where we will store information about nodes and edges. So which data structure should we use?"),(0,s.kt)("p",null,"Remember, we have three options:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Edge list"),(0,s.kt)("li",{parentName:"ul"},"Adjacency list"),(0,s.kt)("li",{parentName:"ul"},"Adjacency matrix")),(0,s.kt)("p",null,"We aren't going to do an edge list because honestly, it's not that great for searching. We'd have to look through the entire collection of pairs just to see a list of someone's friends. That's not very efficient."),(0,s.kt)("p",null,"That leaves an adjacency list or an adjacency matrix. We are going to use an adjacency list for a number of reasons. First, we can store additional data in an adjacency list (such as information about nodes and edges). We won't do that here, but it's an advantage that an adjacency list has over an adjacency matrix."),(0,s.kt)("p",null,"An adjacency list is also more efficient than an adjacency matrix for checking a node's adjacent nodes \u2014 and in the context of this application, that means it's more efficient for looking at a list of someone's friends. That is a pretty important operation. Why is it more efficient? Well, finding adjacent nodes is an O(N) search for both adjacency lists and adjacency matrixes. However, with an adjacency list, we just need to iterate over a list of adjacent nodes (in this case, a list of someone's friends). In the case of an adjacency matrix, we'd need to iterate over ",(0,s.kt)("em",{parentName:"p"},"all")," nodes \u2014 that is, everyone in the application, and check to see if each person is a friend or not. So imagine if our application has a million users. We want to see a list of Jasmine's friends. (She has fifty friends in the application in all.) It makes much more sense to iterate through a list of those fifty friends to see them than to iterate through ",(0,s.kt)("em",{parentName:"p"},"all")," one million users, checking to see if each is a friend or not."),(0,s.kt)("p",null,"Now that we've decided to use an adjacency list, we know that when we instantiate a ",(0,s.kt)("inlineCode",{parentName:"p"},"Graph"),", it should come with an empty adjacency list."),(0,s.kt)("p",null,"We are going to use a ",(0,s.kt)("inlineCode",{parentName:"p"},"Map")," to store this list. While we could keep things very simple and just use a JavaScript object, there are performance advantages to using a ",(0,s.kt)("inlineCode",{parentName:"p"},"Map")," \u2014 and we can easily use a ",(0,s.kt)("inlineCode",{parentName:"p"},"Map"),"'s built-in methods to add nodes and edges to our adjacency list. What are the performance advantages? Well, for one thing, a ",(0,s.kt)("inlineCode",{parentName:"p"},"Map")," uses a hash table lookup algorithm under the hood. The ES6 specs guarantee at least an average of ",(0,s.kt)("strong",{parentName:"p"},"sub-linear complexity")," for ",(0,s.kt)("inlineCode",{parentName:"p"},"Map")," implementations. But what does that mean? Well, sub-linear complexity means that the Big O needs to be better than linear time (O(N)), so that could be something like O(1) constant time or O(log n) logarithmic time."),(0,s.kt)("p",null,"Meanwhile, if we used an object instead, we'd need to iterate through the object \u2014 and object iteration isn't optimized already, which means we'd have a Big O of O(N). So iterating through objects is slower."),(0,s.kt)("h3",{id:"instantiating-a-graph"},"Instantiating a Graph"),(0,s.kt)("p",null,"Our first check will make sure that we can correctly instantiate a new graph with an empty adjacency list:"),(0,s.kt)("div",{class:"filename"},"__tests__/graph.test.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import Graph from '../src/graph.js';\n\ndescribe('Graph', () => {\n\n  let graph = new Graph();\n\n  afterEach(() => {\n    graph = new Graph();\n  });\n\n  test('should correctly instantiate a graph', () => {\n    expect(graph.adjacencyList.size).toEqual(0);\n  });\n});\n")),(0,s.kt)("p",null,"Note that we start by instantiating a new graph and also add an ",(0,s.kt)("inlineCode",{parentName:"p"},"afterEach()")," block to reset the graph after each test. It's overkill for just one test but it will DRY up future tests."),(0,s.kt)("p",null,"In the test itself, we ",(0,s.kt)("inlineCode",{parentName:"p"},"expect(graph.adjacencyList.size).toEqual(0)"),". Maps have a ",(0,s.kt)("inlineCode",{parentName:"p"},"size")," property, which means we can just check to see if our graph's ",(0,s.kt)("inlineCode",{parentName:"p"},"adjacencyList")," has a ",(0,s.kt)("inlineCode",{parentName:"p"},"size")," property that's equal to zero (an empty map)."),(0,s.kt)("p",null,"Here's the code to get this passing:"),(0,s.kt)("div",{class:"filename"},"src/graph.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"export default class Graph {\n  constructor() {\n    this.adjacencyList = new Map();\n  }\n}\n")),(0,s.kt)("h3",{id:"creating-nodes"},"Creating Nodes"),(0,s.kt)("p",null,"What's the next thing we need to do? Well, we need to be able to add people to our social network. People are the equivalent of nodes in a graph. We'll keep our methods sufficiently abstract so they pertain more to creating graphs in general than building social networks more specifically. For that reason, we'll add a ",(0,s.kt)("inlineCode",{parentName:"p"},"Graph.prototype.addNode()")," method, not a ",(0,s.kt)("inlineCode",{parentName:"p"},"Graph.prototype.addFriend()")," method."),(0,s.kt)("p",null,"Here's our new test."),(0,s.kt)("div",{class:"filename"},"__tests__/graph.test.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'...\n  test(\'should add a new node\', () => {\n    graph.addNode("Jasmine");\n    expect(graph.adjacencyList.get("Jasmine").size).toEqual(0);\n  });\n...\n')),(0,s.kt)("p",null,"We should be able to add a node via a ",(0,s.kt)("inlineCode",{parentName:"p"},"Graph.prototype.addNode()")," method. We don't have a ",(0,s.kt)("inlineCode",{parentName:"p"},"Graph.prototype.getNode()")," method yet so we can't use that for our expectation. For that reason, we'll just access the node via the graph's ",(0,s.kt)("inlineCode",{parentName:"p"},"adjacencyList"),". Since the ",(0,s.kt)("inlineCode",{parentName:"p"},"adjacencyList")," is a ",(0,s.kt)("inlineCode",{parentName:"p"},"Map"),", we can use ",(0,s.kt)("inlineCode",{parentName:"p"},"Map.prototype.get()")," to get the value associated with the key. Why are we looking for a ",(0,s.kt)("inlineCode",{parentName:"p"},"size")," property again once we get the value related to Jasmine? Well, each key in our adjacency list will be a ",(0,s.kt)("inlineCode",{parentName:"p"},"Set"),". A ",(0,s.kt)("inlineCode",{parentName:"p"},"Set")," is a collection of entirely unique values. Jasmine and Ada can be friends only once \u2014 not three times \u2014 so we want to make sure that a node can occur in the collection only once. That's where using a JavaScript ",(0,s.kt)("inlineCode",{parentName:"p"},"Set")," comes in handy."),(0,s.kt)("p",null,"Once again, the ES6 specifications guarantee that ",(0,s.kt)("inlineCode",{parentName:"p"},"Set")," implementations generally have sub-linear complexity \u2014 so ",(0,s.kt)("inlineCode",{parentName:"p"},"Set"),"s are also pretty efficient and much better than using a collection like an array."),(0,s.kt)("p",null,"Returning to our test, it should be clear why the size of the initial set should be zero. We want to add Jasmine as a key to our adjacency list map. However, Jasmine doesn't have any friends yet \u2014 so the set representing adjacent nodes is still empty. Don't worry \u2014 Jasmine will have some friends soon."),(0,s.kt)("p",null,"Here's the code we need to pass our test:"),(0,s.kt)("div",{class:"filename"},"src/graph.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"export default class Graph {\n  ...\n  addNode(name) {\n    this.adjacencyList.set(name, new Set());\n  }\n}\n")),(0,s.kt)("p",null,"As we can see, the implementation is simple. We use ",(0,s.kt)("inlineCode",{parentName:"p"},"Map.prototype.set()")," to add a key-value pair to our ",(0,s.kt)("inlineCode",{parentName:"p"},"adjacencyList"),". The key will be the name of the node we are adding and the value will be an empty ",(0,s.kt)("inlineCode",{parentName:"p"},"Set"),"."),(0,s.kt)("h3",{id:"checking-to-see-if-nodes-exist"},"Checking to See if Nodes Exist"),(0,s.kt)("p",null,"What's the next behavior we should implement? Well, we need to know whether a node exists in our graph or not. That means the next step is to add a ",(0,s.kt)("inlineCode",{parentName:"p"},"Graph.prototype.hasNode()")," method. The simplest behavior for this method will be to return ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," if the node doesn't exist in the adjacency list."),(0,s.kt)("p",null,"Here's a test:"),(0,s.kt)("div",{class:"filename"},"__tests__/graph.test.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\n  test('should return false if the node does not exist in the adjacency list', () => {\n    expect(graph.hasNode(\"Ada\")).toEqual(false);\n  });\n...\n")),(0,s.kt)("p",null,"And here's the minimum code in a ",(0,s.kt)("inlineCode",{parentName:"p"},"Graph.prototype.getNode()")," method to get this test passing:"),(0,s.kt)("div",{class:"filename"},"src/graph.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\n  hasNode(name) {\n    return false;\n  }\n...\n")),(0,s.kt)("p",null,"Now we need to write a test for when a node ",(0,s.kt)("em",{parentName:"p"},"does")," exist in a graph:"),(0,s.kt)("div",{class:"filename"},"__tests__/graph.test.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'...\n  test(\'check to see if node exists in graph\', () => {\n    graph.addNode("Jasmine");\n    expect(graph.hasNode("Jasmine")).toEqual(true);\n  });\n...\n')),(0,s.kt)("p",null,"To get this test passing, we can use a method that a ",(0,s.kt)("inlineCode",{parentName:"p"},"Map"),"'s prototype offers. Here's the update to our method:"),(0,s.kt)("div",{class:"filename"},"src/graph.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\n  hasNode(name) {\n    if (this.adjacencyList.get(name)) {\n      return true;\n    }\n    return false;\n  }\n...\n")),(0,s.kt)("p",null,"We take advantage of ",(0,s.kt)("inlineCode",{parentName:"p"},"Map.prototype.get()"),", which either returns a value of a key in a map or returns ",(0,s.kt)("inlineCode",{parentName:"p"},"undefined")," if the key doesn't exist. Here's a situation where our code is already more efficient because we are using maps instead of just iterating through a basic object. To check if our graph has a node, we need to do a search. Because we are using ",(0,s.kt)("inlineCode",{parentName:"p"},"Map.prototype.get()")," instead of looping through an array or object, calling this method has sub-linear complexity instead of linear complexity (O(N))."),(0,s.kt)("p",null,"Now that we've added all the basic functionality for nodes other than removing nodes, which we'll get to later, we're ready to start adding functionality for edges."),(0,s.kt)("h3",{id:"adding-edges"},"Adding Edges"),(0,s.kt)("p",null,"At this point, we have methods to add nodes to a graph and to see whether a node exists in our graph. The next step is to add functionality to add relationships between nodes."),(0,s.kt)("p",null,"In other words, we need to be able to add edges, which means we need a ",(0,s.kt)("inlineCode",{parentName:"p"},"Graph.prototype.createEdge()")," method."),(0,s.kt)("p",null,"As always, we'll start with a test:"),(0,s.kt)("div",{class:"filename"},"__tests__/graph.test.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'...\n  test(\'add an edge between two nodes\', () => {\n    graph.addNode("Jasmine");\n    graph.addNode("Ada");\n    graph.createEdge("Jasmine", "Ada");\n    expect(graph.adjacencyList.get("Jasmine").has("Ada")).toEqual(true);\n    expect(graph.adjacencyList.get("Ada").has("Jasmine")).toEqual(true);\n  });\n...\n')),(0,s.kt)("p",null,"First, we need to add two nodes to our test. Then we need to create an edge between these two nodes with a ",(0,s.kt)("inlineCode",{parentName:"p"},"Graph.prototype.createEdge()")," method. Note that this test has two expectations. Remember that this is an ",(0,s.kt)("strong",{parentName:"p"},"undirected")," graph \u2014 a friendship goes two ways, not one. That means we need to add each node to the other's adjacency node list. If this were a directed graph, we'd just update one adjacency list \u2014 and the order of arguments in our ",(0,s.kt)("inlineCode",{parentName:"p"},"Graph.prototype.createEdge()")," method would matter."),(0,s.kt)("p",null,"Note also that we have to do some chaining in our expectations to reach the values we want. We start by using ",(0,s.kt)("inlineCode",{parentName:"p"},"Map.prototype.get()")," to get the value associated with a node, which happens to be a set. Then we use ",(0,s.kt)("inlineCode",{parentName:"p"},"Set.prototype.has()")," to determine whether the set actually has the node we are looking for."),(0,s.kt)("p",null,"If the worst-case scenario in terms of Big O is O(N) for both of these operations, that means with chaining we have O(2N) \u2014 so still O(N). However, the worst-case will be rare and the average-case will be sub-linear complexity."),(0,s.kt)("p",null,"Here's the method to get this test to pass:"),(0,s.kt)("div",{class:"filename"},"src/graph.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\n  createEdge(node1, node2) {\n    let set1 = this.adjacencyList.get(node1);\n    let set2 = this.adjacencyList.get(node2);\n    set1.add(node2);\n    set2.add(node1);\n  }\n...\n")),(0,s.kt)("p",null,"To create an edge, we need information about the nodes we want to create an edge between. That means our method takes two arguments. We need to grab the set associated with each node. Then we need to add each node to the other node's list of adjacent nodes. Remember that because these are sets, we don't need to worry about duplicates \u2014 JavaScript will take care of that for us."),(0,s.kt)("p",null,"We can also make our method more concise with additional chaining:"),(0,s.kt)("div",{class:"filename"},"src/graph.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"createEdge(node1, node2) {\n  this.adjacencyList.get(node1).add(node2);\n  this.adjacencyList.get(node2).add(node1);\n}\n")),(0,s.kt)("h3",{id:"checking-to-see-if-an-edge-exists"},"Checking to See If An Edge Exists"),(0,s.kt)("p",null,"We ",(0,s.kt)("em",{parentName:"p"},"could")," just do something like the following whenever we want to see if an edge (in this case, a friendship) exists:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'graph.adjacencyList.get("Ada").has("Jasmine")\n')),(0,s.kt)("p",null,"This would check to see if Ada and Jasmine are friends."),(0,s.kt)("p",null,"However, this is pretty important functionality for our application to have. That means we should add it."),(0,s.kt)("p",null,"Let's start with the easiest behavior \u2014 just returning ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("div",{class:"filename"},"__tests__/graph.test.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'...\n  test(\'check to see if edge exists in graph\', () => {\n    graph.addNode("Jasmine");\n    graph.addNode("Ada");\n    expect(graph.hasEdge("Jasmine", "Ada")).toEqual(false);\n  });\n...\n')),(0,s.kt)("p",null,"Here's the implementation:"),(0,s.kt)("div",{class:"filename"},"src/graph.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\n  hasEdge(node1, node2) {\n    return false;\n  }\n...\n")),(0,s.kt)("p",null,"Now that we have that test passing, we're ready to move on. Typically, we won't update tests we've already written but we are going to make an exception here."),(0,s.kt)("p",null,"We will update the following test to use our new method:"),(0,s.kt)("div",{class:"filename"},"__tests__/graph.test.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'...\n  test(\'add an edge between two nodes\', () => {\n    graph.addNode("Jasmine");\n    graph.addNode("Ada");\n    graph.createEdge("Jasmine", "Ada");\n    expect(graph.adjacencyList.get("Jasmine").has("Ada")).toEqual(true);\n    expect(graph.adjacencyList.get("Ada").has("Jasmine")).toEqual(true);\n  });\n...\n')),(0,s.kt)("p",null,"Instead of expecting ",(0,s.kt)("inlineCode",{parentName:"p"},'graph.adjacencyList.get("Ada").has("Jasmine")')," to equal true, why not just apply our new method instead?"),(0,s.kt)("p",null,"Our updated test looks like this:"),(0,s.kt)("div",{class:"filename"},"__tests__/graph.test.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'...\n  test(\'add an edge between two nodes\', () => {\n    graph.addNode("Jasmine");\n    graph.addNode("Ada");\n    graph.createEdge("Jasmine", "Ada");\n    expect(graph.hasEdge("Ada", "Jasmine")).toEqual(true);\n  });\n...\n')),(0,s.kt)("p",null,"As we can see here, we now expect ",(0,s.kt)("inlineCode",{parentName:"p"},'graph.hasEdge("Ada", "Jasmine")).toEqual(true);'),"."),(0,s.kt)("p",null,"This test will fail \u2014 let's update our ",(0,s.kt)("inlineCode",{parentName:"p"},"Graph.prototype.hasEdge()")," method now:"),(0,s.kt)("div",{class:"filename"},"src/graph.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\n  hasEdge(node1, node2) {\n    if (this.adjacencyList.get(node1).has(node2)) {\n      return true\n    }\n    return false;\n  }\n...\n")),(0,s.kt)("p",null,"Because this is an undirected graph, it doesn't matter which way we check the relationship \u2014 each node is adjacent to the other node. So we just check that the set associated with the ",(0,s.kt)("inlineCode",{parentName:"p"},"node1")," key includes ",(0,s.kt)("inlineCode",{parentName:"p"},"node2"),". If it does, our method will return true."),(0,s.kt)("p",null,"That's all we need to get all our tests passing."),(0,s.kt)("h3",{id:"removing-edges"},"Removing Edges"),(0,s.kt)("p",null,"We should also be able to remove an edge as well \u2014 no more friendship, sadly..."),(0,s.kt)("p",null,"Here's the test:"),(0,s.kt)("div",{class:"filename"},"__tests__/graph.test.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'...\n  test(\'remove an edge between two nodes\', () => {\n    graph.addNode("Jasmine");\n    graph.addNode("Ada");\n    graph.createEdge("Jasmine", "Ada");\n    graph.removeEdge("Jasmine", "Ada");\n    expect(graph.hasEdge("Ada", "Jasmine")).toEqual(false);\n  });\n')),(0,s.kt)("p",null,"In this test, we first create two nodes and add an edge. Next, we'll call ",(0,s.kt)("inlineCode",{parentName:"p"},'graph.removeEdge("Jasmine", "Ada");'),". Based on removing that edge, our expectation should show that there's no longer an edge between the Ada and Jasmine nodes."),(0,s.kt)("p",null,"Now let's get this test passing:"),(0,s.kt)("div",{class:"filename"},"src/graph.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\n  removeEdge(node1, node2) {\n    this.adjacencyList.get(node1).delete(node2);\n    this.adjacencyList.get(node2).delete(node1);\n  }\n...\n")),(0,s.kt)("p",null,"Because this is an undirected graph, both nodes include the other node in their set of adjacent nodes. That means we need to remove ",(0,s.kt)("inlineCode",{parentName:"p"},"node1")," from ",(0,s.kt)("inlineCode",{parentName:"p"},"node2"),"'s adjacent nodes and vice versa. Here's another situation where having sub-linear complexity benefits us. If we were doing our own implementation with objects and arrays, we'd need to do an O(N) search to get a node and then another O(N) search to find the node to delete. Removing the node from the array would then shift all the remaining indexes of the array \u2014 yet another O(N) operation. Then we'd do that all over again going in the other direction. While O(6N) still boils down to O(N), it should be clear that having more efficient code can really help us in the long run, especially if our data sets get especially large."),(0,s.kt)("h3",{id:"removing-nodes"},"Removing Nodes"),(0,s.kt)("p",null,"Finally, let's add some functionality for removing nodes. We saved this for last since it's a bit more complex than the functionality we've built so far. That's because it's not as simple as just deleting a node. We also need to delete all references to that node in the rest of the adjacency list. In the context of a social network application, when we remove a person from the app, everyone else that's friends with that person will no longer have them listed as a friend because it's only possible to be friends with someone who is also on the app."),(0,s.kt)("div",{class:"filename"},"__tests__/graph.test.js"),(0,s.kt)("p",null,"First, a test:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'...\ntest(\'should delete a node and all of its adjacent nodes\', () => {\n      graph.addNode("Ada");\n      graph.addNode("Jasmine");\n      graph.addNode("Lydia");\n      graph.createEdge("Ada", "Jasmine");\n      graph.createEdge("Ada", "Lydia");\n      graph.removeNode("Ada");\n      expect(graph.hasNode("Ada")).toEqual(false);\n      expect(graph.hasEdge("Jasmine", "Ada")).toEqual(false);\n      expect(graph.hasEdge("Lydia", "Ada")).toEqual(false);\n  });\n...\n')),(0,s.kt)("p",null,"This is a pretty wordy test (and at some point, it would be good to look at ways to DRY our tests further). First, we need to add three nodes and then create edges between our first node and the others. Why are we doing this? Well, we want to make sure that we are correctly removing all edges that refer to the deleted node. We also have three expectations \u2014 which is on the heavy side. Ideally, we'd break this test up into a few smaller behaviors (just deleting a node first before testing to see if edges were successfully removed), but we're doing it all in one test here."),(0,s.kt)("p",null,"We expect the node we've deleted to be gone. However, we still have two other nodes that have references to the deleted node \u2014 so we also expect those references to be gone as well."),(0,s.kt)("p",null,"Let's implement the method now:"),(0,s.kt)("div",{class:"filename"},"src/graph.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\n  removeNode(name) {\n    if (this.adjacencyList.has(name)) {\n      this.adjacencyList.get(name).forEach((edge) => {\n        this.adjacencyList.get(edge).delete(name);\n      });\n      this.adjacencyList.delete(name);\n    }\n  }\n...\n")),(0,s.kt)("p",null,"First, we check if the node we want to delete exists as a key in the adjacency list (",(0,s.kt)("inlineCode",{parentName:"p"},"(this.adjacencyList.has(name))"),"). Based on our test, the node represents Ada which exists in our graph."),(0,s.kt)("p",null,"Next, we call ",(0,s.kt)("inlineCode",{parentName:"p"},"this.adjacencyList.get(name)"),". This is the ",(0,s.kt)("inlineCode",{parentName:"p"},"Set")," of edges associated with the node we want to delete. In the case of Ada, the edges (or friendships) are Jasmine and Lydia."),(0,s.kt)("p",null,"For each edge, we need to do the following: ",(0,s.kt)("inlineCode",{parentName:"p"},"this.adjacencyList.get(edge).delete(name);"),". So for our first edge (Jasmine), we grab the key associated with Jasmine and then remove Ada from her friendships. Next, we do the same with the second edge (Lydia). We grab the key associated with Lydia and then remove Ada from her friendships, too. "),(0,s.kt)("p",null,"At this point, we've removed all of the edges related to Ada in other nodes. The last step is to delete the node itself \u2014 in this case, Ada, removing her entirely from the application."),(0,s.kt)("p",null,"A few other things to note here. We use arrow notation (",(0,s.kt)("inlineCode",{parentName:"p"},"=>"),") so that ",(0,s.kt)("inlineCode",{parentName:"p"},"this.adjacencyList")," remains bound to the same ",(0,s.kt)("inlineCode",{parentName:"p"},"this")," both inside and outside the loop. If it weren't for ",(0,s.kt)("inlineCode",{parentName:"p"},"=>"),", the ",(0,s.kt)("inlineCode",{parentName:"p"},"this")," inside the loop would lose its binding and be ",(0,s.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,s.kt)("p",null,"So what is the runtime complexity of this algorithm? It's hard to pinpoint exactly without fully knowing everything JavaScript is doing to optimize sets and maps under the hood. However, we can make some educated guesses."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"this.adjacencyList.has(name)")," has sub-lineal complexity. We know that maps use hash tables under the hood. This may be close to O(1) lookup.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Looping through the set of adjacent nodes is O(N), which is typical with basic loops.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Inside the loop, we need to get an edge and remove it \u2014 which depending on how ES6 implements deleting items from a set, is at least sub-lineal complexity and possibly even close to O(1)."))),(0,s.kt)("p",null,"On the other hand, imagine that we implemented our own basic functionality where we needed to first iterate through the set of adjacent nodes and then had to iterate again through each node's adjacent nodes to find which one needed to be deleted. That would be O(AB), which isn't so great. (It would not be O(N",(0,s.kt)("sup",null,"2"),") because the nested loop iterates over a ",(0,s.kt)("em",{parentName:"p"},"different")," set in the outer loop.)"),(0,s.kt)("p",null,"At this point, we have everything in place to add and remove nodes and edges from our graph application. We can also check to see if a node or edge exists in the adjacency list and we can return all of a node's edges."),(0,s.kt)("p",null,"The next step is to learn about traversing our graph \u2014 and that means applying BFS and DFS \u2014 breadth-first search and depth-first search algorithms. We will start learning about these algorithms in the next lesson."))}c.isMDXComponent=!0}}]);