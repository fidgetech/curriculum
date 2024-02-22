---
title: ✏️ 3.6.1.2 Building an API Part 1
day: monday
---

**Goal**: Build and test your own API. Once you've completed the basic functionality for your API, review the lesson _Further Exploration with APIs_ to learn about additional API-building objectives.

## Warm Up
---

Discuss possible answers to these common C#-specific interview questions. You can format this as a mock interview or brainstorm answers as a team:

* What makes C# an object-oriented programming language?
* What is the difference between static and instance methods? When are each used?
* What is the difference between public and private?

## Building Your Own API
---

**For the first half of the section**, you'll build your own API. You should also use Postman to manually test your calls. When you create your documentation, keep in mind that your primary API users will be developers implementing the API into their own applications.

**For the second half of the section**, you'll build an application that communicates with one of the APIs either you or your peers built in class during the first half of the section. You’ll also continue to build out and refactor the API you're working with. 

You may work with a pair for the entire course section or split the section into two. This means 2 two-day projects for full-time students, or 2 week-long projects for part-time students.

**On short weeks**, you'll spend most of your time on building out the API and pursuing further exploration. At least one class will be set aside for building an application that communicates with your API.

## Code
---

Select an API to build from the options below, and make sure to complete the following requirements:

**1. Whatever API you choose to build, you'll be expected to implement a further exploration topic from the lesson [Further Exploration with APIs](https://old.learnhowtoprogram.com/c-and-net/building-an-api/further-exploration-with-apis).** Take some time to learn a bit about each further exploration topic, and then pick at least one to implement in your API.

**2. You are expected to create robust documentation of your API's endpoints in your project's README.md.** For any further exploration topic that you implement in your API you should explain what it is and how to interact with it.

### Travel API

Build an API that allows users to `GET` and `POST` reviews about various travel destinations around the world. Here are some user stories to get started. Note that you will have to create custom endpoints for some of these user stories.

* As a user, I want to `GET` and `POST` reviews about travel destinations.
* As a user, I want to `GET` reviews by country or city.
* As a user, I want to see the most popular travel destinations by number of reviews or by overall rating.
* As a user, I want to `PUT` and `DELETE` reviews, but only if I wrote them. (Start by requiring a `user_name` param to match the `user_name` of the author on the message. You can always try authentication later.)
* As a user, I want to look up random destinations just for fun.

### Message Board API

Create a message board service that can be accessed via your API. Users should be able to `GET` and `POST` messages for specific message boards. Note that you will have to create custom endpoints for some of these user stories.

* As a user, I want to be able to `GET` all messages related to a specific group.
* As a user, I want to be able to `POST` messages to a specific group.
* As a user, I want to be able to see a list of all groups.
* As a user, I want to input date parameters and retrieve only messages posted during that timeframe.
* As a user, I want to be able to `PUT` and `DELETE` messages, but only if I wrote them. (Start by requiring a `user_name` param to match the `user_name` of the author on the message. You can always try authentication later.)

### API of Choice

APIs aren't just used for data interaction and manipulation. They can also be used for computation as well. Build a database-centered or computation API around an area of interest to you. Make sure you write your own user stories first.

## Peer Code Review
---

* Application successfully returns responses for each API call.
* README thoroughly describes all endpoints along with parameters that can be used.
* A [further exploration topic](https://old.learnhowtoprogram.com/c-and-net/building-an-api/further-exploration-with-apis) has been implemented in the API.
* README thoroughly describes the further exploration topic that's been implemented in the API.
* Application works as expected.
