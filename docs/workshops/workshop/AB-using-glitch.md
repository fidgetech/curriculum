---
title: "📓 Using Glitch"
day: weekend
id: using-glitch
hide_table_of_contents: true
---

In this lesson, we'll go over how to start a Glitch session and share it with a pair. 

**Take note that only _one_ member of your group should start the shared text editor on Glitch.** Decide amongst yourselves who this will be. Once the shared text editor is started, the rest of the group members will join that session. 

## Using Glitch
---

### Start A Glitch Session

To start a shared text editor from the [Glitch](https://glitch.com) homepage, you must be logged into Glitch. Once logged in, locate the "New Project" button and click it to see a drop down. Choose the "glitch-hello-website" from the list.

![Click on "New Project" button from the Glitch homepage, then choose "glitch-hello-website" from the drop down menu.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/ucode-glitch-photos/brooke-ucode-glitch-update-5.20.21/glitch-images-MAY-2022/start-new.jpg)

If you are signed in and you don't see the "New Project" button, scroll down the page until you find the link for "Basic Website". 

![Scroll down and click the option to build a "Blank Website".](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/ucode-glitch-photos/brooke-ucode-glitch-update-5.20.21/glitch-images-MAY-2022/basic-website.jpg)

Once you see a new "Hello Website" template appear like in the image below, you are ready share your newly created project with your partner(s). Sharing this project will allow you all to be able to edit files and see each other make edits in real-time!

![When you see the template for "Hello Website (blank)" you have successfully started your project.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/ucode-glitch-photos/brooke-ucode-glitch-update-5.20.21/glitch-images-MAY-2022/open-hello-world.jpg)

### Share your Glitch session with your partner(s)

The same person who created the project should share the project. To share the project, click the "Share" button in the top right corner:

![Click the "Share" button in the top right corner.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/ucode-glitch-photos/brooke-ucode-glitch-update-5.20.21/glitch-images-MAY-2022/share-button.jpg)

A pop-up window should appear that asks how you would like to share your project, just like in the image below. The "Project Links" section of the window will have a URL to access your project's code. Copy the URL listed under the "Code" option and **send that URL to your pair(s) over your pairing text channel in Discord**. 

Note that this URL won't grant access to edit the project, only to view the code. The next step is for your pairs to request edit access.

![Use the form with the title "invite project members" to do just that.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/ucode-glitch-photos/brooke-ucode-glitch-update-5.20.21/glitch-images-MAY-2022/share-website-link.jpg)

### Requesting edit access on a Glitch project

To join and edit a project that your partner started, ask for the URL to the project. It should look similar to `https://glitch.com/edit/#!/recondite-summer-octave`.

Put the URL into your web browser and wait for the page to load. Once it does, you'll notice you can see the project files, but you cannot edit them yet! To edit, you must request access. Select "Request To Join" in the top left corner of the screen, like you see in the image below.

![Click the "Request To Join" button in the upper right corner of the screen.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/ucode-glitch-photos/brooke-ucode-glitch-update-5.20.21/glitch-images-MAY-2022/request-to-join.jpg)

Now it's the project owner's task to accept the request. The person who started the project should look for an incoming request. Like in the image below, it will be a pop-up in the top center of the screen. Click the pop-up and make sure that you hit the button "Accept Request" to grant edit access. 

![Look for an incoming request icon at the top of the screen.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/ucode-glitch-photos/brooke-ucode-glitch-update-5.20.21/glitch-images-MAY-2022/hover-request-accept.jpg)

### Check that everyone in your group is connected to the Glitch project

You'll be able to see who's joined the project by looking for the green user icons at the top of the screen. Make sure that everyone in your group is on the shared text editor and has edit access before moving onto the next step. In the image below, one person is connected to the project.

![Verify who's connected to the project by looking for green user icons at the top of the screen](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/ucode-glitch-photos/brooke-ucode-glitch-update-5.20.21/glitch-images-MAY-2022/request-accepted.jpg)

### Navigating the project and files

Once the project is loaded for everyone in your group, you can begin pair programming. Be sure to alternate who is driving vs. navigating regularly so everyone gets a chance to write HTML, CSS, and JavaScript.

Everyone should see a the "Hello Website" project window with three sections diving the screen.

If you do not see the webpage preview, click on the "Preview" tab at the bottom of the screen, and then click "Open in preview pane", like the image below shows. 

This will open up a new section on the right with a preview of the code we are writing.

![Next, click on the "Open in preview pane" image, which is at the top of the screen.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/ucode-glitch-photos/brooke-ucode-glitch-update-5.20.21/glitch-images-MAY-2022/hover-preview.jpg)

In the image below, we've added yellow, orange, and red highlights around the three sections to explain each one: 

* The yellow section is the file explorer. 
*  The orange section displays the contents of whatever file is currently open. In the image above, the HTML in the `index.html` is shown.
*  The red section shows a preview of the webpage you are coding.

![Glitch projects are divided into 3 sections within one screen](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/ucode-glitch-photos/brooke-ucode-glitch-update-5.20.21/glitch-images-MAY-2022/preview-shown.jpg)

Now, let's take a look at the files in this project:

- `README.md`: All coding projects should contain a README. A README states what the project is about and how other people can use it. We won't make any updates to the README in this workshop.
- `index.html`: This contains all of our HTML code. We will modify this first.
- `script.js`: This contains JavaScript code, which is often used for making websites more interactive. JavaScript can be used for many other things as well, but we'll be focused on adding interactivity to our site.
- `style.css`: This is where we will style our website. We can do things like change colors, fonts, margins, and so on.

In the next lesson, we'll begin creating our actual website using **HTML**. If it isn't already open, we'll start by clicking on the `index.html` file from the file explorer section. This will open up a basic HTML fil with some content which we'll replace soon. 

These other files we won't need for this workshop:

- `License`
- `.gitignore`
- `TODO.md`

Please note that to edit the text in the README.md file you'll need to click this button called "edit markdown" above that file.

![click the 'edit markdown' button above that file's preview](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/ucode-glitch-photos/brooke-ucode-glitch-update-5.20.21/glitch-images-MAY-2022/edit-markdown.jpg)

Next up, we'll learn to write HTML!
