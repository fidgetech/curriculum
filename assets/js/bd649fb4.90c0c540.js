"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[74660],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=h(a),u=s,g=c["".concat(l,".").concat(u)]||c[u]||p[u]||r;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var h=2;h<r;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33132:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var n=a(87462),s=(a(67294),a(3905));const r={title:"\ud83d\udcd3 Depth First Algorithms",id:"depth-first-algorithms",slug:"depth-first-algorithms",hide_table_of_contents:!0,sidebar_position:23,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/7_depth_first_algorithm.md"},o=void 0,i={unversionedId:"capstone/capstone-week-1/depth-first-algorithms",id:"version-1.1/capstone/capstone-week-1/depth-first-algorithms",title:"\ud83d\udcd3 Depth First Algorithms",description:"In the last lesson, we covered depth-first search and breadth-first search approaches. There are a lot of benefits of using these algorithms. We could determine the reachability between two nodes or we could determine the shortest path between two nodes, just to name a few use cases.",source:"@site/versioned_docs/version-1.1/capstone/1_capstone-week-1/AW-depth-first-algorithms.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/depth-first-algorithms",permalink:"/v1.1/capstone/capstone-week-1/depth-first-algorithms",draft:!1,tags:[],version:"1.1",sidebarPosition:23,frontMatter:{title:"\ud83d\udcd3 Depth First Algorithms",id:"depth-first-algorithms",slug:"depth-first-algorithms",hide_table_of_contents:!0,sidebar_position:23,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/7_depth_first_algorithm.md"},sidebar:"capstone",previous:{title:"\ud83d\udcd3 Depth and Breadth Search Algorithms",permalink:"/v1.1/capstone/capstone-week-1/depth-and-breadth-search-algorithms"},next:{title:"\ud83d\udcd3 Breadth First Algorithms",permalink:"/v1.1/capstone/capstone-week-1/breadth-first-algorithms"}},l={},h=[],d={toc:h},c="wrapper";function p(e){let{components:t,...a}=e;return(0,s.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In the last lesson, we covered depth-first search and breadth-first search approaches. There are a lot of benefits of using these algorithms. We could determine the ",(0,s.kt)("strong",{parentName:"p"},"reachability")," between two nodes or we could determine the shortest path between two nodes, just to name a few use cases."),(0,s.kt)("p",null,"We'll start with the depth-first algorithm because it is a bit easier to implement. To actually use a TDD approach and test our algorithms in a graph, we are going to need to code that graph first. We will add this graph to our test file."),(0,s.kt)("p",null,"To keep things separated out, we are going to create a new test file called ",(0,s.kt)("inlineCode",{parentName:"p"},"dfs.test.js")," and run all tests related to our depth-first search there. Here is the starter code which includes a graph."),(0,s.kt)("div",{class:"filename"},"__tests__/dfs.test.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import Graph from \'../src/graph.js\';\n\ndescribe(\'depth-first search\', () => {\n\n  let graph = new Graph();\n  graph.addNode("Jasmine");\n  graph.addNode("Ada");\n  graph.addNode("Lydia");\n  graph.addNode("Rose");\n  graph.addNode("Dylan");\n  graph.addNode("Allison");\n  graph.addNode("Thomas");\n  graph.addNode("Sarah");\n  graph.createEdge("Jasmine", "Ada");\n  graph.createEdge("Jasmine", "Lydia");\n  graph.createEdge("Jasmine", "Rose");\n  graph.createEdge("Ada", "Dylan");\n  graph.createEdge("Lydia", "Ada");\n  graph.createEdge("Dylan", "Allison");\n  graph.createEdge("Lydia", "Thomas");\n});\n')),(0,s.kt)("p",null,"Note that we don't put the graph in a ",(0,s.kt)("inlineCode",{parentName:"p"},"beforeEach()")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"afterEach()")," block. We aren't actually going to modify this graph, just traverse it, so there's no need to re-instantiate it before or after every single test."),(0,s.kt)("p",null,"Next, let's include a visual representation of the coded graph above. It's the same one we were using in the last lesson."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/friend-graph.png",alt:"The following chart shows all of the nodes and edges in the friend graph we've created."})),(0,s.kt)("p",null,"There is one small but key difference about our graph that is ",(0,s.kt)("em",{parentName:"p"},"not")," included in our illustration. We've also added Sarah, a node that isn't connected to ",(0,s.kt)("em",{parentName:"p"},"anyone")," in the graph. We'll need this for one of our tests \u2014 which we'll cover in a moment."),(0,s.kt)("p",null,"Our DFS will just check to see if a node is ",(0,s.kt)("strong",{parentName:"p"},"reachable")," from another node. In this case, we just want to see if we can reach Thomas via Jasmine. While it's obvious from our graph that all its nodes are reachable from each other (except for Sarah), in a real-world application, that might not be the case."),(0,s.kt)("p",null,"Let's write our first test. We'll call our method ",(0,s.kt)("inlineCode",{parentName:"p"},"Graph.prototype.depthFirstReachable()")," and it will return a boolean. The reason for the wordy name is because we'll write a method called ",(0,s.kt)("inlineCode",{parentName:"p"},"Graph.prototype.breadthFirstReachable()")," in the next lesson that does the exact same thing as this method \u2014 but with a different algorithm."),(0,s.kt)("p",null,"The simplest implementation of our ",(0,s.kt)("inlineCode",{parentName:"p"},"Graph.prototype.depthFirstReachable()")," method is to return false if a potential node doesn't even exist in the graph. For the sake of brevity, we'll code two tests right now: one to check the starting node, one to check the target node. Here are the tests:"),(0,s.kt)("div",{class:"filename"},"__tests__/dfs.test.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'...\n test(\'should return false if the target node doe not exist\', () => {\n    expect(graph.depthFirstReachable("Jasmine", "Albert")).toEqual(false);\n  });\n\n  test(\'should return false if the starting node doe not exist\', () => {\n    expect(graph.depthFirstReachable("Albert", "Thomas")).toEqual(false);\n  });\n...\n')),(0,s.kt)("p",null,"Now let's get these tests passing:"),(0,s.kt)("div",{class:"filename"},"src/graph.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\n  depthFirstReachable(startingNode, targetNode) {\n    if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {\n      return false;\n    }\n  }\n...\n")),(0,s.kt)("p",null,"Our method will take two arguments: the first, a ",(0,s.kt)("inlineCode",{parentName:"p"},"startingNode"),", is the node we want to start from. The second is the ",(0,s.kt)("inlineCode",{parentName:"p"},"targetNode"),", which is the node we want to find. In an undirected graph, these arguments could be interchangeable. In a directed graph, on the other hand, the order would matter."),(0,s.kt)("p",null,"Our method just checks to see if both nodes exist in the adjacency list. If one or the other doesn't exist, they obviously aren't reachable. Why go to the trouble of doing a DFS, which could be computationally intensive with a big graph, when values don't even exist? Because our adjacency list is a Map, it is super-fast to do this lookup. Meanwhile, doing a DFS to search the whole graph \u2014 only to tell us the same thing \u2014 would be very inefficient."),(0,s.kt)("p",null,"Next, let's get to the fun stuff. We will check to see if a direct friend of Jasmine is reachable."),(0,s.kt)("p",null,"Here's the test:"),(0,s.kt)("div",{class:"filename"},"__tests__/dfs.test.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'...\n  test(\'should check if the first friend in the adjacency list is reachable\', () => {\n    expect(graph.depthFirstReachable("Jasmine", "Ada")).toEqual(true);\n  });\n...\n')),(0,s.kt)("p",null,"Here's the thing. To get this test passing, we have to write most of the algorithm!"),(0,s.kt)("p",null,"Now the code:"),(0,s.kt)("div",{class:"filename"},"src/graph.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"depthFirstReachable(startingNode, targetNode) {\n  if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {\n    return false;\n  }\n  let stack = [startingNode];\n  let traversedNodes = new Set();\n  while (stack.length) {\n    const currentNode = stack.shift();\n    if (currentNode === targetNode) {\n      return true;\n    } else {\n      traversedNodes.add(currentNode);\n      const adjacencyList = this.adjacencyList.get(currentNode);\n      adjacencyList.forEach(function(node) {\n        if (!traversedNodes.has(node)) {\n          stack.unshift(node);\n        }\n      });\n    }\n  }\n}\n")),(0,s.kt)("p",null,"Let's focus on just the new code \u2014 which is our actual DFS algorithm:"),(0,s.kt)("div",{class:"filename"},"src/graph.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\nlet stack = [startingNode];\nlet traversedNodes = new Set();\nwhile (stack.length) {\n  const currentNode = stack.shift();\n  if (currentNode === targetNode) {\n    return true;\n  } else {\n    traversedNodes.add(currentNode);\n    const adjacencyList = this.adjacencyList.get(currentNode);\n    adjacencyList.forEach(function(node) {\n      if (!traversedNodes.has(node)) {\n        stack.unshift(node);\n      }\n    });\n  }\n}\n...\n")),(0,s.kt)("p",null,"First, we need to create our stack:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let stack = [startingNode];\n")),(0,s.kt)("p",null,"It's an array with the ",(0,s.kt)("inlineCode",{parentName:"p"},"startingNode")," as its only element."),(0,s.kt)("p",null,"Next, we also need some way to flag the nodes that have been traversed. We don't want this to be a property on the node itself because this flag is temporary \u2014 we don't want it to persist once the method is finished running."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let traversedNodes = new Set();\n")),(0,s.kt)("p",null,"This is a ",(0,s.kt)("em",{parentName:"p"},"perfect")," use case for a Set. We don't want there to be duplicate values \u2014 we just want to know whether a node has been traversed or not. And looking up whether a value in a Set is super-fast \u2014 so it won't take too much time. Remember, hash table lookup is O(1) constant time \u2014 and a Set uses a hash table under the hood."),(0,s.kt)("p",null,"At this point, we have collections to store a stack as well as a set of traversed nodes. We are ready to start looping!"),(0,s.kt)("p",null,"In general, when looping through a stack or a queue that will eventually be empty, we can just iterate until the collection's length is zero. At that point, we know we've checked ",(0,s.kt)("em",{parentName:"p"},"every")," value in the stack or queue."),(0,s.kt)("p",null,"That's exactly what we do here:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"while (stack.length)\n")),(0,s.kt)("p",null,"This just states that we should loop through the stack until it is empty. Once the length of the stack becomes zero, ",(0,s.kt)("inlineCode",{parentName:"p"},"stack.length")," is falsy \u2014 and the loop will end."),(0,s.kt)("p",null,"Next, we need to take the first element from the stack:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const currentNode = stack.shift();\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Array.prototype.shift()")," is a destructive method \u2014 that means that we aren't just grabbing the value of the first element in our stack \u2014 we are also removing it from the array. This is the ",(0,s.kt)("inlineCode",{parentName:"p"},"currentNode")," that we are examining. It is a ",(0,s.kt)("inlineCode",{parentName:"p"},"const")," because the variable itself never changes \u2014 it falls out of scope each time through the loop and is created anew."),(0,s.kt)("p",null,"Next, we have a conditional that checks to see if the ",(0,s.kt)("inlineCode",{parentName:"p"},"currentNode === targetNode"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"if (currentNode === targetNode) {\n  return true;\n}\n")),(0,s.kt)("p",null,"If they are equal, we've found the target node! The target node is reachable from the starting node \u2014 and we can return ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,s.kt)("p",null,"If it isn't, we have more work to do. Here's the code in our ",(0,s.kt)("inlineCode",{parentName:"p"},"else")," statement:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\n  else {\n    traversedNodes.add(currentNode);\n    const adjacencyList = this.adjacencyList.get(currentNode);\n    adjacencyList.forEach(function(node) {\n      if (!traversedNodes.has(node)) {\n        stack.unshift(node);\n      }\n    });\n  }\n...\n")),(0,s.kt)("p",null,'First, we need to "flag" our node to show that it\'s been traversed:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"traversedNodes.add(currentNode);\n")),(0,s.kt)("p",null,"Here, we use the ",(0,s.kt)("inlineCode",{parentName:"p"},"Set.prototype.add()")," method to add the ",(0,s.kt)("inlineCode",{parentName:"p"},"currentNode")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"traversedNodes"),". This way, when we need to look up whether the node has been traversed or not, we'll see that the ",(0,s.kt)("inlineCode",{parentName:"p"},"currentNode")," has been added. The first time through the loop, this will be the ",(0,s.kt)("inlineCode",{parentName:"p"},"startingNode")," \u2014 also known as Jasmine."),(0,s.kt)("p",null,"Next, we need to find the adjacency list for the current node. In Jasmine's case, the list is a Set that includes Ada, Lydia, and Rose."),(0,s.kt)("p",null,"Once we've gotten the adjacency list, we are ready to add it to the stack. To do that, we iterate through the adjacency list, first checking each node in the adjacency list to see if it's in the traversed array \u2014 and then adding that node to the top of the stack with ",(0,s.kt)("inlineCode",{parentName:"p"},"Array.prototype.unshift()"),", which adds an element to the beginning of an array. This will loop through the entire adjacency list, updating our stack. After the loop is done, our stack will look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'["Rose", "Lydia", "Ada"]\n')),(0,s.kt)("p",null,"Because ",(0,s.kt)("inlineCode",{parentName:"p"},"stack.length")," has three elements, it's truthy so the loop continues. Due to the following line ",(0,s.kt)("inlineCode",{parentName:"p"},"const currentNode = stack.shift();"),", Rose is taken off the top of the stack and becomes the ",(0,s.kt)("inlineCode",{parentName:"p"},"currentNode"),". Then the entire process continues \u2014 Rose is added to the list of ",(0,s.kt)("inlineCode",{parentName:"p"},"traversedNodes")," and then her adjacency list is added to the stack and so on. Eventually, our DFS will find Ada and recognize that it's equal to the ",(0,s.kt)("inlineCode",{parentName:"p"},"targetNode"),", meaning the method will return true."),(0,s.kt)("p",null,"If we update our test to look for Thomas instead of Ada, it will pass. As we can see, in order to find Ada, we had to write an algorithm that would also find Thomas \u2014 or anyone else in the graph."),(0,s.kt)("p",null,"There is one more thing we need to do. What about a node that exists but isn't reachable? That's why we added a node for Sarah. This node isn't connected to any other node in the graph \u2014 but it's still part of the graph, which means our initial conditional won't return false."),(0,s.kt)("p",null,"Here's the test:"),(0,s.kt)("div",{class:"filename"},"__tests__/dfs.test.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'...\n  test(\'should return false if the target node can not be reached from the starting node\', () => {\n    expect(graph.depthFirstReachable("Jasmine", "Sarah")).toEqual(false);\n  });\n...\n')),(0,s.kt)("p",null,"Fortunately, getting this test passing is easy. At some point, ",(0,s.kt)("inlineCode",{parentName:"p"},"stack.length")," is going to be falsy (because it's zero). At that point, we know that we've traversed every node in the graph that is reachable from the starting node. So if we've traversed the entire graph and we still haven't found the node we are looking for, we know it's not reachable. Here's the updated code:"),(0,s.kt)("div",{class:"filename"},"src/graph.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"depthFirstReachable(startingNode, targetNode) {\n  if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {\n    return false;\n  }\n  let stack = [startingNode];\n  let traversedNodes = new Set();\n  while (stack.length) {\n    const currentNode = stack.shift();\n    if (currentNode === targetNode) {\n      return true;\n    } else {\n      traversedNodes.add(currentNode);\n      const adjacencyList = this.adjacencyList.get(currentNode);\n      adjacencyList.forEach(function(node) {\n        if (!traversedNodes.has(node)) {\n          stack.unshift(node);\n        }\n      });\n    }\n  }\n  return false;\n}\n")),(0,s.kt)("p",null,"This is our entire method. All we added is the ",(0,s.kt)("inlineCode",{parentName:"p"},"return false;")," outside the while loop. As we can see here, we have a nested loop. The Big O of this particular algorithm is something akin to O(AB) \u2014 though that's not quite accurate because the B (the adjacency list for each node) is always changing \u2014 A (the stack itself) is always changing, too. It should be clear why that initial condition is even more helpful now. Searching the ",(0,s.kt)("em",{parentName:"p"},"entire")," graph to determine that a node isn't reachable is a big task \u2014 best to check if one of the nodes doesn't exist in the first place."),(0,s.kt)("p",null,"At this point, if you are feeling any confusion about how this algorithm works (and it's very understandable if you are), the next step is to intentionally break one of the tests and get into Jest's debug mode so you can step through the method and watch how variables change. The GIF below shows this \u2014 all the relevant variables have been added to ",(0,s.kt)("em",{parentName:"p"},"Watch")," in the left-hand pane. This loop runs until the algorithm discovers that the Thomas node is, in fact, reachable from the Jasmine node."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/dfs.gif",alt:"This GIF walks through the code."})),(0,s.kt)("p",null,"It can also be useful to look at what would happen if we didn't flag traversed nodes. In other words, if our code looked like this instead:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// This will not work! It will lead to infinite loops because we aren't flagging traversed nodes.\n\ndepthFirstReachable(startingNode, targetNode) {\n    if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {\n      return false;\n    }\n    let stack = [startingNode];\n    while (stack.length) {\n      const currentNode = stack.shift();\n      if (currentNode === targetNode) {\n        return true;\n      } else {\n        const adjacencyList = this.adjacencyList.get(currentNode);\n        adjacencyList.forEach(function(node) {\n          stack.unshift(node);\n        });\n      }\n    }\n    return false;\n  }\n")),(0,s.kt)("p",null,"Take a look at what happens when we do this:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/depth-first-infinite-loop.gif",alt:"Now we have an infinite loop between Rose and Jasmine."})),(0,s.kt)("p",null,"We bounce back and forth between Jasmine and Rose because Rose is a friend of Jasmine and Jasmine is a friend of Rose back and forth forever and ever. A truly beautiful friendship! But we don't want this in our code."),(0,s.kt)("p",null,"So that is a depth-first search algorithm in a nutshell. We use a stack to search through each branch. In this lesson, we just focused on finding whether a node is reachable. You will get a chance to practice some other implementations soon as well."))}p.isMDXComponent=!0}}]);