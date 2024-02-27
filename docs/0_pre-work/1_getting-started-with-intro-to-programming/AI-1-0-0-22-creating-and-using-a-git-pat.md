---
title: "📓 1.0.0.22 Creating and Using a Git PAT"
day: weekend
id: 1-0-0-22-creating-and-using-a-git-pat
hide_table_of_contents: true
paginationNext: null
---

While you are a student at Epicodus, you will be using the terminal to push and pull code from GitHub repositories. A repository is just a place where a codebase is stored. Generally, we will be working with new repositories every day, but sometimes we'll use the same repository for longer projects. Enterprise companies generally have repositories that are used for long-term projects. That means in your future career, you'll likely be focused on just a handful of repositories that are used regularly.

When we need to grab code from a repository, we can _pull_ it to our local machines using the command line. When we make changes to code on our local machines, we can _push_ the updated code to a repository. However, in order to push and pull code, GitHub needs to verify that we should have access to the repositories. This process is called **authentication**. We use authentication all the time when we are working on computers. For example, when you log in to your email with a username and password, your email provider will authenticate your credentials before giving you access.

To access repositories in GitHub via the command line, we need to use a **personal access token**, which is also called a PAT for short. A PAT is a bit like a password. The difference is that GitHub will generate it for you. Another key difference is that it's easy to delete and create new PATs in GitHub if you need to. This is different from how we generally use a password. With a password, we might update it from time to time (hopefully), but we don't delete and replace it.

Let's go through the steps to generate and use a PAT. You will be using PATs every day while you are a student at Epicodus, so it's really important that you know how to do it. If you are reviewing this lesson before starting at Epicodus, you should follow the steps below to learn how to use a PAT, but you won't be expected to actually use it until your first day of Epicodus when you do the following lesson: [Practice: GitHub Remote Repositories]( https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-1-git-html-and-css/1-1-1-3-practice-github-remote-repositories).

## [Verifying Your Email in GitHub](#verifying-your-email-in-github)

---

To generate a PAT in GitHub, the email you're using for GitHub needs to be verified. You may have already done this when you set up your account. To check, click on the icon in the upper right corner of GitHub (the icon is your avatar and has a little downward facing arrow to its right, click on _Settings_ from the dropdown menu, and then click on _Email_ in the left-hand menu of the page you are directed to.

If your email is **not** verified, there will be a bullet point beneath the email that says _Unverified_ with a link to _Resend verification email_. Click on that link, check your personal email, and then click on the link in your email to verify. For more information on verifying email, see [Verifying Your Email Address](https://docs.github.com/en/github/getting-started-with-github/verifying-your-email-address).

If your email is verified, you won't see a bullet point specifying this. Your email is already verified and you are ready to create a PAT.

## [Creating a PAT](#creating-a-pat)

---

In the left-hand menu of your GitHub settings, click on _Developer Settings_. You'll be directed to a new page and a new left-hand menu will come up.

![Left-hand menu includes three options. The bottom left item is _Personal access tokens_.](/images/INTRO/prework/PAT+Lesson/pat-menu.png)

Click on _Personal access tokens_, which is the third and final item on the left-hand menu. When you need to create or delete a personal access token, this is where you'll do it. There are two buttons in the upper right corner of the screen.

![There are two buttons, one for generating a new token and the other for revoking all tokens.](/images/INTRO/prework/PAT+Lesson/create-pat-button.png)

The button on the left is _Generate new token_ while the button on the right is _Revoke all_. You will likely only want to _Revoke all_ (which will delete all PATs) if you're worried others may have gained access to one or more of your PATs.

Click on _Generate new token_. 

First, add a _Note_ to describe what the token is for. In the photo before, we put _Epicodus_ in as a note. You could also name one something like _personal computer_ to denote that it's only being used on your personal machine and doesn't need to be deleted. On the other hand, if you were planning on working on a shared computer for the day (such as a machine at Epicodus), you might generate a different one called _shared machine_. You could then delete that PAT at the end of the day when you are done using it so no one else can potentially access your GitHub credentials.

You also have the option to set an expiration date for your PAT, including selecting from pre-filled options or creating a custom expiration date.

![This image shows the new personal access token menu. The _repo_ checkbox is clicked.](/images/INTRO/prework/PAT+Lesson/GH_PAT_creation.png)


There are a lot of options in terms of what kind of access your PAT should have. Generally, you will only need basic repo access. You can click on the _repo_ checkbox to add this. If you don't click on the _repo_ checkbox, you won't be able to have the necessary privileges to access, push, and pull all of your repositories.

Once you are finished, click on the _Generate token_ button at the bottom of the page.

![A token is generated. You need to copy the string of characters to reuse it.](/images/INTRO/prework/PAT+Lesson/generated-token.png)

As you can see from the example above, there's a notice: _Make sure to copy your new personal access token now. You won't be able to see it again!_ If you navigate away from this page without copying it, you won't be able to access the characters that are specific to this PAT. Of course, if that happens, it's no big deal. Delete the PAT by clicking the _Delete_ button just to the right of the PAT. Then create a new one.

You might be wondering why a secure PAT was shared in the image above. Well, it was deleted directly after being created for this example. This is one of those advantages over using a password. It's very easy to get rid of tokens.

If you don't need to use a PAT yet (because it's not your first day of Epicodus), there's no need to copy this yet. You can refer back to this lesson when you get to [Practice: GitHub Remote Repositories]( https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-1-git-html-and-css/1-1-1-3-practice-github-remote-repositories) on your first day of class.

## [Using a PAT](#using-a-pat)

---

In [Practice: GitHub Remote Repositories]( https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-1-git-html-and-css/1-1-1-3-practice-github-remote-repositories), you'll push code to a remote repository (in your GitHub account) for the first time.

When you push your code (or pull code from GitHub), you will be prompted to enter a username and password. Enter your GitHub username and then enter the string of characters associated with the PAT (in the example above, the string of characters is `f8bfdfd5bf51046ea51eb0c4c00c95a563bdbdd8`). Password inputs in the command line are not printed to the command line — so, trust that you are still typing even though nothing is being displayed. And remember, you can always add a new PAT if you don't have access to the string of characters anymore.

Once you've entered your credentials (username and PAT), you will be authenticated and you'll be able to push and pull code as needed.

## [Reusing a PAT](#reusing-a-pat)

---

While you're a student at Epicodus, you'll be pushing and pulling code very regularly — sometimes as much as dozens of times per day. As you might imagine, it would be very frustrating to have to copy and paste the string of characters associated with a PAT in every time you want to push or pull code. Fortunately, it's easy to store your credentials on your local machine.

### [MacOS Users — Managing PATs with Keychain](#macos-users-managing-pats-with-keychain) 

If you use a Mac, you can store the PAT you're using in Keychain Access. For Macs, Keychain Access is a place where you can store all of your passwords. It's really great for personal machines, though you need to be careful about using it on shared machines as you might inadvertently expose sensitive passwords to other users. Your machine may already be set up to use Keychain Access, particularly if you used `$ brew install git` to install Git on your machine. Type this command in the terminal to find out:

```
$ git credential-osxkeychain
```

If it returns the following, you're ready to go:

```
usage: git credential-osxkeychain <get|store|erase>
```

If it's not installed yet, you'll get a message related to `xcode-select` requesting that you install it. (`xcode` is a development environment for Apple machines.) Follow the instructions to install it.

If `git credential-osxkeychain` is installed, the first time you enter your GitHub credentials into the command line, it will automatically be stored there.

You can verify this by doing a spotlight search (the magnifying glass in the upper right corner) for _keychain_. Open _Keychain Access_ and do a search for _github.com_. You should see that credentials have been stored. If you're on a shared computer, at the end of the day you should delete the PAT. You can also delete the credentials from _Keychain Access_ — though the nice thing about deleting PATs is that once they're gone, you can forget about where they were used. They can't be used again — unlike a password that's been exposed.

**To update your GitHub credentials on the MacOS Keychain,** we suggest reading through GitHub's documentation that covers this topic well: [Updating credentials from the macOS Keychain](https://docs.github.com/en/get-started/getting-started-with-git/updating-credentials-from-the-macos-keychain).

### [Windows Users — Managing PATs with Window's Credential Manager](#windows-users-managing-pats-with-windows-credential-manager)

When you installed Git Bash in [Introduction to the Command Line]( https://old.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-0-getting-started-with-intro-to-programming/1-0-0-17-introduction-to-the-command-line), you were prompted to install _Git Credential Manager_. The first time you push or pull a repo from your GitHub account, Git Bash will ask you to log in by opening GitHub in the browser. Then you'll be prompted to give permission to Git Credential Manager to store your credentials. As long as you are on your personal computer and not a shared computer, you should do so. Alternatively, if you are on a shared machine, you'll be given the option to use a PAT instead.

If you allow Git Credential Manager to store your credentials, the next time you push or pull, you won't need to worry about entering your credentials and you won't be prompted to log into GitHub.

**To edit or remove the PAT through the Window's Credential Manager**, follow these steps:

* Open _Control Panel_.
* Search for and open _Credential Manager_.
* Select to view the _Windows Credentials_ tab.
* Select the credential entry titled `git:https://github.com` to expand and view details, including options for editing and removing the credential.

If you delete your PAT in the Credential Manager, next time you try to push to GitHub, you'll be prompted with this dialogue box to enter your PAT or sign into GitHub:

![Image of Git Credential Manager dialogue.](/images/INTRO/prework/PAT+Lesson/git_credentials__PAT_signin_PC_windows_users.png)

If you are not prompted with the dialogue box after you delete your PAT (on GitHub or through the Credential Manager), and after you've tried to push your changes to a remote repo, try pushing one more time. Sometimes it takes Git a while to see that a change in credentials has been made. If you are still not prompted with a dialogue box after you've tried pushing your changes multiple times, reach out to your instructor for help. 

If for some reason you aren't using Git Bash, you can install the [Git-Credential-Manager-Core](https://github.com/microsoft/Git-Credential-Manager-Core/releases/tag/v2.0.318-beta) separately. **Do not install this if you are using Git Bash.** You should read the section on Windows installation [here](https://github.com/microsoft/Git-Credential-Manager-Core) if you are going this route.

### [Using PATs on Shared Computers](#using-pats-on-shared-computers)

If you are attending Epicodus in person, you'll be pairing with others using public Epicodus machines every day. Epicodus uses Mac machines, which by default adds git credentials to Keychain Access. We've disabled this feature, which means you'll manually need to enter your PAT when you make a commit (such as copying and pasting from a clipboard).

If for some reason you are not prompted to enter your credentials on a shared machine, whether at Epicodus or elsewhere, that means your credentials are being stored on the machine. You should make sure to delete the PAT you used at the end of your session. Even if the credentials associated with that PAT are stored in a shared machine, the PAT will no longer be usable and your GitHub account will be secure.
