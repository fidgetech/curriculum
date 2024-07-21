"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[45060],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||o;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},62586:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"\ud83d\udcd3 2.2.3.4 ES6 Maps and Sets",day:"wednesday",id:"2-2-3-4-es6-maps-and-sets",hide_table_of_contents:!0},s=void 0,l={unversionedId:"intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-3-4-es6-maps-and-sets",id:"intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-3-4-es6-maps-and-sets",title:"\ud83d\udcd3 2.2.3.4 ES6 Maps and Sets",description:"In this lesson, we'll cover two more useful features of ES6: Maps and Sets. ES6 also introduced the WeakMap and WeakSet but these two data structures are more obscure and not as widely useful so we won't cover them here. You won't be required to utilize either Maps or Sets for this section's independent project but you are encouraged to explore them in class.",source:"@site/docs/2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript/BP-2-2-3-4-es6-maps-and-sets.md",sourceDirName:"2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript",slug:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-3-4-es6-maps-and-sets",permalink:"/v1.2/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-3-4-es6-maps-and-sets",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 2.2.3.4 ES6 Maps and Sets",day:"wednesday",id:"2-2-3-4-es6-maps-and-sets",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.2.3.3 ES6 Array and Object Destructuring",permalink:"/v1.2/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-3-3-es6-array-and-object-destructuring"},next:{title:"\u270f\ufe0f 2.2.4.1 Haiku Creator, RPG, Sudoku Solver (Longer Project) - Part 2 (day 2)",permalink:"/v1.2/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-4-1-haiku-creator-rpg-sudoku-solver-longer-project---part-2-day-2"}},i={},p=[{value:"Maps",id:"maps",level:2},{value:"Sets",id:"sets",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we'll cover two more useful features of ES6: ",(0,r.kt)("strong",{parentName:"p"},"Maps")," and ",(0,r.kt)("strong",{parentName:"p"},"Sets"),". ES6 also introduced the ",(0,r.kt)("strong",{parentName:"p"},"WeakMap")," and ",(0,r.kt)("strong",{parentName:"p"},"WeakSet")," but these two data structures are more obscure and not as widely useful so we won't cover them here. You won't be required to utilize either Maps or Sets for this section's independent project but you are encouraged to explore them in class."),(0,r.kt)("h2",{id:"maps"},"Maps"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We'll often want to map specific keys to values. In fact, we've done this quite a bit so far with objects. For instance, let's say we're making a game where we're exploring a dungeon. Each room should have a specific key corresponding to a door number. The value associated with each key should be a description of the room."),(0,r.kt)("p",null,"Here's an example using a basic object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const dungeon = {\n  1: "The room is dark and has no windows.",\n  2: "There are spiderwebs everywhere.",\n  3: "There is a book on a stone pedestal. The book appears to be glowing."\n};\n')),(0,r.kt)("p",null,"This object is being used to map specific keys to specific values. If a user enters door #3, for example, we'd want them to get the corresponding description ",(0,r.kt)("inlineCode",{parentName:"p"},'"There is a book on a stone pedestal. The book appears to be glowing."'),"."),(0,r.kt)("p",null,"In this situation, we could use a Map instead of an object literal. A Map is just a special kind of object that also maps keys to values. There are several similarities between a Map and a basic object but a Map has a few key advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The insertion order of key-values is preserved in a Map. This isn't the case for a basic object.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Maps have a ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property so we can easily see how many key-value pairs they're holding. A basic object doesn't have this functionality.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Maps have convenient utility methods such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Map.prototype.clear()")," which basic objects don't have.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Maps are iterable while basic objects are not. With a basic object, we need to first grab the keys and use these to iterate through the object.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Maps can have any data type as a key while objects can only have strings or symbols as keys. "))),(0,r.kt)("p",null,"For this last one, you may be wondering how we were able to create the basic ",(0,r.kt)("inlineCode",{parentName:"p"},"dungeon")," object above. Doesn't it have integers as keys? Actually, no. Let's check out the type of the first object key in the DevTools console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> typeof Object.keys(dungeon)[0];\nString\n")),(0,r.kt)("p",null,"When we do this, we'll see that the key is actually a string, not an integer."),(0,r.kt)("p",null,"At this point, it should be clear that there are quite a few benefits to using Maps."),(0,r.kt)("p",null,"So how can we implement one using the dungeon example above?"),(0,r.kt)("p",null,"Well, we can instantiate a map with values like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let dungeon = new Map(\n  [\n    [1, "The room is dark and has no windows."],\n    [2, "There are spiderwebs everywhere."],\n    [3, "There is a book on a stone pedestal. The book appears to be glowing."]\n  ]\n);\n')),(0,r.kt)("p",null,"As we can see, we instantiate key values inside a map by creating an array of arrays. The outer array holds all the key-value pairs. Each inner array holds a single key-value pair separated by a comma. The key is the first element of the array and the value is the second."),(0,r.kt)("p",null,"If we want to just instantiate an empty map, we can do that, too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = new Map();\n")),(0,r.kt)("p",null,"Now let's return to the dungeon we're building. Here's how we can add another room to our Map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'dungeon.set(4, "The room is full of sleeping bats.");\n')),(0,r.kt)("p",null,"We use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Map.prototype.set()")," method to add key-value pairs to a map. The method takes two arguments: the first is the key, the second is the value."),(0,r.kt)("p",null,"To delete a room, we just need to specify the key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"dungeon.delete(4);\n")),(0,r.kt)("p",null,"We can check to see if the dungeon has a specific room:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"dungeon.has(12);\n")),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"We can also get the value associated with a key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"dungeon.get(3);\n")),(0,r.kt)("p",null,"This will return the associated value, which is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'"There is a book on a stone pedestal. The book appears to be glowing."\n')),(0,r.kt)("p",null,"Note that if a value doesn't exist in a Map, the return will be ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),". Sometimes it will be a good idea to call ",(0,r.kt)("inlineCode",{parentName:"p"},"Map.prototype.has()")," before looking for a value just in case."),(0,r.kt)("p",null,"Finally, we can iterate directly over a Map, unlike with an object. For instance, there's ",(0,r.kt)("inlineCode",{parentName:"p"},"Map.prototype.forEach()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"dungeon.forEach(function(value, key) {\n  console.log(value, key);\n});\n")),(0,r.kt)("p",null,"Note that the first argument corresponds to the values in the Map while the second (optional) argument corresponds to the keys. We could rewrite the above with different parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"dungeon.forEach(function(description, roomNumber) {\n  console.log(description, roomNumber);\n});\n")),(0,r.kt)("p",null,"The result will be the same because the first argument still relates to values while the second relates to keys."),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"},"Mozilla documentation on Map")," for more information. Here are a few things from the documentation you might want to look over:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Iterating over a Map with a ",(0,r.kt)("inlineCode",{parentName:"p"},"for...of")," loop.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Map.prototype.keys()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Map.prototype.values()"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Map.prototype.entries()")," methods, which are all iterable and specifically allow you to iterate over keys, values, and entries (which return both keys and values) respectively."))),(0,r.kt)("p",null,"You won't be expected to use Maps on this section's independent project. However, we still recommend practicing with them and using them in your code when applicable."),(0,r.kt)("h2",{id:"sets"},"Sets"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Sometimes you'll want every element in a collection to be unique. While it's possible to create an array and then check that array for duplicates every time a new value is inserted, it's not necessary to do so. Instead, we can use a Set to enforce uniqueness for us. However, it's important to be aware that Sets don't really behave like arrays even though they are collections for holding elements."),(0,r.kt)("p",null,"We can create an empty Set like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let set = new Set();\n")),(0,r.kt)("p",null,"We could also instantiate a Set with existing values. For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let numbers = new Set([4, 9, 12, 4, 7]);\n")),(0,r.kt)("p",null,"Note that there is a duplicate above. However, once we create the Set and check the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"numbers"),", we'll see that the duplicate has been removed! If you ever have an array of things and you want to remove duplicates, you can just save it as a Set. By the way, you can also pass a string in as an argument to a set \u2014 it will automatically be broken up into letters and all duplicate letters will be removed."),(0,r.kt)("p",null,"Here's how we can add values to a Set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> numbers.add(32);\nSet(5)\xa0{4, 9, 12, 7, 32}\n")),(0,r.kt)("p",null,"What happens if we try to add a value that already exists in the set?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> numbers.add(4);\nSet(5)\xa0{4, 9, 12, 7, 32}\n")),(0,r.kt)("p",null,"As you can see, nothing at all. ",(0,r.kt)("inlineCode",{parentName:"p"},"Set.prototype.add()")," just returns the full Set. There's no message if you try to add a duplicate. A Set just quietly enforces uniqueness."),(0,r.kt)("p",null,"We can also remove values from a Set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> numbers.delete(4);\ntrue\n")),(0,r.kt)("p",null,"Note that this returns a boolean based on whether the value was successfully deleted. If it were to return ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", that would just mean that the value wasn't in the Set in the first place."),(0,r.kt)("p",null,"We can also check to see if a Set has a value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> numbers.has(9);\ntrue\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> numbers.has(51);\nfalse\n")),(0,r.kt)("p",null,"One very important thing to consider about Sets is that we can't grab a value by its index. For instance, we can't use bracket notation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Won't work!\nnumbers[0];\n")),(0,r.kt)("p",null,"If getting an element by its index is necessary for your use case, a Set isn't the way to go. Stick with an array."),(0,r.kt)("p",null,"Like a Map, a Set is iterable. We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Set.prototype.forEach()")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"for...of")," loop to iterate through a Set (same as we can with a Map)."),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"numbers.forEach(function(number) {\n  console.log(number);\n});\n")),(0,r.kt)("p",null,"For more information, see the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"},"Mozilla documentation on Set"),". You will not be expected to utilize Sets in an independent project. However, you are encouraged to explore them in your own code."))}d.isMDXComponent=!0}}]);