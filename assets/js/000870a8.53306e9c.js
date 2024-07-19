"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[28963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},72208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"\ud83d\udcd3 2.3.0.6 Parsing JSON",day:"weekend",id:"2-3-0-6-parsing-json",hide_table_of_contents:!0},s=void 0,i={unversionedId:"intermediate-javascript/asynchrony-and-apis/2-3-0-6-parsing-json",id:"intermediate-javascript/asynchrony-and-apis/2-3-0-6-parsing-json",title:"\ud83d\udcd3 2.3.0.6 Parsing JSON",description:"Before we continue on to making API calls with JavaScript, let's take a look at an example of a potential response from the OpenWeather API. Often an API call will return complex, deeply-nested JSON. Because JSON is just a set of key-value pairs, we can navigate through it just as we would JavaScript properties of an object.",source:"@site/docs/2_intermediate-javascript/3_asynchrony-and-apis/AF-2-3-0-6-parsing-json.md",sourceDirName:"2_intermediate-javascript/3_asynchrony-and-apis",slug:"/intermediate-javascript/asynchrony-and-apis/2-3-0-6-parsing-json",permalink:"/v1/intermediate-javascript/asynchrony-and-apis/2-3-0-6-parsing-json",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 2.3.0.6 Parsing JSON",day:"weekend",id:"2-3-0-6-parsing-json",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.3.0.5 Testing API Calls with Postman",permalink:"/v1/intermediate-javascript/asynchrony-and-apis/2-3-0-5-testing-api-calls-with-postman"},next:{title:"\ud83d\udcd3 2.3.0.7 Making API Calls with JavaScript",permalink:"/v1/intermediate-javascript/asynchrony-and-apis/2-3-0-7-making-api-calls-with-javascript"}},l={},p=[{value:"Parsing JSON",id:"parsing-json",level:2},{value:"Accessing Array Keys",id:"accessing-array-keys",level:3},{value:"Looping Through Arrays",id:"looping-through-arrays",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before we continue on to making API calls with JavaScript, let's take a look at an example of a potential response from the OpenWeather API. Often an API call will return complex, deeply-nested JSON. Because JSON is just a set of key-value pairs, we can navigate through it just as we would JavaScript properties of an object. "),(0,r.kt)("p",null,"While we've already worked with JavaScript objects, actually navigating JSON can still be challenging for students at first. A big part of this is the fact that the JSON we are working with is usually more complex than anything we've worked with before. But don't worry \u2014 it's not that complex once we understand how to navigate it."),(0,r.kt)("h2",{id:"parsing-json"},"Parsing JSON"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We'll often need to get very specific properties from an API response and at the very least we'll probably want to take this JSON data and convert it to a format that looks pleasing on a website. To do that, we need to ",(0,r.kt)("strong",{parentName:"p"},"parse")," the data. That just means breaking it down further to extract the data we need."),(0,r.kt)("p",null,"We'll use a potential response from the weather API as an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "coord": {\n        "lon": -70.25,\n        "lat": 43.66\n    },\n    "weather": [\n        {\n            "id": 801,\n            "main": "Clouds",\n            "description": "few clouds",\n            "icon": "02d"\n        }\n    ],\n    "base": "stations",\n    "main": {\n        "temp": 293.48,\n        "pressure": 1019,\n        "humidity": 45,\n        "temp_min": 291.15,\n        "temp_max": 295.93\n    },\n    "visibility": 16093,\n    "wind": {\n        "speed": 2.1\n    },\n    "clouds": {\n        "all": 20\n    },\n    "dt": 1567702485,\n    "sys": {\n        "type": 1,\n        "id": 5454,\n        "message": 0.008,\n        "country": "US",\n        "sunrise": 1567678140,\n        "sunset": 1567725058\n    },\n    "timezone": -14400,\n    "id": 4975802,\n    "name": "Portland",\n    "cod": 200\n}\n')),(0,r.kt)("p",null,"Note that this JSON object is mostly a collection of nested key-value pairs. Sometimes the value is a set of yet more key-value pairs. For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},'"lon"')," is a key in an object. This object is itself a value of ",(0,r.kt)("inlineCode",{parentName:"p"},'"coord"'),"."),(0,r.kt)("p",null,"If we were to save this JSON object in a ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonWeather"),", we can access ",(0,r.kt)("inlineCode",{parentName:"p"},'"coord"')," using either bracket notation or dot notation \u2014 just as we would access properties of other JavaScript objects."),(0,r.kt)("p",null,"Go ahead and open the DevTools console and then store the JSON data above in a variable ",(0,r.kt)("inlineCode",{parentName:"p"},"const jsonWeather")," so you can follow along with these examples."),(0,r.kt)("p",null,"Here's an example using dot notation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> jsonWeather.coord;\n{lon: -70.25, lat: 43.66}\n")),(0,r.kt)("p",null,"Here's an example using bracket notation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> jsonWeather["coord"];\n{lon: -70.25, lat: 43.66}\n')),(0,r.kt)("p",null,"In general, dot notation is cleaner, however if a property name uses a special character, we must use bracket notation. For example, if there were a key called ",(0,r.kt)("inlineCode",{parentName:"p"},'"current-weather"')," we would have to access it with bracket notation: ",(0,r.kt)("inlineCode",{parentName:"p"},'jsonWeather["current-weather"]'),". Otherwise, we'll get a syntax error."),(0,r.kt)("p",null,"To access the ",(0,r.kt)("inlineCode",{parentName:"p"},'"lon"')," property that's nested inside of ",(0,r.kt)("inlineCode",{parentName:"p"},'"coord"'),", we'll need to do the following, assuming we are using dot notation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> jsonWeather.coord.lon;\n-70.25\n")),(0,r.kt)("p",null,"With a very deeply nested object, we might have to continue specifying properties. In pseudocode, this would look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"object.property.nested_property.deeply_nested_property\n")),(0,r.kt)("p",null,"Chaining dot notation in this way will allow us to access most of the properties in a JSON object."),(0,r.kt)("h3",{id:"accessing-array-keys"},"Accessing Array Keys"),(0,r.kt)("p",null,"However, if we look more closely at the JSON object above, we'll see that there's an array inside of the ",(0,r.kt)("inlineCode",{parentName:"p"},'"weather"')," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"weather": [\n        {\n            "id": 801,\n            "main": "Clouds",\n            "description": "few clouds",\n            "icon": "02d"\n        }\n    ],\n...\n')),(0,r.kt)("p",null,"Let's see what happens if we try to access it in the same way we'd access other key-value pairs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> jsonWeather.weather.id;\nundefined\n")),(0,r.kt)("p",null,"As we can see, ",(0,r.kt)("inlineCode",{parentName:"p"},"object.weather.id")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),". This is because ",(0,r.kt)("inlineCode",{parentName:"p"},'"id"')," is not a property of ",(0,r.kt)("inlineCode",{parentName:"p"},'"weather"'),". Instead, it's an element in an array. We can access that element just as we'd access an element in any other JavaScript array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> jsonWeather.weather[0];\n{id: 801, main: "Clouds", description: "few clouds", icon: "02d"}\n')),(0,r.kt)("p",null,"We specify that we want the first (and only) element of the array by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"[0]"),". Now we can access more deeply nested key-value pairs within that array element, just as we did before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> jsonWeather.weather[0].main;\n"Clouds"\n')),(0,r.kt)("p",null,"Pay close attention to how key-value pairs are nested inside of JSON objects. If you are having issues getting a deeply nested value, make the API call in Postman and then copy the response's JSON body and paste it into the DevTools console, saving it in a variable."),(0,r.kt)("p",null,"For instance, here is the process we might use to find the ",(0,r.kt)("inlineCode",{parentName:"p"},'["id"]')," property in the OpenWeather API's response. Remember that we can use either dot notation or bracket notation. The example below uses bracket notation \u2014 just to ensure you are familiar with both forms of notation:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An example of using the console to find a deeply nested property",src:n(74146).Z,width:"1450",height:"1784"})),(0,r.kt)("h3",{id:"looping-through-arrays"},"Looping Through Arrays"),(0,r.kt)("p",null,"Finally, don't forget that once we reach the level of an array in JSON data, we can loop through it just like we would any other array. For instance, let's say we have some JSON that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "id": 1,\n            "name": "Jayne"\n        },\n        {\n            "id": 2,\n            "name": "Jasmine"\n        },\n        {\n            "id": 3,\n            "name": "Ada"\n        },\n    ]\n}\n')),(0,r.kt)("p",null,"If this were saved inside ",(0,r.kt)("inlineCode",{parentName:"p"},"const json"),", we could do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"json.data.map(function(person) {\n  return person.name;\n});\n")),(0,r.kt)("p",null,"This would return the array ",(0,r.kt)("inlineCode",{parentName:"p"},'["Jayne", "Jasmine", "Ada"]'),". We could use any other type of loop as well, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),"."),(0,r.kt)("p",null,"If you're ever unsure of how to handle data inside JSON, just remember that the usual JavaScript rules about objects and arrays apply. And don't forget to use the console and other tools to parse JSON. That way, it will be much easier to parse JSON in your code as well."))}u.isMDXComponent=!0},74146:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/exploring-json-in-console-31d168fa30ea7e60be425957b506ce56.png"}}]);