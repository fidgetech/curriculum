"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[48983],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=u(o),c=a,m=d["".concat(l,".").concat(c)]||d[c]||p[c]||i;return o?n.createElement(m,r(r({ref:t},h),{},{components:o})):n.createElement(m,r({ref:t},h))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},55475:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=o(87462),a=(o(67294),o(3905));const i={title:"\ud83d\udcd3 2.1.3.2 Introduction to Whiteboarding",day:"wednesday",id:"2-1-3-2-introduction-to-whiteboarding",hide_table_of_contents:!0},r=void 0,s={unversionedId:"intermediate-javascript/object-oriented-javascript/2-1-3-2-introduction-to-whiteboarding",id:"version-1.1/intermediate-javascript/object-oriented-javascript/2-1-3-2-introduction-to-whiteboarding",title:"\ud83d\udcd3 2.1.3.2 Introduction to Whiteboarding",description:"Many jobs have a multi-step interview process that includes a technical interview where you'll whiteboard a solution to a coding problem. Whiteboarding is the process of solving a coding problem on a dry erase whiteboard. It can be a very stressful process, even for experienced developers, and the practice has fallen out of favor in some tech companies. Proponents of whiteboarding argue that it's a quick way to get a sense of someone's actual coding ability. However, there are a number of issues with whiteboarding as well:",source:"@site/versioned_docs/version-1.1/2_intermediate-javascript/1_object-oriented-javascript/AW-2-1-3-2-introduction-to-whiteboarding.md",sourceDirName:"2_intermediate-javascript/1_object-oriented-javascript",slug:"/intermediate-javascript/object-oriented-javascript/2-1-3-2-introduction-to-whiteboarding",permalink:"/v1.1/intermediate-javascript/object-oriented-javascript/2-1-3-2-introduction-to-whiteboarding",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 2.1.3.2 Introduction to Whiteboarding",day:"wednesday",id:"2-1-3-2-introduction-to-whiteboarding",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\u270f\ufe0f 2.1.3.1 Game of Choice",permalink:"/v1.1/intermediate-javascript/object-oriented-javascript/2-1-3-1-game-of-choice"},next:{title:"\ud83d\udcd3 2.1.3.3 Switch Cases",permalink:"/v1.1/intermediate-javascript/object-oriented-javascript/2-1-3-3-switch-cases"}},l={},u=[{value:"Whiteboard Interview Steps",id:"whiteboard-interview-steps",level:2},{value:"Talking Through the Problem",id:"talking-through-the-problem",level:3},{value:"1. Ask clarifying questions.",id:"1-ask-clarifying-questions",level:4},{value:"2. Talk through the most basic solution.",id:"2-talk-through-the-most-basic-solution",level:4},{value:"3. Optionally, break your function down into a series of steps that you list on the whiteboard.",id:"3-optionally-break-your-function-down-into-a-series-of-steps-that-you-list-on-the-whiteboard",level:4},{value:"4. Talk through a better solution if possible.",id:"4-talk-through-a-better-solution-if-possible",level:4},{value:"Whiteboarding the Problem",id:"whiteboarding-the-problem",level:3},{value:"1. Write example inputs and outputs.",id:"1-write-example-inputs-and-outputs",level:4},{value:"2. Use space wisely and write clearly.",id:"2-use-space-wisely-and-write-clearly",level:4},{value:"3. Verbalize your process.",id:"3-verbalize-your-process",level:4},{value:"4. Test your solution.",id:"4-test-your-solution",level:4},{value:"5. Admit when you don\u2019t know something.",id:"5-admit-when-you-dont-know-something",level:4},{value:"Sample Whiteboarding Prompts",id:"sample-whiteboarding-prompts",level:2},{value:"Recommended Resources",id:"recommended-resources",level:2}],h={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Many jobs have a multi-step interview process that includes a technical interview where you'll ",(0,a.kt)("strong",{parentName:"p"},"whiteboard")," a solution to a coding problem. ",(0,a.kt)("strong",{parentName:"p"},"Whiteboarding")," is the process of solving a coding problem on a dry erase whiteboard. It can be a very stressful process, even for experienced developers, and the practice has fallen out of favor in some tech companies. Proponents of whiteboarding argue that it's a quick way to get a sense of someone's actual coding ability. However, there are a number of issues with whiteboarding as well:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Whiteboarding doesn't accurately simulate a real-world environment where we have documentation, a code editor, and other resources at our disposal."),(0,a.kt)("li",{parentName:"ul"},"Whiteboarding can disadvantage people from underrepresented groups that might already have to contend with going through an interview process at a company that likely is already lacking in diversity.")),(0,a.kt)("p",null,"As a result, some companies don't do whiteboarding technical interviews. Instead, they might do an interview about technical concepts (with no whiteboarding involved) or you might get a take-home test where you have a certain amount of time to solve the problem on your own. In the latter situation, you'll often have a follow-up interview where you'll be asked to walk through your code."),(0,a.kt)("p",null,"However, whiteboarding is still a common part of the interview process \u2014 and the best way to get better at whiteboarding is to learn how to do it and then practice until you're comfortable with it."),(0,a.kt)("p",null,'We provide whiteboards in person at Epicodus. For students working remotely, you may want to get a personal whiteboard to practice on. At Epicodus, students often use 9" x 12" whiteboards to practice, so if you want to get one for personal use, this size is available at a low price point online.'),(0,a.kt)("p",null,"The act of whiteboarding is ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"very"))," different from writing code in a text editor. That's why we recommend that you practice on an actual whiteboard \u2014 though it's also fine to practice with pen and paper, a blackboard, or for that matter, even with chalk on a sidewalk or a dry-erase marker on a bathroom mirror. The point is to get away from your computer and to actually ",(0,a.kt)("em",{parentName:"p"},"write")," out your code without referring to any documentation."),(0,a.kt)("p",null,"In this lesson, we'll walk through the process of how to whiteboard. Even if you can't solve the problem you're given, you can use this process to solve as much of the problem as you can."),(0,a.kt)("p",null,"We'll use a very simple problem as an example. Let's say an interviewer asks us to write a function that adds two numbers together. What follows is the process we'd go through to whiteboard this problem. This same process will apply regardless of the difficulty of the question. In fact, you'll never get a whiteboard problem as simple as the one we are using as an example. However, we want to focus on the ",(0,a.kt)("em",{parentName:"p"},"process")," itself in this lesson, not the problem to be solved."),(0,a.kt)("h2",{id:"whiteboard-interview-steps"},"Whiteboard Interview Steps"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Our interviewer has asked us a whiteboard question: write a function that adds two numbers together. However, we won't start coding yet. The first part of a whiteboard interview is to talk through the problem."),(0,a.kt)("h3",{id:"talking-through-the-problem"},"Talking Through the Problem"),(0,a.kt)("h4",{id:"1-ask-clarifying-questions"},"1. Ask clarifying questions."),(0,a.kt)("p",null,"First, we need to ask clarifying questions. Your interviewer may intentionally be vague about something or leave out information. Don't be shy about asking for clarification or more information. "),(0,a.kt)("p",null,"Also, when asking clarifying questions we should be considering ",(0,a.kt)("strong",{parentName:"p"},"edge cases"),", which are extreme use cases. When you consider extreme use cases, you are considering what happens when we pass in an unexpected input to our function."),(0,a.kt)("p",null,"Here are some questions that we could ask about a function that adds two numbers together:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Can we assume that both arguments are numbers or could they be strings or another datatype?"),(0,a.kt)("li",{parentName:"ul"},"Should the function be able to add floating point numbers (decimals)?"),(0,a.kt)("li",{parentName:"ul"},"How should the function respond if ",(0,a.kt)("inlineCode",{parentName:"li"},"NaN")," is passed in as a number?"),(0,a.kt)("li",{parentName:"ul"},"What should the function return?")),(0,a.kt)("p",null,"There's nothing wrong with being thorough here. For example, the fourth question above probably seems obvious \u2014 this function should just return the sum! But it's often not obvious in an interview. And what if we'd missed a small but crucial piece of information where the interviewer asked us to sum the numbers ",(0,a.kt)("em",{parentName:"p"},"and then")," return whether the sum is positive or negative? By asking clarifying questions, we are actively communicating and thinking about the problem."),(0,a.kt)("h4",{id:"2-talk-through-the-most-basic-solution"},"2. Talk through the most basic solution."),(0,a.kt)("p",null,"We're still not ready to start coding yet. At this point, we can talk through what our function will do. This should be the most basic implementation. We might say something like this:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\"I'm going to write a function named 'add' that will take two parameters. Since you mentioned that we can't assume that the arguments passed into our parameters will be numbers, we will use 'parseInt' to convert them to numbers if possible. If they can't be converted to numbers, our function will return a string that says 'please input a number'. Otherwise, if the arguments are numbers or are strings that can be converted into numbers, our function will add them together and then return the sum.\"")),(0,a.kt)("p",null,"Here we've talked through the problem and how we'll solve it. Even if we have issues writing out the code, we already have a good start \u2014 and verbalizing the problem should help us write it down, too. Note that we added a wrinkle to our problem \u2014 our function might be accepting values that aren't numbers. That doesn't just affect the function itself \u2014 that affects what it returns. That means the clarifying questions we asked in step #1 were necessary to help solve our problem."),(0,a.kt)("h4",{id:"3-optionally-break-your-function-down-into-a-series-of-steps-that-you-list-on-the-whiteboard"},"3. Optionally, break your function down into a series of steps that you list on the whiteboard."),(0,a.kt)("p",null,"You could write out these steps in pseudocode or just plain English. Doing this can be helpful if you are feeling particularly nervous, because it can give you a point of reference to refer back to if your mind goes blank or you freeze. "),(0,a.kt)("p",null,"Otherwise, it's particularly helpful to do this if the problem you are solving is particularly challenging and complex. Listing out the functionality that your function must have in steps can help you brainstorm in a structured way before you begin to actually code the function."),(0,a.kt)("h4",{id:"4-talk-through-a-better-solution-if-possible"},"4. Talk through a better solution if possible."),(0,a.kt)("p",null,"If we are interviewing for more advanced engineering roles, we'll likely be asked to solve a problem that has both inefficient and efficient answers. That's beyond where we are currently at right now! However, we can always look for opportunities to make our code better. Here's an example for this problem:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\"The solution I've already suggested is the most basic implementation but we can improve it further. A function for adding numbers shouldn't really be returning a string. So let's have it return ",(0,a.kt)("inlineCode",{parentName:"p"},"NaN")," instead if something isn't a number \u2014 and we can always have another function that returns a user message if needed. Alternatively, we could have a separate function that checks whether the parameters are numbers first before passing them into our add function. Would you prefer one or the other or should we just stick with our most basic solution?\"")),(0,a.kt)("p",null,"Even with this very basic example, we found a way to think about improving our code. It's a best practice to keep our functions simple and focused on one thing. That makes our code more modular and easier to scale up and refactor. This best practice is called ",(0,a.kt)("strong",{parentName:"p"},"separation of concerns"),"."),(0,a.kt)("p",null,"If possible, we should always talk through a better implementation. Even if we are only able to code the basic implementation, the interviewer knows that we have ideas for improving our code."),(0,a.kt)("p",null,"Now we're ready to actually start coding!"),(0,a.kt)("h3",{id:"whiteboarding-the-problem"},"Whiteboarding the Problem"),(0,a.kt)("h4",{id:"1-write-example-inputs-and-outputs"},"1. Write example inputs and outputs."),(0,a.kt)("p",null,"Listing inputs and outputs will state the data types that should go into and be return from the function. Later, you can use these inputs and outputs to manually test the function that you wrote. Make sure to list inputs and outputs for every case that your function should handle. We could start with something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"input: 7 and -5\noutput: 2\n")),(0,a.kt)("p",null,'We might say: "When I pass 7 and -5 into the function, I expect them to be added together and return 2."'),(0,a.kt)("p",null,"We could be more thorough:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'input: 3, -8\noutput: -5\n\ninput: "7", 5\noutput: 12\n\ninput: "wow!", 0\noutput: NaN\n')),(0,a.kt)("p",null,"Then we might say:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\"Here are a few different arguments the function should take. In the first example, our function should return -5. In the second, it should parse the string 7 and return a sum of 12. In the final example, we can't parse 'wow!' so we'll want our function to return NaN.\"")),(0,a.kt)("p",null,"Being more thorough in this process is helpful, because it can help you identify more cases that your function should handle. Think of this process as a structured brainstorming session that can help you prepare for actually writing the function."),(0,a.kt)("h4",{id:"2-use-space-wisely-and-write-clearly"},"2. Use space wisely and write clearly."),(0,a.kt)("p",null,"This is more challenging when working with small whiteboards. However, you'll likely be working with a full-sized whiteboard in an interview. Even so, it's easy to run out of space! You should do the following when writing out your code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Start at the top left corner of the whiteboard.")," That way you'll have plenty of space to work with. Too often, we see students starting in the middle of the whiteboard \u2014 and then they run out of space."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Give yourself ample space between each line.")," Think of this as making each line double-spaced \u2014 with about the same height of whitespace as the code you are writing. This is because you may well need to go back and add additional code as you refactor the problem \u2014 or even if you realize you've forgotten to write a line of code or have made a mistake. This way, you'll have the space to add that code in."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Write clearly.")," This is hard for many people \u2014 especially since we spend so much more time typing than handwriting these days. Make sure your handwriting is clear and not too small. If you think it might be difficult for your interviewer to read the code, that's not a good sign. How will they be able to tell if you've written good code or not?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Use descriptive variable names, and proper syntax and indentation.")," This demonstrates your attention to detail and it is an absolute must.")),(0,a.kt)("h4",{id:"3-verbalize-your-process"},"3. Verbalize your process."),(0,a.kt)("p",null,"This is very challenging at first, but you should be talking through the problem ",(0,a.kt)("em",{parentName:"p"},"while")," you are solving it. ",(0,a.kt)("strong",{parentName:"p"},"More than anything your interviewer wants to understand your problem solving process.")," Verbalizing what's happening can feel a bit like patting your head and rubbing your tummy at the same time \u2014 but it does get easier with practice. So we might be writing something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function add(num1, num2) {\n\n}\n")),(0,a.kt)("p",null,"Meanwhile, we might be saying this:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"We want our function and parameter names to be clear and concise. Add seems like a good name, and num1 and num2 are concise but clearly state that the function takes two numbers. And our function needs to take two arguments because it\'s adding two numbers together."')),(0,a.kt)("h4",{id:"4-test-your-solution"},"4. Test your solution."),(0,a.kt)("p",null,"Once you are done, walk through your solution by passing in the example inputs you listed earlier in this process. You should describe each line of code as the input passes through the function. Make sure to work through all of the example inputs you previously listed to ensure that you've tested for every case that your function should handle."),(0,a.kt)("p",null,"The goal of this process is to verify that your solution is correct. It gives you an opportunity to catch any issues before your interviewer does, and in the process, you may also find ways to refactor your code. If your input doesn't arrive at the expected output, well that's a sure sign that you need to fix something in your code."),(0,a.kt)("h4",{id:"5-admit-when-you-dont-know-something"},"5. Admit when you don\u2019t know something."),(0,a.kt)("p",null,"If you don't know how to solve part of the problem, admit it. Don't try to fake your way through it \u2014 your interviewer knows how to solve this problem and different approaches. It's okay to ask questions as well. Interviewers ",(0,a.kt)("em",{parentName:"p"},"will")," collaborate with you and will give hints as needed. Getting a hint or two doesn't mean you won't get the job. Of course, if the interviewer needs to write out most of the solution, that wouldn't be a good sign."),(0,a.kt)("p",null,"If you know the name of a method or tool you want to use in your code, but you are not 100% sure if you are using it correctly, or remember the exact syntax, that's okay. Go ahead and use the tool, but make sure to communicate to the interviewer about what you're unsure of and how you are intending to use the tool in your code. "),(0,a.kt)("h2",{id:"sample-whiteboarding-prompts"},"Sample Whiteboarding Prompts"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The next step is to practice. You will get many chances to practice with pairs and groups at Epicodus but we also recommend practicing on your own. When you do, make sure you follow the steps above even when you're by yourself. This includes writing out the problem by hand and verbalizing your process every step of the way. The point is to write the code by hand and explain what you're doing ",(0,a.kt)("em",{parentName:"p"},"while")," you're doing it."),(0,a.kt)("p",null,"Here are some sample challenges to work on from ",(0,a.kt)("a",{parentName:"p",href:"https://coderbyte.com/"},"CoderByte"),". You can also find more challenging prompts in ",(0,a.kt)("a",{parentName:"p",href:"https://projecteuler.net/archives"},"Project Euler's archives"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using JavaScript, create a function called ",(0,a.kt)("inlineCode",{parentName:"li"},"flip(str)")," that takes the ",(0,a.kt)("inlineCode",{parentName:"li"},"str")," parameter being passed and returns the string in reversed order."),(0,a.kt)("li",{parentName:"ul"},"Using JavaScript, create a function called ",(0,a.kt)("inlineCode",{parentName:"li"},"factorial(num)")," that takes the ",(0,a.kt)("inlineCode",{parentName:"li"},"num")," parameter being passed and returns the factorial of it (i.e.: if ",(0,a.kt)("inlineCode",{parentName:"li"},"num = 4"),", return(4 ",(0,a.kt)("em",{parentName:"li"}," 3 ")," 2 * 1)). For the test cases, the range will be between 1 and 18."),(0,a.kt)("li",{parentName:"ul"},"Using JavaScript, create a function called ",(0,a.kt)("inlineCode",{parentName:"li"},"cipher(str)")," that takes the ",(0,a.kt)("inlineCode",{parentName:"li"},"str")," parameter being passed and modifies it using the following algorithm. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). "),(0,a.kt)("li",{parentName:"ul"},"Then, capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.")))),(0,a.kt)("h2",{id:"recommended-resources"},"Recommended Resources"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Check out ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/XKu_SEDAykw"},"this video")," of two software engineers at Google performing a mock interview. Notice how the interviewee asks questions and makes a plan ",(0,a.kt)("em",{parentName:"p"},"before")," starting to write. Notice how he is ",(0,a.kt)("em",{parentName:"p"},"always")," communicating with the interviewer. At the 21:05 minute mark, the interview also recaps important parts of the process.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The articles ",(0,a.kt)("a",{parentName:"p",href:"https://skillcrush.com/blog/rock-your-next-whiteboard-test/"},"Rock Your Next Whiteboard Test")," by Debbie Chew and ",(0,a.kt)("a",{parentName:"p",href:"https://triplebyte.com/blog/how-to-pass-a-programming-interview"},"How To Pass a Programming Interview")," by Ammon Bartram are excellent resources to learn more about whiteboarding."))))}p.isMDXComponent=!0}}]);