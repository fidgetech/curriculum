---
title: '✏️ 2.1.4.1 Whiteboard Practice: JavaScript Objects'
id: 2-1-4-1-whiteboard-practice-javascript-objects
hide_table_of_contents: true
day: thursday
---

## Whiteboard Practice
---

When and how whiteboarding practice is implemented will be up to your teacher. Below is a recommended prompt.

**Note to Fidgetech Students:** Contact your instructor when you read this lesson to setup a whiteboarding practice session.

### Goal

For this section's whiteboarding lesson, we'll focus on using a given data structure and filtering collections of objects.

As the interviewee:

* Ask clarifying questions.
* Keep talking.
* Explain your plan at the beginning; recap what you've done at the end.
* Make eye contact.
* Plan your space.

As the interviewer:

* Answer questions as best as you can.
* Be encouraging. Whiteboarding is difficult!
* Be patient. Only offer hints if your partner indicates that they need help.
* Be engaged. Part of this practice is getting used to having someone evaluate your work as you produce it.
* Offer _constructive_ feedback. Find at least one thing that your partner did well _and_ one thing they could improve at.

There are two prompts listed below for the same problem. Make sure to switch who's whiteboarding for each prompt. There are also further exploration prompts to optionally complete.

### Problem

You're working on an app that presents user's with information about dinosaurs. 

The `Dinosaur` class has the following data structure:

```
name: string
period: string
diet: string
walksOnFourLegs: boolean
yearDiscovered: number
popularity: number
```

**Example Data**:

```
dino1 = { 
  name: Tyrannosaurus rex,
  period: Mesozoic,
  diet: carnivore,
  walksOnFourLegs: false,
  yearDiscovered: 1902,
  popularity: 999
}

dino2 = { 
  name: Brachiosaurus,
  period: Jurassic,
  diet: herbivore,
  walksOnFourLegs: true,
  yearDiscovered: 1900,
  popularity: 959
}

dino3 = { 
  name: Parasaurolophus,
  period: Cretaceous,
  diet: herbivore,
  walksOnFourLegs: true,
  yearDiscovered: 1922,
  popularity: 500
}

dino4 = { 
  name: Stegosaurus,
  period: Jurassic,
  diet: herbivore,
  walksOnFourLegs: true,
  yearDiscovered: 1876,
  popularity: 903
}
```

**Prompt 1**: 

The client wants users to be able to search for dinosaurs by diet _and_ period. Write a method that takes in three parameters: a value for the period, a value for the diet, and an array of dinosaur objects to filter.

**Example**:

* Given: `"Jurassic", "herbivore", [ dino1, dino2, dino3, dino4 ]`
* Return: `[ dino2, dino4 ]`

**Prompt 2**: 

The client wants the splash page to display the top three most popular dinosaurs on the site. Write a method that filters the entire list of dinosaurs and returns an array containing the top three most popular dinosaurs.

**Example**:

* Given: `[ dino1, dino2, dino3, dino4 ]`
* Return: `[ dino1, dino2, dino4 ]`

### Further Exploration

**Prompt 1**: 

* Alter your method to sort the dinosaurs that fit the search terms by the year they were discovered in ascending order.
* Alter your method to limit the amount of dinosaurs returned according to popularity. Dinosaurs that have a popularity rating of less than 500 should not be included.
* Alter your method to return only the first 50 most popular dinosaurs that fit the search terms.

**Prompt 2**: 

* Alter your method so that it returns the three most popular dinosaurs in descending order by popularity.
* Alter your method so that it returns a _random_ assortment of dinosaurs with a popularity score greater than 900.
* Alter your method to return a dictionary with two keys: one that represents the most popular herbivore and one that represents the most popular carnivore.


