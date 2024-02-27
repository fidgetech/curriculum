"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[5627],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=a,h=p["".concat(u,".").concat(g)]||p[g]||m[g]||i;return t?r.createElement(h,o(o({ref:n},s),{},{components:t})):r.createElement(h,o({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},66760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={title:"\ud83d\udcd3 4.1.0.10 Currying",day:"weekend",id:"4-1-0-10-currying",hide_table_of_contents:!0},o=void 0,l={unversionedId:"react/functional-programming-with-javascript/4-1-0-10-currying",id:"react/functional-programming-with-javascript/4-1-0-10-currying",title:"\ud83d\udcd3 4.1.0.10 Currying",description:"Currying is an essential functional programming concept named after the mathematician Haskell Curry.",source:"@site/docs/4_react/1_functional-programming-with-javascript/AJ-4-1-0-10-currying.md",sourceDirName:"4_react/1_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/4-1-0-10-currying",permalink:"/react/functional-programming-with-javascript/4-1-0-10-currying",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 4.1.0.10 Currying",day:"weekend",id:"4-1-0-10-currying",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\ud83d\udcd3 4.1.0.9 Closures",permalink:"/react/functional-programming-with-javascript/4-1-0-9-closures"},next:{title:"\ud83d\udcd3 4.1.0.11 Map, Reduce and Filter",permalink:"/react/functional-programming-with-javascript/4-1-0-11-map-reduce-and-filter"}},u={},c=[],s={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Currying")," is an essential functional programming concept named after the mathematician Haskell Curry."),(0,a.kt)("p",null,"When we ",(0,a.kt)("strong",{parentName:"p"},"curry")," a function, we take a function with multiple arguments and then rewrite it as a series of functions, each with one argument. A function with only one argument is also known as an ",(0,a.kt)("strong",{parentName:"p"},"unary function"),"."),(0,a.kt)("p",null,"Let's use currying to write a function to display our favorite (and not-so-favorite) things."),(0,a.kt)("p",null,"Here's how the uncurried function might look:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function aThingIMaybeLike(howMuchILikeIt, thing, reason) {\n  return `I ${howMuchILikeIt} ${thing} because ${reason}.`;\n}\n")),(0,a.kt)("p",null,"We could then call it like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'aThingIMaybeLike("really like", "functional programming", "it\'s cool");\n')),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},'"I really like functional programming because it\'s cool."')),(0,a.kt)("p",null,"We can curry this function by creating a series of nested anonymous functions inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"aThingIMaybeLike()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function aThingIMaybeLike(howMuchILikeIt) {\n  return function(thing) {\n    return function(reason) {\n      return `I ${howMuchILikeIt} ${thing} because ${reason}.`;\n    }\n  }\n}\n")),(0,a.kt)("p",null,"Each of these functions now take a single argument. In order to use this code, we need to do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'aThingIMaybeLike("really like")("functional programming") ("it\'s cool")\n')),(0,a.kt)("p",null,"In the snippet above:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Our outer function ",(0,a.kt)("inlineCode",{parentName:"p"},"aThingIMaybeLike(howMuchILikeIt)")," takes ",(0,a.kt)("inlineCode",{parentName:"p"},'"really like"')," as an argument. When the function is invoked, it calls the first inner function ",(0,a.kt)("inlineCode",{parentName:"p"},"function(thing)"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Our first inner function ",(0,a.kt)("inlineCode",{parentName:"p"},"function(thing)")," is then invoked with the second argument ",(0,a.kt)("inlineCode",{parentName:"p"},'"functional programming"'),". It, too, returns a function: the innermost anonymous ",(0,a.kt)("inlineCode",{parentName:"p"},"function(reason)"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Finally, our innermost function returns the string ",(0,a.kt)("inlineCode",{parentName:"p"},'"I really like functional programming because it\'s cool."')))),(0,a.kt)("p",null,"However, what's the point? Didn't we just write additional code to essentially do the same thing?"),(0,a.kt)("p",null,"In the short term, yes. However, our curried function has additional powers: it's both more reusable and more flexible."),(0,a.kt)("p",null,"For instance, we can do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const thingsThatBugMe = aThingIMaybeLike("do not like");\n')),(0,a.kt)("p",null,"Now we can call this with the inner two arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'thingsThatBugMe("global variables")("they are a code smell");\n> \'I do not like global variables because they are a code smell.\'\nthingsThatBugMe("functions with side effects")("they break code");\n> \'I do not like functions with side effects because they break code.\'\n')),(0,a.kt)("p",null,"We have additional flexibility to do this with multiple arguments as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const reasonILoveCoding = aThingIMaybeLike("love")("coding");\n')),(0,a.kt)("p",null,"If we try this out in the REPL, we'll see we can call our new function with just a single argument."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"> reasonILoveCoding(\"it is fun\");\n'I love coding because it is fun.'\n> reasonILoveCoding(\"I enjoy problem-solving\");\n'I love coding because I enjoy problem-solving.'\n")),(0,a.kt)("p",null,"Let's briefly return to our original function that takes three arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function aThingIMaybeLike(howMuchILikeIt, thing, reason) {\n  return `I ${howMuchILikeIt} ${thing} because ${reason}.`;\n}\n")),(0,a.kt)("p",null,"This method may be fewer lines but it doesn't have nearly as much flexibility as our curried version. It has no reusability while we were able to use our curried function to create new functions that use 1, 2 or 3 arguments."),(0,a.kt)("p",null,"Over the next few class sessions, try writing unary functions. Because each function should take only one argument, you will need to curry functions that would otherwise take multiple arguments. Note that you won't always be able to create an unary function. However, if a function takes too many arguments, that may also be a sign that it's trying to do too much."),(0,a.kt)("p",null,"Currying is another complex concept that often takes some time to absorb. Don't worry \u2014 you will get more practice and we will cover more use cases in upcoming lessons."))}m.isMDXComponent=!0}}]);