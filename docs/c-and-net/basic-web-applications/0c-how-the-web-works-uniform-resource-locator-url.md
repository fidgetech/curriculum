---
title: "📓 3.2.0.3 How the Web Works: Uniform Resource Locator"
id: 3203-how-the-web-works-uniform-resource-locator
hide_table_of_contents: true
day: weekend
---

As discussed in the last lesson, when we navigate to `https://old.learnhowtoprogram.com/courses` in our browser, the browser (or _client_) makes a request to the web server where that page's content is stored.

One of the most important pieces of this request is the specific address of the content we're attempting to view. This address is called the **URL**, short for [**Uniform Resource Locator**](https://en.wikipedia.org/wiki/Uniform_Resource_Locator), or **URI**, short for **Uniform Resource Identifier**. (The difference is largely semantic.) In this lesson we'll explore the URL in detail.

## URL Elements
---

Certain elements must be included in the URL for a request to be successful. For instance, if we were requesting content at the URL `https://old.learnhowtoprogram.com/courses`, these elements could be identified as:

1. **Scheme**: `http://`

2. **Host**: `old.learnhowtoprogram.com`

3. **Path**: `/courses`

Let's discuss each in greater detail.

### 1. Scheme

The **scheme** denotes _how_ the client will locate or interact with the requested resource.  In the example above, the client will make a request using the `http://` scheme.

Other schemes include `ftp`, `mailto`, and `file`. The scheme is always followed by a colon. And, for the `http` scheme in particular, a colon _and_ two slashes (`://`).

### 2. Host

The **host** details _where_ the requested resource is located. In a URL the host is either the domain name or the IP address. In our example the host is `old.learnhowtoprogram.com`.

### 3. Path

The **path** consists of one or more segments separated by slashes. It provides a name for identifying the specific resource requested.  In our example the path indicates the resource: `/courses`.

## Optional URL Elements
---

Not all elements in a URL are required. Here are two that are optional.

### `?` Query

There may be times when URL contents must provide additional details for a resource to be identified. For example, if we use the search functionality on Learn How to Program, the server must know what term(s) we've searched for to return relevant information.

When we enter _"internet"_ into the search bar on LearnHowToProgram and submit, the request is made to this URL:

```
https://old.learnhowtoprogram.com/lessons?utf8=✓&search=internet&commit=Search
```

Notice the `?` symbol after the path. This indicates the beginning of a **query string**. There are 3 key-value pairs that make up the parameters sent in this request:

* `utf8=✓`
* `search=internet`
* `commit=Search`

Our `search` parameter is one of them. It has a key of `search` and a value of `internet`. Query parameters are separated by the `&` symbol when there is more than one. The server will use this value to query the database for lessons whose text contains the term `internet`.

### `#` Fragment

Another optional URL element is called a fragment. Here is an example URL containing a fragment:

```
http://guides.rubyonrails.org/active_record_basics.html#validations
```

**Fragments** begin with a `#` symbol. They contain information that's typically processed by the client instead of the server.

In this example, the page at `http://guides.rubyonrails.org/active_record_basics.html` is quite long. It contains many different sections, each nested in their own `div` within the HTML. `validations` is the `id` of one of these `div`s. By adding it as a fragment to the end of the URL, our client hops to that area of the otherwise-long page automatically. Try it out:

* Visit the example link by [clicking here](http://guides.rubyonrails.org/active_record_basics.html#validations).

* In your browser's URL bar, change the portion of the URL reading `validations` to `callbacks`.

* Notice how the page then repositions to display the `callbacks` section at the top of the browser window.

* Then remove this fragment from the URL entirely. Notice the position returns to top of the document.
