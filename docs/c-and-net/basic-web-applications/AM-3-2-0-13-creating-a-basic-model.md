---
title: "📓 3.2.0.13 Creating a Basic Model"
day: weekend
id: 3-2-0-13-creating-a-basic-model
hide_table_of_contents: true
---

We've covered both the V and the C in MVC but we haven't gotten to M yet — the **model**. Remember that a model represents data. Currently, the controller in our virtual postcard application just passes along strings and a view. Let's create a class to _model_ what our application's data should look like.

## Model File Structure
---

Models always reside in a `Models` subdirectory of the production project. This is just like in the last course section when we created console applications. If you haven't already, go ahead and create a `Models` subdirectory in `FriendLetter`. Within `Models`, add a new file named `LetterVariable.cs`.

The resulting file structure for models looks like this:

<pre>
FriendLetter.Solution
└── FriendLetter
    └── Models
        └── LetterVariable.cs
</pre>

## Writing a Model
---

Let's add code to our new model file. We'll first declare a namespace and class:

<div class="filename">FriendLetter/Models/LetterVariable.cs</div>

```csharp
namespace FriendLetter.Models
{
  public class LetterVariable
  {

  }
}
```

We place the `LetterVariable` class in a `FriendLetter.Models` namespace. This means that any other files that need access to our model's logic can import it with the statement `using FriendLetter.Models;`.

`FriendLetter.Models` is similar to the namespace of our main project, `FriendLetter`. It doesn't actually matter if the `FriendLetter` portion is included in both namespace names, but it's good practice to give namespaces names that clearly denote their relation to the larger app. In our case, the `FriendLetter.Models` name is ideal because this namespace contains all the _models_ in our `FriendLetter` project. To find out more about naming conventions, check out [the Microsoft documentation](https://learn.microsoft.com/en-us/dotnet/standard/design-guidelines/names-of-namespaces?redirectedfrom=MSDN).

Next, we'll add an auto-implemented property `Recipient` to our new model class:

<div class="filename">FriendLetter/Models/LetterVariable.cs</div>

```csharp
namespace FriendLetter.Models
{
  public class LetterVariable
  {
    public string Recipient { get; set; }

  }
}
```

Our model is very simple. The `Recipient` property will hold the name of the person who will receive the postcard. That's all we need to explore using the markup syntax "Razor" to render C# within our views. In future lessons, we'll develop more complex models.
