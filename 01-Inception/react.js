// # creating a child to a div using React

const cont3 = ReactDOM.createRoot(document.getElementById("cont3"));

const heading = React.createElement("h1", {}, "Frontend Dev");

// cont3.render(heading);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// # creating a nested div using React

const h1course = React.createElement("h1", { id: "course" }, "Frontend Dev");
const h2instructor = React.createElement("h2", { id: "instructor" }, "Akshay");

const CourseInfo = React.createElement("div", { id: "CourseInfo" }, [
  h1course,
  h2instructor,
]);

cont3.render(CourseInfo);
