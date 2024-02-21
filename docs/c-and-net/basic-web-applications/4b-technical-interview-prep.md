---
title: "📓 3.2.4.4 Technical Interview Prep"
id: 3-2-4-4-technical-interview-prep
hide_table_of_contents: true
day: thursday
---

Chances are, you're likely attending Epicodus because you're planning to begin a new career in the tech industry. We're so glad to help you on your journey! After your time with us, you'll begin applying and interviewing for positions. Usually, in addition to the more "standard" interview questions about your work experience, career goals, and education, applicants in the tech industry are _also_ asked to answer technical questions.

For many, these technical interviews are the most stressful part of job-hunting. Coding can be challenging enough, but being prompted to explain and demonstrate complex concepts in front of potential employers is tough. The key is to practice ahead of time to ensure you're ready for the real thing before you even schedule the interview!

At the end of every course section, we'll take a small break from coding to practice technical interview questions with our partners. These questions will (primarily) revolve around the content we learned this section, and, much like a "real" interview, some will be more technical than others.  In addition to learning how to implement the new tools, technologies, and concepts, you also need to become comfortable _talking_ about them in order to _demonstrate_ and _communicate_ your skills in an interview.

## Technical Interview Questions
---

* Consider this code snippet from a lesson this section. What can you tell about the project it belongs to? Talk your partner through what's happening in each line.

```csharp
...
        [HttpPost("/categories/{categoryId}/items")]
        public ActionResult Create(int categoryId, string itemDescription)
        {
            Dictionary<string, object> model = new Dictionary<string, object>();
            Category foundCategory = Category.Find(categoryId);
            Item newItem = new Item(itemDescription);
            foundCategory.AddItem(newItem);
            List<Item> categoryItems = foundCategory.Items;
            model.Add("items", categoryItems);
            model.Add("category", foundCategory);
            return View("Show", model);
        }
...
```

* How do you pass multiple objects into a View?
* What data types are there in C#? How are they different? Talk your partner through a potential use case for each.
* Why do we use classes? What benefits do they offer?
* What are the differences between a GET and POST request? When would you use one over the other?
* What does it mean when we say a property or method is static? Why would one declare something static?
* When would we use an instance method instead of a static method?
* What is Razor, and how is it designed to save us time?
* What is a RESTful route? What is the benefit of designing your routes to be RESTful?
* How are RESTful routes declared in MVC? What do these routes correspond to?
* What kind of objects can be stored within other objects?

## Stories and Examples
---


Offering a tangible story or example that highlights your skills usually goes _much further_ in an interview than simply _telling_ your interviewer you're good at something. (i.e.: Telling a story about a time you tracked down a tricky bug versus simply saying _"I'm good at problem-solving!"_).

Review the **STAR** method, discussed in [this lesson on non-technical interviews](https://old.learnhowtoprogram.com/internship-and-job-search/preparing-for-job-interviews/non-technical-interview). Use the **STAR** method to practice answering non-technical questions with your partner.

Again, if you come up with a story or example you feel good about, jot it down somewhere! It's tough to come up with stories like this in an interview on the spot. Having a few tucked away to review before an interview will be a huge benefit to you later.
