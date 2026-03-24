---
title: "📓 2.0.0.3 Installing node.js"
day: weekend
id: 2-0-0-3-installing-node-js
hide_table_of_contents: true
pagination_next: null
---

Before the first week of class, take time to ensure all necessary tools and frameworks are correctly installed on your personal machine, including those we will use later on in the course.

The JavaScript course will require `Node.js`. You are expected to install any tools you do not already have _before_ the course begins. Confirm each tool is functioning properly by following all instructions below.

Installing Node is done slightly differently depending on your operating system. These installation instructions are based on the NodeJS documentation ([nodejs.org](https://nodejs.org/en/download)) and will install the following:

- `nvm` - a Node.js version manager
- `node` - Node.js itself
- `npm` - Node Package Manager (installed automatically with node)

## MacOS or Linux Installation Instructions
---

Run the following commands in your terminal, from your home directory.

```
# Download and install nvm (node version manager):
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install a specific version of Node.js:
nvm install 16.20.0
```

If you already have another Node version installed, you can run the command `nvm use 16.20.0` to use that as your primary version.

Complete the "Working with Node" section below to confirm your installation is functioning correctly.

## Windows Installation Instructions
---

Install Node Version Manager (nvm) by going to [node-windows GitHub repository](https://github.com/coreybutler/nvm-windows/releases/latest), downloading the ` nvm-setup.exe ` file, and running that.

While installing it, you can leave everything at their default selections, though you can change the Desktop Notifications options, if you wish.

If you already have a version of Node installed, you'll be prompted to have NVM control that version. If so, select yes.

Run the following command in your terminal:

```
nvm install 16.20.0
```

If you already have another Node version installed, you can run the command `nvm use 16.20.0` to use that as your primary version.

Complete the "Working with Node" section below to confirm your installation is functioning correctly.

## Working with Node
---

Confirm you have the correct versions of Node and NPM installed by running these commands in the terminal:

```
# Verify the Node.js version:
node -v # Should print "v16.20.0".

# Verify npm version:
npm -v # Should print "8.19.4".
```

You can also run the command `nvm list` to list all the installed versions of Node.

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

We won't be doing much with Node.js as a runtime environment, though. We will mainly use node's package manager as a way to install JavaScript libraries in our projects.

---

If you encounter any issues installing Node.js, ask for help from your instructor.  However, even though we aren't using these frameworks yet, it's important to set up these tools now to make sure that you can use your personal computer to complete projects.
