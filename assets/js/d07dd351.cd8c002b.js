"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[46597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"\ud83d\udcd3 2.1.0.3 Literal Notation Versus Constructors",day:"weekend",id:"2-1-0-3-literal-notation-versus-constructors",hide_table_of_contents:!0},i=void 0,s={unversionedId:"intermediate-javascript/object-oriented-javascript/2-1-0-3-literal-notation-versus-constructors",id:"intermediate-javascript/object-oriented-javascript/2-1-0-3-literal-notation-versus-constructors",title:"\ud83d\udcd3 2.1.0.3 Literal Notation Versus Constructors",description:"In the previous lesson we created objects using Literal Notation. Let's explore further examples of what literal notation looks like, and how the process of creating objects may be streamlined by using constructors. We haven't learned about constructors yet, but we will in this lesson!",source:"@site/docs/2_intermediate-javascript/1_object-oriented-javascript/AC-2-1-0-3-literal-notation-versus-constructors.md",sourceDirName:"2_intermediate-javascript/1_object-oriented-javascript",slug:"/intermediate-javascript/object-oriented-javascript/2-1-0-3-literal-notation-versus-constructors",permalink:"/intermediate-javascript/object-oriented-javascript/2-1-0-3-literal-notation-versus-constructors",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 2.1.0.3 Literal Notation Versus Constructors",day:"weekend",id:"2-1-0-3-literal-notation-versus-constructors",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.1.0.2 JavaScript Objects",permalink:"/intermediate-javascript/object-oriented-javascript/2-1-0-2-javascript-objects"},next:{title:"\ud83d\udcd3 2.1.0.4 Constructors and Prototypes",permalink:"/intermediate-javascript/object-oriented-javascript/2-1-0-4-constructors-and-prototypes"}},c={},l=[{value:"Literal Notation",id:"literal-notation",level:2},{value:"Constructors",id:"constructors",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the previous lesson we created objects using ",(0,o.kt)("strong",{parentName:"p"},"Literal Notation"),". Let's explore further examples of what literal notation looks like, and how the process of creating objects may be streamlined by using constructors. We haven't learned about constructors yet, but we will in this lesson!"),(0,o.kt)("h2",{id:"literal-notation"},"Literal Notation"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's say a dog walker wants to keep track of all dogs they walk. We'll create a dog object using literal notation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let dog1 = {\n  name: "Falcor",\n  colors: ["black"],\n  age: 4\n};\n')),(0,o.kt)("p",null,"Now we'll create another:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let dog2 = {\n  name: "Nola",\n  colors: ["white", "black"],\n  age: 6\n};\n')),(0,o.kt)("p",null,"And another:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let dog3 = {\n  name: "Patsy",\n  colors: ["brown"],\n  age: 2\n};\n')),(0,o.kt)("p",null,"You may notice that this is getting a little repetitive. All of these dogs have the same properties, which involves typing ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"colors")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," over and over again, each time we want to create a new dog. Good news is, there is a much faster way to make dog objects! Instead of using literal notation to manually create each individual dog object, we can use a constructor as a blueprint."),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We will write a ",(0,o.kt)("strong",{parentName:"p"},"constructor function")," to create dog objects momentarily, but first, what ",(0,o.kt)("em",{parentName:"p"},"is")," a constructor function? A constructor function (or just 'constructor') is a special type of function that is used to make an instance of a type of object, like a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dog")," object. The next lesson will introduce constructors and demonstrate how we can use constructors and prototypes to make our lives easier."),(0,o.kt)("p",null,"After we write a constructor we'll be able to create the same dogs we created in literal notation above, with these three simple lines of code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let dog1 = new Dog("Falcor", ["black"], 4);\nlet dog2 = new Dog("Nola", ["white", "black"], 6);\nlet dog3 = new Dog("Patsy", ["brown"], 7);\n')),(0,o.kt)("p",null,"As you can see, this is ",(0,o.kt)("em",{parentName:"p"},"far")," less code, and it's much more scalable!"))}d.isMDXComponent=!0}}]);