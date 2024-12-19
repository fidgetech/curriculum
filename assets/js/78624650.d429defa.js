"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[8977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=i,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"\ud83d\udcd3 Manipulating Bits",id:"manipulating-bits",slug:"manipulating-bits",hide_table_of_contents:!0,sidebar_position:28,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/3_manipulating_bits.md"},o=void 0,l={unversionedId:"capstone/capstone-week-1/manipulating-bits",id:"capstone/capstone-week-1/manipulating-bits",title:"\ud83d\udcd3 Manipulating Bits",description:"In the last lesson, we learned about bits \u2014 the smallest units of binary code that our machines use to operate. In this lesson, we'll learn how to work with bits, including comparing and manipulating them.",source:"@site/docs/capstone/1_capstone-week-1/BB-manipulating-bits.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/manipulating-bits",permalink:"/v1.2/capstone/capstone-week-1/manipulating-bits",draft:!1,tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"\ud83d\udcd3 Manipulating Bits",id:"manipulating-bits",slug:"manipulating-bits",hide_table_of_contents:!0,sidebar_position:28,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/3_manipulating_bits.md"},sidebar:"capstone",previous:{title:"\ud83d\udcd3 Bits, Bytes, and Binary Numbers",permalink:"/v1.2/capstone/capstone-week-1/bits-bytes-and-binary-numbers"},next:{title:"\u270f\ufe0f Bit Manipulation Practice",permalink:"/v1.2/capstone/capstone-week-1/bit-manipulation-practice"}},s={},p=[{value:"&amp; Bitwise Operator",id:"-bitwise-operator",level:3},{value:"| Bitwise Operator",id:"-bitwise-operator-1",level:3},{value:"^ Bitwise Operator",id:"-bitwise-operator-2",level:3},{value:"~ Bitwise Operator",id:"-bitwise-operator-3",level:3},{value:"Bitwise Shift Operators",id:"bitwise-shift-operators",level:3},{value:"Left Shift (<code>&lt;&lt;</code>)",id:"left-shift-",level:3},{value:"Sign-Propagating Right Shift (<code>&gt;&gt;</code>)",id:"sign-propagating-right-shift-",level:3},{value:"Zero-Fill Right Shift (<code>&gt;&gt;&gt;</code>)",id:"zero-fill-right-shift-",level:3}],u={toc:p},h="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last lesson, we learned about bits \u2014 the smallest units of binary code that our machines use to operate. In this lesson, we'll learn how to work with bits, including comparing and manipulating them."),(0,i.kt)("p",null,"Why learn about bit manipulation? While working with binary code might be necessary on the lowest level of the machine, why would we use bits in higher-level languages? Well, it turns out that bits are very useful for a number of different things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hashing algorithms"),": These algorithms are used to convert a hash into an array and back. They are an essential part of hash tables, which we will cover in a future lesson, and hashing algorithms often use bitwise manipulation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Encryption"),": Encryption processes use hashing algorithms as well. We can use bitwise manipulation to improve our encryption and make it exceptionally difficult to crack passwords."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Compression"),": Bitwise manipulation is often used for compression algorithms. An example is the widely used ",(0,i.kt)("a",{parentName:"li",href:"https://www.euccas.me/zlib/"},"zlib")," library, which is implemented with Node, Ruby, C#, and many other languages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Storing boolean values"),": We can store multiple boolean values with a minimum amount of data. This is useful for determining read/write permissions and also has other potential applications which we will cover later.")),(0,i.kt)("p",null,"Now that we can see some of the potential use cases for bit manipulation, let's take a look at the bitwise operators we can use in JavaScript. Note that almost all of these bitwise operators are exactly the same in Ruby and C# as well."),(0,i.kt)("h3",{id:"-bitwise-operator"},"& Bitwise Operator"),(0,i.kt)("p",null,"The AND bitwise operator (",(0,i.kt)("inlineCode",{parentName:"p"},"&"),") is used to check if ",(0,i.kt)("em",{parentName:"p"},"both")," binary values are true. Remember that 1 corresponds to true, and 0 corresponds to false."),(0,i.kt)("p",null,"The following corresponds to 1 because both values are 1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  1\n& 1\n  1\n")),(0,i.kt)("p",null,"In other words, ",(0,i.kt)("inlineCode",{parentName:"p"},"1 & 1")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("p",null,"By the way, don't try any of this in the console just yet as there's a big gotcha that we'll cover in just a moment."),(0,i.kt)("p",null,"Meanwhile, all of the following will return 0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  1     0     0\n& 0   & 0   & 1\n  0     0     0\n")),(0,i.kt)("p",null,"This is because ",(0,i.kt)("em",{parentName:"p"},"both")," values need to be 1 for it to return 1."),(0,i.kt)("p",null,"We can apply this concept for longer binary numbers. Each column will be checked to see if it should return 0 or 1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  100110\n& 110011\n  100010\n")),(0,i.kt)("p",null,"In the first column, when we compare the numbers in the first two rows, they are both 1. So the result is a 1. For the next column, we have a 0 and 1, so the result is a 0. We check the value of each column to get a final result of ",(0,i.kt)("inlineCode",{parentName:"p"},"100110"),"."),(0,i.kt)("p",null,"Now for the console gotcha. What happens if we try this in the console?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Won't work correctly.\n\n> 100110 & 110011\n99594\n")),(0,i.kt)("p",null,"This isn't right. What's happening here? Well, JavaScript sees ",(0,i.kt)("inlineCode",{parentName:"p"},"100110")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"110011")," as decimal numbers, not binary numbers. It's ",(0,i.kt)("em",{parentName:"p"},"translating")," them into binary numbers. To let JavaScript know that we are using binary numbers, not decimals, we need to prefix each number with ",(0,i.kt)("inlineCode",{parentName:"p"},"0b")," like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Still won't work correctly.\n> 0b100110 & 0b110011\n34\n")),(0,i.kt)("p",null,"Now it's returning a different outcome \u2014 but it's ",(0,i.kt)("em",{parentName:"p"},"still")," the wrong result. This is because JavaScript also translates the ",(0,i.kt)("em",{parentName:"p"},"result")," into decimals as well. So in addition to translating the binary numbers into decimals if we don't use ",(0,i.kt)("inlineCode",{parentName:"p"},"0b"),", JavaScript will also return the result as a decimal number. Fortunately, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Number.prototype.toString(2)")," (which we learned about in the last lesson) to translate it right back into its binary equivalent. This is how we need to get the result we want in binary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// This works!\n> (0b100110 & 0b110011).toString(2)\n"100010"\n')),(0,i.kt)("h3",{id:"-bitwise-operator-1"},"| Bitwise Operator"),(0,i.kt)("p",null,"The OR bitwise operator (",(0,i.kt)("inlineCode",{parentName:"p"},"|"),") will return a 1 if ",(0,i.kt)("em",{parentName:"p"},"any")," of the values in a column are 1. It will return a 0 if ",(0,i.kt)("em",{parentName:"p"},"all")," the values in a column are 0."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  1000101\n| 0111011\n  1111111\n")),(0,i.kt)("p",null,"In the example above, at least one of the columns always has a 1 value so the result of each column is 1."),(0,i.kt)("h3",{id:"-bitwise-operator-2"},"^ Bitwise Operator"),(0,i.kt)("p",null,"The XOR operator (",(0,i.kt)("inlineCode",{parentName:"p"},"^"),"), short for the exclusive or operator, checks to see if the bits at the same position of multiple binary numbers are the same or different. If they are different, it returns 1. If they are the same, it returns 0."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  01001100\n^ 10101010\n  11100110\n")),(0,i.kt)("h3",{id:"-bitwise-operator-3"},"~ Bitwise Operator"),(0,i.kt)("p",null,"The NOT operator (",(0,i.kt)("inlineCode",{parentName:"p"},"~"),") switches every bit in a binary number to its opposite. For example, the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"~101010\n")),(0,i.kt)("p",null,"Will become:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-010101\n")),(0,i.kt)("p",null,"All of the zeroes become ones and all of the ones become zeroes. In addition to that, the number also becomes negative!"),(0,i.kt)("p",null,"How does a computer know if a binary number should be negative or not? Well, there's an additional bit that is reserved for if a number is positive or negative. If that reserved bit is a 1, then the number is negative. However, when we use binary numbers, we will use a negative sign for negative binary numbers because it is challenging to depict a reserved 0 or 1 that shows whether the number is positive or negative. Because we aren't transistors, there is no need for us to use a special bit."),(0,i.kt)("h3",{id:"bitwise-shift-operators"},"Bitwise Shift Operators"),(0,i.kt)("p",null,"There are also three bitwise shift operators which will shift bits to the left or right."),(0,i.kt)("h3",{id:"left-shift-"},"Left Shift (",(0,i.kt)("inlineCode",{parentName:"h3"},"<<"),")"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<<")," (left shift) operator shifts bits to the left, filling in the empty space on the right-hand side with zeroes."),(0,i.kt)("p",null,"For instance, if we do a left shift of 2 spaces of the following binary number:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"10100<<2\n")),(0,i.kt)("p",null,"We get the following result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1010000\n")),(0,i.kt)("p",null,"We've just shifted everything over to the left by adding two zeroes at the end."),(0,i.kt)("h3",{id:"sign-propagating-right-shift-"},"Sign-Propagating Right Shift (",(0,i.kt)("inlineCode",{parentName:"h3"},">>"),")"),(0,i.kt)("p",null,"We can also shift values to the right. This won't add zeroes, though \u2014 instead, it will drop the specified number of bits from the end of the binary number. The ",(0,i.kt)("em",{parentName:"p"},"sign-propagating")," part sounds fancy but it just means that the shift won't change the sign of the binary number (whether it's positive or negative)."),(0,i.kt)("p",null,"Here's an example. The following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"101001011>>3\n")),(0,i.kt)("p",null,"Will become:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"101001\n")),(0,i.kt)("p",null,"The last three digits on the right are removed."),(0,i.kt)("h3",{id:"zero-fill-right-shift-"},"Zero-Fill Right Shift (",(0,i.kt)("inlineCode",{parentName:"h3"},">>>"),")"),(0,i.kt)("p",null,"All of the previous operators we've covered are also in Ruby and C#. This one, however, is not, most likely because it doesn't have many use cases."),(0,i.kt)("p",null,"Like the last shift, the zero-fill right shift shifts bits a specified number. The difference is that the sign is shifted to zero as well \u2014 which means the number will always be positive after a zero-fill right shift. If the number is already positive, a zero-fill right shift and a sign-propagating right shift operate in exactly the same way."),(0,i.kt)("p",null,"In this lesson, we've covered all the important bitwise operators that JavaScript makes available. We also learned about the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"0b")," which we need to use to specify that a number should be evaluated as binary, not decimal. In addition to that, we need to use the method ",(0,i.kt)("inlineCode",{parentName:"p"},"Number.prototype.toString(2)")," to ensure that JavaScript evaluates our results as binary, not decimal numbers."),(0,i.kt)("p",null,"In the next lesson, we'll have an opportunity to practice solving some problems using bitwise manipulation!"))}c.isMDXComponent=!0}}]);