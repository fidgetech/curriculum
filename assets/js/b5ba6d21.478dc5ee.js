"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[87057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,f=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"\ud83d\udcd3 2.2.1.9 Expanding our Testing Tools: Adding Setup and Teardown",day:"monday",id:"2-2-1-9-expanding-our-testing-tools-adding-setup-and-teardown",hide_table_of_contents:!0},o=void 0,s={unversionedId:"intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-1-9-expanding-our-testing-tools-adding-setup-and-teardown",id:"intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-1-9-expanding-our-testing-tools-adding-setup-and-teardown",title:"\ud83d\udcd3 2.2.1.9 Expanding our Testing Tools: Adding Setup and Teardown",description:"In the last lesson, we wrote six tests for a triangle tracker application. In each test, we needed to instantiate a Triangle object to test either the constructor or the Triangle.prototype.checkType() method. These Triangle objects were all different, but what would happen if we needed to instantiate the same Triangle object for many tests?",source:"@site/docs/2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript/BC-2-2-1-9-expanding-our-testing-tools-adding-setup-and-teardown.md",sourceDirName:"2_intermediate-javascript/2_test-driven-development-and-environments-with-javascript",slug:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-1-9-expanding-our-testing-tools-adding-setup-and-teardown",permalink:"/v1.2/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-1-9-expanding-our-testing-tools-adding-setup-and-teardown",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 2.2.1.9 Expanding our Testing Tools: Adding Setup and Teardown",day:"monday",id:"2-2-1-9-expanding-our-testing-tools-adding-setup-and-teardown",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.2.1.8 Testing Best Practices",permalink:"/v1.2/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-1-8-testing-best-practices"},next:{title:"\ud83d\udcd3 2.2.1.10 Improving Test Reports: Adding Test Coverage Information",permalink:"/v1.2/intermediate-javascript/test-driven-development-and-environments-with-javascript/2-2-1-10-improving-test-reports-adding-test-coverage-information"}},l={},d=[{value:"Using <code>beforeEach()</code> and <code>afterEach()</code>",id:"using-beforeeach-and-aftereach",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the last lesson, we wrote six tests for a triangle tracker application. In each test, we needed to instantiate a ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," object to test either the constructor or the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.prototype.checkType()")," method. These ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," objects were all different, but what would happen if we needed to instantiate the same ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," object for many tests?"),(0,r.kt)("p",null,"This is a very common use case because we might want to instantiate the same object in different tests so you can test it in different ways. Fortunately, testing frameworks like Jest account for this by having additional methods for ",(0,r.kt)("strong",{parentName:"p"},"setup")," and ",(0,r.kt)("strong",{parentName:"p"},"teardown")," between tests. Setup is commonly used for instantiating variables and objects. Teardown is used for reinitializing objects or any variables that don't automatically fall out of scope between tests."),(0,r.kt)("p",null,"We can use Jest's ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach()")," function for setup and ",(0,r.kt)("inlineCode",{parentName:"p"},"afterEach()")," function for teardown."),(0,r.kt)("h2",{id:"using-beforeeach-and-aftereach"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"beforeEach()")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"afterEach()")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's imagine that we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," object that we want to reuse for multiple tests."),(0,r.kt)("p",null,"If this is the case, we'd use ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach()")," to DRY up the code. Here's an example:"),(0,r.kt)("div",{class:"filename"},"__tests__/triangle.test.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"...\ndescribe('show how beforeEach() works', () => {\n  let reusableTriangle;\n\n  beforeEach(() => {\n    reusableTriangle = new Triangle(5, 5, 5);\n  });\n\n  test('should use the resuableTriangle and update the value of one side', () => {\n    reusableTriangle.side1 = 6;\n    console.log(reusableTriangle);\n  });\n\n  test('should show how this reusableTriangle is reset to sides of 5', () => {\n    console.log(reusableTriangle);\n  });\n});\n")),(0,r.kt)("p",null,"Here we declare ",(0,r.kt)("inlineCode",{parentName:"p"},"reusableTriangle")," in the top-level scope of the ",(0,r.kt)("inlineCode",{parentName:"p"},"describe()")," function, and because of this, we can call on ",(0,r.kt)("inlineCode",{parentName:"p"},"reusableTriangle")," from within any test. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach()")," function assigns an instantiated ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," object to the ",(0,r.kt)("inlineCode",{parentName:"p"},"reusableTriangle")," variable. The ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach()")," function is run before each test is run, so a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," object will be created and set as the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"reusableTriangle")," before each test! "),(0,r.kt)("p",null,"A nice benefit of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach()")," function to define our example ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," object is that we now  don't need to do this in each test, which makes our code more DRY. "),(0,r.kt)("p",null,"If we run our tests, we'll see that the value of the first ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," is printed to the terminal: ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle { side1: 6, side2: 5, side3: 5 }"),". It may come as a bit of a surprise that ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," prints to the terminal, but that is built-in functionality that Node provides. The benefits of ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," aren't limited to the browser!"),(0,r.kt)("p",null,"Then in the second ",(0,r.kt)("inlineCode",{parentName:"p"},"consolg.log()")," message, we'll see that the triangle's sides have all been reset to 5: ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle { side1: 5, side2: 5, side3: 5 }")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Take note")," that the example above will not be helpful for the Shape Tracker project, since we need to instantiate different triangles for each test to determine the triangle's type."),(0,r.kt)("p",null,"There's also an ",(0,r.kt)("inlineCode",{parentName:"p"},"afterEach()")," function as well. The code inside of the ",(0,r.kt)("inlineCode",{parentName:"p"},"afterEach()")," function is run after each test has been run."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"afterEach(() => {\n  // this code is run after each test\n});\n")),(0,r.kt)("p",null,"This function is particularly useful if you need to perform some kind of teardown after each test. For instance, if data from one test somehow ends up in another test, it could result in a failed test or other unexpected behavior. "),(0,r.kt)("p",null,"Check the documentation on ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/setup-teardown"},"setup and teardown")," for more information."))}u.isMDXComponent=!0}}]);