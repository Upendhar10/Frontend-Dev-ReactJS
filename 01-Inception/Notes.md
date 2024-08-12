# Chapter-1 : Inception

## Emmet

- Emmet is a tool built for web-developers whose workflow depends on HTML/XML and CSS, but can be used with programming languages too.
- Most text editors out there allow you to store and re-use commonly used code chunks, called “snippets”.
- Emmet takes this snippets idea to a whole new level by allowing us to type shortcuts that are then expanded into full-fledged HTML markup and CSS rules based on an abbreviation structure.

## Library Vs Framework

- A library is a collection of packages that perform specific operations whereas, a framework contains the basic flow and architecture of an application.
- The major difference between them is the complexity.

  - Libraries contain a number of methods that a developer can just call whenever they write code.
  - The framework provides the flow of a software application and tells the developer, what it needs and calls the code provided by the developer as required.
  - ReactJs is a library and Express is a Framework.

- please refer to this [article.](https://www.interviewbit.com/blog/framework-vs-library/)

## CDN

- A content delivery network (CDN) refers to a geographically distributed group of servers, that work together to provide fast delivery of Internet content.
- The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.

## What is React ? Why is React known as React ?

- React is a JavaScript-based UI development library, designed to be a "declarative", efficient, and flexible for building user interfaces.
- Facebook engineers developed React and it's open-source developer community maintains it.
- React library is named as React, because of its ability to allow developers to "react" to changes in state and data within an application immediatelty.

## React Vs ReactDOM

- React is a JavaScript library for building User Interfaces whereas ReactDOM is also JavaScript library that allows React library to interact with the DOM.
- The React package contains
  - React.createElement(),
  - React.Component,
  - React.Children, and
- other helpers related to elements and component classes, these can be thought as the universal helpers that we need to build components.
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

- Both `async` and `defer` are boolean attributes used along with script tag to efficeintly load a web page.
- When we load a web page, there are 2 main things happens,

  1. HTML parsing. (building DOM tree)
  2. Loading of the Script files
     1. Fetching of the script files from the newtwork/ server.
     2. Executing the script file line by line.

- ### Without any attribute

  ```
  *----HTML Parsing---------*                                                                         *-------HTML Parsing------*

                            *---fetch the script files----*---execute the script file line by line-----*
  ```

- ### With async attribute

  - `async` attribute states that the script file is downloaded in parallel(in the background) for parsing the web page, and 'executed as soon as it is available' (do not block HTML DOM construction during downloading process) and don’t wait for anything.
  - The `async` attribute doesnot gaurantee the order of execution of the script file.
  - It is not recommended to use `async` attribute, when dealing with multiple script files that are inter related.

  Syntax :

  ```
  <script src="demo_async.js" async></script>
  ```

  ```
  *----HTML Parsing---------------*                                           *-------HTML Parsing------*

    *---fetch the script files----*---execute the script file line by line-----*
  ```

- ### With defer attribute

  - `defer` attribute states that the script is downloaded in parallel(in the background) for parsing the web page, and 'executed after the page has finished parsing'(when browser finished DOM construction).
  - The `defer` attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.
  - The `defer` attribute gaurantees the order of execution of the script file.
  - Hence it might be useful to use `defer` attribute, when dealing with multiple script files that are interrelated.

  - Syntax :

  ```
  <script src="demo_defer.js" defer></script>
  ```

  - Representation :

  ```
  *----------------------HTML Parsing-------------------------*

    *---fetch the script files----*                           *---execute the script file line by line-----*
  ```

- Note :

## Module :

- `module` keyword allows you to import modules, which makes it easier to organize your code.

  1. Enables strict mode by default. This makes your code run faster, and reports more runtime errors instead of silently ignoring them.
  2. Execute your code only after the DOM has initialized (similar to defer), which makes DOM manipulation easier.
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
