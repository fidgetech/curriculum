---
title: "📓 3.2.0.4 How the Web Works: Developer Tools"
day: weekend
id: 3-2-0-4-how-the-web-works-developer-tools
hide_table_of_contents: true
---

As web developers, we often need to look at the requests and responses that come and go from client and server and back. In this lesson, we are going to look at the Developer Tools in Chrome that offer a peek into the requests and responses in the browser.

## Chrome Developer Tools
---

The Chrome browser is the preferred browser for many web developers because it offers tools that make developing easier. We've already used these developer tools a ton in Intro to Programming. Primarily to log content to the JavaScript console and debug broken websites. Let's explore how these tools can also allow us to observe the request-response conversation between our browser client and outside web servers.

## Accessing Developer Tools
---

As you may recall, we access Chrome's developer tools by clicking the _View_ option in the toolbar, then selecting _Developer > Developer Tools_.

Alternatively, keyboard shortcuts are _Command + Option + J_ on Mac and _Ctrl + Shift + I_ on PC. On Epicodus classroom machines the shortcut is _[Windows] + Alt + J_.

### Viewing HTTP Requests and Responses

The Developer Tools pane will open on the side or bottom of our browser window. To see HTTP requests and responses for pages we visit, we can select the _Network_ tab (the fourth tab from the left) on the top toolbar of the pane.

While located in the _Network_ area of the Chrome developer tools, we'll navigate to this URL on Learn How to Program:

```
https://old.learnhowtoprogram.com/tracks
```

We'll see the following appear in the _Network_ area:

<img alt="Developer Tools Network Tab" src="/images/SHARED/how-the-web-works/developer-tools-screenshot-1.png" width="100%" />

* Each of these lines represents a request made from our client to the LearnHowToProgram server.

* The first request in this list is for the `tracks` resource. We see it was successful because there is a status of `200`.

* The `type` of resource is `document` (in this case an HTML document). As you may imagine, there are still more resources necessary to display this page beyond the HTML document. For each additional resource (stylesheet, script, image files, etc) required in the HTML, the client makes a new request and the server will return a new response. We can see other `Type`s listed in this pane, like `script`, `font`, and `stylesheet`.

### Request Details

When we click on a request we can see more details about it. In the _General_ section we see the IP address for the server and the URL sent in the request, among other things:

<img src="/images/SHARED/how-the-web-works/developer-tools-screenshot-2.png" width="100%" />

Under _Request Headers_ we can see the headers, including several previously noted in the [URL](../../c-and-net/basic-web-applications/3-2-0-3-how-the-web-works-uniform-resource-locator) lesson: the host name (a subcomponent of `authority`), path, scheme, etc:

<img src="/images/SHARED/how-the-web-works/developer-tools-screenshot-3.png" width="100%" />

### Response Details

We can also see response details for the `tracks` request in the _Response Headers_ section:

<img alt="Dev Tools Response Headers" src="/images/SHARED/how-the-web-works/developer-tools-screenshot-4.png" width="100%" />

We see that the _Status Code_ shows a `200`. This means that the server completed the successful processing of the request. We can also see the content type, date, etc. returned in the response message.

To see the raw response that also includes the response body, click the _Response_ tab to the right of _Headers_:

<img alt="Dev Tools Response Body" src="/images/SHARED/how-the-web-works/developer-tools-screenshot-5.png" width="100%" />

And check it out! There's all the HTML for the page!

Notice also the lower left of the window states that a total of 15 requests were made to load this `/tracks` area of the site. So when we arrive on the Tracks page for Learn How To Program the HTTP request-response cycle includes 15 unique requests with 15 unique responses.

Visit several sites with the Developer Tools and see if you can analyze the request-response details behind the final display that you see in your browser window.
