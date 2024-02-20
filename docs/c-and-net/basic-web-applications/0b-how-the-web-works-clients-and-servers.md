---
title: "\U0001F4D3 3.2.0.2 How the Web Works: Clients and Servers"
id: 3202-how-the-web-works-clients-and-servers
slug: 3202-how-the-web-works-clients-and-servers
hide_table_of_contents: true
sidebar_position: 2
day: weekend
type: lesson
url: https://github.com/fidgetech/c-and-net/blob/main/0b_how_the_web_works_clients_and_servers.md
---

You're about to learn your first web framework! But before we begin we'll address several concepts that apply to the internet in general. A series of lessons this section, all prefixed with _How the Web Works_, will walk through the basic concepts that create the Internet, and allow users to visit sites like those we're about to create. This will provide context to understand how our websites will function, both in our code and behind-the-scenes.

This first lesson will walk through the process by which our computers or devices locate, communicate with, and load websites and other resources.

## Internet Protocol (IP) Addresses
---

First let's discuss _the Internet_. When we use the term **Internet**, we're referring to millions of networks that are connected to allow devices (computers, laptops, phones, etc.) to communicate and access web content.

Similar to the address of your home, devices connected to the Internet have a unique address too. It's called an **Internet Protocol Address**, or [**IP Address**](https://en.wikipedia.org/wiki/IP_address) for short. This address is assigned by an [**Internet Service Provider (ISP)**](https://en.wikipedia.org/wiki/Internet_service_provider) (e.g. Comcast, CenturyLink, Verizon). Servers for websites also have IP addresses.

IP addresses are represented by four groups of three numbers separated by periods:

```
198.185.159.145
```

Sometimes there's an extra number after an IP address, separated from others by a colon `:` like this:

```
198.185.159.145:43
```

This additional number is a port number. A **port number** is like a home address having an additional mailbox or apartment number appended to the end. It indicates an even more specific location that information travels to at that address.

## Requests
---

We've covered two addresses so far: Device IP addresses, and website server IP addresses. Next we'll explore how these two addresses interact when we visit a website on an internet-connected device.

To access a website we make a **request** from a **client**.

* The **client** is usually a web browser, like Chrome, Firefox, Safari, etc., but can be anything that facilitates our interaction with the web.

* A **request** generally consists of entering a web address in a browser's URL bar, clicking a link, or submitting a form; essentially just anything that triggers us navigating to a new location on the web.

### Request Message

When we create a request, the client constructs a special message. Among other things, this message includes the web address we are sending a request to. (For example, when we click a link to visit [this area of the website](https://old.learnhowtoprogram.com/courses), the web address `https://old.learnhowtoprogram.com/courses` is included.)

This message is formatted using a strict set of rules, or protocol, called [Hypertext Transfer Protocol (HTTP)](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) Continuing with the postal mail example, **Hypertext Transfer Protocol**, **HTTP** for short, is similar to formatting rules for addressing paper envelopes. We can't write an address _anywhere_ on an envelope, or format it however we please. The postal service outlines distinct protocol for what information is required (street address, city, state, zip), how it's formatted, and where it's written on the envelope. Deviation from this protocol results in letters not reaching their destinations.

HTTP has similar standards. In order for the client to reach its destination, HTTP requires certain information be present and formatted in a specific manner. (Don't worry about _how_ it must be formatted quite yet, we'll explore that in a later lesson on HTTP Requests.)

### Locating a Server's IP Address

After this message is constructed following HTTP protocol, it leaves the client, and the ISP collects that page's corresponding content from the server it resides in.

But before the server can be located, its IP address must be identified using the web address URL provided in the client's request message. This is the job of **Domain Naming System** ([DNS](https://en.wikipedia.org/wiki/Domain_Name_System)) servers.

There are hundreds of DNS servers that house databases to resolve web addresses to IP addresses. In our example, a DNS server matches `https://old.learnhowtoprogram.com/courses` to the IP address `104.28.25.13:443`. Our request message is then sent to that specific IP address, the server containing the [Learn How To Program website](https://old.learnhowtoprogram.com).

### Contacting the Server

The web server receives the message. Based on its contents, the server determines which **resource** is being requested or interacted with. For example, a request to view `https://old.learnhowtoprogram.com/courses` will gather the resources necessary to display our main _Courses_ page. This resource is an HTML document. Depending on the specific site and its content, other resources like images, stylesheets, scripts and videos be gathered too.

## Responses
---

Once this content is collected, a **response** is sent from the website's server back to the client. This response contains all those resources necessary to load the page. The client interprets this response and the page is displayed in the browser window.

Then, when we interact with the site again by clicking a link or navigating to a different area, the whole process repeats!

This process we've just discussed can also be visualized in the following diagram:

![Client-Server Process](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/web-clients-and-servers/Web+Clients+and+Servers+Diagram.png)

## Other Client Types
---

One more important note: We're probably most familiar with making web requests through a browser. But _any_ program can actually be a client! For instance, installed programs that automatically check for/download updates, apps running on a tablet, even a web server making a request to another web server. They all use the same HTTP protocol!
