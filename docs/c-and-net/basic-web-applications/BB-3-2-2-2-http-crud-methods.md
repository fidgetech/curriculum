---
title: "📓 3.2.2.2 HTTP CRUD Methods"
id: 3-2-2-2-http-crud-methods
hide_table_of_contents: true
day: tuesday
---

In this lesson, we'll discuss **CRUD** functionality and cover the remaining two HTTP methods: PATCH and DELETE. Together, the functionality offered by the full range of HTTP methods (GET, POST, PATCH and DELETE) is commonly referred to as **CRUD** in the industry.

## HTTP Request Methods
---

**CRUD** stands for _**C**reate **R**ead **U**pdate **D**elete_. It's essentially shorthand for the full list of things we can do with objects in MVC programs. Each of these actions corresponds with a different HTTP method. Let's walk through each part of CRUD, and discuss the HTTP method that corresponds with each CRUD term. Some of this will be review:

### GET
#### The _Read_ Part of CRUD

**GET** requests information from the server, which is usually displayed to users. ASP.NET includes a `HttpGet()` method for GET requests.

### POST
#### The _Create_ Part of CRUD

**POST** adds information on the server. MVC has an `HttpPost()` method for POST requests. To create POST requests, we do three things:

1. Add a `method` attribute of `post` to an HTML form.
2. Add an `action` attribute with the intended path of the post request.
2. Add a `type` attribute of `submit` to the form's button.

When the form is submitted, it will trigger a POST request.

In MVC, **HTML forms without a `method` attribute of `post` are sent as GET requests instead.** This is a common error!

### PATCH
#### The _Update_ Part of CRUD

**PATCH** also updates the server, but in a more specific manner than POST. PATCH updates _existing_ information while POST usually adds entirely new data to the server.

For instance, if we update the caption of a photo we posted on Facebook, we're submitting a PATCH request. The photo already exists on their server and we're just updating one of the photo's attributes.

Here's a handy trick to remember the difference between POST and PATCH:

* PATCH is like patching an old pair of jeans or a favorite quilt. The (well-loved) item already exists, we're just altering it.

* POST is like posting to social media. That photo, tweet, or status didn't exist on their servers until you posted it. You're making something new!

### DELETE
#### The _Delete_ Part of CRUD

As its name suggests, **DELETE** removes data from the server. It, too, is like a more specific POST request. It does not add any new information and simply removes the specified data.

## Visual Reference
---

It's a bit confusing that CRUD terms don't match the HTTP method names (besides DELETE). However, it'll become second-nature before too long. For now, here's a handy reference:

<img src="https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/http-crud-methods-screenshot-1.png" width="100%" />

## Limitations of HTML Forms
---

It's also important to understand the limitations of HTML forms. Primarily, **HTML forms can only trigger GET and POST requests**.

At one point, early drafts of HTML5 forms _did_ support different requests. Those curious can see drafts from W3 [here](https://www.w3.org/TR/2010/WD-html5-20100624/association-of-controls-and-forms.html#attr-fs-method). (W3 is the [World Wide Web Consortium](https://www.w3.org/Consortium/). They develop standards for HTML and the web as a whole.) But support was [later removed](https://www.w3.org/Bugs/Public/show_bug.cgi?id=10671) before HTML5's release.

### Working Around HTML Limitations in MVC

ASP.NET Core 6.0 _does_ actually contain `HttpPut()` and `HttpDelete()` methods to define routes to handle these requests. However, we cannot trigger them using forms. Even a button that submits a request technically counts as an HTML form.

These methods are only included to create APIs, where other websites request data without forms or front-end user interfaces, so they don't encounter the same limitations. We'll be building APIs with ASP.NET later in this course.

Because **HTML forms only execute GET and POST requests, we must use POST requests to update and/or delete records.** This may feel hacky, but until HTML itself changes, it's the industry standard. We'll see how this works in the next few lessons.
