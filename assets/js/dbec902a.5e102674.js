"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[16199],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),u=s,m=p["".concat(l,".").concat(u)]||p[u]||b[u]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},63579:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(87462),s=(a(67294),a(3905));const r={title:"\ud83d\udcd3 3.3.0.07 Testing Database Backed Applications",day:"weekend",id:"3-3-0-07-testing-database-backed-applications",hide_table_of_contents:!0},o=void 0,i={unversionedId:"c-and-net/database-basics/3-3-0-07-testing-database-backed-applications",id:"version-1.1/c-and-net/database-basics/3-3-0-07-testing-database-backed-applications",title:"\ud83d\udcd3 3.3.0.07 Testing Database Backed Applications",description:"In the last lesson, we created a GetAll() method that queries our database. However, we haven't tested that method yet. Over the next few lessons, we'll learn how to test a database-backed application, covering important considerations and how to export and import databases with MySQL Workbench to create a test database. Then, we'll create our tests for the Item class.",source:"@site/versioned_docs/version-1.1/3_c-and-net/3_database-basics/AG-3-3-0-07-testing-database-backed-applications.md",sourceDirName:"3_c-and-net/3_database-basics",slug:"/c-and-net/database-basics/3-3-0-07-testing-database-backed-applications",permalink:"/v1.1/c-and-net/database-basics/3-3-0-07-testing-database-backed-applications",draft:!1,tags:[],version:"1.1",frontMatter:{title:"\ud83d\udcd3 3.3.0.07 Testing Database Backed Applications",day:"weekend",id:"3-3-0-07-testing-database-backed-applications",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.3.0.06 Retrieving Objects From the Database",permalink:"/v1.1/c-and-net/database-basics/3-3-0-06-retrieving-objects-from-the-database"},next:{title:"\ud83d\udcd3 3.3.0.08 Creating a Test Database: Exporting and Importing Databases with MySQL Workbench",permalink:"/v1.1/c-and-net/database-basics/3-3-0-08-creating-a-test-database-exporting-and-importing-databases-with-mysql-workbench"}},l={},d=[{value:"Testing Considerations for Database-Backed Applications",id:"testing-considerations-for-database-backed-applications",level:2}],c={toc:d},p="wrapper";function b(e){let{components:t,...a}=e;return(0,s.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In the last lesson, we created a ",(0,s.kt)("inlineCode",{parentName:"p"},"GetAll()")," method that queries our database. However, we haven't tested that method yet. Over the next few lessons, we'll learn how to test a database-backed application, covering important considerations and how to export and import databases with MySQL Workbench to create a test database. Then, we'll create our tests for the ",(0,s.kt)("inlineCode",{parentName:"p"},"Item")," class."),(0,s.kt)("h2",{id:"testing-considerations-for-database-backed-applications"},"Testing Considerations for Database-Backed Applications"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"We'll need to use teardown methods to reset data between each test so sample objects created in one test don't stick around and inadvertently affect the results of other tests. We've used teardown methods in past sections, including using ",(0,s.kt)("inlineCode",{parentName:"p"},"IDisposable"),"'s build-in ",(0,s.kt)("inlineCode",{parentName:"p"},"Dispose()")," method."),(0,s.kt)("p",null,"When using a database, our teardown methods will work differently. We don't want to delete our entire database every time we run tests. At the same time, we don't want leftover data causing testing issues, either. This can cause tests to fail in unexpected ways."),(0,s.kt)("p",null,"In order to solve this issue, we'll have two databases, one for testing and one for development:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Our ",(0,s.kt)("strong",{parentName:"p"},"test database")," will hold sample objects for use in tests. That way we can safely delete its contents between tests without losing important data.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Our ",(0,s.kt)("strong",{parentName:"p"},"development database")," will store our application's data. This will not be used for testing, so it won't be emptied when tests run."))),(0,s.kt)("p",null,"In a real-world application, we'd likely also have a ",(0,s.kt)("strong",{parentName:"p"},"production database")," as well."),(0,s.kt)("p",null,"With these considerations in mind, in the next lesson we'll learn how to import and export databases, as well as how to create a test database."))}b.isMDXComponent=!0}}]);