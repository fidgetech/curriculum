---
title: "📓 3.5.1.3 Further Exploration: SEO with React"
day: monday
id: 3-5-1-3-further-exploration-seo-with-react
hide_table_of_contents: true
---

Up to this point, we've focused entirely on creating small applications without thinking much about deployment. Even when we do have a chance to deploy our work, we aren't thinking about web traffic. More likely, we're deploying as part of our learning experience, and hopefully to share our project with friends, family, and potential employers.

However, most real world applications are concerned about increasing the number of users that visit their site. A key way to increase visitor traffic is to incorporate **SEO** (**search engine optimization**).

Search engine optimization seeks to increase visitor traffic through search engines such as Google or Bing. For instance, if we do a Google search for "best trail running shoes," we'll get back a long list of results, and the sites near the top of that list will get far more visitors than the ones buried further down.

According to [research](https://www.brafton.com/news/95-percent-of-web-traffic-goes-to-sites-on-page-1-of-google-serps-study/), 95% of all user searches only involve the first page of search results. For that reason, it's really important for websites to end up on that first page of user searches. Unlike paid advertising, web searches are free, and an essential way for sites to generate more users.

SEO is a huge topic, and it's well beyond the scope of this lesson. This lesson will focus on the issues that React applications have with SEO, and how we can address them. If you're interested in learning about SEO in general, we recommend checking out a more in-depth source [like this one](https://moz.com/learn/seo).

### React and SEO

React applications are often SPAs (single page applications) with components that render dynamically based on user activity. This makes React extremely fast, but it's not ideal for the web crawlers that index sites. There are several reasons for this:

**React applications have only one URL.** Because many React sites are SPAs, they only have one URL along with a number of virtual pages. Web crawlers may not be able to reach all the virtual pages, resulting in a lower search index.

**Because there is only one URL, and one entry point, every virtual page has the same meta data.** We can add meta tags to our HTML pages to improve SEO. When users navigate to a page, they won't see the meta content because it's not visible. However, this content is visible to web crawlers, which often use it to create a description of the site in a search engine. Meta content is also used to determine search engine rankings as well.

**React is all about dynamic JavaScript.** Most web crawlers can handle JavaScript, but not necessarily all JavaScript. For that reason, crawlers might not be able to access some content that users can, and this content won't be indexed.

There are several things we can do to improve the SEO of a React application. You're encouraged to explore these further on your own. 

### Server-Side Rendering

A standard React application is client-side, not server-side. The application is downloaded as a bundle on the client machine. However, if the user has JavaScript disabled (or a crawler has issues with JavaScript content), the site won't render properly. **Server-side rendering** means the server sends back fully rendered HTML for a page, and React then takes over that markup in the browser. Because the meaningful content arrives as HTML rather than being assembled by JavaScript after the fact, this can help ensure that web crawlers are able to index all of a site's content.

Server-side rendering can also help with another significant issue: sharing site content with others.

Let's say you want to share a virtual "page" of a React application with a friend. Without React Router, we can't do that. There is only one URL and we can only share that URL, not the exact configuration of clicks and user interaction we completed to arrive at the virtual page.

Adding routes with React Router doesn't solve this issue on its own. We are still downloading a bundle in our browser and all routes from React Router are stored there. If we tried to send a link to a friend, for instance _my-awesome-react-app.com/bio_, our friend won't be able to open that link. There will be a 404 error, because the server has no file at that path to hand back.

We can solve this problem by rendering our routes on the server, so that a request for _/bio_ returns real HTML for that page. In older resources, this approach is called building an "isomorphic" React application.

Web crawlers will also be able to crawl these URLs, improving our application's SEO.

For more information on this topic, see the [Rendering Strategies](https://reactrouter.com/start/framework/rendering) documentation at React Router.

Keep in mind that how you actually set up server-side rendering (or prerendering) depends on your build tool and hosting setup, not on React itself. Vite ships a low-level [server-side rendering](https://vite.dev/guide/ssr) API that a framework can build on top of, which is why most developers who need SSR reach for a framework rather than wiring it up by hand. We'll look at a few of those frameworks below.

### Title and Meta Tags

Even if we don't render our application on the server, we can still use React Router to create separate URLs. Ideally, each URL should have its own meta tags. This will allow search engines to do a better job indexing our site, and not just the entry point index page but other pages on our site as well.

The good news is that this doesn't depend on our build tool at all. Modern versions of React handle it natively: when we render a `<title>`, `<meta>`, or `<link>` element from inside a component, React automatically moves that element into the document's `<head>`, no matter how deeply nested the component is. That means a component representing a page can declare its own metadata right alongside its markup:

```tsx
function PortfolioPage() {
  return (
    <>
      <title>React Portfolio Site</title>
      <meta name="description" content="An awesome portfolio site" />
      <meta name="keywords" content="React, TypeScript, Firestore, portfolio" />
      <meta name="author" content="Your Name" />
      <h1>My Portfolio</h1>
    </>
  );
}
```

We haven't discussed meta tags in the past, but note the attributes `name` and `content`. `name` is the type of meta content (such as a description or keywords). `content` is the value for that type, and web crawlers can take this information and use it to determine how highly a site should be rated.

For more detail on this behavior, see the React documentation for [`<meta>`](https://react.dev/reference/react-dom/components/meta) and [`<title>`](https://react.dev/reference/react-dom/components/title).

If you ever work in an older React codebase that predates this feature, you'll likely run into a library that fills the same role. The best known is [react-helmet-async](https://github.com/staylor/react-helmet-async) (a maintained fork of the original `react-helmet`), which wraps title and meta tags in a `<Helmet>` element. It's worth recognizing when you see it, but for a new project you generally don't need it.

### React Frameworks

There are a handful of React frameworks that provide server-side rendering. These frameworks provide a whole toolset that can make bootstrapping React applications that much easier... that is, after you are past the learning curve. 

Here are some of the most popular React frameworks for web development: 

* [Next.js](https://nextjs.org/)
* [React Router](https://reactrouter.com/) (the same library we've used for routing also ships a full framework mode with server rendering built in)
* [Astro](https://astro.build/)

We highly recommend researching these frameworks to learn about the tradeoffs and benefits of each.

These are just a few approaches to improving SEO. Having an understanding of how SEO works, and how to improve it in a React application, is a valuable skill. Whether you're working for a small or large company, a development agency, or even creating side projects for friends and family members, these little details are essential to providing free advertising and traffic to websites.
