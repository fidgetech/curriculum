"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[1210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"\ud83d\udcd3 1.2.0.14 String and Number Methods",day:"weekend",id:"1-2-0-14-string-and-number-methods",hide_table_of_contents:!0},i=void 0,s={unversionedId:"introduction-to-programming/javascript-and-web-browsers/1-2-0-14-string-and-number-methods",id:"introduction-to-programming/javascript-and-web-browsers/1-2-0-14-string-and-number-methods",title:"\ud83d\udcd3 1.2.0.14 String and Number Methods",description:"Let's dive more into methods. JavaScript offers built-in methods for strings and numbers. Let's take a look at a few of these methods, including some we've learned about already. Note that the list below isn't comprehensive \u2014 there are many more methods out there that we'll take a look at soon!",source:"@site/docs/1_introduction-to-programming/2_javascript-and-web-browsers/AN-1-2-0-14-string-and-number-methods.md",sourceDirName:"1_introduction-to-programming/2_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/1-2-0-14-string-and-number-methods",permalink:"/v1/introduction-to-programming/javascript-and-web-browsers/1-2-0-14-string-and-number-methods",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 1.2.0.14 String and Number Methods",day:"weekend",id:"1-2-0-14-string-and-number-methods",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 1.2.0.13 Functions",permalink:"/v1/introduction-to-programming/javascript-and-web-browsers/1-2-0-13-functions"},next:{title:"\u270f\ufe0f 1.2.0.15 Practice: String and Number Methods",permalink:"/v1/introduction-to-programming/javascript-and-web-browsers/1-2-0-15-practice-string-and-number-methods"}},l={},d=[{value:"String Methods",id:"string-methods",level:2},{value:"<code>toUpperCase</code>",id:"touppercase",level:3},{value:"<code>toLowerCase</code>",id:"tolowercase",level:3},{value:"<code>concat</code>",id:"concat",level:3},{value:"<code>charAt</code>",id:"charat",level:3},{value:"Number Methods",id:"number-methods",level:2},{value:"<code>toString</code>",id:"tostring",level:3},{value:"<code>toFixed</code>",id:"tofixed",level:3},{value:"Chaining Methods",id:"chaining-methods",level:2},{value:"Concatenation or Arithmetic with the <code>+</code> Operator",id:"concatenation-or-arithmetic-with-the--operator",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's dive more into methods. JavaScript offers built-in methods for strings and numbers. Let's take a look at a few of these methods, including some we've learned about already. Note that the list below isn't comprehensive \u2014 there are many more methods out there that we'll take a look at soon!"),(0,r.kt)("h2",{id:"string-methods"},"String Methods"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"touppercase"},(0,r.kt)("inlineCode",{parentName:"h3"},"toUpperCase")),(0,r.kt)("p",null,"Here's one we've learned already:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> "supercalifragilisticexpialidocious".toUpperCase();\n"SUPERCALIFRAGILISTICEXPIALIDOCIOUS"\n')),(0,r.kt)("h3",{id:"tolowercase"},(0,r.kt)("inlineCode",{parentName:"h3"},"toLowerCase")),(0,r.kt)("p",null,"Here's the opposite of ",(0,r.kt)("inlineCode",{parentName:"p"},"toUpperCase"),", making a string all lowercase:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> "HOWDY, NEIGHBOR".toLowerCase();\n"howdy, neighbor"\n')),(0,r.kt)("h3",{id:"concat"},(0,r.kt)("inlineCode",{parentName:"h3"},"concat")),(0,r.kt)("p",null,"Here's the other string method we've learned \u2014 a method so important that we recommend memorizing it (though you can always look up the documentation if you need to):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> const word = "foo";\nundefined\n> word.concat("bar");\n"foobar"\n')),(0,r.kt)("h3",{id:"charat"},(0,r.kt)("inlineCode",{parentName:"h3"},"charAt")),(0,r.kt)("p",null,"Some string methods take numbers as arguments. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> "caterpillar".charAt(5);\n"p"\n')),(0,r.kt)("p",null,'Did you notice something funny about this example? What\'s the fifth character of the word "caterpillar"? Well, with the way we normally count, "c" is the first letter, and "r" is the fifth. But JavaScript says that the character at the 5th position is "p". That\'s because computers start counting at zero. So "c" is the zeroth letter, and "r" is the fourth. This is really important \u2014 and it\'s another thing that trips up beginners. However, it will soon become second nature.'),(0,r.kt)("h2",{id:"number-methods"},"Number Methods"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tostring"},(0,r.kt)("inlineCode",{parentName:"h3"},"toString")),(0,r.kt)("p",null,"This method turns a number into a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const myBirthday = 42;\n> const myStringifiedBirthday = myBirthday.toString();\n"42"\n')),(0,r.kt)("p",null,"We can also call ",(0,r.kt)("inlineCode",{parentName:"p"},"toString")," on a number instead of a variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> 42.34.toString();\n"42.34"\n> 42..toString();\n"42"\n')),(0,r.kt)("p",null,"Note that you need to add the decimal point after a whole number before you can call ",(0,r.kt)("inlineCode",{parentName:"p"},"toString")," on it! So that means there are two decimal points. You can also wrap the whole number in parens instead like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"(42).toString();")),(0,r.kt)("h3",{id:"tofixed"},(0,r.kt)("inlineCode",{parentName:"h3"},"toFixed")),(0,r.kt)("p",null,"This method returns a string with only the number of decimal points that is specified in the argument. If you want 1 decimal point, and your number has 3, then ",(0,r.kt)("inlineCode",{parentName:"p"},"toFixed")," will chop off the extra decimal points, leaving only 1. Note that this method is called on a number, but turns the number into a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> 42.222.toFixed(1);\n'42.2'\n> const myFavRealNumber = 3.14;\n> myFavRealNumber.toFixed(0);\n'3'\n")),(0,r.kt)("h2",{id:"chaining-methods"},"Chaining Methods"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Methods can be ",(0,r.kt)("strong",{parentName:"p"},"chained")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> "foo".concat("bar").toUpperCase();\n"FOOBAR"\n')),(0,r.kt)("p",null,"We actually tried out chaining these exact string methods when we discussed the distinction between methods and functions. As we can see, when we chain methods together like this, we first concatenate the string and then uppercase that string."),(0,r.kt)("p",null,"Here's an example of chaining number methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> 4.3354.toFixed(2).toString();\n"4.34"\n')),(0,r.kt)("p",null,"In this example, we are first executing ",(0,r.kt)("inlineCode",{parentName:"p"},"toFixed")," on the number, and then we're turning it onto a string with ",(0,r.kt)("inlineCode",{parentName:"p"},"toString"),". ",(0,r.kt)("strong",{parentName:"p"},"Take note"),", it is redundant to call ",(0,r.kt)("inlineCode",{parentName:"p"},"toString")," after ",(0,r.kt)("inlineCode",{parentName:"p"},"toFixed"),", because ",(0,r.kt)("inlineCode",{parentName:"p"},"toFixed")," returns a string anyways."),(0,r.kt)("h2",{id:"concatenation-or-arithmetic-with-the--operator"},"Concatenation or Arithmetic with the ",(0,r.kt)("inlineCode",{parentName:"h2"},"+")," Operator"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," operator lets us do addition if we're working with numbers, or concatenation if we're working with strings. Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," with numbers should be familiar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> 1 + 3\n4\n")),(0,r.kt)("p",null,"Let's take a look at using ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," with strings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> "I love" + " " + "Epicodus.";\n"I love Epicodus."\n')),(0,r.kt)("p",null,"As we can see, we can just use the ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),' sign to "add" strings together! This has the same effect as the ',(0,r.kt)("inlineCode",{parentName:"p"},"concat")," method."),(0,r.kt)("p",null,"And we can do this with variables, too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> const sentiment = "I love ";\nundefined\n> const animal1 = "cats";\nundefined\n> const animal2 = "dogs";\nundefined\n> const exclamation = "!";\n> sentiment + animal1 + exclamation;\n"I love cats!"\n> sentiment + animal2 + exclamation;\n"I love dogs!"\n')),(0,r.kt)("p",null,"Or with variables holding numbers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"> const number1 = 1;\nundefined\n> const number2 = 99;\nundefined\n> number1 + number2;\n100\n")),(0,r.kt)("p",null,"Now, check out this more complex example, where we include a variable with a method called on it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const myBirthday = 42;\n> const aboutMe = "I am " + myBirthday.toString() + " and I was born in \'79.";\n> aboutMe;\n"I am 42 and I was born in 1979."\n')),(0,r.kt)("p",null,"Here's the same example written in a different way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> "I am " + 42..toString() + " and I was born in \'79.";\n"I am 42 and I was born in 1979."\n')))}m.isMDXComponent=!0}}]);