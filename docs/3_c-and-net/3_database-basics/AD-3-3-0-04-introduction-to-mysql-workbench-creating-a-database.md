---
title: "📓 3.3.0.04 Introduction to MySQL Workbench: Creating a Database"
day: weekend
id: 3-3-0-04-introduction-to-mysql-workbench-creating-a-database
hide_table_of_contents: true
---

We'll use a tool called **MySQL Workbench** to manage our databases. It was created to manage MySQL using a graphical interface. In this lesson, we'll walk through how to use the interface to view, configure, and interact with our databases.

**Note:** See the [Installing and Configuring MySQL]/c-and-net/lessons-1-5-getting-started-with-c/3-0-0-04-installing-and-configuring-mysql) lesson for instructions on installing MySQL Workbench.

## Accessing MySQL Workbench

**MySQL Workbench** is a GUI (graphical user interface) to interact with databases. Here's how we access the interface.

* First ensure the MySQL server is running by opening Terminal or GitBash (or Windows PowerShell if GitBash does not work as expected) and entering the command `mysql -uroot -pepicodus`.

* After the servers start running, open MySQL Workbench.

* Double click the MySQL instance in the _MySQL Connections_ section. You may be prompted to enter a password. If so, type `epicodus` if you are using an Epicodus machine or your password if you are using your personal machine.

* This will open our MySQL instance.

Follow these same steps to access MySQL Workbench for all future projects.

### Viewing existing databases with MySQL Workbench

Once we've opened our MySQL interface, we can look at the current databases by clicking on the _Schemas_ tab:

![Schemas tab](/images/c%23/schema-mysql-workbench.png)

A **schema** is simply the structure of a database. In the screenshot above, we have two:

```
sys
test_database
```

Don't worry if `test_database` isn't showing in your instance. The _sys_ database contains system information for our MySQL server.

The window where the schemas are currently being displayed in MySQL Workbench is called the _navigator window_. Note that the navigator window can display information other than schemas as well.

Other databases may be included such as:

```
information_schema
mysql
performance_schema
```

A quick reminder: don't ever alter default databases. If these files are removed or altered, MySQL will need to be reinstalled. **Never alter the _information\_schema_, _mysql_, _sys_, or _performance\_schema_, databases in MySQL Workbench.**

### Creating a Database with MySQL Workbench

After accessing MySQL Workbench and viewing existing databases, we can create a new database with the following steps:

* In MySQL Workbench, click the _Create a new schema in the connected server_ option in the top navbar. It's the fourth icon from the left:

![Create a new schema](/images/c%23/create-a-new-schema.png)

* Alternatively, we can right-click in the _Navigator_ window and select _Create schema..._

* In the Main window, we now see a _new\_schema_ page.

* Enter a name in the _Database name_ field. For this first project, let's call our database `to_do_list_with_mysqlconnector`.

* We can leave the defaults in place in the drop down options.

* Click _Apply_.

* A window will appear showing the SQL command to be executed. Select _Apply_ and _Finish_ (or _Close_) to confirm our new database.

If we click on the _Schemas_ tab, `to_do_list_with_mysqlconnector` will now be among the listed databases in the navigator window.

### Creating Tables with MySQL Workbench

We'll add a table with two columns to our new schema. We'll call the table `items` and include the following columns:

* The `id` column will only accept integers.

* The `description` field will only accept string values.

Let's create this table now.

* Toggle the `to_do_list_with_mysqlconnector` database to view its contents.

```
Tables
Views
Stored Procedures
Functions
```

* Right-click _Tables_ and select _Create Table..._

* Enter `items` in the _name_ field.

* Add an `id` column by clicking _&lt;click to edit&gt;_ in the window right below the name of our new table.
  * Name the column `id` by double-clicking on the `Column` field and typing in the new name.
  * Select _INT_ from the _Datatype_ dropdown.
  * Check the _PK_ (primary key), _NN_ (not null) and _AI_ (auto increment) checkboxes. Our `id` column will be our primary key, which means we don't ever want it to have a `null` value and we always want it to auto-increment.

* Add another row in this window and do the following:
  * Name the column `description`.
  * Select _VARCHAR_ under _Type_ and add _255_ to the _Length/Values_ argument, instead of the default 45.

The following screenshot demonstrates what the window should look like after the two columns have been added:

![Adding two columns to table](/images/c%23/add-to-do-list-table.png)

If you make a mistake with one of the columns and want to start over, right-click on the column and click _Delete Selected_.

#### Previewing & Saving

* Next, click the _Apply_ button on the bottom right of the page. A dialog box will pop up. The SQL statements that appear are very similar to what we'd type in the command line if we were creating this table manually:

```sql
CREATE TABLE `to_do_list_with_mysqlconnector`.`items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));
```

* After confirming our SQL, we can click _Apply_ and _Close_ to generate this table.

MySQL Workbench makes it much easier to add and update databases. With just a few clicks, we were able to add a new database and table for our To Do List. In the next lesson, we'll learn how to connect this database to our application.
