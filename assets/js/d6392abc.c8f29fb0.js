"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[71637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,c=h["".concat(s,".").concat(m)]||h[m]||d[m]||r;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"\ud83d\udcd3 1.2.3.1 Forms, Hiding and Showing Elements, and the Event Object",day:"wednesday",id:"1-2-3-1-forms-hiding-and-showing-elements-and-the-event-object",hide_table_of_contents:!0},i=void 0,l={unversionedId:"introduction-to-programming/javascript-and-web-browsers/1-2-3-1-forms-hiding-and-showing-elements-and-the-event-object",id:"version-1.1/introduction-to-programming/javascript-and-web-browsers/1-2-3-1-forms-hiding-and-showing-elements-and-the-event-object",title:"\ud83d\udcd3 1.2.3.1 Forms, Hiding and Showing Elements, and the Event Object",description:"So far, the only way we've been able to capture user input is by using window.confirm() and window.prompt(). Let's learn about forms so that we can build more interesting pages. In this lesson, we'll learn about:",source:"@site/versioned_docs/version-1.1/1_introduction-to-programming/2_javascript-and-web-browsers/BZ-1-2-3-1-forms-hiding-and-showing-elements-and-the-event-object.md",sourceDirName:"1_introduction-to-programming/2_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/1-2-3-1-forms-hiding-and-showing-elements-and-the-event-object",permalink:"/v1.1/introduction-to-programming/javascript-and-web-browsers/1-2-3-1-forms-hiding-and-showing-elements-and-the-event-object",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 1.2.3.1 Forms, Hiding and Showing Elements, and the Event Object",day:"wednesday",id:"1-2-3-1-forms-hiding-and-showing-elements-and-the-event-object",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\u270f\ufe0f 1.2.2.13 Practice: Event Handling with Event Handler Properties",permalink:"/v1.1/introduction-to-programming/javascript-and-web-browsers/1-2-2-13-practice-event-handling-with-event-handler-properties"},next:{title:"\ud83d\udcd3 1.2.3.2 Other Ways to Organize UI Logic",permalink:"/v1.1/introduction-to-programming/javascript-and-web-browsers/1-2-3-2-other-ways-to-organize-ui-logic"}},s={},p=[{value:"Exploring HTML Forms with Mad Libs",id:"exploring-html-forms-with-mad-libs",level:2},{value:"Hiding and Showing the Story",id:"hiding-and-showing-the-story",level:3},{value:"Adding an <code>onsubmit</code> Event Handler",id:"adding-an-onsubmit-event-handler",level:3},{value:"Preventing Default Behavior with <code>event.preventDefault()</code>",id:"preventing-default-behavior-with-eventpreventdefault",level:3},{value:"Getting User Inputted Form Values",id:"getting-user-inputted-form-values",level:3},{value:"Styling Forms with Bootstrap",id:"styling-forms-with-bootstrap",level:3},{value:"Summary",id:"summary",level:2}],u={toc:p},h="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So far, the only way we've been able to capture user input is by using ",(0,o.kt)("inlineCode",{parentName:"p"},"window.confirm()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"window.prompt()"),". Let's learn about forms so that we can build more interesting pages. In this lesson, we'll learn about:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTML forms"),(0,o.kt)("li",{parentName:"ul"},"Hiding and showing HTML elements."),(0,o.kt)("li",{parentName:"ul"},"Printing text to the DOM."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"event")," object for 'submit' events and preventing default behavior")),(0,o.kt)("p",null,"You are welcome to code along with this lesson or just read it. In the next practice prompt, we'll ask you to recreate the project in this lesson, so you'll be creating this project either way! "),(0,o.kt)("h2",{id:"exploring-html-forms-with-mad-libs"},"Exploring HTML Forms with Mad Libs"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Have you ever played Mad Libs? You're prompted to fill out a list of nouns, verbs, adjectives, etc., and then copy them onto another piece of paper that contains a story, missing those crucial words that you are now providing. The idea is to pick bizarre words without knowing what the story is, and then when you fill them in, the results can be hilarious."),(0,o.kt)("p",null,"Let's make a page that mimics the Mad Libs format:"),(0,o.kt)("div",{class:"filename"},"mad-libs.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <link rel="stylesheet" href="css/styles.css" type="text/css">\n  <script src="js/scripts.js"><\/script>\n  <title>A fantastical adventure</title>\n</head>\n<body>\n  <h1>Fill in the blanks to write your story!</h1>\n  <form>\n    <label for="person1Input">A name</label>\n    <input id="person1Input" type="text" name="person1Input">\n    <label for="person2Input">Another name</label>\n    <input id="person2Input" type="text" name="person2Input">\n    <label for="animalInput">An animal</label>\n    <input id="animalInput" type="text" name="animalInput">\n    <label for="exclamationInput">An exclamation</label>\n    <input id="exclamationInput" type="text" name="exclamationInput">\n    <label for="verbInput">A past tense verb</label>\n    <input id="verbInput" type="text" name="verbInput">\n    <label for="nounInput">A noun</label>\n    <input id="nounInput" type="text" name="nounInput">\n    <button type="submit">Show me the story!</button>\n  </form>\n\n  <div id="story" class="hidden">\n    <h1>A Fantastical Adventure</h1>\n    <p>\n      One day, <span id="person1a">_________</span> and <span id="person2a">_________</span> were walking through the woods, when suddenly a giant <span id="animal">_________</span> appeared. "<span id="exclamation">_________</span>", <span id="person1b">_________</span> cried. The two of them <span id="verb">_________</span> as quickly as possible, and when they were safe, <span id="person1c">_________</span> and <span id="person2b">_________</span> gave each other a giant <span id="noun">_________</span>.\n    </p>\n  </div>\n</body>\n</html>\n')),(0,o.kt)("p",null,"In our HTML we have a form that gets different words from the user: a person's name, another person's name, a verb, an exclamation, etc. In the second half of our HTML we have a story area where the form data from the user will be added to create the Mad Lib story."),(0,o.kt)("p",null,"A form in HTML uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"<form>")," element. Inside of it goes any combination of form inputs and labels (we'll see more examples of this later in this section) and a ",(0,o.kt)("inlineCode",{parentName:"p"},"<button>")," element that users can click to submit the form."),(0,o.kt)("p",null,"To create form fields with labels and inputs, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"<label>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<input>")," HTML elements. Each of these has a series of attributes that make the form function properly:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," attribute is the same ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," attribute that we already learned about. In this case, it helps us target and access that input's value."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"type")," attribute in any ",(0,o.kt)("inlineCode",{parentName:"li"},"<input>")," allows you to select the type of content that will go into that input. We've selected ",(0,o.kt)("inlineCode",{parentName:"li"},"text")," because we're only inputting text. There are many values we can set for the ",(0,o.kt)("inlineCode",{parentName:"li"},"type")," attribute, all of which change the look of the input element. We'll learn more about these in an upcoming lesson."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"for")," attribute on the ",(0,o.kt)("inlineCode",{parentName:"li"},"<label>")," element should have the same value as the ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," attribute on the corresponding ",(0,o.kt)("inlineCode",{parentName:"li"},"<input>"),". This allows us to connect the label and input together in code. Functionally, this enables a user to click on the label to select the corresponding input (a text cursor will appear in the input). The ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," attribute on the ",(0,o.kt)("inlineCode",{parentName:"li"},"<input>")," has other functions, too, which we won't get into now. ")),(0,o.kt)("p",null,"It's standard practice to include all of the above attributes on form ",(0,o.kt)("inlineCode",{parentName:"p"},"<label>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<input>")," elements, in their respective locations. You shouldn't worry about memorizing this information. Instead, just reference this lesson as needed to review how to create a form."),(0,o.kt)("h3",{id:"hiding-and-showing-the-story"},"Hiding and Showing the Story"),(0,o.kt)("p",null,"Let's make our Mad Libs site show the story only after the user has submitted the form. This means we'll have to hide and show the form with CSS. Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"css")," directory and add a ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.css")," file to it with the following CSS rule."),(0,o.kt)("div",{class:"filename"},"css/styles.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".hidden {\n  display: none;\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"display")," property lets us define the layout and visibility of an element on the page. This includes hiding elements by giving ",(0,o.kt)("inlineCode",{parentName:"p"},"display")," a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"none"),". There are a lot of values to use with ",(0,o.kt)("inlineCode",{parentName:"p"},"display"),", and you can read about them all on ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/display"},"MDN documentation")," or your preferred documentation for CSS. "),(0,o.kt)("p",null,"With the above CSS rule, we've created a class called ",(0,o.kt)("inlineCode",{parentName:"p"},"hidden")," that hides any element that we add the class to. We've already added this class to the div containing the story:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div id="story" class="hidden">\n  ...\n</div>\n')),(0,o.kt)("p",null,"When we want to show our story, all we'll have to do is remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"hidden")," class from the div element. We'll remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"hidden")," class with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.removeAttribute()")," method in our scripts file."),(0,o.kt)("p",null,"As a refresher, when we write ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.removeAttribute()"),", we're referring to the ",(0,o.kt)("inlineCode",{parentName:"p"},"removeAttribute()")," method that belongs to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Element")," object. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Element")," object represents an HTML element and it has properties and methods that let us interact with the HTML elements on our webpage. If you want to review the ",(0,o.kt)("inlineCode",{parentName:"p"},"Element")," object along with the topics of inheritance and object types, ",(0,o.kt)("a",{parentName:"p",href:"../../introduction-to-programming/javascript-and-web-browsers/1-2-2-8-understanding-web-apis-interfaces-object-types-and-inheritance"},"visit this lesson"),"."),(0,o.kt)("h3",{id:"adding-an-onsubmit-event-handler"},"Adding an ",(0,o.kt)("inlineCode",{parentName:"h3"},"onsubmit")," Event Handler"),(0,o.kt)("p",null,"Next, our JavaScript needs to get the value from the form inputs, insert them into the ",(0,o.kt)("inlineCode",{parentName:"p"},"<span>"),"s where the information should go, and then show the hidden story itself. We know how to insert text into our pages, so let's get that working before we try to get the data from the form:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'window.onload = function() {\n  // first we set up an event handler for the form submission\n  let form = document.querySelector("form");\n  form.onsubmit = function(event) {\n    // then we print values to the story area;\n    // we\'re hardcoding these values for now\n    document.querySelector("span#person1a").innerText = "person 1";\n    document.querySelector("span#person1b").innerText = "person 1";\n    document.querySelector("span#person1c").innerText = "person 1";\n    document.querySelector("span#person2a").innerText = "person 2";\n    document.querySelector("span#person2b").innerText = "person 2";\n    document.querySelector("span#animal").innerText = "an animal";\n    document.querySelector("span#verb").innerText = "verb";\n    document.querySelector("span#noun").innerText = "noun";\n    document.querySelector("span#exclamation").innerText = "exclamation";\n    \n    // then we show the story by removing the class attribute\n    document.querySelector("div#story").removeAttribute("class");\n  };\n};\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"onsubmit")," property lets us create an event handler for when a form is submitted. It's different from the ",(0,o.kt)("inlineCode",{parentName:"p"},"onclick")," event handler property because a form can be submitted by clicking on the submit button as well as by pressing ",(0,o.kt)("em",{parentName:"p"},"Enter")," while a form field is selected. "),(0,o.kt)("p",null,"For the ",(0,o.kt)("inlineCode",{parentName:"p"},"onsubmit")," event handler to work, we need an HTML button element with its ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," attribute set to ",(0,o.kt)("inlineCode",{parentName:"p"},"submit"),": "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<button type="submit">Show me the story!</button>\n')),(0,o.kt)("p",null,"Also, the ",(0,o.kt)("inlineCode",{parentName:"p"},"<button>")," element needs to be located within the ",(0,o.kt)("inlineCode",{parentName:"p"},"<form>")," tags:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<form>\n  <label for="person1Input">A name</label>\n  <input id="person1Input" type="text" name="person1Input">\n  ...\n  <button type="submit">Show me the story!</button>\n</form>\n')),(0,o.kt)("p",null,"Going forward, when you create an HTML form, you should always use a button element with the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," attribute set to ",(0,o.kt)("inlineCode",{parentName:"p"},"submit")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"<button>")," should be inside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<form>")," tags. With HTML like this in place, you'll be able to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"onsubmit")," event handler property to react to the form submission."),(0,o.kt)("p",null,'Let\'s submit our form and see what happens! When we do this we should see the story to show with the hardcoded values we\'ve added to our scripts (for ex, "person 1", "person 2", "an animal", etc). However ...'),(0,o.kt)("h3",{id:"preventing-default-behavior-with-eventpreventdefault"},"Preventing Default Behavior with ",(0,o.kt)("inlineCode",{parentName:"h3"},"event.preventDefault()")),(0,o.kt)("p",null,"... When we submit the form, the story briefly flashes and then disappears! This is caused by the default behavior of the 'submit' event. It's typical for a form submission to be sent to a server (which might hold a database) where the information on the form can be processed and stored. And that's exactly what the default behavior for the submit event is \u2014 to try to submit the information to a server and then refresh the page with any information from the server."),(0,o.kt)("p",null,"But we aren't submitting our form to a server and this default behavior is causing the page to refresh and erase the information submitted in the form."),(0,o.kt)("p",null,"If you look in the URL bar of your browser, you should see that there's a ",(0,o.kt)("inlineCode",{parentName:"p"},"?")," within the address now. This is your clue that the form has been submitted to nowhere and the page refreshed. So what do we do about this? We need to prevent the default action for the form:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'window.onload = function() {\n  let form = document.querySelector("form");\n  form.onsubmit = function(event) {  // there\'s a new parameter\n    document.querySelector("span#person1a").innerText = "person 1";\n    document.querySelector("span#person1b").innerText = "person 1";\n    document.querySelector("span#person1c").innerText = "person 1";\n    document.querySelector("span#person2a").innerText = "person 2";\n    document.querySelector("span#person2b").innerText = "person 2";\n    document.querySelector("span#animal").innerText = "an animal";\n    document.querySelector("span#verb").innerText = "verb";\n    document.querySelector("span#noun").innerText = "noun";\n    document.querySelector("span#exclamation").innerText = "exclamation";\n    \n    document.querySelector("div#story").removeAttribute("class");\n\n    // we prevent the default refresh action for the submit event\n    event.preventDefault();\n  };\n};\n')),(0,o.kt)("p",null,"Notice that we've added a parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," to the function expression that we've set for the ",(0,o.kt)("inlineCode",{parentName:"p"},"onsubmit")," event handler property. We've also called ",(0,o.kt)("inlineCode",{parentName:"p"},"event.preventDefault();")," at the bottom of the form submit event handler. We can place ",(0,o.kt)("inlineCode",{parentName:"p"},"event.preventDefault();")," anywhere in the form submit event handler, not just the bottom."),(0,o.kt)("p",null,"Also, developers often use ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," for short, instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"event"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"form.onsubmit = function(e) {  // there's a new parameter\n  ...\n  e.preventDefault();\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"e"),") parameter is a placeholder for an object that represents the event we're dealing with. Since we're working with the ",(0,o.kt)("inlineCode",{parentName:"p"},"onsubmit")," event handler property that means the event we're dealing with is a 'submit' event. The ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," object is a Web API, and it has handy information and tools like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What type of event just happened."),(0,o.kt)("li",{parentName:"ul"},"Where in the webpage the event originated from."),(0,o.kt)("li",{parentName:"ul"},"Stopping the default behavior for the event with the ",(0,o.kt)("inlineCode",{parentName:"li"},"event.preventDefault()")," method.")),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," object is automatically created for every event that happens in the web browser. Typically, we can only access the ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," object from within the event handler that targets the event. Taking our Mad Libs form for an example, when the form submission event happens, a submission event object gets created and passed in as the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," parameter in the function expression. "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," object is typically confusing for new developers, because the creation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," object happens behind the scenes. It feels odd to create a parameter for an object that we can't see get created. However, this is how events are set up. In a future course section, we'll learn more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," object, how to access it, and where we can learn more information about it. "),(0,o.kt)("p",null,"For now, let's focus on the important piece of functionality that we need from the ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," object for our form: preventing the submit event's default behavior to refresh the page. ",(0,o.kt)("strong",{parentName:"p"},"Going forward when we're working with forms, we always need to remember to call ",(0,o.kt)("inlineCode",{parentName:"strong"},"event.preventDefault();")," within the handler function set to the ",(0,o.kt)("inlineCode",{parentName:"strong"},"onsubmit")," property and include a parameter for ",(0,o.kt)("inlineCode",{parentName:"strong"},"event"),".")," When we get to the backend course on C# and .NET or Ruby and Rails, we'll learn how to submit forms values to servers so that we don't need to prevent this default behavior. "),(0,o.kt)("p",null,"Anytime you have a ",(0,o.kt)("inlineCode",{parentName:"p"},"?")," within the browser URL, follow these steps to fix the issue:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"event.preventDefault()")," into the ",(0,o.kt)("inlineCode",{parentName:"li"},"onsubmit")," event handler. Don't forget to add the ",(0,o.kt)("inlineCode",{parentName:"li"},"event")," parameter in the function."),(0,o.kt)("li",{parentName:"ol"},"Remove the ",(0,o.kt)("inlineCode",{parentName:"li"},"?")," and anything after it from your browser URL. For example if you are serving the project with LiveServer, your URL might look like ",(0,o.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:5501/index.html?person1Input=Mohammed"),", and you'll want to reset it to ",(0,o.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:5501/index.html"),". If you forget to do this, there shouldn't be an issue, but you should know that your URL won't automatically reset with a page refresh."),(0,o.kt)("li",{parentName:"ol"},"Refresh the page before proceeding.")),(0,o.kt)("h3",{id:"getting-user-inputted-form-values"},"Getting User Inputted Form Values"),(0,o.kt)("p",null,"Now, we need to actually get the values from the form. With the Mad Libs project open in the browser, we can try this out in the DevTools console first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const person1Input = document.getElementById("person1Input").value;\n> person1Input;\n"Mohammed"\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"This image shows the Mad Libs website and the DevTools console with the above code input into it.",src:n(50228).Z,width:"922",height:"188"})),(0,o.kt)("p",null,"In the above example, I've targeted the first HTML input element with ",(0,o.kt)("inlineCode",{parentName:"p"},'document.getElementById("person1Input")')," and then I've accessed the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," property of the returned ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," object. Let's break that down into steps."),(0,o.kt)("p",null,"First we get the DOM input element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// getting the input element\n> const person1Input = document.getElementById("person1Input");\n> person1Input;\n<input id="person1Input" name="person1Input" type="text">\n')),(0,o.kt)("p",null,"Then we check the exact type of the input element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// checking the exact type of the input element\n// which is HTMLInputElement\n> Object.prototype.toString.call(person1Input);\n'[object HTMLInputElement]'\n")),(0,o.kt)("p",null,"And then we get the value of the input element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// getting the value from the HTMLInputElement\n> const person1Value = person1Input.value;\n> person1Value;\n"Mohammed"\n')),(0,o.kt)("p",null,"Just like how the object ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement")," represents an H1 element (or any of the others H2, H3, etc), the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLInputElement")," represents the HTML ",(0,o.kt)("inlineCode",{parentName:"p"},"<input>")," element. We can also see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLInputElement")," gives us the value that the user typed into the form input. "),(0,o.kt)("p",null,"Let's update our code to gather the values from each form ",(0,o.kt)("inlineCode",{parentName:"p"},"<input>")," element. As you read through the updated scripts below, take note of the comments."),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'window.onload = function() {\n  let form = document.querySelector("form");\n  form.onsubmit = function(event) {\n    // in this section we get the value for each form input\n    const person1Input = document.getElementById("person1Input").value;\n    const person2Input = document.getElementById("person2Input").value;\n    const animalInput= document.getElementById("animalInput").value;\n    const exclamationInput = document.getElementById("exclamationInput").value;\n    const verbInput = document.getElementById("verbInput").value;\n    const nounInput = document.getElementById("nounInput").value;\n    \n    // then we set the story variables to the values we got from the form\n    document.querySelector("span#person1a").innerText = person1Input;\n    document.querySelector("span#person1b").innerText = person1Input;\n    document.querySelector("span#person1c").innerText = person1Input;\n    document.querySelector("span#person2a").innerText = person2Input;\n    document.querySelector("span#person2b").innerText = person2Input;\n    document.querySelector("span#animal").innerText = animalInput;\n    document.querySelector("span#verb").innerText = verbInput;\n    document.querySelector("span#noun").innerText = nounInput;\n    document.querySelector("span#exclamation").innerText = exclamationInput;\n    \n    document.querySelector("div#story").removeAttribute("class");\n\n    event.preventDefault();\n  };\n};\n')),(0,o.kt)("p",null,"When we refresh the page and submit the form, we can see our Mad Libs website work. Hooray! We've created our first project that gathers user input through a form!"),(0,o.kt)("h3",{id:"styling-forms-with-bootstrap"},"Styling Forms with Bootstrap"),(0,o.kt)("p",null,"Bootstrap offers good looking form styling that you can explore in your projects. Check out ",(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/forms/"},"the Bootstrap version 4.5 documentation on forms here"),". Take note that we'll explore and practice with other form types in upcoming lessons. These include select boxes, radio buttons, and check boxes, as well as using ",(0,o.kt)("inlineCode",{parentName:"p"},"<input>")," types for dates and colors."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We learned a lot in this lesson. Here are some important takeaways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When creating forms, use a button element with a ",(0,o.kt)("inlineCode",{parentName:"li"},"type")," attribute that's set to a value of ",(0,o.kt)("inlineCode",{parentName:"li"},"submit"),". This button should always be inside of the ",(0,o.kt)("inlineCode",{parentName:"li"},"<form>")," tags. With this HTML, we can use the ",(0,o.kt)("inlineCode",{parentName:"li"},"onsubmit")," event handler property on the form to target the submission event."),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("inlineCode",{parentName:"li"},"event")," object is automatically created for every event handler when the event happens. We can only access the ",(0,o.kt)("inlineCode",{parentName:"li"},"event")," object from within the event handler. The ",(0,o.kt)("inlineCode",{parentName:"li"},"event")," object give us information and tools like:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"What type of event it is (like 'click' or 'submission')."),(0,o.kt)("li",{parentName:"ul"},"Where in the webpage the event originated from."),(0,o.kt)("li",{parentName:"ul"},"Stopping the default behavior for the event with the ",(0,o.kt)("inlineCode",{parentName:"li"},"event.preventDefault()")," method."))),(0,o.kt)("li",{parentName:"ul"},"When we're working with a submission event on a form, we'll need to prevent the default behavior of refreshing the page. Use ",(0,o.kt)("inlineCode",{parentName:"li"},"event.preventDefault()")," within the handler function and don't forget to add the parameter ",(0,o.kt)("inlineCode",{parentName:"li"},"event"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HTMLInputElement"),"s have a ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," property that we can access to get what the user has typed into the input.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Visit the cheat sheet for the completed code for the Mad Libs project.")))}d.isMDXComponent=!0},50228:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/getting-form-input-value-55f111ebcf2f8b5deba3229606aa1bd2.png"}}]);