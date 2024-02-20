---
title: '✏️ 3.4.1.1 University Registrar, Doctor''s Office'
id: 3411-university-registrar-doctor's-office
slug: 3411-university-registrar-doctor's-office
hide_table_of_contents: true
sidebar_position: 9
day: monday
type: exercise
url: >-
  https://github.com/fidgetech/c-and-net/blob/main/1a_classwork_university_registrar_and_doctors_office.md
---

**Goal**: Practice using join statements to connect tables in your database. You should also be getting more practice creating and using many to many relationships with your tables.

## Warm Up
---

* What is the difference between a join ENTITY and a join TABLE?
* What information do you need to know to make a join entity?
* What is a EF Core migration? How do migrations make it easier for developers to work together on a large codebase?

## Code
---

### Finishing the To Do List

Begin by following along with this weekend's homework to add a many-to-many relationship to your ongoing To Do List application.

Then, integrate the following additional features.

* Add functionality to mark an `Item` as completed without deleting it _(**Hint**: Create a new boolean `Item` property and set a default value of true/false.)_
* Allow users to assign due dates for `Item`s.
* Sort items by their due date. Check out the [LINQ documentation](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.orderby?view=netframework-4.8) on `OrderBy` — let LINQ do the sorting, not C#.

### University Registrar or Doctor's Office

Then select one of the following projects to complete as a multi-day project. To describe the features we want you to build, we will write **user stories**. User stories are a way of describing a feature that breaks functionality down into the smallest possible pieces and clearly communicates the use case, functionality, and benefit.

### University Registrar

Create an app for a University Registrar to keep track of students and courses.  Here are some user stories for you — build one at a time before moving on to the next one.

* As a registrar, I want to enter a student, so I can keep track of all students enrolled at this University.  I should be able to provide a name and date of enrollment.
* As a registrar, I want to enter a course, so I can keep track of all of the courses the University offers.  I should be able to provide a course name and a course number (ex. HIST100).
* As a registrar, I want to be able to assign students to a course, so that teachers know which students are in their course.  A course can have many students and a student can take many courses at the same time.

Next, and after you complete the corresponding homework, add model validation with validation attributes to your project to ensure that form fields are not left empty and database errors are prevented.

If you make it this far, great job! If you have time, work on these other user stories.

* As a registrar, I want to be able to create departments.  A student can be assigned to a department when they declare their major and a course can be assigned to a department when it is created.
* As a registrar, I want to be able to list out all of the courses or all of the students in a particular department, so that I can inform the counselors which departments need more students and which need more courses.
* As a registrar, I want to change a student's file to show that they have completed a course, so that I can see if they need to take the course again.
* As a registrar, I want to list out all of the courses a student has taken, so that I can see if they have met their degree requirements.
* As a registrar, I want to see how many students have not completed courses in any particular departments, so that I can tell the administration which departments need help.
* As a registrar, I want to …

If you make it this far in the project, think up and write some other user stories that a University registrar might have.

### Doctor's Office

Our next program is for office administrators to track patients in a doctor's office. Ultimately you will have a doctor's office database with tables for doctor, patient, etc. 

Build out the following features that let an administrator:

* Add a doctor to the system, including their name and specialty as columns.
* Add a patient to a doctor, including their name and birthdate. `Patient` will be its own class, so make sure to build the relationship between a `Doctor` object and a `Patient` object.
* Add more than one doctor to a patient.

Next, and after you complete the corresponding homework, add model validation with validation attributes to your project to ensure that form fields are not left empty and database errors are prevented.

Up next, refactor the doctor's office app to accommodate their new growth: now the doctor's office includes many doctors with the same specialty. The doctors have organized themselves into specialty groups. So when a user wants to enter a doctor, they must first select a specialty and then add a doctor from there.

* List all of the doctors in a particular specialty. A doctor can have _many_ specialties. (Hint: change the database from storing `specialty` as a column to giving it its own table with a relationship to a `Doctor` object.)
* View a chart of doctors including the number of patients they see. Use the SQL `COUNT` function; practice your online search skills to figure out how it works.

### Design Your Own

If you'd prefer, choose another project that includes a **many-to-many relationship with full CRUD**. You might choose something brand new, or revisit an earlier in-class project such as CD Organizer. After you complete the corresponding homework, make sure to include model validation with validation attributes to ensure that form fields are not left empty and database errors are prevented.

## Instructor/Peer Code Review
---

* Do database tables and columns follow proper naming conventions?
* Does one of your classes have all CRUD methods implemented in your app? That includes: Create, Read (all and singular) Update and Delete (all and singular).
* Are you able to view both sides of the many-many relationship? For a particular instance of a class, are you able to view all of the instances of the **other** class that are related to it? And vice versa?
* Is the many-to-many relationship set up correctly in the database?
* Are validation attributes used to validate models before they are saved to the database?
