"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[99134],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26442:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={title:"\ud83d\udcd3 4.2.0.14 Adding Images",day:"weekend",id:"4-2-0-14-adding-images",hide_table_of_contents:!0},o=void 0,s={unversionedId:"react/react-fundamentals/4-2-0-14-adding-images",id:"react/react-fundamentals/4-2-0-14-adding-images",title:"\ud83d\udcd3 4.2.0.14 Adding Images",description:"In this lesson, we'll cover adding static assets such as images to a React application that uses create-react-app. You aren't required to add images for any independent projects. However, you might want to make an application look nicer with images and other graphics, especially any applications that you plan to include in your portfolio.",source:"@site/docs/4_react/2_react-fundamentals/AN-4-2-0-14-adding-images.md",sourceDirName:"4_react/2_react-fundamentals",slug:"/react/react-fundamentals/4-2-0-14-adding-images",permalink:"/v1.2/react/react-fundamentals/4-2-0-14-adding-images",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 4.2.0.14 Adding Images",day:"weekend",id:"4-2-0-14-adding-images",hide_table_of_contents:!0},sidebar:"react",previous:{title:"\ud83d\udcd3 4.2.0.13 Debugging with React Developer Tools",permalink:"/v1.2/react/react-fundamentals/4-2-0-13-debugging-with-react-developer-tools"},next:{title:"\u270f\ufe0f 4.2.1.1 Help Queue, Social Media, Airbnb Clone",permalink:"/v1.2/react/react-fundamentals/4-2-1-1-help-queue-social-media-airbnb-clone"}},l={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll cover adding static assets such as images to a React application that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app"),". You aren't required to add images for any independent projects. However, you might want to make an application look nicer with images and other graphics, especially any applications that you plan to include in your portfolio."),(0,i.kt)("p",null,"In general, adding images to a React application is pretty easy. However, there are a few important gotchas which we'll cover in this lesson."),(0,i.kt)("p",null,"Let's add an image to our Help Queue. You can pick an image of your choice or simply follow along with this lesson later when you plan to add images to an application."),(0,i.kt)("p",null,"We've added a picture of tickets to our application as the image below shows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Header component has a tickets image.",src:a(35747).Z,width:"720",height:"490"})),(0,i.kt)("p",null,"It's not a stylistically impressive site \u2014 but it'll do for learning purposes."),(0,i.kt)("p",null,"If you're already familiar with some backend web frameworks you might be tempted to place image files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," directory created by ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app"),". However, we should ",(0,i.kt)("em",{parentName:"p"},"not")," use the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," directory for most images. This is clear if we look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," documentation on ",(0,i.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/using-the-public-folder/"},"Using the Public Folder"),". According to this doc:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that we normally encourage you to import assets in JavaScript files... This mechanism provides a number of benefits.")),(0,i.kt)("p",null,"The biggest benefit is that webpack will minify and bundle our assets. In order to benefit from bundling, our images need to be stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," directory. We definitely want that benefit because it will make our code more efficient in the browser."),(0,i.kt)("p",null,"There's another huge benefit of storing files such as images in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," directory. Let's say we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," directory for an image but that image is missing. We'll just get a broken image link in our application. It's really easy to miss a broken image or another missing file because our application won't throw any errors. We likely won't notice unless we look at the application in the browser. However, when these files are stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," and combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," statements, they will throw errors in compilation so we can fix them immediately."),(0,i.kt)("p",null,"If we try to use images stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," directory, ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," won't even let us. We'll get the following error: ",(0,i.kt)("inlineCode",{parentName:"p"},"Relative imports outside of src/ are not supported."),". There are ways around this \u2014 and there are special use cases when a developer might need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," directory for static assets. After all, that's why the directory is there. However, we don't have any special use cases \u2014 we just want to add images to our application."),(0,i.kt)("p",null,"So instead of using the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," directory, create an ",(0,i.kt)("inlineCode",{parentName:"p"},"img")," directory (or a similarly named directory) in ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," instead. Go ahead and save any photos you want to use in that directory. For the image above, we've saved an image called ",(0,i.kt)("inlineCode",{parentName:"p"},"tickets.png")," in a directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"img"),"."),(0,i.kt)("p",null,"Next, let's consider where we want to render this image. We should apply the same best practices to rendering images as we do to rendering other code. In this case, we'll make it part of our header and put it in ",(0,i.kt)("inlineCode",{parentName:"p"},"Header.js"),"."),(0,i.kt)("p",null,"Next, we need to import the file just as we'd import any other component. Here's how we can add it to ",(0,i.kt)("inlineCode",{parentName:"p"},"Header.js"),":"),(0,i.kt)("div",{class:"filename"},"components/Header.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport ticketsImage from "./../img/tickets.png";\n\nfunction Header(){\n  return (\n    <React.Fragment>\n      <h1>Help Queue</h1>\n      <img src={ticketsImage} alt="An image of tickets" />\n    </React.Fragment>\n  );\n}\n\nexport default Header;\n')),(0,i.kt)("p",null,"Just as with other default imports, we can call the thing we are importing whatever we want \u2014 as always, we should be very clear on the name. We've called this ",(0,i.kt)("inlineCode",{parentName:"p"},"ticketsImage"),". We could just call it ",(0,i.kt)("inlineCode",{parentName:"p"},"tickets"),", though that might get confusing later with all of our similarly named components."),(0,i.kt)("p",null,"Next, we need a standard ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>")," tag. This has all of the attributes of a typical HTML ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>")," tag \u2014 and as always, we should add an ",(0,i.kt)("inlineCode",{parentName:"p"},"alt")," attribute to make our site more accessible to users with disabilities. The key difference is that we use curly braces to render our image inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," attribute."),(0,i.kt)("p",null,"And that's all there is to adding an image to a site! Just make sure you follow the best practices outlined in this lesson and save your images in a directory inside ",(0,i.kt)("inlineCode",{parentName:"p"},"src"),". For more information on adding images with ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app"),", see ",(0,i.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-images-fonts-and-files/"},"Adding Images, Fonts, and Files"),"."))}m.isMDXComponent=!0},35747:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tickets-image-c1addb252b0e58560cb15ffa2b317560.png"}}]);