---
title: "📓 3.4.0.11 Adding Firebase to React"
day: weekend
id: 3-4-0-11-adding-firebase-to-react
hide_table_of_contents: true
---

We're ready to connect our Help Queue application to Firebase! To do this, we'll need to complete three steps:

* Install the `firebase` package.
* Move our Firebase configuration values into a `.env` file.
* Create a Firebase configuration file.

And that's it! 

At the end of this lesson, we'll briefly talk about the possibility of using a **binding library** that offers tooling specifically for React applications that implement Firebase.

Go ahead and get started by opening up your Help Queue repo from React Fundamentals.

## Step 1: Install the Firebase JavaScript SDK
---

First, we'll need to install the `firebase` package, the Firebase JavaScript SDK, in our project. This is the client library our app code imports from; it's a different tool from the Firebase CLI we'll install later to handle deployment.

```bash
npm install firebase@12
```

We're pinning a major version here so everyone in this section is working from the same install while we troubleshoot together; feel free to use a newer version on your own once you're comfortable with the basics. The modular API we'll use throughout these lessons (`initializeApp`, `getFirestore`, `getAuth`, and friends) has been stable since Firebase v9, so nothing here is tied to this exact version the way it would have been with Firebase's older, pre-v9 API.

## Step 2: Add `.env` File

First, head on over to your Help Queue project settings in Firebase to get the Firebase configuration settings. From the project homepage, select the gear icon at the top-left of the screen, click _Project settings_, and scroll down on the _General_ tab until you find the help-queue-web app that we created in the last lesson. In this section, you'll find a code snippet that has a `firebaseConfig` variable that looks something like this:

```js
const firebaseConfig = {
  apiKey: "YOUR-UNIQUE-CREDENTIALS",
  authDomain: "YOUR-PROJECT-NAME.firebaseapp.com",
  projectId: "YOUR-UNIQUE-PROJECT-NAME",
  storageBucket: "YOUR-UNIQUE-URL",
  messagingSenderId: "YOUR-UNIQUE-CREDENTIALS",
  appId: "YOUR-UNIQUE-APPID"
};
```

Note that we have replaced all the values of the key-value pairs with generic placeholders. That's because the values for each Firebase application will be different; beyond that, it's data specific to our project that we'd rather not commit to a public repository. To keep this information out of our source code, we need to set up a `.env` file and an environment variable for each unique key in the `firebaseConfig` object.

Fortunately, Vite has built-in support for `.env` files, so there's nothing extra to install. Under the hood it uses `dotenv`, the same package we used in Intermediate JavaScript to keep API keys out of our source code.

Before creating the `.env` file, open `.gitignore` in the root of your project and add `.env` on its own line:

```
.env
```

The `.gitignore` that Vite generated for us already contains `*.local`, which covers files like `.env.local`, but it does not cover a plain `.env` file. That's why we add it ourselves. Make sure this is done before staging and committing your changes.

Next, create a `.env` file in the root directory of the project. Environment variables can only hold strings, not objects. For that reason, each key-value pair in the `firebaseConfig` object needs to be broken down into its own line like this:

```bash title=".env"
VITE_FIREBASE_API_KEY=YOUR-UNIQUE-CREDENTIALS
VITE_FIREBASE_AUTH_DOMAIN=YOUR-PROJECT-NAME.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=YOUR-UNIQUE-PROJECT-ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR-PROJECT-NAME.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR-PROJECT-SENDER-ID
VITE_FIREBASE_APP_ID=YOUR-PROJECT-APP-ID
```

Replace the placeholder values above with the value of each key from your own Firebase application.

**Note:** It is very important that every environment variable we want to use in our components begins with `VITE_`. Vite only exposes variables with that prefix to our client-side code; anything else in the `.env` file is available to Vite's own configuration and build scripts, but never reaches the browser. That prefix requirement is a safeguard: because everything in our client-side code ends up in the bundle that gets shipped to the browser, exposing a value has to be a deliberate choice rather than an accident.

Vite loads a few other `.env` files as well. The one worth knowing about now is `.env.local`, which Vite loads in every case and which the generated `.gitignore` already excludes from version control. It's a good place for values you want on your own machine only. For our purposes, a single `.env` file is all we need.

:::caution[A note on security]
The `VITE_` prefix controls what gets exposed to the browser, but these particular values aren't truly secret. They'll end up in our app's compiled JavaScript bundle and are visible to anyone who inspects it. What the `.env` file does is keep them out of our source code repository, so they don't get committed to GitHub. This is why, for a real production app, you'd want proper Firestore security rules in place. The config keys alone don't protect your data.
:::

## Step 3: Create Configuration File and Initialize Firebase

Next, we'll create a file in our `src` directory called `firebase.ts`. This is where we'll initialize Firebase in our application and create a database reference. Note the `.ts` extension rather than `.tsx`: this file contains configuration code and no JSX. Firebase is not prescriptive about what we name our configuration file or where it is located, so it's up to us to pick a name and location that is sensible and intuitive.

Add the following code to the file:

```ts title="src/firebase.ts"
import { initializeApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
```

This file mirrors the Firebase configuration from your project settings, with three differences:

* First, all the values in our `firebaseConfig` come from environment variables, so the actual values stay out of our source code.
* Second, we annotate `firebaseConfig` with `FirebaseOptions`, the type Firebase provides for this object. If we misspell a key or leave a required one out, TypeScript tells us right away instead of letting the app fail at runtime.
* Third, we import the `getFirestore` function from `firebase/firestore` to use at the bottom of the file to get access to our Firestore database.

Now, let's work through `firebase.ts` from top to bottom:

1. We start by importing from `firebase/app` and `firebase/firestore`. Notice the `type` keyword on `FirebaseOptions`: it's a type rather than a value, and we mark it inline the same way we do when importing `TicketData`.
2. Then we define our Firebase config in `firebaseConfig`. This information points to the exact web application that we created within the Firebase Help Queue project. We read each value with `import.meta.env`, which is how Vite makes our `VITE_` prefixed environment variables available to our code.
3. Next, we call the `initializeApp` function, passing in our `firebaseConfig` as the argument. The `initializeApp` function creates and initializes an instance of our Firebase web app, which we save in the variable `app`. We can then use `app` to access a variety of services that are connected to our web app, like our Firestore database.
4. Finally, we call the `getFirestore` function, passing in `app`. This function returns the Firestore database instance that's associated with our `app`. We export this instance directly as `db`, a named export. We'll use this variable when we make requests to our database to read and update data.

At this point, we've successfully added Firebase and Firestore to our application. Woo-hoo! 

## Binding Libraries
---

Our next step is to actually start communicating with our database. For this, we have two options:

* Use Firebase's built-in functions and tools to communicate with our database.
* Use [an external library](https://firebaseopensource.com/platform/web/) that provides tools for using Firebase that are meant to work specifically with React. These libraries are often called **binding libraries**, as they help two separate libraries work together.

Binding libraries can provide some abstractions that can be confusing to folks who are new to React. Some of these abstractions are based on using React context, which we won't work with until the next course section. What's more, binding libraries can cause confusion about what tooling or helper function comes from where.

For these reasons, we're going to stick to learning how to use Firebase's built-in functions and tools. We'll also learn how to reference the firebase docs and we'll get continued practice using React's built-in tools, like the `useEffect` hook.

However, if you plan on using React and Firebase in your capstone project, we recommend exploring the available binding libraries for React and Firebase to see if they can improve your development experience, or move you past any issues that you run into when implementing a feature from Firebase.
