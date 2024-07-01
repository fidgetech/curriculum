"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[23206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=d(n),g=i,u=h["".concat(l,".").concat(g)]||h[g]||p[g]||o;return n?a.createElement(u,s(s({ref:t},c),{},{components:n})):a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=g;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[h]="string"==typeof e?e:i,s[1]=r;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},73955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={title:"\ud83d\udcd3 3.3.1.3 Using SQL Designer",day:"monday",id:"3-3-1-3-using-sql-designer",hide_table_of_contents:!0},s=void 0,r={unversionedId:"c-and-net/database-basics/3-3-1-3-using-sql-designer",id:"c-and-net/database-basics/3-3-1-3-using-sql-designer",title:"\ud83d\udcd3 3.3.1.3 Using SQL Designer",description:"In this lesson, we'll walk through the process of using SQL Designer, a simple tool for creating and visualizing SQL database relationships.",source:"@site/docs/3_c-and-net/3_database-basics/AR-3-3-1-3-using-sql-designer.md",sourceDirName:"3_c-and-net/3_database-basics",slug:"/c-and-net/database-basics/3-3-1-3-using-sql-designer",permalink:"/v1/c-and-net/database-basics/3-3-1-3-using-sql-designer",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.3.1.3 Using SQL Designer",day:"monday",id:"3-3-1-3-using-sql-designer",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.3.1.2 Database Schema and Relationship Types",permalink:"/v1/c-and-net/database-basics/3-3-1-2-database-schema-and-relationship-types"},next:{title:"\ud83d\udcd3 3.3.1.4 Introducing Entity Framework Core",permalink:"/v1/c-and-net/database-basics/3-3-1-4-introducing-entity-framework-core"}},l={},d=[{value:"Using SQL Designer",id:"using-sql-designer",level:2},{value:"Adding Tables",id:"adding-tables",level:3},{value:"Add Attributes",id:"add-attributes",level:3},{value:"Edit Attributes",id:"edit-attributes",level:3},{value:"Create Relationships",id:"create-relationships",level:2},{value:"One-to-One Relationships",id:"one-to-one-relationships",level:3},{value:"One-to-Many Relationships",id:"one-to-many-relationships",level:3},{value:"Many-to-Many Relationships",id:"many-to-many-relationships",level:3},{value:"Example of a Complete Schema",id:"example-of-a-complete-schema",level:3}],c={toc:d},h="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(h,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll walk through the process of using ",(0,i.kt)("a",{parentName:"p",href:"https://ondras.zarovi.cz/sql/demo/"},"SQL Designer"),", a simple tool for creating and visualizing SQL database relationships."),(0,i.kt)("h2",{id:"using-sql-designer"},"Using SQL Designer"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"First, we'll cover the basic layout of SQL Designer."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This is the main screen of SQL designer. Colored lines are drawn around different sections.",src:n(69803).Z,width:"2124",height:"1142"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can find the actions for your design space in the area outlined in the green box above."),(0,i.kt)("li",{parentName:"ul"},"The blue box is your current design space. You can add and edit items anywhere on the page."),(0,i.kt)("li",{parentName:"ul"},"The orange box is your whole page display. Inside this display, there's another rectangle which shows your view and where you are in your current design space relative to the whole page.")),(0,i.kt)("h3",{id:"adding-tables"},"Adding Tables"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This screen shows the SQL designer tools. Add Table is selected.",src:n(74373).Z,width:"2491",height:"1120"}),"\n",(0,i.kt)("img",{alt:"This screen shows a user selecting where on the page to add their table.",src:n(50431).Z,width:"2493",height:"1116"})),(0,i.kt)("p",null,"To add a table, click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Table")," action and then use the pointer (which looks like a ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),") to click where you would like to add a table on the page. ",(0,i.kt)("strong",{parentName:"p"},"Do not click and drag the new pointer on the grid."),". Doing so will create a visible rectangle but won't correctly size the table."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This screen shows the dialog box for creating a table.",src:n(93278).Z,width:"1286",height:"714"})),(0,i.kt)("p",null,"A dialog box will appear once you've clicked the grid. You can add your table name here. ",(0,i.kt)("strong",{parentName:"p"},"Follow the SQL syntax for your table names based on the specifications you've learned in class.")),(0,i.kt)("h3",{id:"add-attributes"},"Add Attributes"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This screen shows the dialog box for adding attributes to a table.",src:n(45746).Z,width:"2220",height:"1143"})),(0,i.kt)("p",null,"To add a field, click on a table and then click the ",(0,i.kt)("em",{parentName:"p"},"Add field")," action. A dialog box will appear. Enter the attribute name and type here."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This screen shows an enlarged version of the add attributes dialog box.",src:n(43648).Z,width:"777",height:"751"})),(0,i.kt)("p",null,"To save the field, you can do one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Press ",(0,i.kt)("em",{parentName:"li"},"Enter")," on your keyboard"),(0,i.kt)("li",{parentName:"ul"},"Click the header for the table you are updating (shown in the image above)"),(0,i.kt)("li",{parentName:"ul"},"Click anywhere else on the grid")),(0,i.kt)("p",null,"Do not click ",(0,i.kt)("em",{parentName:"p"},"EDIT COMMENT")," unless you'd like to add notes about this table."),(0,i.kt)("h3",{id:"edit-attributes"},"Edit Attributes"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This screen shows how to select a specific attribute from a table so it can be edited.",src:n(72579).Z,width:"1185",height:"1124"})),(0,i.kt)("p",null,"If you made a mistake or would like to change an attribute name, just click the specific attribute. Once it's selected, you can choose the ",(0,i.kt)("em",{parentName:"p"},"Edit field")," action."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This screen shows the dialog box for editing an attirbute.",src:n(62374).Z,width:"1989",height:"1118"})),(0,i.kt)("p",null,"Then you can simply follow the same instructions for adding attributes to update and save the table."),(0,i.kt)("h2",{id:"create-relationships"},"Create Relationships"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"To add relationships between tables, we need foreign keys. The foreign key of one table corresponds to the ID of another table. There are two methods to add foreign keys in SQL Designer. As we walk through the two methods, take note that in the example images below, we are adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"trick_or_treaters")," foreign key to a ",(0,i.kt)("inlineCode",{parentName:"p"},"trick_or_treaters_candies")," join table, which is part of the process of creating a many-to-many relationship."),(0,i.kt)("p",null,"The first method is to manually enter the foreign key and then connect it to another table. To do so, click on the table (",(0,i.kt)("inlineCode",{parentName:"p"},"trick_or_treaters_candies"),") that will be taking the foreign key and add an attribute. Set the attribute name to the SQL singular syntax of a foreign key (",(0,i.kt)("inlineCode",{parentName:"p"},"trick_or_treater_id"),")."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This screen shows three tables. One table has an id attribute selected while SQL designer tools has Connect Foreign Key tool highlighted.",src:n(32177).Z,width:"2005",height:"1114"}),"\n",(0,i.kt)("img",{alt:"This screen shows three tables. One table has an id attribute selected, another table has an attribute highlighted, and SQL designer tools has Connect Foreign Key tool selected.",src:n(70359).Z,width:"2029",height:"1079"}),"\n",(0,i.kt)("img",{alt:"This screen shows the result of using the Connect Foreign Key tool. There is a blue line drawn from one tables attribute to the other.",src:n(97270).Z,width:"871",height:"537"})),(0,i.kt)("p",null,"Next, select the ",(0,i.kt)("em",{parentName:"p"},"id")," attribute from the table (",(0,i.kt)("inlineCode",{parentName:"p"},"trick_or_treaters"),") you're grabbing the foreign id from, select ",(0,i.kt)("em",{parentName:"p"},"Connect foreign key"),", and then select the foreign key attribute (",(0,i.kt)("inlineCode",{parentName:"p"},"trick_or_treater_id"),") you just made. A connection line should now show between these two points."),(0,i.kt)("p",null,"The second method is to select the ",(0,i.kt)("em",{parentName:"p"},"id")," attribute from the table (",(0,i.kt)("inlineCode",{parentName:"p"},"trick_or_treaters"),") you want to grab the foreign id from. Then use the ",(0,i.kt)("em",{parentName:"p"},"Create foreign key")," action. This will prompt you to select the table (",(0,i.kt)("inlineCode",{parentName:"p"},"trick_or_treaters_candies"),") that will hold the foreign key. This will connect the id to the foreign key."),(0,i.kt)("h3",{id:"one-to-one-relationships"},"One-to-One Relationships"),(0,i.kt)("p",null,"For one-to-one relationships, you will need to connect a foreign key in each table to each other. For example, a person only has one brain and a brain is only used by one human."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This screen shows two lines connecting two tables to each other, each with their own id and foreign key connected.",src:n(34435).Z,width:"820",height:"472"})),(0,i.kt)("h3",{id:"one-to-many-relationships"},"One-to-Many Relationships"),(0,i.kt)("p",null,"For one-to-many relationships, you only need to connect the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of the one to the table which has items that can belong to the one. For example, each child can have multiple imaginary friends but each imaginary friend belongs to one child."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This screen shows a blue line between one table&#39;s id and another table&#39;s foreign key for that table.",src:n(59590).Z,width:"969",height:"490"})),(0,i.kt)("h3",{id:"many-to-many-relationships"},"Many-to-Many Relationships"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This screen shows three tables.",src:n(54498).Z,width:"1813",height:"1128"}),"\n",(0,i.kt)("img",{alt:"This screen shows two of the tables connected to the third table, linking them together.",src:n(53835).Z,width:"1269",height:"895"})),(0,i.kt)("p",null,"For many-to-many relationships, you will need to create a join table first. Then use one of the two methods we mentioned above to add foreign keys for both of the tables being joined. For example, a trick or treater can have many types of candies and those same types of candies can also belong to other trick or treaters."),(0,i.kt)("h3",{id:"example-of-a-complete-schema"},"Example of a Complete Schema"),(0,i.kt)("p",null,"A full connected schema would look something like this if all of these examples were in the same program:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This screen shows five tables connected using all the methods this lesson went over.",src:n(84615).Z,width:"2258",height:"1097"})),(0,i.kt)("p",null,"To remove a connection, click the foreign key you want to remove and click ",(0,i.kt)("em",{parentName:"p"},"Remove foreign key"),". The attribute will still exist for you to connect to another ",(0,i.kt)("em",{parentName:"p"},"id"),", you can click ",(0,i.kt)("em",{parentName:"p"},"Remove field")," to delete it completely."),(0,i.kt)("p",null,"When you are done, take a screenshot of the schema and add it to your README!"))}p.isMDXComponent=!0},69803:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screen1-f8ecd1ea2289e916fc1b93b40c2e7f00.png"},97270:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screen11-9b3e61b03880ed7f3f63c31765c07933.png"},70359:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screen10-68abd2b716ad31eee1a6258672d88fb7.png"},54498:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screen15-6d4b39573e5dbe78787a50ecf993304c.png"},53835:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screen16-f3310f742f4e168126f636f27eeb4db5.png"},59590:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screen17-382975a792d28fedcf77f41b45ffa870.png"},34435:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screen18-4ed9431cd3cb724811a30f0d605a49c6.png"},84615:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screen19-f85b47906d0980b43009fd5dd5fc44eb.png"},74373:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screen2-a080a20fcc2db4a50742f281d5e1ee1f.png"},50431:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screen3-f2daf1382b9ffcea9be643a6bdcca5e8.png"},93278:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screen4-ec436ca740a1f51c143743a345035499.png"},45746:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screen5-a3ffa4900a7b7be15469fd844c79096f.png"},43648:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screen6-57bae696f147bc4ee59f34350b05659a.png"},72579:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screen7-28a5dfe5dd48e53f182119e30efae40b.png"},62374:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screen8-dfa141119812014732939d7bb5171235.png"},32177:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screen9-f4a82fde71e6a655bee2d072fa450e45.png"}}]);