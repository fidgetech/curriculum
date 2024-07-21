"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[35503],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"\ud83d\udcd3 2.1.0.7 Objects Within Objects",day:"weekend",id:"2-1-0-7-objects-within-objects",hide_table_of_contents:!0},i=void 0,s={unversionedId:"intermediate-javascript/object-oriented-javascript/2-1-0-7-objects-within-objects",id:"intermediate-javascript/object-oriented-javascript/2-1-0-7-objects-within-objects",title:"\ud83d\udcd3 2.1.0.7 Objects Within Objects",description:"Let's take a brief break from the address book project we just started to learn how to create an object that contains another object. Then we'll use this to build out our address book in the next lesson.",source:"@site/docs/2_intermediate-javascript/1_object-oriented-javascript/AG-2-1-0-7-objects-within-objects.md",sourceDirName:"2_intermediate-javascript/1_object-oriented-javascript",slug:"/intermediate-javascript/object-oriented-javascript/2-1-0-7-objects-within-objects",permalink:"/v1.2/intermediate-javascript/object-oriented-javascript/2-1-0-7-objects-within-objects",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 2.1.0.7 Objects Within Objects",day:"weekend",id:"2-1-0-7-objects-within-objects",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.1.0.6 Accessing Code From Different Branches",permalink:"/v1.2/intermediate-javascript/object-oriented-javascript/2-1-0-6-accessing-code-from-different-branches"},next:{title:"\ud83d\udcd3 2.1.0.8 Address Book: Objects Within Objects",permalink:"/v1.2/intermediate-javascript/object-oriented-javascript/2-1-0-8-address-book-objects-within-objects"}},l={},c=[{value:"Objects within Objects",id:"objects-within-objects",level:2},{value:"Accessing A More Complicated Object and Indentation",id:"accessing-a-more-complicated-object-and-indentation",level:3},{value:"An Even More Complex Object",id:"an-even-more-complex-object",level:3}],p={toc:c},d="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's take a brief break from the address book project we just started to learn how to create an object that contains another object. Then we'll use this to build out our address book in the next lesson."),(0,o.kt)("p",null,"Note that we've worked with nested objects a lot already by using Web APIs. Remember that a ",(0,o.kt)("strong",{parentName:"p"},"nested object")," is simply an object that is a property of another object. Or, an object that contains another object. Here are some examples that should be familiar to you:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> window.document;\n#document\n> window.location;\nLocation\xa0{ancestorOrigins: DOMStringList, href: 'https://old.learnhowtoprogram.com/introduction-to-\u2026/getting-started-at-epicodus/learn-how-to-program', origin: 'https://old.learnhowtoprogram.com', protocol: 'https:', host: 'old.learnhowtoprogram.com',\xa0\u2026}\n> document.body;\n<body>...</body>\n")),(0,o.kt)("p",null,"At their most basic, Web APIs are a bunch of different object types, and Web API structures like the DOM and the browser window are a series of nested objects. "),(0,o.kt)("p",null,"With this in mind, let's create our own object with a nested object inside. You are welcome to just read through this lesson, or code along. All of the following examples can be tested in the DevTools console. "),(0,o.kt)("h2",{id:"objects-within-objects"},"Objects within Objects"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Very often, we'll want to create associations between objects. For example, we may want to know a list of cities in a particular country. Here's how we can do this. First, let's create a series of cities:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> let pdx = { name: "Portland" };\n> let sfo = { name: "San Francisco" };\n> let sea = { name: "Seattle" };\n> let cso = { name: "Aktau" };\n> let dzn = { name: "Zhezkazgan" };\n')),(0,o.kt)("p",null,"Then, let's create some countries. Note that each country below has a ",(0,o.kt)("inlineCode",{parentName:"p"},"cities")," property that contains an array of city objects, the ones we created in the last code snippet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let usa = { name: "United States of America", cities: [pdx, sfo, sea] };\n> let kazakhstan = { name: "Kazakhstan", cities: [cso, dzn] };\n> let uruguay = { name: "Uruguay", cities: [] };\n')),(0,o.kt)("p",null,"Let's take a look at the properties of ",(0,o.kt)("inlineCode",{parentName:"p"},"usa")," \u2014 and also how we can get to the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property of the city ",(0,o.kt)("inlineCode",{parentName:"p"},"pdx")," within the country ",(0,o.kt)("inlineCode",{parentName:"p"},"usa"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> usa.name;\n"United States of America"\n> usa.cities;\n(3) [{...}, {...}, {...}]\n  0: {name: "Portland"}\n  1: {name: "San Francisco"}\n  2: {name: "Seattle"}\n  length: 3\n  [[Prototype]]: Array(0)\n> usa.cities[0];\n{name: "Portland"}\n> usa.cities[0].name;\n"Portland"\n')),(0,o.kt)("p",null,"As we can see, all of the pieces of information stored inside an object's properties are accessible. However, accessing more deeply nested properties is often a huge point of confusion for beginners. In the example above, we can see that ",(0,o.kt)("inlineCode",{parentName:"p"},"usa.cities")," is the array of cities we created. We can use bracket notation to get the first city ",(0,o.kt)("inlineCode",{parentName:"p"},"pdx")," from that array \u2014 after all, it works just like any other array. We can also loop through that array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"> usa.cities.forEach(function(city) {\n  console.log(\"Let's go to \" + city.name + \"!\");\n});\nLet's go to Portland!\nLet's go to San Francisco!\nLet's go to Seattle!\n")),(0,o.kt)("p",null,"We can also add cities to a country after the object is initially created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> let mlz = { name: "Melo" };\n> uruguay.cities.push(mlz);\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"uruguay.cities")," returns an array, and then we chain ",(0,o.kt)("inlineCode",{parentName:"p"},".push(mlz)")," to add the new city object onto the array."),(0,o.kt)("p",null,"When retrieving more deeply nested properties, it's important to note the ",(0,o.kt)("em",{parentName:"p"},"type")," of object you are working with. "),(0,o.kt)("h3",{id:"accessing-a-more-complicated-object-and-indentation"},"Accessing A More Complicated Object and Indentation"),(0,o.kt)("p",null,"Let's look at a slightly more confusing object that holds a variety of objects, arrays, and strings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let boxOfStuff = {\n  book: "Object-Oriented JavaScript",\n  smallerBox: {\n    stuff: ["pencils", "pens"],\n    smallestBox: {\n      stuff: ["paper clips", "thumbtacks"]\n    }\n  }\n};\n')),(0,o.kt)("p",null,"While we could write out this entire nested object in a single line, it's much more readable using indentation. Each layer of nesting results in an extra level of indentation with the property ",(0,o.kt)("inlineCode",{parentName:"p"},"stuff")," of the most nested object ",(0,o.kt)("inlineCode",{parentName:"p"},"smallestBox")," being the most indented."),(0,o.kt)("p",null,"See if you can access ",(0,o.kt)("inlineCode",{parentName:"p"},'"pens"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"paper clips"')," in the console before moving on."),(0,o.kt)("p",null,"Now let's take a look at how we can access different things inside our jumbled ",(0,o.kt)("inlineCode",{parentName:"p"},"boxOfStuff"),"."),(0,o.kt)("p",null,"Getting the book is easy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> boxOfStuff.book;\n"Object-Oriented JavaScript"\n')),(0,o.kt)("p",null,"We can also use bracket notation to retrieve this property, though you won't see this as often:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> boxOfStuff["book"];\n"Object-Oriented JavaScript"\n')),(0,o.kt)("p",null,"Note that the property has to be in string form to do this. ",(0,o.kt)("inlineCode",{parentName:"p"},"boxOfStuff[book]")," will not work, unless you are referencing a variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"book"),", like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const book = "book";\n> boxOfStuff[book];\n"Object-Oriented JavaScript"\n')),(0,o.kt)("p",null,"We recommend using dot notation, not bracket notation, for grabbing object properties, but there are cases when you'll have to use bracket notation, like when you are working with a variable or a string with special characters in it (this second case is less likely to come up, but does)."),(0,o.kt)("p",null,"Now that we've gotten the book out of the box, let's see how we can get out the ",(0,o.kt)("inlineCode",{parentName:"p"},'"pens"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"paper clips"')," so we can make notes in the book. Here's how we can grab the pens:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> boxOfStuff.smallerBox.stuff[1];\n"pens"\n')),(0,o.kt)("p",null,"It's a bit tricky because ",(0,o.kt)("inlineCode",{parentName:"p"},"pens")," is inside an array saved to the ",(0,o.kt)("inlineCode",{parentName:"p"},"stuff")," property, which is a property of ",(0,o.kt)("inlineCode",{parentName:"p"},"smallerBox"),", which is itself an object inside of ",(0,o.kt)("inlineCode",{parentName:"p"},"boxOfStuff"),". We have to deal with both objects and arrays to get our pens."),(0,o.kt)("p",null,"Now let's get the paper clips:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> boxOfStuff.smallerBox.smallestBox.stuff[0];\n"paper clips"\n')),(0,o.kt)("p",null,"We have to go another level deeper to retrieve the ",(0,o.kt)("inlineCode",{parentName:"p"},"smallestBox")," object, which is a property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"smallerBox")," object. "),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"stuff")," inside ",(0,o.kt)("inlineCode",{parentName:"p"},"smallestBox")," is a completely different property than the ",(0,o.kt)("inlineCode",{parentName:"p"},"stuff")," inside ",(0,o.kt)("inlineCode",{parentName:"p"},"smallerBox"),". We have two different objects that both have a property named ",(0,o.kt)("inlineCode",{parentName:"p"},"stuff"),". They are different properties, though, just like two people named Jane are different people."),(0,o.kt)("p",null,"If getting properties from this object was a bit confusing, that's okay. It was meant to be a confusing object. You'll find plenty of other confusing objects out in the wild, though! Don't forget that you can always explore an object one level at a time in the DevTools console:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"We can look at an object&#39;s properties in the console, then dig deeper and look more closely at the objects inside of the objects.",src:n(98445).Z,width:"2554",height:"492"})),(0,o.kt)("p",null,"In the GIF above, we use the console to navigate through ",(0,o.kt)("inlineCode",{parentName:"p"},"boxOfStuff"),", gradually getting closer to the array that contains ",(0,o.kt)("inlineCode",{parentName:"p"},'"paper clips"'),"."),(0,o.kt)("h3",{id:"an-even-more-complex-object"},"An Even More Complex Object"),(0,o.kt)("p",null,"Take note that objects can have many nested objects, as many as the design of the data calls for. Let's look at one more example of objects within objects. This is another tricky one, which is by design. "),(0,o.kt)("p",null,"First, let's create a grocery store with veggies for sale:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> let tomatoes = { name: "Tomatoes", price: 2.99 };\n> let cucumbers = { name: "Cucumbers", price: 0.99 };\n> let onions = { name: "Onions", price: 0.79 };\n> let groceryStore = { name: "Michael\'s corner market", products: [tomatoes, cucumbers, onions] };\n')),(0,o.kt)("p",null,"Then, a phone store with phones for sale:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let iPhone = { name: "iPhone", price: 699 };\n> let android = { name: "Android", price: 499 };\n> let windowsPhone = { name: "Windows Phone", price: 399 };\n> let phoneStore = { name: "RadioShack", products: [iPhone, android, windowsPhone] };\n')),(0,o.kt)("p",null,"Then, we'll track the grocery store and phone store together in a ",(0,o.kt)("inlineCode",{parentName:"p"},"stores")," variable, and use a loop to print what each store sells in the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let stores = [groceryStore, phoneStore];\n> stores.forEach(function(store) {\n  console.log(store.name + " sells:");\n  store.products.forEach(function(product) {\n    console.log(product.name);\n  });\n  console.log("\\n");\n});\n')),(0,o.kt)("p",null,"We have several layers of nesting here. We have ",(0,o.kt)("inlineCode",{parentName:"p"},"stores"),", which contains an array with both ",(0,o.kt)("inlineCode",{parentName:"p"},"groceryStore")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"phoneStore"),". In turn, each of those stores has its own ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," property which contains an array of objects \u2014 vegetables or phones."),(0,o.kt)("p",null,"In the first loop, we display the store's name, and then for each store, we loop ",(0,o.kt)("em",{parentName:"p"},"again")," through the products it contains, displaying their names. Note that ",(0,o.kt)("inlineCode",{parentName:"p"},'"\\n"')," creates a new line. (A new line is the equivalent of hitting ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter")," start a new line)."),(0,o.kt)("p",null,"As you can see, we can do a lot with objects contained inside other objects. Working with properties and deeply-nested objects can be challenging at first. However, it's an important part of JavaScript, and Web APIs for that matter! "),(0,o.kt)("p",null,"In fact, working with JavaScript objects like this is so common in the industry that ",(0,o.kt)("strong",{parentName:"p"},"JSON (JavaScript Object Notation)")," is a standard form of sharing data across ",(0,o.kt)("em",{parentName:"p"},"many")," programming languages, not just JavaScript. We'll work more with JSON later \u2014 but for now, just be aware that being comfortable with navigating through JavaScript objects is an absolutely essential skill \u2014 and not too hard to master with a little practice."))}h.isMDXComponent=!0},98445:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/exploring-an-object-f33c4a161e3849c5cfcb2ea834666b0b.gif"}}]);