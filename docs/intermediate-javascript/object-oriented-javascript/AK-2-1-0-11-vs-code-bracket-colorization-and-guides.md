---
title: "📓 2.1.0.11 VS Code: Bracket Colorization and Guides"
day: weekend
id: 2-1-0-11-vs-code-bracket-colorization-and-guides
hide_table_of_contents: true
---

As our functions get more complex, it becomes more challenging to keep track of opening and closing brackets such as parentheses and curly braces.

We can use a VS Code setting called _bracket pair colorization_ to add color to each set of opening and closing brackets, making it easier to identify each set of brackets. We can also add bracket pair guides that draw a line between the opening and closing brackets. It's up to you to decide whether you'd like to add this feature to VS Code or not. However, it's a popular tool and many developers find it useful.

Here's an example of these settings in action.

![Bracket colorizer changes the color of opening and closing brackets.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Object-Oriented-JavaScript-2020/bracket-colorizer.png)

As we can see in the image above, the opening and closing brackets for this function are now different colors. Each opening bracket has a corresponding color with its closing bracket. Also, when we click on a bracket, there is a line guide that shows exactly where the brackets open and close — and the line guide will help us see the exact code that's contained inside the brackets.

## Configuring VS Code Settings
---

To configure these settings, open _Settings_ in VS Code. First search for "bracket pair colorizer" or "bracket pair colorization".

![Search for the "bracket pair colorizer" or "bracket pair colorization" setting in VS Code.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Object-Oriented-JavaScript-2020/bracket-colorizer-vscode-setting.png)

There will be a couple of options returned from the search. The setting we want is called _Bracket Pair Colorization_, highlighted by the red square in the image above. To enable bracket pair colorization, select the checkbox for this setting. Also note whether you want to enable this for your workspace or for the user. 

Once you make your selection for the bracket pair colorization setting, VS Code will automatically apply the changes. Because of this, it can be helpful to adjust your settings with a `scripts.js` file open so you view and verify the changes you've made.

Next search for "bracket pair guides". There will be multiple options returned that we can configure, as shown in the image below. We recommend the following configurations:

* **Bracket Pairs:** We select "true" for this setting to enable bracket guides. These guides connect one bracket to another by a line. By default this only adds a vertical line between the two lines with an opening and closing bracket. 
* **Bracket Pairs Horizontal:** We select "active" for this setting to enable a horizontal line to connect the lines with the opening and closing brackets.
* **Highlight Active Bracket Pair:** We select "enabled" for this setting to have VS Code highlight the bracket guides for the bracket that we've selected. The highlighting involves making the color brighter.

As you configure your settings, note whether you want to make changes to your workspace or for the user.

![Search for the "bracket pair guides" setting in VS Code.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Object-Oriented-JavaScript-2020/setting-bracket-guides.png)

## Optional: Customizing Colors
----

You can optionally customize the colors for your colorized brackets and guides. This process is slightly more technical and involves updating VS Code's settings object in `settings.json` to override the colors from the currently selected color theme. 

Start by searching for "workbench color customizations". Within the first returned result for _Workbench: Color Customizations_, select the link _Edit in Settings.json_. This will open up a new file called `settings.json`.

![select the option to _Edit in Settings.json_.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Object-Oriented-JavaScript-2020/edit-bracket-colors.png)

Within VS Code's `settings.json` file, there will be a JavaScript object, with a series of key-value pairs and some nested objects. We'll be adding to the value of the key `"workbench.colorCustomizations"`. As the image below demonstrates we can use VS Code's autocompletion suggestions to explore the possible properties we can set. All we have to type in is `"editorB` in order to get a list of suggestions. 

The properties that we can set values for to adjust the colors and guides for bracket pairs are as follows:

* `editorBracketHighlight`: for changing the color of the bracket pairs. There are properties for brackets 1 – 6, for example `editorBracketHighlight.forground2`. 
* `editorBracketMatch`: for changing the color of the background and border for highlighted brackets. 
* `editorBracketPairGuide`: for changing the color of the highlight for the bracket guides. There are properties to adjust the background and active background for bracket guides 1 – 6, for example `editorBracketPairGuide.background3` and `editorBracketPairGuide.activeBackground3`. 

All of these properties are set to a color. We must use the following color formats: #RGB, #RGBA, #RRGGBB or #RRGGBBAA.

Remember that once you make your selection for the bracket pair colorization setting, VS Code will automatically apply the changes. Because of this, it can be helpful to adjust your settings with a `scripts.js` file open so you explore the results of different color settings.

And with that, you have the keys to the color customization kingdom! 
