---
title: "📓 3.3.0.08 Creating a Test Database: Exporting and Importing Databases with MySQL Workbench"
day: weekend
id: 3-3-0-08-creating-a-test-database-exporting-and-importing-databases-with-mysql-workbench
hide_table_of_contents: true
---

In this lesson, we'll learn how to export and import a database using MySQL Workbench. In the process, we'll create a test database for the To Do List. You will also use these instructions to export your database to include in your independent project for this course section.

As you are working through the following steps, **make sure that the MySQL Workbench application window is expanded to fit your entire screen.** MySQL's user interface doesn't resize well to smaller windows causing some buttons to be hidden out of view.

## Creating a Test Database
---

### Exporting `to_do_list_with_mysqlconnector`

Let's create a test database for our To Do List.

* Launch MySQL Workbench and open your local instance so that the _Navigator_ window is visible.

* Select the _Administration_ tab from the bottom of the _Navigator_ window.

* Select _Data Export_ from the list of available options.

![In the "Navigator" window, select the "Administration" tab and then select "Data Export".](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/mysql-workbench-how-to/mysql_data_export.gif)

* Select the `to_do_list` in the left hand _Tables to Export_ window. Choose _Dump Structure Only_ in the drop down on the right.

* Select _Export to Self-Contained File_ in the Export Options.

* Choose a file name and a place to export your database to. For now, the name doesn't matter — we just need to be able to find it so we can import it again. **For the independent project, you'll want to name your database dump file `firstname_lastname.sql`**, where `firstname` is your first name and `lastname` is your last name. 

* Optionally, you can check the box to _Include Create Schema_. Doing so, will include the SQL command to create a database with the same name as the one you are exporting. **Do not do this now as you follow along with these instructions to create a test database, and do not do this for the independent project.** 

* Click the _Start Export_ button at the bottom right corner. If it's not visible, try expanding the MySQL Workbench window.

We now have a `.sql` file that we can use to recreate our `to_do_list_with_mysqlconnector` database.

![To export a database, select the database from those listed, select the option to export to self contained file (including the desired target location), and then select "Start Export".](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/mysql-workbench-how-to/mysql_data_export_process.gif)

### Importing `to_do_list_with_mysqlconnector`

* In the _Navigator_ > _Administration_ window, select _Data Import/Restore_.

* In _Import Options_ select _Import from Self-Contained File_.

* Navigate to the file we just created.

* Under _Default Schema to be Imported To_, select the _New_ button.
    * Enter the name of your database with `_test` appended to the end.
    * In this case `to_do_list_with_mysqlconnector_test`.
    * Click _Ok_.

* Navigate to the tab called _Import Progress_ and click _Start Import_ at the bottom right corner of the window.

After you are finished with the above steps, reopen the _Navigator_ > _Schemas_ tab. Right click and select _Refresh All_. Our new test database will appear.

![To import a database, select "Import from Self-Contained File", then select "new" under the section called "Default Schema to be Imported To" and in the input that appears put in the name of your database with "_test" appended to the end. Finally, select "Start Import" on in the window tab called "Import Progress".](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/mysql-workbench-how-to/mysql_data_import_process.gif)

### Important Note

Test databases should _always_ have the same name as the production database with `_test` appended to the end. They must also contain the exact same structure as the development database, including the same tables, rows and so on. To ensure they're the same, we **always** create our test databases by using our development database as a template.

With our test database ready to go, now we can connect our test project to the test database and update our teardown method to empty it. 
