// # using React.createElement

const h1 = React.createElement("h1", {}, "This is H1");
const h2 = React.createElement("h2", {}, "This is H2");
const h3 = React.createElement("h3", {}, "This is H3");

const NestedElemRCE = React.createElement("div", { class: "title" }, [
  h1,
  h2,
  h3,
]);

// # using JSX

const NestedELemJSX = function () {
  return (
    <div className="title">
      <h1>This is H1</h1>
      <h2>This is H2</h2>
      <h3>This is H3</h3>
    </div>
  );
};

// A component Inside other component

const Component1 = () => {
  return <div>{<NestedELemJSX />}</div>;
};
