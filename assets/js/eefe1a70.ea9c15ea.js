"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[55327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=h(n),p=r,f=c["".concat(l,".").concat(p)]||c[p]||u[p]||o;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var h=2;h<o;h++)s[h]=n[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var a=n(87462),r=(n(67294),n(3905));const o={title:"\ud83d\udcd3 Breadth First Algorithms",id:"breadth-first-algorithms",slug:"breadth-first-algorithms",hide_table_of_contents:!0,sidebar_position:24,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/8_breadth_first_algorithm.md"},s=void 0,i={unversionedId:"capstone/capstone-week-1/breadth-first-algorithms",id:"capstone/capstone-week-1/breadth-first-algorithms",title:"\ud83d\udcd3 Breadth First Algorithms",description:"In the last lesson, we used a depth-first algorithm to determine if a target node in our friendship network is reachable from a starting node. In this lesson, we'll test and write a Graph.prototype.breadthFirstReachable() method. This method will do the exact same thing as our Graph.prototype.depthFirstReachable() method. The only difference is how the method will work. Instead of using a depth-first search, the method will use a breadth-first search.",source:"@site/docs/capstone/1_capstone-week-1/AX-breadth-first-algorithms.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/breadth-first-algorithms",permalink:"/capstone/capstone-week-1/breadth-first-algorithms",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"\ud83d\udcd3 Breadth First Algorithms",id:"breadth-first-algorithms",slug:"breadth-first-algorithms",hide_table_of_contents:!0,sidebar_position:24,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/8_breadth_first_algorithm.md"},sidebar:"capstone",previous:{title:"\ud83d\udcd3 Depth First Algorithms",permalink:"/capstone/capstone-week-1/depth-first-algorithms"},next:{title:"\u270f\ufe0f Graph Theory Practice",permalink:"/capstone/capstone-week-1/graph-theory-practice"}},l={},h=[],d={toc:h},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the last lesson, we used a depth-first algorithm to determine if a target node in our friendship network is reachable from a starting node. In this lesson, we'll test and write a ",(0,r.kt)("inlineCode",{parentName:"p"},"Graph.prototype.breadthFirstReachable()")," method. This method will do the exact same thing as our ",(0,r.kt)("inlineCode",{parentName:"p"},"Graph.prototype.depthFirstReachable()")," method. The only difference is how the method will work. Instead of using a depth-first search, the method will use a breadth-first search."),(0,r.kt)("p",null,"This will feel a little bit different than our usual TDD process because we will use the exact same tests that we used in the last lesson. In other words, our tests are already written for us! Go ahead a create a ",(0,r.kt)("inlineCode",{parentName:"p"},"bfs.test.js")," file in ",(0,r.kt)("inlineCode",{parentName:"p"},"__tests__")," with the exact same tests that are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dfs.test.js")," file. Then update the name of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Graph.prototype.depthFirstReachable()")," method to ",(0,r.kt)("inlineCode",{parentName:"p"},"Graph.prototype.breadthFirstReachable()"),". Our goal here is just to verify that everything in our method works correctly as we won't get tests passing one at a time. That's because the method itself is extremely similar to the one we wrote in the last lesson."),(0,r.kt)("p",null,"The only difference is that we'll use a queue instead of a stack. That means each time we add new nodes to traverse, they will go to the end of the queue instead of the top of the stack. We will still evaluate the first element in the collection \u2014 but because it's a queue (and new items are being pushed to the end of the queue), this will be first-in, first-out (FIFO) instead of last-in, first-out (LIFO)."),(0,r.kt)("p",null,"Here's the full updated method:"),(0,r.kt)("div",{class:"filename"},"src/bfs.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"breadthFirstReachable(startingNode, targetNode) {\n    if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {\n      return false;\n    }\n    let queue = [startingNode];\n    let traversedNodes = new Set();\n    while (queue.length) {\n      const currentNode = queue.shift();\n      if (currentNode === targetNode) {\n        return true;\n      } else {\n        traversedNodes.add(currentNode);\n        const adjacencyList = this.adjacencyList.get(currentNode);\n        adjacencyList.forEach(function(node) {\n          if (!traversedNodes.has(node)) {\n            queue.push(node);\n          }\n        });\n      }\n    }\n    return false;\n  }\n")),(0,r.kt)("p",null,"The first three lines in the method look exactly the same as our previous method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {\n  return false;\n}\n")),(0,r.kt)("p",null,"This just ensures that both the ",(0,r.kt)("inlineCode",{parentName:"p"},"startingNode")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"targetNode")," exist in the graph and will get our first two tests passing. Once again, we don't want the overhead of doing a search algorithm if we can quickly determine whether a node exists in the list or not (which has O(1) time)."),(0,r.kt)("p",null,"Now let's take a look at the very subtle difference between DFS and BFS:"),(0,r.kt)("div",{class:"filename"},"src/bfs.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\n  let queue = [startingNode];\n  let traversedNodes = new Set();\n  while (queue.length) {\n    const currentNode = queue.shift();\n    if (currentNode === targetNode) {\n      return true;\n    } else {\n      traversedNodes.add(currentNode);\n      const adjacencyList = this.adjacencyList.get(currentNode);\n      adjacencyList.forEach(function(node) {\n        if (!traversedNodes.has(node)) {\n          queue.push(node);\n        }\n      });\n    }\n  }\n  return false;\n}\n...\n")),(0,r.kt)("p",null,"Other than the fact that we changed the name of our collection from ",(0,r.kt)("inlineCode",{parentName:"p"},"stack")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"queue"),", there is only one small change in the method. Can you find it?"),(0,r.kt)("p",null,"The only difference is inside our inner loop when we do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"queue.push(node);\n")),(0,r.kt)("p",null,"Meanwhile, in the last lesson, we did the following instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"stack.unshift(node);\n")),(0,r.kt)("p",null,"In both algorithms, we always traverse the first element in the collection each iteration through the loop. The difference is that when we add new elements to the queue, they go to the ",(0,r.kt)("em",{parentName:"p"},"end")," of the collection, which means they will be traversed last (a breadth-first search). Meanwhile, with the stack, they go to the ",(0,r.kt)("em",{parentName:"p"},"beginning")," of the collection, when means they will be traversed first (a depth-first search)."),(0,r.kt)("p",null,"That is really the only difference between a DFS and a BFS. Despite that fact, the order at which items are traversed can make a huge impact on the overall efficiency of an algorithm. For instance, if we knew there was a high probability that a node is a friend or a friend of a friend, we probably won't want to do a DFS. Instead, we could just use a BFS to first check all friends and then check all friends of friends."),(0,r.kt)("p",null,"It may seem hard to believe that such a small change has such a big difference on how we'd search a graph. However, it does. If we implement a queue, it's the equivalent of saying \"let's completely take a look at everything on this level before we go to the next level\". Meanwhile, if we implement a stack, it's the equivalent of saying, \"hang on, I'm going to completely explore everything in this branch before going to the next one.\""),(0,r.kt)("p",null,"Now that we've learned the basics of DFS and BFS, we're well on our way to having a basic understanding of graphs and how we can traverse them. We also have some new problem-solving tools to work with. In addition to our knowledge of two new algorithms (DFS and BFS), we can also see how we can use queues and stacks, two different data structures, to solve different kinds of problems. Whether that is using JavaScript's event loop or writing an algorithm, these data structures are absolutely essential."))}u.isMDXComponent=!0}}]);