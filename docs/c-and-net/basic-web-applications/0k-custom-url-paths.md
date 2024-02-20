---
title: "\U0001F4D3 3.2.0.11 Custom URL Paths"
id: 32011-custom-url-paths
slug: 32011-custom-url-paths
hide_table_of_contents: true
sidebar_position: 11
day: weekend
type: lesson
url: 'https://github.com/fidgetech/c-and-net/blob/main/0k_custom_url_paths.md'
---

In the last lesson, we learned how we can configure routes like this one: _localhost:5000/home/goodbye_.

However, this URL isn't very user-friendly. Users shouldn't have to type in the name of a controller. Thankfully, we can use a **route decorator** to easily declare custom URL paths for each route.

## Custom URLs with Route Decorators
---

Let's revisit our `HomeController`. With a single line of code, we can override which URL path matches which route.

<div class="filename">FriendLetter/Controllers/HomeController.cs</div>

```csharp
using Microsoft.AspNetCore.Mvc;

namespace FriendLetter.Controllers
{
  public class HomeController : Controller
  {

    [Route("/hello")]
    public string Hello() { return "Hello friend!"; }

    [Route("/goodbye")]
    public string Goodbye() { return "Goodbye friend."; }

    [Route("/")]
    public string Letter() { return "Our virtual postcard will go here soon!"; }

  }
}
```

The **route decorator** `[Route("/hello")]` provides additional information to a route we define. In our case, the decorator is overriding the default URL path that corresponds to each of the two routes:

* Instead of needing to visit `/home/hello` to activate our `Hello()` route, we now only have to visit `/hello`.

* Similarly, instead of visiting `/home/goodbye` to invoke `Goodbye()`, the URL `localhost:5000/goodbye` will now invoke this route.

### Root Path

We also added a third new route for our virtual postcard. This will route to `"/"`. In other words, we don't need to append a path at all. If we navigate to `localhost:5000`, this route will be activated. This is called a **root path** and it's the home page for our site. All sites should have a home page, which means all your projects should have a root route.
