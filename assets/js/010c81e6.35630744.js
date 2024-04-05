"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[14725],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),h=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=h(a),m=o,d=c["".concat(s,".").concat(m)]||c[m]||u[m]||n;return a?r.createElement(d,i(i({ref:t},p),{},{components:a})):r.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var h=2;h<n;h++)i[h]=a[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94959:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var r=a(87462),o=(a(67294),a(3905));const n={title:"\u270f\ufe0f Hashes Practice",id:"hashes-practice",slug:"hashes-practice",hide_table_of_contents:!0,sidebar_position:32,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/capstone/blob/main/3_hash_problems.md"},i=void 0,l={unversionedId:"capstone/capstone-week-1/hashes-practice",id:"capstone/capstone-week-1/hashes-practice",title:"\u270f\ufe0f Hashes Practice",description:"Now it's time to apply our new knowledge about hash tables and algorithms.",source:"@site/docs/capstone/1_capstone-week-1/BF-hashes-practice.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/hashes-practice",permalink:"/capstone/capstone-week-1/hashes-practice",draft:!1,tags:[],version:"current",sidebarPosition:32,frontMatter:{title:"\u270f\ufe0f Hashes Practice",id:"hashes-practice",slug:"hashes-practice",hide_table_of_contents:!0,sidebar_position:32,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/capstone/blob/main/3_hash_problems.md"},sidebar:"capstone",previous:{title:"\ud83d\udcd3 Optimizing Hashing Algorithms",permalink:"/capstone/capstone-week-1/optimizing-hashing-algorithms"},next:{title:"\ud83d\udcd3 Introduction to Algorithms",permalink:"/capstone/capstone-week-1/introduction-to-algorithms"}},s={},h=[{value:"Homemade Hash Table",id:"homemade-hash-table",level:2},{value:"Secure Hashing Algorithm",id:"secure-hashing-algorithm",level:2},{value:"Whiteboard Practice",id:"whiteboard-practice",level:2}],p={toc:h},c="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now it's time to apply our new knowledge about hash tables and algorithms."),(0,o.kt)("h2",{id:"homemade-hash-table"},"Homemade Hash Table"),(0,o.kt)("p",null,"Create your own hash class and algorithm from scratch. You can use the one we created a few lessons ago as a template \u2014 but the next step is to improve it further. Use a TDD approach to build out your class and methods."),(0,o.kt)("p",null,"The hash table should have the following methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HashTable.prototype.set()"),": Should add a key-value pair to the hash table."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HashTable.prototype.get()"),": Should get a key-value pair from the hash table. Try incorporating a linked list!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HashTable.prototype.remove()"),": Should remove a key-value pair from the hash table."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HashTable.prototype.clear()"),": Should clear all key-values from the hash table."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HashTable.prototype.hash()"),": The hash is the most important part!")),(0,o.kt)("p",null,"For your ",(0,o.kt)("inlineCode",{parentName:"p"},"HashTable.prototype.hash()")," method, you can try the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a hash that will store at most 10000 key-value pairs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Try out the DBJ2 hashing algorithm. Make your own modifications such as applying bitwise manipulation in a different way.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"More difficult"),": Add a ",(0,o.kt)("inlineCode",{parentName:"p"},"HashTable.prototype.resize()"),' method that will double the size of the hash table when it\'s full or nearly full. You can make this a "manual" method that a developer would call if they see that the table is near its capacity. Note that its the hashing method that really determines how big the table will be in JavaScript since arrays can be of any size. So that means that a ',(0,o.kt)("inlineCode",{parentName:"p"},"HashTable.prototype.resize()")," method will need to create a new array and then use the updated hashing algorithm to recalculate where all the key-value pairs should go in the new array."))),(0,o.kt)("h2",{id:"secure-hashing-algorithm"},"Secure Hashing Algorithm"),(0,o.kt)("p",null,"Try making your own (probably not so) secure hashing algorithm. Once again, use a TDD approach."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Incorporate bitwise manipulation in your algorithm."),(0,o.kt)("li",{parentName:"ul"},"Try adding salt to your algorithm. This could be a nonsense string appended to the end of a password \u2014 and this nonsense string should be computed based on the original password."),(0,o.kt)("li",{parentName:"ul"},"See how you can increase the avalanching effect of your algorithm. The easiest way to do this would be to compare what happens when ",(0,o.kt)("inlineCode",{parentName:"li"},'"cat"')," and ",(0,o.kt)("inlineCode",{parentName:"li"},'"bat"')," are passed into the algorithm. How different are the two hashes? You should also try to avoid ",(0,o.kt)("em",{parentName:"li"},"symmetry")," \u2014 which means that ",(0,o.kt)("inlineCode",{parentName:"li"},'"bat"')," and ",(0,o.kt)("inlineCode",{parentName:"li"},'"tab"')," could end up with the same hashes because they have the same characters. So the ",(0,o.kt)("em",{parentName:"li"},"order")," of characters in your hashing algorithm also matters!"),(0,o.kt)("li",{parentName:"ul"},"Add functionality to artificially slow down the computing time of your algorithm so that hackers couldn't easily use it for a brute force attack.")),(0,o.kt)("h2",{id:"whiteboard-practice"},"Whiteboard Practice"),(0,o.kt)("p",null,"Use a whiteboard to diagram how a hash table works. You may use code and illustrations. For instance, you might want to visually illustrate how a hashing algorithm maps a key to an array's index. Prepare your explanation as if you are describing hashing algorithms to someone that only knows the basics of coding (such as arrays and functions)."))}u.isMDXComponent=!0}}]);