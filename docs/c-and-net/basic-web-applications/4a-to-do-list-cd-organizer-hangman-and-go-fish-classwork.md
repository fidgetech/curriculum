---
title: '✏️ 3.2.4.1 To Do List, CD Organizer, Go Fish, Word Puzzle'
id: 3-2-4-1-to-do-list-cd-organizer-go-fish-word-puzzle
hide_table_of_contents: true
day: thursday
---

**Goal:** Create an ASP.NET Core MVC application that uses objects within objects. Pay close attention to how data is passed between routes, views, and forms in an objects-within-objects MVC setup.

## Warm Up
---

* Referencing the To Do List, what is the purpose of the `Category` class? How does it relate to our `Item` class?
* How do we pass multiple objects into a View?
* How does RESTful routing differ when we begin working with objects within objects?
* Why do we use hidden form fields when creating a new object that resides in another object?

## Code
---

### To Do List Continued

Follow along with the homework to add a `Category` class with the ability to store a list of items to your ongoing To Do List.

### Music Organizer

Make a program for users to catalog and organize their music. This could be a CD, vinyl or even a tape collection.

* They should be able to create a new record, enter the record title, and list out all of their records.
* Add a feature that allows users to add an artist to a record. Keep it simple — assume each is by a single artist.
* After that, let users list out all the artists and choose an artist to see which records are by that artist.
* All model logic should be thoroughly tested.

#### Further Exploration

Try creating another link on the home page to take the user to a "/search\_by\_artist" page. Users should be able to fill out a form with an artist name to search for their collection. After submitting the form they should be taken to a page listing out all the records they own by that artist.

Then try to improve the search functionality. If the user has created a record object by "JS Bach," they should be able to search for it by typing in "bach," "Bach," or "Johann Sebastian Bach."  Say the user has a record by "Bachman–Turner Overdrive" as well as one by "JS Bach." If the user searches by the name "bach" or "Bach," both the records by "JS Bach" and "Bachman–Turner Overdrive" should be displayed.

### Go Fish

Make a game where two people can play Go Fish against each other. Here is a refresher on the [rules](https://simple.wikipedia.org/wiki/Go_Fish). You will need to create a `Game` class and a `Player` class, which should at least hold the player's hand of cards. If you are feeling ambitious, you can also try creating a single-player mode where one user can play against the computer.

### Word Puzzle

Make a word guessing game, where users have to guess the word in 6 tries. Users should be presented with a number of blank spaces corresponding to the number of letters in a word. Each round, users should guess a letter: 

* if the letter is in the word, the letter should show up on the webpage
* if the letter is not in the word, the number of allowed guesses counts down by 1. 

Once the number of guesses reaches 0, the game is over. If the user guesses the word before the number of guesses runs out, they win the game.

Think carefully about the objects you'll use before starting. There are multiple ways to solve this problem.

* The computer can generate the words from a pre-set list.
* The user should make a guess by entering a letter into a form. The app should tell them if it's right or wrong, and keep track of how many guesses they have left.
* On the game page, display the letters they have guessed correctly so far, like: `E p _ c _ d u s`
* Also, display the letters they have guessed incorrectly, and how many guesses they have left.
* Make sure to display messages telling the user whether they've guessed correctly or incorrectly. Then a "Game Over" message if they're out of guesses.
* Don't allow duplicate guesses. If the user tries to guess the same letter twice they should be told to try again.

Bonus functionality:

* Try to change the color of an element on your game page based on whether the guess was right or wrong. Play around with changing the layout of your template file based on whether a guess is right or wrong, and whether or not the game is over.
* Make it two-player! Create a new form page where one user can choose a word for the other user to guess.
* Try stylizing this game like [Wordle](https://wordplay.com/).

## Instructor Code Review
---

* Are there two classes in the application?
* Can a user input a new nested object and see it displayed on the parent object's detail page?
* Can a user select an object and see the objects associated with it?
* Is code DRY and functional?
