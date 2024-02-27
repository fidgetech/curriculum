"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[36676],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),h=a,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||r;return n?o.createElement(m,l(l({ref:t},u),{},{components:n})):o.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},17269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={title:"\ud83d\udcd3 1.3.3.6 When to use for",day:"wednesday",id:"1-3-3-6-when-to-use-for",hide_table_of_contents:!0},l=void 0,i={unversionedId:"introduction-to-programming/arrays-looping/1-3-3-6-when-to-use-for",id:"introduction-to-programming/arrays-looping/1-3-3-6-when-to-use-for",title:"\ud83d\udcd3 1.3.3.6 When to use for",description:"In this lesson, we'll compare use cases for Array.prototype.forEach() and for loops. As we'll learn, we'll favor using a for loop when we're not iterating over an array, and if we need to break out of an array and not loop over every value in it. As we move through the examples in this lesson, put them into the DevTools console to try them out.",source:"@site/docs/1_introduction-to-programming/3_arrays-looping/BH-1-3-3-6-when-to-use-for.md",sourceDirName:"1_introduction-to-programming/3_arrays-looping",slug:"/introduction-to-programming/arrays-looping/1-3-3-6-when-to-use-for",permalink:"/introduction-to-programming/arrays-looping/1-3-3-6-when-to-use-for",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 1.3.3.6 When to use for",day:"wednesday",id:"1-3-3-6-when-to-use-for",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\u270f\ufe0f 1.3.3.5 Practice: Looping with for",permalink:"/introduction-to-programming/arrays-looping/1-3-3-5-practice-looping-with-for"},next:{title:"\ud83d\udcd3 1.3.3.7 for Loops with Text Analyzer",permalink:"/introduction-to-programming/arrays-looping/1-3-3-7-for-loops-with-text-analyzer"}},p={},s=[{value:"When to Use <code>for</code> Loops",id:"when-to-use-for-loops",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll compare use cases for ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loops. As we'll learn, we'll favor using a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop when we're not iterating over an array, and if we need to break out of an array and not loop over every value in it. As we move through the examples in this lesson, put them into the DevTools console to try them out."),(0,a.kt)("h2",{id:"when-to-use-for-loops"},"When to Use ",(0,a.kt)("inlineCode",{parentName:"h2"},"for")," Loops"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In general, we should use ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," when we want to loop through ",(0,a.kt)("em",{parentName:"p"},"every")," element in an array. If we are using a loop that isn't iterating through an array, we can't use ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," for that loop \u2014 that's pretty obvious."),(0,a.kt)("p",null,"However, sometimes we ",(0,a.kt)("em",{parentName:"p"},"can't")," use ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," when we are looping through an array. Specifically, if we want to ",(0,a.kt)("em",{parentName:"p"},"stop")," the loop, we can't use ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),". Looping through every element in an array is a requirement of ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),"."),(0,a.kt)("p",null,"Let's look at an example when this might matter. Let's say we have a series of arrays that hold sequences of DNA. These sequences can potentially be very long \u2014 and we want to stop searching an array as soon as we find a pattern. We'll call that pattern \"A\" (to represent a specific DNA sequence). We'll also add a few other letters to represent other DNA sequences. A biologist won't be impressed by our approximation... but we are programmers and this is a programming example!"),(0,a.kt)("p",null,'Here\'s our sample "sequence":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const dnaSequence = ["X", "A", "Y", "M", "D"];\n')),(0,a.kt)("p",null,"In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},'"A"')," is the second element in this array. We could use an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," loop to flag the sequence if it includes ",(0,a.kt)("inlineCode",{parentName:"p"},'"A"'),". Here's the code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> let dnaFlag = false;\n> const dnaSequence = ["X", "A", "Y", "M", "D"];\n> dnaSequence.forEach(function(element) {\n  if (element === "A") {\n    dnaFlag = true;\n  };\n  console.log("Looped!")\n});\n> dnaFlag;\n\u200bLooped!\n\u200bLooped!\n\u200bLooped!\n\u200bLooped!\n\u200bLooped!\ntrue\n')),(0,a.kt)("p",null,"In the code above, when an iteration through the loop finds a match with ",(0,a.kt)("inlineCode",{parentName:"p"},'"A"'),", it will switch the ",(0,a.kt)("inlineCode",{parentName:"p"},"dnaFlag")," boolean to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". Using boolean flags in this manner is very common in coding."),(0,a.kt)("p",null,"Note, however, that the ",(0,a.kt)("em",{parentName:"p"},"second")," character in our array matched the letter ",(0,a.kt)("inlineCode",{parentName:"p"},'"A"'),". What if our array were a million elements long? (DNA sequences can be very complex.) Our loop needs to loop through ",(0,a.kt)("em",{parentName:"p"},"all")," million elements \u2014 even though we really only need to do two iterations of the loop to switch ",(0,a.kt)("inlineCode",{parentName:"p"},"dnaFlag")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". This would be horribly inefficient. We've added a ",(0,a.kt)("inlineCode",{parentName:"p"},'console.log("Looped!")')," to show how many times this loop runs."),(0,a.kt)("p",null,"In order to break out of loop, we need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"break;")," keyword. This keyword does exactly what it sounds like: stops a loop."),(0,a.kt)("p",null,"What happens if we try to add a ",(0,a.kt)("inlineCode",{parentName:"p"},"break;")," statement to the loop above?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> let dnaFlag = false;\n> const dnaSequence = ["X", "A", "Y", "M", "D"];\n> dnaSequence.forEach(function(element) {\n  if (element === "A") {\n    dnaFlag = true;\n    break;\n  };\n});\n> dnaFlag;\nUncaught SyntaxError: Illegal break statement\n')),(0,a.kt)("p",null,"We'll get the following error: ",(0,a.kt)("inlineCode",{parentName:"p"},"Uncaught SyntaxError: Illegal break statement"),". In short, we can't break out of this kind of loop."),(0,a.kt)("p",null,"However, we can use a break statement with a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop. Try the following in the console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> let dnaFlag = false;\n> const dnaSequence = ["X", "A", "Y", "M", "D"];\n> for (let i = 0; i < dnaSequence.length; i +=1) {\n  if (dnaSequence[i] === "A") {\n    dnaFlag = true;\n    break;\n  };\n  console.log("Looped!");\n}\n> dnaFlag;\nLooped!\ntrue\n')),(0,a.kt)("p",null,"We've added a ",(0,a.kt)("inlineCode",{parentName:"p"},'console.log("Looped!")')," to this code, too \u2014 and you'll see it only triggers once. The second time through the loop, the condition is met and the loop breaks due to the ",(0,a.kt)("inlineCode",{parentName:"p"},"break;")," keyword."),(0,a.kt)("p",null,"There's something that's not so great about the code above. As of now, the ",(0,a.kt)("inlineCode",{parentName:"p"},"dnaFlag")," variable is globally scoped. In an ideal world, we'd wrap this all in a function. Let's do this now, not just because it's better code but also so we can see what happens when we try to ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," out of both a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop and an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," loop."),(0,a.kt)("p",null,"We'll start by wrapping the ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop in a function called ",(0,a.kt)("inlineCode",{parentName:"p"},"dnaPatternDetector"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> function dnaPatternDetector(dnaSequence, pattern) {\n  for (let i = 0; i < dnaSequence.length; i +=1) {\n    if (dnaSequence[i] === pattern) {\n      return true;\n    };\n    console.log("Looped!");\n  }\n  return false;\n}\n')),(0,a.kt)("p",null,"We've done a bunch of things to refactor this code. Our function takes two parameters. The ",(0,a.kt)("inlineCode",{parentName:"p"},"dnaSequence")," is an array of characters. The pattern is the character we are looking for (we are looking for ",(0,a.kt)("inlineCode",{parentName:"p"},'"A"'),")."),(0,a.kt)("p",null,"We actually don't need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"dnaFlag")," anymore. If the pattern is met (",(0,a.kt)("inlineCode",{parentName:"p"},"dnaSequence[i] === pattern"),"), then the loop will stop running and our function will return ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". If the pattern is never met, our loop will complete and the final part of our function will be reached: ",(0,a.kt)("inlineCode",{parentName:"p"},"return false;"),"."),(0,a.kt)("p",null,"Let's try the following out in the DevTools console. First, some variables \u2014 a ",(0,a.kt)("inlineCode",{parentName:"p"},"sequence")," variable that includes an array and two variables for patterns: ",(0,a.kt)("inlineCode",{parentName:"p"},"pattern1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pattern2"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> const sequence = ["X", "A", "Y", "M", "D"];\n> const pattern1 = "A";\n> const pattern2 = "Z";\n')),(0,a.kt)("p",null,"Next, we'll also need to add our ",(0,a.kt)("inlineCode",{parentName:"p"},"dnaPatternDetector()")," function in the console as well."),(0,a.kt)("p",null,"Finally, try this out:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"> dnaPatternDetector(sequence, pattern1);\nLooped!\ntrue\n")),(0,a.kt)("p",null,"We'll see that the function returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," \u2014 exactly what we'd expect because ",(0,a.kt)("inlineCode",{parentName:"p"},"sequence")," includes ",(0,a.kt)("inlineCode",{parentName:"p"},'"A"'),". We also see that it only hits the ",(0,a.kt)("inlineCode",{parentName:"p"},'console.log("Looped!")')," statement once. ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," has the same effect as the ",(0,a.kt)("inlineCode",{parentName:"p"},"break;")," statement here \u2014 however, it doesn't just break us out of the loop, it returns from the function."),(0,a.kt)("p",null,"Now try out the second pattern, which is a character that's ",(0,a.kt)("em",{parentName:"p"},"not")," included in ",(0,a.kt)("inlineCode",{parentName:"p"},"sequence"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"> dnaPatternDetector(sequence, pattern2);\nLooped!\nLooped!\nLooped!\nLooped!\nLooped!\nfalse\n")),(0,a.kt)("p",null,"Our loop iterates through every character in the array and never finds the character ",(0,a.kt)("inlineCode",{parentName:"p"},'"Z"'),'. The loop completes (so "Looped!" is printed to the screen five times). This is the only way the final part of the code can be reached: ',(0,a.kt)("inlineCode",{parentName:"p"},"return false"),". The function returns false."),(0,a.kt)("p",null,"A function that actually checks DNA sequences would probably be quite a bit more complicated than this example. However, this does show a potential use case for when we'd want to break out of a loop \u2014 either with a ",(0,a.kt)("inlineCode",{parentName:"p"},"break;")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," statement. This same function wouldn't work as intended with an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," loop \u2014 if we try to put a ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," statement inside the loop, we'll get an error. The rules for ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," loops are strict \u2014 we ",(0,a.kt)("em",{parentName:"p"},"must")," iterate through every element in the array \u2014 we can't break or return from it."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To summarize, you should favor ",(0,a.kt)("inlineCode",{parentName:"strong"},"Array.prototype.forEach()")," loops over ",(0,a.kt)("inlineCode",{parentName:"strong"},"for")," loops except in the following cases:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You're not looping through an array. ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()")," can only be used with arrays."),(0,a.kt)("li",{parentName:"ul"},"You need to break out of the loop \u2014 either with ",(0,a.kt)("inlineCode",{parentName:"li"},"break;")," or a ",(0,a.kt)("inlineCode",{parentName:"li"},"return")," statement.")),(0,a.kt)("p",null,"We can add one more case just for the sake of practice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You should favor ",(0,a.kt)("inlineCode",{parentName:"li"},"for")," loops to loop through every element in an array until you understand exactly how they work. They are a cornerstone of JavaScript and it's essential to understand them even if you'll mostly use other types of loops in the future.")),(0,a.kt)("p",null,"In the next lesson, we'll make changes to our text analyzer application. Both will be situations where a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop will serve our purposes better."),(0,a.kt)("p",null,"You can use any kind of loop you want for this section's independent project. The project prompt can be solved with ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," but you are welcome to use ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," (or another kind of loop you learn later in this section) as well."))}d.isMDXComponent=!0}}]);