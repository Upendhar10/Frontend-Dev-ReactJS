import React from "react";
import ReactDOM from "react-dom/client";

// # root element that attaches the React elements into the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// # this is an example of React-element using 'React.createElement()'
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "React Dev from Heading1"
);

// # this is an example of React-element created using 'JSX'
const heading2 = (
  // This is known as JSX Expression
  <h1 id="title" key="h1">
    React Dev from Heading2
  </h1>
);

const ReactElements = [heading1, heading2];

// # Creating nested elements in React
// root.render() accepts only one argument, so we create an array in order to render two elements
root.render(ReactElements);
