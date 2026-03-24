---
title: "📓 5.1.2.6 Nullable Types"
day: tuesday
id: 5-1-2-6-nullable-types
hide_table_of_contents: true
---

The last fundamental C# concept that we'll learn about in this course section is **nullable types**, or using `null` values. We're already familiar with the concept of `null` from JavaScript — `null` means nothing, no value at all. But in a strongly-typed language like C#, how do we set a type to null? In this lesson, we're going to learn exactly how to do that. 

## Nullable Types
---

When we make want a C# type to possibly be `null`, we're working with **nullable types** in C#. Exactly what we need to do to use `null` depends on whether we're working with a value type or a reference type. Let's first look at nullable values types to learn the basics of using `null`. 

### Nullable Value Types

To create a nullable value type, we need to use `?`. In formal terms, a nullable value type is expressed as `T?`, where `T` is the value type and `?` is the syntax used to turn the value type into a nullable type. Let's see an example suing the `dotnet-script` REPL:

```
> int? test = 1;
> test
1
> test = null;
> test
>
```

Pretty simple, right? Just add a question mark `?` to transform a value type into a nullable value type. Now our `test` variable can hold an integer or `null`. 

Under the hood, when we use `int?`, or the `T?` syntax, our value type is being transformed into [the `Nullable<T>` type](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1?view=net-6.0) that lives in the `System` namespace. The `Nullable<T>` type has the helpful `HasValue` property that can give us information about whether or not the variable is currently `null`. Here's an example:

```
> int? test2 = 33;
> test2
33
> test2.HasValue
true
> test2 = null;
> test2.HasValue
false
```

### Nullable Reference Types

Next, let's look at nullable reference types. With **nullable reference types**, the syntax and concept is the same, but with a few differences. 

**The first notable difference is that we need to create a nullable aware context**. For example, we'll get an error when we do the following in the `dotnet-script` REPL:

```csharp
> string? test = "test";
(1,7): error CS8632: The annotation for nullable reference types should only be used in code within a '#nullable' annotations context.
```

We can resolve this error by creating a nullable context with `#nullable enable`:

```csharp
> #nullable enable
> string? test = "test";
> test
"test"
> test = null;
> test
>
```

We create a **nullable aware context** so that the compiler can track the `null` state of all reference types within the nullable aware context, and issue warnings and errors when necessary. The compiler will issue a warning if a reference type does not match it's expected state:

* Non-null reference types are expected to have a "not-null" state.
* Nullable reference types are expected to have a "maybe-null" state. 

If those states are ever not true, then the compiler will let us know. Take the following class for example:

```csharp
public class Test
{
  #nullable enable
  string NonNullString { get; set; }
  string? NullableString { get; set; }
  public Test()
  {

  }
  #nullable disable
}
```

We've created a nullable aware context using the `#nullable enable` and `#nullable disable` annotations. However, if we run `dotnet build` to compile our code, the compiler will issue a warning:

```csharp
warning CS8618: Non-nullable property 'NonNullString' must contain a non-null value when exiting constructor. Consider declaring the property as nullable. 
```

The compiler is letting us know that the `NonNullString` property should be in a "not-null" state, but is not! The solution is to either make `NonNullString` nullable, or to give it a value, either in the constructor or a default value. Here's one way we can fix the warning:

```csharp
public class Test
{
  #nullable enable
  string NonNullString { get; set; } = "default value";
  string? NullableString { get; set; }
  public Test()
  {

  }
  #nullable disable
}
```

To read more about other warnings that the compiler can generate in a nullable aware context, visit the MS Docs on [Nullable References and Static Analysis](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-reference-types#nullable-references-and-static-analysis).

**The second notable difference** between value types and reference types, is that reference types are not turned into `Nullable<T>` objects, so they don't have access to the `HasValue` property. Here's an example:

```csharp
> #nullable enable
> string? myVar = "this is a test";
> myVar
"this is a test"
> myVar.HasValue
(1,7): error CS1061: 'string' does not contain a definition for 'HasValue' and no accessible extension method 'HasValue' accepting a first argument of type 'string' could be found (are you missing a using directive or an assembly reference?)
```

The error lets us know that we're still dealing with the `string` type, and not a new `Nullable<T>`. In summary, only nullable value types are turned into `Nullable<T>` objects.

### Other Ways to Create a Nullable Aware Context

We can configure a nullable aware context in a few different ways. As we just saw, we can use the `#nullable enable` and `#nullable disable` annotations to sandwich any amount of code to create a nullable aware context:

```csharp
public class Test
{
  #nullable enable
  string NonNullString { get; set; } = "default value";
  string? NullableString { get; set; }
  public Test()
  {

  }
  #nullable disable
}
```

We can also simply list the `#nullable enable` annotation on its own at the top of a file to make the entire file have a nullable aware context. That would look something like this:

```csharp
#nullable enable

public class Test
{
  string NonNullString { get; set; } = "default value";
  string? NullableString { get; set; }
  public Test()
  {

  }
}
```

We can also enable a nullable aware context through our project file (`.csproj`) by adding the `<Nullable>enable</Nullable>` configuration like so:

```
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net6.0</TargetFramework>
    <Nullable>enable</Nullable>
  </PropertyGroup>

</Project>
```

When you are just starting out with nullable types, we recommend creating a nullable aware context as needed, instead of setting a project-wide configuration. In the end, it's totally up to you and your project as to what makes the most sense. 

Finally, you will not be required to use nullable types on the upcoming independent project. However, we encourage you to experiment with nullable types in the projects you create. 
