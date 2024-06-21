# Chapter-1 : Inception

## Emmet

- Emmet is a tool developed for web-developers whose workflow depends on HTML/XML and CSS, but can be used with programming languages too.
- Most text editors out there allow you to store and re-use commonly used code chunks, called “snippets”.
- Emmet takes this snippets idea to a whole new level by allowing us to type shortcuts that are then expanded into full-fledged HTML markup and CSS rules based on an abbreviation structure.

## Library Vs Framework

- A library is a collection of packages that perform specific operations whereas, a framework contains the basic flow and architecture of an application.
- The major difference between them is the complexity.

  - Libraries contain a number of methods that a developer can just call whenever they write code.
  - The framework provides the flow of a software application and tells the developer, what it needs and calls the code provided by the developer as required.
  - ReactJs is library and Angular is Framework.

- please refer to this [article.](https://www.interviewbit.com/blog/framework-vs-library/)

## CDN

- A content delivery network (CDN) refers to a geographically distributed group of servers, that work together to provide fast delivery of Internet content.
- The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.

## Why is React known as React ?

- React is a JavaScript-based UI development library, designed to be a "declarative", efficient, and flexible for building user interfaces.
- Facebook developed react and it's open-source developer community maintains it.
- React is named React because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
- Simply put, It is named as React because of its ability to react to changes in data immediatelty.

## React Vs ReactDOM

- React is a JavaScript library for building User Interfaces whereas ReactDOM is also JavaScript library that allows React to interact with the DOM.
- The React package contains
  - React.createElement(),
  - React.Component,
  - React.Children, and
- other helpers related to elements and component classes, these can be thought as the universal helpers that you need to build components.
- The React-DOM package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().

## crossorigin Attribute

- The crossorigin attribute in script tag sets the mode of the request to an HTTP CORS Request.
- The purpose of crossorigin attribute is to share the resources from one domain to another domain.
- Basically, It is used to handle the CORS request, that checks whether it is safe to allow for sharing the resources from other domains.

  Syntax :

  ```
  <script crossorigin="anonymous|use-credentials">
  ```

## react.development.js Vs react.production.js files via CDN

- Development is the stage of an application before it has made public, while production is the term used for the same application when it was made public.
- Production build is several times (maybe 3-5x) faster than the Developement build.

## async Vs defer.

- The `async` attribute is a boolean attribute.

  - `async` attribute states that the script is downloaded in parallel(in the background) for parsing the page, and 'executed as soon as it is available' (do not block HTML DOM construction during downloading process) and don’t wait for anything.

  Syntax :

  ```
  <script src="demo_async.js" async></script>
  ```

- The `defer` attribute is a also a boolean attribute.

  - `defer` attribute states that the script is downloaded in parallel(in the background) for parsing the page, and 'executed after the page has finished parsing'(when browser finished DOM construction).
  - The `defer` attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.

  Syntax :

  ```
  <script src="demo_defer.js" defer></script>
  ```

## Module :

- `module` keyword allows you to import modules, which makes it easier to organize your code.

  1. Enables strict mode by default. This makes your code run faster, and reports more runtime errors instead of silently ignoring them.
  2. Execute your code only after the DOM has initialized, which makes DOM manipulation easier.
  3. Thanks to this, you won't need to listen to load / readystatechange / DOMContentLoaded events.
  4. Prevent top level variables from implicitly polluting the global namespace.
  5. Allow you to use top-level await in supported engines.
  6. Load and parse your code asynchronously, which improves load performance.

  ```
  <script type="module" src="main.js"></script> and place the tag inside <head>
  ```

- Unless you're supporting ancient legacy systems, always add type="module" to all your script tags:

  ```
  <script defer nomodule> can be used as a legacy fallback.
  ```
