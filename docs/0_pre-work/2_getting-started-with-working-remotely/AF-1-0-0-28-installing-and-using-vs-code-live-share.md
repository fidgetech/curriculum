---
title: "📓 1.0.0.28 Installing and Using VS Code Live Share"
day: weekend
id: 1-0-0-28-installing-and-using-vs-code-live-share
hide_table_of_contents: true
---

For working and collaborating remotely, Epicodus uses Visual Studio Code Live Share, Live Server, and Live Share Audio to share the following:
 
* Code
* The terminal (read-only access strongly recommended)
* Servers (since we can't share web browsers)
* Audio (if Discord goes down)

## [Live Share, Live Server, and Live Share Audio Instructions](#live-share-live-server-and-live-share-audio-instructions)

---

### Table of Contents

[Installation]( https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-working-remotely/1-0-0-28-installing-and-using-vs-code-live-share#installation)
 
[Sharing Code]( https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-working-remotely/1-0-0-28-installing-and-using-vs-code-live-share#sharing-code)
 
[Sharing the Terminal]( https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-working-remotely/1-0-0-28-installing-and-using-vs-code-live-share#sharing-the-terminal)
 
[Starting a Server]( https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-working-remotely/1-0-0-28-installing-and-using-vs-code-live-share#starting-a-server)
 
[Sharing a Server]( https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-working-remotely/1-0-0-28-installing-and-using-vs-code-live-share#sharing-a-server)
 
[Sharing Audio]( https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-working-remotely/1-0-0-28-installing-and-using-vs-code-live-share#sharing-audio)

[Joining a Live Share Session]( https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-working-remotely/1-0-0-28-installing-and-using-vs-code-live-share#joining-a-live-share-session)
 
### [Installation](#installation)
 
If you haven't already installed VS Code by following along with the previous lesson, do so now. [Instructions are located here]( https://old.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/text-editor-visual-studio-code).

**Note:** If you are using a Mac, VS Code Live Share will only work on macOS High Sierra 10.13 and above. If you're on a lower version of macOS, please upgrade your computer now. Contact your teacher or advisor if you have any issues.

After you install VS Code, click the four squares on the left side of the screen to access the Extensions menu. In the image below, the icon with four squares is the bottom icon.
 
![ Click the 4 squares icon in bottom left of screen.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image7.png)
 
Search for and install **Live Share**. Next, search for and install the VS Code **Live Server extension (by Ritwick Dei)**. Finally, search for and install the **Live Share Audio** extension. It's helpful to know the process of searching for and installing extensions through VS Code, because you will likely want to extend your code editor's functionality with extensions in the future.

Alternatively, you can install and read more about these extensions by visiting their pages on the Visual Studio online marketplace and selecting the option to install:

*  [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
*  [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
*  [Live Share Audio](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-audio)
 
### [Sharing Code](#sharing-code)
 
We recommend following along with these instructions to the extent that is possible! You'll get more practice in the class. For this practice, you can select an existing folder (pick one that doesn't have too many files in it) or you can create a folder (just make sure that there is at least one file in it). 

To share your code, terminal, and browser with another student or teacher, you'll first want to make sure that all the files you want to share are open in VS Code. There are two options to do this:

1. Open your project folder through VS Code. 

  * Open VS Code
  * Select _File_ > _Open Folder..._
  * Open whichever folder you want to practice with

2. Use the terminal to open up VS Code. We cover how to use the terminal starting in this [introduction lesson]( https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-intro-to-programming/1-0-0-17-introduction-to-the-command-line) and in the two lessons that follow. Using the terminal, we can navigate to the root directory of the project we want to share in the terminal and then type `code .`. This will open all the files in that directory. **Take note:** You must run `code .` in the directory of the project you are working on — not a directory higher up in the file tree. You will be sharing access (including write access) of all these files with your pair. For instance, if you were to run `code .` in the root directory of your computer, you'd be giving your pair both read and write access to _every_ file on your computer — not just the files in your project. This is a security risk — someone could install malware, damage system files, or access files you don't want to share. While the risk of a fellow Epicodus student doing this is low, there is no good reason to take this risk!

Once you've opened your project in VS Code, you should see the files listed in the left-hand pane. If the file tree isn't showing, click the top left icon that shows two overlapping squares to show the file tree.

![VS Code file explorer icon](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/vscode_file_explorer.png)

If only one file is showing, or you're not seeing the expected files, close the VS Code window, make sure you are in the correct directory in the terminal, and type `code .` again.

Once you've ensured that the project you want to share is open in VS Code, follow these steps to start your Live Share session: 

* Click the circle with an arrow on the left side of your screen to access Live Share. That is the bottom icon on the left in the image below. (This icon will be added after you've installed Live Share.) The user interface (UI) of programs change often, so if your icon looks slightly different, or doesn't have the same highlight, that is normal.
 
![Image of tab with circle with arrow on left side and Live Share menu options.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/start_liveshare_session.png)
 
* Make sure the file you're working on is saved. Live Share won't work on new, unsaved files. 

* Then, start your collaboration session. Since the UI of Live Share changes periodically, you may have one of two options to start your Live Share session: a link that says _Start collaboration session_, or a button that says _Share_. In the image above, you can see a button that says _Share_. If any of the words are cut off in the Live Share pane, use your mouse to widen the left-side pane in VS Code.

* When you start a Live Share session, a link will automatically be copied to your clipboard that you can share with your pair. Anybody with that link can now view and edit code along with you! If you need to get the link again, just click on "Invite participants", which is highlighted in the image below.

![ Click on the "Invite participants link" on left side of screen.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image2.png)

#### A Few Notes

If this is your first time starting a Live Share session on your personal computer, you may be prompted to give the program permissions. Select the option that you are comfortable with. You may also be prompted to sign in via your GitHub account, like in the image below. We suggest that you sign in to your Live Share sessions, so that you are listed by your user name and not "anonymous". Typically you will sign in once, and VS Code will save that information for future sessions.

![This is a prompt that is asking you to sign into your GitHub account.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/sign_in_to_join_liveshare_session.png).
 
### [Sharing the Terminal](#sharing-the-terminal)
 
To share your terminal, click "Share terminal." You will have two options: you can either choose "read" or "read/write." 
 
It's very important to understand the difference between read and write access in the terminal. When someone only has read access, that means they can see what's happening in the terminal but can't actually write terminal commands. When someone has write access, that means they can write terminal commands affecting _your_ computer -- deleting and creating folders, making commits, etc. If you were to give terminal _write_ access to someone with malicious intent (or whose computer was infected with a specially-designed virus for exploiting VS Code Live Share), they could take over your computer, destroy files, or install malware. For that reason, you should only give write access to people you trust.
 
We recommend only giving your instructors read access to your terminal just to be on the safe side.
 
Once you've given read (or read/write) access, you'll have a terminal at the bottom of your screen that you and the people you're sharing with can use together.
 
![ Image of the shared terminal.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image6.png)
 
For the people joining your session, they can go to the bottom left corner of their screen and click on the terminal under Shared Terminals to see and use your terminal.
 
![ You can click on terminal beneath "Shared Terminals." ](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image8.png)
 
### [Starting a Server](#starting-a-server)
 
Technically, you can't actually share your browser, but you can let your VS Code Live Share participants access a server on your computer. If you're in Intermediate JS or beyond, you can skip this section because you're already using web servers. For Intro, you'll need to use the Live Server VS Code extension you downloaded earlier. 
 
To use a server to share a file with other people, click "Go Live" in the bottom right corner of your screen.
 
![ Click the blue "Go Live" bar at bottom of screen.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image1.png)
 
 
### [Sharing a Server](#sharing-a-server)
 
Once you have a server running, you can share it with others in VS Code Live Share. In Live Share, in the upper left corner, click "Share server" and type "5500" for the port to share (or whatever port you're using).
 
![ Click share server.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image9.png)
 
![ Type 5500 for the port to share.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image3.png)
 
Now, participants can go to the lower left corner of their screen. Under "Shared Servers", click "localhost:5500" to launch the browser and access the server.
 
![ Now you can click on localhost:5500 on the left side of the screen.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image5.png)
 
### [Debugging Live Server](#debuggin-live-server)
 
Occasionally a server will fail to display your page or will display an error message. If this happens, try finding the specific file you want to serve e.g. index.html and right click. Click the first item in the menu, which should read "Open with Live Server".
 
### [Sharing Audio](#sharing-audio)
 
If Discord goes down, you can switch to using audio through VS Code Live Share. In the upper right corner, under Session Details, under Audio Call, click "Start audio call". When Discord comes back up, switch back to Discord (so that teachers can visit your audio channel).
 
![Image shows that you can "Start Audio Call" on left side of screen.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/image4.png)

### [Joining a Live Share Session](#joining-a-live-share-session)

There are a couple of ways to join a Live Share session. We'll start by sharing one method, discussing a few options, and then cover another method. We suggest that you read through this whole section before attempting to join a Live Share session for the first time.

You are not required to practice this before the first day of class. However, if you do want to try it out, it is possible to do so on a single computer. What you'll do is start a Live Share session in one VS Code window, and open another VS Code window to join that session. 

#### Method #1 — Joining a Live Share by Following the URL

The Live Share URL that your pair shares with you is also a link that you can click to join the session. This is the easiest way to join a Live Share. However, you will have to do some configuration when you are joining a Live Share for the first time.

After you work through the configuration options, you will be able to see and work in any file in the project that has been shared with you.

#### Option to Join Live Share Session in Browser or in VS Code

If this is the first time you are joining a Live Share session, you will encounter a dialogue box that will ask you if you want to _Continue in Web_ or _Open in Visual Studio Code_. See the image below as an example of this dialogue box. 

![Dialogue box asking you to select whether to open links in browser or via the web.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/option_to_use_live_share_in_browser_or_on_computer.png)

We strongly suggest that you select to open the project in VS Code. Why? The VS Code installed to your computer has access to your computer's terminal, and it also has all of your configurations and extensions enabled. When you use VS Code in the web browser, it will not have these configurations set up, nor will it have access to your computer's terminal. 

It's important to know that whatever option you first select (continuing in web or in VS Code), this preference will be saved. You can change this option later via your VS Code settings. Let's look at that next. 

#### Changing Your Live Share Launch Settings

If you decide you want to use Live Share in the browser, or otherwise, here's how you can access the launch settings for Live Share in VS Code.

1. Open VS Code settings.
2. Make sure you are editing `user` settings. This is in contrast to `workspace` settings. User settings are globally applied to all VS Code sessions, whereas workspace settings are only applied to the VS Code window you are currently in.
3. Search for `Live Share: Launcher Client`.
4. Set the value for the launcher client to `visualStudioCode` to launch Live Share sessions in your local VS Code. Select `web` to launch Live Share sessions in the browser. Note that `visualStudio` is a separate program that we will not work with in this program.

#### Option to Sign into Your GitHub Account

If this is your first time joining a Live Share session, you may be prompted to _Sign in_ or _Continue as anonymous_, like in the image below. When you sign in, you will do so via GitHub. We suggest that you always sign in to your Live Share sessions, so that you are listed by your user name and not "anonymous". Typically you will sign in once, and VS Code will save that information for future sessions.

![VS Code Live Share will prompt you to sign into your GitHub account.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/sign_in_to_join_liveshare_session.png).

#### Method #2 — Joining a Live Share Session in VS Code

Here's another way to join a Live Share session. Though it's not as convenient as clicking on a link, it's helpful to know another option, and you may find this method preferable! Follow these steps:

*  Open VS Code (if it isn't open already), or open a new VS Code window by selecting _File_ > _New Window_.
*  Open the Live Share pane by clicking the Live Share icon from the navigation bar. 
*  Select the option to join a collaboration session: either a button that says _Join_ or a link that says _Join collaboration session_.
*  VS Code will open an input at the top of the screen, as highlighted by the orange box in the image below.
*  Enter the URL of the collaboration session (the URL that your pair has shared with you) into the VS Code input and hit enter.

You will now be able to see and work in any file in the project that has been shared with you.

![Enter the collaboration session URL into the input after you click "join" or "join collaboration session"](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/live-share-images/join_liveshare_session.png)
