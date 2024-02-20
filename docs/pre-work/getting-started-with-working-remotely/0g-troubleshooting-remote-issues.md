---
title: "\U0001F4D3 1.0.0.29 Troubleshooting Remote Issues"
id: 10029-troubleshooting-remote-issues
slug: 10029-troubleshooting-remote-issues
hide_table_of_contents: true
sidebar_position: 7
day: weekend
type: lesson
url: >-
  https://github.com/fidgetech/pre-work/blob/main/0g_troubleshooting_remote_issues.md
---

We will often run into issues in our code - one of the most important parts of being a good developer is learning how to debug and troubleshoot issues.

Sometimes, we will also run into issues with remote pairing. Just as with debugging code, we need to troubleshoot these issues. This lesson covers common issues that may come up with Discord, VS Code Live Share, and other remote learning solutions we use, as well as steps to address these issues. You may want to bookmark this page so you can use it as a reference if you run into technical issues working remotely.

If there is a technical issue you can't solve, please reach out to your instructor. And if you find a solution to a remote technical issue that's not covered here, please share this solution with your instructor or email curriculum@epicodus.com with the instructions. Your solution may be added to this document and provide assistance to future students.

## [General Connectivity](#general-connectivity)

---

**Discord or Live Share are slow/not working correctly**. Using VS Code Live Share and sharing audio involves a consistent internet connection. If you are using wireless, move closer to the router. Even better, use a wired Ethernet connection to ensure your internet is working at optimal speed.

**Unable to participate in Scrum meetings due to slow internet.** Taking part in Scrum is mandatory. However, we understand that sometimes you have a problem and won't be able to make it, just let us know!

## [Discord](#discord)

---

**Discord audio is poor quality/not working.** Sometimes Discord audio is low quality. If this occurs, there are a few options to try out:

* Make sure your video is turned off, as it can require more bandwidth.
* Start a phone call instead. This is the best option if your internet connectivity is poor.
* Try downloading and using the [VS Code Live Share Audio](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-audio) extension.

## [VS Code Live Share](#vs-code-live-share)

---

**File tree for project isn't showing or instructor isn't able to access project files.** If the instructor can't see the file tree for the project, or can't access all the files in the project, the most likely issue is that the entire directory wasn't shared.

To fix this, the host should end the Live Share session and then navigate to the project directory in the terminal. The host should be in the top level directory of the project. Type `code .` in the terminal. Next, ensure that all the files from the project are showing in your file tree. Then try VS Code Live Share again. This will usually fix the issue. If not, try the next troubleshooting step.

**VS Code Live Share isn't working correctly.** There are a number of issues VS Code Live Share can have:

* Can't see file tree
* Can't see instructor's icon in VS Code
* Issues seeing or editing files

These problems are usually related to hosting. Sometimes these hosting issues are related to internet connectivity. Operating system differences can also cause issues.
