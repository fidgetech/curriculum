---
title: "📓 2.3.0.1 Asynchrony and APIs in JavaScript Objectives"
id: 2301-asynchrony-and-apis-in-javascript-objectives
hide_table_of_contents: true
day: weekend
paginationPrev: null
---

In this section, we'll learn about third-party APIs (application programming interfaces) and how we can use them to communicate with other applications to get data or services. In the process, we'll learn how to make API calls and work with asynchrony in JavaScript. 

We'll learn about a handful of tools in this section:

* How to navigate API documentation, get an API key, and parse JSON.
* How to protect your API keys.
* Two Web APIs that we can use to make API calls: `XMLHttpRequest` object and the Fetch API.
* JavaScript functionality to handle asynchrony: callbacks, promises, and async functions.
* How to navigate the DevTools _Network_ tab and use Postman to test out and debug our API calls.
* JavaScript error handling with `try...catch`.
* Error handling specifically for API calls.
* SOP and CORS.
* And more!

We will _not_ use Jest testing for async code in this section, though you should continue testing any synchronous code with Jest. While it's always a good idea to test async code and API calls, doing so is considerably more complex than the testing we did in the last section, so we're not including that information now.

## Independent Project Objectives
---

At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:

* Does the application correctly make an API call?
* Does the application correctly parse data from the API response?
* Does the application handle errors when the API call doesn't return a 200 OK status as well as return a message if the API returns no results?
* Did you follow all setup instructions, including storing your API key and adding instructions for setup in your README?
* Does the app separate logic into different JavaScript files and use a static method?
* Does the application correctly use webpack?
* Project is in a polished, portfolio-quality state.
* The prompt’s required functionality and baseline project requirements are met.
