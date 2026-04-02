---
title: "📓 5.3.0.15 More SQL Queries"
day: weekend
id: 5-3-0-15-more-sql-queries
hide_table_of_contents: true
---

In this lesson, we'll briefly explore some of the most common SQL clauses and operators.

## SQL Command Format
---

The basic format for a SQL command looks like this:

```sql
SELECT <column> FROM <tables> WHERE <condition> AND <condition> ORDER BY <column> <asc or desc>;
```

Not all of these clauses are required but this is a template for what's possible.

## SELECT
---

`SELECT` chooses the fields we want to retrieve from the database. We'll often use an `*` to denote we want to display all columns for entries our query returns. However, we could say something like this:

```sql
SELECT description FROM items;
```

This will return only data in the `description` column of our `items` table.

## FROM
---

`FROM` specifies the table we are querying. Here's an example:

```sql
SELECT * FROM items;
```

Here we are specifying that we want to return all columns from the `items` table. We could do the following to retrieve data from a `categories` table instead:

```sql
SELECT * FROM categories;
```

## WHERE
---

The `WHERE` clause allows us to filter our query further. For example, we could say the following:

```sql
SELECT * FROM items WHERE categoryId=5;
```

This will return all columns of data for all `Item` objects with a `categoryId` column value of `5`.

`WHERE` clauses may contain the following operators:

### `=` Equals

This is used to create queries seeking entries where a specific column matches the _exact_ information from the query. For example, the following query will return all columns (`*`) for all entries in the `kittens` table whose `age` column **equals** `1`:

```sql
SELECT * FROM kittens WHERE age = 1;
```

### `<>` Not Equal

The following query will return all columns (`*`) for all entries in the `kittens` table where the `age` column does not equal `1`:

```sql
SELECT * FROM kittens WHERE age <> 1;
```

In some versions of SQL, the same query would be written like this:

```sql
SELECT * FROM kittens WHERE age != 1;
```

### `>` Greater Than

This works the same as the `>` operator in C#. For example, the following query will return all columns (`*`) for all entries in the `kittens` table whose `age` column contains a value greater than `2`:

```sql
SELECT * FROM kittens WHERE age > 2;
```

### `<` Less Than

This operator is the same as the `<` operator in C#. The following query returns all columns (`*`) for all entries in the `kittens` table whose `age` column contains a value less than `7`:

```sql
SELECT * FROM kittens WHERE age < 7;
```

### `>=` Greater Than or Equal To

This operator is the same as the `>=` operator in C#. The following query returns all columns (`*`) for all entries in the `kittens` table whose `age` column contains a value greater than or equal to `9`:

```sql
SELECT * FROM kittens WHERE age >= 9;
```

### `<=` Less Than or Equal To

This is the same as the `<=` operator in C#. The following query returns all columns (`*`) for all entries in the `kittens` table whose `age` column contains a value less than or equal to `9`:

```sql
SELECT * FROM kittens WHERE age <= 9;
```

## BETWEEN
---

`BETWEEN`  denotes a specific range with upper and lower limits. The word `AND` is included between the upper and lower limits of the range. The following query returns all columns (`*`) for all entries in the `kittens` table whose `age` column contains a value between `1` and `3`:

```sql
SELECT * FROM kittens WHERE age BETWEEN 1 AND 3;
```

## LIKE
---

The `LIKE` clause looks for a specified pattern. There are a few options with the `LIKE` clause. The basic construction looks like this:

```sql
_SELECT **column\_name(s)** FROM **table\_name** WHERE **column\_name** LIKE **pattern**;_
```

The **pattern** part can differ. There are several wildcard symbols we can use to describe different patterns for SQL to search for.

### `%` Wildcard

The `%` symbol is used as a wildcard before and/or after the pattern.

The following query returns all columns (`*`) for all entries in the `kittens` table whose `name` column contains a value beginning with `s` :

```sql
SELECT * FROM kittens WHERE name LIKE 's%';
```

The following returns all columns (`*`) for all entries in the `kittens` table whose `name` column contains a value ending with `burt` :

```sql
SELECT * FROM kittens WHERE name LIKE '%burt';
```

### `_` Wildcard

The `_` symbol is a substitute for a _single_ character.

The following query returns all columns (`*`) for all entries in the `kittens` table whose `name` column contains a value beginning with any single letter, but followed by `"amson"`:

```sql
SELECT * FROM kittens WHERE name LIKE '_amson';
```

### `[charlist]` Wildcard

The `[charlist]` wildcard allows us to set a list or range of characters to match. It can be combined with another wildcard character, too. When using the `[charlist]` wildcard, we need to use the regex operator, `RLIKE`. It operates in much the same way, it just has a little different syntax. Look into the documentation to see proper implementations for each!

The following query returns all columns (`*`) for all entries in the `kittens` table whose `name` column contains a value beginning with either `a`, `b`, or `s`:

```sql
SELECT * FROM kittens WHERE name RLIKE '^[abs]';
```

Additionally, the following returns all columns (`*`) for all entries in the `kittens` table whose `name` column contains a value beginning with either `a`, `b`, or `c`:

```sql
SELECT * FROM kittens WHERE name RLIKE '^[a-c]';
```

## IN
---

The `IN` keyword is used with the `WHERE` clause to specify multiple possible values for a column.

The following query returns all columns (`*`) for all entries in the `kittens` table whose `color` column contains either `grey` or `orange`:

```sql
SELECT * FROM kittens WHERE color IN ('orange', 'grey');
```

## AND
---

The `AND` clause allows us to add _another_ criteria to `WHERE`.

The following SQL statement queries the database for all columns (`*`) corresponding with all entries in the `kittens` table whose `name` value begins with `s` AND whose value in the `color` column contains _either_ `grey`, _or_ `orange`:

```sql
SELECT * FROM kittens WHERE name LIKE 's%' AND color IN ('orange', 'grey');
```

## ORDER BY
---

SQL's `ORDER BY` can be used to sort data returned in ascending or descending order based on a column. It is added to the end of a query.

```sql
SELECT * FROM kittens WHERE name LIKE 's%' AND color IN ('orange', 'grey') ORDER BY id;
```

Note that the query looks exactly the same as our previous query other than the fact that it includes an `ORDER BY` clause at the end.

Here's another example. We can select all columns for all entries in the `kittens` table whose `age` value is greater than `2`.  Then we can order the kittens alphabetically by name:

```sql
SELECT * FROM kittens WHERE age > 2 ORDER BY name;
```

### ASC / DESC

We can also specify whether we want the order to be ascending or descending.

```sql
SELECT * FROM kittens WHERE age > 2 ORDER BY name DESC;
```

The query above select all columns for all entries in the `kittens` table whose `age` value is greater than `2`,  then orders the kittens in _reverse_ alphabetical order by their name values.


## SELECT DISTINCT
---

We can use SQL to efficiently reduce our dataset down to only unique values. This is especially useful if the table might contain duplicates.

```sql
SELECT DISTINCT name FROM kittens;

```

The query above can also be combined with many other queries on this page such as alphabetical sorting, WHERE, ORDER BY, and so on.
