"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[32663],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,l[1]=r;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o={title:"\ud83d\udcd3 Interactivity with JavaScript and jQuery",day:"weekend",id:"interactivity-with-javascript-and-jquery",hide_table_of_contents:!0},l=void 0,r={unversionedId:"workshops/workshop/interactivity-with-javascript-and-jquery",id:"workshops/workshop/interactivity-with-javascript-and-jquery",title:"\ud83d\udcd3 Interactivity with JavaScript and jQuery",description:"While an alert() can be helpful for beginning programmers, we generally don't want to use them in our applications. Ideally, we want as much of our functionality to happen on the page as possible. In this lesson, we'll create a form where users can type in a goal. When the goal is submitted, it will then be added to our list of goals.",source:"@site/docs/workshops/workshop/AF-interactivity-with-javascript-and-jquery.md",sourceDirName:"workshops/workshop",slug:"/workshops/workshop/interactivity-with-javascript-and-jquery",permalink:"/v1.2/workshops/workshop/interactivity-with-javascript-and-jquery",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 Interactivity with JavaScript and jQuery",day:"weekend",id:"interactivity-with-javascript-and-jquery",hide_table_of_contents:!0},sidebar:"workshops",previous:{title:"\ud83d\udcd3 Intro to JavaScript",permalink:"/v1.2/workshops/workshop/intro-to-javascript"},next:{title:"\ud83d\udcd3 Conclusion",permalink:"/v1.2/workshops/workshop/conclusion"}},s={},u=[{value:"Using JavaScript and jQuery",id:"using-javascript-and-jquery",level:2},{value:"Adding Scripts to HTML",id:"adding-scripts-to-html",level:3},{value:"Adding a Form to HTML",id:"adding-a-form-to-html",level:3},{value:"TL;DR: We Need to Use jQuery to Make the Script Wait for Our HTML to Load",id:"tldr-we-need-to-use-jquery-to-make-the-script-wait-for-our-html-to-load",level:3},{value:"Using jQuery to Change the DOM",id:"using-jquery-to-change-the-dom",level:3},{value:"Adding a <code>click()</code> Function",id:"adding-a-click-function",level:3},{value:"JavaScript is Tough",id:"javascript-is-tough",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"While an ",(0,i.kt)("inlineCode",{parentName:"p"},"alert()")," can be helpful for beginning programmers, we generally don't want to use them in our applications. Ideally, we want as much of our functionality to happen on the page as possible. In this lesson, we'll create a form where users can type in a goal. When the goal is submitted, it will then be added to our list of goals."),(0,i.kt)("p",null,"In order to do this, we're going to use a JavaScript library called jQuery. jQuery just uses JavaScript under the hood. We could do the exact same thing with just JavaScript but the purpose of jQuery is to make this interactivity much easier to work with in our code. A library in JavaScript is just like a CSS library like Bootstrap. It's a collection of already existing code that can help speed up our process."),(0,i.kt)("h2",{id:"using-javascript-and-jquery"},"Using JavaScript and jQuery"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"adding-scripts-to-html"},"Adding Scripts to HTML"),(0,i.kt)("p",null,"Before we start coding, we'll need to include links in our HTML file to both the jQuery library and a script for our JavaScript code. Fortunately, Glitch has already provided a JavaScript file called ",(0,i.kt)("inlineCode",{parentName:"p"},"script.js")," so we don't need to create it ourselves."),(0,i.kt)("p",null,"Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," element in ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," to look like this:"),(0,i.kt)("div",{class:"filename"},"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'...\n<head>\n  <link\n    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"\n    rel="stylesheet"\n    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"\n    crossorigin="anonymous" />\n  <link rel="stylesheet" href="style.css">\n  <script\n  src="https://code.jquery.com/jquery-3.6.0.js"\n  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="\n  crossorigin="anonymous"><\/script>\n  <script src="script.js"><\/script>\n  <title>Epicodus Workshop Project</title>\n</head>\n...\n')),(0,i.kt)("p",null,"We've added two ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tags to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," of our document. Note that scripts are ",(0,i.kt)("em",{parentName:"p"},"not")," self-closing so we need to close them with ",(0,i.kt)("inlineCode",{parentName:"p"},"<\/script>"),"."),(0,i.kt)("p",null,"Both of these script tags have a ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," attribute. This is short for source and tells our HTML file where to find the files. The jQuery library is sourced from a URL while ",(0,i.kt)("inlineCode",{parentName:"p"},"script.js")," is already available in our Glitch project. These JavaScript files will load from the top down. Because our ",(0,i.kt)("inlineCode",{parentName:"p"},"script.js")," file will contain code that's dependent on jQuery, we need to include the jQuery library first."),(0,i.kt)("h3",{id:"adding-a-form-to-html"},"Adding a Form to HTML"),(0,i.kt)("p",null,"Next, let's create a form that will allow us to add new items to our list of programming goals. We'll put this form in our ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file just above the ",(0,i.kt)("inlineCode",{parentName:"p"},"<ul>")," that contains our list of goals."),(0,i.kt)("div",{class:"filename"},"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'...\n  <div class="form-group">\n    <label>New Goal</label>\n    <input type="text" id="new-goal">\n    <button class="btn" type="button" id="goal-button">Add goal</button>\n  </div>\n...\n')),(0,i.kt)("p",null,"Notice how these HTML elements are indented to keep them organized? Good coding includes using good organization and conventions to help make these items easier to read. We won't cover indentation further here, but it's covered in the first few weeks of Introduction to Programming."),(0,i.kt)("p",null,"Our new form contains a label, a text input field for the user, and a button to click when the form has been filled out. Note the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," given to the text input. That's about to become important."),(0,i.kt)("p",null,"We can enter a new goal into our form, but when we click the button, nothing happens. We'll need to use jQuery to make the button interactive."),(0,i.kt)("h3",{id:"tldr-we-need-to-use-jquery-to-make-the-script-wait-for-our-html-to-load"},"TL;DR: We Need to Use jQuery to Make the Script Wait for Our HTML to Load"),(0,i.kt)("p",null,"Before we go any further, let's discuss what actually happens when we load HTML on a webpage. What we see in the browser isn't actually HTML. It's what's called the DOM, which stands for Document Object Model. Our HTML is just a blueprint. It tells the browser what to do and then the browser creates a DOM based on that blueprint."),(0,i.kt)("p",null,"Why is this important? Well, the DOM needs to be built before we run our JavaScript code. Otherwise our JavaScript code won't run. If HTML is the blueprint, then the DOM is a virtual house built with that blueprint. We need the house to be finished before we can actually start doing stuff in it."),(0,i.kt)("p",null,"For that reason, our code is going to be wrapped in a jQuery function that is very common in scripts that are used for websites:"),(0,i.kt)("div",{class:"filename"},"script.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"$(document).ready(function() {\n  // Our code will go here.\n});\n")),(0,i.kt)("p",null,"Let's explain this in further detail:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We begin by using the ",(0,i.kt)("inlineCode",{parentName:"li"},"$"),". All jQuery methods are preceded by this symbol."),(0,i.kt)("li",{parentName:"ul"},"We call the following jQuery method: ",(0,i.kt)("inlineCode",{parentName:"li"},"$(document).ready()"),". This ensures that the DOM is built first so our JavaScript code works. Otherwise, the JavaScript code will run immediately - before there's a DOM in place."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"function()")," keyword comes from JavaScript. We are putting all of the code that should run inside this function. jQuery will then call that function after the document is ready."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"});")," is used to close a JavaScript function. Just like a CSS style, this curly-brace/parens combo closes the ",(0,i.kt)("inlineCode",{parentName:"li"},"ready()")," function and the area where we define those actions. An area of actions within a function is called that function's ",(0,i.kt)("strong",{parentName:"li"},"scope"),". The scope of our function doesn't have any code in it yet.")),(0,i.kt)("p",null,"As a quick reference, a JavaScript function has this syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function () {\n  // All code goes here.\n};\n")),(0,i.kt)("h3",{id:"using-jquery-to-change-the-dom"},"Using jQuery to Change the DOM"),(0,i.kt)("p",null,"Now that we have a jQuery function that will make sure our script waits for the DOM to load before running, we can put some code in it."),(0,i.kt)("p",null,"We can target specific elements in our site by using the same classes and ids we've already added to our code for CSS rules. Let's change our script to the following:"),(0,i.kt)("div",{class:"filename"},"script.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'$(document).ready(function() {\n  $("#goal-list").append("I want to learn to code!");\n});\n')),(0,i.kt)("p",null,"Now let's break down our new line of code further:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'$("#goal-list").append("I want to learn to code!");\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We start with the ",(0,i.kt)("inlineCode",{parentName:"li"},"$")," because we are using jQuery."),(0,i.kt)("li",{parentName:"ul"},"jQuery will then find the corresponding element with an ID of ",(0,i.kt)("inlineCode",{parentName:"li"},"goal-list"),"."),(0,i.kt)("li",{parentName:"ul"},"We use jQuery's ",(0,i.kt)("inlineCode",{parentName:"li"},"append()")," function, which does exactly what it sounds like: adds something to the end of the targeted element. That could be a string, a number, or even an image."),(0,i.kt)("li",{parentName:"ul"},"Finally, we pass an argument into ",(0,i.kt)("inlineCode",{parentName:"li"},"append()"),": the string ",(0,i.kt)("inlineCode",{parentName:"li"},'"I want to learn to code!"'),".")),(0,i.kt)("p",null,"Let's take a look at what happens when we add this code to our Glitch application:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The JS code is on the left. It shows our new jQuery code. The site preview on the right shows the appended code.",src:n(15570).Z,width:"2444",height:"738"})),(0,i.kt)("p",null,"We now have a new item at the bottom of our list of goals. This item isn't included in our HTML. Instead, we used jQuery to append it to the list."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," If your site isn't updating, click on the refresh icon just above the preview of the website we're building. The icon is also indicated in the image above."),(0,i.kt)("p",null,"One little thing: wouldn't it be nice if our new item was also an ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>")," like the other items on the list? Well, we can do that with a small update to our code:"),(0,i.kt)("div",{class:"filename"},"script.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'$(document).ready(function() {\n  $("#goal-list").append("<li>I want to learn to code!</li>");\n});\n')),(0,i.kt)("p",null,"We just need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>")," tags to make it a list item."),(0,i.kt)("p",null,"However, we haven't actually added any interactivity yet. This is pretty much the same thing as just adding an element directly to the HTML. We need the form itself to trigger the ",(0,i.kt)("inlineCode",{parentName:"p"},"append()")," function."),(0,i.kt)("h3",{id:"adding-a-click-function"},"Adding a ",(0,i.kt)("inlineCode",{parentName:"h3"},"click()")," Function"),(0,i.kt)("p",null,"Let's attach a ",(0,i.kt)("inlineCode",{parentName:"p"},"click()")," function to our form button. A ",(0,i.kt)("inlineCode",{parentName:"p"},"click()")," function does exactly what it sounds like: when a thing on our site is clicked, all the code inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"click()")," function will run."),(0,i.kt)("p",null,"We can use jQuery to attach a ",(0,i.kt)("inlineCode",{parentName:"p"},"click()")," function to our button. Then, when someone clicks the button, we can run some code to ",(0,i.kt)("inlineCode",{parentName:"p"},"append()")," things to our list."),(0,i.kt)("p",null,"Let's update our script file to look like this:"),(0,i.kt)("div",{class:"filename"},"script.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'$(document).ready(function() {\n  $("#goal-button").click(function() {\n    $("#goal-list").append("<li>I want to learn to code!</li>");\n  });\n});\n')),(0,i.kt)("p",null,"Here, we've added a new jQuery function."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We use the ",(0,i.kt)("inlineCode",{parentName:"li"},"$")," to indicate we are using jQuery."),(0,i.kt)("li",{parentName:"ul"},"Then we target the element with an ID of ",(0,i.kt)("inlineCode",{parentName:"li"},"goal-button"),". That's the button on our page."),(0,i.kt)("li",{parentName:"ul"},"We attach a ",(0,i.kt)("inlineCode",{parentName:"li"},"click()")," function to ",(0,i.kt)("inlineCode",{parentName:"li"},"#goal-button"),". Note that the ",(0,i.kt)("inlineCode",{parentName:"li"},"click()")," function isn't called right away. If the HTML is like a blueprint used to build a virtual house called the DOM, then jQuery is the electrician that comes in after the house is built to install a light switch. Once again, that's why it's important for our script to wait for the DOM to be built - otherwise, jQuery can't come in and add the ",(0,i.kt)("inlineCode",{parentName:"li"},"click()")," function."),(0,i.kt)("li",{parentName:"ul"},"We've moved our ",(0,i.kt)("inlineCode",{parentName:"li"},"append()")," function inside of the ",(0,i.kt)("inlineCode",{parentName:"li"},"click()")," function. That way, the code will only run when the button is clicked.")),(0,i.kt)("p",null,"Let's see how this looks in Glitch:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The new code for a click function shows on the left. On the right, the site preview shows &quot;I want to learn to code!&quot; being appended many times.",src:n(66946).Z,width:"2490",height:"1074"})),(0,i.kt)("p",null,"The image shows how our page will look if we keep clicking the button. Our site has a little interactivity now! We can click the button to add \"I want to learn to code!\" to the screen. However, it's not quite the interactivity we'd like."),(0,i.kt)("p",null,"Fortunately, jQuery provides a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"val()"),". This function can be used to see the value of a form field. Let's update our code to use this function:"),(0,i.kt)("div",{class:"filename"},"script.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'$(document).ready(function() {\n  $("#goal-button").click(function() {\n    $("#goal-list").append("<li>" + $("#new-goal").val() + "</li>");\n  });\n});\n')),(0,i.kt)("p",null,"We've made a few changes to our ",(0,i.kt)("inlineCode",{parentName:"p"},"append()")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'$("#goal-list").append("<li>" + $("#new-goal").val() + "</li>");\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We use jQuery to call ",(0,i.kt)("inlineCode",{parentName:"li"},'$("#new-goal").val()'),". This finds the value in the form field with an ID of ",(0,i.kt)("inlineCode",{parentName:"li"},"new-goal"),"."),(0,i.kt)("li",{parentName:"ul"},"We use concatenation to combine opening and closing list item tags to the value that jQuery has found for us. This ensures that anything we append to our list is also a list item.")),(0,i.kt)("p",null,"Now we can actually add items to our list. Every time we click the button, our function is activated and the value of the form field is appended."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The new code shows on the left. On the right, the site preview shows that the value inputted in the form is appended to the site.",src:n(31023).Z,width:"2390",height:"702"})),(0,i.kt)("p",null,"There's one more thing we can do to clean this up a bit. It would be nice if the form field was cleared after submission for users. Fortunately, this is easy. We can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"val()")," function to clear the field. We just need to add one more line to our script:"),(0,i.kt)("div",{class:"filename"},"script.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'$(document).ready(function() {\n  $("#goal-button").click(function() {\n    $("#goal-list").append("<li>" + $("#new-goal").val() + "</li>");\n    $("#new-goal").val("");\n  });\n});\n')),(0,i.kt)("p",null,"The line ",(0,i.kt)("inlineCode",{parentName:"p"},'$("#new-goal").val("");')," simply empties the form field so the user may enter another goal into the form. Try it out on Glitch!"),(0,i.kt)("p",null,"Additionally, if we wanted our text styling to match what we have for ",(0,i.kt)("inlineCode",{parentName:"p"},".list-item")," in style.css we can update your jQuery created list to look like this: ",(0,i.kt)("inlineCode",{parentName:"p"},'$("#goal-list").append("<li class=\'list-item\'>" + $("#new-goal").val() + "</li>");'),"."),(0,i.kt)("h3",{id:"javascript-is-tough"},"JavaScript is Tough"),(0,i.kt)("p",null,"Great work so far! We've built an interactive site that uses HTML, CSS, JavaScript, and jQuery. We could easily spend months focusing on each of these topics because there is so much to learn. We'd also like to note that JavaScript and jQuery are very challenging at first. Don't worry if you don't fully understand everything we just completed. That's entirely normal. Our full-time Introduction to Programming students spent many weeks learning and practicing these concepts. If you're interested in developing your JavaScript skills further, we'll provide a list of resources in the last lesson of this workshop."))}p.isMDXComponent=!0},66946:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jquery-append-2-324f4a8a80b0505f1681043f9a61921c.png"},31023:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jquery-append-3-d2385c8e42d4b88fef3bf0fe9a253b53.png"},15570:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jquery-append-71a2d070a50b829d2f96619c4d5684c3.png"}}]);