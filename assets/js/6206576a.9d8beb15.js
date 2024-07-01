"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[17124],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return r?a.createElement(m,i(i({ref:t},h),{},{components:r})):a.createElement(m,i({ref:t},h))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={title:"\ud83d\udcd3 Binary Search Trees Introduction",id:"binary-search-trees-introduction",slug:"binary-search-trees-introduction",hide_table_of_contents:!0,sidebar_position:12,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/2_binary_tree_data_structure.md"},i=void 0,s={unversionedId:"capstone/capstone-week-1/binary-search-trees-introduction",id:"version-1.1/capstone/capstone-week-1/binary-search-trees-introduction",title:"\ud83d\udcd3 Binary Search Trees Introduction",description:"In this lesson, we'll give an overview of two data structures: the binary tree and the binary search tree. They are quite similar \u2014 the main difference is that a binary search tree has additional restraints that make it better for searching.",source:"@site/versioned_docs/version-1.1/capstone/1_capstone-week-1/AL-binary-search-trees-introduction.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/binary-search-trees-introduction",permalink:"/v1.1/capstone/capstone-week-1/binary-search-trees-introduction",draft:!1,tags:[],version:"1.1",sidebarPosition:12,frontMatter:{title:"\ud83d\udcd3 Binary Search Trees Introduction",id:"binary-search-trees-introduction",slug:"binary-search-trees-introduction",hide_table_of_contents:!0,sidebar_position:12,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/2_binary_tree_data_structure.md"},sidebar:"capstone",previous:{title:"\ud83d\udcd3 Introduction to Trees",permalink:"/v1.1/capstone/capstone-week-1/introduction-to-trees"},next:{title:"\ud83d\udcd3 Binary Search Trees Part 1",permalink:"/v1.1/capstone/capstone-week-1/binary-search-trees-part-1"}},c={},l=[{value:"Binary Tree",id:"binary-tree",level:2},{value:"Binary Search Tree",id:"binary-search-tree",level:2}],h={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this lesson, we'll give an overview of two data structures: the ",(0,n.kt)("strong",{parentName:"p"},"binary tree")," and the ",(0,n.kt)("strong",{parentName:"p"},"binary search tree"),". They are quite similar \u2014 the main difference is that a binary search tree has additional restraints that make it better for searching."),(0,n.kt)("h2",{id:"binary-tree"},"Binary Tree"),(0,n.kt)("p",null,"A binary tree is a type of general tree structure. As the name suggests, it's a structure where each node can have no more than two child nodes. (We can infer this from the name because binary can be defined as something that has two parts.)"),(0,n.kt)("p",null,"Here's an example of a binary tree:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/binary_tree.png",alt:"Image of a binary tree."})),(0,n.kt)("p",null,"In the diagram above, each parent node has at most two child nodes. However, it's also fine if a parent has one or zero nodes. (In the latter case, it's technically not a parent.) By the way, don't worry about how the keys line up on the nodes. They do not need to be ordered in a specific fashion in a binary tree."),(0,n.kt)("p",null,"When a parent has two child nodes in a binary tree, the child nodes are referred to as the ",(0,n.kt)("strong",{parentName:"p"},"left child")," and the ",(0,n.kt)("strong",{parentName:"p"},"right child")," based on whether the node is on the left or right."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/left_and_right_child.png",alt:"When a parent has two nodes, the nodes are referred to as the left and right child."})),(0,n.kt)("p",null,"Binary trees have many uses. In fact, compilers often use them to build what is known as an ",(0,n.kt)("strong",{parentName:"p"},"abstract syntax tree")," (or AST) \u2014 an intermediate representation of the code that is not yet fully compiled. The JavaScript parser uses an AST as well, though it's a general tree, not a binary tree."),(0,n.kt)("h2",{id:"binary-search-tree"},"Binary Search Tree"),(0,n.kt)("p",null,"A binary search tree is very similar to a binary tree but also has a few additional restrictions. Let's take a look at an example."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/binary_search_tree.svg",alt:"An example of a binary search tree."})),(0,n.kt)("p",null,"In the example above, you'll see that all child nodes ",(0,n.kt)("em",{parentName:"p"},"to the left")," of the root node have a value ",(0,n.kt)("em",{parentName:"p"},"less than")," the root node. Meanwhile, all child nodes ",(0,n.kt)("em",{parentName:"p"},"to the right")," of the root node have a value ",(0,n.kt)("em",{parentName:"p"},"greater than")," the root node. This pattern continues all the way down the tree. The left-hand child always has a value ",(0,n.kt)("em",{parentName:"p"},"less than")," its parent while the right-hand child always has a value ",(0,n.kt)("em",{parentName:"p"},"greater than")," its parent. Based on this pattern, we automatically know a few things about a few values in a binary search tree. The bottom left leaf node will be the lowest value in the tree while the bottom right leaf node will be the greatest value in the tree."),(0,n.kt)("p",null,"Duplicate keys aren't allowed in a binary search tree. This should make intuitive sense \u2014 because each child node must be either ",(0,n.kt)("em",{parentName:"p"},"less than")," or ",(0,n.kt)("em",{parentName:"p"},"greater than")," its parent node's key, there is no possibility of repeat keys."),(0,n.kt)("p",null,"Over the next several lessons, we'll create a small application that makes a binary search tree from scratch. In the process, we'll also learn how to search a binary search tree."))}u.isMDXComponent=!0}}]);