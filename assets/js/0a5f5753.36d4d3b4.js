"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[93600],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||i;return o?n.createElement(d,a(a({ref:t},p),{},{components:o})):n.createElement(d,a({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},25045:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const i={title:"\u270f\ufe0f 1.1.1.3 Practice: GitHub Remote Repositories",day:"monday",id:"1-1-1-3-practice-github-remote-repositories",hide_table_of_contents:!0},a=void 0,l={unversionedId:"introduction-to-programming/git-html-and-css/1-1-1-3-practice-github-remote-repositories",id:"introduction-to-programming/git-html-and-css/1-1-1-3-practice-github-remote-repositories",title:"\u270f\ufe0f 1.1.1.3 Practice: GitHub Remote Repositories",description:"The main version of our Hello World website is saved on the machines that we used to code the HTML file, hello-world.html.  It is also being tracked by Git in the local .git repository.  When we want to publish our code to the world (or just save it on the cloud so we can access it from any device), we want to store it in a remote repository.  In this lesson, we'll dive in to using GitHub to store our code remotely.",source:"@site/docs/1_introduction-to-programming/1_git-html-and-css/AD-1-1-1-3-practice-github-remote-repositories.md",sourceDirName:"1_introduction-to-programming/1_git-html-and-css",slug:"/introduction-to-programming/git-html-and-css/1-1-1-3-practice-github-remote-repositories",permalink:"/introduction-to-programming/git-html-and-css/1-1-1-3-practice-github-remote-repositories",draft:!1,tags:[],version:"current",frontMatter:{title:"\u270f\ufe0f 1.1.1.3 Practice: GitHub Remote Repositories",day:"monday",id:"1-1-1-3-practice-github-remote-repositories",hide_table_of_contents:!0},sidebar:"introduction-to-programming",previous:{title:"\u270f\ufe0f 1.1.1.2 Practice: Tracking Changes with Git",permalink:"/introduction-to-programming/git-html-and-css/1-1-1-2-practice-tracking-changes-with-git"},next:{title:"\u270f\ufe0f 1.1.1.4 Practice: Command Line Git",permalink:"/introduction-to-programming/git-html-and-css/1-1-1-4-practice-command-line-git"}},s={},c=[{value:"Creating a GitHub repository",id:"creating-a-github-repository",level:2},{value:"Pushing to GitHub",id:"pushing-to-github",level:2},{value:"Cloning from GitHub",id:"cloning-from-github",level:2},{value:"Forking",id:"forking",level:2},{value:"Copying a Project",id:"copying-a-project",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The main version of our Hello World website is saved on the machines that we used to code the HTML file, ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-world.html"),".  It is also being tracked by Git in the ",(0,r.kt)("strong",{parentName:"p"},"local")," ",(0,r.kt)("inlineCode",{parentName:"p"},".git")," repository.  When we want to publish our code to the world (or just save it on the cloud so we can access it from any device), we want to store it in a ",(0,r.kt)("strong",{parentName:"p"},"remote")," repository.  In this lesson, we'll dive in to using GitHub to store our code remotely."),(0,r.kt)("p",null,"First, let's talk about the difference between local and remote.  When we talk about a local repository, we mean one that is accessible only when using the device where it is saved. For example, the projects that you build on Epicodus machines have local ",(0,r.kt)("inlineCode",{parentName:"p"},".git")," repositories. If you want to see your code on another device, you will not be able to access it. A remote repository is one that is saved in a location outside of your device but still accessible by it. We will be saving our code remotely to repositories on GitHub.  "),(0,r.kt)("p",null,"Let's copy our local ",(0,r.kt)("inlineCode",{parentName:"p"},".git")," repository to a remote repository on GitHub now.  "),(0,r.kt)("h2",{id:"creating-a-github-repository"},"Creating a GitHub repository"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"First, we need to create the remote repository on GitHub.  Each pair partner creates a remote repository using their own GitHub account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GitHub new repo button",src:o(45718).Z,width:"756",height:"172"})),(0,r.kt)("p",null,"Once logged in, we'll select the ",(0,r.kt)("em",{parentName:"p"},"New Repository")," or ",(0,r.kt)("em",{parentName:"p"},"New")," button to go to the ",(0,r.kt)("em",{parentName:"p"},"Create a new repository")," screen:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GitHub new repository",src:o(9027).Z,width:"632",height:"487"})),(0,r.kt)("p",null,"Let's walk through the options we need to complete for our new repository."),(0,r.kt)("p",null,'First, we enter the repository name that matches the name of our project directory.  For this project, we\'ll enter "hello-world".  Though the description is optional, it can be helpful to our future selves and anyone else looking at our repository to see a quick description of its content.  '),(0,r.kt)("p",null,"You can have ",(0,r.kt)("em",{parentName:"p"},"public")," or ",(0,r.kt)("em",{parentName:"p"},"private")," repositories. A ",(0,r.kt)("em",{parentName:"p"},"public")," repository means that everyone can see the contents of the repository but as the owner of it, you will be the only person who can determine what code can be committed to it. A ",(0,r.kt)("em",{parentName:"p"},"private")," repository is one that only you can see.  We require that you set the repositories you create at Fidgetech to ",(0,r.kt)("em",{parentName:"p"},"public")," so that your instructors can see your work and so you can show your journey as a developer through your code."),(0,r.kt)("p",null,"The last option asks whether or not to initialize the repository with a ",(0,r.kt)("strong",{parentName:"p"},"README"),".  A README file is a detailed description of the repository including information like authors, usage instructions and licensing.  ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Do not check this box"),"."),"  We will be exploring what a README is and how we add it to our repositories in a future lesson."),(0,r.kt)("h2",{id:"pushing-to-github"},"Pushing to GitHub"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"With an empty repository awaiting our code, we can now follow the steps to ",(0,r.kt)("strong",{parentName:"p"},"push")," our code from our local repository to the remote repository."),(0,r.kt)("p",null,"In our project directory, we will make sure our code is working.  In this case, we open it in the browser and it looks good.  We also ensure that there aren't any outstanding changes that we still need to commit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git status\n")),(0,r.kt)("p",null,"Now we need to tell Git where our remote repository is by providing the web address.  We'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"git remote")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git remote add al https://github.com/ada-lovelace/hello-world\n")),(0,r.kt)("p",null,"This command tells Git to store information about a remote repository that we gave the nickname,  ",(0,r.kt)("inlineCode",{parentName:"p"},"al")," (the initials for our user in this example - Ada Lovelace)  located at ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://github.com/epicodus-lessons/hello-world"},"https://github.com/epicodus-lessons/hello-world")),".  We could use any nickname for the remote but we've chosen ",(0,r.kt)("inlineCode",{parentName:"p"},"al")," for brevity and to be consistent with the initials that we use if we are pair programming."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("em",{parentName:"p"},"your")," command should contain the URL location for ",(0,r.kt)("em",{parentName:"p"},"your")," GitHub repo. Ours is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/epicodus-lessons/hello-world")," in the example above, but yours will likely differ."),(0,r.kt)("p",null,"To see that Git has done this successfully, we can run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git remote -v\nal https://github.com/ada-lovelace/hello-world\n")),(0,r.kt)("p",null,"This shows us all the remotes stored in Git for this project.  In this case, we only have one, with the nickname ",(0,r.kt)("inlineCode",{parentName:"p"},"al"),"."),(0,r.kt)("p",null,"To push our code, which means we are copying it from the local to the remote, we run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git push al main\n")),(0,r.kt)("p",null,"This indicates that we should push code to the remote with the nickname ",(0,r.kt)("inlineCode",{parentName:"p"},"al")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch. The ",(0,r.kt)("strong",{parentName:"p"},"main")," branch is now the default branch in git. The default branch used to be called the master branch in the past. However, GitHub has since updated the name due to the racist connotations of the term master when used in the programming industry. We strongly support this shift."),(0,r.kt)("p",null,"In the future, we'll see that we can have many copies of a repository on our local machines all in different stages of development. The ",(0,r.kt)("strong",{parentName:"p"},"main")," is always considered the main copy. Remember that the term master and main are technically interchangeable \u2014 but one doesn't have negative connotations while the other does."),(0,r.kt)("p",null,"For security reasons, only the owner of the remote GitHub repository is able to push code to it. This means that we need to enter our login information to confirm our ownership. That means we need to enter our username as well as a personal access token (PAT). To review the instructions on creating a PAT, see ",(0,r.kt)("a",{parentName:"p",href:"https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-intro-to-programming/1-0-0-22-creating-and-using-a-git-pat"},"Creating and Using a Git PAT"),". Once we've entered our credentials, our code is copied to the GitHub repository and we can see it online if we go to our GitHub repository URL ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://github.com/ada-lovelace/hello-world"},"https://github.com/ada-lovelace/hello-world")),". We can see the file structure and the commits in GUI form that we saw in our terminal. Note that the URL above is just an example that doesn't exist \u2014 your personal URL will be different."),(0,r.kt)("h2",{id:"cloning-from-github"},"Cloning from GitHub"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"So, how do we get our code back to our local from the remote? What if we push our code up to GitHub at Epicodus and want to work on it at home on our personal devices? To do this, we'll need to ",(0,r.kt)("strong",{parentName:"p"},"clone")," our GitHub repository on our local machines.  "),(0,r.kt)("p",null,"To practice this, let's delete our ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-world")," project directory and clone it again from GitHub.  To delete a whole directory, we can't be in it so we'll go up a directory level and then remove it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ..\n$ rm -rf hello-world\n")),(0,r.kt)("p",null,"Poof!  Gone.  Now, if we want to copy it in the exact same location from GitHub, we get the URL for the remote repository and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/ada-lovelace/hello-world\n")),(0,r.kt)("p",null,"As long as it's a public repository (and it probably will be), you won't need to enter your credentials. If it's a private repository, you will need to enter your credentials (if they aren't saved in a credential manager yet)."),(0,r.kt)("p",null,"Now an ",(0,r.kt)("inlineCode",{parentName:"p"},"ls")," shows us our directory is there with our code file in it.  Let's go into the project directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd hello-world\n")),(0,r.kt)("p",null,"If we do a ",(0,r.kt)("inlineCode",{parentName:"p"},"git log"),", we see that our commit history arrived with our directory and code.  "),(0,r.kt)("p",null,"If we run ",(0,r.kt)("inlineCode",{parentName:"p"},"git remote"),", we also see that our newly created local ",(0,r.kt)("inlineCode",{parentName:"p"},".git")," repository is automatically linked \u2014 with the nickname ",(0,r.kt)("strong",{parentName:"p"},"origin")," \u2014 to the remote repository from which we cloned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git remote\norigin\n")),(0,r.kt)("p",null,"If we make changes to the code and want to push again, we would be able to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"origin")," nickname that came with the repository from GitHub (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"git push origin main"),")."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'Note: only one location can be designated with the nickname "origin".  So, if we clone one project but want to push to two different repositories, they cannot both be nicknamed "origin".  That is another good reason to use your initials as the nickname of the remote repository.')),(0,r.kt)("p",null,"Whew!  This has been a mountain of Git concepts and terminology to explore.  Don't try and memorize this information.  Use the cheat sheets for reference to walk through set up and usage in your projects to come.  Before you know it, it'll become ingrained in your daily workflow.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Be sure that you are not cloning a project inside of an existing local repository. In other words, you should ",(0,r.kt)("em",{parentName:"strong"},"not")," be inside of a project directory when you run the ",(0,r.kt)("inlineCode",{parentName:"strong"},"git clone")," command. Otherwise you'll end up with one git repository inside of another.")),(0,r.kt)("h2",{id:"forking"},"Forking"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"If you're working with a pair, you might get a little jealous with all your co-authored code showing up on your pair's Github account. Don't worry, you can add the project to your account by ",(0,r.kt)("em",{parentName:"p"},"forking")," the repository."),(0,r.kt)("p",null,"When you're done working on a project with your pair and you've made your last push to your pair's account, visit the repository on Github (eg ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/your-pairs-name/hello-world"},"https://github.com/your-pairs-name/hello-world"),"). In the upper right corner, click Fork. The image below shows what the Fork button should look like."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The &#39;Fork&#39; button on GitHub.",src:o(82620).Z,width:"369",height:"60"})),(0,r.kt)("p",null,"After GitHub does it's magic, you'll have a copy of the repo in your account."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Take note!")," If one of you makes a new commit and pushes it to your account, the change won't be reflected in the other one's account. You'll learn later how to keep your forked repositories in sync."),(0,r.kt)("h2",{id:"copying-a-project"},"Copying a Project"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Alternatively, if you want to have the project show up in your account as a repository and not as a fork, you can clone the project from your pair's account and then push it to your account. You'll need to remove the remote and add your own remote to do this. Here are the steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the account of the person that currently has the repository for the project. Clone the project to your desktop."),(0,r.kt)("li",{parentName:"ol"},'Create a new project in your Github account. Then click the green "Clone or download" button and copy the link provided.'),(0,r.kt)("li",{parentName:"ol"},"Go to the top level of the project directory of the project you cloned (from your pair's repository) in the terminal."),(0,r.kt)("li",{parentName:"ol"},"Check the remote repository with the command ",(0,r.kt)("inlineCode",{parentName:"li"},"git remote -v"),". You'll see something similar to the following code. The first word is the identifier for the remote repo, and the URL for the remote repo follows the identifier. In the following example, the identifier is ",(0,r.kt)("inlineCode",{parentName:"li"},"origin"),", but it might be the owner's initials or something else.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"origin  https://github.com/OWNER/REPOSITORY.git (fetch)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"origin  https://github.com/OWNER/REPOSITORY.git (push)"))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"To remove a remote repo, enter the command ",(0,r.kt)("inlineCode",{parentName:"li"},"git remote rm <identifier>")," where ",(0,r.kt)("inlineCode",{parentName:"li"},"<identifier>")," is the remote's identifier. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the identifier is ",(0,r.kt)("inlineCode",{parentName:"li"},"origin"),", then the command will be ",(0,r.kt)("inlineCode",{parentName:"li"},"git remote rm origin"),". "),(0,r.kt)("li",{parentName:"ul"},"If the identifier is ",(0,r.kt)("inlineCode",{parentName:"li"},"fpk"),", you'd do ",(0,r.kt)("inlineCode",{parentName:"li"},"git remote rm fpk"),". "),(0,r.kt)("li",{parentName:"ul"},"Note that ",(0,r.kt)("inlineCode",{parentName:"li"},"rm"),' is a Git command for "remove".')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Confirm that the remote has been removed by entering ",(0,r.kt)("inlineCode",{parentName:"li"},"git remote -v")," again. Nothing should show up. That means the remote has been removed. If it hasn't been removed correctly, return to step 4."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"git remote add origin [your-project-url-here]"),". You can use an identifier other than ",(0,r.kt)("inlineCode",{parentName:"li"},"origin"),". Make sure that you put in the project URL that you copied from the repository you created in ",(0,r.kt)("em",{parentName:"li"},"your")," account here."),(0,r.kt)("li",{parentName:"ol"},"You can confirm that the new remote is correctly linked with ",(0,r.kt)("inlineCode",{parentName:"li"},"git remote -v"),"."),(0,r.kt)("li",{parentName:"ol"},"Once the remote is correctly linked to the repository in your account, you can push the code to your repository.")),(0,r.kt)("p",null,"In order for your contributions to show up in Github (you'll learn more about Github contributions soon), you'll need to add any repositories where you have contributions to your account. Either forking or copying the project to your account will ensure that the project shows up in your Github contributions. They'll also be easily available for you to use and for others to see in your account. This is also helpful if you need access to a repository later \u2014 either because you want to work on it further or if you want to use it as a learning reference. If the original repository is deleted by your pair, you won't lose access as well."),(0,r.kt)("p",null,"Make sure you always fork or copy over projects you work on at the end of the day."))}h.isMDXComponent=!0},9027:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create-new-repo-e3389478a0962385d40c69a3de7ebfe3.png"},45718:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/new-repo-button-5d6939c1fc26831693cbb18e01ff9c0b.jpg"},82620:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);