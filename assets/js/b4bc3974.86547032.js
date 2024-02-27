"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[92982],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,y=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},52094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"\ud83d\udcd3 Introduction to Trees",day:"monday",id:"introduction-to-trees",hide_table_of_contents:!0},s=void 0,l={unversionedId:"capstone/capstone-week-1/introduction-to-trees",id:"capstone/capstone-week-1/introduction-to-trees",title:"\ud83d\udcd3 Introduction to Trees",description:"In this lesson, we'll learn about the basics of tree data structures. There are actually many different kinds of tree data structures, but we will focus on a few common ones. In this lesson, we'll cover general trees. Later in this section, we'll cover binary trees and binary search trees. We will also cover graphs, tries, and heaps in future sections.",source:"@site/docs/capstone/1_capstone-week-1/AI-introduction-to-trees.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/introduction-to-trees",permalink:"/capstone/capstone-week-1/introduction-to-trees",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 Introduction to Trees",day:"monday",id:"introduction-to-trees",hide_table_of_contents:!0},sidebar:"capstone",previous:{title:"\u270f\ufe0f Utilizing Big O Notation Practice",permalink:"/capstone/capstone-week-1/utilizing-big-o-notation-practice"},next:{title:"\ud83d\udcd3 Binary Search Trees Introduction",permalink:"/capstone/capstone-week-1/binary-search-trees-introduction"}},i={},c=[{value:"General Trees",id:"general-trees",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll learn about the basics of ",(0,a.kt)("strong",{parentName:"p"},"tree data structures"),". There are actually many different kinds of tree data structures, but we will focus on a few common ones. In this lesson, we'll cover ",(0,a.kt)("strong",{parentName:"p"},"general trees"),". Later in this section, we'll cover ",(0,a.kt)("strong",{parentName:"p"},"binary trees")," and ",(0,a.kt)("strong",{parentName:"p"},"binary search trees"),". We will also cover graphs, tries, and heaps in future sections."),(0,a.kt)("h2",{id:"general-trees"},"General Trees"),(0,a.kt)("p",null,"In computer science, a tree is a data structure that looks like an upside-down tree. We could also say it looks like the root system of a tree \u2014 however, we'll see in a moment why we describe it as an upside-down tree instead. Unlike data structures such as arrays and linked lists, which store data in a linear fashion, trees are non-linear data structures."),(0,a.kt)("p",null,"You've probably used a tree structure before, especially if you're interested in genealogy \u2014 a family tree is an example of a tree structure. While there are key differences in the way a family tree is structured, there is also a key similarity \u2014 family trees are used to convey data about relationships between people in a family. We can always trace our way through a family tree to find the exact relationship between two people \u2014 whether that is a great-great-grandparent or a fourth cousin. In the same way, we can traverse a tree structure to find relationships between different pieces of data."),(0,a.kt)("p",null,"Here is an example of a general tree structure."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of a general tree structure",src:r(49642).Z,width:"671",height:"545"})),(0,a.kt)("p",null,"A tree consists of connected ",(0,a.kt)("strong",{parentName:"p"},"nodes"),". Each connection between nodes is called an ",(0,a.kt)("strong",{parentName:"p"},"edge"),". ",(0,a.kt)("strong",{parentName:"p"},"Parent nodes")," can have many ",(0,a.kt)("strong",{parentName:"p"},"child nodes"),", but a child node can have only one parent. A tree structure will have a single ",(0,a.kt)("strong",{parentName:"p"},"root node")," which is either directly or indirectly the parent of all other nodes in the tree. As you can probably guess, the root node is never a child node to other nodes. Finally, child nodes that don't have any children of their own are called ",(0,a.kt)("strong",{parentName:"p"},"leaf nodes"),". It should be clear how this is similar to an upside-down tree \u2014 the leaf nodes are at the bottom while the root node is at the top."),(0,a.kt)("p",null,"Also, the above tree has a ",(0,a.kt)("strong",{parentName:"p"},"height")," of 4, which we can determine by counting from the top root node all the way down to the furthest leaf node."),(0,a.kt)("p",null,"We can also break up a tree into a series of ",(0,a.kt)("strong",{parentName:"p"},"subtrees")," or smaller trees. For instance, the image below shows a subtree inside the larger general tree."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image showing a subtree",src:r(67503).Z,width:"241",height:"325"})),(0,a.kt)("p",null,"In this image, we also show two ",(0,a.kt)("strong",{parentName:"p"},"sibling nodes"),". Nodes that share the same direct parent are siblings. It's important to note, however, that ",(0,a.kt)("strong",{parentName:"p"},"sibling nodes")," aren't connected by edges."),(0,a.kt)("p",null,"Why is that important? Well, we can traverse a general tree structure because all nodes are linked, either directly or indirectly. However, to traverse between sibling nodes, we need to do so indirectly via their shared parent node. We will explore traversing trees further in future lessons."),(0,a.kt)("p",null,"Each node also has a key."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Each node has a key.",src:r(47485).Z,width:"241",height:"201"})),(0,a.kt)("p",null,"In a general tree, nodes don't necessarily have to be ordered in any specific way. However, in other types of trees, we'll find that the way nodes are placed is very important."),(0,a.kt)("p",null,"Can you think of a specific example of a tree structure we use every day at Epicodus? ",(0,a.kt)("strong",{parentName:"p"},"Hint:")," We can use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," to navigate through it."),(0,a.kt)("p",null,"If you guessed a file structure, you are correct. Whenever we navigate through folders on a computer, we are traversing through a tree structure. We can navigate up to the root node \u2014 the root directory in our computer. We can navigate between siblings, but only if we first ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," up to a shared parent node. We can navigate to any directory or file on our machines via this traversal. Just from this small example, we can see that general trees are an essential part of our daily lives as developers. However, the importance of trees in computer science extends far beyond the file structures on our machines."))}u.isMDXComponent=!0},49642:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/general-tree-diagram-200bbe088c120b9a6cde8d2a4c762e67.png"},47485:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADJCAYAAADy4tTJAAAFOnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjAtMDktMjhUMTglM0E0MCUzQTAzLjc5OVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE0XzYpJTIwQXBwbGVXZWJLaXQlMkY1MzcuMzYlMjAoS0hUTUwlMkMlMjBsaWtlJTIwR2Vja28pJTIwQ2hyb21lJTJGODUuMC40MTgzLjEyMSUyMFNhZmFyaSUyRjUzNy4zNiUyMiUyMGV0YWclM0QlMjJrQWNIT3JJSWhJbkZOWXREU0J2cSUyMiUyMHZlcnNpb24lM0QlMjIxMy43LjYlMjIlMjB0eXBlJTNEJTIyZGV2aWNlJTIyJTNFJTNDZGlhZ3JhbSUyMGlkJTNEJTIydTZlYlVWQldCQ1N4NktOQ3d3RWElMjIlMjBuYW1lJTNEJTIyUGFnZS0xJTIyJTNFN1ZmQmpwc3dFUDBhanFrQWgwMzJHSkxkclNxMWloUlYyeHk5NElCYndOUTRHOWl2N3hpYmdJRjAweWhxYyUyQmdKejdOblBKNzM0bkVzdEV6TEo0N3olMkJETUxTV0s1ZGxoYWFHVzVydU80YyUyRmhJcEZMSXZUZFRRTVJwcUJlMXdJYSUyQkVRM2FHdDNUa0JUR1FzRllJbWh1Z2dITE1oSUlBOE9jczRPNWJNY1NjOWNjUjJRQWJBS2NETkZuR29wWW9YUFBidkdQaEVaeHM3Tmo2NWtVTjRzMVVNUTRaSWNPaEI0c3RPU01DVFZLeXlWSlpQR2F1aWklMkZ4eE96eDhRNHljUTVEbCUyQmVQMVhyNEt2ek50biUyQmVIR2R0ZkMlMkJMeWM2eWl0Tzl2ckFPbGxSTlJXQUtGQnNNUHhEVEFYWjVEaVFNd2ZnRzdCWXBBbFlEZ3h4a1NzR2RyUWtzS212WXhNdVNIa3lhZWRZQ3RBUVlTa1J2SUlsMmdFMU90RHltV256ME9GQ1EzR0hoZ2JEbXYzb0dMZ3RFQXgwamY2Z1h1NUl2ZTRTMk5VdmNwd1poYnY3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"},67503:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/subtree-94be470347c902ee797f5a1414ebe3ce.png"}}]);