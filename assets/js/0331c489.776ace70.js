"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[84796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,u=p["".concat(d,".").concat(h)]||p[h]||m[h]||a;return n?i.createElement(u,r(r({ref:t},c),{},{components:n})):i.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},69604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const a={title:"\ud83d\udcd3 1.0.0.18 Interacting with the Command Line",day:"weekend",id:"1-0-0-18-interacting-with-the-command-line",hide_table_of_contents:!0},r=void 0,l={unversionedId:"pre-work/getting-started-with-intro-to-programming/1-0-0-18-interacting-with-the-command-line",id:"pre-work/getting-started-with-intro-to-programming/1-0-0-18-interacting-with-the-command-line",title:"\ud83d\udcd3 1.0.0.18 Interacting with the Command Line",description:"In the last lesson, we learned how to access the command line. In this lesson, we'll explore some of the most common commands we can use with Bash. We'll use many of these daily at Epicodus and also out in the industry.",source:"@site/docs/0_pre-work/1_getting-started-with-intro-to-programming/AE-1-0-0-18-interacting-with-the-command-line.md",sourceDirName:"0_pre-work/1_getting-started-with-intro-to-programming",slug:"/pre-work/getting-started-with-intro-to-programming/1-0-0-18-interacting-with-the-command-line",permalink:"/v1.2/pre-work/getting-started-with-intro-to-programming/1-0-0-18-interacting-with-the-command-line",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 1.0.0.18 Interacting with the Command Line",day:"weekend",id:"1-0-0-18-interacting-with-the-command-line",hide_table_of_contents:!0},sidebar:"pre-work",previous:{title:"\ud83d\udcd3 1.0.0.17 Introduction to the Command Line",permalink:"/v1.2/pre-work/getting-started-with-intro-to-programming/1-0-0-17-introduction-to-the-command-line"},next:{title:"\ud83d\udcd3 1.0.0.19 Practice: Command Line",permalink:"/v1.2/pre-work/getting-started-with-intro-to-programming/1-0-0-19-practice-command-line"}},d={},s=[{value:"Basics of the Command Line",id:"basics-of-the-command-line",level:2},{value:"Retrieving Current Location with <code>$ pwd</code>",id:"retrieving-current-location-with--pwd",level:3},{value:"Creating New Directories",id:"creating-new-directories",level:3},{value:"Listing All Content with <code>$ ls</code>",id:"listing-all-content-with--ls",level:3},{value:"Moving Between Directories with <code>$ cd</code>",id:"moving-between-directories-with--cd",level:3},{value:"<code>$ cd directory-name</code>",id:"-cd-directory-name",level:4},{value:"<code>$ cd ..</code>",id:"-cd-",level:4},{value:"Creating Files",id:"creating-files",level:3},{value:"Moving Files",id:"moving-files",level:3},{value:"Deleting Files with <code>$ rm file-name</code>",id:"deleting-files-with--rm-file-name",level:3},{value:"Deleting Directories",id:"deleting-directories",level:3}],c={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the last lesson, we learned how to access the command line. In this lesson, we'll explore some of the most common commands we can use with Bash. We'll use many of these daily at Epicodus and also out in the industry."),(0,o.kt)("h2",{id:"basics-of-the-command-line"},(0,o.kt)("a",{parentName:"h2",href:"#basics-of-the-command-line"},"Basics of the Command Line")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To execute a command we just click within the terminal window and begin typing. Text is inserted where our cursor is located, directly after the prompt. After typing a command we press ",(0,o.kt)("em",{parentName:"p"},"Enter")," to execute it."),(0,o.kt)("p",null,"In this lesson, we'll learn how to use the command line to do the following: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Printing the working directory"),(0,o.kt)("li",{parentName:"ul"},"Create new files and directories"),(0,o.kt)("li",{parentName:"ul"},"Navigate between directories"),(0,o.kt)("li",{parentName:"ul"},"Looking at the contents of a directory"),(0,o.kt)("li",{parentName:"ul"},"Moving files"),(0,o.kt)("li",{parentName:"ul"},"Removing files")),(0,o.kt)("p",null,"Before we get started, we need to navigate to the desktop. If you are using a Mac, type the following in the terminal and then press ",(0,o.kt)("em",{parentName:"p"},"Enter"),". ",(0,o.kt)("strong",{parentName:"p"},"Remember \u2014  you ",(0,o.kt)("em",{parentName:"strong"},"shouldn't")," type in the ",(0,o.kt)("inlineCode",{parentName:"strong"},"$")," \u2014 that's a symbol for the prompt itself, not the command you should type in!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd ~/Desktop\n")),(0,o.kt)("p",null,"The command above moves us from the home directory to the desktop. We'll discuss this further shortly!"),(0,o.kt)("p",null,'If you are a Windows user, right click on the desktop and click "Git Bash here", which will open a Git Bash screen on the Desktop. You are already in the desktop directory.'),(0,o.kt)("h3",{id:"retrieving-current-location-with--pwd"},(0,o.kt)("a",{parentName:"h3",href:"#retrieving-current-location-with-pwd"},"Retrieving Current Location with ",(0,o.kt)("inlineCode",{parentName:"a"},"$ pwd"))),(0,o.kt)("p",null,"We can verify that we are on the desktop with the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ pwd")," command, which prints your current location to the screen. ",(0,o.kt)("inlineCode",{parentName:"p"},"pwd")," stands for ",(0,o.kt)("em",{parentName:"p"},"print working directory"),". A ",(0,o.kt)("strong",{parentName:"p"},"directory")," is the more formal term for what we normally call a folder. A directory can hold other files and directories."),(0,o.kt)("p",null,"We can use the command line to look around our computer just like we would with the Mac Finder or Windows Explore programs. The only difference is that we are using a text-based interface instead of a graphical user interface (GUI)."),(0,o.kt)("p",null,"Type in ",(0,o.kt)("inlineCode",{parentName:"p"},"$ pwd")," to check your current directory. On Epicodus computers,  we'll see the following (as long as we followed the above directions to navigate to the desktop). ",(0,o.kt)("inlineCode",{parentName:"p"},"pwd")," returns a file ",(0,o.kt)("strong",{parentName:"p"},"path")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/Users/Guest/Desktop\n")),(0,o.kt)("p",null,"A path is exactly what it sounds like \u2014 the path a user would take to get from the root directory of a machine to the directory that we are currently in. Note that the root directory is different from the home directory. The home directory has a lot of stuff \u2014 including our personal files \u2014 while the root directory contains ",(0,o.kt)("em",{parentName:"p"},"everything")," on our machine \u2014 including our home directory. "),(0,o.kt)("p",null,"In the example above, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Desktop")," directory is inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"Guest")," directory, which in turn is inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"Users")," directory, which is in our root directory."),(0,o.kt)("p",null,"If you are using your personal computer, your results will vary. However, one thing should remain the same \u2014 we are all in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Desktop")," directory at the moment, so the directory listed on the right side of the path should be ",(0,o.kt)("inlineCode",{parentName:"p"},"Desktop")," \u2014 the same for everyone."),(0,o.kt)("p",null,"When we open the Terminal application on a Mac or open Git Bash via Windows Explorer, we begin in the home directory by default. However, on our personal machines, the path from the home directory to the desktop can vary depending on the operating systems we use. That's why we ensured that we all started in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Desktop")," directory."),(0,o.kt)("p",null,"If you are using the command line and you're unsure exactly where you are, just run the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ pwd")," command."),(0,o.kt)("h3",{id:"creating-new-directories"},(0,o.kt)("a",{parentName:"h3",href:"#creating-new-directories"},"Creating New Directories")),(0,o.kt)("p",null,"Before we learn to navigate through different directories, we're going to create several new directories. We can do so with the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ mkdir")," command, which is short for ",(0,o.kt)("em",{parentName:"p"},"make directory"),"."),(0,o.kt)("p",null,"Type the following into the command line (and then press ",(0,o.kt)("em",{parentName:"p"},"Enter"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ mkdir coding-practice\n")),(0,o.kt)("p",null,"This will create a directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"coding-practice")," on your desktop. As we can see, the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ mkdir")," command can't be run on its own \u2014 it needs to know the name of the directory that should be created. To do this, we put a space after ",(0,o.kt)("inlineCode",{parentName:"p"},"$ mkdir"),' and then write the name of the directory we want to create. We also put a hyphen between "coding" and "practice" \u2014 otherwise, the ',(0,o.kt)("inlineCode",{parentName:"p"},"$ mkdir")," command will create ",(0,o.kt)("em",{parentName:"p"},"two")," directories, one named ",(0,o.kt)("inlineCode",{parentName:"p"},"coding")," and one named ",(0,o.kt)("inlineCode",{parentName:"p"},"practice"),". That's not what we want here! It is common convention for developers to use hyphens or underscores for file names that have more than one word."),(0,o.kt)("p",null,"It may not seem very intuitive to create a directory this way at first, but most developers prefer this approach to the more cumbersome point and click interface of the GUI. For instance, if we wanted to create five new directories, we could do something like the following. (Don't actually run this command \u2014 it's just an example.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ mkdir coding1 coding2 coding3 coding4 coding5\n")),(0,o.kt)("p",null,"That's much quicker than using the GUI to create five directories separately."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"$ mkdir")," command will always create a directory in our current working directory. We know our current working directory is ",(0,o.kt)("inlineCode",{parentName:"p"},"Desktop")," because of the ",(0,o.kt)("inlineCode",{parentName:"p"},"pwd")," command. In fact, this is true of all Bash commands \u2014 they will be executed from the current working directory."),(0,o.kt)("p",null,"It often matters where a command is executed so pay close attention to your current directory. For instance, it's a common beginner mistake to accidentally create a new directory in the home directory, only to wonder why it's not showing up on the desktop."),(0,o.kt)("p",null,"Let's create one more directory for practice:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ mkdir my-first-website\n")),(0,o.kt)("p",null,"At this point, we should have at least two directories on our desktop. On your personal machine, you may have more... maybe even too many if your desktop tends to get overwhelmed with stuff!"),(0,o.kt)("h3",{id:"listing-all-content-with--ls"},(0,o.kt)("a",{parentName:"h3",href:"#listing-all-content-with-ls"},"Listing All Content with ",(0,o.kt)("inlineCode",{parentName:"a"},"$ ls"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"$ ls")," command stands for ",(0,o.kt)("em",{parentName:"p"},"list"),".  Executing this command prompts the terminal to list out the directories (\"directories\" is just a technical term for folders) and files in our current location. Let's run the command now. There should be somewhere between two and too many directories, depending on the state of your personal machine. Let's imagine, though, that we have an absolutely pristine desktop (because we are so organized and ready to start coding). Running this command will look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epicodus-5:~ Guest$ ls\ncoding-practice         my-first-website\n")),(0,o.kt)("p",null,"We see a list of the directories we just created. We can also list out the directories inside of one of these directories by including its name after the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ ls")," command. Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ls coding-practice\n")),(0,o.kt)("p",null,"Note that no files or directories will show up, but that's expected \u2014 we haven't added anything to ",(0,o.kt)("inlineCode",{parentName:"p"},"coding-practice")," yet."),(0,o.kt)("p",null,"We'll learn how to make files soon, but first let's see how we can navigate between directories."),(0,o.kt)("h3",{id:"moving-between-directories-with--cd"},(0,o.kt)("a",{parentName:"h3",href:"#moving-between-directories-with-cd"},"Moving Between Directories with ",(0,o.kt)("inlineCode",{parentName:"a"},"$ cd"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$ cd")," stands for ",(0,o.kt)("em",{parentName:"p"},"change directory"),". As the name implies, this command allows us to navigate to a different directory from the one we're currently located in. Just as with ",(0,o.kt)("inlineCode",{parentName:"p"},"$ mkdir"),", we can't run the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ cd")," command on its own. In this case, the command line needs to know which directory it should move to."),(0,o.kt)("p",null,"Let's look at several ways to execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ cd")," command:"),(0,o.kt)("h4",{id:"-cd-directory-name"},(0,o.kt)("inlineCode",{parentName:"h4"},"$ cd directory-name")),(0,o.kt)("p",null,"We can include the name of a directory we'd like to navigate to after the ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," command. For instance, if we want to move into the ",(0,o.kt)("inlineCode",{parentName:"p"},"coding-practice")," directory, we'd run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd coding-practice\n")),(0,o.kt)("p",null,"After we run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ cd"),", no text is printed to the screen. ",(0,o.kt)("strong",{parentName:"p"},"This is normal.")," However, the prompt preceding the command line will change to reflect our new location. Instead of seeing something like ",(0,o.kt)("inlineCode",{parentName:"p"},"$ desktop"),", we'll see ",(0,o.kt)("inlineCode",{parentName:"p"},"$ coding-practice"),". We can verify our current directory with the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ pwd")," command."),(0,o.kt)("p",null,"Remember the command that Mac users executed at the beginning of this lesson to get to the desktop?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd ~/Desktop\n")),(0,o.kt)("p",null,"In the example above, we used ",(0,o.kt)("inlineCode",{parentName:"p"},"$ cd")," to move to the directory on the right side of the path (",(0,o.kt)("inlineCode",{parentName:"p"},"Desktop"),"). The ",(0,o.kt)("inlineCode",{parentName:"p"},"~")," (tilde symbol) represents the home directory on a Mac (as well as Linux operating systems). We can always return to the home directory on a Mac or Linux operating system by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"$ cd ~"),". We can then specify additional directories in the path to navigate elsewhere from the home directory. (Windows doesn't use the tilde symbol to represent the home directory, so Windows users won't be able to use this shortcut \u2014 unless you are using Git Bash, which does use the tilde symbol.)"),(0,o.kt)("p",null,"In other words, as long as we know the correct path, we can get anywhere on our computer with one ",(0,o.kt)("inlineCode",{parentName:"p"},"$ cd")," command. For instance, to get to the ",(0,o.kt)("inlineCode",{parentName:"p"},"coding-practice")," directory from anywhere on a Mac machine, we'd just add ",(0,o.kt)("inlineCode",{parentName:"p"},"coding-practice")," to the command above: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd ~/Desktop/coding-practice\n")),(0,o.kt)("p",null,"While Windows users don't have the ",(0,o.kt)("inlineCode",{parentName:"p"},"~")," shortcut, the same general idea applies. As long as we input the correct path, we can use a single ",(0,o.kt)("inlineCode",{parentName:"p"},"$ cd")," command to move through any number of directories."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$ cd")," is one of the most useful commands that you'll learn \u2014 and we will be using it all the time at Epicodus."),(0,o.kt)("h4",{id:"-cd-"},(0,o.kt)("inlineCode",{parentName:"h4"},"$ cd ..")),(0,o.kt)("p",null,"Including two dots, like this ",(0,o.kt)("inlineCode",{parentName:"p"},".."),", navigates to the directory one level above the current directory. If we are in the ",(0,o.kt)("inlineCode",{parentName:"p"},"coding-practice")," directory, ",(0,o.kt)("inlineCode",{parentName:"p"},"$ cd ..")," will take us up one level to the ",(0,o.kt)("inlineCode",{parentName:"p"},"desktop")," directory. We could keep executing ",(0,o.kt)("inlineCode",{parentName:"p"},"$ cd ..")," until we reach our root directory \u2014 then we can't go any further."),(0,o.kt)("p",null,"If we wanted to go up two levels, we could do something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd ../..\n")),(0,o.kt)("p",null,"As you might guess, we'd just add ",(0,o.kt)("inlineCode",{parentName:"p"},"/..")," to the command to go up yet another level."),(0,o.kt)("h3",{id:"creating-files"},(0,o.kt)("a",{parentName:"h3",href:"#creating-files"},"Creating Files")),(0,o.kt)("p",null,"We've learned how to create directories already. Now it's time to learn how to create files. We can do so with the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ touch")," command. Let's add a new file to the ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-website")," directory. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ cd")," command to get to that directory. If you are currently in the ",(0,o.kt)("inlineCode",{parentName:"p"},"coding-practice")," directory, we could get there by doing the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd ../my-first-website\n")),(0,o.kt)("p",null,"In the example above, we specify a ",(0,o.kt)("strong",{parentName:"p"},"relative path"),". This is different from an ",(0,o.kt)("strong",{parentName:"p"},"absolute path"),", where we'd start from the root directory. With a relative path, we just need to tell our machine how to get from our current directory, not all the way from the root directory."),(0,o.kt)("p",null,"Now let's create a new file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ touch index.html\n")),(0,o.kt)("p",null,"Just like with ",(0,o.kt)("inlineCode",{parentName:"p"},"$ mkdir"),", we need to specify a name. In this case, it will be the name of the file we are creating. Don't forget to add extensions if needed. In the case above, we are creating an HTML file so we need the ",(0,o.kt)("inlineCode",{parentName:"p"},".html")," extension. We will create many HTML files starting from our very first week of class. (",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," is a very common naming convention for an HTML file.)"),(0,o.kt)("p",null,"If you run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ ls"),", you'll see our new file has been created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls\nindex.html\n")),(0,o.kt)("h3",{id:"moving-files"},(0,o.kt)("a",{parentName:"h3",href:"#moving-files"},"Moving Files")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"$ mv")," command stands for ",(0,o.kt)("em",{parentName:"p"},"move"),". It can both move ",(0,o.kt)("em",{parentName:"p"},"and")," rename files. If we want to rename our ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file in ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-website"),", we'd do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mv index.html my-first-webpage.html\n")),(0,o.kt)("p",null,"As you can see, the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ mv")," command requires two pieces of information. The first is the name of the file we'd like to rename or move. The second is the ",(0,o.kt)("em",{parentName:"p"},"new")," name or location we'd like to provide the file. In the example above, we are renaming a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-webpage.html"),"."),(0,o.kt)("p",null,"We can confirm the file has been successfully renamed by using ",(0,o.kt)("inlineCode",{parentName:"p"},"$ ls")," to list all files in the current location:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls\nmy-first-webpage.html\n")),(0,o.kt)("p",null,"However, what if we want to move this file from the ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-website")," directory to the ",(0,o.kt)("inlineCode",{parentName:"p"},"coding-practice")," directory? Here's what we need to do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mv my-first-webpage.html ../coding-practice/my-first-webpage.html\n")),(0,o.kt)("p",null,"Here, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ mv")," command to move a file instead of renaming it. First, we provide the name of the file we'd like to move (",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-webpage.html"),"). We don't need to specify a path because we are already in the directory where ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-webpage.html")," lives. Next, we provide the relative path to where we want the file to go. This tells our computer exactly where the file should go and what it should be named."),(0,o.kt)("p",null,"Note that we have to navigate ",(0,o.kt)("em",{parentName:"p"},"up")," a directory with ",(0,o.kt)("inlineCode",{parentName:"p"},"..")," in the command above. The ",(0,o.kt)("inlineCode",{parentName:"p"},"..")," isn't just used with ",(0,o.kt)("inlineCode",{parentName:"p"},"$ cd"),". It's used with paths in general. There are many, many commands where we'll need to provide our machine with a path so it knows exactly what to do. Next, we specify our file should go into the ",(0,o.kt)("inlineCode",{parentName:"p"},"coding-practice")," directory. Finally, we specify that the file should still be named ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-webpage.html"),". If we wanted to, we could've also renamed the file in the process by doing something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mv my-first-webpage.html ../coding-practice/index.html\n")),(0,o.kt)("p",null,"This would've moved ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-webpage.html")," ",(0,o.kt)("em",{parentName:"p"},"and")," renamed the file back to ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html"),"."),(0,o.kt)("p",null,"If we run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ ls")," again, we can see that ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-webpage.html")," is no longer listed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"my-first-website $ ls    \n")),(0,o.kt)("p",null,"Let's navigate back into the ",(0,o.kt)("inlineCode",{parentName:"p"},"coding-practice")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ../coding-practice\n")),(0,o.kt)("p",null,"Now if we run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ ls")," again, we'll see our moved file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epicodus-5:first-webpage Guest$ ls\nmy-first-webpage.html\n")),(0,o.kt)("h3",{id:"deleting-files-with--rm-file-name"},(0,o.kt)("a",{parentName:"h3",href:"#deleting-files-with-rm-file-name"},"Deleting Files with ",(0,o.kt)("inlineCode",{parentName:"a"},"$ rm file-name"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"$ rm")," command stands for ",(0,o.kt)("em",{parentName:"p"},"remove")," and it allows us to delete a specified file entirely. ",(0,o.kt)("strong",{parentName:"p"},"Warning:")," You must proceed with caution when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ rm"),"! This command does ",(0,o.kt)("em",{parentName:"p"},"not")," move files to the trash, so there's no opportunity for second thoughts. Once you remove a file, it's gone and can't be retrieved."),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-webpage.html")," file is ready to be deleted \u2014 after all, it doesn't contain all of our favorite recipes or anything else. So let's zap it!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"coding-practice $ rm my-first-webpage.html\n")),(0,o.kt)("p",null,"We combine the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ rm")," command with the name of the file we'd like to delete."),(0,o.kt)("h3",{id:"deleting-directories"},(0,o.kt)("a",{parentName:"h3",href:"#deleting-directories"},"Deleting Directories")),(0,o.kt)("p",null,"Did deleting a file feel a little risky? If so, take a deep breath... we can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ rm")," command to delete ",(0,o.kt)("em",{parentName:"p"},"entire")," directories. ",(0,o.kt)("strong",{parentName:"p"},"Warning:")," As you may guess, this is potentially ",(0,o.kt)("em",{parentName:"p"},"much")," riskier than just deleting a single file. For instance, if you were to specify that your root or home directory be deleted, it would destroy everything \u2014 and likely render your machine completely unusable."),(0,o.kt)("p",null,"Note that you cannot be located ",(0,o.kt)("em",{parentName:"p"},"within")," a directory you are attempting to delete. That would be like wrapping yourself inside a present. If we want to delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"coding-practice")," directory, we first need to navigate up and out of the directory. Assuming we are still in ",(0,o.kt)("inlineCode",{parentName:"p"},"coding-practice"),", start by typing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd ..\n")),(0,o.kt)("p",null,"Now we can run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ ls")," and confirm that the ",(0,o.kt)("inlineCode",{parentName:"p"},"coding-practice")," is still there. Let's zap this one, too!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"epicodus-5:intro-to-programming Guest$ rm -r coding-practice\n")),(0,o.kt)("p",null,"Note that we need to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"-r")," flag. This says that directories should be recursively deleted. If we didn't add the ",(0,o.kt)("inlineCode",{parentName:"p"},"-r")," flag (and just used ",(0,o.kt)("inlineCode",{parentName:"p"},"$ rm"),"), we'd get the following error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm: coding-practice: is a directory\n")),(0,o.kt)("p",null,"That means we've forgotten the ",(0,o.kt)("inlineCode",{parentName:"p"},"-r")," flag."),(0,o.kt)("p",null,"Sometimes, Bash will complain about deleting a directory. You can override Bash and delete the directory with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," flag, which means ",(0,o.kt)("em",{parentName:"p"},"force"),". In other words, we'd use ",(0,o.kt)("inlineCode",{parentName:"p"},"$ rm -rf"),". As you may guess, forcing something to be deleted can be risky. Bash may have good reasons for complaining!"),(0,o.kt)("p",null,"If we run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ ls")," again, we'll see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"coding-practice")," directory is gone."),(0,o.kt)("p",null,"It should go without saying again, but will be said again anyway: ",(0,o.kt)("em",{parentName:"p"},"always")," be careful deleting files and especially directories! They can't be recovered. They go into the great big emptied trash bin in the sky where things can't ever be recovered. Okay, it's not in the sky, nor is it an emptied trash bin, but you get the drift. Those files and directories are gone forever."),(0,o.kt)("p",null,"In this lesson, we've covered some basic but very powerful commands that we can run in the command line. You will be using many of these commands every day while you are a student at Epicodus \u2014 and hopefully in a long, fruitful career after you're done as a student. "),(0,o.kt)("p",null,"Make sure to check out the cheat sheet tab of this lesson for terminology from this lesson and command line reference of most frequently used commands!"))}m.isMDXComponent=!0}}]);