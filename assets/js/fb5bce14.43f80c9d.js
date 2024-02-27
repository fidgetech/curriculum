"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[76910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,g=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(g,r(r({ref:t},c),{},{components:n})):o.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={title:"\ud83d\udcd3 2.4.0.7 Hosting a Webpack Project with GH-Pages",day:"weekend",id:"2-4-0-7-hosting-a-webpack-project-with-gh-pages",hide_table_of_contents:!0},r=void 0,s={unversionedId:"intermediate-javascript/team-week/2-4-0-7-hosting-a-webpack-project-with-gh-pages",id:"intermediate-javascript/team-week/2-4-0-7-hosting-a-webpack-project-with-gh-pages",title:"\ud83d\udcd3 2.4.0.7 Hosting a Webpack Project with GH-Pages",description:"In this lesson we'll learn how to host our webpack project on GitHub Pages, also referred to as gh-pages. GitHub Pages is free, and lets us host our HTML, CSS, and Javascript right from the repository. It's a great way to quickly host a web app, and since it's integrated into GitHub, it's a nice option for developers. You may have hosted some projects this way by creating a gh-pages branch in your project, and while we'll end up with the same result here, the process for setting it up is slightly different. We'll make some edits to our package.json, and run some new commands from our terminal. In this lesson we\u2019ll also cover how to deploy a React app built with webpack for students in the React course.",source:"@site/docs/2_intermediate-javascript/4_team-week/AG-2-4-0-7-hosting-a-webpack-project-with-gh-pages.md",sourceDirName:"2_intermediate-javascript/4_team-week",slug:"/intermediate-javascript/team-week/2-4-0-7-hosting-a-webpack-project-with-gh-pages",permalink:"/intermediate-javascript/team-week/2-4-0-7-hosting-a-webpack-project-with-gh-pages",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 2.4.0.7 Hosting a Webpack Project with GH-Pages",day:"weekend",id:"2-4-0-7-hosting-a-webpack-project-with-gh-pages",hide_table_of_contents:!0},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 2.4.0.6 Practicing the Git Workflow",permalink:"/intermediate-javascript/team-week/2-4-0-6-practicing-the-git-workflow"},next:{title:"\ud83d\udcd3 2.4.0.8 Backend Course Preparation: Software Installation",permalink:"/intermediate-javascript/team-week/2-4-0-8-backend-course-preparation-software-installation"}},p={},l=[{value:"Update the <code>package.json</code>",id:"update-the-packagejson",level:2},{value:"Install gh-pages Package",id:"install-gh-pages-package",level:2},{value:"Deploy the site",id:"deploy-the-site",level:2},{value:"For React Projects",id:"for-react-projects",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson we'll learn how to host our webpack project on ",(0,a.kt)("strong",{parentName:"p"},"GitHub Pages"),", also referred to as ",(0,a.kt)("strong",{parentName:"p"},"gh-pages"),". GitHub Pages is free, and lets us host our HTML, CSS, and Javascript right from the repository. It's a great way to quickly host a web app, and since it's integrated into GitHub, it's a nice option for developers. You may have hosted some projects this way by creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch in your project, and while we'll end up with the same result here, the process for setting it up is slightly different. We'll make some edits to our ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", and run some new commands from our terminal. In this lesson we\u2019ll also cover how to deploy a React app built with webpack for students in the React course. "),(0,a.kt)("p",null,"Before we start, one important note about GitHub Pages is that it is ",(0,a.kt)("strong",{parentName:"p"},"not meant")," to host sensitive information, like API keys. The GitHub docs explain more:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"GitHub Pages is not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS). GitHub Pages sites shouldn't be used for sensitive transactions like sending passwords or credit card numbers.")),(0,a.kt)("p",null,"In other words, any information we put in our code will be available to someone visiting our site. If we want to host a site with sensitive information we would need some kind of backend, or server-side code, to store our sensitive information. For now, that is beyond the scope of what we'll do. "),(0,a.kt)("p",null,"To read more about prohibited uses for gh-pages, visit the following documentation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,a.kt)("a",{parentName:"strong",href:"https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#prohibited-uses"},"Link to GitHub Pages Docs")))),(0,a.kt)("h2",{id:"update-the-packagejson"},"Update the ",(0,a.kt)("inlineCode",{parentName:"h2"},"package.json")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"First, we'll add a ",(0,a.kt)("inlineCode",{parentName:"p"},"repository")," key to our ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". We're adding it under the ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," key but the order doesn't matter as long as it is in the top-most level of our package object, the same level as ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"version"),". After we add that, let's set it equal to an object with a ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," key. Use the following code snippet as an example, replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"{REPONAME}")," with your repo and ",(0,a.kt)("inlineCode",{parentName:"p"},"{USERNAME}")," with your GitHub username respectively."),(0,a.kt)("div",{class:"filename"},"./package.json"),"```json",(0,a.kt)("p",null,'{\n"name": "project name",\n"version": "1.0.0",\n"repository": {\n"url": "git+',(0,a.kt)("a",{parentName:"p",href:"https://github.com/%7BUSERNAME%7D/%7BREPONAME%7D.git%22"},'https://github.com/{USERNAME}/{REPONAME}.git"'),"\n},\n...\n}"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' \nNext we\'ll add two new commands to our `scripts` object: \n \n* `predeploy` builds our site and bundles it in the `dist` folder. \n* `deploy` pushes the contents of that folder to a new commit on the `gh-pages` branch, creating that branch if it doesn\'t already exist.\n \n<div class="filename">./package.json</div>\n \n```json\n\n{\n...\n "scripts": {\n   "build": "webpack --mode=development",\n   ...\n   "predeploy": "npm run build",\n   "deploy": "gh-pages -d dist"\n },\n...\n}\n\n')),(0,a.kt)("h2",{id:"install-gh-pages-package"},"Install gh-pages Package"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"gh-pages")," package via the terminal by running the following command in the root of your project's folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ npm install --save-dev gh-pages\n")),(0,a.kt)("p",null,"You should see ",(0,a.kt)("inlineCode",{parentName:"p"},"gh-pages")," listed in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,a.kt)("h2",{id:"deploy-the-site"},"Deploy the site"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"At this point we can run the following command to deploy our site. Make sure to run this command in the root of your project's folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ npm run deploy\n")),(0,a.kt)("p",null,"This will build our project and then publish it to GitHub Pages. You may be curious where the ",(0,a.kt)("inlineCode",{parentName:"p"},"predeploy")," script gets used if we aren\u2019t using it ourselves. Well, gh-pages runs the ",(0,a.kt)("inlineCode",{parentName:"p"},"predeploy")," script automatically before deploying the site to ensure there\u2019s an up-to-date build of our project. We can look in our terminal to see exactly which scripts are executed and in what order. Our terminal should show us that the ",(0,a.kt)("inlineCode",{parentName:"p"},"predeploy")," script is run, which itself calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," script, all  before the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," script executes. Check out the code snippet below that shows an example of the terminal output for deploying. Note that \u2018PROJECTNAME\u2019 will be the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," of your project as listed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ npm run deploy\n \n>PROJECTNAME@1.0.0 predeploy\n> npm run build\n \n> PROJECTNAME@1.0.0 build\n> webpack --mode=development\n \nHash: e6e0a675ea138d2edcd8\nVersion: webpack 4.46.0\nTime: 2553ms\n...\n \n> PROJECTNAME@1.0.0 deploy\n> gh-pages -d dist\n")),(0,a.kt)("p",null,"After we\u2019ve successfully deployed our site, it will be hosted at a URL like this, where ",(0,a.kt)("inlineCode",{parentName:"p"},"{USERNAME}")," is your github username and ",(0,a.kt)("inlineCode",{parentName:"p"},"{REPONAME}")," is the name of your repository : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://{USERNAME}.github.io/{REPONAME}\n")),(0,a.kt)("p",null,"If we want to update our live site with some changes, we\u2019ll need to ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," to the branch that has the most up to date code, then run our deploy script. Typically we deploy from the ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),' branch but it\u2019s possible to deploy from any branch. Each time we deploy, another commit gets made on our gh-pages branch. The commit message will be "Updates" by default, if you want a custom commit message you can specify it by using the ',(0,a.kt)("inlineCode",{parentName:"p"},"-m")," option."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ npm run deploy -- -m "Deploy site with new colors"\n')),(0,a.kt)("p",null,"Finally, note that ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," can take a minute or two to update, so be mindful of that when checking the live site."),(0,a.kt)("h2",{id:"for-react-projects"},"For React Projects"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The process is almost identical for deploying a React site to GitHub Pages. We\u2019ll still update our ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", install gh-pages, and add our new scripts. The difference between this and basic webpack hosting is in the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," script. We need to configure GitHub Pages to deploy the contents of the folder that contains our bundled code, and in a React project that folder is called ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),", as opposed to ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," in our basic webpack projects. Check out the code snippet below that shows how we\u2019ve updated the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," script to point to the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder. "),(0,a.kt)("div",{class:"filename"},"./package.json"),"```json",(0,a.kt)("p",null,'{\n"scripts": {\n...\n"predeploy": "npm run build",\n"deploy": "gh-pages -d build"\n},\n...\n}'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," \nOutside of that the steps are exactly the same. [Optionally, see this repo for a walkthrough of deploying a React project.](https://github.com/gitname/react-gh-pages) \n \n## Further Exploration\n---\n \n### Configure a Publishing Source\n \nIt\u2019s possible to configure our GitHub Pages site to publish when changes are pushed to a specific branch, or we can write a GitHub Actions workflow to publish our site. So for instance we could set our `main` branch as the publishing source and have GitHub automatically deploy any time changes are pushed to the `main` branch. [See this page in the GitHub docs for how to set a custom publishing source.](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)\n \n### Enforce HTTPS\n \nBy default GitHub enforces HTTPS protocol (not HTTP), so you may get errors if your links use HTTP. For the deployed site you'll need to remove any HTTP content. [See this page on enforcing HTTPS in GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https#resolving-problems-with-mixed-content) for more information.\n \n### Un-Publish the Website\n \nIf you want to remove a site from GitHub Pages so it is no longer hosted, [you can find instructions for un-publishing here.](https://docs.github.com/en/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site)\n \nAnd that's it! Our site should be live on GitHub Pages for the whole world to visit.\n")))}d.isMDXComponent=!0}}]);