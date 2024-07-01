"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[98126],{3905:(e,t,A)=>{A.d(t,{Zo:()=>s,kt:()=>u});var o=A(67294);function n(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function r(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,o)}return A}function a(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?r(Object(A),!0).forEach((function(t){n(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):r(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function i(e,t){if(null==e)return{};var A,o,n=function(e,t){if(null==e)return{};var A,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)A=r[o],t.indexOf(A)>=0||(n[A]=e[A]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)A=r[o],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(n[A]=e[A])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),A=t;return e&&(A="function"==typeof e?e(t):a(a({},t),e)),A},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var A=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(A),h=n,u=p["".concat(l,".").concat(h)]||p[h]||g[h]||r;return A?o.createElement(u,a(a({ref:t},s),{},{components:A})):o.createElement(u,a({ref:t},s))}));function u(e,t){var A=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=A.length,a=new Array(r);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<r;c++)a[c]=A[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,A)}h.displayName="MDXCreateElement"},41688:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=A(87462),n=(A(67294),A(3905));const r={title:"\ud83d\udcd3 3.7.2.1 Pull Requests with Forks",day:"tuesday",id:"3-7-2-1-pull-requests-with-forks",hide_table_of_contents:!0},a=void 0,i={unversionedId:"c-and-net/team-project/3-7-2-1-pull-requests-with-forks",id:"c-and-net/team-project/3-7-2-1-pull-requests-with-forks",title:"\ud83d\udcd3 3.7.2.1 Pull Requests with Forks",description:"Many of the JavaScript libraries and tools we use at Epicodus are open source including webpack, React, and Jest, to name a few. Open source means the code is available publicly and that anyone can contribute to it.",source:"@site/docs/3_c-and-net/7_team-project/AH-3-7-2-1-pull-requests-with-forks.md",sourceDirName:"3_c-and-net/7_team-project",slug:"/c-and-net/team-project/3-7-2-1-pull-requests-with-forks",permalink:"/v1/c-and-net/team-project/3-7-2-1-pull-requests-with-forks",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.7.2.1 Pull Requests with Forks",day:"tuesday",id:"3-7-2-1-pull-requests-with-forks",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.7.1.1 Pull Requests with Branches",permalink:"/v1/c-and-net/team-project/3-7-1-1-pull-requests-with-branches"},next:{title:"\ud83d\udcd3 3.7.4.1 Team Project Presentations and Code Review",permalink:"/v1/c-and-net/team-project/3-7-4-1-team-project-presentations-and-code-review"}},l={},c=[{value:"Making a PR Request Via a Fork",id:"making-a-pr-request-via-a-fork",level:2},{value:"Contributing to Open Source Projects",id:"contributing-to-open-source-projects",level:2}],s={toc:c},p="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Many of the JavaScript libraries and tools we use at Epicodus are ",(0,n.kt)("strong",{parentName:"p"},"open source")," including webpack, React, and Jest, to name a few. ",(0,n.kt)("strong",{parentName:"p"},"Open source")," means the code is available publicly and that anyone can contribute to it."),(0,n.kt)("p",null,"In order to do that, maintainers of open source projects welcome pull requests from the community. However, it wouldn't be a good idea for maintainers to make everyone in the community collaborators. That would be difficult to manage and also lead to potential security risks."),(0,n.kt)("p",null,"Instead, it's possible to make a PR with only read access to a repository. Instead of cloning the repository and making a branch, contributors ",(0,n.kt)("strong",{parentName:"p"},"fork")," the project, make changes to a branch on the fork, and then submit the PR."),(0,n.kt)("p",null,"In this lesson, we'll walk through the necessary steps to make a PR via a fork. The steps for approving a PR are the same regardless of whether the PR comes from a branch or a branch on a fork so we won't cover that part."),(0,n.kt)("p",null,"Once you know how to submit a PR via a fork, you can start contributing to open source projects! There are many, many ways to do so \u2014 and you don't need to be an expert coder to contribute. We'll talk about contributing to open source more at the end of this lesson."),(0,n.kt)("h2",{id:"making-a-pr-request-via-a-fork"},"Making a PR Request Via a Fork"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"We covered the basics of forking in ",(0,n.kt)("a",{parentName:"p",href:"../../introduction-to-programming/git-html-and-css/1-1-1-3-practice-github-remote-repositories"},"Practice: GitHub Remote Repositories"),". "),(0,n.kt)("p",null,"To fork a repository, we just need to click the ",(0,n.kt)("em",{parentName:"p"},"Fork")," button in the upper right corner of the repository we want to fork."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"This is the fork button.",src:A(58841).Z,width:"250",height:"126"})),(0,n.kt)("p",null,"There's even a little number by the button that shows how many times the repository has been forked. The above repository doesn't have any forks \u2014 but check out the ",(0,n.kt)("em",{parentName:"p"},"Fork")," button for React:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The React fork button shows nearly 31K forks.",src:A(49067).Z,width:"296",height:"104"})),(0,n.kt)("p",null,"This one has nearly 31,000 forks at the time this screenshot was taken."),(0,n.kt)("p",null,"When you click the ",(0,n.kt)("em",{parentName:"p"},"Fork")," button, you'll be prompted to choose a GitHub account to fork the project to. Once you choose an account (you likely only have one at this point), GitHub will automatically create the fork."),(0,n.kt)("p",null,"Once the project is forked, we can clone that project to our desktop, make a branch, and then make any updates to the branch as needed. ",(0,n.kt)("em",{parentName:"p"},"Do not make changes directly to the main branch.")," We are really following almost the exact same process that we follow when making a PR without a fork."),(0,n.kt)("p",null,"Once the branch is updated, committed, and pushed back to our fork of the project, we can make a PR."),(0,n.kt)("p",null,"To do that, we can open a PR ",(0,n.kt)("em",{parentName:"p"},"in our fork of the project"),". We don't even need to navigate to the original repository."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Making a PR from the fork.",src:A(7899).Z,width:"1876",height:"422"})),(0,n.kt)("p",null,"The image above shows the process of making a PR from a forked repository. GitHub automatically points at the original repository for the base repository while the compare repository is automatically the fork. Note that we should always verify that we are pointing at the correct repositories; we also need to make sure we are pointing at the right branches, too. In the example above, we can see that the compare branch is still on main \u2014 not what we want if we've just made changes to a branch on the fork! So even though GitHub should automatically point to the correct repositories, we still need to verify they are correct and update the branches as needed."),(0,n.kt)("p",null,"After that point, every other part of the PR process is the same as when we make a PR via a branch on the original repository itself."),(0,n.kt)("h2",{id:"contributing-to-open-source-projects"},"Contributing to Open Source Projects"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Open source projects are a huge part of the developer ecosystem. As we mentioned at the beginning of this lesson, many widely-used libraries are open source. By contributing to open source projects, we can get more involved in the developer community, improve our favorite libraries, and add great experience to our resume."),(0,n.kt)("p",null,"At this point, you might be thinking that you don't have enough experience to make an open source contribution. However, that is not the case. You don't need to be an expert coder to make a contribution. In fact, many open source projects have a pool of good first issues for people new to making contributions. Open source maintainers may need help on everything from updating READMEs to writing tests to updating the code itself. Updating a README for a library can be a great way to get to know the library better and get involved in an open source project."),(0,n.kt)("p",null,"We recommend taking the time to make a contribution. For more information on making open source contributions, see ",(0,n.kt)("a",{parentName:"p",href:"http://opensource.guide/how-to-contribute/"},"How to Contribute to Open Source"),", an excellent tutorial from Open Source Guides on making contributions."))}g.isMDXComponent=!0},58841:(e,t,A)=>{A.d(t,{Z:()=>o});const o="data:image/png;base64,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"},7899:(e,t,A)=>{A.d(t,{Z:()=>o});const o=A.p+"assets/images/make-pr-request-from-a-fork-625688e30957af9a12b8bdb37da47a51.png"},49067:(e,t,A)=>{A.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);