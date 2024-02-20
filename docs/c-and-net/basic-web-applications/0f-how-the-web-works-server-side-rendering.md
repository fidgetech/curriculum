---
title: "\U0001F4D3 3.2.0.6 How the Web Works: Server-Side Rendering"
id: 3206-how-the-web-works-server-side-rendering
slug: 3206-how-the-web-works-server-side-rendering
hide_table_of_contents: true
sidebar_position: 6
day: weekend
type: lesson
url: >-
  https://github.com/fidgetech/c-and-net/blob/main/0f_how_the_web_works_server-side_rendering.md
---

We just mentioned that the ASP.NET Core MVC framework we'll use is something called a **server-side MVC**. This is a type of design pattern that _tons_ of different web frameworks in different languages follow. So, before we begin writing our first C# web apps, let's learn more about what it means to be **server-side**.

After that, the next lesson will detail what an **MVC** is, before we finally begin constructing our first ASP.NET Core MVC web app together.

## Server-Side MVCs
---

ASP.NET Core MVC is a server-side MVC framework. In a **server-side** application the client's request to view a page depends on the server delivering the correct content for that specific page (HTML, CSS, files, etc.) to the client. The client then renders this content for the user.

Before we can discuss what server-side means, we must first understand the difference between a client and a server. We covered this in the [_How the Web Works: Clients and Servers_](https://old.learnhowtoprogram.com/c-and-net/basic-web-applications/how-the-web-works-clients-and-servers) lesson; but let's quickly review.

## Clients & Servers
---

A **client** is usually a web browser, like Chrome, but can be anything that facilitates interaction with the web. A **server** is a machine that contains resources (like web pages and files). When a **client** requests those resources it provides them in an HTTP **response** to the client's **request**. For example, here's what happens when we visit Epicodus' website in our browser:

* We type `http://www.epicodus.com` into the URL bar and hit _Enter_.

* The client (our browser) constructs a **request** formatted with **HTTP protocol** to the server Epicodus' site is hosted on.

* A **DNS server** locates the IP address of Epicodus' server by **resolving** the `http://www.epicodus.com` URL.

* The client's request is sent to this IP address.

* The server receives the request. It constructs and sends a **response**, also formatted following HTTP protocol, containing the resources necessary for that specific page.

* The client receives the response and uses the included resources to render the page.

* As we continue navigating the site, our client begins a sort of discussion with the server. Each time a new page is visited, the client must send _another_ request to the server for information for _that specific_ area of the site. And, unless something goes wrong, the server continues to respond with new content. This ongoing conversation is called a **request-response loop.**

(If any of this feels unclear, we recommend revisiting and reviewing the [_How the Web Works: Clients and Servers_](https://old.learnhowtoprogram.com/c-and-net/basic-web-applications/how-the-web-works-clients-and-servers) lesson before advancing.)

This process is considered **server-side** because the server is responsible for sending required content for the specific page a user attempts to view. The server is also continually contacted as the user navigates the page, in that **request-response loop**.

## Client-Side Applications
---

We specify that frameworks like ASP.NET Core are server-side because not all frameworks follow this same pattern. So it's important to denote which do, and which don't. You see, other types of applications are considered to be **client-side**. These rely on the web client to  locate resources for and render specific pages of a site, instead of contacting the server each time a user wants to see a new page.

How does this work? Pretend we have a site at _www.fancyclientsidesite.com/_. It's built with a client-side tool instead of a server-side framework like ASP.NET Core MVC. Here's what happens when we visit and interact with it:

* We visit the site by entering its URL (or clicking a link) in our client.

* The client constructs an HTTP-formatted request to the site's server to retrieve the necessary resources to render it.

* A DNS server locates the IP address of the site's server by resolving its `www.fancyclientsidesite.com/` URL.

* The client's request is sent to the specific IP address.

* The server receives the request. It constructs and sends an HTTP-formatted response. But the response **doesn't** contain the resources necessary for that specific page. It actually sends **one big file containing _all_ resources and code for _all_ pages in _the entire site_!**

* When we later navigate to a different area (say, _www.fancyclientsidesite.com/about-me_) **the client doesn't send another request to the server!** It doesn't begin that request-response loop 'conversation'. Instead, the client is responsible for locating the new page's resources/content in the big response the server sent the first time. This response contains _everything_ necessary for the _entire_ site. So the client locates content for the specific area the user is requesting to view within the big giant response, and renders it.

## Conclusion
---

So what does this mean for us? Let's summarize:

* When users navigate **server-side** applications, the client enters into a 'back-and-forth' conversation with the server, known as a **request-response loop**. Each new area a user navigates to results in a new request to the server.

* In **client-side** applications, the server is generally only contacted once. _All_ content for the _entire_ website is provided. When users navigate to new areas, the client has to find resources for that new page in the single big response, instead of contacting the server again.

* **ASP.NET Core MVC is a server-side framework.** It _will_ make a series of requests to the server in a request-response loop. A new request for each page or area the user navigates to. This is very, very important to remember, as it will affect how we construct our applications.

* But we'll also learn more about client-side architecture in our level three class when we study React. Like many JavaScript-powered website tools, React is client-side! This means we'll have plenty of experience with _both_ major web design paradigms before graduation.

In the next lesson we'll explore what an **MVC** is, and how it influences how we'll create our sites with ASP.NET Core MVC. Then we'll finally build our first C# web application together. Stay tuned!
