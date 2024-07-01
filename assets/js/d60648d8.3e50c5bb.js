"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[15869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"\ud83d\udcd3 Introduction to ASCII",id:"introduction-to-ascii",slug:"introduction-to-ascii",hide_table_of_contents:!0,sidebar_position:26,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/1_ascii_code.md"},i=void 0,s={unversionedId:"capstone/capstone-week-1/introduction-to-ascii",id:"version-1.1/capstone/capstone-week-1/introduction-to-ascii",title:"\ud83d\udcd3 Introduction to ASCII",description:"There are some situations where we might need to convert a letter or a string into a number. For example, when we work with binary numbers, we might need to turn a letter to its binary representation. Some algorithms also require converting letters to numbers. A key example is a hashing algorithm, which requires the ability to convert a string into an index in an array.",source:"@site/versioned_docs/version-1.1/capstone/1_capstone-week-1/AZ-introduction-to-ascii.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/introduction-to-ascii",permalink:"/v1.1/capstone/capstone-week-1/introduction-to-ascii",draft:!1,tags:[],version:"1.1",sidebarPosition:26,frontMatter:{title:"\ud83d\udcd3 Introduction to ASCII",id:"introduction-to-ascii",slug:"introduction-to-ascii",hide_table_of_contents:!0,sidebar_position:26,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/1_ascii_code.md"},sidebar:"capstone",previous:{title:"\u270f\ufe0f Graph Theory Practice",permalink:"/v1.1/capstone/capstone-week-1/graph-theory-practice"},next:{title:"\ud83d\udcd3 Bits, Bytes, and Binary Numbers",permalink:"/v1.1/capstone/capstone-week-1/bits-bytes-and-binary-numbers"}},c={},l=[{value:"JavaScript Methods for ASCII Encoding",id:"javascript-methods-for-ascii-encoding",level:2},{value:"Turning a Letter into ASCII Code",id:"turning-a-letter-into-ascii-code",level:3},{value:"Turning an ASCII Code Into A Character",id:"turning-an-ascii-code-into-a-character",level:3},{value:"Other Notes About ASCII",id:"other-notes-about-ascii",level:2}],u={toc:l},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are some situations where we might need to convert a letter or a string into a number. For example, when we work with binary numbers, we might need to turn a letter to its binary representation. Some algorithms also require converting letters to numbers. A key example is a hashing algorithm, which requires the ability to convert a string into an index in an array."),(0,r.kt)("p",null,"Fortunately, all characters \u2014 including letters, numbers and punctuation \u2014 can be translated into an ASCII character code, which is the standard for encoding characters on a keyboard as a number. You can see a complete ",(0,r.kt)("a",{parentName:"p",href:"https://www.ascii-code.com/"},"ASCII chart here"),"."),(0,r.kt)("p",null,"ASCII specifications serve a very specific purpose. ASCII is a universal language that computers can use to communicate and share files. Without standards like ASCII, one machine might send a message that reads ",(0,r.kt)("inlineCode",{parentName:"p"},'"hello"')," \u2014 but a second machine wouldn't be able to translate it for a user because there'd be no standard by which to decode the message from the first machine."),(0,r.kt)("p",null,"Generally, we will not need to worry about how various machines communicate with each other \u2014 that's something that other developers have taken care of for us. However, as mentioned before, there are situations where we might need to turn letters into numbers. Instead of just creating our own converter, we'd be better off using a universal standard that all machines understand."),(0,r.kt)("h2",{id:"javascript-methods-for-ascii-encoding"},"JavaScript Methods for ASCII Encoding"),(0,r.kt)("p",null,"There are two important methods related to ASCII encoding. One is to turn a letter into its ASCII equivalent. The other is to turn an ASCII code back into its letter equivalent."),(0,r.kt)("h3",{id:"turning-a-letter-into-ascii-code"},"Turning a Letter into ASCII Code"),(0,r.kt)("p",null,"To turn a letter into its equivalent ASCII code, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.charCodeAt()")," method. This method takes a position in a string as an argument."),(0,r.kt)("p",null,"If we want to encode the first character in a string, we'd do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> "cat".charCodeAt(0);\n99\n')),(0,r.kt)("p",null,"If we try to get the character code of a position that doesn't exist, the method will return ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> "cat".charCodeAt(3);\nNaN\n')),(0,r.kt)("p",null,"If we want to return the codes for each character, we need to loop through the string. For example, we could do something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function asciiConverter(string) {\n  return string.split("").map(function(letter) {\n    return letter.charCodeAt(0);\n  });\n}\n')),(0,r.kt)("p",null,"This splits the string and then uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to return the ASCII code for each letter. As we can see from the example above, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.charCodeAt(0)")," because we are looking at one letter at a time. It's common to just use ",(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.charCodeAt(0)")," in this kind of loop because we are evaluating each letter individually \u2014 and the first position of a single letter is always going to be itself."),(0,r.kt)("h3",{id:"turning-an-ascii-code-into-a-character"},"Turning an ASCII Code Into A Character"),(0,r.kt)("p",null,"To go in the other direction, we can turn an ASCII code into a character with ",(0,r.kt)("inlineCode",{parentName:"p"},"String.fromCharCode()"),". Note that this is a static method, not a prototype method."),(0,r.kt)("p",null,"We can call it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> String.fromCharCode(97);\n"a"\n')),(0,r.kt)("p",null,"Or we can pass in multiple arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> String.fromCharCode(99, 97, 116);\n"cat"\n')),(0,r.kt)("p",null,"This method won't just translate ASCII characters, by the way \u2014 it's for translating all UTF-16 characters. That means Unicode \u2014 which has a ",(0,r.kt)("em",{parentName:"p"},"lot")," more characters than ASCII. For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> String.fromCharCode(6543210);\n"\ud76a"\n')),(0,r.kt)("h2",{id:"other-notes-about-ascii"},"Other Notes About ASCII"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ASCII chart isn't just for numbers and letters. It's for encoding ",(0,r.kt)("em",{parentName:"p"},"all")," characters on a keyboard. The first 32 characters in the ASCII chart are characters that can't be printed. This includes everything from the backspace to the ",(0,r.kt)("inlineCode",{parentName:"p"},"esc")," key. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lower-cased letters are encoded differently than upper-cased letters. For instance, the ASCII code for ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," is 65 while the character code for ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," is 97. The letters are sequential so ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," is 66, ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," is 67, and so on. Because lower-case letters are also sequential, the lower-cased version of a letter will always have an ASCII code that's the sum of the ASCII code for the upper-cased version plus 32. Not that you need to know this fact \u2014 but it could help solve a problem some day if, for instance, you wanted to uppercase or lowercase letters based on their ASCII codes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There are also extended ASCII character codes for special characters such as characters used in other languages like ",(0,r.kt)("inlineCode",{parentName:"p"},"\xeb"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ASCII is based on a limited set of Latin character. This means many characters from other languages (such as Arabic) are not included. Unicode is much more extensive for character encoding."))),(0,r.kt)("p",null,"In general, you will probably not need to think about ASCII too much. However, the topic will come up in several future lessons \u2014 including when we learn about bitwise manipulation and hashing algorithms. It's not anything you need to memorize \u2014 rather, it's important to be aware of ASCII as there are many problems where we might need to convert letters into numbers."))}h.isMDXComponent=!0}}]);