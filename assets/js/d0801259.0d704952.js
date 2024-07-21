"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[15526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,d=c["".concat(i,".").concat(m)]||c[m]||u[m]||n;return a?r.createElement(d,s(s({ref:t},h),{},{components:a})):r.createElement(d,s({ref:t},h))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<n;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={title:"\ud83d\udcd3 Heaps",id:"heaps",slug:"heaps",hide_table_of_contents:!0,sidebar_position:42,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/heaps.md"},s=void 0,l={unversionedId:"capstone/capstone-week-1/heaps",id:"capstone/capstone-week-1/heaps",title:"\ud83d\udcd3 Heaps",description:"In this lesson, we'll cover heaps, a special kind of data structure that's most commonly used for allocating memory. This type of data structure isn't as directly relevant to what we've covered at Epicodus \u2014 after all, languages like JavaScript handle memory allocation for us. However, we are benefiting constantly from heaps all the same. Our machines use them constantly to allocate memory. JavaScript's V8 engines uses them to store variables as needed. And a basic understanding of this data structure is still an important computer science concept.",source:"@site/docs/capstone/1_capstone-week-1/BP-heaps.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/heaps",permalink:"/v1.2/capstone/capstone-week-1/heaps",draft:!1,tags:[],version:"current",sidebarPosition:42,frontMatter:{title:"\ud83d\udcd3 Heaps",id:"heaps",slug:"heaps",hide_table_of_contents:!0,sidebar_position:42,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/heaps.md"},sidebar:"capstone",previous:{title:"\u270f\ufe0f Linked Lists - Exercise",permalink:"/v1.2/capstone/capstone-week-1/linked-lists---exercise"},next:{title:"\ud83d\udcd3 Tries",permalink:"/v1.2/capstone/capstone-week-1/tries"}},i={},p=[],h={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll cover ",(0,o.kt)("strong",{parentName:"p"},"heaps"),", a special kind of data structure that's most commonly used for allocating memory. This type of data structure isn't as directly relevant to what we've covered at Epicodus \u2014 after all, languages like JavaScript handle memory allocation for us. However, we are benefiting constantly from heaps all the same. Our machines use them constantly to allocate memory. JavaScript's V8 engines uses them to store variables as needed. And a basic understanding of this data structure is still an important computer science concept."),(0,o.kt)("p",null,"We can visualize a heap as a kind of binary tree that's organized either from lowest to highest or highest to lowest. Let's take a look at both types."),(0,o.kt)("p",null,"The first illustration shows a ",(0,o.kt)("strong",{parentName:"p"},"min heap"),". A min heap, as you might guess, has values organized from lowest to highest."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/min_heap.png",alt:"The root node has the lowest value. Subsequent rows have higher values."})),(0,o.kt)("p",null,"While heaps look like binary trees, note how they are different from binary search trees \u2014 a right child doesn't need to be greater than a left child. Also, as you can see from the illustration, a heap can have duplicate values while a binary search tree can not."),(0,o.kt)("p",null,"Now let's look at a ",(0,o.kt)("strong",{parentName:"p"},"max heap"),", where values go from highest (in the root node) to lowest (in the leaf nodes)."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/max_heap.png",alt:"The root node has the highest value. Subsequent rows have lower values."})),(0,o.kt)("p",null,"There are two more very important rules about heaps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"They must ",(0,o.kt)("em",{parentName:"p"},"always")," be complete binary trees. That means that ",(0,o.kt)("em",{parentName:"p"},"all but the bottom")," row of tree must be filled. In other words, when adding or removing things from a heap, we need to make sure that we fill all rows completely (other than the bottom row).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"They must always be filled from ",(0,o.kt)("em",{parentName:"p"},"left to right"),". It doesn't matter whether values or higher or lower than their siblings (just that they are higher or lower than their parents and children depending on whether it's a min or max heap)."))),(0,o.kt)("p",null,"For instance, this isn't a heap:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/not_a_heap.png",alt:"The second from bottom row isn't completely filled in this tree."}),"."),(0,o.kt)("p",null,"Remember, ",(0,o.kt)("em",{parentName:"p"},"every row except for the bottom row must be filled"),". In this case, there is an incomplete row that's not the bottom row. If we moved the ",(0,o.kt)("inlineCode",{parentName:"p"},"7")," node into the incomplete space, this would be a heap."),(0,o.kt)("p",null,"Also, since all rows ",(0,o.kt)("em",{parentName:"p"},"must be filled left to right"),", another key rule is broken here as well."),(0,o.kt)("p",null,"When are heaps useful? Well, heaps are especially useful in situations where we regularly need to remove the lowest or highest value. If we regularly need to remove the lowest value, we'd use a min heap. If we regularly need to remove the highest value, we'd use a max heap. That's because it's very easy to find the lowest/highest value in a heap \u2014 just check the root node!"),(0,o.kt)("p",null,"Because of the rules of a heap, keeping the shape of the tree consistent is challenging. When we remove a value from a heap, such as when we remove the root node, we need to restructure the heap to fill the root node again while following both key rules of heaps: that rows must be complete where possible and that rows must be filled from left to right. The same challenges apply when we ",(0,o.kt)("em",{parentName:"p"},"add")," a value to a heap. Generally, when a value is added to a heap, it is first added to the bottom, left-most free spot and then we'd use an algorithm to allow it to bubble up to a spot where it's numerical value follows the rules of that particular heap."),(0,o.kt)("p",null,"We are not going to cover algorithms for adding and removing values from a heap. For now, it's enough to just know the basics about this important data structure."),(0,o.kt)("p",null,"If you'd like to learn more about heaps, including the basic principles of adding and removing values from a heap, check out ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=t0Cq6tVNRBA&ab_channel=HackerRank"},"Gayle Laakmann McDowell's video on this topic"),". McDowell is author of ",(0,o.kt)("em",{parentName:"p"},"Cracking the Coding Interview"),". While her code examples use Java, she explains heaps very clearly and the basics of how algorithms used to add and remove values from heaps is very clear."))}u.isMDXComponent=!0}}]);