---
title: "📓 1.1.2.10 Markdown"
id: 11210-markdown
hide_table_of_contents: true
day: tuesday
---

Many people think that creating a web page involves really complicated code that requires extensive studying to understand. That's not always the case, though. We are going to learn a simple language called **Markdown** in this lesson that will let you create web pages really easily. 

The web is made up of mostly text files — like the ones you created to write your papers in high school — as well as some other files like images or videos. These files are stored on computers that are linked together over networks. When you put a web site's address into your browser, you are really just asking to see a particular file, or combination of files. We will go more in depth into how the internet works later, but for now, this idea should help you to understand how to create basic web pages.

Markdown is one of the easiest browser languages to learn. Here is an example of a document written in Markdown.

```md
# Markdown lesson

**Goal**: The goal for this lesson is to show how simple Markdown is to read and write by displaying a text written in Markdown and what it looks like when it is rendered in a browser.

**What is Markdown?**

According to the _Mastering Markdown GitHub Guide_, Markdown is:

>[A] way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like # or *.

We most often use Markdown to write our READMEs for [GitHub](https://github.com/). A **README** is how we document our code, give specific instructions on how to run it, or what bugs it might currently contain.

**How to learn Markdown**

There are many sites that offer instructions or tutorials on how to write in Markdown. Here is a list:

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown)
* [Daring Fireball](http://daringfireball.net/projects/markdown/syntax)
```

When this Markdown document is opened in a browser (which we call rendering), it will look like this.

># Markdown lesson

>**Goal**: The goal for this lesson is to show how simple Markdown is to read and write by displaying a text written in Markdown and what it looks like when it is rendered in a browser.

>**What is Markdown?**

>According to the _Mastering Markdown GitHub Guide_, Markdown is:

>>[A] way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like # or *.

>We most often use Markdown to write our READMEs for [GitHub](https://github.com/). A **README** is how we document our code, give specific instructions on how to run it, or what bugs it might currently contain.

>**How to learn Markdown**

>There are many sites that offer instructions or tutorials on how to write in Markdown. Here is a list:

>* [Mastering Markdown](https://guides.github.com/features/mastering-markdown)
>* [Daring Fireball](https://daringfireball.net/projects/markdown/)

See how it is easy to read and understand Markdown? It uses basic, familiar punctuation. 

Remember Markdown is a way to format text to be viewed in a browser, but we can also add in active links to image files, video files, and other web pages. The page you are currently looking at is written in Markdown. 

So let's get to it! We will practice writing Markdown by using [Dillinger](http://dillinger.io/) and see the results rendered in realtime. 

Let's say we wanted to create a webpage for our favorite recipe. We would want a heading to tell the world in large font what type of food we will be making. In Markdown, headings are constructed with `#` symbols and there are six sizes with one being the largest and 6 the smallest. Here are the heading options in Markdown:

```md
# Best Chocolate Chip Cookies
## Best Chocolate Chip Cookies
### Best Chocolate Chip Cookies
#### Best Chocolate Chip Cookies
##### Best Chocolate Chip Cookies
###### Best Chocolate Chip Cookies
```

And here they are rendered:

># Best Chocolate Chip Cookies  
>## Best Chocolate Chip Cookies  
>### Best Chocolate Chip Cookies  
>#### Best Chocolate Chip Cookies  
>##### Best Chocolate Chip Cookies  
>###### Best Chocolate Chip Cookies  


Generally, the main heading for the page should be the largest heading, with a single `#`. 

Below the heading, we want to give a brief description of where our recipe came from and what makes it "the best". In Markdown, special symbols aren't needed for normal paragraph text. Here is the page with our cookie description:

```md
# Best Chocolate Chip Cookies

This recipe is from my dad, and they are a favorite among friends and family. The secret ingredient is the coconut! Be warned, though, these will fly off of the plate!
```

Now let's say you want to add some emphasis to your description using _italics_. In Markdown, any text that you would like to be in italics should be surrounded by single underscores. We want the words "Be warned" to be emphasized, so we will add an underscore to each side.

```md
# Best Chocolate Chip Cookies

This recipe is from my dad and they are a favorite among friends and family. The secret ingredient is the coconut! _Be warned_, these will fly off of the plate!
```

Here is what this looks like rendered:

># Best Chocolate Chip Cookies

>This recipe is from my dad and they are a favorite among friends and family. The secret ingredient is the coconut! _Be warned_, these will fly off of the plate!

Now we need to list the ingredients. In Markdown there are ordered lists, which means they are numbered, and there are unordered lists, which use bullet points instead of numbers.  Since the ingredients don't need to be listed in any particular order, we will use an unordered list. In an unordered list, we use the `*` symbol followed by one space _before_ the text. Here's what it will look like:

```md
* Butter
* White sugar
* Brown sugar
* Eggs
* Vanilla
* Flour
* Baking soda
* Salt
* Chocolate chips
* Oatmeal
* Coconut
```

And here it is rendered:

>* Butter
>* White sugar
>* Brown sugar
>* Eggs
>* Vanilla
>* Flour
>* Baking soda
>* Salt
>* Chocolate chips
>* Oatmeal
>* Coconut

Yum. Alright, now we want to list out the directions. Since directions need to be followed in a particular order, we will write these using the symbols for an ordered list, which are just regular numerals followed by a period. For example:

```md
1. Preheat the oven to 325.
2. Beat the butter, sugar, eggs and vanilla together until creamy.
3. Mix together the flour, baking soda and salt in a separate bowl.
4. Add flour mixture to butter mixture slowly.
5. Stir in chocolate chips, oatmeal and coconut.
6. Bake for 10 minutes or until golden brown.
```

And here it is rendered:

>1. Preheat the oven to 325.
>2. Beat the butter, sugar, eggs and vanilla together until creamy.
>3. Mix together the flour, baking soda and salt in a separate bowl.
>4. Add flour mixture to butter mixture slowly.
>5. Stir in chocolate chips, oatmeal and coconut.
>6. Bake for 10 minutes or until golden brown.

Alright, our recipe is coming together nicely. Let's add some headings for the ingredients and the directions. These headings are secondary to the main title of the recipe, so let's use the `##` headings:

```md
# Best Chocolate Chip Cookies

This recipe is from my dad and they are a favorite among friends and family. The secret ingredient is the coconut! _Be warned_, these will fly off of the plate!

## Ingredients

* Butter
* White sugar
* Brown sugar
* Eggs
* Vanilla
* Flour
* Baking soda
* Salt
* Chocolate chips
* Oatmeal
* Coconut

## Directions

1. Preheat the oven to 325.
2. Beat the butter, sugar, eggs and vanilla together until creamy.
3. Mix together the flour, baking soda and salt in a separate bowl.
4. Add flour mixture to butter mixture slowly.
5. Stir in chocolate chips, oatmeal and coconut.
6. Bake for 10 minutes or until golden brown.
```

We really don't want our users to over bake their cookies, so we want to strongly emphasize the amount of time the cookies should bake by making it bold. In Markdown, we put two `**` around any text that we would like bolded. For example: `Bake for **10 minutes** or until golden brown.`

Now we want anyone who views this page and likes our cookies to find our other recipes, so we will provide a link to our website's recipe index. In Markdown, a link is composed of two elements, the text that will display on the page surrounded by `[]` and the web address of where the link will go surrounded by `()`. Here is an example:

```md
[Click here](http://allrecipes.com/) to check out my other great recipes.
```

And here is what this will look like rendered on the page.

>[Click here](http://allrecipes.com/) to check out my other great recipes.

Finally, we should add an image of our cookies to our recipe. We can add an image using this format:

```md
![alt text](link)
```

The key difference here is that we add an `!` before the square brackets. Without this `!`, Markdown will render this as a link, not an image. Next, we place any alt text for the visually impaired in the brackets. We should always add descriptive alt text to make our websites more accessible.

Let's grab a random picture to be a placeholder in our page.

Let's go to `https://picsum.photos/` and select the `https://picsum.photos/200/300` link. Then we'll copy the web address for that image and paste it into the parentheses on our Markdown page.

```md
![An image of a cookie](https://picsum.photos/200/300)
```

Note that while the image is random, the alt text isn't — it clearly states what the image is supposed to be. You can replace the image with an actual picture of a cookie on your own site.

Here is our final recipe web page in Markdown!

```markdown
# Best Chocolate Chip Cookies

![An image of a cookie](https://picsum.photos/200/300)

This recipe is from my dad and they are a favorite among friends and family. The secret ingredient is the coconut! _Be warned_, these will fly off of the plate!

## Ingredients

* Butter
* White sugar
* Brown sugar
* Eggs
* Vanilla
* Flour
* Baking soda
* Salt
* Chocolate chips
* Oatmeal
* Coconut

## Directions

1. Preheat the oven to 325.
2. Beat the butter, sugar, eggs and vanilla together until creamy.
3. Mix together the flour, baking soda and salt in a separate bowl.
4. Add flour mixture to butter mixture slowly.
5. Stir in chocolate chips, oatmeal and coconut.
6. Bake for **10 minutes** or until golden brown.


[Click here](http://allrecipes.com) to check out my other great recipes.
```

There's much more we can do with Markdown. Check out the documentation at [Daring Fireball](http://daringfireball.net/projects/markdown/syntax) to see what else you can do with this tool!
