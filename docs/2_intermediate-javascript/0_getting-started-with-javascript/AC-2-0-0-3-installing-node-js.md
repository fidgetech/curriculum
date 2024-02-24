---
title: "📓 2.0.0.3 Installing node.js"
day: weekend
id: 2-0-0-3-installing-node-js
hide_table_of_contents: true
paginationNext: null
---

Before the first week of class, take time to ensure all necessary tools and frameworks are correctly installed on your personal machine, including those we will use later on in the course.

The JavaScript course will require `Node.js`. You are expected to install any tools you do not already have _before_ the course begins. Confirm each tool is functioning properly by following all instructions below.

## OSX Installation Instructions
---

On OS X systems, install `Node.js` through `Homebrew` with the following command in your home directory:

```
$ brew install node
```

Confirm that `node` and `npm` (node package manager, installed automatically with `Node`) are in place by checking the versions (`Node`  should be 4.0.x or higher, `npm` should be 3.6.x or higher):

```
$ node -v
v14.5.0
$ npm -v
6.14.5
```

_(If you have an older version of `Node` already installed, upgrade through `Homebrew` by running `$ brew upgrade node`.)_

Complete the "Working with Node" section below to confirm your installation is functioning correctly.

### Homebrew Installation

If you do not have Homebrew installed yet, you may install it now by copy and pasting this command:

```shell
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
This installs [Homebrew](http://brew.sh/) on your device.

Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:

```shell
$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile
```

## Windows / Linux Installation Instructions
---

To install Node on other systems, go to the [Node website](https://nodejs.org/en/download/), then download and install the appropriate installer for your operating system. Note that there are two versions available to download: the _LTS_ version and the _Current_ version. _LTS_ is short for long-term support. Either version is fine, though the _Current_ version will be more recent.

If you are using Windows, choose the _Windows Installer_ option for downloading. Use the Setup Manager for installation, clicking _Next_ through each setup window. This includes clicking _Next_ on the custom setup window as all the options are already preselected (_Node.js runtime_, _npm package manager_, _Online documentation shortcuts_, and _Add to PATH_). When you reach the final setup window, click _Install_.

After installation is complete, go through the "Working with Node" section below to confirm your installation is functioning correctly.

## Working with Node
---

Confirm Node.js is functioning correctly by creating a small test project. `cd` to your desktop and then input the following command:

```
$ echo "console.log('Hello world');" > hello.js
```

`echo` simply copies the string (the part inside double quotations), outputting it (`>`) into the file we specify (`hello.js`). You don't need to create `hello.js` ahead of time. `echo` will take care of that for you.

Now let's run this file with Node:

```shell
$ node hello.js
```

"Hello world" will be printed to the terminal. Once you are done, you can remove `hello.js` from your desktop.

Node.js is a JavaScript runtime environment just like the browser. In fact, Node.js's underlying JavaScript engine is V8, which is the same engine used in Google Chrome. The major difference between Node and a browser like Chrome is that the browser provides the runtime environment in the browser, whereas Node provides it on the command line. They also have slightly different capabilities, with the browser providing tools like the DOM, and Node providing tools like file system access.

We won't be doing much with Node.js as a runtime environment, though. We will mainly use it as a package manager to install JavaScript libraries in our projects.

---

If you encounter any issues installing Node.js, ask for help from your instructor.  However, even though we aren't using these frameworks yet, it's important to set up these tools now to make sure that you can use your personal computer to complete Epicodus projects.
