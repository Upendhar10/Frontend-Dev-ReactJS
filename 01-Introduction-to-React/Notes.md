# Chapter-1 : Introduction to React

## What is React ? Why is React named as React ?

- React is a JavaScript-based UI development library, designed to be a **declarative**, **efficient**, and **flexible** for building user interfaces.
- Facebook engineers developed React and it's open-source developer community maintains it.

- `React` is abruptly named `React` because **it “reacts” quickly to the
  changes without reloading the whole page**.
- It uses the **virtual DOM** to efficiently update parts of a webpage.
- It is built around components that **react** and update the DOM in response to changes made on the webpage by the user.

---

## Library Vs Framework

- A **library** is a collection of packages that perform specific operations whereas, a **framework** contains the basic workflow and architecture of an application.
- The major difference between them is the complexity.

  - A **library** is a collection of prewritten code that can be used to simplify tasks.
  - It provides numerious methods that a developer can just execute as per their requirements.
  - **Frameworks** make development easier by providing a common platform from which developers can control most of the software development process.
  - Framework states the developer, what it needs and executes the code provided by the developer as required.
  - **ReactJs is a library** and Express is a Framework.

### Realworld Example:

- Library is like **building your home from the ground up**.
- The house can be made in any style you prefer and the rooms can be arranged and decorated however you like.
- Framework, on the other hand, is like **buying a new home**.
- The house is already built, so you don’t have to worry about building problems, but you can’t choose how the rooms are arranged.

- please refer to this [article.](https://www.interviewbit.com/blog/framework-vs-library/)

---

## What are the issues with Javascript, that Libraries and frameworks solves ?

1. **Manual DOM Manipulation**

- Managing the DOM directly is verbose, error-prone, and hard to maintain, especially for dynamic UI updates.

2. **State Management**

- Keeping track of UI state becomes complex as applications grow, with scattered updates leading to inconsistencies.

3. **Reusability**

- Reusing UI components in vanilla JavaScript requires duplicating code, increasing maintenance overhead.

4. **Performance**

- Direct DOM updates are inefficient as they trigger reflows and repaints frequently.

5. **Complex Event Handling**

- Handling events in deeply nested structures is cumbersome, leading to tangled "spaghetti code."

6. **Boilerplate Code**

- Setting up projects with vanilla JavaScript involves repetitive tasks, like managing dependencies and configuring build tools.

---

## React Vs Vanilla JS:

- Vanilla JavaScript is suitable for small-scale, simple projects but struggles with scalability and maintainability.
- React.js addresses these issues by introducing a component-based architecture, declarative UI updates, and efficient state management, making it ideal for modern web applications.

### DOM Handling

- **Vanilla JS**: Directly manipulates the DOM.
- **React**: Uses a Virtual DOM for efficient updates.

### State Management

- **Vanilla JS**: Manual and scattered state tracking.
- **React**: Centralized state using hooks like `useState()` and `useReducer()`.

### Reusability

- **Vanilla JS**: No built-in component structure.
- **React**: Encourages reusable, declarative components.

### Event Handling

- **Vanilla JS**: Manual and verbose.
- **React**: Simplifies events with synthetic events like `onClick`.

### Learning Curve

- **Vanilla JS**: Basic syntax and concepts are simpler.
- **React**: Requires understanding JSX, components, props, and hooks.

### Setup and Ecosystem

- **Vanilla JS**: Minimal setup but lacks advanced tooling.
- **React**: Robust ecosystem with tools like Create React App and Next.js.

---

## Emmet

- **Emmet** is a tool built for web-developers whose workflow depends on HTML/XML and CSS, but can be used with programming languages too.
- Most text editors out there allow you to store and re-use commonly used code chunks, called **“snippets”**.
- Emmet takes this snippets idea to a whole new level by allowing us to type shortcuts that are then expanded into full-fledged HTML markup and CSS rules based on an abbreviation structure.

## CDN

- aka **Content Delivery Network** or **Content Distribution Network**
- A CDN refers to a geographically distributed group of servers, that work together to provide fast delivery of Internet content.

### Why are CDN used ?

- The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.
- Improved scalability and connectivity.
- In addition to facilitating end-users with faster load times, which translates into greater user -experience, a content delivery network also rewards web publishers with increased traffic,higher page views, etc.
- Decreased bandwidth consumption and Lower latency (latency is the lag between request and response).
- A CDN employs automation and data analytics tools that help identify firewall issues, Man in the middle threat, Distributed Denial of Service attacks.

- We can add React into our project by injecting CDN links in it (in
  an .html file).

## React Vs ReactDOM

- **React** is a JavaScript library **for building User Interfaces** whereas, **ReactDOM** is also JavaScript library that **allows React library to interact with the DOM**.
- The React package contains
  - `React.createElement()`,
  - `React.Component`,
  - `React.Fragment`, and
- other helpers related to elements and component classes, that can be thought as the universal helpers that we need to build components.
- The **React-DOM** package contains `ReactDOM.render()`, and **in react-dom/server we have server-side rendering support**.

## Crossorigin Attribute

- The crossorigin attribute in **script** tag sets the **mode of the request to an HTTP CORS Request**.
- The purpose of crossorigin attribute is **to share the resources from one domain to another domain**.
- Basically, It is used to handle the CORS request, that checks whether it is safe to allow for sharing the resources from other domains.

  Syntax :

  ```
  <script crossorigin="anonymous|use-credentials">
  ```

## react.development.js Vs react.production.js files via CDN

- **Development** is the stage of an application, before it has made public, while **production** is the term used for the same application when it was made public.

- **Production build is several times (maybe 3-5x) faster than the Developement build**.

### react.development.js

- `react.development.js` file is the core of React project, it contains the whole code of React which is written in JavaScript.
- It helps catch issues early by providing detailed error messages and warnings.

### react.production.js

- `react.production.js` file is a minified version of `react.development.js`, React interacts with the browser DOM.
- It ensures better performance, faster load times by stripping out unnecessary development features.

## Where should I put the `<script>` tag ? In the `<head>` or `<body>` ? and Why?

- The reason, it was recommended to put `<script>` tags at the end of the `<body>` was so that the scripts wouldn’t stop the browser from parsing the HTML.
- When a browser gets to a `<script>` tag, it stops everything else and loads the files for that `<script>` tag and then evaluates it.
- Thus, if you put `<script>` tag in the `<head>` or at the beginning of the `<body>`, then the user would have to wait longer for the HTML to render, possibly leaving them staring at a blank page for a while.

## `async` Vs `defer`.

- you can force the browser to download/evaluate JS files asynchronously
  by using the `async`/`defer` attribute of the `<script>` tag.
- Be advised, these attributes only work for `<script>` tags loading
  external JS files (i.e. the src attribute is pointing to a file).
- Both `async` and `defer` are boolean attributes used along with script tag to efficeintly load a web page.
- When we load a web page, there are 2 main things happens,

  1. HTML parsing. (building DOM tree)
  2. Loading of the Script files
     1. Fetching of the script files from the network/ server.
     2. Executing the script file line by line.

- ### Without any attribute

  ```
  *----HTML Parsing---------*                                                                         *-------HTML Parsing------*

                            *---fetch the script files----*---execute the script file line by line-----*
  ```

- ### With `async` attribute

  - **Execution order** - Scripts with `async` attributes are executed as soon as they are downloaded regardless of the order in which they appear on the document.
  - The `async` attribute doesnot gaurantee the order of execution of the script file.
  - **Loading behavior**
    - The browser will download the script in the background while continuing to parse the HTML document.
    - Once the script is downloaded, it will immediately execute, potentially interrupting the parsing of the document.
  - **Use case** - Best for scripts that are independent and do not
    rely on the DOM being fully parsed or other scripts being
    loaded.

- Syntax :

  ```
  <script src="demo_async.js" async></script>
  ```

  ```
  *----HTML Parsing---------------*                                           *-------HTML Parsing------*

    *---fetch the script files----*---execute the script file line by line-----*
  ```

- ### With defer attribute

- **Execution order** - Scripts with `defer` attribute are executed in the order they appear in the document, but only after the entire HTML document has been parsed.
- **Loading behavior** - The browser will download the scripts in
  the background while parsing the HTML document, but will
  `defer` execution of the script until after the HTML parsing
  is complete.
- **Use case** - Ideal for scripts that need to interact with fully
  parsed DOM or that depend on other scripts.

  - Syntax :

  ```
  <script src="demo_defer.js" defer></script>
  ```

  - Representation :

  ```
  *----------------------HTML Parsing-------------------------*

    *---fetch the script files----*                           *---execute the script file line by line-----*
  ```

## Module :

- `module` keyword allows us to import modules, which makes it easier to organize our code.

  1. Enables strict mode by default. This makes your code run faster, and reports more runtime errors instead of silently ignoring them.
  2. Executes code only after the DOM has initialized (similar to defer), which makes DOM manipulation easier.
  3. Thanks to this, we won't need to listen to load / readystatechange / DOMContentLoaded events.
  4. Prevent top level variables from implicitly polluting the global namespace.
  5. Allows to use top-level await in supported engines.
  6. Load and parse your code asynchronously, which improves load performance.

  ```
  <script type="module" src="main.js"></script> and place the tag inside <head>
  ```

- Unless you're supporting ancient legacy systems, always add type="module" to all your script tags:

  ```
  <script defer nomodule> can be used as a legacy fallback.
  ```

## Real DOM Vs Virtual DOM

### Real DOM

- Real DOM is the actual structure of the webpage.
- React updates complete document in the Real DOM.
- Real DOM is the actual web page rendered on the browser, Any changes made reflect directly on the complete webpage.

### Virtual DOM

- Virtual DOM is the virtual representation of the Real DOM.
- React updates the state changes in virtual DOM first and then it syncs with the Real DOM.
- Virtual DOM is just like a blueprint of a machine, we can make changes in the blueprint but those will not directly apply to the machine.
- Virtual DOM is a programming concept where a virtual representation of UI is kept in memory synced with Real DOM by a library such as React-dom and this process is called reconciliation.
