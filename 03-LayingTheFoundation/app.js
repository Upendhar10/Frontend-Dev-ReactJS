import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// # this is called as a React-element
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

    # Although creating a single child to a div seems simple in React, 
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
        - React provides an another way to create elements in React, i.e., JSX - JavaScriptXML (not Offical).
        - Using JSX, the idea is to write the most of the HTML using the JavaScript
        - JSX has a HTML like syntax but it should not be considered as JSX == (HTML inside JS)


    # Workflow : 
    - Babel converts JSX into React.createElement
    JSX => React.createElement => Object => HTML element [DOM]

    # Advantages :
    - JSX is more readable than React.createElement
    - JSX is maintainable
    - JSX is the syntactic sugar for React.createElement
    - Avoids repeative code
    - Developer friendly
    - JSX is not packages and so, no need to import it manually
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
