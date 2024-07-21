"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[69121],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(o),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return o?r.createElement(m,a(a({ref:t},p),{},{components:o})):r.createElement(m,a({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<s;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},57793:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const s={title:"\ud83d\udcd3 3.0.0.33 Review: the Red, Green, Refactor Workflow and Testing Best Practices",day:"weekend",id:"3-0-0-33-review-the-red-green-refactor-workflow-and-testing-best-practices",hide_table_of_contents:!0},a=void 0,i={unversionedId:"c-and-net/lessons-32-44-tdd-and-debugging/3-0-0-33-review-the-red-green-refactor-workflow-and-testing-best-practices",id:"c-and-net/lessons-32-44-tdd-and-debugging/3-0-0-33-review-the-red-green-refactor-workflow-and-testing-best-practices",title:"\ud83d\udcd3 3.0.0.33 Review: the Red, Green, Refactor Workflow and Testing Best Practices",description:"In this lesson, we're going to take a more in-depth look at Test-Driven Development (TDD), the Red-Green-Refactor (RGR) workflow, and testing best practices.",source:"@site/docs/3_c-and-net/0_lessons-32-44-tdd-and-debugging/AB-3-0-0-33-review-the-red-green-refactor-workflow-and-testing-best-practices.md",sourceDirName:"3_c-and-net/0_lessons-32-44-tdd-and-debugging",slug:"/c-and-net/lessons-32-44-tdd-and-debugging/3-0-0-33-review-the-red-green-refactor-workflow-and-testing-best-practices",permalink:"/v1.2/c-and-net/lessons-32-44-tdd-and-debugging/3-0-0-33-review-the-red-green-refactor-workflow-and-testing-best-practices",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.0.0.33 Review: the Red, Green, Refactor Workflow and Testing Best Practices",day:"weekend",id:"3-0-0-33-review-the-red-green-refactor-workflow-and-testing-best-practices",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.0.0.32 What We'll Learn in this Section",permalink:"/v1.2/c-and-net/lessons-32-44-tdd-and-debugging/3-0-0-32-what-well-learn-in-this-section"},next:{title:"\ud83d\udcd3 3.0.0.34 MSTest Configuration and Setup",permalink:"/v1.2/c-and-net/lessons-32-44-tdd-and-debugging/3-0-0-34-mstest-configuration-and-setup"}},l={},c=[{value:"Test-Driven Development Workflow",id:"test-driven-development-workflow",level:2},{value:"Red, Green, Refactor",id:"red-green-refactor",level:2},{value:"1. Identify the Simplest Possible Behavior",id:"1-identify-the-simplest-possible-behavior",level:3},{value:"2. Write a Coded Test",id:"2-write-a-coded-test",level:3},{value:'3. <font color="red">Make Sure the Test Fails</font>',id:"3-make-sure-the-test-fails",level:3},{value:"4. Implement the Behavior with the <em>Least</em> Amount of Code Possible",id:"4-implement-the-behavior-with-the-least-amount-of-code-possible",level:3},{value:'5. <font color="green"> Run the Test to Confirm it Passes</font>',id:"5--run-the-test-to-confirm-it-passes",level:3},{value:'6. <font color="green"> Make Sure Previous Tests Still Pass</font>',id:"6--make-sure-previous-tests-still-pass",level:3},{value:'7. <strong><font color="blue">Check if Code Can Be Refactored.</font></strong>',id:"7-font-colorbluecheck-if-code-can-be-refactoredfont",level:3},{value:"8.  Commit your code!",id:"8--commit-your-code",level:3},{value:"9. Repeat",id:"9-repeat",level:3},{value:"Best Practices",id:"best-practices",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this lesson, we're going to take a more in-depth look at Test-Driven Development (TDD), the Red-Green-Refactor (RGR) workflow, and testing best practices."),(0,n.kt)("h2",{id:"test-driven-development-workflow"},"Test-Driven Development Workflow"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Here's the set of steps we should follow when implementing Test-Driven Development: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Identify the simplest possible behavior the program must exhibit."),(0,n.kt)("li",{parentName:"ol"},"Write a coded test for this behavior."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("font",{color:"red"},"Confirm the test fails, before coding any business logic.")),(0,n.kt)("li",{parentName:"ol"},"Implement the behavior in your business logic with the least amount of code possible."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("font",{color:"green"},"Run the automated test to confirm it passes. (If it doesn't, revisit step 4.)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("font",{color:"green"},"Confirm all previous tests still pass.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("font",{color:"blue"},"Check if code can be refactored. If so, refactor and repeat step 6.")),(0,n.kt)("li",{parentName:"ol"},"Commit your passing code."),(0,n.kt)("li",{parentName:"ol"},"Repeat this process with the next simplest behavior.")),(0,n.kt)("h2",{id:"red-green-refactor"},"Red, Green, Refactor"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"We can easily remember the TDD process with a simple mnemonic: ",(0,n.kt)("strong",{parentName:"p"},'"Red, Green, Refactor"'),", or the RGR workflow. Let's walk through each step in greater detail:"),(0,n.kt)("h3",{id:"1-identify-the-simplest-possible-behavior"},"1. Identify the Simplest Possible Behavior"),(0,n.kt)("p",null,"We first identify the simplest behavior the program must exhibit. We always start simple and move to more complex tasks in order to break large problems down into manageable and achievable steps."),(0,n.kt)("p",null,"Ideally, this behavior you identify should remain true for the life of the program; if not, you'll simply have to refactor later on. "),(0,n.kt)("p",null,"Keep in mind that there's often ",(0,n.kt)("strong",{parentName:"p"},"multiple simplest behaviors")," and ",(0,n.kt)("strong",{parentName:"p"},"many places to start"),". It's okay if the simplest possible behavior that you identify is not the same as the one that your pair has identified. For example, in an application that translates English to Pig Latin, we might have this be our first simplest behavior:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Example input: ",(0,n.kt)("inlineCode",{parentName:"li"},"3")),(0,n.kt)("li",{parentName:"ul"},"Example output: ",(0,n.kt)("inlineCode",{parentName:"li"},"3"))))),(0,n.kt)("p",null,"Or, we might have this be our first simplest behavior:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The program adds 'ay' to the end of a single-letter word beginning with a vowel.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Example input: ",(0,n.kt)("inlineCode",{parentName:"li"},'"I"')),(0,n.kt)("li",{parentName:"ul"},"Example output: ",(0,n.kt)("inlineCode",{parentName:"li"},'"Iay"'))))),(0,n.kt)("h3",{id:"2-write-a-coded-test"},"2. Write a Coded Test"),(0,n.kt)("p",null,"After identifying the simplest behavior, we write a coded test for the behavior. "),(0,n.kt)("p",null,"Since we write the test before the corresponding business logic, we'll be defining the names and functionality of our class, fields/properties, methods, etc. in the test first. Effectively, this means that we use the business logic before the business logic has been defined. Sometimes this feels backwards to students. However, with some practice this will become second nature. Remember that this is the cornerstone of TDD: it's ",(0,n.kt)("em",{parentName:"p"},"test-driven"),", not ",(0,n.kt)("em",{parentName:"p"},"code-driven"),". "),(0,n.kt)("h3",{id:"3-make-sure-the-test-fails"},"3. ",(0,n.kt)("font",{color:"red"},"Make Sure the Test Fails")),(0,n.kt)("p",null,"Before we add code to create the behavior we must confirm this test fails. This is the ",(0,n.kt)("font",{color:"red"},"red"),' part of "Red, Green, Refactor", because failing tests usually display ',(0,n.kt)("font",{color:"red"},"red text"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"It's important to always write each test so that it passes.")," This means you should never write your test so that it fails, and then update it later to pass; the tests we write are the gold standard for our business logic; any code we change in our tests should be due to a refactor, and not to fail/pass the tests."),(0,n.kt)("p",null,"If we are using code that doesn't exist yet, we'll get an error message from the compiler before we can even run our test to get a failing response. Well, when we're first running our test to confirm it fails, ",(0,n.kt)("strong",{parentName:"p"},"compiler errors count as a failed test.")," This is very different from JavaScript, but necessary for code that's compiled ahead of time."),(0,n.kt)("p",null,"Sometimes tests will incorrectly pass, usually due to being written incorrectly. If a test passes ",(0,n.kt)("em",{parentName:"p"},"before")," we add the behavior it is testing, something is wrong. This is an indication that we should take a closer look at the test itself before adding logic."),(0,n.kt)("h3",{id:"4-implement-the-behavior-with-the-least-amount-of-code-possible"},"4. Implement the Behavior with the ",(0,n.kt)("em",{parentName:"h3"},"Least")," Amount of Code Possible"),(0,n.kt)("p",null,"After confirming our new test fails, we add just enough logic in our source code to make it pass. Only adding the bare minimum keeps code DRY (Don't Repeat Yourself), and keeps us organized by ensuring we're focusing on one behavior at a time."),(0,n.kt)("h3",{id:"5--run-the-test-to-confirm-it-passes"},"5. ",(0,n.kt)("font",{color:"green"}," Run the Test to Confirm it Passes")),(0,n.kt)("p",null,"We then run the test(s) again to confirm they pass. This is the ",(0,n.kt)("font",{color:"Green"},"green"),' part of "Red, Green, Refactor, because passing tests usually display ',(0,n.kt)("font",{color:"green"},"green text"),"."),(0,n.kt)("p",null,"If the tests don't pass, we read failure messages carefully. They should describe why the test failed. Repeat steps 4 and make changes accordingly. Run test(s) again after making any changes. Do not move on to subsequent behaviors until the current test passes."),(0,n.kt)("p",null,"Finally, when your tests are passing \u2014 commit your code!"),(0,n.kt)("h3",{id:"6--make-sure-previous-tests-still-pass"},"6. ",(0,n.kt)("font",{color:"green"}," Make Sure Previous Tests Still Pass")),(0,n.kt)("p",null,"Any time we have more than one test, we must confirm that adding the new tests hasn't broken previous tests. This is also the ",(0,n.kt)("font",{color:"Green"},"green"),' part of "Red, Green, Refactor".'),(0,n.kt)("p",null,"If any tests fail, carefully read the error messages and revisit the logic. If you followed TDD closely, you'll know ",(0,n.kt)("em",{parentName:"p"},"with certainty")," that the most-recently implemented code caused this error. Address the bug, run tests again, and continue to read any error messages. Repeat this process until all tests pass."),(0,n.kt)("p",null,"Again, whenever you have passing tests, make a commit. "),(0,n.kt)("h3",{id:"7-font-colorbluecheck-if-code-can-be-refactoredfont"},"7. ",(0,n.kt)("strong",{parentName:"h3"},(0,n.kt)("font",{color:"blue"},"Check if Code Can Be Refactored."))),(0,n.kt)("p",null,"At any point we can pause to refactor our code, if possible. This is the ",(0,n.kt)("font",{color:"blue"},"refactor"),' part of "Red, Green, Refactor". If we\'re able to refactor ',(0,n.kt)("strong",{parentName:"p"},"repeat step 6")," to confirm tests still pass."),(0,n.kt)("h3",{id:"8--commit-your-code"},"8.  Commit your code!"),(0,n.kt)("p",null,"You should always commit after each passing test. Think of it as being like a save point where all is well and everything is working correctly \u2014 you can always return to this save point later if your code goes south. Also, in the real world, we'll always want to commit after each passing test anyway to document our work. Just to clarify, you should commit not only the updated source code but also the updated tests."),(0,n.kt)("h3",{id:"9-repeat"},"9. Repeat"),(0,n.kt)("p",null,"We continue repeating this process for every incremental behavior until the application is complete. After addressing the simplest possible behavior, move to the ",(0,n.kt)("em",{parentName:"p"},"next simplest"),", then the ",(0,n.kt)("em",{parentName:"p"},"next"),", until all behaviors the program requires are present."),(0,n.kt)("h2",{id:"best-practices"},"Best Practices"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Compiler errors count as a failed test.")," In our C# apps that are compiled Ahead-Of-Time, we'll get compiler errors anytime the compiler can't complete its work of creating an executable file for our program. Though compiler errors won't catch all errors within the apps we write, they will catch a lot of issues: typos, types or variables that don't exist in the current context, and more. Because we write our tests before corresponding business logic is created, we can use compiler errors as failed tests that demonstrate that there are no false positives."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Read the error messages.")," Any error that's generated in the process of testing (from the compiler or MSTest itself) should be carefully read. These error messages can help you distinguish between an issue with compiling or an issue with how you wrote your business logic."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Good unit tests should cover not just expected inputs but also edge cases.")," An ",(0,n.kt)("strong",{parentName:"p"},"edge case")," can occur when an extreme or unusual parameter is passed into a method. For example, a method that calculates a person's overall health partly based on their age may not correctly account for a person that is 117 years old."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Write tests for distinct behaviors.")," Often a function just needs one test, because it does one thing. However, if our function does multiple things, we should consider having a test for each behavior. This improves how easy to understand our code and tests are. It's OK to have multiple expectations for a single test. However, if a test has many expectations it can be a red flag that the test may cover multiple distinct behaviors and may need to be broken into multiple tests to improve comprehension."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Write tests for every path in a method.")," A ",(0,n.kt)("strong",{parentName:"p"},"path")," in computer programming is a possible route that our program can take, usually due to branching: if X condition exists, then do this; else, do that. If a method has branching in it, it means it has multiple paths/outcomes, and we need to write a test for each possible path/outcome."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Keep the code in your test to a minimum.")," In your tests, you should only write code that's required to run the piece of business logic that you are testing for. This usually involves invoking the business logic function you are testing and not much more. Adding more code than that can create problems by introducing bugs that are unrelated to our business logic. We want to isolate problems in our code, not create more problems by adding unnecessary code in our tests."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Always commit your code after each passing test.")," This is part of having a strong commit history. Also, if you break your code and can't get it working again, you can always return to a commit where all tests are passing."),(0,n.kt)("p",null,"Writing automated tests for all business logic using the RGR workflow will be required in every application moving forward. Bookmark this lesson and refer back to it as you code. You're not expected to memorize each step immediately. But follow this workflow closely as you code upcoming projects. Pretty soon, it'll become second nature!"))}u.isMDXComponent=!0}}]);