"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[44479],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},13876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"\u270f\ufe0f 3.3.3.1 Best Restaurants in Town",day:"wednesday",id:"3-3-3-1-best-restaurants-in-town",hide_table_of_contents:!0},i=void 0,s={unversionedId:"c-and-net/database-basics/3-3-3-1-best-restaurants-in-town",id:"version-1.1/c-and-net/database-basics/3-3-3-1-best-restaurants-in-town",title:"\u270f\ufe0f 3.3.3.1 Best Restaurants in Town",description:"Goal: Build out an application using a one-to-many relationship with Entity. The application should include two models, both with full CRUD functionality.",source:"@site/versioned_docs/version-1.1/3_c-and-net/3_database-basics/BF-3-3-3-1-best-restaurants-in-town.md",sourceDirName:"3_c-and-net/3_database-basics",slug:"/c-and-net/database-basics/3-3-3-1-best-restaurants-in-town",permalink:"/v1.1/c-and-net/database-basics/3-3-3-1-best-restaurants-in-town",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\u270f\ufe0f 3.3.3.1 Best Restaurants in Town",day:"wednesday",id:"3-3-3-1-best-restaurants-in-town",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.3.2.6 Create and Update with a One-To-Many Relationship",permalink:"/v1.1/c-and-net/database-basics/3-3-2-6-create-and-update-with-a-one-to-many-relationship"},next:{title:"\ud83d\udcd3 3.3.3.2 ACID Databases",permalink:"/v1.1/c-and-net/database-basics/3-3-3-2-acid-databases"}},l={},u=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"To Do List",id:"to-do-list",level:3},{value:"Relations Practice",id:"relations-practice",level:3},{value:"Best Restaurants",id:"best-restaurants",level:3},{value:"Further Exploration",id:"further-exploration",level:3},{value:"Peer/Instructor Code Review",id:"peerinstructor-code-review",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal"),": Build out an application using a one-to-many relationship with Entity. The application should include two models, both with full CRUD functionality."),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Give an example of a one-to-many relationship. How can you determine this is the correct relationship?"),(0,r.kt)("li",{parentName:"ul"},"How do we associate database entries?"),(0,r.kt)("li",{parentName:"ul"},"What is a navigation property?"),(0,r.kt)("li",{parentName:"ul"},"What is ViewBag and how is it useful?")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"to-do-list"},"To Do List"),(0,r.kt)("p",null,"Follow along with the homework lessons to build out a fully-functional To Do List with a one-to-many relationship between ",(0,r.kt)("inlineCode",{parentName:"p"},"Category"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s."),(0,r.kt)("h3",{id:"relations-practice"},"Relations Practice"),(0,r.kt)("p",null,"Next let's go through some exercises to help you get comfortable with database design and schemas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create tables with sample data for a system that tracks non-profits and their board members. A non-profit has many board members, so this is a one-to-many relationship. Sketch it out on a whiteboard or using a spreadsheet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Suppose you wanted to make a list of restaurants in your neighborhood and group them together by the kind of food they serve. Create sample ",(0,r.kt)("inlineCode",{parentName:"p"},"restaurants")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"types_of_food")," tables. Start with a one-to-many relationship (assume a restaurant only serves one type of food). You can feel free to think about how you could make this a many-to-many relationship, but don't worry if you don't know how! We'll learn all about those in the next course section.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make a schema for your database tables of restaurants and the type of food they serve."))),(0,r.kt)("h3",{id:"best-restaurants"},"Best Restaurants"),(0,r.kt)("p",null,"Create a website where users can add their favorite restaurants based on the type of cuisine they offer."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Cuisine"),' class. Build out all CRUD functionality (Create, Read, Update, Delete) for this class. Remember that "Read" means to view a particular cuisine and to list out all of the cuisines.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Restaurant")," class. Build out all CRUD functionality for this class.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add properties other than ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Restaurant")," class so that you can display descriptive information about the restaurants.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make the connection between a cuisine and a restaurant in the database. A cuisine can have many restaurants, but a restaurant can only be attached to one cuisine.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Allow a user to search for all of a cuisine's restaurants."))),(0,r.kt)("h3",{id:"further-exploration"},"Further Exploration"),(0,r.kt)("p",null,"If you have time, go ahead and tackle the next few features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now your application allows for users to review restaurants. Build out a ",(0,r.kt)("inlineCode",{parentName:"p"},"Review")," class and make the relationship in the database so that a restaurant has many reviews. Pretend that the users who are reviewing the website are different from the user who added the restaurant.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Display all of the reviews at the bottom of the restaurant's page."))),(0,r.kt)("h2",{id:"peerinstructor-code-review"},"Peer/Instructor Code Review"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do the database table and column names follow proper naming conventions?"),(0,r.kt)("li",{parentName:"ul"},"Is there a one-to-many relationship set up correctly in Entity?"),(0,r.kt)("li",{parentName:"ul"},"Is ViewBag used correctly?"),(0,r.kt)("li",{parentName:"ul"},"Does the application work as expected?")))}c.isMDXComponent=!0}}]);