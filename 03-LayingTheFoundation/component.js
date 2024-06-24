import React from "react";
import ReactDOM from "react-dom/client";

/*
    # React Components :
        1. Functional component 
            -> Modern way 
            -> Just a javascript function that return a JSX expression or a react Element
        2. Class-based component -> legacy way/ older way

    - Name of the component starts with capital letter (not mandatory, just a good practise).
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

// # React Element

const reactElem = (
  <h1 id="Elem" key="12">
    ReactElem
  </h1>
);

// # Functional Component in React
// Functional Component is nothing but a Javascript function by the end
// React Element is nothing a Javascript Object by the end

const HeaderComponent1 = function () {
  return <h1>HeaderComponent1</h1>;
};

// # whenever we have multiple elements of HTML code we enclose them in the braceses (just like in HeaderComponent2)

const HeaderComponent2 = function () {
  return (
    <div>
      <h1>HeaderComponent2</h1>
      <h2>HeaderComponent2+</h2>
    </div>
  );
};

// # HeaderComponent3 is very much similar to HeaderComponent2, this syntax is from Js arrow function. (mostly we prefer this syntax)

const HeaderComponent3 = () => {
  return (
    <div>
      <h1>HeaderComponent3</h1>
      <h2>HeaderComponent3+</h2>
    </div>
  );
};

// # ReactElement in ReactComponent

// const title = <h1> Single title element</h1>         //  React element

const title = (
  <div>
    <h1>React Element</h1>
    <h2>Hello React</h2>
  </div>
);

// # ReactComponent in Other ReactComponent

// const Title = () => (
//     <h1>Title Functional Component</h1>
// )

const Title = () => {
  return <h1>Title Functional Component</h1>;
};

// Js
var x = 100;

// # Component composition Or Composing components => Nested components
// {Title ()} is same as <Title/>
// Same as Title and x , we can write any Js code in b/w {} in the Functional component.

const HeaderComponent4 = () => {
  return (
    <div>
      {console.log(10)}
      {title}
      <Title />
      <h1>HeaderComponent4</h1>
      <h2>HeaderComponent4+</h2>
    </div>
  );
};

// # rendering Functional component

// root.render(<HeaderComponent1 />);
// root.render(<HeaderComponent2 />);
// root.render(<HeaderComponent3 />);   // Not working here, may be because of return keyword
root.render(<HeaderComponent4 />);
// root.render(HeaderComponent4 ());
