"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[12662],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=o.createContext({}),h=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=h(a),d=i,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||r;return a?o.createElement(m,n(n({ref:t},u),{},{components:a})):o.createElement(m,n({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,n[1]=s;for(var h=2;h<r;h++)n[h]=a[h];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},60407:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var o=a(87462),i=(a(67294),a(3905));const r={title:"\ud83d\udcd3 4.5.2.2 Further Exploration: Data Visualization",day:"tuesday",id:"4-5-2-2-further-exploration-data-visualization",hide_table_of_contents:!0},n=void 0,s={unversionedId:"react/react-with-apis/4-5-2-2-further-exploration-data-visualization",id:"version-1.1/react/react-with-apis/4-5-2-2-further-exploration-data-visualization",title:"\ud83d\udcd3 4.5.2.2 Further Exploration: Data Visualization",description:"Data visualization is the process of creating a visual representation of information. Data visualization can make data really pop. It's a tool for making information more digestible, immersive, and generally interesting.",source:"@site/versioned_docs/version-1.1/4_react/5_react-with-apis/AQ-4-5-2-2-further-exploration-data-visualization.md",sourceDirName:"4_react/5_react-with-apis",slug:"/react/react-with-apis/4-5-2-2-further-exploration-data-visualization",permalink:"/v1.1/react/react-with-apis/4-5-2-2-further-exploration-data-visualization",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 4.5.2.2 Further Exploration: Data Visualization",day:"tuesday",id:"4-5-2-2-further-exploration-data-visualization",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\ud83d\udcd3 4.5.2.1 Further Exploration: Creating a Custom React Environment",permalink:"/v1.1/react/react-with-apis/4-5-2-1-further-exploration-creating-a-custom-react-environment"},next:{title:"\ud83d\udcd3 4.5.3.1 Further Exploration: Animations with React",permalink:"/v1.1/react/react-with-apis/4-5-3-1-further-exploration-animations-with-react"}},l={},h=[{value:"D3.js",id:"d3js",level:3},{value:"Chart.js",id:"chartjs",level:3},{value:"three.js",id:"threejs",level:3},{value:"Getting Started",id:"getting-started",level:3}],u={toc:h},c="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Data visualization is the process of creating a visual representation of information. Data visualization can make data really pop. It's a tool for making information more digestible, immersive, and generally interesting."),(0,i.kt)("p",null,"In this lesson, we'll cover three of the most popular data visualization libraries. You may wish to build a portfolio piece or capstone process around data visualization \u2014 or you may wish to add a small interactive chart to make your application stand out further. At the very least, you should have a basic understanding of what these libraries do \u2014 data visualization is a valuable job skill \u2014 and it's also a great way to differentiate your skill set from other junior developers applying for the same jobs."),(0,i.kt)("p",null,"After giving a brief overview of three data visualization tools, we'll provide a recommended structure for exploring these tools further on your own."),(0,i.kt)("h3",{id:"d3js"},"D3.js"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://d3js.org/"},"D3.js")," is the most popular and well-known library for data visualization. Note that we are making a small but important distinction here: while D3.js is excellent for data visualization, it can do many other things as well. In fact, trying to learn D3.js all at once is too overwhelming \u2014 and unnecessary as well. For this reason, if you choose to use D3.js, focus on what you want your data visualization to do instead of what D3.js ",(0,i.kt)("em",{parentName:"p"},"can")," do \u2014 because there will be a lot of D3.js functionality you won't need for your use case."),(0,i.kt)("p",null,"D3.js was created by Mike Bostock, who used it to create visualizations at the New York Times before moving on to found his own company Observable. You can take a look at some of his New York Times visualizations ",(0,i.kt)("a",{parentName:"p",href:"https://bost.ocks.org/mike/"},"here"),". These are powerful examples of what we can do with data visualization."),(0,i.kt)("p",null,"You can also see excellent examples of D3.js at work ",(0,i.kt)("a",{parentName:"p",href:"https://observablehq.com/@d3/gallery"},"here"),"."),(0,i.kt)("p",null,"Combining D3.js with React applications can be challenging. This is because both React and D3.js manipulate the DOM \u2014 and both have their own ways of doing things."),(0,i.kt)("p",null,"There are numerous tutorials online to combine React and D3.js \u2014 and making a vanilla JavaScript application with D3.js is also an option if you're determined to explore D3.js but don't want to combine it with React."),(0,i.kt)("p",null,"Another option to consider is the ",(0,i.kt)("a",{parentName:"p",href:"https://react-d3-library.github.io/"},"React D3 library"),", which compiles D3.js code into React components."),(0,i.kt)("p",null,"Ultimately, while D3.js has a steep learning curve \u2014 and takes a little extra work to combine with React \u2014 it has a huge community, lots of plugins, and lots of online tutorials and support. It's by far the most popular library for data visualization for a reason."),(0,i.kt)("h3",{id:"chartjs"},"Chart.js"),(0,i.kt)("p",null,"If complex data visualization seems too overwhelming but you're interested in adding a few charts to your application, ",(0,i.kt)("a",{parentName:"p",href:"https://www.chartjs.org/"},"Chart.js")," is a great option. As its name implies, Chart.js is great for adding charts including line, bar and pie charts among others. These charts go inside what's called a \"canvas.\" Chart.js can also be used for other data visualization needs as well. While it's not quite as popular as D3.js, it's easier to implement. You can see examples of charts and other visualizations made with Chart.js ",(0,i.kt)("a",{parentName:"p",href:"https://www.chartjs.org/samples/latest/"},"here"),"."),(0,i.kt)("p",null,"There's also a helpful library called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jerairrest/react-chartjs-2"},"react-chartjs-2")," that provides a React wrapper for adding Chart.js visualizations to React applications. This library makes it much easier to implement Chart.js. However, we recommend trying to integrate charts into React without this library first. It's not too difficult \u2014 and it will provide some interesting problem-solving in terms of getting multiple libraries to work together."),(0,i.kt)("h3",{id:"threejs"},"three.js"),(0,i.kt)("p",null,"While ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/"},"three.js")," isn't as widely used as either D3.js or Chart.js, it's still very popular. It also has an interesting approach to rendering objects. We start with a scene (which is equivalent to a canvas in Chart.js). Then we can use cameras to determine how we will view the objects we create. We use a renderer to actually render the scene. We use mesh and materials to fill in these objects. It's also relatively straightforward to integrate three.js with React. We recommend starting with ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene"},"Creating a Scene")," in the documentation. See if you can figure out how to place the object created in this basic tutorial in a React application. There are walk-throughs online that demonstrate how to do this."),(0,i.kt)("p",null,"In addition, there's also the well-supported ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-spring/react-three-fiber"},"react-three-fiber")," library, which allows developers to use three.js with React. It was developed by the maker of react-spring, which we will discuss in the next lesson on UI animations."),(0,i.kt)("p",null,"Check out ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/examples/"},"examples")," of three.js at work."),(0,i.kt)("h3",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Getting started with data visualization can be overwhelming. If you choose to explore this topic further, we recommend following the steps below. You don't have to complete all of the steps \u2014 even just doing the first one or two can give you some valuable layperson's knowledge on these tools."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Take a look at the documentation. You don't need to read extensively yet \u2014 just get a feel for the library and take a quick look at any tutorials. Do you see anything you want to explore further? During this step, you should get a general sense of what the library does and how it does it. (For instance, what exactly is a canvas or a scene?) We recommend taking a look at the documentation for all three tools mentioned above (and perhaps others that interest you), so you can get a sense of which one you'd most like to work with.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Take a look at the library's provided examples. If you already have a specific visualization in mind for a project, do you see anything in the examples that could get you started? If you don't have a visualization in mind yet, do you see anything that inspires you that you might want to recreate? If so, you'll be able to use the source code as a reference for your own exploration.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"By this point, you've likely chosen a specific library to work with. Complete a beginner tutorial. Don't worry about incorporating React yet. At this point, we just want to get a better understanding of how the library works. That likely means building a small vanilla JavaScript project, which is completely fine.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you're not ready to get started with React yet, you may even want to create a proof of concept using just vanilla JavaScript. Try to build out your visualization without using React yet. An interesting data visualization using vanilla JavaScript can still be the basis for something you might want to share with potential employers.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once you're ready to get started with React, start with the most basic implementation you can. If you've completed a basic tutorial or completed a proof of concept for a data visualization, it's time to try integrating this into a React project created just for this purpose. You're still in the learning phase here \u2014 the goal at the moment is to determine how React and the visualization library in question work together.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, you should have a good enough understanding to add visualizations to a more complex project. As always, start simple \u2014 even a small visualization can really make your project pop."))),(0,i.kt)("p",null,"While it may not be necessary to complete all of these steps, especially if you find an excellent external tutorial that provides instructions on combining a visualization library with React, there are many benefits to doing a deeper dive. It's an opportunity not just to learn more about a data visualization library but also more about how React itself works."))}p.isMDXComponent=!0}}]);