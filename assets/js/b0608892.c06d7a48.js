"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[80965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"\ud83d\udcd3 1.0.0.21 Git Configurations",day:"weekend",id:"1-0-0-21-git-configurations",hide_table_of_contents:!0},i=void 0,l={unversionedId:"pre-work/getting-started-with-intro-to-programming/1-0-0-21-git-configurations",id:"pre-work/getting-started-with-intro-to-programming/1-0-0-21-git-configurations",title:"\ud83d\udcd3 1.0.0.21 Git Configurations",description:"After installing Git, we recommend a few Git configurations that will make using Git on your own device similar to the experience you will have at Epicodus.",source:"@site/docs/0_pre-work/1_getting-started-with-intro-to-programming/AH-1-0-0-21-git-configurations.md",sourceDirName:"0_pre-work/1_getting-started-with-intro-to-programming",slug:"/pre-work/getting-started-with-intro-to-programming/1-0-0-21-git-configurations",permalink:"/v1.2/pre-work/getting-started-with-intro-to-programming/1-0-0-21-git-configurations",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 1.0.0.21 Git Configurations",day:"weekend",id:"1-0-0-21-git-configurations",hide_table_of_contents:!0},sidebar:"pre-work",previous:{title:"\ud83d\udcd3 1.0.0.20 Git and GitHub",permalink:"/v1.2/pre-work/getting-started-with-intro-to-programming/1-0-0-20-git-and-github"},next:{title:"\ud83d\udcd3 1.0.0.22 Creating and Using a Git PAT",permalink:"/v1.2/pre-work/getting-started-with-intro-to-programming/1-0-0-22-creating-and-using-a-git-pat"}},s={},u=[{value:"Make VS Code the Default Editor",id:"make-vs-code-the-default-editor",level:2},{value:"Make Main Branch the Default Branch",id:"make-main-branch-the-default-branch",level:2},{value:"Configure Color Output",id:"configure-color-output",level:2},{value:"Configure Global Author Settings",id:"configure-global-author-settings",level:2},{value:"Configure Local Author Settings",id:"configure-local-author-settings",level:2},{value:"Ignore files",id:"ignore-files",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After installing Git, we recommend a few Git configurations that will make using Git on your own device similar to the experience you will have at Epicodus."),(0,a.kt)("h2",{id:"make-vs-code-the-default-editor"},(0,a.kt)("a",{parentName:"h2",href:"#make-vs-code-the-default-editor"},"Make VS Code the Default Editor")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mac users:")," To make Git use the VS Code text editor to interact with you instead of ",(0,a.kt)("strong",{parentName:"p"},"vim")," (or whatever your system's default terminal editor may be) run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ git config --global core.editor "code --wait"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows users:")," You should've already set up VS Code to be the default editor when you installed Git Bash."),(0,a.kt)("h2",{id:"make-main-branch-the-default-branch"},(0,a.kt)("a",{parentName:"h2",href:"#make-main-branch-the-default-branch"},"Make Main Branch the Default Branch")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," You probably won't need to do this because GitHub now uses ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),". However, we provide these instructions here if your repositories are still defaulting to ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),"."),(0,a.kt)("p",null,"In the past, the name of the default branch in GitHub was ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),".  ",(0,a.kt)("em",{parentName:"p"},"Master")," can mean many things \u2014 for instance, mastering a new skill is good! Or creating a master list for all the errands you need to run means you are staying organized."),(0,a.kt)("p",null,"However, in the past the term ",(0,a.kt)("em",{parentName:"p"},"master")," in the tech industry has often been paired with the term ",(0,a.kt)("em",{parentName:"p"},"slave"),", particularly when referring to when a device or process controls another device or process. This use of the term ",(0,a.kt)("em",{parentName:"p"},"master")," in this context has a very negative connotation. For this reason, GitHub made a formal change so that the default is named ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),", not ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),". If you started your GitHub account recently (such as with the beginning of this course), ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," should be the name of your default branch. However, if it isn't, you can change it with the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git config --global init.defaultBranch main\n")),(0,a.kt)("p",null,"Note that some of the example repositories you will be working with at Epicodus still have a ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," branch. This is because these repositories will all need to be rebuilt from scratch using a ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch so the commit history doesn't include a ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," branch. This is a lot of work! It will be a while before all the sample repositories we use will be updated. If you are working from an Epicodus repository that has a ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," branch, you can change the default branch to ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git branch -m master main\n")),(0,a.kt)("p",null,"Then, when you push the code to your own repository, you'll be able to do something like ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git push origin main"),"."),(0,a.kt)("h2",{id:"configure-color-output"},(0,a.kt)("a",{parentName:"h2",href:"#configure-color-output"},"Configure Color Output")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Setting this ",(0,a.kt)("strong",{parentName:"p"},"global")," configuration will color code Git information in the terminal for easier reading:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ git config --global color.ui true\n")),(0,a.kt)("h2",{id:"configure-global-author-settings"},(0,a.kt)("a",{parentName:"h2",href:"#configure-global-author-settings"},"Configure Global Author Settings")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We can set up a global configuration for our git user name and email. You should only do this on your personal machine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ git config --global user.name "Padma Patil"\n$ git config --global user.email "padma@email.com"\n')),(0,a.kt)("p",null,"This sets the name and email for every save that is made in any directory anywhere on the device. If you are setting this on your personal device, you will only have to set this once for it to be set on every project."),(0,a.kt)("h2",{id:"configure-local-author-settings"},(0,a.kt)("a",{parentName:"h2",href:"#configure-local-author-settings"},"Configure Local Author Settings")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Note that you can override the global setting for a single repository by removing the global flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ git user.name "Jasmine Hart"\n$ git user.email "jasmine@email.com"\n')),(0,a.kt)("p",null,"If Padma's credentials were set up globally and Jasmine's were set up in an individual ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," project, when commits are added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," project, Jasmine's configuration would be used. Padma's would still be used for all projects ",(0,a.kt)("em",{parentName:"p"},"not")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," directory."),(0,a.kt)("h2",{id:"ignore-files"},(0,a.kt)("a",{parentName:"h2",href:"#ignore-files"},"Ignore files")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Once a Git repository is created in your project directory, Git will track ",(0,a.kt)("em",{parentName:"p"},"every")," file and folder there, even the ones you may not want included in your project! For example, operating systems often add files without input from you.  For example, Macs create hidden files in most directories called ",(0,a.kt)("inlineCode",{parentName:"p"},".DS_Store"),". Windows directories often contain files called ",(0,a.kt)("inlineCode",{parentName:"p"},"Thumbs.db"),"."),(0,a.kt)("p",null,'To ignore these files in all of your Git repositories, you can create an "ignore file" in your home directory with the ',(0,a.kt)("inlineCode",{parentName:"p"},"global")," tag to indicate this is for ",(0,a.kt)("em",{parentName:"p"},"every")," Git repository that is created anywhere on the device.  "),(0,a.kt)("p",null,"Here are the steps:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1."),"  Navigate to your home directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2."),"  Create an empty, new file in your home directory called ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore_global"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ touch .gitignore_global\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3."),"  Open your new file in VS Code (or you can use an editor in the terminal like Nano or Vim, if you prefer):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ code .gitignore_global\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4."),"  Within the file you've just opened in VS Code, or a Terminal text editor (like Nano or Vim), add rules for the files and file types you want ignored by creating a list. Each kind of file should reside on a new line. (See example below)"),(0,a.kt)("p",null,"At this point, you may not know what files you'd want to ignore globally. That's fine.  To get started, copy and paste the list below into your ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore_global")," file (from GitHub's ",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/octocat/9257657"},"list"),"). This will ensure that pesky files generated by your operating system will not fill up your project folders:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# OS generated files #\n######################\n.DS_Store\n.DS_Store?\n._*\n.Spotlight-V100\n.Trashes\n.vscode\nehthumbs.db\nThumbs.db\n")),(0,a.kt)("p",null,"As you gain experience with the kinds of files you don't want cluttering your Git repository, you can return to your ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file and add others."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5."),"  Tell Git to use this file as a rule for all of the coding projects you set up on this computer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ git config --global core.excludesfile ~/.gitignore_global\n")),(0,a.kt)("p",null,"One last thing: note that all file names that begin with a ",(0,a.kt)("inlineCode",{parentName:"p"},".")," are hidden, so files like ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore_global")," won't be visible either in the GUI (graphical user interface) or with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ls")," command. Instead, you'll need to use the ",(0,a.kt)("strong",{parentName:"p"},"all")," flag like this ",(0,a.kt)("inlineCode",{parentName:"p"},"ls -a")," in order to see these hidden files."))}d.isMDXComponent=!0}}]);