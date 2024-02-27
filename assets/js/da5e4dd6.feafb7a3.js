"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[56145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,v=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(v,l(l({ref:t},c),{},{components:n})):a.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"\ud83d\udcd3 2.2.2.5 ES6 Template Literals",day:"tuesday",id:"2-2-2-5-es6-template-literals",hide_table_of_contents:!0},l=void 0,s={unversionedId:"intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-2-5-es6-template-literals",id:"intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-2-5-es6-template-literals",title:"\ud83d\udcd3 2.2.2.5 ES6 Template Literals",description:"Template literals are a spoonful of syntactic sugar and another popular feature in ES6. They're especially useful when concatenating strings or inserting variables into strings.",source:"@site/docs/2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript/BJ-2-2-2-5-es6-template-literals.md",sourceDirName:"2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript",slug:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-2-5-es6-template-literals",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-2-5-es6-template-literals",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 2.2.2.5 ES6 Template Literals",day:"tuesday",id:"2-2-2-5-es6-template-literals",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.2.2.4 ES6 Arrow Notation",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-2-4-es6-arrow-notation"},next:{title:"\ud83d\udcd3 2.2.2.6 Working with Multiple Business Logic Files",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-2-6-working-with-multiple-business-logic-files"}},o={},p=[{value:"Template Literals",id:"template-literals",level:2},{value:"Using Template Literals for Expressions",id:"using-template-literals-for-expressions",level:3},{value:"Creating Multi-Line Strings",id:"creating-multi-line-strings",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Template literals are a spoonful of syntactic sugar and another popular feature in ES6. They're especially useful when concatenating strings or inserting variables into strings."),(0,r.kt)("p",null,"A lot of other languages have this same feature, too. For example, template literals are called string interpolation in both Ruby and C#. It's also a lot easier to use than concatenation, especially with longer strings. "),(0,r.kt)("h2",{id:"template-literals"},"Template Literals"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Here's an example of how we'd insert a variable into a string prior to ES6. (In the following example, ignore the fact that we wouldn't use ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," prior to ES6.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let language = "JavaScript";\nlet adjective = "fun";\n\nlet concatenatedString = language + " is " + adjective + " to learn!";\n')),(0,r.kt)("p",null,"String concatenation is useful but it quickly becomes painful. We can make this process relatively painless using template literals. Here's an example using the same variables from above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let stringLiteral = `${language} is ${adjective} to learn!`;\n")),(0,r.kt)("p",null,"There are two syntax rules to remember with template literals:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, we need to surround the string with the backtick symbol instead of quotes. "),(0,r.kt)("li",{parentName:"ol"},"Second, any variable or expression needs to be put inside of ",(0,r.kt)("inlineCode",{parentName:"li"},"${ }"),".")),(0,r.kt)("h3",{id:"using-template-literals-for-expressions"},"Using Template Literals for Expressions"),(0,r.kt)("p",null,"Note that template literals ",(0,r.kt)("inlineCode",{parentName:"p"},"${ }")," can contain any expression, not just a variable. For instance, we could do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let length = 2;\nlet width = 3;\nlet rectangleArea = `The area of a rectangle with length ${length} and width ${width} is ${length * width}.`;\n")),(0,r.kt)("p",null,"In the example above, we're calculating ",(0,r.kt)("inlineCode",{parentName:"p"},"length * width")," inside the template literal. We can compute any JS code inside a template literal as long as it's inside of ",(0,r.kt)("inlineCode",{parentName:"p"},"${}"),". Keep in mind that while you ",(0,r.kt)("em",{parentName:"p"},"can")," do this, you probably ",(0,r.kt)("em",{parentName:"p"},"shouldn't"),", since it could quickly make your code less readable."),(0,r.kt)("h3",{id:"creating-multi-line-strings"},"Creating Multi-Line Strings"),(0,r.kt)("p",null,"One last thing. Backticks can be used to create multi-line strings. It's unlikely you'll need this functionality much, but it's still good to know. Here's an example to try out in the DevTools console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"> const multiLineString = `This is not a good\nhaiku about JavaScript code:\ntemplate literals.`;\n> console.log(multiLineString);\nThis is not a good\nhaiku about JavaScript code:\ntemplate literals.\n")),(0,r.kt)("p",null,"If we don't print ",(0,r.kt)("inlineCode",{parentName:"p"},"multiLineString")," in a ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()"),", we'll see our line breaks are preserved by the new line character ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'This is not a good\\nhaiku about JavaScript code:\\ntemplate literals.'\n")),(0,r.kt)("p",null,"To see more examples, visit ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"},"the MDN documentation on template literals"),"."))}m.isMDXComponent=!0}}]);