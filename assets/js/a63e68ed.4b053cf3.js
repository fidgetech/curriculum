"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[96207],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),h=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=h(a),u=n,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var h=2;h<o;h++)i[h]=a[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13535:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var r=a(87462),n=(a(67294),a(3905));const o={title:"\u270f\ufe0f Binary Search Trees Practice",id:"binary-search-trees-practice",slug:"binary-search-trees-practice",hide_table_of_contents:!0,sidebar_position:16,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/capstone/blob/main/6_binary_search_tree_practice.md"},i=void 0,l={unversionedId:"capstone/capstone-week-1/binary-search-trees-practice",id:"capstone/capstone-week-1/binary-search-trees-practice",title:"\u270f\ufe0f Binary Search Trees Practice",description:"Now that you're done following along with the lessons to build and traverse a binary search tree, it's time for an additional challenge. Try adding the functionality listed below to your application. It's okay if you do not get the functionality fully implemented \u2014 these are both challenging features and there's a reason we don't walk through them in-depth in our curriculum.",source:"@site/docs/capstone/1_capstone-week-1/AP-binary-search-trees-practice.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/binary-search-trees-practice",permalink:"/v1/capstone/capstone-week-1/binary-search-trees-practice",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"\u270f\ufe0f Binary Search Trees Practice",id:"binary-search-trees-practice",slug:"binary-search-trees-practice",hide_table_of_contents:!0,sidebar_position:16,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/capstone/blob/main/6_binary_search_tree_practice.md"},sidebar:"capstone",previous:{title:"\ud83d\udcd3 Binary Search Trees Part 3",permalink:"/v1/capstone/capstone-week-1/binary-search-trees-part-3"},next:{title:"\ud83d\udcd3 Introduction to Graphs",permalink:"/v1/capstone/capstone-week-1/introduction-to-graphs"}},s={},h=[{value:"Add a <code>BST.prototype.remove()</code> Method",id:"add-a-bstprototyperemove-method",level:3},{value:"Keep the Tree Balanced",id:"keep-the-tree-balanced",level:3}],c={toc:h},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Now that you're done following along with the lessons to build and traverse a binary search tree, it's time for an additional challenge. Try adding the functionality listed below to your application. It's okay if you do not get the functionality fully implemented \u2014 these are both challenging features and there's a reason we don't walk through them in-depth in our curriculum."),(0,n.kt)("h3",{id:"add-a-bstprototyperemove-method"},"Add a ",(0,n.kt)("inlineCode",{parentName:"h3"},"BST.prototype.remove()")," Method"),(0,n.kt)("p",null,"At first glance, this may not seem overly challenging \u2014 just find and remove a node, right? We already have methods to traverse the tree to insert or find nodes, so why would removing a node be any more difficult?"),(0,n.kt)("p",null,"Well, what happens if you remove a node from the middle of a tree? You can't just leave that space empty \u2014 another node needs to replace it, but which one? And once that node is removed, what about filling in the space that moved node left behind?"),(0,n.kt)("p",null,"Fortunately, we can use a TDD approach to solve this problem one step at a time. See how many steps you can get through on your own \u2014 and then do some research on your own to find a full solution if you can't solve the problem yourself. There are plenty of resources online \u2014 including implementations in JavaScript."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"BST.prototype.remove()")," method should return ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," if the node to be removed doesn't exist in the tree.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The method should remove a ",(0,n.kt)("strong",{parentName:"p"},"leaf node"),". Remember that a leaf node is a node at the very bottom of the tree. That means it doesn't have any children \u2014 and we can simply remove the node.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Don't forget to check if the root node is the only node in the tree \u2014 that would make it a leaf node \u2014 so it's the only one that would need to be updated.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Next, the method should remove a node that has ",(0,n.kt)("strong",{parentName:"p"},"only one child"),". This is also relatively easy to do. Since there is only one child, the child takes the place of the removed node \u2014 and there is nothing else we need to worry about. This is true even if it is the root node.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Next, the method should remove a node that has ",(0,n.kt)("strong",{parentName:"p"},"two children"),". This is much harder to do. Several things need to happen."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"First, one of the child nodes needs to take the place of the deleted node. This can be either the left child or the right child. In this case, we will use the left child."),(0,n.kt)("li",{parentName:"ul"},"Once the former left child has taken the place of the deleted parent node, the former right child becomes the child of its former sibling. In other words, what was once the left child is now the parent of what was once the right child.")),(0,n.kt)("p",{parentName:"li"},"The diagrams below illustrate what happens:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/tree-node-removal.png",alt:"The node is removed and its left child takes its place \u2014 which means the right child becomes the child of what used to be its sibling."})),(0,n.kt)("p",{parentName:"li"},"In the left diagram, ",(0,n.kt)("em",{parentName:"p"},"Node to delete")," hasn't been deleted yet. We see that it has links to its parent node and two child nodes. All of those connections need to be updated."),(0,n.kt)("p",{parentName:"li"},"In the right diagram, ",(0,n.kt)("em",{parentName:"p"},"Deleted Node")," has been removed. ",(0,n.kt)("em",{parentName:"p"},"Former Left Child")," used to be ",(0,n.kt)("em",{parentName:"p"},"Deleted Node's")," left child \u2014 but now it has taken its place. Now, ",(0,n.kt)("em",{parentName:"p"},"Deleted Node")," is no longer ",(0,n.kt)("em",{parentName:"p"},"Former Left Child's")," parent \u2014 instead ",(0,n.kt)("em",{parentName:"p"},"Parent")," is. Meanwhile, ",(0,n.kt)("em",{parentName:"p"},"Former Right Child")," becomes the right child of ",(0,n.kt)("em",{parentName:"p"},"Former Left Child"),"."),(0,n.kt)("p",{parentName:"li"},"Think of it as two siblings next in line for succession to be the king. The king dies, then the first child becomes the king. The second child is next in line for succession. Any other children of those two children still need to be accounted for!")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Once you've successfully written a method that replaces a deleted node with its left child, write another that replaces a deleted node with its right child instead."))),(0,n.kt)("h3",{id:"keep-the-tree-balanced"},"Keep the Tree Balanced"),(0,n.kt)("p",null,"Next, we'll move onto another challenging problem. The first couple of steps will be easy to solve, but the problem will get progressively harder. How can we keep a tree balanced? Well, first, we need to think about what it even means for a tree to be balanced. Fortunately, this is actually very easy to do \u2014 the difference between the height of the root's left subtree and the height of the root's right subtree needs to be either 1 or 0. We can depict this with an illustration."),(0,n.kt)("p",null,"Here's an example of a balanced tree with its height:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/balanced-tree-with-height.png",alt:"In this illustration, the difference between the subtree's heights is 1."})),(0,n.kt)("p",null,"Here we can see that the height of the left subtree is 1 while the height of the right subtree is 2. The difference between those heights is 1 so this is a balanced tree."),(0,n.kt)("p",null,"On the other hand, let's review this illustration of an unbalanced tree from a few lessons ago:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/unbalanced_tree.png",alt:"The image shows a binary search tree where all child nodes are to the right of their parent node."})),(0,n.kt)("p",null,"The tree above has a left subtree with a height of 0 and a right subtree with a height of 6 \u2014 a difference much greater than one. This tree isn't balanced at all!"),(0,n.kt)("p",null,"Having a balanced tree makes it more efficient. It means that the maximum number of iterations a search or insert algorithm has to do is approximately the same for both sides of the tree."),(0,n.kt)("p",null,"Try writing an algorithm to check a binary search tree's balance \u2014 and rebalance it if necessary. Make sure to use TDD. Once again, the first few steps are much easier \u2014 but the problem gets progressively harder."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"First, add two properties to the ",(0,n.kt)("inlineCode",{parentName:"li"},"BST")," constructor. One will store the height of the left subtree while the other will store the height of the right subtree. ",(0,n.kt)("strong",{parentName:"li"},"Note:")," It's considerably harder to compute the height of a tree than to store information about its height. We would need to use a depth-first or breadth-first search to determine the greatest height in a subtree otherwise."),(0,n.kt)("li",{parentName:"ul"},"Next, update the ",(0,n.kt)("inlineCode",{parentName:"li"},"BST.prototype.insertNode()")," method so that it keeps track of the height of an inserted element. That means that each time the method traverses down a node, the temporary height should be increased by one. If the temporary height is greater than the actual height of the subtree when the element is inserted, the actual height should be updated."),(0,n.kt)("li",{parentName:"ul"},"Next, write a ",(0,n.kt)("inlineCode",{parentName:"li"},"BST.prototype.check()")," method. This method will just check to see if the tree is balanced or not. It should return the difference in height between the left and right subtrees.")),(0,n.kt)("p",null,"The next steps are challenging \u2014 but we recommend trying them out if you have the time. You may want to read this informative article on ",(0,n.kt)("a",{parentName:"p",href:"https://adrianmejia.com/self-balanced-binary-search-trees-with-avl-tree-data-structure-for-beginners/"},"Self-balanced Binary Search Trees with AVL in JavaScript"),". In addition to having some good basic information on trees, the article describes how to balance a binary search tree."),(0,n.kt)("p",null,"The article is a full walk-through of the process, so you can choose either to follow along with the coding steps in the article or try to solve at least a few steps of the problem on your own. For a greater challenge, we recommend using the article only for hints and trying to solve as many steps without additional assistance."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the tree is imbalanced, use rotation to rebalance the tree. Write and test a ",(0,n.kt)("inlineCode",{parentName:"li"},"BST.prototype.rebalance()")," method."),(0,n.kt)("li",{parentName:"ul"},"Finally, try writing an AVL tree. This is a self-balancing tree named for its inventors (Georgy Adelson-Velsky and Evgenii Landis). The article linked above walks through the process.")))}p.isMDXComponent=!0}}]);