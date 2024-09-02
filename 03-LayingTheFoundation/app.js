import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// # this is an example of React-element
const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Frontend Dev"
);

/*
    # React.createElement => Object => HTML element [DOM]

    # Although creating a single child to a 'div' seems simple in React, 
    but the difficulty araises when we want to create a structure like below (nested div)

    <div>
        <h1>Hello World</h1>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
        </ul>
    </div>

    # Inorder to solve this problem, 
        - React provides an another way to create elements i.e., JSX - JavaScriptXML (not Offical).
        - Using JSX, the idea is to write most of the HTML using the JavaScript
        - JSX has a HTML like syntax but it should not be considered as JSX === (HTML inside JS), hence its is unOffficial

    # Workflow : 
    - Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines.
    - Babel converts JSX into React.createElement
      JSX => React.createElement => Object => HTML element [DOM]

    # Advantages :
    - JSX is the syntactic sugar for React.createElement
    - JSX eliminates repeative code, making it more readable and maintainable than React.createElement, as a result it is Developer friendly.
    - JSX is not a package and hence, there is no need to import it manually
    - JSX is powerful and secure (sanitaization)
*/

const heading2 = (
  // This is known as JSX Expression
  <h1 id="title" key="h1">
    Hello React
  </h1>
);

// # Creating nested elements in React
root.render([heading, heading2]);
