---
title: "📓 3.3.0.03 SQL Basics: Managing MySQL Databases from the Command Line"
id: 3-3-0-03-sql-basics-managing-mysql-databases-from-the-command-line
hide_table_of_contents: true
day: weekend
---

**Note:** See the [Installing and Configuring MySQL](https://old.learnhowtoprogram.com/fidgetech-3-c-and-net/3-0-lessons-1-5-getting-started-with-c/3-0-0-04-installing-and-configuring-mysql) lesson for instructions on installing MySQL.

In this lesson, we'll start using SQL commands in the command line. We'll use MySQL as our database management system.

## Connecting to MySQL from the Command Line
---

### At Epicodus

To launch MySQL servers:

 * The MySQL server application that we previously installed is configured to run on start, so it should already be running.

 * If the server is not running, restart the computer.

 * Access the command line console for MySQL by executing the command `mysql -uroot -pepicodus` in the terminal.

### At Home

To log into MySQL via the command line on your personal machine, you may need to enter different values for your username (`[YOUR-USERNAME]`) and password (`[YOUR-PASSWORD]`). However the basic command should be the same as you would use in class:

```
mysql -u[YOUR-USERNAME] -p[YOUR-PASSWORD]
```

#### Note to Windows Users

Sometimes we cannot access the `mysql` console via GitBash. If you are getting an error message when attempting to access `mysql`, use [PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.3) instead of GitBash. Typically, PowerShell is comes automatically installed on all computers with the Windows operating system. 

## Working with the Database Prompt
---

Once we are logged into our local MySQL server, we'll see a prompt like this:

```
mysql>
```

We'll use a `>` to show when we should write a command in the MySQL shell.

### Navigating to a Database

MySQL can manage many different databases at once. To make changes to a specific database, we must navigate into that database from the MySQL shell.

Let's look at the database we are currently connected to with the following command:

```sql
> SELECT DATABASE();
```

SQL commands aren't actually case sensitive, but it's common practice to capitalize them as seen here. Also, all SQL statements must end with a semicolon.

If we press _Enter_ after a SQL command and nothing happens, check to see if the prompt has changed from `MySQL>` to `->`. If so, that means we forgot a semicolon at the end of our statement. We can just add one and press _Enter_ again to resolve the issue.

### Creating a Database

The current database is `NULL` because we haven’t created any databases yet. We can tell MySQL to make a new database with this command:

```sql
> CREATE DATABASE test_database;
```

### Listing all Databases

Let's list the databases in our MySQL server:

```sql
> SHOW DATABASES;
```

We'll see our new `test_database` as well as a few other databases that come with MySQL by default.

#### Important Note

One of the pre-existing databases is called `information_schema`. This database that holds metadata for all our other databases and MySQL requires it. **Don't ever delete it.**

In fact, it's a standard practice to **never alter a database you didn't create**. If it came with a tool by default, that tool likely _requires_ it to run. Altering or deleting the database could break it.

### Connecting to a Database

We need to connect to our new database before we can make changes to it:

```sql
> USE test_database;
```

Let's verify that we're connected to the correct database:

```sql
> SELECT DATABASE();
```

### Creating Tables in a Database

Now let's create a table in our database:

```sql
> CREATE TABLE contacts (name VARCHAR (255), age INT, birthday DATETIME);
```

This creates a table called `contacts` with columns for `name`, `age`, and `birthday`. Each column name has a datatype appended to it.

#### Data Types

Just like object properties and variables in C#, SQL columns also have specified **data types**.

* In the command above, we give `name` the data type **varchar**. This is a varying number of characters and is essentially the SQL equivalent of a `string`.

* `age` is an **int**. Similar to `int`s in C#, this is a number value.

* `birthday` is a **datetime**, which includes a date and time.

Some data types have restrictions and requirements. For instance, varchar requires a maximum length, which we've set to 255 characters. 255 is a common default length for `varchar` data types because it is the maximum amount of data that can be stored with a single byte per character.

SQL has many data types. Here are the most common ones:

* `int`
* `float`
* `varchar`
* `text` (for long blocks of text)
* `timestamp`
* `datetime`
* `boolean`

For a full list, see the [MySQL _Data Type_ documentation](http://dev.MySQL.com/doc/refman/5.6/en/data-types.html).

### Listing Columns

If we are connected to a database, we can list the columns in a specific table with the following code:

```sql
> DESCRIBE contacts;
```

`DESCRIBE` takes the name of the table as an argument.

### Listing Tables

To see a list of all tables in the database we are connected to, we can use this command:

```sql
> SHOW TABLES;
```

### Deleting Tables

If we need to delete a table, we do the following:

```sql
> DROP TABLE table_name;
```

_table\_name_ is the name of the table we'd like to delete. Once again, **never delete a database you didn't personally create.**

### Adding Columns

We can add a new column to a database table we've already created with this command:

```sql
> ALTER TABLE contacts ADD favorite_color TEXT;
```

* `contacts` refers to the table we're updating.
* `favorite_color` is the name of the new column we're adding.
* `TEXT` is the data type of that new column.

### Dropping Columns

We can also remove a column from a table with this command:

```sql
> ALTER TABLE contacts DROP favorite_color;
```

* `contacts` is the table we're updating.
* `favorite_color` is the column we're removing from it.

### Adding Primary Keys

It's standard practice to include a unique, automatically-incrementing ID number for each record in our database.

To do this, we specify that a column is a primary key when we're adding the column to the database:

```sql
> ALTER TABLE contacts ADD id serial PRIMARY KEY;
```

* `contacts` is the table we're updating.
* `id` is the name of the new column we're adding.
* `serial` is a data type referring to an auto-incrementing integer;
* `PRIMARY KEY` tells MySQL that this column will contain the special primary key identifiers used to retrieve objects.

### Inserting Data

Now that we have tables with columns, let's add some data. We can manually add new **rows** into our database with commands like this:

```sql
> INSERT INTO contacts (name, age, birthday) VALUES ('Wes', 43, '1969-05-01');
```

* `contacts` is the table we're adding an entry to.
* `(name, age, birthday)` tells MySQL which columns on the table we are providing information for in this command.
* `VALUES` tells MySQL that the next set of data is the values that match the columns we just listed.
* `('Wes', 43, '1969-05-01')` is the data we're adding into this new entry.

Note that we need to put quotes around `varchar`s and `datetime`s but not around `int`s. **We need to use single quotes — double quotes won't work.**

### Retrieving IDs

We can retrieve the primary key `id` from a row we just inserted by doing the following:

```sql
> INSERT INTO contacts (name, age, birthday) VALUES ('Ada', 26, '1988-12-09');
```

```sql
> SELECT LAST_INSERT_ID();
```

The value of doing this will become apparent in future lessons as we begin building out applications.

### Querying

We can read data from a database by making a  **query**.

#### SELECT

Here's an example query:

```sql
> SELECT name FROM contacts;
```

This gives us a list of all the names in our `contacts` table.

We can select multiple columns from a table, too:

```sql
> SELECT name, birthday FROM contacts;
```

We can select all the columns from a table like this:

```sql
> SELECT * FROM contacts;
```

We can limit our `SELECT`s to only return rows that match certain criteria:

```sql
> SELECT * FROM contacts WHERE age >= 18;
```

This gives us all of the adults in `contacts`.

#### WHERE

A WHERE clauses accepts the following operators: `=`, `!=`, `>`, `<`, `>=`, `<=`, `BETWEEN`, `LIKE`, and `IN`. We can also prepend any operator with `NOT`. Here are a few examples:

```sql
> SELECT * FROM contacts WHERE age BETWEEN 13 AND 17;  
> SELECT * FROM contacts WHERE name BETWEEN 'Judith' AND 'Wilma';
> SELECT * FROM contacts WHERE name LIKE 'We%';
> SELECT * FROM contacts WHERE birthday IN ('1969-01-01', '1999-01-01');
```

For the `LIKE` operator, the `%` is a wildcard, meaning it can stand for any number of any characters.

### Updating Records

What if we need to change data in our database? The simplest and most common way is to select a record by its primary key and update its data.

```sql
> UPDATE contacts SET name = 'Wes Anderson' WHERE id = 1;
```

### Deleting Records

Now let's delete a record:

```sql
> DELETE FROM contacts WHERE id = 1;
```

### Dropping Databases

Here's how we can drop a database once we are finished with it.

```sql
> DROP DATABASE test_database;
```

### Quitting MySQL

Finally, to quit MySQL just run:

```
> \q
```

or

```
> exit
```

### More Commands

We can always see a list of MySQL commands by typing the following into the MySQL shell:

```
 \?
```
