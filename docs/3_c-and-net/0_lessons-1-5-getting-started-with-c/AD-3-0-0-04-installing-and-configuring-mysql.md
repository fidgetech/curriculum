---
title: "📓 3.0.0.04 Installing and Configuring MySQL"
day: weekend
id: 3-0-0-04-installing-and-configuring-mysql
hide_table_of_contents: true
---

**MySQL** is a type of database software used to create, edit, query, and manage SQL data.

Follow the installation instructions below. We're going to be installing two programs: **MySQL Community Server** and **MySQL Workbench**.

## MacOS

---

### MySQL Community Server

Start by downloading the MySQL Community Server .`dmg` file from the MySQL Community Server page:

*  Students with High Sierra or Mojave should [use this link](https://dev.mysql.com/downloads/file/?id=484914). Scroll down and click the _No thanks, just start my download_ link.

*  Students with Catalina, Big Sur, Monterey or a newer OS **and an Intel chip** should [use this link](https://dev.mysql.com/downloads/file/?id=508095). Scroll down and click the _No thanks, just start my download_ link.

*  Students with Catalina, Big Sur, Monterey or a newer OS **and an M1 chip** should [use this link](https://dev.mysql.com/downloads/file/?id=508094). Scroll down and click the _No thanks, just start my download_ link.
*  Students with Catalina, Big Sur, Monterey or a new OS **and an M2 chip** should [use this link](https://dev.mysql.com/downloads/file/?id=518602). Scroll down and click the _No thanks, just start my download_ link.

Next, follow along with the **Installer** until you reach the **Configuration** page. Once you've reached **Configuration**, select or set the following options (use default if not specified):

* Use Legacy Password Encryption.
* Set password to `epicodus`. You can use your own password if you want but `epicodus` will be assumed in the lessons.
* Click Finish.

### Configure Your Shell's Environment Variables

Next, configure your shell environment variables to know where to locate the MySQL Community Server. Open the command line and enter the following command:

For bash users:

```bash
$ echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.bash_profile
```

For zsh users:

```bash
$ echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.zshrc
```

### Confirm That MySQL Community Server Is Working

Restart your shell (GitBash or Terminal) to apply the changes you've made to your shell's environment variables. Alternatively, you can refresh your shell by typing in the following command:

For bash:

```bash
$ source ~/.bash_profile
```

For zsh:
```bash
$ source ~/.zshrc
```

Next, verify MySQL installation by opening terminal and entering this command: 

```bash
$ mysql -uroot -pepicodus
```

You'll know it's working and connected if you gain access and see the MySQL command line. There will be an intro message, and the command prompt should look like this:

```bash
mysql> 
```

If it's not working, you'll likely get a `mysql: command not found` error.

You can exit the mysql program by entering `exit`.

### MySQL Workbench

Next, download the MySQL Workbench `.dmg` file from the MySQL Workbench page:

*  Students with High Sierra or Mojave should [use this link](https://dev.mysql.com/downloads/file/?id=484391). Scroll down and click the _No thanks, just start my download_ link.

*  Students with Catalina will need to do a few more steps, since there is no readily available download page for the Workbench version we need. Follow these steps:

  * Navigate to the workbench download archives by [clicking this link](https://downloads.mysql.com/archives/workbench/). There will be two drop-down menus, one for "Product Version" and the other for "Operating System".
  * For "Product Version", select "8.0.23"
  * For "Operating System", select "macOS".
  * Next, click the blue "Download" button for the package called "macOS (x86, 64-bit), DMG Archive".

* Students with Big Sur, Monterey, or a newer OS should [use this link](https://dev.mysql.com/downloads/file/?id=507344). Scroll down and click the _No thanks, just start my download_ link.

Next, install **MySQL Workbench** to Applications folder. Open MySQL Workbench from within the Applications folder.

Once opened, select the `Local instance 3306` server. You will need to enter the password you set. (We used `epicodus`.) If it connects, you're all set!

## Windows

---

These instructions are for Windows 10 and 11.

### MySQL Web Installer

Start by downloading the MySQL Web Installer from the [MySQL Downloads](https://downloads.mysql.com/archives/get/p/25/file/mysql-installer-web-community-8.0.19.0.msi) page. This will allow you to install both the MySQL Community Server and the MySQL Workbench.

### Install the Programs

Follow along with the installer:

* Click "Yes" if prompted to update.
* Accept license terms.
* Choose Custom setup type.
* When prompted to Select Products and Features, choose the following:
  * Check the box that says "Enable the Select Features page to customize product features".
  * MySQL Server 8.0.19 **or the newest listed version**. This will be under "MySQL Servers > MySQL Server > MySQL Server 8.0".
  * MySQL Workbench 8.0.19 **or the newest listed version**. This will be under "Applications > MySQL Workbench > MySQL Workbench 8.0".
* Select "Next", then "Execute". Wait for download and installation. (This can take a few minutes.)
* Advance through Configuration as follows:
  * High Availability set to "Standalone".
  * "Defaults are OK" under Type and Networking.
  * Authentication Method set to Use Legacy Authentication Method.
  * Set password to `epicodus`. You can use your own if you want but `epicodus` will be assumed in the lessons.
  * Defaults are OK under Windows Service. Make sure that checkboxes are checked for the options "Configure MySQL Server as a Windows Service" and "Start the MySQL Server at System Startup". Under Run Windows Service as..., the "Standard System Account" should be selected.
* Complete Installation process.

### Configure Your System Environment Variables

Next we need to make our GitBash shell recognize the command `mysql` (more on this below) to open and run the MySQL console. We'll do this by configuring our system environment variables for "Path" so that the `mysql` command can be recognized in any shell (including PowerShell as well as GitBash).

To do this, we must include MySQL in the **System Environment "Path" Variable**. This is its own multi-step process. The image below shows the buttons we click starting at step #2 below. If you find the image is hard to read, open it in a new tab.

1. Open the Control Panel:

  * Select "System and Security", then select "System".
  * Select the option "Change Settings" within the section titled "Computer name, domain, and workgroup settings", and a pop-up window for "System Properties" will display.

2. Within the "System Properties" pop-up window:

  * Select the "Advanced" tab,
  * Then select the "Environment Variables..." button (red circle in image below); this will open a new window called "Environment Variables".

3. Within the "Environment Variables" window, find the section called "System variables" which will have a table listing variable names and their values. In the table, find and double click "Path" under the "variable" column (red square in image below); this will open a new window called "Edit environment variable", listing all environment variables for "Path". **Note:** you won't and shouldn't have all of the same information in your system "Path" variables as shown in the image below.

  * From this window, click "New" (green circle) and add the exact location of your MySQL installation (green square), and click OK (orange circle) to save your changes. Exit out of all of the windows.
  * This location is likely `C:\Program Files\MySQL\MySQL Server 8.0\bin`, but may differ depending on your specific installation.

![This image shows steps 2 and 3, both the windows and buttons that should be clicked.](/images/mysql-setting-system-env-variables-RESIZED.png)

### Confirm That Both Programs Are Working

Next, verify the MySQL Community Server installation by opening **Windows PowerShell** and entering this command:

```bash
$ mysql -uroot -pepicodus
```

You'll know it's working and connected if you gain access and see the MySQL command line. There will be an intro message, and the command prompt should look like this:

```bash
mysql> 
```

You can exit the mysql program by entering `exit`.

Finally, open MySQL Workbench and select the `Local instance 3306` server. You will need to enter the password you set. (We used `epicodus`.) If it connects, you're all set.

