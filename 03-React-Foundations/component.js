import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

//* React Element

const reactElem = (
  <h1 id="Elem" key="12">
    ReactElem
  </h1>
);

//* React Functional component

const HeaderComponent1 = function () {
  return <h1>HeaderComponent1</h1>;
};

// # whenever we have multiple elements of HTML code we enclose them in the braceses or div (just like in HeaderComponent2)

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

// ----------------------------------------------------------------------------------------

//* ReactElement in ReactComponent

const titleElem1 = <h1> Single title element</h1>; //  React element

const titleElem2 = (
  <div>
    <h1>React Element</h1>
    <h2>Hello React</h2>
  </div>
);

const TitleFunComp = () => {
  return <h1>Title Functional Component</h1>;
};

/*
  - Component composition Or Composing components => Nested components
  - {TitleFunComp ()} is same as <TitleFunComp/>
  - we can write any piece of Js expressions in b/w {} in the Functional component.
*/

const HeaderComponent4 = () => {
  return (
    <div>
      {console.log(10)}
      {titleElem1}
      {titleElem2}
      <TitleFunComp />
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
