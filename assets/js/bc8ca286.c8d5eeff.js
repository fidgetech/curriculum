"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[58931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=o,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={title:"\ud83d\udcd3 3.3.0.06 Retrieving Objects From the Database",day:"weekend",id:"3-3-0-06-retrieving-objects-from-the-database",hide_table_of_contents:!0},i=void 0,l={unversionedId:"c-and-net/database-basics/3-3-0-06-retrieving-objects-from-the-database",id:"c-and-net/database-basics/3-3-0-06-retrieving-objects-from-the-database",title:"\ud83d\udcd3 3.3.0.06 Retrieving Objects From the Database",description:"Now that we've set up MySqlConnector and configured our application to use and protect a database connection string, we're ready to begin opening a database connection and interacting with our database in our application.",source:"@site/docs/3_c-and-net/3_database-basics/AF-3-3-0-06-retrieving-objects-from-the-database.md",sourceDirName:"3_c-and-net/3_database-basics",slug:"/c-and-net/database-basics/3-3-0-06-retrieving-objects-from-the-database",permalink:"/v1/c-and-net/database-basics/3-3-0-06-retrieving-objects-from-the-database",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.3.0.06 Retrieving Objects From the Database",day:"weekend",id:"3-3-0-06-retrieving-objects-from-the-database",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.3.0.05 Connecting a Database to an ASP.NET Core App with MySqlConnector",permalink:"/v1/c-and-net/database-basics/3-3-0-05-connecting-a-database-to-an-asp-net-core-app-with-mysqlconnector"},next:{title:"\ud83d\udcd3 3.3.0.07 Testing Database Backed Applications",permalink:"/v1/c-and-net/database-basics/3-3-0-07-testing-database-backed-applications"}},s={},d=[{value:"Returning All Records From the Database",id:"returning-all-records-from-the-database",level:2},{value:"Opening a Database Connection",id:"opening-a-database-connection",level:3},{value:"Construct a SQL Query",id:"construct-a-sql-query",level:3},{value:"Returning Results from the Database",id:"returning-results-from-the-database",level:3},{value:"Closing the Connection",id:"closing-the-connection",level:3},{value:"Overloading the <code>Item</code> Constructor",id:"overloading-the-item-constructor",level:2},{value:"Summary",id:"summary",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that we've set up MySqlConnector and configured our application to use and protect a database connection string, we're ready to begin opening a database connection and interacting with our database in our application."),(0,o.kt)("p",null,"In this lesson, we'll use MySQL and C# to turn information from a database into C# objects our application can work with. Specifically, we'll rewrite our ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAll()")," method to return all the rows from our ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," table."),(0,o.kt)("p",null,"Because our database will persist ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),"s, we no longer need to store ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),"s in the static list ",(0,o.kt)("inlineCode",{parentName:"p"},"_instances"),". We'll start by removing all references to ",(0,o.kt)("inlineCode",{parentName:"p"},"_instances")," from our code."),(0,o.kt)("p",null,"First, we'll remove them from our class declaration and constructor:"),(0,o.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"...\nnamespace ToDoList.Models\n{\n  public class Item\n  {\n    public string Description { get; set; }\n    public int Id { get; }\n\n    public Item(string description)\n    {\n        Description = description;\n    }\n\n    ...\n  }\n  ...\n}\n")),(0,o.kt)("p",null,"Next, we'll remove ",(0,o.kt)("inlineCode",{parentName:"p"},"_instances")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Find()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ClearAll()")," methods. Because we'll get a compiler error if ",(0,o.kt)("inlineCode",{parentName:"p"},"Find()")," doesn't return an ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),", we'll update the method to return a placeholder item for now. We'll refactor the ",(0,o.kt)("inlineCode",{parentName:"p"},"Find()")," method to return an actual ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," from the database in a future lesson."),(0,o.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  public static Item Find(int searchId)\n  {\n    // Temporarily returning placeholder item to get beyond compiler errors until we refactor to work with database.\n    Item placeholderItem = new Item("placeholder item");\n    return placeholderItem;\n  }\n\n...\n')),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"ClearAll()")," method is ",(0,o.kt)("inlineCode",{parentName:"p"},"void")," and doesn't return anything so it can just be empty for now:"),(0,o.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public static void ClearAll()\n{\n}\n")),(0,o.kt)("p",null,"Now we're ready to rewrite our existing ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAll()")," method."),(0,o.kt)("h2",{id:"returning-all-records-from-the-database"},"Returning All Records From the Database"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Our new ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAll()")," method will present a lot of new concepts and boilerplate code, so it may feel overwhelming at first. We'll start by displaying the method in its entirety. Then we'll walk through the method line by line. "),(0,o.kt)("p",null,"Later in this section when we begin to use Entity Framework Core, our lengthy boilerplate code (as seen below) will be abstracted into method calls to built-in .NET classes. So, the goal of writing this boilerplate code now is to demonstrate what is actually happening when a .NET application interacts with a database. While we will be writing our methods this way for the first class session, ",(0,o.kt)("strong",{parentName:"p"},"this will not be expected for this section's independent project"),"."),(0,o.kt)("p",null,"Here's our new ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAll()")," method:"),(0,o.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'...\nusing MySqlConnector;\n...\n\n    public static List<Item> GetAll()\n    {\n      List<Item> allItems = new List<Item> { };\n\n      MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);\n      conn.Open();\n\n      MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;\n      cmd.CommandText = "SELECT * FROM items;";\n\n      MySqlDataReader rdr = cmd.ExecuteReader() as MySqlDataReader;\n      while (rdr.Read())\n      {\n          int itemId = rdr.GetInt32(0);\n          string itemDescription = rdr.GetString(1);\n          Item newItem = new Item(itemDescription, itemId);\n          allItems.Add(newItem);\n      }\n      conn.Close();\n      if (conn != null)\n      {\n          conn.Dispose();\n      }\n      return allItems;\n    }\n...\n')),(0,o.kt)("p",null,"That's a lot of new code! The first and last line should be familiar. We instantiate a new empty ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," and return that ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," after it's been populated. Before we cover the rest of the code line-by-line, here's a quick overview of what this method does:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open a database connection;"),(0,o.kt)("li",{parentName:"ul"},"Construct a SQL query;"),(0,o.kt)("li",{parentName:"ul"},"Return the query results from the database;"),(0,o.kt)("li",{parentName:"ul"},"Close the connection.")),(0,o.kt)("p",null,"Before we continue, note that we also need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"using MySqlConnector;")," to the top of our file."),(0,o.kt)("h3",{id:"opening-a-database-connection"},"Opening a Database Connection"),(0,o.kt)("p",null,"Each time we make a query, we need to open a new database connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);\nconn.Open();\n")),(0,o.kt)("p",null,"This part is relatively simple. We invoke the ",(0,o.kt)("inlineCode",{parentName:"p"},"MySqlConnection()")," method to instantiate and return a connection to our database, which we call ",(0,o.kt)("inlineCode",{parentName:"p"},"conn"),". Then we ",(0,o.kt)("inlineCode",{parentName:"p"},"Open()")," the connection. Later, we'll ",(0,o.kt)("inlineCode",{parentName:"p"},"Close()")," our connection. "),(0,o.kt)("p",null,"Note that our application will throw an exception if we try to make a SQL query without first opening a database connection."),(0,o.kt)("h3",{id:"construct-a-sql-query"},"Construct a SQL Query"),(0,o.kt)("p",null,"Once our connection is open, we can construct our SQL query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;\ncmd.CommandText = "SELECT * FROM items;";\n')),(0,o.kt)("p",null,"When we make a SQL query in our application, it's not just a string of text. The query needs to be stored in a special object called a ",(0,o.kt)("inlineCode",{parentName:"p"},"MySqlCommand"),"."),(0,o.kt)("p",null,"In order to do this, we call the ",(0,o.kt)("inlineCode",{parentName:"p"},"createCommand()")," method on our ",(0,o.kt)("inlineCode",{parentName:"p"},"conn")," object. We include the expression ",(0,o.kt)("inlineCode",{parentName:"p"},"as MySqlCommand")," at the end of this line. Using ",(0,o.kt)("inlineCode",{parentName:"p"},"as")," creates an expression that ",(0,o.kt)("strong",{parentName:"p"},"casts")," ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd")," into a ",(0,o.kt)("inlineCode",{parentName:"p"},"MySqlCommand")," object."),(0,o.kt)("p",null,"This casting is important because there are many different types of SQL databases and many different types of objects that can interact with them. Because our connection is a ",(0,o.kt)("inlineCode",{parentName:"p"},"MySqlConnection")," type object, we cast it to send a corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"MySqlCommand")," to the database."),(0,o.kt)("p",null,"Next, we'll add the actual text of our SQL command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'cmd.CommandText = "SELECT * FROM items;";\n')),(0,o.kt)("p",null,"Remember that ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"MySqlCommand")," object. A ",(0,o.kt)("inlineCode",{parentName:"p"},"MySQLCommand")," object has a number of different properties we can set. We won't cover most of them, but the ",(0,o.kt)("inlineCode",{parentName:"p"},"CommandText")," property is essential because it's where we'll store our actual SQL query."),(0,o.kt)("p",null,"We set this property value to ",(0,o.kt)("inlineCode",{parentName:"p"},'"SELECT * FROM items;"'),"."),(0,o.kt)("h3",{id:"returning-results-from-the-database"},"Returning Results from the Database"),(0,o.kt)("p",null,"Next, we need to create a ",(0,o.kt)("strong",{parentName:"p"},"Data Reader Object"),". It will be responsible for reading the data returned by our database in response to the ",(0,o.kt)("inlineCode",{parentName:"p"},'"SELECT * FROM items;"')," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"MySqlDataReader rdr = cmd.ExecuteReader() as MySqlDataReader;\n")),(0,o.kt)("p",null,"We'll cast its type for use with MySQL just like we did with ",(0,o.kt)("inlineCode",{parentName:"p"},"conn"),". We call this Data Reader ",(0,o.kt)("inlineCode",{parentName:"p"},"rdr")," and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"as")," keyword to cast it into a ",(0,o.kt)("inlineCode",{parentName:"p"},"MySqlDataReader")," object."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rdr")," object represents the actual reading of the database. However, we will need to call other methods on the ",(0,o.kt)("inlineCode",{parentName:"p"},"rdr")," object in order to display the results of the query in our application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"while(rdr.Read())\n{\n  // Code temporarily omitted.\n}\n")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"MySqlDataReader")," object has a built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"Read()")," method that reads results from the database one at a time and then advances to the next record. This method returns a boolean. If the method advances to the next object in the database, it returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". If it reaches the end of the records that our query has returned, it returns ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," and our ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," loop ends."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," loop, we'll take each individual record from our database and translate that record into an ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," object our application understands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"while(rdr.Read())\n{\n  int itemId = rdr.GetInt32(0);\n  string itemDescription = rdr.GetString(1);\n  Item newItem = new Item(itemDescription, itemId);\n  allItems.Add(newItem);\n}\n")),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"MySQLDataReader")," ",(0,o.kt)("inlineCode",{parentName:"p"},"rdr")," object has many ",(0,o.kt)("a",{parentName:"p",href:"https://mysqlconnector.net/api/mysqlconnector/mysqldatareadertype/"},"methods")," available to it. Many of these methods are specifically for extracting data from a record. ",(0,o.kt)("inlineCode",{parentName:"p"},"GetInt32()")," returns a 32 bit integer. ",(0,o.kt)("inlineCode",{parentName:"p"},"GetString()")," is self-explanatory."),(0,o.kt)("p",null,"We also pass in a number value as an argument to both methods. This is because rows from the database are returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"rdr.Read()")," method as indexed arrays. Let's use the following table as an example to demonstrate:"),(0,o.kt)("pre",null,"id | description ---+--------- 1  | Mow the lawn 2  | Walk the dog 3  | Make dinner"),(0,o.kt)("p",null,"When the reader object returns the first entry in this example database, it'll look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'{ 1, "Mow the lawn" };\n')),(0,o.kt)("p",null,"The second object will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'{ 2, "Walk the dog" };\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," column is at index ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," while the ",(0,o.kt)("inlineCode",{parentName:"p"},"description")," column is at index ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),". If we had a third column, it'd be at index ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,o.kt)("p",null,"In our ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," loop above, we define our ",(0,o.kt)("inlineCode",{parentName:"p"},"itemId")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"rdr.GetInt32(0);")," because this will return the integer at the 0th index of the array returned by the reader. Similarly, we define ",(0,o.kt)("inlineCode",{parentName:"p"},"itemDescription")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"rdr.GetString(1)")," because our item description will be at the 1st index of the array returned by the reader."),(0,o.kt)("p",null,"Once we've collected the data, we can use it to instantiate new ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," objects and add them to our ",(0,o.kt)("inlineCode",{parentName:"p"},"allItems")," list. Now each row in our database is an ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," stored in a ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," that our application understands."),(0,o.kt)("h3",{id:"closing-the-connection"},"Closing the Connection"),(0,o.kt)("p",null,"Communicating with a database is a resource-intensive process. For this reason, it's important to close our database connection when we're done. This allows the database to reallocate resources to respond to requests from other users. We can use a built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"Close()")," method to do this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"conn.Close();\n\nif (conn != null)\n{\n  conn.Dispose();\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Close()")," method is self-explanatory. We also include a conditional because on rare occasions, our database connection will fail to close properly. It's considered best practice to confirm it's fully closed. That's why we put the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dispose()")," method inside a conditional. This method will only run if ",(0,o.kt)("inlineCode",{parentName:"p"},"conn")," is not ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("h2",{id:"overloading-the-item-constructor"},"Overloading the ",(0,o.kt)("inlineCode",{parentName:"h2"},"Item")," Constructor"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now that we've added a ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAll()")," method, we'll need to make one more change to our code so our application can properly interact with our new method. Our ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAll()")," method includes the following line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"Item newItem = new Item(itemDescription, itemId);\n")),(0,o.kt)("p",null,"Currently, our constructor only accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"description")," as an argument. Whenever we create a new object in our application, it should only have a ",(0,o.kt)("inlineCode",{parentName:"p"},"description"),". However, when we ",(0,o.kt)("em",{parentName:"p"},"retrieve")," a record from the database, we want its ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", too. We can add an overloaded constructor so our application can instantiate an ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," either way:"),(0,o.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public Item(string description, int id)\n{\n    Description = description;\n    Id = id;\n}\n")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We've covered a lot of ground here. In the process of rewriting our ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAll()")," method, we needed to open a database connection, create a special object to hold our SQL query, and then create another special object to actually read through the results. Finally, we had to translate our database rows into C# objects and close the connection. It's a lot of work for a simple query. Entity Framework Core will make our lives much easier later this section, but for now, it's important to solidify our understanding of how our application actually queries a database."),(0,o.kt)("p",null,"At this point, our To Do List app has the code necessary to query and return database-backed information. However, we have some more work to do before our database functionality is fully implemented. In the next lesson, we'll add functionality for testing our new database-backed methods."))}m.isMDXComponent=!0}}]);