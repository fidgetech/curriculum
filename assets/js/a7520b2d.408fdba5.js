"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),b=r,d=c["".concat(l,".").concat(b)]||c[b]||m[b]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},72796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"\ud83d\udcd3 Bits, Bytes, and Binary Numbers",day:"wednesday",id:"bits-bytes-and-binary-numbers",hide_table_of_contents:!0},i=void 0,s={unversionedId:"capstone/capstone-week-1/bits-bytes-and-binary-numbers",id:"capstone/capstone-week-1/bits-bytes-and-binary-numbers",title:"\ud83d\udcd3 Bits, Bytes, and Binary Numbers",description:"Computers use the binary number system, but what exactly does that mean? At this point, we should all recognize a number that's using the binary number system \u2014 it's just a series of zeroes and ones. For example, an uppercase A translates to 01000001 in binary code.",source:"@site/docs/capstone/1_capstone-week-1/AY-bits-bytes-and-binary-numbers.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/bits-bytes-and-binary-numbers",permalink:"/capstone/capstone-week-1/bits-bytes-and-binary-numbers",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 Bits, Bytes, and Binary Numbers",day:"wednesday",id:"bits-bytes-and-binary-numbers",hide_table_of_contents:!0},sidebar:"capstone",previous:{title:"\ud83d\udcd3 Introduction to ASCII",permalink:"/capstone/capstone-week-1/introduction-to-ascii"},next:{title:"\ud83d\udcd3 Manipulating Bits",permalink:"/capstone/capstone-week-1/manipulating-bits"}},l={},u=[{value:"Converting Decimal to Binary with <code>Number.prototype.toString(2)</code>",id:"converting-decimal-to-binary-with-numberprototypetostring2",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Computers use the binary number system, but what exactly does that mean? At this point, we should all recognize a number that's using the binary number system \u2014 it's just a series of zeroes and ones. For example, an uppercase ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," translates to ",(0,r.kt)("inlineCode",{parentName:"p"},"01000001")," in binary code."),(0,r.kt)("p",null,"Humans generally use the decimal number system, though. The decimal number system is base 10. We have ten total digits: 0 through 9. When we are counting up, we hit the end of these digits when we reach 9. To get to the next number, we add an extra digit to the beginning and start over. That gives us the number 10. The same pattern happens when we switch from 99 to 100, 999 to 1000, and so on."),(0,r.kt)("p",null,"The binary number system is base 2, which means it only uses two digits: 0 and 1. When we get to the number 1, we have to add a new digit and start over."),(0,r.kt)("p",null,"Let's take a look:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\x3c!-- We start at 0. --\x3e\n\n0\n1\n\n\x3c!-- We've reached the point where we need to roll over and add a digit. --\x3e\n\n10\n11\n\n\x3c!-- Time to roll over again and add a digit. --\x3e\n\n100\n101\n110\n111\n\n\x3c!-- As we can see, we are gradually increasing the amount of numbers we can count up to before rolling over. --\x3e\n\n1000\n1001\n1010\n1011\n1100\n1101\n1111\n\n\x3c!-- These are the first fifteen numbers in the binary system. See if you can do the next five. --\x3e\n")),(0,r.kt)("p",null,"Why does a computer use binary language? Well, at the very deepest level, a computer's processing power consists of billions of transistors that have only two states: on and off. The 1 represents the on state while the 0 represents the off state. Humans most likely use a decimal system because we (usually) have ten fingers to count on. If we all had 8 fingers, we'd likely use the octal system, and if we had 12, we'd probably use the duodecimal system. Some cultures (such as the Mayans) even had a base 20 system (counting on both fingers and toes). If we want to extend the metaphor, we can think of a transistor as having two fingers \u2014 it can only count to two. Fortunately, a computer can look at lots of transistors all at once in order to count."),(0,r.kt)("p",null,"Each 0 or 1 in a sequence of binary code is a ",(0,r.kt)("strong",{parentName:"p"},"bit"),". A bit by itself isn't very helpful. In general, for each bit we add to a sequence, we have double the number of total possible permutations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"1 bit"),": 2 permutations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2 bit"),": 4 permutations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"3 bit"),": 8 permutations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"4 bit"),": 16 permutations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"5 bit"),": 32 permutations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"6 bit"),": 64 permutations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"7 bit"),": 128 permutations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"8 bit"),": 256 permutations")),(0,r.kt)("p",null,"A group of eight bits put together is known as a ",(0,r.kt)("strong",{parentName:"p"},"byte"),". A byte consists of 256 different combinations if you include the number 00000000 \u2014 all the binary numbers between 00000000 and 11111111."),(0,r.kt)("p",null,"A single byte is an excellent option for storing characters. It's no coincidence that there are 255 characters represented in the extended set of ASCII character codes. Also, if you've ever played an old Nintendo video game, the max value of a stat or thing you can hold is often 255. For example, in the original Legend of Zelda on the Nintendo Entertainment System, you can only have up to 255 rupees, the currency of the game. It's not because 255 is a nice-sounding number \u2014 it's because that is the total number of permutations of rupees that can be stored in a single byte (ranging from 0 to 255) \u2014 and back then, game systems did not have the processing power that they do now."),(0,r.kt)("p",null,"Of course, processing power is much more advanced now. We now tend to measure things in terms of megabytes (say, a music file) and gigabytes (the storage space in our hard drive). Sometimes we might even talk in terms of terabytes. Here's how they all correspond to each other:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Byte"),": 8 bits"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kilobyte"),": 1024 bits (approximately 1000 bytes)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Megabyte"),": 1024 kilobytes (approximately one million bytes)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gigabyte"),": 1024 megabytes (approximately one billion bytes)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Terabyte"),": 1024 gigabytes (approximately one trillion bytes)")),(0,r.kt)("p",null,"Now that we know the basics of bits and bytes and have also covered the basics of the binary number system, let's look at some methods we can use with binary numbers. This will allow us to explore use cases for bitwise manipulation in the next lesson."),(0,r.kt)("h3",{id:"converting-decimal-to-binary-with-numberprototypetostring2"},"Converting Decimal to Binary with ",(0,r.kt)("inlineCode",{parentName:"h3"},"Number.prototype.toString(2)")),(0,r.kt)("p",null,"We can also convert any number into its binary equivalent with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Number.prototype.toString()")," method. This method turns a number to its string equivalent \u2014 but we can also specify an optional base as an argument. Because the binary number system is base 2, we can convert a decimal number to binary like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> (34).toString(2);\n"100010"\n')),(0,r.kt)("p",null,"Note that we have to put parentheses around the number or the parser will get confused and throw the following error: ",(0,r.kt)("inlineCode",{parentName:"p"},"Uncaught SyntaxError: Invalid or unexpected token"),"."),(0,r.kt)("p",null,"In the next lesson, we'll learn more about bit manipulation, including JavaScript operators for manipulating bits. In the process, we'll learn about some use cases for bit manipulation in the real world."))}m.isMDXComponent=!0}}]);